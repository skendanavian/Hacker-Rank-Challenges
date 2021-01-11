// It is New Year's Day and people are in line for the Wonderland rollercoaster ride. Each person wears a sticker indicating their initial position in the queue. Initial positions increment by  from  at the front of the line to  at the back.

// Any person in the queue can bribe the person directly in front of them to swap positions. If two people swap positions, they still wear the same sticker denoting their original places in line. One person can bribe at most two others. For example, if  and  bribes , the queue will look like this: .

// Fascinated by this chaotic queue, you decide you must know the minimum number of bribes that took place to get the queue into its current state. If anyone has bribed more than two people, the line is too chaotic to compute the answer.

function minimumBribes(line) {
  // if number is more than 2 less than index -- too chaotic
  // if number is 1 OR 2 less than index -- add to counter
  let counter = 0;
  for (let i in line) {
    if (line[i] - i > 3) {
      console.log("Too chaotic");
      return;
    }
    if (line[i] - i <= 3 && line[i] - i > 0) {
      line[i] - 1 === 0
        ? (counter += line[i] - i)
        : (counter += line[i] - i - 1);
      console.log(
        "index: " + i + " num: " + line[i] + " current counter: " + counter
      );
    }
  }
  console.log(counter);
}

const array1 = [2, 1, 5, 3, 4];
const array2 = [2, 5, 1, 3, 4];
const array3 = [1, 2, 5, 3, 7, 8, 6, 4];
const array3 = [1, 2, 5, 3, 4, 7, 8, 6];

minimumBribes(array1); // expect 3
minimumBribes(array2); // expect 'Too chaotic'
minimumBribes(array3); // expect 7
