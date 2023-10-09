const ratingContainer = document.querySelector('.rating-container');
const thankingContainer = document.querySelector('.thanking-container');
const ratesContainer = document.querySelector('.ratings');
const rates = document.querySelectorAll('.rate');
const submitBtn = document.querySelector('.submit-btn');
const loader = document.querySelector('.loader');
const ratedNumber = document.querySelector('.rated');

let selectedRate = null;

function submitRate(e) {
  e.preventDefault();

  if (selectedRate !== null) {
    ratingContainer.style.display = 'none';
    loader.style.opacity = 1;
    setTimeout(() => {
      loader.style.opacity = 0;
      setTimeout(() => {
        thankingContainer.style.display = 'flex';
        ratedNumber.innerText = selectedRate;
      }, 700);
    }, 1000);
  } else {
    return;
  }
}

// Events Listeners

ratesContainer.addEventListener('click', (e) => {
  const clickedRate = e.target;

  rates.forEach((rate) => {
    if (rate !== clickedRate) {
      rate.classList.remove('active');
    }
  });

  clickedRate.classList.add('active');

  selectedRate = clickedRate.innerText;
});

submitBtn.addEventListener('click', submitRate);
