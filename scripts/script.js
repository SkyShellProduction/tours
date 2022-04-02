let recommends = new Swiper('.recommends__slider .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    // centeredSlides: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints:{
          1076:{
            slidesPerView: 3,
          },
          500:{
              slidesPerView: 2
          }
      }
});
let deals = new Swiper('.deals__slider .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints:{
        1076:{
          slidesPerView: 4,
        },
        768:{
            slidesPerView: 3
        },
        500:{
            slidesPerView: 2
        }
    }
});
let navigate = document.querySelector('.navigate'),
    main = document.querySelector('.main');
window.addEventListener('scroll', function (e) { 
    if(window.scrollY >= main.offsetTop) navigate.style.background = '#9ef3f3';
    else navigate.style.background = '';
 })
 let btn =document.querySelector('.btn'),
    modalDark = document.querySelector('.modal__dark'),
    headerList = document.querySelector('.header__list');

btn.addEventListener('click', function (e) {  
    e.preventDefault();
    if(!this.classList.contains('active')){
        this.classList.add('active');
        headerList.classList.add('active');
        modalDark.classList.add('active');
    }else if(this.classList.contains('active')){
        this.classList.remove('active');
        headerList.classList.remove('active');
        modalDark.classList.remove('active');
    }
})
modalDark.addEventListener('click', function (e) { 
    e.preventDefault();
    btn.classList.remove('active');
    headerList.classList.remove('active');
    modalDark.classList.remove('active');
 })