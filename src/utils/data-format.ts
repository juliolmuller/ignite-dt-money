
export function currency(value: number) {
  return new Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    style: 'currency',
  }).format(value)
}

export function friendlyDate(date: Date) {
  return new Intl.DateTimeFormat('pt-BR').format(date)
}
