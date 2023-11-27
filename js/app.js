// Constructores

function Seguro(marca, year, tipoSeguro) {
    this.marca = marca;
    this.year = year;
    this.tipoSeguro = tipoSeguro;
}
//Realizar la cotizacion con los datos

Seguro.prototype.cotizarSeguro = function () {

    // 1 = Americano 1,25
    // 2 = Asiatico 1.05
    // 3 = Europep 1.35

    let cantidad;
    const base = 2000;

    switch (this.marca) {
        case '1':
            cantidad = base * 1.15
            break;
        case '2':
            cantidad = base * 1.05
            break;
        case '3':
            cantidad = base * 1.35
            break;

        default:
            break;
    }

    //Leer el año 
    const diferencia = new Date().getFullYear() - this.year;

    //Cada año donde la diferencia es mayoor, el costo va reducirse un 3%
    cantidad -= ((diferencia * 3) * cantidad) / 100;

    /*
        Si el seguro es bascio se multiplica por un 30% mas
        Si el seguro es completo se multiplica por un 50% mas
    */

    if (this.tipo === 'basico') {
        cantidad *= 1.30;
    } else {
        cantidad *= 1.50;
    }

    return cantidad;
    // console.log(cantidad);
}

function UI() { }

//Llena las opciones de los años

UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear(),
        min = max - 20;
    const selectYear = document.querySelector('#year')

    for (let i = max; i > min; i--) {
        let option = document.createElement('option')
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}

// Muestra alertas en pantalla, 
UI.prototype.mostrarMensaje = (mensaje, tipo) => {

    const div = document.createElement('div');
    if (tipo === 'error') {
        div.classList.add('error');
    } else {
        div.classList.add('correcto');
    }
    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;
    //Insertar en html
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout(() => {
        div.remove
    }, 3000);
}


//Instancioar UI
const ui = new UI();
console.log(ui);


document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones() // Llena el select con los años
})

eventListeners();
function eventListeners() {
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro)
}

function cotizarSeguro(e) {
    e.preventDefault();
    // console.log('Cotizando...');

    //Leer la marca seleccionado
    const marca = document.querySelector('#marca').value;
    console.log(marca);

    //Leer el año
    const year = document.querySelector('#year').value;
    // console.log(year);

    //Leer el tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    // console.log(tipo);

    if (marca === '' || year === '' || tipo === '') {
        ui.mostrarMensaje('Todos los campos son obligatorios', 'error');
        return;
    }

    ui.mostrarMensaje('Cotizando...', 'correto');

    //Instanciar el seguro

    const seguro = new Seguro(marca, year, tipo)
    seguro.cotizarSeguro();


    //Utilizar el prototype que va a cotizar

}