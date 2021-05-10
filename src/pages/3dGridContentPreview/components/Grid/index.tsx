import { MutableRefObject, useEffect, useRef, useState } from 'react'

import { gsap } from 'gsap'

import GridItem from '../GridItem'
import { Container } from './styles'

interface Items {
  title: string
  date: string
  address: string
  thumb: string
  fullImage: string
}
interface GridProps {
  items: Items[]
}

interface GridItem {
  elem: MutableRefObject<HTMLDivElement>
  getAlert(): void
}

function Grid({ items }: GridProps): React.ReactElement {
  const [itemsRefs, setItemsRefs] = useState<MutableRefObject<GridItem>[]>(() =>
    items.map(() => {
      const itemRef = useRef<GridItem>(null)

      return itemRef
    })
  )

  useEffect(() => {
    if (itemsRefs) {
      showItems()
      // initEvents()
    }
  }, [itemsRefs])

  function showItems() {
    const items = itemsRefs.map(item => item.current.elem.current)

    gsap
      .timeline()
      .addLabel('start', 0)
      .set(items, { scale: 1.5, opacity: 0 }, 0)
      .to(
        items,
        {
          duration: 1.2,
          ease: 'expo',
          scale: 1,
          stagger: { amount: 0.4, grid: 'auto', from: 'center' }
        },
        'start'
      )
      .to(
        items,
        {
          duration: 1.2,
          ease: 'power1',
          opacity: 1,
          stagger: { amount: 0.4, grid: 'auto', from: 'center' }
        },
        'start'
      )
  }

  function initEvents() {
    const items = itemsRefs.map(item => item.current.elem.current)

    for (const item of items) {
      console.log(item)
      // item.DOM.image.addEventListener('mouseenter', () => {
      //     item.onMouseEnter();
      //     emit('mouseEnterItem', item.title);
      // });
      // item.DOM.image.addEventListener('mouseleave', () => {
      //     item.onMouseLeave();
      //     emit('mouseLeaveItem');
      // });
      // item.DOM.el.addEventListener('click', ev => {
      //     ev.preventDefault();
      //     showContent(item);
      // });
      // item.preview.DOM.backCtrl.addEventListener('click', ev => {
      //     hideContent(item);
      // });
    }
  }

  return (
    <Container className="grid">
      {itemsRefs &&
        items.map((item, index) => {
          const itemRef = itemsRefs[index]
          return <GridItem key={index} ref={itemRef} {...{ item, index }} />
        })}
    </Container>
  )
}

export default Grid
