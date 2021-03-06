import { FormEvent, useState } from 'react'

import { useTransactions } from '~/contexts'
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
  onSubmitEnd: () => void
}

export function TransactionForm({ transaction, onSubmitEnd }: TransactionFormProps) {
  const { createTransaction } = useTransactions()
  const [title, setTitle] = useState(transaction?.title ?? '')
  const [category, setCategory] = useState(transaction?.category ?? '')
  const [amount, setAmount] = useState(transaction?.amount)
  const [type, setType] = useState<Transaction['type'] | undefined>(transaction?.type)
  const isValid = title && category && amount && type

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    await createTransaction({
      title,
      category,
      amount: amount ?? 0,
      type: type ?? 'expense',
    })
    onSubmitEnd()
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
        value={amount ?? ''}
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
