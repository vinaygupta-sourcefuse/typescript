
To use decorators in TypeScript, you need to enable the `experimentalDecorators` option in your `tsconfig.json`.

Here’s a brief rundown of how decorators work:

### 1. **Class Decorator:**
   A class decorator is applied to the class constructor. It’s a function that takes the class constructor as an argument.

   ```typescript
   function MyClassDecorator(target: Function) {
     console.log("Class decorator called for", target);
   }

   @MyClassDecorator
   class MyClass {
     constructor(public name: string) {}
   }
   ```

   Here, the `MyClassDecorator` gets called when `MyClass` is defined.

### 2. **Method Decorator:**
   A method decorator is applied to a method of a class and allows you to modify or observe the method’s behavior.

   ```typescript
   function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
     const originalMethod = descriptor.value;
     descriptor.value = function (...args: any[]) {
       console.log(`Calling method ${propertyKey} with arguments`, args);
       return originalMethod.apply(this, args);
     };
     return descriptor;
   }

   class MyClass {
     @Log
     greet(name: string) {
       console.log(`Hello, ${name}!`);
     }
   }

   const obj = new MyClass();
   obj.greet("Alice");
   ```

   This logs the method call and its arguments before executing the original method.

### 3. **Property Decorator:**
   Property decorators can be used to add metadata or change the behavior of class properties.

   ```typescript
   function Observable(target: any, propertyKey: string) {
     let value = target[propertyKey];

     const getter = () => value;
     const setter = (newVal: any) => {
       console.log(`Setting value of ${propertyKey} to ${newVal}`);
       value = newVal;
     };

     Object.defineProperty(target, propertyKey, {
       get: getter,
       set: setter,
     });
   }

   class MyClass {
     @Observable
     name: string;

     constructor(name: string) {
       this.name = name;
     }
   }

   const obj = new MyClass("John");
   obj.name = "Jane";
   ```

   When the `name` property is set, the setter logs the change.

### 4. **Parameter Decorator:**
   Parameter decorators are used for annotating parameters in methods. These are less common but still useful for things like dependency injection or validation.

   ```typescript
   function LogParam(target: any, methodName: string, paramIndex: number) {
     console.log(`Parameter decorator applied to method: ${methodName} at index: ${paramIndex}`);
   }

   class MyClass {
     greet(@LogParam name: string) {
       console.log(`Hello, ${name}`);
     }
   }
   ```

   This decorator logs whenever the `greet` method’s parameter is accessed.

### Enabling Decorators:
In `tsconfig.json`, you need to make sure the following compiler option is enabled:
```json
{
  "compilerOptions": {
    "experimentalDecorators": true
  }
}
```
