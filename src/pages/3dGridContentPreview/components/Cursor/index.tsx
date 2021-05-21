import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { Container } from './styles'

import { gsap } from 'gsap'
import { lerp, getMousePos } from '../../utils'

let mouse = { x: 0, y: 0 }

const renderedStyles = {
  tx: { previous: 0, current: 0, amt: 0.2 },
  ty: { previous: 0, current: 0, amt: 0.2 },
  txText: { previous: 0, current: 0, amt: 0.1 },
  tyText: { previous: 0, current: 0, amt: 0.1 },
  scale: { previous: 1, current: 1, amt: 0.15 }
}

function Cursor(_, ref): React.ReactElement {
  const cursorRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)

  const [bounds, setBounds] = useState<DOMRect>(null)

  useEffect(() => {
    window.addEventListener('mousemove', ev => (mouse = getMousePos(ev)))

    setBounds(svgRef.current.getBoundingClientRect())
  }, [])

  useEffect(() => {
    if (bounds) {
      window.addEventListener('mousemove', onMouseMoveEv)
    }
  }, [bounds])

  useImperativeHandle(ref, () => ({
    DOM: {
      elem: cursorRef
    },
    enter,
    leave
  }))


  function onMouseMoveEv() {
    const cursor = cursorRef.current

    renderedStyles.tx.previous = renderedStyles.tx.current = renderedStyles.txText.previous = renderedStyles.txText.current =
      mouse.x - bounds.width / 2
    renderedStyles.ty.previous = renderedStyles.ty.current = renderedStyles.tyText.previous = renderedStyles.tyText.current =
      mouse.y - bounds.height / 2

    gsap.to(cursor, { duration: 0.9, ease: 'Power3.easeOut', opacity: 1 })
    requestAnimationFrame(() => render())
    window.removeEventListener('mousemove', onMouseMoveEv)
  }

  function enter(text: string) {
    textRef.current.innerText = text

    renderedStyles.scale.current = 1.5
  }
  function leave() {
    textRef.current.innerText = ''

    renderedStyles.scale.current = 1
  }

  function render() {
    const cursor = cursorRef.current
    const svg = svgRef.current
    const text = textRef.current

    if (!cursor || !svg || !text) return false

    const circle = svg.querySelector('.cursor__svg-circle') as SVGElement

    renderedStyles.tx.current = renderedStyles.txText.current =
      mouse.x - bounds.width / 2
    renderedStyles.ty.current = renderedStyles.tyText.current =
      mouse.y - bounds.height / 2

    for (const key in renderedStyles) {
      renderedStyles[key].previous = lerp(
        renderedStyles[key].previous,
        renderedStyles[key].current,
        renderedStyles[key].amt
      )
    }

    // cursor.style.transform = `translateX(${renderedStyles.tx.previous}px) translateY(${renderedStyles.ty.previous}px)`
    svg.style.transform = `translateX(${renderedStyles.tx.previous}px) translateY(${renderedStyles.ty.previous}px)`
    text.style.transform = `translateX(${renderedStyles.txText.previous}px) translateY(${renderedStyles.tyText.previous}px)`
    circle.style.transform = `scale(${renderedStyles.scale.previous})`

    requestAnimationFrame(() => render())
  }

  return (
    <Container
      ref={cursorRef}
      className="cursor"
      style={{
        opacity: 0
      }}
    >
      <svg
        ref={svgRef}
        className="cursor__svg"
        width="80"
        height="80"
        viewBox="0 0 80 80"
      >
        <circle
          vectorEffect="non-scaling-stroke"
          className="cursor__svg-circle"
          cx="40"
          cy="40"
          r="20"
        />
      </svg>
      <span ref={textRef} className="cursor__text"></span>
    </Container>
  )
}

export default forwardRef(Cursor)
