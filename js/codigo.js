 
/* 

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
/* 
const medicamento={
    nombre:"Ventolin",
    droga:"Salbutamol",
    mg:"250",
    dosis:"200",
    precio: 1500,
    clientes:["Marcos", "Jose"]
}

console.log(medicamento.clientes[0]) */

const listaMedicamentos=[];

let cantidad= 3;

do{
    let entrada= prompt("Ingresar Medicamento");
    listaMedicamentos.push(entrada);
    console.log(listaMedicamentos.length);

}while(listaMedicamentos.length!=cantidad)


alert(listaMedicamentos);


const topProductosinformaticos= ["Computadora", "Mouse", "Teclado", "Monitor"];

for (let index = 0; index < 4; index++) {
    alert("Los mejores son: " + topProductosinformaticos[index]);
    
}