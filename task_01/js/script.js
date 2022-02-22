'use strict';

var str = prompt('Enter string:');
var tag = prompt('Enter tag:');

function wrap(str, tag){
    return `<${tag}>${str}</${tag}>`;
}

var res = wrap(str, tag);

console.log(res);

alert(res);