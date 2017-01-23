
var qnum=0;

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
        case 1:
            enterChar("Sorcerer",450,400);
            enterChar("Wizard1",400,400);
            dialog("We're safe...","Wizard1")
        break
        case 2:
            dialog("For now...","Wizard1")
        break
        case 3:
        movehor("Sorcerer",-1)
            dialog("Can we survive another assault?","Sorcerer")
        break
        case 4:
            dialog("We must endure. We have to give the others more time!","Wizard1")
        break
        case 5:
        movehor("Wizard1",1)
            dialog("But Listen, even if the temple falls, YOU must survive!","Wizard1")
        break
        case 6:
            dialog("Therefore, if I tell you to retreat and hide, you must listen!","Wizard1")
        break
        case 7:
            dialog("Sir, we cannot allow the source to be destroyed.","Sorcerer")
        break
        case 8:
        movevert("Wizard1",1)
            dialog("The source can never be fully destroyed, but it can be blotted out.","Wizard1")
        break
        case 9:
        movehor("Wizard1",1)
            dialog("You are more valuable. You have the power to destroy the demigod.","Wizard1")
        break
        case 10:
            dialog("As long as you can still fight, we still have hope.","Wizard1")
        break
        case 11:
            enterChar("Templar2",410,100);
            movevert("Templar2",200,"end")
        break
        case 12:
            dialog("Another wave is about to hit!","Templar2")
        break
        case 13:
            movevert("Wizard1",-1)
            dialog("Already! We can't withstand another assault this soon!","Wizard1")
        break
        case 14:
            dialog("Tell the others to fall back into the keep and barricade it!","Wizard1")
        break
        case 15:
            dialog("We'll make our final stand within.","Wizard1")
        break
         case 16:
            window.location.href = 'overwhelm.html'
        break
    }
}

//window.location.href = './beforeairship.html'

$(window).load(function(){
    changesong("01/Hurry.mp3")
    saving("39")

        
    
});