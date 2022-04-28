import { FormEvent, useState } from 'react'

import { Input } from '~/styles/Input'
import {
  Root,
  SignButton,
  SignContainer,
  SubmitButton,
  Title,
} from '~/styles/TransactionForm'
import { Transaction } from '~/types'

export interface TransactionFormProps {
  transaction?: Partial<Transaction>
  onSubmit: (transaction: Omit<Transaction, 'id'>) => void
}

export function TransactionForm({ transaction, onSubmit }: TransactionFormProps) {
  const [title, setTitle] = useState(transaction?.title ?? '')
  const [category, setCategory] = useState(transaction?.category ?? '')
  const [amount, setAmount] = useState(transaction?.amount)
  const [type, setType] = useState(amount && (amount > 0 ? 'income' : 'expense'))
  const isValid = title && category && amount && type

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    onSubmit({
      // eslint-disable-next-line no-nested-ternary
      amount: amount ? (type === 'income' ? amount : -amount) : 0,
      category,
      title,
      date: new Date().toISOString(),
    })
  }

  return (
    <Root onSubmit={handleSubmit}>
      <Title>Cadastrar transação</Title>

      <Input
        autoFocus
        placeholder="Título"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        min={0}
        placeholder="Valor"
        type="number"
        value={amount}
        onChange={(event) => setAmount(Number(event.target.value))}
      />
      <SignContainer>
        <SignButton
          color="green"
          selected={type === 'income'}
          type="button"
          onClick={() => setType('income')}
        >
          <img src="/img/income.svg" alt="ícone de entrada" />
          <span>Entrada</span>
        </SignButton>
        <SignButton
          color="red"
          selected={type === 'expense'}
          type="button"
          onClick={() => setType('expense')}
        >
          <img src="/img/outcome.svg" alt="ícone de saída" />
          <span>Saída</span>
        </SignButton>
      </SignContainer>
      <Input
        placeholder="Categoria"
        type="text"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      />

      <SubmitButton disabled={!isValid} type="submit">
        Cadastrar
      </SubmitButton>
    </Root>
  )
}
