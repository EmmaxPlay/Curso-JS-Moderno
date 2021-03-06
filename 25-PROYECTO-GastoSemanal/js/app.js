//Variables y selectores
const formulario = document.querySelector("#agregar-gasto")
const gastoListado = document.querySelector("#gasto ul")

//Events
eventListeners  ()
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto)

    formulario.addEventListener('submit', agregarGasto)
}

//classes
class Presupuesto {
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto)
        this.restante = Number(presupuesto)
        this.gastos = []
    }

    nuevoGasto(gasto){
    this.gasto = [...this.gastos, gasto]
    console.log(this.gasto)
    }
}
class UI{
    insertarPresupuesto( cantidad ) {
        //Extraemos los valores
        const {presupuesto, restante} = cantidad

        //Add to HTML
        document.querySelector('#total').textContent = presupuesto
        document.querySelector('#restante').textContent = restante
    }

    //Print Error
    imprimirAlerta(mensaje, tipo){
        //crate div
        const divMensaje = document.createElement('div')
        divMensaje.classList.add("text-center", "alert")

        if (tipo === "error"){
            divMensaje.classList.add("alert-danger")
        }else{
            divMensaje.classList.add("alert-success")
        }

        //Mensaje error
        divMensaje.textContent = mensaje

        //Insert
        document.querySelector(".primario").insertBefore(divMensaje, formulario)

        //Remove
        setTimeout( () => {
            divMensaje.remove()
        },2000)
    }

    agregarGastoListado(gastos){


        //Iterar sobre los gastos
        gastos.forEach(gasto => {
            console.log(gasto)
        });
    }
}

//Instanciar
const ui = new UI()
let presupuesto

//Functions
function preguntarPresupuesto() {
    const presupuestoUsuario = prompt("Cual es tu presupuesto?")

    if(presupuestoUsuario === "" || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        window.location.reload()
    }
    presupuesto = new Presupuesto(presupuestoUsuario)

    ui.insertarPresupuesto(presupuesto)
}


//Add gastos
function agregarGasto(e){
    e.preventDefault()


    //Read data formulario
    const nombre = document.querySelector("#gasto").value
    const cantidad = Number(document.querySelector("#cantidad").value)

    //Validation
    if(nombre === "" || cantidad === ""){
        ui.imprimirAlerta("Ambos campos son obligatorios", "error")
        return
    } else if(cantidad <= 0 || isNaN(cantidad)){
        ui.imprimirAlerta("Cantidad no valida", "error")
        return
    }
    
    //Generar un objeto con el gasto
    const gasto = { nombre, cantidad, id: Date.now() }

    //A??ade un nuevo gasto
    presupuesto.nuevoGasto(gasto)

    ui.imprimirAlerta("Gasto agregado correctamente", "success")

    //imprimir los gastos
    const {gastos} = presupuesto
    ui.agregarGastoListado(presupuesto)


    //reinicia el formulario
    formulario.reset()

}