# How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?

Generics help us write reusable code while still keeping type safety.  
Instead of writing the same function for different data types, we can create one flexible function that works for all types.

### Problem without Generics

Example:

```ts
function getValue(value: string): string {
  return value;
}
```

This function only works with strings.
If we want numbers too, we must write another function.

```ts
function getNumber(value: number): number {
  return value;
}
```

This creates repeated code and this also could make our code robust.

### Solution with Generics

Example:

```ts
function getValue<T>(value: T): T {
  return value;
}
console.log(getValue<string>("Hello"));
console.log(getValue<number>(10));
```

Here, `T` is a generic type.  
If we pass a string, `T` becomes string.  
If we pass a number, `T` becomes number.  
So, generics make code **reusable**, **flexible**, and **strictly typed at the same time**.

