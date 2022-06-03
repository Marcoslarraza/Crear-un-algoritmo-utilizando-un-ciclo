 


let productoIngresado = prompt("Ingresa tu producto")

let precioProducto = Number(prompt("Ingresa el precio"))

//la palabra number permite transformar a un numero real
//como ejemplo siempre es mejor crear la variable de manera global por fuera de la función
//como es el caso de "let iva" seria mejor usarla por fuera


function precioTotal(productoIngresado, precioProducto) {

    let iva = 21
    
    let ivaCalculado = precioProducto * iva / 100

    let final = ivaCalculado + precioProducto

    alert ("el precio final de " + productoIngresado + " con iva es: " + final)

} 
precioTotal(productoIngresado, precioProducto)

//cuando llamo a la función debo agregar los parametros que usé al crearla  */