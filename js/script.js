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

function accordionCreate(accordionSelector, data){
    var container = document.querySelector(accordionSelector);

    for(var profile of data){
        // create section
        var section = document.createElement("section");
        section.className = "accordion-section";

        // create header elements
        var divHeader = document.createElement("div");
        var nameTitle = document.createElement("h2");
        var arrow = document.createElement("div");

        divHeader.className = "accordion-header";
        arrow.className = "arrow";

        // insert html
        nameTitle.innerHTML = profile.name;

        // append to page
        container.appendChild(section);
        section.appendChild(divHeader);
        divHeader.append(nameTitle, arrow);
    }
}

accordionCreate("#container", dataUsers);