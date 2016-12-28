var allynum=0;
var noexplore=true;

var number_of_units=8;

function containaccessories(){
    
}
//wall
    function showwall(){


    }

    function setlocationstuff(){
        $("#space70").data("castle",true).data("move1",'6').data("move2",'12').data("move3",'11').data("move4",'1').data("left",260).data("top",320).data("location",70);
        
        $("#space1").data("move1",'2').data("move2",'4').data("move3",'70').data("move4",'').data("left",280).data("top",250).data("location",1).data("fortify",false);
        $("#space2").data("move1",'1').data("move2",'3').data("move3",'12').data("move4",'').data("left",210).data("top",260).data("location",2).data("fortify",false);
        $("#space3").data("move1",'2').data("move2",'').data("move3",'').data("move4",'').data("left",145).data("top",265).data("location",3).data("fortify",false);
        $("#space4").data("move1",'1').data("move2",'5').data("move3",'11').data("move4",'').data("left",360).data("top",260).data("location",4).data("fortify",false);
        $("#space5").data("move1",'4').data("move2",'').data("move3",'').data("move4",'').data("left",440).data("top",265).data("location",5).data("fortify",false);
        $("#space6").data("move1",'7').data("move2",'9').data("move3",'70').data("move4",'').data("left",280).data("top",420).data("location",6).data("fortify",false);
        $("#space7").data("move1",'12').data("move2",'6').data("move3",'8').data("move4",'').data("left",210).data("top",410).data("location",7).data("fortify",false);
        $("#space8").data("move1",'7').data("move2",'').data("move3",'').data("move4",'').data("left",145).data("top",400).data("location",8).data("fortify",false);
        $("#space9").data("move1",'6').data("move2",'10').data("move3",'11').data("move4",'').data("left",360).data("top",410).data("location",9).data("fortify",false);
        $("#space10").data("move1",'9').data("move2",'').data("move3",'').data("move4",'').data("left",440).data("top",400).data("location",10).data("fortify",false);

        $("#space11").data("move1",'4').data("move2",'9').data("move3",'70').data("move4",'').data("left",365).data("top",340).data("location",11).data("fortify",false);
        $("#space12").data("move1",'7').data("move2",'2').data("move3",'70').data("move4",'').data("left",210).data("top",340).data("location",12).data("fortify",false);
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
                tempclass="Sorcerer";
                tempname="Sorcerer"
                break;
            case 2:
                tempclass="Knight";
                tempname="Knight"
                break;
            case 3:
                tempclass="Archer";
                tempname="Archer2"
                break;
            case 4:
                tempclass="Templar";
                tempname="Templar1"
                break;
            case 5:
                tempclass="Wizard";
                tempname="Wizard1"
                break;
            case 6:
                tempclass="Healer";
                tempname="Healer1"
                break;
                  case 7:
                tempclass="Rouge";
                tempname="Rouge2"
                break;
            case 8:
                tempclass="Soldier";
                tempname="Edgar"
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

        clickactionbuttons();
    }

function liberate(curloc){
       if(curloc==5){
           if(engine5==false){
               engine5=true;
               engines+=1
               updateHeader();
               $("#fan5 img").attr("src","pics/fan.gif");
           }
       }
     if(curloc==3){
           if(engine3==false){
               engine3=true;
               engines+=1
               updateHeader();
                $("#fan3 img").attr("src","pics/fan.gif");
           }
       }
     if(curloc==10 && fan10exists){
           if(engine10==false){
               engine10=true;
               engines+=1
               updateHeader();
                $("#fan10 img").attr("src","pics/fan.gif");
           }
       }
     if(curloc==8){
           if(engine8==false){
               engine8=true;
               engines+=1
               updateHeader();
                $("#fan8 img").attr("src","pics/fan.gif");
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
                if (Egroups[i].location === 1 && nomove(2) === false && nomove(4) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(direction==1){
                         thistemp = 2;
                    }else{
                         thistemp = 4;
                    }
                   
                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                         if (Egroups[i].location === 2 && nomove(3) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;

                         thistemp = 3;
                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 3 && Egroups[i].hasmoved === false) {
                        if(engine3==true){
                            engines-=1;
                            updateHeader();
                            engine3=false;
                            $("#fan3 img").attr("src","pics/fan-off.gif");
                        }
                }
                if (Egroups[i].location === 4 & nomove(5) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp =5;
                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 5 && Egroups[i].hasmoved === false) {
                        if(engine5==true){
                            engines-=1;
                            updateHeader();
                            engine5=false;
                             $("#fan5 img").attr("src","pics/fan-off.gif");
                        }
                }
                if (Egroups[i].location === 6 && nomove(7) === false && nomove(9) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        if(direction==1){
                         thistemp = 7;
                        }else{
                         thistemp = 9;
                        }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 7 && nomove(8) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 8;

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                      if (Egroups[i].location === 8 && Egroups[i].hasmoved === false) {
                  if(engine8==true){
                            engines-=1;
                            updateHeader();
                            engine8=false;
                      $("#fan8 img").attr("src","pics/fan-off.gif");
                        }
                }
                if (Egroups[i].location === 9 && nomove(10) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 10;

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 10 & nomove(26) === false && Egroups[i].hasmoved === false) {
                  if(engine10==true){
                            engines-=1;
                            updateHeader();
                            engine10=false;
                      $("#fan10 img").attr("src","pics/fan-off.gif");
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
        var baddielocation=Math.floor((Math.random() * 6) + 1);


        switch(baddielocation){
            case 1:
                baddielocation=1;
                break;
            case 2:
                baddielocation=2;
                break;
            case 3:
                baddielocation=4;
                break;
            case 4:
                baddielocation=7;
                break;
            case 5:
                baddielocation=6;
                break;
            case 6:
                baddielocation=9;
                break;
        }
        var areafree=true;
        for(var i = 1;i<Egroupindex;i++){
            if(Egroups[i].location==baddielocation){
                areafree=false;
            }
        }
        if(areafree==false){
            return;
        }
        
        if(thismode==1){
                if (day<10 && day>=1){
            switch(temp){
                case 3:
                case 4:
                case 5:
                    Eunits[newEindex()]=new Goblin(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,100,'goblin');
                    break;
                case 6:
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Goblin(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,300,'goblin');
                    break;
                case 7:
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,300,'Fire Elemental');
                    break;
                case 8:
                    Eunits[newEindex()]=new Goblin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Goblin(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,200,'goblin');
                    break;
                case 9:
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Gremlin');
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
                case 1:
                case 2:
                case 3:
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,200,'Gremlin');
                    break;
                case 4:
                    Eunits[newEindex()]=new Goblin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new LightningElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,300,'Lightning Elemental');
                    break;
                case 5:
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new IceElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Fire Elemental');
                    break;
                case 6:
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Warrior');
                    break;
                case 7:
                    Eunits[newEindex()]=new LightningElemental(curEindex, Egroupindex,difflevel);
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
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Gremlin');
                    break;
                case 10:
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new LightningElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Warrior');
                    break;
            }
        }
                if (day<30 && day>=20){
            switch(temp){
                case 3:
                case 4:
                case 5:
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Gremlin');
                    break;
                case 6:
                    Eunits[newEindex()]=new LightningElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new LightningElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Lightning Elemental');
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
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Bat');
                    break;
            }
        }
        }
        if(thismode==2){
                if (day<10 && day>=1){
            switch(temp){
                case 3:
                case 4:
                case 5:
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,100,'Bat');
                    break;
                case 6:
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,300,'Clunker');
                    break;
                case 7:
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,300,'Fire Elemental');
                    break;
                case 8:
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Magnet(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Bat');
                    break;
                case 9:
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Gremlin');
                    break;
                case 10:
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Fire Elemental');
                    break;
            }
        }
                if (day<20 && day>=10){
            switch(temp){
                case 1:
                case 2:
                case 3:
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,200,'Gremlin');
                    break;
                case 4:
                    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new LightningElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Lightning Elemental');
                    break;
                case 5:
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new IceElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Fire Elemental');
                    break;
                case 6:
                    Eunits[newEindex()]=new Magnet(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Sounddepressor(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Magnet');
                    break;
                case 7:
                    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,700,'Clunker');
                    break;
                case 8:
                    Eunits[newEindex()]=new Magnet(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Magnet(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Magnet');
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
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Magnet(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Warrior');
                    break;
            }
        }
                if (day<30 && day>=20){
            switch(temp){
                case 3:
                case 4:
                case 5:
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Gremlin');
                    break;
                case 6:
                    Eunits[newEindex()]=new LightningElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Sounddepressor(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new LightningElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Lightning Elemental');
                    break;
                case 7:
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Bat');
                    break;
                case 8:
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Bat');
                    break;
                case 9:
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Sounddepressor(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Warrior');
                    break;
                case 10:
                    Eunits[newEindex()]=new Zombie(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Necromancer(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Zombie(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Necromancer');
                    break;
            }
        }
        }
        if(thismode==3){
                if (day<10 && day>=1){
            switch(temp){
                case 3:
                case 4:
                case 5:
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,100,'Bat');
                    break;
                case 6:
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,300,'Clunker');
                    break;
                case 7:
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,300,'Fire Elemental');
                    break;
                case 8:
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Magnet(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Bat');
                    break;
                case 9:
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Gremlin');
                    break;
                case 10:
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Fire Elemental');
                    break;
            }
        }
                if (day<20 && day>=10){
            switch(temp){
                case 1:
                case 2:
                case 3:
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,200,'Gremlin');
                    break;
                case 4:
                    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new LightningElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Lightning Elemental');
                    break;
                case 5:
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new IceElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Fire Elemental');
                    break;
                case 6:
                    Eunits[newEindex()]=new Magnet(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Sounddepressor(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Magnet');
                    break;
                case 7:
                    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,700,'Clunker');
                    break;
                case 8:
                    Eunits[newEindex()]=new Magnet(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Magnet(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Magnet');
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
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Magnet(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Warrior');
                    break;
            }
        }
                if (day<30 && day>=20){
                    if(day==20){
                        setTimeout(function(){
                        if(engine10){
                            engine10=false;
                            engines-=1;
                        }
                        fan10exists=false;
                        Lightning.play();
                        $("#fan10").remove()
                        },2000)

                        airship(0,true)
                    }
            switch(temp){
                case 3:
                case 4:
                case 5:
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Gremlin');
                    break;
                case 6:
                    Eunits[newEindex()]=new LightningElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Sounddepressor(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new LightningElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Lightning Elemental');
                    break;
                case 7:
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Bat');
                    break;
                case 8:
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Bat');
                    break;
                case 9:
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Sounddepressor(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Warrior');
                    break;
                case 10:
                    Eunits[newEindex()]=new Zombie(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Necromancer(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Zombie(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Necromancer');
                    break;
            }
        }
        }
        
        clickEicon();
        Egroupinfo();
    }

    function Enewgroup(index,location,experience,picture){
          var thisleft=$("#space" + location).css("left");
           var thistop=$("#space" + location).css("top");

        
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
                        backgroundpic="../Pictures/backgroundpics/woodbackground.png";
    return backgroundpic;
}
var engines= 4;
var engine3=true;
var engine5=true;
var engine8=true;
var engine10=true;
var fan10exists=true;

function updateHeader(){
           $('#top').html("<div style='margin-top:15px; margin-left:10px'><span>Turn:" + day + "/30</span><span style='margin-left:10px'>Engines: " + engines + "/4</span>");
}

function indiv_newday(){
             updateHeader(); 
    for(var i = 0;i<Egroupindex;i++){
        
    }
    
    
    if(engines==4){
        airship(-1)
    }else if (engines==3){
        airship(0);
    }else if (engines==2){
        airship(1)
    }else if (engines==1){
        airship(2)
    }else if(engines==0){
        airship(3)
    };
    if(day>=30){
        if(thismode==1){
            winbattle('../07/afterairship.html');
        }
        if(thismode==2){
            winbattle('../19/afterairship.html');
        }
        if(thismode==3){
            winbattle('../25/afterairship.html');
        }
        
    }
}
function indiv_gotocapitol(){
      $("#TEXT").empty().append('<div class="gotobutton" id = "gotobarracks"><p>BARRACKS</p></div>');
}

function capturedAll(){
    if(wolves>=wolflimit && sparrows>=sparrowlimit && spiders>=spiderlimit && bears>=bearlimit && elk>=elklimit && turtles>=turtlelimit){
        console.log("You win!")
        winbattle();
    }
}

function levelresearch(){
    
}
function enemyconquer(){
    
}

var height = 2;
function airship(upOrDown, withmissile){

    if((upOrDown==0 || (upOrDown==-1 && height==1)) && withmissile!=true){
        return;
    }
  $("body").append("<div style='background-color:lightblue' id = 'cinemabackground'><div id='airship' STYLE='position:absolute; TOP:" + height*100 + "px; LEFT:405px;' class='unit' ><img src='../CinePics/airship.gif'/></div><div id='Eairship' STYLE='position:absolute; TOP:" + height*100 + "px; LEFT:505px;' class='unit' ><img src='../CinePics/enemyship.gif'/></div>"+
                 "<div class='trees' STYLE='position:absolute; TOP:570px; LEFT:-220px;' ><img style='height:80px' src='../CinePics/trees.png'/></div></div>")
          $('.trees').animate({
                        left: "+1080px"
                    }, 3000,"linear"); 
    $("#cinemabackground").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:-140px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
      $('.trees').animate({
                        left: "+1160px"
                    }, 3000,"linear"); 
        $("#cinemabackground").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:-60px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
      $('.trees').animate({
                        left: "+1220px"
                    }, 3000,"linear"); 
            $("#cinemabackground").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:20px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
      $('.trees').animate({
                        left: "+1300px"
                    }, 3000,"linear"); 
                $("#cinemabackground").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:100px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
      $('.trees').animate({
                        left: "+1380px"
                    }, 3000,"linear"); 
        $("#cinemabackground").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:180px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
      $('.trees').animate({
                        left: "+1460px"
                    }, 3000,"linear"); 
        $("#cinemabackground").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:260px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
      $('.trees').animate({
                        left: "+1520px"
                    }, 3000,"linear"); 
        $("#cinemabackground").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:340px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
      $('.trees').animate({
                        left: "+1600px"
                    }, 3000,"linear"); 
           $("#cinemabackground").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:400px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
      $('.trees').animate({
                        left: "+1680px"
                    }, 3000,"linear"); 
           $("#cinemabackground").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:460px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
      $('.trees').animate({
                        left: "+1760px"
                    }, 3000,"linear"); 
               $("#cinemabackground").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:540px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
      $('.trees').animate({
                        left: "+1840px"
                    }, 3000,"linear"); 
        height+=upOrDown;
    if(height<1){
        height=1
    };
    if(height>6){
        height=6;
    }
    
    
    $('#airship').animate({
                        top: (height*100)+'px'
                    }, 1500);
      $('#Eairship').animate({
                        top: (height*100)+'px'
                    }, 1500);

    setInterval(function(){
         $("#cinemabackground").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:-300px;" ><img style="height:80px" src="../CinePics/trees.png"/></div>');
            $('.trees').animate({
                        left: "+1000px"
                    }, 3000,"linear"); 
    },500)
    
    if(height<6){
          setTimeout(function(){
        $("#cinemabackground").remove();
    },2000)
    }else{
        setTimeout(function(){
          $("#airship img").attr("src","../Pictures/Effects/boom.gif");
            setTimeout(function(){
                $("#airship img").remove();
                },500)
            Lightning.play();
                gameover();
        },2000)
    }
  if(withmissile){
      $("#cinemabackground").append('<div class="missile" STYLE="position:absolute; TOP:' + (height*100 +20) + 'px; LEFT:500px;" ><img style="height:30px" src="../Pictures/missile.gif"/></div>');
      missile.play()
          $('.missile').animate({
                        left: '-=50px',
                        top:"-=15px"
                    }, 1800,"linear");
  }
}



$(window).load(function(){
    changesong("01/Battle.wav")
    if(thismode==1){
        saving("6")
    }
    if(thismode==2){
        saving("18")
    }
    if(thismode==3){
         saving("24")
    }
    if(parseInt( localStorage.getItem("diff"))>0){
        difflevel=parseInt(localStorage.getItem("diff"));
    }
    
    $('.fan').mouseenter(function(){
        $(".fan").addClass("hidden")
    });
     $('.fan').mouseleave(function(){
        $(".fan").removeClass("hidden")
    });

    if(thismode==2 || thismode==3){
        createsoldier("Mage","Sandra")
    }

        containaccessories();
         updateHeader(); 
    
    
    //click buttons on map
   $("#space70").click(function(){
        gotocapitol();
    });

});