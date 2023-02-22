var shipWithinDays = function (weights, days) {
  let totalWeight = 0;
  let maxLoad = 0;

  for (let weight of weights) {
    totalWeight += weight;
    maxLoad = Math.max(maxLoad, weight);
  }

  let left = maxLoad;
  let right = totalWeight;

  let valid = (weights, capacity, days) => {
    let daysNeeded = 1,
      currentLoad = 0;

    for (let weight of weights) {
      currentLoad += weight;
      if (currentLoad > capacity) {
        daysNeeded++;
        currentLoad = weight;
      }
    }
    return daysNeeded <= days;
  };

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (valid(weights, mid, days)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));

//LEARNING
// 1. Be careful when to use for(x in arr) and when for(x of arr)
// 2. In problems like this where we can use binary search the left and right are left -
// best scenario(max weight), right worst(total weight)// and then check if mid is possible
//
