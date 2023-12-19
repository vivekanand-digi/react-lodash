const _ =require('lodash')
const arr =[1,2,3,4,5,6,7,8,9]

 console.log(_.chunk(arr,3));
//ans [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]

console.log(_.compact(arr, 5))
//ANS
// [
//   1, 2, 3, 4, 5,
//   6, 7, 8, 9
// ]

console.log(_.concat(arr, [1,2,3])); //ans [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3]

console.log(_.difference(arr, [1,2,3])); //ans [ 4, 5, 6, 7, 8, 9 ]

console.log(_.differenceBy([1.2,3.3], [13.5,6.6], Math.floor)); // ans [ 1.2, 3.3 ]

console.log(_.drop(arr, 1)) // ans [ 2, 3, 4, 5, 6, 7, 8, 9] 

console.log(_.dropRight(arr, 1)) //ans [ 1, 2, 3, 4, 5, 6, 7, 8 ]

let users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
  ];

  console.log(_.dropWhile(users, ['active', false]));
  ans [ { user: 'pebbles', active: true } ]

  console.log(_.findIndex(users, ['active', false])); // ans 0

  let array1 = [1, 2, 3];
  console.log(_.fill(array1, 'a')); // ans [ 'a', 'a', 'a' ]

  console.log(_.fill(Array(4), 2)); // ans [ 2, 2, 2, 2 ]

  console.log(_.indexOf([1, 2, 1, 2], 2)); // ans 1
  console.log(_.join(['a', 'b', 'c'], '&')); // ans a&b&c

let array = ['a', 'b', 'c', 'a', 'b', 'c'];
console.log(_.pull(array, 'a', 'c')); // ans [ 'b', 'b' ]

let persons = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
  ];

  console.log(_.filter(persons, { 'age': 36, 'active': true }));
  // ans [ { user: 'barney', age: 36, active: true } ]

  console.log(_.add(1, 4)); // ans 5

  console.log(_.max([4, 2, 8, 6])); // ans 8

  console.log(_.round(4.006)); // ans 4

console.log(_.camelCase('Foo Bar')); // ans fooBar

console.log(_.parseInt('08')); // ans 8 