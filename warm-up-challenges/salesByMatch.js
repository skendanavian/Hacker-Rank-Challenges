//Challenge Description

// Alex works at a clothing store. There is a large pile of socks that must be paired by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// For example, there are  socks with colors . There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

//ex. data -- n = 7 (socks)  ar = [1,2,1,2,1,3,2] (sock colors)

//Return the Number of Pairs

function sockMerchant(n, ar) {
  const sortedArray = ar.sort();
  let pairCount = 0;
  let i = 0;
  while (i < n) {
    if (ar[i] === ar[i + 1]) {
      pairCount++;
      i += 2;
    } else i++;
  }
  return pairCount;
}
