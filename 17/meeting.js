var height = 2
function airship(upOrDown,enemyexists){
    var enemy="";
    if(enemyexists){
        enemy="<div id='Eairship' STYLE='position:absolute; TOP:100px; LEFT:1005px;' class='unit' ><img src='../CinePics/enemyship.gif'/></div>"
    }
    
  $("body").append("<div style='background-color:lightblue;margin-top:-50px;margin-left:-0px' id = 'quickscene'><div id='airship' STYLE='position:absolute; TOP:" + height*100 + "px; LEFT:405px;' class='unit' ><img src='../CinePics/airship.gif'/></div>" + enemy +
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
              queue();
        },5000)
    }else {
         setTimeout(function(){
            $("#quickscene").remove();
             queue();
        },3000)
    }
 
}


var qnum=-3;

function queue(){
    qnum+=1;
    switch(qnum){
        case -2:
            opening("Chapter Eight:","Strange Meetings")
            enterChar("fisherman", 650,80,"no","fishing")
           enterChar("Archer2", 300,660,"no","moving_back")
           enterChar("Knight", 400,660,"no","moving_back")
           enterChar("Sorcerer", 500,660,"no","moving_back")
        break;
        case -1:
            airship(5);
        break;
        case 0:
           movevert("Knight",-360)
           movevert("Archer2",-360)
           movevert("Sorcerer",-360,"end")
        break
        case 1:
             dialog("According to the stone, the story-teller is right ahead.","Knight")
        break
        case 2:
            movehor("Knight",150)
            movehor("Sorcerer",150)
             movehor("Archer2",150,"end")
        break
         case 3:
         movevert("Archer2",-70)
            movevert("Knight",-70)
            movevert("Sorcerer",-130,"end")
        break
         case 4:
            dialog("Sir, may we speak??","Sorcerer")
        break
        case 5:
             dialog("I'm fishing, go away.","fisherman")
        break
           case 6:
           dialog("It's very important...","Sorcerer")
        break
         case 7:
              dialog("FISHING!","fisherman")
        break
        case 8:
              movevert("Sorcerer",70,"end")
        break
         case 9:
              movehor("Knight",1)
              movehor("Sorcerer",-1)
              movehor("Archer2",1)
              dialog("I don't believe this is the story-teller.","Knight")
        break
         case 10:
              dialog("According to the stone, the story-teller should be further north.","Knight")
        break
         case 11:
              dialog("Are we on the wrong side of the river?","Sorcerer")
        break
         case 12:
              dialog("GOT SOMETHING!","fisherman")
        break
        case 13:
              addobject("bottle",620,60)
           $(".bottle").animate({
               top:"+=300px"
           },1000, "linear")
           movevert("fisherman",1)
           doeffect("Splash.mp3")
           delay(1000)
        break
        case 14:
            movevert("Knight",1)
            movevert("Sorcerer",1)
            movevert("Archer2",1)
            dialog("The stone is pointing at this bottle.","Knight")
        break
          case 15:
          movevert("Archer2",130)
            movevert("Knight",130,"end")
        break
        case 16:
        movehor("Archer2",1)
            movehor("Knight",1,"end")
        break
        case 17:
        movevert("Sorcerer",-1)
        dialog("May we have this bottle","Sorcerer")
        break
        case 18:
            dialog("I'm fishing!","fisherman")
        break
        case 19:
        $("#fisherman").remove()
        enterChar("fisherman", 650,80,"no","fishing")
        
            movehor("Knight",30,"end")
        break
        case 20:
            dialog("There's a stone miniature in here?","Knight")
        break
        case 21:
            movevert("Sorcerer",70)
            dialog("I know what this is. She's been shrunk with a hunter's orb","Sorcerer")
        break
        case 22:
            dialog("Can you reverse it?","Archer2")
        break
        case 23:
            dialog("I think so...","Sorcerer")
        break
        case 24:
        $("#bottle").remove()
        doeffect("Cleanse.mp3")
            enterChar("Sandra-R", 650,400,"end")
        break
        case 25:
            dialog("Where am I?","Sandra-R")
        break
        case 26:
        movehor("Sandra-R",-1)
            dialog("We found you in this bottle. What happened?","Knight")
        break
        case 27:
            dialog("These dark creatures attacked...","Sandra-R")
        break
        case 28:
            dialog("My father, he must have...","Sandra-R")
        break
        case 29:
            dialog("My father is dead...","Sandra-R")
        break
        case 30:
            dialog("We're so sorry..","Archer2")
        break
        case 31:
            dialog("Listen, we don't have much time.","Knight")
        break
        case 32:
            dialog("Those creatures were looking for you.","Knight")
        break
        case 33:
            dialog("Me? Why?","Sandra-R")
        break
        case 34:
            dialog("We can explain later.","Knight")
        break
        case 34:
            dialog("For now, we need to get to our airship.","Knight")
        break
        case 35:
            movevert("Knight",50);
            movevert("Archer2",50);
            movevert("Sorcerer",50);
            movevert("Sandra-R",50,"end");
        break
        case 36:
            airship(-3,"With")
        break
         case 37:
           window.location.href = '../18_airship2/Airship.html'
        break
    }
}

$(window).load(function(){
changesong("01/pleasant.mp3")
saving("17")
});