
var qnum=-1;
var height=2;

function queue(){
    qnum+=1;
    switch(qnum){
        case 0:
            opening("Chapter Thirteen:","Break Through")
            enterChar("Thief2",-100,150,"no","moving_right");
            enterChar("Archer4",-150,200,"no","moving_right");
            enterChar("Knight-C",-250,200,"no","moving_right");
            enterChar("Soldier-C",-150,150,"no","moving_right");
            enterChar("Rouge2",-200,150,"no","moving_right");
            enterChar("Mage-C",-200,200,"no","moving_right");
            enterChar("Enchantress",-200,250,"no","moving_right");
            enterChar("Guard-C",-250,150,"no","moving_right");
            break;
        case 1:
            movehor("Thief2",820,"end","fast")
            movehor("Archer4",700,"no","fast")
            movehor("Knight-C",700,"no","fast")
            movehor("Soldier-C",700,"no","fast")
            movehor("Rouge2",700,"no","fast")
            movehor("Mage-C",700,"no","fast")
            movehor("Enchantress",700,"no","fast")
            movehor("Guard-C",700,"no","fast")
            break;
        case 2:
             movevert("Thief2",-30)
             delay(1000)
            break
        case 3:
        movehor("Thief2",-100)
            dialog("The door has been magically sealed!","Thief2")
            break
        case 4:
       dialog("What does that mean?","Soldier-C")
            break
        case 5:
         dialog("It means we weren't fast enough. The shield has been activated.","Thief2")
        break
         case 6:
         movehor("Enchantress",-105)
        dialog("How do we deactivate it?","Guard-C")
        break
        case 7:
         movevert("Enchantress",30)
        dialog("There must be a crystal that generates it. If we destroy it, the shield comes down.","Archer4")
        break
        case 8:
        movevert("Thief2",50)
        dialog("I know, but the crystal is behind a wall, with what I'm sure is a bunch of soldiers and their own Beast Nexus.","Thief2")
        break
         case 9:
         dialog("What's with these orbs?","Enchantress")
        break
         case 10:
         dialog("What's a beast Nexus?","Soldier-C")
        break
         case 11:
         movehor("Thief2",-1)
            dialog("It's what they use to send those beasts to fight you.","Thief2")
        break
         case 12:
         movehor("Enchantress",1)
          dialog("Can we use these orbs?","Enchantress")
        break
        case 13:
         movehor("Mage-C",-1)
          dialog("Those orbs are used to capture beasts to use in the Beast Nexus.","Mage-C")
        break
         case 14:
         movehor("Thief2",-1,"no","fast")
            movehor("Archer4",-1,"no","fast")
            movehor("Knight-C",1,"no","fast")
            movehor("Soldier-C",-1,"no","fast")
            movevert("Rouge2",1,"no","fast")
        dialog("WAIT! That's it!","Mage-C")
        break
         case 15:
         dialog("They are probably going to send in a bunch of beasts to attack us.","Mage-C")
        break
          case 16:
          dialog("If we capture them using the orbs, we should be able to send them through the Beast Nexus and destroy the crystal.","Mage-C")
        break
        case 17:
        movehor("Soldier-C",1)
              dialog("Will that work?","Soldier-C")
        break
        case 18:
              dialog("I don't know, there's alot of soldiers guarding it, but maybe...","Thief2")
        break
        case 19:
        movehor("Mage2",1)
              dialog("It's the only plan we have.","Mage-C")
        break
        case 20:
              dialog("Ok, let's go.","Thief2")
        break
        case 21:
         window.location.href = '../32_cell3/cell3.html'
        break
    }
}

$(window).load(function(){
    changesong("01/Hurry.mp3")
    saving("31")
});