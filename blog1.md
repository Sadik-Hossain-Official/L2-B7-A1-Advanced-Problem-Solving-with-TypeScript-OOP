# Why is `any` labeled a "type safety hole," and why is `unknown` the safer choice for handling unpredictable data? Explain the concept of `type narrowing`.
---  
`any` and `unknown` both are basically used for same perpose(for the annonymus or unknown types), but they work if different approch.  

### ***`any` type and Why is `any` called a “type safety hole”?***
---
We use `any` type when we don't know the type of our data or when we just want to do some operation where initially we do not need type strictness.  
But, there is a limitation in this type that it `disables the type checking of typescript`. For this reason `any` type is called the *`type safety hole`*.  

<u>**Example:**</u>  

```ts
let x:any='x';
let X=x.toUpperCase(); //works properly;
console.log(X);// output: X
//but if we make x=10 a number type 
x=10;//this should show a type error but it is not showing any kind of error while compiling for 'any' type 
console.log(x.toUpperCase()); //here, in the runtime it will show an error and programm crashes ;
``` 
---
### **`unknown`type and why is `unknown` the safer choice for handling unpredictable data?**
---
In case of `unknown` type we also use it for the same reason as `any` type but here the advantage is it doesn't disable the typescript type checking feature.  
When we use this type it will allow you to assign any kind of value but when you will ***try to do some operation on this*** then you might get some ***`error`*** where it says to ***`check the type before doing the operation`***.   

<u>**Example:**</u>

```ts
let x:unknown='x';
if(typeof x==="string")
{
    console.log(x.toUpperCase());
}
//here ts first asks us to confirm the type of the value; which was not available for type 'any';
```
---

## What is type narrowing?

Type narrowing is one kind of type checking or somtime it is called the `type guard`.
It can be achivable in many ways into our code such as using- instanceof ,typeof, in operators.  
**How does they work?**
```ts
/**
 * 'in' operator: it checks for the exictance of a property on an object.It's usefull for narrowing the union types*/
type normalUser={name:string;};
type adminUser={name:string;role:"Admin";};
const getUserInfo=(user:normalUser|adminUser)=>{
        if("role" in user) //using in operator or keyword; 
        {
            console.log(`${user.name} has role ${user.role}`);
        }
        else
        {
            console.log(`${user.name} has no role`);
        }
    }
getUserInfo({name:"Karim",role:"Admin"});

//typeof operator or keyword: The typeof operator is a built-in type guard that checks the type of a primitive value at runtime. It's particularly useful for narrowing primitive types like strings, numbers, booleans, etc.

const add=(num1:number|string,num2:number|string)=> (typeof num1==="number"&&typeof num2==="number")?num1+num2:num1.toString()+num2.toString();

console.log(add(2,3));
console.log(add(2,"3"));
console.log(add("2",3));
console.log(add("2","3"));

//instanceof operator or keyword: It checks if an object is instance of a specific class or constructor function.

class Person{
    name:string;
    constructor(name:string)
    {
        this.name=name;
    }
    dailySleep(hours:number)
    {
        console.log(`${this.name} sleeps ${hours} hours daily`);
    }
};

class Student extends Person
{
    constructor(name:string)
    {
        super(name);
    }
    doStudy(hours:number)
    {
        console.log(`${this.name} studies ${hours} hours daily`);
    }
};

console.log(Student instanceof Person);//it will return a boolean value;
   
```

