let btnEkle = document.querySelector('#ekle');
let btnCikart = document.querySelector('#cikart');
let input = document.querySelector('input');


btnEkle.addEventListener('click', () =>{
    input.value = parseInt(input.value) + 1;
});

btnCikart.addEventListener('click', () =>{
    input.value = parseInt(input.value) - 1;
});