const products = [
  {
    title: 'Phone case',
    price: 23,
    quantity: 2,
    category: 'Accessories'
  },
  {
    title: 'Android phone',
    price: 150,
    quantity: 1,
    category: 'Phones'
  },
  {
    title: 'Headphones',
    price: 78,
    quantity: 1,
    category: 'Accessories'
  },
  {
    title: 'Sport watch',
    price: 55,
    quantity: 2,
    category: 'Watches'
  }
];

const quantityByCategories = products => {
  return products.reduce((qtyObj, itemObj) => {
    if (qtyObj[itemObj.category] === undefined) qtyObj[itemObj.category] = 0;
    qtyObj[itemObj.category] += itemObj.quantity;
    return qtyObj;
  }, {})
}

console.log(quantityByCategories(products));
