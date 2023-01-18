import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useContext } from 'react'
import { TransactionsContext } from '../context/TransactionsContext'
import { priceFormatter } from '../utils/formatter'

export function Summary() {
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

  return (
    <section className="w-full mx-auto px-6 max-w-[1120px] grid grid-cols-3 -mt-16 gap-8">
      <div className="bg-neutral-700 rounded-md p-8">
        <header className="flex items-center justify-between text-neutral-300">
          <span>Entradas</span>
          <ArrowCircleUp size={32} className="text-emerald-500" />
        </header>
        <strong className="block mt-4 text-[2rem]">
          {priceFormatter.format(summary.income)}
        </strong>
      </div>
      <div className="bg-neutral-700 rounded-md p-8">
        <header className="flex items-center justify-between text-neutral-300">
          <span>Saídas</span>
          <ArrowCircleDown size={32} className="text-red-400" />
        </header>
        <strong className="block mt-4 text-[2rem]">
          {priceFormatter.format(summary.outcome)}
        </strong>
      </div>
      <div className="bg-emerald-700 rounded-md p-8 text-white">
        <header className="flex items-center justify-between text-neutral-300">
          <span>Total</span>
          <CurrencyDollar size={32} />
        </header>
        <strong className="block mt-4 text-[2rem]">
          {priceFormatter.format(summary.total)}
        </strong>
      </div>
    </section>
  )
}
