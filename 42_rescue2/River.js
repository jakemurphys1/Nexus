

    var allynum=0;
var tempclass;
var missiondetails = "<p>Enemies will continously rush towards the nexus. If any reach it, it's gameover.</p><p>Places group that only contain one member onto the raft. The raft will slowly move across. Use the members you send across to wipe out the enemies on that side.</p><p>If any civilians die, it's gameover. Once you have all four civilians on the other side and all the enemies on that side have been defeated, you win.</p>"



var number_of_units=13;

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
        $("#space70").data("castle",true).data("move1",'14').data("move2",'12').data("move3",'71').data("move4",'').data("left",340).data("top",290).data("location",70);
        $("#space71").data("castle",true).data("move1",'70').data("move2",'').data("move3",'').data("move4",'').data("left",390).data("top",300).data("location",71);
        
        $("#space1").data("move1",'2').data("move2",'').data("move3",'').data("move4",'').data("left",130).data("top",85).data("location",1).data("fortify",false);
        $("#space2").data("move1",'3').data("move2",'1').data("move3",'').data("move4",'').data("left",130).data("top",150).data("location",2).data("fortify",false);
        $("#space3").data("move1",'4').data("move2",'2').data("move3",'').data("move4",'').data("left",130).data("top",210).data("location",3).data("fortify",false);
        $("#space4").data("move1",'5').data("move2",'3').data("move3",'6').data("move4",'').data("left",130).data("top",280).data("location",4).data("fortify",false);
        $("#space5").data("move1",'4').data("move2",'').data("move3",'').data("move4",'').data("left",80).data("top",300).data("location",5).data("fortify",false);
        $("#space6").data("move1",'13').data("move2",'4').data("move3",'').data("move4",'').data("left",180).data("top",300).data("location",6).data("fortify",false);
        $("#space7").data("move1",'8').data("move2",'').data("move3",'').data("move4",'').data("left",80).data("top",450).data("location",7).data("fortify",false);
        $("#space8").data("move1",'9').data("move2",'7').data("move3",'').data("move4",'').data("left",150).data("top",450).data("location",8).data("fortify",false);
        $("#space9").data("move1",'10').data("move2",'8').data("move3",'').data("move4",'').data("left",220).data("top",450).data("location",9).data("fortify",false);
        $("#space10").data("move1",'11').data("move2",'9').data("move3",'').data("move4",'').data("left",290).data("top",450).data("location",10).data("fortify",false);

        $("#space11").data("move1",'12').data("move2",'10').data("move3",'').data("move4",'').data("left",360).data("top",450).data("location",11).data("fortify",false);
        $("#space12").data("move1",'70').data("move2",'11').data("move3",'').data("move4",'').data("left",360).data("top",390).data("location",12).data("fortify",false);
        $("#space13").data("move1",'14').data("move2",'6').data("move3",'').data("move4",'').data("left",240).data("top",300).data("location",13).data("fortify",false);
        $("#space14").data("move1",'70').data("move2",'13').data("move3",'').data("move4",'').data("left",300).data("top",300).data("location",14).data("fortify",false);

        $("#space19").data("move1",'20').data("move2",'').data("move3",'').data("move4",'').data("left",510).data("top",90).data("location",19).data("fortify",false);
        $("#space20").data("move1",'21').data("move2",'19').data("move3",'').data("move4",'').data("left",510).data("top",160).data("location",20).data("fortify",false);
        $("#space21").data("move1",'22').data("move2",'20').data("move3",'').data("move4",'').data("left",510).data("top",230).data("location",21).data("fortify",false);
        $("#space22").data("move1",'23').data("move2",'21').data("move3",'').data("move4",'').data("left",510).data("top",300).data("location",22).data("fortify",false);
        $("#space23").data("move1",'24').data("move2",'22').data("move3",'').data("move4",'').data("left",510).data("top",370).data("location",23).data("fortify",false);
        $("#space24").data("move1",'23').data("move2",'25').data("move3",'').data("move4",'').data("left",510).data("top",440).data("location",24).data("fortify",false);
        $("#space25").data("move1",'24').data("move2",'').data("move3",'').data("move4",'').data("left",510).data("top",510).data("location",25).data("fortify",false);
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
                   tempname="Sandra"
                break;
            case 2:
                tempclass="Guard";
                   tempname="Guard"
                break;
            case 3:
                tempclass="Archer";
                   tempname="Archer1"
                break;
            case 4:
                tempclass="Soldier";
                   tempname="Soldier2"
                break;
            case 5:
                tempclass="Enchantress";
                   tempname="Enchantress";
                break;
            case 6:
                tempclass="Rouge";
                   tempname="Rouge1"
                break;
            case 7:
                tempclass="Knight";
                   tempname="Knight"
                break;
            case 8:
                tempclass="Thief";
                   tempname="Thief1"
                break;
            case 9:
                tempclass="Healer";
                   tempname="Healer1"
                break;
            case 10:
                tempclass="Templar";
                   tempname="Templar1"
                break;
            case 11:
                tempclass="Sorcerer";
                   tempname="Sorcerer";
                break;
            case 12:
                tempclass="Wizard";
                   tempname="Wizard1"
                break;
            case 13:
                tempclass="Mimic";
                   tempname="Mimic"
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
                if (Egroups[i].location === 4 & nomove(6) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 6;
                    } else {
                        thistemp = 6;
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 5 & nomove(4) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 4;
                    } else {
                        thistemp = 4;
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 6 & nomove(13) === false && Egroups[i].hasmoved === false) {
                       Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 13;
                    } else {
                        thistemp = 13;
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
                        thistemp = 8;
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
                        thistemp = 9;
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 9 & nomove(10) === false && Egroups[i].hasmoved === false) {
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
                    thistemp = 70;
                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 13 & nomove(14) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 14;
                    } else {
                        thistemp = 14;
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 14 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 70;
                    } else {
                        thistemp = 70;
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
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
        var baddielocation=Math.floor((Math.random() * 3) + 1);


        switch(baddielocation){
            case 1:
                baddielocation=1;
                break;
            case 2:
                baddielocation=5;
                break;
            case 3:
                baddielocation=7;
                break;
        }
        if (day<10 && day>=1){
            switch(temp){
                case 1:
                case 2:
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Bat');
                    break;
                case 3:
                case 4:
                case 5:
                    Eunits[newEindex()]=new Werewolf(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'werewolf');
                    break;
                case 6:
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Fire Elemental');
                    break;
                case 7:
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Gremlin');
                    break;
                case 8:
                    Eunits[newEindex()]=new IceElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new IceElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Ice Elemental');
                    break;
                case 9:
                    Eunits[newEindex()]=new Frostlord(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,700,'Frostlord');
                    break;
                case 10:
                    Eunits[newEindex()]=new Vampire(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Vampire(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,700,'vampire');
                    break;
            }
        }
        if (day<20 && day>=10){
            switch(temp){
                case 1:
                case 2:
                    Eunits[newEindex()]=new Werewolf(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'werewolf');
                    break;
                case 3:
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'bat');
                    break;
                case 4:
                    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Waterwraith(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,700,'waterwraith');
                    break;
                case 5:
                    Eunits[newEindex()]=new Hellhound(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Hellhound(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'hellhound');
                    break;
                case 6:
                    Eunits[newEindex()]=new Vacuum(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Sounddepressor(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Sounddepressor');
                    break;
                case 7:
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,700,'warrior');
                    break;
                case 8:
                    Eunits[newEindex()]=new Frostwraith(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'frostwraith');
                    break;
                case 9:
                    Eunits[newEindex()]=new Angel(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,800,'Angel');
                    break;
                case 10:
                    Eunits[newEindex()]=new LightningElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new LightningElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new LightningElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Lightning Elemental');
                    break;
            }
        }
        if (day<30 && day>=20){
            switch(temp){
                case 1:
                case 2:
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Vampire(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'vampire');
                    break;
                case 3:
                    Eunits[newEindex()]=new Spitter(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Spitter(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Spitter');
                    break;
                case 4:
                    Eunits[newEindex()]=new IceElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Frostwraith(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,700,'frostwraith');
                    break;
                case 5:
                    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Waterwraith(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,700,'waterwraith');
                    break;
                case 6:
                    Eunits[newEindex()]=new Werewolf(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Cannon(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Cannon');
                    break;
                case 7:
                    Eunits[newEindex()]=new Flamewraith(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Flamewraith(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,700,'flamewraith');
                    break;
                case 8:
                    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Vacuum(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Magnet(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Magnet');
                    break;
                case 9:
                    Eunits[newEindex()]=new Assassin(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Assassin');
                    break;
                case 10:
                    Eunits[newEindex()]=new Zombie(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Necromancer(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Zombie(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Necromancer');
                    break;
            }
        }
            if (day<50 && day>=30){
                switch(temp){
                    case 1:
                    case 2:
                        Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                        Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                        Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                        Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Bat');
                        break;
                    case 3:
                        Eunits[newEindex()]=new Vacuum(curEindex, Egroupindex,difflevel);
                        Eunits[newEindex()]=new Magnet(curEindex, Egroupindex,difflevel);
                        Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Vacuum');
                        break;
                    case 4:
                        Eunits[newEindex()]=new IceElemental(curEindex, Egroupindex,difflevel);
                        Eunits[newEindex()]=new Wisp(curEindex, Egroupindex,difflevel);
                        Eunits[newEindex()]=new IceElemental(curEindex, Egroupindex,difflevel);
                        Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,700,'Ice Elemental');
                        break;
                    case 5:
                        Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
                        Eunits[newEindex()]=new Waterwraith(curEindex, Egroupindex,difflevel);
                        Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
                        Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,700,'waterwraith');
                        break;
                    case 6:
                        Eunits[newEindex()]=new Werewolf(curEindex, Egroupindex,difflevel);
                        Eunits[newEindex()]=new Cannon(curEindex, Egroupindex,difflevel);
                        Eunits[newEindex()]=new Werewolf(curEindex, Egroupindex,difflevel);
                        Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,800,'Cannon');
                        break;
                    case 7:
                        Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                        Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                        Eunits[newEindex()]=new Vampire(curEindex, Egroupindex,difflevel);
                        Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                        Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                        Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,700,'Bat');
                        break;
                    case 8:
                        Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
                        Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                        Eunits[newEindex()]=new Magnet(curEindex, Egroupindex,difflevel);
                        Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Magnet');
                        break;
                    case 9:
                        Eunits[newEindex()]=new Assassin(curEindex, Egroupindex,difflevel);
                        Eunits[newEindex()]=new Assassin(curEindex, Egroupindex,difflevel);
                        Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,700,'Assassin');
                        break;
                    case 10:
                        Eunits[newEindex()]=new Bee(curEindex, Egroupindex,difflevel);
                        Eunits[newEindex()]=new Bee(curEindex, Egroupindex,difflevel);
                        Eunits[newEindex()]=new Beekeeper(curEindex, Egroupindex,difflevel);
                        Eunits[newEindex()]=new Bee(curEindex, Egroupindex,difflevel);
                        Eunits[newEindex()]=new Bee(curEindex, Egroupindex,difflevel);
                        Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Beekeeper');
                        break;
                }
            }
        

        
        clickEicon();
        Egroupinfo();
    }

    function Enewgroup(index,location,experience,picture){
        var thisleft=0;
        var thistop=0;
        
           thisleft=$("#space"+location).css("left");
            thistop=$("#space"+location).css("top");
        
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
                        backgroundpic="../Pictures/backgroundpics/grassbackground.png";
    return backgroundpic;
}


var raft=1;
function indiv_newday(){
           $('.heading').remove();
   
     var enemies=6;
    for(var i =1;i<7;i++){
        if(Egroups[i].location<0){
            enemies-=1;
        }
    }
        $('#top').append("<h1 class = 'heading'>Enemies: " + enemies + "/6   </h1><span class='heading' style='margin-left:20px'>Turn: " + day + "/50</span>");
    
     if($("#space71").data("filled")==0 && raft==2){
           var temp=$("#space71").offset();
            var templeft=temp.left+10;
        raft=1;
           $("#space71").data("move4",'')
           $("#space22").data("move4",'')
        
        $("#space71").animate({
              left: 780 - templeft + 'px',
        },500)
         $("#M" + $("#space71").data("filled")).animate({
              left: 780 - templeft + 'px',
        },500)
    }
    
     if($("#space71").data("filled")==0 && raft==3){
           var temp=$("#space71").offset();
            var templeft=temp.left-55;
        raft=2;
           $("#space71").data("move4",'')
           $("#space22").data("move4",'')
        
        $("#space71").animate({
              left: 780 - templeft + 'px',
        },500)
         $("#M" + $("#space71").data("filled")).animate({
              left: 780 - templeft + 'px',
        },500)
    }

     if($("#space71").data("filled") && $("#space71").data("filled")!=0 && raft==2){
           var temp=$("#space71").offset();
            var templeft=temp.left-55;
        raft=3;
           $("#space71").data("move4",'22');
           $("#space22").data("move4",'71');
        
        $("#space71").animate({
              left: 780 - templeft + 'px',
        },500)
         $("#M" + $("#space71").data("filled")).animate({
              left: 780 - templeft + 'px',
        },500)
    }
    
     if($("#space71").data("filled") && $("#space71").data("filled")!=0 && raft==1){
           var temp=$("#space71").offset();
            var templeft=temp.left+10;
        raft=2
        
        $("#space71").animate({
              left: 780 - templeft + 'px',
        },500)
         $("#M" + $("#space71").data("filled")).animate({
              left: 780 - templeft + 'px',
        },500)
    }
    
            var civsaved = 0;
        for(var i = 0;i<index;i++){
            if(units[i].group!=0){
                if(units[i].type=="Civilian" && parseInt(groups[units[i].group].location)>18 && parseInt(groups[units[i].group].location)!=70 && parseInt(groups[units[i].group].location)!=71){
                    civsaved+=1;
                }
            }
        }
    
        if(enemies==0 && civsaved == 3){
            winbattle("../43/beforeairship.html")
        }
    
    if(day==50){
        gameover()
    }
   
}
function indiv_gotocapitol(){
      $("#TEXT").empty().append('<div class="gotobutton" id = "gotobarracks"><p>BARRACKS</p></div><div class="gotobutton" id = "gotobrewery"><p>BREWERY</p></div>');
}

function levelresearch(){
    
}
function enemyconquer(){
    
}

function condition71(){
      var count=0;
    
            for(var i=0;i<index;i++){
                if(units[i].group==curgroupnum){
                    count+=1;
                }
            }
            if(count>1){
                message("Only one soldier can enter a raft at a time.")
                return "stop";
            }else if(raft!=1){
                return "stop";
            }
    else{
                return"go";
            }
}

$(window).load(function(){
    changesong("01/NBattle.mp3")
    saving("42")
    
         Eunits[newEindex()]=new Wisp(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Frostlord(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Wisp(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(2,19,1000,'Frostlord');
    
    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Magnet(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(3,20,1000,'Clunker');
    
    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Goblin(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(1,21,1000,'Fire Elemental');
    

    
            Eunits[newEindex()]=new Magnet(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(4,23,1000,'warrior');
    
    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(5,24,1000,'warrior');
    
         Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Flamewraith(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(6,25,1000,'flamewraith');
    console.log("hi")
    setTimeout(function(){
        units[index]= new Civilian(13, "fisherman");
        units[index]= new Civilian(14, "fisherman");
        units[index]= new Civilian(15, "fisherman");
    },200)

    
     clickEicon();
    Egroupinfo();
    

    
    
        containaccessories();

});