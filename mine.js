

$(document).ready(function(){
    $(".loading i").fadeOut(2000,function(){
        $(".loading").fadeOut(2000,function(){
            $("body").css("overflow","auto")
        })
    })

})