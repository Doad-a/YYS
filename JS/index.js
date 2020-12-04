// window.onresize = function(){
//     document.getElementById("box").width = 1200;
// }

$(function(){
    var resizeTimer = null;
    $(window).bind('resize',function(){
        if(resizeTimer) clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function(){
            var h = document.body.clientWidth;
            // alert(h)
            if(h>=1920){
                $("#box").css({"width":"1920px"})
            }
        },100)
    })
    //获取网页宽度
    // $("body").resize(function () { 
    //     
    // });
    // 清除搜索框聚焦是的边框
    $(".keyword").focus(function () { 
        $(this).css({"outline":"0"})
    })

    // 搜索框动画
    $("#SeachBtn").mouseenter(function () { 
        $(this).css({"transform":"rotateY(180deg)"})
    });
    $("#SeachBtn").mouseleave(function () { 
        $(this).css({"transform":"rotateY(0)"})
    });

    // 导航条hover效果
    $("#Nav_Top_Mid>a:eq(0)").css({"background":"url(images/nav_bg1_d44f09d.jpg) no-repeat","color":"#000"})
    $("#Nav_Top_Mid>a").mouseenter(function () {
        $(this).css({"background":"url(images/nav_bg1_d44f09d.jpg) no-repeat","color":"#000","transition": "600ms ease-in"})
        $(this).siblings().css({"background":"none","color":"#fff"})
        $("#Nav_Top_Mid>a:eq(0)").css({"background":"url(images/nav_bg1_d44f09d.jpg) no-repeat","color":"#000"})
    });
    $("#Nav_Top_Mid>a").mouseleave(function () { 
        $(this).css({"background":"none","color":"#fff"})
        $("#Nav_Top_Mid>a:eq(0)").css({"background":"url(images/nav_bg1_d44f09d.jpg) no-repeat","color":"#000"})
    });

    //二级导航条显示
    $("#Nav_Top_Mid>a").mouseenter(function(){
        var x = $(this).index();
        // alert(x)
        if(x<7 || x>9){
            $("#Subnav_Warp").addClass("active")
        }
        
    })
    $("#Nav_Top_Mid>a").mouseleave(function(){
        if($("#Subnav_Warp").hasClass("active")){
            $("#Subnav_Warp").mouseenter(function(){
                $("#Subnav_Warp").addClass("active")
            })
            $("#Subnav_Warp").mouseleave(function(){
                $("#Subnav_Warp").removeClass("active")
            })
        }
        $("#Subnav_Warp").removeClass("active")
    })

    // 下载游戏旁的选项卡
    // $(".Select_Top_Li2").children("p").css("display","none")
    // $("#Select_Top>ul>li").mouseenter(function(){
        
    // })
    

    $("#Select_Top>ul>li").click(function () { 
        $(this).addClass("Select_Top_Li");
        $(this).removeClass("Select_Top_Li2");
        $(this).siblings().addClass("Select_Top_Li2");
        $(this).siblings().removeClass("Select_Top_Li");
        $(this).siblings().children("p").hide();
        $(this).children("p").show(); 

        var x = $(this).index();
        $("#Select_Content>div:eq("+x+")").stop().fadeIn(1000)
        $("#Select_Content>div:eq("+x+")").siblings().stop().fadeOut(1000);
    });
    //资讯指针小动画
    $(".Text").mouseenter(function(){
        $(this).children("a").children("span").css({"animation":"ZiXun 1s ease-in"})
    })
    $(".Text").mouseleave(function(){
        $(this).children("a").children("span").css({"animation":"none"})
    })

    // 鼠标悬停小精灵上浮
    $(".Text_A").mouseenter(function(){
        $(this).children("a").children(".Post_Text").css({"margin-top":"-18px","transition":"500ms ease-in-out"})
    })
    $(".Text_A").mouseleave(function(){
        $(this).children("a").children(".Post_Text").css({"margin-top":"0px"})
    })

    //资讯部分轮播图
    function N_LunBo(){
        //定义每次翻动的值
        var b = 1040;
        //定义最大左边距
        var a = 4160;
        //获取ul左边距
        var w = $("#News1_Ul").css("marginLeft");
        //转化为数字类型
        var n = parseInt(w);
        //调用时翻页
        n = n-1040;
        n = Math.round(n);
        var i = n/1040;
        i = Math.round(i);
        n = i*1040;
        if(n == -4160){
            n=0;
        }
        if(n==0){
            $("#Once").hide();
        }else{
            $("#Once").show();
        }
        if(n == -3120){
            $("#Next").hide();
        }else{
            $("#Next").show();
        }

        $("#News1_Ul").css("marginLeft",n+"px")
    }
    var Time = setInterval(N_LunBo,5500);
    //清除定时器
    function cleanTime(){
        clearInterval(Time);
    }
    //鼠标移入停止轮播
    $("#News1_Ul>li").mouseenter(function(){
        cleanTime();
    })
    $("#News1_Ul>li").mouseleave(function(){
        Time = setInterval(N_LunBo,5500);
    })
    //上一批
    $("#Once").click(function(){
        cleanTime();
        //定义每次翻动的值
        var b = 1040;
        //定义最大左边距
        var a = 4160;
        //获取ul左边距
        var w = $("#News1_Ul").css("marginLeft");
        //转化为数字类型
        var n = parseInt(w);
        //调用时翻页
        n = n+1040;
        n = Math.round(n);
        var i = n/1040;
        i = Math.round(i);
        n = i*1040;
        if(n == -4160){
            n=0;
        }
        if(n==0){
            $("#Once").hide();
        }else{
            $("#Once").show();
        }
        if(n == -3120){
            $("#Next").hide();
        }else{
            $("#Next").show();
        }

        $("#News1_Ul").css("marginLeft",n+"px")
        Time = setInterval(N_LunBo,5500);
    })
    //下一批
    $("#Next").click(function(){
        cleanTime();
        N_LunBo();
        Time = setInterval(N_LunBo,5500);
    })

    //礼包资料显示
    $("#LiBao>li").mouseenter(function(){
        $(this).children(".ZiLiao").css({"opacity":"1","visibility":"visible"})
    })
    $("#LiBao>li").mouseleave(function(){
        $(this).children(".ZiLiao").css({"opacity":"0","visibility": "hidden"})
    })

    // 平安世界
    $("#world_tab>ul>li").mouseenter(function(){
        $(this).css({"background":"#c2a060","color":"#fff","right":"0px !important"})
        $(this).addClass("border")
    })
    $("#world_tab>ul>li").mouseleave(function(){
        $(this).css({"background":"none","color":"#000"})
        $(this).removeClass("border")
    })
    $(".Img_btn").mouseenter(function(){
        $(this).addClass("Img_btn_hover")
    })
    $(".Img_btn").mouseleave(function(){
        $(this).removeClass("Img_btn_hover")
    })
    // 左右淡出淡入
    $(".Img_List>div:eq(0)").addClass("List_item_on")
    var world_x = 0;
    var arr =new Array();
    arr[0] = "铃鹿御前";
    arr[1] = "凤狸";
    arr[2] = "浮世青行灯";
    arr[3] = "般若";
    arr[4] = "蝎女"
    $("#Img_btn_left>.shishen_name").text(arr[arr.length-1])
    $("#Img_btn_right>.shishen_name").text(arr[1])
    $("#Img_btn_left").click(function(){
        world_x =world_x-1;
        if(world_x<0) {
            world_x= arr.length-1; 
        } 
        // alert(world_x)
        $(".Img_List>div:eq("+world_x+")").stop().addClass("List_item_on")
        $(".Img_List>div:eq("+world_x+")").stop().siblings().removeClass("List_item_on")
        if(world_x==0){
            $("#Img_btn_left>.shishen_name").text(arr[arr.length-1])
        }else{
            $("#Img_btn_left>.shishen_name").text(arr[world_x-1])
        }  
        if(world_x==arr.length-1){
            $("#Img_btn_right>.shishen_name").text(arr[0])
        }else{
            $("#Img_btn_right>.shishen_name").text(arr[world_x+Number(1)])
        }
        
    })
    $("#Img_btn_right").click(function(){
        if(world_x>arr.length-1){
            world_x= 0; 
        } 
        // alert(world_x)
        world_x = world_x+1;
        if(world_x==arr.length){
            $(".Img_List>div:eq(0)").stop().addClass("List_item_on")
            $(".Img_List>div:eq(0)").stop().siblings().removeClass("List_item_on");
            $("#Img_btn_left>.shishen_name").text(arr[arr.length-1])
            world_x= 0;

        }else{
            $(".Img_List>div:eq("+world_x+")").stop().addClass("List_item_on")
            $(".Img_List>div:eq("+world_x+")").stop().siblings().removeClass("List_item_on");
            $("#Img_btn_left>.shishen_name").text(arr[world_x-1]) 
        }
        if(world_x==arr.length-1){
            $("#Img_btn_right>.shishen_name").text(arr[0])
        }else{
            $("#Img_btn_right>.shishen_name").text(arr[world_x+Number(1)])
        }        
    })
    // 全部式神列表
    $(".shishen_item").mouseenter(function(){
        $(this).children(".bj_tp").css("opacity","1")
    })
    $(".shishen_item").mouseleave(function(){
        $(this).children(".bj_tp").css("opacity","0")
    })
    // alert(parseInt($(".shishen_all").css("margin-left")))
    if(parseInt($(".shishen_all").css("margin-left"))==0){
        $(".shishen_btn_left").css("opacity","0")
    }
    $(".shishen_List").click(function(){
        $(".bigImg").css("display","none");
        $(".all_list_shishen").fadeIn(1000)
    })
    $(".shishen_all>ul>li").click(function(){
        $(".all_list_shishen").css("display","none");
        $(".bigImg").fadeIn(1000)
    })
    $(".shishen_List").mouseenter(function(){
        $(this).children("i").css("transform","translate(-5px,0)")
    })
    $(".shishen_List").mouseleave(function(){
        $(this).children("i").css("transform","translate(0px,0)")
    })
    // var lock = true;
    $(".shishen_btn_right").click(function(){
        var shishen_m =  parseInt($(".shishen_all").css("margin-left"))
        var x =Math.round(shishen_m/1060)
        //四舍五入，取整数
        var n = x*1060
        //重新计算margin，防止崩溃
        shishen_m = n - 1060;
        // alert(shishen_m)
        $(".shishen_all").stop().css("margin-left",shishen_m+"px")
        $(".shishen_btn_left").css("opacity","1")
        if(shishen_m<=-6360){
            $(".shishen_btn_right").css("opacity","0")
        }
        // lock = true;
    })
    // lock = false;
    $(".shishen_btn_left").click(function(){
        var shishen_m =  parseInt($(".shishen_all").css("margin-left"))
        var x =Math.round(shishen_m/1060)
        var n = x*1060
        shishen_m = n + parseInt(1060);
        // alert(shishen_m)
        $(".shishen_all").stop().css("margin-left",shishen_m+"px")
        $(".shishen_btn_right").css("opacity","1")
        if(shishen_m==0){
            $(".shishen_btn_left").css("opacity","0")
        }
        // lock = true;
    })
    // lock = false;
    $(".game_top_news>ul>li>a").mouseenter(function(){
        $(this).children("span").css("transform","translate(0px,-10px)")
    })
    $(".game_top_news>ul>li>a").mouseleave(function(){
        $(this).children("span").css("transform","translate(0px,0px)")
    })
    $(".plan_wrap_news>a").css("color","#000")
    $(".plan_wrap_news>a>span").css({"color":"#666","font-size":"12px"})
    $(".plan_wrap_news>a").mouseenter(function () { 
        $(this).css("color","#81c0a1")
        $(this).siblings().css("color","#000")
        $(this).children(".n_line").children("i").css({"width": "5px","background-color":" #81c0a1"})
        $(this).siblings().children(".n_line").children("i").css({"width": "2px","background-color":" #ccc"})
    });
    $(".plan_wrap_news>a").mouseleave(function () { 
        $(this).css("color","#000")
        $(this).children(".n_line").children("i").css({"width": "2px","background-color":" #ccc"})
        $(this).siblings().children(".n_line").children("i").css({"width": "2px","background-color":" #ccc"})
    });
    $(".plan_news>.plan_wrap_news:gt(0)").css("display","none")
    $(".center_top>ul>li").mouseenter(function(){
        $(this).addClass("on");
        $(this).siblings().removeClass("on")
        var x = $(this).index();
        $(".plan_news>.plan_wrap_news:eq("+x+")").css("display","block")
        $(".plan_news>.plan_wrap_news:eq("+x+")").siblings().css("display","none")
    })

    // 同人手账
    var tongren_X = 0;
    function tongren(){
        tongren_X = tongren_X+1;
        // alert(tongren_X)
        if(tongren_X>3){
            tongren_X = 0
        }
        $(".img_num>span:eq("+tongren_X+")").addClass("on");
        $(".img_num>span:eq("+tongren_X+")").siblings().removeClass("on")
        $(".active_show>a:eq("+tongren_X+")").stop().fadeIn(1000)
        $(".active_show>a:eq("+tongren_X+")").siblings().stop().fadeOut(1000)
    }
    var Time_TONGREN = setInterval(tongren,3000);
     function cleanTime_TONGREN(){
        clearInterval(Time_TONGREN);
    }
    $(".active_show>a:gt(0)").fadeOut(0)
    $(".img_num>span").click(function(){
        $(this).addClass("on");
        $(this).siblings().removeClass("on")
        var a = $(this).index();
        $(".active_show>a:eq("+a+")").stop().fadeIn(1000)
        $(".active_show>a:eq("+a+")").siblings().stop().fadeOut(1000)
        cleanTime_TONGREN();
        tongren_X = a;
        Time_TONGREN = setInterval(tongren,3000);
    })
    $(".zuop_show>ul>li").mouseenter(function(){
        $(this).children("a").children("img").addClass("on")
        $(this).siblings().children("a").children("img").removeClass("on")
    })
    $(".bigv_title>div").mouseenter(function(){
        $(this).addClass("on")
        $(this).siblings().removeClass("on")
    })
    $(".bigv_title>div").mouseleave(function(){
        $(this).removeClass("on")
    })
    $(".bigV_show>ul>li").mouseenter(function(){
        $(this).children("a").children(".bigV_bj").css("transform","translateX(-50%) rotate(90deg)")
        $(this).siblings().children("a").children(".bigV_bj").css("transform","translateX(-50%)")
    })
    $(".bigV_show>ul>li").mouseleave(function(){
        $(this).children("a").children(".bigV_bj").css("transform","translateX(-50%)")
    })
    // 指针动画帧
    $(".more_neirong").mouseenter(function(){
        $(this).children("i").css({"animation":"ZiXun2 1s ease-in"})
    })
    $(".more_neirong").mouseleave(function(){
        $(this).children("i").css({"animation":"none"})
    })

    //泛娱乐
    $(".fanyule_active>ul>li").mouseenter(function(){
        $(this).css("marginTop","-10px")
    })
    $(".fanyule_active>ul>li").mouseleave(function () { 
        $(this).css("marginTop","0px")
    });
    
    $("#yule-right").click(function(){
        var x =  parseInt($(".fanyule_show>ul").css("margin-left"))
        x= x-220
        // alert(x)
        if(x<=-1080){
            $("#yule-right").css('display','none')
            $(".fanyule_show>ul").stop().css("marginLeft","-1082px")
        }else{
            $("#yule-right").css('display','block')
            $(".fanyule_show>ul").stop().css("marginLeft",x+"px")
        }

        if(x>=0){
            $("#yule-left").css('display','none')
        }else{
            x= x+220
            $("#yule-left").css('display','block')
        }
        return false
    })
    $("#yule-left").click(function(){
        var x =  parseInt($(".fanyule_show>ul").css("margin-left"))
        // alert(x)
        x= x+220
        if(x>=-1080){
            $("#yule-right").css('display','block')
        }else{
            $("#yule-right").css('display','none')
        }
        if(x>=0){
            $("#yule-left").css('display','none')
            $(".fanyule_show>ul").stop().css("marginLeft","0px")
        }else{
            $("#yule-left").css('display','block')
            $(".fanyule_show>ul").stop().css("marginLeft",x+"px")
        }

        
        return false
    })
})