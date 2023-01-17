import igniteLogo from '../assets/ignite-logo.svg'

export function Header() {
  return (
    <header className="bg-neutral-900 pt-10 pb-28">
      <div className="w-full max-w-[1120px] mx-auto px-6 flex justify-between items-center`">
        <img src={igniteLogo} alt="" />
        <button
          className="h-[50px] border-none bg-emerald-600 text-white font-bold px-5 rounded-md cursor-pointer hover:bg-emerald-700 transition"
          type="button"
        >
          Nova transação
        </button>
      </div>
    </header>
  )
}
