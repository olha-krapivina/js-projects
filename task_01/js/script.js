'use strict';

var str = prompt('Enter string:');
var tag = prompt('Enter tag:');

function wrap(str, tag){
    console.log(`<${tag}>${str}</${tag}>`);
}

wrap(str, tag);