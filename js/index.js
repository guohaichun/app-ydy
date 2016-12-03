
    window.onload=function(){
        function resize(originSize,type){
            var type=type||"x";
            if(type=="x"){
                var widths=document.documentElement.clientWidth;
                var scale=widths/originSize*100;

            }else if(type=="y"){
                var heights=document.documentElement.clientHeight;
                var scale=heights/originSize*100;
            }
            var html=document.getElementsByTagName("html")[0];
            html.style.fontSize=scale+"px";
        }
        resize(750,"x");
        var swiper = new Swiper('.swiper-container');
        var mySwiper = new Swiper ('.swiper-container', {
        	  pagination : '.swiper-pagination',
            onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
                swiperAnimateCache(swiper); //隐藏动画元素
                swiperAnimate(swiper); //初始化完成开始动画
            },
            onSlideChangeEnd: function(swiper){
                swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
            }
        })



    }