class Sort {
  swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          this.swap(arr, j, j + 1);
        }
      }
    }

    return arr;
  }

  selectionSort(arr) {
    // Select the minimum in i to n-1 elements and if found put it at i
    for (let i = 0; i < arr.length - 1; i++) {
      let currentMinIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[currentMinIndex]) {
          currentMinIndex = j;
        }
      }
      this.swap(arr, i, currentMinIndex);
    }

    return arr;
  }

  insertionSort(arr) {
    // Starting from the second element check the left till first element and
    // if the left element is greater than the current element right shift the greater element
    for (let i = 1; i < arr.length; i++) {
      let j = i - 1;
      let currentNum = arr[i];
      while (j >= 0 && currentNum < arr[j]) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = currentNum;
    }

    return arr;
  }
}

const sorting = new Sort();
const bubble = sorting.bubbleSort([
  11, 2, 1, 90, 9, 3, 10, -33, -45, 3, 34, -99, 5, 7,
]);

const selection = sorting.selectionSort([
  11, 2, 1, 90, 9, 3, 10, -33, -45, 3, 34, -99, 5, 7, -103,
]);

const insertion = sorting.selectionSort([
  11, 2, 1, 90, 9, 3, 10, -33, -45, 3, 34, -99, 5, 7,
]);

console.log({
  bubble,
  selection,
  insertion,
});
