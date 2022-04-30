import { SummaryCard } from '~/components/SummaryCard'
import { TransactionsTable } from '~/components/TransactionsTable'
import { Container, Content, Root, Summary } from '~/styles/Dashboard'
import { Transaction } from '~/types'

export interface DashboardProps {
  transactions: Transaction[]
}

export function Dashboard({ transactions }: DashboardProps) {
  return (
    <Root>
      <Container>
        <Summary>
          <SummaryCard amount={17400} icon="income" label="Entradas" />
          <SummaryCard amount={1259} icon="outcome" label="Saídas" />
          <SummaryCard
            amount={16141}
            highlight
            icon="total"
            label="Total"
          />
        </Summary>

        <Content>
          <TransactionsTable transactions={transactions} />
        </Content>
      </Container>
    </Root>
  )
}
