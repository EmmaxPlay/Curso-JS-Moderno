//Variables
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");

//Contenedor para los resultados
const resultado = document.querySelector("#resultado");


const max = new Date().getFullYear();
const min = max - 10;


//Generar un objeto con la busqueda
const datosBusqueda = {
    marca:'',
    year:'',
    minimo:'',
    maximo:'',
    puertas:'',
    transmision:'',
    color:'',
}

//Eventos


document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(); //muestra los resultados al cargar


    //Llena las opciones de año
    llenarSelect()
} )

//EventListener para los formularios
marca.addEventListener('change',(e) => {
    datosBusqueda.marca = e.target.value;

    filtrarAutos()
})
year.addEventListener('change',(e) => {
    datosBusqueda.year = e.target.value;

    console.log(datosBusqueda)
})
minimo.addEventListener('change', (e) => {
    datosBusqueda.minimo = e.target.value;

    console.log(datosBusqueda)
})
maximo.addEventListener('change',(e) =>{
    datosBusqueda.maximo = e.target.value;

    console.log(datosBusqueda)
})
puertas.addEventListener('change',(e) => {
    datosBusqueda.puertas = e.target.value;

    console.log(datosBusqueda)
})
transmision.addEventListener('change',(e) => {
    datosBusqueda.transmision = e.target.value;
    console.log(datosBusqueda)
})
color.addEventListener('change',(e) =>{
    datosBusqueda.color = e.target.value;

    console.log(datosBusqueda)
})
//Funciones

function mostrarAutos() {
    autos.forEach( auto => {
        const {marca, modelo, year, puertas, transmision, precio, color} = auto
        const autoHTML = document.createElement("p");

        autoHTML.textContent = `${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} Color: ${color}` ;

        //Insertamos en el HTML
        resultado.appendChild(autoHTML)
    })
}

//Genera los años del select
function llenarSelect(){

    for( let i = max; i >= min; i-- ){
        const opcion = document.createElement("option");
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);//Agrega las opciones del año al select
    }

}

//Filtrando los autos
function filtrarAutos(){
    const resultado = autos.filter( filtrarMarca );
    console.log(resultado);
}
function filtrarMarca(auto){
    const{ marca } = datosBusqueda;
 if( marca){
     return auto.marca === marca;
 }
 return auto;   
}