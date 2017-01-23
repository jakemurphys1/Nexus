
var qnum=-1;

function castle(withairship){
    endthis=false;
  $("body").append("<div style='background-color:lightblue;margin-top:0px;margin-left:-0px' id = 'quickscene'>" +
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
  },3000)

}

function queue(){
    qnum+=1;
    switch(qnum){
        case 0:
                        enterChar("Thief1",450,100);
                        enterChar("Archer2",500,100);
                        enterChar("Enchantress",550,100);
            
                        enterChar("Guard",450,200);
                        enterChar("Knight",500,200);
                        enterChar("Mimic",550,200);
            
                        enterChar("Wizard2",500,500,"no","back");
            
                        enterChar("Templar2",350,500,"no","back");
                        enterChar("Healer2",400,500,"no","back");
                        enterChar("Knight2",450,500,"no","back");
            
                        enterChar("Archer3",250,500,"no","back");
                        enterChar("Sorcerer",300,500,"no","back");
                        enterChar("Mage2",200,500,"no","back");
                        enterChar("Rouge2",400,600,"no","back","no","back");
                        enterChar("Soldier2",450,600,"no","back");

                         delay(500)           
        break;
        case 1:
            dialog("I was beginning to think you forgot about us.","Wizard2")
        break
        case 2:
            dialog("What were you able to find?","Wizard2")
        break
        case 3:
            dialog("We found the new story-teller, and she lead us to these two.","Knight")
            movevert("Mimic",30)
            movevert("Guard",30)
        break
         case 4:
            dialog("I believe these two along with Ridley can destroy the demigod.","Knight")
        break
         case 5:
           dialog("Hi, I'm, Ridley.","Sorcerer")
        break
         case 6:
            dialog("Hi","Mimic")
        break
         case 7:
            dialog("Then take Ridley and your crew, and attack the palace.","Wizard2")
        break
         case 8:
            dialog("We should be able to hold them off a little longer now that we stabilized.","Wizard2")
        break
          case 9:
           dialog("The palace isn't far from here. The Demigod needs it to be close to his horde here.","Wizard2")
        break
        case 10:
           dialog("The Demigod will die this day.","Knight")
        break
        case 11:
           dialog("Good luck my friend...","Wizard2")
        break
         case 12:
            window.location.href = 'beforepalace.html'
        break
    }
}

//window.location.href = './beforeairship.html'

$(window).load(function(){
    changesong("01/Threat.mp3")
    saving("45")

});