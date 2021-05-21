import { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react'

import { gsap } from 'gsap'

import { getRandomNumber } from '../../utils'

import { useGlobal } from '../../contexts'

import GridItem from '../GridItem'
import { Container } from './styles'
import Preview, { PreviewContainer } from '../Preview'

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
  index: number
  title: string,
  DOM: {
    elem: MutableRefObject<HTMLDivElement>
    image: HTMLImageElement,
  }
  onMouseEnter(): void
  onMouseLeave(): void
  loopTransformAnimation(): void
  stopTransformAnimation(): void
}

interface PreviewItem {
  DOM: {
    elem: MutableRefObject<HTMLDivElement>,
      backCtrl: HTMLButtonElement,
      imgWrap: HTMLDivElement,
      image: HTMLImageElement,
      title: HTMLTitleElement,
      content: HTMLDivElement,
  }
}

let isContentOpen = false

function Grid({ items }: GridProps): React.ReactElement {
  const { mouseEnterItem, mouseLeaveItem } = useGlobal()
  const gridRef = useRef<HTMLDivElement>(null)

  const [itemsRefs, setItemsRefs] = useState<MutableRefObject<GridItem>[]>(() =>
    items.map(() => {
      const itemRef = useRef<GridItem>(null)

      return itemRef
    })
  )
  const [previewsRefs, setPreviewsRefs] = useState<MutableRefObject<PreviewItem>[]>(() =>
  items.map(() => {
    const prewviewRef = useRef<PreviewItem>(null)

    return prewviewRef
  })
)

  useEffect(() => {
    if (itemsRefs) {
      showItems()
      initEvents()
    }
  }, [itemsRefs])

  function showItems() {
    const items = itemsRefs.map(item => item.current.DOM.elem.current)

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
    const items = itemsRefs.map(item => ({
      ...item.current,
      DOM: {
        ...item.current.DOM,
        elem: item.current.DOM.elem.current
      }
    }))

    for (const [index, item] of items.entries()) {
      item.DOM.image.addEventListener('mouseenter', () => {
          item.onMouseEnter();
          mouseEnterItem(item.title)
          
          // emit('mouseEnterItem', item.title);
      });
      item.DOM.image.addEventListener('mouseleave', () => {
          item.onMouseLeave();
          mouseLeaveItem()
          // emit('mouseLeaveItem');
      });
      item.DOM.elem.addEventListener('click', ev => {
          ev.preventDefault();
          showContent(item);
      });
      previewsRefs[index].current.DOM.backCtrl.addEventListener('click', ev => {
          hideContent(item);
      });
    }
  }

  function showContent(item: {
      DOM: {
          elem: HTMLDivElement;
          image: HTMLImageElement;
      };
      index: number;
      title: string;
      onMouseEnter(): void;
      onMouseLeave(): void;
      loopTransformAnimation(): void;
      stopTransformAnimation(): void;
  }) {
    
    if (isContentOpen) {
      return false;
    }
    
    isContentOpen = true
    
    const preview = previewsRefs[item.index].current
    const items = itemsRefs.map(item => item.current.DOM.elem.current)
    const gridItems = itemsRefs.map(item => item.current)
    const title = document.querySelector('.content__title');
    const titleChars = [...title.querySelectorAll('.char')];
    
    // pointer events
    gridRef.current.classList.add('grid--inactive');

    // stop the rAF on every item
    for(const item of gridItems) {
      item.stopTransformAnimation();
    }
    
    gsap
      .timeline()
      .addLabel('start', 0)
      .to(items, {
        duration: 2,
        ease: 'expo.inOut',
        opacity: 0,
        //z: '+='+getRandomNumber(1000,5000),
        rotationX: 0,
        rotationY: 0,
        y: '-='+getRandomNumber(1000,1600),
        stagger: { amount: 0.2, grid: 'auto', from: 'start' }
      }, 'start')
      .to(titleChars, {
        duration: 1.5,
        ease: 'expo.inOut',
        opacity: 0,
        y: '-=100%',
        stagger: 0.03
      }, 'start+=0.1')
      .add(() => {
        console.log( preview.DOM.elem.current)
        preview.DOM.elem.current.classList.add('open');
      }, 'start+=0.1')

      // // Content/preview animation
      .to(preview.DOM.title, {
          duration: 1.5,
          ease: 'expo.inOut',
          opacity: 1,
          y: '0%',
          stagger: 0.05
      }, 'start+=0.6')
      .to([preview.DOM.imgWrap, preview.DOM.image], {
          duration: 1.5,
          ease: 'expo.inOut',
          opacity: 1,
          y: '0%',
          rotationX: 0
      }, 'start+=0.5')
      .to(preview.DOM.imgWrap, {
          duration: 1.5,
          ease: 'expo.inOut',
          opacity: 1
      }, 'start+=0.5')
      .to(preview.DOM.backCtrl, {
          duration: 1.5,
          ease: 'expo',
          startAt: {x: '20%'},
          x: '0%',
          opacity: 1
      }, 'start+=1.5')
      .to(preview.DOM.content, {
          duration: 1.5,
          ease: 'expo',
          startAt: {y: '20%'},
          y: '0%',
          opacity: 1
      }, 'start+=1.5');
}

  function hideContent(item) {
    if ( !isContentOpen ) {
      return false;
    }
    isContentOpen = false;

    const preview = previewsRefs[item.index].current
    const items = itemsRefs.map(item => item.current.DOM.elem.current)
    const gridItems = itemsRefs.map(item => item.current)
    const title = document.querySelector('.content__title');
    const titleChars = [...title.querySelectorAll('.char')];
    
    gsap
    .timeline({
        onComplete: () => {
            preview.DOM.elem.current.classList.remove('open');
            // pointer events
            gridRef.current.classList.remove('grid--inactive');
        }
    })
    .addLabel('start', 0)
    // Content/preview animation
    .to(preview.DOM.title, {
        duration: 1.5,
        ease: 'expo.inOut',
        opacity: 0,
        y: '100%',
        stagger: -0.04
    }, 'start')
    .to(preview.DOM.imgWrap, {
        duration: 1.5,
        ease: 'expo.inOut',
        y: '100%',
        rotationX: -20
    }, 'start')
    .to(preview.DOM.image, {
        duration: 1.5,
        ease: 'expo.inOut',
        y: '-100%'
    }, 'start')
    .to(preview.DOM.backCtrl, {
        duration: 1.5,
        ease: 'expo.inOut',
        x: '20%',
        opacity: 0
    }, 'start')
    .to(preview.DOM.content, {
        duration: 1.5,
        ease: 'expo.inOut',
        y: '50%',
        opacity: 0
    }, 'start')

    .to(titleChars, {
        duration: 1,
        ease: 'expo.inOut',
        opacity: 1,
        y: '0%',
        stagger: -0.03
    }, 'start+=0.4')
    .add(() => {
        // start the rAF on every item
        for(const item of gridItems) {
            // item.translationVals.y = item.rotationVals.y = item.rotationVals.x = 0;
            item.loopTransformAnimation();
        }
    }, 'start+=0.3')
    .to(items, {
        duration: 1,
        ease: 'expo',
        opacity: 1,
        startAt: {scale: 0.2, y: '-100%'},
        scale: 1,
        y: '0%',
        stagger: {amount: 0.2, grid: 'auto', from: 'start'}
    }, 'start+=1')
  }

  return (
    <>
      <Container className="grid" ref={gridRef}>
        {itemsRefs &&
          items.map((item, index) => {
            const itemRef = itemsRefs[index]
            return <GridItem key={index} ref={itemRef} {...{ item, index }} />
          })}
      </Container>
      <PreviewContainer className="preview">
        {
          items.map((item, index) => {
            const previewRef = previewsRefs[index]

            return (
              <Preview key={`${item.title}-${index}`} ref={previewRef} {...{ item, index }} />
            )
          }
        )}
      </PreviewContainer>
    </>
  )
}

export default Grid
