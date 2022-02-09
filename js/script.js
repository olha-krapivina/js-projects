var userNames = prompt('Enter names separated by commas:').split(',');

for(var index in userNames){
    console.log("<li>" + (+index + 1) + " " + userNames[index] + "</li>")
}