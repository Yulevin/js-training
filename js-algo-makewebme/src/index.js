import {linearSearch, binarySearch, countFreq} from './1_binarySearch.js';
import {fact, fact2, fact3, countWays, countWaysCache, hit, miss} from './2_3_recursion.js';
import {dict} from './4_HashTable.js';
import {walk} from './5_treeTraversal.js';
import {cache, LRUCache} from './6_LRUCache.js'
import  ('./7_LRUCacheNodeList.js');

const el = 3;
const arr = [1, 2, 3, 3, 3, 4, 5, 6, 7, 8];
const n = 5;

console.group('Video1: Binary search')
console.log('Linear search func: ', linearSearch(arr, el));
console.log('Binary search func: ', binarySearch(arr, el) );
console.log('Count freq func: ', countFreq(arr, el));
console.groupEnd();
console.group('Video2,3: Resursion');
console.log('factorial #1: ', fact(n));
console.log('factorial #2: ', fact2(5, 4))
console.log('factorial #3: ', fact3(4, 5));
console.log('Count ways: ', countWays(5));
console.log('Count ways cache:', countWaysCache(12), 'hit =', hit, 'miss =', miss);
console.groupEnd();
console.group('Video4: Hash table');
console.log('Get "ab" hash: ', dict.get('ab'), 'Get "ba" hash: ', dict.get('ba'));
console.groupEnd();
console.group('Video6,7: Linked lists');
console.log('LRUCache content: ', cache.q);
console.log('LRUCacheNodeList content: ', cache.q);
console.groupEnd();

document.body.addEventListener('click', (e) => {
  if (e.target.type == 'checkbox') {
    const checked = e.target.checked;
    console.log('checked');

    walk(e.target, (child) => {
      child.checked = checked;
    console.log('walk working');

    })
  }
});
