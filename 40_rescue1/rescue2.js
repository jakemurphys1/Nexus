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

var number_of_units=16;

noheal=false;
noexplore=true;
noescape=true;
var missiondetails = "<p>Move your groups through the hedges, keeping an eye on the enemies. You will be able to see the enemies before they move down, so regroup your groups accordingly.</p><p>Any two groups can exchange members as long as they are within 7 spaces of each other.</p><p>If any civilians die, it's gameover. Once you have all four civilians in the Nexus, you win.</p>"


function containaccessories(){
    
}
//wall
    function showwall(){}

    function setlocationstuff(){

        $("#space1").data("move1",'').data("move2",'2').data("move3",'').data("move4",'').data("left",60).data("top",100).data("location",1).data("fortify",false);
        $("#space2").data("move1",'1').data("move2",'3').data("move3",'').data("move4",'').data("left",125).data("top",100).data("location",2).data("fortify",false);
        $("#space3").data("move1",'2').data("move2",'4').data("move3",'').data("move4",'').data("left",200).data("top",100).data("location",3).data("fortify",false);
        $("#space4").data("move1",'3').data("move2",'5').data("move3",'').data("move4",'').data("left",275).data("top",100).data("location",4).data("fortify",false);
        $("#space5").data("move1",'6').data("move2",'4').data("move3",'').data("move4",'').data("left",350).data("top",100).data("location",5).data("fortify",false);
        $("#space6").data("move1",'5').data("move2",'7').data("move3",'').data("move4",'').data("left",425).data("top",100).data("location",6).data("fortify",false);
        $("#space7").data("move1",'6').data("move2",'8').data("move3",'').data("move4",'').data("left",500).data("top",100).data("location",7).data("fortify",false);
        
        $("#space8").data("move1",'9').data("move2",'7').data("move3",'').data("move4",'').data("left",515).data("top",160).data("location",8).data("fortify",false);
        $("#space9").data("move1",'10').data("move2",'8').data("move3",'').data("move4",'').data("left",500).data("top",220).data("location",9).data("fortify",false);
        $("#space10").data("move1",'9').data("move2",'11').data("move3",'').data("move4",'').data("left",425).data("top",220).data("location",10).data("fortify",false);
        $("#space11").data("move1",'12').data("move2",'10').data("move3",'').data("move4",'').data("left",350).data("top",220).data("location",11).data("fortify",false);
        $("#space12").data("move1",'13').data("move2",'11').data("move3",'').data("move4",'').data("left",275).data("top",220).data("location",12).data("fortify",false);
        $("#space13").data("move1",'12').data("move2",'14').data("move3",'').data("move4",'').data("left",200).data("top",220).data("location",13).data("fortify",false);
        
        $("#space14").data("move1",'15').data("move2",'13').data("move3",'').data("move4",'').data("left",135).data("top",220).data("location",14).data("fortify",false).data("castle",true).data("color",'red');
        $("#space15").data("move1",'16').data("move2",'14').data("move3",'').data("move4",'').data("left",75).data("top",220).data("location",15).data("fortify",false);
        $("#space16").data("move1",'15').data("move2",'17').data("move3",'').data("move4",'').data("left",60).data("top",280).data("location",16).data("fortify",false);
        $("#space17").data("move1",'18').data("move2",'16').data("move3",'').data("move4",'').data("left",70).data("top",340).data("location",17).data("fortify",false);
        
        $("#space18").data("move1",'17').data("move2",'19').data("move3",'').data("move4",'').data("left",145).data("top",340).data("location",18).data("fortify",false);
        $("#space19").data("move1",'18').data("move2",'20').data("move3",'').data("move4",'').data("left",220).data("top",340).data("location",19).data("fortify",false);
        $("#space20").data("move1",'21').data("move2",'19').data("move3",'').data("move4",'').data("left",285).data("top",340).data("location",20).data("fortify",false);
        $("#space21").data("move1",'22').data("move2",'20').data("move3",'').data("move4",'').data("left",350).data("top",340).data("location",21).data("fortify",false);
        $("#space22").data("move1",'21').data("move2",'23').data("move3",'').data("move4",'').data("left",425).data("top",340).data("location",22).data("fortify",false);
        $("#space23").data("move1",'22').data("move2",'24').data("move3",'').data("move4",'').data("left",500).data("top",340).data("location",23).data("fortify",false);
        $("#space24").data("move1",'25').data("move2",'23').data("move3",'').data("move4",'').data("left",500).data("top",400).data("location",24).data("fortify",false);
        $("#space25").data("move1",'24').data("move2",'26').data("move3",'').data("move4",'').data("left",500).data("top",450).data("location",25).data("fortify",false);
        
        $("#space26").data("move1",'27').data("move2",'25').data("move3",'').data("move4",'').data("left",425).data("top",450).data("location",26).data("fortify",false);
        
        $("#space27").data("move1",'28').data("move2",'26').data("move3",'').data("move4",'').data("left",350).data("top",450).data("location",27).data("fortify",false);
        $("#space28").data("move1",'29').data("move2",'27').data("move3",'').data("move4",'').data("left",285).data("top",450).data("location",28).data("fortify",false);
        $("#space29").data("move1",'30').data("move2",'28').data("move3",'').data("move4",'').data("left",220).data("top",450).data("location",29).data("fortify",false);
        $("#space30").data("move1",'70').data("move2",'29').data("move3",'').data("move4",'').data("left",145).data("top",450).data("location",30).data("fortify",false);
        $("#space31").data("move1",'30').data("move2",'').data("move3",'').data("move4",'').data("left",70).data("top",450).data("location",31).data("fortify",false);
        $("#space32").data("move1",'33').data("move2",'31').data("move3",'16').data("move4",'').data("left",425).data("top",170).data("location",32).data("fortify",false);
        $("#space33").data("move1",'34').data("move2",'32').data("move3",'16').data("move4",'').data("left",350).data("top",170).data("location",33).data("fortify",false);
        $("#space34").data("move1",'35').data("move2",'33').data("move3",'16').data("move4",'').data("left",275).data("top",170).data("location",34).data("fortify",false);
        $("#space35").data("move1",'36').data("move2",'34').data("move3",'16').data("move4",'').data("left",200).data("top",170).data("location",35).data("fortify",false);
        $("#space36").data("move1",'37').data("move2",'35').data("move3",'16').data("move4",'').data("left",135).data("top",170).data("location",36).data("fortify",false);
        $("#space37").data("move1",'38').data("move2",'36').data("move3",'16').data("move4",'').data("left",75).data("top",170).data("location",37).data("fortify",false);
        $("#space38").data("move1",'39').data("move2",'37').data("move3",'16').data("move4",'').data("left",145).data("top",280).data("location",38).data("fortify",false);
        $("#space39").data("move1",'40').data("move2",'38').data("move3",'16').data("move4",'').data("left",220).data("top",280).data("location",39).data("fortify",false);
        $("#space40").data("move1",'41').data("move2",'39').data("move3",'16').data("move4",'').data("left",285).data("top",280).data("location",40).data("fortify",false);
        $("#space41").data("move1",'42').data("move2",'40').data("move3",'16').data("move4",'').data("left",350).data("top",280).data("location",41).data("fortify",false);
        $("#space42").data("move1",'43').data("move2",'41').data("move3",'16').data("move4",'').data("left",425).data("top",280).data("location",42).data("fortify",false);
        $("#space43").data("move1",'44').data("move2",'42').data("move3",'16').data("move4",'').data("left",500).data("top",280).data("location",43).data("fortify",false);
        $("#space44").data("move1",'45').data("move2",'43').data("move3",'16').data("move4",'').data("left",425).data("top",400).data("location",44).data("fortify",false);
        $("#space45").data("move1",'46').data("move2",'44').data("move3",'16').data("move4",'').data("left",350).data("top",400).data("location",45).data("fortify",false);
        $("#space46").data("move1",'47').data("move2",'45').data("move3",'16').data("move4",'').data("left",285).data("top",400).data("location",46).data("fortify",false);
        $("#space47").data("move1",'48').data("move2",'46').data("move3",'16').data("move4",'').data("left",220).data("top",400).data("location",47).data("fortify",false);
        $("#space48").data("move1",'49').data("move2",'47').data("move3",'16').data("move4",'').data("left",145).data("top",400).data("location",48).data("fortify",false);

        $("#space70").data("move1",'30').data("move2",'').data("move3",'').data("move4",'').data("left",70).data("top",450).data("location",70).data("fortify",false);
    }

function assignlocations() {

}

function newunit(){

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
                    if (Egroups[i].location === 10 && Egroups[i].hasmoved === false) {
                    $("#EM" + Egroups[i].index).remove();
                        Egroups[i].location=-2;
                    }
                    if (Egroups[i].location === 11 && Egroups[i].hasmoved === false) {
                    $("#EM" + Egroups[i].index).remove();
                        Egroups[i].location=-2;
                    }
                    if (Egroups[i].location === 12 && Egroups[i].hasmoved === false) {
                    $("#EM" + Egroups[i].index).remove();
                        Egroups[i].location=-2;
                    }
                    if (Egroups[i].location === 13 && Egroups[i].hasmoved === false) {
                    $("#EM" + Egroups[i].index).remove();
                        Egroups[i].location=-2;
                    }
                    if (Egroups[i].location === 14 && Egroups[i].hasmoved === false) {
                    $("#EM" + Egroups[i].index).remove();
                        Egroups[i].location=-2;
                    }
                    if (Egroups[i].location === 15 && Egroups[i].hasmoved === false) {
                    $("#EM" + Egroups[i].index).remove();
                        Egroups[i].location=-2;
                    }
                    if (Egroups[i].location === 18 && Egroups[i].hasmoved === false) {
                    $("#EM" + Egroups[i].index).remove();
                        Egroups[i].location=-2;
                    }
                    if (Egroups[i].location === 19 && Egroups[i].hasmoved === false) {
                    $("#EM" + Egroups[i].index).remove();
                        Egroups[i].location=-2;
                    }
                    if (Egroups[i].location === 20 && Egroups[i].hasmoved === false) {
                    $("#EM" + Egroups[i].index).remove();
                        Egroups[i].location=-2;
                    }
                    if (Egroups[i].location === 21 && Egroups[i].hasmoved === false) {
                    $("#EM" + Egroups[i].index).remove();
                        Egroups[i].location=-2;
                    }
                    if (Egroups[i].location === 22 && Egroups[i].hasmoved === false) {
                    $("#EM" + Egroups[i].index).remove();
                        Egroups[i].location=-2;
                    }
                    if (Egroups[i].location === 23 && Egroups[i].hasmoved === false) {
                    $("#EM" + Egroups[i].index).remove();
                        Egroups[i].location=-2;
                    }
                                        if (Egroups[i].location === 26 && Egroups[i].hasmoved === false) {
                    $("#EM" + Egroups[i].index).remove();
                        Egroups[i].location=-2;
                    }
                    if (Egroups[i].location === 27 && Egroups[i].hasmoved === false) {
                    $("#EM" + Egroups[i].index).remove();
                        Egroups[i].location=-2;
                    }
                    if (Egroups[i].location === 28 && Egroups[i].hasmoved === false) {
                    $("#EM" + Egroups[i].index).remove();
                        Egroups[i].location=-2;
                    }
                    if (Egroups[i].location === 29 && Egroups[i].hasmoved === false) {
                    $("#EM" + Egroups[i].index).remove();
                        Egroups[i].location=-2;
                    }
                    if (Egroups[i].location === 30 && Egroups[i].hasmoved === false) {
                    $("#EM" + Egroups[i].index).remove();
                        Egroups[i].location=-2;
                    }
                    if (Egroups[i].location === 31 && Egroups[i].hasmoved === false) {
                    $("#EM" + Egroups[i].index).remove();
                        Egroups[i].location=-2;
                    }

                    
                    
                    if (Egroups[i].location === 32 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 10 
                    }
                    if (Egroups[i].location === 33 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 11 
                    }
                    if (Egroups[i].location === 34 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 12 
                    }
                    if (Egroups[i].location === 35 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 13 
                    }
                    if (Egroups[i].location === 36 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 14 
                    }
                    if (Egroups[i].location === 37 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 15 
                    }
                    if (Egroups[i].location === 38 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 18 
                    }
                    if (Egroups[i].location === 39 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 19 
                    }
                    if (Egroups[i].location === 40 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 20 
                    }
                    if (Egroups[i].location === 41 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 21 
                    }
                    if (Egroups[i].location === 42 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 22 
                    }
                    if (Egroups[i].location === 43 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 23 
                    }
                    if (Egroups[i].location === 44 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 26 
                    }
                    if (Egroups[i].location === 45 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 27 
                    }
                    if (Egroups[i].location === 46 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 28 
                    }
                    if (Egroups[i].location === 47 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 29 
                    }
                    if (Egroups[i].location === 48 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 30 
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                    Egroups[i].curleft = $("#space" + thistemp).data("left");
                    Egroups[i].curtop = $("#space" + thistemp).data("top");
            }
        }
        showwall();
    }

    function createbadguys(){
for(var i =32;i<49;i++){
     //choose badguy
        var temp = Math.floor((Math.random() * 20) + 1);
         if (i<38){
            switch(temp){
                case 1:
                    Eunits[newEindex()]=new LightningElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new LightningElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,i,500,'Lightning Elemental');
                break;
                case 2:
                     Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,i,500,'Bat');
                break;
                case 3:
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,i,800,'Fire Elemental');
                break;
                case 4:
                    Eunits[newEindex()]=new IceElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new IceElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,i,500,'Ice Elemental');
                break;
                case 5:
                    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,i,400,'Clunker');
                break;
                case 6: 
                case 7:
                    Eunits[newEindex()]=new Spitter(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,i,500,'Spitter');
                    break;
                case 8:
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,i,600,'warrior');
                    break;
                case 9:
                    Eunits[newEindex()]=new Vampire(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,i,300,'vampire');
                    break;
                case 10:
                    Eunits[newEindex()]=new Werewolf(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,i,300,'werewolf');
                    break;
            }
        }
        if (i<44 && i>37){
            switch(temp){
                case 1:
                    Eunits[newEindex()]=new LightningElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new LightningElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,i,600,'Lightning Elemental');
                break;
                case 2:
                     Eunits[newEindex()]=new Spitter(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Spitter(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,i,700,'Spitter');
                break;
                break;
                case 3:
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Flamewraith(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,i,700,'flamewraith');
                break;
                case 4:
                    Eunits[newEindex()]=new IceElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Waterwraith(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,i,700,'waterwraith');
                break;
                case 5:
                    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Sounddepressor(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,i,500,'Sounddepressor');
                break;
                case 6: 
                case 7:
                    Eunits[newEindex()]=new Werewolf(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Vampire(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,i,500,'werewolf');
                    break;
                case 8:
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Magnet(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,i,600,'warrior');
                    break;
                case 9:
                    Eunits[newEindex()]=new Hellhound(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Hellhound(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Hellhound(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,i,600,'hellhound');
                    break;
                case 10:
                    Eunits[newEindex()]=new Magnet(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Cannon(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,i,600,'Cannon');
                    break;
            }
        }
        if (i>43){
               switch(temp){
                case 1:
                    Eunits[newEindex()]=new Hellhound(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Hellhound(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Hellhound(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Hellhound(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Hellhound(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,i,700,'hellhound');
                break;
                case 2:
                     Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,i,800,'Bat');
                break;
                break;
                case 3:
                    Eunits[newEindex()]=new IceElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Frostwraith(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new IceElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,i,600,'Ice Elemental');
                break;
                case 4:
                    Eunits[newEindex()]=new Wisp(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Wisp(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,i,500,'Wisp');
                break;
                case 5:
                    Eunits[newEindex()]=new Werewolf(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Sounddepressor(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Werewolf(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,i,600,'werewolf');
                break;
                case 6: 
                case 7:
                     Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Cannon(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,i,600,'Cannon');
                    break;
                case 8:
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,i,600,'warrior');
                    break;
                case 9:
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Vampire(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,i,600,'vampire');
                    break;
                case 10:
                    Eunits[newEindex()]=new Vacuum(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Werewolf(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,i,500,'Vacuum');
                    break;
            }
        }
}
   

        clickEicon();
        Egroupinfo();
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
        backgroundpic="../Pictures/backgroundpics/grassbackground.png";
    return backgroundpic;
}
function updateHeader(){}

function indiv_newday(){
             updateHeader(); 
    if(units[12].location<0 || units[13].location<0 || units[14].location<0 || units[15].location<0){
        gameover();
    }
}
function indiv_gotocapitol(){
      $("#TEXT").empty().append('<div class="gotobutton" id = "gotobarracks"><p>BARRACKS</p></div><div class="gotobutton" id = "gotobrewery"><p>BREWERY</p></div>');
}

function indiv_return(){
    var civreturned = 0;
    for (var i = 13;i<17;i++){
        if(units[i].group==0){
            civreturned +=1
        }
    }
    
    if(civreturned>=4){
        winbattle("../41/beforeriver.html");
    }
}

function indiv_ally_dies(index){
    if(index >=13){
        $("#TEXT").append("<p>You can't allow any Civilians to die!</p>")
        gameover();
    }
}

function levelresearch(){}
function enemyconquer(){}

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
          //exchange
            $(".icon").mousedown(function(e) {
                if(e.button === 2 ) {
                    var temp = $(this).attr('id').replace("M","");
                    tempexchangeunits(temp);
                }
            });
    
    
     groupinfo();
    }
 function tempexchangeunits(temp){
        var location2 = groups[temp].location;
        var location1= groups[curgroupnum].location;
            if(parseInt(location2)-parseInt(location1)>6 || parseInt(location2)-parseInt(location1)<-6){
                        $("#TEXT").empty();
                        $('#TEXT').append("These groups are too far apart to exchange.");
                return;
            }


        $("#TEXT").empty();
        $('#TEXT').append("Click unit, and then right-click to exchange units.");
        $('#TEXT').append("<div class = 'exchange' style='border: #d5d406 solid 5px;' id='S" + parseInt(curgroupnum) + "'></div>");
        $('#TEXT').append("<div class = 'exchange' id='S" + parseInt(temp) + "'></div>");

        for(var j =1;j<4;j++){
            for(var i = 0;i<index;i++){
                if(units[i].group===curgroupnum && units[i].slot===j){
                    $("#S" + parseInt(curgroupnum)).append(units[i].picture)
                    $('#' + i).append('<div class="healthbar" id = "HB' + i + '" style="position: relative; margin-top:90%; width: ' + (units[i].health/units[i].maxhealth)*100 + '%"></div><div class="level"><p>' + units[i].level + '</p></div>');
                }
                if(units[i].group===parseInt(temp) && units[i].slot===j){
                    $("#S" + parseInt(temp)).append(units[i].picture)
                    $('#' + i).append('<div class="healthbar" id = "HB' + i + '" style="position: relative; margin-top:90%; width: ' + (units[i].health/units[i].maxhealth)*100 + '%"></div><div class="level"><p>' + units[i].level + '</p></div>');
                }
            }
        }


        $('.barrackpic').click(function(){
            $(".selectedUnit").removeClass("selectedUnit");
            $(this).addClass("selectedUnit");
            curindex=$(this).attr("id");
        });
        $('.barrackpic').mousedown(function(e){
            if(e.button === 2){
                var thistemp = units[curindex].group;
                var thisslot=units[curindex].slot;
                units[curindex].group=units[$(this).attr("id")].group;
                units[curindex].slot=units[$(this).attr("id")].slot;
                units[$(this).attr("id")].group=thistemp;
                units[$(this).attr("id")].slot=thisslot;

                $('#TEXT').empty();
                tempexchangeunits(temp);
                getstats();
            }
        });
        $('.exchange').mousedown(function(e){
            if(e.button === 2){

                var temp2 = 0;
                var recievingloc=units[curindex].group;
                var slot1empty=true;
                var slot2empty=true;
                var slot3empty=true;
                for(var i = 0;i<index;i++){
                    if(units[i].group===parseInt(($(this).attr("id")).replace('S',""))){
                        temp2+=1;
                        if(units[i].slot===1){
                            slot1empty=false;
                        }
                        if(units[i].slot===2){
                            slot2empty=false;
                        }
                        if(units[i].slot===3){
                            slot3empty=false;
                        }
                    }
                }
                if(temp2>2){
                    return
                }
                if(slot1empty===true){
                    units[curindex].slot=1;
                    slot1empty=false
                }
                if(slot2empty===true){
                    units[curindex].slot=2;
                    slot2empty=false
                }
                if(slot3empty===true){
                    units[curindex].slot=3;
                    slot3empty=false
                }
                units[curindex].group=parseInt(($(this).attr("id")).replace('S',""));


                //check to remove group
                $('#TEXT').empty();
                temp2 = 0;
                for(var i = 0;i<index;i++){
                    if(units[i].group===recievingloc){
                        temp2+=1;
                    }
                }
                if(temp2===0){
                    $("#M" + recievingloc).remove();
                    $("#space" + groups[recievingloc].location).data("filled",0)
                    groups[recievingloc].location=-1;
                } else{
                    tempexchangeunits(temp);
                }



            }
        });
        getstats();
    }

$(window).load(function(){
    changesong("01/NBattle.mp3")
    saving("40")
        containaccessories();
    
         updateHeader(); 
    
        units[0]= new Soldier(0,"Soldier2");
    units[1]= new Knight(1,"Knight2");
    units[2]= new Guard(2,"Guard");
    groups[groupindex]= new tempnewgroup(groupindex,9);
    units[0].group=1;
    units[0].slot=1
    units[1].group=1;
    units[1].slot=2
    units[2].group=1;
    units[2].slot=3
    
        units[3]= new Archer(3,"Archer4");
    units[4]= new Templar(4,"Templar2");
    units[5]= new Rouge(5,"Rouge1");
    groups[groupindex]= new tempnewgroup(groupindex,8);
    units[3].group=2;
    units[3].slot=1
    units[4].group=2;
    units[4].slot=2
    units[5].group=2;
    units[5].slot=3
    
         units[6]= new Mage(6,"Sandra");
    units[7]= new Sorcerer(7,"Sorcerer");
    units[8]= new Wizard(8,"Wizard1");
    groups[groupindex]= new tempnewgroup(groupindex,7);
    units[6].group=3;
    units[6].slot=1
    units[7].group=3;
    units[7].slot=2
    units[8].group=3;
    units[8].slot=3
    
    units[9]= new Enchantress(9,"Enchantress");
    units[10]= new Healer(10,"Healer1");
    units[11]= new Thief(11,"Thief1");
    groups[groupindex]= new tempnewgroup(groupindex,6);
    units[9].group=4;
    units[9].slot=1
    units[10].group=4;
    units[10].slot=2
    units[11].group=4;
    units[11].slot=3
    
 
    units[12]= new Mimic(12,"Mimic");
    units[13]= new Civilian(13,"fisherman");
    units[14]= new Civilian(14,"fisherman");
    groups[groupindex]= new tempnewgroup(groupindex,5);
    units[12].group=5;
    units[12].slot=1
    units[13].group=5;
    units[13].slot=2
    units[14].group=5;
    units[14].slot=3

        units[15]= new Civilian(15,"fisherman");
        units[16]= new Civilian(16,"fisherman");
    groups[groupindex]= new tempnewgroup(groupindex,4);
    units[15].group=6;
    units[15].slot=1
    units[16].group=6;
    units[16].slot=2
    
    //click buttons on map
   $("#space70").click(function(){
        gotocapitol();
    });
});