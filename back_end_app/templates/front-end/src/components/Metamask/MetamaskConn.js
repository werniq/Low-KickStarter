// import { React, Component } from 'react'
// import { ethers } from 'ethers'
import { useEffect } from 'react'
import './Metamask.css'
// import { Button } from 'react-bootstrap'
import useMetaMask from '../../hooks/useMetamask'
import { ConnBut } from './ConnectBut'
import { DiscBut } from './DiscBut'

export const Metamask = () => {
  const { connect, disconnect, isActive, account, shouldDisable } =
    useMetaMask()
  return (
    <div className="App">
      {/* <Button variant="secondary" onClick={connect} disabled={shouldDisable}> */}
      <ConnBut>Connect to MetaMask</ConnBut>
      {/* </Button> */}
      {/* <div className="mt-2 mb-2">
        Connected Account: {isActive ? account : ''}
      </div> */}
      {/* <Button variant="danger" onClick={disconnect}> */}
      <DiscBut account={account}>Disconnect MetaMask</DiscBut>
      {/* </Button> */}
    </div>
  )
}
