import styled from 'styled-components'

export const Container = styled.a`
  position: relative;
  will-change: transform;
  grid-area: var(--grid-row) / var(--grid-column) / span 12 / span 5;

  /* Shorthand grid-area: grid-row-start / grid-column-start / grid-row-end / grid-column-end */

  &.pos-1 {
    --grid-row: 10;
    --grid-column: 1;
  }

  &.pos-2 {
    --grid-row: 1;
    --grid-column: 18;
  }

  &.pos-3 {
    --grid-row: 1;
    --grid-column: 29;
  }

  &.pos-4 {
    --grid-row: 15;
    --grid-column: 12;
  }

  &.pos-5 {
    --grid-row: 17;
    --grid-column: 25;
  }

  &.pos-6 {
    --grid-row: 20;
    --grid-column: 43;
  }

  &.pos-7 {
    --grid-row: 35;
    --grid-column: 5;
  }

  &.pos-8 {
    --grid-row: 40;
    --grid-column: 14;
  }

  &.pos-9 {
    --grid-row: 37;
    --grid-column: 29;
  }

  &.pos-10 {
    --grid-row: 35;
    --grid-column: 42;
  }

  &.pos-11 {
    --grid-row: 1;
    --grid-column: 44;
  }

  &.pos-12 {
    --grid-row: 32;
    --grid-column: 20;
  }

  &.pos-13 {
    --grid-row: 22;
    --grid-column: 2;
  }

  &.pos-14 {
    --grid-row: 9;
    --grid-column: 38;
  }

  &.pos-15 {
    --grid-row: 4;
    --grid-column: 7;
  }

  &.pos-16 {
    --grid-row: 28;
    --grid-column: 36;
  }

  .grid__item-img {
    position: relative;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: 50% 50%;
    border-radius: 10px;
    will-change: transform;
  }
`
