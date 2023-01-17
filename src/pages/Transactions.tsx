import classNames from 'classnames'
import { Header } from '../components/Header'
import { Summary } from '../components/Summary'
import { SearchForm } from './components/SearchForm'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <main className="mx-auto max-w-[1120px] w-full px-6 mt-16">
        <SearchForm />
        <table className="w-full mt-6">
          <tbody>
            <tr>
              <td
                className="py-5 px-8 bg-neutral-700 rounded-tl-md rounded-bl-md"
                width="50%"
              >
                Tipo de transação
              </td>
              <td
                className={classNames('py-5 px-8 bg-neutral-700', {
                  'text-emerald-500': true,
                  'text-red-400': false,
                })}
              >
                R$ 12.200,00
              </td>
              <td className="py-5 px-8 bg-neutral-700">Casa</td>
              <td className="py-5 px-8 bg-neutral-700 rounded-tr-md rounded-br-md">
                13/04/2023
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  )
}
