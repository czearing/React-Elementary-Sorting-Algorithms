import React from "react";
import "./styles.css";

let data = [1, 2, 3, 3, 67, 8, 9];
let counter = 0;

function bubbleSort(data) {
  let length = data.length;
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

  console.log(counter);
  console.log(data);
}

function selectionSort(data) {
  let length = data.length;
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
  }

  console.log(data);
}

function insertionSort(data) {
  // length var
  let length = data.length;
  //repeat for every item
  for (let i = 0; i < length; i++) {
    //if an item is greater than first index
    if (data[i] < data[0]) {
      //move number to the first position
      [data[i], data[0]] = [data[0], data[i]];
    } else {
      //find number location
      if (data[i] < data[i - 1]) {
        for (j = 0; j < length; j++) {
          if (data[i] >= data[j - 1] && data[i] < data[j]) {
            //move number to correct spot
            data.splice(j, 0, data.splice(i, 1)[0]);
          }
        }
      }
    }
  }
  console.log(data);
  return data;
}

export default function App() {
  bubbleSort(data);
  selectionSort(data);
  insertionSort(data);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
