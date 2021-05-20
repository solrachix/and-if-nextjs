import styled, { css } from 'styled-components'

export const Container = styled.div`
  --color-text: #000;
  --color-text-alt: #848484;
  --color-title: #d3d3d3;
  --color-bg: #dcdcdc;
  --color-link: #e3154d;
  --color-link-hover: #000;
  --cursor-stroke: #e3154d;
  --cursor-fill: none;
  --cursor-stroke-width: 1px;
  --cursor-text: #000;

  margin: 0;

  color: var(--color-text);
  background-color: var(--color-bg);

  font-family: tenon, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica,
    Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  :root {
    font-size: 18px;
  }

  main {
    height: 100%;
    width: 100%;
    position: relative;
  }

  a {
    text-decoration: underline;
    color: var(--color-link);
    outline: none;
  }

  a:hover,
  a:focus {
    text-decoration: none;
    color: var(--color-link-hover);
    outline: none;
  }

  .unbutton {
    background: none;
    border: 0;
    padding: 0;
    margin: 0;
    font: inherit;
    cursor: pointer;
  }

  .unbutton:focus {
    outline: none;
  }

  /* Page Loader */
  .loading::before,
  .loading::after {
    content: '';
    position: fixed;
    z-index: 1000;
  }

  .loading::before {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--color-bg);
  }

  .loading::after {
    top: 50%;
    left: 50%;
    width: 60px;
    height: 60px;
    margin: -30px 0 0 -30px;
    border-radius: 50%;
    opacity: 0.4;
    background: var(--color-link);
    animation: loaderAnim 0.7s linear infinite alternate forwards;
  }

  @keyframes loaderAnim {
    to {
      opacity: 1;
      transform: scale3d(0.5, 0.5, 1);
    }
  }

  .message {
    position: relative;
    z-index: 100;
    background: var(--color-text);
    color: var(--color-bg);
    padding: 0.5rem;
    font-size: 0.75rem;
    position: relative;
  }

  .no-select {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .frame {
    padding: 1rem 5vw;
    position: relative;
    z-index: 1000;
  }

  .frame__title {
    font-size: 1rem;
    margin: 0 0 1rem;
    font-weight: normal;
  }

  .frame__links {
    display: inline;
  }

  .frame__links a:not(:last-child),
  .frame__demos a:not(:last-child) {
    margin-right: 1rem;
  }

  .frame__demos {
    margin: 1rem 0;
  }

  .frame__demo--current,
  .frame__demo--current:hover {
    color: var(--color-text);
    text-decoration: none;
  }

  .content {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 300px;
    justify-content: center;
    position: relative;
    align-items: center;
  }

  .char {
    will-change: transform;
  }

  .content__title {
    position: fixed;
    /* position: relative; */

    margin: 0;
    
    pointer-events: none;

    color: var(--color-title);
    
    font-size: 12vw;
    line-height: 1.2;
    text-transform: uppercase;
  }

  .content__title-line {
    display: block;
    position: relative;
    overflow: hidden;
    line-height: 1;
    
    .content__title-line--1 {
      margin-left: -5vw;
    }

    .content__title-line--2 {
      margin-right: -5vw;
    }
  }



  .cursor {
    display: none;
  }

  @media screen and (min-width: 53em) {
    html,
    body,
    main {
      overflow: hidden;
    }
    .message {
      display: none;
    }
    .frame {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      max-width: none;
      height: auto;
      padding: 1rem 1.5rem;

      display: grid;
      justify-content: center;

      pointer-events: none;
      z-index: 100;
    
      a {
        pointer-events: auto;
      }
    }
    .content {
      height: 100%;
    }
  }

  @media (any-pointer: fine) {
    .cursor {
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      pointer-events: none;
      z-index: 9999;
      .cursor__svg {
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
      }

      .cursor__svg-circle {
        fill: var(--cursor-fill);
        stroke: var(--cursor-stroke);
        stroke-width: var(--cursor-stroke-width);
      }

      .cursor__text {
        position: absolute;
        top: 1.875rem;
        left: 80px;
        font-size: 0.857rem;
        text-transform: uppercase;
        font-weight: 500;
        fill: var(--cursor-text);
      }
    }

  }
`
