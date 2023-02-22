// import { MinPriorityQueue } from "@datastructures-js/priority-queue";
const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

class KthLargest {
  constructor(k, nums) {
    this.queue = new MinPriorityQueue();
    for (let num of nums) {
      this.queue.enqueue(num);
    }
    this.k = k;

    while (this.queue.size() > k) {
      this.queue.dequeue();
    }
  }

  add(val) {
    this.queue.enqueue(val);
    if (this.queue.size() > this.k) this.queue.dequeue();
    return this.queue.front().element;
  }
}

let k = new KthLargest(3, [4, 5, 8, 2]);
console.log(k.add(3));

//LEARNING
// 1. We can use MinPriorityQueue from datastructures-js. It has methods:
//  .enqueue add value
//  .dequeue remove value - return {priority: 17, element: 1};
// . front get value at the front - front for MinPriorityQueue is the smallest element back (highest priority /at the top)
// .back - get for MinPriorityQueue is the biggest element back (lowest priority)
// .size - return the size of the queue
// 