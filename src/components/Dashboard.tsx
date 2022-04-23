import { SummaryCard } from '~/components/SummaryCard'
import { Container, Content, Root, Summary } from '~/styles/Dashboard'


export function Dashboard() {
  return (
    <Root>
      <Container>
        <Summary>
          <SummaryCard amount={17400} icon="income" label="Entradas" />
          <SummaryCard amount={1259} icon="outcome" label="Saídas" />
          <SummaryCard amount={16141} icon="total" label="Total" />
        </Summary>

        <Content>
          <h1>Hello, there!</h1>
        </Content>
      </Container>
    </Root>
  )
}
