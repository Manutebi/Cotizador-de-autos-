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