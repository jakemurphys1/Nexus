
var qnum=-1;
var height=2;

function queue(){
    qnum+=1;
    switch(qnum){
        case 0:
            opening("Chapter Twelve:","Rest-Stop")
            
                 enterChar("Knight",380,550,"no","moving_back");
              enterChar("Rouge2",480,550,"no","moving_back");
               enterChar("Sandra",525,550,"no","moving_back");
             enterChar("Sorcerer",430,550,"no","moving_back");
            
            enterChar("Wizard1",480,630,"no","moving_back");
            enterChar("Templar1",320,630,"no","moving_back");
            enterChar("Soldier2",380,630,"no","moving_back");
            enterChar("Healer1",530,630,"no","moving_back");
         
         enterChar("Archer2",430,630,"no","moving_back");
            
            enterChar("Enchantress",380,350);
            enterChar("Guard",500,350);
            enterChar("Thief1",435,350)
            break;
        case 1:
             movevert("Sorcerer",-100)
             movevert("Knight",-100)
             movevert("Archer2",-100)
             movevert("Wizard1",-100)
             movevert("Templar1",-100)
             movevert("Soldier2",-100)
             movevert("Healer1",-100)
             movevert("Rouge2",-100)
             movevert("Sandra",-100,"end")
            break;
        case 2:
             dialog("We should be safe here.","Thief1")
            break
        case 3:
        dialog("I doubt they will search for us here.","Thief1")
            break
        case 4:
       dialog("So, now that you understand what is at stake, will you agree to join us?","Knight")
            break
        case 5:
         dialog("I didn't escape that hell to be tossed into another. I will join you.","Thief1")
        break
         case 6:
        dialog("Me too.","Enchantress")
        break
        case 7:
     dialog("Yeah","Guard")
        break
        case 8:
        dialog("Good, then our next objective will be to acquire another airship.","Knight")
        break
         case 9:
         movehor("Sorcerer",-1)
          dialog("That won't be cheap.","Sorcerer")
        break
         case 10:
         dialog("And we need it fast.","Knight")
        break
         case 11:
         dialog("I may still have some contacts that can help us find some jobs that pay well...","Thief1")
        break
         case 12:
         dialog("Sounds like there's a 'but'.","Archer2")
        break
        case 13:
         dialog("Not the safest things, but based on what I've seen, you may be okay with that.","Thief1")
        break
         case 14:
         dialog("We'll do what we can. But I feel that won't be enough.","Knight")
        break
         case 15:
          movehor("Sandra",-1)
         dialog("I know!","Sandra")
        break
          case 16:
          movehor("Wizard1",1)
            movehor("Sorcerer",1)
            movehor("Archer2",1)
            movehor("Knight",1)
            movehor("Templar1",1)
            movehor("Rouge2",1)
            movehor("Soldier2",1)
              dialog(" It's still hunting season. We can get some hunter's orbs, and catch some beasts.","Sandra")
        break
        case 17:
              dialog("That's not a bad idea.","Archer2")
        break
        case 18:
              dialog("Ok, I'll work with the thief...","Knight")
        break
          case 19:
              dialog("The name's Elliot.","Thief1")
        break
          case 20:
              dialog("..And a few others to find some leads on some jobs.","Knight")
        break
        case 21:
              dialog("You, Sandra, take the rest hunting.","Knight")
        break
        case 22:
              dialog("Sounds good.","Sandra")
        break
        case 23:
         window.location.href = '../30_Hunter2/Hunter.html'
        break
    }
}

$(window).load(function(){
    changesong("01/town.mp3")
});