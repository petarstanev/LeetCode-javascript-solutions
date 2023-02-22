
//Max heap
var lastStoneWeight = function (stones) {
  let queue = new MaxPriorityQueue();
  for (let stone of stones) {
    queue.enqueue(stone); 
  }

  while (queue.size() > 1) {
    let x = queue.dequeue().element;
    let y = queue.dequeue().element;

    if (x != y) {
      let newWeight = x - y;
      queue.enqueue(newWeight);
    }
  }

  if (queue.size()) return queue.dequeue().element;
  return 0;
};

//LEARNING
// enqueue() // Time O(log(n))
// dequeue() // Time O(log(n))
