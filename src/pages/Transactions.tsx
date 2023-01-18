import classNames from 'classnames'
import { useContext } from 'react'
import { Header } from '../components/Header'
import { Summary } from '../components/Summary'
import { TransactionsContext } from '../context/TransactionsContext'
import { dateFormatter, priceFormatter } from '../utils/formatter'
import { SearchForm } from './components/SearchForm'

export function Transactions() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <div>
      <Header />
      <Summary />

      <main className="mx-auto max-w-[1120px] w-full px-6 mt-16">
        <SearchForm />
        <table className="w-full border-separate border-spacing-y-2 mt-6">
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td
                  className="py-5 px-8 bg-neutral-700 rounded-tl-md rounded-bl-md"
                  width="50%"
                >
                  {transaction.description}
                </td>
                <td
                  className={classNames('py-5 px-8 bg-neutral-700', {
                    'text-emerald-500': transaction.type === 'income',
                    'text-red-400': transaction.type === 'outcome',
                  })}
                >
                  {transaction.type === 'outcome' && '- '}
                  {priceFormatter.format(transaction.price)}
                </td>
                <td className="py-5 px-8 bg-neutral-700">
                  {transaction.category}
                </td>
                <td className="py-5 px-8 bg-neutral-700 rounded-tr-md rounded-br-md">
                  {dateFormatter.format(new Date(transaction.createdAt))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  )
}
