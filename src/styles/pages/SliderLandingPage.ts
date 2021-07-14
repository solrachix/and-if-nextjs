import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  font-family: 'Sen';

  * {
    box-sizing: border-box;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    cursor: none;
    user-select: none;
    -webkit-user-drag: none;
  }

  #main {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;

    .part {
      flex: 1;

      .section {
        width: 100%;
        height: 100vh;
        position: relative;
        overflow: hidden;

        img {
          width: 100vw;
          height: 100vh;
          object-fit: cover;
          position: absolute;
          left: var(--x);
          pointer-events: none;
        }
      }
    }
  }

  .buttons {
    position: absolute;
    right: 25px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 99;

    button {
      border: none;
      background-size: contain;
      background: url("data:image/svg+xml,%3Csvg width='10' height='29' viewBox='0 0 10 29' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 0V27L1 17.4857' stroke='white' stroke-width='2' /%3E%3C/svg%3E%0A")
        no-repeat;
      background-position: center;
      width: 10px;
      height: 30px;
      display: block;
      margin: 20px 0;
      padding: 0 15px;
      transition-duration: 0.6s;

      &.next {
        transform: scaleY(-1);
      }

      &.prev:active {
        transform: translateY(8px);
      }

      &.next:active {
        transform: scaleY(-1) translateY(8px);
      }
    }
  }

  h1 {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    margin: auto;
    z-index: 99;
    color: white;
    text-align: center;
    font-size: 2.6em;
    mix-blend-mode: overlay;
    pointer-events: none;
  }

  .content {
    width: 90%;
    position: absolute;
    bottom: 20px;
    text-align: center;
    left: 0;
    right: 0;
    margin: auto;
    color: white;
    z-index: 99;
    font-size: 0.8em;

    p {
      margin: 0.5em auto;
    }

    kbd {
      width: 15px;
      height: 15px;
      border: 1px solid white;
      display: inline-block;
      border-radius: 3px;
      font-size: 0.9em;
      vertical-align: text-top;
    }

    a {
      color: rgba(227, 227, 227, 0.78);
      text-decoration: none;
      border-bottom: 1px solid currentColor;

      &:hover {
        padding-bottom: 1px;
      }
    }
  }
`
