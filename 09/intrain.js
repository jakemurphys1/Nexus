
var qnum=0;


function queue(){
    qnum+=1;
    switch(qnum){
        case 1:
            enterChar("Sandra-R",440,240,"no","relax")
            enterChar("Edgar-R",210,240)
            movevert("Edgar-R",-1)
        break
        case 2:
            dialog("Dad?","Sandra-R")
        break
        case 3:
            dialog("You awake?","Edgar-R")
        break
         case 4:
            dialog("Yeah, are we almost there?","Sandra-R")
        break
         case 5:
            movehor("Edgar-R",1)
            dialog("Not too much longer.","Edgar-R")
        break
         case 6:
            dialog("I had a wierd dream.","Sandra-R")
        break
         case 7:
            dialog("You did?","Edgar-R")
        break
         case 8:
            dialog("Yeah, there were these slaves fighting in an arena.","Sandra-R")
        break
          case 9:
            dialog("Like in Vespia?","Edgar-R")
        break
          case 10:
            dialog("Where?","Sandra-R")
        break
          case 11:
            dialog("It's a terrible country to the north. They still have slaves, and sometimes they force this to fight to the death.","Edgar-R")
        break
          case 12:
            dialog("That's horrible. I wonder why I dreamed about it.","Sandra-R")
        break
         case 13:
            movehor("Edgar-R",60,"end")
        break
        case 14:
            movevert("Edgar-R",-30,"end")
        break
         case 15:
            dialog("I think we're here.","Edgar-R")
        break
         case 16:
            window.location.href = './beforehunt.html'
        break
    }
}

//window.location.href = './beforeairship.html'

$(window).load(function(){
     opening("Chapter 4:","The Hunt")
         localStorage.setItem("level", "9");
    loopeffect = new Audio();
    loopeffect.src="../sounds/insidetrain.mp3";
    loopeffect.volume=.3;
    loopeffect.loop=true;
    loopeffect.play();

    setInterval(function(){
        $(".train").animate({
            top:"-=5"
        },300)
            setTimeout(function(){
                $(".train").animate({
                top:"+=5"
            },300)
        },300)
        
        $(".Object").animate({
            top:"-=5"
        },300)
            setTimeout(function(){
                $(".Object").animate({
                top:"+=5"
            },300)
        },300)
    },2000)
    
        
    
});