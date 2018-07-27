// Require del argv configurado con yargs
const argv = require('./config/yargs').argv;

// Require del extractor de coordenadas
const lugar = require('./lugar/lugar');

//console.log(argv.direccion);

lugar.getDireccionLatLng(argv.direccion)
    .then(resp => {
        console.log(resp);
    })
    .catch(e => console.log(e));