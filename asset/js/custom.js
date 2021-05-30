const sidebarEffect = () =>{

    var upper = document.getElementsByClassName('upper');
    var middle = document.getElementsByClassName('middle');
    var lower = document.getElementsByClassName('lower');

    var tl = gsap.timeline({paused: true, reversed: true});
    tl.timeScale(1.5);
    tl
    .to(upper, 0.5, {attr: {d: "M8,2 L2,8"}, x: 1, ease:Power2.easeInOut}, 'start')
    .to(middle, 0.5, {autoAlpha: 0}, 'start')
    .to(lower, 0.5, {attr: {d: "M8,8 L2,2"}, x: 1, ease:Power2.easeInOut}, 'start')
    .to(".sidebar",{right:'0',delay:-0.5})
    .to(".sidebar-effect",{left:'-18rem',delay:-0.5})
    .to(".bg-sidebar-effect",{display:'block',delay:-0.2})
    tl.reverse();

    document.querySelector('.hamburger').addEventListener('click', function(){
        tl.reversed() ? tl.play() : tl.reverse() ;
    });

}

const sliderBanner = () => {
    var swiper = new Swiper('.swiper-container', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
      });
}


const navCommercialPassenger = ()=>{
    $('.button-commercial-car').on('click',function(){
        $('.nav-list').addClass('right-0');
        $('.button-commercial-car').removeClass('opacity-40');
        $('.button-passenger-car').addClass('opacity-40');
        $('.list-passenger-car').removeClass("list-car-active").addClass("list-car-nonactive");
        $('.list-commercial-car').removeClass("list-car-nonactive").addClass("list-car-active");
    });
    $('.button-passenger-car').on('click',function(){
        $('.nav-list').removeClass('right-0');
        $('.button-passenger-car').removeClass('opacity-40');
        $('.button-commercial-car').addClass('opacity-40');
        $('.list-commercial-car').removeClass("list-car-active").addClass("list-car-nonactive");
        $('.list-passenger-car').removeClass("list-car-nonactive").addClass("list-car-active");
    });
}

const accordionTrigger = ()=>{
    $('.accordion-item').on('click',function(){
        if($(this).hasClass('item-active')){
            $(this).removeClass('item-active');
            $(this).find('.bg-white').addClass('ai-item-inactive');
        }
        else{
            $(this).parent().find('.item-active').find('.bg-white').addClass('ai-item-inactive');
            $(this).parent().find('.item-active').removeClass('item-active');
            $(this).addClass('item-active');
            $(this).find('.ai-item-inactive').removeClass('ai-item-inactive');
        }
    })
}

const bookingTrigger = () =>{
    var booking = gsap.timeline({paused: true, reversed: true});
    booking.to('.wrapper-form',{top:0,opacity:1});
    $('.booking-trigger').on('click',function(){
        $('.bg-wrapper-form').removeClass('hidden');
        booking.play();
    });
    $('.close').on('click',function(){
        booking.reverse();
        setTimeout(function(){
            $('.bg-wrapper-form').addClass('hidden');
        },800);
    });
}

const pilihanMobil = () =>{

    $('.btn-nav-list').on('click',function(){
        $(this).parent().find('.opacity-1').removeClass('opacity-1').addClass('opacity-40');
        $(this).removeClass('opacity-40').addClass('opacity-1');
        var data_list = $(this).data('list');
        $('.list-active').removeClass('list-active').addClass('list-nonactive');
        $('.'+data_list).removeClass('list-nonactive').addClass('list-active');
    });

    $('.nav-mobil').on('click',function(){
        $(this).parent().find('.border-suzuki').removeClass('border-suzuki').addClass('border-white');
        $(this).removeClass('border-white').addClass('border-suzuki');
        var data_mobil = $(this).data('mobil');
        var data_list = $(this).parent().parent().data('list');
        $('.'+data_list).find('.img-mobil-active').removeClass('img-mobil-active').addClass('img-mobil-nonactive');
        $('.'+data_list).find('.'+data_mobil).removeClass('img-mobil-nonactive').addClass('img-mobil-active');
    });

}

sidebarEffect();
sliderBanner();
navCommercialPassenger();
accordionTrigger();
pilihanMobil();
bookingTrigger();