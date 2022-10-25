import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { randomArray } from './utils/helper';

const timer = (ms: any) => new Promise((res) => setTimeout(res, ms));

const randomArr = () => randomArray(30, 100);

function BubbleSort() {
  const [i, setI] = useState(0);
  const [iSwap, setISwap] = useState(0);

  const [arr, setArr] = useState(randomArr());
  async function bubbleSort() {
    let tempArr = [...arr];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i; j++) {
        setI(j);
        setISwap(j + 1);

        if (tempArr[j] > tempArr[j + 1]) {
          let temp = tempArr[j];
          tempArr[j] = tempArr[j + 1];
          tempArr[j + 1] = temp;

          setArr([...tempArr]);
        }
        await timer(100);
      }
    }
    setI(-1);
    setISwap(-1);

    setArr([...tempArr]);
  }

  return (
    <div className='App' style={{ marginBottom: 40 }}>
      <button onClick={() => setArr(randomArr())} style={{ marginBottom: 20 }}>
        Reset
      </button>
      <button onClick={bubbleSort} style={{ marginBottom: 20 }}>
        Bubble Sort
      </button>
      <div style={{ display: 'flex', gap: 3 }}>
        {arr.map((num, index) => (
          <div>
            <div
              style={{
                width: 20,
                height: num * 4,
                backgroundColor:
                  index === i || index === iSwap ? 'blue' : 'red',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function SelectionSort() {
  const [i, setI] = useState(0);
  const [iSwap, setISwap] = useState(0);

  const [arrToShow, setArr] = useState(randomArr());
  async function selectionSort() {
    const arr = [...arrToShow];
    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;

      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }

      setI(i);
      setISwap(minIndex);
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
      setArr([...arr]);
      await timer(400);
    }

    setI(-1);
    setISwap(-1);

    setArr([...arr]);
  }

  return (
    <div className='App'>
      <button onClick={() => setArr(randomArr())} style={{ marginBottom: 20 }}>
        Reset
      </button>
      <button onClick={selectionSort} style={{ marginBottom: 20 }}>
        Selection Sort
      </button>
      <div style={{ display: 'flex', gap: 3 }}>
        {arrToShow.map((num, index) => (
          <div>
            <div
              style={{
                width: 20,
                height: num * 4,
                backgroundColor:
                  index === i || index === iSwap ? 'blue' : 'red',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const App = () => {
  return (
    <>
      <BubbleSort />
      <SelectionSort />
    </>
  );
};

export default App;
