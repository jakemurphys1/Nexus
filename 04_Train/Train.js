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
noheal=true;
var nobrew=true;
var number_of_units=5;
var missiondetails = "<p>Click on the enemy groups to learn their strengths and weaknesses.</p><p>Create groups by clicking on the Nexus, clicking on 'Barracks', and the double-clicking the units.</p><p>Once created, click the blue group, and then right-click the enemies or the spaces to move the group there.</p><p> Once all five of the enemy groups are defeated, you win.</p>"

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
        $("#space70").data("castle",true).data("move1",'5').data("move2",'').data("move3",'').data("move4",'').data("left",275).data("top",430).data("location",70);
        
        $("#space1").data("move1",'2').data("move2",'').data("move3",'').data("move4",'').data("left",290).data("top",100).data("location",1).data("fortify",false);
        $("#space2").data("move1",'3').data("move2",'1').data("move3",'').data("move4",'').data("left",290).data("top",150).data("location",2).data("fortify",false);
        $("#space3").data("move1",'4').data("move2",'2').data("move3",'').data("move4",'').data("left",290).data("top",230).data("location",3).data("fortify",false);
        $("#space4").data("move1",'5').data("move2",'3').data("move3",'').data("move4",'').data("left",290).data("top",300).data("location",4).data("fortify",false);
        $("#space5").data("move1",'70').data("move2",'4').data("move3",'').data("move4",'').data("left",290).data("top",370).data("location",5).data("fortify",false);

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
                tempclass="Archer";
                tempname="Archer1";
                break;
            case 3:
                tempclass="Guard";
                tempname="Guard";
                break;
            case 4:
                tempclass="Soldier";
                tempname="Edgar"
                break;
            case 5:
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
    if(tempclass && tempname){
        createsoldier(tempclass,tempname);
    }

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
    
    }

    function createbadguys(){
     
    }

    function Enewgroup(index,location,experience,picture){
        var thisleft=0;
        var thistop=0;

      
            thisleft=$("#space" + index).css("left");
            thistop=$("#space" + index).css("top");
        
        
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


function indiv_newday(){

}
function indiv_gotocapitol(){
      $("#TEXT").empty().append('<div class="gotobutton" id = "gotobarracks"><p>BARRACKS</p></div>');
}
function indiv_youwin(){
     if(Egroups[1].location<0){
        winbattle('../05/aftertrain.html');
    }
}

function levelresearch(){
    
}
function enemyconquer(){
    
}

$(window).load(function(){
    changesong("01/NBattle.mp3")
    localStorage.setItem("level", "4");
    if(parseInt( localStorage.getItem("diff"))>0){
        difflevel=parseInt(localStorage.getItem("diff"));
    }
    
     message("Each group can only have 3 units in it, so you will need to choose which units will fight the beasts. Click the enemies to learn more about them. Use the right units against the right enemies.")

    
    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(1,1,1000,'Clunker');
    
    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(2,2,1000,'Sparrow');
    
    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(3,3,1000,'Fire Elemental');
    
                Eunits[newEindex()]=new Turtle(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(4,4,1000,'Turtle');
    
         Eunits[newEindex()]=new Goblin(curEindex, Egroupindex,difflevel);
    Eunits[newEindex()]=new Goblin(curEindex, Egroupindex,difflevel);
    Egroups[Egroupindex]=new Enewgroup(5,5,1000,'goblin');
    
    clickEicon();
    Egroupinfo();
    
      //exchange
            $(".icon").mousedown(function(e) {
                if(e.button === 2 ) {
                                    
                    var temp = $(this).attr('id').replace("M","");
                    exchangeunits(temp);
                }
            });
    
    $("#EM1").click(function(){
        message("This is one of those robots. Lightning is good against robots.")
    })
     $("#EM2").click(function(){
        message("These are sparrows. They will fly instantly to your units. Using units with higher defense, like the soldier or guard, will be important.")
    })
      $("#EM3").click(function(){
        message("Fire elementals have a high 'Resistance', so magic attacks won't be effective. They are also long-range, so you will want some long-range attackers like archers. Notice that they are fire, so if you use elemental attacks, Ice would be best.")
    })
       $("#EM4").click(function(){
        message("This is a turtle. This one has a high 'Defense', so physical attacks won't be effective. However, it does have low 'Resistance', so you should use magic. Also, the Rouge's poison arrow can be useful here.")
    })
        $("#EM5").click(function(){
        message("These are goblins. Click on the group and then notice their icons appears to the right. Click on the icon to see it's stats. All units are equally effective against them.")
    })
    


});