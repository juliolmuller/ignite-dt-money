
export interface Transaction {
  id: number
  title: string
  category: string
  date: string
  amount: number
  type: 'income' | 'expense'
}
