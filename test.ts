// Define an interface for a user
interface User {
    id: number;
    name: string;
    email: string;
}

// Correct usage
const user: User = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com"
};

// Incorrect usage - TypeScript will throw an error
// const invalidUser: User = {
//     id: 1,
//     name: "John Doe"
//     // Error: Property 'email' is missing in type '{ id: number; name: string; }' but required in type 'User'.
// };