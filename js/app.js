// variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];



// event listeners
eventListeners();

function eventListeners() {
    formulario.addEventListener('submit', agregarTweet);
};



// funciones
function agregarTweet(e) {
    e.preventDefault();

    // textarea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;

    // validacion del tweet
    if (tweet === ''){
        mostrarError('No puedes agregar un mensaje vacio');

        return; // utilizamos return con el fin de que no se ejecute ninguna linea mas despues del mensaje
    }
};


// mostrar error
function mostrarError(error) {
    const mensajeError = document.createElement('P');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    // insertarlo en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

};