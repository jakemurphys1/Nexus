
var qnum=-1;
       var Lightning = new Audio();
        Lightning.src = "../sounds/Lightning.wav";

function sun(){
      $("body").append("<div style='background-color:#0ecfd2;margin-top:0px;margin-left:-0px' id = 'quickscene'>" + "<img style= 'margin-left:35%;margin-top:20%; width:200px' src = 'pics/sun2.gif' /></div>")
      
      setTimeout(function(){
         $("#quickscene").remove();
          queue();
      },6000)
}

function queue(){
    qnum+=1;
    switch(qnum){
        case 0:
            sun();
            enterChar("Sandra-R", 400,500,"no","relax")
           $("#Sandra-R").css("transform","rotate(90deg)")
           $("#Sandra-R").css("-ms-transform","rotate(90deg)")
           $("#Sandra-R").css("-webkit-transform","rotate(90deg)")
           enterChar("Enchantress", 600,100)
           enterChar("Guard", 650,150,"no","left")
           enterChar("Rouge1", 550,150,"no","right")
           enterChar("Edgar-R", 600,200,"no","moving_front")
           enterChar("Archer1", 200,500)
        break
        case 1:
            delay(0)
        break
        case 2:
            delay(10)
        break
         case 3:
            movevert("Edgar-R",300,"end")
        break
         case 4:
            movehor("Edgar-R",-50,"end")
        break
        case 5:
             dialog("Did you have a nice nap?","Edgar-R","left")
             
        break
           case 6:
           movehor("Sandra-R",1)
                      $("#Sandra-R").css("transform","rotate(0deg)")
           $("#Sandra-R").css("-ms-transform","rotate(0deg)")
           $("#Sandra-R").css("-webkit-transform","rotate(0deg)")
              dialog("Why is the sun doing that?","Sandra-R")
        break
         case 7:
              dialog("It does that sometimes. Doesn't matter, it'll be back to normal soon enough.","Edgar-R","left")
        break
        case 8:
              dialog("I had another weird dream.","Sandra-R")
        break
         case 9:
              dialog("The Arena?","Edgar-R","left")
        break
         case 10:
              dialog("No, there were three people in a cell forced to fight over and over.","Sandra-R")
        break
         case 11:
              dialog("Well, you've had a busy day. I would expect you to have some wierd dreams.","Edgar-R","left")
        break
         case 12:
              addobject("boom",450,50, 300)
              changesong("01/Hurry.mp3")
              doeffect("Lightning.mp3")
            
              setTimeout(function(){
                 $("#boom").remove() 
                 $("#Rouge1").remove()
                 $("#Guard").remove()
                 $("#Enchantress").remove()
              },600)
              movevert("Edgar-R",-1)
              movevert("Sandra-R",-1)
              movevert("Archer1",-1,"end")
        break
           case 13:
              addobject("Arrow",500,0)
              addobject("Arrow",350,0)
              addobject("Arrow",250,0)
              addobject("Arrow",150,0)
                $(".Arrow").css("transform","rotate(180deg)")
           $(".Arrow").css("-ms-transform","rotate(180deg)")
           $(".Arrow").css("-webkit-transform","rotate(180deg)")
           $(".Arrow").animate({
               top:"+=1500px"
           },1000, "linear")
           dialog("RUN!","Edgar-R")
        break
        case 14:
        movevert("Archer1",300, "no","fast")
        movevert("Sandra-R",300,"no","fast")
        movevert("Edgar-R",300,"end","fast")
        break
          case 15:
           window.location.href = 'chaos2.html'
        break
    }
}

$(window).load(function(){
changesong("01/Peaceful.mp3")
saving("15")
});