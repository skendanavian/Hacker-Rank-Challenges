// You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] without any duplicates. You are allowed to swap any two elements. You need to find the minimum number of swaps required to sort the array in ascending order.

function minimumSwaps(arr) {
  // index of highest number should be the last item in the array.
  //store index of highest non-replaced item.  Start at default of last item.
  let lastIndex = arr.length - 1;
  let swapCount = 0;
  // loop while current last index
  while (lastIndex > 0) {
    if (arr[lastIndex] !== lastIndex + 1) {
      // get index of what should be the highest number and then swap
      const replacementIndex = arr.indexOf(lastIndex + 1);
      // Do the Swaperoo
      [arr[replacementIndex], arr[lastIndex]] = [
        arr[lastIndex],
        arr[replacementIndex],
      ];
      // add to swap count and lower lastIndex to check the next highest value
      swapCount++;
      lastIndex--;
    } else {
      lastIndex--;
    }
  }
  return swapCount;
}

// Test input

const array1 = [4, 3, 1, 2];
const array2 = [1, 3, 5, 2, 4, 6, 7];

minimumSwaps(array1); // expect 3
minimumSwaps(array2); // expect 3
