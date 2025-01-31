//function declration
function add(a: number, b: number): number { // type annotation with return type annotation
    return a + b;
}

let sum: number = add(1, 2);

//function expression
const multiply = (a: number, b: number): number => a * b; // type annotation with return type annotation
let product: number = multiply(2, 3);

//optional parameter
function optionalParam(a: number, b?: number): number {
    return a + (b ? b : 0);
}
let sum1: number = optionalParam(1);

//default parameter
function defaultParam(a: number, b: number = 0): number {
    return a + b;
}
let sum2: number = defaultParam(1);

//rest parameter
function restParam(a: number, ...b: number[]): number { // initial value of a is 1, b is an array of numbers starting from 2
    return a + b.reduce((acc, val) => acc + val, 0); // val is the current value with initial value 2, acc is the accumulator with initial value 0
}
let sum3: number = restParam(1, 2, 3, 4, 5);

//function overload
function add1(a: number, b: number): number;
function add1(a: string, b: string): string;
function add1(a: any, b: any): any {
    return a + b;
}
let sum4: number = add1(1, 2);
let sum5: string = add1('1', '2');

