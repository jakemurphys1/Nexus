
var qnum=0;
var height = 2
function airship(upOrDown,enemyexists){
    var enemy="";
    if(enemyexists){
        enemy="<div id='Eairship' STYLE='position:absolute; TOP:100px; LEFT:1005px;' class='unit' ><img src='../CinePics/enemyship.gif'/></div>"
    }
    
  $("body").append("<div style='background-color:lightblue;margin-top:0px;margin-left:-0px' id = 'quickscene'><div id='airship' STYLE='position:absolute; TOP:" + height*100 + "px; LEFT:405px;' class='unit' ><img src='../CinePics/airship.gif'/></div>" + enemy +
                 "<div class='trees' STYLE='position:absolute; TOP:570px; LEFT:-220px;' ><img style='height:80px' src='../CinePics/trees.png'/></div></div>")
    $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:-140px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
        $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:-60px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
            $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:20px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
                $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:100px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
        $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:180px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
        $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:260px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
        $("#cinemabackground").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:340px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
           $("#cinemabackground").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:400px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>'); 
           $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:460px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
               $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:540px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
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

//    setInterval(function(){
//         $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:-300px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
//            $('.trees').animate({
//                        left: "+1000px"
//                    }, 3000,"linear"); 
//    },500)
    if(enemyexists){
        setTimeout(function(){
            $('#airship').animate({
                        left: '-=1500px'
                    }, 1500);
        },1500)
         setTimeout(function(){
            $('#Eairship').animate({
                        left: '-=1500px'
                    }, 1500);
        },3000)
        setTimeout(function(){
              $("#quickscene").remove();
              queue();
        },5000)
    }else {
         setTimeout(function(){
            $("#quickscene").remove();
             queue();
        },3000)
    }
 
}


function queue(){
    qnum+=1;
    switch(qnum){
        case 1:
            opening("Chapter Seventeen: ", "The Rescue")
                        enterChar("General2",330,50,"no","back")
        break
        case 2:
        airship(5)

        break
        case 3:

            movevert("General2",-1)
            delay(1000)
        break
        case 4:
            enterChar("Knight",380,550,"no","moving_back")
            movevert("Knight",-200)
            delay(1000)
        break
        case 5:
            enterChar("Sandra",380,550,"no","moving_back")
            movevert("Sandra",-150,"end")
        break
        case 6:
            movehor("Sandra",-150,"end")
        break
        case 7:
            movevert("Sandra",-50)
            dialog("May we speak with you, sir.","Knight")
        break
        case 8:
            dialog("Welcome","General2")
        break
        case 9:
            movevert("General2",100)
            dialog("I've been waiting for you for thirty years.","General2")
        break
        case 10:
            movehor("Sandra",1)
            dialog("That's the man that killed Olive and Bernard!","Sandra")
        break
        case 11:
            movevert("Sandra",-1)
            dialog("Where is he... The Baby.","Knight")
        break
        case 12:
            dialog("He's hardly a baby now.","General2")
        break
        case 13:
            dialog("I raised him the best I could.","General2")
        break
        case 14:
            dialog("Brought out his potential. He's quite the fighter now.","General2")
        break
        case 15:
            dialog("Is he near here?","Knight")
        break
        case 16:
            dialog("A couple of years ago, I told him everything.","General2")
        break
        case 17:
            dialog("The Nexus, the prison, how I killed his parents...","General2")
        break
        case 18:
            dialog("He hasn't spoken to me since...","General2")
        break
        case 19:
            dialog("Spare us the sob story. Where is he?","Knight")
        break
        case 20:
            dialog("He moved to Spiketon. You should be able to find him there.","General2")
        break
        case 21:
            dialog("He has very unique abilites. He's gain quite a reputation.","General2")
        break
        case 22:
            dialog("That's not good. The horde is searching for individuals with unique abilities.","Knight")
        break
        case 23:
            dialog("We must hurry!","Knight")
        break
        case 24:
            dialog("The town is surrounded by trees. You won't be able to land your airship close by.","General2")
        break
        case 25:
            dialog("If you land east of the town and cross the river, you will have a clear path.","General2")
        break
        case 26:
            dialog("Ok, thank you.","Knight")
        break
        case 27:
            dialog("Tell him... I'm sorry.","General2")
        break
        case 28:
            movevert("Knight",200)
            movehor("Sandra",200)
            movevert("General2",-100)
        break
         case 29:
            window.location.href = 'rescue.html'
        break
    }
}

//window.location.href = './beforeairship.html'

$(window).load(function(){
        changesong("01/Peaceful.mp3")
        
    
});