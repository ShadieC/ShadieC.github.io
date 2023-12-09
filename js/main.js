function getTestimonialSettings(){
        return {
          dots: false,
          infinite: true,
          speed: 1000,
          autoplay:false,
          loop:true,
          arrows: false,
          touchMove:true,
          slidesToShow: 1,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrow:false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false,
              }
            }
          ]
        }
    };
function getSliderSettings(){
        return {
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            dots:true,
            arrows:false,
            infinite: false,
            touchMove:true,
            responsive: [
              {
                breakpoint: 1300,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 1029,
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
            ]
        }
    };

function getVideoSliderSettings(){
        return {
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            dots:true,
            arrows:false,
            infinite: false,
            touchMove:true,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 1000,
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
        }
    };

function getFeatureSettings(){
        return {
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            dots:true,
            arrows:false,
            infinite: true,
            touchMove:true,
            responsive: [
              {
                breakpoint: 3000,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                  infinite: true,
                  dots: true
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
            ]
        }
    };

function getMustReadsSettings(){
        return {
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            dots:true,
            arrows:false,
            infinite: false,
            touchMove:true,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 800,
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
            ]
        }
    };

function fixCategoriesBlurry() {
    const element = document.getElementById('categories');

    if (element.scrollWidth >= element.clientWidth ) {
        $(".blurry-prev").addClass("dissapear");
        element.addEventListener("scroll", function(){
            const position = document.getElementById('categories').scrollLeft;
            if (position < 0.5 ) {
                $(".blurry-prev").addClass("dissapear");
            } else if ( element.scrollWidth - element.clientWidth == Math.ceil(element.scrollLeft) )  {
                $(".blurry-next").addClass("dissapear");
            } else {
                $(".blurry-prev").removeClass("dissapear");
                $(".blurry-next").removeClass("dissapear");
            }
        });

    } else {
        $(".blurry-next").addClass("dissapear");
        $(".blurry-prev").addClass("dissapear");
    }
};

function fixLifeCategoriesBlurry() {
    const element = document.querySelector("#lifecategories");

    if (element.scrollWidth >= element.clientWidth ) {
        $(".life-prev").addClass("dissapear");
        element.addEventListener("scroll", function(){
            const position = document.getElementById('lifecategories').scrollLeft;
            if (position < 0.5 ) {
                $(".life-prev").addClass("dissapear");
            } else if ( element.scrollWidth - element.clientWidth == Math.ceil(element.scrollLeft) )  {
                $(".life-next").addClass("dissapear");
            } else {
                $(".life-prev").removeClass("dissapear");
                $(".life-next").removeClass("dissapear");
            }
        });

    } else {
        $(".life-next").addClass("dissapear");
        $(".life-prev").addClass("dissapear");
    }
};
 
function fixArticlesBlurry() {   
    const element = document.querySelector("#emotions_article_list");

    if (element.scrollWidth > element.clientWidth ) {
        $(".ea-before").addClass("remove");
        element.addEventListener("scroll", function(){
            const position = document.getElementById('emotions_article_list').scrollLeft;
            if (position < 0.5 ) {
                $(".ea-before").addClass("remove");
            } else if ( element.scrollWidth - element.clientWidth == Math.ceil(element.scrollLeft) )  {
                $(".ea-after").addClass("remove");
            } else {
                $(".ea-before").removeClass("remove");
                $(".ea-after").removeClass("remove");
            }
        });

    } else {
        $(".ea-after").addClass("remove");
        $(".ea-before").addClass("remove");
    }
};

function fixTrendingArticlesBlurry() {   
    const element = document.querySelector("#home_article_list");

    if (element.scrollWidth > element.clientWidth ) {
        $(".ta-before").addClass("remove");
        element.addEventListener("scroll", function(){
            const position = document.getElementById('home_article_list').scrollLeft;
            if (position < 0.5 ) {
                $(".ta-before").addClass("remove");
            } else if ( element.scrollWidth - element.clientWidth == Math.ceil(element.scrollLeft) )  {
                $(".ta-after").addClass("remove");
            } else {
                $(".ta-before").removeClass("remove");
                $(".ta-after").removeClass("remove");
            }
        });

    } else {
        $(".ta-after").addClass("remove");
        $(".ta-before").addClass("remove");
    }
};

function fixLifeArticlesBlurry() {   
    const element = document.querySelector("#life_article_list");

    if (element.scrollWidth > element.clientWidth ) {
        $(".la-before").addClass("remove");
        element.addEventListener("scroll", function(){
            const position = document.getElementById('life_article_list').scrollLeft;
            if (position < 0.5 ) {
                $(".la-before").addClass("remove");
            } else if ( element.scrollWidth - element.clientWidth == Math.ceil(element.scrollLeft) )  {
                $(".la-after").addClass("remove");
            } else {
                $(".la-before").removeClass("remove");
                $(".la-after").removeClass("remove");
            }
        });

    } else {
        $(".la-after").addClass("remove");
        $(".la-before").addClass("remove");
    }
};

function scrollCategories() {
    const buttonRight = document.getElementById('slideRight');
    const buttonLeft = document.getElementById('slideLeft');

    buttonRight.onclick = function () {
      document.getElementById('categories').scrollLeft += 20;
    };
    buttonLeft.onclick = function () {
      document.getElementById('categories').scrollLeft -= 20;
    };
};


function scrollLifeCategories() {
    const buttonRight = document.getElementById('lifeslideRight');
    const buttonLeft = document.getElementById('lifeslideLeft');

    buttonRight.onclick = function () {
      document.getElementById('lifecategories').scrollLeft += 20;
    };
    buttonLeft.onclick = function () {
      document.getElementById('lifecategories').scrollLeft -= 20;
    };
};

function ExchangeCategoriesBlurry() {
    if ($(window).width() >= 940) {
        if($("#right").length){
            document.getElementById('categories').id = 'left';
            document.getElementById('slideLeft').id = 'left_slideLeft' ;
            document.getElementById('slideRight').id = 'left_slideRight' ;
            document.getElementById('left_slideLeft').classList.remove("blurry-prev");
            document.getElementById('left_slideRight').classList.remove("blurry-next");
            document.getElementById('left_slideLeft').classList.remove("dissapear");
            document.getElementById('left_slideRight').classList.remove("dissapear");



            document.getElementById('right').id = 'categories' ;
            document.getElementById('right_slideLeft').id = 'slideLeft' ;
            document.getElementById('right_slideRight').id = 'slideRight' ;
            document.getElementById('slideLeft').classList.add("blurry-prev");
            document.getElementById('slideRight').classList.add("blurry-next");

            fixCategoriesBlurry();
            scrollCategories();
        }

    } else {

        if($("#left").length){
            document.getElementById('categories').id = 'right';
            document.getElementById('slideLeft').id = 'right_slideLeft' ;
            document.getElementById('slideRight').id = 'right_slideRight' ;
            document.getElementById('right_slideLeft').classList.remove("blurry-prev");
            document.getElementById('right_slideRight').classList.remove("blurry-next");
            document.getElementById('right_slideLeft').classList.remove("dissapear");
            document.getElementById('right_slideRight').classList.remove("dissapear");



            document.getElementById('left').id = 'categories' ;
            document.getElementById('left_slideLeft').id = 'slideLeft' ;
            document.getElementById('left_slideRight').id = 'slideRight' ;
            document.getElementById('slideLeft').classList.add("blurry-prev");
            document.getElementById('slideRight').classList.add("blurry-next");

            fixCategoriesBlurry();
            scrollCategories();
        }

    }
};

function ExchangeLifeCategoriesBlurry() {
    if ($(window).width() >= 940) {
        if($("#liferight").length){
            document.getElementById('Phases_Heading_Two').style.display ="flex";
            document.getElementById('lifecategories').id = 'lifeleft';
            document.getElementById('lifeslideLeft').id = 'life_left_slideLeft' ;
            document.getElementById('lifeslideRight').id = 'life_left_slideRight' ;
            document.getElementById('life_left_slideLeft').classList.remove("life-prev");
            document.getElementById('life_left_slideRight').classList.remove("life-next");
            document.getElementById('life_left_slideLeft').classList.remove("dissapear");
            document.getElementById('life_left_slideRight').classList.remove("dissapear");



            document.getElementById('liferight').id = 'lifecategories' ;
            document.getElementById('life_right_slideLeft').id = 'lifeslideLeft' ;
            document.getElementById('life_right_slideRight').id = 'lifeslideRight' ;
            document.getElementById('lifeslideLeft').classList.add("life-prev");
            document.getElementById('lifeslideRight').classList.add("life-next");
            document.getElementById('lifeslideLeft').classList.add("blurry-prev");
            document.getElementById('lifeslideRight').classList.add("blurry-next");

            scrollLifeCategories();
            fixLifeCategoriesBlurry();
        } 

    } else {

        if($("#lifeleft").length){
            document.getElementById('lifecategories').id = 'liferight';
            document.getElementById('lifeslideLeft').id = 'life_right_slideLeft' ;
            document.getElementById('lifeslideRight').id = 'life_right_slideRight' ;
            document.getElementById('life_right_slideLeft').classList.remove("life-prev");
            document.getElementById('life_right_slideRight').classList.remove("life-next");
            document.getElementById('life_right_slideLeft').classList.remove("blurry-prev");
            document.getElementById('life_right_slideRight').classList.remove("blurry-next");
            document.getElementById('life_right_slideLeft').classList.remove("dissapear");
            document.getElementById('life_right_slideRight').classList.remove("dissapear");



            document.getElementById('lifeleft').id = 'lifecategories' ;
            document.getElementById('life_left_slideLeft').id = 'lifeslideLeft' ;
            document.getElementById('life_left_slideRight').id = 'lifeslideRight' ;
            document.getElementById('lifeslideLeft').classList.add("life-prev");
            document.getElementById('lifeslideRight').classList.add("life-next");
            document.getElementById('lifeslideLeft').classList.add("blurry-prev");
            document.getElementById('lifeslideRight').classList.add("blurry-next");

            scrollLifeCategories();
            fixLifeCategoriesBlurry();
        }

    }
};

function resizing() {
    $(window).resize(function(){
        const slider = document.querySelector(".slider");

        if (slider.classList.contains('slick-initialized')) {
            $('.slider').slick('refresh');
            $('.video-slider').slick('refresh');
        }
    });
};

function clear() {
    const menu = document.querySelector("#option");
    menu.style.visibility = "hidden";
    menu.style.top =  "0px";
    menu.style.left = "0px";
};


$(function () {
 $(".sidebar-link").click(function () {
  $(".sidebar-link").removeClass("is-active");
  $(this).addClass("is-active");
 });
});

$(window)
 .resize(function () {
    if ($(window).width() > 1090) {
       $(".sidebar").removeClass("sb-collapse");
    } else {
       $(".sidebar").addClass("sb-collapse");
    }

    if ($(".show-emotions").length){
        ExchangeCategoriesBlurry();
    }

    if ($(".show-phases").length){
        ExchangeLifeCategoriesBlurry();
    }


 })
 .resize();

const allVideos = document.querySelectorAll(".video");

allVideos.forEach((v) => {
 v.addEventListener("mouseover", () => {
  const video = v.querySelector("video");
  video.play();
 });
 v.addEventListener("mouseleave", () => {
  const video = v.querySelector("video");
  video.pause();
 });
});

$(document).ready(function() {
  $(".mustreads").slick(getMustReadsSettings());
  $(".features").slick(getFeatureSettings());
    $('.h1-testimonial-active').slick(getTestimonialSettings());

  fixTrendingArticlesBlurry();

    var mainblogs = document.getElementById("mainblogs");
    var heroism = document.getElementById("heroism");
    style = window.getComputedStyle(mainblogs);
    wdt = style.getPropertyValue('height');
    heroism.style.height = wdt;
    
});



$(function () {
 $(".logo, .logo-expand, .home-button, .website-backButton").on("click", function (e) {
    $(".main-container").removeClass("show-emotions");
    $(".main-container").removeClass("show-profile");
    $(".main-container").removeClass("show-phases");
    $(".main-container").removeClass("show-forum");
    $(".main-container").removeClass("show-article");
    $(".main-container").removeClass("show-achievements");
    $(".main-container").removeClass("show-donations");
    $(".main-container").scrollTop(0);

    const reads_slider = document.querySelector(".mustreads");

    if (reads_slider.classList.contains('slick-initialized')) {
        $('.mustreads').slick('refresh');
        $('.features').slick('refresh');
        $('.h1-testimonial-active').slick('refresh');

    } else {
        $(".mustreads").slick(getMustReadsSettings());
        $(".features").slick(getFeatureSettings());
        $('.h1-testimonial-active').slick(getTestimonialSettings());
    }

    const create = document.querySelector(".first");

    if (create.classList.contains('remove')) {
        $(".second").addClass("remove");
        $(".first").removeClass("remove");
    } 

 });

 $(".emotions-button").on("click", function (e) {
    $(".main-container").removeClass("show-phases");
    $(".main-container").removeClass("show-profile");
    $(".main-container").removeClass("show-donations");
    $(".main-container").removeClass("show-forum");
    $(".main-container").removeClass("show-article");
    $(".main-container").removeClass("show-achievements");
    $(".main-container").addClass("show-emotions");
    $(".main-container").scrollTop(0);
    $(".sidebar-link").removeClass("is-active");
    $(".emotions-button").addClass("is-active");

    $(".blurry-after").removeClass("blurry-before");
    ExchangeCategoriesBlurry()
    scrollCategories();
    fixCategoriesBlurry();
    fixArticlesBlurry();
    resizing();
    clear();

    const slider = document.querySelector(".slider");

    if (slider.classList.contains('slick-initialized')) {
        $('.slider').slick('refresh');
        $('.video-slider').slick('refresh');

    } else {
        $(".slider").slick(getSliderSettings());
        $(".video-slider").slick(getVideoSliderSettings());
    }

    $('.books-prev').click(function(e){ 
      e.preventDefault(); 
      $('.slider').slick('slickPrev');
    } );
    
    $('.books-next').click(function(e){ 
      $('.slider').slick('slickNext');
    });

    //Video Slider
    $('.videos-prev').click(function(e){ 
      e.preventDefault(); 
      $('.video-slider').slick('slickPrev');
    } );
  
    $('.videos-next').click(function(e){
      e.preventDefault(); 
      $('.video-slider').slick('slickNext');
    });

    const create = document.querySelector(".first");

    if (create.classList.contains('remove')) {
        $(".second").addClass("remove");
        $(".first").removeClass("remove");
    } 

 });

 $(".phases-button").on("click", function (e) {
    $(".main-container").removeClass("show-emotions");
    $(".main-container").removeClass("show-donations");
    $(".main-container").removeClass("show-profile");
    $(".main-container").removeClass("show-article");
    $(".main-container").removeClass("show-forum");
    $(".main-container").removeClass("show-achievements");
    $(".main-container").addClass("show-phases");
    $(".main-container").scrollTop(0);
    $(".sidebar-link").removeClass("is-active");
    $(".phases-button").addClass("is-active");

    const life_slider = document.querySelector(".life-slider");

    if (life_slider.classList.contains('slick-initialized')) {
        $('.life-slider').slick('refresh');
        $('.life-video-slider').slick('refresh');
    } else {
        $(".life-slider").slick(getSliderSettings());
        $(".life-video-slider").slick(getVideoSliderSettings());
    }

    $(".blurry-after").removeClass("blurry-before");
    ExchangeLifeCategoriesBlurry();
    fixLifeArticlesBlurry();
    scrollLifeCategories();
    resizing();
    fixLifeCategoriesBlurry();
    clear();

    const create = document.querySelector(".first");

    if (create.classList.contains('remove')) {
        $(".second").addClass("remove");
        $(".first").removeClass("remove");
    } 

 });

 $(".donations-button").on("click", function (e) {
    $(".main-container").removeClass("show-emotions");
    $(".main-container").removeClass("show-achievements");
    $(".main-container").removeClass("show-phases");
    $(".main-container").removeClass("show-profile");
    $(".main-container").removeClass("show-forum");
    $(".main-container").removeClass("show-article");
    $(".main-container").addClass("show-donations");
    $(".main-container").scrollTop(0);
    $(".sidebar-link").removeClass("is-active");
    $(".donations-button").addClass("is-active");

    const create = document.querySelector(".first");

    if (create.classList.contains('remove')) {
        $(".second").addClass("remove");
        $(".first").removeClass("remove");
    } 
    clear();

 });

  $(".my_article").on("click", function (e) {
    $(".main-container").removeClass("show-emotions");
    $(".main-container").removeClass("show-achievements");
    $(".main-container").removeClass("show-phases");
    $(".main-container").removeClass("show-profile");
    $(".main-container").removeClass("show-donations");
    $(".main-container").removeClass("show-forum");
    $(".main-container").addClass("show-article");
    $(".main-container").scrollTop(0);
    $(".sidebar-link").removeClass("is-active");

    const create = document.querySelector(".first");

    if (create.classList.contains('remove')) {
        $(".second").addClass("remove");
        $(".first").removeClass("remove");
    } 
    clear();

 });

  $(".forum_button").on("click", function (e) {
    $(".main-container").removeClass("show-emotions");
    $(".main-container").removeClass("show-achievements");
    $(".main-container").removeClass("show-phases");
    $(".main-container").removeClass("show-profile");
    $(".main-container").removeClass("show-donations");
    $(".main-container").removeClass("show-article");
    $(".main-container").addClass("show-forum");
    $(".main-container").scrollTop(0);
    $(".sidebar-link").removeClass("is-active");
    $(".second").removeClass("remove");
    $(".first").addClass("remove");
    clear();
  });

 $(".achievements-button").on("click", function (e) {
    $(".main-container").removeClass("show-emotions");
    $(".main-container").removeClass("show-phases");
    $(".main-container").removeClass("show-donations");
    $(".main-container").removeClass("show-profile");
    $(".main-container").removeClass("show-forum");
    $(".main-container").removeClass("show-article");
    $(".main-container").addClass("show-achievements");
    $(".main-container").scrollTop(0);
    $(".sidebar-link").removeClass("is-active");
    $(".achievements-button").addClass("is-active");

    const create = document.querySelector(".first");

    if (create.classList.contains('remove')) {
        $(".second").addClass("remove");
        $(".first").removeClass("remove");
    } 
    clear();
 });

 $(".user-img , .postpic").on("click", function (e) {
    $(".main-container").removeClass("show-emotions");
    $(".main-container").removeClass("show-article");
    $(".main-container").removeClass("show-phases");
    $(".main-container").removeClass("show-donations");
    $(".main-container").removeClass("show-forum");
    $(".main-container").removeClass("show-achievements");
    $(".main-container").addClass("show-profile");
    $(".main-container").scrollTop(0);
    $(".sidebar-link").removeClass("is-active");
    
    const create = document.querySelector(".first");

    if (create.classList.contains('remove')) {
        $(".second").addClass("remove");
        $(".first").removeClass("remove");
    } 
    clear();
 });


});


[...document.querySelectorAll('.emo-btn')].forEach(function(button) {
  button.addEventListener('click', function() {
    if ( button.classList.contains('active') ) {

    } else {
        $(".active").removeClass("active");
        $(button).addClass("active");
        const content_id = button.getAttribute("for");
        const buttons = document.querySelectorAll('button[for=content_id]');
        buttons.forEach(btn => {
            btn.classList.add('active');
        });
        $(".on-spot").removeClass("on-spot");
        const content = document.getElementById(content_id);
        
        if (content) {
            $(content).addClass("on-spot");
        } else {
            setTimeout(function() {
                $("#emorandom").addClass("on-spotl");
            }, 10); 
        }
        var elements = document.querySelectorAll('.emotions_extended');
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.add('dissapear');
        }
        setTimeout(function() {
            for (var i = 0; i < elements.length; i++) {
                elements[i].classList.remove('dissapear');
            }
        }, 10);  
    }
  });
});

[...document.querySelectorAll('.phase-btn')].forEach(function(button) {
    button.addEventListener('click', function() {
        if ( button.classList.contains('activel') ) {

        } else {
            $(".activel").removeClass("activel");
            $(button).addClass("activel");
            const content_id = button.getAttribute("for");
            const buttons = document.querySelectorAll('button[for=content_id]');
            buttons.forEach(btn => {
              btn.classList.add('activel');
            });
            $(".on-spotl").removeClass("on-spotl");
            const content = document.getElementById(content_id);
            
            if (content) {
                $(content).addClass("on-spotl");
            } else {
                setTimeout(function() {
                    $("#phaserandom").addClass("on-spotl");
                }, 10); 
            } 
            var elements = document.querySelectorAll('.phases_extended');
            for (var i = 0; i < elements.length; i++) {
                elements[i].classList.add('dissapear');
            }
            setTimeout(function() {
                for (var i = 0; i < elements.length; i++) {
                    elements[i].classList.remove('dissapear');
                }
            }, 10);  
             
        }
    });
});


 const user_details = document.querySelector(".user-details");
 const username_icon = document.querySelector(".username-icon");
 const submenu = document.querySelector(".nav-list-submenu");

  username_icon.addEventListener('click', function(e) {
    
    if (user_details.classList.contains("open")) {
        $(".open").removeClass("open");
    } else {
       user_details.classList.add('open') 
    }
    
  })

 const notify = document.querySelector(".notify");
 const notify_icon = document.querySelector(".notify_icon");

  notify_icon.addEventListener('click', function(e) {
    
    if (notify.classList.contains("open")) {
        $(".open").removeClass("open");
    } else {
       notify.classList.add('open') 
    }
    
  })

document.querySelectorAll('.forum-menu-link').forEach(function(button) {
      button.addEventListener('click', function() {
          if ( button.classList.contains('active-link') ) {

          } else {
              $(".active-link").removeClass("active-link");
              $(button).addClass("active-link");
              const content_id = button.getAttribute("for");
              const content = document.getElementById(content_id);
              $(".selected-box").removeClass("selected-box");
              $(content).addClass("selected-box");
          }
      });
});

const opt_btns = document.querySelectorAll(".more");
const menu = document.querySelector("#option");



// functions
function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}
function toggle_option(button)
{
    if (menu.style.visibility == "visible")
    { 
        button.classList.remove("current-more");
        menu.style.visibility = "hidden";
        menu.style.top =  "0px";
        menu.style.left = "0px";
    }
    else
    {
        button.classList.add("current-more");
        menu.style.visibility = "visible";
        menu.style.top =  getOffset(button).top + 50 + "px";
        menu.style.left = getOffset(button).left - 315 + "px";
    }
}

function toggle_option_update(button)
{
        menu.style.top =  getOffset(button).top + 50 + "px";
        menu.style.left = getOffset(button).left - 315 + "px";
}

window.addEventListener('load', function() {    
    opt_btns.forEach(function(btn) {
        btn.addEventListener("click", (e)=>{
            toggle_option(btn);
        });
    });
});

$(".phase_container").scroll(function(){
  document.querySelectorAll('.more').forEach(function(button) {
        if ( button.classList.contains('current-more') ) {
              toggle_option_update(button);
        }
    });
});

$(".main-blogs").scroll(function(){
  document.querySelectorAll('.more').forEach(function(button) {
        if ( button.classList.contains('current-more') ) {
              toggle_option_update(button);
        }
    });
});

$(".stream-area").scroll(function(){
  document.querySelectorAll('.more').forEach(function(button) {
        if ( button.classList.contains('current-more') ) {
              toggle_option_update(button);
        }
    });
});

$(".main-container").scroll(function(){
  document.querySelectorAll('.more').forEach(function(button) {
        if ( button.classList.contains('current-more') ) {
              toggle_option_update(button);
        }
    });
});

[...document.querySelectorAll('.profile-menu-link')].forEach(function(button) {
  button.addEventListener('click', function() {
    if ( button.classList.contains('active-profile') ) {

    } else {
        $(".active-profile").removeClass("active-profile");
        $(button).addClass("active-profile");
        const content_id = button.getAttribute("for");
        const content = document.getElementById(content_id);
        $(".selected-profile-box").removeClass("selected-profile-box");
        $(content).addClass("selected-profile-box");
    }
  });
});


function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}















