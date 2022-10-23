import React from 'react'
import './infoBlocks.css'

const infoBlock = ({ text, endTime, goal, organizer }) => {
  return (
    <div className="main-block">
      <h2>{text}</h2>
      <h3>{endTime}</h3>
      <h3>{goal}</h3>
      <h3>{organizer}</h3>
    </div>
  )
}

export default infoBlock
