$(function(){

  $(window).scroll(function(){
    let cur = $(this).scrollTop();
    let target_intro = $('.sc_main_vis .link_wrap').offset().top;
    let target_main = target_intro / 2;

    if(cur > target_main && cur < target_intro ){
      $('header').addClass('on');
    } else if(cur > target_intro){
      $('header > .inner > .logo, header .btn_area').addClass('on');
    } else{
      $('header, header > .inner > .logo, header .btn_area').removeClass('on');
    }
  });

  gsap.from('.help_btn', {
    scale: .5,
    opacity: 0,
    delay: .5,
  });

  $('header .menu_btn').click(function(){
    $('body').addClass('hidden');
    $('header .btn_area, .sc_main_vis .txt_area').fadeOut(10);
    $('header .menu').addClass('on');
    $('header .menu .close_btn').fadeIn(10);
  });

  $('header .menu .close_btn').click(function(){
    $('body').removeClass('hidden');
    $('header .menu').removeClass('on');
    $(this).fadeOut(10);
    $('header .btn_area, .sc_main_vis .txt_area').fadeIn(10);  
  });

  gsap.from('.sc_main_vis .txt_area', {
    opacity: 0,
    yPercent: 20,
    duration: 1,
  });

  $('.baseMotion').each(function (index, item){
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: '-20% 90%',
      },
      opacity: 0,
      yPercent: 30,
      duration: 1,
    })
  })
});
