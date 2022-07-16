//Time: O(n);
//Memory: O(n);

var fizzBuzz = function(n) {
    var result = [];
    for(var i = 1; i <= n; i++){
        var value = "";
        if (i % 3 == 0) {
            value = "Fizz";
        }        
        if (i % 5 == 0) {
            value+="Buzz";
        }
        if (value == ""){
            value = i.toString();
        }
        result.push(value);
    }

    return result;
};


console.log(fizzBuzz(3));