   difflevel=3;

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
noheal=false
var number_of_units=2;

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
        
        $("#space1").data("move1",'2').data("move2",'').data("move3",'').data("move4",'').data("left",275).data("top",85).data("location",1).data("fortify",false);
        $("#space2").data("move1",'3').data("move2",'1').data("move3",'').data("move4",'').data("left",275).data("top",150).data("location",2).data("fortify",false);
        $("#space3").data("move1",'4').data("move2",'2').data("move3",'').data("move4",'').data("left",275).data("top",230).data("location",3).data("fortify",false);
        $("#space4").data("move1",'5').data("move2",'3').data("move3",'').data("move4",'').data("left",275).data("top",300).data("location",4).data("fortify",false);
        $("#space5").data("move1",'4').data("move2",'6').data("move3",'').data("move4",'').data("left",275).data("top",350).data("location",5).data("fortify",false);
        $("#space6").data("move1",'5').data("move2",'').data("move3",'').data("move4",'').data("left",275).data("top",400).data("location",6);
    }

function assignlocations() {

}

function newunit(){

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
 
    }

  function movebadguys(){
        var direction =  Math.floor((Math.random() * 2) + 1);
        var thistemp="";
        function nomove(e){
            for (var i = 1;i<Egroupindex;i++){
                if(Egroups[i].location==undefined){
                    continue;
                }
                if (Egroups[i].location==e){
                    return true;
                }
            }
            return false
        }
        //moving

            for (var i = 1; i < Egroupindex; i++) {
                if(Egroups[i].location==undefined){
                    continue;
                }
                if(Egroups[i].location<0){
                    continue;
                }
                if ($('#space' + Egroups[i].location).data("fortify") === true) {
                    $('#space' + Egroups[i].location).data("fortify",false);
                } else {
                if (Egroups[i].location === 1 && nomove(2) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    thistemp = 2;
                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 2 & nomove(3) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 3;
                    } else {
                        thistemp = 3
                    }
                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 3 & nomove(4) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 4;
                    } else {
                        thistemp = 4
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 4 & nomove(5) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 5;
                    } else {
                        thistemp = 5
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 5 & nomove(6) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 6;
                    } else {
                        thistemp = 6
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 7 & nomove(8) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    console.log($("#space" + thistemp).data("left"))
                    if (direction === 1) {
                        thistemp = 8;
                    } else {
                        thistemp = 8
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 8 & nomove(9) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 9;
                    } else {
                        thistemp = 9
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 9 & nomove(10) === false & nomove(13) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 10;
                    } else {
                        thistemp = 10;
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 10 & nomove(11) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 11;
                    } else {
                        thistemp =11;
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 11 & nomove(12) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    thistemp = 12;
                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 12 & nomove(9) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                      wall2-=25;
                               $("#wall2").css("width", wall2 + "%");
                      if(wall2==0){
                        gameover();
                    }
                }
                if (Egroups[i].location === 13 & nomove(14) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 14;
                    } else {
                        thistemp = 14
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 14 & nomove(15) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 15;
                    } else {
                        thistemp = 15
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 15 & nomove(16) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 16;
                    } else {
                        thistemp = 16
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 16 & nomove(17) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 17;
                    } else {
                        thistemp = 17
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 17 & nomove(18) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 18;
                    } else {
                        thistemp = 18;
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 18 & nomove(20) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                      wall3-=25;
                         $("#wall3").css("width", wall3 + "%");
                      if(wall3==0){
                        gameover();
                    }
                }
                if (Egroups[i].location === 19 & nomove(20) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 20;
                    } else {
                        thistemp = 20
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 20 & nomove(21) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 21;
                    } else {
                        thistemp = 21
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 21 & nomove(22) === false & nomove(27) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 22;
                    } else {
                        thistemp = 22
                    }
                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 22 & nomove(23) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 23;
                    } else {
                        thistemp = 23;
                    }
                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 23 & nomove(24) === false & nomove(25) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 24;
                    } else {
                        thistemp = 24
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 24 & nomove(23) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    wall4-=25;
                           $("#wall4").css("width", wall4 + "%");
                      if(wall4==0){
                        gameover();
                    }
                }
                    Egroups[i].curleft = $("#space" + thistemp).data("left");
                    Egroups[i].curtop = $("#space" + thistemp).data("top");
            }
        }
        showwall();
    }

    function createbadguys(){
        //choose badguy
        var temp = Math.floor((Math.random() * 10) + 1);
        //choose starting location
        var baddielocation=1;


        switch(baddielocation){
            case 1:
                baddielocation=1;
                break;
            case 2:
                baddielocation=7;
                break;
            case 3:
                baddielocation=13;
                break;
            case 4:
                baddielocation=19;
                break;
        }
            switch(temp){
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    Eunits[newEindex()]=new ESoldier(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,200,'Soldier');
                    break;
                case 6:
                    Eunits[newEindex()]=new ESoldier(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new ESoldier(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,300,'Soldier');
                    break;
                case 7:
                    Eunits[newEindex()]=new EWizard(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new EGuard(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Wizard');
                    break;
                case 8:
                    Eunits[newEindex()]=new EMage(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new EMage(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Mage');
                    break;
                case 9:
                    Eunits[newEindex()]=new ERouge(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new ERouge(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new ERouge(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Rouge');
                    break;
                case 10:
                    Eunits[newEindex()]=new EArcher(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new EGuard(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new EArcher(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Archer');
                    break;
            }
        
        clickEicon();
        Egroupinfo();
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
function indiv_alldead(){
    $("#backgroundpic").fadeOut();
    setTimeout(function(){
        window.location.href = '../37/dead.html'
    },2000)
    
}
//towns and castles
function set_area_background(i){
        var backgroundpic="";
                        backgroundpic="../Pictures/backgroundpics/beachbackground.png";
    return backgroundpic;
}


function indiv_newday(){
}
function indiv_gotocapitol(){
      $("#TEXT").empty().append('<div class="gotobutton" id = "gotobarracks"><p>BARRACKS</p></div><div class="gotobutton" id = "gotobrewery"><p>BREWERY</p></div>');
}


function levelresearch(){
    
}
function enemyconquer(){
    
}
  function tempnewgroup(e,location){
        this.index=e;
        this.location=location;
        
        this.hasmoved=false;
        this.active=true;
        this.curleft=310;
        this.curtop=280;

        this.slot1=-1;
        this.slot2=-1;
        this.slot3=-1;
      
        var leftpos = Number($("#space" + location).css("left").replace("px",""));
        var toppos = Number($("#space" + location).css("top").replace("px",""));
        $('#background').append('<img src="../Pictures/soldiericon.png" class="icon" id="M' + groupindex +'" style="left: ' + (leftpos) +'px; top:' + (toppos) + 'px" />');
        groupindex+=1;
    
    
     groupinfo();
    }

    var beach = new Audio();
        beach.src = "../sounds/beach.mp3";
        beach.volume=.3;

$(window).load(function(){
    beach.play()
    saving("36")
    setInterval(function(){
        beach.play()
    },18000)
        containaccessories();
    
    units[0]= new Guard(0,"Guard-C");
    units[1]= new Archer(1,"Archer4");
    groups[groupindex]= new tempnewgroup(groupindex,6);
    units[0].group=1;
    units[0].slot=1
    units[1].group=1;
    units[1].slot=2
    
    groupinfo();
});