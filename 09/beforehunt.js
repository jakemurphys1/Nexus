
var qnum=0;


function queue(){
    qnum+=1;
    switch(qnum){
        case 1:
            $("#train").animate({
                left:"+250px"
            },5000)
            
            addobject("wolf",300,100)
            delay(5000)
        break
        case 2:
            enterChar("Sandra-R",650,460)
            movevert("Sandra-R",-300,"end")
        break
         case 3:
            movehor("Sandra-R",-50,"end")
        break
        case 4:
            movevert("Sandra-R",1,"end")
        break
        case 5:
            enterChar("Archer1",650,460)
            movevert("Archer1",-30,"end")
        break
          case 6:
            movehor("Archer1",-200,"end")
        break
        case 7:
            movehor("Archer1",1,"end")
        break
        case 8:
            enterChar("Rouge1",650,460)
            movevert("Rouge1",-30,"end")
        break
        case 9:
            movehor("Rouge1",-150,"end")
        break
        case 10:
            movevert("Rouge1",-30,"end")
        break
        case 11:
            movevert("Rouge1",1,"end")
        break
        case 12:
            enterChar("Guard",650,460)
            movevert("Guard",-30,"end")
        break
        case 13:
            movehor("Guard",-100,"end")
        break
        case 14:
            queue();
        break
          case 15:
            queue();
        break
        case 16:
            enterChar("Edgar-R",650,460)
            movevert("Edgar-R",-200,"end")
        break
          case 17:
            movehor("Edgar-R",-50,"end")
        break
        case 18:
            movevert("Edgar-R",-1,"end")
        break
          case 19:
            dialog("This is the hunting grounds.","Edgar-R")
        break
          case 20:
            dialog("Pack of creatures will roam by, and it's our job to capture them.","Edgar-R")
        break
          case 21:
            dialog("We do this by using the orb I gave you.","Edgar-R")
        break
         case 22:
            dialog("Get close to a creature, choose 'Capture', and then catch it.","Edgar-R")
        break
        case 23:
            dialog("And remember, the lower it's health, the more likely you will succeed in capturing it.","Edgar-R")
        break
         case 24:
             movehor("Edgar-R",-300,"end")
            movehor("Sandra-R",-250)
        break
          case 25:
             movevert("Edgar-R",-50,"end")
        break
         case 26:
                  $("#wolf").addClass("grayicon");
                  $("#wolf img").animate({
                                height: 0 + "px",
                                width: 0 + "px",
                  },2000);
                  $("#wolf").animate({
                                left:"+20px",
                                top:"+=130px",
                  },2000);
            delay(2000);
        break
      case 27:
             movehor("Edgar-R",1,"end")
        break
        case 28:
            dialog("We only have a limited time before the packs stop coming. We have a number we need to catch before that.","Edgar-R")
        break
        case 29:
            enterChar("Enchantress",300,-100)
            movevert("Enchantress",200,"end")
        break
        case 30:
            dialog("Hi, Edgar!","Enchantress")
        break
        case 31:
            movevert("Edgar-R",-1)
            dialog("Sofia! Glad you could make it!","Edgar-R")
        break
        case 32:
            dialog("Sofia, this is my Daughter Sandra","Edgar-R")
        break
        case 33:
            dialog("Nice to meet you.","Enchantress")
        break
        case 34:
            dialog("You too. I'm not familiar with your class.","Sandra-R")
        break
        case 35:
            dialog("I'm an Enchantress. I can absorb energy from enemies that ignores their defenses.","Enchantress")
        break
        case 36:
            dialog("The closer I am, the more I will absorb.","Enchantress")
        break
        case 37:
            dialog("I can then use that energy to cast powerful enchantments.","Enchantress")
        break
        case 38:
            dialog("My absorbed energy stays with me even after combat.","Enchantress")
        break
        case 39:
            dialog("Well, the elk aren't going to wait for us, let's go.","Edgar-R")
        break
        case 40:
             window.location.href = '../10_Hunter/Hunter.html'
        break
         
    }
}

$(window).load(function(){
    changesong("01/Peaceful.mp3")
   
});