# Algorithms and Data Structures

This repository has examples about differents algorithms and data structures.

## Data Structures

### Arrays

#### Big-O Algorithm Complexity

| Static |      |
| ------ | ---- |
| lookup | O(1) |
| push   | O(1) |
| insert | O(n) |
| delete | O(n) |


| Dynamic |                     |
| ------- | ------------------- |
| lookup  | O(1)                |
| append  | O(1) -> can be O(n) |
| insert  | O(n)                |
| delete  | O(n)                |

#### Pros - Cons

| Pros          | Cons                             |
| ------------- | -------------------------------- |
| fast lookups  | slow insert                      |
| fast push/pop | slow deletes                     |
| data ordered  | it has fixed size (static array) |

### Hash Tables

Hash function same input should return same value.

Hash function get key-value as an input then create a value and finally store it in memory.
this hash functions is from the framework you are working.
also this function is O(1).

it can collide in memory space because the function can return same value with different inputs... and increase time. O(n)

basket.grapes = 10000
Key -> value (in same memory slot).
"grapes" -> 10000

tradeoff: fast access O(1) but more memory used.

#### Big-O Algorithm Complexity

| Complexity |      |
| ---------- | ---- |
| insert     | O(1) |
| lookup     | O(1) |
| delete     | O(1) |
| search     | O(1) |

### Run examples

```bash
node data-structures/arrays.js
```

## Useful Links

<https://www.bigocheatsheet.com>
