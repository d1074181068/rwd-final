$(document).ready(function() {
    // 回頂部按鈕
    $('.top-bt').click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
    //scroll到一定高度 頂部按鈕出現
    function showBtnCondition() {
        if ($(this).scrollTop() > 400) {
            $('.top-bt').fadeIn();
        } else {
            $('.top-bt').fadeOut();
        }
    }
    $(window).scroll(showBtnCondition);

    //漢堡選單
    $('.hum-bt').click(function(e) {
        e.preventDefault();
        $('.header-menu').toggleClass('open');
        $('.mu-list-bt >.fas.fa-angle-down').attr('class', 'fas fa-angle-right');
        $('.user-bt >.fas.fa-angle-down').attr('class', 'fas fa-angle-right');
        $('.menu-list').slideUp();
        $('.user').slideUp();
    });

    //header 選單hover效果
    $('.mu-list-bt').hover(function() {
        $('.mu-list-bt').css('background-color', 'orange');
    }, function() {
        $('.mu-list-bt').css('background-color', 'black');
    });
    $('.mu-list-bt').click(function(e) {
        e.preventDefault();
        $('.mu-list-bt').css('background-color', 'orange');
        if ($('.mu-list-bt > .fas').attr('class') == 'fas fa-angle-right') {
            $('.mu-list-bt > .fas').attr('class', 'fas fa-angle-down')
        } else {
            $('.mu-list-bt > .fas').attr('class', 'fas fa-angle-right')
        }
        $('.user-bt >.fas.fa-angle-down').attr('class', 'fas fa-angle-right');
        $('.menu-list').slideToggle();
        $('.user').slideUp();
    });
    $('.user-bt').hover(function() {
        $('.user-bt').css('background-color', 'orange');
    }, function() {
        $('.user-bt').css('background-color', 'black');
    });
    $('.user-bt').click(function(e) {
        e.preventDefault();
        $('.user-bt').css('background-color', 'orange');
        if ($('.user-bt > .fas').attr('class') == 'fas fa-angle-right') {
            $('.user-bt > .fas').attr('class', 'fas fa-angle-down');
        } else {
            $('.user-bt > .fas').attr('class', 'fas fa-angle-right');
        }
        $('.mu-list-bt >.fas.fa-angle-down').attr('class', 'fas fa-angle-right');
        $('.listopen').attr('class', 'mu-list-bt');
        $('.user').slideToggle();
        $('.menu-list').slideUp();
    });

    //菜單 點擊愛心 增加我的最愛
    $('.menu-food >li>a').click(function(e) {
        e.preventDefault();
        if ($(this).find('.far.fa-heart').attr('class') == 'far fa-heart') {
            $(this).find('.fa-heart').attr('class', 'fas fa-heart');
        } else {
            $(this).find('.fa-heart').attr('class', 'far fa-heart');
        }
    });

    //(for mobile 無鼠標)當捲動視窗 選單自動收起
    $(window).scroll(function() {
        $('.mu-list-bt >.fas.fa-angle-down').attr('class', 'fas fa-angle-right');
        $('.user-bt >.fas.fa-angle-down').attr('class', 'fas fa-angle-right');
        $('.menu-list').slideUp();
        $('.user').slideUp();
        $('.header-menu').removeClass('open');
        $('.header-menu>li>a').css('background-color', 'black');
    });

    //(for PC) 當鼠標離開選單自動收起
    $('.menu-list').mouseleave(function() {
        $('.mu-list-bt >.fas.fa-angle-down').attr('class', 'fas fa-angle-right');
        $('.user-bt >.fas.fa-angle-down').attr('class', 'fas fa-angle-right');
        $('.header-menu>li>a').css('background-color', 'black');
        $('.menu-list').slideUp();
        $('.user').slideUp();

    });
    $('.user').mouseleave(function() {
        $('.mu-list-bt >.fas.fa-angle-down').attr('class', 'fas fa-angle-right');
        $('.user-bt >.fas.fa-angle-down').attr('class', 'fas fa-angle-right');
        $('.header-menu>li>a').css('background-color', 'black');
        $('.menu-list').slideUp();
        $('.user').slideUp();
    });


});