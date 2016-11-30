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

var number_of_units=9;


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
        
        $("#space23").data("move1",'22').data("move2",'24').data("move3",'13').data("move4",'33').data("left",getleft(23)).data("top",gettop(23)).data("location",23).data("fortify",false); $("#space24").data("move1",'23').data("move2",'25').data("move3",'14').data("move4",'34').data("left",getleft(24)).data("top",gettop(24)).data("location",24).data("fortify",false);
        $("#space25").data("move1",'24').data("move2",'26').data("move3",'15').data("move4",'70').data("left",getleft(25)).data("top",gettop(25)).data("location",25).data("fortify",false);
        $("#space26").data("move1",'25').data("move2",'27').data("move3",'16').data("move4",'36').data("left",getleft(26)).data("top",gettop(26)).data("location",26).data("fortify",false);
        $("#space27").data("move1",'26').data("move2",'28').data("move3",'17').data("move4",'37').data("left",getleft(27)).data("top",gettop(27)).data("location",27).data("fortify",false);
        
        $("#space28").data("move1",'27').data("move2",'29').data("move3",'18').data("move4",'38').data("left",getleft(28)).data("top",gettop(28)).data("location",28).data("fortify",false); $("#space29").data("move1",'28').data("move2",'30').data("move3",'19').data("move4",'39').data("left",getleft(29)).data("top",gettop(29)).data("location",29).data("fortify",false);
        $("#space30").data("move1",'29').data("move2",'20').data("move3",'40').data("move4",'').data("left",getleft(30)).data("top",gettop(30)).data("location",30).data("fortify",false);
        $("#space31").data("move1",'21').data("move2",'41').data("move3",'42').data("move4",'').data("left",getleft(31)).data("top",gettop(31)).data("location",31).data("fortify",false);
        $("#space32").data("move1",'31').data("move2",'33').data("move3",'22').data("move4",'42').data("left",getleft(32)).data("top",gettop(32)).data("location",32).data("fortify",false);
        
        $("#space33").data("move1",'32').data("move2",'34').data("move3",'23').data("move4",'43').data("left",getleft(33)).data("top",gettop(33)).data("location",33).data("fortify",false); $("#space34").data("move1",'33').data("move2",'70').data("move3",'24').data("move4",'44').data("left",getleft(34)).data("top",gettop(34)).data("location",34).data("fortify",false);
        $("#space35").data("move1",'69').data("move2",'60').data("move3",'').data("move4",'').data("left",getleft(35)).data("top",gettop(35)).data("location",35).data("fortify",false);
        $("#space36").data("move1",'70').data("move2",'37').data("move3",'26').data("move4",'46').data("left",getleft(36)).data("top",gettop(36)).data("location",36).data("fortify",false);
        $("#space37").data("move1",'36').data("move2",'38').data("move3",'27').data("move4",'47').data("left",getleft(37)).data("top",gettop(37)).data("location",37).data("fortify",false);
        
        $("#space38").data("move1",'37').data("move2",'39').data("move3",'28').data("move4",'48').data("left",getleft(38)).data("top",gettop(38)).data("location",38).data("fortify",false); $("#space39").data("move1",'38').data("move2",'40').data("move3",'29').data("move4",'49').data("left",getleft(39)).data("top",gettop(39)).data("location",39).data("fortify",false);
        $("#space40").data("move1",'39').data("move2",'50').data("move3",'30').data("move4",'').data("left",getleft(40)).data("top",gettop(40)).data("location",40).data("fortify",true);
        $("#space41").data("move1",'').data("move2",'31').data("move3",'51').data("move4",'42').data("left",getleft(41)).data("top",gettop(41)).data("location",41).data("fortify",true);
        $("#space42").data("move1",'41').data("move2",'43').data("move3",'32').data("move4",'52').data("left",getleft(42)).data("top",gettop(42)).data("location",42).data("fortify",false);
        
        $("#space43").data("move1",'42').data("move2",'44').data("move3",'33').data("move4",'53').data("left",getleft(43)).data("top",gettop(43)).data("location",43).data("fortify",false); $("#space44").data("move1",'43').data("move2",'45').data("move3",'34').data("move4",'54').data("left",getleft(44)).data("top",gettop(44)).data("location",44).data("fortify",false);
        $("#space45").data("move1",'44').data("move2",'46').data("move3",'70').data("move4",'55').data("left",getleft(45)).data("top",gettop(45)).data("location",45).data("fortify",false);
        $("#space46").data("move1",'45').data("move2",'47').data("move3",'36').data("move4",'56').data("left",getleft(46)).data("top",gettop(46)).data("location",46).data("fortify",false);
        $("#space47").data("move1",'46').data("move2",'48').data("move3",'37').data("move4",'57').data("left",getleft(47)).data("top",gettop(47)).data("location",47).data("fortify",false);
        
        $("#space48").data("move1",'47').data("move2",'49').data("move3",'38').data("move4",'58').data("left",getleft(48)).data("top",gettop(48)).data("location",48).data("fortify",false); $("#space49").data("move1",'48').data("move2",'50').data("move3",'39').data("move4",'59').data("left",getleft(49)).data("top",gettop(49)).data("location",49).data("fortify",false);
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
        
        $("#space63").data("move1",'62').data("move2",'64').data("move3",'53').data("move4",'').data("left",getleft(63)).data("top",gettop(63)).data("location",63).data("fortify",true); $("#space64").data("move1",'63').data("move2",'65').data("move3",'54').data("move4",'').data("left",getleft(64)).data("top",gettop(64)).data("location",14).data("fortify",false);
        $("#space65").data("move1",'64').data("move2",'66').data("move3",'55').data("move4",'').data("left",getleft(65)).data("top",gettop(65)).data("location",15).data("fortify",true);
        $("#space66").data("move1",'65').data("move2",'67').data("move3",'56').data("move4",'').data("left",getleft(66)).data("top",gettop(66)).data("location",16).data("fortify",false);
        $("#space67").data("move1",'66').data("move2",'68').data("move3",'57').data("move4",'').data("left",getleft(67)).data("top",gettop(67)).data("location",17).data("fortify",true);
        $("#space68").data("move1",'67').data("move2",'69').data("move3",'58').data("move4",'').data("left",getleft(68)).data("top",gettop(68)).data("location",16).data("fortify",false);
        $("#space69").data("move1",'68').data("move2",'35').data("move3",'59').data("move4",'').data("left",getleft(69)).data("top",gettop(69)).data("location",17).data("fortify",true);
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
                  tempname="Soldier2";
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
                if (Egroups[i].location === 2 && nomove(3) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 3
                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 3 && nomove(70) === false  && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                            thistemp = 70;
                    

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 4 && nomove(3) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                            thistemp = 3;
                        
                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 5 && nomove(4) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;

                            thistemp = 4;
                        
                    

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 6 && nomove(7) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                            thistemp = 7;

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 7 && nomove(70) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    thistemp=70;

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 9 && nomove(70) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                            thistemp = 70;
                        
                    

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 10 && nomove(9) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                            thistemp = 9;
                        
                    

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 11 && nomove(12) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;

                            thistemp = 12;
                        
                    
                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 12 && nomove(13) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                            thistemp = 13;
                

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 13 && nomove(70) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    thistemp=70

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 14 && nomove(13) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                        thistemp = 13;
                    
                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 15 && nomove(14) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                            thistemp = 14;
                        
                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                }
                if(thistemp!=""){
                    Egroups[i].curleft = $("#space" + thistemp).data("left");
                    Egroups[i].curtop = $("#space" + thistemp).data("top");
                }
                    
                        
            }
    }

    function createbadguys(){
        var firstlocation;
        for(var i =1;i<3;i++){
            
        
        //choose badguy
        var temp = Math.floor((Math.random() * 10) + 1);
        //choose starting location
        var baddielocation=Math.floor((Math.random() * 6) + 1);
            
            if(i==2){
                if(firstlocation==baddielocation){
                    continue;
                }
            }
            firstlocation=baddielocation;

        switch(baddielocation){
            case 1:
                baddielocation=1;
                break;
            case 2:
                baddielocation=6;
                break;
            case 3:
                baddielocation=11;
                break;
            case 4:
                baddielocation=5;
                break;
            case 5:
                baddielocation=10;
                break;
            case 6:
                baddielocation=15;
                break;
        }
        if (day<=10 && day>=1 && day!=8){
            switch(temp){
                case 1:
                case 2:
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Bat');
                    break;
                case 3:
                case 4:
                case 5:
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Warrior');
                    break;
                case 6:
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Fire Elemental');
                    break;
                case 7:
                    Eunits[newEindex()]=new IceElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new IceElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Ice Elemental');
                    break;
                case 8:
                    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Clunker');
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
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Gremlin');
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
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Bat');
                    break;
                case 3:
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new LightningElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Fire Elemental');
                    break;
                case 4:
                    Eunits[newEindex()]=new LightningElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Sounddepressor(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new LightningElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Lightning Elemental');
                    break;
                case 5:
                    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Clunker');
                    break;
                case 6:
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Warrior');
                    break;
                case 7:
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Flamewraith(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,800,'flamewraith');
                    break;
                case 8:
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Gremlin');
                    break;
                case 9:
                    Eunits[newEindex()]=new Djinn(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Djinn');
                    break;
                case 10:
                    Eunits[newEindex()]=new Wisp(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Frostlord(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Wisp(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,900,'frostlord');
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
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,200,'Spitter');
                    break;
                case 4:
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new LightningElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new IceElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,300,'Lightning Elemental');
                    break;
                case 5:
                    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Cannon(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Cannon');
                    break;
                case 6:
                    Eunits[newEindex()]=new Flamewraith(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Flamewraith(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'flamewraith');
                    break;
                case 7:
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Demon(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Demon');
                    break;
                case 8:
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Angel(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Angel');
                    break;
                case 9:
                    Eunits[newEindex()]=new Golem(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Shaman(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Shaman');
                    break;
                case 10:
                    Eunits[newEindex()]=new Zombie(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Necromancer(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Zombie(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Necromancer');
                    break;
            }
        }
        }
        if(day==8){
                               Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bat(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,1,400,'Bat');

                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,6,300,'Warrior');

                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,11,300,'Fire Elemental');

                    Eunits[newEindex()]=new IceElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new IceElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,5,300,'Ice Elemental');

                    Eunits[newEindex()]=new Magnet(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Sounddepressor(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,10,500,'Magnet');

                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,15,300,'Gremlin');
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


function indiv_newday(){
           $('.heading').remove();
        $('#top').html("<h1 class = 'heading'>Turn: " + day + "/35</h1>");
    if(day==10){
        castle("with")
        setTimeout(function(){
            windowthrough()
        },3000)
        
    }
    if(day>=35){
        winbattle("../45/aftertemple.html")
    }
}
function indiv_gotocapitol(){
      $("#TEXT").empty().append('<div class="gotobutton" id = "gotobarracks"><p>BARRACKS</p></div><div class="gotobutton" id = "gotobrewery"><p>BREWERY</p></div>');
}


function levelresearch(){
    
}
function enemyconquer(){
    
}

function windowthrough(){
  $("body").append("<div style='background-color:lightblue; ' id = 'cinemabackground'><img style='width:100%;height:100%' src ='pics/window.png' /></div>")
  setTimeout(function(){
      break_window.play()
      $("#cinemabackground").append("<div style='height:200px;width:200px;z-index:2;position:absolute;margin-top:-480px;margin-left:300px'><img style='height:300px;width:200px' src='pics/broken.gif' /></div>")
      $("#cinemabackground").append("<div id='cineKnight' style='height:200px;width:200px;z-index:2;position:absolute;margin-top:-430px;margin-left:320px'><img style='height:150px;' src='../CinePics/characters/Knight/Knight_front.gif' /></div>")
        $("#cinemabackground").append("<div id='cineGuard' style='height:200px;width:200px;z-index:2;position:absolute;margin-top:-430px;margin-left:320px'><img style='height:150px;' src='../CinePics/characters/Guard/Guard_front.gif' /></div>")
        $("#cinemabackground").append("<div id='cineThief' style='height:200px;width:200px;z-index:2;position:absolute;margin-top:-430px;margin-left:320px'><img style='height:150px;' src='../CinePics/characters/Thief1/Thief1_front.gif' /></div>")
      
      $("#cineKnight").animate({
          top:"+=300px",
          left:"-=300px"
      },1000)
      
              $("#cineGuard").animate({
          top:"+=300px",
      },1000)

  
        $("#cineThief").animate({
          top:"+=300px",
          left:"+=300px"
      },1000)
        
        setTimeout(function(){
              $("#cinemabackground").append("<div id='cineEnchantress' style='height:200px;width:200px;z-index:2;position:absolute;margin-top:-430px;margin-left:320px'><img style='height:150px;' src='../CinePics/characters/Enchantress/Enchantress_front.gif' /></div>")
                $("#cinemabackground").append("<div id='cineMimic' style='height:200px;width:200px;z-index:2;position:absolute;margin-top:-430px;margin-left:320px'><img style='height:150px;' src='../CinePics/characters/Mimic/Mimic_front.gif' /></div>")
                $("#cinemabackground").append("<div id='cineArcher' style='height:200px;width:200px;z-index:2;position:absolute;margin-top:-430px;margin-left:320px'><img style='height:150px;' src='../CinePics/characters/Archer2/Archer2_front.gif' /></div>")
                
                $("#cineEnchantress").animate({
                  top:"+=100px",
                  left:"-=100px"
              },1000)

                      $("#cineMimic").animate({
                  top:"+=100px",
              },1000)


                $("#cineArcher").animate({
                  top:"+=100px",
                  left:"+=100px"
              },1000)
                
                setTimeout(function(){
                    $("#cinemabackground").remove()
                },1000)
      
            },1000)
                units[index]= new Knight(index,"Knight");
            units[index]= new Guard(index,"Guard");
            units[index]= new Thief(index,"Thief1");

                units[index]= new Enchantress(index,"Enchantress");
            units[index]= new Mimic(index,"Mimic");
            units[index]= new Archer(index,"Archer2");
  },1000)
  
$("#background").append('    <div class="areas" style =" LEFT:270px ; top:75px"><img style="height:70px; width:50px" src ="pics/broken.gif" /></div>')

}
function castle(withairship){
    endthis=false;
  $("body").append("<div style='background-color:lightblue;margin-top:-640px;margin-left:50px' id = 'quickscene'>" +
                 "<img src = 'pics/castle.png' /><div class='trees' STYLE='position:absolute; TOP:570px; LEFT:-220px;' ><img style='height:80px' src='pics/wall-enemy.gif'/></div></div>")
          $('.trees').animate({
                        left: "+1080px"
                    }, 3000,"linear"); 
    $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:-140px;" ><img style="height:80px" src="./pics/wall-enemy.gif"/></div>');
      $('.trees').animate({
                        left: "+1160px"
                    }, 3000,"linear"); 
        $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:-60px;" ><img style="height:80px" src="pics/wall-enemy.gif"/></div>');
      $('.trees').animate({
                        left: "+1220px"
                    }, 3000,"linear"); 
            $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:20px;" ><img style="height:80px" src="pics/wall-enemy.gif"/></div>');
      $('.trees').animate({
                        left: "+1300px"
                    }, 3000,"linear"); 
                $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:100px;" ><img style="height:80px" src="pics/wall-enemy.gif"/></div>');
      $('.trees').animate({
                        left: "+1380px"
                    }, 3000,"linear"); 
        $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:180px;" ><img style="height:80px" src="pics/wall-enemy.gif"/></div>');
      $('.trees').animate({
                        left: "+1460px"
                    }, 3000,"linear"); 
        $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:260px;" ><img style="height:80px" src="pics/wall-enemy.gif"/></div>');
      $('.trees').animate({
                        left: "+1520px"
                    }, 3000,"linear"); 
        $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:340px;" ><img style="height:80px" src="pics/wall-enemy.gif"/></div>');
      $('.trees').animate({
                        left: "+1600px"
                    }, 3000,"linear"); 
           $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:400px;" ><img style="height:80px" src="pics/wall-enemy.gif"/></div>');
      $('.trees').animate({
                        left: "+1680px"
                    }, 3000,"linear"); 
           $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:460px;" ><img style="height:80px" src="pics/wall-enemy.gif"/></div>');
      $('.trees').animate({
                        left: "+1760px"
                    }, 3000,"linear"); 
               $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:540px;" ><img style="height:80px" src="pics/wall-enemy.gif"/></div>');
      $('.trees').animate({
                        left: "+1840px"
                    }, 3000,"linear"); 
         
    setInterval(function(){
        if(endthis){
            return;
        }
         $("#quickscene").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:-300px;" ><img style="height:80px" src="pics/wall-enemy.gif"/></div>');
            $('.trees').animate({
                        left: "+1000px"
                    }, 3000,"linear"); 
    },500)
  setTimeout(function(){
      $("#quickscene").remove();
      endthis=true;
  },3000)
  
  if(withairship=="with"){
            $("#quickscene").append('<div id="airship" STYLE="position:absolute; TOP:-320px; LEFT:300px; width:300px" ><img style="width:150px" src="../CinePics/airship.gif"/></div>')
            $("#airship").animate({
                top:"+=400px"
            },3000,"linear")

  }
}

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

$(window).load(function(){
    changesong("01/Final-Battle.mp3")
        containaccessories();
    var locationIsland="right"
            
setInterval(function(){
    if(locationIsland=="right"){
        locationIsland="left";
        $(".train").animate({
            left: "+=3px"
        },1500)
    } else{
        locationIsland="right";
        $(".train").animate({
            left: "-=3px"
        },1500)
    }
},2000)

});