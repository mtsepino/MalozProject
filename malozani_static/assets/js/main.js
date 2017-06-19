//Contact Form

$('#submit').click(function () {

    $.post("assets/php/send.php", $(".contact-form").serialize(), function (response) {
        $('#success').html(response);
    });
    return false;

});
drawlocation = () => {
    var booysen = { lat: -26.23103, lng: 28.0225413 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: booysen
    });
    var marker = new google.maps.Marker({
        position: booysen,
        map: map
    });
    console.log('Map called')

}
/*$('#myCarousel').carousel({
  interval: 5000
  , pause: 'hover'
  , wrap: true
});

$('.carousel .item').each(function(){
    var next = $(this);
    var last;
    for (var i=0;i<4;i++) {
        next=next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        
        last=next.children(':first-child').clone().appendTo($(this));
    }
    last.addClass('rightest');
 
});*/
$('.autoplay').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  fade: false,
  cssEase: 'linear',
  arrows:false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


