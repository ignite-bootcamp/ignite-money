import { MagnifyingGlass } from 'phosphor-react'

export function SearchForm() {
  return (
    <form className="flex items-center gap-4">
      <input
        type="text"
        className="flex-1 rounded-md border-none bg-neutral-900 text-gray-300 p-4 placeholder:text-gray-500 focus:outline-none focus:ring ring-emerald-600"
        placeholder="Busque uma transação"
      />
      <button
        type="submit"
        className="flex items-center gap-3 p-4 bg-transparent border border-emerald-600 text-emerald-600 font-bold rounded-md hover:bg-emerald-600 hover:border-transparent hover:text-white transition"
      >
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </form>
  )
}
