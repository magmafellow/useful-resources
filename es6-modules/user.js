class User {
  constructor (props) {
    this.name = props.name
    this.surname = props.surname
    this.age = props.age
  }
}

function printInfo(user) {
  console.log(`User's name and surname are [${user.name} ${user.surname}]`)
}

function printAge(user) {
  console.log(`User's age is ${user.age}`)
}

const user1 = new User({name: 'Alex', surname: 'Ivanov', age: 18})

console.log(user1)

printInfo(user1)
printAge(user1)


export default User
export { printAge, printInfo }
