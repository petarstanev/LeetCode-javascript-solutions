// Time: O(n log(n))
// Space: n

var topKFrequent1 = function (nums, k) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let mapValue = map.get(nums[i]);
    if (mapValue) {
      mapValue += 1;
    } else {
      mapValue = 1;
    }
    map.set(nums[i], mapValue);
  }
  const itemsArray = Array.from(map.entries());

  itemsArray.sort((a, b) => b[1] - a[1]);
  const resultArray = itemsArray.slice(0, k);
  return resultArray.map((x) => x[0]);
};

topKFrequent1([4, 1, -1, 2, -1, 2, 3], 2);
topKFrequent1([3, 0, 1, 0], 1);

// Learn how to create array from map and map from array;
// Don't forget to not use {} if we want to return on same line
// Learn splice return the deleted array. Delete values from init array.
// Learn array.map(x => x.key)
// map to array   const itemsArray = Array.from(map.entries()); [key,value][][]

// Time: O(n)
// Space: O(n)
var topKFrequent2 = function (nums, k) {
  const freqMap = new Map();
  const bucket = [];
  const result= [];

  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  for (let [num, freq] of freqMap){
    bucket[freq] = (bucket[freq] || new Set()).add(num);
  }

  for(let i = bucket.length-1; i>=0;i++){
    result.push(...bucket[i]);
    if (result.length == k ) {
      return result;
    }
  }

  return [];
};

topKFrequent2([4, 1, -1, 2, -1, 2, 3], 2);
//   topKFrequent2([3, 0, 1, 0], 1);

// We can rewrite:
// for (let i = 0; i < nums.length; i++) {
//to:   for (let num of nums) {

// Rewrite 
// for(let i of map.entities())
//to for for( let [key,value] of map){}

// to get set as an array we can use [...setItem]