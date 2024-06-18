const splideBusiness = document.getElementsByClassName('splide-business');

for (let i = 0; i < splideBusiness.length; i++) {
    new Splide(splideBusiness[i], {
        autoplay: true,
        type: 'loop',
        perPage: 4,
        perMove: 1,
        gap: '1em',
        breakpoints: {
            1200: { perPage: 2, gap: '1rem', arrows: false },
            640 : { perPage: 1, gap: '1rem', arrows: false },
          },
        
    }).mount();
}

const splideReviews = document.getElementsByClassName('splide-reviews');

for (let i = 0; i < splideReviews.length; i++) {
    new Splide(splideReviews[i], {
        autoplay: true,
        type: 'loop',
        perPage: 3,
        perMove: 1,
        gap: '.5em',
        arrows: false,
        breakpoints: {
            1200: { perPage: 2, gap: '.5em', arrows: false },
            640 : { perPage: 1, gap: '.5em', arrows: false },
          },
        
    }).mount();
}


// const car = document.querySelector('.car');

// car.addEventListener('click', function (){
//     alert('No detengas al camión de logistik');
// });