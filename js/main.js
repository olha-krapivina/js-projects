"use strict";

(function (){
    const container = document.querySelector("#container");

    const createCardStructure = ( {title, date, preview} ) => `
        <div class="popular _card-design">
            <p><b>Popular</b></p>
        </div>
        <div class="card-header">
            <div class="card-title _card-design"><span><b>${title}</b></span></div>
            <div class="card-date _card-design"><span><b>${date}</b></span></div>
        </div>

        <div class="card-preview-description _card-design">
            <p>${preview}</p>
        </div>

        <button class="card-btn">More...</button>
    `;

    const render = () => {
        const cards = notes.map((card) => {
            const cardBlock = document.createElement("div");
            cardBlock.className = "card";

            cardBlock.innerHTML = createCardStructure(card);

            return cardBlock;
        });
        container.append(...cards);
    };
    render();
})();