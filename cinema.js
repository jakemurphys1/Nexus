// window.location.href = '../08_Arena/Arena.html'

var curmusic = new Audio();
var effect = new Audio();
function changesong(song){
    if(curmusic){
        curmusic.src="";
                    curmusic.play();
    }
        
                            curmusic.src="../sounds/music/"+ song;
     curmusic.volume=.2;
                    curmusic.loop=true;
                    curmusic.play();
   
                   
}
var effect = new Audio();
function doeffect(sound,startpoint,volume){
         
              effect.src="../sounds/" + sound;
              effect.volume=1;
    if(volume){
        effect.volume=volume;
    }
              effect.play();
     if(startpoint){
        effect.currentTime = startpoint;
    }
    
}
function text(words,left,top,location){
    
        $(".epictext").remove();
    $(location).append("<p class='epictext' style ='position: absolute; display:none; margin-left:" +left + "px; margin-top:" + top +"px'>" + words + "</p>")
    setTimeout(function(){
        $(".epictext").fadeIn(2000);
    },2000)
    
}
function opening(chapter,name){
  $("body").append("<div class='opener' style='background-color:black;margin-top:0px;margin-left:-0px' id = 'quickscene'><div id='opener' style = 'text-align:center;margin-top:30%;font-size:30px;display:none'><p style = 'color:white'>" + chapter + "</p><p style = 'color:white;font-size:40px'>" + name +"</p></div></div>")

    $("#opener").fadeIn(3000);

  setTimeout(function(){
      $("#cinema img").removeClass("hidden")
      $(".opener").remove();
      queue();
  },5000)
}
function enterChar(name,left,top,end,special){
    
    
    if(!special){
          $("#cinema").append("<div style='margin-top:" + top + "px; margin-left:" + left + "px' class='Object' id='"+name+"'><img src='../CinePics/characters/" + name +"/"+ name +"_front.gif' /></div>");
    }
    if(special){
        $("#cinema").append("<div style='margin-top:" + top + "px; margin-left:" + left + "px' class='Object' id='"+name+"'><img src='../CinePics/characters/" + name +"/"+ name +"_" + special +".gif' /></div>");
    }
    
    
    $(".hidethis").append("<div class='Object'><img src='../CinePics/characters/" + name +"/"+ name +"_left.gif' /></div>")
    $(".hidethis").append("<div class='Object'><img src='../CinePics/characters/" + name +"/"+ name +"_right.gif' /></div>")
    $(".hidethis").append("<div class='Object'><img src='../CinePics/characters/" + name +"/"+ name +"_back.gif' /></div>")
    
    $(".hidethis").append("<div class='Object'><img src='../CinePics/characters/" + name +"/"+ name +"_moving_front.gif' /></div>")
    $(".hidethis").append("<div class='Object'><img src='../CinePics/characters/" + name +"/"+ name +"_moving_left.gif' /></div>")
    $(".hidethis").append("<div class='Object'><img src='../CinePics/characters/" + name +"/"+ name +"_moving_right.gif' /></div>")
    $(".hidethis").append("<div class='Object'><img src='../CinePics/characters/" + name +"/"+ name +"_moving_back.gif' /></div>")
  
        $("#" +name).data("top",0);
     $("#" +name).data("left",0);
    if(end=="end"){
          queue();
    }
  
}
function addobject(name,left,top, width){
    
    
     $("#cinema").append("<div style='margin-top:" + top + "px; margin-left:" + left + "px' class='Object " + name +"' id='"+name+"'><img src='../CinePics/Objects/" + name +".gif' /></div>");
    $("#" +name).data("top",0);
     $("#" +name).data("left",0);
    
    if(width){
       $("#" + name + " img").css("width",width) 
       $("#" + name + " img").css("height",width)
    }
    
}
function movehor(name, distance,end,speed){
    var curleft=$('#' + name).data("left");
    var time = distance/150;
      if(time<0){
        time*=-1;
    }
    if(speed=="fast"){
        time = distance/500;
    }
    var pic = "../CinePics/characters/" + name +"/"+ name +"_moving_right.gif";
    var still = "../CinePics/characters/" + name +"/"+ name +"_right.gif";
    if(distance<0){
        pic = "../CinePics/characters/" + name +"/"+ name +"_moving_left.gif";
        still = "../CinePics/characters/" + name +"/"+ name +"_left.gif";
    }
    $('#' + name + " img").attr("src",pic)
    
    
    
    $('#' + name).data("left",curleft+distance)
     $('#' + name).animate({
                 left: $('#' + name).data("left") + 'px'
        }, time*1000,"linear");
    if(end=="end"){
        setTimeout(queue,time*1000) 
    }
     setTimeout(function(){
         $('#' + name + " img").attr("src",still);
     },time*990) 
}
function movevert(name, distance,end,speed){
    var curtop=$('#' + name).data("top");
    var time = distance/150;
    
    if(speed=="fast"){
        time = distance/500;
    }
    if(time<0){
        time*=-1;
    }
    var pic = "../CinePics/characters/" + name +"/"+ name +"_moving_front.gif";
    var still= "../CinePics/characters/" + name +"/"+ name +"_front.gif";
    if(distance<0){
        pic = "../CinePics/characters/" + name +"/"+ name +"_moving_back.gif";
        still = "../CinePics/characters/" + name +"/"+ name +"_back.gif";
    }
    
    $('#' + name + " img").attr("src",pic)
    
    
    
    $('#' + name).data("top",curtop+distance)
     $('#' + name).animate({
                 top: $('#' + name).data("top") + 'px'
        }, time*1000,"linear");
    
      if(end=="end"){
        setTimeout(queue,time*1000) 
    }
     setTimeout(function(){
         $('#' + name + " img").attr("src",still);
     },time*990) 
}

function moveobj(name, left,top,end,speed){
        var curtop=$('#' + name).data("top");
    var curleft=$('#' + name).data("left");
    var time = (left+top)/150;
    if(time<0){
        time*=-1;
    }
    if(speed=="fast"){
        time = (left+top)/500;
    }   
    
    $('#' + name).data("top",curtop+top)
    $('#' + name).data("left",curleft+left);
     $('#' + name).animate({
                 top: $('#' + name).data("top") + 'px',
                 left: $('#' + name).data("left") + 'px'
        }, time*1000,"linear");
    
      if(end=="end"){
          console.log("got here")
        queue();
    }
}
function delay(time){
    setTimeout(function(){
        queue();
    },time)
}

function saving(level){
    if(window.localStorage) { 
        localStorage.setItem("level", level); 
    }
    if(parseInt( localStorage.getItem("diff"))>0){
        difflevel=parseInt(localStorage.getItem("diff"));
    }
}

var ondialog=false;
function dialog(saying, person,position){
    var type="dialog";
                ondialog=true;
    if(position=="left"){
        type="dialog-left"
    }
          $("#" + person).append("<div class='dialog'></div>");
    
        $(".dialog").append("<p align='center' style='font-size: 20px; margin-left:5px; margin-right:5px; margin-top:0px'>" + saying + "</p>");
    
        setInterval(function(){

            $(".dialog").addClass("removewindow");
        },100);
}

$(window).load(function(){
    $("body").append("<div class='hidethis' style='visibility:hidden'></div>")
    queue();
    

    
    
 $("body").click(function(){
     if(ondialog==true){
         $(".removewindow").remove();
         ondialog=false;
         queue();
     }
        
    });

})//done
