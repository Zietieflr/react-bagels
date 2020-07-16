import React from 'react'

const Bagel = (props) => {
  return (
    <li>
      <h3>I am a {props.type}  </h3>
      <p>{props.rating}</p>
    </li>
  )
}

export default Bagel