const symbols = ['A','B','C','D','E','F'];
let cards = [...symbols, ...symbols];
cards.sort(() => Math.random() - 0.5);

const board = document.getElementById('gameBoard');
const triesText = document.getElementById('tries');
const message = document.getElementById('message');

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let tries = 0;
let matchedPairs = 0;

// Креирање на таблата
function createBoard() {
  cards.forEach(symbol => {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardInner = document.createElement('div');
    cardInner.classList.add('card-inner');

    const front = document.createElement('div');
    front.classList.add('card-front');
    front.textContent = ''; // празно на почеток

    const back = document.createElement('div');
    back.classList.add('card-back');
    back.textContent = symbol;

    cardInner.appendChild(front);
    cardInner.appendChild(back);
    card.appendChild(cardInner);

    card.addEventListener('click', flipCard);
    board.appendChild(card);
  });
}

// Превртување на картата
function flipCard() {
  if (lockBoard || this === firstCard) return;

  this.classList.add('flipped');

  if (!firstCard) {
    firstCard = this;
    return;
  }

  secondCard = this;
  lockBoard = true;
  tries++;
  triesText.textContent = `Обиди: ${tries}`;

  checkMatch();
}

// Проверка дали картите се пар
function checkMatch() {
  const isMatch = firstCard.querySelector('.card-back').textContent ===
                  secondCard.querySelector('.card-back').textContent;

  if (isMatch) {
    matchedPairs++;
    disableCards();
    if (matchedPairs === symbols.length) {
      message.textContent = `🎉 Браво! Ги најде сите парови за ${tries} обиди.`;
    }
  } else {
    unflipCards();
  }
}

// Оневозможување на клик за совпаднатите карти
function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetBoard();
}

// Превртување назад ако не се совпаднат
function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove('flipped');
    secondCard.classList.remove('flipped');
    resetBoard();
  }, 1000);
}

// Ресетирање на изборот
function resetBoard() {
  [firstCard, secondCard, lockBoard] = [null, null, false];
}

createBoard();
