import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'

export function Summary() {
  return (
    <section className="w-full mx-auto px-6 max-w-[1120px] grid grid-cols-3 -mt-16 gap-8">
      <div className="bg-neutral-700 rounded-md p-8">
        <header className="flex items-center justify-between text-neutral-300">
          <span>Entradas</span>
          <ArrowCircleUp size={32} className="text-emerald-500" />
        </header>
        <strong className="block mt-4 text-[2rem]">R$ 16.400,00</strong>
      </div>
      <div className="bg-neutral-700 rounded-md p-8">
        <header className="flex items-center justify-between text-neutral-300">
          <span>Saídas</span>
          <ArrowCircleDown size={32} className="text-red-400" />
        </header>
        <strong className="block mt-4 text-[2rem]">R$ 16.400,00</strong>
      </div>
      <div className="bg-emerald-700 rounded-md p-8 text-white">
        <header className="flex items-center justify-between text-neutral-300">
          <span>Total</span>
          <CurrencyDollar size={32} />
        </header>
        <strong className="block mt-4 text-[2rem]">R$ 16.400,00</strong>
      </div>
    </section>
  )
}
