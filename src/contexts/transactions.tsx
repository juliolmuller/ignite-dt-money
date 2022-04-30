import { createContext, ReactNode, useState } from 'react'

import { transactionService } from '~/services'
import { Transaction } from '~/types'

export interface TransactionsContextProps {
  transactions: Transaction[]
  fetchTransactions: () => void
  createTransaction: (transaction: Omit<Transaction, 'id' | 'date'>) => void
}

export interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextProps)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchTransactions() {
    const fetchedTransactions = await transactionService.get()
    setTransactions(fetchedTransactions)
  }

  async function createTransaction(transaction: Omit<Transaction, 'id' | 'date'>) {
    const newTransaction = await transactionService.create(transaction)
    setTransactions([...transactions, newTransaction])
  }

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
