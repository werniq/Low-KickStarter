import './block.css'
import { React, useState, useEffect } from 'react'
import abi from '../abi.json'
const ethers = require('ethers')

const kickStarterAddress = '0xce5a385b0a39Cf2F9Ca4b5feAcE292158c40bC85'

export const Catalog = () => {
  const [campaigns, setCampaigns] = useState([])
  const [account, setAccount] = useState('')

  const getAllCampaigns = async () => {
    try {
      const { ethereum } = window

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(kickStarterAddress, abi, signer)
        let allCampaigns = await contract.campaigns()
        setCampaigns(allCampaigns)
      } else {
        console.log("Ethereum object doesn't exist")
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllCampaigns()
  }, [])

  

  return <div>hello world</div>
}
