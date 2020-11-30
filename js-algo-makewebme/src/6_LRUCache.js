class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.q = [];
    this.m = {};
  }

  get(key) {
    if (!this.m[key]) {
      return -1;
    }
    const value = this.m[key].value;
    this.put(key, value);
    return value;
  }
  
  put(key, value) {
    if (this.m[key]) {
      this.q.splice(this.q.findIndex(nide => this.m[key]), 1);
      this.m[key] = null;
    }
    
    this.q.push({key, value});
    this.m[key] = this.q[this.q.length - 1];
    if (this.q.length > this.capacity) {
      this.m[this.q.shift().key] = null;
    }
  }
}

const cache = new LRUCache(3);
cache.put(1, 1);
cache.put(2, 1);
cache.get(2);
cache.put(3, 1);
cache.put(4, 1);

export {cache, LRUCache};
