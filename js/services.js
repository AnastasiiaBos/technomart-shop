const servicesItemArray = document.querySelectorAll('.services-item');
const servicesDescItemArray = document.querySelectorAll('.services-desc-item');

for (let i = 0 ; i < servicesItemArray.length; i++) {
  servicesItemArray[i].addEventListener('click', () => {
    servicesItemArray.forEach(servicesItem => {
      servicesItem.classList.remove('current');
    });

    servicesDescItemArray.forEach(servicesDescItem => {
      servicesDescItem.classList.remove('choice-current');
    });

    servicesItemArray[i].classList.add('current');
    servicesDescItemArray[i].classList.add('choice-current');
  });
}
