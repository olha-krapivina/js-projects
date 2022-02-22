'use strict';

var arr = [];

function exponentiate(num, ex){
    for(var i of num){
        var newNum = i ** ex;
        arr.push(newNum);
    }

    return arr;
}

var res = exponentiate([2, 4, 3, 1], 2);

console.log(res);