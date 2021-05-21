import styled from 'styled-components';

export const Container = styled.div`
  --cursor-stroke: #e3154d;
  --cursor-fill: none;
  --cursor-stroke-width: 1px;
  --cursor-text: #000;

  display: none;

  @media (any-pointer: fine) {
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
      
      color: var(--cursor-text);
    }
  }
`;
