const cards = document.querySelectorAll('.card');

let matched = 0;
let cardOne , cardTwo;
let disableDeck = false;

// The function receives an event object, and from that, we extract the clicked element (the card that was clicked).
function flipCard({target:clickedCard}) {
  
    
  // Check if the clicked card is not the same as cardOne and if the deck is not disabled

  if(cardOne !== clickedCard && !disableDeck){
    // Add the 'flip' class to the clicked card to flip it
    clickedCard.classList.add("flip");

    
    // If cardOne is not already set (i.e., this is the first card being flipped)
    if(!cardOne){
    // Set cardOne to the clicked card and exit the function

      return CardOne = clickedCard;
    }

    // If we reach here, it means cardOne is already set, so this must be the second card being flipped
    cardTwo = clickedCard;
    // Disable further clicks on the deck until we finish checking these two cards

    disableDeck = true;
    // Get the image source of the back view of the first card
    let cardOneImg = cardOne.querySelector(".back-view img").src,
     // Get the image source of the back view of the second card

    cardTwoImg = cardTwo.querySelector(".back-view img").src,

    // Call the function to check if the two cards match, passing their images' sources

    matchCards(cardOneImg , cardTwoImg);
  }
 
  
}