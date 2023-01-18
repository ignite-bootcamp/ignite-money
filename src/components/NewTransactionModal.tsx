import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { X } from 'phosphor-react'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed w-screen h-screen inset-0 bg-black/75" />

      <Dialog.Content className="min-w-[32rem] rounded-md py-10 px-12 bg-neutral-800 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Dialog.Title>Nova transação</Dialog.Title>
        <form className="mt-8 flex flex-col gap-4">
          <input
            className="rounded-md border-none bg-neutral-900 text-gray-300 p-4 placeholder:text-gray-500"
            type="text"
            placeholder="Descrição"
            required
          />
          <input
            className="rounded-md border-none bg-neutral-900 text-gray-300 p-4 placeholder:text-gray-500"
            type="text"
            placeholder="Preço"
            required
          />
          <input
            className="rounded-md border-none bg-neutral-900 text-gray-300 p-4 placeholder:text-gray-500"
            type="text"
            placeholder="Categoria"
            required
          />

          <RadioGroup.Root className="grid grid-cols-2 gap-4 mt-2">
            <RadioGroup.Item
              value="income"
              className="bg-neutral-700 flex items-center justify-center gap-2 rounded-md cursor-pointer text-gray-100 p-4 radix-state-checked:bg-emerald-500 radix-state-checked:text-white"
            >
              Entrada
            </RadioGroup.Item>
            <RadioGroup.Item
              value="outcome"
              className="bg-neutral-700 flex items-center justify-center gap-2 rounded-md cursor-pointer text-gray-100 p-4 radix-state-checked:bg-red-500 radix-state-checked:text-white"
            >
              Saída
            </RadioGroup.Item>
          </RadioGroup.Root>

          <button
            className="h-[58px] border-none bg-emerald-600 text-white font-bold px-5 rounded-md mt-6 cursor-pointer hover:bg-emerald-700 transition"
            type="submit"
          >
            Cadastrar
          </button>
        </form>
        <Dialog.Close className="absolute border-none bg-transparent top-6 right-6 cursor-pointer text-gray-500 leading-[0`]">
          <X size={24} />
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
