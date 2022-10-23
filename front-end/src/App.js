import useMetaMask from './hooks/useMetamask'
import { Metamask } from './components/Metamask/MetamaskConn'
import './App.css'

function App() {
  const { connect, disconnect, isActive, account, shouldDisable } =
    useMetaMask()

  return (
    <div className="app">
      <Metamask />
    </div>
  )
}

export default App
