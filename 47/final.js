
var qnum=0;
   var Fire = new Audio();
        Fire.src = "../sounds/Fire.wav";
        Fire.volume=.3;



function sun(){
//    $(".sunpic").remove()
    $(".sun").append("<img style= 'margin-left:35%;margin-top:20%; width:200px' src = 'pics/sun.gif' />")
      text("...While the sun shines brightly.",200,100,".sun")
      
      
      
      setTimeout(function(){
          queue();
      },6000)
}

var endthis=false;
function airship(upOrDown,enemyexists){

    $(".airship").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:-140px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');

        $(".airship").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:-60px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');

            $(".airship").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:20px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');

                $(".airship").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:100px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');

        $(".airship").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:180px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');

        $(".airship").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:260px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');

        $(".airship").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:340px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');

           $(".airship").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:400px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');

           $(".airship").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:460px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');

               $(".airship").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:540px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
    
            $(".horde").append("<img style='margin-top:-600px;margin-left:400px' class='dead' src='../Pictures/Enemies/goblin.gif' />")
        $(".horde").append("<img style='margin-top:-800px;margin-left:300px' class='dead' src='../Pictures/Enemies/goblin.gif' />")
        $(".horde").append("<img style='margin-top:-500px;margin-left:600px' class='dead' src='../Pictures/Enemies/goblin.gif' />")
        
        $(".horde").append("<img style='margin-top:-500px;margin-left:200px' class='dead' src='../Pictures/Enemies/warrior.gif' />")
        
        $(".horde").append("<img style='margin-top:-500px;margin-left:-200px; position:absolute' id='vampire' class='dying' src='../Pictures/Enemies/vampire.gif' />")
        $(".horde").append("<img style='margin-top:-600px;margin-left:-100px; position:absolute' id='Necromancer' class='dying' src='../Pictures/Enemies/Necromancer.gif' />")
        $(".horde").append("<img style='margin-top:-450px;margin-left:-300px; position:absolute' id='Djinn' class='dying' src='../Pictures/Enemies/Djinn.gif' />")
        $(".horde").append("<img style='margin-top:-550px;margin-left:0px; position:absolute' id ='frostwraith' class='dying' src='../Pictures/Enemies/frostwraith.gif' />")

    
        $("#airship img").animate({
            width:"100px",
            height:"100px",
        },5000)
        $("#airship").animate({
            left:"+=600px",
            top:"-=50px"
        },15000)
    
    $('#palace').animate({
        top: "+600px",
                    }, 15000,"linear");
    
          text("A Palace Falls",300,0,".airship")
    
    var thisdegree = 0
    setInterval(function(){
        thisdegree-=1
        $("#palace").css("-ms-transform","rotate(" + thisdegree +"deg");
        $("#palace").css("-webkit-transform","rotate(" + thisdegree +"deg");
        $("#palace").css("transform","rotate(" + thisdegree +"deg");
    },200)
    

    
  setTimeout(function(){
      queue();
  },6000)
  
    enterCharIntro("Soldier2",350,-500,".docking");
    enterCharIntro("Archer2",400,-490,".docking");
    enterCharIntro("Knight",450,-500,".docking");
    enterCharIntro("Sorcerer",500,-470,".docking");
    enterCharIntro("Wizard1",550,-500,".docking");
    enterCharIntro("Healer1",600,-490,".docking");
    enterCharIntro("Templar1",300,-450,".docking");
    enterCharIntro("Rouge2",350,-400,".docking");
    
    enterCharIntro("Thief1",500,-400,".docking");
    enterCharIntro("Enchantress",550,-400,".docking");
    enterCharIntro("Guard",600,-400,".docking");
    enterCharIntro("Mimic",200,-400,".docking");
    enterCharIntro("Sandra",350,-400,".docking");
  
  
}

function dyinghorde(){

        
        setTimeout(function(){
            $("#vampire").attr("src","../Pictures/Enemies/vampire_dying.gif")
            setTimeout(function(){
                $("#vampire").remove();
            },1500)
            
            $("#Necromancer").attr("src","../Pictures/Enemies/Necromancer_dying.gif")
            setTimeout(function(){
                $("#Necromancer").remove();
            },1500)
        },1000)
        
        setTimeout(function(){
            $("#Djinn").attr("src","../Pictures/Enemies/Djinn_dying.gif")
            setTimeout(function(){
                $("#Djinn").remove();
            },1500)
            
            $("#frostwraith").attr("src","../Pictures/Enemies/frostwraith_dying.gif")
            setTimeout(function(){
                $("#frostwraith").remove();
            },1500)
        },2000)
        
        $(".dying").animate({
            left:"+=300px",
        },5000)
        
        $("#airshipcontainer").animate({
            top:"-=700px"
        },4000,"linear")
        
         text("The hordes die without their master",50,-200,".horde")

  setTimeout(function(){
      queue();
  },6000)
}

function enterCharIntro(name,left,top,location){
     $(location).append("<div style='z-index:7;margin-top:" + top + "px; margin-left:" + left + "px' class='Object' id='"+name+"'><img src='../CinePics/characters/" + name +"/"+ name +"_front.gif' /></div>");
        $("#" +name).data("top",0);
     $("#" +name).data("left",0);
}

function Docking(){
        

    
        $("#airshipcontainer").animate({
            top:"+=700px"
        },4000,"linear")
        
          $(".Object").animate({
            top:"+=700px"
        },4000,"linear")
          
    
  
         text("The group of heroes rejoice...",50,450,".docking")

  setTimeout(function(){
      queue();
  },6000)
}

function credits(){
    
  $("body").append("<div style='background-color:black' id = 'quickscene'><div class='addhere' style='color:white; font-size:20px; text-align:center; margin-top:600px;;width:100%;height:100%;position:absolute;'></div></div>")
        $(".addhere").append("<div class='row'><p>Created by:</p><p>Jake Murphy</p></div>")
        $(".addhere").append("<div class='row'><p>Developed by:</p><p>5X5 Games</p></div>")
        $(".addhere").append("<div class='row'><p>Play Tester:</p><p>Emmanuel Murphy</p></div>")
        $(".addhere").append("<div class='row'><p>Music by:</p><p>Matthew Pablo</p></div>")
        $(".addhere").append("<div class='row'><p>Sprites and animation created using:</p><p>www.piskelapp.com</p></div>")
        $(".addhere").append("<div class='row'><p>Backgrounds created using:</p><p>Tiled from www.mapeditor.org</p></div>")
        $(".addhere").append("<div class='row'><p>Sound effects courtesy of:</p><p>www.freesound.org</p></div>")
        $(".addhere").append("<div class='row'><p>Thanks for Playing</p></div>")
        $(".addhere").append("<div class='row'><p style='font-size:50px'>The Nexus</p></div>")
        
        
$(".addhere").animate({
    top:"-=2000"
},30000,'linear')

setTimeout(function(){
    window.location.href = "../index.html";
},35000)
}

function queue(){
    qnum+=1;
    switch(qnum){
        case 1:
          airship(0,false)
        break
        case 2:
          $(".airship").fadeOut();
          dyinghorde("Without");
        break
        case 3:
          $(".horde").fadeOut();
            Docking()
        break
        case 4:
          $(".docking").fadeOut();
            sun();
        break
        case 5:
        $(".sun").fadeOut(2000);
            delay(2000)
        break
        case 6:
          credits();
        break
        case 30:
    window.location.href = 'Cave.html'
        break
    }
}


$(window).load(function(){

});