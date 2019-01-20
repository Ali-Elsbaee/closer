$(document).ready(function(){

  $('.g-slider').css('height', $('.photo').height() + "px");
  $(window).resize(function(){
    $('.g-slider').css('height', $('.photo').height() + "px");
  })

  var lastPosition = 0;
  $(window).scroll(function(event){
    $('.g-slider').css('height', $('.photo').height() + "px");

    var st = $(this).scrollTop();

    if (st > 110) {
      if (st > 840) {
        if (st > lastPosition && $('.bar').css('top') == '20px') {
          $('nav').css({
            'overflow': 'hidden',
            'height': 0
          });
          $('.model').css('bottom','12%');
          $('#logo_txt').css({'transform':'translate(70%,-15px)', 'opacity':'1'});
        } else {
          $('nav').css('overflow','visible');
          $('nav').css('height','60px');
          $('.model').css('bottom','12%');
          $('#logo_txt').css({'transform':'translate(70%,-15px)', 'opacity':'1'});
        }
        lastPosition = st;
      } else {
        $('nav').css('overflow','visible');
        $('nav').css('height','60px');
        $('.model').css('bottom','12%');
        $('#logo_txt').css({'transform':'translate(70%,-15px)', 'opacity':'1'});
      }
    } else {
      $('nav').css('overflow','visible');
      $('nav').css('height','110px');
      $('.model').css('bottom','30%');
      $('#logo_txt').css({'transform':'translate(0,-15px)', 'opacity':'0'});
    }

  });

  function close() {
    $('.bar').css('top','20px');
    $('.bar:nth-of-type(2)').css({'transform':'rotate(45deg)', 'transform-origin': '50% 50% 0'});
    $('.menu ul li').css('transform','translateY(0)');
  }

  $('.btn').click(function(event) {
    if ($('.bar').css('top') == '20px') {
      event.stopPropagation();
      $('nav').css('overflow','visible');
      $('.bar').css('top','10px');
      $('.bar:nth-of-type(2)').css({'transform':'rotate(225deg)', 'transform-origin': '73% 105% 0'});
      var $list = $('.menu ul');
      $list.find('li:first-of-type').css('transform','translateY(50px)');
      $list.find('li:nth-of-type(2)').css('transform','translateY(100px)');
      $list.find('li:nth-of-type(3)').css('transform','translateY(150px)');
      $list.find('li:nth-of-type(4)').css('transform','translateY(200px)');
    } else {
      close();
    }
  });

  $('html').click(function(){
    close();
  });

  function right() {
    var abs_left = $('.abs-left').attr("data-order"),
    left = $('.left').attr("data-order"),
    middle = $('.middle').attr("data-order"),
    right = $('.right').attr("data-order"),
    abs_right = $('.abs-right').attr("data-order");

    $('div[data-order=' + abs_left + ']').removeClass('abs-left').addClass('left');
    $('div[data-order=' + left + ']').removeClass('left').addClass('middle');
    $('div[data-order=' + middle + ']').removeClass('middle').addClass('right');
    $('div[data-order=' + right + ']').removeClass('right').addClass('abs-right');
    $('div[data-order=' + abs_right + ']').removeClass('abs-right').addClass('abs-left');
  }

  function left() {
    var abs_left = $('.abs-left').attr("data-order"),
    left = $('.left').attr("data-order"),
    middle = $('.middle').attr("data-order"),
    right = $('.right').attr("data-order"),
    abs_right = $('.abs-right').attr("data-order");

    $('div[data-order=' + abs_left + ']').removeClass('abs-left').addClass('abs-right');
    $('div[data-order=' + left + ']').removeClass('left').addClass('abs-left');
    $('div[data-order=' + middle + ']').removeClass('middle').addClass('left');
    $('div[data-order=' + right + ']').removeClass('right').addClass('middle');
    $('div[data-order=' + abs_right + ']').removeClass('abs-right').addClass('right');
  }

  $('.fa-chevron-right').click(function(){
    right();
  });

  $('.g-slider').on("swipeleft", function(){
    left();
  });

  $('.fa-chevron-left').click(function(){
    left();
  });

  $('.g-slider').on("swiperight",function(){
    right();
  });

});
