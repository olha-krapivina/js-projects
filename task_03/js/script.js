'use strict';

function sort(arr){
    var res = [];
    for(var i of arr){
        res.unshift(i);
    }

    return res;
}

var res = sort(['a', 'b', 'c']);

console.log(res);