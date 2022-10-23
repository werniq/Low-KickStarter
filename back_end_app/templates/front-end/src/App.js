import { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import useMetaMask from './hooks/useMetamask'
import { Navbar } from './components/Navbar/Navbar'
import { Metamask } from './components/Metamask/MetamaskConn'
import './App.css'

function App() {
  const { connect, disconnect, isActive, account, shouldDisable } =
    useMetaMask()

  return (
    <div className="app">
      <Navbar>
        <Metamask />
      </Navbar>
    </div>
  )
}

export default App
