
var qnum=-1;
function queue(){
    qnum+=1;
    switch(qnum){
        case 1:
            enterChar("Soldier2",550,420);
            enterChar("Guard",250,300);
            enterChar("Knight",300,300);
            movehor("Guard",1);
            movehor("Knight",-1);
            delay(3000)
            addobject("light-off",423,60,25)
        break
        case 2:
            movehor("Soldier2",-200,"end")
        break
        case 3:
            movevert("Soldier",-1,"end")
        break
         case 4:
            dialog("How do you deal with the boredom","Soldier2")
            movevert("Soldier2",-1)
        break
         case 5:
         movevert("Knight",1)
         movevert("Guard",1)
           dialog("I've been here for almost two years. You get used to it.","Knight")
        break
         case 6:
            dialog("Olive and I have been here for almost three.","Guard")
        break
         case 7:
           dialog("Who is Olive?","Soldier2")
        break
         case 8:
            dialog("She's his girlfriend.","Knight")
        break
          case 9:
           dialog("Wife!","Guard")
           movehor("Guard",1)
        break
        case 10:
        movehor("Knight",-1)
           dialog("I've been with you two love birds for two years and I've never seen you get married.","Knight")
        break
         case 11:
           dialog("Where is she?","Soldier2")
        break
         case 12:
         movevert("Knight",1)
           dialog("They removed her a few days before you showed up.","Knight")
        break
         case 13:
         movevert("Guard",1)
           dialog("I miss her so much","Guard")
        break
        case 14:
        movehor("Knight",-1)
           dialog("I do too buddy.","Knight")
        break
        case 15:
           dialog("This whole place makes no sense!","Soldier2")
            movevert("Soldier2",50)
        break
         case 16:
           dialog("But I bet I know who did this to me!","Soldier2")
        break
         case 17:
         movevert("Knight",1)
           dialog("What do you mean? I thought you didn't see your attacker.","Knight")
        break
         case 18:
           dialog("I didn't, but I know the guy that sent me to the trail where I was captured.","Soldier2")
        break
        case 19:
           movevert("Soldier",-1)
           dialog("It was some merchant. Paid me to delivery something, but first he made me eat some marble.","Soldier2")
        break
          case 20:
           dialog("I bet it was some tracking object that allowed my attacker to find me.","Soldier2")
        break
        case 21:
           enterChar("Thief2",100,450);
            $("#Thief2").css("display","none")
            $("#Thief2").fadeIn(2000);
            movehor("Thief2",1)
            delay(2000)
        break
        case 22:
            dialog("Well, you are half right.","Thief2")
        break
        case 23:
        movehor("Soldier2",-100)
        movevert("Knight",1)
        movevert("Guard",1)
           dialog("YOU!","Soldier2")
        break
        case 24:
            dialog("How did you get in here?","Knight")
        break
        case 25:
            dialog("Getting in was the easy part. I'm a thief after all.","Thief2")
        break
        case 26:
            dialog("Finding this place was harder. Been looking for years.","Thief2")
        break
        case 27:
            dialog("You sent me to get captured?","Soldier2")
        break
        case 28:
            dialog("Well, yes, I sent many messengers with trackers down that trail.","Thief2")
        break
        case 29:
            dialog("You were just unfortunate to be the one to get caught.","Thief2")
        break
         case 30:
         movehor("Soldier2",-100)
            dialog("I'm going to kill you!","Soldier2")
        break
        case 31:
         movevert("Knight",30)
            dialog("Whoa, buddy, if he can sneak in, he may be able to sneak us out!","Knight")
        break
        case 32:
            dialog("Well, I can get you out, but sneaking may be harder.","Thief2")
        break
        case 33:
            dialog("My friend is currently setting a bomb that will blow a hole in the wall.","Thief2")
        break
        case 34:
            dialog("Then we can escape.","Thief2")
        break
        case 35:
            dialog("I'm not leaving without Olive!","Guard")
        break
        case 36:
            dialog("Of course, once the bomb goes off, we'll run to the other cell and free them as well.","Thief2")
        break
        case 37:
            dialog("When will it go off?","Knight")
        break
        case 38:
             addobject("boom",600,200, 300)
              changesong("01/Hurry.mp3")
              doeffect("Lightning.wav")
            $("#cinema #cinema").attr("src","pics/power-beds2.png")
              setTimeout(function(){
                 $("#boom").remove() 
              },600)
              
              
              delay(600)
        break
         case 39:
            dialog("Guessing now. Let's go","Thief2")
        break
        case 40:
            window.location.href = 'rescue.html'
        break
    }
}

//window.location.href = './beforeairship.html'

$(window).load(function(){
    opening("Chapter Ten:","The Thief")
    changesong("01/Threat.mp3")
    
});