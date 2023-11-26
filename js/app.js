// Constructores

function Seguro(marca, year, tipoSeguro) {
    this.marca = marca;
    this.marca = year;
    this.marca = tipoSeguro;
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

//Instancioar UI
const ui = new UI();
console.log(ui);

document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones() // Llena el select con los años
})

eventListeners();
function eventListeners() {
    const formulario = document.querySelector('#cotizar-seguro')
    formulario.addEventListener('submit', cotizarSeguro)
}

function cotizarSeguro(e) {
    e.preventDefault();
    console.log('Cotizando...');

    //Leer la marca seleccionado
    const marca = document.querySelector('#marca').value;
    // console.log(marca);

    //Leer el año
    const year = document.querySelector('#year').value;
    // console.log(year);

    //Leer el tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    // console.log(tipo);

    if (marca === '' || year === '' || tipo === '') {
        console.log('No paso la validaion');
    } else {
        console.log('Si paso la validacion');
    }

}