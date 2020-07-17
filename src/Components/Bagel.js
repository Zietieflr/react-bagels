import React from 'react'

const Bagel = (props) => {
  return (
    <li>
      <h3>I am a {props.type}  </h3>
      <p>{props.rating}</p>
      <button onClick={() => props.deleteBagel(props.bagel)} >Delete</button>
    </li>
  )
}

export default Bagel