import styled from 'styled-components'

interface CursorProps {
  size: number
}

export const Cursor = styled.div<CursorProps>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  position: absolute;

  background: white;
  mix-blend-mode: difference;
  border-radius: 50%;

  pointer-events: none;
  z-index: 999;
`

export const CursorF = styled(Cursor)`
  width: ${props => props.size}px;
  height: ${props => props.size}px;

  background-color: transparent;
  background-image: url("data:image/svg+xml,%3Csvg width='47' height='47' viewBox='0 0 47 47' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M42.4202 42.4202C38.8403 46 33.3594 46 23.5 46C13.6406 46 8.15966 46 4.57983 42.4202C1 38.8403 1 33.3594 1 23.5C1 13.6406 1 8.15966 4.57983 4.57983C8.15966 1 13.6406 1 23.5 1C33.3594 1 38.8403 1 42.4202 4.57983C46 8.15966 46 13.6406 46 23.5C46 33.3594 46 38.8403 42.4202 42.4202Z' stroke='white'/%3E%3C/svg%3E%0A");
  background-size: cover;
  border-radius: 0;

  opacity: 0.5;
`
