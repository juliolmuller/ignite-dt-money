import { useEffect, useMemo } from 'react'

import { SummaryCard } from '~/components/SummaryCard'
import { TransactionsTable } from '~/components/TransactionsTable'
import { useTransactions } from '~/contexts'
import { Container, Content, Root, Summary } from '~/styles/Dashboard'

export function Dashboard() {
  const { transactions, fetchTransactions } = useTransactions()
  const totalIncome = useMemo(() => {
    return transactions.reduce((total, transaction) => {
      return total + (transaction.type === 'income' ? transaction.amount : 0)
    }, 0)
  }, [transactions])
  const totalOutcome = useMemo(() => {
    return transactions.reduce((total, transaction) => {
      return total + (transaction.type === 'expense' ? transaction.amount : 0)
    }, 0)
  }, [transactions])

  useEffect(() => {
    fetchTransactions()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Root>
      <Container>
        <Summary>
          <SummaryCard amount={totalIncome} icon="income" label="Entradas" />
          <SummaryCard amount={totalOutcome} icon="outcome" label="Saídas" />
          <SummaryCard
            amount={totalIncome - totalOutcome}
            highlight
            icon="total"
            label="Total"
          />
        </Summary>

        <Content>
          <TransactionsTable />
        </Content>
      </Container>
    </Root>
  )
}
