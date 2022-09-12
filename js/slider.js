const sliderItemsArray = document.querySelectorAll('.slider-item');
const sliderControlsArray = document.querySelectorAll('.slider-controls-button');
const forwardButton = document.querySelector('.forward');
const backButton = document.querySelector('.back');


let i = 0;

forwardButton.addEventListener('click', () => {
  sliderItemsArray[i].classList.remove('slide-current');
  sliderControlsArray[i].classList.remove('current');
  i++;

  if (i > sliderItemsArray.length - 1) {
    i = 0;
  }

  sliderItemsArray[i].classList.add('slide-current');
  sliderControlsArray[i].classList.add('current');
});

backButton.addEventListener('click', () => {
  sliderItemsArray[i].classList.remove('slide-current');
  sliderControlsArray[i].classList.remove('current');
  i--;

  if ( i < 0) {
    i = sliderItemsArray.length - 1;
  }

  sliderItemsArray[i].classList.add('slide-current');
  sliderControlsArray[i].classList.add('current');
});

let j = 0;

for (let j = 0; j < sliderControlsArray.length; j++) {
  sliderControlsArray[j].addEventListener('click', () => {
    sliderControlsArray.forEach(sliderControl => {
      sliderControl.classList.remove('current');
    });

    sliderItemsArray.forEach(sliderItem => {
      sliderItem.classList.remove('slide-current');
    });

    sliderItemsArray[j].classList.add('slide-current');
    sliderControlsArray[j].classList.add('current');
  });
}

