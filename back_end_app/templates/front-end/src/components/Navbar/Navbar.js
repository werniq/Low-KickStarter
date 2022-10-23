import React, { useState } from 'react'
import { NavbarMenu, NavbarButton, CreateButton } from './NavbarElements.js'
import { Metamask } from '../Metamask/MetamaskConn.js'
// import Metamask from '../Metamask/MetamaskConn'
// import abi from '../abi.json'
// const ethers = require('ethers')
// const kickStarterAddress = '0xce5a385b0a39Cf2F9Ca4b5feAcE292158c40bC85'

export const Navbar = () => {
  const startCampaign = async (e) => {
    e.preventDefault()

    let campaign = {
      _goal: 10 ** 18,
      _endsAt: Date.now() + 3600 * 24 * 30,
    }

    try {
      const { ethereum } = window

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(kickStarterAddress, abi, signer)

        contract.start(campaign._goal, campaign._endsAt).then((response) => {
          setCampaigns([...campaigns, campaign])
        })
      } else {
        alert("Ethereum object does't exist")
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className=".navbar">
      <NavbarMenu>
        <NavbarButton>Home</NavbarButton>
        <CreateButton onClick={startCampaign()}>Create Campgain!</CreateButton>
        <NavbarButton>Catalog</NavbarButton>
        <NavbarButton>Contact us!</NavbarButton>
        <NavbarButton>Log in</NavbarButton>
        <Metamask />
        {/* <Metamask /> */}
      </NavbarMenu>
    </div>
  )
}
