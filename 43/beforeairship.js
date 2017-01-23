
var qnum=0;
var height=5;
 var propeller=new Audio();
function airship(upOrDown,enemyexists){
    var enemy="";
    if(enemyexists){
        enemy="<div id='Eairship' STYLE='position:absolute; TOP:100px; LEFT:1005px;' class='unit' ><img src='../CinePics/enemyship.gif'/></div>"
    }
    
  $("body").append("<div style='background-color:lightblue;margin-top:0px;margin-left:-0px' id = 'quickscene'><div id='airship' STYLE='position:absolute; TOP:" + height*100 + "px; LEFT:405px;' class='unit' ><img src='../CinePics/airship.gif'/></div>" + enemy +
                 "<div class='trees' STYLE='position:absolute; TOP:570px; LEFT:-220px;' ><img style='height:80px' src='../CinePics/trees.png'/></div></div>")
    $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:-140px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
        $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:-60px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
            $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:20px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
                $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:100px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
        $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:180px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
        $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:260px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
        $("#cinemabackground").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:340px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
           $("#cinemabackground").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:400px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>'); 
           $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:460px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
               $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:540px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
        height+=upOrDown;
    if(height<1){
        height=1
    };
    if(height>6){
        height=6;
    }
    
    
    $('#airship').animate({
                        top: (height*100)+'px'
                    }, 1500);

    if(enemyexists){
        setTimeout(function(){
            $('#airship').animate({
                        left: '-=1500px'
                    }, 1500);
        },1500)
         setTimeout(function(){
            $('#Eairship').animate({
                        left: '-=1500px'
                    }, 1500);
        },3000)
        setTimeout(function(){
              $("#quickscene").remove();
              queue();
        },5000)
    }else {
         setTimeout(function(){
            $("#quickscene").remove();
             queue();
        },2000)
    }
 
}
function sun(){
      $("body").append("<div style='background-color:#0ecfd2;margin-top:-0px;margin-left:-0px' id = 'quickscene'>" + "<img style= 'margin-left:35%;margin-top:20%; width:200px' src = 'pics/sun.gif' /></div>")
      
      setTimeout(function(){
          $("#quickscene").remove()
          queue();
      },3000)
}
function queue(){
    qnum+=1;
    switch(qnum){
        case 1:
            airship(-3,false)
            enterChar("Knight",655,300);
            break;
        case 2:
             delay(0)
            break
        case 3:
            movevert("Knight",30,"end")
            break
        case 4:
            movehor("Knight",-300,"end")
            break
        case 5:
     movevert("Knight",95,"end")
        break
         case 6:
 enterChar("Mimic",655,300, "end");
        break
        case 7:
            movevert("Mimic",30,'end')
        break
        case 8:
        movehor("Mimic",-240,"end")
        break
         case 9:
        movevert("Mimic",95,"end")
        break
         case 10:
        dialog("I'm guessing you are the ones my father, or the man I thought was my father, told me about?","Mimic")
        break
         case 11:
         movehor("Knight",1)
        movehor("Mimic",-1)
        dialog("All I know is that the Nexus wanted us to find you.","Knight")
        break
        case 12:
        movevert("Knight",1)
        movevert("Mimic",1)
        dialog("Look at the Sun.","Knight")
        break
         case 13:
         sun()
        break
         case 14:
         movehor("Mimic",-1)
         dialog("There isn't much time left...","Knight")
        break
        case 15:
             dialog("I want to help, but how can I?","Mimic")
        break
          case 16:
            dialog("I can only mimic others.","Mimic")
        break
        case 17:
                 movehor("Knight",1)
            dialog("I believe that is the answer.","Knight")
        break
        case 18:
            dialog("At the Temple, we have a man that has a special power that can only be used by sacrificing his life first.","Knight")
        break
        case 19:
            dialog("Needless to say, a dead sorcerer can't then use the power.","Knight")
        break
        case 20:
            dialog("And we have a special Guard below decks that has a unique 'brace' power.","Knight")
        break
        case 21:
            dialog("Once he uses it, the next damage to him can't kill him.","Knight")
        break
        case 22:
        movehor("Mimic",-1)
            dialog("And you believe that if I use that 'brace' power and then sacrifice my life, I can survive long enough to use that special power.","Mimic")
        break
        case 23:
            dialog("Exactly, it must be the only thing that can kill the demigod that controls the horde. Are you ready?","Knight")
        break
        case 24:
            dialog("I've been preparing for this all my life.","Mimic")
        break
        case 25:
            dialog("Good, now we can only hope the source is still lit when we get back to the temple.","Knight")
        break
        case 26:
            window.location.href = 'beforeseige.html'
        break
    }
}

$(window).load(function(){
    saving("43")
                    propeller.src="../sounds/Helicopter.mp3";
                    propeller.volume=.05;
                    propeller.loop=true;
                    propeller.play();
});