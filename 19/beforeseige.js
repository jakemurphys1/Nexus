
var qnum=-2;
var round=0
function castle(withairship){
    endthis=false;
    var time = 9000
    if(round>0){
        time=3000
    }
    round+=1
    
  $("body").append("<div style='background-color:lightblue;margin-top:-0px;margin-left:-0px' id = 'quickscene'>" +
                 "<img src = 'pics/castle.png' /><div class='trees' STYLE='position:absolute; TOP:570px; LEFT:-220px;' ><img style='height:80px' src='pics/wall-enemy.gif'/></div></div>")
          $('.trees').animate({
                        left: "+1080px"
                    }, 3000,"linear"); 
    $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:-140px;" ><img style="height:80px" src="./pics/wall-enemy.gif"/></div>');
      $('.trees').animate({
                        left: "+1160px"
                    }, 3000,"linear"); 
        $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:-60px;" ><img style="height:80px" src="pics/wall-enemy.gif"/></div>');
      $('.trees').animate({
                        left: "+1220px"
                    }, 3000,"linear"); 
            $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:20px;" ><img style="height:80px" src="pics/wall-enemy.gif"/></div>');
      $('.trees').animate({
                        left: "+1300px"
                    }, 3000,"linear"); 
                $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:100px;" ><img style="height:80px" src="pics/wall-enemy.gif"/></div>');
      $('.trees').animate({
                        left: "+1380px"
                    }, 3000,"linear"); 
        $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:180px;" ><img style="height:80px" src="pics/wall-enemy.gif"/></div>');
      $('.trees').animate({
                        left: "+1460px"
                    }, 3000,"linear"); 
        $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:260px;" ><img style="height:80px" src="pics/wall-enemy.gif"/></div>');
      $('.trees').animate({
                        left: "+1520px"
                    }, 3000,"linear"); 
        $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:340px;" ><img style="height:80px" src="pics/wall-enemy.gif"/></div>');
      $('.trees').animate({
                        left: "+1600px"
                    }, 3000,"linear"); 
           $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:400px;" ><img style="height:80px" src="pics/wall-enemy.gif"/></div>');
      $('.trees').animate({
                        left: "+1680px"
                    }, 3000,"linear"); 
           $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:460px;" ><img style="height:80px" src="pics/wall-enemy.gif"/></div>');
      $('.trees').animate({
                        left: "+1760px"
                    }, 3000,"linear"); 
               $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:540px;" ><img style="height:80px" src="pics/wall-enemy.gif"/></div>');
      $('.trees').animate({
                        left: "+1840px"
                    }, 3000,"linear"); 
    
    if(withairship=="Without"){
         text("The Hordes of Darkness Attack",100,-800)
    }
         
    setInterval(function(){
        if(endthis){
            return;
        }
         $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:-300px;" ><img style="height:80px" src="pics/wall-enemy.gif"/></div>');
            $('.trees').animate({
                        left: "+1000px"
                    }, 3000,"linear"); 
    },500)
  setTimeout(function(){
      $("#quickscene").remove();
      endthis=true;
      queue();
  },time)

}

function queue(){
    qnum+=1;
    switch(qnum){
        case 0:
               
        break;
        case 1:
            enterChar("Sorcerer",410,80,"no","moving_front");
            enterChar("Wizard1",400,400);
            movevert("Sorcerer",200,"end")
        break
        case 2:
            dialog("May I speak with you?","Sorcerer")
        break
        case 3:
        movevert("Wizard1",-1)
            dialog("Of course.","Wizard1")
        break
         case 4:
            dialog("I wish to help fight in the next battle","Sorcerer")
        break
         case 5:
           dialog("You have so little experience. You never even used a Nexus before we found you.","Wizard1")
        break
         case 6:
            dialog("I have practiced, and I promise to be an asset.","Sorcerer")
        break
         case 7:
            dialog("And your power...","Wizard1")
        break
         case 8:
            dialog("I don't know why I was given this power, and why it's own cost makes it unusable.","Sorcerer")
        break
          case 9:
           dialog("it's not unusable, just not easy to use.","Wizard1")
        break
        case 10:
           dialog("The power to kill a demigod shouldn't be easily accessable, but I'm sure the Nexus has a way for us to use it.","Wizard1")
        break
        case 11:
        movevert("Wizard1",1)
           dialog("The others will find a way.","Wizard1")
        break
        case 12:
        enterChar("Templar2",410,80);
        movevert("Templar2",130,"end")
        break
        case 13:
           dialog("The horde is about to attack the shield crystals.","Templar2")
        break
        case 14:
        movevert("Wizard1",-1)
           dialog("Gather the others!","Wizard1")
        break
         case 15:
           castle("without");
        break
        case 16:
        $("#Templar2").remove()
        $("#Sorcerer").remove()
                 enterChar("Soldier2",200,300);
            enterChar("Archer3",250,300);
            enterChar("Knight",300,300);
            enterChar("Healer1",350,300);
            enterChar("Templar2",400,300);
            enterChar("Rouge2",450,300);
            enterChar("Mage2",500,300);
            enterChar("Wizard1",400,400);
            enterChar("Sorcerer",550,300);
            movevert("Wizard1",-1,"end")
        break
        case 17:
            dialog("The horde is about to attack the shield crystals.","Wizard1")
        break
        case 18:
            dialog("As you know, the crystals create the shield that protects us from aircraft assault.","Wizard1")
        break
        case 19:
            dialog("If we lose the shield, we will be helpless.","Wizard1")
        break
        case 20:
            dialog("There will be eddy's near the shield. We can use the eddys to instantly move between them and our Nexus or other eddys.","Wizard1")
        break
        case 21:
            dialog("But if an enemy drags a crystal to an eddy, it will be destroyed.","Wizard1")
        break
        case 22:
            dialog("We cannot let that happen.","Wizard1")
        break
        case 23:
            dialog("Let's go!","Wizard1")
        break
         case 24:
            window.location.href = '../20_seige2/Seige.html'
        break
    }
}

//window.location.href = './beforeairship.html'

$(window).load(function(){
    changesong("01/Descent.mp3")
    castle("without");
    opening("Chapter Nine:","The Power")
    saving("19")

        
    
});