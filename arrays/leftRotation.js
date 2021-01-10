// two inputs - array of numbers and n = how many left shifts to execute

function rotLeft(a, d) {
  let rotatedArray = a;

  for (let i = 0; i < d; i++) {
    let firstEl = rotatedArray.shift();
    rotatedArray = [...rotatedArray, firstEl];
  }
  return rotatedArray;
}

// test inputs

const num = 54;

const array = [1, 2, 3, 4, 5];

rotLeft(array, num); // expect [5,1,2,3,4]
