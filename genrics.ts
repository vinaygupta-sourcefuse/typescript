class Student<T>{
    
    value : T;

    constructor(value :T){
        this.value = value
    }

    getValue(): T{
        return this.value;
    }
}

const number = new Student(42)
console.log(number.getValue)

const StudentName = new Student("Vinay")
console.log(StudentName.getValue)



//-------------------
// Generic function
function identity<T>(arg: T): T {
    return arg;
}

console.log(identity<number>(10));
console.log(identity<string>("Hello"));


// -----------------------Generic interface
interface Pair<T, U> {
    first: T;
    second: U;
}

const pair: Pair<number, string> = { first: 1, second: "one" };
console.log(pair);

// -------------------Generic constraint
function loggingIdentity<T extends { length: number }>(arg: T): T {
    console.log(arg.length);
    return arg;
}

loggingIdentity("Hello");
loggingIdentity([1, 2, 3]);

//------------------- Generic class with multiple types
class KeyValuePair<K, V> {
    private key: K;
    private value: V;

    constructor(key: K, value: V) {
        this.key = key;
        this.value = value;
    }

    getKey(): K {
        return this.key;
    }

    getValue(): V {
        return this.value;
    }
}

const kvp = new KeyValuePair<number, string>(1, "one");
console.log(kvp.getKey());
console.log(kvp.getValue());

