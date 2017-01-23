
var qnum=-1;

function sun(){
      $("body").append("<div style='background-color:#0ecfd2;margin-top:-0px;margin-left:-0px' id = 'quickscene'>" + "<img style= 'margin-left:35%;margin-top:20%; width:200px' src = 'pics/sun.gif' /></div>")
      
      setTimeout(function(){
          $("#quickscene").remove()
          queue();
      },3000)
}

function queue(){
    qnum+=1;
    switch(qnum){
        case 0:
            opening("Chapter Fourteen:","The City")
            enterChar("Knight",400,500);
            enterChar("Sandra",145,500,"no","moving_right");
            break;
        case 1:
        delay(0000)
            break;
        case 2:       
            movehor("Sandra",130,"end")
            break
        case 3:
        dialog("Good Morning","Sandra")
            break
        case 4:
        movehor("Knight",-1)
       dialog("Did you dream the location of the people?","Knight")
            break
        case 5:
         dialog("No, but the good news is they escape.","Sandra")
        break
         case 6:
        dialog("We need this information fast.","Knight")
        break
        case 7:
        dialog("I know, but so far, I haven't seen anything to tell me the location.","Sandra")
        break
        case 8:
        dialog("How long do we have?","Sandra")
        break
         case 9:
         movevert("Knight",1)
         movevert("Sandra",1)
         dialog("Look at the sun...","Knight")
        break
         case 10:
         sun()
        break
         case 11:
            dialog("The darkness spreads, which means our allies won't be able to hold them back much longer.","Knight")
        break
         case 12:
          dialog("I will try harder the next time I sleep to find anything that can help us.","Sandra")
        break
        case 13:
          dialog("Thank you, I know this is more than should be asked of you.","Knight")
        break
         case 14:
         movehor("Knight",-1)
          movehor("Sandra",1)
         dialog("We've found an airship to purchase. And the money we received from the hunt will cover half of it.","Knight")
        break
         case 15:
         dialog("We have a number of contracts set up, and a limited time to do them.","Knight")
        break
          case 16:
          dialog("They're mostly criminals that need to be dealt with, or clearing out beasts.","Knight")
        break
        case 17:
       dialog("They have a surprising wolf infestation here.","Knight")
        break
        case 18:
              dialog("That shouldn't be too hard.","Sandra")
        break
        case 19:
       dialog("By itself no, but we are wanted criminals.","Knight")
        break
        case 20:
       dialog("There will be guardsmen wandering around the city.","Knight")
        break
        case 21:
       dialog("if we meet them, we'll have to destroy them.","Knight")
        break
        case 22:
       dialog("I don't feel comfortable killing innocent guardsmen.","Sandra")
        break
        case 23:
       dialog("All the guardsmen will bonded to a Nexus.","Knight")
        break
          case 24:
       dialog("None of them will be hurt, just inconvenienced.","Knight")
        break
        case 25:
       dialog("The contracts will be marked with a 'Q' Symbol on the map.","Knight")
        break
        case 26:
       dialog("We will need to raise 3000 gold before the end of the day.","Knight")
        break
        case 27:
       dialog("These battles won't be isolated fights.","Knight")
        break
         case 28:
       dialog("While we can only send in groups of three, those groups will have to fight a number of groups back to back.","Knight")
        break
         case 29:
       dialog("We'll need to be very careful to send the right people for the job.","Knight")
        break
        case 30:
       dialog("Now, gather the others. We have work to do.","Knight")
        break
        case 31:
       window.location.href = '../34_city/city.html'
        break
    }
}

$(window).load(function(){
    changesong("01/pleasant.mp3")
    saving("33")
});