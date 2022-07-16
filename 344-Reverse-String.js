// Time: O(n)
// Space: O(1)

var reverseString = function(s) {
    for (var i = 0; i< s.length/2; i++){
        var temp = s[i];
        s[i] = s[(s.length - 1)- i];
        s[(s.length - 1)- i] = temp;        
    }
};

testA = ["h","e","l","l","o"]
result = reverseString(testA);
console.log(testA , "should be ", ["o","l","l","e","h"])

testB = ["H","a","n","n","a","h"]
result = reverseString(testB);
console.log(testB , "should be ", ["h","a","n","n","a","H"])
