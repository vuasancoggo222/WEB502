import React from 'react'

const ShowInfo = (props) => {
  console.log(props);
  return (
   <p>Thong tin User {props.name}</p>
  )
}

export default ShowInfo