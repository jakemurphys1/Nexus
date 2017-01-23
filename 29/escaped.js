
var qnum=0;
var height=2;

function queue(){
    qnum+=1;
    switch(qnum){
        case 1:
            enterChar("Thief1",385,20);
            
            enterChar("Sorcerer",330,430,"no","moving_back");
             enterChar("Knight",380,350,"no","moving_back");
            enterChar("Archer2",430,430,"no","moving_back");
            
            
            enterChar("Wizard1",480,430,"no","moving_back");
            enterChar("Templar1",270,430,"no","moving_back");
            enterChar("Soldier2",380,430,"no","moving_back");
            enterChar("Healer1",530,430,"no","moving_back");
            enterChar("Rouge2",480,350,"no","moving_back");
            enterChar("Sandra",530,350,"no","moving_back");
            
            enterChar("Enchantress",330,350,"no","moving_back");
            enterChar("Guard",430,350,"no","moving_back");
            
             movevert("Sorcerer",-100)
             movevert("Knight",-100)
             movevert("Archer2",-100)
             movevert("Wizard1",-100)
             movevert("Templar1",-100)
             movevert("Soldier2",-100)
             movevert("Healer1",-100)
             movevert("Enchantress",-200,"end")
             movevert("Guard",-200)
             movevert("Rouge2",-100)
             movevert("Sandra",-100)
             
             movevert("Thief1",100)

            break;
        case 2:
              movevert("Enchantress",1)
             movevert("Guard",1) 
             dialog("Thought you forgot about us.","Knight")
            break
        case 3:
        dialog("Took some time to find the key.","Thief1")
            break
        case 4:
       dialog("Now, you need to start answering some questions.","Thief1")
            break
        case 5:
         dialog("Real gracious lot here.","Wizard1")
        break
         case 6:
        dialog("What do you want with us, and why did you free us?","Thief1")
        break
        case 7:
       dialog("The crashing was kinda a mistake...","Sandra")
        break
        case 8:
        dialog("We came here to free you, or at least talk with you.","Knight")
        break
         case 9:
         dialog("The Nexus sent us to you, or at least someone that fought with you.","Knight")
        break
         case 10:
         movevert("Sorcerer",-100,"end")
         
        break
         case 11:
            dialog("Do any of you have any special abilities, ones you have never seen anyone else possess.","Sorcerer")
        break
         case 12:
         dialog("No, I'm just a standard Thief.","Thief1")
        break
        case 13:
         dialog("Nothing unusual about me.","Enchantress")
        break
         case 14:
         dialog("I have an unique ability, I guess.","Guard")
        break
         case 15:
         dialog("It's a special shield that will allow me to survive the next attack no matter how much damage it does to me.","Guard")
        break
          case 16:
          movehor("Knight",40,"end")
        break
        case 17:
            movevert("Knight",-30,"end")
        break
        case 18:
              dialog("Can you give that shield to others?","Knight")
        break
        case 19:
              dialog("No, it's only works for me.","Guard")
        break
        case 20:
        movehor("Sandra",-1)
              dialog("Could he use his protect ability to redirect the charging damage from your guy to himself?","Sandra")
        break
        case 21:
        movehor("Sorcerer",1)
              dialog("We already thought of that, but the protect ability only redirects enemy's damage, not self-inflicted damage.","Sorcerer")
        break
          case 22:
              dialog("I don't see how this shield ability will help us.","Knight")
        break
         case 23:
              dialog("Did anyone else in your group have anything special?","Archer2")
        break
         case 24:
              dialog("No, Bill here is the only one I can think of...","Thief1")
        break
         case 25:
             dialog("The answer must lie with the people in the other dream. We need to find them.","Sorcerer")
        break
         case 26:
              dialog("Dreams, unique abilities, what are you searching for?","Thief1")
        break
        case 27:
              dialog("We'll explain on the way. For now, we need to move to the closest town and blend in.","Knight")
        break
        case 28:
              dialog("They'll assume we were all eaten, but not if they find us here.","Knight")
        break
         case 29:
              window.location.href = 'city.html'
        break
    }
}

$(window).load(function(){
    changesong("01/Evasion.mp3")
    saving("29")
});