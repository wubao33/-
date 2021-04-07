$(document).ready(function(){
    let maginifier_height=0
    let maginifier_width=0
    let maginifier_index=0
    // 获取要放大的图片
    $('.product-show-image').on('click',function () {
        let maginifier_img=$(this).attr('src')
        maginifier_height=$(this).height()
        maginifier_width=$(this).width()
        $('.magnifier').show();
        $('html,body').addClass('imgHiden');
        $('#bigImg').css({
            "width":maginifier_width,
            "height":maginifier_height,
        })
        $('#bigImg').attr('src',maginifier_img)
    })
    let BgImg=true
    //点击放大缩小
        $('.magnifier-0').on('click',function () {
            BgImg=true;
            if (maginifier_index==0) {
                $('#bigImg').stop().animate({
                    top: "25%",
                    width: 0.75 * maginifier_width,
                    height: 0.75 * maginifier_height
                }, 1000).css({
                    'left': "50%",
                    'transform': ' translateX(-50%)'
                })
                maginifier_index=-1;
            }else if(maginifier_index>0){
                $('#bigImg').animate({
                    "width":maginifier_width,
                    "height":maginifier_height,
                    "top":'0',
                    'left':'0'
                })
                maginifier_index=0
            }
        })
    $('.magnifier-1').on('click',function () {
        if (maginifier_index==-1){
            $('#bigImg').animate({
                "width":maginifier_width,
                "height":maginifier_height,
                "top":'0',
            }).css({
                'left':'0',
                'transform': 'none'
            })
            maginifier_index=0
        }else if (maginifier_index==0) {
            $('#bigImg').stop().animate({
                width: 1.5 * maginifier_width,
                height: 1.5 * maginifier_height,
            }, 1000).css({
                'left': '0',
                'top': '0',
                'transform': 'none'
            })
            maginifier_index=1
            BgImg = false;
        }
    })

    // 大图的滑动功能
        let start_x=0;
        let start_y=0;
        let move_x=0;
        let move_y=0;
        $('#bigImg').on('touchstart',function (e) {
            start_x=e.originalEvent.touches[0].clientX
            start_y=e.originalEvent.touches[0].clientY
        }).on('touchmove',function (e) {
            move_x= Math.ceil((e.originalEvent.touches[0].clientX-start_x)/2);
            move_y= Math.ceil((e.originalEvent.touches[0].clientY-start_y)/2);
        }).on('touchend',function (e) {
            if (BgImg==false){
                let height=$("#bigImg").height()-$('.bigImgBox').height()
                let width=$("#bigImg").width()-$('.bigImgBox').width()
                let top=$("#bigImg").position().top
                let left=$("#bigImg").position().left
                let height1=-height
                let width1=-width
                // console.log(move_x,move_y)
                if(width>0 && height>0){
                if ( width1!==left &&  height1!==top){
                    if(move_x<-60 && move_y<-60){
                        $("#bigImg").stop().animate({
                            'top':height1,
                            'left':width1,
                        },1000)
                    }else if (move_y<-30){
                        $("#bigImg").stop().animate({
                            'top':height1,
                        },1000)
                    }else if (move_x<-30) {
                        $("#bigImg").stop().animate({
                            'left':width1,
                        }, 1000)
                    }
                }else if ( left==width1 &&  height1!==top){
                    if(move_x>60 && move_y<-60){
                        $("#bigImg").stop().animate({
                            'top':height1,
                            'left':0,
                        },1000)
                    }else if (move_y<-60){
                        $("#bigImg").stop().animate({
                            'top':height1,
                        },1000)
                    }else if (move_x>60) {
                        $("#bigImg").stop().animate({
                            'left': 0,
                        }, 1000)
                    }

                    }else if (left!==width1  && height1==top){
                    if(move_x<-60 && move_y>60){
                        $("#bigImg").stop().animate({
                            'top':0,
                            'left':width1,
                        },1000)
                    }else if (move_x<-60){
                        $("#bigImg").stop().animate({
                            'left':width1,
                        },1000)
                    }else if (move_y>60) {
                        $("#bigImg").stop().animate({
                            'top':0,
                        }, 1000)
                    }

                }else if (left==width1 &&  height1==top){
                    if(move_x>60 && move_y>60){
                        $("#bigImg").stop().animate({
                            'top':0,
                            'left':0,
                        },1000)
                    }else if (move_x>60){
                        $("#bigImg").stop().animate({
                            'left':0,
                        },1000)
                    }else if (move_y>60) {
                        $("#bigImg").stop().animate({
                            'top':0,
                        }, 1000)
                    }
                }
                }else if (width>0 && height<=0){
                    if (left!==width1 && move_x<-60 ){
                        $("#bigImg").stop().animate({
                            'left':width1,
                        },1000)
                    }else if(left==width1 && move_x>60){
                        $("#bigImg").stop().animate({
                            'left':0,
                        },1000)
                    }
                }

            }
            start_x=start_y=move_x=move_y=0
        })

    // 关闭功能
    $('.magnifier—close').on('click',function () {
        $('.magnifier').hide();
        $('html,body').removeClass('imgHiden');
        BgImg=true;
        $('#bigImg').css({
            "width":maginifier_width,
            "height":maginifier_height,
            "top":'0',
            'left':'0'
        })
    })

})