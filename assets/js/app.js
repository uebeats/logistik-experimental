const elms = document.getElementsByClassName('splide');

for (let i = 0; i < elms.length; i++) {
    new Splide(elms[i], {
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

// const car = document.querySelector('.car');

// car.addEventListener('click', function (){
//     alert('No detengas al camión de logistik');
// });