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

var number_of_units=12;
var missiondetails = "<p>Click on the 'Q' boxes to see the available contracts. It will show all the enemies and the rewards to defeating them.</p><p>When a group moves there, it must fight through multiple groups back to back.</p><p>There is also be units roaming in the streets. You don't have to fight them and they won't provide you money.</p><p>You must make a certain amount of money shown at the top. If you reach turn 30 before making that much money, it's gameover.</p>"

var money=0

{
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
}
    function setlocationstuff(){
        $("#space70").data("castle",true).data("move1",'15').data("move2",'4').data("move3",'10').data("move4",'9').data("left",290).data("top",200).data("location",70);
        
        $("#space1").data("move1",'2').data("move2",'34').data("move3",'').data("move4",'').data("left",50).data("top",145).data("location",1).data("fortify",false);
        $("#space2").data("move1",'1').data("move2",'3').data("move3",'8').data("move4",'34').data("left",120).data("top",145).data("location",2).data("fortify",false);
        $("#space3").data("move1",'2').data("move2",'4').data("move3",'9').data("move4",'35').data("left",220).data("top",145).data("location",3).data("fortify",false);
        $("#space4").data("move1",'3').data("move2",'5').data("move3",'70').data("move4",'36').data("left",300).data("top",145).data("location",4).data("fortify",false);
        $("#space5").data("move1",'4').data("move2",'6').data("move3",'10').data("move4",'37').data("left",370).data("top",145).data("location",5).data("fortify",false);
        $("#space6").data("move1",'5').data("move2",'7').data("move3",'38').data("move4",'').data("left",450).data("top",145).data("location",6).data("fortify",false);
        $("#space7").data("move1",'6').data("move2",'11').data("move3",'38').data("move4",'').data("left",520).data("top",145).data("location",7).data("fortify",false);
        
        $("#space8").data("move1",'2').data("move2",'13').data("move3",'').data("move4",'').data("left",125).data("top",210).data("location",8).data("fortify",false);
        $("#space9").data("move1",'3').data("move2",'14').data("move3",'70').data("move4",'').data("left",225).data("top",210).data("location",9).data("fortify",false);
        $("#space10").data("move1",'5').data("move2",'16').data("move3",'70').data("move4",'').data("left",370).data("top",210).data("location",10).data("fortify",false);
        $("#space11").data("move1",'7').data("move2",'18').data("move3",'').data("move4",'').data("left",520).data("top",210).data("location",11).data("fortify",false);
        
        $("#space12").data("move1",'13').data("move2",'39').data("move3",'').data("move4",'').data("left",50).data("top",270).data("location",12).data("fortify",false);
        $("#space13").data("move1",'12').data("move2",'14').data("move3",'19').data("move4",'').data("left",120).data("top",270).data("location",13).data("fortify",false);
        $("#space14").data("move1",'13').data("move2",'9').data("move3",'15').data("move4",'40').data("left",220).data("top",270).data("location",14).data("fortify",false);
        $("#space15").data("move1",'14').data("move2",'16').data("move3",'20').data("move4",'70').data("left",300).data("top",270).data("location",15).data("fortify",false);
        $("#space16").data("move1",'15').data("move2",'10').data("move3",'17').data("move4",'').data("left",370).data("top",270).data("location",16).data("fortify",false);
        $("#space17").data("move1",'16').data("move2",'18').data("move3",'41').data("move4",'').data("left",450).data("top",270).data("location",17).data("fortify",false);
        $("#space18").data("move1",'17').data("move2",'11').data("move3",'').data("move4",'').data("left",520).data("top",270).data("location",18).data("fortify",false);
        
        $("#space19").data("move1",'13').data("move2",'22').data("move3",'').data("move4",'').data("left",120).data("top",330).data("location",19).data("fortify",false);
        $("#space20").data("move1",'15').data("move2",'24').data("move3",'').data("move4",'').data("left",310).data("top",330).data("location",20).data("fortify",false);
        
        $("#space21").data("move1",'22').data("move2",'42').data("move3",'').data("move4",'').data("left",50).data("top",390).data("location",21).data("fortify",false);
        $("#space22").data("move1",'19').data("move2",'21').data("move3",'23').data("move4",'27').data("left",140).data("top",390).data("location",22).data("fortify",false);
        $("#space23").data("move1",'22').data("move2",'24').data("move3",'43').data("move4",'').data("left",230).data("top",390).data("location",23).data("fortify",false);
        $("#space24").data("move1",'23').data("move2",'20').data("move3",'25').data("move4",'').data("left",310).data("top",390).data("location",24).data("fortify",false);
        $("#space25").data("move1",'24').data("move2",'26').data("move3",'44').data("move4",'').data("left",400).data("top",390).data("location",25).data("fortify",false);
        $("#space26").data("move1",'25').data("move2",'28').data("move3",'').data("move4",'').data("left",490).data("top",390).data("location",26).data("fortify",false);
        
        $("#space27").data("move1",'22').data("move2",'30').data("move3",'').data("move4",'').data("left",160).data("top",460).data("location",27).data("fortify",false);
        $("#space28").data("move1",'26').data("move2",'33').data("move3",'').data("move4",'').data("left",490).data("top",460).data("location",28).data("fortify",false);
        
        $("#space29").data("move1",'30').data("move2",'45').data("move3",'').data("move4",'').data("left",50).data("top",530).data("location",29).data("fortify",false);
        $("#space30").data("move1",'29').data("move2",'27').data("move3",'31').data("move4",'').data("left",160).data("top",530).data("location",30).data("fortify",false);
        $("#space31").data("move1",'30').data("move2",'32').data("move3",'46').data("move4",'').data("left",270).data("top",530).data("location",31).data("fortify",false);
        $("#space32").data("move1",'31').data("move2",'33').data("move3",'').data("move4",'').data("left",380).data("top",530).data("location",32).data("fortify",false);
        $("#space33").data("move1",'32').data("move2",'28').data("move3",'').data("move4",'').data("left",490).data("top",530).data("location",33).data("fortify",false);
        
        $("#space34").data("move1",'1').data("move2",'2').data("move3",'').data("move4",'').data("left",80).data("top",110).data("location",34).data("fortify",false);
        $("#space35").data("move1",'3').data("move2",'').data("move3",'').data("move4",'').data("left",200).data("top",110).data("location",35).data("fortify",false);
        
        $("#space36").data("move1",'4').data("move2",'').data("move3",'').data("move4",'').data("left",280).data("top",110).data("location",36).data("fortify",false);
        $("#space37").data("move1",'5').data("move2",'').data("move3",'').data("move4",'').data("left",380).data("top",110).data("location",37).data("fortify",false);
        $("#space38").data("move1",'6').data("move2",'7').data("move3",'').data("move4",'').data("left",485).data("top",110).data("location",38).data("fortify",false);
        
        $("#space39").data("move1",'12').data("move2",'').data("move3",'').data("move4",'').data("left",60).data("top",230).data("location",39).data("fortify",false);
        $("#space40").data("move1",'14').data("move2",'').data("move3",'').data("move4",'').data("left",195).data("top",230).data("location",40).data("fortify",false);
        
        $("#space41").data("move1",'17').data("move2",'').data("move3",'').data("move4",'').data("left",460).data("top",230).data("location",41).data("fortify",false);
        $("#space42").data("move1",'21').data("move2",'').data("move3",'').data("move4",'').data("left",60).data("top",350).data("location",42).data("fortify",false);
        $("#space43").data("move1",'23').data("move2",'').data("move3",'').data("move4",'').data("left",230).data("top",350).data("location",43).data("fortify",false);
        $("#space44").data("move1",'25').data("move2",'').data("move3",'').data("move4",'').data("left",400).data("top",350).data("location",44).data("fortify",false);
        $("#space45").data("move1",'29').data("move2",'').data("move3",'').data("move4",'').data("left",70).data("top",500).data("location",45).data("fortify",false);
        $("#space46").data("move1",'31').data("move2",'').data("move3",'').data("move4",'').data("left",275).data("top",500).data("location",46).data("fortify",false);
    }

function assignlocations() {

}

function newunit(){
    going=true;
          var tempname;
    var tempclass;
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
                   tempname="Enchantress"
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
                tempclass="Templar";
                   tempname="Templar1"
                break;
            case 9:
                tempclass="Healer";
                   tempname="Healer1"
                break;
            case 10:
                tempclass="Thief";
                   tempname="Thief1"
                break;
            case 11:
                tempclass="Sorcerer";
                   tempname="Sorcerer"
                break;
            case 12:
                tempclass="Wizard";
                   tempname="Wizard1"
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
                thistemp=-1;
                if ($('#space' + Egroups[i].location).data("fortify") === true) {
                    $('#space' + Egroups[i].location).data("fortify",false);
                } else {
                if (Egroups[i].location === 1 && nomove(2) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    thistemp = 2;
                }
                if (Egroups[i].location === 2 && nomove(3) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 3;
                }
                if (Egroups[i].location === 3 && nomove(4) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 4;
                }
                if (Egroups[i].location === 4 && nomove(5) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp =5;
                }
                if (Egroups[i].location === 5 && nomove(6) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 6;
                }
                if (Egroups[i].location === 6 && nomove(7) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 7;
                }
                if (Egroups[i].location === 7 && nomove(11) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 11;
                }
                if (Egroups[i].location ===8 && nomove(2) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 2;
                }
                if (Egroups[i].location === 11 && nomove(18) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 18;
                }
                if (Egroups[i].location === 12 && nomove(13) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 13;
                }
                if (Egroups[i].location === 13 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                      if(direction==1 && nomove(19) === false){
                              thistemp = 19;
                          }else{
                              if(nomove(8)==false){
                                   thistemp = 8;
                              }
                          }
                }
                if (Egroups[i].location === 14 && nomove(13) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 13
                }
                if (Egroups[i].location === 15 && nomove(14) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 14
                }
                if (Egroups[i].location === 16 && nomove(15) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 15;
                }
                if (Egroups[i].location === 17 && nomove(16) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 16;
                }
                if (Egroups[i].location === 18 && nomove(17) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 17;
                }
                if (Egroups[i].location === 19 && nomove(22) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 22;
                }
                if (Egroups[i].location === 20 && nomove(15) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 15;
                }
                if (Egroups[i].location === 21 && nomove(22) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 22;
                }
                if (Egroups[i].location === 22 && nomove(23) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 23
                }
                      if (Egroups[i].location === 23 && nomove(24) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 24;
                }
                if (Egroups[i].location === 24 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                          if(direction==1 && nomove(25) === false){
                              thistemp = 25;
                          }else{
                                   if(nomove(20)==false){
                                   thistemp = 20;
                              }
                          }
                        
                }
                     if (Egroups[i].location === 25 & nomove(26) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 26;
                }
                     if (Egroups[i].location === 26 & nomove(28) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 28;
                }
                if (Egroups[i].location === 27 & nomove(22) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 22;
                }
                     if (Egroups[i].location === 28 & nomove(33) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 33;
                }
                    if (Egroups[i].location === 29 & nomove(30) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 30;
                }
                     if (Egroups[i].location === 33 & nomove(32) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 32;
                }
                     if (Egroups[i].location === 32 & nomove(31) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 31;
                }
                     if (Egroups[i].location === 31 & nomove(30) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 30;
                }
                       if (Egroups[i].location === 30 && nomove(27) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                     thistemp = 27;
                }
                    if(thistemp>-1){
                         Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
        
                    Egroups[i].curleft = $("#space" + thistemp).data("left");
                    Egroups[i].curtop = $("#space" + thistemp).data("top");
                    }
                   
            }
        }
        showwall();
    }

    function createbadguys(){

        //choose badguy
        var temp = Math.floor((Math.random() * 15) + 1);
        var randnum = Math.floor((Math.random() * 4) + 1);
        
        switch(randnum){
            case 1:
                baddielocation=1;
                break;
            case 2:
                baddielocation=12;
                break;
            case 3:
                baddielocation=21;
                break;
            case 4:
                baddielocation=29;
                break;
        }
        if (day<=10 && day>=1){
            switch(temp){
                case 1:
                case 2:
                case 3:
                    Eunits[newEindex()]=new ESoldier(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,200,'Soldier');
                    break;
                case 4:
                case 5:
                    Eunits[newEindex()]=new EMage(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,300,'Mage');
                    break;
                case 6: 
                case 7:
                    Eunits[newEindex()]=new EArcher(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Archer');
                    break;
                case 8:
                    Eunits[newEindex()]=new EWizard(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new EGuard(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Wizard');
                    break;
                case 9:
                    Eunits[newEindex()]=new ERouge(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Rouge');
                    break;
                case 10:
                    Eunits[newEindex()]=new EGuard(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new EGuard(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Guard');
                    break;
            }
        }
        if (day<20 && day>=10){
            switch(temp){
                case 1:
                case 2:
                case 3:
                    Eunits[newEindex()]=new ESoldier(curEindex, Egroupindex,difflevel);
                     Eunits[newEindex()]=new ESoldier(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,200,'Soldier');
                    break;
                case 4:
                case 5:
                    Eunits[newEindex()]=new EMage(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new EMage(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,300,'Mage');
                    break;
                case 6: 
                case 7:
                    Eunits[newEindex()]=new EWizard(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new EGuard(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Wizard');
                case 8:
                    Eunits[newEindex()]=new EArcher(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new EGuard(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Archer');
                    break;
                case 9:
                    Eunits[newEindex()]=new ERouge(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new EGuard(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Archer');
                    break;
                case 10:
                    Eunits[newEindex()]=new ERouge(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new EWizard(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Wizard');
                    break;
            }
        }
        if (day<30 && day>=20){
               switch(temp){
                case 1:
                case 2:
                case 3:
                    Eunits[newEindex()]=new EMage(curEindex, Egroupindex,difflevel);
                     Eunits[newEindex()]=new EGuard(curEindex, Egroupindex,difflevel);  
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,200,'Guard');
                    break;
                case 4:
                case 5:
                    Eunits[newEindex()]=new EMage(curEindex, Egroupindex,difflevel);
                       Eunits[newEindex()]=new EMage(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,300,'Mage');
                    break;
                case 6: 
                case 7:
                    Eunits[newEindex()]=new EArcher(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new ERouge(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Archer');
                    break;
                case 8:
                    Eunits[newEindex()]=new ESoldier(curEindex, Egroupindex,difflevel);
                       Eunits[newEindex()]=new ESoldier(curEindex, Egroupindex,difflevel);
                       Eunits[newEindex()]=new ESoldier(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Soldier');
                    break;
                case 9:
                    Eunits[newEindex()]=new ESoldier(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new EGuard(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Soldier');
                    break;
                case 10:
                    Eunits[newEindex()]=new EWizard(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new EWizard(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new EWizard(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Wizard');
                    break;
            }
        }
        if (day<40 && day>=30){
     switch(temp){
                case 1:
                case 2:
                case 3:
                    Eunits[newEindex()]=new EWizard(curEindex, Egroupindex,difflevel);
             Eunits[newEindex()]=new EGuard(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,200,'Wizard');
                    break;
                case 4:
                case 5:
                    Eunits[newEindex()]=new ESoldier(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new EGuard(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,300,'ESoldier');
                    break;
                case 6: 
                case 7:
                    Eunits[newEindex()]=new ESoldier(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new EGuard(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new ESoldier(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Soldier');
                    break;
                case 8:
                    Eunits[newEindex()]=new EArcher(curEindex, Egroupindex,difflevel);
                     Eunits[newEindex()]=new EArcher(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Archer');
                    break;
                case 9:
                    Eunits[newEindex()]=new ERouge(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new ERouge(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Rouge');
                    break;
                case 10:
                    Eunits[newEindex()]=new ERouge(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new EGuard(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new ERouge(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Guard');
                    break;
            }
        }
        if(day ==50){
            gameover();
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
                        backgroundpic="../Pictures/backgroundpics/roadbackground.png";
    return backgroundpic;
}

function updateHeader(){
           $('#top').html("<div style='margin-top:15px; margin-left:10px'><span>Turn:" + day + "/30</span><span style='margin-left:20px'>Money:" + money + "/3000</span>")
}
function indiv_newday(){
             updateHeader(); 
    if(day>=30){
        gameover();
    }
}
function indiv_gotocapitol(){
      $("#TEXT").empty().append('<div class="gotobutton" id = "gotobarracks"><p>BARRACKS</p></div><div class="gotobutton" id = "gotobrewery"><p>BREWERY</p></div>');
}
function indiv_youwin(curlocation){
    if($("#space" + curlocation + " img").attr("reward")>=0){
           var allempty=true;
        var curmoney = $("#space" + curlocation + " img").attr("reward");
        for(var i = 1;i<Egroupindex;i++){
            if(Egroups[i].location==curlocation){
                allempty=false;
            }
        }
        if(allempty){
            $("#Q" + curlocation).remove();
            money+=parseInt(curmoney);
            updateHeader();
        }
        if(money>=3000){
            winbattle("../35/beach.html")
        }
    }
}

function capturedAll(){}

function levelresearch(){
    
}
function enemyconquer(){
    
}

$(window).load(function(){
    changesong("01/town.mp3")
    saving("34")
        containaccessories();
    
         updateHeader(); 
    
    

    //click buttons on map
   $("#space70").click(function(){
        gotocapitol();
    });
        var details = [];
    Eunits[newEindex()]=new Werewolf(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Vampire(curEindex, Egroupindex,difflevel);
    
    Egroups[Egroupindex]=new Enewgroup(4,34,800,'Ice Elemental');
    
    Eunits[newEindex()]=new Werewolf(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Werewolf(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(5,34,800,'Fire Elemental');
    
    Eunits[newEindex()]=new Werewolf(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Werewolf(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(5,34,800,'Fire Elemental');
    details[34]="A pack of werewolfs are housed up in the building. Been eating our dogs. I think one might have a pet bird."
    
            //35
    Eunits[newEindex()]=new EMage(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new EGuard(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(4,35,800,'Ice Elemental');
    
    Eunits[newEindex()]=new EWizard(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new EGuard(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(5,35,800,'Fire Elemental');
    
    Eunits[newEindex()]=new EMage(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new EGuard(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new EMage(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(5,35,800,'Fire Elemental');
    details[35]="A number of mages hsve been expelled from their guild, and started doing some freelance criminal work. They also hired them some guards to help."
    
                //36
    Eunits[newEindex()]=new Magnet(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Magnet(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(4,36,800,'Ice Elemental');
    
    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Magnet(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(5,36,800,'Fire Elemental');
    
    Eunits[newEindex()]=new Cannon(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(5,36,800,'Fire Elemental');
    
    details[36]="Local 'Genius' tried to hack some robots in his own home, and now they're out of control. Help the guy out."
    
                    //37
    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(4,37,800,'Ice Elemental');
    
    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(5,37,800,'Fire Elemental');
    
    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(5,37,800,'Fire Elemental');
    
    details[37]="Gremlins... So many Gremlins..."
                    //38
    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(4,38,800,'Ice Elemental');
    
    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Flamewraith(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(5,38,800,'Fire Elemental');
    
    Eunits[newEindex()]=new Hellhound(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Flamewraith(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Hellhound(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(5,38,800,'Fire Elemental');
    
    details[38]="We sent some firemen to put out what we thought was a normal fire. At least until it started biting. Fire doesn't normally do that."
    
                        //39
    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(4,39,800,'Ice Elemental');
    
    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(5,39,800,'Fire Elemental');
    
    details[39]="Home security system keeps everyone out... including it's own residents. Next time they shouldn't buy from traveling salesmen."
    
    //40
        Eunits[newEindex()]=new Wolf(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(1,40,500,'Soldier');
    
     Eunits[newEindex()]=new Wolf(curEindex, Egroupindex,difflevel);
        Eunits[newEindex()]=new Wolf(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(2,40,500,'Wizard');
    details[40]="Residents leave their house for one week and come back to a house filled with wolves."
    
    
    //41
    Eunits[newEindex()]=new IceElemental(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(4,41,800,'Ice Elemental');
    
    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new EWizard(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(5,41,800,'Fire Elemental');
    
    details[41]="A wizard has some illegal pets which keeps attacking people."
    
        //42
       Eunits[newEindex()]=new Bee(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Bee(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Bee(curEindex, Egroupindex,difflevel);
     Eunits[newEindex()]=new Bee(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Bee(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(4,42,800,'Ice Elemental');
    
    Eunits[newEindex()]=new Bee(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Bee(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Beekeeper(curEindex, Egroupindex,difflevel);
     Eunits[newEindex()]=new Bee(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Bee(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(4,42,800,'Ice Elemental');
    
    details[42]="I enjoy honey as much as the next person, but this guy's lease says 'No Pets'. Also, attacking people with bees is frown upon in the city."
    
            //43
       Eunits[newEindex()]=new Zombie(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Zombie(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(4,43,800,'Ice Elemental');
    
    Eunits[newEindex()]=new Zombie(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Zombie(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Zombie(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(4,43,800,'Ice Elemental');
    
    Eunits[newEindex()]=new Zombie(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Necromancer(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Zombie(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(4,43,800,'Ice Elemental');
    
    details[43]="Apparently this mortician has a side hobby..."
    
                //44
    Eunits[newEindex()]=new Wisp(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Wisp(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(4,44,800,'Ice Elemental');
    
    Eunits[newEindex()]=new IceElemental(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new IceElemental(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(4,44,800,'Ice Elemental');
    
    Eunits[newEindex()]=new IceElemental(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Frostwraith(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new IceElemental(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(4,44,800,'Ice Elemental');
    
    details[44]="Local icecream shop owner had a brilliant idea to keep his product cold... Had..."
    
                    //45
    Eunits[newEindex()]=new ESoldier(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Spider(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(4,45,800,'Ice Elemental');
    
    Eunits[newEindex()]=new ESoldier(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Spider(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new ESoldier(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(4,45,800,'Ice Elemental');
    
    details[45]="Silk production is illegal here."
                    //46
    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(4,46,800,'Ice Elemental');
    
    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Magnet(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(4,46,800,'Ice Elemental');
    
    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Magnet(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(4,46,800,'Ice Elemental');
    
        Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Cannon(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(4,46,800,'Ice Elemental');
    
    details[46]="Not sure how this house got filled with metal-heads, but it needs to be cleaned out."

$(".Eicon").addClass("hidden")
$(".Qicon").click(function(){
    var location = $(this).attr("location");
    $('#TEXT').empty();
    $('#TEXT').append("<h1 style='text-align:center'>Reward: $" + $(this).attr("reward") + "</h1>")
        for(var j = 1;j<Egroupindex;j++){
            for(var i =0;i<Eindex;i++){
                if(Eunits[i].group===j && Egroups[j].location==location && Eunits[i].alive===true){
                    $("#TEXT").append('<div style="margin-left:5px" class="row" id="barracks' + j + '"></div><br>');
                    $("#barracks" + j).append("<span>" + Eunits[i].picture + "</span>");
                    $('#E' +i).append('<div class="Ehealthbar" id = "HB' + i + '" style="position: absolute; margin-top:90%; width: ' + (Eunits[i].health/Eunits[i].maxhealth)*100 + '%"></div>');
                }
            }
        }
    $("#TEXT").append("<p>" + details[parseInt(location)] +"</p>")
    
            getstats()
})
});