
var qnum=-2;

function queue(){
    qnum+=1;
    switch(qnum){
        case -1:
            opening("Chapter Eight:","Strange Meetings")
        break;
        case 0:
            enterChar("Fisherman", 650,80,"no","fishing")
           enterChar("Archer2", 300,660)
           enterChar("Knight", 400,600)
           enterChar("Sorcerer", 500,700)
           movevert("Knight",-300)
           movevert("Archer2",-360)
           movevert("Sorcerer",-400,"end")
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
             dialog("I'm fishing, go away.","Fisherman")
        break
           case 6:
           dialog("It's very important...","Sorcerer")
        break
         case 7:
              dialog("FISHING!","Fisherman")
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
              dialog("GOT SOMETHING!","Fisherman")
        break
        case 13:
              addobject("Bottle",620,60)
           $(".Bottle").animate({
               top:"+=300px"
           },1000, "linear")
           movevert("Fisherman",1)
           doeffect("Splash.wav")
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
            dialog("I'm fishing!","Fisherman")
        break
        case 19:
        $("#Fisherman").remove()
        enterChar("Fisherman", 650,80,"no","fishing")
        
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
        $("#Bottle").remove()
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
           window.location.href = '../16_airship2/Airship.html'
        break
    }
}

$(window).load(function(){
changesong("Peaceful.mp3")
});