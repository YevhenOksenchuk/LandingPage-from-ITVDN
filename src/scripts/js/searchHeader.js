const headerSearch = document.querySelector('#headerSearch');
const headerBtn = document.querySelector('#headerBtn');


headerBtn.addEventListener('click', function (e) {
    e.preventDefault;
    headerSearch.style.visibility =  'visible'
})

document.addEventListener('click', function (e) {
    if (e.target != headerSearch && e.target != headerBtn) {
        headerSearch.style.visibility = 'hidden'
    }
})