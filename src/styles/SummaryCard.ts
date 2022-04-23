import styled from 'styled-components'

export const Root = styled.div<{ highlight?: boolean }>`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 8.5rem;
  border-radius: 6px;
  background-color: var(--${({ highlight }) => (highlight ? 'green' : 'white')});
  padding: 1.5rem 2rem 1.25rem;

  p {
    color: var(--${({ highlight }) => (highlight ? 'white' : 'font-title')});
  }
`

export const Icon = styled.img`
  position: absolute;
  top: 1.25rem;
  right: 1rem;

  height: 2rem;
  width: 2rem;
  object-fit: contain;
`

export const Label = styled.p``

export const Amount = styled.p`
  font-size: 2.25rem;
  font-weight: 500;
`
