function linearSearch(arr, el) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      return console.log(i);
    }
  }
  return console.log('There is no element ' + el + ' in array');
}

function binarySearch(arr, el) {
  let left = -1;
  let right = arr.length;

  while (right - left > 1) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === el){
      return console.log(mid);
    }
    if (arr[mid] > el) {
      right = mid;
    } else {
      left = mid;
    }
  }
  return console.log('There is no element ' + el + ' in array');
}

function countFreq(arr, el) {
  
  let elPos = binarySearch(arr, el);

  if (elPos === -1) return console.log(0);
  debugger
  let i = elPos;
  while (arr[i] === el) i--;
  
  let j = elPos;
  while (arr[j] === el) j++;

  return console.log(j - i - 1);
}

export {linearSearch, binarySearch, countFreq};
