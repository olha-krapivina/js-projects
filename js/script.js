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

var tableHTML = document.querySelector("#usersProfile");

// function tableContent() - ф-я автоматически добавляет в таблицу данные о пользователях, перебирая массив данных
function tableContent(profile){
    for(var user of users){
        var trTag = document.createElement("tr");

        trTag.className = "colorless";

        trTag.innerHTML = `
        <td class = "id">${user.id}</td>
        <td class = "first-name">${user.first_name}</td>
        <td class = "last-name">${user.last_name}</td>
        <td class = "email">${user.email}</td>
        `
        profile.appendChild(trTag); // добавляет в конец тега tr теги td

        trTag.onclick = toggle; // меняет цвет строки при клике

        var userName = trTag.querySelector(".first-name");
        userName.ondblclick = showName; // показывает в всплывающем окне текущий текст
    }
}
tableContent(tableHTML);

// function toggle() - ф-я изменяет цвет строки, на которую кликнул пользователь
function toggle(){
    var color = this.classList.contains("colorless");
    if(color){
        this.classList.replace("colorless", "color")
    }
    else{
        this.classList.replace("color", "colorless")
    }
}

// function showName(event) - показывает в всплывающем окне текущий текст
function showName(event){
    alert(event.target.innerText);
}