
var qnum=0;
   var Fire = new Audio();
        Fire.src = "../sounds/Fire.wav";
        Fire.volume=.3;



function sun(){
      text("The Sun is Waning",200,100,".sun")
              
  enterCharIntro("Soldier2",200,-400,".entrance");
    enterCharIntro("Archer3",250,-400,".entrance");
    enterCharIntro("Knight2",300,-400,".entrance");
    enterCharIntro("Sorcerer",350,-400,".entrance");
    enterCharIntro("Wizard2",400,-400,".entrance");
    enterCharIntro("Healer2",450,-400,".entrance");
    enterCharIntro("Templar2",500,-400,".entrance");
    enterCharIntro("Rouge2",550,-400,".entrance");
    enterCharIntro("Mage2",600,-400,".entrance");
    
            
  enterCharIntro("Soldier2",350,200,".docking");
    enterCharIntro("Archer2",400,210,".docking");
    enterCharIntro("Knight",450,500,".docking");
    enterCharIntro("Sorcerer",500,230,".docking");
    enterCharIntro("Wizard1",550,200,".docking");
    enterCharIntro("Healer1",600,210,".docking");
    enterCharIntro("Templar1",300,250,".docking");
    enterCharIntro("Rouge2",350,300,".docking");
      
      
      setTimeout(function(){
          queue();
      },6000)
}

var endthis=false;
function castle(withairship){
    endthis=false;
  $("body").append("")
          $('.trees').animate({
                        left: "+1080px"
                    }, 3000,"linear"); 
    $(".castle").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:-140px;" ><img style="height:80px" src="./pics/wall-enemy.gif"/></div>');
      $('.trees').animate({
                        left: "+1160px"
                    }, 3000,"linear"); 
        $(".castle").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:-60px;" ><img style="height:80px" src="pics/wall-enemy.gif"/></div>');
      $('.trees').animate({
                        left: "+1220px"
                    }, 3000,"linear"); 
            $(".castle").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:20px;" ><img style="height:80px" src="pics/wall-enemy.gif"/></div>');
      $('.trees').animate({
                        left: "+1300px"
                    }, 3000,"linear"); 
                $(".castle").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:100px;" ><img style="height:80px" src="pics/wall-enemy.gif"/></div>');
      $('.trees').animate({
                        left: "+1380px"
                    }, 3000,"linear"); 
        $(".castle").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:180px;" ><img style="height:80px" src="pics/wall-enemy.gif"/></div>');
      $('.trees').animate({
                        left: "+1460px"
                    }, 3000,"linear"); 
        $(".castle").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:260px;" ><img style="height:80px" src="pics/wall-enemy.gif"/></div>');
      $('.trees').animate({
                        left: "+1520px"
                    }, 3000,"linear"); 
        $(".castle").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:340px;" ><img style="height:80px" src="pics/wall-enemy.gif"/></div>');
      $('.trees').animate({
                        left: "+1600px"
                    }, 3000,"linear"); 
           $(".castle").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:400px;" ><img style="height:80px" src="pics/wall-enemy.gif"/></div>');
      $('.trees').animate({
                        left: "+1680px"
                    }, 3000,"linear"); 
           $(".castle").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:460px;" ><img style="height:80px" src="pics/wall-enemy.gif"/></div>');
      $('.trees').animate({
                        left: "+1760px"
                    }, 3000,"linear"); 
               $(".castle").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:540px;" ><img style="height:80px" src="pics/wall-enemy.gif"/></div>');
      $('.trees').animate({
                        left: "+1840px"
                    }, 3000,"linear"); 
    
    if(withairship=="Without"){
         text("The Hordes of Darkness Attack",100,-800,".castle1")
    }
         
    setInterval(function(){
        if(endthis){
            return;
        }
         $(".castle").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:-300px;" ><img style="height:80px" src="pics/wall-enemy.gif"/></div>');
            $('.trees').animate({
                        left: "+1000px"
                    }, 3000,"linear"); 
    },500)
  setTimeout(function(){
      endthis=true;
      queue();
  },6000)
  
  if(withairship=="with"){
            $(".castle2").append('<div id="airshippic" STYLE="position:absolute; TOP:120px; LEFT:300px; width:300px" ><img style="width:150px" src="../CinePics/airship.gif"/></div>')
            $("#airshippic").animate({
                top:"-=400px"
            },2000,"linear")
       text("For if They Fail to find this person",100,-350,".castle2")

  }
}

function Source(){
    
    
         text("To Destroy the Source of All Light",100,-200,".source")

  setTimeout(function(){
      queue();
  },6000)
   $("#hidethis").append("<img src = 'pics/entrance.png'/>")
}

function enterCharIntro(name,left,top,location){
     $(location).append("<div style='z-index:7;margin-top:" + top + "px; margin-left:" + left + "px' class='Object' id='"+name+"'><img src='../CinePics/characters/" + name +"/"+ name +"_front.gif' /></div>");
        $("#" +name).data("top",0);
     $("#" +name).data("left",0);
}

function Entrance(){
         text("A small band of heroes prepare to defend it...",50,-300,".entrance")

  setTimeout(function(){
      queue();
  },6000)
}

function Docking(){

    
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
    
  
         text("While a small group leaves to seek the Story-Teller",50,450,".docking")

  setTimeout(function(){
      queue();
  },6000)
}

function airship(){
    
  $("body").append("<div class='airship' style='background-color:lightblue;margin-top:0px;margin-left:-0px' id = 'quickscene'><div id='airship3' STYLE='position:absolute; TOP:100px; LEFT:705px;' class='unit' ><img src='../CinePics/airship.gif'/></div><div class='trees' STYLE='position:absolute; TOP:570px; LEFT:-220px;' ><img style='height:80px' src='../CinePics/trees.png'/></div></div>")
          $('.trees').animate({
                        left: "+1080px"
                    }, 3000,"linear"); 
    $(".airship").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:-140px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
      $('.trees').animate({
                        left: "+1160px"
                    }, 3000,"linear"); 
        $(".airship").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:-60px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
      $('.trees').animate({
                        left: "+1220px"
                    }, 3000,"linear"); 
            $(".airship").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:20px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
      $('.trees').animate({
                        left: "+1300px"
                    }, 3000,"linear"); 
                $(".airship").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:100px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
      $('.trees').animate({
                        left: "+1380px"
                    }, 3000,"linear"); 
        $(".airship").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:180px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
      $('.trees').animate({
                        left: "+1460px"
                    }, 3000,"linear"); 
        $(".airship").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:260px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
      $('.trees').animate({
                        left: "+1520px"
                    }, 3000,"linear"); 
        $(".airship").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:340px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
      $('.trees').animate({
                        left: "+1600px"
                    }, 3000,"linear"); 
           $(".airship").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:400px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
      $('.trees').animate({
                        left: "+1680px"
                    }, 3000,"linear"); 
           $(".airship").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:460px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
      $('.trees').animate({
                        left: "+1760px"
                    }, 3000,"linear"); 
               $(".airship").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:540px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
      $('.trees').animate({
                        left: "+1840px"
                    }, 3000,"linear"); 
    
     text("The World will be Devoured by Darkness",50,250,".airship")
     
     setTimeout(function(){
         $(".epictext").fadeOut();
     
         text("The NEXUS",50,250,".airship")
     },6000)
    $('#airship3').animate({
                        left: '-=1200px'
                    }, 8000);

    setInterval(function(){
         $(".airship").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:-300px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
            $('.trees').animate({
                        left: "+1000px"
                    }, 3000,"linear"); 
    },500)
  setTimeout(function(){
      $("#quickscene").remove();
      queue();
  },17000)
}

function queue(){
    qnum+=1;
//    $(".epictext").remove();
    switch(qnum){
        case 1:
          sun();
        break
        case 2:
        $(".sun").fadeOut();
          castle("Without");
        break
        case 3:
          $(".castle1").fadeOut();
          Source();
        break
        case 4:
          $(".source").fadeOut();
            Entrance();
        break
         case 5:
        $(".entrance").fadeOut();
            Docking();
        break
        case 6:
        $(".docking").fadeOut();
          castle("with");
        break
        case 7:
           $(".castle2").remove();
          airship();
        break
         case 8:
            window.location.href = 'Starting.html'
        break
    }
}



$(window).load(function(){

});