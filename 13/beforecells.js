
var qnum=-1;
function queue(){
    qnum+=1;
    switch(qnum){
        case 1:
            enterChar("Soldier-C",550,420,"no","back");
            enterChar("Guard-C",250,300,"no","right");
            enterChar("Knight-C",300,300,"no","left");
            movehor("Guard-C",1);
            movehor("Knight-C",-1);
            delay(3000)
            addobject("light-off",423,60,25)
        break
        case 2:
            dialog("Ugh, where am I?","Soldier-C")
        break
        case 3:
            movevert("Knight-C",90)
            movevert("Guard-C",150,"end")
        break
         case 4:
            movehor("Knight-C",170)
            movehor("Guard-C",200,"end")
        break
         case 5:
           dialog("Good, you're awake.","Knight-C")
        break
         case 6:
            movevert("Soldier-C",10,"end")
        break
         case 7:
           movehor("Soldier-C",-1,"end")
        break
         case 8:
            dialog("Who are you, and why am I here?","Soldier-C")
        break
          case 9:
           dialog("You've been abducted, just like us.","Knight-C")
        break
        case 10:
           dialog("I... I don't remember. There was gas...","Soldier-C")
        break
         case 11:
           dialog("They use a number of methods to kidnap us. It doesn't matter.","Guard-C")
        break
         case 12:
           dialog("What do they want with me, and why am I in the soldier outfit?","Soldier-C")
        break
         case 13:
           dialog("They went ahead and sent you throw the Nexus to prepare you for combat.","Knight-C")
        break
        case 14:
           dialog("Combat?","Soldier-C")
        break
        case 15:
           dialog("That's why they put us here... To fight monsters.","Knight-C")
        break
         case 16:
           dialog("Why?","Soldier-C")
        break
         case 17:
           dialog("We don't know.","Knight-C")
        break
         case 18:
           movehor("Knight-C",-50,"end")
        break
        case 19:
           movevert("Knight-C",-150,"end")
        break
          case 20:
           dialog("All we know, is when that light turns red, we go through that door and fight.","Knight-C")
        break
        case 21:
           $(".light-off img").attr("src","../CinePics/Objects/light-on.gif")
           delay(500)
        break
        case 22:
           dialog("And there it goes. C'mon, it's time to fight.","Knight-C")
        break
        case 23:
           window.location.href = '../14_cell-start/cell-start.html'
        break
    }
}

//window.location.href = './beforeairship.html'

$(window).load(function(){
    opening("Chapter Six:","Where am I?")
    changesong("01/Threat.mp3")
    saving("13");
        
    
});