(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: false,
        loop: true,
        margin: 50,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            }
        }
    });


    // Testimonial carousel

    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: true,
        dots: true,
        loop: true,
        margin: 0,
        nav : true,
        navText: false,
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            }
        }
    });


     // Fact Counter

     $(document).ready(function(){
        $('.counter-value').each(function(){
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            },{
                duration: 2000,
                easing: 'easeInQuad',
                step: function (now){
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });



})(jQuery);




    function handleSubmit(event) {
      // 表單驗證失敗時會自動被瀏覽器攔下，不會執行這裡
      event.preventDefault();
  
      // 如果驗證失敗（雖然通常不會執行到這行）
      if (!event.target.checkValidity()) {
        return false;
      }
  
      alert('記得送出郵件喔，我們會盡快回復您');
      submitHandler();
  
      // 如果你真的要重新載入頁面可以放這行
      // setTimeout(() => window.location.reload(), 1000);
  
      return false; // 防止預設送出
    }
  
    function submitHandler() {
      var to = "ken4506@gmail.com";
      var title = "ViperStudio-顧客訊息";
      var email = emailText.value;
      var phone = phoneText.value;
  
      var body = "姓名：" + nameText.value + '%0A%0A';
      body += "連絡電話：" + phone + '%0A%0A';
      body += "Email：" + email + '%0A%0A';
      body += "顧客訊息: " + bodyText.value + '%0A%0A%0A';
  
      mailTo.href = "mailto:" + to + "?subject=" + title + "&body=" + body;
      mailTo.click();
    }
  
    // 如果你有要初始化表單，可以保留這段
    function init() {
      nameText.value = '';
      emailText.value = '';
      phoneText.value = '';
      bodyText.value = '';
    }
 