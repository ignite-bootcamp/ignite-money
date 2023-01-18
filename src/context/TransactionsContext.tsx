import { createContext, PropsWithChildren, useEffect, useState } from 'react'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: string
  createdAt: string
}

interface TransactionsContextProps {
  transactions: Transaction[]
}

export const TransactionsContext = createContext({} as TransactionsContextProps)

export function TransactionsProvider({ children }: PropsWithChildren) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/transactions')
      .then((response) => {
        return response.json()
      })
      .then((transactions: Transaction[]) => {
        setTransactions(transactions)
      })
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}
