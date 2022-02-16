const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 4354543534,
        lat: 67.56756896,
        lng: 56.56565
    }
}

const persona2 = {...persona }
    //operador spree sirve para romper la referencia de un objeto y se pueda modificar desde otro

persona2.nombre = 'Peter'








console.log(persona)
console.log(persona2)