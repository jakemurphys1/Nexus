
var qnum=0;

function queue(){
    qnum+=1;
    switch(qnum){
        case 1:
            enterChar("Wizard2",250,200);
            enterChar("Knight2",300,200);
            enterChar("Guard",350,200);
            enterChar("Mage2",400,200);
            enterChar("Soldier2",450,200);
            enterChar("Archer4",500,200);
              enterChar("Templar1",410,500);
             movevert("Templar1",-150,"end")
            break
        case 2:
             dialog("Welcome to the arena. I know many of you are new.","Templar1")
            break
        case 3:
            dialog("But you are slaves now, just like the rest of us.","Templar1")
            break
        case 4:
            dialog("If you want to survive today, we have to work togather!","Templar1")
        break
         case 5:
            dialog("I don't how much you know about the arena, and I don't care.","Templar1")
        break
        case 6:
            dialog("In this arena, we will have a Nexus, but we can't use it to heal..","Templar1")
        break
        case 7:
            dialog("... so any damage we recieve will be permanent.","Templar1")
        break
         case 8:
            dialog("Also, we can't use the brewery.","Templar1")
        break
        case 9:
            dialog("The objective is to kill the other team.","Templar1")
        break
          case 10:
            dialog("All of them? Won't that trap them in the Nexus!","Archer4")
        break
          case 11:
            movehor("Templar1",95,"end")
        break
          case 12:
            movevert("Templar1",-90,"end")
        break
         case 13:
            dialog("Do you hear that Crowd?","Templar1")
        break
         case 14:
            dialog("They aren't here to see us fight...","Templar1")
        break
         case 15:
            dialog("They want to see destruction.","Templar1")
        break
         case 16:
            dialog("To see one of us thrown into the abyss!","Templar1")
        break
         case 17:
            dialog("That cannot, and will not, be us!","Templar1")
        break
         case 18:
            dialog("Now move out!","Templar1")
        break
         case 19:
            window.location.href = '../08_Arena/Arena.html'
        break
    }
}

$(window).load(function(){
    changesong("Drummer.wav")
});