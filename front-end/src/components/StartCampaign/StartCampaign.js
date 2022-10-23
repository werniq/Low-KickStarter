import { useState } from 'react'
import { Button } from 'react-bootstrap'
import abi from '../abi.json'
import { ethers } from 'ethers'

export const StartCampaign = ({ account }) => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [category, setCategory] = useState('')
  const [goal, setGoal] = useState(undefined)
  const [deadline, setDeadline] = useState(new Date(0))
  const [campaign, setCampaign] = useState([])

  const CONTRACT_ADDRESS = '0xce5a385b0a39Cf2F9Ca4b5feAcE292158c40bC85'
  const { ethereum } = window

  function start() {
    if (ethereum) {
      const signer = ethers.request('eth_requestAccounts')

      const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer)

      const tx = contract.start(goal, deadline)
    }
  }

  return (
    <>
      <form>
        <label>
          Campaign name:
          <input
            type="text"
            required
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />
        </label>
        <label>
          Campaign description:
          <textarea
            type="text"
            required
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value)
            }}
          />
        </label>
        <label>Campaign goal: (ETH)</label>
        <input
          type="number"
          value={goal}
          required
          onChange={(e) => {
            setGoal(e.target.value)
          }}
        ></input>
        <label>
          Campaign field:
          <input
            type="radio"
            required
            value={category}
            onChange={(e) => {
              setCampaign(e.target.value)
            }}
          />
        </label>
        <label>
          <input
            type="date"
            value={deadline}
            required
            onChange={(e) => {
              setDeadline(e.target.value)
            }}
          />
        </label>
      </form>

      <Button variant="outline-dark" onClick={start}>
        Start Campaign!
      </Button>
    </>
  )
}
