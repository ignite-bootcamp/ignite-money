import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { TransactionsContext } from '../../../context/TransactionsContext'
import { useContext } from 'react'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { fetchTransactions } = useContext(TransactionsContext)
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  function handleSearchTransactions(data: SearchFormInputs) {
    fetchTransactions(data.query)
  }

  return (
    <form
      className="flex items-center gap-4"
      onSubmit={handleSubmit(handleSearchTransactions)}
    >
      <input
        {...register('query')}
        type="text"
        className="flex-1 rounded-md border-none bg-neutral-900 text-gray-300 p-4 placeholder:text-gray-500 focus:outline-none focus:ring ring-emerald-600"
        placeholder="Busque uma transação"
      />
      <button
        type="submit"
        className="flex items-center gap-3 p-4 bg-transparent border border-emerald-600 text-emerald-600 font-bold rounded-md enabled:hover:bg-emerald-600 enabled:hover:border-transparent enabled:hover:text-white transition disabled:cursor-not-allowed cursor-pointer"
        disabled={isSubmitting}
      >
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </form>
  )
}
