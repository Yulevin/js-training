import {linearSearch, binarySearch, countFreq} from './binarySearch.js';
import {fact, fact2, fact3, countWays} from './recursion.js'

const el = 3;
const arr = [1, 2, 3, 3, 3, 4, 5, 6, 7, 8];
const n = 5;

console.log('Linear search func: ', linearSearch(arr, el));
console.log('Binary search func: ', binarySearch(arr, el) );
console.log('Count freq func: ', countFreq(arr, el));
console.log('factorial #1: ', fact(n));
console.log('factorial #2: ', fact2(5, 4))
console.log('factorial #3: ', fact3(4, 5));
console.log('Count ways: ', countWays(5));
