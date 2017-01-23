
var qnum=0;
var height=2;
 var propeller=new Audio();
     
function airship(upOrDown,enemyexists){
    var enemy="";
    if(enemyexists){
        enemy="<div id='Eairship' STYLE='position:absolute; TOP:" + height*100 + "px; LEFT:505px;' class='unit' ><img src='../CinePics/enemyship.gif'/></div>"
    }
    
  $("body").append("<div style='background-color:lightblue;margin-top:-50px;margin-left:-0px' id = 'quickscene'><div id='airship' STYLE='position:absolute; TOP:" + height*100 + "px; LEFT:405px;' class='unit' ><img src='../CinePics/airship.gif'/></div>" + enemy +
                 "<div class='trees' STYLE='position:absolute; TOP:570px; LEFT:-220px;' ><img style='height:80px' src='../CinePics/trees.png'/></div></div>")
          $('.trees').animate({
                        left: "+1080px"
                    }, 3000,"linear"); 
    $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:-140px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
      $('.trees').animate({
                        left: "+1160px"
                    }, 3000,"linear"); 
        $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:-60px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
      $('.trees').animate({
                        left: "+1220px"
                    }, 3000,"linear"); 
            $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:20px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
      $('.trees').animate({
                        left: "+1300px"
                    }, 3000,"linear"); 
                $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:100px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
      $('.trees').animate({
                        left: "+1380px"
                    }, 3000,"linear"); 
        $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:180px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
      $('.trees').animate({
                        left: "+1460px"
                    }, 3000,"linear"); 
        $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:260px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
      $('.trees').animate({
                        left: "+1520px"
                    }, 3000,"linear"); 
        $("#cinemabackground").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:340px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
      $('.trees').animate({
                        left: "+1600px"
                    }, 3000,"linear"); 
           $("#cinemabackground").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:400px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
      $('.trees').animate({
                        left: "+1680px"
                    }, 3000,"linear"); 
           $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:460px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
      $('.trees').animate({
                        left: "+1760px"
                    }, 3000,"linear"); 
               $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:540px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
      $('.trees').animate({
                        left: "+1840px"
                    }, 3000,"linear"); 
        height+=upOrDown;
    if(height<1){
        height=1
    };
    if(height>6){
        height=6;
    }
    
    
    $('#airship').animate({
                        top: (height*100)+'px'
                    }, 1500);
      $('#Eairship').animate({
                        top: (height*100)+'px'
                    }, 1500);

    setInterval(function(){
         $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:-300px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
            $('.trees').animate({
                        left: "+1000px"
                    }, 3000,"linear"); 
    },500)
  setTimeout(function(){
      $("#quickscene").remove();
      queue();
  },3000)
}

function queue(){
    qnum+=1;
    switch(qnum){
        case 1:
            enterChar("Sorcerer",300,150);
            enterChar("Wizard1",350,150);
            enterChar("Templar1",400,150);
            enterChar("Edgar",450,150);
            enterChar("Healer1",500,150);
            enterChar("Rouge2",550,150);
            
                enterChar("Sandra",355,300);
            enterChar("Archer2",450,300);
              enterChar("Knight",355,424);
            movehor("Archer2",-1)
             dialog("I think that's the last of them.","Knight")
            break;
        case 2:
             dialog("Good, then maybe you will be able to answer a few questions.","Sandra")
            break
        case 3:
            dialog("You are what we call a story-teller.","Knight")
            break
        case 4:
            dialog("What?","Sandra")
            break
        case 5:
         movevert("Knight",-1)
        dialog("Since you first enter the Nexus, which I am guessing was a recent event, have you had some wierd dreams?","Knight")
        break
         case 6:
        dialog("Vivid dreams that felt real?","Knight")
        break
        case 7:
            dialog("...Yes","Sandra")
        break
        case 8:
        dialog("The Nexus is a living, intelligent thing.","Knight")
        break
         case 9:
        dialog("It communicates to us, through a surrogate that we call a story-teller.","Knight")
        break
         case 10:
        dialog("But I've never...","Sandra")
        break
         case 11:
        dialog("Eventually, it will be able to communicate with you more directly.","Archer2")
        break
         case 12:
        dialog("But because you are new, all it can do is show you the memories of others that have used the nexus. It's up to us to interpret it.","Archer2")
        break
         case 13:
         dialog("What did you see in your dream?","Knight")
        break
         case 14:
             dialog("Well, in two of my dreams, I saw a group of slaves fighting in an arena in Vespia.","Sandra")
        break
         case 15:
             dialog("I had another that involves prisoners fighting in a cell, but I don't know where.","Sandra")
        break
         case 16:
            movevert("Sorcerer",200,"end")
        break
        case 17:
            dialog("Two story-lines?","Sorcerer")
        break
        case 18:
            dialog("We don't have time to figure out both!","Sorcerer")
        break
        case 19:
            dialog("We don't have a choice. To unlock the power, we must need things from both places.","Knight")
        break
        case 20:
             dialog("What power?","Sandra")
        break
         case 21:
            dialog("What are you even trying to do?","Sandra")
        break
         case 22:
            dialog("The sun is being devoured by the darkness.","Knight")
        break
          case 23:
             dialog("The darkness is attacking our temple, which houses the source of all light.","Knight")
        break
        case 24:
             dialog("Our allies are defending it now, but it is only a matter of time before it falls.","Knight")
        break
         case 25:
             dialog("And this power can protect it?","Sandra")
        break
         case 26:
              dialog("This horde is controlled by a demigod.","Knight")
        break
        case 27:
             dialog("If the demigod dies, the horde falls.","Knight")
        break
          case 28:
             dialog("Thanks to the previous story-teller, we found an individual that has the power to kill the demigod.","Knight")
        break
          case 29:
            dialog("But, in order to use it, he must charge using his entire life.","Knight")
        break
           case 30:
           movehor("Sorcerer",1)
             dialog("Which means he dies before he can even use it.","Sorcerer")
        break
              case 31:
              dialog("We are hoping the Nexus and your dreams will show us how to use this power.","Knight")
        break
        case 32:
             dialog("We can worry about the second dream later. We know where Vespia's only arena is. We should go there first.","Archer2")
        break
              case 33:
             dialog("Agreed","Knight")
        break
          case 34:
             dialog("I'm sure this is important, but...","Sandra")
        break
         case 35:
             dialog("If you aren't under our protection, the horde will find you again and kill you.","Knight")
        break
           case 36:
             dialog("You will join us, and try to figure out where your other dream is.","Knight")
        break
         case 37:
             dialog("Once we figure out your dreams, we'll drop you off wherever you would like.","Archer2")
        break
         case 38:
             dialog("I guess I don't have anywhere else to be...","Sandra")
        break
          case 39:
              window.location.href = 'beforeseige.html'
        break
          
    }
}

$(window).load(function(){
                    propeller.src="../sounds/Helicopter.mp3";
                    propeller.volume=.05;
                    propeller.loop=true;
                    propeller.play();
    saving("19")
    changesong("01/Evasion.mp3")
});