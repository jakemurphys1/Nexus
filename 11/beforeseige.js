
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
  },3000)

}

function queue(){
    qnum+=1;
    switch(qnum){
        case 0:
                castle("without");
        break;
        case 1:
            enterChar("Soldier2",200,300);
            enterChar("Archer3",250,300);
            enterChar("Knight",300,300);
            enterChar("Healer1",350,300);
            enterChar("Templar2",400,300);
            enterChar("Rouge2",450,300);
            enterChar("Mage2",500,300);
            enterChar("Wizard1",400,400);
            movevert("Wizard1",-1)
            delay(1000)
        break
        case 2:
            dialog("The horde is beyond the walls.","Wizard1")
        break
        case 3:
            dialog("We cannot let them break through.","Wizard1")
        break
         case 4:
            dialog("The first wave will attack soon.","Wizard1")
        break
         case 5:
           dialog("They will attack the four weakpoints in our wall.","Wizard1")
        break
         case 6:
            dialog("The weakpoints can only take so much, and if even one falls, all is lost.","Wizard1")
        break
         case 7:
            dialog("We must send a group to intercept them before it then.","Wizard1")
        break
         case 8:
            movevert("Wizard1",1)
            dialog("Now prepare for battle!","Wizard1")
        break
          case 9:
           window.location.href = '../12_seige/seige.html'
        break
    }
}

$(window).load(function(){
    opening("Chapter 5:","Seige")
    saving("11");
    
    changesong("Drummer.wav")
        
    
});