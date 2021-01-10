// two inputs - array of numbers and n = how many left shifts to execute

function rotLeft(a, d) {
  // divide to get remainder and reduce redundant shifts
  const remainder = d % a.length;
  // split array items based on remainder
  const splitArray = [a.splice(0, remainder)];
  // merge the separated parts
  const merged = [].concat(...a, ...splitArray);
  return merged;
}

// test inputs

const num = 54;

const array = [1, 2, 3, 4, 5];

rotLeft(array, num); // expect [5,1,2,3,4]
