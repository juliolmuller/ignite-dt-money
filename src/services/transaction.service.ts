import { Transaction } from '~/types'

const baseUrl = '/api/transactions'

async function getTransactions() {
  const response = await fetch(baseUrl)
  const responseJson = await response.json()
  const { transactions } = responseJson

  return transactions as Transaction[]
}

async function createTransaction(transaction: Omit<Transaction, 'id' | 'date'>) {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(transaction),
  })
  const newTransaction = await response.json()

  return newTransaction as Transaction
}

export default {
  get: getTransactions,
  create: createTransaction,
}
