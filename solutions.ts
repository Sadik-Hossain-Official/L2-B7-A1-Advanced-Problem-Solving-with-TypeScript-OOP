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

