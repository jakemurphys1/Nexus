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
var number_of_units=8;

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
        $("#space70").data("castle",true).data("move1",'25').data("move2",'').data("move3",'').data("move4",'').data("left",275).data("top",480).data("location",70);
        $("#space1").data("move1",'2').data("move2",'').data("move3",'').data("move4",'').data("left",105).data("top",85).data("location",1).data("fortify",false);
        $("#space2").data("move1",'3').data("move2",'1').data("move3",'').data("move4",'').data("left",135).data("top",150).data("location",2).data("fortify",false);
        $("#space3").data("move1",'4').data("move2",'2').data("move3",'').data("move4",'').data("left",120).data("top",230).data("location",3).data("fortify",false);
        $("#space4").data("move1",'5').data("move2",'3').data("move3",'').data("move4",'').data("left",115).data("top",300).data("location",4).data("fortify",false);
        $("#space5").data("move1",'6').data("move2",'4').data("move3",'').data("move4",'').data("left",110).data("top",350).data("location",5).data("fortify",false);
        $("#space6").data("move1",'5').data("move2",'12').data("move3",'').data("move4",'').data("left",110).data("top",440).data("location",6).data("fortify",false);
        $("#space7").data("move1",'8').data("move2",'').data("move3",'').data("move4",'').data("left",205).data("top",85).data("location",7).data("fortify",false);
        $("#space8").data("move1",'9').data("move2",'7').data("move3",'').data("move4",'').data("left",235).data("top",150).data("location",8).data("fortify",false);
        $("#space9").data("move1",'10').data("move2",'8').data("move3",'').data("move4",'').data("left",220).data("top",230).data("location",9).data("fortify",false);
        $("#space10").data("move1",'11').data("move2",'9').data("move3",'').data("move4",'').data("left",215).data("top",300).data("location",10).data("fortify",false);

        $("#space11").data("move1",'12').data("move2",'10').data("move3",'').data("move4",'').data("left",210).data("top",350).data("location",11).data("fortify",false);
        $("#space12").data("move1",'6').data("move2",'11').data("move3",'25').data("move4",'').data("left",210).data("top",440).data("location",12).data("fortify",false);
        $("#space13").data("move1",'14').data("move2",'').data("move3",'').data("move4",'').data("left",355).data("top",85).data("location",13).data("fortify",false);
        $("#space14").data("move1",'15').data("move2",'13').data("move3",'').data("move4",'').data("left",385).data("top",150).data("location",14).data("fortify",false).data("castle",true).data("color",'red');
        $("#space15").data("move1",'14').data("move2",'16').data("move3",'').data("move4",'').data("left",370).data("top",230).data("location",15).data("fortify",false);
        $("#space16").data("move1",'15').data("move2",'17').data("move3",'12').data("move4",'').data("left",365).data("top",300).data("location",16).data("fortify",false);
        $("#space17").data("move1",'16').data("move2",'18').data("move3",'16').data("move4",'').data("left",360).data("top",350).data("location",17).data("fortify",false);
        $("#space18").data("move1",'25').data("move2",'24').data("move3",'17').data("move4",'').data("left",360).data("top",440).data("location",18).data("fortify",false);
        $("#space19").data("move1",'20').data("move2",'').data("move3",'').data("move4",'').data("left",445).data("top",85).data("location",19).data("fortify",false);
        $("#space20").data("move1",'21').data("move2",'19').data("move3",'').data("move4",'').data("left",470).data("top",150).data("location",20).data("fortify",false);
        $("#space21").data("move1",'22').data("move2",'20').data("move3",'').data("move4",'').data("left",460).data("top",230).data("location",21).data("fortify",false);
        $("#space22").data("move1",'23').data("move2",'21').data("move3",'').data("move4",'').data("left",455).data("top",300).data("location",22).data("fortify",false);
        $("#space23").data("move1",'24').data("move2",'22').data("move3",'').data("move4",'').data("left",450).data("top",350).data("location",23).data("fortify",false);
        $("#space24").data("move1",'23').data("move2",'18').data("move3",'').data("move4",'').data("left",450).data("top",440).data("location",24).data("fortify",false);
        $("#space25").data("move1",'70').data("move2",'12').data("move3",'18').data("move4",'').data("left",295).data("top",430).data("location",25).data("fortify",false);
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
                  tempname="Mage2";
                break;
            case 2:
                tempclass="Wizard";
                  tempname="Wizard2";
                break;
            case 3:
                tempclass="Archer";
                  tempname="Archer3";
                break;
            case 4:
                tempclass="Templar";
                  tempname="Templar2";
                break;
            case 5:
                tempclass="Soldier";
                  tempname="Soldier2";
                break;
            case 6:
                tempclass="Knight";
                  tempname="Knight2";
                break;
            case 7:
                tempclass="Rouge";
                  tempname="Rouge2";
                break;
            case 8:
                tempclass="Healer";
                  tempname="Healer2";
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
 
    }

var wall1 = 100;
var wall2 = 100;
var wall3 = 100;
var wall4 = 100;

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
                if (Egroups[i].location === 6 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    wall1-=25;
                    $("#wall1").css("width", wall1 + "%");
                               Sword.play()
                    if(wall1==0){
                        gameover();
                    }
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
                if (Egroups[i].location === 12 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                      wall2-=25;
                               $("#wall2").css("width", wall2 + "%");
                    Sword.play()
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
                if (Egroups[i].location === 18 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                      wall3-=25;
                         $("#wall3").css("width", wall3 + "%");
                               Sword.play()
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
                if (Egroups[i].location === 24 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    wall4-=25;
                           $("#wall4").css("width", wall4 + "%");
                               Sword.play()
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
        var baddielocation=Math.floor((Math.random() * 4) + 1);


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
        if (day<=10 && day>=1){
            switch(temp){
                case 3:
                case 4:
                case 5:
                    Eunits[newEindex()]=new Goblin(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,200,'goblin');
                    break;
                case 6:
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Goblin(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,300,'goblin');
                    break;
                case 7:
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Goblin(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Bat');
                    break;
                case 8:
                    Eunits[newEindex()]=new Goblin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Goblin(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'goblin');
                    break;
                case 9:
                    Eunits[newEindex()]=new Goblin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Goblin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Goblin(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'goblin');
                    break;
                case 10:
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Goblin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Fire Elemental');
                    break;
            }
        }
        if (day<20 && day>=10){
            switch(temp){
                case 3:
                    Eunits[newEindex()]=new Goblin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Goblin(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,200,'goblin');
                    break;
                case 4:
                    Eunits[newEindex()]=new Goblin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,300,'Fire Elemental');
                    break;
                case 5:
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Goblin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Fire Elemental');
                    break;
                case 6:
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Warrior');
                    break;
                case 7:
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Fire Elemental');
                    break;
                case 8:
                    Eunits[newEindex()]=new Goblin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Goblin(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Warrior');
                    break;
                case 9:
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Bat');
                    break;
                case 10:
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Spitter(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Warrior');
                    break;
            }
        }
        if (day<30 && day>=20){
            switch(temp){
                case 3:
                    Eunits[newEindex()]=new Spitter(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,200,'Spitter');
                    break;
                case 4:
                    Eunits[newEindex()]=new Spitter(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,300,'Spitter');
                    break;
                case 5:
                    Eunits[newEindex()]=new Spitter(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Spitter(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Spitter');
                    break;
                case 6:
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Fire Elemental');
                    break;
                case 7:
                    Eunits[newEindex()]=new Goblin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Goblin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Goblin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Goblin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Goblin(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Goblin');
                    break;
                case 8:
                    Eunits[newEindex()]=new Goblin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Goblin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Goblin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Goblin(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Goblin');
                    break;
                case 9:
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Warrior');
                    break;
                case 10:
                    Eunits[newEindex()]=new Zombie(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Necromancer(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Zombie(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Necromancer');
                    break;
            }
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

//towns and castles
function set_area_background(i){
        var backgroundpic="";
                        backgroundpic="../Pictures/backgroundpics/desertbackground.png";
    return backgroundpic;
}


function indiv_newday(){
           $('.heading').remove();
        $('#top').append("<h1 class = 'heading'>Turn: " + day + "/30</h1>");
    saving();
    if(day>30){
        winbattle("../13/beforecells.html")
    }
}
function indiv_gotocapitol(){
      $("#TEXT").empty().append('<div class="gotobutton" id = "gotobarracks"><p>BARRACKS</p></div><div class="gotobutton" id = "gotobrewery"><p>BREWERY</p></div>');
}


function levelresearch(){
    
}
function enemyconquer(){
    
}

$(window).load(function(){
    changesong("01/Battle.wav")
        containaccessories();
saving("12")
});