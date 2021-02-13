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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
