// this

//call apply and bind

const myFuntion = function (text: string): void {
  console.log(text);
};

//arrow functions and lexical scope

//whenever we create a function , using the function keyword, it creates a new scope

setTimeout(function () {
  console.log(this);
}, 1000);
//this returns window object

//if this function is in a class like
class c1 {
  f1() {
    setTimeout(function () {
      console.log(this);
    }, 1000);
  }
}
//this returns undefined

setTimeout(() => {
  console.log(this);
}, 1000);
//returns a window object

class c2 {
  f1() {
    setTimeout(()=>{
      console.log(this);
    }, 1000);
  }
}//this returns the class context

// event :Event //type

// noImplicitThis :true

function handleClick(this:HTMLAnchorElement, e :Event){
    e.preventDefault()
    console.log(this.classList)
}


// typeof operator
const person1={
    name:"ds",
    desig:32,
    age:43
}

type Person=typeof person1; //now we can use this type 

//key of

type personKeys=keyof Person;  //this just provides the keys of the Person

type personTypes=Person[personKeys]

function getProperty<T, K extends keyof T>(obj:T, key: K){//generic type, so as to state that the K is a property of obj
    return obj[key]
}

// const personName=getProperty(person,'name')

//mapped types

//readonly maped type
function freeze<T>(obj:T):Readonly<T>{
    return Object.freeze(obj)
}

type MyReadOnly<T>={
    readonly [P in keyof T]:T[P]
} 

type User = {
    name: string;
    age: number;
};

type ReadOnlyUser = MyReadOnly<User>;

// ReadOnlyUser is equivalent to:
type ReadOnlyUser2 = {
    readonly name: string;
    readonly age: number;
};

//partial mapped type
type MyReadOnly2<T>={
    readonly [P in keyof T]?:T[P]
} 

function updateFunction(user:User, appendUser:MyReadOnly2<User>){
    return {...user,...appendUser}
}

//partial mapped type
type myRequired<T>={
    [P in keyof T]-?:T[P]//we can add + to make the attributes option, also we can add +/-readonly in front
}

function printAge(obj: myRequired<User>){//suppose that the age attribute is optional in User, but modifying the type in the function, we ensure that obj def contains age
    console.log(obj.age)
}


//pick mapped type
type myPick<T,K extends keyof T>={//we can 
    [P in K]:T[K]
}
const person:myPick<Person,"name"|"age">={// here in place of k we can use a type as well
    name:"hello",
    age:43
}

//record map type

interface myint{
    // name: string,
    // age:number,
    // date: Date,
    current:string,
    next:string,
}

let dictionary:Record<string,myint>={}

const item:Record<keyof myint,string>={//the value of each type of key is a string
    current:"ifus",
    next:"dsfjds"
}

dictionary[0]=item;

// type mytype="a"|"b"|"c"
// type anothertype="d"|"e"

// type c=mytype|anothertype



//typeof and type guards

// if(typeof name==="string"){
//     // then do this
// }
// //otherwise do this

// instance of typeguard
class foo{

}
const k=new foo()

console.log(Object.getPrototypeOf(k))
console.log(foo.prototype)

console.log(k instanceof foo)


//user defined typeguards

function isaType(item: any):item is string{//doing this is necessary to let ts know in the rest of the code that for true, item is a string type
    return item instanceof String
}

// function isMachine(item:any):item is machine{
//     return "price" in item
// }

// literal type guards 
console.log('localStorage' in window)


//interection types
type machineId={
    name:string;
    price:number
}

type sc={
    speedTHz: number;
    memory:number
}
type scm=machineId&sc
type cm=machineId&{vendor:string}

//const jdl= Object.assign({},ob1,ob2)

//tagged union

// Define a base type for Shapes with a 'type' property as a discriminator
type Circle = {
    type: "circle";
    radius: number;
};

type Square = {
    type: "square";
    sideLength: number;
};

type Rectangle = {
    type: "rectangle";
    width: number;
    height: number;
};

// Define a union type of all shapes
type Shape = Circle | Square | Rectangle;

// Function to calculate the area of a shape
function calculateArea(shape: Shape): number {
    switch (shape.type) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
        case "rectangle":
            return shape.width * shape.height;
        default:
            // This will never happen if the type is narrowed correctly
            throw new Error("Unknown shape type");
    }
}


