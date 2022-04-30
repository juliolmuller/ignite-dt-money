import { useContext } from 'react'

import { TransactionsContext, TransactionsProvider } from './transactions'

export const useTransactions = () => useContext(TransactionsContext)

export { TransactionsProvider }
