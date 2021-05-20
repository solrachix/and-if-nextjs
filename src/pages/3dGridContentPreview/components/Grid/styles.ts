import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 120%;
  height: 120%;
  top: -10%;
  left: -10%;
  display: grid;
  grid-template-columns: repeat(50, 2%);
  grid-template-rows: repeat(50, 2%);
  perspective: 1000px;

  /* .grid--inactive {
    pointer-events: none;
  } */


`;
