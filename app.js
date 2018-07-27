// Require del argv configurado con yargs
const argv = require('./config/yargs').argv;

// Require del extractor de coordenadas
const lugar = require('./lugar/lugar');

// Require del extractor de clima
const clima = require('./clima/clima');

//console.log(argv.direccion);

lugar.getDireccionLatLng(argv.direccion)
    .then(resp => {
        //console.log(resp);
        clima.getClima(resp.lat, resp.lng)
            .then(resp2 => {
                console.log(`\n\t${resp.direccion}.\n\tUbicación: Latitud ${resp.lat}, Longitud ${resp.lng}).\n\tTemperatura actual: ${resp2.temp}°C.\n`);
            })
            .catch(e => console.log(e));
    })
    .catch(e => console.log(e));