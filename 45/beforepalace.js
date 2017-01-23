
var qnum=0;
var height=2;
 var propeller=new Audio();
     
function airship(upOrDown,enemyexists){
    var enemy="";
    if(enemyexists){
        enemy="<div id='palace' STYLE='position:absolute; TOP:000px; LEFT:-200px;' ><img src='../Pictures/palace.png'/></div>"
            setTimeout(function(){
        $("#airship img").animate({
            width:"2px",
            height:"2px",
        },1000)
        $("#airship").animate({
            left:"-=50px",
            top:"+=100px"
        },1000)
        
    },2000)
    }
    
  $("body").append("<div style='background-color:lightblue;margin-top:00px;margin-left:-0px' id = 'quickscene'><div id='airship' STYLE='position:absolute; TOP:" + height*100 + "px; LEFT:405px; z-index:10' class='unit' ><img src='../CinePics/airship.gif'/></div>" + enemy +
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
    
    $('#palace').animate({
                        left: "+200px",
                    }, 4000,"linear");

    setInterval(function(){
         $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:-300px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
            $('.trees').animate({
                        left: "+1000px"
                    }, 3000,"linear"); 
    },500)
    

    
  setTimeout(function(){
      
            queue();
      $("#quickscene").remove();

  },5000)
}

function queue(){
    qnum+=1;
    switch(qnum){
        case 1:

            break;
        case 2:
            airship(0,false)
            break
        case 3:
        dialog("This is the situation.","Knight")
            break
        case 4:
        dialog("We are going to land on the floating palace.","Knight")
            break
        case 5:
            dialog("Inside it dwells the demigod.","Knight")
        break
         case 6:
        dialog("There is no way our small group can get inside.","Knight")
        break
        case 7:
            movehor("Knight",-100,"end")
        break
        case 8:
        movevert("Knight",-1)
        dialog("However, we can draw him out.","Knight")
        break
         case 9:
            movehor("Knight",-50)         
        dialog("This is a dampening crystal.","Knight")
        break
         case 10:
        movevert("Knight",-1)
        dialog("As soon as we land, we will distribute all the crystals in front of the palace.","Knight")
        break
         case 11:
        dialog("The crystals will slowly gather energy. And once it gets high enough, the palace will begin to descend.","Knight")
        break
         case 12:
        dialog("That should draw him out.","Knight")
        break
         case 13:
         dialog("When he does, and our sorcerer, guard, and mimic will need to attack him together.","Knight")
        break
         case 14:
             dialog("The mimic will then have to use the guard's 'brace', then the sorcerer's blood-sacrifice, and finally the 'Ultimate' ability.","Knight")
        break
         case 15:
             dialog("But before that, the horde will attack us.","Knight")
        break
         case 16:
             dialog("They will attempt to shut off the crystals.","Knight")
        break
         case 17:
             dialog("If they do, just move a group on top of it, and it will reactivate it.","Knight")
        break
         case 18:
             dialog("The more crystals we have running, the faster it will charge.","Knight")
        break
         case 19:
             dialog("We only have a limited time to reach the energy level before the crystals stop working.","Knight")
        break
         case 20:
             dialog("So keep them working!","Knight")
        break
         case 21:
             dialog("Is everything clear?","Knight")
        break
         case 22:
             dialog("We'll only get one shot at this.","Knight")
        break
        case 23:
                       airship(0,true)
        break
          case 24:
              window.location.href = '../46_palace/palace.html'
        break
          
    }
}

$(window).load(function(){
                    propeller.src="../sounds/Helicopter.mp3";
                    propeller.volume=.05;
                    propeller.loop=true;
                    propeller.play();
    opening("Final Chapter:","The Palace")
    changesong("01/Descent.mp3")
    
                addobject("diamond",200,400)
             enterChar("Knight",400,400,"no","back");
            
            enterChar("Wizard1",250,200);
            enterChar("Healer1",300,200);
            enterChar("Sandra",350,200);
            enterChar("Sorcerer",400,200);
            enterChar("Archer2",450,200);
            enterChar("Rouge1",500,200);
            
            enterChar("Enchantress",250,300);
            enterChar("Guard",300,300);
            enterChar("Soldier2",350,300);
            enterChar("Mimic",400,300);
            enterChar("Templar1",450,300);
            enterChar("Thief1",500,300);
    
   // $("div").removeClass("hidden")
});