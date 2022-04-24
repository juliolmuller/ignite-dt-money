import {
  Root,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '~/styles/TransactionsTable'
import { currency } from '~/utils'

export function TransactionsTable() {
  const transactions = [
    {
      id: 1,
      title: 'Salário abr/2022',
      category: 'Remuneração',
      date: '07/04/2022',
      amount: 5400,
    },
    {
      id: 2,
      title: 'Almoço',
      category: 'Alimentação',
      date: '07/04/2022',
      amount: -38,
    },
    {
      id: 3,
      title: 'Eletricidade 04/2022',
      category: 'Contas fixas',
      date: '10/04/2022',
      amount: -280,
    },
  ]

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
              <TableCell>{transaction.date}</TableCell>
              <TableCell color={transaction.amount > 0 ? 'green' : 'red'}>
                {currency(transaction.amount)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Root>
  )
}
