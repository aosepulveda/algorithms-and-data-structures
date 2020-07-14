let user = {
  age: 54,
  name: 'Kylie',
  magic: true,
  scream: () => {
    console.log('spell: ahhhhhh!');
  }
}

user.age; // O(1)
user.spell = 'spell!'; // O(1)
user.scream(); // O(1)
console.log(user);

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  // private method
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      // create bucket
      this.data[address] = [];
    }
    // add to the bucket memory
    this.data[address].push([key, value]);
  }

  get(key) {
    const address = this._hash(key);
    const currentBacket = this.data[address];
    if (currentBacket.length) {
      for (let i = 0; i < currentBacket.length; i++) {
        if (currentBacket[i][0] === key) {
          return currentBacket[i][1];
        }
      }
    }
    return undefined;
  } // O(n) in this example XD

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }

  getAll() {
    return this.data;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 54);

console.log(myHashTable.get('grapes'));
console.log(myHashTable.getAll());

console.log(myHashTable.keys());
