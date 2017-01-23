
var qnum=0;
   var Fire = new Audio();
        Fire.src = "../sounds/Fire.mp3";
        Fire.volume=.3;

function transform(name){
    doeffect("transform.mp3",0,0.3)
  $("body").append("<div style='background-color:#dfdcdc;margin-top:0px;margin-left:-0px' id = 'quickscene'><img style='width:30%; height:30%;margin-left:35%;margin-top:25%' src='pics/" + name + "_transform.gif' /></div>")


  setTimeout(function(){
      $("#quickscene").remove();
      queue();
  },5000)
}


function queue(){
    qnum+=1;
    switch(qnum){
        case 1:
            enterChar("Sandra-R",-200,280)
            enterChar("Edgar-R",-230,220)
            break
            case 2:
       movehor("Sandra-R",670,"no")
        movehor("Edgar-R",670,"end")
        break
        case 3:
        movehor("Sandra-R",0)
        movehor("Edgar-R",0,"end")
        break
        case 4:
        dialog("Is this it, dad!","Sandra-R")
        break
         case 5:
        dialog("Yes, this is the Nexus.","Edgar-R")
        break
        case 6:
        dialog("I'm ready to enter it. I hope I'm a wizard.","Sandra-R")
        break
        case 7:
        dialog("The Nexus chooses the best fit for you. But, before you do, do you know why we use this?","Edgar-R")
        break
         case 8:
        dialog("To get cool magic, weapons and armor","Sandra-R")
        break
         case 9:
        dialog("Well, yes, that too. But the important thing is the safety it provides.","Edgar-R")
        break
         case 10:
        dialog("When a group bonds to a Nexus, they also bond to each other.","Edgar-R")
        break
         case 11:
        dialog("So, while the bond exists, if something happens to one of us, like if we were mauled by a bear...","Edgar-R")
        break
         case 12:
        dialog("We would be safely returned to the Nexus. We wouldn't be able to continue fighting, but we would be safe.","Edgar-R")
        break
         case 13:
        dialog("Yep, safety first. Now I want to shoot some lightning!","Sandra-R")
        break
        case 14:
        dialog("Ok, but if you hit me with a bolt, you are not going hunting! Now I'll go first.","Edgar-R")
        break
           case 15:
        movehor("Edgar-R",80,"end");
        break
         case 16:
       transform("Edgar")
       $("#Edgar-R").remove();
       enterChar("Edgar",450,220)
        break
           case 17:
        dialog("Ok, it's your turn.","Edgar")
        break
         case 18:
        movevert("Sandra-R",-30);
            movevert("Edgar-R",-30,"end");
        break
         case 19:
        movehor("Sandra-R",20);
            movevert("Edgar-R",0,"end");
        break
          case 20:
        movehor("Sandra-R",-20,"end");
        break
          case 21:
          transform("Sandra")
        $("#Sandra-R").remove();
        break
        case 22:
         enterChar("Sandra",490,270)
                dialog("Sweet, I'm a mage!","Sandra");
         break;
           case 23:
        movevert("Sandra",50,"end");
        break
         case 24:
        dialog("I thought you would get something like that. Now, you need to be careful...","Edgar");
        break
        case 25:
        addobject("EffectFire",500,300);
            Fire.play();
        moveobj("EffectFire",50,0,"end");
        break
        case 26:
           dialog("Sandra, what did I just say?","Edgar");
        break
         case 27:
           dialog("You said not to hit you with a lightning bolt. That was neither a bolt nor you!","Sandra");
        break
          case 28:
           dialog("C'mon, we need to go meet the others at the train.","Edgar");
        break
         case 29:
          movevert("Edgar",-200,"end");
            movevert("Sandra",-300);
        break
        case 30:
    window.location.href = 'Cave.html'
        break
    }
}

$(window).load(function(){
        localStorage.setItem("level", "1");
    opening("Chapter One:","Enter the Nexus")
        changesong("01/pleasant.mp3")

    addobject("nexus",540,230)
});