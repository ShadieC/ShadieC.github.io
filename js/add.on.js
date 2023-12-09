  $(document).ready(function() {
    $('.achievements-description').click(function(event){ 
      if (this.classList.contains("achievements-control")) {
        this.classList.remove("achievements-control");
      } else {
        this.classList.add("achievements-control");
      }
    });
    $(document).on('click','#searchTextbox', function(event){
      event.preventDefault();
      if (document.getElementById("searchTextbox").value.length > 0){
        $('.header').addClass('search-active');
      } else {
        $('.header').addClass('search-active');
      }
    });
    $(document).on('input','.emotions-formInput', function(event){
      const containerForm = document.getElementById("emotions-create-post-form");
      const divToHide1 = containerForm.querySelector(".attached-files");
      const divToHide2 = containerForm.querySelector(".create-post-content-controls");
      event.preventDefault();
      if (document.getElementById("emotions-post-body").value.length > 0 || document.getElementById("emotions-post-title").value.length > 0 || document.getElementById("emotions-image-upload").value.length > 0){
        divToHide1.classList.remove('hide-part');
        divToHide2.classList.remove('hide-part');
      } else {
        divToHide1.classList.add('hide-part')
        divToHide2.classList.add('hide-part')
      }
    });
    $(document).on('input','.emotions-formInput', function(event){
      const containerForm = document.getElementById("phases-create-post-form");
      const divToHide1 = containerForm.querySelector(".attached-files");
      const divToHide2 = containerForm.querySelector(".create-post-content-controls");
      event.preventDefault();
      if (document.getElementById("emotions-post-body").value.length > 0 || document.getElementById("emotions-post-title").value.length > 0 || document.getElementById("emotions-image-upload").value.length > 0){
        divToHide1.classList.remove('hide-part');
        divToHide2.classList.remove('hide-part');
      } else {
        divToHide1.classList.add('hide-part')
        divToHide2.classList.add('hide-part')
      }
    });
    $('.testimonial-prev').click(function(e){ 
      e.preventDefault(); 
      $('.h1-testimonial-active').slick('slickPrev');
    } );
    
    $('.testimonial-next').click(function(e){
      e.preventDefault(); 
      $('.h1-testimonial-active').slick('slickNext');
    });
    $('.musts-prev').click(function(e){ 
      e.preventDefault(); 
      $('.mustreads').slick('slickPrev');
    } );
    
    $('.musts-next').click(function(e){
      e.preventDefault(); 
      $('.mustreads').slick('slickNext');
    });


    $('.books-prev').click(function(e){ 
      e.preventDefault(); 
      $('.slider').slick('slickPrev');
    } );
    
    $('.books-next').click(function(e){ 
      $('.slider').slick('slickNext');
    });

   $('.phase-books-prev').click(function(e){ 
      e.preventDefault(); 
      $('.life-slider').slick('slickPrev');
    } );
    
    $('.phase-books-next').click(function(e){
      e.preventDefault(); 
      $('.life-slider').slick('slickNext');
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
      //Video Slider
    $('.phase-videos-prev').click(function(e){ 
      e.preventDefault(); 
      $('.life-video-slider').slick('slickPrev');
    } );
    
    $('.phase-videos-next').click(function(e){
      e.preventDefault(); 
      $('.life-video-slider').slick('slickNext');
    });

    $('.like').click(function(event){
      const $this = this
      const url = $(this).attr("data-url");
      const likeIcon = this.querySelector(".fa-heart");
      const likeCount = this.querySelector(".like-count");
      let likes = likeCount.innerText;
      likes = parseInt( likes );
      if ($this.classList.contains("liked")) {
        likes--;
        $this.classList.remove("liked");
        likeIcon.classList.remove("fas");
        likeIcon.classList.add("far");
      } else {
        likes++;
        $this.classList.add("liked");
        likeIcon.classList.remove("far");
        likeIcon.classList.add("fas");
      }
      likeCount.innerHTML = likes
    });
    clear(); 
  });