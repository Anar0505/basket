import React from 'react'
import { Link } from 'react-router-dom'

function Card({title,desc,price,id}) {
  return (
    <>
    <div>
        <div>{title}</div>
        <div>{desc}</div>
        <div>{price}</div>
        <Link to={"/detail/"+id}>Detail {id}</Link>
    </div>
    </>
  )
}

export default Card