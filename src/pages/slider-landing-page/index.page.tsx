import React, { ReactElement, useRef, useEffect } from 'react'

import { gsap, Power4 } from 'gsap'

import SEO from '@/components/SEO'
import { Container } from '@/styles/pages/SliderLandingPage'
import Cursor from '@/components/Cursor'

const cols = 3
const parts = []

let current = 0
let playing = false

export default function SliderLandingPage(): ReactElement {
  const mainRef = useRef<HTMLDivElement>(null)

  const images = [
    'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
    'https://images.unsplash.com/photo-1544198365-f5d60b6d8190?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
    'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80'
  ]
  const animOptions = {
    duration: 2.3,
    ease: Power4.easeInOut
  }

  useEffect(() => {
    for (const i in images) {
      new Image().src = images[i]
    }

    window.addEventListener('keydown', function (e) {
      if (['ArrowDown', 'ArrowRight'].includes(e.key)) {
        go(1)
      } else if (['ArrowUp', 'ArrowLeft'].includes(e.key)) {
        go(-1)
      }
    })
  }, [])

  function go(dir: number) {
    if (!playing) {
      playing = true
      if (current + dir < 0) current = images.length - 1
      else if (current + dir >= images.length) current = 0
      else current += dir
      for (const p in parts) {
        const part = parts[p].current

        const next = document.createElement('div')
        next.className = 'section'

        const img = document.createElement('img')
        img.src = images[current]

        part.style.setProperty('--x', `${(-100 / cols) * Number(p)}vw`)
        next.appendChild(img)

        if ((Number(p) - Math.max(0, dir)) % 2) {
          down(part, next)
        } else {
          up(part, next)
        }
      }
    }
  }

  function up(part, next) {
    part.appendChild(next)
    gsap.to(part, { ...animOptions, y: -window.innerHeight }).then(function () {
      part.children[0].remove()
      gsap.to(part, { duration: 0, y: 0 })
    })
  }

  function down(part, next) {
    part.prepend(next)
    gsap.to(part, { duration: 0, y: -window.innerHeight })
    gsap.to(part, { ...animOptions, y: 0 }).then(function () {
      part.children[1].remove()
      playing = false
    })
  }

  return (
    <Container>
      <SEO
        title="Slider Landing Page"
        description={'Olá eu sou a description'}
      />

      <div id="main" ref={mainRef}>
        <h1>Solrachix</h1>
        <div className="content">
          <p>
            Você pode pressionar <kbd>▲</kbd> <kbd>▼</kbd> no teclado ou deslize
            para cima / para baixo para navegar. A roda do mouse também
            funciona.
          </p>
        </div>
        <div className="buttons">
          <button className="next" onClick={() => go(-1)}></button>
          <button className="prev" onClick={() => go(1)}></button>
        </div>

        {Array(cols)
          .fill(1)
          .map((_, col) => {
            const partRef = useRef(null)

            parts.push(partRef)

            return (
              <div ref={partRef} key={col} className="part">
                <div className="section">
                  <img
                    src={images[current]}
                    alt=""
                    style={{ left: `${(-100 / cols) * col}vw` }}
                  />
                </div>
              </div>
            )
          })}
      </div>

      <Cursor go={go} />
    </Container>
  )
}
