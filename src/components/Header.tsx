import { useState } from 'react'

import { Modal } from '~/components/Modal'
import { Container, Logo, NewTransactionButton, Root } from '~/styles/Header'

export function Header() {
  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <Root>
      <Container>
        <Logo src="/img/logo.svg" alt="DT Money logo" />

        <NewTransactionButton
          type="button"
          onClick={() => setModalOpen(true)}
        >
          Nova transação
        </NewTransactionButton>
      </Container>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      >
        <h1>Modal</h1>
      </Modal>
    </Root>
  )
}
