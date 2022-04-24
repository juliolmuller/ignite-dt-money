import { Transaction } from '~/types'

const baseUrl = '/api/transactions'

async function getTransactions() {
  const response = await fetch(baseUrl)
  const transactions = await response.json()

  return transactions as Transaction[]
}

export default {
  get: getTransactions,
}
