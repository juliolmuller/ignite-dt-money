import { Amount, Icon, Label, Root } from '~/styles/SummaryCard'
import { currency } from '~/utils'

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
  return (
    <Root highlight={highlight}>
      <Icon src={`/img/${icon}.svg`} alt="summary icon" />
      <Label>{label}</Label>
      <Amount>{currency(amount)}</Amount>
    </Root>
  )
}
