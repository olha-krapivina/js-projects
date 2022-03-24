"use strict";

var users = [
    {
    "id": 1,
    "first_name": "Dulcinea",
    "last_name": "Beeton",
    "email": "dbeeton0@google.co.uk"
    },
    
    {
    "id": 2,
    "first_name": "Shoshanna",
    "last_name": "Eymer",
    "email": "seymer1@behance.net"
    },
    
    {
    "id": 3,
    "first_name": "Cull",
    "last_name": "Nazareth",
    "email": "cnazareth2@squidoo.com"
    },
    
    {
    "id": 4,
    "first_name": "Dorella",
    "last_name": "Damerell",
    "email": "ddamerell3@taobao.com"
    },
    
    {
    "id": 5,
    "first_name": "Robena",
    "last_name": "Jankovic",
    "email": "rjankovic4@youtube.com"
    },
    
    {
    "id": 6,
    "first_name": "Jarret",
    "last_name": "Guitton",
    "email": "jguitton5@ucoz.ru"
    },
    
    {
    "id": 7,
    "first_name": "Elias",
    "last_name": "Hanson",
    "email": "ehanson6@aol.com"
    },
    
    {
    "id": 8,
    "first_name": "Corby",
    "last_name": "Gartrell",
    "email": "cgartrell7@sogou.com"
    },
    
    {
    "id": 9,
    "first_name": "Scarlet",
    "last_name": "Eilhertsen",
    "email": "seilhertsen8@reverbnation.com"
    },
    
    {
    "id": 10,
    "first_name": "Merv",
    "last_name": "Lequeux",
    "email": "mlequeux9@sohu.com"
    }
]

function render() {
    var html = '';
    var data = document.querySelector('#usersProfile');

    for(var profile of users){
        // console.log(profile);
        html += `<tr></tr>`;

        if(typeof profile === 'object'){
            for(var i in profile){
                // console.log(i);
                if(typeof profile[i] === 'function')

                continue;

                html += `<td>${profile[i]}</td>`;
            }
        }
    }
    return data.innerHTML = html;
}
render();

function colorString(){
   var str = document.querySelectorAll('tr');
   console.log(str);
   for(var s of str){
       s.className = 'grey';
       console.log(s.className);
   }
}

colorString();