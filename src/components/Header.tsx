import * as Dialog from '@radix-ui/react-dialog'
import igniteLogo from '../assets/ignite-logo.svg'
import { NewTransactionModal } from './NewTransactionModal'

export function Header() {
  return (
    <header className="bg-neutral-900 pt-10 pb-28">
      <div className="w-full max-w-[1120px] mx-auto px-6 flex justify-between items-center`">
        <img src={igniteLogo} alt="" />
        <Dialog.Root>
          <Dialog.Trigger className="h-[50px] border-none bg-emerald-600 text-white font-bold px-5 rounded-md cursor-pointer hover:bg-emerald-700 transition">
            <span>Nova transação</span>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </div>
    </header>
  )
}
