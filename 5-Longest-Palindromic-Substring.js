 //BRUTE FORCE
 // Time: O(n^3)
 // Space: O(1);
 var longestPalindromeBF = function (s) {
    let isPalindrome = (x) => {
        let right = x.length - 1;
        for (let left = 0; left < right; left++) {
            if (x[left] !== x[right]) {
                return false;
            }
            right--;
        }
        return true;
    }
    let longestPalindrome = '';
    for (let i = 0; i < s.length; i++) {
        for (let n = 0; n <= s.length; n++) {
            let testStr = s.slice(i,n);
            if(testStr.length > longestPalindrome.length && isPalindrome(testStr) ){
                longestPalindrome = testStr;
            }
        }
    }

    return longestPalindrome;
};
console.log(longestPalindromeBF('babad'));


//Expand around centre
// Time: O(n^2)
var longestPalindrome = function(s) {
    let longest = '';
    const findLongestPalindrome = (str, i, j) => {
        while(i >= 0 && j < str.length && str[i] === str[j]) {
            i -= 1;
            j += 1;
        }
        // slice the qualified substring from the second last iteration
        return str.slice(i + 1, j);
    }
    for (let i = 0; i < s.length; i++) {
        // palindrome can center around 1 or 2 letters
        const current1 = findLongestPalindrome(s, i, i); // this test a single letter
        const current2 = findLongestPalindrome(s, i, i + 1); // this test two letters
        const longerPalindrome = 
              current1.length > current2.length ? current1 : current2;
        if (longerPalindrome.length > longest.length) {
            longest = longerPalindrome;
        } 
    }
    return longest;
};

console.log(longestPalindrome('babad'));

//LEARNING
//1. when checking palindrome in a list we can test by getting a letter or two letters and expand to left and right this way we improve time efficiency 