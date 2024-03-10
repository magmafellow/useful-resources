const myCities = ['London', 'New York', 'Singapore'];

const cityInfo = (name, index) => `${name} is located at the index ${index} in the myCities array`;

// opt #1
for (let i = 0; i < myCities.length; i++) {
  console.log(cityInfo(myCities[i], i));
}

console.log('----------------------');
// opt #2
myCities.forEach((value, index) => console.log(cityInfo(value, index)));
