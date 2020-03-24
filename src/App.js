import React from "react";
import "./styles.css";

let data1 = [1, 2, 1, 3, 4, 2, 9];
let data2 = [1, 2, 1, 3, 4, 2, 9];
let data3 = [1, 2, 1, 3, 4, 2, 9];

function bubbleSort(data1) {
  let data = data1;
  let length = data.length;
  let counter = 0;
  for (i = 0; i < length; i++) {
    counter++;
    for (x = 0; x < length; x++) {
      counter++;
      if (data[x] > data[x + 1]) {
        counter++;
        [data[x], data[x + 1]] = [data[x + 1], data[x]];
      }
    }
  }
  return (
    <div className="wrapper">
      <p>Sorted Items</p>
      {data}
      <p>Number of Swaps</p>
      {counter}
    </div>
  );
}

function selectionSort(data2) {
  let data = data2;
  let length = data.length;
  let counter = 0;
  for (i = 0; i < length; i++) {
    // current index = min
    let min = i;
    let temp = data[i];
    for (j = i + 1; j < length; j++) {
      if (data[j] < data[min]) {
        //updata min if it is lower than previous value
        min = j;
      }
    }
    data[i] = data[min];
    data[min] = temp;
    counter++;
  }
  return (
    <div className="wrapper">
      <p>Sorted Items</p>
      {data}
      <p>Number of Swaps</p>
      {counter}
    </div>
  );
}

function insertionSort(data3) {
  let counter = 0;
  let data = data3;
  // length var
  let length = data.length;
  //repeat for every item
  for (let i = 0; i < length; i++) {
    //if an item is greater than first index
    if (data[i] < data[0]) {
      //move number to the first position
      counter++;
      [data[i], data[0]] = [data[0], data[i]];
    } else {
      //find number location
      if (data[i] < data[i - 1]) {
        for (j = 0; j < length; j++) {
          if (data[i] >= data[j - 1] && data[i] < data[j]) {
            //move number to correct spot
            counter++;
            data.splice(j, 0, data.splice(i, 1)[0]);
          }
        }
      }
    }
  }
  return (
    <div className="wrapper">
      <p>Sorted Items</p>
      {data}
      <p>Number of Swaps</p>
      {counter}
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Bubble Sort</h1>
      {bubbleSort(data1)}
      <h1>Selection Sort</h1>
      {selectionSort(data2)}
      <h1>Insertion Sort</h1>
      {insertionSort(data3)}
    </div>
  );
}
