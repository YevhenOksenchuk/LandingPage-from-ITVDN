(function () {
    const section = document.querySelector('.new-arrival__products');
    const nextBtn = document.querySelector('.new-arrival__next');
    const prevBtn = document.querySelector('.new-arrival__prev');


    let position = 0;
    let posit;

    nextBtn.addEventListener('click', function next() {
        posit = position - 100;
        
        if (posit == -300) {
            posit = 0;
        };
        position = posit;
        
        section.style.transform = `translateX(${posit}%)`;
    });

    prevBtn.addEventListener('click', function prev() {
        posit = position + 100;
        
        if (posit == 100) {
            posit = -200;
        };

        position = posit;

        section.style.transform = `translateX(${posit}%)`;
    });
})()