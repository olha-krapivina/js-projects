"use strict";

var dataUsers = [
    {
    "id": 1,
    "name": "Veronika",
    "email": "vgroves0@vistaprint.com",
    "age": 50,
    "city": "Javhlant",
    "gender": "Female",
    "inn": 2604048463
    },
    
    {
    "id": 2,
    "name": "Correy",
    "email": "cskidmore1@shop-pro.jp",
    "age": 50,
    "city": "Junglinster",
    "gender": "Male",
    "inn": 5396152028
    },
    
    {
    "id": 3,
    "name": "Chrissie",
    "email": "csobieski2@go.com",
    "age": 40,
    "city": "Mercaderes",
    "gender": "Female",
    "inn": 7437115687
    },
    
    {
    "id": 4,
    "name": "Adrianna",
    "email": "awharrier3@hud.gov",
    "age": 33,
    "city": "Manuel Cavazos Lerma",
    "gender": "Non-binary",
    "inn": 6292774004
    },
    
    {
    "id": 5,
    "name": "Fairlie",
    "email": "feliasen4@bing.com",
    "age": 34,
    "city": "Радовиш",
    "gender": "Female",
    "inn": 5943534093
    }
];

var active = null;

function accordionDropdown(){
    var content = this.nextElementSibling;

    if(active && content !== active){
        active.classList.replace("show", "hide");
    }

    active = content;
    
    var isHide = content.classList.contains("hide");
    if(isHide){
        content.classList.replace("hide", "show");
    }
    else{
        content.classList.replace("show", "hide");
    }
}

function addClass(data){
    var el = data.querySelectorAll("div");
    for(var item of el){
        item.classList.add("data-profile");
    }
}

// function changeImg(img){
//     var arrowForward = img.classList.contains("arrow-forward");
//     if(arrowForward){
//         img.classList.replace("arrow-forward", "arrow-downward");
//     }
//     else{
//         img.classList.replace("arrow-downward", "arrow-forward");
//     }
// }

function accordionCreate(accordionSelector, data){
    var container = document.querySelector(accordionSelector);

    for(var profile of data){
        // HEADER

        // create section
        var section = document.createElement("section");
        section.className = "accordion-section";

        // create elements
        var divHeader = document.createElement("div");
        var nameTitle = document.createElement("h2");
        var arrow = document.createElement("div");

        divHeader.className = "accordion-header";
        arrow.className = "arrow arrow-forward";



        // insert html
        nameTitle.innerHTML = profile.name;

        // append to page
        container.appendChild(section);
        section.appendChild(divHeader);
        divHeader.append(nameTitle, arrow);

        divHeader.onclick = accordionDropdown;

        // CONTENT

        // create elements and add classes
        var divContent = document.createElement("div");
        divContent.className = "accordion-content hide";

        section.appendChild(divContent);

        var divAva = document.createElement("div");
        divAva.className = "accordion-avatar";
        divAva.innerHTML = '<p class="img-avatar">Avatar</p>';

        var divData1 = document.createElement("div");
        divData1.className = "accordion-data";
        var divData2 = document.createElement("div");
        divData2.className = "accordion-data";

        var divInn = document.createElement("div");
        divInn.className = "data-profile__inn";
        var divName = document.createElement("div");
        divName.className = "data-profile__name";
        var divAge = document.createElement("div");
        divAge.className = "data-profile__age";
        var divEmail = document.createElement("div");
        divEmail.className = "data-profile__email";
        var divCity = document.createElement("div");
        divCity.className = "data-profile__city";
        var divGender = document.createElement("div");
        divGender.className = "data-profile__gender";
        
        var arrKey = Object.keys(profile); // names of keys

        divInn.innerHTML = `<b>${arrKey[6]}:</b> ${profile.inn}`;
        divName.innerHTML = `<b>${arrKey[1]}:</b> ${profile.name}`;
        divAge.innerHTML = `<b>${arrKey[3]}:</b> ${profile.age}`;
        divEmail.innerHTML = `<b>${arrKey[2]}:</b> ${profile.email}`;
        divCity.innerHTML = `<b>${arrKey[4]}:</b> ${profile.city}`;
        divGender.innerHTML = `<b>${arrKey[5]}:</b> ${profile.gender}`;

        divContent.append(divAva, divData1, divData2);
        divData1.append(divInn, divName, divAge);
        divData2.append(divEmail, divCity, divGender);

        addClass(divData1);
        addClass(divData2);
    }
}

accordionCreate("#container", dataUsers);