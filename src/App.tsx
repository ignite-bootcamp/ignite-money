import { TransactionsProvider } from './context/TransactionsContext'
import { Transactions } from './pages/Transactions'

function App() {
  return (
    <TransactionsProvider>
      <Transactions />
    </TransactionsProvider>
  )
}

export default App
