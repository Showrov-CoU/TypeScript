//const rollNumber:number[] = [1,2,3];

type GenericArray<T> = Array<T>;

const rollNumber: Array<number> = [1,2,3];
console.log(rollNumber);

const mentors: GenericArray<string> = ['Mr. X', 'Mr. Y'];
console.log(mentors);

const boolArray: GenericArray<boolean> = [true, false, true];
console.log(boolArray);


const user: GenericArray<{name:string;age:number}> = [
    {
        name:"Showrov",
        age:25,
    },
    {
        name:"Ashikur",
        age:17,
    }
]

console.log(user);

// tuple

type GenericTuple<x,y> = [x,y];

// const manushTuple:[string,string] = ['Mr. X', 'Mr. Y'];
const manushTuple: GenericTuple<string,string> = ['Mr. X', 'Mr. Z'];
console.log(manushTuple);

const userWithId: GenericTuple<number,{name:string,email:string}> = [1234, {name:"Amsdm",email:"abc@gmail.com"}];
console.log("This is another tuple", userWithId);