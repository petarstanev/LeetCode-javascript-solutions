var titleToNumber = function (columnTitle) {
    let letters = {};

    for (let i = 1; i <= 26; i++) {
        letters[String.fromCharCode(i + 64)] = i;
    }

    let result = 0;
    let multiplier = columnTitle.length - 1;
    for (let i = 0; i < columnTitle.length; i++) {
        let number = letters[columnTitle[i]];
        result += number * (Math.pow(26, multiplier));
        multiplier--;
    }

    return result;
};

console.log(titleToNumber("AB"));

/* TO LEARN
1. use Math.pow to power a number not ^ which is XOR
2. 65 is the char for A, 90 for Z
3. User String.fromCharNumber(x) to get char at a number String.fromCharNumber(65) -> "A"

*/