const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

console.log('Fruits: ' + JSON.stringify(fruits));

console.log('Length of Fruits: ' + fruits.length);

console.log('Element at Index 2: ' + JSON.stringify(fruits[2]));

console.log(
  'Last Element of Fruits: ' + JSON.stringify(fruits[fruits.length - 1])
);

const vegetables = [];

for (let i = 0; i < 3; i++) {
  const vegetable = prompt('Enter a vegetable');
  vegetables.push(vegetable);
}

console.log('Vegetables: ' + JSON.stringify(vegetables));

console.log('Length of vegetables: ' + vegetables.length);
