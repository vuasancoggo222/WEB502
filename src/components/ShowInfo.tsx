import React from 'react'
import type { ProductType } from '../types/product'
type ShowInfoProduct = {
    info : ProductType
}
const ShowInfo = (props : ShowInfoProduct) => {
    console.log(props);
    
  return (
    <div>{props.info.name}</div>
  )
}

export default ShowInfo