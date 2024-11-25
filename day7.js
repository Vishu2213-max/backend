let array = [10, 20, 30, 40, 50];

array.push(60);
console.log("After push (add to end):", array);

array.pop();
console.log("After pop (remove from end):", array);

array.unshift(5);
console.log("After unshift (add to beginning):", array);

array.shift();
console.log("After shift (remove from beginning):", array);

let index = array.indexOf(30);
console.log("Index of 30:", index);

if (index !== -1) {
  array.splice(index, 2);
  console.log("After removing 30 by index:", array);
}

array.splice(2, 0, 35);
console.log("After inserting 35 at index 2:", array);

array.reverse();
console.log("After reversing:", array);

array.sort((a, b) => a - b);
console.log("After sorting in ascending order:", array);

array.sort((a, b) => b - a);
console.log("After sorting in decending order:", array);

let filteredArray = array.filter(num => num > 25);
console.log("Filtered elements greater than 25:", filteredArray);

let squaredArray = array.map(num => num * num);
console.log("Squared elements:", squaredArray);

let allGreaterThanFive = array.every(num => num > 5);
console.log("Are all elements greater than 5?", allGreaterThanFive);

let someGreaterThan45 = array.some(num => num > 45);
console.log("Are some elements greater than 45?", someGreaterThan45);

let sum = array.reduce((acc, num) => acc + num, 0);
console.log("Sum of all elements:", sum);

let slicedArray = array.slice(1, 4);
console.log("Sliced portion of the array:", slicedArray);

let newArray = array.concat([70, 80, 90]);
console.log("After concatenation:", newArray);

let foundElement = array.find(num => num > 20);
console.log("First element greater than 20:", foundElement);

let arrayString = array.join(", ");
console.log("Array as a string:", arrayString);

console.log("Final array:", array);