$('.slider').slick({
    dots:false,
    infinite:true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:'<i class="fas fa-angle-left prev"></i>',
    nextArrow:'<i class="fas fa-angle-right next"></i>',
    responsive: [


      
      
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows:false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
          dots:true,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
          dots:true,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]

  });
  $('.about-slider').slick({
    dots:true,
    infinite:true,
    arrows:false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000,
     
      


  })

  $('.counter').counterUp({
    delay: 10,
    time: 1000
});

$('.course-slider').slick({
  dots:false,
  infinite:true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows:true,
  autoplay:false,
  
  autoplaySpeed:2000,
  prevArrow:'<i class="fas fa-angle-left prev"></i>',
  nextArrow:'<i class="fas fa-angle-right next"></i>',
  centerMode:true,
  centerPadding:"0",
  responsive: [
    
  
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows:true,
        dots:false,
        centerMode:false,
        centerPadding:"0",

      
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode:true,
        
        arrows:false,
        dots:true,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        dots:true,
        centerMode:true,
        
        

      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

});                  
  

    $('.testimonial-slider').slick({
    dots:false,
    infinite:true,
    arrows:true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:false,
    autoplaySpeed:2000,
    asNavFor:'.text-slider',
    prevArrow:'<i class="fas fa-angle-left prev"></i>',
    nextArrow:'<i class="fas fa-angle-right next"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows:false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
          dots:true,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
          dots:true,
  
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  
    


  })
  $('.text-slider').slick({
    dots:false,
    infinite:true,
    arrows:false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:false,
    autoplaySpeed:2000,
    asNavFor:'.testimonial-slider',
    fade:true,
    

  })
  
$('.teacher-slider').slick({
  dots: false,
  infinite: true,
  speed: 900,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  autoplay:false,
  autoplaySpeed:1200,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots:true,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots:true,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


  $('.footer-slider').slick({
    dots:false,
    infinite:true,
    arrows:false,
    speed: 1000,
    slidesToShow: 7,
    slidesToScroll: 1,
    centerMode:true,
    centerPadding:"20px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots:false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          dots:false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots:false,

        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]

    


  })

                  
  