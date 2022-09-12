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

sliderControlsArray.forEach((sliderControl, index) => {
  sliderControl.addEventListener('click', () => {
    sliderControlsArray.forEach(sliderControl => {
      sliderControl.classList.remove('current');
    });

    sliderItemsArray.forEach(sliderItem => {
      sliderItem.classList.remove('slide-current');
    });

    i = index;

    sliderItemsArray[index].classList.add('slide-current');
    sliderControlsArray[index].classList.add('current');
  })
});
