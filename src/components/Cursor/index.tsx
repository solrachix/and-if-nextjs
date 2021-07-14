import { ReactNode, useEffect, useRef } from 'react'

import { gsap } from 'gsap'

import * as styles from './styles'

let clicked = false
let startY
let endY

let scrollTimeout

function Cursor({ go }: { go(_: number): void }): React.ReactElement {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorFRef = useRef<HTMLDivElement>(null)

  let cursorX = 0
  let cursorY = 0
  let pageX = 0
  let pageY = 0
  const size = 8
  const sizeF = 36
  const followSpeed = 0.16

  useEffect(() => {
    const cursor = cursorRef.current

    if (cursor) {
      window.addEventListener('mousemove', function (e) {
        pageX = e.clientX
        pageY = e.clientY

        cursor.style.left = e.clientX - size / 2 + 'px'
        cursor.style.top = e.clientY - size / 2 + 'px'
      })

      loop()

      window.addEventListener('mousedown', mousedown, false)
      window.addEventListener('touchstart', mousedown, false)
      window.addEventListener(
        'touchmove',
        function (e) {
          if (clicked) {
            endY = e.touches[0].clientY || e.targetTouches[0].clientY
          }
        },
        false
      )
      window.addEventListener('touchend', mouseup, false)
      window.addEventListener('mouseup', mouseup, false)

      window.addEventListener('mousewheel', wheel, false)
      window.addEventListener('wheel', wheel, false)
    }
  }, [])

  function loop() {
    const cursor = cursorRef.current
    const cursorF = cursorFRef.current
    if (cursor && cursorF) {
      cursorX = lerp(cursorX, pageX, followSpeed)
      cursorY = lerp(cursorY, pageY, followSpeed)

      cursorF.style.top = cursorY - sizeF / 2 + 'px'
      cursorF.style.left = cursorX - sizeF / 2 + 'px'
      requestAnimationFrame(loop)
    }
  }

  function mousedown(e) {
    const cursor = cursorRef.current
    const cursorF = cursorFRef.current

    if (cursor && cursorF) {
      gsap.to(cursor, { scale: 4.5 })
      gsap.to(cursorF, { scale: 0.4 })

      clicked = true
      startY = e.clientY || e.touches[0].clientY || e.targetTouches[0].clientY
    }
  }

  function mouseup(e) {
    const cursor = cursorRef.current
    const cursorF = cursorFRef.current

    if (cursor && cursorF) {
      gsap.to(cursor, { scale: 1 })
      gsap.to(cursorF, { scale: 1 })

      endY = e.clientY || endY
      if (clicked && startY && Math.abs(startY - endY) >= 40) {
        go(!Math.min(0, startY - endY) ? 1 : -1)
        clicked = false
        startY = null
        endY = null
      }
    }
  }

  function wheel(e) {
    clearTimeout(scrollTimeout)
    setTimeout(function () {
      if (e.deltaY < -40) {
        go(-1)
      } else if (e.deltaY >= 40) {
        go(1)
      }
    })
  }

  return (
    <>
      <styles.Cursor ref={cursorRef} className="cursor" size={size} />
      <styles.CursorF ref={cursorFRef} className="cursor-f" size={sizeF} />
    </>
  )
}

function lerp(start: number, end: number, amount: number) {
  return (1 - amount) * start + amount * end
}

export default Cursor
