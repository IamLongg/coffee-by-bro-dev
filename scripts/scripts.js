
const menuToggle = document.querySelector('#menu-bars');
const navigation = document.querySelector('.header-navigation');

menuToggle.onclick = function (){
    navigation.classList.toggle('active');
    cart.classList.remove('active');
    search.classList.remove('active');
}


const cartBtn = document.querySelector('#cart-btn');
const cart= document.querySelector('.header-cart');

cartBtn.onclick = () => {
    cart.classList.toggle('active');
    navigation.classList.remove('active');
    search.classList.remove('active');
}

const searchBtn = document.querySelector('#search-cart');
const search= document.querySelector('.header-search-form');

searchBtn.onclick = () => {
    search.classList.toggle('active');
    navigation.classList.remove('active');
    cart.classList.remove('active');
}

window.onscroll = () => {
    navigation.classList.remove('active');
    cart.classList.remove('active');
    search.classList.remove('active');
}
