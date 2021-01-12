// It is New Year's Day and people are in line for the Wonderland rollercoaster ride. Each person wears a sticker indicating their initial position in the queue. Initial positions increment by  from  at the front of the line to  at the back.

// Any person in the queue can bribe the person directly in front of them to swap positions. If two people swap positions, they still wear the same sticker denoting their original places in line. One person can bribe at most two others. For example, if  and  bribes , the queue will look like this: .

// Fascinated by this chaotic queue, you decide you must know the minimum number of bribes that took place to get the queue into its current state. If anyone has bribed more than two people, the line is too chaotic to compute the answer.

function minimumBribes(line) {
  let counter = 0;
  for (let i = line.length - 1; i >= 0; i--) {
    if (line[i] - i > 3) {
      console.log("Too chaotic");
      return;
    }
    for (let n = line[i] - 2; n < i; n++) {
      if (line[n] > line[i]) counter++;
    }
  }
  console.log(counter);
}

// Test Input

const array1 = [2, 1, 5, 3, 4];
const array2 = [2, 5, 1, 3, 4];
const array3 = [1, 2, 5, 3, 7, 8, 6, 4];
const array4 = [1, 2, 5, 3, 4, 7, 8, 6];

minimumBribes(array1); // expect 3
minimumBribes(array2); // expect 'Too chaotic'
minimumBribes(array3); // expect 7
minimumBribes(array4); // expect 4
