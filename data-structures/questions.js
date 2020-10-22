// first recurring character

firstRecurringCharacter = (input) => {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
  }

  return undefined;
}; // O(n)

console.log(firstRecurringCharacter([2,5,1,2,4]));
