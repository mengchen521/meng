    var swiper = new Swiper('.swiper-container', {
       direction: 'vertical'
        , pagination: {
            el: '.swiper-pagination'
             ,type: 'progressbar'
             ,clickable: true
        , },
         navigation: {
            nextEl: '.swiper-button-next'
        },
        on:{
      init: function(){
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      }, 
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      } 
    }
    });


//<-----音符----->
   var musicoff = document.querySelector('.musicoff');
    var music = document.querySelector('.music');
    var audio = document.querySelector('audio');
    var flag = 1;
    music.onclick = function (){
        if(flag==1){
            music.style.animation = "none";
            musicoff.style.display = "none";
            audio.pause();
            flag = 0;
        }else{
            music.style.animation="music_on 800ms infinite linear";
            musicoff.style.display="block";
            audio.play();
            flag = 1;
        }
    }