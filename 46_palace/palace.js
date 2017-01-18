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

var number_of_units=13;

var missiondetails = "<p>There are 18 crystals scattered around the grounds. Every turn, you will recieve one point of energy per active crystal.</p><p>Enemies will rush towards the crystals. When they land on it, it will deactivate. Move a group to it to reactivate it.</p><p>When you reach the target energy level, the demigod will appear. Form a group that contains the Sorcerer, the Mimic, and the Guard, and send it to attack the demigod. To defeat it, select the mimic and first use brace, then use blood-sacrifice, and then use ultimate on it. Kill it and you win.</p><p>If you reach turn 60 before you kill the demigod, it's gameover.</p>"

var ultimateActive=true;
var braceActive=true;


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
        function getleft(name){
            var location = $("#space" + name).css("left");
            location = location.replace("px","")
            location = parseInt(location)
            return location
        }
        function gettop(name){
            var location = $("#space" + name).css("top");
            location = location.replace("px","")
            location = parseInt(location)
            return location
        }
        
        $("#space70").data("castle",true).data("move1",'34').data("move2",'36').data("move3",'25').data("move4",'45').data("left",265).data("top",305).data("location",70);
        
        $("#space1").data("move1",'2').data("move2",'11').data("move3",'').data("move4",'').data("left",getleft(1)).data("top",gettop(1)).data("location",1).data("fortify",true);
        $("#space2").data("move1",'3').data("move2",'1').data("move3",'12').data("move4",'').data("left",getleft(2)).data("top",gettop(2)).data("location",2).data("fortify",false);
        $("#space3").data("move1",'4').data("move2",'2').data("move3",'13').data("move4",'').data("left",getleft(3)).data("top",gettop(3)).data("location",3).data("fortify",true);
        $("#space4").data("move1",'5').data("move2",'3').data("move3",'14').data("move4",'').data("left",getleft(4)).data("top",gettop(4)).data("location",4).data("fortify",false);
        $("#space5").data("move1",'4').data("move2",'6').data("move3",'15').data("move4",'').data("left",getleft(5)).data("top",gettop(5)).data("location",5).data("fortify",true);
        $("#space6").data("move1",'5').data("move2",'7').data("move3",'16').data("move4",'').data("left",getleft(6)).data("top",gettop(6)).data("location",6).data("fortify",false);
        
        $("#space7").data("move1",'6').data("move2",'8').data("move3",'17').data("move4",'').data("left",getleft(7)).data("top",gettop(7)).data("location",7).data("fortify",true);
        $("#space8").data("move1",'9').data("move2",'7').data("move3",'18').data("move4",'').data("left",getleft(8)).data("top",gettop(8)).data("location",8).data("fortify",false);
        $("#space9").data("move1",'8').data("move2",'10').data("move3",'19').data("move4",'4').data("left",getleft(9)).data("top",gettop(9)).data("location",9).data("fortify",true);
        $("#space10").data("move1",'9').data("move2",'20').data("move3",'').data("move4",'').data("left",getleft(10)).data("top",gettop(10)).data("location",10).data("fortify",false);
        $("#space11").data("move1",'12').data("move2",'1').data("move3",'21').data("move4",'').data("left",getleft(11)).data("top",gettop(11)).data("location",11).data("fortify",false);
        $("#space12").data("move1",'2').data("move2",'11').data("move3",'13').data("move4",'22').data("left",getleft(12)).data("top",gettop(12)).data("location",12).data("fortify",false);
        
        $("#space13").data("move1",'14').data("move2",'12').data("move3",'3').data("move4",'23').data("left",getleft(13)).data("top",gettop(13)).data("location",13).data("fortify",false); $("#space14").data("move1",'15').data("move2",'13').data("move3",'4').data("move4",'24').data("left",getleft(14)).data("top",gettop(14)).data("location",14).data("fortify",false);
        $("#space15").data("move1",'16').data("move2",'14').data("move3",'5').data("move4",'25').data("left",getleft(15)).data("top",gettop(15)).data("location",15).data("fortify",false);
        $("#space16").data("move1",'17').data("move2",'15').data("move3",'6').data("move4",'26').data("left",getleft(16)).data("top",gettop(16)).data("location",16).data("fortify",false);
        $("#space17").data("move1",'18').data("move2",'16').data("move3",'7').data("move4",'27').data("left",getleft(17)).data("top",gettop(17)).data("location",17).data("fortify",false);
        
        $("#space18").data("move1",'19').data("move2",'17').data("move3",'8').data("move4",'28').data("left",getleft(18)).data("top",gettop(18)).data("location",18).data("fortify",false); $("#space19").data("move1",'20').data("move2",'18').data("move3",'9').data("move4",'29').data("left",getleft(19)).data("top",gettop(19)).data("location",19).data("fortify",false);
        $("#space20").data("move1",'19').data("move2",'10').data("move3",'30').data("move4",'').data("left",getleft(20)).data("top",gettop(20)).data("location",20).data("fortify",true);
        $("#space21").data("move1",'').data("move2",'22').data("move3",'11').data("move4",'31').data("left",getleft(21)).data("top",gettop(21)).data("location",21).data("fortify",true);
        $("#space22").data("move1",'21').data("move2","23").data("move3",'12').data("move4",'32').data("left",getleft(22)).data("top",gettop(22)).data("location",22).data("fortify",false);
        
        $("#space23").data("move1",'22').data("move2",'24').data("move3",'13').data("move4",'33').data("left",getleft(23)).data("top",gettop(23)).data("location",23).data("fortify",false); $("#space24").data("move1",'23').data("move2",'25').data("move3",'14').data("move4",'34').data("left",getleft(24)).data("top",gettop(24)).data("location",24).data("fortify",true);
        $("#space25").data("move1",'24').data("move2",'26').data("move3",'15').data("move4",'70').data("left",getleft(25)).data("top",gettop(25)).data("location",25).data("fortify",false);
        $("#space26").data("move1",'25').data("move2",'27').data("move3",'16').data("move4",'36').data("left",getleft(26)).data("top",gettop(26)).data("location",26).data("fortify",true);
        $("#space27").data("move1",'26').data("move2",'28').data("move3",'17').data("move4",'37').data("left",getleft(27)).data("top",gettop(27)).data("location",27).data("fortify",false);
        
        $("#space28").data("move1",'27').data("move2",'29').data("move3",'18').data("move4",'38').data("left",getleft(28)).data("top",gettop(28)).data("location",28).data("fortify",true); $("#space29").data("move1",'28').data("move2",'30').data("move3",'19').data("move4",'39').data("left",getleft(29)).data("top",gettop(29)).data("location",29).data("fortify",false);
        $("#space30").data("move1",'29').data("move2",'20').data("move3",'40').data("move4",'').data("left",getleft(30)).data("top",gettop(30)).data("location",30).data("fortify",false);
        $("#space31").data("move1",'21').data("move2",'41').data("move3",'32').data("move4",'').data("left",getleft(31)).data("top",gettop(31)).data("location",31).data("fortify",false);
        $("#space32").data("move1",'31').data("move2",'33').data("move3",'22').data("move4",'42').data("left",getleft(32)).data("top",gettop(32)).data("location",32).data("fortify",false);
        
        $("#space33").data("move1",'32').data("move2",'34').data("move3",'23').data("move4",'43').data("left",getleft(33)).data("top",gettop(33)).data("location",33).data("fortify",true); $("#space34").data("move1",'33').data("move2",'70').data("move3",'24').data("move4",'44').data("left",getleft(34)).data("top",gettop(34)).data("location",34).data("fortify",false);
        $("#space35").data("move1",'69').data("move2",'60').data("move3",'').data("move4",'').data("left",getleft(35)).data("top",gettop(35)).data("location",35).data("fortify",false);
        $("#space36").data("move1",'70').data("move2",'37').data("move3",'26').data("move4",'46').data("left",getleft(36)).data("top",gettop(36)).data("location",36).data("fortify",false);
        $("#space37").data("move1",'36').data("move2",'38').data("move3",'27').data("move4",'47').data("left",getleft(37)).data("top",gettop(37)).data("location",37).data("fortify",true);
        
        $("#space38").data("move1",'37').data("move2",'39').data("move3",'28').data("move4",'48').data("left",getleft(38)).data("top",gettop(38)).data("location",38).data("fortify",true); $("#space39").data("move1",'38').data("move2",'40').data("move3",'29').data("move4",'49').data("left",getleft(39)).data("top",gettop(39)).data("location",39).data("fortify",false);
        $("#space40").data("move1",'39').data("move2",'50').data("move3",'30').data("move4",'').data("left",getleft(40)).data("top",gettop(40)).data("location",40).data("fortify",true);
        $("#space41").data("move1",'').data("move2",'31').data("move3",'51').data("move4",'42').data("left",getleft(41)).data("top",gettop(41)).data("location",41).data("fortify",true);
        $("#space42").data("move1",'41').data("move2",'43').data("move3",'32').data("move4",'52').data("left",getleft(42)).data("top",gettop(42)).data("location",42).data("fortify",false);
        
        $("#space43").data("move1",'42').data("move2",'44').data("move3",'33').data("move4",'53').data("left",getleft(43)).data("top",gettop(43)).data("location",43).data("fortify",false); $("#space44").data("move1",'43').data("move2",'45').data("move3",'34').data("move4",'54').data("left",getleft(44)).data("top",gettop(44)).data("location",44).data("fortify",true);
        $("#space45").data("move1",'44').data("move2",'46').data("move3",'70').data("move4",'55').data("left",getleft(45)).data("top",gettop(45)).data("location",45).data("fortify",false);
        $("#space46").data("move1",'45').data("move2",'47').data("move3",'36').data("move4",'56').data("left",getleft(46)).data("top",gettop(46)).data("location",46).data("fortify",true);
        $("#space47").data("move1",'46').data("move2",'48').data("move3",'37').data("move4",'57').data("left",getleft(47)).data("top",gettop(47)).data("location",47).data("fortify",false);
        
        $("#space48").data("move1",'47').data("move2",'49').data("move3",'38').data("move4",'58').data("left",getleft(48)).data("top",gettop(48)).data("location",48).data("fortify",true); $("#space49").data("move1",'48').data("move2",'50').data("move3",'39').data("move4",'59').data("left",getleft(49)).data("top",gettop(49)).data("location",49).data("fortify",false);
        $("#space50").data("move1",'49').data("move2",'').data("move3",'40').data("move4",'60').data("left",getleft(50)).data("top",gettop(50)).data("location",50).data("fortify",false);
        $("#space51").data("move1",'').data("move2",'52').data("move3",'41').data("move4",'61').data("left",getleft(51)).data("top",gettop(51)).data("location",51).data("fortify",false);
        $("#space52").data("move1",'51').data("move2",'53').data("move3",'42').data("move4",'62').data("left",getleft(52)).data("top",gettop(52)).data("location",52).data("fortify",false);
        
        $("#space53").data("move1",'52').data("move2",'54').data("move3",'43').data("move4",'63').data("left",getleft(53)).data("top",gettop(53)).data("location",53).data("fortify",false); $("#space54").data("move1",'53').data("move2",'55').data("move3",'44').data("move4",'64').data("left",getleft(54)).data("top",gettop(54)).data("location",54).data("fortify",false);
        $("#space55").data("move1",'54').data("move2",'56').data("move3",'45').data("move4",'65').data("left",getleft(55)).data("top",gettop(55)).data("location",55).data("fortify",false);
        $("#space56").data("move1",'55').data("move2",'57').data("move3",'46').data("move4",'66').data("left",getleft(56)).data("top",gettop(56)).data("location",56).data("fortify",false);
        $("#space57").data("move1",'56').data("move2",'58').data("move3",'47').data("move4",'67').data("left",getleft(57)).data("top",gettop(57)).data("location",57).data("fortify",false);
        
        $("#space58").data("move1",'57').data("move2",'59').data("move3",'48').data("move4",'68').data("left",getleft(58)).data("top",gettop(58)).data("location",58).data("fortify",false); $("#space59").data("move1",'58').data("move2",'60').data("move3",'49').data("move4",'69').data("left",getleft(59)).data("top",gettop(59)).data("location",59).data("fortify",false);
        $("#space60").data("move1",'59').data("move2",'').data("move3",'50').data("move4",'35').data("left",getleft(60)).data("top",gettop(60)).data("location",60).data("fortify",true);
        $("#space61").data("move1",'').data("move2",'62').data("move3",'51').data("move4",'').data("left",getleft(61)).data("top",gettop(61)).data("location",61).data("fortify",true);
        $("#space62").data("move1",'61').data("move2",'63').data("move3",'52').data("move4",'').data("left",getleft(62)).data("top",gettop(62)).data("location",62).data("fortify",false);
        
        $("#space63").data("move1",'62').data("move2",'64').data("move3",'53').data("move4",'').data("left",getleft(63)).data("top",gettop(63)).data("location",63).data("fortify",true); $("#space64").data("move1",'63').data("move2",'65').data("move3",'54').data("move4",'').data("left",getleft(64)).data("top",gettop(64)).data("location",64).data("fortify",false);
        $("#space65").data("move1",'64').data("move2",'66').data("move3",'55').data("move4",'').data("left",getleft(65)).data("top",gettop(65)).data("location",65).data("fortify",true);
        $("#space66").data("move1",'65').data("move2",'67').data("move3",'56').data("move4",'').data("left",getleft(66)).data("top",gettop(66)).data("location",66).data("fortify",false);
        $("#space67").data("move1",'66').data("move2",'68').data("move3",'57').data("move4",'').data("left",getleft(67)).data("top",gettop(67)).data("location",67).data("fortify",true);
        $("#space68").data("move1",'67').data("move2",'69').data("move3",'58').data("move4",'').data("left",getleft(68)).data("top",gettop(68)).data("location",68).data("fortify",false);
        $("#space69").data("move1",'68').data("move2",'35').data("move3",'59').data("move4",'').data("left",getleft(69)).data("top",gettop(69)).data("location",69).data("fortify",true);
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
                tempclass="Wizard";
                  tempname="Wizard1";
                break;
            case 3:
                tempclass="Archer";
                  tempname="Archer2";
                break;
            case 4:
                tempclass="Templar";
                  tempname="Templar1";
                break;
            case 5:
                tempclass="Soldier";
                  tempname="Soldier2";
                break;
            case 6:
                tempclass="Knight";
                  tempname="Knight";
                break;
            case 7:
                tempclass="Rouge";
                  tempname="Rouge1";
                break;
            case 8:
                tempclass="Healer";
                  tempname="Healer1";
                break;
            case 9:
                tempclass="Sorcerer";
                  tempname="Sorcerer";
                break;
                
            case 10:
                tempclass="Thief";
                  tempname="Thief1";
                break;
            case 11:
                tempclass="Enchantress";
                  tempname="Enchantress";
                break;
            case 12:
                tempclass="Guard";
                  tempname="Guard";
                break;
            case 13:
                tempclass="Mimic";
                  tempname="Mimic";
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

function liberate(curloc){}

 function tipmessage(index, e){}

  function movebadguys(){
        var direction =  Math.floor((Math.random() * 2) + 1);
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
                var thistemp="";
                if(Egroups[i].location==undefined){
                    continue;
                }
                if(Egroups[i].location<0){
                    continue;
                }
                if(Egroups[i].location==""){
                    Egroups[i].location=-2
                    $("#EM" + i).remove();
                    continue;
                }
                if (crystals[Egroups[i].location]==true) {
                    crystals[Egroups[i].location]=false;
                    checkcrystal();
                } else {
                if (Egroups[i].location === 1 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(2)==false){
                        thistemp = 2;
                    } else if(nomove(11)==false){
                        thistemp = 11;
                    }
                }
                if (Egroups[i].location === 2 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(12)==false){
                        thistemp = 12;
                    } else if(nomove(3)==false){
                        thistemp = 3;
                    }
                }
                if (Egroups[i].location === 3 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(13)==false){
                        thistemp = 13;
                    } else if(nomove(4)==false){
                        thistemp = 4;
                    }
                }
                if (Egroups[i].location === 4 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(14)==false){
                        thistemp = 14;
                    } else if(nomove(5)==false){
                        thistemp = 5;
                    } 
                }
                if (Egroups[i].location === 5 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(15)==false){
                        thistemp = 15;
                    } else if(nomove(6)==false){
                        thistemp = 6;
                    }
                }
                if (Egroups[i].location === 6 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(16)==false){
                        thistemp = 16;
                    }
                }
                if (Egroups[i].location === 7 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(17)==false){
                        thistemp = 17;
                    } else if(nomove(6)==false){
                        thistemp = 6;
                    }
                }
                if (Egroups[i].location === 8 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(18)==false){
                        thistemp = 18;
                    } else if(nomove(7)==false){
                        thistemp = 7;
                    } 
                }
                if (Egroups[i].location === 9 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(10)==false && crystals["10"]){
                        thistemp = 10;
                    } else if(nomove(19)==false){
                        thistemp = 19;
                    } else if(nomove(8)==false){
                        thistemp = 8;
                    }
                }
                if (Egroups[i].location === 10 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(9)==false){
                        thistemp = 9;
                    } else if(nomove(20)==false){
                        thistemp = 20;
                    }
                }
                if (Egroups[i].location === 11 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(12)==false){
                        thistemp = 12;
                    } else if(nomove(21)==false){
                        thistemp = 21;
                    }
                }
                if (Egroups[i].location === 12 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(13)==false){
                        thistemp = 13;
                    } else if(nomove(22)==false){
                        thistemp = 22;
                    }
                }
                if (Egroups[i].location === 13 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(12)==false && crystals["12"]){
                        thistemp = 12;
                    } else if(nomove(23)==false && crystals["23"]){
                        thistemp = 23;
                    } else if(nomove(14)==false){
                        thistemp = 14;
                    }
                }
                if (Egroups[i].location === 14 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(13)==false && (crystals["12"] || crystals["23"])){
                        thistemp = 13;
                    } else if(nomove(24)==false){
                        thistemp = 24;
                    } else if(nomove(15)==false){
                        thistemp = 15;
                    }
                }
                if (Egroups[i].location === 15 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(14)==false && crystals["14"]){
                        thistemp = 14;
                    } else if(nomove(16)==false && crystals["16"]){
                        thistemp = 16;
                    } else if(nomove(25)==false){
                        thistemp = 25;
                    } 
                }
                if (Egroups[i].location === 16 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(15)==false && crystals["14"]){
                        thistemp = 15;
                    } else if(nomove(17)==false){
                        thistemp = 17;
                    } else if(nomove(26)==false){
                        thistemp = 26;
                    }
                }
                if (Egroups[i].location === 17 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(16)==false && crystals["16"]){
                        thistemp = 16;
                    } else if(nomove(18)==false && crystals["18"]){
                        thistemp = 18;
                    } else if(nomove(27)==false){
                        thistemp = 27;
                    }
                }
                if (Egroups[i].location === 18 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(17)==false && crystals["16"]){
                        thistemp = 17;
                    } else if(nomove(19)==false && crystals["10"]){
                        thistemp = 19;
                    } else if(nomove(28)==false){
                        thistemp = 28;
                    }
                }
                if (Egroups[i].location === 19 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(9)==false && crystals["10"]){
                        thistemp = 9;
                    } else if(nomove(18)==false && crystals["18"]){
                        thistemp = 18;
                    } else if(nomove(29)==false){
                        thistemp = 29;
                    }  
                }
                if (Egroups[i].location === 20 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(10)==false && crystals["10"]){
                        thistemp = 10;
                    } else if(nomove(19)==false && crystals["18"]){
                        thistemp = 19;
                    } else if(nomove(30)==false){
                        thistemp = 30;
                    }
                }
                if (Egroups[i].location === 21 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(22)==false){
                        thistemp = 22;
                    } else if(nomove(31)==false){
                        thistemp = 31;
                    }
                }
                if (Egroups[i].location === 22 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(12)==false && crystals["12"]){
                        thistemp = 12;
                    } else if(nomove(23)==false && crystals["23"]){
                        thistemp = 23;
                    } else if(nomove(32)==false){
                        thistemp = 32;
                    }
                }
                if (Egroups[i].location === 23 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(13)==false && (crystals["12"] || crystals["14"])){
                        thistemp = 13;
                    } else if(nomove(33)==false && crystals["32"]){
                        thistemp = 33;
                    } else if(nomove(24)==false){
                        thistemp = 24;
                    }
                }
                if (Egroups[i].location === 24 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(23)==false && (crystals["23"])){
                        thistemp = 23;
                    } else if(nomove(14)==false && crystals["14"]){
                        thistemp = 14;
                    } else if(nomove(34)==false){
                        thistemp = 34;
                    }  
                }
                if (Egroups[i].location === 25 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(15)==false && (crystals["14"] || crystals["16"])){
                        thistemp = 15;
                    } else if(nomove(26)==false && crystals["27"]){
                        thistemp = 33;
                    } else if(nomove(24)==false){
                        thistemp = 24;
                    } 
                }
                if (Egroups[i].location === 26 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(16)==false && (crystals["16"])){
                        thistemp = 16;
                    } else if(nomove(27)==false && crystals["27"]){
                        thistemp = 27;
                    } else if(nomove(36)==false){
                        thistemp = 36;
                    }
                }
                if (Egroups[i].location === 27 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(17)==false && (crystals["16"] || crystals["18"])){
                        thistemp = 17;
                    } else if(nomove(28)==false && crystals["38"]){
                        thistemp = 28;
                    } else if(nomove(37)==false){
                        thistemp = 37;
                    }
                }
                if (Egroups[i].location === 28 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(18)==false && (crystals["18"])){
                        thistemp = 18;
                    } else if(nomove(27)==false && crystals["27"]){
                        thistemp = 27;
                    } else if(nomove(29)==false && crystals["29"]){
                        thistemp = 29;
                    } else if(nomove(38)==false){
                        thistemp = 38;
                    }
                }
                if (Egroups[i].location === 29 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(39)==false && crystals["38"]){
                        thistemp = 39;
                    } else if(nomove(19)==false && crystals["18"]){
                        thistemp = 19;
                    } else if(nomove(28)==false){
                        thistemp = 28;
                    }
                }
                if (Egroups[i].location === 30 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(29)==false && crystals["29"]){
                        thistemp = 29;
                    } else if(nomove(20)==false && crystals["10"]){
                        thistemp = 20;
                    } else if(nomove(40)==false){
                        thistemp = 40;
                    }
                }
                if (Egroups[i].location === 31 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(32)==false){
                        thistemp = 32;
                    } else if(nomove(41)==false){
                        thistemp = 41;
                    } else if(nomove(21)==false){
                        thistemp = 21;
                    }
                }
                if (Egroups[i].location === 32 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(33)==false && crystals["23"]){
                        thistemp = 33;
                    } else if(nomove(42)==false){
                        thistemp = 42;
                    } else if(nomove(33)==false){
                        thistemp = 33;
                    }
                }
                if (Egroups[i].location === 33 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(23)==false && crystals["23"]){
                        thistemp = 23;
                    } else if(nomove(43)==false && crystals["43"]){
                        thistemp = 43;
                    } else if(nomove(32)==false){
                        thistemp = 32;
                    } else if(nomove(34)==false){
                        thistemp = 34;
                    }
                }
                if (Egroups[i].location === 34 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(33)==false){
                        thistemp = 33;
                    } else if(nomove(24)==false){
                        thistemp = 24;
                    } else if(nomove(44)==false){
                        thistemp = 44;
                    }
                }
                if (Egroups[i].location === 35 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(60)==false){
                        thistemp = 60;
                    } else if(nomove(69)==false){
                        thistemp = 69;
                    }
                }
                if (Egroups[i].location === 36 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(37)==false){
                        thistemp = 37;
                    } else if(nomove(26)==false){
                        thistemp = 26;
                    } else if(nomove(46)==false){
                        thistemp = 46;
                    }
                }
                if (Egroups[i].location === 37 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(27)==false && crystals["27"]){
                        thistemp = 27;
                    } else if(nomove(47)==false && crystals["47"]){
                        thistemp = 47;
                    } else if(nomove(38)==false && crystals["38"]){
                        thistemp = 38;
                    } else if(nomove(36)==false){
                        thistemp = 36;
                    }
                }
                if (Egroups[i].location === 38 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(28)==false && (crystals["27"] || crystals["29"] || crystals["18"])){
                        thistemp = 28;
                    } else if(nomove(48)==false && (crystals["47"] || crystals["49"] || crystals["58"])){
                        thistemp = 48;
                    } else if(nomove(39)==false){
                        thistemp = 39;
                    } else if(nomove(37)==false){
                        thistemp = 37;
                    }
                }
                if (Egroups[i].location === 39 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(38)==false && (crystals["38"])){
                        thistemp = 38;
                    } else if(nomove(49)==false && (crystals["49"])){
                        thistemp = 49;
                    } else if(nomove(29)==false && (crystals["29"])){
                        thistemp = 29;
                    } else if(nomove(40)==false){
                        thistemp = 40;
                    } 
                }
                if (Egroups[i].location === 40 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(39)==false){
                        thistemp = 39;
                    } else if(nomove(30)==false && (crystals["29"])){
                        thistemp = 30;
                    } else if(nomove(50)==false && (crystals["49"])){
                        thistemp = 50;
                    }
                }
                if (Egroups[i].location === 41 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(42)==false){
                        thistemp = 42;
                    } else if(nomove(31)==false){
                        thistemp = 31;
                    } else if(nomove(51)==false){
                        thistemp = 51;
                    }
                }
                if (Egroups[i].location === 42 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(32)==false && crystals["32"]){
                        thistemp = 32;
                    } else if(nomove(43)==false && crystals["43"]){
                        thistemp = 43;
                    } else if(nomove(52)==false){
                        thistemp = 52;
                    } 
                }
                if (Egroups[i].location === 43 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(53)==false && (crystals["52"] || crystals["54"])){
                        thistemp = 53;
                    } else if(nomove(33)==false && crystals["32"]){
                        thistemp = 33;
                    } else if(nomove(44)==false){
                        thistemp = 44;
                    }
                }
                if (Egroups[i].location === 44 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(43)==false && crystals["43"]){
                        thistemp = 43;
                    } else if(nomove(54)==false && crystals["54"]){
                        thistemp = 54;
                    } else if(nomove(45)==false){
                        thistemp = 45;
                    }
                }
                if (Egroups[i].location === 45 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(44)==false && (crystals["43"] || crystals["54"])){
                        thistemp = 44;
                    } else if(nomove(46)==false && (crystals["47"] || crystals["56"])){
                        thistemp = 46;
                    } else if(nomove(55)==false){
                        thistemp = 55;
                    }else if(nomove(44)==false){
                        thistemp = 44;
                    }
                }
                if (Egroups[i].location === 46 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(47)==false && crystals["47"]){
                        thistemp = 47;
                    } else if(nomove(56)==false && crystals["56"]){
                        thistemp = 56;
                    } else if(nomove(45)==false){
                        thistemp = 45;
                    }
                }
                if (Egroups[i].location === 47 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(57)==false && (crystals["56"] || crystals["58"])){
                        thistemp = 57;
                    } else if(nomove(37)==false && crystals["27"]){
                        thistemp = 27;
                    } else if(nomove(48)==false){
                        thistemp = 48;
                    }
                }
                if (Egroups[i].location === 48 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(58)==false && (crystals["58"])){
                        thistemp = 58;
                    } else if(nomove(49)==false && crystals["49"]){
                        thistemp = 49;
                    } else if(nomove(47)==false && crystals["47"]){
                        thistemp = 47;
                    } else if(nomove(38)==false){
                        thistemp = 38;
                    } 
                }
                if (Egroups[i].location === 49 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(39)==false && (crystals["29"])){
                        thistemp = 39;
                    } else if(nomove(59)==false && crystals["35"]){
                        thistemp = 59;
                    } else if(nomove(48)==false){
                        thistemp = 48;
                    }
                }
                if (Egroups[i].location === 50 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(49)==false && crystals["49"]){
                        thistemp = 49;
                    } else if(nomove(60)==false && crystals["35"]){
                        thistemp = 60;
                    } else if(nomove(40)==false){
                        thistemp = 40;
                    }
                }
                if (Egroups[i].location === 51 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(52)==false){
                        thistemp = 52;
                    } else if(nomove(41)==false){
                        thistemp = 41;
                    } 
                }
                    
                if (Egroups[i].location === 52 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(42)==false && (crystals["32"] || crystals["43"])){
                        thistemp = 42;
                    } else if(nomove(53)==false){
                        thistemp = 53;
                    }
                }
                if (Egroups[i].location === 53 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(52)==false && crystals["52"]){
                        thistemp = 52;
                    } else if(nomove(43)==false && crystals["43"]){
                        thistemp = 43;
                    } else if(nomove(54)==false){
                        thistemp = 54;
                    }
                }
                if (Egroups[i].location === 54 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(44)==false && (crystals["43"])){
                        thistemp = 44;
                    } else if(nomove(53)==false && crystals["52"]){
                        thistemp = 53;
                    } else if(nomove(55)==false){
                        thistemp = 55;
                    }
                }
                if (Egroups[i].location === 55 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(54)==false && crystals["54"]){
                        thistemp = 54;
                    } else if(nomove(56)==false && crystals["56"]){
                        thistemp = 56;
                    } else if(nomove(45)==false){
                        thistemp = 45;
                    }
                }
                if (Egroups[i].location === 56 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(46)==false && crystals["47"]){
                        thistemp = 46;
                    } else if(nomove(55)==false && crystals["54"]){
                        thistemp = 55;
                    } else if(nomove(57)==false){
                        thistemp = 57;
                    } 
                }
                if (Egroups[i].location === 57 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(56)==false && crystals["56"]){
                        thistemp = 56;
                    } else if(nomove(47)==false && crystals["47"]){
                        thistemp = 47;
                    } else if(nomove(49)==false){
                        thistemp = 49;
                    }
                }
                if (Egroups[i].location === 58 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(48)==false && (crystals["47"] || crystals["49"] || crystals["38"])){
                        thistemp = 48;
                    } else if(nomove(59)==false && crystals["35"]){
                        thistemp = 59;
                    } else if(nomove(57)==false){
                        thistemp = 57;
                    }
                }
                if (Egroups[i].location === 59 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(69)==false && crystals["35"]){
                        thistemp = 69;
                    } else if(nomove(58)==false && crystals["58"]){
                        thistemp = 58;
                    } else if(nomove(49)==false){
                        thistemp = 49;
                    }
                }
                if (Egroups[i].location === 60 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(35)==false && crystals["35"]){
                        thistemp = 35;
                    } else if(nomove(59)==false){
                        thistemp = 59;
                    }
                }
                    
                if (Egroups[i].location === 61 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(62)==false){
                        thistemp = 62;
                    } else if(nomove(51)==false){
                        thistemp = 51;
                    }
                }
                if (Egroups[i].location === 62 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(52)==false){
                        thistemp = 52;
                    } else if(nomove(63)==false){
                        thistemp = 63;
                    } 
                }
                if (Egroups[i].location === 63 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(53)==false){
                        thistemp = 53;
                    } else if(nomove(64)==false){
                        thistemp = 64;
                    }
                }
                if (Egroups[i].location === 64 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(54)==false){
                        thistemp = 54;
                    } else if(nomove(65)==false){
                        thistemp = 65;
                    }
                }
                if (Egroups[i].location === 65 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(55)==false){
                        thistemp = 55;
                    } else if(nomove(66)==false){
                        thistemp = 66;
                    }
                }
                if (Egroups[i].location === 66 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(56)==false){
                        thistemp = 56;
                    }
                }
                if (Egroups[i].location === 67 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(57)==false){
                        thistemp = 57;
                    } else if(nomove(66)==false){
                        thistemp = 66;
                    }
                }
                if (Egroups[i].location === 68 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(58)==false){
                        thistemp = 58;
                    } else if(nomove(67)==false){
                        thistemp = 67;
                    }
                }
                if (Egroups[i].location === 69 && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if(nomove(35)==false && crystals["35"]){
                        thistemp = 35;
                    } else if(nomove(59)==false){
                        thistemp = 59;
                    } else if(nomove(68)==false){
                        thistemp = 68;
                    }

                }

                    
                    if(thistemp!=""){
                        Egroups[i].location = thistemp;  
                        Egroups[i].curleft = $("#space" + thistemp).data("left");
                        Egroups[i].curtop = $("#space" + thistemp).data("top");
                        $('#EM' + i).animate({
                            left: $("#space" + thistemp).data("left") + 'px',
                            top: $("#space" + thistemp).data("top") + 'px'
                        });
                    }
                }
                

                    
                        
            }
    }

    function createbadguys(){
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
        for(var i =1;i<3;i++){
            
        
        //choose badguy
        var temp = Math.floor((Math.random() * 10) + 1);
        //choose starting location
        var baddielocation=Math.floor((Math.random() * 13) + 1);
            switch(baddielocation){
                case 1:
                    baddielocation=2
                break;
                case 2:
                    baddielocation=4
                break;
                case 3:
                    baddielocation=6
                break;
                case 4:
                    baddielocation=8
                break;
                case 5:
                    baddielocation=11
                break;
                case 6:
                    baddielocation=30
                break;
                case 7:
                    baddielocation=31
                break;
                case 8:
                    baddielocation=50
                case 9:
                    baddielocation=51
                break;
                case 10:
                    baddielocation=62
                break;
                case 11:
                    baddielocation=64
                break;
                case 12:
                    baddielocation=66
                break;
                case 13:
                    baddielocation=68
                break;
            }
            
                if(nomove(baddielocation)){
                    continue;
                }
        if (day<10 && day>=1){
            switch(temp){
                case 1:
                case 2:
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,300,'Bat');
                    break;
                case 3:
                case 4:
                case 5:
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'warrior');
                    break;
                case 6:
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Fire Elemental');
                    break;
                case 7:
                    Eunits[newEindex()]=new IceElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new IceElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Ice Elemental');
                    break;
                case 8:
                    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Clunker');
                    break;
                case 9:
                    Eunits[newEindex()]=new Magnet(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Sounddepressor(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Magnet');
                    break;
                case 10:
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,300,'Gremlin');
                    break;
            }
        }
        if (day<20 && day>=10){
            switch(temp){
                case 1:
                case 2:
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Bat');
                    break;
                case 3:
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new LightningElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Fire Elemental');
                    break;
                case 4:
                    Eunits[newEindex()]=new LightningElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Sounddepressor(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Lightning Elemental');
                    break;
                case 5:
                    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Clunker');
                    break;
                case 6:
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'warrior');
                    break;
                case 7:
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Flamewraith(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'flamewraith');
                    break;
                case 8:
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Gremlin');
                    break;
                case 9:
                    Eunits[newEindex()]=new Cannon(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Cannon');
                    break;
                case 10:
                    Eunits[newEindex()]=new Wisp(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Frostlord(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Frostlord');
                    break;
            }
        }
        if (day<30 && day>=20){
            switch(temp){
                case 1:
                case 2:
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Bat');
                    break;
                case 3:
                    Eunits[newEindex()]=new Spitter(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Spitter(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Spitter');
                    break;
                case 4:
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new LightningElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Fire Elemental');
                    break;
                case 5:
                    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Cannon(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Cannon');
                    break;
                case 6:
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Flamewraith(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'flamewraith');
                    break;
                case 7:
                    Eunits[newEindex()]=new Angel(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Angel');
                    break;
                case 8:
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Vampire(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'vampire');
                    break;
                case 9:
                    Eunits[newEindex()]=new Wisp(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Frostlord(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Waterwraith(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Frostlord');
                    break;
                case 10:
                    Eunits[newEindex()]=new Zombie(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Necromancer(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Zombie(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Necromancer');
                    break;
            }
        }
        if (day<40 && day>=30){
            switch(temp){
                case 1:
                case 2:
                    Eunits[newEindex()]=new Werewolf(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Werewolf(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'werewolf');
                    break;
                case 3:
                    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Cannon(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Werewolf(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Cannon');
                    break;
                case 4:
                    Eunits[newEindex()]=new IceElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Waterwraith(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new IceElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Ice Elemental');
                    break;
                case 5:
                    Eunits[newEindex()]=new Frostwraith(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Frostlord(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Frostwraith(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Frostlord');
                    break;
                case 6:
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'warrior');
                    break;
                case 7:
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Angel(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,700,'Angel');
                    break;
                case 8:
                    Eunits[newEindex()]=new Werewolf(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Vampire(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Werewolf(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,700,'vampire');
                    break;
                case 9:
                    Eunits[newEindex()]=new Golem(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Shaman(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Shaman');
                    break;
                case 10:
                    Eunits[newEindex()]=new Bee(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bee(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Beekeeper(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bee(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bee(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Beekeeper');
                    break;
            }
        }
        if (day<50 && day>=40){
            switch(temp){
                case 1:
                case 2:
                    Eunits[newEindex()]=new Werewolf(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Werewolf(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'werewolf');
                    break;
                case 3:
                    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Cannon(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Werewolf(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Cannon');
                    break;
                case 4:
                    Eunits[newEindex()]=new IceElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Waterwraith(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new IceElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Ice Elemental');
                    break;
                case 5:
                    Eunits[newEindex()]=new Frostwraith(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Frostlord(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Frostwraith(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Frostlord');
                    break;
                case 6:
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'warrior');
                    break;
                case 7:
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Angel(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,900,'Angel');
                    break;
                case 8:
                    Eunits[newEindex()]=new Vampire(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Vampire(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Vampire(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'vampire');
                    break;
                case 9:
                    Eunits[newEindex()]=new Hellhound(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Demon(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Hellhound(curEindex, Egroupindex,difflevel);                    
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,800,'Demon');
                    break;
                case 10:
                    Eunits[newEindex()]=new Spitter(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Djinn(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Spitter(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,800,'Djinn');
                    break;
            }
        }
        if (day<60 && day>=50){
            switch(temp){
                case 1:
                case 2:
                    Eunits[newEindex()]=new Angel(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Werewolf(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Angel');
                    break;
                case 3:
                    Eunits[newEindex()]=new Hellhound(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Demon(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Hellhound(curEindex, Egroupindex,difflevel);  
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Demon');
                    break;
                case 4:
                    Eunits[newEindex()]=new IceElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Frostlord(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new IceElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Frostlord');
                    break;
                case 5:
                    Eunits[newEindex()]=new Frostwraith(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Frostlord(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Frostwraith(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,800,'Frostlord');
                    break;
                case 6:
                    Eunits[newEindex()]=new Spitter(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Djinn(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Spitter(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,800,'Djinn');
                    break;
                case 7:
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Angel(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,900,'Angel');
                    break;
                case 8:
                    Eunits[newEindex()]=new Vampire(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Demon(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Vampire(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,800,'Demon');
                    break;
                case 9:
                    Eunits[newEindex()]=new Angel(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Demon(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Frostlord(curEindex, Egroupindex,difflevel);                    
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,800,'Demon');
                    break;
                case 10:
                    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Djinn(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,800,'Djinn');
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
                        backgroundpic="../Pictures/backgroundpics/desertbackground.png";
    return backgroundpic;
}

var demigodin=-1;
function indiv_newday(){
           $('.heading').remove();
    for(var i = 1;i<groupindex;i++){
        crystals[groups[i].location]=true;
    }
    checkcrystal()
    countCrystal();
    energy+=crystalCount;
        $('#top').html("<h1 class = 'heading'>Turn: " + day + "/60</h1><span style='margin-left:20px'>Crystals: " + crystalCount + "/18</span><span style='margin-left:20px'>Energy: " + energy + "/" + (200 + 150*difflevel) + "</span>");
    if(day>=60){
        gameover()
    }
    if(energy>=(200 + 150*difflevel)){
        if(demigodin==-1){
            demigodin=parseInt(Egroupindex);
            Eunits[newEindex()]=new Demigod(curEindex, Egroupindex,difflevel);
            Egroups[Egroupindex]=new Enewgroup(Egroupindex,4,400,'Demigod');
        }

    }
}
function indiv_gotocapitol(){
      $("#TEXT").empty().append('<div class="gotobutton" id = "gotobarracks"><p>BARRACKS</p></div><div class="gotobutton" id = "gotobrewery"><p>BREWERY</p></div>');
}
function indiv_youwin(){
    if(demigodin>0){
        if(Egroups[demigodin].location<0){
            winbattle("../47/final.html")
        }
    }
}

function levelresearch(){
    
}
function enemyconquer(){
    
}

var crystals={};
var crystalCount=0;
var energy=-18;
function countCrystal(){
    crystalCount=0;
    if(crystals["10"]){
        crystalCount+=1
    }
    if(crystals["12"]){
        crystalCount+=1
    }
    if(crystals["14"]){
        crystalCount+=1
    }
    if(crystals["16"]){
        crystalCount+=1
    }
    if(crystals["18"]){
        crystalCount+=1
    }
    if(crystals["23"]){
        crystalCount+=1
    }
    if(crystals["27"]){
        crystalCount+=1
    }
    if(crystals["29"]){
        crystalCount+=1
    }
    if(crystals["32"]){
        crystalCount+=1
    }
    if(crystals["38"]){
        crystalCount+=1
    }
    if(crystals["43"]){
        crystalCount+=1
    }
    if(crystals["47"]){
        crystalCount+=1
    }
    if(crystals["49"]){
        crystalCount+=1
    }
    if(crystals["52"]){
        crystalCount+=1
    }
    if(crystals["54"]){
        crystalCount+=1
    }
    if(crystals["56"]){
        crystalCount+=1
    }
    if(crystals["58"]){
        crystalCount+=1
    }
    if(crystals["35"]){
        crystalCount+=1
    }
}
function checkcrystal(){
    $(".crystal").removeClass("grayicon")
    for(var i =1;i<70;i++){
        if(crystals[i]==false){
            $("#C" + i).addClass("grayicon")
        }
    }
}

$(window).load(function(){
    changesong("01/Final-Battle.mp3")
    saving("46")

    var locationIsland="right"
    
    crystals["10"]=true;
    crystals["12"]=true;
    crystals["14"]=true;
    crystals["16"]=true;
    crystals["18"]=true;
    crystals["23"]=true;
    crystals["27"]=true;
    crystals["29"]=true;
    crystals["32"]=true;
    crystals["38"]=true;
    crystals["43"]=true;
    crystals["47"]=true;
    crystals["49"]=true;
    crystals["52"]=true;
    crystals["54"]=true;
    crystals["56"]=true;
    crystals["58"]=true;
    crystals["35"]=true;
    countCrystal()
    checkcrystal()
            
setInterval(function(){
    if(locationIsland=="right"){
        locationIsland="left";
        $(".train").animate({
            left: "+=3px"
        },1500)
        $(".areas").animate({
            left: "+=3px"
        },1500)
    } else{
        locationIsland="right";
        $(".train").animate({
            left: "-=3px"
        },1500)
        $(".areas").animate({
            left: "-=3px"
        },1500)
    }
},2000)

});