import { useEffect, useState } from 'react'

import { Dashboard } from '~/components/Dashboard'
import { Header } from '~/components/Header'
import { Modal } from '~/components/Modal'
import { TransactionForm } from '~/components/TransactionForm'
import { transactionService } from '~/services'
import { GlobalStyle } from '~/styles/_global'

import { Transaction } from './types'

export function App() {
  const [isTransactionFormOpen, setTransactionFormOpen] = useState(false)
  const [transactions, setTransactions] = useState<Transaction[]>([])

  function handleToggleModal() {
    setTransactionFormOpen(!isTransactionFormOpen)
  }

  async function handleSubmit(transaction: Omit<Transaction, 'id' | 'date'>) {
    const newTransaction = await transactionService.create(transaction)
    setTransactions([...transactions, newTransaction])
    handleToggleModal()
  }

  useEffect(() => {
    transactionService.get().then(setTransactions)
  }, [])

  return (
    <>
      <GlobalStyle />
      <Header onNewTransaction={handleToggleModal} />
      <Dashboard transactions={transactions} />

      <Modal isOpen={isTransactionFormOpen} onClose={handleToggleModal}>
        <TransactionForm onSubmit={handleSubmit} />
      </Modal>
    </>
  )
}
