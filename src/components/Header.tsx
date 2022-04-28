import { Container, Logo, NewTransactionButton, Root } from '~/styles/Header'

export interface HeaderProps {
  onNewTransaction: () => void
}

export function Header({ onNewTransaction }: HeaderProps) {
  return (
    <Root>
      <Container>
        <Logo src="/img/logo.svg" alt="DT Money logo" />

        <NewTransactionButton
          type="button"
          onClick={() => onNewTransaction()}
        >
          Nova transação
        </NewTransactionButton>
      </Container>
    </Root>
  )
}
