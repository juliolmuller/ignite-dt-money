import { createServer } from 'miragejs'

export function initializeMirageServer() {
  return createServer({
    routes() {
      this.namespace = 'api'

      this.get('/transactions', () => {
        return [
          {
            id: 1,
            title: 'Salário abr/2022',
            category: 'Remuneração',
            date: '07/04/2022',
            amount: 5400,
          },
          {
            id: 2,
            title: 'Almoço',
            category: 'Alimentação',
            date: '07/04/2022',
            amount: -38,
          },
          {
            id: 3,
            title: 'Eletricidade 04/2022',
            category: 'Contas fixas',
            date: '10/04/2022',
            amount: -280,
          },
        ]
      })
    },
  })
}
