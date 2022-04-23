import { Container, Logo, NewTransactionButton, Root } from '~/styles/Header'
export function Header() {
  return (
    <Root>
      <Container>
        <Logo src="/img/logo.svg" alt="DT Money logo" />

        <NewTransactionButton
          type="button"
        >
          Nova transação
        </NewTransactionButton>
      </Container>
    </Root>
  )
}
