class Vehicle {
  constructor (props) {
    this.type = props.type // <string> air / ground / water
    this.velocity = props.velocity // <int>
  }

  vhclInfo () {
    return `Vehicle info - type is ${this.type} and velocity is ${this.velocity} miles per hour`
  }
}

class Car extends Vehicle {
  constructor (props) {
    super(props)
    this.label = props.label // <string> 'BMW' / 'Mercedes' / 'Ferrari'
    this.price = props.price // <int> 100_000 in dollars
    this.inShape = props.inShape // <boolean> true / false
  }

  getInfo() {
    return `It is Car ${this.label}. Price is ${this.price} so ${this.label} in good shape-${this.inShape}`
  }
}

class SportCar extends Car {
  constructor (props) {
    super(props)
    this.velocity = props.velocity
    this.sport = true;
  }

  sportDetail () {
    return `This is Sport car ${this.label} has velocity ${this.velocity}`
  }
}


const forBMW = {
  type: 'ground',
  velocity: 250,
  label: 'BMW',
  price: 100000,
  inShape: true,
}
const carBMW = new Car(forBMW)

const forMercedes = {
  type: 'ground',
  velocity: 230,
  label: 'Mercedes',
  price: 70000,
  inShape: false,
}
const carMercedes = new Car(forMercedes)

// console.log(carBMW)
// console.log(carMercedes)

console.log(carBMW.getInfo())
console.log('---------------------------')

console.log(carMercedes.getInfo())
console.log(carMercedes.vhclInfo())
console.log('---------------------------')

const forFerrari = {
  type: 'ground',
  // equialent for speed (speed <=> velocity)
  velocity: 700,
  label: 'Ferrari',
  price: 197003,
  inShape: true,
  // speed: 700,
}
const carFerrari = new SportCar(forFerrari)

console.log(carFerrari.vhclInfo())
console.log(carFerrari.getInfo())
console.log(carFerrari.sportDetail())
