function GroceryItem(title, kind) {
  console.log(this);
  this.title = title;
  this.kind = kind;
}

const apple = new GroceryItem('apple', 'fruit');

console.log(apple);
