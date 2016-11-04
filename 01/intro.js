
var qnum=0;
   var Fire = new Audio();
        Fire.src = "../sounds/Fire.wav";
        Fire.volume=.3;



function sun(){
      $("body").append("<div style='background-color:#0ecfd2;margin-top:0px;margin-left:-0px' id = 'quickscene'>" + "<img style= 'margin-left:35%;margin-top:20%; width:200px' src = 'pics/Sun1.gif' /></div>")
      text("The Sun is Waning",200,100)
      
      setTimeout(function(){
          queue();
      },6000)
}

var endthis=false;
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
  },6000)
  
  if(withairship=="with"){
            $("#quickscene").append('<div id="airship" STYLE="position:absolute; TOP:120px; LEFT:300px; width:300px" ><img style="width:150px" src="../CinePics/airship.gif"/></div>')
            $("#airship").animate({
                top:"-=400px"
            },2000,"linear")
       text("...Who is the Only One that May Know the Answer to...",100,-350)

  }
}

function Source(){
    
  $("body").append("<div style='background-color:lightblue;margin-top:0px;margin-left:-0px' id = 'quickscene'>" +
                 "<img style='width:100%;height:100%' src = 'pics/Source.png' /><img id='source' style='position:absolute; margin-top:250px;margin-left:-480px;width:100px' src = 'pics/Source.gif'/></div>")
    
    
         text("To Destroy the Source of All Light",100,-200)

  setTimeout(function(){
      $("#quickscene").remove();
      queue();
  },6000)
}

function enterCharIntro(name,left,top){
     $("#quickscene").append("<div style='z-index:7;margin-top:" + top + "px; margin-left:" + left + "px' class='Object' id='"+name+"'><img src='../CinePics/characters/" + name +"/"+ name +"_front.gif' /></div>");
        $("#" +name).data("top",0);
     $("#" +name).data("left",0);
}

function Entrance(){
    
  $("body").append("<div style='background-color:lightblue;margin-top:0px;margin-left:-0px' id = 'quickscene'>" +
                 "<img style='width:100%;height:100%' src = 'pics/entrance.png' /></div>")
        
  enterCharIntro("Soldier2",200,-400);
    enterCharIntro("Archer3",250,-400);
    enterCharIntro("Knight",300,-400);
    enterCharIntro("Sorcerer",350,-400);
    enterCharIntro("Wizard1",400,-400);
    enterCharIntro("Healer1",450,-400);
    enterCharIntro("Enchantress",500,-400);
    enterCharIntro("Guard",550,-400);
    enterCharIntro("Templar1",600,-400);
    enterCharIntro("Rouge2",650,-400);
    enterCharIntro("Thief2",700,-400);
    enterCharIntro("Mage2",750,-400);
    
  
         text("A small band of heroes prepare to defend it...",50,-300)

  setTimeout(function(){
      $("#quickscene").remove();
      queue();
  },6000)
}

function Docking(){
    
  $("body").append("<div style='background-color:lightblue;margin-top:0px;margin-left:-0px' id = 'quickscene'><div id='airshipcontainer' style='position:absolute;margin-left:50px;margin-top:110px;z-index:1;width:100%;height:100%'><img style='width:100%;height:100%;z-index:1' src = 'pics/airship-bare.png' />" + 
                   '<div style="margin-top: -795px; margin-left:-5px; z-index:5" class="fan"><img style=" height:250px; width:250px" src ="pics/fan.gif" /></div><div style="margin-top: -610px; margin-left:-5px; z-index:5" class="fan"><img style=" height:250px; width:250px" src ="pics/fan.gif" /></div><div style="margin-top: -795px; margin-left:595px; z-index:5" class="fan""><img style=" height:250px; width:250px" src ="pics/fan.gif" /></div><div style="margin-top: -610px; margin-left:595px; z-index:5" class="fan"><img style=" height:250px; width:250px" src ="pics/fan.gif" /></div></div>' +
"<img style='position:absolute;width:100%;height:50%;margin-top:50%;z-index:4' src = 'pics/dock.png' /></div>")
        
  enterCharIntro("Soldier2",350,200);
    enterCharIntro("Archer2",400,210);
    enterCharIntro("Knight",450,500);
    enterCharIntro("Sorcerer",500,230);
    enterCharIntro("Wizard1",550,200);
    enterCharIntro("Healer1",600,210);
    enterCharIntro("Templar1",300,250);
    enterCharIntro("Rouge2",350,300);
    
    movevert("Knight",-300);
    
    setTimeout(function(){
        movevert("Knight",1)
        $("#airshipcontainer").animate({
            top:"-=700px"
        },4000,"linear")
        
          $(".Object").animate({
            top:"-=700px"
        },4000,"linear")
    },2000)
    
  
         text("While a small group leaves to seek the Story-Teller...",50,450)

  setTimeout(function(){
      $("#quickscene").remove();
      queue();
  },6000)
}

function airship(){
    
  $("body").append("<div style='background-color:lightblue;margin-top:0px;margin-left:-0px' id = 'quickscene'><div id='airship' STYLE='position:absolute; TOP:100px; LEFT:705px;' class='unit' ><img src='../CinePics/airship.gif'/></div><div class='trees' STYLE='position:absolute; TOP:570px; LEFT:-220px;' ><img style='height:80px' src='../CinePics/trees.png'/></div></div>")
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
      $('.treesquickscene').animate({
                        left: "+1520px"
                    }, 3000,"linear"); 
        $("#cinemabackground").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:340px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
      $('.trees').animate({
                        left: "+1600px"
                    }, 3000,"linear"); 
           $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:400px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
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
    
     text("Save the Light From the Darkness",50,250)
     
     setTimeout(function(){
         $(".epictext").fadeOut();
     
         text("The NEXUS",50,250)
     },6000)
    $('#airship').animate({
                        left: '-=1200px'
                    }, 8000);

    setInterval(function(){
         $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:-300px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
            $('.trees').animate({
                        left: "+1000px"
                    }, 3000,"linear"); 
    },500)
  setTimeout(function(){
      $("#quickscene").remove();
      queue();
  },20000)
}

function queue(){
    qnum+=1;
    switch(qnum){
        case 1:
          sun();
        break
        case 2:
          $("#quickscene").remove();
          castle("Without");
        break
        case 3:
          $("#quickscene").remove();
          Source();
        break
        case 4:
          $("#quickscene").remove();
            Entrance();
        break
         case 5:
        $("#quickscene").remove();
            Docking();
        break
        case 6:
        $("#quickscene").remove();
          castle("with");
        break
        case 7:
           $("#quickscene").remove();
          airship();
        break
         case 8:
            window.location.href = 'Starting.html'
        break
         case 9:
        dialog("Well, yes, that too. But the important thing is the safety it provides.","Edgar-R")
        break
         case 10:
        dialog("When a group bonds to a Nexus, they also bond to each other.","Edgar-R")
        break
         case 11:
        dialog("So, while the bond exists, if something happens to one of us, like if we were mauled by a bear...","Edgar-R")
        break
         case 12:
        dialog("We would be safely returned to the Nexus. We wouldn't be able to continue fighting, but we would be safe.","Edgar-R")
        break
         case 13:
        dialog("Yep, safety first. Now I want to shoot some lightning!","Sandra-R")
        break
        case 14:
        dialog("Ok, but if you hit me with a bolt, you are not going hunting! Now I'll go first.","Edgar-R")
        break
           case 15:
        movehor("Edgar-R",80,"end");
        break
         case 16:
       transform("Edgar")
       $("#Edgar-R").remove();
       enterChar("Edgar",450,220)
        break
           case 17:
        dialog("Ok, it's your turn.","Edgar")
        break
         case 18:
        movevert("Sandra-R",-30);
            movevert("Edgar-R",-30,"end");
        break
         case 19:
        movehor("Sandra-R",20);
            movevert("Edgar-R",0,"end");
        break
          case 20:
        movehor("Sandra-R",-20,"end");
        break
          case 21:
          transform("Sandra")
        $("#Sandra-R").remove();
        break
        case 22:
         enterChar("Sandra",490,270)
                dialog("Sweet, I'm a mage!","Sandra");
         break;
           case 23:
        movevert("Sandra",50,"end");
        break
         case 24:
        dialog("I thought you would get something like that. Now, you need to be careful...","Edgar");
        break
        case 25:
        addobject("EffectFire",500,300);
            Fire.play();
        moveobj("EffectFire",50,0,"end");
        break
        case 26:
           dialog("Sandra, what did I just say?","Edgar");
        break
         case 27:
           dialog("You said not to hit you with a lightning bolt. That was neither a bolt nor you!","Sandra");
        break
          case 28:
           dialog("C'mon, we need to go meet the others at the train.","Edgar");
        break
         case 29:
          movevert("Edgar",-200,"end");
            movevert("Sandra",-300);
        break
        case 30:
    window.location.href = 'Cave.html'
        break
    }
}



$(window).load(function(){
        changesong("01/Opening.mp3")

});