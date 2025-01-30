// <!-- npm i -g typescript // to install typescript
// tsc filename.ts // to run it
// tsc --watch // run for live -->

let number: number[] = [1,2,3,4,5,6] // Array of Number
let string: Array<string> = ["apple","banana"]  // Array of String

let mixedArray : (number | string)[] = [1, "radhe"] // Array of mixed type
let mixedArray2 : Array<number | string> = [1, "radhe"] // Array of mixed type

let mixedArray3 : [number, string] = [1, "radhe"] // Tuple
let tupleWithRest : [number, string, ...string[]] = [1, "radhe", "radhe", "radhe"] // Tuple with rest

let obj: {name: string, age: number} = {
    name: "Radhe",
    age: 22
} // Object

