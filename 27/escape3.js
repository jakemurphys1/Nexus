
var qnum=0;
var height=2;

function queue(){
    qnum+=1;
    switch(qnum){
        case 1:
            enterChar("Sorcerer",330,650,"no","moving_back");
             enterChar("Knight",380,650,"no","moving_back");
            enterChar("Archer2",430,650,"no","moving_back");
            
            enterChar("Wizard1",480,730,"no","moving_back");
            enterChar("Templar1",330,730,"no","moving_back");
            enterChar("Soldier2",380,730,"no","moving_back");
            enterChar("Healer1",430,730,"no","moving_back");
            enterChar("Rouge2",480,650,"no","moving_back");
            enterChar("Sandra",530,730,"no","moving_back");
            
              enterChar("Enchantress",330,100,"no","back");
            enterChar("Thief1",385,70,"no","back");
            enterChar("Guard",430,100,"no","back");
            
            movevert("Sorcerer",-300)
            movevert("Archer2",-300)
            movevert("Knight",-350,"end")
            
             movevert("Wizard1",-300)
            movevert("Templar1",-300)
            movevert("Soldier2",-300)
             movevert("Healer1",-300)
            movevert("Rouge2",-300)
             movevert("Sandra",-300)


            break;
        case 2:
             movevert("Guard",1)
              dialog("Stay Back!","Guard")
            break
        case 3:
         movevert("Thief1",1)
          movevert("Enchantress",1)
            dialog("We're not here to fight.","Knight")
            break
        case 4:
       dialog("We're here to help you.","Archer2")
            break
        case 5:
         dialog("Why would you want to help us?","Thief1")
        break
         case 6:
        dialog("I saw you in my dream, I'm a story-teller, and you can save the sun from dark hordes!","Sandra")
        break
        case 7:
        
            movehor("Wizard1",1)
            movehor("Sorcerer",1)
            movehor("Archer2",1)
            movehor("Knight",1)
            movehor("Templar1",1)
            movehor("Healer1",1)
            movehor("Rouge2",1)
            movehor("Soldier2",1)
            movehor("Sandra",-1)
            delay(2000)
        break
        case 8:
        
        dialog("What? It's the truth.","Sandra")
        break
         case 9:
         movevert("Wizard1",-1)
            movevert("Sorcerer",-1)
            movevert("Archer2",-1)
            movevert("Knight",-1)
            movevert("Templar1",-1)
            movevert("Healer1",-1)
            movevert("Sandra",-1)
            movevert("Soldier2",-1)
            movevert("Rouge2",-1,"end")
        break
         case 10:
         dialog("You have to trust us. We need your help.","Knight")
        break
         case 11:
            doeffect("roar.mp3")
            delay(7000)
        break
         case 12:
         movevert("Wizard1",1)
            movevert("Sorcerer",1)
            movevert("Archer2",1)
            movevert("Knight",1)
            movevert("Templar1",1)
            movevert("Healer1",1)
            movevert("Rouge2",1)
            movevert("Soldier2",1)
            movevert("Sandra",1)
        dialog("What was that?","Knight")
        break
        case 13:
         movevert("Thief1",80,"end")
        break
         case 14:
         dialog("That would be the kraken.","Thief1")
        break
         case 15:
         dialog("Whenever a slave escapes, they release it to hunt down and kill them.","Thief1")
        break
          case 16:
          movevert("Wizard1",-1)
            movevert("Sorcerer",-1)
            movevert("Archer2",-1)
            movevert("Knight",-1)
            movevert("Templar1",-1)
            movevert("Healer1",-1)
            movevert("Rouge2",-1)
            movevert("Soldier2",-1)
            movevert("Sandra",-1)
              dialog("We can help you fight it!","Knight")
        break
        case 17:
              dialog("Afraid it can't be killed.","Thief1")
        break
        case 18:
              dialog("But it can be delayed.","Thief1")
        break
        case 19:
              dialog("There's a Nexus nearby. All of you can bond and then attack it together to delay it for a little bit.","Thief1")
        break
        case 20:
              dialog("How long?","Knight")
        break
        case 21:
        $("#Thief1 img").css("opacity",0.5)
              dialog("Long enough for me to phase through here and figure out how to open this door.","Thief1")
        break
          case 22:
              dialog("Here's a tip. Attack it's eyes. It's very near-sighted, so it's eyes will get in close.","Thief1")
        break
         case 23:
              dialog("You can't blind it, but every time you injure an eye, it will delay it.","Thief1")
        break
         case 24:
              movevert("Thief1",-100,"end")
        break
         case 25:
              $("#Thief1").remove()
              delay(100)
        break
         case 26:
            movevert("Wizard1",1)
            movevert("Sorcerer",1)
            movevert("Archer2",1)
            movevert("Knight",1)
            movevert("Templar1",1)
            movevert("Healer1",1)
            movevert("Rouge2",1)
            movevert("Soldier2",1)
            movevert("Sandra",1)
              dialog("I didn't want to use these, but I brought some extra 'Level up' potions. Hopefully, that should help us against this thing.","Knight")
        break
        case 27:
              window.location.href = '../28_escape/escape.html'
        break
    }
}

$(window).load(function(){
    changesong("01/Hurry.mp3")
});