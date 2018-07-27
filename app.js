// Require del argv configurado con yargs
const argv = require('./config/yargs').argv;

// Require del extractor de coordenadas
const lugar = require('./lugar/lugar');

// Require del extractor de clima
const clima = require('./clima/clima');

//console.log(argv.direccion);

let getInfo = async(direccion) => {
    try {
        let ubicacion = await lugar.getDireccionLatLng(direccion);
        let climaRes = await clima.getClima(ubicacion.lat, ubicacion.lng);
        return `\n\t${ubicacion.direccion}.\n\tUbicación: Latitud ${ubicacion.lat}, Longitud ${ubicacion.lng}).\n\tTemperatura actual: ${climaRes.temp}°C.\n`;
    } catch (e) {
        console.log(e);
        return `\n No hay resultados para la dirección solicitada (${direccion}).\n`;
    }
};

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));