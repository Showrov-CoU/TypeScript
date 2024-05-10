# The significance of Union and Intersection types in Typescript.

In this blog, we will explore and understand the significance of union and intersection types in TypeScript with precise code examples.

## Union Types:

Union types in TypeScript allow us to define a variable or parameter that can hold values of multiple types. To create a union type, use the `|` operator between the types within parentheses.

```tsx
// Union type example
type Status = "active" | "inactive" | "pending";

function setStatus(status: Status) {
// Function logic
}
```

In the above example, the Status type is a union of three string literals - `"active,"` `"inactive"` and `"pending."` The setStatus function can now accept any of these three values as its argument.

### Handling Union Types:

When working with variables or parameters of `union` types, TypeScript offers  `type guards` and conditional checks to narrow down the possible types and perform specific actions accordingly.

```tsx
type Result = number | string;

function processResult(result: Result) {
    if (typeof result === "number") {
        // Handle number type
    } else if (typeof result === "string") {
        // Handle string type
    }
}
```
In this example, the processResult function uses typeof `type guards` to determine if the result argument is of type `number` or `string` and then handles each case accordingly.


## Intersection Types:

Intersection types in TypeScript combine multiple types into a single type.

```tsx
// Intersection type example
type Person = {
  name: string;
  age: number;
};

type Employee = {
  company: string;
  position: string;
};

type EmployeePerson = Person & Employee;

const employee1: EmployeePerson = {
  name: "John Doe",
  age: 30,
  company: "ABC Corp",
  position: "Software Engineer",
};
```

In this example, `Person` and `Employee` are different types and then create an `EmployeePerson` type by intersecting them. The resulting `EmployeePerson` type holds all properties from both `Person` and `Employee` types.


## Conclusion:

Union and Intersection types are powerful tools that enhance the flexibility and expressiveness of TypeScript. In short, union types offer flexibility by allowing variables to hold multiple types of values, while intersection types provide composability by combining the features of multiple types into a single type.


