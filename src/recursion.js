let counter = 0;
function foo() {
  counter++;
  foo();
}

try {
  foo();
} catch(e) {
  console.log(counter, e.message);
}

// O(n) time
// O(n) memory
function fact(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * fact(n - 1);
}

function fact2(n) {
  const st = [[n, 1]];

  while (st.length > 0) {
    const [curr, result] = st.pop();

    if (curr === 0 || curr === 1) {
      return result;
    }
    st.push([curr - 1, result * curr]);
  }
}

function fact3(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

function countWays(n) {
  if (n < 0) return 0;
  if (n === 0) return 1;
  
  // O(n^3)
  return countWays(n - 1) + countWays(n - 2) + countWays(n - 3);
}

//O[n]
//O[n] memorization (caching)

let hit = 0;
let miss = 0;

function countWaysCache(n, cache = []) {
  if (n < 0) {
    miss++;
    return 0;
  }

  if (!cache[n]) {
    miss++;
    if (n === 0) {
      cache[n] = 1;
    } else {
      cache[n] = countWays(n - 1, cache) + countWays(n - 2, cache) + countWays(n - 3, cache);
    }
    return cache[n];
  } else {
    hit++;
    return cache[n];
  }
}

export {fact, fact2, fact3, countWays, countWaysCache, hit, miss};
