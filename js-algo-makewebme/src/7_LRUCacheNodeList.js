class ListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = this.tail = null;
  }
  push(node) {
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
    }
    this.length++;
  }
  shift() {
    const head = this.head;
    this.splice(this.head);
    return head;
  }
  splice(node) {
    if (!node.prev && !node.next) {
      this.head = this.tail = null;
    } else if (!node.next) {
      this.tail = node.prev;
      this.tail.next = null;
    } else if (!node.prev) {
      this.head = node.next;
      this.head.prev = null;
    } else {
      const next = node.next;
      const prev = node.prev;
      prev.next = next;
      next.prev = prev;
      node.next = node.prev = null;
    }
    this.length--;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.q = new LinkedList();
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
      this.q.splice(this.m[key]);
      this.m[key] = null;
    }
    
    const node = new ListNode(key, value);
    this.q.push(node);
    this.m[key] = node;
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
