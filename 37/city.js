
var qnum=0;

function sun(){
      $("body").append("<div style='background-color:#0ecfd2;margin-top:0px;margin-left:-0px' id = 'quickscene'>" + "<img style= 'margin-left:35%;margin-top:20%; width:200px' src = 'pics/sun.gif' /></div>")
      
      setTimeout(function(){
          $("#quickscene").remove()
          queue();
      },3000)
}

function queue(){
    qnum+=1;
    switch(qnum){
        case 0:
            break;
        case 1:
            enterChar("Knight",400,500);
        delay(2000)
            break;
        case 2:       
            enterChar("Sandra",145,500);
            movehor("Sandra",130,"end")

            break
        case 3:
        dialog("Good Morning...","Sandra")
            break
        case 4:
        movehor("Knight",-1)
       dialog("Any news?","Knight")
            break
        case 5:
         dialog("They're dead... The Nexus had them killed...","Sandra")
        break
         case 6:
        dialog("What?","Knight")
        break
        case 7:
        dialog("I don't understand. They suddenly had a baby, and then some soldier killed them and took the baby.","Sandra")
        break
        case 8:
        dialog("Remember, these are memories from the past. They may be from the distant past.","Knight")
        break
         case 9:
         dialog("The soldier said all the miserable things that happened to them was done by the Nexus.","Sandra")
        break
         case 10:
         dialog("He also said the baby was special. With special abilities.","Sandra")
        break
         case 11:
            dialog("Then it must be the baby we seek. Did they say where he would take him?","Knight")
        break
         case 12:
          dialog("Can we trust the Nexus... After what it did to them?","Sandra")
        break
        case 13:
          dialog("The Nexus does the things it must, now where is the baby?","Knight")
        break
         case 14:
         dialog("The soldier said Jadesmith...","Sandra")
        break
         case 15:
         dialog("Good, I'll gather the others. Our new airship is ready. Let's go.","Knight")
        break
          case 16:
          dialog("I can only hope the others at the temple can hold out for just a little longer...","Knight")
        break
        case 17:
       window.location.href = 'beforeseige.html'
        break
    }
}

$(window).load(function(){
            changesong("01/Threat.mp3")
});