// You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] without any duplicates. You are allowed to swap any two elements. You need to find the minimum number of swaps required to sort the array in ascending order.

function minimumSwaps(arr) {
  // store indexes of highest and lowest numbers which are not in correct position
  // index of highest number should be the last item in the array.

  //store index of highest non-replaced item.  Start at default of last item.
  let upperIndex = arr.length - 1;
  let swapCount = 0;

  // loop while maxIndex exists
  while (upperIndex > 0) {
    console.log(upperIndex);
    if (arr[upperIndex] !== upperIndex + 1) {
      // get index of what should be the highest number and then swap
      const maxIndex = arr.indexOf(upperIndex + 1);
      console.log({ maxIndex });
      // const smallerNum = arr[upperIndex];
      // const largerNum = arr[maxIndex];
      console.log(maxIndex);
      // Do the Swaperoo
      [arr[maxIndex], arr[upperIndex]] = [arr[upperIndex], arr[maxIndex]];
      swapCount++;
      upperIndex--;
    } else {
      upperIndex--;
    }
  }
  console.log(arr);
  console.log(swapCount);
  return swapCount;
}

// Test input

const array1 = [4, 3, 1, 2];
const array2 = [1, 3, 5, 2, 4, 6, 7];

minimumSwaps(array1); // expect 3
minimumSwaps(array2); // expect 3
