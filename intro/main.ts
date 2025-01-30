console.log("i hope this runs");

interface item {
  itemName: string;
  itemId: number;
}

const questions = [
  "what is your establishment id",
  "expected return on your investment",
  "investments, if any",
];

type answer = undefined | [];
let data: number = 5;
console.log(data);

//ts is a typed superset of js that compiles to plain js
//compiles to plain js, we can choose what version of js it compiles to

// open src
// static typing(optional static typing)
// superset of js
// ide support
// robust s/w
// support es features

// imports and exports
//arrow fn
// funct parameters
//spread opr.
//de structuring
//object literal enhancements

//arrow functions does not have its own this, it just returns its parent context
//optional function arguments

//object me function daalne ka shorthand, we dont have to add it as a key value pair
// rest parameters
//arguments object of a function
// array and object spread operator// immutability patterns

//object.assign({}, pizza,{toppings})

//destructuring {name,price}=obj
//we can also rename while destructuring

// function f({name:pizzaName,price:pizzaPrice}){
//console.log(pizzaName,pizzaPrice)
//}

//this can also be applied to an array
// const d=[1,2,3]
// const [a,b,c]=d

//types
let pT: number = 5;
function calCost(unitPrice: number, quantity: number): number {
  return unitPrice + quantity;
}

//string types

//boolean types
function offerDiscount(num: number): boolean {
  return num >= 3;
}

let coupon;
let coupon2: string;
// any type //inferred type
// implicit and explicit types

//void type
//this means that there is no type being returned from a function
//we can assign it to the fn or it is done auto

//never type
//means a value will never come
//example infinite loop will never return a val
//exhaustive checks/ impossible scenerios

//null and undefined values
let coupon3: string | null = "pixxa";
coupon3 = null;

//union and literal types
function pizzaSize(size: "small" | "medium" | "large") {
  //these are the only availble option for the function
  console.log(size);
}

let sumOrder: (number1: number, number2: number) => number; //typed signature
sumOrder = (x, y) => x + y;

let sumOrder2: (number1: number, number2: number) => number = (x, y) => x + y;

//optional parameters
let sumOrder3: (number1: number, number2?: number) => number; //typed signature

sumOrder3 = (x, y) => {
  if (y) return x + y;
  return x;
};

sumOrder3 = (x, y) => x + (y || 1); //0 is falsely
sumOrder3 = (x, y = 1) => x + y;

//object types
let pizza: { a: number; b: string; c?: number; getItems(): string } = {
  a: 5,
  b: "cheese",
  getItems() {
    return this.a + " " + this.b;
  },
};

//array types and generics
let arr: string[];

let arr2: Array<Uint16Array>; //generic type

let acd: [{ a: number; b: string; c?: number }, number, boolean]; //tuple type

//type aliases

type Size = "small" | "medium" | "large";
type fun = (size: Size) => void;

let pizzaSize2: Size = "small";
const select: fun = (x) => {
  pizzaSize2 = x;
  console.log(x);
};

// //type assertion
// let k:string= (<Pizza>JSON.parse(serialized)).name;//old (but still correct) way of performing type assertion
// let k:string= (JSON.parse(serialized) as Pizza).name; //asserting the type of the parsed value// this is helpful when receiving the data from the server

//creating interfaces

interface pza {
  //an interface is a contract b/w a variable and the shape of the type
  name: string;
  sizes: string[];
}

let pizzza: pza;

function createPizza(name: string, sizes: string[]): pza {
  return {
    name,
    sizes,
  };
}

pizzza = createPizza("bananaPizza", ["banana", "pineapple", "grape"]);

// interfaces with function types
interface pzza {
  name: string;
  sizes: string[];
  getAvailabeSizes(): string[]; //but if we create a type this is done like : type fun=()=>void, so a bit different
}

function createPzza(
  name: string,
  sizes: string[],
  getAvailabeSizes: () => string[]
) {
  return {
    name,
    sizes,
    getAvailabeSizes,
  } as pzza; //this can be also done here
}

//extending interfaces

interface x {
  name: string;
}

interface x2 extends x {
  id: number;
}

let xVar: x2;

function createObj(name: string, id: number): x2 {
  return {
    name,
    id,
  };
}

xVar = createObj("obname", 9807);

//interfaces and optional properties
interface y {
  name: string;
  cla?: string;
}

//interfaces with index signatures
interface z {
  name: string;
  cla?: string;
  [key: number]: string;
}

let k2 = {
  name: "hello",
  1: "this is the index",
} as z;

// class in plain js
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.greet = function () {
//   console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
// };

// Person.prototype.haveBirthday = function () {
//   this.age++;
//   console.log(`Happy Birthday! I am now ${this.age} years old.`);
// };

// const john = new Person("John", 30);
// const jane = new Person("Jane", 25);

// Call methods
// john.greet();
// john.haveBirthday();

// jane.greet();

//class in typeScript
class pizza2 {
  name: string;
  toppings: string[] = [];
  constructor(name: string, age: number) {
    this.name = name;
  }
  addtopping(topping: string) {
    this.toppings.push(topping);
  }
}

//private and public

class pizza3 {
  public name: string;
  private toppings: string[] = [];
  constructor(name: string, readonly num?: number) {
    this.name = name;
  }
  addtopping(topping: string) {
    this.toppings.push(topping);
  }
}

let p1 = new pizza3("a pizza");
// console.log(p1.toppings) this throws error in ts but runs fine in the compiled js

//read only members

//setters and getters
class Person2 {
  firstName: string;
  lastName: string;

  constructor(firstName:string, lastName:string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(name) {
    const [first, last] = name.split(" ");
    this.firstName = first;
    this.lastName = last;
  }
}

// const person111 = new Person("John", "Doe");

// console.log(person111.fullName);//getter

// person111.fullName = "Jane Smith";//setter


//classes and ineritence
//create two classes here show inheritenche
//use the constructor, setters and getters of the parent in child class

interface Generation{
  currentGenerations:string[]
}

// abstract classes
abstract class machine implements Generation{
  power:string
  private price: number
  protected id:number|null=null
  currentGenerations: string[]=["dsajd"];
  constructor(power:string, price:number){
    this.power=power;
    this.price=price
  }
  set setId(id:number){
    this.id=id
  }
  get getId():number|null{
    return this.id
  }
}
//child class
class computer extends machine{
  cpu:string
  gpu:string
  private tflopsMPS: number
  constructor(power:string, price:number,cpu:string, gpu:string, tflopsMPS:number){
    super(power, price)
    this.cpu=cpu
    this.gpu=gpu
    this.tflopsMPS=tflopsMPS
  }
}