import { useContext } from 'react'
import { TransactionsContext } from '../context/TransactionsContext'

export function useSummary() {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce(
    (initialValue, transaction) => {
      if (transaction.type === 'income') {
        initialValue.income += transaction.price
        initialValue.total += transaction.price
      } else {
        initialValue.outcome += transaction.price
        initialValue.total -= transaction.price
      }

      return initialValue
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )

  return summary
}
