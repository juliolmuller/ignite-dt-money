import { useEffect, useState } from 'react'

import { transactionService } from '~/services'
import {
  Root,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '~/styles/TransactionsTable'
import { Transaction } from '~/types'
import { currency } from '~/utils'

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    transactionService.get().then(setTransactions)
  }, [])

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
