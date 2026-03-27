const section= document.querySelector(".section")
const productos=[
    {
        id: 1,
        nombre: "Coca Cola",
        precio: 2000
    },{
        id:2,
        nombre:"Fanta",
        precio: 2000
    },{
        id: 3,
        nombre: "Sprite",
        precio:2000
    },{
        id:4,
        nombre:"Pepsi",
        precio:2000
    }, {
        id:5,
        nombre:"Agua",
        precio: 1000
    }]
const productosHTML= productos.map(producto =>{
    return(
        `  
        <div> 
            <h3> ${producto.nombre}</h3>
            <h4> $${producto.precio}</h4>
        </div>
    
        `)

}).join("")
document.body.innerHTML= productosHTML
 const productosFiltrados= productos.filter(producto => producto.id === 2)
 console.log (productosFiltrados)

