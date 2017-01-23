
var qnum=-2;

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
  },9000)

}

function queue(){
    qnum+=1;
    switch(qnum){
        case 0:
                
        break;
        case 1:
            enterChar("Wizard2",360,100,"no","back");
            delay(3000)
        break
        case 2:
            enterChar("Templar2",900,300);
            movehor("Templar2",-400,"end")
        break
        case 3:
        movevert("Templar2",-1)
            dialog("The Horde has broken through the defenses.","Templar2")
        break
         case 4:
                 movevert("Wizard2",1)
            dialog("Tell the others to fall back here.","Wizard2")
        break
         case 5:
           dialog("We will make our last stand here!","Wizard2")
        break
         case 6:
            dialog("And tell Ridley to hide.","Wizard2")
        break
         case 7:
            enterChar("Sorcerer",900,300);
            movehor("Sorcerer",-300,"end")
        break
         case 8:
            movevert("Sorcerer",-1)
            dialog("I will fight too.","Sorcerer")
        break
          case 9:
           dialog("You are too important!","Wizard2")
        break
        case 10:
           dialog("There is no place to hide or run. All we can do is fight.","Sorcerer")
        break
        case 11:
           dialog("He is right, we need to stand together.","Templar2")
        break
        case 12:
           dialog("This is not a battle we can win.","Wizard2")
        break
        case 13:
           dialog("You underestimate your army.","Sorcerer")
        break
        case 14:
        movevert("Wizard2",-1)
           dialog("Fine, we'll make our last stand here...","Wizard2")
        break
        case 15:
           dialog("...Together","Wizard2")
        break;
         case 16:
            window.location.href = '../44_seige_final/seige.html'
        break
    }
}

//window.location.href = './beforeairship.html'

$(window).load(function(){
    changesong("01/Threat.mp3")
    castle("without");
    opening("Chapter Eighteen:","The Source")


        
    
});