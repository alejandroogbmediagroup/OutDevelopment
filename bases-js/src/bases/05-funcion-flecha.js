// function saludar(xyz) {
//     return `Hola ${xyz}`
// }
// const saludar = function(xyz) {
//     return `Hola ${xyz}`
// }
const saludar = (xyz) => `Hola ${ xyz }`



const nombre = 'd10'
console.log(saludar(nombre));

const getUser = () => ({
    uid: 'ABC123',
    username: 'Tony001'
})
console.log(getUser());
//Cuando se quiere retornar un objeto en una función de flecha se le agregan los parentesis.


const heroes = [{
    id: 1,
    name: 'Batman'
}, {
    id: 2,
    name: 'Superman'
}]

//const search = heroes.some((heroe) => heroe.id == 1);
// const search = heroes.find((heroe) => heroe.id == 1);
// console.log(search);

const { name } = heroes.find((heroe) => heroe.id == 1);
console.log(name)
    //Desestruracción de arreglos cuando se necesita propiedades del mismo arreglo.