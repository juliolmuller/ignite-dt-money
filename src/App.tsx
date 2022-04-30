import { useState } from 'react'

import { Dashboard } from '~/components/Dashboard'
import { Header } from '~/components/Header'
import { Modal } from '~/components/Modal'
import { TransactionForm } from '~/components/TransactionForm'
import { TransactionsProvider } from '~/contexts'
import { GlobalStyle } from '~/styles/_global'


export function App() {
  const [isTransactionFormOpen, setTransactionFormOpen] = useState(false)

  function handleToggleModal() {
    setTransactionFormOpen(!isTransactionFormOpen)
  }

  return (
    <TransactionsProvider>
      <GlobalStyle />
      <Header onNewTransaction={handleToggleModal} />
      <Dashboard />

      <Modal isOpen={isTransactionFormOpen} onClose={handleToggleModal}>
        <TransactionForm onSubmitEnd={handleToggleModal} />
      </Modal>
    </TransactionsProvider>
  )
}
