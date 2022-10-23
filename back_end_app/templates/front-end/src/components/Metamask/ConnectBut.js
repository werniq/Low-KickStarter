import React from 'react'
import useMetaMask from '../../hooks/useMetamask'

export const ConnBut = () => {
  const { connect } = useMetaMask()
  return (
    <button className="connect" onClick={connect}>
      Connect to MetaMask
    </button>
  )
}
