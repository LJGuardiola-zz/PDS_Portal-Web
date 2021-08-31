
window.onload = function () {

    let appElem = document.getElementById("app");

    initNavbarScroll();

    if (appElem.getAttribute('data-page') !== 'projects') {
        setTimeout(() => hideLoader(), 500);
    } else {
        initProjectsGallery();
    }

}

function initNavbarScroll() {

    const stick = () => {
        let navBarElement = document.getElementById("navbar");
        if (window.scrollY > 10) {
            navBarElement.classList.add('stick');
        } else {
            navBarElement.classList.remove('stick');
        }
    }

    stick();
    window.addEventListener('scroll', () => stick());

}

const initProjectsGallery = () => {

    let isotope = new Isotope('.projects', {
        itemSelector: '.projects__item'
    });

    document.querySelectorAll('.projects-filter__item').forEach(filterElem => {
        filterElem.addEventListener('click', (e) => {
            e.preventDefault();
            isotope.arrange({
                filter: filterElem.getAttribute('data-filter')
            });
            document.querySelectorAll('.projects-filter__item--active')
                .forEach(elem => elem.classList.remove('projects-filter__item--active'));
            filterElem.classList.add('projects-filter__item--active')
        })
    })

}

const hideLoader = () => {
    const loader = document.querySelector('.loader');
    const main = document.querySelector('.app');

    loader.style.opacity = '0';
    loader.style.display = 'none';
    main.style.display = 'block';
    setTimeout(() => (main.style.opacity = '1'), 400);
}