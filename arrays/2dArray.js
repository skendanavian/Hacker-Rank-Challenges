// Test Input

function hourglassSum(arr) {
  let max = 0;
  let currentSum = 0;

  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 4; x++) {
      currentSum =
        arr[y][x] +
        arr[y][x + 1] +
        arr[y][x + 2] +
        arr[y + 1][x + 1] +
        arr[y + 2][x] +
        arr[y + 2][x + 1] +
        arr[y + 2][x + 2];

      console.log("current sum" + currentSum);

      if (currentSum > max || (currentSum <= 0 && max < currentSum)) {
        // console.log(max);
        max = currentSum;
      }
    }
  }
  console.log({ max });
  return max;
}

const input = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
]; // expected output = 19 (largest hourglass sum in array)

const input2 = [
  [-1, -1, 0, -9, -2, -2],
  [-2, -1, -6, -8, -2, -5],
  [-1, -1, -1, -2, -3, -4],
  [-1, -9, -2, -4, -4, -5],
  [-7, -3, -3, -2, -9, -9],
  [-1, -3, -1, -2, -4, -5],
]; // expected output -6

const input3 = [
  [-1, 1, -1, 0, 0, 0],
  [0, -1, 0, 0, 0, 0],
  [-1, -1, -1, 0, 0, 0],
  [0, -9, 2, -4, -4, 0],
  [-7, 0, 0, -2, 0, 0],
  [0, 0, -1, -2, -4, 0],
]; // expected output 0

// hourglassSum(input);
hourglassSum(input2);
// hourglassSum(input3);
