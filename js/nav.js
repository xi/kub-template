window.addEventListener('load', function() {
    var header = document.getElementById('header-side');
    var nav = document.getElementById('nav');

    var wrapper = document.createElement('div');
    wrapper.innerHTML = '<a class="menu-button" href="#"></a>';

    var menuButton = wrapper.children[0];
    menuButton.innerHTML = '<i class="burger-icon"></i>';

    menuButton.addEventListener('click', function(event) {
        event.preventDefault();
        nav.classList.toggle('is-visible');
        menuButton.classList.toggle('is-active');
    });

    header.appendChild(menuButton);
});
