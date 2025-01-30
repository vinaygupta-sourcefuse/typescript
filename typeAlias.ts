type StringAlias = string;
let myString: StringAlias = "Hello, TypeScript!";

type TUser = {
    name: string;
    age: number;
};

let user: TUser = {
    name: "John Doe",
    age: 30
};

console.log(user);

type BooleanAlias = boolean;
let myBoolean: BooleanAlias = true;

type NumberAlias = number;
let myNumber: NumberAlias = 100;

type ObjectAlias = { name: string; age: number };
let myObject: ObjectAlias = { name: "John Doe", age: 30 };

type ArrayAlias = string[];
let myArray: ArrayAlias = ["Hello", "TypeScript"];

type TupleAlias = [string, number];
let myTuple: TupleAlias = ["Hello", 100];

type UnionAlias = string | number;
let myUnion: UnionAlias = "Hello";

type IntersectionAlias = TUser & ObjectAlias;
let myIntersection: IntersectionAlias = { name: "John Doe", age: 30 };

type FunctionAlias = (x: number) => void;
let myFunction: FunctionAlias = (x) => console.log(x);

type ConstructorAlias = new (name: string, age: number) => TUser; //  ConstructorAlias is a type alias for a constructor function of TUser
class UserClass implements TUser {
    constructor(public name: string, public age: number) {}
}
let myConstructor: ConstructorAlias = UserClass; // myConstructor is a type alias for UserClass

type ClassAlias = typeof UserClass; // ClassAlias is a type alias for UserClass
let myClass: ClassAlias = UserClass; // myClass is a type alias for UserClass

