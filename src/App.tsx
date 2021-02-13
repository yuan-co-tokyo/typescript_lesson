import React from 'react';
import logo from './logo.svg';
import './App.css';

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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
