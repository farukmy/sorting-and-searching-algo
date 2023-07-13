function insertionSort(arr) {
  const length = arr.length;

  for (let i = 1; i < length; i++) {
    const key = arr[i];
    let j = i - 1;

    // Compare the key with elements to its left
    // Move elements greater than key to the right
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert the key in its correct position
    arr[j + 1] = key;
  }

  return arr;
}

// Example usage:
const array = [5, 2, 4, 6, 1, 3];
const sortedArray = insertionSort(array);
console.log(sortedArray);
