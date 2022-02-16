const person = {
    name: 'Tony',
    age: '45',
    codeName: 'Ironman'
}
const { name, age, codeName, power = 'Nothing' } = person

// console.log(name)
// console.log(age)
// console.log(codeName)
// console.log(power)
const createHero = ({ name: nombre, age, codeName, power }) =>
    ({
        id: 121232323,
        name: nombre,
        age,
        codeName,
        power,
    })

console.log(createHero(person))