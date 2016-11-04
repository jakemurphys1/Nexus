
var qnum=-1;
function queue(){
    qnum+=1;
    switch(qnum){
        case 1:
            enterChar("Soldier2",550,420);
            enterChar("Guard",250,300);
            enterChar("Knight",300,300);
            movevert("Soldier2",-1)
            movehor("Guard",1);
            movehor("Knight",-1);
            delay(3000)
            addobject("light-off",423,60,25)
        break
        case 2:
            dialog("Ugh, where am I?","Soldier2")
        break
        case 3:
            movevert("Knight",120)
            movevert("Guard",150,"end")
        break
         case 4:
            movehor("Knight",170)
            movehor("Guard",200,"end")
        break
         case 5:
           dialog("Good, you're awake.","Knight")
        break
         case 6:
            movevert("Soldier2",10,"end")
        break
         case 7:
           movehor("Soldier2",-1,"end")
        break
         case 8:
            dialog("Who are you, and why am I here?","Soldier2")
        break
          case 9:
           dialog("You've been abducted, just like us.","Knight")
        break
        case 10:
           dialog("I... I don't remember. There was gas...","Soldier2")
        break
         case 11:
           dialog("They use a number of methods to kidnap us. It doesn't matter.","Guard")
        break
         case 12:
           dialog("What do they want with me, and why am I in the soldier outfit?","Soldier2")
        break
         case 13:
           dialog("They went ahead and sent you throw the Nexus to prepare you for combat.","Knight")
        break
        case 14:
           dialog("Combat?","Soldier2")
        break
        case 15:
           dialog("That's why they put us here... To fight monsters.","Knight")
        break
         case 16:
           dialog("Why?","Soldier2")
        break
         case 17:
           dialog("We don't know.","Knight")
        break
         case 18:
           movehor("Knight",-50,"end")
        break
        case 19:
           movevert("Knight",-150,"end")
        break
          case 20:
           dialog("All we know, is when that light turns red, we go through that door and fight.","Knight")
        break
        case 21:
           $(".light-off img").attr("src","../Cinepics/Objects/light-on.gif")
           delay(500)
        break
        case 22:
           dialog("And there it goes. C'mon, it's time to fight.","Knight")
        break
        case 23:
           window.location.href = '../14_cell-start/cell-start.html'
        break
    }
}

//window.location.href = './beforeairship.html'

$(window).load(function(){
    opening("Chapter 6:","Where am I?")
    changesong("01/Threat.mp3")
        
    
});