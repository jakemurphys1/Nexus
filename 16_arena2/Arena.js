   var difflevel=3;

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

var noheal=true;
var noescape=true;
var missiondetails = "<p>Create groups and move them to defeat each of the enemy groups. Note that they will be moving when you click 'Pass'.</p><p>Once all the enemy groups are defeated, you win.</p><p>You still cannot use the 'heal' ability in the barracks, but you can brew potions that can heal, revive, or boost your troops.</p>"

var number_of_units=8;

function containaccessories(){
    
}


    function setlocationstuff(){
        $("#space70").data("castle",true).data("move1",'12').data("move2",'29').data("move3",'18').data("move4",'').data("left",275).data("top",480).data("location",70);
        
        $("#space1").data("move1",'2').data("move2",'7').data("move3",'').data("move4",'').data("left",130).data("top",100).data("location",1).data("fortify",false);
        $("#space2").data("move1",'3').data("move2",'1').data("move3",'8').data("move4",'').data("left",130).data("top",180).data("location",2).data("fortify",false);
        $("#space3").data("move1",'4').data("move2",'2').data("move3",'9').data("move4",'').data("left",130).data("top",260).data("location",3).data("fortify",false);
        $("#space4").data("move1",'5').data("move2",'3').data("move3",'10').data("move4",'').data("left",130).data("top",340).data("location",4).data("fortify",false);
        $("#space5").data("move1",'6').data("move2",'4').data("move3",'11').data("move4",'').data("left",130).data("top",420).data("location",5).data("fortify",false);
        $("#space6").data("move1",'5').data("move2",'12').data("move3",'').data("move4",'').data("left",130).data("top",500).data("location",6).data("fortify",false);
        $("#space7").data("move1",'8').data("move2",'1').data("move3",'25').data("move4",'').data("left",215).data("top",100).data("location",7).data("fortify",false);
        $("#space8").data("move1",'9').data("move2",'7').data("move3",'2').data("move4",'26').data("left",215).data("top",180).data("location",8).data("fortify",false);
        $("#space9").data("move1",'10').data("move2",'8').data("move3",'3').data("move4",'27').data("left",215).data("top",260).data("location",9).data("fortify",false);
        $("#space10").data("move1",'11').data("move2",'9').data("move3",'4').data("move4",'28').data("left",215).data("top",340).data("location",10).data("fortify",false);

        $("#space11").data("move1",'12').data("move2",'10').data("move3",'5').data("move4",'29').data("left",215).data("top",420).data("location",11).data("fortify",false);
        $("#space12").data("move1",'6').data("move2",'11').data("move3",'70').data("move4",'').data("left",215).data("top",500).data("location",12).data("fortify",false);
        $("#space13").data("move1",'14').data("move2",'19').data("move3",'25').data("move4",'').data("left",380).data("top",100).data("location",13).data("fortify",false);
        $("#space14").data("move1",'15').data("move2",'13').data("move3",'20').data("move4",'26').data("left",380).data("top",180).data("location",14).data("fortify",false).data("castle",true).data("color",'red');
        $("#space15").data("move1",'14').data("move2",'16').data("move3",'21').data("move4",'27').data("left",380).data("top",260).data("location",15).data("fortify",false);
        $("#space16").data("move1",'15').data("move2",'17').data("move3",'22').data("move4",'28').data("left",380).data("top",340).data("location",16).data("fortify",false);
        $("#space17").data("move1",'16').data("move2",'18').data("move3",'29').data("move4",'23').data("left",380).data("top",420).data("location",17).data("fortify",false);
        $("#space18").data("move1",'70').data("move2",'24').data("move3",'17').data("move4",'').data("left",380).data("top",500).data("location",18).data("fortify",false);
        $("#space19").data("move1",'20').data("move2",'13').data("move3",'').data("move4",'').data("left",455).data("top",100).data("location",19).data("fortify",false);
        $("#space20").data("move1",'21').data("move2",'19').data("move3",'14').data("move4",'').data("left",455).data("top",180).data("location",20).data("fortify",false);
        $("#space21").data("move1",'22').data("move2",'20').data("move3",'15').data("move4",'').data("left",455).data("top",260).data("location",21).data("fortify",false);
        $("#space22").data("move1",'23').data("move2",'21').data("move3",'16').data("move4",'').data("left",455).data("top",340).data("location",22).data("fortify",false);
        $("#space23").data("move1",'24').data("move2",'22').data("move3",'17').data("move4",'').data("left",455).data("top",420).data("location",23).data("fortify",false);
        $("#space24").data("move1",'23').data("move2",'18').data("move3",'18').data("move4",'').data("left",455).data("top",500).data("location",24).data("fortify",false);
        $("#space25").data("move1",'7').data("move2",'13').data("move3",'26').data("move4",'').data("left",295).data("top",100).data("location",25).data("fortify",false);
        $("#space26").data("move1",'25').data("move2",'27').data("move3",'14').data("move4",'8').data("left",295).data("top",180).data("location",26).data("fortify",false);
        $("#space27").data("move1",'9').data("move2",'26').data("move3",'15').data("move4",'28').data("left",295).data("top",260).data("location",27).data("fortify",false);
        $("#space28").data("move1",'10').data("move2",'27').data("move3",'16').data("move4",'29').data("left",295).data("top",340).data("location",28).data("fortify",false);
        $("#space29").data("move1",'70').data("move2",'11').data("move3",'28').data("move4",'17').data("left",295).data("top",420).data("location",29).data("fortify",false);
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
                tempclass="Guard";
                  tempname="Guard";
                break;
            case 3:
                tempclass="Wizard";
                  tempname="Wizard2";
                break;
            case 4:
                tempclass="Templar";
                  tempname="Templar2";
                break;
            case 5:
                tempclass="Soldier";
                  tempname="Edgar";
                break;
            case 6:
                tempclass="Thief";
                  tempname="Thief1";
                break;
                  case 7:
                tempclass="Archer";
                  tempname="Archer4";
                break;
                   case 8:
                tempclass="Enchantress";
                  tempname="Enchantress";
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

//looting
   function lootenemyfunction(index){
        var rand =  Math.floor((Math.random() * 5) + 1);
        if(index!=-1){
            //enemy blood
            if(Eunits[index].type==="Goblin"){
                  if(rand>=3){
                return 6;
                   }
            }
            if(Eunits[index].type=="Vampire"){
                if(rand>2){
                    return 6;
                }
            }
            if(Eunits[index].type=="Spider"){
                if(rand>2){
                    return 8;
                }
            }
            if(Eunits[index].type=="Shaman"){
                if(rand>2){
                    return 8;
                }
            }
            if(Eunits[index].type=="Necromancer"){
                if(rand>2){
                    return 8;
                }
            }
            if(Eunits[index].type=="Beekeeper"){
                if(rand>2){
                    return 8;
                }
            }

            //bone marrow
            if(Eunits[index].type=="Warrior"){
                if(rand>2){
                    return 7;
                }
            }
            if(Eunits[index].type=="Spitter"){
                if(rand>2){
                    return 7;
                }
            }
            if(Eunits[index].type=="Assassin"){
                if(rand>2){
                    return 7;
                }
            }
            if(Eunits[index].type=="Gremlin"){
                if(rand>2){
                    return 7;
                }
            }
            if(Eunits[index].type=="Waterwraith"){
                if(rand>2){
                    return 7;
                }
            }
            //essence
            if(Eunits[index].type=="Ice Elemental"){
                if(rand>2){
                    return 10;
                }
            }
            if(Eunits[index].type=="Fire Elemental"){
                if(rand>2){
                    return 10;
                }
            }
            if(Eunits[index].type=="Lightning Elemental"){
                if(rand>2){
                    return 10;
                }
            }
            if(Eunits[index].type=="Wisp"){
                if(rand>2){
                    return 10;
                }
            }
            if(Eunits[index].type=="Flamewraith"){
                if(rand>2){
                    return 10;
                }
            }
            //raw meat
            if(Eunits[index].type=="Werewolf"){
                if(rand>2){
                    return 8;
                }
            }
            if(Eunits[index].type=="Wolf"){
                if(rand>2){
                    return 8;
                }
            }
            if(Eunits[index].type=="Bear"){
                if(rand>2){
                    return 8;
                }
            }
            if(Eunits[index].type=="Sparrow"){
                if(rand>2){
                    return 8;
                }
            }
            if(Eunits[index].type=="Frostwraith"){
                if(rand>2){
                    return 8;
                }
            }
            //Slime
            if(Eunits[index].type=="Clunker"){
                if(rand>2){
                    return 9;
                }
            }
            if(Eunits[index].type=="Cannon"){
                if(rand>2){
                    return 9;
                }
            }
            if(Eunits[index].type=="Magnet"){
                if(rand>2){
                    return 9;
                }
            }
            if(Eunits[index].type=="Sounddepressor"){
                if(rand>2){
                    return 9;
                }
            }
            if(Eunits[index].type=="Hellhound"){
                if(rand>2){
                    return 9;
                }
            }


            if(Eunits[index].type=="Angel"){
return "Angel"
            }
            if(Eunits[index].type=="Demon"){
                return "Demon"
            }
            if(Eunits[index].type=="Frostlord"){
                return "Frostlord"
            }
            if(Eunits[index].type=="Djinn"){
                return "Djinn"
            }
        }
        return -1;
        // accessory[1]=new Accessory("Flower");
        //  accessory[2]=new Accessory("Mushroom");
        //  accessory[3]=new Accessory("Flint");
        //  accessory[4]=new Accessory("Pine_Needles");
        //  accessory[5]=new Accessory("Wheat");
        //  accessory[6]=new Accessory("Enemy_Blood");
        //  accessory[7]=new Accessory("Bone_Marrow");
        //  accessory[8]=new Accessory("Raw_Meat");
        //  accessory[9]=new Accessory("Slime");
        //  accessory[10]=new Accessory("Essence");
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
                if (Egroups[i].location === 1 && Egroups[i].hasmoved === false) {
                      if (direction === 1) {
                          if(nomove(2) === false){
                              thistemp = 2;
                              Egroups[i].hasmoved = true;
                          }
                    } else {
                        if(nomove(8)==false){
                           thistemp = 8;
                            Egroups[i].hasmoved = true;
                        } else{
                            if(nomove(7)==false){
                                thistemp = 7;
                            Egroups[i].hasmoved = true;
                            }
                        }
                    }
                }
                if (Egroups[i].location === 2 && Egroups[i].hasmoved === false) {
                        if (direction === 1) {
                          if(nomove(8) === false){
                              thistemp = 8;
                              Egroups[i].hasmoved = true;
                          }
                    } else {
                        if(nomove(7)==false){
                           thistemp = 7;
                            Egroups[i].hasmoved = true;
                        } else{
                            if(nomove(1)==false){
                                thistemp = 1;
                            Egroups[i].hasmoved = true;
                            }
                        }
                    }
                }
                if (Egroups[i].location === 3 && Egroups[i].hasmoved === false) {
                      if (direction === 1) {
                          if(nomove(4) === false){
                              thistemp = 4;
                              Egroups[i].hasmoved = true;
                          }
                    } else {
                        if(nomove(10)==false){
                           thistemp = 10;
                            Egroups[i].hasmoved = true;
                        } else{
                            if(nomove(9)==false){
                                thistemp = 9;
                            Egroups[i].hasmoved = true;
                            }
                        }
                    }
                }
                if (Egroups[i].location === 4 && Egroups[i].hasmoved === false) {
                      if (direction === 1) {
                          if(nomove(10) === false){
                              thistemp = 10;
                              Egroups[i].hasmoved = true;
                          }
                    } else {
                        if(nomove(9)==false){
                           thistemp = 9;
                            Egroups[i].hasmoved = true;
                        } else{
                            if(nomove(3)==false){
                                thistemp = 3;
                            Egroups[i].hasmoved = true;
                            }
                        }
                    }
                }
                if (Egroups[i].location === 5 && Egroups[i].hasmoved === false) {
                        if (direction === 1) {
                          if(nomove(6) === false){
                              thistemp = 6;
                              Egroups[i].hasmoved = true;
                          }
                    } else {
                        if(nomove(12)==false){
                           thistemp = 12;
                            Egroups[i].hasmoved = true;
                        } else{
                            if(nomove(11)==false){
                                thistemp = 11;
                            Egroups[i].hasmoved = true;
                            }
                        }
                    }
                }
                if (Egroups[i].location === 6 && Egroups[i].hasmoved === false) {
                      if (direction === 1) {
                          if(nomove(12) === false){
                              thistemp = 12;
                              Egroups[i].hasmoved = true;
                          }
                    } else {
                        if(nomove(11)==false){
                           thistemp = 11;
                            Egroups[i].hasmoved = true;
                        } else{
                            if(nomove(5)==false){
                                thistemp = 5;
                            Egroups[i].hasmoved = true;
                            }
                        }
                    }
                }
                if (Egroups[i].location === 7 && Egroups[i].hasmoved === false) {
                       if (direction === 1) {
                          if(nomove(1) === false){
                              thistemp = 1;
                              Egroups[i].hasmoved = true;
                          }
                    } else {
                        if(nomove(2)==false){
                           thistemp = 2;
                            Egroups[i].hasmoved = true;
                        } else{
                            if(nomove(8)==false){
                                thistemp = 8;
                            Egroups[i].hasmoved = true;
                            }
                        }
                    }
                }
                if (Egroups[i].location === 8 && Egroups[i].hasmoved === false) {
                     if (direction === 1) {
                          if(nomove(7) === false){
                              thistemp = 7;
                              Egroups[i].hasmoved = true;
                          }
                    } else {
                        if(nomove(1)==false){
                           thistemp = 1; 
                            Egroups[i].hasmoved = true;
                        } else{
                            if(nomove(2)==false){
                                thistemp =2;
                            Egroups[i].hasmoved = true;
                            }
                        }
                    }
                }
                if (Egroups[i].location === 9 && Egroups[i].hasmoved === false) {
                       if (direction === 1) {
                          if(nomove(3) === false){
                              thistemp = 3;
                              Egroups[i].hasmoved = true;
                          }
                    } else {
                        if(nomove(4)==false){
                           thistemp = 4; 
                            Egroups[i].hasmoved = true;
                        } else{
                            if(nomove(10)==false){
                                thistemp = 10;
                            Egroups[i].hasmoved = true;
                            }
                        }
                    }
                }
                if (Egroups[i].location === 10 && Egroups[i].hasmoved === false) {
                     if (direction === 1) {
                          if(nomove(9) === false){
                              thistemp = 9;
                              Egroups[i].hasmoved = true;
                          }
                    } else {
                        if(nomove(3)==false){
                           thistemp = 3; 
                            Egroups[i].hasmoved = true;
                        } else{
                            if(nomove(4)==false){
                                thistemp = 4;
                            Egroups[i].hasmoved = true;
                            }
                        }
                    }
                }
                if (Egroups[i].location === 11 && Egroups[i].hasmoved === false) {
                        if (direction === 1) {
                          if(nomove(5) === false){
                              thistemp = 5;
                              Egroups[i].hasmoved = true;
                          }
                    } else {
                        if(nomove(6)==false){
                           thistemp = 6; 
                            Egroups[6].hasmoved = true;
                        }
                         else{
                            if(nomove(12)==false){
                                thistemp = 12;
                            Egroups[i].hasmoved = true;
                            }
                        }
                    }
                }
                if (Egroups[i].location === 12 && Egroups[i].hasmoved === false) {
                       if (direction === 1) {
                          if(nomove(11) === false){
                              thistemp = 11;
                              Egroups[i].hasmoved = true;
                          }
                    } else {
                        if(nomove(5)==false){
                           thistemp = 5; 
                            Egroups[i].hasmoved = true;
                        } else{
                            if(nomove(6)==false){
                                thistemp = 6;
                            Egroups[i].hasmoved = true;
                            }
                        }
                    }
                }
                if (Egroups[i].location === 13 && Egroups[i].hasmoved === false) {
                      if (direction === 1) {
                          if(nomove(14) === false){
                              thistemp = 14;
                              Egroups[i].hasmoved = true;
                          }
                    } else {
                        if(nomove(20)==false){
                           thistemp = 20; 
                            Egroups[i].hasmoved = true;
                        } else{
                            if(nomove(19)==false){
                                thistemp = 19;
                            Egroups[i].hasmoved = true;
                            }
                        }
                    }
                }
                if (Egroups[i].location === 14 && Egroups[i].hasmoved === false) {
                        if (direction === 1) {
                          if(nomove(20) === false){
                              thistemp = 20;
                              Egroups[i].hasmoved = true;
                          }
                    } else {
                        if(nomove(19)==false){
                           thistemp = 19; 
                            Egroups[i].hasmoved = true;
                        } else{
                            if(nomove(13)==false){
                                thistemp = 13;
                            Egroups[i].hasmoved = true;
                            }
                        }
                    }
                }
                if (Egroups[i].location === 15 && Egroups[i].hasmoved === false) {
                      if (direction === 1) {
                          if(nomove(16) === false){
                              thistemp = 16;
                              Egroups[i].hasmoved = true;
                          }
                    } else {
                        if(nomove(22)==false){
                           thistemp = 22; 
                            Egroups[i].hasmoved = true;
                        } else{
                            if(nomove(21)==false){
                                thistemp = 21;
                            Egroups[i].hasmoved = true;
                            }
                        }
                    }
                }
                if (Egroups[i].location === 16 && Egroups[i].hasmoved === false) {
                      if (direction === 1) {
                          if(nomove(22) === false){
                              thistemp = 22;
                              Egroups[i].hasmoved = true;
                          }
                    } else {
                        if(nomove(21)==false){
                           thistemp = 21; 
                            Egroups[i].hasmoved = true;
                        } else{
                            if(nomove(15)==false){
                                thistemp = 15;
                            Egroups[i].hasmoved = true;
                            }
                        }
                    }
                }
                if (Egroups[i].location === 17 && Egroups[i].hasmoved === false) {
                      if (direction === 1) {
                          if(nomove(18) === false){
                              thistemp = 18;
                              Egroups[i].hasmoved = true;
                          }
                    } else {
                        if(nomove(24)==false){
                           thistemp = 24; 
                            Egroups[i].hasmoved = true;
                        } else{
                            if(nomove(23)==false){
                                thistemp = 23;
                            Egroups[i].hasmoved = true;
                            }
                        }
                    }
                }
                if (Egroups[i].location === 18 && Egroups[i].hasmoved === false) {
                      if (direction === 1) {
                          if(nomove(24) === false){
                              thistemp = 24;
                              Egroups[i].hasmoved = true;
                          }
                    } else {
                        if(nomove(23)==false){
                           thistemp = 23; 
                            Egroups[i].hasmoved = true;
                        } else{
                            if(nomove(17)==false){
                                thistemp = 17;
                            Egroups[i].hasmoved = true;
                            }
                        }
                    }
                }
                if (Egroups[i].location === 19 && Egroups[i].hasmoved === false) {
                    if (direction === 1) {
                          if(nomove(13) === false){
                              thistemp = 13;
                              Egroups[i].hasmoved = true;
                          }
                    } else {
                        if(nomove(14)==false){
                           thistemp = 14; 
                            Egroups[i].hasmoved = true;
                        } else{
                            if(nomove(20)==false){
                                thistemp = 20;
                            Egroups[i].hasmoved = true;
                            }
                        }
                    }
                }
                if (Egroups[i].location === 20 && Egroups[i].hasmoved === false) {
                        if (direction === 1) {
                          if(nomove(19) === false){
                              thistemp = 19;
                              Egroups[i].hasmoved = true;
                          }
                    } else {
                        if(nomove(13)==false){
                           thistemp = 13; 
                            Egroups[i].hasmoved = true;
                        } else{
                            if(nomove(14)==false){
                                thistemp = 14;
                            Egroups[i].hasmoved = true;
                            }
                        }
                    }
                }
                if (Egroups[i].location === 21 && Egroups[i].hasmoved === false) {
                      if (direction === 1) {
                          if(nomove(15) === false){
                              thistemp = 15;
                              Egroups[i].hasmoved = true;
                          }
                    } else {
                        if(nomove(16)==false){
                           thistemp = 16; 
                            Egroups[i].hasmoved = true;
                        } else{
                            if(nomove(22)==false){
                                thistemp = 22;
                            Egroups[i].hasmoved = true;
                            }
                        }
                    }
                }
                if (Egroups[i].location === 22 && Egroups[i].hasmoved === false) {
                    if (direction === 1) {
                          if(nomove(21) === false){
                              thistemp = 21;
                              Egroups[i].hasmoved = true;
                          }
                    } else {
                        if(nomove(15)==false){
                           thistemp = 15; 
                            Egroups[i].hasmoved = true;
                        } else{
                            if(nomove(16)==false){
                                thistemp = 16;
                            Egroups[i].hasmoved = true;
                            }
                        }
                    }
                }
                if (Egroups[i].location === 23 && Egroups[i].hasmoved === false) {
                        if (direction === 1) {
                          if(nomove(17) === false){
                              thistemp = 17;
                              Egroups[i].hasmoved = true;
                          }
                    } else {
                        if(nomove(18)==false){
                           thistemp = 18; 
                            Egroups[i].hasmoved = true;
                        } else{
                            if(nomove(24)==false){
                                thistemp = 24;
                            Egroups[i].hasmoved = true;
                            }
                        }
                    }
                }
                if (Egroups[i].location === 24 && Egroups[i].hasmoved === false) {
                       if (direction === 1) {
                          if(nomove(23) === false){
                              thistemp = 23;
                              Egroups[i].hasmoved = true;
                          }
                    } else {
                        if(nomove(17)==false){
                           thistemp = 17; 
                            Egroups[i].hasmoved = true;
                        } else{
                            if(nomove(18)==false){
                                thistemp = 18;
                            Egroups[i].hasmoved = true;
                            }
                        }
                    }
                }
                    if (Egroups[i].location === 25 & nomove(26) === false && Egroups[i].hasmoved === false) {

                }
                    if (Egroups[i].location === 26 & nomove(27) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 27;
                    } else {
                        thistemp = 27;
                    }
                }
                    if (Egroups[i].location === 27 & nomove(26) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 26;
                    } else {
                        thistemp = 26;
                    }
                }
                      if (Egroups[i].location === 28 & nomove(29) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 29;
                    } else {
                        thistemp = 29;
                    }
                }
                          if (Egroups[i].location === 29 & nomove(28) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 28;
                    } else {
                        thistemp = 28;
                    }
                }
                    if(Egroups[i].hasmoved == true){
                        if(nomove(thistemp)){
                            continue;
                        }
                        if(i==6 && thistemp ==6){
                            continue;
                        }
                        Egroups[i].curleft = $("#space" + thistemp).data("left");
                        Egroups[i].curtop = $("#space" + thistemp).data("top");
                        Egroups[i].location = thistemp;
                        $('#EM' + i).animate({
                            left: $("#space" + thistemp).data("left") + 'px',
                            top: $("#space" + thistemp).data("top") + 'px'
                    })
                    }
                  
            }
                
        }
    }

    function createbadguys(){

    }

    function Enewgroup(index,location,experience,picture){
        var thisleft=0;
        var thistop=0;

            thisleft=$("#space" + location).css("left");
            thistop=$("#space" + location).css("top");
        
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
}
function indiv_gotocapitol(){
      $("#TEXT").empty().append('<div class="gotobutton" id = "gotobarracks"><p>BARRACKS</p></div><div class="gotobutton" id = "gotobrewery"><p>BREWERY</p></div>');
}
function indiv_youwin(){
    var alldefeated = true;
    for(var i=1;i<Egroupindex;i++){
        if(Egroups[i].location>0){
            alldefeated = false
        }
    }
    if(alldefeated){
        winbattle('../17/meeting.html')
    }
}

function levelresearch(){
    
}
function enemyconquer(){
    
}

$(window).load(function(){
    changesong("01/NBattle.mp3")
    saving("16")
        containaccessories();
    
    Eunits[newEindex()]=new ESoldier(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(1,23,500,'Soldier');
    
     Eunits[newEindex()]=new EWizard(curEindex, Egroupindex,difflevel);
        Eunits[newEindex()]=new EGuard(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(2,29,500,'Wizard');
    
    Eunits[newEindex()]=new ESoldier(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new ESoldier(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(3,18,500,'Soldier');
    
            Eunits[newEindex()]=new ESoldier(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new EGuard(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(4,10,800,'Soldier');
    
    Eunits[newEindex()]=new EArcher(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(5,5,800,'Archer');
    
    Eunits[newEindex()]=new EArcher(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new EArcher(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(6,21,800,'Archer');
    
                Eunits[newEindex()]=new ERouge(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new ERouge(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(7,16,800,'Rouge');
    
                    Eunits[newEindex()]=new EMage(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new EMage(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(8,3,800,'Mage');
    
                Eunits[newEindex()]=new EWizard(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new EWizard(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(9,12,800,'Wizard');
    
         Eunits[newEindex()]=new EMage(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new EGuard(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(10,27,800,'Mage');
    
           Eunits[newEindex()]=new EArcher(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new EGuard(curEindex, Egroupindex,difflevel);
      Eunits[newEindex()]=new ESoldier(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new ERouge(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(11,25,1000,'Guard');
    
               Eunits[newEindex()]=new ESoldier(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new ESoldier(curEindex, Egroupindex,difflevel);
      Eunits[newEindex()]=new ESoldier(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(12,8,1000,'Soldier');
    
                   Eunits[newEindex()]=new EMage(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new EMage(curEindex, Egroupindex,difflevel);
      Eunits[newEindex()]=new EMage(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(13,14,1000,'Mage');
    
                       Eunits[newEindex()]=new EWizard(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new EGuard(curEindex, Egroupindex,difflevel);
      Eunits[newEindex()]=new EWizard(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(14,19,1000,'Wizard');
    
                         Eunits[newEindex()]=new EArcher(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new EGuard(curEindex, Egroupindex,difflevel);
      Eunits[newEindex()]=new EArcher(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(15,1,1000,'Archer');



});