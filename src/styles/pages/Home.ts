import styled, { css } from 'styled-components'

export const Container = styled.div`
  --blue: #007bff;
  --indigo: #6610f2;
  --purple: #6f42c1;
  --pink: #e83e8c;
  --red: #dc3545;
  --orange: #fd7e14;
  --yellow: #ffc107;
  --green: #28a745;
  --teal: #20c997;
  --cyan: #17a2b8;
  --white: #fff;
  --gray: #868e96;
  --gray-dark: #343a40;
  --primary: #007bff;
  --secondary: #868e96;
  --success: #28a745;
  --info: #17a2b8;
  --warning: #ffc107;
  --danger: #dc3545;
  --light: #f8f9fa;
  --dark: #343a40;
  --breakpoint-xs: 0;
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas,
    'Liberation Mono', 'Courier New', monospace;

  flex: 1;
  width: 100%;
  min-height: 100vh;

  background-color: #000;

  font-family: 'Roboto', sans-serif;

  h1,
  h2,
  h3,
  a {
    font-family: 'Montserrat', sans-serif;
    color: #fff;
  }

  .swiper-container {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    margin: 0 auto;

    display: flex;
    align-items: center;

    overflow: hidden;

    transition: all 0.3s ease-in-out 0.7s;

    .swiper-wrapper {
      align-items: center;
    }
    .swiper-slide {
      width: auto;
      margin-right: 30px;

      .hover-title-box {
        position: absolute;
        right: -100px;
        top: 50%;
        width: 300px;
        padding-left: 55px;
        padding-right: 55px;

        transform: translateY(-53px);

        z-index: 99;
        opacity: 0;
        transition: all 0.3s ease-in-out;

        h3 {
          font-weight: 600;
        }
        .separator {
          width: 50px;
          height: 1px;
          content: '';
          position: absolute;
          left: -10px;
          top: 30px;

          background-color: #000;
        }
      }

      .bottom-text {
        position: absolute;
        bottom: 50px;
        width: 100%;
        margin: 0 0 25px;

        opacity: 0;
        transition: all 0.3s ease-in-out;

        font-size: 11px;
        line-height: 14px;
        text-transform: uppercase !important;
        text-align: center !important;
        color: #fff;

        &:last-of-type {
          margin-bottom: 0;
        }
      }

      .item {
        img {
          max-width: 100%;
          height: auto;
          max-height: 450px;

          transition: all 0.3s ease-in-out;
          opacity: 0.8;
          filter: grayscale(1);
        }
      }

      &.first {
        width: 550px;

        .item {
          height: 100% !important;
          width: 90%;
          padding: 10%;

          display: table !important;

          img {
            width: 60%;
          }
          h1 {
            margin-bottom: 5px;

            display: block !important;
          }

          h6 {
            margin-bottom: 20px;
          }

          p {
            width: 90%;
            margin-bottom: 35px;

            opacity: 1;
            font-size: 18px;
            font-weight: 300;
            line-height: 26px;
          }
        }
      }

      &:hover {
        .hover-title-box {
          right: -160px;
          opacity: 1;
          visibility: visible;
        }
        .bottom-text {
          opacity: 0.7;
          letter-spacing: 5px;
          left: 4px;
        }
        .item {
          z-index: 1;

          img {
            max-height: 500px;
            opacity: 1;
            filter: grayscale(0);
            filter: contrast(130%);
          }
        }
      }
    }

    .swiper-scrollbar {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;

      z-index: 50;

      background: rgba(255, 255, 255, 0.2);
      border-radius: 0;
      opacity: 1;
    }
    .swiper-pagination {
      position: fixed !important;
    }
    .swiper-scrollbar-drag {
      border-radius: 0;
      background: #ff214f;
    }
  }
`
