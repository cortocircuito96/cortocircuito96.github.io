let sizeWindows = window.innerWidth;

dectedViewPort();

window.addEventListener('resize', function () {
    sizeWindows = window.innerWidth;

    dectedViewPort();
});

function dectedViewPort() {
    if (sizeWindows <= 1200) {
        const btnToggleNav = document.querySelector('.mobile-nav-toggle');

        btnToggleNav.addEventListener('click', function () {
            document.querySelector('body').classList.toggle('navbar-open');
        });
    }
}
