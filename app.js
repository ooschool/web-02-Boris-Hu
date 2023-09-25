const logoNone = document.querySelector('#logo');
const headerStyle = document.querySelector('#header');

console.log(logoNone);

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        logoNone.style.display = 'none';
        headerStyle.style.backgroundColor = 'white';
        headerStyle.style.paddingTop = '20px';
    } else {
        logoNone.style.display = 'block';
    }
});
