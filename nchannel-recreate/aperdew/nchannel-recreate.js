function myFunction(){

    var x = document.getElementById("search");

    if (x.style.width === "0px"){
        x.style.width = "200px";

    }else{
        x.style.width = "0px";
    }

}

$(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    if(scrollTop > 0){
        $('.header').addClass('header-scroll');
        $('.header').removeClass('header');
        
    } else{
        $('.header-scroll').addClass('header');
        $('.header-scroll').removeClass('header-scroll');
    }

})

function btnOver(){
    var y = document.getElementById("questions");
    y.style.bottom = "0px";
}

function btnOut(){
    var y = document.getElementById("questions");
    y.style.bottom = "-4px";
}

$(document).ready(function(){
    $('#left-pane li:first-child').click(function(){
        $('#left-pane').children().removeClass('active');
        $(this).addClass('active');
        $('#explore-slides').children().removeClass('active-div');
        $('#explore-slides div:first-child').addClass('active-div');
    });

    $('#left-pane li:nth-child(2)').click(function(){
        $('#left-pane').children().removeClass('active');
        $(this).addClass('active');
        $('#explore-slides').children().removeClass('active-div');
        $('#explore-slides div:nth-child(2)').addClass('active-div');
    });

    $('#left-pane li:nth-child(3)').click(function(){
        $('#left-pane').children().removeClass('active');
        $(this).addClass('active');
        $('#explore-slides').children().removeClass('active-div');
        $('#explore-slides div:nth-child(3)').addClass('active-div');
    });

    $('#left-pane li:nth-child(4)').click(function(){
        $('#left-pane').children().removeClass('active');
        $(this).addClass('active');
        $('#explore-slides').children().removeClass('active-div');
        $('#explore-slides div:nth-child(4)').addClass('active-div');
    });

    $('#left-pane li:nth-child(5)').click(function(){
        $('#left-pane').children().removeClass('active');
        $(this).addClass('active');
        $('#explore-slides').children().removeClass('active-div');
        $('#explore-slides div:nth-child(5)').addClass('active-div');
    });

});