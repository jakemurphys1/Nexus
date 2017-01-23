
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
var noexplore=true;
var number_of_units=6;
var noescape=true;

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
        $("#space1").data("move1",'2').data("move2",'').data("move3",'').data("move4",'').data("left",285).data("top",210).data("location",1).data("fortify",false);
        $("#space2").data("move1",'3').data("move2",'1').data("move3",'').data("move4",'').data("left",285).data("top",260).data("location",2).data("fortify",false);
        $("#space3").data("move1",'4').data("move2",'2').data("move3",'').data("move4",'').data("left",285).data("top",310).data("location",3).data("fortify",false);
        $("#space4").data("move1",'5').data("move2",'3').data("move3",'').data("move4",'').data("left",285).data("top",360).data("location",4).data("fortify",false);
        $("#space5").data("move1",'6').data("move2",'4').data("move3",'').data("move4",'').data("left",285).data("top",410).data("location",5).data("fortify",false);
        $("#space6").data("move1",'5').data("move2",'').data("move3",'').data("move4",'').data("left",285).data("top",460).data("location",6).data("fortify",false);
    }

function assignlocations() {

}
function tipmessage(){
    
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
        var baddielocation=1

        if (day<=5 && day>=1){
            switch(temp){
                case 1:
                case 2:
                    Eunits[newEindex()]=new Wisp(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,300,'Wisp');
                    break;
                case 3:
                case 4:
                case 5:
                    Eunits[newEindex()]=new LightningElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,200,'Lightning Elemental');
                    break;
                case 6:
                    Eunits[newEindex()]=new Spider(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,200,'spider');
                    break;
                case 7:
                    Eunits[newEindex()]=new LightningElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Fire Elemental');
                    break;
                case 8:
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Gremlin');
                    break;
                case 9:
                    Eunits[newEindex()]=new Wolf(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'wolf');
                    break;
                case 10:
                    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,200,'Sparrow');
                    break;
            }
        }
        if (day<=10 && day>5){
            switch(temp){
                case 1:
                case 2:
                    Eunits[newEindex()]=new Werewolf(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,300,'werewolf');
                    break;
                case 3:
                case 4:
                    Eunits[newEindex()]=new Wisp(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,100,'Wisp');
                    break;
                case 5:
                    Eunits[newEindex()]=new Bear(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,300,'bear');
                    break;
                case 6:
                    Eunits[newEindex()]=new Spitter(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Spitter');
                    break;
                case 7:
                    Eunits[newEindex()]=new Hellhound(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Hellhound(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'hellhound');
                    break;
                case 8:
                    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Sparrow');
                    break;
                case 9:
                    Eunits[newEindex()]=new Wolf(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Spider(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'spider');
                    break;
                case 10:
                    Eunits[newEindex()]=new Wolf(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Werewolf(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,700,'werewolf');
                    break;
            }
        }
        if (day<=15 && day>10){
            switch(temp){
                case 1:
                case 2:
                    Eunits[newEindex()]=new Wisp(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Wisp(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,300,'Wisp');
                    break;
                case 3:
                case 4:
                    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Wolf(curEindex, Egroupindex,difflevel);
                     Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,300,'wolf');
                    break;
                case 5:
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Gremlin');
                    break;
                case 6:
                    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bear(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'bear');
                    break;
                case 7:
                    Eunits[newEindex()]=new Werewolf(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Wolf(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'werewolf');
                    break;
                case 8:
                    Eunits[newEindex()]=new Hellhound(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Hellhound(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Hellhound(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'hellhound');
                    break;
                case 9:
                    Eunits[newEindex()]=new Wolf(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Spider(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'spider');
                    break;
                case 10:
                    Eunits[newEindex()]=new Vampire(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'vampire');
                    break;
            }
        }
        if (day<=20 && day>15){
            switch(temp){
                case 1:
                case 2:
                    Eunits[newEindex()]=new Werewolf(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,300,'werewolf');
                    break;
                case 3:
                case 4:
                    Eunits[newEindex()]=new Vampire(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'vampire');
                    break;
                case 5:
                    Eunits[newEindex()]=new Bear(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Wolf(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,300,'bear');
                    break;
                case 6:
                    Eunits[newEindex()]=new Wisp(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Wisp(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Wisp');
                    break;
                case 7:
                    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Magnet(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Sparrow');
                    break;
                case 8:
                    Eunits[newEindex()]=new Bear(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Wolf(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'bear');
                    break;
                case 9:
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Gremlin');
                    break;
                case 10:
                    Eunits[newEindex()]=new Wolf(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Spider(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Wolf(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,700,'wolf');
                    break;
            }
        }
        if (day>20 && day<=25){
            switch(temp){
                case 1:
                case 2:
                    Eunits[newEindex()]=new Werewolf(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,300,'werewolf');
                    break;
                case 3:
                case 4:
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Fire Elemental');
                    break;
                case 5:
                     Eunits[newEindex()]=new Wisp(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new LightningElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Wisp');
                    break;
                case 6:
                    Eunits[newEindex()]=new Angel(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Angel');
                    break;
                case 7:
                    Eunits[newEindex()]=new Bear(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Magnet(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Magnet');
                    break;
                case 8:
                    Eunits[newEindex()]=new Bear(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Clunker');
                    break;
                case 9:
                    Eunits[newEindex()]=new Bear(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Magnet(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Magnet');
                    break;
                case 10:
                    Eunits[newEindex()]=new Wisp(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Wisp(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Wisp(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,700,'Wisp');
                    break;
            }
        }
        if (day>25 && day<=30){
            switch(temp){
                case 1:
                case 2:
                    Eunits[newEindex()]=new Werewolf(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,300,'werewolf');
                    break;
                case 3:
                case 4:
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Fire Elemental');
                    break;
                case 5:
                     Eunits[newEindex()]=new Wisp(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new LightningElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Wisp');
                    break;
                case 6:
                    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Angel(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Angel');
                    break;
                case 7:
                    Eunits[newEindex()]=new Bear(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Magnet(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Magnet');
                    break;
                case 8:
                    Eunits[newEindex()]=new Bear(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Clunker');
                    break;
                case 9:
                    Eunits[newEindex()]=new Bear(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Frostlord(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Frostlord');
                    break;
                case 10:
                    Eunits[newEindex()]=new Wisp(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Wisp(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Wisp(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,700,'Wisp');
                    break;
            }
        }
        if (day<=35 && day>30){
            switch(temp){
                case 1:
                case 2:
                    Eunits[newEindex()]=new clunker(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,300,'Clunker');
                    break;
                case 3:
                case 4:
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Fire Elemental');
                    break;
                case 5:
                     Eunits[newEindex()]=new Wisp(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new LightningElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Wisp(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,700,'Wisp');
                    break;
                case 6:
                    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Angel(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Angel');
                    break;
                case 7:
                    Eunits[newEindex()]=new Vacuum(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Vacuum');
                    break;
                case 8:
                    Eunits[newEindex()]=new Bear(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Wolf(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Clunker');
                    break;
                case 9:
                    Eunits[newEindex()]=new Vampire(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Vampire(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'vampire');
                    break;
                case 10:
                    Eunits[newEindex()]=new Wisp(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Wisp(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Wisp(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,700,'Wisp');
                    break;
            }
        }
        if(day==40){
            winbattle("../23/beforeairship.html")
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
                        backgroundpic="../Pictures/backgroundpics/bridgebackground.png";
    return backgroundpic;
}


function indiv_newday(){
           $('.heading').remove();
        $('#top').append("<h1 class = 'heading'>Turn: " + day + "/40</h1>");
}
function indiv_gotocapitol(){
      $("#TEXT").empty().append('<div class="gotobutton" id = "gotobarracks"><p>BARRACKS</p></div><div class="gotobutton" id = "gotobrewery"><p>BREWERY</p></div>');
}

function levelresearch(){
    
}
function enemyconquer(){
    
}

  function tempnewgroup(e){
        this.index=e;
      this.location=6;
        if(e==2){
            this.location=5;
        }
        
        this.hasmoved=false;
        this.active=true;
        this.curleft=310;
        this.curtop=280;

        this.slot1=-1;
        this.slot2=-1;
        this.slot3=-1;
      var location =2
      var topadd=270
      if(e==2){
          location =1
          topadd=210
      }
      
        var leftpos = Number($("#space" + location).css("left").replace("px","")) + 15;
        var toppos = Number($("#space" + location).css("top").replace("px","")) + topadd;
        $('#background').append('<img src="../Pictures/soldiericon.png" class="icon" id="M' + groupindex +'" style="left: ' + (leftpos-15) +'px; top:' + (toppos-10) + 'px" />');
        groupindex+=1;
    }
function liberate(){
    
}
$(window).load(function(){
    changesong("01/NBattle.mp3")
    saving("22")
    
        containaccessories();
    units[0]= new Soldier(0,"Soldier2");
    units[1]= new Knight(1,"Knight2");
    units[2]= new Guard(2,"Guard");
    groups[groupindex]= new tempnewgroup(groupindex);
    units[0].group=1;
    units[0].slot=1
    units[1].group=1;
    units[1].slot=2
    units[2].group=1;
    units[2].slot=3
    
        units[3]= new Archer(3,"Archer4");
    units[4]= new Enchantress(4,"Enchantress");
    units[5]= new Rouge(5,"Rouge2");
    groups[groupindex]= new tempnewgroup(groupindex);
    units[3].group=2;
    units[3].slot=1
    units[4].group=2;
    units[4].slot=2
    units[5].group=2;
    units[5].slot=3
    
    //exchange
            $(".icon").mousedown(function(e) {
                if(e.button === 2 ) {
                    var temp = $(this).attr('id').replace("M","");
                    exchangeunits(temp);
                }
            });
    
    
     groupinfo();
    
    
    $("#M1").animate({
        top:"-=50px",
    },3500,"linear")
    $(".platform").animate({
        top:"-=50px",
    },3500,"linear")

});