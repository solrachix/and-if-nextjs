import React, { ReactElement } from 'react'

import SEO from '@/components/SEO'
import { Container } from '@/styles/pages/3dGridContentPreview'

const items = [
  {
    title: 'Mohanneles',
    date: '15/05/2025',
    address: 'Acapulco, Mexico',
    thumb: '/images/pages/3dGridContentPreview/thumbs/1.jpg',
    fullImage: '/images/pages/3dGridContentPreview/full/1.jpg'
  },
  {
    title: 'Procody X',
    date: '15/05/2025',
    address: 'Acapulco, Mexico',
    thumb: '/images/pages/3dGridContentPreview/thumbs/2.jpg',
    fullImage: '/images/pages/3dGridContentPreview/full/2.jpg'
  },
  {
    title: 'Evenner',
    date: '15/05/2025',
    address: 'Acapulco, Mexico',
    thumb: '/images/pages/3dGridContentPreview/thumbs/3.jpg',
    fullImage: '/images/pages/3dGridContentPreview/full/3.jpg'
  },
  {
    title: 'M-Dignate',
    date: '15/05/2025',
    address: 'Acapulco, Mexico',
    thumb: '/images/pages/3dGridContentPreview/thumbs/4.jpg',
    fullImage: '/images/pages/3dGridContentPreview/full/4.jpg'
  },
  {
    title: 'Boxtony',
    date: '15/05/2025',
    address: 'Acapulco, Mexico',
    thumb: '/images/pages/3dGridContentPreview/thumbs/5.jpg',
    fullImage: '/images/pages/3dGridContentPreview/full/5.jpg'
  },
  {
    title: 'Ruthfull',
    date: '15/05/2025',
    address: 'Acapulco, Mexico',
    thumb: '/images/pages/3dGridContentPreview/thumbs/6.jpg',
    fullImage: '/images/pages/3dGridContentPreview/full/6.jpg'
  },
  {
    title: 'La Facuoup',
    date: '15/05/2025',
    address: 'Acapulco, Mexico',
    thumb: '/images/pages/3dGridContentPreview/thumbs/7.jpg',
    fullImage: '/images/pages/3dGridContentPreview/full/7.jpg'
  },
  {
    title: 'Medivict',
    date: '15/05/2025',
    address: 'Acapulco, Mexico',
    thumb: '/images/pages/3dGridContentPreview/thumbs/8.jpg',
    fullImage: '/images/pages/3dGridContentPreview/full/8.jpg'
  },
  {
    title: 'Steeplump',
    date: '15/05/2025',
    address: 'Acapulco, Mexico',
    thumb: '/images/pages/3dGridContentPreview/thumbs/9.jpg',
    fullImage: '/images/pages/3dGridContentPreview/full/9.jpg'
  },
  {
    title: 'Resson',
    date: '15/05/2025',
    address: 'Acapulco, Mexico',
    thumb: '/images/pages/3dGridContentPreview/thumbs/10.jpg',
    fullImage: '/images/pages/3dGridContentPreview/full/10.jpg'
  },
  {
    title: 'Atinkers',
    date: '15/05/2025',
    address: 'Acapulco, Mexico',
    thumb: '/images/pages/3dGridContentPreview/thumbs/11.jpg',
    fullImage: '/images/pages/3dGridContentPreview/full/11.jpg'
  },
  {
    title: 'Twinhouse',
    date: '15/05/2025',
    address: 'Acapulco, Mexico',
    thumb: '/images/pages/3dGridContentPreview/thumbs/12.jpg',
    fullImage: '/images/pages/3dGridContentPreview/full/12.jpg'
  },
  {
    title: 'Lonstrian',
    date: '15/05/2025',
    address: 'Acapulco, Mexico',
    thumb: '/images/pages/3dGridContentPreview/thumbs/13.jpg',
    fullImage: '/images/pages/3dGridContentPreview/full/13.jpg'
  },
  {
    title: 'Satinge',
    date: '15/05/2025',
    address: 'Acapulco, Mexico',
    thumb: '/images/pages/3dGridContentPreview/thumbs/14.jpg',
    fullImage: '/images/pages/3dGridContentPreview/full/14.jpg'
  },
  {
    title: 'Vikins',
    date: '15/05/2025',
    address: 'Acapulco, Mexico',
    thumb: '/images/pages/3dGridContentPreview/thumbs/15.jpg',
    fullImage: '/images/pages/3dGridContentPreview/full/15.jpg'
  },
  {
    title: 'Choulder V',
    date: '15/05/2025',
    address: 'Acapulco, Mexico',
    thumb: '/images/pages/3dGridContentPreview/thumbs/16.jpg',
    fullImage: '/images/pages/3dGridContentPreview/full/16.jpg'
  }
]

export default function Home(): ReactElement {
  return (
    <Container>
      <SEO
        title="3D Grid Content Preview"
        description={'Olá eu sou a description'}
      />
      <main>
        <div className="message">
          Please view this demo on a desktop to see the effect.
        </div>
        <div className="frame">
          <div className="frame__title-wrap">
            <h1 className="frame__title">
              3D Grid Interaction with Content Preview
            </h1>
          </div>
          <div className="frame__links">
            <a href="https://tympanus.net/Development/3DGridContentPreview/">
              Previous demo
            </a>
            <a href="https://tympanus.net/codrops/?p=54253">Article</a>
            <a href="https://github.com/codrops/3DGridContentPreview">GitHub</a>
          </div>
        </div>
        <div className="content">
          <h2 className="content__title">
            <span
              className="content__title-line content__title-line--1"
              data-splitting
            >
              July/
            </span>
            <span
              className="content__title-line content__title-line--2"
              data-splitting
            >
              August
            </span>
          </h2>

          <div className="grid">
            {items.map((item, index) => (
              <a
                key={index}
                href={`#preview-${index + 1}`}
                className={`grid__item pos-${index + 1}`}
                data-title={item.title}
              >
                <div
                  className="grid__item-img"
                  style={{ backgroundImage: `url("${item.thumb}")` }}
                ></div>
              </a>
            ))}
          </div>

          <div className="preview">
            {items.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="preview__item"
                id={`preview-${index}`}
              >
                <button className="preview__item-back unbutton">
                  <span>Back</span>
                </button>
                <div className="preview__item-imgwrap">
                  <div
                    className="preview__item-img"
                    style={{ backgroundImage: `url("${item.fullImage}")` }}
                  ></div>
                </div>
                <h2 data-splitting className="preview__item-title">
                  {item.title}
                </h2>
                <div className="preview__item-content">
                  <div className="preview__item-meta">
                    <span>{item.address}</span>
                    <span>{item.date}</span>
                  </div>
                  <p className="preview__item-description">
                    Had a barney with the inlaws a bit miffed pigeons in
                    Trafalgar Square nigh on&apos;t goggle box chav hard cheese
                    old boy, marvelous Moriarty pulled a right corker squiffy
                    fork out, a tad stupendous chaps doing my head in ee bah
                    gum.
                  </p>
                  <button className="preview__item-info unbutton">
                    + Info
                  </button>
                  <button className="preview__item-button">Buy Tickets</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <div className="cursor">
        <svg className="cursor__svg" width="80" height="80" viewBox="0 0 80 80">
          <circle
            vectorEffect="non-scaling-stroke"
            className="cursor__svg-circle"
            cx="40"
            cy="40"
            r="20"
          />
        </svg>
        <span className="cursor__text"></span>
      </div>
    </Container>
  )
}
