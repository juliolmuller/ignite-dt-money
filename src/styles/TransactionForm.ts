import { darken, transparentize } from 'polished'
import styled from 'styled-components'

export const Root = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Title = styled.h4`
  padding: 1rem 0;
  font-size: 1.5rem;
`

export const SignContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  & > * {
    flex-grow: 1;
  }
`

export const SignButton = styled.button<{ color: 'green' | 'red', selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  height: 4rem;
  width: 100%;
  border: 1px solid #d7d7d7;
  border-radius: 4px;
  background: ${({ color, selected }) => (selected
    ? transparentize(0.9, color === 'green' ? '#33cc95' : '#e62e4d')
    : 'transparent'
  )};

  transition: border-color 150ms;

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }

  img {
    height: 1.5rem;
    width: 1.5rem;
    object-fit: contain;
  }

  span {
    color: var(--font-title);
    font-size: 1rem;
  }
`

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 64px;
  width: 100%;
  margin: 0.5rem 0 1rem;
  border: none;
  border-radius: 4px;
  background-color: var(--green);

  color: var(--white);
  font-size: 1rem;
  font-weight: 600;

  transition: filter 150ms;

  &:hover {
    filter: brightness(90%);
  }
`
