'use strict';

var phoneNumber = prompt('Enter phone number in the format +380xxxxxxxxx:');

var filter = true;

if(phoneNumber === undefined || phoneNumber.length > 13 || phoneNumber.length < 13){
    alert('The field must not be empty and contain 13 symbols');
    filter = false;
}

if(phoneNumber[0].charCodeAt() !== 43){
    alert('Phone number should start with plus/+');
    filter = false;
}

if(filter === true){
    for(var char of phoneNumber.slice(1)){
        var code = char.charCodeAt();
        if( code < 48 || code > 57){
            alert('Phone number should contain only numbers');

            filter = false;

            break;
        }
    }
}

if(filter){
    alert('Thanks');
}