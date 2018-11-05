$(document).ready(function(){
    $('#search-a').click(function(){
        $('#search').addClass('search-bar');
        $('#search-a').addClass('search-a');
    
    })
})

$(document).ready(function(){
    $(document).click(function(){
        
        $('#search-a').click(function(e){
            e.stopPropagation();
        });
        $('#search').click(function(e){
            e.stopPropagation();
        });
        $('#search-a').removeClass('search-a');
        $('#search').removeClass('search-bar');
        
    })
})

$(document).ready(function(){
    $('#arrow-words li:first-child').mouseover(function(){
        $('#arrows img:first-child').addClass('active');
    })
    $('#arrow-words li:first-child').mouseout(function(){
        $('#arrows img:first-child').removeClass('active');
    })

    $('#arrow-words li:nth-child(2)').mouseover(function(){
        $('#arrows img:nth-child(2)').addClass('active');
    })
    $('#arrow-words li:nth-child(2)').mouseout(function(){
        $('#arrows img:nth-child(2)').removeClass('active');
    })

    $('#arrow-words li:nth-child(3)').mouseover(function(){
        $('#arrows img:nth-child(3)').addClass('active');
    })
    $('#arrow-words li:nth-child(3)').mouseout(function(){
        $('#arrows img:nth-child(3)').removeClass('active');
    })

    $('#arrow-words li:nth-child(4)').mouseover(function(){
        $('#arrows img:nth-child(4)').addClass('active');
    })
    $('#arrow-words li:nth-child(4)').mouseout(function(){
        $('#arrows img:nth-child(4)').removeClass('active');
    })

    $('#arrow-words li:nth-child(5)').mouseover(function(){
        $('#arrows img:nth-child(5)').addClass('active');
    })
    $('#arrow-words li:nth-child(5)').mouseout(function(){
        $('#arrows img:nth-child(5)').removeClass('active');
    })
})

$(document).ready(function(){
    $('.prev').click(function(){
        $('.carousel img:first-child').animate({left:'0px'});
        $('.carousel img:nth-child(2)').animate({left:'0px'});
    })
    $('.next').click(function(){
        $('.carousel img:first-child').animate({left:'-1141px'});
        $('.carousel img:nth-child(2)').animate({left:'-1141px'});
        
    })
})


