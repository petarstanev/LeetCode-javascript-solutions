var getSum = function(a, b) {
    while(b!=0) {
        debugger;
        c = a&b; //carry
        a = a^b; //add values that do not carry
        b = c<<1; // move the carry to the left bit
    }

    return a;
};

console.log(getSum(3,5));

/*
Explanation:
a = 3 b = 5 c=0;
3 -   011
5 -   101

c = 001 carry
a = 110 add
b = 010

c = 010 carry
a = 100 add
b = 100

c =  100 carry
a =  000 add
b = 1000

c = 0000
a = 1000
b = 0000

result a = 1000 (8)

*/