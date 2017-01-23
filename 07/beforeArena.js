
var qnum=-1;

function queue(){
    qnum+=1;
    switch(qnum){
        case 0:
            opening("Chapter Three:","Dreams of Blood")
            enterChar("Wizard2",250,200);
            enterChar("Templar1",300,200);
            enterChar("Guard",350,200);
            enterChar("Mage2",400,200);
            enterChar("Soldier2",450,200);
            enterChar("Archer4",500,200);
              enterChar("Thief1",410,650,"moving_back");
        case 2:
             movevert("Thief1",-150,"end")
            break
        case 3:
             dialog("Welcome to the arena. I know many of you are new.","Thief1")
            break
        case 4:
            dialog("But you are slaves now, just like the rest of us.","Thief1")
            break
        case 5:
            dialog("If you want to survive today, we have to work together!","Thief1")
        break
         case 6:
            dialog("I don't how much you know about the arena, and I don't care.","Thief1")
        break
        case 7:
            dialog("In this arena, we will have a Nexus, but we can't use it to heal.","Thief1")
        break
        case 8:
            dialog("However, we will have access to the brewery.","Thief1")
        break
        case 9:
            dialog("To use the brewery, select the Nexus and select 'brewery'.","Thief1")
        break
        case 10:
            dialog("You can brew potions using ingredients.","Thief1")
        break
         case 11:
            dialog("We can gather ingredients by defeating enemies or by exploring outside of combat.","Thief1")
        break
         case 12:
            dialog("I'm also a thief, so I can get more by stealing.","Thief1")
        break
        case 13:
            dialog("Also, we won't be able to escape once we enter combat.","Thief1")
        break
        case 14:
            dialog("Our ultimate objective is to kill the other team.","Thief1")
        break
          case 15:
            dialog("All of them? Won't that trap them in the Nexus!","Archer4")
        break
          case 16:
            movehor("Thief1",95,"end")
        break
          case 17:
            movevert("Thief1",-90,"end")
        break
         case 18:
            dialog("Do you hear that Crowd?","Thief1")
        break
         case 19:
            dialog("They aren't here to see us fight...","Thief1")
        break
         case 20:
            dialog("They want to see destruction.","Thief1")
        break
         case 21:
            dialog("To see one of us thrown into the abyss!","Thief1")
        break
         case 22:
            dialog("That cannot, and will not, be us!","Thief1")
        break
         case 23:
            dialog("Now move out!","Thief1")
        break
         case 24:
            window.location.href = '../08_Arena/Arena.html'
        break
    }
}

$(window).load(function(){
    doeffect("cheer.mp3")
     setInterval(function(){
        doeffect("cheer.mp3")
    },30000)
     
});