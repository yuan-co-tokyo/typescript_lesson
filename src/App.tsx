import React from 'react';
import logo from './logo.svg';
import './App.css';
import Data from './data.json';

type USERS = typeof Data;

const name = "hello";

let nameChange = "hello";
nameChange = "hello2"

let userName = "Hello";
let dummyNum = 2;
let bool = true;

let array1 = [true, false, true];
let array2 = [0, 1, 2, true, "hello"];

interface NAME{
  first: string;
  last: string;
}

interface NAME2{
  first: string;
  last: string | null;
}

let nameObj: NAME = {first:"ogura", last:"shion"};
let nameObj2: NAME2 = {first:"ogura", last:null};

const func1 = (x: number, y: number): number => {
  return x + y;
}

// intersection types
type PROFILE = {
  age: number;
  city: string;
}

type LOGIN = {
  username: string;
  password: string;
}

type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 30,
  city: "Tokyo",
  username: "xxx",
  password: "yyy",
};

// union types
let value: boolean | number
value = true;
value = 1;

let arrayUni: (number | string)[];
arrayUni = [0, 1, 2, "test"];

let company: "Facebook" | "Google" | "Apple"
company = "Facebook";
company = "Apple";

let memory: 256 | 512 | 1024
memory = 256
memory = 1024

// typeOf
let msg: string = "Hi";
let msg2: typeof msg;
msg2 = "Bye"

let animal = {cat: "small cat"};
let newAnimal: typeof animal = {cat: "big cat"};

// keyof
type KEYS = {
  primary: string;
  secondary: string;
};
let key: keyof KEYS;
key = "primary";

// typeof + keyof
const SPORTS = {
  soccer: "Soccer",
  baseball: "Baseball",
};

let keySports: keyof typeof SPORTS;
keySports = "baseball"
console.log(keySports);

// enum
enum OS {
  Windows,
  Mac,
  Linux,
}
interface PC {
  id: number;
  osType: OS;
}
const PC1 = {
  id: 1,
  osType: OS.Windows,
}
const PC2 = {
  id: 2,
  osType: OS.Mac,
}

// 型の互換性
const comp1 = "test";
let comp2: string = comp1;

// let comp3: string = "test";
// let copm4 = "test" = comp3;

// let funcComp1 = (x:number) => {};
// let funcComp2 = (x:string) => {};

// funcComp1 = funcComp2;
// funcComp2 = funcComp1;

// Generics
interface GEN<T>{
  item: T;
};
const gen0: GEN<string> = { item: "hello" };
// const gen1: GEN = { item: "hello" };
const gen2: GEN<number> = { item: 1 };

interface GEN1<T = string>{
  item: T;
};
const gen3: GEN1 = { item: "hello" };
const gen4: GEN1<number> = { item: 10 };

interface GEN2<T extends string | number > {
  item: T;
};
const gen5: GEN2<string> = { item: "test" };
const gen6: GEN2<number> = { item: 5 };
// const gen7: GEN2<boolean> = { item: true };

function funcGen<T>(props: T){
  return {item: props}
};
const gen8 = funcGen("test");
const gen9 = funcGen<string>("test");
const gen10 = funcGen<string | null>(null);

function funcGen1<T extends string | null>(props: T){
  return { value: props}
};
const gen11 = funcGen1("test");
// const gen12 = funcGen1(100);

interface Props{
  price: number;
}
function funcGen2<T extends Props>(props: T){
  return { value: props.price}
}
const gen13 = funcGen2({price: 1000});

const funcGen4 = <T extends Props>(props: T) => {
  return { value: props.price}
}
const gen14 = funcGen4({price: 2000});




function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
