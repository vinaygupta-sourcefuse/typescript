
const numbers = [1, 2, 3, 4, 5];
let  iterator = numbers[Symbol.iterator](); // get the iterator from the array

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: 4, done: false }
console.log(iterator.next()); // { value: 5, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// iterator is an object with a next method that returns an object with two properties: value and done.
// value is the current value of the iterator and done is a boolean that indicates if the iterator has reached the end of the sequence.
// The iterator is a generator that generates the values of the array one by one.

// for of loop work seamlessly with iterators

for (let num of numbers) {
    console.log(num);
}
