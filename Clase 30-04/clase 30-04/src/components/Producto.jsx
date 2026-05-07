import React from 'react'

export default function Producto({nombre, precio, img}) {
  return (
    <div>
      <h2>{nombre} {precio} </h2>
      <img src={img} alt="" />
    </div>
  )
}
