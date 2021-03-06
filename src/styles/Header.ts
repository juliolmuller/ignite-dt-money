import styled from 'styled-components'

import { Container as BaseContainer } from './Container'

export const Root = styled.header`
  height: 13rem;
  width: 100%;
  background-color: var(--purple);
  padding: 2rem;
`

export const Container = styled(BaseContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.img`
  height: 2.5rem;
  object-fit: contain;
`

export const NewTransactionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 3rem;
  width: 12rem;
  border: none;
  border-radius: 4px;
  background-color: var(--purple-light);

  color: #fff;
  font-weight: 600;

  transition: filter 150ms;

  &:hover {
    filter: brightness(95%);
  }

  &:active {
    filter: brightness(100%);
    transform: scale(0.98);
  }
`
