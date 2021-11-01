document.querySelectorAll('#index a').forEach((elemento) => {
    elemento.addEventListener('click', () => {
        document.querySelector('#index .active').classList.remove('active');
        elemento.classList.add('active');
    });
});