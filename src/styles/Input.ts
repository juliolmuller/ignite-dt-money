import styled from 'styled-components'

export const Input = styled.input`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  height: 4rem;
  width: 100%;
  border: 1px solid #d7d7d7;
  border-radius: 4px;
  background-color: #e7e9ee;
  padding: 0 1.5rem;

  color: var(--font-title);
  font-size: 1rem;

  &::placeholder {
    color: var(--font-body)
  }
`
