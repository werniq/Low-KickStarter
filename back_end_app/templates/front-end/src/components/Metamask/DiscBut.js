import React from 'react'
import useMetaMask from '../../hooks/useMetamask'

export const DiscBut = ({ account }) => {
  const { disconnect } = useMetaMask()
  return (
    <button className="disconn" onClick={disconnect}>
      Disconnect from MetaMask
    </button>
  )
}
