import styled from 'styled-components'

import { Container as BaseContainer } from './Container'

export const Root = styled.main``

export const Container = styled(BaseContainer)`
  margin-top: -5.25rem;
`

export const Summary = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  & > * {
    flex-grow: 1;
  }
`

export const Content = styled.div`
  margin-top: 4rem;
`
