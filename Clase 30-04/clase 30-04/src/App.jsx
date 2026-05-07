import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import {Titulo} from './components/Titulo'
import Producto from './components/Producto'
import './App.css'

function App() {
  const productos = [
  {id:1, nombre: "Computadora", precio: 10, img:"Ariel.png"},
  {id:2, nombre: "Mouse", precio: 20},
  {id:3, nombre: "Teclado", precio: 30},
]

  return (
    <>
{
      productos.map(({id, nombre, precio, img}) => {
        return (
          <Producto key={id} nombre={nombre} precio={precio} img= {img}></Producto>
        )
    })
}
    </>
  )
}

export default App
