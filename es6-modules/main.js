// In default import we can change the name of imported entity User -> Ur
// Words in curly brackets must match the origin exported names
//   but you can use AS keyword to rename materia
//   so previous name is not available then
import Ur, { printInfo, printAge } from '/user.js'

const usr = new Ur({name: 'Iskezqk', surname: 'Volkova', age: 20})

console.log(usr)

printInfo(usr)
printAge(usr)
