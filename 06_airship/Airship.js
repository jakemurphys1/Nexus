   difflevel=3;

    var allynum=0;

var noheal=false;


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
     if(curloc==10){
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
             console.log("Filled")
            return;
        }
        
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
                    Eunits[newEindex()]=new Bee(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Beekeeper(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bee(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Beekeeper');
                    break;
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
    if(day>30){
        winbattle('../07/afterairship.html');
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
function airship(upOrDown){
    if(upOrDown==0 || (upOrDown==-1 && height==1)){
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
  
}



$(window).load(function(){
changesong("01/Battle.wav")
    
    
    $('.fan').mouseenter(function(){
        $(".fan").addClass("hidden")
    });
     $('.fan').mouseleave(function(){
        $(".fan").removeClass("hidden")
    });

    
    $("#space70").click(function(){
         //airship(1)
    })
        containaccessories();
         updateHeader(); 
    //Start window
    var difflevel=1;
$("#Easy").click(function(){

});
    $("#Normal").click(function(){
        difflevel=2;
    });
    $("#Hard").click(function(){
        difflevel=3;
    });
    $("#Nightmare").click(function(){
        difflevel=4;
    });
    $('.starts').click(function(){
        $("#Difflevel").remove();

        tipmessage("intro","Welcome to Incoming. You must use your soldiers to defend the capitol in the center from enemies. Click the capitol to start making groups.")
    });
    $('.starts').mouseenter(function(){
        $(this).addClass("enlarge");
    });
    $('.starts').mouseleave(function(){
        $(this).removeClass("enlarge");
    });
    
    
        $("#Save").click(function(){
        message("Game Saved");
if(battleon===true){
    message("You can't save during battle.");
    return;
}
        var alreadymoved=false;
        for(var i = 1;i<groupindex;i++){
            if(groups[i].active===true && groups[i].hasmoved===true){
                message("You can't save after a group has moved.");
                alreadymoved=true;
                return;
            }
        }
        if(alreadymoved===true){
            return;
        }
        var allvar = day + "?" + money + "?" + ironsword +"?" + steelsword + "?" + titaniumsword +"?" + ironshield + "?" + steelshield + "?" + titaniumshield +"?" + ironarmor +"?" + steelarmor +"?" + titaniumarmor +"?" + hunterbow +"?" + longbow +"?" + masterbow + "?" +
            emeraldwand + "?" + rubywand + "?" + diamondwand +"?" + ironswordnum +"?" + steelswordnum +"?" + titaniumswordnum +"?" + ironshieldnum +"?" + steelshieldnum +"?" + titaniumshieldnum +"?" + ironarmornum +"?" + steelarmornum +"?" + titaniumarmornum +"?" + hunterbownum +"?" + longbownum + "?" +
            masterbownum + "?" + emeraldwandnum + "?" + rubywandnum +"?" + diamondwandnum +"?" + redtowns +"?" + greentowns +"?" + bluetowns +"?" + yellowtowns +"?" + redkingdom +"?" + greenkingdom +"?" + bluekingdom +"?" + yellowkingdom +"?" + allynum +"?" + alchemy + "?" +
            alchemy2 + "?" + summoning + "?" + angel +"?" + demon +"?" + djinn +"?" + frostlord +"?" + angelrest +"?" + demonrest +"?" + djinnrest +"?" + frostlordrest +"?" + Hire +"?" + replicaterecipe +"?" + reviverecipe +"?" + recoverrecipe + "?" +
            teleportrecipe + "?" + boostrecipe + "?" + goldrecipe +"?" + manarecipe +"?" + summonrecipe +"?" + intelligencerecipe + "?" + flourishrecipe +"?" + refreshrecipe + "?" + recoverpotion +"?" + revivepotion +"?" + teleportpotion +"?" + boostpotion +"?" +
            Hirelevelup + "?" + curresearch +"?" + curindex +"?" + Ironweaponlevelup +"?" + Steelweaponlevelup +"?" + Titaniumweaponlevelup +"?" + Ironarmorlevelup +"?" + Steelarmorlevelup +"?" + Titaniumarmorlevelup +"?" + Alchemistlevelup +"?" + Alchemist2levelup +"?" + Summonlevelup +"?" + researchers + "?" +
            sorcerermana + "?" + sorcererincrease + "?" + index +"?" + movingindex +"?" + Eindex +"?" + groupindex +"?" + Egroupindex +"?" + difflevel + "?" + boughtsoldier;
console.log(allvar)
        setCookie("allvar",allvar,365);

        //ingredients
        var allingre = "";
        for(var i = 1;i<11;i++){
            allingre = allingre + ingredient[i].quantity + "?";
        }
setCookie("allingre",allingre,365);

//unit array
        var unitarray = new Array;
        var Eunitarray = new Array;
        for(var i = 0;i<index;i++){

            var temp= "";

            if(units[i].type==="Soldier"){
                temp = units[i].abilitymedkit + "%" + units[i].abilitydash + "%" + units[i].abilityimmunity + "%" + units[i].abilitycounter + "%" + units[i].abilitysteadfast + "%" + units[i].medkit;
            }
            if(units[i].type==="Knight"){
                temp = units[i].abilitysweep + "%" + units[i].abilityswirl + "%" + units[i].abilitypiercer + "%" + units[i].abilityreact + "%" + units[i].abilityfreemove;
            }
            if(units[i].type==="Thief" || units[i].type==="Invisible"){
                temp = units[i].abilitybackstab + "%" + units[i].abilityinvisible + "%" + units[i].abilitydodge + "%" + units[i].abilityfirstblow + "%" + units[i].abilitybettersteal;
            }
            if(units[i].type==="Mage"){
                temp = units[i].abilityelementalailments + "%" + units[i].abilityzap + "%" + units[i].abilityfreeze + "%" + units[i].abilitydoubletap + "%" + units[i].abilitypain;
            }
            if(units[i].type==="Wizard"){
                temp = units[i].abilitybolt + "%" + units[i].abilitymissile + "%" + units[i].abilitystartcharge + "%" + units[i].abilitydrain + "%" + units[i].abilityelementalailments;
            }
            if(units[i].type==="Sorcerer"){
                temp = units[i].abilityfireblast + "%" + units[i].abilitylightning + "%" + units[i].abilitymanaincrease + "%" + units[i].abilityslumber + "%" + units[i].abilitydeath;
            }
            if(units[i].type==="Archer"){
                temp = units[i].abilityexplosion + "%" + units[i].abilitypierce + "%" + units[i].abilitytitan + "%" + units[i].abilityimmobolize + "%" + units[i].abilitydoublearrows;
            }
            if(units[i].type==="Rouge"){
                temp = units[i].abilityblindness + "%" + units[i].abilitysleep + "%" + units[i].abilityailmentduration + "%" + units[i].abilityenfeeble + "%" + units[i].abilitydoublearrows;
            }
            if(units[i].type==="Templar"){
                temp = units[i].abilityburst + "%" + units[i].abilitydisrupt + "%" + units[i].abilitygrapplinghook + "%" + units[i].abilityelemental + "%" + units[i].abilitydoublearrows;
            }
            if(units[i].type==="Enchantress"){
                temp = units[i].abilitystorm + "%" + units[i].abilityreplenish + "%" + units[i].abilitytransform + "%" + units[i].abilitytorment + "%" + units[i].abilitybestow + "%" + units[i].mana;
            }
            if(units[i].type==="Healer"){
                temp = units[i].abilityreach + "%" + units[i].abilityheal + "%" + units[i].abilitymove + "%" + units[i].abilitycleanse + "%" + units[i].abilitydoublevigor+ "%" + units[i].power;
            }
            if(units[i].type==="Guard"){
                temp = units[i].abilityprotect + "%" + units[i].abilityincreaseenergy + "%" + units[i].abilityimmunity + "%" + units[i].abilityscout + "%" + units[i].abilityreshield;
            }


            unitarray[i] = units[i].type + "%" + units[i].realtype + "%" + units[i].name + "%" + i + "%" + units[i].attack + "%" + units[i].defense + "%" + units[i].resistance + "%" + units[i].health + "%" + units[i].maxhealth + "%" +
            units[i].usedaction + "%" + units[i].alive + "%" + units[i].moved + "%" + units[i].group + "%" + units[i].slot + "%" + units[i].level + "%" + units[i].experience + "%" + units[i].weapon + "%" + units[i].armor + "%" + units[i].accessory + "%" +
            units[i].enroute + "%" + units[i].healing + "%" + units[i].picture + "%" + units[i].image + "%" + units[i].healthboost + "%" + units[i].weaponboost + "%" + units[i].armorboost + "%" + units[i].resistboost + "%" + temp;
            setCookie("unitarray[" + i + "]",unitarray[i],365);
        }
        // Eunit array
 Eunitarray="";
        for(var i = 0;i<Eindex;i++){
            Eunitarray=Eunitarray+ "&" + Eunits[i].alive + "%";
            if(Eunits[i].alive===true){
               Eunitarray +=Eunits[i].type+ "%" + Eunits[i].name + "%" + Eunits[i].level + "%" + Eunits[i].attack + "%" + Eunits[i].health + "%" + Eunits[i].maxhealth + "%" + Eunits[i].defense + "%" + Eunits[i].resistance +
                "%" + Eunits[i].lightning + "%" + Eunits[i].fire + "%" + Eunits[i].ice + "%" + Eunits[i].index + "%" + Eunits[i].usedaction + "%" + Eunits[i].curleft + "%" + Eunits[i].curtop + "%" + Eunits[i].group + "%" + Eunits[i].charge;
            }


        }
        setCookie("Eunitarray",Eunitarray,365);

        //group array
        var grouparray = "";
for(var i =1;i<groupindex;i++){
    grouparray = grouparray + "?" + groups[i].location + "%";
    if(groups[i].location>0){
        grouparray+=groups[i].active + "%" + groups[i].hasmoved + "%" +groups[i].curleft + "%" +groups[i].curtop + "%";
    }
}
        setCookie("grouparray",grouparray,365);
        //egroup array
        var Egrouparray = "";

        for(var i =1;i<Egroupindex;i++){

            Egrouparray = Egrouparray + "?" + Egroups[i].location + "%";
            if(Egroups[i].location>0){
                Egrouparray = Egrouparray + Egroups[i].hasmoved + "%" + Egroups[i].curleft + "%" + Egroups[i].curtop + "%" + Egroups[i].experience + "%" + Egroups[i].picture + "%";
            }
        }

        setCookie("Egrouparray",Egrouparray,365);
//spaces stuff
        var spacearray = "";
        for(var i = 1;i<70;i++){
            if($('#space' + i).data('istown')==undefined){
                $('#space' + i).data('istown',false)
            }
            if($('#space' + i).data('conquered')==undefined){
                $('#space' + i).data('conquered',false)
            }
            spacearray = spacearray + "&" + $('#space' + i).data('istown') + "%" + $('#space' + i).data('fortify') + "%" + $('#space' + i).data('loot') + "%" + $('#space' + i).data('filled') + "%" + $('#space' + i).data('conquered');
        }
        setCookie("spacearray",spacearray,365);
    });
    $("#Load").click(function(){
       loadgame();
        loadgame();
        loadgame();
        loadgame();
        hasloaded=true;
    });
    function loadgame(){
        message("Game loaded");
    if(battleon===true){
        message("You can't load during battle.");
        return;
    }
        $("#TEXT").empty();
    $("#Difflevel").remove();
        var curallvar =  getCookie("allvar");
        var arrayallvar = curallvar.split("?");
        console.log(getCookie("allvar"))


        day =  parseInt(arrayallvar[0]);
        money =  parseInt(arrayallvar[1]);
        ironsword =  JSON.parse(arrayallvar[2]);
        steelsword = JSON.parse(arrayallvar[3]);
        titaniumsword =  JSON.parse(arrayallvar[4]);
        ironshield =  JSON.parse(arrayallvar[5]);
        steelshield =  JSON.parse(arrayallvar[6]);
        titaniumshield =  JSON.parse(arrayallvar[7]);
        ironarmor =  JSON.parse(arrayallvar[8]);
        steelarmor =  JSON.parse(arrayallvar[9]);
        titaniumarmor =  JSON.parse(arrayallvar[10]);
        hunterbow =  JSON.parse(arrayallvar[11]);
        longbow = JSON.parse( arrayallvar[12]);
        masterbow =  JSON.parse(arrayallvar[13]);
        emeraldwand = JSON.parse(arrayallvar[14]);
        rubywand =JSON.parse( arrayallvar[15]);
        diamondwand =  JSON.parse(arrayallvar[16]);
        ironswordnum = parseInt(arrayallvar[17]);
        steelswordnum = parseInt(arrayallvar[18]);
        titaniumswordnum = parseInt( arrayallvar[19]);
        ironshieldnum = parseInt( arrayallvar[20]);
        steelshieldnum =  parseInt(arrayallvar[21]);
        titaniumshieldnum = parseInt(arrayallvar[22]);
        ironarmornum = parseInt( arrayallvar[23]);
        steelarmornum = parseInt( arrayallvar[24]);
        titaniumarmornum =  parseInt(arrayallvar[25]);
        hunterbownum = parseInt(arrayallvar[26]);
        longbownum = parseInt( arrayallvar[27]);
        masterbownum = parseInt(arrayallvar[28]);
        emeraldwandnum = parseInt(arrayallvar[29]);
        rubywandnum =  parseInt(arrayallvar[30]);
        diamondwandnum = parseInt( arrayallvar[31]);
        redtowns = parseInt( arrayallvar[32]);
        greentowns = parseInt( arrayallvar[33]);
        bluetowns =  parseInt(arrayallvar[34]);
        yellowtowns =  parseInt(arrayallvar[35]);
        redkingdom =  JSON.parse(arrayallvar[36]);
        greenkingdom =  JSON.parse(arrayallvar[37]);
        bluekingdom = JSON.parse( arrayallvar[38]);
        yellowkingdom = JSON.parse(arrayallvar[39]);
        allynum = parseInt(arrayallvar[40]);
        alchemy =  JSON.parse(arrayallvar[41]);
        alchemy2 = JSON.parse(arrayallvar[42]);
        summoning =  JSON.parse(arrayallvar[43]);
        angel =  JSON.parse(arrayallvar[44]);
        demon = JSON.parse( arrayallvar[45]);
        djinn = JSON.parse( arrayallvar[46]);
        frostlord = JSON.parse(arrayallvar[47]);
        angelrest =  parseInt(arrayallvar[48]);
        demonrest =  parseInt(arrayallvar[49]);
        djinnrest =  parseInt(arrayallvar[50]);
        frostlordrest =  parseInt(arrayallvar[51]);
        Hire = parseInt(arrayallvar[52]);
        replicaterecipe =  JSON.parse(arrayallvar[53]);
        reviverecipe =  JSON.parse(arrayallvar[54]);
        recoverrecipe =  JSON.parse(arrayallvar[55]);
        teleportrecipe = JSON.parse(arrayallvar[56]);
        boostrecipe =  JSON.parse(arrayallvar[57]);
        goldrecipe =  JSON.parse(arrayallvar[58]);
        manarecipe =JSON.parse( arrayallvar[59]);
        summonrecipe = JSON.parse(arrayallvar[60]);
       intelligencerecipe =  JSON.parse(arrayallvar[61]);
    flourishrecipe = JSON.parse(arrayallvar[62]);
    refreshrecipe =  JSON.parse(arrayallvar[63]);
        recoverpotion =  parseInt(arrayallvar[64]);
        revivepotion =  parseInt(arrayallvar[65]);
        teleportpotion =  parseInt(arrayallvar[66]);
        boostpotion =  parseInt(arrayallvar[67]);
        Hirelevelup =  parseInt(arrayallvar[68]);
        curresearch = arrayallvar[69];
        curindex = parseInt(arrayallvar[70]);
        Ironweaponlevelup = parseInt(arrayallvar[71]);
        Steelweaponlevelup =  parseInt(arrayallvar[72]);
        Titaniumweaponlevelup = parseInt(arrayallvar[73]);
        Ironarmorlevelup =  parseInt(arrayallvar[74]);
        Steelarmorlevelup = parseInt( arrayallvar[75]);
        Titaniumarmorlevelup =  parseInt(arrayallvar[76]);
        Alchemistlevelup = parseInt(arrayallvar[77]);
        Alchemist2levelup = parseInt(arrayallvar[78]);
        Summonlevelup = parseInt( arrayallvar[79]);
        researchers =  parseInt(arrayallvar[80]);
        sorcerermana =  parseInt(arrayallvar[81]);
        sorcererincrease = parseInt(arrayallvar[82]);
        index =  parseInt(arrayallvar[83]);
        movingindex =  parseInt(arrayallvar[84]);
        Eindex = parseInt( arrayallvar[85]);
        groupindex =  parseInt(arrayallvar[86]);
        Egroupindex = parseInt(arrayallvar[87]);
    difflevel = parseInt(arrayallvar[88]);
    boughtsoldier=parseInt(arrayallvar[89]);


    var allingre = getCookie("allingre").split("?");
    for(var i = 1;i<11;i++){
        ingredient[i].quantity= parseInt(allingre[i-1]);
    }

        $(".icon").remove();
        $(".Eicon").remove();
        var unitarray = new Array;
        //allies
        for(var i = 0;i<index;i++){
             unitarray[i] =  getCookie("unitarray[" + i + "]");
            var temp = unitarray[i].split("%");

            if(units[i]==undefined){
                units[i]= new Soldier;
                index-=1;
            }

            units[i].type = temp[0];
            units[i].realtype = temp[1];
            units[i].name = temp[2];
            units[i].index = parseInt(temp[3]);
            units[i].attack = parseInt(temp[4]);
            units[i].defense = parseInt(temp[5]);
            units[i].resistance = parseInt(temp[6]);
            units[i].health = parseInt(temp[7]);
            units[i].maxhealth = parseInt(temp[8]);
            units[i].usedaction = parseInt(temp[9]);
            units[i].alive = JSON.parse(temp[10]);
            units[i].moved = JSON.parse(temp[11]);
            units[i].group = parseInt(temp[12]);
            units[i].slot = parseInt(temp[13]);
            units[i].level =parseInt(temp[14]);
            if(temp[14]==="-" || temp[14]==="6" || temp[14]===undefined){
                units[i].level ="-"
            }
            units[i].experience = parseInt(temp[15]);
            units[i].weapon = temp[16];
            units[i].armor =temp[17];
            units[i].accessory = temp[18];
            units[i].attacktempboost = 0;
            units[i].defensetempboost =0;
            units[i].enroute = parseInt(temp[19]);
            units[i].healing = parseInt(temp[20]);
            units[i].picture = "<div class='barrackpic' id='"+ i + "'><img src=" + temp[22] + " /></div>";
            units[i].image = temp[22];
            units[i].healthboost = temp[23];
            units[i].weaponboost =temp[24];
            units[i].armorboost = temp[25];
            units[i].resistboost = temp[26];

            if(units[i].type==="Soldier"){
                units[i].abilitymedkit = JSON.parse(temp[27]);
                units[i].abilitydash = JSON.parse(temp[28]);
                units[i].abilityimmunity = JSON.parse(temp[29]);
                units[i].abilitycounter = JSON.parse(temp[30]);
                units[i].abilitysteadfast = JSON.parse(temp[31]);
                units[i].medkit = JSON.parse(temp[32]);
            }
            if(units[i].type==="Knight"){
                units[i].abilitysweep = JSON.parse(temp[27]);
                units[i].abilityswirl = JSON.parse(temp[28]);
                units[i].abilitypiercer = JSON.parse(temp[29]);
                units[i].abilityreact = JSON.parse(temp[30]);
                units[i].abilityfreemove = JSON.parse(temp[31]);
            }
            if(units[i].type==="Thief" || units[i].type==="Invisible"){
                units[i].abilitybackstab = JSON.parse(temp[27]);
                units[i].abilityinvisible = JSON.parse(temp[28]);
                units[i].abilitydodge = JSON.parse(temp[29]);
                units[i].abilityfirstblow = JSON.parse(temp[30]);
                units[i].abilitybettersteal = JSON.parse(temp[31]);
                units[i].abilitymug=true;
            }
            if(units[i].type==="Mage"){
                units[i].abilityelementalailments = JSON.parse(temp[27]);
                units[i].abilityzap = JSON.parse(temp[28]);
                units[i].abilityfreeze = JSON.parse(temp[29]);
                units[i].abilitydoubletap = JSON.parse(temp[30]);
                units[i].abilitypain = JSON.parse(temp[31]);
            }
            if(units[i].type==="Wizard"){
                units[i].abilitybolt = JSON.parse(temp[27]);
                units[i].abilitymissile = JSON.parse(temp[28]);
                units[i].abilitystartcharge = JSON.parse(temp[29]);
                units[i].abilitydrain = JSON.parse(temp[30]);
                units[i].abilityelementalailments = JSON.parse(temp[31]);
                units[i].charge = 0;

            }
            if(units[i].type==="Sorcerer"){
                units[i].abilityfireblast = JSON.parse(temp[27]);
                units[i].abilitylightning = JSON.parse(temp[28]);
                units[i].abilitymanaincrease = JSON.parse(temp[29]);
                units[i].abilityslumber = JSON.parse(temp[30]);
                units[i].abilitydeath = JSON.parse(temp[31]);
            }
            if(units[i].type==="Archer"){
                units[i].abilityexplosion = JSON.parse(temp[27]);
                console.log(temp[28])
                units[i].abilitypierce = JSON.parse(temp[28]);
                units[i].abilitytitan = JSON.parse(temp[29]);
                units[i].abilityimmobolize = JSON.parse(temp[30]);
                units[i].abilitydoublearrows = JSON.parse(temp[31]);
                units[i].usedexploding=1;
                units[i].usedpierce=1;
                units[i].usedimmobolize=1;
                units[i].usedtitan=1;
                units[i].arrowcapacity=1;
                if(units[i].level==="-" || units[i].level==="6"){
                    units[i].arrowcapacity=2;
                }
            }
            if(units[i].type==="Rouge"){
                units[i].abilityblindness = JSON.parse(temp[27]);
                units[i].abilitysleep = JSON.parse(temp[28]);
                units[i].abilityailmentduration = JSON.parse(temp[29]);
                units[i].abilityenfeeble = JSON.parse(temp[30]);
                units[i].abilitydoublearrows = JSON.parse(temp[31]);
                units[i].usedsleep=1;
                units[i].usedblindness=1;
                units[i].usedenfeeble=1;
                units[i].usedpoison=1;
                units[i].arrowcapacity=1;
                units[i].duration=0;
                if(units[i].level==="-" || units[i].level==="6"){
                    units[i].arrowcapacity=2;
                }
                if(units[i].abilityailmentduration===true){
                    units[i].duration=1;
                }
            }
            if(units[i].type==="Templar"){
                units[i].abilityburst = JSON.parse(temp[27]);
                units[i].abilitydisrupt = JSON.parse(temp[28]);
                units[i].abilitygrapplinghook = JSON.parse(temp[29]);
                units[i].abilityelemental =JSON.parse( temp[30]);
                units[i].abilitydoublearrows =JSON.parse(temp[31]);
                units[i].usedburst=1;
                units[i].useddisrupt=1;
                units[i].usedsilence=1;
                units[i].usedgrappling=1;
                units[i].arrowcapacity=1;
                if(units[i].level==="-" || units[i].level==="6"){
                    units[i].arrowcapacity=2;
                }
            }
            if(units[i].type==="Enchantress"){
                units[i].abilitystorm = JSON.parse(temp[27]);
                units[i].abilityreplenish = JSON.parse(temp[28]);
                units[i].abilitytransform = JSON.parse(temp[29]);
                units[i].abilitytorment = JSON.parse(temp[30]);
                units[i].abilitybestow =JSON.parse(temp[31]);
                units[i].mana = parseInt(temp[32]);
            }
            if(units[i].type==="Healer"){
                units[i].abilityreach = JSON.parse(temp[27]);
                units[i].abilityheal = JSON.parse(temp[28]);
                units[i].abilitymove =JSON.parse( temp[29]);
                units[i].abilitycleanse = JSON.parse(temp[30]);
                units[i].abilitydoublevigor = JSON.parse(temp[31]);
                units[i].power =parseInt(temp[32]);
            }
            if(units[i].type==="Guard"){
                units[i].abilityprotect = JSON.parse(temp[27]);
                units[i].abilityincreaseenergy =JSON.parse( temp[28]);
                units[i].abilityimmunity = JSON.parse(temp[29]);
                units[i].abilityscout = JSON.parse(temp[30]);
                units[i].abilityreshield = JSON.parse(temp[31]);
            }

        }

            var Eunitarray = getCookie("Eunitarray").split("&");

        for(var i = 0;i<Eindex;i++){
            var temp = Eunitarray[i+1].split("%");
            if(Eunits[i]==undefined){
                Eunits[i]= new Goblin;
                Eindex-=1;
            }

            Eunits[i].alive=JSON.parse(temp[0]);

            if(Eunits[i].alive===true){


                Eunits[i].type=temp[2];
                Eunits[i].name=temp[2];
                Eunits[i].level=parseInt(temp[3]);
                Eunits[i].attack=parseInt(temp[4]);
                Eunits[i].health=parseInt(temp[5]);
                Eunits[i].maxhealth=parseInt(temp[6]);
                Eunits[i].defense=parseInt(temp[7]);
                Eunits[i].resistance=parseInt(temp[8]);
                Eunits[i].sleep=0;
                Eunits[i].immobilized=0;
                Eunits[i].blind=0;
                Eunits[i].silenced=0;
                Eunits[i].poison=0;
                Eunits[i].enfeeble=0;
                Eunits[i].terrify=0;
                Eunits[i].lightning=parseInt(temp[9]);
                Eunits[i].fire=parseInt(temp[10]);
                Eunits[i].ice=parseInt(temp[11]);
                Eunits[i].index=parseInt(temp[12]);
                Eunits[i].usedaction=temp[13];
                Eunits[i].curleft=parseInt(temp[14]);
                Eunits[i].curtop=parseInt(temp[15]);
                Eunits[i].group=parseInt(temp[16]);
                Eunits[i].charge=parseInt(temp[17]);

                if(Eunits[i].type==="Goblin"){
                    Eunits[i].description = "Kill one, and another will be around the corner.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/goblin.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/goblin.gif';
                }
                if(Eunits[i].type==="Angel"){
                    Eunits[i].description = "Tough to kill, this rare creature heal itself with it's magic. Defeat to get it's soul to summon.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/Angel.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/Angel.gif';
                    Eunits[i].dying='Pictures/Enemies/Angel_dying.gif';
                }
                if(Eunits[i].type==="Assassin"){
                    Eunits[i].description = "These long range fighters can hit any target, and, with their poisons, can sometimes put their targets to sleep.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/Assassin.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/Assassin.gif';
                    Eunits[i].dying='Pictures/Enemies/Assassin_dying.gif';
                }
                if(Eunits[i].type==="Bear"){
                    Eunits[i].description = "These creatures love to attack the eyes and cause blindness.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/bear.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/bear.gif';
                    Eunits[i].dying='Pictures/Enemies/bear_dying.gif';
                }
                if(Eunits[i].type==="Beekeeper"){
                    Eunits[i].description = "This master of insects will fling an endless supply of bees at you.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/Beekeeper.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/Beekeeper.gif';
                    Eunits[i].dying='Pictures/Enemies/Beekeeper_dying.gif';
                }
                if(Eunits[i].type==="Bee"){
                    Eunits[i].description = "These flying bugs can swarm quickly. Kill the keeper to stop them.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/Bee.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/Bee.gif';
                }

                if(Eunits[i].type==="Demon"){
                    Eunits[i].description = "Elite among it's kind, this rare creature can instantly kill any units with it's death spell for 5 charge. Defeat to get it's soul to summon.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/Demon.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/Demon.gif';
                    Eunits[i].dying='Pictures/Enemies/Demon_dying.gif';
                }
                if(Eunits[i].type==="Djinn"){
                    Eunits[i].description = "Tough to kill, this rare creature can give and take equally well. Defeat to get it's soul to summon.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/Djinn.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/Djinn.gif';
                    Eunits[i].dying='Pictures/Enemies/Djinn_dying.gif';
                }
                if(Eunits[i].type==="Dragon"){
                    Eunits[i].description ="Something is coming...";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/Dragon.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/Dragon.gif';
                    Eunits[i].dying='Pictures/Enemies/Dragon_dying.gif';
                }
                if(Eunits[i].type==="Fire Elemental"){
                    Eunits[i].description = "While the weakest of the elementals, these fiery beasts can shoot flames two spaces away for only one charge.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/Fire Elemental.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/Fire Elemental.gif';
                    Eunits[i].dying='Pictures/Enemies/Fire Elemental_dying.gif';
                }
                if(Eunits[i].type==="Flamewraith"){
                    Eunits[i].description = "Wraiths can phase out and then become invincible. Use an elemental attack to phase them back in, and if its ice, it will do damage.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/flamewraith.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/flamewraith.gif';
                    Eunits[i].dying='Pictures/Enemies/flamewraith_dying.gif';
                }

                if(Eunits[i].type==="Frostlord"){
                    Eunits[i].description = "While weak in the close range, this rare creature can create a dangerous snow storm. Defeat to get it's soul to summon.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/Frostlord.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/Frostlord.gif';
                    Eunits[i].dying='Pictures/Enemies/Frostlord_dying.gif';
                }
                if(Eunits[i].type==="Frostwraith"){
                    Eunits[i].description = "Wraiths can phase out and then become invincible. Use an elemental attack to phase them back in, and if its fire, it will do damage.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/frostwraith.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/frostwraith.gif';
                    Eunits[i].dying='Pictures/Enemies/frostwraith_dying.gif';
                }
                if(Eunits[i].type==="Golem"){
                    Eunits[i].description = "Touch as rocks, kill the shaman, or this rocky creature is will keep coming back.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/golem.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/golem.gif';
                    Eunits[i].dying='Pictures/Enemies/golem_dying.gif';
                }
                if(Eunits[i].type==="Gremlin"){
                    Eunits[i].description = "While weak alone, these devious creatures can swarm in high numbers.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/Gremlin.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/Gremlin.gif';
                    Eunits[i].dying='Pictures/Enemies/Gremlin_dying.gif';
                }
                if(Eunits[i].type==="Hand"){
                    Eunits[i].description = "Something is coming...";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/Hand.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/Hand.gif';
                    Eunits[i].dying='Pictures/Enemies/Hand_dying.gif';
                }

                if(Eunits[i].type==="Ice Elemental"){
                    Eunits[i].description = "More powerful, yet slower than the flame elemental, these chilly creatures can do ice damage two spaces away for 2 charge.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/Ice Elemental.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/Ice Elemental.gif';
                    Eunits[i].dying='Pictures/Enemies/Ice Elemental_dying.gif';
                }
                if(Eunits[i].type==="Lightning Elemental"){
                    Eunits[i].description = "Most powerful of the elementals, they can shoot a bolt anywhere for a high cost of 3 charge.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/Lightning Elemental.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/Lightning Elemental.gif';
                    Eunits[i].dying='Pictures/Enemies/Lightning Elemental_dying.gif';
                }
                if(Eunits[i].type==="Necromancer"){
                    Eunits[i].description = "This master of death will raise the dead and chuck them at you.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/Necromancer.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/Necromancer.gif';
                    Eunits[i].dying='Pictures/Enemies/Necromancer_dying.gif';
                }
                if(Eunits[i].type==="Shaman"){
                    Eunits[i].description = "This master of earth will send it's rocky friend to smash you.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/Shaman.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/Shaman.gif';
                    Eunits[i].dying='Pictures/Enemies/Shaman_dying.gif';
                }
                if(Eunits[i].type==="Sparrow"){
                    Eunits[i].description = "These pesky creatures can soar instantly to any ally.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/Sparrow.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/Sparrow.gif';
                    Eunits[i].dying='Pictures/Enemies/Sparrow_dying.gif';
                }

                if(Eunits[i].type==="Spider"){
                    Eunits[i].description = "While unable to do damage, they can poison and drag units to them with their web.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/spider.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/spider.gif';
                    Eunits[i].dying='Pictures/Enemies/spider_dying.gif';
                }
                if(Eunits[i].type==="Spitter"){
                    Eunits[i].description = "These long range fighters can hit any target in a straight line, and can immobilize with it's sticky attack.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/Spitter.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/Spitter.gif';
                    Eunits[i].dying='Pictures/Enemies/Spitter_dying.gif';
                }
                if(Eunits[i].type==="Unknown"){
                    Eunits[i].description = "Something is coming...";;
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/unknown.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/unknown.gif';
                }
                if(Eunits[i].type==="Vampire"){
                    Eunits[i].description = "Quick and dangerous, these creatures gain life for every damage dealt.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/vampire.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/vampire.gif';
                    Eunits[i].dying='Pictures/Enemies/vampire_dying.gif';
                }
                if(Eunits[i].type==="Warrior"){
                    Eunits[i].description = "Masters of the close combat, these warriors can do double damage if they don't have to move first. Vunerable to Magic.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/warrior.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/warrior.gif';
                    Eunits[i].dying='Pictures/Enemies/warrior_dying.gif';
                }

                if(Eunits[i].type==="Waterwraith"){
                    Eunits[i].description = "Wraiths can phase out and then become invincible. Use an elemental attack to phase them back in, and if its Lightning, it will do damage.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/waterwraith.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/waterwraith.gif';
                    Eunits[i].dying='Pictures/Enemies/waterwraith_dying.gif';
                }
                if(Eunits[i].type==="Werewolf"){
                    Eunits[i].description = "These savage beasts have high resistance to magic, and can heal everyturn.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/werewolf.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/werewolf.gif';
                    Eunits[i].dying='Pictures/Enemies/werewolf_dying.gif';
                }
                if(Eunits[i].type==="Wisp"){
                    Eunits[i].description = "These flittery creatures are hard to catch. They can use icy magic which can put units to sleep.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/Wisp.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/Wisp.gif';
                    Eunits[i].dying='Pictures/Enemies/Wisp_dying.gif';
                }
                if(Eunits[i].type==="Wolf"){
                    Eunits[i].description = "These pack creatures are intelligent and fierce.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/wolf.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/wolf.gif';
                    Eunits[i].dying='Pictures/Enemies/wolf_dying.gif';
                }
                if(Eunits[i].type==="Zombie"){
                    Eunits[i].description = "These walking dead can get out of hand. Kill the Necromancer!";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/Zombie.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/Zombie.gif';
                }
                if(Eunits[i].type==="Clunker"){
                    Eunits[i].description = "These machines can take alot of abuse!";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/Clunker.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/Clunker.gif';
                    Eunits[i].dying='Pictures/Enemies/Clunker_dying.gif';
                }
                if(Eunits[i].type==="Magnet"){
                    Eunits[i].description = "These machines redirect and catch all arrows.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/Magnet.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/Magnet.gif';
                    Eunits[i].dying='Pictures/Enemies/Magnet_dying.gif';
                }
                if(Eunits[i].type==="Sounddepressor"){
                    Eunits[i].description = "These machines prevent the use of all magic.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/Sounddepressor.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/Sounddepressor.gif';
                    Eunits[i].dying='Pictures/Enemies/Sounddepressor_dying.gif';
                }
                if(Eunits[i].type==="Cannon"){
                    Eunits[i].description = "These machines charge every turn, and if an ally moves into it's line of sight, it will fire. It will overload at 5 charge!";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/Cannon.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/Cannon.gif';
                    Eunits[i].dying='Pictures/Enemies/Cannon_dying.gif';
                }
                if(Eunits[i].type==="Hellhound"){
                    Eunits[i].description = "These fast beasts will explode when it comes into contact with one of your units.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/hellhound.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/hellhound.gif';
                    Eunits[i].dying='Pictures/Enemies/hellhound_dying.gif';
                }


            }


        }

        var grouparray = getCookie("grouparray").split("?");
        for(var i = 1;i<groupindex;i++){

            if(groups[i]==undefined){
                groups[i]= new newgroup(i);
                groupindex-=1;
            }
            var temp = grouparray[i].split("%");
            groups[i].location = parseInt(temp[0]);

            if(groups[i].location>0){
                groups[i].index = i;
                groups[i].active = parseInt(temp[1]);
                groups[i].hasmoved = JSON.parse(temp[2]);
                groups[i].curleft = parseInt(temp[3]);
                groups[i].curtop = parseInt(temp[4]);
                $('#background').append('<img src="Pictures/soldiericon.png" class="icon" id="M' + i +'" style="left: ' + groups[i].curleft + 'px; top:' + groups[i].curtop + 'px" />');
                if(groups[i].hasmoved===true){
                    $("#M" + i).addClass("grayicon")
                }
            }

        }

groupinfo();

    //exchange
    //exchange
    $(".icon").mousedown(function(e) {
        if(e.button === 2 ) {
            var temp = $(this).attr('id').replace("M","");
            exchangeunits(temp);
        }
    });
        var Egrouparray = getCookie("Egrouparray").split("?");
        for(var i = 1;i<Egroupindex;i++){

            if(Egroups[i]==undefined){
                Egroups[i]= new Enewgroup(i,1,1,"wolf");
                Egroupindex-=1;
            }
            var temp = Egrouparray[i].split("%");
            Egroups[i].location = parseInt(temp[0]);

            if(Egroups[i].location>0){

                Egroups[i].index = i;
                Egroups[i].hasmoved = JSON.parse(temp[1]);
                Egroups[i].curleft = parseInt(temp[2]);
                Egroups[i].curtop = parseInt(temp[3]);
                Egroups[i].experience = parseInt(temp[4]);
                Egroups[i].picture = temp[5];
                $('#background').append('<img src="Pictures/Enemies/' + Egroups[i].picture + '.gif" class="Eicon" id="EM' + i +'" style="left: ' + Egroups[i].curleft + 'px; top:' + Egroups[i].curtop + 'px" />');
            }

        }

        var spacearray = getCookie("spacearray").split("&");

        for(var i = 1;i<70;i++){
            var temp = spacearray[i].split("%");

            $('#space' + i).data('istown',JSON.parse(temp[0]));
            $('#space' + i).data('fortify',JSON.parse(temp[1]));
            $('#space' + i).data('loot',parseInt(temp[2]));
            $('#space' + i).data('filled',parseInt(temp[3]));
            $('#space' + i).data('conquered',JSON.parse(temp[4]));

            $('#space' + i + ' img').remove();
            if($('#space' + i).data('istown')===true && $('#space' + i).data('conquered')===false){
                $('#space' + i).append("<img class='townareas' src='Pictures/Town.gif' />");
            }
            if($('#space' + i).data('istown')===true && $('#space' + i).data('conquered')===true){
                $('#space' + i).append("<img class='townareas' src='Pictures/Etown.gif' />");
            }
            showwall();

        }

        $('#top').empty();
        $('#top').append("<h1 class = 'heading'>Day: " + day + "</h1>");
        $('#top').append("<h1 class = 'heading'>Money: " + money + "</h1>");
        $('#top').append("<h1 class = 'heading'>Research: " + currentresearch() + "</h1>");
        groupinfo();
    clickEicon();
    Egroupinfo();
    }
        function getCookie(cname) {
           
        var name = cname + "=";
        var ca = document.cookie.split(';');

        for(var i=0; i<ca.length; i++) {
            var c = ca[i];

            while (c.charAt(0)==' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
        }

        return "";
    }
        function setCookie(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
            var expires = "expires="+d.toUTCString();
            document.cookie = cname + "=" + cvalue + "; " + expires;
        }
    
    //click buttons on map
   $("#space70").click(function(){
        tipmessage("capitol","This is your capitol. You should go to the research center to begin researching new tools. Then go to the barracks to create your groups.");
        gotocapitol();
    });

});