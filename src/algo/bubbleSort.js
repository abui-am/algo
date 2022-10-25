function bubbleSort(arr) {
  let tempArr = [...arr];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (tempArr[j] > tempArr[j + 1]) {
        let temp = tempArr[j];
        tempArr[j] = tempArr[j + 1];
        tempArr[j + 1] = temp;
      }
    }
  }

  return tempArr;
}
