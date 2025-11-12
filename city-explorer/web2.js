// Селектирање на сите слики
const images = document.querySelectorAll('.image-card img');
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popupImg');
let currentIndex = 0;

// Отворање popup при клик на слика
popup.classList.add('show');
images.forEach((img, index) => {
  img.addEventListener('click', () => {
    popupImg.src = img.src;
    popup.style.display = 'flex';
    currentIndex = index;
  });
});

// Затворање popup
document.getElementById('closePopup').addEventListener('click', () => {
  popup.style.display = 'none';
});
popup.addEventListener('click', (e) => {
  if (e.target === popup) popup.style.display = 'none';
});

// Следна слика
document.getElementById('nextBtn').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  popupImg.src = images[currentIndex].src;
});

// Претходна слика
document.getElementById('prevBtn').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  popupImg.src = images[currentIndex].src;
});
const gallery = document.querySelector('.gallery');


// Like / Dislike функционалност
document.querySelectorAll('.reaction button').forEach(button => {
  button.addEventListener('click', () => {
    const span = button.querySelector('span');
    span.textContent = parseInt(span.textContent) + 1;
    button.classList.add('clicked');

    setTimeout(() => {
      button.classList.remove('clicked');
    }, 300);
  });
});
// Анкета за посетителите
const form = document.getElementById('surveyForm');
const thankYou = document.getElementById('thankYouMessage');

if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    form.style.display = 'none';
    thankYou.style.display = 'block';
  });
}

// Прочитај повеќе функционалност за написите
const readMoreButtons = document.querySelectorAll('.read-more-btn');

readMoreButtons.forEach(button => {
  button.addEventListener('click', () => {
    const hiddenText = button.previousElementSibling; 
    if (hiddenText.style.display === 'block') {
      hiddenText.style.display = 'none';
      button.textContent = 'Прочитај повеќе';
    } else {
      hiddenText.style.display = 'block';
      button.textContent = 'Сокриј текст';
    }
  });
});
