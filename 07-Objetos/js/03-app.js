const producto = {
    nombre: "monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

//Agregar nuevas propiedades al objeto
producto.imagen = "imagen.jpg";
delete producto.disponible;

console.log(producto);