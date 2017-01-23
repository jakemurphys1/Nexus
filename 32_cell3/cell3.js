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
var missiondetails = "<p>Create groups and move them to meet the beast's groups before they reach your nexus. If they reach your nexus, it's gameover.</p><p>To capture the beasts, enter combat with them, click the 'Capture' button, and then right-click the enemy. The lower it's health, the more likely you will succeed in capturing it. Any unit in the battle can do it regardless of range or location.</p><p>Once you capture them, you can click on the Beast Nexus on the upper left. It looks like the regular Nexus, but a little darker. You can create groups of beasts the same way you do with humans. They don't, however, level up.</p><p>You can exchange beasts between groups regardless of how far apart they are.</p><p>You have 30 turns to destroy all the enemies above the wall using the beasts, or it's gameover.</p>"

var wolves=0;
var bears=0;
var spiders=0;
var turtles=0;
var elk=0;
var sparrows=0;

//keep
    function gotobeasts(){
        if(battleon===true){
            return;
        }
        barrackbutton="";
        spot1="";
        spot2="";
        spot3="";
        $("#TEXT").empty();

        $("#TEXT").append("<p style='text-align:center'>Double click to add to group</p>");
        $("#TEXT").append('<div class="entrypoint" id = "entry1"></div>');
        $("#TEXT").append('<div class="entrypoint" id = "entry2"></div>');
        $("#TEXT").append('<div class="entrypoint" id = "entry3"></div>');
        $("#TEXT").append('<div class="button" id = "createbutton">Create Group</div>');
        $("#TEXT").append('<div id="barracks"></div>');

        for(var i =0;i<index;i++){
            if(units[i].type !="Sparrow" && units[i].type !="Bear" && units[i].type !="Wolf" && units[i].type !="Turtle" && units[i].type !="Spider"){
                continue;
            }
            if(units[i].alive==false){
                continue;
            }
            if((units[i].group===0 || units[i].group===-1)){
                $("#barracks").append(units[i].picture);

                if(units[i].alive===true){
                    $('#' + i).append('<div class="healthbar" id = "HB' + i + '" style="position: relative; margin-top:90%; width: ' + (units[i].health/units[i].maxhealth)*100 + '%"></div>');
                }
            }
        }
        
        getstats();
        Bgroupunit();
        Bcreategroup();
         
    }
    function Bnewgroup(e){
        this.index=e;
        this.location=72;
        this.hasmoved=false;
        this.active=true;
        this.curleft=310;
        this.curtop=280;

        this.slot1=-1;
        this.slot2=-1;
        this.slot3=-1;
        var leftpos = Number($("#space72").css("left").replace("px","")) + 13;
        var toppos = Number($("#space72").css("top").replace("px","")) + 10;
        $('#background').append('<img src="../Pictures/soldiericon.png" class="icon" id="M' + groupindex +'" style="left: ' +leftpos +'px; top:' + toppos + 'px" />');
        groupindex+=1;
    }
    function Bcreategroup(){
        $("#createbutton").click(function(){
            if (spot1===""){
                message("There has to be at least one unit to make a group.");
                    return;
            }
            if ($("#space72").data('filled')===0){
                groups[groupindex]= new Bnewgroup(groupindex);
                if (spot1 != ""){
                    units[spot1].group=groupindex-1;
                    units[spot1].slot=1;
                }
                if (spot2 != ""){
                    units[spot2].group=groupindex-1;
                    units[spot2].slot=2;
                }
                if (spot3 != ""){
                    units[spot3].group=groupindex-1;
                    units[spot3].slot=3;
                }

                $("#TEXT").empty();
                spot1="";
                spot2="";
                spot3="";
                groupinfo();

                $("#space72").data('filled',groupindex);

            } else{
                message("You have to move the soldiers off the home base to create another group.")
            }
            //exchange
            $(".icon").mousedown(function(e) {
                if(e.button === 2 ) {
                    var temp = $(this).attr('id').replace("M","");
                    exchangeunits(temp);
                }
            });
        })
    }
    function Bgroupunit(){
        $('.barrackpic').dblclick(function(){
            var temp=$(this).offset();
            var templeft=temp.left;
            var temptop=temp.top;
            if(units[$(this).attr("id")].healing>0){
                message("This unit is still healing for " + units[$(this).attr("id")].healing + " more days." );
                return;
            }
            if(units[$(this).attr("id")].enroute>0){
                message("This unit is still traveling to the capitol and will take " + units[$(this).attr("id")].enroute + " more days." );
                return;
            }
            if(units[$(this).attr("id")].alive===false){
                message("This unit is dead." );
                return;
            }
            if($(this).attr("id")===spot1 || $(this).attr("id")===spot2 ||$(this).attr("id")===spot2){
                $("#TEXT").empty();
                spot1="";
                spot2="";
                spot3="";
                gotobarracks();
                return;
            }
            if (spot1===""){
                spot1=$(this).attr("id");

                $(this).animate({
                    left: 593 - templeft + 'px',
                    top: 110-temptop + 'px'
                }, 500);
                return;
            }
            if (spot2===""){
                spot2=$(this).attr("id");
                $(this).animate({
                    left: 680 - templeft + 'px',
                    top: 110-temptop + 'px'
                }, 500);
                return;
            }
            if (spot3===""){
                spot3=$(this).attr("id");
                $(this).animate({
                    left: 767 - templeft + 'px',
                    top: 110-temptop + 'px'
                }, 500);
                return;
            }

        })
    }

function containaccessories(){
    
}
//wall
    function showwall(){}

    function setlocationstuff(){
        $("#space70").data("castle",true).data("move1",'16').data("move2",'23').data("move3",'20').data("move4",'').data("left",275).data("top",350).data("location",70);
        $("#space72").data("castle",true).data("move1",'1').data("move2",'').data("move3",'').data("move4",'').data("left",50).data("top",210).data("location",72);

        $("#space1").data("move1",'72').data("move2",'2').data("move3",'').data("move4",'').data("left",125).data("top",230).data("location",1).data("fortify",false);
        $("#space2").data("move1",'1').data("move2",'3').data("move3",'').data("move4",'').data("left",200).data("top",230).data("location",2).data("fortify",false);
        $("#space3").data("move1",'2').data("move2",'4').data("move3",'').data("move4",'').data("left",275).data("top",230).data("location",3).data("fortify",false);
        $("#space4").data("move1",'3').data("move2",'5').data("move3",'').data("move4",'').data("left",350).data("top",230).data("location",4).data("fortify",false);
        $("#space5").data("move1",'6').data("move2",'4').data("move3",'').data("move4",'').data("left",425).data("top",230).data("location",5).data("fortify",false);
        $("#space6").data("move1",'5').data("move2",'7').data("move3",'').data("move4",'').data("left",500).data("top",230).data("location",6).data("fortify",false);
        $("#space7").data("move1",'6').data("move2",'8').data("move3",'').data("move4",'').data("left",515).data("top",160).data("location",7).data("fortify",false);
        $("#space8").data("move1",'9').data("move2",'7').data("move3",'').data("move4",'').data("left",500).data("top",100).data("location",8).data("fortify",false);
        $("#space9").data("move1",'10').data("move2",'8').data("move3",'').data("move4",'').data("left",425).data("top",100).data("location",9).data("fortify",false);
        $("#space10").data("move1",'9').data("move2",'11').data("move3",'').data("move4",'').data("left",350).data("top",100).data("location",10).data("fortify",false);
        $("#space11").data("move1",'12').data("move2",'10').data("move3",'').data("move4",'').data("left",275).data("top",100).data("location",11).data("fortify",false);
        $("#space12").data("move1",'13').data("move2",'11').data("move3",'').data("move4",'').data("left",200).data("top",100).data("location",12).data("fortify",false);
        $("#space13").data("move1",'12').data("move2",'').data("move3",'').data("move4",'').data("left",125).data("top",100).data("location",13).data("fortify",false);
        
        $("#space14").data("move1",'15').data("move2",'').data("move3",'').data("move4",'').data("left",70).data("top",370).data("location",14).data("fortify",false).data("castle",true).data("color",'red');
        $("#space15").data("move1",'16').data("move2",'14').data("move3",'').data("move4",'').data("left",145).data("top",370).data("location",15).data("fortify",false);
        $("#space16").data("move1",'15').data("move2",'70').data("move3",'').data("move4",'').data("left",220).data("top",370).data("location",16).data("fortify",false);
        $("#space17").data("move1",'18').data("move2",'').data("move3",'').data("move4",'').data("left",70).data("top",500).data("location",17).data("fortify",false);
        
        $("#space18").data("move1",'17').data("move2",'19').data("move3",'').data("move4",'').data("left",145).data("top",500).data("location",18).data("fortify",false);
        $("#space19").data("move1",'18').data("move2",'20').data("move3",'').data("move4",'').data("left",220).data("top",500).data("location",19).data("fortify",false);
        $("#space20").data("move1",'70').data("move2",'19').data("move3",'26').data("move4",'').data("left",285).data("top",450).data("location",20).data("fortify",false);
        $("#space21").data("move1",'22').data("move2",'').data("move3",'').data("move4",'').data("left",500).data("top",370).data("location",21).data("fortify",false);
        $("#space22").data("move1",'21').data("move2",'23').data("move3",'').data("move4",'').data("left",425).data("top",370).data("location",22).data("fortify",false);
        $("#space23").data("move1",'22').data("move2",'70').data("move3",'').data("move4",'').data("left",350).data("top",370).data("location",23).data("fortify",false);
        $("#space24").data("move1",'25').data("move2",'').data("move3",'').data("move4",'').data("left",500).data("top",500).data("location",24).data("fortify",false);
        $("#space25").data("move1",'24').data("move2",'26').data("move3",'').data("move4",'').data("left",425).data("top",500).data("location",25).data("fortify",false);
        
        $("#space26").data("move1",'20').data("move2",'25').data("move3",'16').data("move4",'').data("left",350).data("top",500).data("location",26).data("fortify",false);

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
                   tempname="Mage-C"
                break;
            case 2:
                tempclass="Guard";
                   tempname="Guard-C"
                break;
            case 3:
                tempclass="Archer";
                   tempname="Archer4"
                break;
            case 4:
                tempclass="Soldier";
                   tempname="Soldier-C"
                break;
            case 5:
                tempclass="Enchantress";
                   tempname="Enchantress"
                break;
            case 6:
                tempclass="Rouge";
                   tempname="Rouge2"
                break;
            case 7:
                tempclass="Thief";
                   tempname="Thief2"
                break;
            case 8:
                tempclass="Knight";
                   tempname="Knight-C"
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
        if(units[selectedindex].isanimal!=true){
            $('.actions').append("<div class = 'actionbutton' style='position:absolute; margin-top:30px; margin-left:265px; width:100px' id = 'Capture'>Capture</div>");
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
                    if (Egroups[i].location === 14 & nomove(15) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;

                        thistemp = 15

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 15 & nomove(16) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;

                        thistemp = 16

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 16 & nomove(70) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 70;

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 17 & nomove(18) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 18;

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                    if (Egroups[i].location === 18 & nomove(19) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 19;

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 19 & nomove(20) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 20;

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                     if (Egroups[i].location === 20 & nomove(70) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 70;
                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 21 & nomove(22) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 22;
                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 22 & nomove(23) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 23;
                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 23 & nomove(70) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 70;

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                                    if (Egroups[i].location === 24 & nomove(25) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 25;

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                                    if (Egroups[i].location === 25 & nomove(26) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 26;

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                      if (Egroups[i].location === 26 & nomove(20) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 20;

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
        var baddielocation=Math.floor((Math.random() * 4) + 1);


        switch(baddielocation){
            case 1:
                baddielocation=14;
                break;
            case 2:
                baddielocation=17;
                break;
            case 3:
                baddielocation=21;
                break;
            case 4:
                baddielocation=24;
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
                    Eunits[newEindex()]=new Bear(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'bear');
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
                    Eunits[newEindex()]=new Wolf(curEindex, Egroupindex,difflevel);
                       Eunits[newEindex()]=new Bear(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,300,'bear');
                    break;
                case 6: 
                case 7:
                    Eunits[newEindex()]=new Spider(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bear(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'bear');
                    break;
                case 8:
                    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,100,'Sparrow');
                    break;
                case 9:
                    Eunits[newEindex()]=new Spider(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Turtle(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Turtle');
                    break;
                case 10:
                    Eunits[newEindex()]=new Turtle(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
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
                    Eunits[newEindex()]=new Spider(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,300,'spider');
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
                    Eunits[newEindex()]=new Wolf(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bear(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'bear');
                    break;
            }
        }
        if (day<50 && day>=40){
               switch(temp){
                case 1:
                case 2:
                case 3:
                    Eunits[newEindex()]=new Turtle(curEindex, Egroupindex,difflevel);
                       Eunits[newEindex()]=new Turtle(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,200,'Turtle');
                    break;
                case 4:
                case 5:
                    Eunits[newEindex()]=new Spider(curEindex, Egroupindex,difflevel);
                       Eunits[newEindex()]=new Bear(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,300,'spider');
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
                       Eunits[newEindex()]=new Wolf(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Turtle(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Turtle');
                    break;
                case 10:
                    Eunits[newEindex()]=new Bear(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Wolf(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bear(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'bear');
                    break;
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
                        backgroundpic="../Pictures/backgroundpics/cell3background.png";
    return backgroundpic;
}
function updateHeader(){
           $('#top').html("<div style='margin-top:15px; margin-left:10px'><span>Turn:" + day + "/30</span><span style=''>");
}

function indiv_newday(){
             updateHeader(); 

    if(day>30){
        gameover();
    }
}
function indiv_youwin(){
    var alldefeated=true
    for(var i = 1;i<14;i++){
        if(Egroups[i].location>=0){
            alldefeated=false
        }
    }
    if(alldefeated){
        winbattle("../33/escape1.html")
    }
}
function indiv_gotocapitol(){
      $("#TEXT").empty().append('<div class="gotobutton" id = "gotobarracks"><p>BARRACKS</p></div><div class="gotobutton" id = "gotobrewery"><p>BREWERY</p></div>');
}

function capturedAll(name){
     switch(name){
                                case "Spider":
                                createsoldier("Spider","Spider")
                                break;
                                case "Sparrow":
                                createsoldier("Sparrow","Sparrow");
                                break;
                                case "Turtle":
                                createsoldier("Turtle","Turtle")
                                break;
                                case "Bear":
                                createsoldier("Bear","Bear")
                                break;
                                case "Wolf":
                                createsoldier("Wolf","Wolf")
                                break;
                        }
}

function levelresearch(){
    
}
function enemyconquer(){
    
}

$(window).load(function(){
    changesong("01/NBattle.mp3")
    saving("32")
        containaccessories();
    
         updateHeader(); 
    
        Eunits[newEindex()]=new ESoldier(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(1,1,500,'Soldier');
    
            Eunits[newEindex()]=new EArcher(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(2,2,500,'Archer');
    
        Eunits[newEindex()]=new EWizard(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(3,3,500,'Wizard');
    
    Eunits[newEindex()]=new ERouge(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(4,4,800,'Rouge');
    
      Eunits[newEindex()]=new EMage(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(5,5,800,'Mage');
    
            Eunits[newEindex()]=new ESoldier(curEindex, Egroupindex,difflevel);
     Eunits[newEindex()]=new ESoldier(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(6,6,500,'Soldier');
    
                Eunits[newEindex()]=new ERouge(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new ERouge(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(7,7,800,'Rouge');
    
                    Eunits[newEindex()]=new EMage(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new EArcher(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(8,8,800,'Mage');
    
                Eunits[newEindex()]=new EWizard(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new EArcher(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(9,9,800,'Wizard');
    
                   Eunits[newEindex()]=new ERouge(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new EGuard(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(10,10,1000,'Rouge');
    
    
               Eunits[newEindex()]=new EArcher(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new EGuard(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(11,11,1000,'Archer');
    
                   Eunits[newEindex()]=new EWizard(curEindex, Egroupindex,difflevel);
      Eunits[newEindex()]=new EMage(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new EWizard(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(12,12,1000,'Wizard');
    
    
               Eunits[newEindex()]=new EArcher(curEindex, Egroupindex,difflevel);
      Eunits[newEindex()]=new ESoldier(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new ERouge(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(13,13,1000,'Soldier');
    

    
    //click buttons on map
   $("#space70").click(function(){
        gotocapitol();
    });
$("#space72").click(function(){
        gotobeasts();
    });
});