import { forwardRef, ReactNode, useEffect, useImperativeHandle, useRef } from 'react';

import {gsap} from 'gsap';

import { Container } from './styles';

interface PreviewProps {
  item: {
    title: string
    date: string
    address: string
    thumb: string
    fullImage: string
  }
  index: number
}

function Preview({ item , index}: PreviewProps, ref) {
  const previewRef = useRef<HTMLDivElement>(null) 
  const imgWrapRef = useRef<HTMLDivElement>(null) 
  const titleRef = useRef<HTMLDivElement>(null) 

  useEffect(() => {
    const preview = previewRef.current
    const imgWrap = imgWrapRef.current
    const title = titleRef.current
    
    // hide title chars
    gsap.set([...title.querySelectorAll('.char')], {opacity: 0, y: '100%'});

    // hide image element
    gsap.set(imgWrap, {y: '100%', rotationX: -20});
    gsap.set(imgWrap.querySelector('.preview__item-img'), {y: '-100%'});

    // hide back ctrl
    gsap.set(preview.querySelector('.preview__item-back'), {opacity: 0});

    // hide content
    gsap.set(preview.querySelector('.preview__item-content'), {opacity: 0});
  }, [])

  useImperativeHandle(ref, () => ({
    DOM: {
      elem: previewRef,
      backCtrl: previewRef.current.querySelector('.preview__item-back'),
      // image elements (outer and inner)
      imgWrap: imgWrapRef.current,
      image: imgWrapRef.current.querySelector('.preview__item-img'),
      // title
      title: titleRef.current,
      // Splitting will run on the title element
      // get the chars
      titleChars: [...titleRef.current.querySelectorAll('.char')],
      // content
      content: previewRef.current.querySelector('.preview__item-content'),
    }
  }))

  return (
    <Container ref={previewRef} 
      className="preview__item"
      id={`preview-${index}`}
    >
    <button className="preview__item-back unbutton">
      <span>Back</span>
    </button>
      <div ref={imgWrapRef} className="preview__item-imgwrap" >
        <div
          className="preview__item-img"
          style={{ backgroundImage: `url("${item.fullImage}")` }}
        ></div>
      </div>
      <h2 ref={titleRef} data-splitting className="preview__item-title">
        {item.title}
      </h2>
      <div className="preview__item-content">
        <div className="preview__item-meta">
          <span>{item.address}</span>
          <span>{item.date}</span>
        </div>
        <p className="preview__item-description">
          Had a barney with the inlaws a bit miffed pigeons in
          Trafalgar Square nigh on&apos;t goggle box chav hard
          cheese old boy, marvelous Moriarty pulled a right corker
          squiffy fork out, a tad stupendous chaps doing my head in
          ee bah gum.
        </p>
        <button className="preview__item-info unbutton">
          + Info
        </button>
        <button className="preview__item-button">
          Buy Tickets
        </button>
      </div>
    </Container>
  );
};

export default forwardRef(Preview);
