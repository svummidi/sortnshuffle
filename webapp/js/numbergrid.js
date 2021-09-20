import {getSorted, getShuffled, getRandomNumber} from './utils.js';

class NumberGrid {
    /*
        @param - cardHolderId - String - mandatory
        @param - tiles - Number - optional
        @param - isSorted - Boolean - optional
    */ 
    constructor(cardHolderId, length, isSorted){
        this.cardHolderId = cardHolderId;
        this.length = length || 9;
        this.isSorted = isSorted || true;
    }

    cardOrder = [];     // cardOrder will be set when initialized

    getCardOrder = ()=> this.cardOrder;

    generate(){
        const cardHolder = document.getElementById(this.cardHolderId);
        cardHolder.innerHTML = '';
        cardHolder.append(this.addGrids());
    }

    addGrids(){
        const list = document.createElement('ul');
        list.classList="list-grid";
        this.cardOrder = this.isSorted ? getSorted(this.length) : getShuffled(this.length);
        this.cardOrder.forEach((item) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = item;
            listItem.classList = `item color-${getRandomNumber(1,4)}`;
            list.appendChild(listItem);
        });
        return list;

    }

    sort(){
        this.isSorted = true;
        this.generate();
    }

    shuffle(){
        this.isSorted = false;
        this.generate();
    }
}

export default NumberGrid;

