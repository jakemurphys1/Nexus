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

var number_of_units=6;
var missiondetails = "<p>Create groups and move them to meet the beast's groups.</p><p>To capture the beasts, enter combat with them, click the 'Capture' button, and then right-click the enemy. The lower it's health, the more likely you will succeed in capturing it. Any unit in the battle can do it regardless of range or location.</p><p>The number of each type of beast that you must capture is displayed at the top. Capturing more has no point.</p><p>You have 50 turns to capture that many beasts, and if you run out of time, it's gameover.</p>"
var wolves=0;
var bears=0;
var spiders=0;
var turtles=0;
var elk=0;
var sparrows=0;
var wolflimit
var sparrowlimit
var bearlimit
var spiderlimit
var elklimit
var turtlelimit

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
        $("#space70").data("castle",true).data("move1",'2').data("move2",'28').data("move3",'').data("move4",'').data("left",260).data("top",280).data("location",70);
        
        $("#space1").data("move1",'35').data("move2",'8').data("move3",'7').data("move4",'').data("left",125).data("top",75).data("location",1).data("fortify",false);
        $("#space2").data("move1",'27').data("move2",'70').data("move3",'').data("move4",'').data("left",280).data("top",230).data("location",2).data("fortify",false);
        $("#space3").data("move1",'36').data("move2",'').data("move3",'8').data("move4",'9').data("left",120).data("top",170).data("location",3).data("fortify",false);
        $("#space4").data("move1",'38').data("move2",'6').data("move3",'10').data("move4",'12').data("left",125).data("top",460).data("location",4).data("fortify",false);
        $("#space5").data("move1",'37').data("move2",'11').data("move3",'6').data("move4",'12').data("left",120).data("top",360).data("location",5).data("fortify",false);
        $("#space6").data("move1",'5').data("move2",'37').data("move3",'38').data("move4",'4').data("left",90).data("top",410).data("location",6).data("fortify",false);
        $("#space7").data("move1",'8').data("move2",'1').data("move3",'30').data("move4",'').data("left",205).data("top",75).data("location",7).data("fortify",false);
        $("#space8").data("move1",'1').data("move2",'7').data("move3",'3').data("move4",'9').data("left",170).data("top",130).data("location",8).data("fortify",false);
        $("#space9").data("move1",'8').data("move2",'3').data("move3",'27').data("move4",'').data("left",210).data("top",170).data("location",9).data("fortify",false);
        $("#space10").data("move1",'12').data("move2",'4').data("move3",'26').data("move4",'').data("left",215).data("top",460).data("location",10).data("fortify",false);

        $("#space11").data("move1",'5').data("move2",'28').data("move3",'12').data("move4",'').data("left",210).data("top",360).data("location",11).data("fortify",false);
        $("#space12").data("move1",'5').data("move2",'11').data("move3",'10').data("move4",'4').data("left",170).data("top",410).data("location",12).data("fortify",false);
        $("#space13").data("move1",'30').data("move2",'29').data("move3",'14').data("move4",'19').data("left",360).data("top",75).data("location",13).data("fortify",false);
        $("#space14").data("move1",'13').data("move2",'19').data("move3",'15').data("move4",'21').data("left",410).data("top",130).data("location",14).data("fortify",false);
        $("#space15").data("move1",'27').data("move2",'21').data("move3",'14').data("move4",'').data("left",370).data("top",170).data("location",15).data("fortify",false);
        $("#space16").data("move1",'26').data("move2",'18').data("move3",'22').data("move4",'25').data("left",365).data("top",460).data("location",16).data("fortify",false);
        $("#space17").data("move1",'28').data("move2",'23').data("move3",'18').data("move4",'25').data("left",360).data("top",360).data("location",17).data("fortify",false);
        $("#space18").data("move1",'23').data("move2",'17').data("move3",'16').data("move4",'22').data("left",400).data("top",410).data("location",18).data("fortify",false);
        $("#space19").data("move1",'13').data("move2",'14').data("move3",'31').data("move4",'').data("left",445).data("top",75).data("location",19).data("fortify",false);

        $("#space21").data("move1",'14').data("move2",'32').data("move3",'').data("move4",'').data("left",460).data("top",170).data("location",21).data("fortify",false);
        $("#space22").data("move1",'16').data("move2",'24').data("move3",'34').data("move4",'18').data("left",440).data("top",450).data("location",22).data("fortify",false);
        $("#space23").data("move1",'17').data("move2",'33').data("move3",'24').data("move4",'18').data("left",450).data("top",360).data("location",23).data("fortify",false);
        $("#space24").data("move1",'23').data("move2",'22').data("move3",'34').data("move4",'33').data("left",480).data("top",410).data("location",24).data("fortify",false);
        $("#space25").data("move1",'28').data("move2",'17').data("move3",'26').data("move4",'16').data("left",320).data("top",410).data("location",25).data("fortify",false);
        
        $("#space26").data("move1",'25').data("move2",'10').data("move3",'16').data("move4",'').data("left",295).data("top",460).data("location",26).data("fortify",false);
        $("#space27").data("move1",'9').data("move2",'29').data("move3",'15').data("move4",'2').data("left",290).data("top",170).data("location",27).data("fortify",false);
        $("#space28").data("move1",'70').data("move2",'11').data("move3",'17').data("move4",'25').data("left",280).data("top",350).data("location",28).data("fortify",false);
        $("#space29").data("move1",'30').data("move2",'27').data("move3",'').data("move4",'').data("left",290).data("top",130).data("location",29).data("fortify",false);
        $("#space30").data("move1",'7').data("move2",'13').data("move3",'29').data("move4",'').data("left",280).data("top",75).data("location",30).data("fortify",false);
        $("#space31").data("move1",'19').data("move2",'').data("move3",'').data("move4",'').data("left",520).data("top",75).data("location",31).data("fortify",false);
        $("#space32").data("move1",'21').data("move2",'').data("move3",'').data("move4",'').data("left",520).data("top",170).data("location",32).data("fortify",false);
        $("#space33").data("move1",'23').data("move2",'24').data("move3",'').data("move4",'').data("left",520).data("top",360).data("location",33).data("fortify",false);
        $("#space34").data("move1",'22').data("move2",'24').data("move3",'').data("move4",'').data("left",520).data("top",460).data("location",34).data("fortify",false);
        $("#space35").data("move1",'1').data("move2",'').data("move3",'').data("move4",'').data("left",50).data("top",75).data("location",35).data("fortify",false);
        $("#space36").data("move1",'').data("move2",'3').data("move3",'').data("move4",'').data("left",50).data("top",170).data("location",36).data("fortify",false);
        $("#space37").data("move1",'5').data("move2",'6').data("move3",'').data("move4",'').data("left",50).data("top",360).data("location",37).data("fortify",false);
        $("#space38").data("move1",'4').data("move2",'6').data("move3",'').data("move4",'').data("left",50).data("top",460).data("location",38).data("fortify",false);
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
                   tempname="Edgar"
                break;
            case 5:
                tempclass="Enchantress";
                   tempname="Enchantress"
                break;
            case 6:
                tempclass="Rouge";
                   tempname="Rouge1"
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

            $('.actions').append("<div class = 'actionbutton' style='position:absolute; margin-top:30px; margin-left:265px; width:100px' id = 'Capture'>Capture</div>");

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
                if (Egroups[i].location === 1 && nomove(7) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    thistemp = 7;
                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 3 & nomove(9) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 9;
                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 4 & nomove(10) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp =10;
                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 5 & nomove(11) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 11;

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 7 & nomove(30) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 30

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 9 & nomove(27) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 27;

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 10 & nomove(26) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp =26; 

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 11 & nomove(28) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    thistemp = 28;
                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 13 & nomove(19) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 19

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 15 & nomove(21) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;

                        thistemp = 21

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 16 & nomove(22) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 22;

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 17 & nomove(23) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 23;

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 19 & nomove(31) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 31;

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 21 & nomove(32) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 32;
                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 22 & nomove(34) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 34;
                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 23 & nomove(33) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 33

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                      if (Egroups[i].location === 26 & nomove(16) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 16;

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                      if (Egroups[i].location === 27 & nomove(15) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 15;

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                     if (Egroups[i].location === 28 & nomove(17) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 17;

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                     if (Egroups[i].location === 30 & nomove(13) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 13;

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                     if (Egroups[i].location === 35 & nomove(1) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 1;

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                     if (Egroups[i].location === 36 & nomove(3) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 3;

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                     if (Egroups[i].location === 37 & nomove(5) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 5;

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                     if (Egroups[i].location === 38 & nomove(4) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 4;

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                       if (Egroups[i].location === 31 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    $('#EM' + i).remove();
                }
                      if (Egroups[i].location === 32 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    $('#EM' + i).remove();
                }
                      if (Egroups[i].location === 33 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    $('#EM' + i).remove();
                }
                      if (Egroups[i].location === 34 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    $('#EM' + i).remove();
                }
        
                    Egroups[i].curleft = $("#space" + thistemp).data("left");
                    Egroups[i].curtop = $("#space" + thistemp).data("top");
            }
        }
        showwall();
    }

    function createbadguys(){

        for(var i =1;i<5;i++){
        //choose badguy
        var temp = Math.floor((Math.random() * 10) + 1);
        
        switch(i){
            case 1:
                baddielocation=35;
                break;
            case 2:
                baddielocation=36;
                break;
            case 3:
                baddielocation=37;
                break;
            case 4:
                baddielocation=38;
                break;
        }
        if (day<=10 && day>=1){
            switch(temp){
                case 1:
                case 2:
                case 3:
                    Eunits[newEindex()]=new Wolf(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,200,'wolf');
                    break;
                case 4:
                case 5:
                    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,300,'Sparrow');
                    break;
                case 6: 
                case 7:
                    Eunits[newEindex()]=new Wolf(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Wolf(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'wolf');
                    break;
                case 8:
                    Eunits[newEindex()]=new Wolf(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Sparrow');
                    break;
                case 9:
                    Eunits[newEindex()]=new Elk(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Elk(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Elk');
                    break;
                case 10:
                    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Sparrow');
                    break;
            }
        }
        if (day<20 && day>10){
            switch(temp){
                case 1:
                case 2:
                case 3:
                    Eunits[newEindex()]=new Bear(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,200,'bear');
                    break;
                case 4:
                case 5:
                    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,300,'Sparrow');
                    break;
                case 6: 
                case 7:
                    Eunits[newEindex()]=new Bear(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Wolf(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'wolf');
                    break;
                case 8:
                    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Wolf(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Sparrow');
                    break;
                case 9:
                    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bear(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Sparrow');
                    break;
                case 10:
                    Eunits[newEindex()]=new Wolf(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Spider(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Wolf(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'spider');
                    break;
            }
        }
        if (day<30 && day>=20){
               switch(temp){
                case 1:
                case 2:
                case 3:
                    Eunits[newEindex()]=new Bear(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,200,'bear');
                    break;
                case 4:
                case 5:
                    Eunits[newEindex()]=new Elk(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,300,'Elk');
                    break;
                case 6: 
                case 7:
                    Eunits[newEindex()]=new Spider(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bear(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'bear');
                    break;
                case 8:
                    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Sparrow');
                    break;
                case 9:
                    Eunits[newEindex()]=new Spider(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Turtle(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Turtle');
                    break;
                case 10:
                    Eunits[newEindex()]=new Turtle(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Elk(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Turtle(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Turtle');
                    break;
            }
        }
        if (day<40 && day>=30){
     switch(temp){
                case 1:
                case 2:
                case 3:
                    Eunits[newEindex()]=new Turtle(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,200,'Turtle');
                    break;
                case 4:
                case 5:
                    Eunits[newEindex()]=new Elk(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,300,'Elk');
                    break;
                case 6: 
                case 7:
                    Eunits[newEindex()]=new Bear(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Spider(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Wolf(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'bear');
                    break;
                case 8:
                    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                     Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                     Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                     Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                     Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Sparrow');
                    break;
                case 9:
                    Eunits[newEindex()]=new Turtle(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Turtle(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Turtle');
                    break;
                case 10:
                    Eunits[newEindex()]=new Bear(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Elk(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bear(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'bear');
                    break;
            }
        }
        if (day<50 && day>=40){
              var tempnum=0;
                var tempstring;
                    if(wolves<wolflimit){
                          Eunits[newEindex()]=new Wolf(curEindex, Egroupindex,difflevel);
                            tempstring="wolf";
                        tempnum+=1;
                    }
                    if(sparrows<sparrowlimit){
                          Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                            tempstring="Sparrow";
                        tempnum+=1;
                    }
                    if(bears<bearlimit){
                          Eunits[newEindex()]=new Bear(curEindex, Egroupindex,difflevel);
                            tempstring="bear";
                        tempnum+=1;
                    }
                    if(spiders<spiderlimit && tempnum<3){
                          Eunits[newEindex()]=new Spider(curEindex, Egroupindex,difflevel);
                            tempstring="spider";
                        tempnum+=1;
                    }
                    if(elk<elklimit){
                          Eunits[newEindex()]=new Elk(curEindex, Egroupindex,difflevel);
                            tempstring="Elk";
                        tempnum+=1;
                    }
                    if(turtles<turtlelimit){
                          Eunits[newEindex()]=new Turtle(curEindex, Egroupindex,difflevel);
                            tempstring="Turtle";
                        tempnum+=1;
                    }
                      Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,200,tempstring);
        }
        if(day ==50){
            gameover();
        }
        clickEicon();
        Egroupinfo();
            
        }
    }

    function Enewgroup(index,location,experience,picture){
        var thisleft=0;
        var thistop=0;

        if(location===35){
            thisleft=$("#space35").css("left");
            thistop=$("#space35").css("top");
        }
        if(location===36){
            thisleft=$("#space36").css("left");;
            thistop=$("#space36").css("top");;
        }
        if(location===37){
            thisleft=$("#space37").css("left");;
            thistop=$("#space37").css("top");;
        }
        if(location===38){
            thisleft=$("#space38").css("left");;
            thistop=$("#space38").css("top");;
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
                        backgroundpic="../Pictures/backgroundpics/roadbackground.png";
    return backgroundpic;
}
function updateHeader(){
           $('#top').html("<div style='margin-top:15px; margin-left:10px'><span style='font-size:25px'>Turn:" + day + "/50</span><span style=''><img style='margin-top:-10px; margin-left:15px; font-size:25px' src='../Pictures/Enemies/wolf.gif' />: " + wolves + "/" + wolflimit +"</span>"+
                             "<span style='margin-left:5px; font-size:25px'><img src='../Pictures/Enemies/Sparrow.gif' />: " + sparrows + "/" + sparrowlimit +"</span>"+
                             "<span style='margin-left:5px; font-size:25px'><img src='../Pictures/Enemies/spider.gif' />: " + spiders + "/" + spiderlimit +"</span>"+
                             "<span style='margin-left:5px; font-size:25px'><img src='../Pictures/Enemies/bear.gif' />: " + bears + "/" + bearlimit +"</span>"+
                             "<span style='margin-left:5px; font-size:25px'><img src='../Pictures/Enemies/Elk.gif' />: " + elk + "/" + elklimit +"</span>"+
                             "<span style='margin-left:5px; font-size:25px'><img src='../Pictures/Enemies/Turtle.gif' />: " + turtles + "/" + turtlelimit +"</span></div>");
}

function indiv_newday(){
             updateHeader(); 
    if(day>50){
        gameover();
    }
}
function indiv_gotocapitol(){
      $("#TEXT").empty().append('<div class="gotobutton" id = "gotobarracks"><p>BARRACKS</p></div><div class="gotobutton" id = "gotobrewery"><p>BREWERY</p></div>');
}

function capturedAll(){
    if(wolves>=wolflimit && sparrows>=sparrowlimit && spiders>=spiderlimit && bears>=bearlimit && elk>=elklimit && turtles>=turtlelimit){
        winbattle("../31/beforecell3.html");
    }
}

function levelresearch(){
    
}
function enemyconquer(){
    
}

$(window).load(function(){
    saving("30")
    changesong("01/hunting.mp3")
        containaccessories();
 wolflimit = 10+2*difflevel;
 sparrowlimit=10+2*difflevel;
 bearlimit=3+difflevel;
 spiderlimit=3+difflevel;
 elklimit=7+(2*difflevel);
 turtlelimit=4+difflevel;
    
         updateHeader(); 

    //click buttons on map
   $("#space70").click(function(){
        tipmessage("capitol","This is your capitol. You should go to the research center to begin researching new tools. Then go to the barracks to create your groups.");
        gotocapitol();
    });

});