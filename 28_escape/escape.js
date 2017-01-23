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

var number_of_units=11;

noheal=false;
noexplore=true;

var missiondetails = "<p>Every turn, the Kraken will comes closer. If it reaches the Nexus, it's gameover.</p><p>Send groups to fight it. While they can't win the battle, every time they injure an eye, the kraken will be delayed one turn. The turns it will be delayed is shown at the top. This means it won't move when you pass the turn.</p><p>Don't forget to use the 'Level-up' potions in the barracks. You have 10 of them.</p><p>If you can delay the kraken for 25 turns, you win.</p>"

 var delayKraken=0;


function containaccessories(){
    
}
//wall
    function showwall(){}
    function setlocationstuff(){

        $("#space13").data("move1",'70').data("move2",'12').data("move3",'').data("move4",'').data("left",460).data("top",310).data("location",13).data("fortify",false);
        $("#space12").data("move1",'11').data("move2",'13').data("move3",'').data("move4",'').data("left",430).data("top",310).data("location",12).data("fortify",false);
        $("#space11").data("move1",'12').data("move2",'10').data("move3",'').data("move4",'').data("left",400).data("top",310).data("location",11).data("fortify",false);
        $("#space10").data("move1",'9').data("move2",'11').data("move3",'').data("move4",'').data("left",370).data("top",310).data("location",10).data("fortify",false);
        $("#space9").data("move1",'8').data("move2",'10').data("move3",'').data("move4",'').data("left",340).data("top",310).data("location",9).data("fortify",false);
        $("#space8").data("move1",'7').data("move2",'9').data("move3",'').data("move4",'').data("left",310).data("top",310).data("location",8).data("fortify",false);
        $("#space7").data("move1",'6').data("move2",'8').data("move3",'').data("move4",'').data("left",280).data("top",310).data("location",7).data("fortify",false);
        
        $("#space6").data("move1",'5').data("move2",'7').data("move3",'').data("move4",'').data("left",250).data("top",310).data("location",6).data("fortify",false);
        $("#space5").data("move1",'4').data("move2",'6').data("move3",'').data("move4",'').data("left",220).data("top",310).data("location",5).data("fortify",false);
        $("#space4").data("move1",'3').data("move2",'5').data("move3",'').data("move4",'').data("left",190).data("top",310).data("location",4).data("fortify",false);
        $("#space3").data("move1",'2').data("move2",'4').data("move3",'').data("move4",'').data("left",160).data("top",310).data("location",3).data("fortify",false);
        $("#space2").data("move1",'1').data("move2",'3').data("move3",'').data("move4",'').data("left",130).data("top",310).data("location",2).data("fortify",false);
        $("#space1").data("move1",'').data("move2",'2').data("move3",'').data("move4",'').data("left",100).data("top",310).data("location",1).data("fortify",false);

        $("#space70").data("move1",'13').data("move2",'').data("move3",'').data("move4",'').data("left",480).data("top",300).data("location",70).data("fortify",false);
    }
function assignlocations() {}
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
                  tempname="Edgar";
                break;
            case 6:
                tempclass="Knight";
                  tempname="Knight";
                break;
            case 7:
                tempclass="Rouge";
                  tempname="Rouge2";
                break;
            case 8:
                tempclass="Healer";
                  tempname="Healer2";
                break;
            case 9:
                tempclass="Sorcerer";
                  tempname="Sorcerer";
                break;
            case 10:
                tempclass="Enchantress";
                  tempname="Enchantress";
                break;
            case 11:
                tempclass="Guard";
                  tempname="Guard";
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

            $('.actions').append("");

        clickactionbuttons();
    }

function liberate(curloc){}

 function tipmessage(index, e){}

  function movebadguys(){
        var direction =  Math.floor((Math.random() * 2) + 1);
        var thistemp="";
        function nomove(e){
            return false
        }
        //moving
            if(delayKraken>0){
                return;
            }
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
                     Egroups[i].hasmoved = true;
                        thistemp = 2 
                    }
                    if (Egroups[i].location === 2 && Egroups[i].hasmoved === false) {
                     Egroups[i].hasmoved = true;
                        thistemp = 3 
                    }
                    if (Egroups[i].location === 3 && Egroups[i].hasmoved === false) {
                     Egroups[i].hasmoved = true;
                        thistemp = 4 
                    }
                    if (Egroups[i].location === 4 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 5 
                    }
                    if (Egroups[i].location === 5 && Egroups[i].hasmoved === false) {
                     Egroups[i].hasmoved = true;
                        thistemp = 6 
                    }
                    if (Egroups[i].location === 6 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 7 
                    }
                    if (Egroups[i].location === 7 && Egroups[i].hasmoved === false) {
                     Egroups[i].hasmoved = true;
                        thistemp = 8 
                    }
                    if (Egroups[i].location === 8 && Egroups[i].hasmoved === false) {
                     Egroups[i].hasmoved = true;
                        thistemp = 9 
                    }
                    if (Egroups[i].location === 9 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 10 
                    }
                    if (Egroups[i].location === 10 && Egroups[i].hasmoved === false) {
                     Egroups[i].hasmoved = true;
                        thistemp = 11 
                    }
                    if (Egroups[i].location === 11 && Egroups[i].hasmoved === false) {
                     Egroups[i].hasmoved = true;
                        thistemp = 12 
                    }
                    if (Egroups[i].location === 12 && Egroups[i].hasmoved === false) {
                     Egroups[i].hasmoved = true;
                        thistemp = 13 
                    }
                    if (Egroups[i].location === 13 && Egroups[i].hasmoved === false) {
                     Egroups[i].hasmoved = true;
                        thistemp = 70 
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
            if(day==1){
                Eunits[newEindex()]=new Eye(curEindex, Egroupindex,difflevel);
                Eunits[newEindex()]=new Eye(curEindex, Egroupindex,difflevel);
                Egroups[Egroupindex]=new Enewgroup(Egroupindex,1,500,'Eye');
                $("#EM1").css("display","none")
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
        backgroundpic="../Pictures/backgroundpics/desertbackground.png";
    return backgroundpic;
}
function updateHeader(){
     $('.heading').remove();
        $('#top').html("<h1 class = 'heading'>Turn: " + day + "/25</h1><span style='margin-left:40px'>Kraken delayed: " + delayKraken + "</span>");
}

function indiv_newday(){
    if(delayKraken>0){
        delayKraken-=1;
        updateHeader()
    }else{
        $(".kraken").animate({
         left:"+=30px"   
        })
        updateHeader();
    }
    if(day>=25){
        winbattle('../29/escaped.html')
    }
}
function indiv_return(){}


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
    saving("28")
        containaccessories();
    leveluppotion=10;
         updateHeader(); 
    
    $('#background').append('<img src="../Pictures/kraken.gif" class="kraken" style="left:-380px; top:120px;-ms-transform: rotate(90deg); -webkit-transform: rotate(90deg); transform: rotate(90deg);position:absolute;height:450px" />');
    
    //click buttons on map
   $("#space70").click(function(){
        gotocapitol();
    });
});