
export function swiperjs(id){

    $(document).ready(function(){
        
        var swiper = new Swiper('.hote-event-slider', {
            effect: 'coverflow',
            grabCursor: true,
            draggable: false,
            centeredSlides: true,
            slidesPerView: 3,
            slidesOffsetBefore: 0,
            speed: 800,
            loop: false,
            simulateTouch: false,
            loopFillGroupWithBlank: true,
            coverflowEffect: {
                rotate: 0,
                stretch: 100,
                depth: 200,
                modifier: 1,
                slideShadows: false
            },
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });        
       
        swiper.slideTo(id);

        $('.hote-event-slider .swiper-wrapper .swiper-slide').on('click', function(e) {
            e.preventDefault();
            swiper.slideTo($(this).index());
            return false;
        });
    });
   
}