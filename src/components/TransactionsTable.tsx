import { useTransactions } from '~/contexts'
import {
  Root,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '~/styles/TransactionsTable'
import { currency, friendlyDate } from '~/utils'

export function TransactionsTable() {
  const { transactions } = useTransactions()

  return (
    <Root>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Descrição</TableCell>
            <TableCell>Categoria</TableCell>
            <TableCell>Data</TableCell>
            <TableCell>Valor</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.title}</TableCell>
              <TableCell>{transaction.category}</TableCell>
              <TableCell>{friendlyDate(new Date(transaction.date))}</TableCell>
              <TableCell color={transaction.type === 'income' ? 'green' : 'red'}>
                {currency(transaction.amount)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Root>
  )
}
