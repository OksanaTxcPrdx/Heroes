const secondModule = function (arrayData) {

    const cardsSection = document.querySelector('.cards-section');
    arrayData.forEach(heroObj => {
        let card = document.createElement('div');
        let cardText = document.createElement('p');
        let img = new Image();
        img.src = heroObj.photo;
        card.classList.add('card-heroe');
        cardText.textContent = JSON.stringify(heroObj);
        card.append(img, cardText);
        
cardsSection.append(card);
    });
}

export default secondModule;