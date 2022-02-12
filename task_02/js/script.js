'use strict';

// var message = 'My <b>name</b> is <i>Olha</i>';
// console.log(message);

var message = prompt('Enter text with tags:');

var cleanedMessage = '';

var isFilter = false;

for(var char of message){
    if(char === '<'){
        isFilter = true;
    }
    if(isFilter === false){
        cleanedMessage += char;
    }
    if(char === '>'){
        isFilter = false;
    }
}

alert(`Your cleaned text: ${cleanedMessage}`);

// console.log(cleanedMessage);