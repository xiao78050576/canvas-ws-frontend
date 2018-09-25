$(function(){
    /*产品中心移入移出*/
    $('.headContent li').eq(1).hover(function(){
        $('#header').addClass('active');
    },function(){
        $('.combo-box').hover(function(){
            $('#header').addClass('active');
        },function(){
            $('#header').removeClass('active');
        });
        $('#header').removeClass('active');
    });
    /*个人中心移入移出*/
    $('.headRight .btns li').eq(1).hover(function(){
        $('.loginModule').show();
    },function(){
        $('.loginModule').hover(function(){
            $(this).show();
        },function(){
            $(this).hide();
        });
        $('.loginModule').hide();
    });
    /*搜索框淡入淡出*/
    $('.headRight .searchBtn').click(function(e){
        $('.headRight .searchLine').show().animate({
            width:450,
            opacity:1
        },200);
        $('.headRight .block').show();
        $(document).click(function(){
            $('.headRight .searchLine').animate({
                width:0,
                opacity:0,
            },200);
            $('.headRight .block').hide();
        });
        e.stopPropagation();
    });
    $('.headRight .searchLine').click(function(e){
        e.stopPropagation();
    })
    /*搜索框搜索*/
    $('.headRight .block').click(function(){
        var searchVal=$('.headRight .searchLine').val();
        var newVal=searchVal.replace(/\s/ig,'');
        console.log(newVal);
    })
    /*banner*/

    $('#banner').hover(function(){
        $('#banner .slick-prev').show();
        $('#banner .slick-next').show();
    },function(){
        $('#banner .slick-prev').hide();
        $('#banner .slick-next').hide();
    });
    /*置换产品浏览图*/
    $(function(){
        $('#content .smallImg li').click(function(){
            $(this).addClass('active').siblings().removeClass('active');
            var bigImg=$('#content .showBigImg');
            var src= $('#content .smallImg .active').find('img').attr('src');
            bigImg.attr('src',src);
        })
    }());
    /*产品类别切换*/
    $(function(){
        var type=$('#content .prodIntroductDes .type').find('span');
        var color=$('#content .prodIntroductDes .color').find('span');
        var numDec=$('#content .prodIntroductDes .dec');
        var numAdd=$('#content .prodIntroductDes .add');
        var numVal=$('#content .prodIntroductDes .numValue');
        type.click(function(){
            $(this).addClass('active').siblings().removeClass('active');
        });
        color.click(function(){
            $(this).addClass('active').siblings().removeClass('active');
        });
        /*数量-*/
        numDec.click(function () {
            if(parseInt(numVal.val())<2){
                alert('不能再少啦!')
            }else{
                numVal.val(parseInt(numVal.val())-1);
            }
        });
        /*数量+*/
        numAdd.click(function () {
            numVal.val(parseInt(numVal.val())+1)
        });
        /*加入购物车*/
        $('#content .prodIntroductDes .addCar').click(function(){
            alert('加入购物车。。')
        });
        /*立刻购买*/
        $('#content .prodIntroductDes .buyNow').click(function(){
            alert('立刻购买。。')
        });
    }());
    /*产品详情和评价切换*/
    $(function(){
        var tag=$('#content .rightConNav li');
        var Content=$('#content .prodCon .tagChange>div');
        tag.click(function(){
            $(this).addClass('active').siblings().removeClass();
            Content.eq($(this).index()).show().siblings().hide();
        })
    }());
    /*评价*/
    $(function(){
        /*评价切换*/
        var evaluateTag=$('#content .rightCon .evaluateHeadLeft').find('span');
        evaluateTag.click(function(){
            $(this).addClass('active').parent().siblings().find('span').removeClass('active');
        });
        /*评价内容*/
        var list=$('.evaluateContent li');
        list.each(function(){
            var imgObj=$(this).find('.leavePic li');
            var bigPic=$(this).find('.bigPic').find('img');
            imgObj.click(function(){
                var src=$(this).find('img').attr('src');
                if($(this).hasClass('active')){
                    $(this).removeClass('active');
                    bigPic.parent().hide();
                }else{
                    $(this).addClass('active').siblings().removeClass('active');
                    bigPic.attr('src',src).parent().show();
                }
            })
        })






    }());
    /*商品类别切换*/
    $('#prodList .prodTag li').click(function(){
        var index=$(this).index();
        var directory=$('.directoryGuide');
        $(this).addClass('active').siblings().removeClass('active');
        /*顶部索引切换*/
        if(index>1){
            //子分类
            var insertVal= $(this).html();
            var item="<li><a href=''>"+insertVal+"</a></li>";
            if(directory.find('li').length>1){
                directory.find('li').eq(1).replaceWith(item);
            }else{
                directory.append(item);
            }
        }else{
            //全部分类
            directory.find('li').eq(1).remove();
        }
    });

}())