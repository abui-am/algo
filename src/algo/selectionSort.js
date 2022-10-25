// function selectionSort(array) {
//   const arr = [...array];
//   for (let i = 0; i < arr.length - 1; i++) {
//     let minIndex = i;

//     for (let j = i + 1; j < array.length; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }

//     const temp = arr[i];
//     arr[i] = arr[minIndex];
//     arr[minIndex] = temp;
//   }

//   return arr;
// }

function selectionSort(array) {
  const arr = [...array];
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  return arr;
}

console.log(selectionSort([23, 1, 124, 421, 4512, 5312, 531, 5, 15, 2]));
