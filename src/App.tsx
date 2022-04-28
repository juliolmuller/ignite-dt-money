import { useState } from 'react'

import { Dashboard } from '~/components/Dashboard'
import { Header } from '~/components/Header'
import { Modal } from '~/components/Modal'
import { TransactionForm } from '~/components/TransactionForm'
import { GlobalStyle } from '~/styles/_global'

import { Transaction } from './types'

export function App() {
  const [isTransactionFormOpen, setTransactionFormOpen] = useState(false)

  function handleToggleModal() {
    setTransactionFormOpen(!isTransactionFormOpen)
  }

  function handleSubmit(transaction: Omit<Transaction, 'id'>) {
    console.log(transaction)
  }

  return (
    <>
      <GlobalStyle />
      <Header onNewTransaction={handleToggleModal} />
      <Dashboard />

      <Modal isOpen={isTransactionFormOpen} onClose={handleToggleModal}>
        <TransactionForm onSubmit={handleSubmit} />
      </Modal>
    </>
  )
}
