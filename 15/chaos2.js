
var qnum=0;
       var Splash = new Audio();
        Splash.src = "../sounds/Splash.mp3";
       var Sword = new Audio();
        Sword.src = "../sounds/Sword.mp3";
       var Capture = new Audio();
        Capture.src = "../sounds/capture.mp3";

function queue(){
    qnum+=1;
    switch(qnum){
        case 1:
           enterChar("Sandra-R", 400,-100,"no","moving_front")
           enterChar("Edgar-R", 600,-100,"no","moving_front")
           enterChar("Archer1", 300,-100,"no","moving_front")
           movevert("Archer1",500,"no","fast")
           movevert("Edgar-R",500,"no","fast")
           movevert("Sandra-R",500,"end","fast")
           addobject("bottle",550,450)
        break
        case 2:
            dialog("The river is too strong to swim!","Edgar-R","left")
        break
         case 3:
            dialog("Where is a Nexus? We need a Nexus","Sandra-R")
        break
         case 4:
            dialog("There's not one around here.","Edgar-R","left")
        break
        case 5:
              movevert("Archer1",-1,"no","fast")
              movevert("Edgar-R",-1,"no","fast")
              movevert("Sandra-R",-1,"no","fast")
              addobject("Arrow",500,-100)
              addobject("Arrow",450,-100)
              addobject("Arrow",300,-100)
              addobject("Arrow",150,-100)
                $(".Arrow").css("transform","rotate(180deg)")
           $(".Arrow").css("-ms-transform","rotate(180deg)")
           $(".Arrow").css("-webkit-transform","rotate(180deg)")
           $(".Arrow").animate({
               top:"+=1500px"
           },1000, "linear")
           
           setTimeout(function(){
               doeffect("Sword.mp3")
               $("#Archer1").animate({
               top:"+=200px"
           },500, "linear")
               
               setTimeout(function(){
                   $("#Archer1").remove()
                   doeffect("Splash.mp3")
                   queue()
               },500)
               
           },400)
              
        break
           case 6:
           movehor("Sandra-R",-1)
           movehor("Edgar-R",-1)
           dialog("Teresa!","Sandra-R")
        break
         case 7:
              dialog("I have an idea.","Edgar-R","left")
        break
        case 8:
              dialog("What?","Sandra-R")
        break
         case 9:
              dialog("Please forgive me.","Edgar-R","left")
        break
        case 10:
              movehor("Edgar-R",-150,"end")
        break
         case 11:
                   $("#Sandra-R").addClass("grayicon");
                           $("#Sandra-R img").animate({
                                height: 0 + "px",
                                width: 0 + "px",
                            },2000);
                       $("#Sandra-R").animate({
                                left:"+=80px",
                                top:"+=30px",
                        },2000);
            doeffect("success.mp3")
            delay(2000);
        break
         case 11:
              dialog("Well, you've had a busy day. I would expect you to have some wierd dreams.","Edgar-R","left")
        break
         case 12:
            movehor("Edgar-R",100,"end")
        break
           case 13:
            movevert("Edgar-R",1,"end")
        break
        case 14:
             dialog("I'm going to put you in this bottle and let you float down the river.","Edgar-R")
        break
        case 15:
                 $("#bottle").animate({
               top:"+=200px"
           },500, "linear")
               
               setTimeout(function(){
                   $("#bottle").remove()
                   doeffect("Splash.mp3")
                   queue()
               },500)
        break
        case 16:
         movevert("Edgar-R",-1)
             dialog("There are fishermen down river, they should be able to find you.","Edgar-R")
        break
            case 17:
            addobject("warrior",500,-100)
            addobject("warrior",550,-100)
            addobject("warrior",600,-100)
             $(".warrior").animate({
               top:"+=500px"
           },2000, "linear")
             setTimeout(function(){
                     window.location.href = 'beforeArena.html'
             },1500)
        break
    }
}

$(window).load(function(){
 changesong("01/Hurry.mp3")
});