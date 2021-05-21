import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react'

import {
  map,
  lerp,
  getMousePos,
  calcWinsize,
  getRandomNumber
} from '../../utils'

import { gsap } from 'gsap'

import { Container } from './styles'

interface GridItemProps {
  item: {
    title: string
    date: string
    address: string
    thumb: string
    fullImage: string
  }
  index: number
}

interface TimelineHover {
  out: false | gsap.core.Timeline
  in: false | gsap.core.Timeline
}

let hoverTimeout: NodeJS.Timeout

let requestId

const translationVals = { x: 0, y: 0 }
const rotationVals = { x: 0, y: 0 }

function GridItem({ item, index }: GridItemProps, ref): React.ReactElement {
  const gridRef = useRef<HTMLAnchorElement>(null)

  const [winsize, setWinsize] = useState<{
    width: number
    height: number
  }>()
  const [mousePos, setMousePos] = useState<{
    x: number
    y: number
  }>()
  const [configs, setConfigs] = useState({
    rY: 0,
    rX: 0,
    tZ: 0,
    rxstart: 5,
    rystart: 10,
    xstart: getRandomNumber(70, 100),
    ystart: getRandomNumber(40, 65)
  })
  const [isLeft, setIsLeft] = useState(false)
  const [isTop, setIsTop] = useState(false)
  // const [requestId, setRequestId] = useState(undefined)
  const [timelineHover, setTimelineHover] = useState<TimelineHover>({
    out: false,
    in: false
  })

  useEffect(() => {
    setWinsize(calcWinsize())
    window.addEventListener('resize', () => setWinsize(calcWinsize()))
    window.addEventListener('mousemove', ev => setMousePos(getMousePos(ev)))
  }, [])

  useEffect(() => {
    if (winsize) {
      layout()
    }
  }, [winsize])

  useEffect(() => {
    gsap.set(gridRef.current, {
      rotationX: configs.rX,
      rotationY: configs.rY,
      z: configs.tZ
    })
  }, [configs])
  useEffect(() => {
    if (mousePos && winsize) {
      loopTransformAnimation()
    }
  }, [mousePos, winsize])

  // useEffect(() => {
  //   if (requestId) {
  //     window.cancelAnimationFrame(requestId);
  //     setRequestId(undefined)
  //   } else if (mousePos && winsize) {
  //     setRequestId(requestAnimationFrame(() => move()))
  //   }
  // }, [requestId, mousePos, winsize])
  useImperativeHandle(ref, () => ({
    title: item.title,
    index,
    DOM: {
      elem: gridRef,
      image: gridRef?.current?.querySelector('.grid__item-img')
    },
    onMouseEnter() {
      hoverTimeout = setTimeout(() => {
        // this.stopTransformAnimation();

        if (timelineHover.out) timelineHover.out.kill()

        const image = gridRef.current.querySelector('.grid__item-img')

        setTimelineHover({
          ...timelineHover,
          in: gsap.timeline().addLabel('start', 0).to(
            image,
            {
              duration: 0.8,
              ease: 'expo',
              scale: 1.1
            },
            'start'
          )
        })
      }, 10)
    },
    onMouseLeave() {
      // this.loopTransformAnimation();

      if (hoverTimeout) {
        clearTimeout(hoverTimeout)
      }

      if (timelineHover.in) timelineHover.in.kill()

      const image = gridRef.current.querySelector('.grid__item-img')

      setTimelineHover({
        ...timelineHover,
        out: gsap.timeline().to(image, {
          duration: 1,
          ease: 'power4',
          x: 0,
          y: 0,
          scale: 1
        })
      })
    },
    loopTransformAnimation,
    stopTransformAnimation
  }))

  function layout() {
    const rect = gridRef?.current?.getBoundingClientRect()

    const isLeft = rect.left + rect.width / 2 < winsize.width / 2
    const isTop = rect.top + rect.height / 2 < winsize.height / 2
    // check if the element is position on the left/top side of the viewport
    setIsLeft(isLeft)
    setIsTop(isTop)

    setConfigs({
      ...configs,
      rY: isLeft
        ? map(
            rect.left + rect.width / 2,
            0,
            winsize.width / 2,
            configs.rystart,
            0
          )
        : map(
            rect.left + rect.width / 2,
            winsize.width / 2,
            winsize.width,
            0,
            -configs.rystart
          ),
      rX: isTop
        ? map(
            rect.top + rect.height / 2,
            0,
            winsize.height / 2,
            -configs.rxstart,
            0
          )
        : map(
            rect.top + rect.height / 2,
            winsize.height / 2,
            winsize.height,
            0,
            configs.rxstart
          ),
      tZ: isLeft
        ? map(rect.left + rect.width / 2, 0, winsize.width / 2, -200, -600)
        : map(
            rect.left + rect.width / 2,
            winsize.width / 2,
            winsize.width,
            -600,
            -200
          )
    })
  }
  function loopTransformAnimation() {
    if (!requestId) {
      requestId = requestAnimationFrame(() => move())
    }
  }
  // stop the render loop animation (rAF)
  function stopTransformAnimation() {
    if (requestId) {
      window.cancelAnimationFrame(requestId)
      requestId = undefined
    }
  }

  function move() {
    requestId = undefined
    // Calculate the amount to move.
    // Using linear interpolation to smooth things out.
    // Translation values will be in the range of [-start, start] for a cursor movement from 0 to the window's width/height
    translationVals.x = lerp(
      translationVals.x,
      map(mousePos.x, 0, winsize.width, -configs.xstart, configs.xstart),
      0.04
    )
    translationVals.y = lerp(
      translationVals.y,
      map(mousePos.y, 0, winsize.height, -configs.ystart, configs.ystart),
      0.04
    )
    // same for the rotations
    rotationVals.x = isTop
      ? lerp(
          rotationVals.x,
          map(mousePos.y, 0, winsize.height / 2, configs.rxstart, 0),
          0.04
        )
      : lerp(
          rotationVals.x,
          map(
            mousePos.y,
            winsize.height / 2,
            winsize.height,
            0,
            -configs.rxstart
          ),
          0.04
        )
    rotationVals.y = isLeft
      ? lerp(
          rotationVals.y,
          map(mousePos.x, 0, winsize.width / 2, -configs.rystart, 0),
          0.04
        )
      : lerp(
          rotationVals.y,
          map(mousePos.x, winsize.width / 2, winsize.width, 0, configs.rystart),
          0.04
        )

    gsap.set(gridRef.current, {
      x: -translationVals.x,
      y: -translationVals.y,
      rotationX: -configs.rX - rotationVals.x,
      rotationY: -configs.rY - rotationVals.y
    })

    loopTransformAnimation()
  }
  return (
    <Container
      ref={gridRef}
      href={`#preview-${index + 1}`}
      className={`grid__item pos-${index + 1}`}
      data-title={item.title}
    >
      <div
        className="grid__item-img"
        style={{ backgroundImage: `url("${item.thumb}")` }}
      ></div>
    </Container>
  )
}

export default forwardRef(GridItem)
