
var qnum=0;
var height=2;
 var propeller=new Audio();
     
function airship(upOrDown,enemyexists){
    var enemy="";
    if(enemyexists){
        enemy="<div id='Eairship' STYLE='position:absolute; TOP:" + height*100 + "px; LEFT:505px;' class='unit' ><img src='../CinePics/enemyship.gif'/></div>"
    }
    
  $("body").append("<div style='background-color:lightblue;margin-top:0px;margin-left:-0px' id = 'quickscene'><div id='airship' STYLE='position:absolute; TOP:" + height*100 + "px; LEFT:405px;' class='unit' ><img src='../CinePics/airship.gif'/></div>" + enemy +
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
            break;
        case 2:
             enterChar("Knight",655,300);
            airship(0,false)
            break
        case 3:
            movevert("Knight",30,"end")
            break
        case 4:
            movehor("Knight",-300,"end")
            break
        case 5:
     movevert("Knight",95,"end")
        break
         case 6:
 enterChar("Archer2",655,300, "end");
        break
        case 7:
            movevert("Archer2",30,'end')
        break
        case 8:
        movehor("Archer2",-240,"end")
        break
         case 9:
        movevert("Archer2",95,"end")
        break
         case 10:
        dialog("How far out are we?","Archer2")
        break
         case 11:
        dialog("According to the stone, the story-teller is about a day's flight out.","Knight")
        break
         case 12:
        dialog("Do you really think the story-teller can tell us anything that can help us.","Archer2")
        break
         case 13:
         dialog("The Nexus has always come through.","Knight")
        break
         case 14:
             dialog("I'm not doubting that the Nexus is willing to answer. I doubting that there even is an answer.","Archer2")
        break
         case 15:
             dialog("...","Knight")
        break
         case 16:
             enterChar("Sorcerer",655,300, "end");
        break
        case 17:
            movevert("Sorcerer",30,"end")
        break
        case 18:
            movehor("Sorcerer",-300,"end")
        break
        case 19:
            movevert("Sorcerer",30)
            movevert("Knight",-1,"end")
        break
        case 20:
             dialog("We have enemy incoming!","Sorcerer")
        break
         case 21:
             dialog("Gather the others!","Knight")
             changesong("01/Hurry.mp3")
        break
         case 22:
         $("#Sorcerer").remove();
          $("#Archer2").remove();  
             $("#Knight").remove(); 
             enterChar("Sorcerer",250,300);
            enterChar("Archer2",300,300);
            enterChar("Wizard1",350,300);
            enterChar("Templar1",400,300);
            enterChar("Edgar",450,300);
            enterChar("Healer1",500,300);
            enterChar("Rouge2",550,300);
              enterChar("Knight",355,424);
             airship(0,true)
        break
          case 23:
             dialog("Listen up! We have a flagship approaching!","Knight")
        break
        case 24:
             dialog("They will begin dropping enemy combatants onto our decks.","Knight")
        break
         case 25:
             dialog("They will go straight for our engines.","Knight")
        break
         case 26:
             movevert("Knight",-20,"end")
        break
        case 27:
             movehor("Knight",260,"end")
        break
          case 28:
             movehor("Knight",-1,"end")
        break
          case 29:
            dialog("If they reach a position like this, the engine will shut down.","Knight","left");
            $("#fan5 img").attr("src","Pics/fan-off.gif")
        break
           case 30:
             dialog("Simply set a group next to an engine, and the engine will start back up.","Knight","left")
        break
              case 31:
              $("#fan5 img").attr("src","Pics/fan.gif")
             movehor("Knight",-260,"end")
        break
        case 32:
             movevert("Knight",-1,"end")
        break
              case 33:
             dialog("The Ship can't gain altitude unless all 4 engines are running, but it can maintain it with 3.","Knight")
        break
          case 34:
             dialog("Any less, however, and we will be begin to descend.","Knight")
        break
        case 35:
             dialog("Now there may be some classes you are less familiar with...","Knight")
        break
        case 36:
             dialog("I'm a Knight. Like a soldier, I'm great at close-range physical damage.","Knight")
        break
        case 37:
             dialog("However, because of this armor, every attack, and even moving, requires energy.","Knight")
        break
        case 38:
             dialog("I start out each battle full of energy, but if I run out, I have go a turn without doing anything to replenish it.","Knight")
        break
        case 39:
            movevert("Sorcerer",10)
             dialog("I'm a sorcerer. I have use powerful magic attacks that require mana shown in blue over my health.","Sorcerer")
        break
        case 40:
             dialog("My mana replenishes outside of combat when you pass the turn.","Sorcerer")
        break
        case 41:
             dialog("So, please don't send me into battle if you see that I have low mana.","Sorcerer")
        break
        case 42:
                    movevert("Wizard1",10)
             dialog("I'm a wizard. I also do magical attack, but I have to charge first to use them.","Wizard1")
        break
        case 43:
                    movevert("Templar1",10)
             dialog("I'm a templar. Like a rouge, I can shoot any enemy that's in a straight line.","Templar1")
        break
        case 44:
             dialog("I have special arrows that can help against magical enemies.","Templar1")
        break
        case 45:
                    movevert("Healer1",10)
             dialog("And I'm a healer. I can use the ability 'Vigor', which can allow allies to perform an additional action for the turn.","Healer1")
        break
         case 46:
             movevert("Knight",20,"end")
        break
           case 47:
             dialog("You all know what is at stake.","Knight")
        break
         case 48:
             dialog("We can not fail this day!","Knight")
        break
          case 49:
              window.location.href = '../06_airship/Airship.html'
        break
          
    }
}

$(window).load(function(){
                    propeller.src="../sounds/Helicopter.wav";
                    propeller.volume=.05;
                    propeller.loop=true;
                    propeller.play();
    opening("Chapter Two:","Incoming")
});