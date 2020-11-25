function linearSearch(arr, el) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      return i;
    }
  }
  return ('There is no element ' + el + ' in array');
}

function binarySearch(arr, el) {
  let left = -1;
  let right = arr.length;

  while (right - left > 1) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === el){
      return mid;
    }
    if (arr[mid] > el) {
      right = mid;
    } else {
      left = mid;
    }
  }
  return ('There is no element ' + el + ' in array');
}

function countFreq(arr, el) {
  
  let elPos = binarySearch(arr, el);

  if (elPos === -1) return 0;
  
  let i = elPos;
  while (arr[i] === el) i--;
  
  let j = elPos;
  while (arr[j] === el) j++;

  return j - i - 1;
}

export {linearSearch, binarySearch, countFreq};
