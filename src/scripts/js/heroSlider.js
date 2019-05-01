(function () {
    const image1 = document.querySelector('#hero__image-1');
    const image2 = document.querySelector('#hero__image-2');
    const image3 = document.querySelector('#hero__image-3');
    const bgImage = document.querySelector('.header__bg-image');
    const numberPhoto = document.querySelector('.hero__photo--number');
    const images = [image1, image2, image3];
    //debugger
    let i = 1;

    

    setInterval(function slider() {
        for (let j = 0; j < images.length; j++) {
            images[j].style.display = "none";
        }
        
        
        if (i > images.length - 1) {
            i = 0;
        }
        
        images[i].style.display = "block";
        numberPhoto.innerHTML = "";

        switch (i) {
            case 0:
                bgImage.style.backgroundImage = 'url(../images/hero-bg-photo.png';
                numberPhoto.innerHTML = "01";
                break;
            
            case 1:
                bgImage.style.backgroundImage = 'url(../images/hero-bg-photo-3.png';
                numberPhoto.innerHTML = "02";
            break;

            case 2:
                bgImage.style.backgroundImage = 'url(../images/hero-bg-photo-2.png';
                numberPhoto.innerHTML = "03";
            break;
            default:
                break;
        }

        i++
    }, 4000);
})()