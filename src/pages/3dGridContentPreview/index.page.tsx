import React, { ReactElement } from 'react'

import SEO from '@/components/SEO'
import { Container } from '@/styles/pages/3dGridContentPreview'
import Grid from './components/Grid'
import { GlobalProvider } from './contexts'

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
    <GlobalProvider>
      <Container>
        <SEO
          title="3D Grid Content Preview"
          description={'Olá eu sou a description'}
        />
        <main>
          <div className="message">
            Por favor veja essa demo pelo Computador.
          </div>

          <div className="frame">
            <a href="https://github.com/codrops/3DGridContentPreview">GitHub</a>
          </div>
          <div className="content">
            <h2 className="content__title">
              <span
                className="content__title-line content__title-line--1"
                data-splitting
              >
                Maio/
              </span>
              <span
                className="content__title-line content__title-line--2"
                data-splitting
              >
                Junho
              </span>
            </h2>
            <Grid items={items} />
          </div>
        </main>
      </Container>
    </GlobalProvider>
  )
}
