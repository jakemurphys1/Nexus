
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
            enterChar("Sorcerer",200,150);
            enterChar("Archer2",240,220);
            enterChar("Wizard1",220,260);
            enterChar("Templar1",500,290);
            enterChar("Edgar",450,330);
            enterChar("Healer1",150,400);
            enterChar("Rouge2",350,420);
            enterChar("Knight",455,424);
            enterChar("Sandra",370,170);
            movevert("Knight",-1)
            
            setTimeout(function(){
                doeffect("Lightning.mp3")
                $("#fan10").remove()
            },2000)
            delay(3000)
            break;
        case 2:
             dialog("We're going down! Brace yourselves!","Knight")
            break
        case 3:
            $(".Object").animate({
                left:"+=100px"
            },3000)
            delay(2000)
            break
        case 4:
        window.location.href = 'beforeArena.html'
            break
        case 5:
         dialog("The Prisoners...","Sandra")
        break
         case 6:
        dialog("Do you know where they are?","Knight")
        break
        case 7:
            dialog("No, but I think they are escaping.","Sandra")
        break
        case 8:
        dialog("That's good right, we won't have to rescue them?","Sandra")
        break
         case 9:
        dialog("Unless they die first.","Knight")
        break
         case 10:
        dialog("How far are we from the arena?","Sandra")
        break
         case 11:
        dialog("We're Close","Knight")
        break
         case 12:
        enterChar("Sorcerer",655,300);
            movehor("Sorcerer",-250,"end")
        break
         case 13:
         movevert("Sorcerer",1)
         dialog("We have a flagship incoming!","Sorcerer")
        break
         case 14:
             dialog("...And this one has missiles.","Sorcerer")
        break
          case 15:
              window.location.href = '../24_airship3/Airship.html'
        break
          
    }
}

$(window).load(function(){
                    propeller.src="../sounds/Helicopter.wav";
                    propeller.volume=.05;
                    propeller.loop=true;
                    propeller.play();
    saving("25")
    changesong("01/Hurry.mp3")
});