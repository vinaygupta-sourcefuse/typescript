// **1. Basic Differences**
// | Feature             | `interface` | `type` |
// |---------------------|------------|--------|
// | **Declaration** | `interface Person { name: string; age: number; }` | `type Person = { name: string; age: number; }` |
// | **Extensibility** | Can be extended using `extends` | Can be extended using intersection (`&`) |
// | **Merging** | Interfaces can merge | Types do not merge |
// | **Use Cases** | Best for defining object structures and classes | Best for unions, primitives, and function types |



//  **2. Extensibility**
//  ✅ **Extending an Interface**
// Interfaces can be extended using `extends`:

interface Person1 {
  name: string;
}

interface Employee1 extends Person1 {
  role: string;
}

const emp1: Employee1 = { name: "John", role: "Developer" };


//  ✅ **Extending a Type using Intersection (`&`)**
// Types don’t use `extends`, but can be combined using `&`:

type Person2 = { name: string };
type Employee2 = Person2 & { role: string };

const emp2: Employee2 = { name: "John", role: "Developer" };


//  **3. Declaration Merging (Only for Interfaces)**
// Interfaces automatically merge when declared multiple times:

interface UserA {
  name: string;
}

interface UserA {
  age: number;
}

const u: UserA = { name: "Alice", age: 25 }; // Merges both declarations

// However, this doesn't work with `type`:


// type UserB = { name: string };
// type UserB = { age: number }; // ❌ Error: Duplicate identifier 'User'



// **4. Using with Functions**
// Both `type` and `interface` can define function types, but `type` is more common:

// With type
type Greet1 = (name: string) => string;

// With interface
interface Greet2 {
  (name: string): string;
}




//  **5. When to Use What?**
// | Use Case | `interface` | `type` |
// |----------|------------|--------|
// | Object shapes | ✅ Preferred | ✅ Works |
// | Extending other types | ✅ `extends` | ✅ `&` (intersection) |
// | Function types | ✅ But less common | ✅ More common |
// | Primitive types, unions, tuples | ❌ Not supported | ✅ Best choice |
// | Declaration merging | ✅ Supported | ❌ Not supported |


//  **6. Final Thoughts**
// - Use **`interface`** when defining object shapes, especially when you need extendability and declaration merging.
//  Use **`type`** when working with unions, primitives, function types, or complex compositions.




// learn more cases about interface and type alias in most proper usages of them.

// Start with the type alias

type bool = true | false;
function printBool(bool: bool) {
  console.log(`Boolean value is: ${bool}`);
}


// Using a union type which is not possible with interfaces
type StringOrNumber = string | number;  // treated as a single type 'string or number'

function printId(id: StringOrNumber) {
    if (typeof id === "string") {
        console.log(`ID is a string: ${id}`);
    } else {
        console.log(`ID is a number: ${id}`);
    }
}

printId("abc123");
printId(123);


// Using an intersection type with type alias
type Dog = { name: string , type: string | number};    
type Cat = { name: string ,};

let pet: Dog & Cat = { name: "Tommy" , type: "Dog" }; // both name are merged and type is added
let petTest: Dog | Cat = { name: "Tommy" , type: "Dog" }; // both name are merged and type is added

console.log(pet); // { name: 'Tommy', type: 'Dog' }
console.log(petTest); // { name: 'Tommy', type: 'Dog' }


// Using an intersection type with interfaces   
interface Dog1 { name: string , type: string | number};
interface Cat1 { name: string ,};

let pet1: Dog1 & Cat1 = { name: "Tommy" , type: "Dog" }; // both name are merged and type is added
let pet2: Dog1 | Cat1 = { name: "Tommy" , type: "Dog" }; // both name are merged and type is added

console.log(pet1); // { name: 'Tommy', type: 'Dog' }
console.log(pet2); // { name: 'Tommy', type: 'Dog' }




type Admin = { role: string; level: number };
type TUser1 = { username: string; email: string };

type AdminOrUser = Admin | TUser1;

function printInfo(person: AdminOrUser) {
    if ('role' in person) {
        console.log(`Admin with role: ${person.role}`);
    } else {
        console.log(`User with username: ${person.username}`);
    }
}

printInfo({ role: "Manager", level: 3 });  // Admin with role: Manager
printInfo({ username: "john_doe", email: "john@example.com" });  // User with username: john_doe



interface Animal {
    name: string;
    age: number;
}

interface IDog extends Animal {
    breed: string;
}

const myDog: IDog = { name: "Buddy", age: 5, breed: "Golden Retriever" };

console.log(myDog);  // { name: 'Buddy', age: 5, breed: 'Golden Retriever' }