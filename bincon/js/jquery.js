$(document).ready(function(){

        $("#home").hide(0).delay(1000).fadeIn(300)
        $(".name").hide(0).delay(2000).fadeIn(5000)
        $(".btn-send").hide(0).delay(2000).fadeIn(5000)

        $(".btn-send").on("click", function(){
            $(".hiden-form").hide(0).delay(500).fadeIn(300)
        });

        $(".btn-view").on("click", function(){
            $(".hiden-form").animate({
                opacity : "1",
            },500)
            $(".hiden-form").fadeOut(500)
        });

        //modal alert
        $("#btn-alert").on("click",function(){
            $("#msg-box").dialog("open");
        })
        $("#msg-box").dialog({
            title: "Thank You for contacting me!",
            closeOnEscape: false,
            modal: true,
            autoOpen: false
        })

        $(".toggle-img").click(function(){
            $(".nav-toggleInOut").toggle(300)
        })



                //scroll back to the top of the page
        $(".scrolltotop").click(function(event){
            event.preventDefault();
            $("html").animate({ scrollTop:0}, "slow");
        });
 
});

