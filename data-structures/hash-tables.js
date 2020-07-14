let user = {
  age: 54,
  name: 'Kylie',
  magic: true,
  scream: () => {
    console.log('ahhhhhh!');
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
    const hash = this._hash(key);
    this.data[hash] = [key, value];
  }

  get(key) {
    const hash = this._hash(key);
    return this.data[hash];
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
console.log(myHashTable.get('grapes'));
