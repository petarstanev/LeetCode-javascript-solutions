/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let start = 1;
  let end = Math.max(...piles);
  let maxSpeed = 0;

  while (start < end) {
    let mid = start + Math.floor(end - start / 2);
    console.log(mid);
    let hrs = 0;
    for (let pile of piles) {
      /*pile is the num of bananas in piles*/
      hrs += Math.ceil(pile / mid);
    }

    if(hrs <=h){
        maxSpeed = mid;
    }

    if (hrs > h) {
      // increase the speed;
      start = mid + 1;
    } else {
      // lower the speed
      end = mid - 1;
    }
  }

  return maxSpeed;
};

console.log(minEatingSpeed([332484035,524908576,855865114,632922376,222257295,690155293,112677673,679580077,337406589,290818316,877337160,901728858,679284947,688210097,692137887,718203285,629455728,941802184], 823855818));
//LEARNING
//Math.max(...array) get maximum number from arr
