//  npm i -g typescript        // to install typescript
// tsc filename.ts                 // to run it
// tsc --watch                  // run for live

let number: number[] = [1,2,3,4,5,6] // Array of Number
let string: Array<string> = ["apple","banana"]  // Array of String
let readonlyArray: ReadonlyArray<number> = [1,2,3,4,5,6] // Readonly Array for immutable array

let mixedArray : (number | string)[] = [1, "radhe"] // Array of mixed type using Union
let mixedArray2 : Array<number | string> = [1, "radhe"] // Array of mixed type

let tupleVar : [number, string] = [1, "radhe"] // Tuple
let tupleWithRest : [number, string, ...string[]] = [1, "radhe", "radhe", "radhe"] // Tuple with rest

let obj: {name: string, age: number} = {
    name: "Radhe",
    age: 22
} // Object

let obj2: {name: string, age: number, address?: string} = {
    name: "Radhe",
    age: 22
} // Object with optional property


let obj3: {name: string, age: number, address: string, [key: string]: any} = {
    name: "Radhe",
    age: 22,
    address: "India",
    country: "India"
} // Object with key index signature 

let obj5: {name: string, age: number, address: string, [key: string]: any} = {
    name: "Radhe",
    age: 22,
    address: "India",
    country: "India",
    1: "Radhe"
} // Object with unknown property

let obj6: {name: string, age: number, address: string, [ID: number]: string} = {
    name: "Radhe",
    age: 22,
    address: "India",
    1: "Radhe",
    2: "Radhe"
} // Object with unknown property





// using type alias

type User = {
    name: string,
    age: number
}

let obj4: User = {
    name: "Radhe",
    age: 22
} // Object with type alias

type User2 = {
    name: string,
    age: number,
    address?: string
}   // Object with optional property    

let obj7: User2 = {
    name: "Radhe",
    age: 22
} // Object with type alias and optional property

type User3 = {
    name: string,
    age: number,
    address: string,
    [key: string]: any
} // Object with type alias and key index signature

let obj8: User3 = {
    name: "Radhe",
    age: 22,
    address: "India",
    country: "India"
} // Object with type alias and key index signature

type User4 = {
    name: string,
    age: number,
    address: string,
    [key: string]: any
} // Object with type alias and unknown property

let obj9: User4 = {
    name: "Radhe",
    age: 22,
    address: "India",
    country: "India",
    1: "Radhe"
} // Object with type alias and unknown property

type User5 = {
    name: string,
    age: number,
    address: string,
    [ID: number]: string
} // Object with type alias and unknown property

let obj10: User5 = {
    name: "Radhe",
    age: 22,
    address: "India",
    1: "Radhe",
    2: "Radhe"
} // Object with type alias and unknown property





// using interface

interface IUser {
    name: string,
    age: number
}

let obj11: IUser = {
    name: "Radhe",
    age: 22
} // Object with interface

interface IUser2 {
    name: string,
    age: number,
    address?: string
} // Object with optional property

let obj12: IUser2 = {
    name: "Radhe",
    age: 22
} // Object with interface and optional property

interface IUser3 {
    name: string,
    age: number,
    address: string,
    [key: string]: any
} // Object with interface and key index signature

let obj13: IUser3 = {
    name: "Radhe",
    age: 22,
    address: "India",
    country: "India"
} // Object with interface and key index signature

interface IUser4 {
    name: string,
    age: number,
    address: string,
    [key: string]: any
} // Object with interface and unknown property

let obj14: IUser4 = {
    name: "Radhe",
    age: 22,
    address: "India",
    country: "India",
    1: "Radhe"
} // Object with interface and unknown property

interface IUser5 {
    name: string,
    age: number,
    address: string,
    [ID: number]: string
} // Object with interface and unknown property

let obj15: IUser5 = {
    name: "Radhe",
    age: 22,
    address: "India",
    1: "Radhe",
    2: "Radhe"
} // Object with interface and unknown property




// using type alias and interface

type IUser6 = {
    name: string,
    age: number
}

interface IUser7 {
    address: string
}

let obj16: IUser6 & IUser7 = {
    name: "Radhe",
    age: 22,
    address: "India"
} // Object with type alias and interface

type IUser8 = {
    name: string,
    age: number,
    address?: string
}

interface IUser9 {
    country: string
}

let obj17: IUser8 & IUser9 = {
    name: "Radhe",
    age: 22,
    country: "India"
} // Object with type alias, interface and optional property

type IUser10 = {
    name: string,
    age: number,
    address: string,
    [key: string]: any
}

interface IUser11 {
    country: string
}

let obj18: IUser10 & IUser11 = {
    name: "Radhe",
    age: 22,
    address: "India",
    country: "India"
} // Object with type alias, interface and key index signature

type IUser12 = {
    name: string,
    age: number,
    address: string,
    [key: string]: any
}

interface IUser13 {
    country: string
}

let obj19: IUser12 & IUser13 = {
    name: "Radhe",
    age: 22,
    address: "India",
    country: "India",
    1: "Radhe"
} // Object with type alias, interface and unknown property

type IUser14 = {
    name: string,
    age: number,
    address: string,
    [ID: number]: string
}

interface IUser15 {
    country: string
}

let obj20: IUser14 & IUser15 = {
    name: "Radhe",
    age: 22,
    address: "India",
    country: "India",
    1: "Radhe",
    2: "Radhe"
} // Object with type alias, interface and unknown property

// using type alias, interface and class

type IUser16 = {
    name: string,
    age: number
}

interface IUser17 {
    address: string
}

class User18 {
    country: string
}

let obj21: IUser16 & IUser17 & User18 = {
    name: "Radhe",
    age: 22,
    address: "India",
    country: "India"
} // Object with type alias, interface and class

type IUser19 = {
    name: string,
    age: number,
    address?: string
}

interface IUser20 {
    country: string
}

class User21 {
    city: string
}   

let obj22: IUser19 & IUser20 & User21 = {
    name: "Radhe",
    age: 22,
    country: "India",
    city: "India"
} // Object with type alias, interface, class and optional property

type IUser23 = {
    name: string,
    age: number,
    address: string,
    [key: string]: any
}

interface IUser24 {
    country: string
}

class User25 {
    city: string
}

let obj23: IUser23 & IUser24 & User25 = {
    name: "Radhe",
    age: 22,
    address: "India",
    country: "India",
    city: "India"
} // Object with type alias, interface, class and key index signature

type IUser26 = {
    name: string,
    age: number,
    address: string,
    [key: string]: any
}

interface IUser27 {
    country: string
}

class User28 {
    city: string
}

let obj24: IUser26 & IUser27 & User28 = {
    name: "Radhe",
    age: 22,
    address: "India",
    country: "India",
    city: "India",
    1: "Radhe"
} // Object with type alias, interface, class and unknown property



