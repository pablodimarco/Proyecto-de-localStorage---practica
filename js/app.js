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
    };

    const tweetObj = {
        id: Date.now(),
        tweet //en js moderno si el nombre de la propiedad dentro del objeto es igual a la variable que recibe la propiedad como valor se puede colocar solo una vez el nombre 

    };

    // añadir al arreglo de tweets
    tweets = [...tweets,...tweetObj];

    // crear HTML
    crearHTML();

    // reiniciar el formulario
    formulario.reset();

};


// mostrar error
function mostrarError(error) {
    const mensajeError = document.createElement('P');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    // insertarlo en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    setTimeout(() => {
        mensajeError.remove();
    },3000);

};

// funcion que muestra el listado de los tweets
function crearHTML() {

    limpiarHTML();

    if(tweets.length > 0) {
        tweets.forEach(tweet => {
            // crear el HTML

            const li = document.createElement('li');

            // añadir el texto
            li.innerHTML = tweet.tweet;

            // insertarlo en el html
            listaTweets.appendChild(li)
        })
  ;  }
};

// limpiar HTML
function limpiarHTML() {
    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    };
};