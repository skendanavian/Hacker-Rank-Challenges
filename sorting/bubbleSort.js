function countSwaps(a) {
  const n = a.length;
  let count = 0;
  const sorted = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      // Swap adjacent elements if they are not in ascending order
      if (a[j] > a[j + 1]) {
        const smaller = a[j + 1];
        const larger = a[j];
        //swap the items
        a.splice(j, 2, smaller, larger);
        //add to swap count
        count++;
      }
    }
  }

  console.log(`Array is sorted in ${count} swaps.`);
  console.log(`First Element: ${a[0]}`);
  console.log(`Last Element: ${a[n - 1]}`);
  return;
}
