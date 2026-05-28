// Problem-1:
const filterEvenNumbers=(array:number[])=>{
    const evenArray=array.filter(element=>element%2===0);
    return evenArray;
}

//Problem-2;
const reverseString=(str:string)=>{
    return str.split('').reverse().join('');
}

//Problem-3;
type StringOrNumber= string|number;
const checkType=(input:StringOrNumber)=>(typeof input==="string")?"String":"Number";

//Problem-4;
const getProperty=<T>(obj:T,key:keyof T)=>obj[key];

//Problem-5;
interface Book{
    title:string;author:string;publishedYear:number;
};
const toggleReadStatus=(obj:Book)=>{ 
    return{
        ...obj,
        isRead:true
    };
}

//Problem-6
abstract class Person {
    name:string;
    age:number;
    constructor(name:string,age:number) {
        this.name=name;
        this.age=age;
    }
};
class Student extends Person
{
    grade:string;
    constructor(name:string,age:number,grade:string)
    {
        super(name,age);
        this.grade=grade;
    }

    getDetails():string
    {
        return `Name:${this.name}, Age:${this.age}, Grade:${this.grade}`;
    }
};

//Problem-7

const getIntersection=(arr1:number[],arr2:number[])=>{
    let commonElements:number[]=[];
    for(let i=0;i<arr1.length;i++)
    {   
        for (let j = 0; j < arr2.length; j++)
        {   
            
            if(arr1[i]===arr2[j])
                {
                    commonElements.push(arr1[i]);
                }   
            
        }
    }
    return commonElements;
}