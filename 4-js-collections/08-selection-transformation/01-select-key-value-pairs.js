// Let's look at an example with objects. In this example, we want to select the
// key-value pairs where the value is 'Fruit'.

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit(foodObj) {
  let fruitObj = {};
  
  for (const foodItem in foodObj) {
    if (foodObj[foodItem] === 'Fruit') {
      fruitObj[foodItem] = foodObj[foodItem];
    }
  }

  console.log(fruitObj);
}

selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }

// Notice that:
//    - The original argument, produceList, is not mutated.
//    - A new object is returned by the function (as opposed to an array).