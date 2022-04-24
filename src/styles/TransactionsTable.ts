import styled from 'styled-components'

export const Root = styled.main``

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
`

export const TableHeader = styled.thead`
  & > tr {
    height: 3rem;
  }
`

export const TableBody = styled.tbody`
  & > tr {
    height: 4rem;
    background-color: var(--white);

    & > td:first-child {
      color: var(--font-title);
    }

    & > td:last-child {
      text-align: right;
    }
  }
`

export const TableRow = styled.tr`
  & > td:first-child {
    width: 48%;
  }
`

export const TableCell = styled.td<{ color?: 'green' | 'red' }>`
  border-radius: 4px;
  padding: 0.5rem 2rem;
  color: var(--${({ color }) => color ?? 'font-body'});
  vertical-align: middle;
`
