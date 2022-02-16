const characters = ['Goku', 'Vegeta', 'Trunks']
const [, , t] = characters
console.log(t);

const returnArray = () => { return ['ABC', 123] }
const [letters, numbers] = returnArray()
console.log(letters, numbers);