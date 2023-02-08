// Time: O(n)
// Space: O(n);
var shuffle = function (nums, n) {
    let result = [];
    for(let i =0; i< n; i++){
        result.push(nums[i],nums[i+n]);
    }
    return result;
};

//LEARNING
// array.splice(beggining,howmanytoremove, ... replace value)Splice can be used to add all 
// array.slice(beggining, end) 0 to index without last one
// arra.push(1,2,3) can take a list of arguments