import React from 'react'
import Delete from './Delete'
import Bagel from './Bagel'

const BagelsContainer = (props) => {
  
  const bagel = props.bagels.map(bagel => <Bagel key={bagel.id} type={bagel.type} rating={bagel.rating} />)

  return (
    <>
      <h3>This is the BagelsContainer</h3>
      <div>
        {bagel}
      </div>
    </>
  )
}

export default BagelsContainer