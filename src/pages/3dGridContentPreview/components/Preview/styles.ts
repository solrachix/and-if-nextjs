import styled from 'styled-components'

export const PreviewContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  position: relative;
  pointer-events: none;
`
export const Container = styled.div`
  .preview__item {
    perspective: 1000px;
  }

  perspective: 1000px;
  position: absolute;
  overflow: hidden;
  height: 0;
  opacity: 0;

  &.open {
    position: relative;
    margin: 0 auto;
    padding: 0 5vw;
    display: grid;
    grid-template-rows: auto auto auto;
    grid-template-columns: 50% 50%;
    grid-template-areas:
      'preview-back preview-back'
      'preview-img preview-title'
      '... preview-content';

    perspective: 1000px;
    opacity: 1;

    pointer-events: auto;
  }

  .preview__item-back {
    grid-area: preview-back;
    justify-self: start;
    font-size: 0.857rem;
    text-transform: uppercase;
    font-weight: 500;
    padding-left: 90px;
    margin-bottom: 1rem;
    background: url('/images/pages/3dGridContentPreview/arrow.svg') no-repeat 0%
      50%;
  }
  .preview__item-title {
    font-family: dystopian, sans-serif;
    font-size: clamp(1.5rem, 12vw, 20vh);
    line-height: 12vw;

    margin: 0;
    padding-left: 1rem;
    opacity: 0;

    grid-area: preview-title;
    grid-column-start: 1;
    align-self: center;

    position: relative;
    overflow: hidden;
    pointer-events: none;
  }

  .preview__item-imgwrap {
    width: 100px;
    height: 150px;
    border-radius: 10px;
    overflow: hidden;
    grid-area: preview-img;
    transform-origin: 50% 100%;
  }

  .preview__item-img {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: 50% 50%;
  }

  .preview__item-content {
    grid-area: preview-content;
    max-width: calc(1100px - 80vh);
    min-height: 440px;
    line-height: 1.3;
  }

  .preview__item-meta {
    color: var(--color-text-alt);
    text-transform: uppercase;
    font-size: 0.857rem;
    padding: 1rem 0 0;
  }

  .preview__item-meta span {
    display: block;
  }

  .preview__item-info {
    display: block;
    color: var(--color-link);
    margin: 1rem 0;
  }

  .preview__item-button {
    color: #fff;
    border: 0;
    border-radius: 2rem;
    text-transform: uppercase;
    font: inherit;
    font-size: 0.875rem;
    font-weight: 500;
    background: #000;
    padding: 1rem 2rem;
    display: inline-block;
    cursor: pointer;
    margin-bottom: 1rem;
  }

  .preview__item-button:hover,
  .preview__item-button:active,
  .preview__item-button:focus {
    outline: none;
    background: var(--color-link);
  }

  @media screen and (min-width: 53em) {
    height: 100%;
    width: 80vw;
    grid-template-columns: 47% 53%;
    grid-template-rows: minmax(max(5rem, 18vh), 1fr) auto auto 1fr;
    grid-template-areas:
      '... ...'
      'preview-back ...'
      'preview-title preview-title'
      'preview-img preview-content';

    .preview__item-title {
      justify-self: center;
      padding: 0;
      line-height: 100%;
    }

    .preview__item-meta {
      padding: 1rem 0;
    }

    .preview__item-info {
      margin: 1rem 0 3rem;
    }

    .preview__item-imgwrap {
      width: 100%;
      height: 100%;
      grid-row-start: 3;
      border-radius: 10px 10px 0 0;
    }

    .preview__item-content {
      padding: 0 0 0 4rem;
    }
  }
`
