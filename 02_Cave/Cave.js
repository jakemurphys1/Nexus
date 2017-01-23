    var allynum=0;

        var angel=false;
        var demon=false;
        var djinn=false;
        var frostlord=false;
    var angelrest=0;
    var demonrest=0;
    var djinnrest=0;
    var frostlordrest=0;

        var replicaterecipe=false;
        var reviverecipe=false;
        var recoverrecipe=false;
        var teleportrecipe=false;

        var boostrecipe=false;
        var goldrecipe=false;
        var manarecipe=false;
        var summonrecipe=false;
        var intelligencerecipe=false;
        var flourishrecipe=false;
        var refreshrecipe=false;

        var recoverpotion=0;
        var revivepotion=0;
        var teleportpotion=0;
        var boostpotion=0;

var noheal=false;
var number_of_units=2;
var missiondetails = "<p>Follow the instructions to learn how to create groups, switch group members, and to defeat enemies.</p>"
var nobrew=true

function containaccessories(){
    
}
//wall
    function showwall(){
        $(".wall").remove();

        for(var i =1;i<70;i++){
            if($('#space' + i).data("fortify")===true){
                $('#space' + i).append("<img class='wall' style='margin-top:-40px' src='Pictures/Wall.gif' />");
            }
        }



    }

    function setlocationstuff(){
        $("#space70").data("castle",true).data("move1",'4').data("move2",'').data("move3",'').data("move4",'').data("left",190).data("top",430).data("location",70);
        $("#space1").data("move1",'2').data("move2",'').data("move3",'').data("move4",'').data("left",210).data("top",140).data("location",1).data("fortify",false);
        $("#space2").data("move1",'3').data("move2",'1').data("move3",'').data("move4",'').data("left",210).data("top",220).data("location",2).data("fortify",false);
        $("#space3").data("move1",'4').data("move2",'2').data("move3",'').data("move4",'').data("left",210).data("top",300).data("location",3).data("fortify",false);
        $("#space4").data("move1",'70').data("move2",'3').data("move3",'').data("move4",'').data("left",210).data("top",380).data("location",4).data("fortify",false);
    }

function assignlocations() {

}

function newunit(){
    going=true;
    var tempname;
    while(going===true){
        going=false;
        var temp=Math.floor((Math.random() * number_of_units) + 1);

        switch(temp){
            case 1:
                tempclass="Mage";
                tempname="Sandra";
                break;
            case 2:
                tempclass="Soldier";
                tempname="Edgar";
                break;
        }

        for(var j =0;j<index;j++){
            if(units[j].realtype==tempclass){
                going=true;
            }
            if(units[j].type=="Invisible" && tempclass=="Thief"){
                going=true;
            }
        }
    }//end of while
createsoldier(tempclass,tempname);
}



//special abilities
    function traincommands(e){
        if(summoning===true){

            $('.actions').append("<select class = 'options' id='alchemychoice' style='position: absolute; margin-left:260px; margin-top: 2px; width:110px;'><option value = 'Alchemy'></option></select>" +
            "<div class = 'actionbutton' style='position:absolute; margin-top:30px; margin-left:265px; width:100px' id = 'Use'>Summon</div>");

            if(angel===true && summoning===true){
                $('#alchemychoice').append(new Option("Summon Angel", 'Angel'));
            }
            if(demon===true && summoning===true){
                $('#alchemychoice').append(new Option("Summon Demon",'Demon'));
            }
            if(djinn===true && summoning===true){
                $('#alchemychoice').append(new Option("Summon Djinn",'Djinn'));
            }
            if(frostlord===true && summoning===true){
                $('#alchemychoice').append(new Option("Summon Frostlord",'Frostlord'));
            }
        }
        clickactionbuttons();
    }

function liberate(curloc){
        if($('#space' + curloc).data("istown")===true && $('#space' + curloc).data("conquered")===true){
            $('#space' + curloc).data('conquered',false);
            $('#space' + curloc + ' img').attr("src", "Pictures/Town.gif");
            if($('#space' + curloc).data('color')==="Red"){
                redtowns+=1;
                $("#TEXT").append("<p>A red town was liberated! " + redtowns + " red towns are now free!.</p>");
                if(redtowns>2 && redkingdom===false){
                    redkingdom=true;
                    $("#TEXT").append("<p>The red kingdom has started supporting you again. Get less than 3 towns again, and it will stop supporting you again.</p>");
                    $("#space14").empty();
                    $("#space14").append("<img class='plane' src='Pictures/Plane.gif' />")
                }
            }
            if($('#space' + curloc).data('color')==="Blue"){
                bluetowns+=1;
                $("#TEXT").append("<p>A blue town was liberated! " + bluetowns + " blue towns are now free!.</p>");
                if(bluetowns>2 && bluekingdom===false){
                    bluekingdom=true;
                    $("#TEXT").append("<p>The blue kingdom has started supporting you again. Get less than 3 towns again, and it will stop supporting you again.</p>");
                    $("#space39").empty();
                    $("#space39").append("<img class='plane' src='Pictures/Plane.gif' />")
                }
            }
            if($('#space' + curloc).data('color')==="Yellow"){
                yellowtowns+=1;
                $("#TEXT").append("<p>A yellow town was liberated! " + yellowtowns + " yellow towns are now free!.</p>");
                if(yellowtowns>2 && yellowkingdom===false){
                    yellowkingdom=true;
                    $("#TEXT").append("<p>The yellow kingdom has started supporting you again. Get less than 3 towns again, and it will stop supporting you again.</p>");
                    $("#space42").empty();
                    $("#space42").append("<img class='plane' src='Pictures/Plane.gif' />")
                }
            }
            if($('#space' + curloc).data('color')==="Green"){
                greentowns+=1;
                $("#TEXT").append("<p>A green town was liberated! " + greentowns + " green towns are now free!.</p>");
                if(greentowns>2 && greenkingdom===false){
                    greenkingdom=true;
                    $("#TEXT").append("<p>The green kingdom has started supporting you again. Get less than 3 towns again, and it will stop supporting you again.</p>");
                    $("#space58").empty();
                    $("#space58").append("<img class='plane' src='Pictures/Plane.gif' />")
                }
            }
        }
    }

 function tipmessage(index, e){
//        if(tipmessagearray[index]===true || hasloaded==true){
//            return;
//        }
//        tipmessagearray[index]=true;
//        $("#top").append("<div class='tipmessage' style='word-wrap:break-word; position: absolute; border: gold solid 5px; z-index:1; margin-left:100px; width:350px; height: 140px; background-color:gray'></div>");
//        $(".tipmessage").append("<p align='center' style='font-size: 15px; margin-left:5px; margin-right:5px; margin-top:0px'>" + e + "</p>");
//        setInterval(function(){
//            $(".tipmessage").addClass("removewindow");
//        },100)
    }


  function movebadguys(){

    }

    function createbadguys(){

    }

    function Enewgroup(index,location,experience,picture){
        var thisleft=0;
        var thistop=0;

        if(location===1){
            thisleft=$("#space1").css("left");
            thistop=$("#space1").css("top");
        }
        if(location===7){
            thisleft=$("#space7").css("left");;
            thistop=$("#space7").css("top");;
        }
        if(location===13){
            thisleft=$("#space13").css("left");;
            thistop=$("#space13").css("top");;
        }
        if(location===19){
            thisleft=$("#space19").css("left");;
            thistop=$("#space19").css("top");;
        }
        
        this.index=index;
        this.location=location;
        this.experience=experience;
        this.hasmoved=false;
        this.curleft=thisleft;
        this.curtop=thistop;
        this.picture=picture;
        $('#background').append('<img src="../Pictures/Enemies/' + picture + '.gif" class="Eicon" id="EM' + Egroupindex +'" style="left: ' + thisleft + '; top:' + thistop + '" />');
        Egroupindex+=1;
    }

//towns and castles
function set_area_background(i){
        var backgroundpic="";
                        backgroundpic="../Pictures/backgroundpics/desertbackground.png";
    return backgroundpic;
}


function indiv_newday(){
   if(hasmoved==1){
       hasmoved+=1;
           $(".instructionText").html("Excellent. Your group can move again. Move it up once more, and then, when it is next to Teresa's group, right-click Teresa's group.")
   }
}
function indiv_gotocapitol(){
      $("#TEXT").empty().append('<div class="gotobutton" id = "gotobarracks"><p>BARRACKS</p></div>');
    $(".instructionText").html("Good, the nexus's menu is now on the right. Currently, it only shows 'Barracks'. Click 'Barracks' to see your units.")
}
function indiv_gotobarracks(){
        $(".instructionText").html("Now you can see all your units. Currently, you only have those two. Doubleclick each of them to load them to the top, and then click 'Create Group'.")
}
function indiv_groupinfo(){
    if(hasmoved==0){
            $(".instructionText").html("That group is now selected. You can see who's in that group on the right. Right-click the yellow box that just popped up above the Nexus. That box shows where this group can move.")
    }
}
function indiv_creategroup(){
    $(".instructionText").html("Great Job. You can now see that group was placed on the Nexus. It's the blue box with an 'S' on it. Click on it.")
}
var hasmoved=0;
function indiv_moveally(){
        if(hasmoved==0){
            hasmoved+=1;
            $(".instructionText").html("Good, now see that the group turned grey. That means it moved this turn. Click the 'Pass' button at the bottom to pass the turn.")
        }
}
function indiv_exchangeunits(){
        $(".instructionText").html("Notice that both groups are shown on the right. Click on Teresa, and then right-click the empty space in the other group. If you right-click on another unit, it will switch the units.")
}
function indiv_exchange(){
            $(".instructionText").html("Ok, now they should all be in one group. Now move the group up next to the Goblin if it isn't already. When Right beneath the Goblin, and with the group selected, right-click it. You may need to pass turn if your group is still grey.")
}
var battleloc = 0;
function indiv_startcombat(){
    setTimeout(function(){
            $("#TEXT").html("<p>You units are battling the Goblin! Click on one of your units.</p>")
    },500)
}
function indiv_clickUnit(){
        if(battleloc==0){
                $("#TEXT").html("<p>Good, notice that it now has a yellow background. That means it is selected.</p> <p>Now hover your arrow directly above it or to the side. That will show a yellow box. That is a space in which the unit can move. Right-click that space.</p>")
        }
        if(battleloc==1){
                $("#TEXT").html("<p>Click on the green Archer, and then right-click the goblin.</p>")
        }

}
function indiv_moveunit(){
    if(battleloc==0){
            battleloc+=1
        $("#TEXT").html("<p>Great job! You can move your other units the same way, but they are still quite far from that goblin.</p><p>Sandra's fire can only hit enemies up to two spaces away, and Edgar has to be right next to them. However, Teresa, the archer, can hit anyone.</p><p> Click on her, and then right-click the goblin.</p>")
    }
    if(battleloc==2){
        $("#TEXT").html("<p>Move to kill the goblin. After you've move and did all the action you want to do, press the 'Passturn' button at the bottom.</p>")
    }

}
function indiv_archershoot(){
    if(battleloc==1){
            battleloc+=1
            $("#TEXT").html("<p>Awesome, you hit him! Notice that she used her default 'Normal' Arrow shown in the orange box below the field. When she levels up, she can use special arrows. When she does, click that orange box to select her other abilities.<p/> <p>Your units can only do one action and one move a turn. Press the 'PassTurn' button to refresh your units and allow your enemies a turn.</p>")
    }

}
function indiv_passTurn(){
    battleloc+=1
                    $("#TEXT").html("<p>Here he comes! Now that you know how to move and attack, kill that goblin!.</p>")
}

function indiv_youwin(){
    console.log("check")
     if(Egroups[1].location<0){
        winbattle('../03/beforetrain.html');
    }
}

function levelresearch(){
    
}
function enemyconquer(){
    
}

  function tempnewgroup(e){
        this.index=e;
        this.location=2;
        this.hasmoved=false;
        this.active=true;
        this.curleft=310;
        this.curtop=280;

        this.slot1=-1;
        this.slot2=-1;
        this.slot3=-1;
        var leftpos = Number($("#space2").css("left").replace("px","")) + 13;
        var toppos = Number($("#space2").css("top").replace("px","")) + 10;
        $('#background').append('<img src="../Pictures/soldiericon.png" class="icon" id="M' + groupindex +'" style="left: ' + (leftpos-15) +'px; top:' + (toppos-10) + 'px" />');
        groupindex+=1;
    }

$(window).load(function(){
     
    changesong("01/NBattle.mp3")
    localStorage.setItem("level", "2");
    if(parseInt( localStorage.getItem("diff"))>0){
        difflevel=parseInt(localStorage.getItem("diff"));
    }
          Eunits[newEindex()]=new Goblin(curEindex, 1,difflevel);
        Egroups[Egroupindex]=new Enewgroup(1,1,200,'goblin');

    units[0]= new Archer(0,"Archer1");
    groups[groupindex]= new tempnewgroup(groupindex);
    units[0].group=1;
    units[0].slot=1
    
    clickEicon();
    Egroupinfo();
    
      //exchange
            $(".icon").mousedown(function(e) {
                if(e.button === 2 ) {
                                    
                    var temp = $(this).attr('id').replace("M","");
                    exchangeunits(temp);
                }
            });
    
    setCookie("level","1");
});