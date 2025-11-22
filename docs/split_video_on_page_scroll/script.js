let side1 = document.getElementById('side1');
let side2 = document.getElementById('side2');

globalThis.addEventListener('scroll', function () {
    side1.style.left = -globalThis.pageYOffset + 'px';
    side2.style.left = globalThis.pageYOffset + 'px';
})