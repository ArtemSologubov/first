var swiper = new Swiper('.product-slider', {
        spaceBetween: 30,
        effect: 'fade',
        // initialSlide: 2,
        loop: true,
        navigation: {
            nextEl: '.next',
            prevEl: '.prev'
        },
        // mousewheel: {
        //     // invert: false
        // },
        on: {
            init: function(){
                var index = this.activeIndex;

                var target = $('.product-slider__item').eq(index).data('target');

                console.log(target);

                $('.product-img__item').removeClass('active');
                $('.product-img__item#'+ target).addClass('active');
            }
        }

    });

    swiper.on('slideChange', function () {
        var index = this.activeIndex;

        var target = $('.product-slider__item').eq(index).data('target');

        console.log(target);

        $('.product-img__item').removeClass('active');
        $('.product-img__item#'+ target).addClass('active');

        // if(swiper.isEnd) {
        //     $('.prev').removeClass('disabled');
        //     $('.next').addClass('disabled');
        // } else {
        //     $('.next').removeClass('disabled');
        // }

        // if(swiper.isBeginning) {
        //     $('.prev').addClass('disabled');
        // } else {
        //     $('.prev').removeClass('disabled');
        // }
    });
   
    function keyDown (event){
        if(event.code === "ArrowLeft")
        $('#previous').trigger('click');
        if(event.code === "ArrowRight")
        $('#next').trigger('click');
    }
    addEventListener("keydown", (event)=> keyDown(event));
    

    $(".js-fav").on("click", function() {
        $(this).find('.heart').toggleClass("is-active");
    });
    function Go() {
        document.getElementById('scr').src=(document.getElementById('typ').checked)? 'https://wiki.swgoh.help/images/8/89/Unit-Ship-Rey%27s_Millennium_Falcon.png': 'https://static.wikia.nocookie.net/battlefront/images/9/90/Millennium_Falcon_DICE.png/revision/latest?cb=20170519211340'
     }

     
     
    //  $('#simple_arc').circleType({radius:135});
    new CircleType(document.getElementById('simple_arc'))
  .radius(48);
  new CircleType(document.getElementById('simple_arc2'))
  .radius(48);
  new CircleType(document.getElementById('simple_arc3'))
  .radius(48);
    new CircleType(document.getElementById('simple_arc4'))
  .radius(48);
  new CircleType(document.getElementById('simple_arc5'))
  .radius(48);
  new CircleType(document.getElementById('simple_arc6'))
  .radius(48);
    //  $('#simple_arc').circleType({position: 'absolute'});
// $('#curved2').circleType({position: 'absolute', dir: 1, radius: 200});


