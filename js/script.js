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

function addClass(data){
    var el = data.querySelectorAll("div")
    for(var item of el){
        item.classList.add("data-profile");
    }
}

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
        arrow.className = "arrow";

        // insert html
        nameTitle.innerHTML = profile.name;

        // append to page
        container.appendChild(section);
        section.appendChild(divHeader);
        divHeader.append(nameTitle, arrow);

        // CONTENT

        // create elements and add classes
        var divContent = document.createElement("div");
        divContent.className = "accordion-content";

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

        // for(var key in data){
        //     console.log(data[key])
        //     divInn.innerHTML = `<b>${data[key]}</b>`;
        // }
        divInn.innerHTML = `<b>${profile.inn}</b>`;

        divContent.append(divAva, divData1, divData2)
        divData1.append(divInn, divName, divAge);
        divData2.append(divEmail, divCity, divGender);

        addClass(divData1);
        addClass(divData2);
    }
}

accordionCreate("#container", dataUsers);