import styled from 'styled-components'

export const Backdrop = styled.div<{ opacity: 0 | 1, visibility: 'hidden' | 'visible' }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 250ms, backdrop-filter 250ms;
  backdrop-filter: blur(${({ opacity }) => (opacity ? '2px' : '0')});
  opacity: ${({ opacity }) => opacity};
  visibility: ${({ visibility }) => visibility};
`

export const Dialog = styled.div<{ maxWidth: number }>`
  position: relative;

  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth}px;
  border-radius: 6px;
  background-color: var(--background);
  padding: 3rem;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  padding: 0.5rem;

  img {
    width: 1rem;
    height: 1rem;
    object-fit: contain;
  }
`
