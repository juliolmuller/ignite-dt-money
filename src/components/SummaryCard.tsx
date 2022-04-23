import { Amount, Icon, Label, Root } from '~/styles/SummaryCard'

export interface SummaryCardProps {
  amount: number
  icon: 'income' | 'outcome' | 'total'
  label: string
  highlight?: boolean
}

export function SummaryCard({
  amount,
  highlight,
  icon,
  label,
}: SummaryCardProps) {
  const formattedAmount = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(Math.abs(amount))

  return (
    <Root highlight={highlight}>
      <Icon src={`/img/${icon}.svg`} alt="summary icon" />
      <Label>{label}</Label>
      <Amount>{formattedAmount}</Amount>
    </Root>
  )
}
