import { createServer, Model } from 'miragejs'

export function initializeMirageServer() {
  return createServer({
    models: {
      transaction: Model,
    },

    seeds(server) {
      server.db.loadData({
        transactions: [
          {
            id: 1,
            title: 'Salário abr/2022',
            category: 'Remuneração',
            date: '2022-04-27',
            amount: 5400,
            type: 'income',
          },
          {
            id: 2,
            title: 'Almoço',
            category: 'Alimentação',
            date: '2022-04-28',
            amount: 40,
            type: 'expense',
          },
          {
            id: 3,
            title: 'Eletricidade 04/2022',
            category: 'Contas fixas',
            date: '2022-04-29',
            amount: 280,
            type: 'expense',
          },
        ],
      })
    },

    routes() {
      this.namespace = 'api'

      this.get('/transactions', (schema) => {
        return schema.all('transaction')
      })

      this.post('/transactions', (schema, request) => {
        const requestBody = JSON.parse(request.requestBody)
        const newTransaction: any = {
          title: requestBody.title,
          category: requestBody.category,
          amount: requestBody.amount,
          type: requestBody.type,
          date: new Date().toISOString(),
          id: Math.floor(Math.random() * 1000),
        }

        schema.create('transaction', newTransaction)

        return newTransaction
      })
    },
  })
}
