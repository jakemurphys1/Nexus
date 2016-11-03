$(window).load(function(){
    //Start window
    var difflevel=1;
$("#Easy").click(function(){
   difflevel=1;
});
    $("#Normal").click(function(){
        difflevel=2;
    });
    $("#Hard").click(function(){
        difflevel=3;
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


//varibles
    { $('.actions').append("<div class = 'actionbutton' id='Pass'><p>Pass</p></div>");
    var day= 0, money= 100, mana= 0;

    var spot1="", spot2="", spot3="";
    var battleon=false;
    var curgroupnum="";

        var ironsword=false;
        var steelsword=false;
        var titaniumsword=false;
        var ironshield=false;
        var steelshield=false;
        var titaniumshield=false;
        var ironarmor=false;
        var steelarmor=false;
        var titaniumarmor=false;
        var hunterbow=false;
        var longbow=false;
        var masterbow=false;
        var emeraldwand=false;
        var rubywand=false;
        var diamondwand=false;
    var ironswordnum=0;
    var steelswordnum=0;
    var titaniumswordnum=0;
    var ironshieldnum=0;
    var steelshieldnum=0;
    var titaniumshieldnum=0;
    var ironarmornum=0;
    var steelarmornum=0;
    var titaniumarmornum=0;
    var hunterbownum=0;
    var longbownum=0;
    var masterbownum=0;
    var emeraldwandnum=0;
    var rubywandnum=0;
    var diamondwandnum=0;


    var redtowns=5;
    var greentowns=5;
    var bluetowns=5;
    var yellowtowns=5;
    var redkingdom=true;
    var greenkingdom=true;
    var bluekingdom=true;
    var yellowkingdom=true;
    var allynum=0;
    var fortification=0;

    var alchemy = false;
        var alchemy2 = false;
    var summoning=false;

        var angel=false;
        var demon=false;
        var djinn=false;
        var frostlord=false;
    var angelrest=0;
    var demonrest=0;
    var djinnrest=0;
    var frostlordrest=0;

        var Hire=0;

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


        var Hirelevelup=0;
var Enchantlevelup=0;
        var curresearch="Weapon_LevelupIron";

        //create pass turn stuff//////////////////////////////////////////////////////////////////////////
        var curindex="";
        var accessory = new Array
        var Egroups=new Array();
        var groups=new Array();
        var tipmessagearray=new Array;
        var Egroupindex=1;
        var Ironweaponlevelup=0;
        var Steelweaponlevelup=0;
        var Titaniumweaponlevelup=0;
        var Ironarmorlevelup=0;
        var Steelarmorlevelup=0;
        var Titaniumarmorlevelup=0;
        var Alchemistlevelup=0;
        var Alchemist2levelup=0;
        var Summonlevelup=0;
        var researchers=1;
        var sorcerermana=100;
        var sorcererincrease=1;

        var loadedgame=false;
    }

    //sounds
    {
        var Fire = new Audio();
        Fire.src = "sounds/Fire.wav";
        Fire.volume=.3;
        var Lightning = new Audio();
        Lightning.src = "sounds/Lightning.wav";
        Lightning.volume=.2;
        var Heal = new Audio();
        Heal.src = "sounds/Heal.wav";
        Heal.volume=.3;
        var Sword = new Audio();
        Sword.src = "sounds/Sword.wav";
        Sword.volume=.3;
        var Arrow = new Audio();
        Arrow.src = "sounds/Arrow.wav";
        Arrow.volume=.3;
        var Disrupt = new Audio();
        Disrupt.src = "sounds/Disrupt.mp3";
        Disrupt.volume=.3;
        var Paralyzesound = new Audio();
        Paralyzesound.src = "sounds/Paralyze.mp3";
        Paralyzesound.volume=.3;
        var Specialsound = new Audio();
        Specialsound.src = "sounds/Special.mp3";
        Specialsound.volume=.3;
        var Win = new Audio();
        Win.src = "sounds/Win.mp3";
        Win.volume=.3;
        var Turnsound = new Audio();
        Turnsound.src = "sounds/Turn.mp3";
        Turnsound.volume=.3;
        var Chargesound = new Audio();
        Chargesound.src = "sounds/Charge.mp3";
Chargesound.volume=.1;
        var Absorb = new Audio();
        Absorb.src = "sounds/absorb.wav";
        Absorb.volume=.3;
        var Capture = new Audio();
        Capture.src = "sounds/capture.wav";
        Capture.volume=.3;
        var Cleanse = new Audio();
        Cleanse.src = "sounds/Cleanse.wav";
        Cleanse.volume=.3;
        var Death = new Audio();
        Death.src = "sounds/Death.wav";
        Death.volume=.3;
        var Dogbite = new Audio();
        Dogbite.src = "sounds/dogbite.wav";
        Dogbite.volume=.3;
        var Disrupt = new Audio();
        Disrupt.src = "sounds/Disrupt.mp3";
        Disrupt.volume=.3;
        var Flyby = new Audio();
        Flyby.src = "sounds/flyby.wav";
        Flyby.volume=.3;
        var Gust = new Audio();
        Gust.src = "sounds/Gust.wav";
        Gust.volume=.3;
        var Hook = new Audio();
        Hook.src = "sounds/Hook.wav";
        Hook.volume=.3;
        var Hurricane = new Audio();
        Hurricane.src = "sounds/Hurricane.wav";
        Hurricane.volume=.3;
        var Water = new Audio();
        Water.src = "sounds/Water.mp3";
        Water.volume=.3;
        var Icescream = new Audio();
        Icescream.src = "sounds/Icescream.wav";
        Icescream.volume=.3;
        var Protect = new Audio();
        Protect.src = "sounds/protect.wav";
        Protect.volume=.3;
        var Tar = new Audio();
        Tar.src = "sounds/Tar.wav";
        Tar.volume=.3;
        var Teleport = new Audio();
        Teleport.src = "sounds/teleport.wav";
        Teleport.volume=.3;
        var vigor = new Audio();
        vigor.src = "sounds/vigor.wav";
        vigor.volume=.3;
        var Zap = new Audio();
        Zap.src = "sounds/zap.wav";
        Zap.volume=.3;
        var Iceattack = new Audio();
        Iceattack.src = "sounds/Iceattack.wav";
        Iceattack.volume=.3;
        var Spit = new Audio();
        Spit.src = "sounds/Spit.wav";
        Spit.volume=.3;
        var Vampirebite = new Audio();
        Vampirebite.src = "sounds/Vampire.wav";
        Vampirebite.volume=.3;
        var curmusic = new Audio();
        curmusic.src = "sounds/music-start.mp3";
        curmusic.volume=.02;
        var curmapmusic = new Audio();
        curmapmusic.src = "sounds/music-tutorial.mp3";
        curmapmusic.volume=.02;
        var curbattlemusic = new Audio();
        curbattlemusic.src = "sounds/music-main game.mp3";
        curbattlemusic.volume=.03;
        //music

          curmapmusic.loop=true;
           curmapmusic.play();

        newday();
        //disable rightclick window
        document.oncontextmenu = function () {
            return false;
        };
    }



    function tipmessage(index, e){
        if(tipmessagearray[index]===true || loadedgame===true){
            return;
        }
        tipmessagearray[index]=true;
        $("#top").append("<div class='tipmessage' style='word-wrap:break-word; position: absolute; border: gold solid 5px; z-index:1; margin-left:100px; width:350px; height: 140px; background-color:gray'></div>");
        $(".tipmessage").append("<p align='center' style='font-size: 15px; margin-left:5px; margin-right:5px; margin-top:0px'>" + e + "</p>");
        setInterval(function(){
            $(".tipmessage").addClass("removewindow");
        },100)
    }
    $("body").click(function(){
        $(".removewindow").remove();
    });
    function message(e){
        $("#top").append("<div class='tipmessage' style='word-wrap:break-word; position: absolute; border: orange solid 5px; z-index:1;margin-top:300px; margin-left:100px; width:350px; height: 130px; background-color:gray'></div>");
        $(".tipmessage").append("<p align='center' style='font-size: 15px; margin-left:5px; margin-right:5px; margin-top:0px'>" + e + "</p>");
        setInterval(function(){
            $(".tipmessage").addClass("removewindow");
        },100);
    }


    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;

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
        loadedgame=true;
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

            if(units[i].realtype==="Soldier"){
                units[i].abilitymedkit = JSON.parse(temp[27]);
                units[i].abilitydash = JSON.parse(temp[28]);
                units[i].abilityimmunity = JSON.parse(temp[29]);
                units[i].abilitycounter = JSON.parse(temp[30]);
                units[i].abilitysteadfast = JSON.parse(temp[31]);
                units[i].medkit = JSON.parse(temp[32]);
            }
            if(units[i].realtype==="Knight"){
                units[i].abilitysweep = JSON.parse(temp[27]);
                units[i].abilityswirl = JSON.parse(temp[28]);
                units[i].abilitypiercer = JSON.parse(temp[29]);
                units[i].abilityreact = JSON.parse(temp[30]);
                units[i].abilityfreemove = JSON.parse(temp[31]);
            }
            if(units[i].realtype==="Thief" || units[i].type==="Invisible"){
                units[i].abilitybackstab = JSON.parse(temp[27]);
                units[i].abilityinvisible = JSON.parse(temp[28]);
                units[i].abilitydodge = JSON.parse(temp[29]);
                units[i].abilityfirstblow = JSON.parse(temp[30]);
                units[i].abilitybettersteal = JSON.parse(temp[31]);
                units[i].abilitymug=true;
            }
            if(units[i].realtype==="Mage"){
                units[i].abilityelementalailments = JSON.parse(temp[27]);
                units[i].abilityzap = JSON.parse(temp[28]);
                units[i].abilityfreeze = JSON.parse(temp[29]);
                units[i].abilitydoubletap = JSON.parse(temp[30]);
                units[i].abilitypain = JSON.parse(temp[31]);
            }
            if(units[i].realtype==="Wizard"){
                units[i].abilitybolt = JSON.parse(temp[27]);
                units[i].abilitymissile = JSON.parse(temp[28]);
                units[i].abilitystartcharge = JSON.parse(temp[29]);
                units[i].abilitydrain = JSON.parse(temp[30]);
                units[i].abilityelementalailments = JSON.parse(temp[31]);
                units[i].charge = 0;

            }
            if(units[i].realtype==="Sorcerer"){
                units[i].abilityfireblast = JSON.parse(temp[27]);
                units[i].abilitylightning = JSON.parse(temp[28]);
                units[i].abilitymanaincrease = JSON.parse(temp[29]);
                units[i].abilityslumber = JSON.parse(temp[30]);
                units[i].abilitydeath = JSON.parse(temp[31]);
            }
            if(units[i].realtype==="Archer"){
                units[i].abilityexplosion = JSON.parse(temp[27]);
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
            if(units[i].realtype==="Rouge"){
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
            if(units[i].realtype==="Templar"){
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
            if(units[i].realtype==="Enchantress"){
                units[i].abilitystorm = JSON.parse(temp[27]);
                units[i].abilityreplenish = JSON.parse(temp[28]);
                units[i].abilitytransform = JSON.parse(temp[29]);
                units[i].abilitytorment = JSON.parse(temp[30]);
                units[i].abilitybestow =JSON.parse(temp[31]);
                units[i].mana = parseInt(temp[32]);
            }
            if(units[i].realtype==="Healer"){
                units[i].abilityreach = JSON.parse(temp[27]);
                units[i].abilityheal = JSON.parse(temp[28]);
                units[i].abilitymove =JSON.parse( temp[29]);
                units[i].abilitycleanse = JSON.parse(temp[30]);
                units[i].abilitydoublevigor = JSON.parse(temp[31]);
                units[i].power =parseInt(temp[32]);
            }
            if(units[i].realtype==="Guard"){
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
                }
                if(Eunits[i].type==="Assassin"){
                    Eunits[i].description = "These long range fighters can hit any target, and, with their poisons, can sometimes put their targets to sleep.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/Assassin.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/Assassin.gif';
                }
                if(Eunits[i].type==="Bear"){
                    Eunits[i].description = "These creatures love to attack the eyes and cause blindness.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/bear.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/bear.gif';
                }
                if(Eunits[i].type==="Beekeeper"){
                    Eunits[i].description = "This master of insects will fling an endless supply of bees at you.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/Beekeeper.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/Beekeeper.gif';
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
                }
                if(Eunits[i].type==="Djinn"){
                    Eunits[i].description = "Tough to kill, this rare creature can give and take equally well. Defeat to get it's soul to summon.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/Djinn.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/Djinn.gif';
                }
                if(Eunits[i].type==="Dragon"){
                    Eunits[i].description ="Something is coming...";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/Dragon.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/Dragon.gif';
                }
                if(Eunits[i].type==="Fire Elemental"){
                    Eunits[i].description = "While the weakest of the elementals, these fiery beasts can shoot flames two spaces away for only one charge.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/Fire Elemental.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/Fire Elemental.gif';
                }
                if(Eunits[i].type==="Flamewraith"){
                    Eunits[i].description = "Wraiths can phase out and then become invincible. Use an elemental attack to phase them back in, and if its ice, it will do damage.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/flamewraith.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/flamewraith.gif';
                }

                if(Eunits[i].type==="Frostlord"){
                    Eunits[i].description = "While weak in the close range, this rare creature can create a dangerous snow storm. Defeat to get it's soul to summon.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/Frostlord.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/Frostlord.gif';
                }
                if(Eunits[i].type==="Frostwraith"){
                    Eunits[i].description = "Wraiths can phase out and then become invincible. Use an elemental attack to phase them back in, and if its fire, it will do damage.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/frostwraith.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/frostwraith.gif';
                }
                if(Eunits[i].type==="Golem"){
                    Eunits[i].description = "Touch as rocks, kill the shaman, or this rocky creature is will keep coming back.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/golem.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/golem.gif';
                }
                if(Eunits[i].type==="Gremlin"){
                    Eunits[i].description = "While weak alone, these devious creatures can swarm in high numbers.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/Gremlin.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/Gremlin.gif';
                }
                if(Eunits[i].type==="Hand"){
                    Eunits[i].description = "Something is coming...";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/Hand.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/Hand.gif';
                }

                if(Eunits[i].type==="Ice Elemental"){
                    Eunits[i].description = "More powerful, yet slower than the flame elemental, these chilly creatures can do ice damage two spaces away for 2 charge.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/Ice Elemental.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/Ice Elemental.gif';
                }
                if(Eunits[i].type==="Lightning Elemental"){
                    Eunits[i].description = "Most powerful of the elementals, they can shoot a bolt anywhere for a high cost of 3 charge.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/Lightning Elemental.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/Lightning Elemental.gif';
                }
                if(Eunits[i].type==="Necromancer"){
                    Eunits[i].description = "This master of death will raise the dead and chuck them at you.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/Necromancer.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/Necromancer.gif';
                }
                if(Eunits[i].type==="Shaman"){
                    Eunits[i].description = "This master of earth will send it's rocky friend to smash you.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/Shaman.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/Shaman.gif';
                }
                if(Eunits[i].type==="Sparrow"){
                    Eunits[i].description = "These pesky creatures can soar instantly to any ally.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/Sparrow.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/Sparrow.gif';
                }

                if(Eunits[i].type==="Spider"){
                    Eunits[i].description = "While unable to do damage, they can poison and drag units to them with their web.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/spider.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/spider.gif';
                }
                if(Eunits[i].type==="Spitter"){
                    Eunits[i].description = "These long range fighters can hit any target in a straight line, and can immobilize with it's sticky attack.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/Spitter.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/Spitter.gif';
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
                }
                if(Eunits[i].type==="Warrior"){
                    Eunits[i].description = "Masters of the close combat, these warriors can do double damage if they don't have to move first. Vunerable to Magic.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/warrior.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/warrior.gif';
                }

                if(Eunits[i].type==="Waterwraith"){
                    Eunits[i].description = "Wraiths can phase out and then become invincible. Use an elemental attack to phase them back in, and if its Lightning, it will do damage.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/waterwraith.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/waterwraith.gif';
                }
                if(Eunits[i].type==="Werewolf"){
                    Eunits[i].description = "These savage beasts have high resistance to magic, and can heal everyturn.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/werewolf.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/werewolf.gif';
                }
                if(Eunits[i].type==="Wisp"){
                    Eunits[i].description = "These flittery creatures are hard to catch. They can use icy magic which can put units to sleep.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/Wisp.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/Wisp.gif';
                }
                if(Eunits[i].type==="Wolf"){
                    Eunits[i].description = "These pack creatures are intelligent and fierce.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/wolf.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/wolf.gif';
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
                }
                if(Eunits[i].type==="Magnet"){
                    Eunits[i].description = "These machines redirect and catch all arrows.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/Magnet.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/Magnet.gif';
                }
                if(Eunits[i].type==="Sounddepressor"){
                    Eunits[i].description = "These machines prevent the use of all magic.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/Sounddepressor.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/Sounddepressor.gif';
                }
                if(Eunits[i].type==="Cannon"){
                    Eunits[i].description = "These machines charge every turn, and if an ally moves into it's line of sight, it will fire. It will overload at 5 charge!";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/Cannon.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/Cannon.gif';
                }
                if(Eunits[i].type==="Hellhound"){
                    Eunits[i].description = "These fast beasts will explode when it comes into contact with one of your units.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='Pictures/Enemies/hellhound.gif'/></div>";
                    Eunits[i].image='Pictures/Enemies/hellhound.gif';
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


    //enemies
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
    };


//set filled varibles
for(var i = 1;i<71;i++){
    $("#space" + i).data('filled',0)
}
$(".actions").empty();

    function showwall(){
        $(".wall").remove();

        for(var i =1;i<70;i++){
            if($('#space' + i).data("fortify")===true){
                $('#space' + i).append("<img class='wall' style='margin-top:-40px' src='Pictures/Wall.gif' />");
            }
        }



    }

//clicking buttons on map///////////////////////////////////////////
    $("#space70").click(function(){
        tipmessage("capitol","This is your capitol. You should go to the research center to begin researching new tools. Then go to the barracks to create your groups.");
        gotocapitol();
    });
    function gotocapitol(){
        $("#TEXT").empty();
        $("#TEXT").append('<div class="gotobutton" id = "gotobarracks"><p>BARRACKS</p></div>');
        $("#TEXT").append('<div class="gotobutton" id = "gotoshop"><p>SHOP</p></div>');
        $("#TEXT").append('<div class="gotobutton" id = "gotoresearchcenter"><p>RESEARCH</p></div>');
        if(alchemy===true){
            $("#TEXT").append('<div class="gotobutton" id = "gotobrewery"><p>BREWERY</p></div>');
        }

        $("#gotobarracks").click(function(){
            gotobarracks();
        });
        $("#gotoshop").click(function(){
            gotoshop()
        });
        $("#gotoresearchcenter").click(function(){
            gotoresearchcenter();
        });
        $("#gotobrewery").click(function(){
            gotobrewery();
        });
    }

    function presspass(){
        //Get information on locations
        $("#Pass").click(function(){

                $("#TEXT").empty();
            $(".actions").empty();
            $(".actions").append("<div class = 'actionbutton' id='Pass'><p>Pass</p></div>");
            presspass();
          setTimeout(function(){levelresearch()},300);
            movebadguys();
            setTimeout( function(){createbadguys()},100);
            setTimeout(function(){newday()},400);
            setTimeout(function(){startcombat()},500);
            setTimeout(function(){enemyconquer()},530);
        });
        $("#Hospital").click(function(){
            hospitalclick();
            function hospitalclick(){
                $("#TEXT").empty();
                $("#TEXT").append("<p>Select unit to send to hospital</p>");
                tipmessage("Healing","Select a unit on the right to send to the hospital for 3 days.");
                for(var i=0;i<index;i++){
                    if (units[i].group === curgroupnum){
                        $("#TEXT").append(units[i].picture);
                        $('#' + i).append('<div class="healthbar" id = "HB' + i + '" style="position: relative; margin-top:90%; width: ' + (units[i].health/units[i].maxhealth)*100 + '%"></div><div class="level"><p>' + units[i].level + '</p></div>');
                    }
                }
                $(".barrackpic").click(function(){
                    var thisindex=$(this).attr("id");
                    var thisgroup=units[thisindex].group;
                    units[thisindex].health=units[thisindex].maxhealth;
                    units[thisindex].group=0;
                    units[thisindex].healing=3;
                    if(units[thisindex].type==="Healer"){
                        units[thisindex].power=50;
                        if(units[thisindex].abilitydoubleenergy===true){
                            units[thisindex].power=100;
                        }
                    }
                    if(units[thisindex].type==="Soldier"){
                        if(units[thisindex].abilitymedkit===true){
                            units[thisindex].medkit=true
                        }
                    }
                    var temp2=0;
                    for(var o = 0;o<index;o++){
                        if(units[o].group===thisgroup){
                            temp2+=1;
                        }
                    }
                    if(temp2===0){
                        $("#M" + thisgroup).remove();
                        $("#space" + groups[thisgroup].location).data("filled",0);
                        groups[thisgroup].location=-1;
                        $("#TEXT").empty();
                    } else{
                        hospitalclick();
                    }


                });
            }


        });
        $("#Armory").click(function(){
        gotoarmory();
        });
        $("#Explore").click(function(){
            Explore();
        });
        $("#Return").click(function(){
            for(var i =0;i<index;i++){
                if(units[i].group===curgroupnum){
                    $("#TEXT").empty();
                    units[i].group=0;
                    $("#space70").data('filled',0);
                }
                $("#M" + curgroupnum).remove();
                groups[curgroupnum].location=-1;
            }
        })
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
                if (Egroups[i].location === 2 & nomove(6) === false & nomove(5) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 6;
                    } else {
                        thistemp = 5
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
                if (Egroups[i].location === 5 & nomove(10) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 10;
                    } else {
                        thistemp = 10
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 6 & nomove(7) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 7;
                    } else {
                        thistemp = 7
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 7 & nomove(8) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 8;
                    } else {
                        thistemp = 8
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 8 & nomove(9) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 9;
                    } else {
                        thistemp = 9
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 9 & nomove(12) === false & nomove(13) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 13;
                    } else {
                        thistemp = 13
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 10 & nomove(9) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 9;
                    } else {
                        thistemp = 9
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 11 & nomove(4) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    thistemp = 4;
                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 12 & nomove(9) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 9;
                    } else {
                        thistemp = 9
                    }
                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 13 & nomove(14) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 14;
                    } else {
                        thistemp = 14
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 14 & nomove(18) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 18;
                    } else {
                        thistemp = 18
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 15 & nomove(16) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 16;
                    } else {
                        thistemp = 16
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 16 & nomove(17) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 17;
                    } else {
                        thistemp = 17
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 17 & nomove(14) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 14;
                    } else {
                        thistemp = 14
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 18 & nomove(20) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 20;
                    } else {
                        thistemp = 20
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 19 & nomove(13) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 13;
                    } else {
                        thistemp = 13
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 20 & nomove(70) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 70;
                    } else {
                        thistemp = 70
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 21 & nomove(19) === false & nomove(27) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 19;
                    } else {
                        thistemp = 27
                    }
                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 22 & nomove(21) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 21;
                    } else {
                        thistemp = 21
                    }
                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 23 & nomove(22) === false & nomove(25) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 22;
                    } else {
                        thistemp = 25
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 24 & nomove(23) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 23;
                    } else {
                        thistemp = 23
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 25 & nomove(26) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 26;
                    } else {
                        thistemp = 26
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 26 & nomove(27) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 27;
                    } else {
                        thistemp = 27
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 27 & nomove(39) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 39;
                    } else {
                        thistemp = 39
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 28 & nomove(27) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 27;
                    } else {
                        thistemp = 27
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 29 & nomove(26) === false & nomove(36) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 26;
                    } else {
                        thistemp = 26
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 30 & nomove(29) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 29;
                    } else {
                        thistemp = 29
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 31 & nomove(30) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    thistemp = 30;
                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 32 & nomove(30) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 30;
                    } else {
                        thistemp = 30
                    }
                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 33 & nomove(32) === false & nomove(35) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 32;
                    } else {
                        thistemp = 35
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 34 & nomove(33) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 33;
                    } else {
                        thistemp = 33
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 35 & nomove(36) === false & nomove(37) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 36;
                    } else {
                        thistemp = 37
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 36 & nomove(29) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 29;
                    } else {
                        thistemp = 29
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 37 & nomove(28) === false & nomove(38) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 28;
                    } else {
                        thistemp = 38
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 38 & nomove(42) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 42;
                    } else {
                        thistemp = 42
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 39 & nomove(20) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 20;
                    } else {
                        thistemp = 20
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 40 & nomove(41) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 41;
                    } else {
                        thistemp = 41
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 41 & nomove(42) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    thistemp = 42;
                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 42 & nomove(43) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 43;
                    } else {
                        thistemp = 43
                    }
                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 43 & nomove(20) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 20;
                    } else {
                        thistemp = 20
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 44 & nomove(40) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 40;
                    } else {
                        thistemp = 40
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 45 & nomove(44) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 44;
                    } else {
                        thistemp = 44
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 46 & nomove(47) === false & nomove(44) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 47;
                    } else {
                        thistemp = 44
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 47 & nomove(41) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 41;
                    } else {
                        thistemp = 41
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 48 & nomove(46) === false & nomove(45) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 46;
                    } else {
                        thistemp = 45
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 49 & nomove(48) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 48;
                    } else {
                        thistemp = 48
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 50 & nomove(51) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 51;
                    } else {
                        thistemp = 51
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 51 & nomove(52) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 52;
                    } else {
                        thistemp = 52
                    }
                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 52 & nomove(53) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 53;
                    } else {
                        thistemp = 53
                    }
                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 53 & nomove(42) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 42;
                    } else {
                        thistemp = 42
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 54 & nomove(52) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 52;
                    } else {
                        thistemp = 52
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 55 & nomove(54) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 54;
                    } else {
                        thistemp = 54
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 56 & nomove(43) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 43;
                    } else {
                        thistemp = 43
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 57 & nomove(56) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 56;
                    } else {
                        thistemp = 56
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 58 & nomove(56) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 56;
                    } else {
                        thistemp = 56
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 59 & nomove(18) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 18;
                    } else {
                        thistemp = 18
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 60 & nomove(58) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 58;
                    } else {
                        thistemp = 58
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 61 & nomove(60) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 60;
                    } else {
                        thistemp = 60
                    }
                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 62 & nomove(61) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 61;
                    } else {
                        thistemp = 61
                    }
                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 63 & nomove(64) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 64;
                    } else {
                        thistemp = 64
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 64 & nomove(65) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 65;
                    } else {
                        thistemp = 65
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 65 & nomove(66) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 66;
                    } else {
                        thistemp = 66
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 66 & nomove(58) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 58;
                    } else {
                        thistemp = 58
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 67 & nomove(65) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 65;
                    } else {
                        thistemp = 65
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 68 & nomove(67) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 67;
                    } else {
                        thistemp = 67
                    }

                    Egroups[i].location = thistemp;
                    $('#EM' + i).animate({
                        left: $("#space" + thistemp).data("left") + 'px',
                        top: $("#space" + thistemp).data("top") + 'px'
                    });
                }
                if (Egroups[i].location === 69 & nomove(68) === false && Egroups[i].hasmoved === false) {
                    Egroups[i].hasmoved = true;
                    if (direction === 1) {
                        thistemp = 68;
                    } else {
                        thistemp = 68
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
    function newday(){
        day+=1;

        sorcerermana+=5 * sorcererincrease;
        if(demonrest>0){
            demonrest-=1;
        }
        if(angelrest>0){
            angelrest-=1;
        }
        if(djinnrest>0){
            djinnrest-=1;
        }
        if(frostlordrest>0){
            frostlordrest-=1;
        }
        if(sorcerermana>100){
            sorcerermana=100;
        }
var invertdiff = 0;
        switch(difflevel){
            case 1:
                invertdiff = 2;
                break;
            case 2:
                invertdiff=1;
                break;
        }


        if (day===5 || day===15 || day===25 || day===35 || day===45 || day===55 || day===65 || day===75 || day===85 || day===95){

            money+=((30 + 10*invertdiff)*allynum);
            message("You received " + ((30 + 10*invertdiff)*allynum) + " gold from " + allynum + " allies.")
        }
        if (day===10 || day===20 || day===30 || day===40 || day===50 || day===60 || day===70 || day===80 || day===90 || day===100){
            money+=((30 + 10*invertdiff)*allynum);
            researchers+=1;
            message("You received " + ((30 + 10*invertdiff)*allynum) + " gold from " + allynum + " allies. One researcher joined you.")
        }

        $('.heading').remove();
        $('#top').append("<h1 class = 'heading'>Day: " + day + "</h1>");
        $('#top').append("<h1 class = 'heading'>Money: " + money + "</h1>");
        $('#top').append("<h1 class = 'heading'>Research: " + currentresearch() + "</h1>");


        for (var i=1;i<groupindex;i++){
            groups[i].hasmoved=false;
        }
        for (var i=1;i<Egroupindex;i++){
            Egroups[i].hasmoved=false;
            //Lose entire game
            if(Egroups[i].location===70){
                $(".areas").remove();
                $('#Pass').remove();
                $(".icon").remove();
                $(".Eicon").remove();
                $("#background").append("<div style='position: absolute; background-color:gray; width:150px; height:30px; margin-top:-200px; margin-left:200px'><p style='font-size:20px; margin-left:20px'>YOU LOSE</p></div>")
            }
        }
        for(var p = 1;p<69;p++){
            if($('#space' + p).data('loot')>0){
                $('#space' + p).data('loot',$('#space' + p).data('loot')-1)
            }
        }
        for (var i=0;i<index;i++){
            if(units[i].enroute>0){
                units[i].enroute-=1;
            }
            if(units[i].healing>0){
                units[i].healing-=1;
            }
        }

        $('.icon').removeClass("grayicon");
    }
    function enemyconquer(){
        for(var i =1; i<Egroupindex;i++){
            var curlocation=Egroups[i].location;
            if($('#space' + curlocation).data("istown")===true && $('#space' + curlocation).data("conquered")!=true && $('#space' + curlocation).data("fortify")===false) {

                $('#space' + curlocation).data('conquered', true);
                $('#space' + curlocation + ' img').attr("src", "Pictures/Etown.gif");
            }
            }
        //check if kingdoms still supporting
        $(".XED").remove();
        redtowns=0;
        bluetowns=0;
        yellowtowns=0;
        greentowns=0;
        allynum=0;
        for(var i =1;i<20;i++){
            if($('#space' + i).data("istown")===true){
                if($('#space' + i).data("conquered")!=true){
                    redtowns+=1;
                }
            }
        }
        for(var i =21;i<40;i++){
            if($('#space' + i).data("istown")===true){
                if($('#space' + i).data("conquered")!=true){
                    greentowns+=1;
                }
            }
        }
        for(var i =41;i<55;i++){
            if($('#space' + i).data("istown")===true){
                if($('#space' + i).data("conquered")!=true){
                    bluetowns+=1;
                }
            }
        }
        for(var i =56;i<69;i++){
            if($('#space' + i).data("istown")===true){
                if($('#space' + i).data("conquered")!=true){
                    yellowtowns+=1;
                }
            }
        }
        if (redtowns < 3) {
            $("#space14").append("<img class='XED' src='Pictures/XED.gif'/>")
        } else{
            allynum+=1;
        }
        if (bluetowns < 3) {
            $("#space42").append("<img class='XED' src='Pictures/XED.gif'/>")
        }else{
            allynum+=1;
        }
        if (yellowtowns < 3) {
            $("#space58").append("<img class='XED' src='Pictures/XED.gif'/>")
        }else{
            allynum+=1;
        }
        if (greentowns < 3) {
            $("#space39").append("<img class='XED' src='Pictures/XED.gif'/>")
        }else{
            allynum+=1;
        }
        showwall();
        }

//citatol stuff////////////////////////////////////////////////////////////////////////////////////////////////////////


    function containaccessories(){
        accessory[1]=new Accessory("Steadfast_Band");
        accessory[2]=new Accessory("Elementward_Ring");
        accessory[3]=new Accessory("Scouter's_Goggles");
        accessory[4]=new Accessory("Winged_Talisman");
        accessory[5]=new Accessory("Ribbon");
        accessory[6]=new Accessory("Dodging_Boots");
    }
    containaccessories();
    function Accessory(name){
        this.name=name;
        this.quantity=0;
        this.alreadycaught=false;
    }
    function gotoarmory(){
        $("#TEXT").empty();
        for(var i=0;i<index;i++){
            if (units[i].group === curgroupnum){
                $("#TEXT").append("<div style='border: black solid'><div id='" + i +"' class='barrackpic'><img src=" + units[i].image + " /></div>" +
                "<p class='weapon' id = '" + i + "' style='font-size:15px; background-color:gray; width:50%; margin-left:30%; border:black solid'>" + units[i].weapon +"</p>" +
                "<p class='armor' id = '" + i + "'  style='font-size:15px; background-color:gray; width:50%; margin-left:30%; border:black solid'>" + units[i].armor +"</p>" +
                "<p class='accessory' id = '" + i + "'  style='font-size:15px; background-color:gray; width:50%; margin-left:30%; border:black solid'>" + units[i].accessory +"</p></div>")
            }
        }
        $('.weapon').click(function(){
            curindex = parseInt($(this).attr("id"));
            $(".equipment").remove();
            $("#stats").remove();
            if(units[curindex].type==="Soldier" || units[curindex].type==="Thief" || units[curindex].type==="Knight" || units[curindex].type==="Invisible"){
                $("#TEXT").append("<p style='background-color:gray; border:black solid' class='equipment' id='Bronze Sword'>Bronze Sword(Unlimited)</p>");
                if(ironswordnum>0){
                    $("#TEXT").append("<p style='background-color:gray; border:black solid' class='equipment' id='Iron Sword'>Iron Sword(" + ironswordnum + " owned)</p>")
                }
                if(steelswordnum>0){
                    $("#TEXT").append("<p style='background-color:gray; border:black solid' class='equipment' id='Steel Sword'>Steel Sword(" + steelswordnum + " owned)</p>")
                }
                if(titaniumswordnum>0){
                    $("#TEXT").append("<p style='background-color:gray; border:black solid' class='equipment' id='Titanium Sword'>Titanium Sword(" + titaniumswordnum + " owned)</p>")
                }
                $(".equipment").click(function(){
                    if($(this).attr("id")==='Bronze Sword'){
                        units[curindex].attack-=units[curindex].weaponboost;
                        units[curindex].weaponboost=0;
                        if(units[curindex].weapon==="Titanium Sword"){
                            titaniumswordnum+=1;
                        }
                        if(units[curindex].weapon==="Steel Sword"){
                            steelswordnum+=1;
                        }
                        if(units[curindex].weapon==="Iron Sword"){
                            ironswordnum+=1;
                        }
                    };
                    if($(this).attr("id")==='Iron Sword'){
                        ironswordnum-=1;
                        units[curindex].attack-=units[curindex].weaponboost;
                        units[curindex].weaponboost=10;
                        units[curindex].attack+=10;
                        if(units[curindex].weapon==="Titanium Sword"){
                            titaniumswordnum+=1;
                        }
                        if(units[curindex].weapon==="Steel Sword"){
                            steelswordnum+=1;
                        }
                        if(units[curindex].weapon==="Iron Sword"){
                            ironswordnum+=1;
                        }
                    };
                    if($(this).attr("id")==='Steel Sword'){
                        steelswordnum-=1;
                        units[curindex].attack-=units[curindex].weaponboost;
                        units[curindex].weaponboost=20;
                        units[curindex].attack+=20;
                        if(units[curindex].weapon==="Titanium Sword"){
                            titaniumswordnum+=1;
                        }
                        if(units[curindex].weapon==="Steel Sword"){
                            steelswordnum+=1;
                        }
                        if(units[curindex].weapon==="Iron Sword"){
                            ironswordnum+=1;
                        }
                    };
                    if($(this).attr("id")==='Titanium Sword'){
                        titaniumswordnum-=1;
                        units[curindex].attack-=units[curindex].weaponboost;
                        units[curindex].weaponboost=30;
                        units[curindex].attack+=30;
                        if(units[curindex].weapon==="Titanium Sword"){
                            titaniumswordnum+=1;
                        }
                        if(units[curindex].weapon==="Steel Sword"){
                            steelswordnum+=1;
                        }
                        if(units[curindex].weapon==="Iron Sword"){
                            ironswordnum+=1;
                        }
                    };
                    units[curindex].weapon=$(this).attr("id");
                    gotoarmory();
                });
            }
            if(units[curindex].type==="Mage" || units[curindex].type==="Sorcerer" || units[curindex].type==="Wizard" || units[curindex].type==="Enchantress"){
                    $("#TEXT").append("<p style='background-color:gray; border:black solid' class='equipment' id='Glass Wand'>Glass Wand(Unlimited)</p>");
                    if(emeraldwandnum>0){
                        $("#TEXT").append("<p style='background-color:gray; border:black solid' class='equipment' id='Emerald Wand'>Emerald Wand(" + emeraldwandnum + " owned)</p>")
                    }
                    if(rubywandnum>0){
                        $("#TEXT").append("<p style='background-color:gray; border:black solid' class='equipment' id='Ruby Wand'>Ruby Wand(" + rubywandnum + " owned)</p>")
                    }
                    if(diamondwandnum>0){
                        $("#TEXT").append("<p style='background-color:gray; border:black solid' class='equipment' id='Diamond Wand'>Diamond Wand(" + diamondwandnum + " owned)</p>")
                    }
                    $(".equipment").click(function(){
                        if($(this).attr("id")==='Glass Wand'){
                            units[curindex].attack-=units[curindex].weaponboost;
                            units[curindex].weaponboost=0;
                            if(units[curindex].type==="Enchantress"){
                                units[curindex].attack=3;
                            }
                            if(units[curindex].weapon==="Diamond Wand"){
                                diamondwandnum+=1;
                            }
                            if(units[curindex].weapon==="Ruby Wand"){
                                rubywandnum+=1;
                            }
                            if(units[curindex].weapon==="Emerald Wand"){
                                emeraldwandnum+=1;
                            }
                        };
                        if($(this).attr("id")==='Emerald Wand'){
                            emeraldwandnum-=1;
                            units[curindex].attack-=units[curindex].weaponboost;
                            units[curindex].weaponboost=10;
                            units[curindex].attack+=10;
                            if(units[curindex].type==="Enchantress"){
                                units[curindex].attack=6;
                            }
                            if(units[curindex].weapon==="Diamond Wand"){
                                diamondwandnum+=1;
                            }
                            if(units[curindex].weapon==="Ruby Wand"){
                                rubywandnum+=1;
                            }
                            if(units[curindex].weapon==="Emerald Wand"){
                                emeraldwandnum+=1;
                            }
                        };
                        if($(this).attr("id")==='Ruby Wand'){
                            rubywandnum-=1;
                            units[curindex].attack-=units[curindex].weaponboost;
                            units[curindex].weaponboost=20;
                            units[curindex].attack+=20;
                            if(units[curindex].type==="Enchantress"){
                                units[curindex].attack=9;
                            }
                            if(units[curindex].weapon==="Diamond Wand"){
                                diamondwandnum+=1;
                            }
                            if(units[curindex].weapon==="Ruby Wand"){
                                rubywandnum+=1;
                            }
                            if(units[curindex].weapon==="Emerald Wand"){
                                emeraldwandnum+=1;
                            }
                        };
                        if($(this).attr("id")==='Diamond Wand'){
                            diamondwandnum-=1;
                            units[curindex].attack-=units[curindex].weaponboost;
                            units[curindex].weaponboost=30;
                            units[curindex].attack+=30;
                            if(units[curindex].type==="Enchantress"){
                                units[curindex].attack=12;
                            }
                            if(units[curindex].weapon==="Diamond Wand"){
                                diamondwandnum+=1;
                            }
                            if(units[curindex].weapon==="Ruby Wand"){
                                rubywandnum+=1;
                            }
                            if(units[curindex].weapon==="Emerald Wand"){
                                emeraldwandnum+=1;
                            }
                        };
                        units[curindex].weapon=$(this).attr("id");
                        gotoarmory();
                    });
            }
            if(units[curindex].type==="Rouge" || units[curindex].type==="Archer" || units[curindex].type==="Templar"){
                $("#TEXT").append("<p style='background-color:gray; border:black solid' class='equipment' id='Wooden Bow'>Wooden Bow(Unlimited)</p>");
                if(hunterbownum>0){
                    $("#TEXT").append("<p style='background-color:gray; border:black solid' class='equipment' id='Hunter Bow'>Hunter Bow(" + hunterbownum + " owned)</p>")
                }
                if(longbownum>0){
                    $("#TEXT").append("<p style='background-color:gray; border:black solid' class='equipment' id='Long Bow'>Long Bow(" + longbownum + " owned)</p>")
                }
                if(masterbownum>0){
                    $("#TEXT").append("<p style='background-color:gray; border:black solid' class='equipment' id='Master Bow'>Master Bow(" + masterbownum + " owned)</p>")
                }
                $(".equipment").click(function(){
                    if($(this).attr("id")==='Wooden Bow'){
                        units[curindex].attack-=units[curindex].weaponboost;
                        units[curindex].weaponboost=0;
                        if(units[curindex].weapon==="Master Bow"){
                            masterbownum+=1;
                        }
                        if(units[curindex].weapon==="Long Bow"){
                            longbownum+=1;
                        }
                        if(units[curindex].weapon==="Hunter Bow"){
                            hunterbownum+=1;
                        }
                    };
                    if($(this).attr("id")==='Hunter Bow'){
                        hunterbownum-=1;
                        units[curindex].attack-=units[curindex].weaponboost;
                        units[curindex].weaponboost=5;
                        units[curindex].attack+=5;
                        if(units[curindex].weapon==="Master Bow"){
                            masterbownum+=1;
                        }
                        if(units[curindex].weapon==="Long Bow"){
                            longbownum+=1;
                        }
                        if(units[curindex].weapon==="Hunter Bow"){
                            hunterbownum+=1;
                        }
                    };
                    if($(this).attr("id")==='Long Bow'){
                        longbownum-=1;
                        units[curindex].attack-=units[curindex].weaponboost;
                        units[curindex].weaponboost=10;
                        units[curindex].attack+=10;
                        if(units[curindex].weapon==="Master Bow"){
                            masterbownum+=1;
                        }
                        if(units[curindex].weapon==="Long Bow"){
                            longbownum+=1;
                        }
                        if(units[curindex].weapon==="Hunter Bow"){
                            hunterbownum+=1;
                        }
                    };
                    if($(this).attr("id")==='Master Bow'){
                        masterbownum-=1;
                        units[curindex].attack-=units[curindex].weaponboost;
                        units[curindex].weaponboost=15;
                        units[curindex].attack+=15;
                        if(units[curindex].weapon==="Master Bow"){
                            masterbownum+=1;
                        }
                        if(units[curindex].weapon==="Long Bow"){
                            longbownum+=1;
                        }
                        if(units[curindex].weapon==="Hunter Bow"){
                            hunterbownum+=1;
                        }
                    };
                    units[curindex].weapon=$(this).attr("id");
                    gotoarmory();
                });
            }
            if(units[curindex].type==="Guard"){
                $("#TEXT").append("<p style='background-color:gray; border:black solid' class='equipment' id='Bronze Shield'>Bronze Shield(Unlimited)</p>");
                if(ironshieldnum>0){
                    $("#TEXT").append("<p style='background-color:gray; border:black solid' class='equipment' id='Iron Shield'>Iron Shield(" + ironshieldnum + " owned)</p>")
                }
                if(steelshieldnum>0){
                    $("#TEXT").append("<p style='background-color:gray; border:black solid' class='equipment' id='Steel Shield'>Steel Shield(" + steelshieldnum + " owned)</p>")
                }
                if(titaniumshieldnum>0){
                    $("#TEXT").append("<p style='background-color:gray; border:black solid' class='equipment' id='Titanium Shield'>Titanium Shield(" + titaniumshieldnum + " owned)</p>")
                }
                $(".equipment").click(function(){
                    if($(this).attr("id")==='Bronze Shield'){
                        units[curindex].attack-=units[curindex].weaponboost;
                        units[curindex].weaponboost=0;
                        if(units[curindex].weapon==="Titanium Shield"){
                            titaniumshieldnum+=1;
                        }
                        if(units[curindex].weapon==="Steel Shield"){
                            steelshieldnum+=1;
                        }
                        if(units[curindex].weapon==="Iron Shield"){
                            ironshieldnum+=1;
                        }
                    };
                    if($(this).attr("id")==='Iron Shield'){
                        ironshieldnum-=1;
                        units[curindex].attack-=units[curindex].weaponboost;
                        units[curindex].weaponboost=4;
                        units[curindex].attack+=4;
                        if(units[curindex].weapon==="Titanium Shield"){
                            titaniumshieldnum+=1;
                        }
                        if(units[curindex].weapon==="Steel Shield"){
                            steelshieldnum+=1;
                        }
                        if(units[curindex].weapon==="Iron Shield"){
                            ironshieldnum+=1;
                        }
                    };
                    if($(this).attr("id")==='Steel Shield'){
                        steelshieldnum-=1;
                        units[curindex].attack-=units[curindex].weaponboost;
                        units[curindex].weaponboost=8;
                        units[curindex].attack+=8;
                        if(units[curindex].weapon==="Titanium Shield"){
                            titaniumshieldnum+=1;
                        }
                        if(units[curindex].weapon==="Steel Shield"){
                            steelshieldnum+=1;
                        }
                        if(units[curindex].weapon==="Iron Shield"){
                            ironshieldnum+=1;
                        }
                    };
                    if($(this).attr("id")==='Titanium Shield'){
                        titaniumshieldnum-=1;
                        units[curindex].attack-=units[curindex].weaponboost;
                        units[curindex].weaponboost=12;
                        units[curindex].attack+=12;
                        if(units[curindex].weapon==="Titanium Shield"){
                            titaniumshieldnum+=1;
                        }
                        if(units[curindex].weapon==="Steel Shield"){
                            steelshieldnum+=1;
                        }
                        if(units[curindex].weapon==="Iron Shield"){
                            ironshieldnum+=1;
                        }
                    };
                    units[curindex].weapon=$(this).attr("id");
                    gotoarmory();
                });
            }
        });
        $('.armor').click(function(){
            curindex = parseInt($(this).attr("id"));
            $(".equipment").remove();
            $("#stats").remove();
            $("#TEXT").append("<p style='background-color:gray; border:black solid' class='equipment' id='Bronze Armor'>Bronze Armor(Unlimited)</p>")
            if(ironarmornum>0){
                $("#TEXT").append("<p style='background-color:gray; border:black solid' class='equipment' id='Iron Armor'>Iron Armor(" + ironarmornum + " owned)</p>")
            }
            if(steelarmornum>0){
                $("#TEXT").append("<p style='background-color:gray; border:black solid' class='equipment' id='Steel Armor'>Steel Armor(" + steelarmornum + " owned)</p>")
            }
            if(titaniumarmornum>0){
                $("#TEXT").append("<p style='background-color:gray; border:black solid' class='equipment' id='Titanium Armor'>Titanium Armor(" + titaniumarmornum + " owned)</p>")
            }
            $(".equipment").click(function(){
                if($(this).attr("id")==='Bronze Armor'){
                    units[curindex].maxhealth-=units[curindex].healthboost;
                    units[curindex].resistance-=units[curindex].resistboost;
                    units[curindex].defense-=units[curindex].armorboost;
                    units[curindex].resistboost=0;
                    units[curindex].armorboost=0;
                    if(units[curindex].armor==="Titanium Armor"){
                        titaniumarmornum+=1;
                    }
                    if(units[curindex].armor==="Steel Armor"){
                        steelarmornum+=1;
                    }
                    if(units[curindex].armor==="Iron Armor"){
                        ironarmornum+=1;
                    }
                };
                if($(this).attr("id")==='Iron Armor'){
                    ironarmornum-=1;
                    units[curindex].maxhealth-=units[curindex].healthboost;
                    units[curindex].resistance-=units[curindex].resistboost;
                    units[curindex].defense-=units[curindex].armorboost;
                    units[curindex].resistboost=5;
                    units[curindex].healthboost=20;
                    units[curindex].armorboost=5;
                    units[curindex].maxhealth+=20;
                    units[curindex].defense+=5;
                    units[curindex].resistance+=5;
                    if(units[curindex].armor==="Titanium Armor"){
                        titaniumarmornum+=1;
                    }
                    if(units[curindex].armor==="Steel Armor"){
                        steelarmornum+=1;
                    }
                    if(units[curindex].armor==="Iron Armor"){
                        ironarmornum+=1;
                    }
                };
                if($(this).attr("id")==='Steel Armor'){
                    steelarmornum-=1;
                    units[curindex].maxhealth-=units[curindex].healthboost;
                    units[curindex].resistance-=units[curindex].resistboost;
                    units[curindex].defense-=units[curindex].armorboost;
                    units[curindex].resistboost=10;
                    units[curindex].healthboost=40;
                    units[curindex].maxhealth+=40;
                    units[curindex].armorboost=10;
                    units[curindex].defense+=10;
                    units[curindex].resistance+=10;
                    if(units[curindex].armor==="Titanium Armor"){
                        titaniumarmornum+=1;
                    }
                    if(units[curindex].armor==="Steel Armor"){
                        steelarmornum+=1;
                    }
                    if(units[curindex].armor==="Iron Armor"){
                        ironarmornum+=1;
                    }
                };
                if($(this).attr("id")==='Titanium Armor'){
                    titaniumarmornum-=1;
                    units[curindex].maxhealth-=units[curindex].healthboost;
                    units[curindex].resistance-=units[curindex].resistboost;
                    units[curindex].defense-=units[curindex].armorboost;
                    units[curindex].resistboost=15;
                    units[curindex].healthboost=60;
                    units[curindex].maxhealth+=60;
                    units[curindex].armorboost=15;
                    units[curindex].defense+=15;
                    units[curindex].resistance+=15;
                    if(units[curindex].armor==="Titanium Armor"){
                        titaniumarmornum+=1;
                    }
                    if(units[curindex].armor==="Steel Armor"){
                        steelarmornum+=1;
                    }
                    if(units[curindex].armor==="Iron Armor"){
                        ironarmornum+=1;
                    }
                };
                units[curindex].armor=$(this).attr("id");
                gotoarmory();
            });
        });
        $('.accessory').click(function(){

            curindex = parseInt($(this).attr("id"));
            $(".equipment").remove();
            for(var i = 1; i<accessory.length;i++){
                if(accessory[i].quantity>0){
                    $("#TEXT").append("<p style='background-color:gray; border:black solid' class='equipment' id=" + i +  "name=" + accessory[i].name +">" + accessory[i].name + "(" + accessory[i].quantity + " owned)</p>")
                }
            }
            $(".equipment").click(function(){
                for(var i = 1; i<accessory.length;i++){
                    if(accessory[i].name===units[curindex].accessory){
                        accessory[i].quantity+=1;
                    }
                }
                units[curindex].accessory=accessory[parseInt($(this).attr("id"))].name;
                    accessory[parseInt($(this).attr("id"))].quantity-=1;
                gotoarmory();
            });


        });
        getstats();
    }

    var ingredient = new Array;
  {
        ingredient[1]=new Ingredient("Flowers");
        ingredient[2]=new Ingredient("Mushrooms");
        ingredient[3]=new Ingredient("Flint");
        ingredient[4]=new Ingredient("Pine_Needles");
        ingredient[5]=new Ingredient("Wheat");
        ingredient[6]=new Ingredient("Enemy_Blood");
        ingredient[7]=new Ingredient("Bone_Marrow");
        ingredient[8]=new Ingredient("Raw_Meat");
        ingredient[9]=new Ingredient("Slime");
        ingredient[10]=new Ingredient("Essence");
    }//ingredients
    function Ingredient(name){
        this.name=name;
        this.quantity=0;
    }

    function levelresearch(){
        if (curresearch==="Weapon_LevelupIron"){
            Ironweaponlevelup+=researchers;
            if(Ironweaponlevelup>=14){
                ironsword=true;
                emeraldwand=true;
                hunterbow=true;
                ironshield=true;
                curresearch="";
                researchmessage("research1","You can now buy level 2 weapons at the shop. Go to the research center to begin researching something new.")
            }
        }
        if (curresearch==="Weapon_LevelupSteel"){
            Steelweaponlevelup+=researchers;
            if(Steelweaponlevelup>=39){
                steelsword=true;
                rubywand=true;
                longbow=true;
                steelshield=true;
                curresearch="";
                researchmessage("research2","You can now buy level 3 weapons at the shop. Go to the research center to begin researching something new.")
            }
        }
        if (curresearch==="Weapon_LevelupTitanium"){
            Titaniumweaponlevelup+=researchers;
            if(Titaniumweaponlevelup>=79){
                titaniumsword=true;
                diamondwand=true;
                masterbow=true;
                titaniumshield=true;
                curresearch="";
                researchmessage("research3","You can now buy level 4 weapons at the shop. Go to the research center to begin researching something new.")
            }
        }
        if (curresearch==="Armor_LevelupIron"){
            Ironarmorlevelup+=researchers;
            if(Ironarmorlevelup>=14){
                ironarmor=true;
                curresearch="";
                researchmessage("research4","You can now buy level 2 armors at the shop. Go to the research center to begin researching something new.")
            }
        }
        if (curresearch==="Armor_LevelupSteel"){
            Steelarmorlevelup+=researchers;
            if(Steelarmorlevelup>=39){
                steelarmor=true;
                curresearch="";
                researchmessage("research5","You can now buy level 3 armors at the shop. Go to the research center to begin researching something new.")
            }
        }
        if (curresearch==="Armor_LevelupTitanium"){
            Titaniumarmorlevelup+=researchers;
            if(Titaniumarmorlevelup>=79){
                titaniumarmor=true;
                curresearch="";
                researchmessage("research6","You can now buy level 4 armors at the shop. Go to the research center to begin researching something new.")
            }
        }
        if (curresearch==="Alchemy_Levelup"){
            Alchemistlevelup+=researchers;
            if(Alchemistlevelup>=14){
                alchemy=true;
                curresearch="";
                researchmessage("research8","Your units can now use alchemy. Go to the research center to begin researching something new.")
            }
        }
        if (curresearch==="Alchemy2_Levelup"){
            Alchemist2levelup+=researchers;
            if(Alchemist2levelup>=29){
                alchemy2=true;
                curresearch="";
                researchmessage("research8","Your units can now throw potions. Go to the research center to begin researching something new.")
            }
        }
        if (curresearch==="Summon_Levelup"){
            Summonlevelup+=researchers;
            if(Summonlevelup>=44){
                summoning=true;
                curresearch="";
                researchmessage("research10","Units can now summon. Go to the research center to begin researching something new.")
            }
        }
        if (curresearch==="LevelupHire"){
            Hirelevelup+=researchers;
            if(Hirelevelup>=(9+Hire*5)){
                Hirelevelup=0;
                Hire+=1;
                curresearch="";
                researchmessage("research13","You trained a new unit.");
                newunit();
            }
        }
    }
function gotoresearchcenter(){
    $("#TEXT").empty();
    $("#TEXT").append('<div class="Backbutton"><img src = "Pictures/back.gif" /></div>');
    $(".Backbutton").click(function(){
        $("#TEXT").empty();
        gotocapitol();
    })

    $("#TEXT").append("<p style='margin-left:20px'>Click the item to research</p>");
    $("#TEXT").append("<p style='margin-left:20px'>Researchers: " + researchers +"</p>");
    if(ironsword!=true){
        $("#TEXT").append('<div class="research" id="Weapon_LevelupIron"><img  src="Pictures/Swordlevelup.png"/><p>Learn to build level 2 weapons<br>(' + parseInt((15-Ironweaponlevelup)/researchers) + ' Days)</p></div>');
    }
    if(steelsword!=true && ironsword===true){
        $("#TEXT").append('<div class="research" id="Weapon_LevelupSteel"><img  src="Pictures/Swordlevelup.png"/><p>Learn to build level 3 weapons<br>(' + parseInt((40-Steelweaponlevelup)/researchers) + ' Days)</p></div>')
    }
    if(titaniumsword!=true && steelsword===true){
        $("#TEXT").append('<div class="research" id="Weapon_LevelupTitanium"><img  src="Pictures/Swordlevelup.png"/><p>Learn to build level 4 weapons<br>(' + parseInt((80-Titaniumweaponlevelup)/researchers) + ' Days)</p></div>')
    }
    if(ironarmor!=true){
        $("#TEXT").append('<div class="research" id="Armor_LevelupIron"><img  src="Pictures/Armorlevelup.png"/><p>Learn to build level 2 armor<br>(' + parseInt((15-Ironarmorlevelup)/researchers) + ' Days)</p></div>')
    }
    if(steelarmor!=true && ironarmor===true){
        $("#TEXT").append('<div class="research" id="Armor_LevelupSteel"><img  src="Pictures/Armorlevelup.png"/><p>Learn to build level 3 armor<br>(' + parseInt((40-Steelarmorlevelup)/researchers) + ' Days)</p></div>')
    }
    if(titaniumarmor!=true && steelarmor===true){
        $("#TEXT").append('<div class="research" id="Armor_LevelupTitanium"><img  src="Pictures/Armorlevelup.png"/><p>Learn to build level 4 armor<br>(' + parseInt((80-Titaniumarmorlevelup)/researchers) + ' Days)</p></div>')
    }
    if(alchemy===false){
        $("#TEXT").append('<div class="research" id="Alchemy_Levelup"><img  src="Pictures/Alchemylevelup.png"/><p>Learn to use alchemy<br>(' + parseInt((15-Alchemistlevelup)/researchers) + ' Days)</p></div>')
    }
    if(alchemy2===false && alchemy===true){
        $("#TEXT").append('<div class="research" id="Alchemy2_Levelup"><img  src="Pictures/Alchemylevelup.png"/><p>Get new recipes to purchase<br>(' + parseInt((30-Alchemist2levelup)/researchers) + ' Days)</p></div>')
    }
    if(summoning===false && alchemy2===true){
        $("#TEXT").append('<div class="research" id="Summon_Levelup"><img  src="Pictures/Summonlevelup.png"/><p>Units learn to summon<br>(' + parseInt((45-Summonlevelup)/researchers) + ' Days)</p></div>')
    }
    if(Hire<3){

        $("#TEXT").append('<div class="research" id="LevelupHire"><img  src="Pictures/BuyUnit.png"/><p>Recruit a new unit<br>(' + parseInt(((10+5*Hire)-Hirelevelup)/researchers) + ' Days)</p></div>');
    }


if(curresearch !=""){
    $('#' + curresearch).addClass("selected");
}


    $(".research").click(function(){
        $(".research").removeClass("selected");
        $(this).addClass("selected");
        curresearch=$(this).attr("id");
        $('.heading').remove();
        $('#top').append("<h1 class = 'heading'>Day: " + day + "</h1>");
        $('#top').append("<h1 class = 'heading'>Money: " + money + "</h1>");
        $('#top').append("<h1 class = 'heading'>Research: " + currentresearch() + "</h1>");
    });

}
    function researchmessage(index, e){
        $("#top").append("<div class='researchmessage' id=" + index + " style='word-wrap:break-word; position: absolute; border: purple solid 5px; z-index:1;margin-top:450px; margin-left:100px; width:350px; height: 130px; background-color:gray'></div>");
        $(".researchmessage").append("<p align='center' style='font-size: 15px; margin-left:5px; margin-right:5px; margin-top:0px'>" + e + "</p>");
        setInterval(function(){
            $(".researchmessage").addClass("removewindow");
        },100)
    }
    function currentresearch(){

        if(curresearch==="Weapon_LevelupIron" || curresearch==="Weapon_LevelupSteel" || curresearch==="Weapon_LevelupTitanium"){
            return "Weapons"
        }
        if(curresearch==="Armor_LevelupIron" || curresearch==="Armor_LevelupSteel" || curresearch==="Armor_LevelupTitanium"){
            return "Armor"
        }
        if(curresearch==="Alchemy_Levelup"){
            return "Alchemy"
        }
        if(curresearch==="Alchemy2_Levelup"){
            return "Potions"
        }
        if(curresearch==="Summon_Levelup"){
            return "Summon"
        }
        if(curresearch==="LevelupHire"){
            return "Recruit"
        }
        if(curresearch==="LevelupEnchant"){
            return "Enchant"
        }
curresearch="";
        return "<img class='nothing' src = 'Pictures/empty.gif'/>";

    }

var boughtsoldier=0;
    function gotoshop(){
        $("#TEXT").empty();
        $("#TEXT").append('<div class="Backbutton"><img src = "Pictures/back.gif" /></div>');
        $(".Backbutton").click(function(){
            $("#TEXT").empty();
            gotocapitol();
        })

        $("#TEXT").append("<p style='text-align:center'>SHOP</p>");
        $('#top').empty();
        $('#top').append("<h1 class = 'heading'>Day: " + day + "</h1>");
        $('#top').append("<h1 class = 'heading'>Money: " + money + "</h1>");
        $('#top').append("<h1 class = 'heading'>Research: " + currentresearch() + "</h1>");

        if(boughtsoldier<3){
            $("#TEXT").append("<p style='background-color:gray; border:black solid' id='Newsoldier'>New UNIT-100 Gold</p>")
        }



        if(day>5 && recoverrecipe!=true){
            $("#TEXT").append("<p style='background-color:gray; border:black solid' id='recoverrecipe'>Recover recipe-100gold</p>")
        }
        if(day>10 && goldrecipe!=true){
            $("#TEXT").append("<p style='background-color:gray; border:black solid' id='goldrecipe'>Gold recipe-50gold</p>")
        }
        if(day>15 && teleportrecipe!=true){
            $("#TEXT").append("<p style='background-color:gray; border:black solid' id='teleportrecipe'>Teleport recipe-100gold</p>")
        }
        if(day>20 && intelligencerecipe!=true){
            $("#TEXT").append("<p style='background-color:gray; border:black solid' id='intelligencerecipe'>Intelligence recipe-100gold</p>")
        }
        if(day>25 && replicaterecipe!=true){
            $("#TEXT").append("<p style='background-color:gray; border:black solid' id='replicaterecipe'>Replicate recipe-100gold</p>")
        }
        if(day>30 && flourishrecipe!=true){
            $("#TEXT").append("<p style='background-color:gray; border:black solid' id='flourishrecipe'>Flourish recipe-100gold</p>")
        }
        if(day>35 && refreshrecipe!=true){
            $("#TEXT").append("<p style='background-color:gray; border:black solid' id='refreshrecipe'>Refresh recipe-100gold</p>")
        }
        if(alchemy2===true){
            if(summonrecipe!=true){
                $("#TEXT").append("<p style='background-color:gray; border:black solid' id='summonrecipe'>Summon's recipe-100gold</p>")
            }
            if(boostrecipe!=true){
                $("#TEXT").append("<p style='background-color:gray; border:black solid' id='Boostrecipe'>Boost recipe-150gold</p>")
            }
            if(reviverecipe!=true){
                $("#TEXT").append("<p style='background-color:gray; border:black solid' id='reviverecipe'>Revive recipe-100gold</p>")
            }
        }


        if(titaniumarmor===true){
            $("#TEXT").append("<p style='background-color:gray; border:black solid' id='buytitaniumarmor'>Buy Titanium Armor (" + titaniumarmornum + " owned)</p>")
        }
        if(diamondwand===true){
            $("#TEXT").append("<p style='background-color:gray; border:black solid' id='buydiamondwand'>Buy Diamond Wand(" + diamondwandnum + " owned)</p>")
        }
        if(masterbow===true){
            $("#TEXT").append("<p style='background-color:gray; border:black solid' id='buymasterbow'>Buy Master Bow(" + masterbownum + " owned)</p>")
        }
        if(titaniumshield===true){
            $("#TEXT").append("<p style='background-color:gray; border:black solid' id='buytitaniumshield'>Buy Titanium Shield(" + titaniumshieldnum + " owned)</p>")
        }
        if(titaniumsword===true){
            $("#TEXT").append("<p style='background-color:gray; border:black solid' id='buytitaniumsword'>Buy Titanium Sword(" + titaniumswordnum + " owned)</p>")
        }
        if(steelarmor===true){
            $("#TEXT").append("<p style='background-color:gray; border:black solid' id='buysteelarmor'>Buy Steel Armor(" + steelarmornum + " owned)</p>")
        }
        if(rubywand===true){
            $("#TEXT").append("<p style='background-color:gray; border:black solid' id='buyrubywand'>Buy Ruby Wand(" + rubywandnum + " owned)</p>")
        }
        if(steelshield===true){
            $("#TEXT").append("<p style='background-color:gray; border:black solid' id='buysteelshield'>Buy Steel Shield(" + steelshieldnum + " owned)</p>")
        }
        if(steelsword===true){
            $("#TEXT").append("<p style='background-color:gray; border:black solid' id='buysteelsword'>Buy Steel Sword(" + steelswordnum + " owned)</p>")
        }
        if(longbow===true){
            $("#TEXT").append("<p style='background-color:gray; border:black solid' id='buylongbow'>Buy Long Bow(" + longbownum + " owned)</p>")
        }
        if(ironarmor===true){
            $("#TEXT").append("<p style='background-color:gray; border:black solid' id='buyironarmor'>Buy Iron Armor(" + ironarmornum + " owned)</p>")
        }
        if(ironsword===true){
            $("#TEXT").append("<p style='background-color:gray; border:black solid' id='buyironsword'>Buy Iron Sword(" + ironswordnum + " owned)</p>")
        }
        if(ironshield===true){
            $("#TEXT").append("<p style='background-color:gray; border:black solid' id='buyironshield'>Buy Iron Shield(" + ironshieldnum + " owned)</p>")
        }
        if(hunterbow===true){
            $("#TEXT").append("<p style='background-color:gray; border:black solid' id='buyhunterbow'>Buy Hunter Bow(" + hunterbownum + " owned)</p>")
        }
        if(emeraldwand===true){
            $("#TEXT").append("<p style='background-color:gray; border:black solid' id='buyemeraldwand'>Buy Emerald Wand(" + emeraldwandnum + " owned)</p>")
        }

        $("#Newsoldier").click(function(){
            if(money>=100){
                money-=100;
newunit();
                boughtsoldier+=1;
                message("You hired a new unit!")
                gotoshop();
            }else{
                message('You do not have enough money for this.')
            }
        });
        $("#buyironsword").click(function(){
            if(money>=10){
                ironswordnum+=1;
                money-=10;
                gotoshop();
            }else{
                message('You do not have enough money for this.')
            }
        });
        $("#buysteelsword").click(function(){
            if(money>=30){
                steelswordnum+=1;
                money-=30;
                gotoshop();
            }else{
                message('You do not have enough money for this.')
            }
        });
        $("#buytitaniumsword").click(function(){
            if(money>=50){
                titaniumswordnum+=1;
                money-=50;
                gotoshop();
            }else{
                message('You do not have enough money for this.')
            }
        });
        $("#buyironshield").click(function(){
            if(money>=10){
                ironshieldnum+=1;
                money-=10;
                gotoshop();
            }else{
                message('You do not have enough money for this.')
            }
        });
        $("#buysteelshield").click(function(){
            if(money>=30){
                steelshieldnum+=1;
                money-=30;
                gotoshop();
            }else{
                message('You do not have enough money for this.')
            }
        });
        $("#buytitaniumshield").click(function(){
            if(money>=50){
                titaniumshieldnum+=1;
                money-=50;
                gotoshop();
            }else{
                message('You do not have enough money for this.')
            }
        });
        $("#buyironarmor").click(function(){
            if(money>=10){
                ironarmornum+=1;
                money-=10;
                gotoshop();
            }else{
                message('You do not have enough money for this.')
            }
        });
        $("#buysteelarmor").click(function(){
            if(money>=30){
                steelarmornum+=1;
                money-=30;
                gotoshop();
            }else{
                message('You do not have enough money for this.')
            }
        });
        $("#buytitaniumarmor").click(function(){
            if(money>=50){
                titaniumarmornum+=1;
                money-=50;
                gotoshop();
            }else{
                message('You do not have enough money for this.')
            }
        });
        $("#buyhunterbow").click(function(){
            if(money>=10){
                hunterbownum+=1;
                money-=10;
                gotoshop();
            }else{
                message('You do not have enough money for this.')
            }
        });
        $("#buylongbow").click(function(){
            if(money>=30){
                longbownum+=1;
                money-=30;
                gotoshop();
            }else{
                message('You do not have enough money for this.')
            }
        });
        $("#buymasterbow").click(function(){
            if(money>=50){
                masterbownum+=1;
                money-=50;
                gotoshop();
            }else{
                message('You do not have enough money for this.')
            }
        });
        $("#buyemeraldwand").click(function(){
            if(money>=10){
                emeraldwandnum+=1;
                money-=10;
                gotoshop();
            }else{
                message('You do not have enough money for this.')
            }
        });
        $("#buyrubywand").click(function(){
            if(money>=30){
                rubywandnum+=1;
                money-=30;
                gotoshop();
            }else{
                message('You do not have enough money for this.')
            }
        });
        $("#buydiamondwand").click(function(){
            if(money>=50){
                diamondwandnum+=1;
                money-=50;
                gotoshop();
            }else{
                message('You do not have enough money for this.')
            }
        });

        $("#recoverrecipe").click(function(){
            if(money>=50){
                recoverrecipe=true;
                money-=100;
                gotoshop();
            }else{
                message('You do not have enough money for this.')
            }
        });
        $("#goldrecipe").click(function(){
            if(money>=50){
                goldrecipe=true;
                money-=50;
                gotoshop();
            }else{
                message('You do not have enough money for this.')
            }
        });
        $("#manarecipe").click(function(){
            if(money>=50){
                manarecipe=true;
                money-=50;
                gotoshop();
            }else{
                message('You do not have enough money for this.')
            }
        });
        $("#Boostrecipe").click(function(){
            if(money>=150){
                boostrecipe=true;
                money-=150;
                gotoshop();
            }else{
                message('You do not have enough money for this.')
            }
        });
        $("#summonrecipe").click(function(){
            if(money>=100){
                summonrecipe=true;
                money-=100;
                gotoshop();
            }else{
                message('You do not have enough money for this.')
            }
        });
        $("#reviverecipe").click(function(){
            if(money>=100){
                reviverecipe=true;
                money-=100;
                gotoshop();
            }else{
                message('You do not have enough money for this.')
            }
        });
        $("#intelligencerecipe").click(function(){
            if(money>=100){
                intelligencerecipe=true;
                money-=100;
                gotoshop();
            }else{
                message('You do not have enough money for this.')
            }
        });
        $("#teleportrecipe").click(function(){
            if(money>=100){
                teleportrecipe=true;
                money-=100;
                gotoshop();
            }else{
                message('You do not have enough money for this.')
            }
        });
        $("#replicaterecipe").click(function(){
            if(money>=100){
                replicaterecipe=true;
                money-=100;
                gotoshop();
            }else{
                message('You do not have enough money for this.')
            }
        });
        $("#flourishrecipe").click(function(){
            if(money>=100){
                flourishrecipe=true;
                money-=100;
                gotoshop();
            }else{
                message('You do not have enough money for this.')
            }
        });
        $("#refreshrecipe").click(function(){
            if(money>=100){
                refreshrecipe=true;
                money-=100;
                gotoshop();
            }else{
                message('You do not have enough money for this.')
            }
        });
    }

    function gotobarracks(){
        if(battleon===true){
            return;
        }

        spot1="";
        spot2="";
        spot3="";
        $("#TEXT").empty();
        $("#TEXT").append('<div class="Backbutton"><img src = "Pictures/back.gif" /></div>');
        $(".Backbutton").click(function(){
            $("#TEXT").empty();
            gotocapitol();
        })

        $("#TEXT").append("<p style='text-align:center'>Double click to add to group</p>");
        $("#TEXT").append('<div class="entrypoint" id = "entry1"></div>');
        $("#TEXT").append('<div class="entrypoint" id = "entry2"></div>');
        $("#TEXT").append('<div class="entrypoint" id = "entry3"></div>');
        $("#TEXT").append('<div class="button" id = "createbutton">Create Group</div>');
        $("#TEXT").append('<div id="barracks"></div>');

        for(var i =0;i<index;i++){
            if((units[i].group===0 || units[i].group===-1) && units[i].type!="Djinn"){
                $("#barracks").append(units[i].picture);
                if(units[i].health<units[i].maxhealth && units[i].alive===true && recoverpotion>0){
                    $('#' + i).append("<div class='Resto' id='Resto" + i + "'><p>Heal</p></div>")
                }
                if(units[i].health===units[i].maxhealth && units[i].alive===true && boostpotion>0){
                    $('#' + i).append("<div class='Boost' id='Boost" + i + "'><p>Boost</p></div>")
                }
                if(units[i].healing>0 && recoverpotion>0){
                    $('#' + i).append("<div class='Recover' id='Recover" + i + "'><p>Heal</p></div>")
                }
                if(units[i].enroute>0 && teleportpotion>0){
                    $('#' + i).append("<div class='Teleport' id='Teleport" + i + "'><p>Teleport</p></div>")
                }
                if(units[i].alive===false && revivepotion>0){
                    $('#' + i).append("<div class='Revive' id='Revive" + i + "'><p>Revive</p></div>")
                }

                if(units[i].alive===true){
                    $('#' + i).append('<div class="healthbar" id = "HB' + i + '" style="position: relative; margin-top:90%; width: ' + (units[i].health/units[i].maxhealth)*100 + '%"></div><div class="level"><p>' + units[i].level + '</p></div>');
                }

                if(units[i].healing>0 || units[i].enroute>0 || units[i].alive===false){
                    $('#' + i).addClass("grayicon")
                }

                if(units[i].type==="Sorcerer"){
                    $("#" +i).append('<div class="manabar" id ="EB' + i + '"style="width: ' + (sorcerermana) + '%"></div>');
                }
                if(units[i].type==="Healer"){
                    $("#" +i).append('<div class="healerbar" id ="EB' + i + '"style="width: ' + (units[i].power) + '%"></div>');
                }
            }
        }
        $(".Recover").click(function(){
            if(recoverpotion===0){
                message("You have to brew a 'Recover' potion to recover this unit.")
                return;
            }
            recoverpotion-=1;
           var thisindex= $(this).attr("id");
            thisindex=thisindex.replace("Recover","")
         units[thisindex].healing=0;
            $("#TEXT").empty();
            gotobarracks();
        });
        $(".Teleport").click(function(){
            if(teleportpotion===0){
                message("You have to brew a 'Teleport' potion to retrieve this unit.")
                return;
            }
            teleportpotion-=1;
            var thisindex= $(this).attr("id");
            thisindex=thisindex.replace("Teleport","")
            units[thisindex].enroute=0;
            $("#TEXT").empty();
            gotobarracks();
        });
        $(".Revive").click(function(){
            if(revivepotion===0){
                message("You have to brew a 'Revive' potion to revive this unit.")
                return;
            }
            revivepotion-=1;
            var thisindex= $(this).attr("id");
            thisindex=thisindex.replace("Revive","")
            units[thisindex].alive=true;
            units[thisindex].group=0;
            units[thisindex].health=units[thisindex].maxhealth;
            units[thisindex].type=units[thisindex].realtype;
            $("#TEXT").empty();
            gotobarracks();
        });
        $(".Resto").click(function(){
            if(recoverpotion===0){
                message("You have to brew a 'Recover' potion to heal this unit.")
                return;
            }
            recoverpotion-=1;
            var thisindex= $(this).attr("id");
            thisindex=thisindex.replace("Recover","");
            units[thisindex].health+=30;
            if(units[thisindex].health>units[thisindex].maxhealth){
                units[thisindex].health=units[thisindex].maxhealth;
            }
            $("#TEXT").empty();
            gotobarracks();
        });
        $(".Boost").click(function(){
            if(boostpotion===0){
                message("You have to brew a 'Boost' potion to heal this unit.")
                return;
            }
            boostpotion-=1;
            var thisindex= $(this).attr("id");
            thisindex=thisindex.replace("Boost","");
            if(units[thisindex].type==="Templar"){
                units[thisindex].resistance+=5;
                message("You increased this unit's resistance by 5")
            } else if(units[thisindex].type==="Guard"){
                units[thisindex].defense+=5;
                message("You increased this unit's defense by 5")
            }else if(units[thisindex].type==="Healer" || units[thisindex].type==="Enchantress"){
                units[thisindex].maxhealth+=25;
                message("You increased this unit's max health by 25")
            } else{
                units[thisindex].attack+=5;
                message("You increased this unit's attack by 5")
            }
            $("#TEXT").empty();
            gotobarracks();
        });
        getstats();
        groupunit();
        creategroup();
    }


    function gotobrewery(){
        $("#TEXT").empty();
        $("#TEXT").append('<div class="Backbutton"><img src = "Pictures/back.gif" /></div>');
        $(".Backbutton").click(function(){
            $("#TEXT").empty();
            gotocapitol();
        })

        $("#TEXT").append("<p style='text-align:center'>Brewery</p>");
        $("#TEXT").append("<p style='margin-left:5%'>Brew Potion:</p>");
        $("#TEXT").append("<p style='margin-left:55%; margin-top:-38px'>Ingredients:</p>");
        $("#TEXT").append("<div id='Ingredients' style = 'background-color: gray; text-align: center; border: black solid; width:auto; position:absolute; margin-left:135px; height:auto'></div>");

        for(var i = 1;i<ingredient.length;i++){
            if(ingredient[i].quantity>0) {
                $("#Ingredients").append("<p style=' font-size:17px;'>" + ingredient[i].name + "(" + ingredient[i].quantity + ")</p>")
            }
        }
        if(recoverrecipe===true){
            $("#TEXT").append("<p class='potions' id='Recover'>Recover:(" + recoverpotion +") <br> 1 mushroom <BR> 6 bone marrow</p>");
        }
        if(reviverecipe===true){
            $("#TEXT").append("<p class='potions' id='Revive'>Revive:(" + revivepotion +")<br> 2 pine needles <br> 1 slime</p>");
        }
        if(teleportrecipe===true){
            $("#TEXT").append("<p class='potions' id='Teleport'>teleport:(" + teleportpotion +")<br> 1 flower <br> 1 flint</p>");
        }
        if(boostrecipe===true){
            $("#TEXT").append("<p class='potions' id='Boost'>Boost:(" + boostpotion +")<br> 2 flowers <br> 4 bone marrow</p>");
        }
        if(goldrecipe===true){
            $("#TEXT").append("<p class='potions' id='Gold'>Liquid Gold:<br> 4 Enemy blood <br> 1 flint</p>");
        }
        if(summonrecipe===true){
            $("#TEXT").append("<p class='potions' id='Summon'>Summoner's:<br> 4 Enemy blood <br> 2 Mushroom</p>");
        }
        if(intelligencerecipe===true){
            $("#TEXT").append("<p class='potions' id='Intelligence'>Intelligence:<br> 1 Pine Needle <br> 4 Raw Meat</p>");
        }
        if(replicaterecipe===true){
            $("#TEXT").append("<p class='potions' id='Replicate'>Replicate:<br> 9 Essence</p>");
        }
        if(flourishrecipe===true){
            $("#TEXT").append("<p class='potions' id='Flourish'>Flourish:<br> 3 Wheat <br> 1 Slime</p>");
        }
        if(refreshrecipe===true){
            $("#TEXT").append("<p class='potions' id='Refresh'>Refresh:<br> 3 Wheat <br> 3 Raw Meat</p>");
        }

        $("#Replicate").click(function(){
            if(ingredient[10].quantity>=9){
                ingredient[10].quantity-=9;
                message("You brewed a Replicate potion. You receive one of each of the other ingredients.");
                for(var i =1;i<10;i++){
                    ingredient[i].quantity+=1;
                }
                gotobrewery();
            }else{
                message("You require 9 Essence for that. You only have " + ingredient[10].quantity + " Essence.")
            }
        });
        $("#Revive").click(function(){
            if(ingredient[4].quantity>=2 && ingredient[9].quantity>=1){
                revivepotion+=1;
                ingredient[4].quantity-=2;
                ingredient[9].quantity-=1;
                message("You brewed a Revive potion. Use it in the barracks to bring a dead unit back to life.")
                gotobrewery();
            }else{
                message("You require 2 pine needles and 1 slime for that. You only have " + ingredient[4].quantity + " pine needles and " + ingredient[9].quantity + " slime.")
            }
        });
        $("#Recover").click(function(){
            if(ingredient[2].quantity>=1 && ingredient[7].quantity>=6){
                recoverpotion+=1;
                ingredient[2].quantity-=1;
                ingredient[7].quantity-=6;
                message("You brewed a Recover potion. Use it to fully heal a unit that was sent to the hospital.")
                gotobrewery();
            }else{
                message("You require 1 mushroom and 6 bone marrow for that. You only have " + ingredient[2].quantity + " mushroom and " + ingredient[7].quantity + " bone marrow.")
            }
        });
        $("#Teleport").click(function(){
            if(ingredient[1].quantity>=1 && ingredient[3].quantity>=1){
                teleportpotion+=1;
                ingredient[1].quantity-=1;
                ingredient[3].quantity-=1;
                message("You brewed a Teleport potion. Use it in the barracks to bring a unit that escaped immediately back to the capitol.")
                gotobrewery();
            }else{
                message("You require 1 flower and 1 flint for that. You only have " + ingredient[1].quantity + " flower and " + ingredient[3].quantity + " flint.")
            }
        });
        $("#Boost").click(function(){
            if(ingredient[1].quantity>=2 && ingredient[7].quantity>=4){
                boostpotion+=1;
                ingredient[1].quantity-=2;
                ingredient[7].quantity-=4;
                message("You brewed a Boost potion. Use it in the barracks to give a fully healed unit a permanent boost to a stat.");
                gotobrewery();
            }else{
                message("You require 2 flowers and 4 bone marrow for that. You only have " + ingredient[1].quantity + " flower and " + ingredient[7].quantity + " bone marrow.")
            }
        });
        $("#Gold").click(function(){
            if(ingredient[6].quantity>=4 && ingredient[3].quantity>=1){
              money+=200;
                $('.heading').remove();
                $('#top').append("<h1 class = 'heading'>Day: " + day + "</h1>");
                $('#top').append("<h1 class = 'heading'>Money: " + money + "</h1>");
                $('#top').append("<h1 class = 'heading'>Research: " + currentresearch() + "</h1>");
                ingredient[6].quantity-=4;
                ingredient[3].quantity-=1;
                message("You brewed a Liquid Gold potion. You received 200 gold.");
                gotobrewery();
            }else{
                message("You require 4 enemy blood and 1 flint for that. You only have " + ingredient[6].quantity + " enemy blood and " + ingredient[3].quantity + " flint.")
            }
        });
        $("#Summon").click(function(){
            if(ingredient[6].quantity>=2 && ingredient[2].quantity>=2){
              demonrest=0;
                frostlordrest=0;
                angelrest=0;
                djinnrest=0;
                ingredient[6].quantity-=2;
                ingredient[2].quantity-=2;
                message("You brewed a Summoner potion. All your summons are fully rested and can now be used.");
                gotobrewery();
            }else{
                message("You require 4 enemy blood and 2 mushrooms for that. You only have " + ingredient[6].quantity + " blood and " + ingredient[2].quantity + " mushroom.")
            }
        });
        $("#Intelligence").click(function(){
            if(ingredient[4].quantity>=1 && ingredient[8].quantity>=4){
              researchers+=1;
                ingredient[4].quantity-=1;
                ingredient[8].quantity-=4;
                message("You brewed an Intelligence potion. You now have one more researcher.");
                gotobrewery();
            }else{
                message("You require 1 pine needle and 4 raw meat for that. You only have " + ingredient[4].quantity + " pine needles and " + ingredient[8].quantity + " raw meat.")
            }
        });
        $("#Flourish").click(function(){
            if(ingredient[5].quantity>=3 && ingredient[9].quantity>=1){
                ingredient[5].quantity-=3;
                ingredient[9].quantity-=1;
                for(var i =1;i<70;i++){
                    $("#space" + i).data("loot",0)
                }
                message("You brewed a Flourish potion. All items in areas have been replenished and will be found when explored.");
                gotobrewery();
            }else{
                message("You require 3 wheat and 1 slime for that. You only have " + ingredient[5].quantity + " wheat and " + ingredient[9].quantity + " slime.")
            }
        });
        $("#Refresh").click(function(){
            if(ingredient[5].quantity>=1 && ingredient[8].quantity>=4){
                for (var i=1;i<groupindex;i++){
                    groups[i].hasmoved=false;
                }
                $('.icon').removeClass("grayicon");
                ingredient[5].quantity-=3;
                ingredient[8].quantity-=3;
                message("You brewed a refresh potion. All groups can move again this turn.");
                gotobrewery();
            }else{
                message("You require 3 wheat and 3 raw meat for that. You only have " + ingredient[5].quantity + " wheat and " + ingredient[8].quantity + " raw meat.")
            }
        });
    }



//create bad units/////////////////////////////////////////////////////////////////////

    var Eunits=new Array();
    var Eindex=0;
    //<10
    function Goblin(e,Egroupindex,level){
        this.type= "Goblin";
        this.name="Goblin";
        this.level=level;

        if(level===1){
            this.attack= 20;
            this.health= 30;
            this.maxhealth=30;
        }
        if(level===2){
            this.attack= 30;
            this.health= 40;//40
            this.maxhealth=40;//40
        }
        if(level===3){
            this.attack= 40;
            this.health= 60;
            this.maxhealth=60;
        }
        this.defense= 15;
        this.resistance= 15;

        this.sleep=0;
        this.immobilized=0;
        this.blind=0;
        this.silenced=0;
        this.poison=0;
        this.enfeeble=0;
        this.lightning=1;
        this.fire=1;
        this.ice=1;

        this.index=e;
        this.usedaction=false;
        this.alive=true;
        this.charge= "None";
        this.curleft=0;
        this.curtop=25;
        this.group=Egroupindex;
        this.description="Kill one, and another will be around the corner.";
        this.picture="<div class='Ebarrackpic' id='E"+ e + "'><img src='Pictures/Enemies/goblin.gif'/></div>";
        this.image='Pictures/Enemies/goblin.gif';
        //Eindex+=1;
    }
    function Spitter(e,Egroupindex,level){
        this.type= "Spitter";
        this.name="Spitter";
        this.level=level;

        if(level===1){
            this.attack= 10;
            this.health= 30;
            this.maxhealth=30;
        }
        if(level===2){
            this.attack= 20;
            this.health= 50;
            this.maxhealth=50;
        }
        if(level===3){
            this.attack= 30;
            this.health= 70;
            this.maxhealth=70;
        }
        this.defense= 10;
        this.resistance= 10;

        this.sleep=0;
        this.immobilized=0;
        this.blind=0;
        this.silenced=0;
        this.poison=0;
        this.enfeeble=0;
        this.lightning=1;
        this.fire=1;
        this.ice=1;


        this.usedspecial=false;
        this.usedimmobilized=3;
        this.index=e;
        this.usedaction=false;
        this.alive=true;
        this.charge= "None";
        this.curleft=0;
        this.curtop=25;
        this.group=Egroupindex;
        this.description="These long range fighters can hit any target in a straight line, and can blind with it's sticky attack.";
        this.picture="<div class='Ebarrackpic' id='E"+ e + "'><img src='Pictures/Enemies/Spitter.gif' /></div>";
        this.image='Pictures/Enemies/Spitter.gif';
      //  Eindex+=1;
    }
    //20
    function Gremlin(e,Egroupindex,level){
        this.type= "Gremlin";
        this.name="Gremlin";
        this.level=level;

        if(level===1){
            this.attack= 40;
            this.health= 15;
            this.maxhealth=15;
        }
        if(level===2){
            this.attack= 50;
            this.health= 20;//40
            this.maxhealth=20;//40
        }
        if(level===3){
            this.attack= 70;
            this.health= 30;
            this.maxhealth=30;
        }
        this.defense= 5;
        this.resistance= 5;

        this.sleep=0;
        this.immobilized=0;
        this.blind=0;
        this.silenced=0;
        this.poison=0;
        this.enfeeble=0;
        this.lightning=1;
        this.fire=1;
        this.ice=1;

        this.usedspecial=false;
        this.index=e;
        this.usedaction=false;
        this.alive=true;
        this.charge= "None";
        this.curleft=0;
        this.curtop=25;
        this.group=Egroupindex;
        this.description="While weak alone, these devious creatures can swarm in high numbers.";
        this.picture="<div class='Ebarrackpic' id='E"+ e + "'><img src='Pictures/Enemies/Gremlin.gif'/></div>";
        this.image='Pictures/Enemies/Gremlin.gif';
    }
    function Wolf(e,Egroupindex,level){
        this.type= "Wolf";
        this.name="Wolf";
        this.level=level;


        if(level===1){
            this.attack= 40;
            this.health= 40;
            this.maxhealth=40;
        }
        if(level===2){
            this.attack= 50;
            this.health= 60;
            this.maxhealth=60;
        }
        if(level===3){
            this.attack= 60;
            this.health= 80;
            this.maxhealth=80;
        }
        this.defense= 20;
        this.resistance= 10;

        this.sleep=0;
        this.immobilized=0;
        this.blind=0;
        this.silenced=0;
        this.poison=0;
        this.enfeeble=0;
        this.lightning=1;
        this.fire=1;
        this.ice=1;

        this.usedspecial=false;
        this.index=e;
        this.usedaction=false;
        this.alive=true;
        this.charge= "None";
        this.curleft=0;
        this.curtop=25;
        this.group=Egroupindex;
        this.description="These pack creatures are intelligent and fierce.";
        this.picture="<div class='Ebarrackpic' id='E"+ e + "'><img src='Pictures/Enemies/wolf.gif' /></div>";
        this.image='Pictures/Enemies/wolf.gif';
    }
    function FireElemental(e,Egroupindex,level){
        this.type= "Fire Elemental";
        this.name="Fire Elemental";
        this.level=level;

        if(level===1){
            this.attack= 20;
            this.health= 40;
            this.maxhealth=40;
        }
        if(level===2){
            this.attack= 40;
            this.health= 60;
            this.maxhealth=60;
        }
        if(level===3){
            this.attack= 60;
            this.health= 80;
            this.maxhealth=80;
        }
        this.defense= 10;
        this.resistance= 15;


        this.sleep=0;
        this.immobilized=0;
        this.blind=0;
        this.silenced=0;
        this.poison=0;
        this.enfeeble=0;
        this.lightning=1;
        this.fire=.5;
        this.ice=2;

        this.usedspecial=false;
        this.index=e;
        this.usedaction=false;
        this.alive=true;
        this.charge= 0;
        this.curleft=0;
        this.curtop=25;
        this.group=Egroupindex;
        this.description="While the weakest of the elementals, these fiery beasts can shoot flames at any ally for only one charge.";
        this.picture="<div class='Ebarrackpic' id='E"+ e + "'><img src='Pictures/Enemies/Fire Elemental.gif'/></div>";
        this.image='Pictures/Enemies/Fire Elemental.gif';
    }
    function Clunker(e,Egroupindex,level){
        this.type= "Clunker";
        this.name="Clunker";
        this.level=level;

        if(level===1){
            this.attack= 20;
            this.health= 70;
            this.maxhealth=70;
        }
        if(level===2){
            this.attack= 30;
            this.health= 100;//40
            this.maxhealth=100;//40
        }
        if(level===3){
            this.attack= 40;
            this.health= 140;
            this.maxhealth=140;
        }
        this.defense= 20;
        this.resistance= 20;

        this.sleep=0;
        this.immobilized=0;
        this.blind=0;
        this.silenced=0;
        this.poison=0;
        this.enfeeble=0;
        this.lightning=2;
        this.fire=1;
        this.ice=1;

        this.usedspecial=false;
        this.index=e;
        this.usedaction=false;
        this.alive=true;
        this.charge= "None";
        this.curleft=0;
        this.curtop=25;
        this.group=Egroupindex;
        this.description="These big machines can take alot of abuse.";
        this.picture="<div class='Ebarrackpic' id='E"+ e + "'><img src='Pictures/Enemies/Clunker.gif'/></div>";
        this.image='Pictures/Enemies/Clunker.gif';
    }
    //30
    function Warrior(e,Egroupindex,level){
        this.type= "Warrior";
        this.name="Warrior";
        this.level=level;

        if(level===1){
            this.attack= 40;
            this.health= 60;
            this.maxhealth=60;
        }
        if(level===2){
            this.attack= 60;
            this.health= 90;
            this.maxhealth=90;
        }
        if(level===3){
            this.attack= 80;
            this.health= 120;
            this.maxhealth=120;
        }
        this.defense= 30;
        this.resistance= 0;

        this.sleep=0;
        this.immobilized=0;
        this.blind=0;
        this.silenced=0;
        this.poison=0;
        this.enfeeble=0;
        this.lightning=1;
        this.fire=1;
        this.ice=1;

        this.usedspecial=false;
        this.index=e;
        this.usedaction=false;
        this.alive=true;
        this.charge= "None";
        this.curleft=0;
        this.curtop=25;
        this.group=Egroupindex;
        this.description="Masters of the close combat, these warriors can do double damage if they don't have to move first. Vunerable to Magic.";
        this.picture="<div class='Ebarrackpic' id='E"+ e + "'><img src='Pictures/Enemies/warrior.gif' /></div>";
        this.image='Pictures/Enemies/warrior.gif';
        if (e===-1){
            this.picture="";
            this.image='';
            this.alive=false;
            this.curleft=1;
            this.curtop=424;
        }
    }
    function Sparrow(e,Egroupindex,level){
        this.type= "Sparrow";
        this.name="Sparrow";
        this.level=level;

        if(level===1){
            this.attack= 15;
            this.health= 20;//40
            this.maxhealth=20;//40
        }
        if(level===2){
            this.attack= 25;
            this.health= 30;
            this.maxhealth=30;
        }
        if(level===3){
            this.attack= 35;
            this.health= 40;
            this.maxhealth=40;
        }
        this.defense= 10;
        this.resistance= 10;

        this.sleep=0;
        this.immobilized=0;
        this.blind=0;
        this.silenced=0;
        this.poison=0;
        this.enfeeble=0;
        this.lightning=1;
        this.fire=1;
        this.ice=1;

        this.usedspecial=false;
        this.index=e;
        this.usedaction=false;
        this.alive=true;
        this.charge= "None";
        this.curleft=0;
        this.curtop=25;
        this.group=Egroupindex;
        this.description="These pesky creatures can soar instantly to any ally.";
        this.picture="<div class='Ebarrackpic' id='E"+ e + "'><img src='Pictures/Enemies/Sparrow.gif'/></div>";
        this.image='Pictures/Enemies/Sparrow.gif';
    }
    function LightningElemental(e,Egroupindex,level){
        this.type= "Lightning Elemental";
        this.name="Lightning Elemental";
        this.level=level;

        if(level===1){
            this.attack= 100;
            this.health= 30;
            this.maxhealth=30;
        }
        if(level===2){
            this.attack= 150;
            this.health= 40;
            this.maxhealth=40;
        }
        if(level===3){
            this.attack= 200;
            this.health= 50;
            this.maxhealth=50;
        }
        this.defense= 10;
        this.resistance= 40;

        this.sleep=0;
        this.immobilized=0;
        this.blind=0;
        this.silenced=0;
        this.poison=0;
        this.enfeeble=0;
        this.lightning=.5;
        this.fire=1;
        this.ice=1;

        this.usedspecial=false;
        this.index=e;
        this.usedaction=false;
        this.alive=true;
        this.charge= 0;
        this.curleft=0;
        this.curtop=25;
        this.group=Egroupindex;
        this.description="Most powerful of the elementals, they can shoot a bolt anywhere for a high cost of 3 charge.";
        this.picture="<div class='Ebarrackpic' id='E"+ e + "'><img src='Pictures/Enemies/Lightning Elemental.gif'/></div>";
        this.image='Pictures/Enemies/Lightning Elemental.gif';
    }
//40
    function IceElemental(e,Egroupindex,level){
        this.type= "Ice Elemental";
        this.name="Ice Elemental";
        this.level=level;

        if(level===1){
            this.attack= 70;
            this.health= 60;
            this.maxhealth=60;
        }
        if(level===2){
            this.attack= 90;
            this.health= 80;
            this.maxhealth=80;
        }
        if(level===3){
            this.attack= 110;
            this.health= 100;
            this.maxhealth=100;
        }
        this.defense= 20;
        this.resistance= 5;

        this.sleep=0;
        this.immobilized=0;
        this.blind=0;
        this.silenced=0;
        this.poison=0;
        this.enfeeble=0;
        this.lightning=1;
        this.fire=2;
        this.ice=.5;

        this.usedspecial=false;
        this.index=e;
        this.usedaction=false;
        this.alive=true;
        this.charge= 0;
        this.curleft=0;
        this.curtop=25;
        this.group=Egroupindex;
        this.description="More powerful, yet slower than the flame elemental, these chilly creatures can do ice damage two spaces away for 2 charge.";
        this.picture="<div class='Ebarrackpic' id='E"+ e + "'><img src='Pictures/Enemies/Ice Elemental.gif'/></div>";
        this.image='Pictures/Enemies/Ice Elemental.gif';
    }
    function Spider(e,Egroupindex,level){
        this.type= "Spider";
        this.name="Spider";
        this.level=level;

        if(level===1){
            this.attack= 0;
            this.health= 100;
            this.maxhealth=100;
        }
        if(level===2){
            this.attack= 0;
            this.health= 120;
            this.maxhealth=120;
        }
        if(level===3){
            this.attack= 0;
            this.health= 140;
            this.maxhealth=140;
        }
        this.defense= 25;
        this.resistance= 25;

        this.sleep=0;
        this.immobilized=0;
        this.blind=0;
        this.silenced=0;
        this.poison=0;
        this.enfeeble=0;
        this.lightning=1;
        this.fire=1;
        this.ice=1;

        this.usedspecial=false;
        this.index=e;
        this.usedaction=false;
        this.alive=true;
        this.charge= "None";
        this.curleft=0;
        this.curtop=25;
        this.group=Egroupindex;
        this.description="While unable to do damage, they can poison and drag units to them with their web.";
        this.picture="<div class='Ebarrackpic' id='E"+ e + "'><img src='Pictures/Enemies/spider.gif' /></div>";
        this.image='Pictures/Enemies/spider.gif';
    }
    function Magnet(e,Egroupindex,level){
        this.type= "Magnet";
        this.name="Magnet";
        this.level=level;

        if(level===1){
            this.attack= 30;
            this.health= 50;
            this.maxhealth=50;
        }
        if(level===2){
            this.attack= 40;
            this.health= 80;//40
            this.maxhealth=80;//40
        }
        if(level===3){
            this.attack=50;
            this.health= 110;
            this.maxhealth=110;
        }
        this.defense= 15;
        this.resistance= 15;

        this.sleep=0;
        this.immobilized=0;
        this.blind=0;
        this.silenced=0;
        this.poison=0;
        this.enfeeble=0;
        this.lightning=2;
        this.fire=1;
        this.ice=1;

        this.usedspecial=false;
        this.index=e;
        this.usedaction=false;
        this.alive=true;
        this.charge= "None";
        this.curleft=0;
        this.curtop=25;
        this.group=Egroupindex;
        this.description="These machines redirect and catch all arrows.";
        this.picture="<div class='Ebarrackpic' id='E"+ e + "'><img src='Pictures/Enemies/Magnet.gif'/></div>";
        this.image='Pictures/Enemies/Magnet.gif';
    }
//50
    function Werewolf(e,Egroupindex,level){
        this.type= "Werewolf";
        this.name="Werewolf";
        this.level=level;

        if(level===1){
            this.attack= 40;
            this.health= 70;
            this.maxhealth=70;
        }
        if(level===2){
            this.attack= 60;
            this.health= 110;
            this.maxhealth=110;
        }
        if(level===3){
            this.attack= 80;
            this.health= 150;
            this.maxhealth=150;
        }
        this.defense= 20;
        this.resistance= 40;

        this.sleep=0;
        this.immobilized=0;
        this.blind=0;
        this.silenced=0;
        this.poison=0;
        this.enfeeble=0;
        this.lightning=1;
        this.fire=1;
        this.ice=1;

        this.usedspecial=false;
        this.index=e;
        this.usedaction=false;
        this.alive=true;
        this.charge= "None";
        this.curleft=0;
        this.curtop=25;
        this.group=Egroupindex;
        this.description="These savage beasts have high resistance to magic, and can heal everyturn.";
        this.picture="<div class='Ebarrackpic' id='E"+ e + "'><img src='Pictures/Enemies/werewolf.gif' /></div>";
        this.image='Pictures/Enemies/werewolf.gif';
    }
    function Wisp(e,Egroupindex,level){
        this.type= "Wisp";
        this.name="Wisp";
        this.level=level;

        if(level===1){
            this.attack= 40;
            this.health= 40;
            this.maxhealth=40;
        }
        if(level===2){
            this.attack= 60;
            this.health= 60;
            this.maxhealth=60;
        }
        if(level===3){
            this.attack= 80;
            this.health= 80;
            this.maxhealth=80;
        }
        this.defense= 0;
        this.resistance= 30;


        this.sleep=0;
        this.immobilized=0;
        this.blind=0;
        this.silenced=0;
        this.poison=0;
        this.enfeeble=0;
        this.lightning=1;
        this.fire=2;
        this.ice=.5;

        this.usedspecial=false;
        this.index=e;
        this.usedaction=false;
        this.alive=true;
        this.charge= 0;
        this.curleft=0;
        this.curtop=25;
        this.group=Egroupindex;
        this.description="These flittery creatures are hard to catch. They can use icy magic which can put units to sleep.";
        this.picture="<div class='Ebarrackpic' id='E"+ e + "'><img src='Pictures/Enemies/Wisp.gif'/></div>";
        this.image='Pictures/Enemies/Wisp.gif';
    }
    function Sounddepressor(e,Egroupindex,level){
        this.type= "Sounddepressor";
        this.name="Sounddepressor";
        this.level=level;

        if(level===1){
            this.attack= 40;
            this.health= 50;
            this.maxhealth=50;
        }
        if(level===2){
            this.attack= 50;
            this.health= 80;//40
            this.maxhealth=80;//40
        }
        if(level===3){
            this.attack=60;
            this.health= 110;
            this.maxhealth=110;
        }
        this.defense= 15;
        this.resistance= 50;

        this.sleep=0;
        this.immobilized=0;
        this.blind=0;
        this.silenced=0;
        this.poison=0;
        this.enfeeble=0;
        this.lightning=2;
        this.fire=1;
        this.ice=1;

        this.usedspecial=false;
        this.index=e;
        this.usedaction=false;
        this.alive=true;
        this.charge= "None";
        this.curleft=0;
        this.curtop=25;
        this.group=Egroupindex;
        this.description="These machines prevent the use of all magical attacks against enemies.";
        this.picture="<div class='Ebarrackpic' id='E"+ e + "'><img src='Pictures/Enemies/Sounddepressor.gif'/></div>";
        this.image='Pictures/Enemies/Sounddepressor.gif';
    }
    function Hellhound(e,Egroupindex,level){
        this.type= "Hellhound";
        this.name="Hellhound";
        this.level=level;

        if(level===1){
            this.attack= 70;
            this.health= 30;
            this.maxhealth=30;
        }
        if(level===2){
            this.attack= 100;
            this.health= 50;
            this.maxhealth=50;
        }
        if(level===3){
            this.attack= 130;
            this.health= 70;
            this.maxhealth=70;
        }
        this.defense= 0;
        this.resistance= 0;

        this.sleep=0;
        this.immobilized=0;
        this.blind=0;
        this.silenced=0;
        this.poison=0;
        this.enfeeble=0;
        this.lightning=1;
        this.fire=1;
        this.ice=1;

        this.usedspecial=false;
        this.index=e;
        this.usedaction=false;
        this.alive=true;
        this.charge= "None";
        this.curleft=0;
        this.curtop=25;
        this.group=Egroupindex;
        this.description="These fast beasts will do large fire damage to adjacent allies.";
        this.picture="<div class='Ebarrackpic' id='E"+ e + "'><img src='Pictures/Enemies/hellhound.gif' /></div>";
        this.image='Pictures/Enemies/hellhound.gif';
    }
    //60
    function Vampire(e,Egroupindex,level){
        this.type= "Vampire";
        this.name="Vampire";
        this.level=level;

        if(level===1){
            this.attack= 60;
            this.health= 80;
            this.maxhealth=80;
        }
        if(level===2){
            this.attack= 80;
            this.health= 100;
            this.maxhealth=100;
        }
        if(level===3){
            this.attack= 100;
            this.health= 120;
            this.maxhealth=120;
        }
        this.defense= 20;
        this.resistance= 20;

        this.sleep=0;
        this.immobilized=0;
        this.blind=0;
        this.silenced=0;
        this.poison=0;
        this.enfeeble=0;
        this.lightning=1;
        this.fire=1;
        this.ice=1;

        this.usedspecial=false;
        this.index=e;
        this.usedaction=false;
        this.alive=true;
        this.charge= "None";
        this.curleft=0;
        this.curtop=25;
        this.group=Egroupindex;
        this.description="Quick and dangerous, these creatures gain life for every damage dealt.";
        this.picture="<div class='Ebarrackpic' id='E"+ e + "'><img src='Pictures/Enemies/vampire.gif'/></div>";
        this.image='Pictures/Enemies/vampire.gif';
    }
    function Bear(e,Egroupindex,level){
        this.type= "Bear";
        this.name="Bear";
        this.level=level;

        if(level===1){
            this.attack= 60;
            this.health= 100;
            this.maxhealth=100;
        }
        if(level===2){
            this.attack= 80;
            this.health= 120;
            this.maxhealth=120;
        }
        if(level===3){
            this.attack= 100;
            this.health= 140;
            this.maxhealth=140;
        }
        this.defense= 25;
        this.resistance= 25;

        this.sleep=0;
        this.immobilized=0;
        this.blind=0;
        this.silenced=0;
        this.poison=0;
        this.enfeeble=0;
        this.lightning=1;
        this.fire=1;
        this.ice=1;

        this.usedspecial=false;
        this.index=e;
        this.usedaction=false;
        this.alive=true;
        this.charge= "None";
        this.curleft=0;
        this.curtop=25;
        this.group=Egroupindex;
        this.description="These creatures love to attack the eyes and cause blindness.";
        this.picture="<div class='Ebarrackpic' id='E"+ e + "'><img src='Pictures/Enemies/bear.gif' /></div>";
        this.image='Pictures/Enemies/bear.gif';
    }
    function Cannon(e,Egroupindex,level){
        this.type= "Cannon";
        this.name="Cannon";
        this.level=level;

        if(level===1){
            this.attack= 20;
            this.health= 90;
            this.maxhealth=90;
        }
        if(level===2){
            this.attack= 40;
            this.health= 120;
            this.maxhealth=120;
        }
        if(level===3){
            this.attack=60;
            this.health= 150;
            this.maxhealth=150;
        }
        this.defense= 20;
        this.resistance= 40;

        this.sleep=0;
        this.immobilized=0;
        this.blind=0;
        this.silenced=0;
        this.poison=0;
        this.enfeeble=0;
        this.lightning=2;
        this.fire=1;
        this.ice=1;

        this.charge= 0;
        this.usedspecial=false;
        this.index=e;
        this.usedaction=false;
        this.alive=true;
        this.curleft=0;
        this.curtop=25;
        this.group=Egroupindex;
        this.description="These machines charge every turn, and if an ally moves into it's line of sight, it will fire. It will overload at 5 charge!";
        this.picture="<div class='Ebarrackpic' id='E"+ e + "'><img src='Pictures/Enemies/Cannon.gif'/></div>";
        this.image='Pictures/Enemies/Cannon.gif';
    }
//70
    function Beekeeper(e,Egroupindex,level){
        this.type= "Beekeeper";
        this.name="Beekeeper";
        this.level=level;

        if(level===1){
            this.attack= 0;
            this.health= 80;
            this.maxhealth=80;
        }
        if(level===2){
            this.attack= 0;
            this.health= 100;
            this.maxhealth=100;
        }
        if(level===3){
            this.attack= 0;
            this.health= 120;
            this.maxhealth=120;
        }
        this.defense= 20;
        this.resistance= 20;

        this.sleep=0;
        this.immobilized=0;
        this.blind=0;
        this.silenced=0;
        this.poison=0;
        this.enfeeble=0;
        this.lightning=1;
        this.fire=1;
        this.ice=1;


        this.usedspecial=false;
        this.usedsleep=3;
        this.index=e;
        this.usedaction=false;
        this.alive=true;
        this.charge= 0;
        this.curleft=0;
        this.curtop=25;
        this.group=Egroupindex;
        this.description="This master of insects will fling an endless supply of bees at you.";
        this.picture="<div class='Ebarrackpic' id='E"+ e + "'><img src='Pictures/Enemies/Beekeeper.gif' /></div>";
        this.image='Pictures/Enemies/Beekeeper.gif';
    }
    function Bee(e,Egroupindex,level){
        this.type= "Bee";
        this.name="Bee";
        this.level=level;

        if(level===1){
            this.attack= 15;
            this.health= 20;//40
            this.maxhealth=20;//40
        }
        if(level===2){
            this.attack= 25;
            this.health= 30;
            this.maxhealth=30;
        }
        if(level===3){
            this.attack= 35;
            this.health= 40;
            this.maxhealth=40;
        }
        this.defense= 10;
        this.resistance= 10;

        this.sleep=0;
        this.immobilized=0;
        this.blind=0;
        this.silenced=0;
        this.poison=0;
        this.enfeeble=0;
        this.lightning=1;
        this.fire=1;
        this.ice=1;

        this.usedspecial=false;
        this.index=e;
        this.usedaction=false;
        this.alive=true;
        this.charge= "None";
        this.curleft=0;
        this.curtop=25;
        this.group=Egroupindex;
        this.description="These flying bugs can swarm quickly. Kill the keeper to stop them.";
        this.picture="<div class='Ebarrackpic' id='E"+ e + "'><img src='Pictures/Enemies/Bee.gif'/></div>";
        this.image='Pictures/Enemies/Bee.gif';
    }
    function Flamewraith(e,Egroupindex,level){
        this.type= "Flamewraith";
        this.name="Flamewraith";
        this.level=level;

        if(level===1){
            this.attack= 50;
            this.health= 80;
            this.maxhealth=80;
        }
        if(level===2){
            this.attack= 70;
            this.health= 100;
            this.maxhealth=100;
        }
        if(level===3){
            this.attack= 90;
            this.health= 120;
            this.maxhealth=120;
        }
        this.defense= 20;
        this.resistance= 20;

        this.sleep=0;
        this.immobilized=0;
        this.blind=0;
        this.silenced=0;
        this.poison=0;
        this.enfeeble=0;
        this.lightning=1;
        this.fire=.5;
        this.ice=2;

        this.usedspecial=false;
        this.phasedout=false;
        this.index=e;
        this.usedaction=false;
        this.alive=true;
        this.charge= 0;
        this.curleft=0;
        this.curtop=25;
        this.group=Egroupindex;
        this.description="Wraiths can phase out and then become invincible. Use an elemental attack to phase them back in, and if its ice, it will do damage.";
        this.picture="<div class='Ebarrackpic' id='E"+ e + "'><img src='Pictures/Enemies/flamewraith.gif'/></div>";
        this.image='Pictures/Enemies/flamewraith.gif';
    }
//80
    function Necromancer(e,Egroupindex,level){
        this.type= "Necromancer";
        this.name="Necromancer";
        this.level=level;

        if(level===1){
            this.attack= 0;
            this.health= 110;
            this.maxhealth=110;
        }
        if(level===2){
            this.attack= 0;
            this.health= 130;
            this.maxhealth=130;
        }
        if(level===3){
            this.attack= 0;
            this.health= 150;
            this.maxhealth=150;
        }
        this.defense= 20;
        this.resistance= 30;

        this.sleep=0;
        this.immobilized=0;
        this.blind=0;
        this.silenced=0;
        this.poison=0;
        this.enfeeble=0;
        this.lightning=1;
        this.fire=1;
        this.ice=1;


        this.usedspecial=false;
        this.usedsleep=3;
        this.index=e;
        this.usedaction=false;
        this.alive=true;
        this.charge= 0;
        this.curleft=0;
        this.curtop=25;
        this.group=Egroupindex;
        this.description="This master of death will raise the dead and chuck them at you.";
        this.picture="<div class='Ebarrackpic' id='E"+ e + "'><img src='Pictures/Enemies/Necromancer.gif' /></div>";
        this.image='Pictures/Enemies/Necromancer.gif';
    }
    function Zombie(e,Egroupindex,level){
        this.type= "Zombie";
        this.name="Zombie";
        this.level=level;

        if(level===1){
            this.attack= 40;
            this.health= 60;//40
            this.maxhealth=60;//40
        }
        if(level===2){
            this.attack= 55;
            this.health= 80;
            this.maxhealth=80;
        }
        if(level===3){
            this.attack= 70;
            this.health= 100;
            this.maxhealth=100;
        }
        this.defense= 25;
        this.resistance= 15;

        this.sleep=0;
        this.immobilized=0;
        this.blind=0;
        this.silenced=0;
        this.poison=0;
        this.enfeeble=0;
        this.lightning=1;
        this.fire=1;
        this.ice=1;

        this.usedspecial=false;
        this.index=e;
        this.usedaction=false;
        this.alive=true;
        this.charge= "None";
        this.curleft=0;
        this.curtop=25;
        this.group=Egroupindex;
        this.description="These walking dead can get out of hand. Kill the Necromancer!";
        this.picture="<div class='Ebarrackpic' id='E"+ e + "'><img src='Pictures/Enemies/Zombie.gif'/></div>";
        this.image='Pictures/Enemies/Zombie.gif';
    }
    function Waterwraith(e,Egroupindex,level){
        this.type= "Waterwraith";
        this.name="Waterwraith";
        this.level=level;

        if(level===1){
            this.attack= 60;
            this.health= 100;
            this.maxhealth=100;
        }
        if(level===2){
            this.attack= 80;
            this.health= 120;
            this.maxhealth=120;
        }
        if(level===3){
            this.attack= 100;
            this.health= 140;
            this.maxhealth=140;
        }
        this.defense= 20;
        this.resistance= 20;


        this.sleep=0;
        this.immobilized=0;
        this.blind=0;
        this.silenced=0;
        this.poison=0;
        this.enfeeble=0;
        this.lightning=2;
        this.fire=1;
        this.ice=1;

        this.usedspecial=false;
        this.phasedout=false;
        this.index=e;
        this.usedaction=false;
        this.alive=true;
        this.charge= 0;
        this.curleft=0;
        this.curtop=25;
        this.group=Egroupindex;
        this.description="Wraiths can phase out and then become invincible. Use an elemental attack to phase them back in, and if its Lightning, it will do damage.";
        this.picture="<div class='Ebarrackpic' id='E"+ e + "'><img src='Pictures/Enemies/waterwraith.gif'/></div>";
        this.image='Pictures/Enemies/waterwraith.gif';
    }
    //90
    function Frostwraith(e,Egroupindex,level){
        this.type= "Frostwraith";
        this.name="Frostwraith";
        this.level=level;

        if(level===1){
            this.attack= 60;
            this.health= 150;
            this.maxhealth=150;
        }
        if(level===2){
            this.attack= 80;
            this.health= 180;
            this.maxhealth=180;
        }
        if(level===3){
            this.attack= 100;
            this.health= 210;
            this.maxhealth=210;
        }
        this.defense= 20;
        this.resistance= 20;


        this.sleep=0;
        this.immobilized=0;
        this.blind=0;
        this.silenced=0;
        this.poison=0;
        this.enfeeble=0;
        this.lightning=1;
        this.fire=2;
        this.ice=.5;

        this.usedspecial=false;
        this.phasedout=false;
        this.index=e;
        this.usedaction=false;
        this.alive=true;
        this.charge= 0;
        this.curleft=0;
        this.curtop=25;
        this.group=Egroupindex;
        this.description="Wraiths can phase out and then become invincible. Use an elemental attack to phase them back in, and if its fire, it will do damage.";
        this.picture="<div class='Ebarrackpic' id='E"+ e + "'><img src='Pictures/Enemies/frostwraith.gif'/></div>";
        this.image='Pictures/Enemies/frostwraith.gif';
    }
    function Assassin(e,Egroupindex,level){
        this.type= "Assassin";
        this.name="Assassin";
        this.level=level;

        if(level===1){
            this.attack= 30;
            this.health= 80;
            this.maxhealth=80;
        }
        if(level===2){
            this.attack= 50;
            this.health= 100;
            this.maxhealth=100;
        }
        if(level===3){
            this.attack= 70;
            this.health= 120;
            this.maxhealth=120;
        }
        this.defense= 20;
        this.resistance= 20;

        this.sleep=0;
        this.immobilized=0;
        this.blind=0;
        this.silenced=0;
        this.poison=0;
        this.enfeeble=0;
        this.lightning=1;
        this.fire=1;
        this.ice=1;


        this.usedspecial=false;
        this.usedsleep=3;
        this.index=e;
        this.usedaction=false;
        this.alive=true;
        this.charge= "None";
        this.curleft=0;
        this.curtop=25;
        this.group=Egroupindex;
        this.description="These long range fighters can hit any target, and, with their poisons, can sometimes put their targets to sleep.";
        this.picture="<div class='Ebarrackpic' id='E"+ e + "'><img src='Pictures/Enemies/Assassin.gif' /></div>";
        this.image='Pictures/Enemies/Assassin.gif';
    }
    //100
    function Shaman(e,Egroupindex,level){
        this.type= "Shaman";
        this.name="Shaman";
        this.level=level;

        if(level===1){
            this.attack= 0;
            this.health= 130;
            this.maxhealth=130;
        }
        if(level===2){
            this.attack= 0;
            this.health= 150;
            this.maxhealth=150;
        }
        if(level===3){
            this.attack= 0;
            this.health= 170;
            this.maxhealth=170;
        }
        this.defense= 25;
        this.resistance= 35;

        this.sleep=0;
        this.immobilized=0;
        this.blind=0;
        this.silenced=0;
        this.poison=0;
        this.enfeeble=0;
        this.lightning=1;
        this.fire=1;
        this.ice=1;


        this.usedspecial=false;
        this.usedsleep=3;
        this.index=e;
        this.usedaction=false;
        this.alive=true;
        this.charge= 0;
        this.curleft=0;
        this.curtop=25;
        this.group=Egroupindex;
        this.description="This master of earth will send it's rocky friend to smash you.";
        this.picture="<div class='Ebarrackpic' id='E"+ e + "'><img src='Pictures/Enemies/Shaman.gif' /></div>";
        this.image='Pictures/Enemies/Shaman.gif';
    }
    function Golem(e,Egroupindex,level){
        this.type= "Golem";
        this.name="Golem";
        this.level=level;

        if(level===1){
            this.attack= 50;
            this.health= 160;//40
            this.maxhealth=160;//40
        }
        if(level===2){
            this.attack= 60;
            this.health= 200;
            this.maxhealth=200;
        }
        if(level===3){
            this.attack= 70;
            this.health= 240;
            this.maxhealth=240;
        }
        this.defense= 60;
        this.resistance= 50;

        this.sleep=0;
        this.immobilized=0;
        this.blind=0;
        this.silenced=0;
        this.poison=0;
        this.enfeeble=0;
        this.lightning=1;
        this.fire=1;
        this.ice=1;

        this.usedspecial=false;
        this.index=e;
        this.usedaction=false;
        this.alive=true;
        this.charge= "None";
        this.curleft=0;
        this.curtop=25;
        this.group=Egroupindex;
        this.description="Touch as rocks, kill the shaman, or this rocky creature is will keep coming back.";
        this.picture="<div class='Ebarrackpic' id='E"+ e + "'><img src='Pictures/Enemies/golem.gif'/></div>";
        this.image='Pictures/Enemies/golem.gif';
    }
    function Dragon(e,Egroupindex,level){
        this.type= "Dragon";
        this.name="Dragon";
        this.level=level;

        if(level===1){
            this.attack= 50;
            this.health= 160;//40
            this.maxhealth=160;//40
        }
        if(level===2){
            this.attack= 60;
            this.health= 200;
            this.maxhealth=200;
        }
        if(level===3){
            this.attack= 70;
            this.health= 240;
            this.maxhealth=240;
        }

        if(level===1){
            this.attack= 80;
            this.health= 200;
            this.maxhealth=200;
        }
        if(level===2){
            this.attack= 100;
            this.health= 250;
            this.maxhealth=250;
        }
        if(level===3){
            this.attack= 120;
            this.health= 300;
            this.maxhealth=300;
        }
        this.defense= 40;
        this.resistance= 80;

        this.sleep=0;
        this.immobilized=0;
        this.blind=0;
        this.silenced=0;
        this.poison=0;
        this.enfeeble=0;
        this.lightning=1;
        this.fire=1;
        this.ice=1;

        this.usedspecial=false;
        this.index=e;
        this.usedaction=false;
        this.alive=true;
        this.charge= 0;
        this.curleft=0;
        this.curtop=25;
        this.group=Egroupindex;
        this.description="Something is coming...";
        this.picture="<div class='Ebarrackpic' id='E"+ e + "'><img src='Pictures/Enemies/Dragon.gif'/></div>";
        this.image='Pictures/Enemies/Dragon.gif';
    }
    function Hand(e,Egroupindex,level){
        this.type= "Hand";
        this.name="Hand";
        this.level=level;



        if(level===1){
            this.attack= 80;
            this.defense= 30;
            this.resistance= 0;
            this.health= 150;//40
            this.maxhealth=150;//40
        }
        if(level===2){
            this.attack= 100;
            this.defense= 40;
            this.resistance= 0;
            this.health= 200;
            this.maxhealth=200;
        }
        if(level===3){
            this.attack= 120;
            this.defense= 50;
            this.resistance= 0;
            this.health= 250;
            this.maxhealth=250;
        }

        this.sleep=0;
        this.immobilized=0;
        this.blind=0;
        this.silenced=0;
        this.poison=0;
        this.enfeeble=0;
        this.lightning=1;
        this.fire=1;
        this.ice=1;

        this.usedspecial=false;
        this.index=e;
        this.usedaction=false;
        this.alive=true;
        this.charge= "None";
        this.curleft=0;
        this.curtop=25;
        this.group=Egroupindex;
        this.description="Something is coming...";
        this.picture="<div class='Ebarrackpic' id='E"+ e + "'><img src='Pictures/Enemies/Hand.gif'/></div>";
        this.image='Pictures/Enemies/Hand.gif';
    }


    function Frostlord(e,Egroupindex,level){
        this.type= "Frostlord";
        this.name="Frostlord";
        this.level=level;

        if(level===1){
            this.attack= 50;
            this.health= 200;
            this.maxhealth=200;
        }
        if(level===2){
            this.attack= 70;
            this.health= 230;
            this.maxhealth=230;
        }
        if(level===3){
            this.attack= 90;
            this.health= 260;
            this.maxhealth=260;
        }
        this.defense= 20;
        this.resistance= 20;

        this.sleep=0;
        this.immobilized=0;
        this.blind=0;
        this.silenced=0;
        this.poison=0;
        this.enfeeble=0;
        this.lightning=1;
        this.fire=2;
        this.ice=.5;

        this.usedspecial=false;
        this.index=e;
        this.usedaction=false;
        this.alive=true;
        this.charge= 0;
        this.curleft=0;
        this.curtop=25;
        this.group=Egroupindex;
        this.description="While weak in the close range, this rare creature can create a dangerous snow storm. Defeat to get it's soul to summon.";
        this.picture="<div class='Ebarrackpic' id='E"+ e + "'><img src='Pictures/Enemies/Frostlord.gif'/></div>";
        this.image='Pictures/Enemies/Frostlord.gif';

    }
    //40
    function Angel(e,Egroupindex,level){
        this.type= "Angel";
        this.name="Angel";
        this.level=level;

        if(level===1){
            this.attack= 40;
            this.health= 230;
            this.maxhealth=230;
        }
        if(level===2){
            this.attack= 60;
            this.health= 260;
            this.maxhealth=260;
        }
        if(level===3){
            this.attack= 80;
            this.health= 300;
            this.maxhealth=300;
        }
        this.defense= 15;
        this.resistance= 15;

        this.sleep=0;
        this.immobilized=0;
        this.blind=0;
        this.silenced=0;
        this.poison=0;
        this.enfeeble=0;
        this.lightning=1;
        this.fire=1;
        this.ice=1;

        this.usedspecial=false;
        this.index=e;
        this.usedaction=false;
        this.alive=true;
        this.charge= 0;
        this.curleft=0;
        this.curtop=25;
        this.group=Egroupindex;
        this.description="Tough to kill, this rare creature heal itself with it's magic and fly. Defeat to get it's soul to summon.";
        this.picture="<div class='Ebarrackpic' id='E"+ e + "'><img src='Pictures/Enemies/Angel.gif'/></div>";
        this.image='Pictures/Enemies/Angel.gif';

    }
    //60
    function Djinn(e,Egroupindex,level){
        this.type= "Djinn";
        this.name="Djinn";
        this.level=level;

        if(level===1){
            this.attack= 80;
            this.health= 300;
            this.maxhealth=300;
        }
        if(level===2){
            this.attack= 100;
            this.health= 350;
            this.maxhealth=350;
        }
        if(level===3){
            this.attack= 120;
            this.health= 400;
            this.maxhealth=400;
        }
        this.defense= 40;
        this.resistance= 40;

        this.sleep=0;
        this.immobilized=0;
        this.blind=0;
        this.silenced=0;
        this.poison=0;
        this.enfeeble=0;
        this.lightning=1;
        this.fire=1;
        this.ice=1;

        this.usedspecial=false;
        this.index=e;
        this.usedaction=false;
        this.alive=true;
        this.charge= 0;
        this.curleft=0;
        this.curtop=25;
        this.group=Egroupindex;
        this.description="Tough to kill, this rare creature can give and take equally well. Defeat to get it's soul to summon.";
        this.picture="<div class='Ebarrackpic' id='E"+ e + "'><img src='Pictures/Enemies/Djinn.gif'/></div>";
        this.image='Pictures/Enemies/Djinn.gif';

    }
    //80
    function Demon(e,Egroupindex,level){
        this.type= "Demon";
        this.name="Demon";
        this.level=level;

        if(level===1){
            this.attack= 100;
            this.health= 300;
            this.maxhealth=300;
        }
        if(level===2){
            this.attack= 130;
            this.health= 350;
            this.maxhealth=350;
        }
        if(level===3){
            this.attack= 160;
            this.health= 400;
            this.maxhealth=400;
        }
        this.defense= 40;
        this.resistance= 40;

        this.sleep=0;
        this.immobilized=0;
        this.blind=0;
        this.silenced=0;
        this.poison=0;
        this.enfeeble=0;
        this.lightning=1;
        this.fire=.5;
        this.ice=2;

        this.usedspecial=false;
        this.index=e;
        this.usedaction=false;
        this.alive=true;
        this.charge= 0;
        this.curleft=0;
        this.curtop=25;
        this.group=Egroupindex;
        this.description="Elite among it's kind, this rare creature can instantly kill any units with it's death spell for 5 charge. Defeat to get it's soul to summon.";
        this.picture="<div class='Ebarrackpic' id='E"+ e + "'><img src='Pictures/Enemies/Demon.gif'/></div>";
        this.image='Pictures/Enemies/Demon.gif';

    }

var curEindex=0;
    var curEgroupindex=0;
function newEindex(){
    for(var i = 0;i<Eindex;i++){
        if(Eunits[i].alive===false){
            curEindex=i;
            return i
        }
    }
    Eindex+=1;
    curEindex=Eindex-1;
    return Eindex-1;
}

    function createbadguys(){
        var temp=Math.floor((Math.random() * 10) + 1);
        var baddielocation=Math.floor((Math.random() * 13) + 1);
        if(day<=30){
            baddielocation=Math.floor((Math.random() * 10) + 1);
        }
        if(day<=20){
            baddielocation=Math.floor((Math.random() * 7) + 1);
        }
        if(day<=10){
            baddielocation=Math.floor((Math.random() * 4) + 1);
        }


        switch(baddielocation){
            case 1:
                baddielocation=1;
                break;
            case 2:
                baddielocation=3;
                break;
            case 3:
                baddielocation=11;
                break;
            case 4:
                baddielocation=15;
                break;
            case 5:
                baddielocation=62;
                break;
            case 6:
                baddielocation=63;
                break;
            case 7:
                baddielocation=69;
                break;
            case 8:
                baddielocation=24;
                break;
            case 9:
                baddielocation=31;
                break;
            case 10:
                baddielocation=34;
                break;
            case 11:
                baddielocation=49;
                break;
            case 12:
                baddielocation=50;
                break;
            case 13:
                baddielocation=55;
                break;
        }
        if(day===1){
            Eunits[newEindex()]=new Goblin(curEindex, Egroupindex,difflevel);
            Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,200,'goblin');
            tipmessage("enemymessage","Look! A goblin appeared the top-left part of the map. Every turn it will move towards your capitol, and if it reaches it, you lose. Use your units to intersect it!");
        }
        if(day===3){
            tipmessage("townmessage","You can fortify towns by clicking the 'fortify' action button while a group is in that town at a cost of 10 gold. Fortified towns can be moved between like with castles and the capitol. You can also equip and heal your units there.");
        }
        if(day===6){
            tipmessage("Exchangemessage","Did you know you can exchange units in groups? If groups are next to each other, click one, and rightslick the other to choose how to exchange.");
        }
        if(day===7){
            tipmessage("Exploremessage","Be sure to explore the locations your units visit. Click the 'Explore' action button to search the area. But be careful, you could run into wild animals!");
        }
        if (day<=10 && day>=2){
            switch(temp){
                case 3:
                case 4:
                case 5:
                    Eunits[newEindex()]=new Goblin(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,200,'goblin');
                    break;
                case 6:
                    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Goblin(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,300,'goblin');
                    break;
                case 7:
                case 8:
                    Eunits[newEindex()]=new Goblin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Goblin(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'goblin');
                    break;
                case 9:
                    Eunits[newEindex()]=new Goblin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Goblin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Goblin(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'goblin');
                    break;
                case 10:
                    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Goblin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Sparrow');
                    break;
            }
        }
        if (day<20 && day>10){
            switch(temp){
                case 3:
                    Eunits[newEindex()]=new Goblin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Goblin(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,200,'goblin');
                    break;
                case 4:
                    Eunits[newEindex()]=new Goblin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,300,'goblin');
                    break;
                case 5:
                    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Goblin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Sparrow');
                    break;
                case 6:
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Fire Elemental');
                    break;
                case 7:
                    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Fire Elemental');
                    break;
                case 8:
                    Eunits[newEindex()]=new Goblin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Goblin(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Fire Elemental');
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
                    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Goblin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Goblin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Sparrow');
                    break;
            }
        }
        if(day===20){
            Eunits[newEindex()]=new Frostlord(curEindex, Egroupindex,1);
            Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Frostlord');
        }
        if (day<=30 && day>20){
            switch(temp){
                case 3:
                    Eunits[newEindex()]=new Spitter(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,200,'Spitter');
                    break;
                case 4:
                    Eunits[newEindex()]=new Spitter(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Spitter(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,300,'Spitter');
                    break;
                case 5:
                    Eunits[newEindex()]=new Spitter(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Spitter(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Clunker');
                    break;
                case 6:
                    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Clunker');
                    break;
                case 7:
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Gremlin');
                    break;
                case 8:
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Gremlin');
                    break;
                case 9:
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'warrior');
                    break;
                case 10:
                    Eunits[newEindex()]=new Spitter(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new LightningElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Spitter(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Lightning Elemental');
                    break;
            }
        }
        if (day<40 && day>30){
            switch(temp){
                case 3:
                    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Magnet(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,300,'Magnet');
                    break;
                case 4:
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'warrior');
                    break;
                case 5:
                    Eunits[newEindex()]=new Spitter(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Magnet(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,300,'Spitter');
                    break;
                case 6:
                    Eunits[newEindex()]=new IceElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new IceElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new IceElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Ice Elemental');
                    break;
                case 7:
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new IceElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Fire Elemental');
                    break;
                case 8:
                    Eunits[newEindex()]=new LightningElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new IceElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new LightningElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Lightning Elemental');
                    break;
                case 9:
                    Eunits[newEindex()]=new Magnet(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Spider(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'warrior');
                    break;
                case 10:
                    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new LightningElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Lightning Elemental');
                    break;
            }
        }
        if(day===40){
            Eunits[newEindex()]=new Angel(curEindex, Egroupindex,1);
            Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Angel');
        }
        if (day<=50 && day>40){
            switch(temp){
                case 3:
                    Eunits[newEindex()]=new Spider(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Werewolf(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,300,'werewolf');
                    break;
                case 4:
                    Eunits[newEindex()]=new Werewolf(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Magnet(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Werewolf(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'werewolf');
                    break;
                case 5:
                    Eunits[newEindex()]=new Spider(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Werewolf(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Sounddepressor(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,300,'spider');
                    break;
                case 6:
                    Eunits[newEindex()]=new Wisp(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Wisp(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Wisp(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Wisp');
                    break;
                case 7:
                    Eunits[newEindex()]=new Wisp(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Wisp(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Sounddepressor(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Wisp');
                    break;
                case 8:
                    Eunits[newEindex()]=new IceElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Wisp(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new IceElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Ice Elemental');
                    break;
                case 9:
                    Eunits[newEindex()]=new Werewolf(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Spider(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Werewolf(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Magnet(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'werewolf');
                    break;
                case 10:
                    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Wisp(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Sounddepressor(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Wisp(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Sounddepressor');
                    break;
            }
        }
        if (day<60 && day>50){
            switch(temp){
                case 3:
                    Eunits[newEindex()]=new Cannon(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,100,'Cannon');
                    break;
                case 4:
                    Eunits[newEindex()]=new Vampire(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Sounddepressor(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Vampire(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'vampire');
                    break;
                case 5:
                    Eunits[newEindex()]=new Bear(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Vampire(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,300,'vampire');
                    break;
                case 6:
                    Eunits[newEindex()]=new Bear(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Cannon(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bear(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,700,'Cannon');
                    break;
                case 7:
                    Eunits[newEindex()]=new Bear(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Cannon(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Cannon');
                    break;
                case 8:
                    Eunits[newEindex()]=new Werewolf(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Vampire(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bear(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'vampire');
                    break;
                case 9:
                    Eunits[newEindex()]=new IceElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Vampire(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Sounddepressor(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new IceElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Ice Elemental');
                    break;
                case 10:
                    Eunits[newEindex()]=new Bear(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Wisp(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Vampire(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Wisp(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Wisp');
                    break;
            }
        }
        if(day===60){
            Eunits[newEindex()]=new Djinn(curEindex, Egroupindex,1);
            Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Djinn');
        }
        if (day<=70 && day>60){
            switch(temp){
                case 3:
                    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Cannon(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Cannon');
                    break;
                case 4:
                    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Sparrow(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Sparrow');
                    break;
                case 5:
                    Eunits[newEindex()]=new Werewolf(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Vampire(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,200,'vampire');
                    break;
                case 6:
                case 7:
                case 8:
                    Eunits[newEindex()]=new Bee(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Beekeeper(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bee(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bee(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bee(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Beekeeper');
                    break;
                case 9:
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Flamewraith(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new FireElemental(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'flamewraith');
                    break;
                case 10:
                    Eunits[newEindex()]=new Clunker(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Magnet(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Cannon(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Sounddepressor(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Cannon');
                    break;
            }
        }
        if (day<80 && day>70){
            switch(temp){
                case 3:
                    Eunits[newEindex()]=new Hellhound(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Hellhound(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'hellhound');
                    break;
                case 4:
                case 5:
                    Eunits[newEindex()]=new Bee(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Beekeeper(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bee(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bee(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bee(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Beekeeper');
                    break;
                case 6:
                    Eunits[newEindex()]=new Hellhound(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Hellhound(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Hellhound(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'hellhound');
                    break;
                case 7:
                case 8:
                    Eunits[newEindex()]=new Zombie(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Necromancer(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Zombie(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Necromancer');
                    break;
                case 9:
                    Eunits[newEindex()]=new Vampire(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Waterwraith(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Vampire(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'waterwraith');
                    break;
                case 10:
                    Eunits[newEindex()]=new Bear(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Hellhound(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Vampire(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Hellhound(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Bear(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,800,'hellhound');
                    break;
            }
        }
        if(day===80){
            Eunits[newEindex()]=new Demon(curEindex, Egroupindex,1);
            Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Demon');
        }
        if (day<=90 && day>80){
            switch(temp){
                case 3:
                    Eunits[newEindex()]=new Hellhound(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Hellhound(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Hellhound(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'hellhound');
                    break;
                case 4:
                case 5:
                    Eunits[newEindex()]=new Zombie(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Necromancer(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Zombie(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,200,'Necromancer');
                    break;
                case 6:
                    Eunits[newEindex()]=new Frostwraith(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Waterwraith(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Frostwraith(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'frostwraith');
                    break;
                case 7:
                    Eunits[newEindex()]=new Waterwraith(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Waterwraith(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Waterwraith(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'waterwraith');
                    break;
                case 8:
                    Eunits[newEindex()]=new Waterwraith(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Flamewraith(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'flamewraith');
                    break;
                case 9:
                    Eunits[newEindex()]=new Assassin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Frostwraith(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Assassin(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'Assassin');
                    break;
                case 10:
                    Eunits[newEindex()]=new Flamewraith(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Frostwraith(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Waterwraith(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'frostwraith');
                    break;
            }
        }
        if (day<100 && day>90){
            switch(temp){
                case 3:
                case 4:
                case 5:
                    Eunits[newEindex()]=new Shaman(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Golem(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,200,'Shaman');
                    break;
                case 6:
                    Eunits[newEindex()]=new Flamewraith(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Frostwraith(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Waterwraith(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,500,'frostwraith');
                    break;
                case 7:
                    Eunits[newEindex()]=new Assassin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Assassin(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,400,'Assassin');
                    break;
                case 8:
                    Eunits[newEindex()]=new Vampire(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Werewolf(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Werewolf(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Vampire(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'werewolf');
                    break;
                case 9:
                    Eunits[newEindex()]=new Assassin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Frostwraith(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Assassin(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,600,'Assassin');
                    break;
                case 10:
                    Eunits[newEindex()]=new Assassin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Flamewraith(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Frostwraith(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Waterwraith(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Assassin(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,800,'frostwraith');
                    break;
            }
        }
        if (day===100){
            Eunits[newEindex()]=new Hand(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Dragon(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Hand(curEindex, Egroupindex,difflevel);
                    Egroups[Egroupindex]=new Enewgroup(Egroupindex,baddielocation,200,'unknown');

        }
        clickEicon();
        Egroupinfo();
    }
    function Enewgroup(index,location,experience,picture){
        var thisleft=0;
        var thistop=0;

        if(location===1){
            thisleft=60;
            thistop=110;
        }
        if(location===3){
            thisleft=105;
            thistop=85;
        }
        if(location===11){
            thisleft=150;
            thistop=85;
        }
        if(location===15){
            thisleft=230;
            thistop=80;
        }
        if(location===62){
            thisleft=345;
            thistop=90;
        }
        if(location===63){
            thisleft=405;
            thistop=90;
        }
        if(location===69){
            thisleft=470;
            thistop=95;
        }
        if(location===24){
            thisleft=60;
            thistop=340;
        }
        if(location===31){
            thisleft=55;
            thistop=480;
        }
        if(location===34){
            thisleft=145;
            thistop=550;
        }
        if(location===49){
            thisleft=515;
            thistop=530;
        }
        if(location===50){
            thisleft=505;
            thistop=440;
        }
        if(location===55){
            thisleft=505;
            thistop=375;
        }
        this.index=index;
        this.location=location;
        this.experience=experience;
        this.hasmoved=false;
        this.curleft=thisleft;
        this.curtop=thistop;
        this.picture=picture;
        $('#background').append('<img src="Pictures/Enemies/' + picture + '.gif" class="Eicon" id="EM' + Egroupindex +'" style="left: ' + thisleft + 'px; top:' + thistop + 'px" />');
        Egroupindex+=1;
    }



    //create good units//////////////////////////////////////////////////////////////////////
    var index=0;
    var movingindex=0;
    var units=new Array();
    function Soldier(e){
        this.type= "Soldier";
        this.realtype="Soldier";
        this.name="Edgar Elron";
        this.index=e;

        this.attack= 60;
        this.defense= 20;
        this.resistance= 0;
        this.health= 120;
        this.maxhealth=120;

        this.usedaction=false;
        this.alive=true;
        this.moved=false;
        this.curleft=0;
        this.curtop=425;
       this.group=0;
        this.slot=0;

        this.sleep=0;
        this.immobilized=0;
        this.blind=0;
        this.silenced=0;
        this.poison=0;
        this.enfeeble=0;

        this.captured="";

        this.immune=false;
        this.frosttouch=false;
        this.storm=false;
        this.aetherban=true;

        this.level=1;
        this.experience=0;
        this.abilitypoints=0;

        this.weapon="Bronze Sword";
        this.armor="Bronze Armor";
        this.accessory="None";

        this.healthboost=0;
        this.weaponboost=0;
        this.armorboost=0;
        this.resistboost=0;

        this.attacktempboost=0;
        this.defensetempboost=0;
        this.protectedby=-1;

        this.enroute=0;
        this.healing=0;

        this.medkit=false;
        this.abilitymedkit=false;
        this.abilitydash=false;
        this.abilityimmunity=false;
        this.abilitycounter=false;
        this.abilitysteadfast=false;

        this.picture="<div class='barrackpic' id='"+ e + "'><img src='Pictures/Allies/Soldier.gif' /></div>";
        this.image='Pictures/Allies/Soldier.gif';
        index+=1;
        if (e===-1){
            this.curleft=1;
            this.curtop=424;
            index-=1;
            this.picture="";
            this.image='';
            this.alive=false;
            this.abilityimmunity=false;

        }
    }
    function Knight(e){
        this.type= "Knight";
        this.realtype="Knight";
        this.name="Sir Bernand";
        this.index=e;

        this.attack= 80;
        this.defense= 20;
        this.resistance= 0;
        this.health= 120;
        this.maxhealth=120;

        this.usedaction=false;
        this.alive=true;
        this.moved=false;
        this.curleft=0;
        this.curtop=425;
        this.group=0;
        this.slot=0;

        this.sleep=0;
        this.immobilized=0;
        this.blind=0;
        this.silenced=0;
        this.poison=0;
        this.enfeeble=0;

        this.captured="";

        this.immune=false;
        this.frosttouch=false;
        this.storm=false;
        this.aetherban=false;

        this.level=1;
        this.experience=0;
        this.abilitypoints=0;

        this.weapon="Bronze Sword";
        this.armor="Bronze Armor";
        this.accessory="None";

        this.healthboost=0;
        this.weaponboost=0;
        this.armorboost=0;
        this.resistboost=0;

        this.energy=100;

        this.attacktempboost=0;
        this.damageplus=1;
        this.defensetempboost=0;
        this.protectedby=-1;

        this.enroute=0;
        this.healing=0;

        this.abilityswirl=false;
        this.abilitysweep=false;
        this.abilityfreemove=false;
        this.abilitypiercer=false;
        this.abilityreact=false;

        this.picture="<div class='barrackpic' id='"+ e + "'><img src='Pictures/Allies/Knight.gif' /></div>";
        this.image='Pictures/Allies/Knight.gif';
        index+=1;
    }
    function Thief(e){
        this.type= "Thief";
        this.realtype="Thief";
        this.name="Slick the shadow";
        this.index=e;

        this.attack= 40;
        this.defense= 10;
        this.resistance= 10;
        this.health= 90;
        this.maxhealth=90;

        this.usedaction=false;
        this.alive=true;
        this.moved=false;
        this.curleft=0;
        this.curtop=425;
        this.group=0;
        this.slot=0;

        this.sleep=0;
        this.immobilized=0;
        this.blind=0;
        this.silenced=0;
        this.poison=0;
        this.enfeeble=0;

        this.captured="";

        this.immune=false;
        this.frosttouch=false;
        this.storm=false;
        this.aetherban=false;

        this.level=1;
        this.experience=0;
        this.abilitypoints=0;

        this.weapon="Bronze Sword";
        this.armor="Bronze Armor";
        this.accessory="None";

        this.healthboost=0;
        this.weaponboost=0;
        this.armorboost=0;
        this.resistboost=0;

        this.attacktempboost=0;
        this.damageplus=1;
        this.defensetempboost=0;
        this.protectedby=-1;

        this.enroute=0;
        this.healing=0;
        this.abilitymug=true;

        this.abilitybackstab=false;
        this.abilityinvisible=false;
        this.abilitydodge=false;
        this.abilityfirstblow=false;
        this.abilitybettersteal=false;

        this.picture="<div class='barrackpic' id='"+ e + "'><img src='Pictures/Allies/Thief.gif' /></div>";
        this.image='Pictures/Allies/Thief.gif';
        index+=1;
    }

    function Mage(e){
        this.type= "Mage";
        this.realtype="Mage";
        this.name="Sandra Dragonheart";

        this.attack= 40;
        this.defense= 15;
        this.resistance= 15;
        this.health= 100;
        this.maxhealth=100;

        this.index=e;
        this.usedaction=false;
        this.alive=true;
        this.moved=false;
        this.curleft=0;
        this.curtop=425;
        this.group=0;
        this.slot=0;

        this.sleep=0;
        this.immobilized=0;
        this.blind=0;
        this.silenced=0;
        this.poison=0;
        this.enfeeble=0;

        this.captured="";

        this.immune=false;
        this.frosttouch=false;
        this.storm=false;
        this.aetherban=false;

        this.level=1;
        this.experience=0;
        this.abilitypoints=0;

        this.weapon="Glass Wand";
        this.armor="Bronze Armor";
        this.accessory="None";

        this.healthboost=0;
        this.weaponboost=0;
        this.armorboost=0;
        this.resistboost=0;

        this.attacktempboost=0;
        this.defensetempboost=0;
        this.protectedby=-1;

        this.enroute=0;
        this.healing=0;

        this.abilityelementalailments=false;
        this.abilityzap=false;
   this.abilityfreeze=false;
        this.abilitydoubletap=false;
        this.abilitypain=false;

        this.picture="<div class='barrackpic' id='"+ e + "' ><img src='Pictures/Allies/Mage.gif' /></div>";
        this.image='Pictures/Allies/Mage.gif';
        index+=1;
    }
    function Wizard(e){
        this.type= "Wizard";
        this.realtype="Wizard";
        this.name="Rourke Storm";

        this.attack= 50;
        this.defense= 0;
        this.resistance= 30;
        this.health= 80;
        this.maxhealth=80;

        this.index=e;
        this.usedaction=false;
        this.alive=true;
        this.moved=false;
        this.curleft=0;
        this.curtop=425;
        this.group=0;
        this.slot=0;

        this.sleep=0;
        this.immobilized=0;
        this.blind=0;
        this.silenced=0;
        this.poison=0;
        this.enfeeble=0;

        this.captured="";

        this.immune=false;
        this.frosttouch=false;
        this.storm=false;
        this.aetherban=false;

        this.level=1;
        this.experience=0;
        this.abilitypoints=0;

        this.weapon="Glass Wand";
        this.armor="Bronze Armor";
        this.accessory="None";

        this.healthboost=0;
        this.weaponboost=0;
        this.armorboost=0;
        this.resistboost=0;
        this.attacktempboost=0;
        this.defensetempboost=0;
        this.protectedby=-1;

        this.enroute=0;
        this.healing=0;

        this.abilitybolt=false;
        this.abilitymissile=false;
        this.abilitystartcharge=false;
        this.abilitydrain=false;
        this.abilityelementalailments=false;

        this.picture="<div class='barrackpic' id='"+ e + "' ><img src='Pictures/Allies/Wizard.gif' /></div>";
        this.image='Pictures/Allies/Wizard.gif';
        index+=1;
    }
    function Sorcerer(e){
        this.type= "Sorcerer";
        this.realtype="Sorcerer";
        this.name="Benedict Powerhouse";

        this.attack= 30;
        this.defense= 0;
        this.resistance= 30;
        this.health= 80;
        this.maxhealth=80;

        this.index=e;
        this.usedaction=false;
        this.alive=true;
        this.moved=false;
        this.curleft=0;
        this.curtop=425;
        this.group=0;
        this.slot=0;

        this.sleep=0;
        this.immobilized=0;
        this.blind=0;
        this.silenced=0;
        this.poison=0;
        this.enfeeble=0;

        this.captured="";

        this.immune=false;
        this.frosttouch=false;
        this.storm=false;
        this.aetherban=false;

        this.level=1;
        this.experience=0;
        this.abilitypoints=0;

        this.weapon="Glass Wand";
        this.armor="Bronze Armor";
        this.accessory="None";

        this.healthboost=0;
        this.weaponboost=0;
        this.armorboost=0;
        this.resistboost=0;

        this.power=0;
        this.attacktempboost=0;
        this.defensetempboost=0;
        this.protectedby=1;

        this.enroute=0;
        this.healing=0;

        this.abilityfireblast=false;
        this.abilitylightning=false;
        this.abilitymanaincrease=false;
        this.abilityslumber=false;
        this.abilitydeath=false;

        this.picture="<div class='barrackpic' id='"+ e + "' ><img src='Pictures/Allies/Sorcerer.gif' /></div>";
        this.image='Pictures/Allies/Sorcerer.gif';
        index+=1;
    }

    function Rouge(e){
        this.type= "Rouge";
        this.realtype="Rouge";
        this.name="Renrick of the poisons";

        this.attack= 30;
        this.defense= 10;
        this.resistance= 10;
        this.health= 80;
        this.maxhealth=80;

        this.usedsleep=1;
        this.usedblindness=1;
        this.usedenfeeble=1;
        this.usedpoison=1;

        this.index=e;
        this.usedaction=false;
        this.alive=true;
        this.moved=false;
        this.curleft=0;
        this.curtop=425;
        this.group=0;
        this.slot=0;

        this.sleep=0;
        this.immobilized=0;
        this.blind=0;
        this.silenced=0;
        this.poison=0;
        this.enfeeble=0;

        this.captured="";

        this.immune=false;
        this.frosttouch=false;
        this.storm=false;
        this.aetherban=false;

        this.level=1;
        this.experience=0;
        this.abilitypoints=0;

        this.weapon="Wooden Bow";
        this.armor="Bronze Armor";
        this.accessory="None";

        this.healthboost=0;
        this.weaponboost=0;
        this.armorboost=0;
        this.resistboost=0;


        this.enroute=0;
        this.healing=0;

        this.defensetempboost=0;
        this.attacktempboost=0;
        this.protectedby=-1;
        this.arrowcapacity=1;
        this.duration=0;

        this.abilityblindness=false;
        this.abilitysleep=false;
        this.abilityailmentduration=false;
        this.abilityenfeeble=false;
        this.abilitydoublearrows=false;

        this.picture="<div class='barrackpic' id='"+ e + "' ><img src='Pictures/Allies/Rouge.gif' /></div>";
        this.image='Pictures/Allies/Rouge.gif';
        index+=1;
    }
    function Archer(e){
        this.type= "Archer";
        this.realtype="Archer";
        this.name="Miranda of Vastwood";

        this.attack= 40;
        this.defense= 10;
        this.resistance= 10;
        this.health= 80;
        this.maxhealth=80;

        this.usedpierce=1;
        this.usedexploding=1;
        this.usedtitan=1;
        this.usedimmobolize=1;

        this.index=e;
        this.usedaction=false;
        this.alive=true;
        this.moved=false;
        this.curleft=0;
        this.curtop=425;
        this.group=0;
        this.slot=0;

        this.sleep=0;
        this.immobilized=0;
        this.blind=0;
        this.silenced=0;
        this.poison=0;
        this.enfeeble=0;

        this.captured="";

        this.immune=false;
        this.frosttouch=false;
        this.storm=false;
        this.aetherban=false;

        this.level=1;
        this.experience=0;
        this.abilitypoints=0;

        this.weapon="Wooden Bow";
        this.armor="Bronze Armor";
        this.accessory="None";

        this.healthboost=0;
        this.weaponboost=0;
        this.armorboost=0;
        this.resistboost=0;

        this.enroute=0;
        this.healing=0;

        this.defensetempboost=0;
        this.attacktempboost=0;
        this.protectedby=-1;
        this.arrowcapacity=1;

        this.abilityexplosion=false;
        this.abilitypierce=false;
this.abilitytitan=false;
        this.abilityimmobolize=false;
        this.abilitydoublearrows=false;

        this.picture="<div class='barrackpic' id='"+ e + "' ><img src='Pictures/Allies/Archer.gif' /></div>";
        this.image='Pictures/Allies/Archer.gif';
        index+=1;
    }
    function Templar(e){
        this.type= "Templar";
        this.realtype="Templar";
        this.name="Johnny Goldblade";

        this.attack= 30;
        this.defense= 0;
        this.resistance= 30;
        this.health= 80;
        this.maxhealth=80;

        this.useddisrupt=1;
        this.usedgrappling=1;
        this.usedsilence=1;
        this.usedburst=1;

        this.index=e;
        this.usedaction=false;
        this.alive=true;
        this.moved=false;
        this.curleft=0;
        this.curtop=425;
        this.group=0;
        this.slot=0;

        this.sleep=0;
        this.immobilized=0;
        this.blind=0;
        this.silenced=0;
        this.poison=0;
        this.enfeeble=0;

        this.captured="";

        this.immune=false;
        this.frosttouch=false;
        this.storm=false;
        this.aetherban=false;

        this.level=1;
        this.experience=0;
        this.abilitypoints=0;

        this.weapon="Wooden Bow";
        this.armor="Bronze Armor";
        this.accessory="None";

        this.healthboost=0;
        this.weaponboost=0;
        this.armorboost=0;
        this.resistboost=0;

        this.enroute=0;
        this.healing=0;

        this.defensetempboost=0;
        this.attacktempboost=0;
        this.protectedby=-1;
        this.arrowcapacity=1;

        this.abilityburst=false;
        this.abilitydisrupt=false;
        this.abilitygrapplinghook=false;
        this.abilityelemental=false;
        this.abilitydoublearrows=false;

        this.picture="<div class='barrackpic' id='"+ e + "' ><img src='Pictures/Allies/Templar.gif' /></div>";
        this.image='Pictures/Allies/Templar.gif';
        index+=1;
    }

    function Guard(e){
        this.type= "Guard";
        this.realtype="Guard";
        this.name="Alphonse Elron";
        this.index=e;

        this.attack= 30;
        this.defense= 20;
        this.resistance= 20;
        this.health= 170;
        this.maxhealth=170;

        this.energy=25;
        this.bracing=false;

        this.usedaction=false;
        this.alive=true;
        this.moved=false;
        this.curleft=0;
        this.curtop=425;
        this.group=0;
        this.slot=0;

        this.sleep=0;
        this.immobilized=0;
        this.blind=0;
        this.silenced=0;
        this.poison=0;
        this.enfeeble=0;

        this.captured="";

        this.immune=false;
        this.frosttouch=false;
        this.storm=false;
        this.aetherban=false;

        this.level=1;
        this.experience=0;
        this.abilitypoints=0;

        this.weapon="Bronze Shield";
        this.armor="Bronze Armor";
        this.accessory="None";

        this.healthboost=0;
        this.weaponboost=0;
        this.armorboost=0;
        this.resistboost=0;

        this.enroute=0;
        this.healing=0;

        this.defensetempboost=0;
        this.attacktempboost=0;
        this.protectedby=-1;

        this.abilityprotect=false;
        this.abilityincreaseenergy=false;
        this.abilityimmunity=false;
        this.abilityscout=false;
        this.abilityreshield=false;

        this.picture="<div class='barrackpic' id='"+ e + "'><img src='Pictures/Allies/Guard.gif' /></div>";
        this.image='Pictures/Allies/Guard.gif';
        index+=1;
    }
    function Enchantress(e){
        this.type= "Enchantress";
        this.realtype="Enchantress";
        this.name="Ivy";
        this.index=e;

        this.attack= 3;
        this.defense= 0;
        this.resistance= 0;
        this.health= 80;
        this.maxhealth=80;

        this.power=0;

        this.usedaction=false;
        this.alive=true;
        this.moved=false;
        this.curleft=0;
        this.curtop=425;
        this.group=0;
        this.slot=0;

        this.sleep=0;
        this.immobilized=0;
        this.blind=0;
        this.silenced=0;
        this.poison=0;
        this.enfeeble=0;

        this.immune=false;
        this.frosttouch=false;
        this.storm=false;
        this.aetherban=false;

        this.captured="";

        this.level=1;
        this.experience=0;
        this.abilitypoints=0;

        this.weapon="Glass Wand";
        this.armor="Bronze Armor";
        this.accessory="None";

        this.healthboost=0;
        this.weaponboost=0;
        this.armorboost=0;
        this.resistboost=0;

        this.enroute=0;
        this.healing=0;

        this.defensetempboost=0;
        this.attacktempboost=0;
        this.protectedby=-1;
        this.stormactive=false;
        this.mana=0;

        this.abilitystorm=false;
        this.abilityreplenish=false;
        this.abilitytransform=false;
        this.abilitytorment=false;
        this.abilitybestow=false;

        this.picture="<div class='barrackpic' id='"+ e + "'><img src='Pictures/Allies/Enchantress.gif' /></div>";
        this.image='Pictures/Allies/Enchantress.gif';
        index+=1;
    }
    function Healer(e){
        this.type= "Healer";
        this.realtype="Healer";
        this.name="Samantha Peacemaker";
        this.index=e;

        this.attack= 10;
        this.defense= 0;
        this.resistance= 0;
        this.health= 80;
        this.maxhealth=80;

        this.power=50;

        this.usedaction=false;
        this.alive=true;
        this.moved=false;
        this.curleft=0;
        this.curtop=425;
        this.group=0;
        this.slot=0;

        this.sleep=0;
        this.immobilized=0;
        this.blind=0;
        this.silenced=0;
        this.poison=0;
        this.enfeeble=0;

        this.captured="";

        this.immune=false;
        this.frosttouch=false;
        this.storm=false;
        this.aetherban=false;

        this.level=1;
        this.experience=0;
        this.abilitypoints=0;

        this.weapon="Nothing";
        this.armor="Bronze Armor";
        this.accessory="None";

        this.healthboost=0;
        this.weaponboost=0;
        this.armorboost=0;
        this.resistboost=0;

        this.enroute=0;
        this.healing=0;

        this.attacktempboost=0;
        this.defensetempboost=0;
        this.protectedby=-1;

        this.abilityreach=false;
        this.abilityheal=false;
        this.abilitydoublevigor=false;
       this.abilitymove=false;
        this.abilitycleanse=false;

        this.picture="<div class='barrackpic' id='"+ e + "'><img src='Pictures/Allies/Healer.gif' /></div>";
        this.image='Pictures/Allies/Healer.gif';
        index+=1;
    }

    function ADjinn(e,Owner){
        this.type= "Djinn";
        this.name="Bobo";

            this.attack= 70;
            this.defense= 15;
            this.resistance= 15;
            this.health= 140;
            this.maxhealth=140;

        this.sleep=0;
        this.immobilized=0;
        this.blind=0;
        this.silenced=0;
        this.poison=0;
        this.poison=0;
        this.enfeeble=0;

        this.healthboost=0;
        this.weaponboost=0;
        this.armorboost=0;
        this.resistboost=0;

        this.defensetempboost=0;
        this.attacktempboost=0;

        this.owner="";
        this.group=-1;
        this.protectedby=-1;
        this.usedspecial=false;
        this.index=e;
        this.usedaction=false;
        this.alive=true;
        this.curleft=0;
        this.curtop=25;
        this.picture="<img class='Ebarrackpic' id='E"+ e + "' src='Pictures/Enemies/Djinn.gif' />";
        this.image='Pictures/Enemies/Djinn.gif';
        index+=1;
    }

    //starting stuff///////////////////////////////////////////////////////////////////
    presspass();
    function setlocationstuff(){
        $("#space70").data("castle",true).data("move1",'20').data("move2",'').data("move3",'').data("move4",'').data("left",300).data("top",270).data("location",70).append("<img style='margin-top:0px' class='plane' src='Pictures/Plane.gif' />");
        $("#space1").data("move1",'2').data("move2",'').data("move3",'').data("move4",'').data("left",60).data("top",110).data("location",1).data("fortify",false);
        $("#space2").data("move1",'5').data("move2",'6').data("move3",'').data("move4",'').data("left",85).data("top",130).data("location",2).data("fortify",false);
        $("#space3").data("move1",'4').data("move2",'').data("move3",'').data("move4",'').data("left",105).data("top",85).data("location",3).data("fortify",false);
        $("#space4").data("move1",'5').data("move2",'').data("move3",'3').data("move4",'11').data("left",130).data("top",115).data("location",4).data("fortify",false);
        $("#space5").data("move1",'10').data("move2",'').data("move3",'4').data("move4",'2').data("left",135).data("top",150).data("location",5).data("fortify",false);
        $("#space6").data("move1",'7').data("move2",'').data("move3",'2').data("move4",'').data("left",100).data("top",190).data("location",6).data("fortify",false);
        $("#space7").data("move1",'8').data("move2",'').data("move3",'6').data("move4",'').data("left",120).data("top",230).data("location",7).data("fortify",false);
        $("#space8").data("move1",'9').data("move2",'').data("move3",'7').data("move4",'').data("left",160).data("top",230).data("location",8).data("fortify",false);
        $("#space9").data("move1",'13').data("move2",'12').data("move3",'10').data("move4",'8').data("left",180).data("top",190).data("location",9).data("fortify",false);
        $("#space10").data("move1",'9').data("move2",'').data("move3",'5').data("move4",'').data("left",170).data("top",150).data("location",10).data("fortify",false);

        $("#space11").data("move1",'4').data("move2",'').data("move3",'').data("move4",'').data("left",150).data("top",85).data("location",11).data("fortify",false);
        $("#space12").data("move1",'9').data("move2",'').data("move3",'16').data("move4",'').data("left",210).data("top",150).data("location",12).data("fortify",false);
        $("#space13").data("move1",'14').data("move2",'').data("move3",'9').data("move4",'19').data("left",210).data("top",220).data("location",13).data("fortify",false);
        $("#space14").data("move1",'18').data("move2",'').data("move3",'13').data("move4",'17').data("left",250).data("top",220).data("location",14).data("fortify",false).data("castle",true).data("color",'red').append("<img class='plane' src='Pictures/Plane.gif' />");
        $("#space15").data("move1",'16').data("move2",'').data("move3",'').data("move4",'').data("left",230).data("top",80).data("location",15).data("fortify",false);
        $("#space16").data("move1",'17').data("move2",'').data("move3",'12').data("move4",'').data("left",245).data("top",125).data("location",16).data("fortify",false);
        $("#space17").data("move1",'14').data("move2",'').data("move3",'16').data("move4",'').data("left",275).data("top",165).data("location",17).data("fortify",false);
        $("#space18").data("move1",'20').data("move2",'').data("move3",'14').data("move4",'59').data("left",270).data("top",250).data("location",18).data("fortify",false);
        $("#space19").data("move1",'13').data("move2",'').data("move3",'21').data("move4",'').data("left",190).data("top",260).data("location",19).data("fortify",false);
        $("#space20").data("move1",'70').data("move2",'18').data("move3",'39').data("move4",'43').data("left",270).data("top",290).data("location",20).data("fortify",false);

        $("#space21").data("move1",'27').data("move2",'19').data("move3",'22').data("move4",'').data("left",165).data("top",300).data("location",21).data("fortify",false);
        $("#space22").data("move1",'21').data("move2",'').data("move3",'23').data("move4",'').data("left",120).data("top",310).data("location",22).data("fortify",false);
        $("#space23").data("move1",'22').data("move2",'25').data("move3",'24').data("move4",'').data("left",90).data("top",340).data("location",23).data("fortify",false);
        $("#space24").data("move1",'23').data("move2",'').data("move3",'').data("move4",'').data("left",60).data("top",340).data("location",24).data("fortify",false);
        $("#space25").data("move1",'26').data("move2",'').data("move3",'23').data("move4",'').data("left",120).data("top",370).data("location",25).data("fortify",false);
        $("#space26").data("move1",'27').data("move2",'').data("move3",'29').data("move4",'25').data("left",155).data("top",380).data("location",26).data("fortify",false);
        $("#space27").data("move1",'39').data("move2",'21').data("move3",'28').data("move4",'26').data("left",190).data("top",340).data("location",27).data("fortify",false);
        $("#space28").data("move1",'27').data("move2",'37').data("move3",'').data("move4",'').data("left",210).data("top",380).data("location",28).data("fortify",false);
        $("#space29").data("move1",'26').data("move2",'').data("move3",'36').data("move4",'30').data("left",130).data("top",420).data("location",29).data("fortify",false);
        $("#space30").data("move1",'29').data("move2",'').data("move3",'31').data("move4",'32').data("left",85).data("top",450).data("location",30).data("fortify",false);

        $("#space31").data("move1",'30').data("move2",'').data("move3",'').data("move4",'').data("left",55).data("top",480).data("location",31).data("fortify",false);
        $("#space32").data("move1",'33').data("move2",'').data("move3",'30').data("move4",'').data("left",110).data("top",500).data("location",32).data("fortify",false);
        $("#space33").data("move1",'35').data("move2",'').data("move3",'32').data("move4",'34').data("left",145).data("top",520).data("location",33).data("fortify",false);
        $("#space34").data("move1",'33').data("move2",'').data("move3",'').data("move4",'').data("left",145).data("top",550).data("location",34).data("fortify",false);
        $("#space35").data("move1",'37').data("move2",'').data("move3",'36').data("move4",'33').data("left",185).data("top",480).data("location",35).data("fortify",false);
        $("#space36").data("move1",'35').data("move2",'').data("move3",'29').data("move4",'').data("left",165).data("top",440).data("location",36).data("fortify",false);
        $("#space37").data("move1",'38').data("move2",'').data("move3",'28').data("move4",'35').data("left",220).data("top",425).data("location",37).data("fortify",false);
        $("#space38").data("move1",'42').data("move2",'').data("move3",'37').data("move4",'').data("left",260).data("top",410).data("location",38).data("fortify",false);
        $("#space39").data("move1",'20').data("move2",'').data("move3",'27').data("move4",'').data("left",240).data("top",320).data("location",39).data("fortify",false).data("castle",true).data("color",'green').append("<img class='plane' src='Pictures/Plane.gif' />");
        $("#space40").data("move1",'41').data("move2",'').data("move3",'44').data("move4",'').data("left",280).data("top",520).data("location",40).data("fortify",false);

        $("#space41").data("move1",'42').data("move2",'').data("move3",'47').data("move4",'40').data("left",295).data("top",455).data("location",41).data("fortify",false);
        $("#space42").data("move1",'43').data("move2",'53').data("move3",'38').data("move4",'41').data("left",300).data("top",390).data("location",42).data("fortify",false).data("castle",true).data("color",'blue').append("<img class='plane' src='Pictures/Plane.gif' />");
        $("#space43").data("move1",'20').data("move2",'').data("move3",'56').data("move4",'42').data("left",300).data("top",340).data("location",43).data("fortify",false);
        $("#space44").data("move1",'40').data("move2",'').data("move3",'46').data("move4",'45').data("left",350).data("top",535).data("location",44).data("fortify",false);
        $("#space45").data("move1",'44').data("move2",'').data("move3",'48').data("move4",'').data("left",420).data("top",545).data("location",45).data("fortify",false);
        $("#space46").data("move1",'44').data("move2",'47').data("move3",'48').data("move4",'').data("left",410).data("top",500).data("location",46).data("fortify",false);
        $("#space47").data("move1",'41').data("move2",'53').data("move3",'46').data("move4",'').data("left",355).data("top",480).data("location",47).data("fortify",false);
        $("#space48").data("move1",'46').data("move2",'45').data("move3",'49').data("move4",'').data("left",475).data("top",505).data("location",48).data("fortify",false);
        $("#space49").data("move1",'48').data("move2",'').data("move3",'').data("move4",'').data("left",515).data("top",530).data("location",49).data("fortify",false);
        $("#space50").data("move1",'51').data("move2",'').data("move3",'').data("move4",'').data("left",505).data("top",440).data("location",50).data("fortify",false);

        $("#space51").data("move1",'52').data("move2",'').data("move3",'50').data("move4",'').data("left",450).data("top",445).data("location",51).data("fortify",false);
        $("#space52").data("move1",'53').data("move2",'').data("move3",'54').data("move4",'51').data("left",405).data("top",430).data("location",52).data("fortify",false);
        $("#space53").data("move1",'42').data("move2",'47').data("move3",'52').data("move4",'').data("left",370).data("top",410).data("location",53).data("fortify",false);
        $("#space54").data("move1",'52').data("move2",'').data("move3",'55').data("move4",'').data("left",455).data("top",395).data("location",54).data("fortify",false);
        $("#space55").data("move1",'54').data("move2",'').data("move3",'').data("move4",'').data("left",505).data("top",375).data("location",55).data("fortify",false);
        $("#space56").data("move1",'43').data("move2",'').data("move3",'57').data("move4",'58').data("left",335).data("top",320).data("location",56).data("fortify",false);
        $("#space57").data("move1",'56').data("move2",'').data("move3",'66').data("move4",'').data("left",370).data("top",290).data("location",57).data("fortify",false)
        $("#space58").data("move1",'56').data("move2",'60').data("move3",'59').data("move4",'66').data("left",345).data("top",255).data("location",58).data("fortify",false).data("castle",true).data("color",'yellow').append("<img class='plane' src='Pictures/Plane.gif' />");
        $("#space59").data("move1",'18').data("move2",'').data("move3",'58').data("move4",'').data("left",320).data("top",230).data("location",59).data("fortify",false);
        $("#space60").data("move1",'58').data("move2",'').data("move3",'61').data("move4",'').data("left",345).data("top",190).data("location",60).data("fortify",false);

        $("#space61").data("move1",'60').data("move2",'').data("move3",'62').data("move4",'').data("left",345).data("top",135).data("location",61).data("fortify",false);
        $("#space62").data("move1",'61').data("move2",'').data("move3",'').data("move4",'').data("left",345).data("top",90).data("location",62).data("fortify",false);
        $("#space63").data("move1",'64').data("move2",'').data("move3",'').data("move4",'').data("left",405).data("top",90).data("location",63).data("fortify",false);
        $("#space64").data("move1",'65').data("move2",'').data("move3",'63').data("move4",'').data("left",405).data("top",140).data("location",64).data("fortify",false);
        $("#space65").data("move1",'66').data("move2",'').data("move3",'67').data("move4",'64').data("left",405).data("top",190).data("location",65).data("fortify",false);
        $("#space66").data("move1",'58').data("move2",'57').data("move3",'65').data("move4",'').data("left",400).data("top",240).data("location",66).data("fortify",false);
        $("#space67").data("move1",'65').data("move2",'').data("move3",'68').data("move4",'').data("left",450).data("top",175).data("location",67).data("fortify",false);
        $("#space68").data("move1",'67').data("move2",'').data("move3",'69').data("move4",'').data("left",470).data("top",140).data("location",68).data("fortify",false);
        $("#space69").data("move1",'68').data("move2",'').data("move3",'').data("move4",'').data("left",470).data("top",95).data("location",69).data("fortify",false);
    }
setlocationstuff();
    //starting units
    var going=false;
    var tempclass="";
    for(var i =1;i<7;i++){
      newunit();
    }
function newunit(){
    going=true;
    while(going===true){
        going=false;
        var temp=Math.floor((Math.random() * 12) + 1);

        switch(temp){
            case 1:
                tempclass="Guard";
                break;
            case 2:
                tempclass="Enchantress";
                break;
            case 3:
                tempclass="Healer";
                break;
            case 4:
                tempclass="Mage";
                break;
            case 5:
                tempclass="Wizard";
                break;
            case 6:
                tempclass="Sorcerer";
                break;
            case 7:
                tempclass="Rouge";
                break;
            case 8:
                tempclass="Archer";
                break;
            case 9:
                tempclass="Templar";
                break;
            case 10:
                tempclass="Soldier";
                break;
            case 11:
                tempclass="Thief";
                break;
            case 12:
                tempclass="Knight";
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
    switch(tempclass){
        case "Guard":
            units[index]= new Guard(index);
            break;
        case "Soldier":
            units[index]= new Soldier(index);
            break;
        case "Mage":
            units[index]= new Mage(index);
            break;
        case "Rouge":
            units[index]= new Rouge(index);
            break;
        case "Templar":
            units[index]= new Templar(index);
            break;
        case "Archer":
            units[index]= new Archer(index);
            break;
        case "Sorcerer":
            units[index]= new Sorcerer(index);
            break;
        case "Wizard":
            units[index]= new Wizard(index);
            break;
        case "Enchantress":
            units[index]= new Enchantress(index);
            break;
        case "Healer":
            units[index]= new Healer(index);
            break;
        case "Knight":
            units[index]= new Knight(index);
            break;
        case "Thief":
            units[index]= new Thief(index);
            break;
    }
}


    units[-1]= new Soldier(-1);
    Eunits[-1]= new Warrior(-1);
    //grouping in barracks////////////////////////////////////////////////////////////////////
    var groupindex=1;
    function groupunit(){
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
                    top: 160-temptop + 'px'
                }, 500);
                return;
            }
            if (spot2===""){
                spot2=$(this).attr("id");
                $(this).animate({
                    left: 680 - templeft + 'px',
                    top: 160-temptop + 'px'
                }, 500);
                return;
            }
            if (spot3===""){
                spot3=$(this).attr("id");
                $(this).animate({
                    left: 767 - templeft + 'px',
                    top: 160-temptop + 'px'
                }, 500);
                return;
            }

        })
    }
    //creates a new group


    function creategroup(){
        $("#createbutton").click(function(){
            if (spot1===""){
                message("There has to be at least one unit to make a group.");
                    return;
            }
            if ($("#space70").data('filled')===0){
                groups[groupindex]= new newgroup(groupindex);
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
                tipmessage("creategroup","Good, you created your first group. Click on it to select it, and then rightclick a connected space to move it there. You can also fly instantly between any two fortified places like the capitol and the castles.");
                spot1="";
                spot2="";
                spot3="";
                groupinfo();

                $("#space1").data('filled',groupindex);

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



    //exchange////////////////////////////////////////////////////////////////////////////
    function exchangeunits(temp){
        var location2 = groups[temp].location;
        var location1= groups[curgroupnum].location;
        var isfortified = false;
        if((($("#space" + location1).data("fortify")==true) || ($("#space" + location1).data("castle")==true)) && ($("#space" + location2).data("fortify")==true || $("#space" + location2).data("castle")==true)){
isfortified=true;
        }

        if(($("#space" + location2).data("move1")!=location1 && $("#space" + location2).data("move2")!=location1 && $("#space" + location2).data("move3")!=location1 && $("#space" + location2).data("move4")!=location1) && isfortified===false){

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
                exchangeunits(temp);
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
                    exchangeunits(temp);
                }



            }
        });
        getstats();
    }
    function newgroup(e){
        this.index=e;
        this.location=70;
        this.hasmoved=false;
        this.active=true;
        this.curleft=310;
        this.curtop=280;

        this.slot1=-1;
        this.slot2=-1;
        this.slot3=-1;
        $('#background').append('<img src="Pictures/soldiericon.png" class="icon" id="M' + groupindex +'" style="left: 310px; top:280px" />');
        groupindex+=1;
    }


    //Get information//////////////////////////////////////////////////////////////////////////////
    function getstats(){
        $('.barrackpic').click(function(){
                var curunit = $(this).attr('id');
            $("#stats").remove();
                $("body").append('<div id="stats"></div>');
                $("#stats").append("<p>" + units[curunit].name + "</p><p>Level: " + units[curunit].level +
                "</p><p>Type: " + units[curunit].type +
                "</p><p>Health: " + units[curunit].health + "/" + units[curunit].maxhealth + "</p><p>Attack: " + units[curunit].attack + "</p><p>Defense: " + units[curunit].defense + "</p><p>Resistance: " + units[curunit].resistance + "</p><p>" + units[curunit].weapon + "</p><p>" + units[curunit].armor + "</p><p>" + units[curunit].accessory + "</p> ")
        });
        $('.Ebarrackpic').click(function(){
            var curunit = $(this).attr('id');
            curunit=parseInt(curunit.replace("E",""));
            $("#stats").remove();
            $("body").append('<div id="stats"></div>');
            $("#stats").append("<p>Type: " + Eunits[curunit].type + "</p><p>Health: " + Eunits[curunit].health + "</p><p>Attack: " + Eunits[curunit].attack + "</p><p>Defense: " + Eunits[curunit].defense + "</p><p>Resistance: " + Eunits[curunit].resistance + "</p><p>" + Eunits[curunit].description + "</p>")
        });
        $('#background').click(function(e){
                $("#stats").remove();
        });
    }
    //check who is in a group

    function groupinfo(){
        $('.icon').click(function(){

            $(".icon").removeClass("highlight");
            $(this).addClass("highlight");
            curgroupnum = $(this).attr("id").replace("M", "");
            curgroupnum = parseInt(curgroupnum, 10);
            dothis();
            function dothis() {
                curindex="";
                $('#TEXT').empty();
                $("#TEXT").append("<p>Click and then rightclick to switch location.</p>");
                for (var j = 1; j < 4; j++) {
                    for (var i = 0; i < index; i++) {
                        if (units[i].group === curgroupnum && units[i].slot === j) {
                            $("#TEXT").append('<div id="barracks"></div>');
                            $("#barracks").append(units[i].picture);
                            $('#' + i).append('<div class="healthbar" id = "HB' + i + '" style="position: relative; margin-top:90%; width: ' + (units[i].health / units[i].maxhealth) * 100 + '%"></div><div class="level"><p>' + units[i].level + '</p></div>');
                            if (units[i].type === "Sorcerer") {
                                $("#" + i).append('<div class="manabar" id ="EB' + i + '"style="width: ' + (sorcerermana) + '%"></div>');
                            }
                            if (units[i].type === "Healer") {
                                $("#" + i).append('<div class="healerbar" id ="EB' + i + '"style="width: ' + (units[i].power) + '%"></div>');
                            }
                        }
                    }
                }
                $("#barracks").append('<p></p>');

                $(".barrackpic").click(function () {
                    curindex = $(this).attr("id");
                    $("*").removeClass("selectedUnit")
                    $(this).addClass("selectedUnit")
                });
                $(".barrackpic").mousedown(function(e){
                    if(e.button === 2 ) {
                        var slotfor1=units[curindex].slot;
                        var slotfor2=units[$(this).attr("id")].slot;
                        units[curindex].slot=slotfor2;
                        units[$(this).attr("id")].slot=slotfor1;
                        $("#TEXT").empty();
                        dothis();
                    }
                });

                $(".actions").empty();
                $(".actions").append("<div class = 'actionbutton' id='Pass'><p>Pass</p></div>");
                if (groups[curgroupnum].location === 70) {
                    $(".actions").append("<div class = 'actionbutton' id='Return'><p>Return</p></div>")
                } else {
                    $(".actions").append("<div class = 'actionbutton' id='Explore'><p>Explore</p></div>");
                }

                if ($('#space' + groups[curgroupnum].location).data("fortify") === true || $('#space' + groups[curgroupnum].location).data("castle") === true) {
                    $(".actions").append("<div class = 'actionbutton'  id = 'Armory'>Equip</div>");
                    $(".actions").append("<div class = 'actionbutton'  id = 'Hospital'>Heal</div>");
                }

                if ($('#space' + groups[curgroupnum].location).data("istown") === true && $('#space' + groups[curgroupnum].location).data("fortify") != true) {
                    $(".actions").append("<div class = 'actionbutton'  id = 'Fortify'>Fortify</div>");
                }

                $('#Fortify').click(function () {
                    if (groups[curgroupnum].hasmoved === true) {
                        message("Groups can only do one action a turn.");
                        return;
                    }
                    if (money < 10) {
                      message("You need at least 10 gold to fortify.");
                      return
                    }
                    $('#space' + groups[curgroupnum].location).data("fortify", true);
                    money -= 10;
                    showwall();
                    groups[curgroupnum].hasmoved = true;
                    $("#M" + curgroupnum).addClass("grayicon");
                    $('#top').empty();
                    $('#top').append("<h1 class = 'heading'>Day: " + day + "</h1>");
                    $('#top').append("<h1 class = 'heading'>Money: " + money + "</h1>");
                    $('#top').append("<h1 class = 'heading'>Research: " + currentresearch() + "</h1>");
                })

                presspass();
                getstats();

            }
        });


    }
    function Egroupinfo(){

        $('.Eicon').click(function(){
            curgroupnum=$(this).attr("id");
            curgroupnum=curgroupnum.replace("EM","");
            curgroupnum=parseInt(curgroupnum,10);
            $('#TEXT').empty();
            for(var i =0;i<Eindex;i++){
                if(Eunits[i].group===curgroupnum && Eunits[i].alive===true){
                    $("#TEXT").append('<div id="barracks"></div>');
                    $("#barracks").append(Eunits[i].picture);
                    $('#E' +i).append('<div class="Ehealthbar" id = "HB' + i + '" style="position: absolute; margin-top:90%; width: ' + (Eunits[i].health/Eunits[i].maxhealth)*100 + '%"></div>');
                }
            }
            getstats()
        });

    }

//move good guys groups//////////////////////////////////////////////////////////////////////////////
    $(".areas").mousedown(function(e){
        if(e.button === 2 ) {

            $(".actions").empty();
            $('#TEXT').empty();
            $(".actions").append("<div class = 'actionbutton' id='Pass'><p>Pass</p></div>");
            presspass();
            tipmessage("movingmessage","Good, you moved your group and it turned gray. That means is can't move again until next turn. When you click your groups, action buttons appear below the map. When you are done with your turn, click 'Pass");
            var activenum = $('.highlight').attr('id').replace("M", "");
            var curloc = groups[activenum].location;
            if ($(this).data('filled') != 0) {
                message("There is already a group there!");
                return;
            }
            if (groups[activenum].hasmoved === true) {
                return;
            }
            if (groups[activenum].flight===true || ((($(this).data("fortify")==true) || ($(this).data("castle")==true)) && ($("#space" + groups[activenum].location).data("fortify")==true || $("#space" + groups[activenum].location).data("castle")==true)) || (groups[activenum].location == $(this).data("move1") || groups[activenum].location == $(this).data("move2") || groups[activenum].location == $(this).data("move3") || groups[activenum].location == $(this).data("move4"))) {
                $('.highlight').animate({
                    left: $(this).data("left") + 'px',
                    top: $(this).data("top") + 'px'
                });

                groups[activenum].location = $(this).data('location');
                groups[activenum].curleft = $(this).data("left");
                groups[activenum].curtop = $(this).data("top");
                groups[activenum].hasmoved = true;
                groups[activenum].flight=false;
                $(".highlight").addClass("grayicon");

                clearspaces(curloc);

                $(this).data('filled',groups[activenum].index);
            }
            curloc = groups[activenum].location;
            startcombat();
            if(curloc===14 && redkingdom === false && redtowns>2){
                redkingdom = true;
                $("#TEXT").append("<p>The red kingdom has started supporting you again.</p>");
                $("#space14").empty();
                $("#space14").append("<img class='plane' src='Pictures/Plane.gif' />")
            }
            if(curloc===39 && greenkingdom === false && greentowns>2){
                greenkingdom = true;
                $("#TEXT").append("<p>The green kingdom has started supporting you again.</p>");
                $("#space39").empty();
                $("#space39").append("<img class='plane' src='Pictures/Plane.gif' />")
            }
            if(curloc===42 && bluekingdom === false && bluetowns>2){
                bluekingdom = true;
                $("#TEXT").append("<p>The blue kingdom has started supporting you again.</p>");
                $("#space42").empty();
                $("#space42").append("<img class='plane' src='Pictures/Plane.gif' />")
            }
            if(curloc===58 && yellowkingdom === false && yellowtowns>2){
                yellowkingdom = true;
                $("#TEXT").append("<p>The yellow kingdom has started supporting you again.</p>");
                $("#space58").empty();
                $("#space58").append("<img class='plane' src='Pictures/Plane.gif' />")
            }

           liberate(curloc);
        }
    });
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
    function clickEicon(){
        $(".Eicon").mousedown(function(e){
            if(e.button === 2 ) {
                if(battleon===true){
                    return;
                }
                $('#TEXT').empty();
                var activenum = $('.highlight').attr('id').replace("M", "");
                var enemynum=$(this).attr('id').replace("EM","");
                var enemylocation=Egroups[enemynum].location;
                var curloc = groups[activenum].location;
                if (groups[activenum].hasmoved === true) {
                    return;
                }
                if ((($("#space" + enemylocation).data("fortify")===true || $("#space" + enemylocation).data("castle")===true) && ($("#space" + groups[activenum].location).data("fortify")===true || $("#space" + groups[activenum].location).data("castle")===true || groups[activenum].location===70)) ||
                groups[activenum].location == $("#space" + enemylocation).data("move1") || groups[activenum].location == $("#space" + enemylocation).data("move2") || groups[activenum].location == $("#space" + enemylocation).data("move3") || groups[activenum].location == $("#space" + enemylocation).data("move4")) {
                    groups[activenum].curleft=$("#space" + enemylocation).data("left");
                        groups[activenum].curtop=$("#space" + enemylocation).data("top");
                    $('.highlight').animate({
                        left: $("#space" + enemylocation).data("left") + 'px',
                        top: $("#space" + enemylocation).data("top") + 'px'
                    });

                    groups[activenum].location = enemylocation;
                    groups[activenum].hasmoved = true;
                    $(".highlight").addClass("grayicon");

                    clearspaces(curloc);

                    $("#space" + enemylocation).data('filled',groups[activenum].index);
                }
                startcombat();
            }
        });
    }
function clearspaces(e){

           $("#space" + e).data('filled',0);

}

//Map stuff//////////////////////////////////////////////////////////////////////////////////////

function assignlocations() {
    var locate = 0;
    var temp = 0;


            while (temp < 5) {
                locate = Math.floor((Math.random() * 19) + 1);
                if (locate != 14 && locate != 39 && locate != 42 && locate != 58) {
                    if ($('#space' + locate).data('istown') != true) {
                        $('#space' + locate).append("<img class='townareas' src='Pictures/Town.gif' />");
                        $('#space' + locate).data('istown', true);
                        $('#space' + locate).data('color', "Red");
                        temp += 1;
                    }
                }
            }
            temp = 0;
            while (temp < 5) {
                locate = Math.floor((Math.random() * 19) + 21);
                if (locate != 14 && locate != 39 && locate != 42 && locate != 58) {
                    if ($('#space' + locate).data('istown') != true) {
                        $('#space' + locate).append("<img class='townareas' src='Pictures/Town.gif' />");
                        $('#space' + locate).data('istown', true);
                        $('#space' + locate).data('color', "Green");
                        temp += 1;
                    }
                }
            }
            temp = 0;
            while (temp < 5) {
                locate = Math.floor((Math.random() * 14) + 41);
                if (locate != 14 && locate != 39 && locate != 42 && locate != 58) {
                    if ($('#space' + locate).data('istown') != true) {
                        $('#space' + locate).append("<img class='townareas' src='Pictures/Town.gif' />");
                        $('#space' + locate).data('istown', true);
                        $('#space' + locate).data('color', "Blue");
                        temp += 1;
                    }
                }
            }
            temp = 0;
            while (temp < 5) {
                locate = Math.floor((Math.random() * 14) + 56);
                if (locate != 14 && locate != 39 && locate != 42 && locate != 58) {
                if ($('#space' + locate).data('istown') != true) {
                    $('#space' + locate).append("<img class='townareas' src='Pictures/Town.gif' />");
                    $('#space' + locate).data('istown', true);
                    $('#space' + locate).data('color', "Yellow");
                    temp += 1;
                }
            }
        }
}
assignlocations();

    function Explore(){

        var curlocation = groups[curgroupnum].location;
        var lootdate=$('#space' + curlocation).data('loot');
        var treasure = Math.floor((Math.random() * 20) + 1);
        $("#TEXT").empty();

        if (typeof lootdate ==='undefined' || lootdate==="" || lootdate>0){
            $('#TEXT').append("Found Nothing");
            return;
        }
        $('#space' + curlocation).data('loot',10);
        if(treasure<6){
            $('#TEXT').append("Found two " + ingredient[treasure].name);
            ingredient[treasure].quantity+=2;
        }
        if(treasure<11 && treasure>5){

            $('#TEXT').append("Found " + ingredient[treasure-5].name);
            ingredient[treasure-5].quantity+=1;
        }
        if(treasure<16 && treasure>10){
                    $('#TEXT').append("Beasts attack");
            if(day<=10){
                Eunits[newEindex()]=new Wolf(curEindex, Egroupindex,difflevel);
            }
            if(day<=20 && day>10){
                Eunits[newEindex()]=new Wolf(curEindex, Egroupindex,difflevel);
                Eunits[newEindex()]=new Wolf(curEindex, Egroupindex,difflevel);
            }
            if(day<=30 && day>20){
                Eunits[newEindex()]=new Wolf(curEindex, Egroupindex,difflevel);
                Eunits[newEindex()]=new Wolf(curEindex, Egroupindex,difflevel);
            }
            if(day<=40 && day>30){
                Eunits[newEindex()]=new Wolf(curEindex, Egroupindex,difflevel);
                Eunits[newEindex()]=new Bear(curEindex, Egroupindex,difflevel);
            }
            if(day<=50 && day>40){
                Eunits[newEindex()]=new Wolf(curEindex, Egroupindex,difflevel);
                Eunits[newEindex()]=new Bear(curEindex, Egroupindex,difflevel);
            }
            if(day<=60 && day>50){
                Eunits[newEindex()]=new Bear(curEindex, Egroupindex,difflevel);
                Eunits[newEindex()]=new Bear(curEindex, Egroupindex,difflevel);
            }
            if(day<=70 && day>60){
                Eunits[newEindex()]=new Bear(curEindex, Egroupindex,difflevel);
                Eunits[newEindex()]=new Spider(curEindex, Egroupindex,difflevel);
            }
            if(day<=80 && day>70){
                Eunits[newEindex()]=new Bear(curEindex, Egroupindex,difflevel);
                Eunits[newEindex()]=new Spider(curEindex, Egroupindex,difflevel);
            }
            if(day<=90 && day>80){
                Eunits[newEindex()]=new Wolf(curEindex, Egroupindex,difflevel);
                Eunits[newEindex()]=new Bear(curEindex, Egroupindex,difflevel);
                Eunits[newEindex()]=new Spider(curEindex, Egroupindex,difflevel);
            }
            if(day<=100 && day>90){
                Eunits[newEindex()]=new Wolf(curEindex, Egroupindex,difflevel);
                Eunits[newEindex()]=new Bear(curEindex, Egroupindex,difflevel);
                Eunits[newEindex()]=new Spider(curEindex, Egroupindex,difflevel);
            }
                    Egroups[Egroupindex]=new Enewgroup(curEindex,curlocation,100,"Wolf");
                    startcombat();
            Egroups[Egroupindex-1].location=-2;
            $("#E" + Egroupindex-1).remove();
        }
        if(treasure===16 || treasure===17){
            var temp=Math.floor((Math.random() * 6) + 1);
            $("#TEXT").append("You received a " + accessory[temp].name);
            accessory[temp].quantity+=1;
        }
        if(treasure===18){
            $("#TEXT").append("You received a revive potion");
            revivepotion+=1;
        }
        if(treasure===19){
            if(day<=20){
               money+=25;
                $("#TEXT").append("You found 25 gold.")
            }
            if(day<=40 && day>20){
                money+=50;
                $("#TEXT").append("You found 50 gold.")
            }
            if(day<=60 && day>40){
                money+=75;
                $("#TEXT").append("You found 75 gold.")
            }
            if(day<=80 && day>60){
                money+=100;
                $("#TEXT").append("You found 100 gold.")
            }
            if(day<=100 && day>80){
                money+=125;
                $("#TEXT").append("You found 125 gold.")
            }
        }
        if(treasure===20){
        $("#TEXT").append("<p>You found a wandering dancing troupe. Would you like to see the elegant dancing of Jay Peaham?</p><p class='yes'>YES</p><p class='no'>NO</p>")
            $(".no").click(function(){
                $("#TEXT").empty();
            })
            $(".yes").click(function(){
                $("#TEXT").empty();
$("#TEXT").append("<div class='Jake'><img src='Pictures/Jake.gif' /></div>");

            })
        }
    }

    for(var p = 1;p<69;p++){
        $('#space' + p).data('loot',0)
    }






















    //start combat////////////////////////////////////////////////////////////////

    var selectedunit="";
    var enemyindex="";
    var slots=new Array();
    var Eslots=new Array();
    var curenemy='';
    var curally="";
    var curlocation="";
    var curexperience=0;
    var lootenemy= new Array();
    lootenemy[1]="";
    lootenemy[2]="";
    lootenemy[3]="";
    lootenemy[4]="";
    lootenemy[5]="";


    function startcombat(){


        //check if there's a fight
        for (var i =1;i<groupindex;i++){

            if(groups[i].location<0 || groups[i].location===undefined){
                continue;
            }

            for (var j=1;j<Egroupindex;j++){
                if(Egroups[j].location==undefined || Egroups[j].location<0){
                    continue;
                }
                if(groups[i].location===Egroups[j].location){
                    //reset everyone
                    setTimeout(function(){
                        $("#battlebackground").fadeIn();
                    },500);
                    setTimeout(function(){
                        $("#temp").remove();
                    },1000);
                    curbattlemusic.src="sounds/music-main game.mp3";
                    curbattlemusic.loop=true;
                    curbattlemusic.play();
                    curmapmusic.src="";
                    curmapmusic.play();
                    var testnum=0;
                    for(var w =0;w<index;w++){

                        if(units[w].group===undefined){
                            continue;
                        }
                        units[w].moved=false;
                        units[w].usedaction=false;
                        units[w].usedspecial=false;
                        units[w].protectedby=-1;
                        units[w].immobilized=0;
                        units[w].blind=0;
                        units[w].silenced=0;
                        units[w].sleep=0;
                        units[w].poison=0;
                        units[w].stormactive=false;
                        units[w].defensetempboost=0;
                        units[w].attacktempboost=0;


                            units[w].immune=groups[i].immune;
                            units[w].frosttouch=groups[i].frosttouch;
                            units[w].storm=groups[i].storm;
                            units[w].aetherban=groups[i].aetherban;


                        if(units[w].group===i){
                            testnum+=1;
                        }
                        if(units[w].type==="Templar" || units[w].type==="Soldier" || units[w].type==="Mage" || units[w].type==="Enchantress" || units[w].type==="Wizard" || units[w].type==="Rouge" || units[w].type==="Archer" || units[w].type==="Thief" || units[w].type==="Sorcerer" || units[w].type==="Healer"){
                            units[w].energy=0;
                        }
                        if(units[w].type==="Wizard"){
                            if(units[w].abilitystartcharge===true){
                                units[w].charge=2;
                            } else{
                                units[w].charge=0;
                            }
                        }
                        if(units[w].type==="Rouge"){
                            units[w].usedblindness=units[w].arrowcapacity;
                            units[w].usedsleep=units[w].arrowcapacity;
                            units[w].usedenfeeble=units[w].arrowcapacity;
                            units[w].usedpoison=units[w].arrowcapacity;
                        }
                        if(units[w].type==="Templar"){
                            units[w].usedsilence=units[w].arrowcapacity;
                            units[w].usedimmobilize=units[w].arrowcapacity;
                            units[w].useddisrupt=units[w].arrowcapacity;
                            units[w].usedgrappling=units[w].arrowcapacity;
                        }
                        if(units[w].type==="Archer"){
                            units[w].usedtitan=units[w].arrowcapacity;
                            units[w].usedimmobolize=units[w].arrowcapacity;
                            units[w].usedexploding=units[w].arrowcapacity;
                            units[w].usedpierce=units[w].arrowcapacity;
                        }
                        if(units[w].type==="Guard"){
                            if(units[w].abilityincreaseenergy){
                                units[w].energy=50;
                            } else {
                                units[w].energy=25;
                            }
                        }
                        if(units[w].type==="Knight"){
                                units[w].energy=100;
                        }
                        if(units[w].type=="Thief" && units[w].abilityinvisible==true){
                            units[w].type = "Invisible";
                        }
                    }
                    if(testnum===0){
                        groups[i].location=-1;
                        continue;
                    }
                    for(var q =0;q<Eindex;q++){
if(Eunits[q].group!=j){
    continue;
}
                        Eunits[q].moved=false;
                        if(Eunits[q].charge != "None"){
                            Eunits[q].charge=0;
                        }
                        Eunits[q].usedaction=false;
                        Eunits[q].immobilized=0;
                        Eunits[q].blind=0;
                        Eunits[q].silenced=0;
                        Eunits[q].sleep=0;
                        Eunits[q].poison=0;
                        Eunits[q].enfeeble=0;
                        if(Eunits[q].type==="Spitter"){
                            Eunits[q].usedimmobilized=3;
                        }
                    }
                    //create battle area//
                    $("#stats").remove();
                    curenemy=j;
                    curally=i;
                    curlocation=groups[i].location;
                    curexperience=Egroups[j].experience;
                    $(".actions").empty();

                    var backgroundpic="";
                    if(groups[i].location<20){
                        backgroundpic="Pictures/backgroundpics/mountainbackground.png"
                    }
                    if(groups[i].location>=20 && groups[i].location<40){
                        backgroundpic="Pictures/backgroundpics/grassbackground.png"
                    }
                    if(groups[i].location>=40 && groups[i].location<56){
                        backgroundpic="Pictures/backgroundpics/sandbackground.png"
                    }
                    if(groups[i].location>=56){
                        backgroundpic="Pictures/backgroundpics/desertbackground.png"
                    }
                    if($("#space" + groups[i].location).data("castle")===true){
                        backgroundpic="Pictures/backgroundpics/castlebackground.png"
                    }
                    if($("#space" + groups[i].location).data("istown")===true){
                        backgroundpic="Pictures/backgroundpics/townbackground.png"
                    }
                    $('body').append("<div id = 'battlebackground'><img style='width: 100%; height:100%' src='" + backgroundpic +"' /></div>");
                   $('#background').append("<img class = 'icon' id='temp' style='left: " + groups[i].curleft + "px; top: " + groups[i].curtop + "px' src='" + backgroundpic +"' />");
                    $('#temp').animate({
                        width: 500+'px',
                        height: 500+'px',
                        left:50 + 'px',
                        top:70 + 'px'
                    }, 500);
                    var vert = 1;
                    var horz = 1;
                    var addLeft=15;
                    var addTop=15;
                    for (var q = 1; q<26; q++) {
                        $("#battlebackground").append("<div class='battleareas' id = 'space" + vert + horz + "' style ='position: absolute; LEFT: " + addLeft + "px; Top:" + addTop + "px'></div>");

                        if (addLeft < 400) {
                            addLeft += 100;
                            vert+=1;
                        } else {
                            horz+=1;
                            addTop += 100;
                            addLeft = 15;
                            vert=1;
                        }
                    }

                    $("#passarea").append("<div class = 'actionbutton' id='PassTurn'>PassTurn</div>");
                    $("#passarea").append("<div class = 'actionbutton' id='Escape'>Escape</div>");

                        passturnbutton();

                    battleon=true;
                    //put in units

                    slots[1]=-1;
                    slots[2]=-1;
                    slots[3]=-1;

                    var currenttop = 425;
                    if(groups[i].haste===true){
                        currenttop = 125;
                    }
                    for(k=0;k<index;k++){
                        if(units[k].group===i){
                            if (slots[1]===-1 && units[k].slot===1){
                                slots[1]=k;
                            } else if (slots[2]===-1 && units[k].slot===2){
                                slots[2]=k;
                            } else if (slots[3]===-1 && units[k].slot===3){
                                slots[3]=k;
                            }
                        }
                    }
                    if (slots[1]!=-1){
                        units[slots[1]].curleft=125;
                        units[slots[1]].curtop=currenttop;
                        $('#battlebackground').append('<div STYLE="position:absolute; TOP:' + currenttop + 'px; LEFT:125px;" class="unit"  id="' + slots[1] + '" ><img src="' + units[slots[1]].image + '"/></div>');
                        $('#' + slots[1]).append('<div class="healthbar" id = "HB' + slots[1] + '" style="width: ' + (units[slots[1]].health/units[slots[1]].maxhealth)*100 + '%"></div><div class="level"><p>' + units[slots[1]].level + '</p></div><div class="energybar" id ="EB' + units[slots[1]].index + '"style="width: ' + (units[slots[1]].energy) + '%"></div>');
                        if(units[slots[1]].type==="Wizard"){
                            $('#' + slots[1]).append('<img style="position: absolute; margin-top:40px; margin-left:-30px; width:35px; height:35px" src="Pictures/Orb.gif" /><div id = "ORB' + slots[1] + '" style="color: yellow; position: absolute; font-size:20px; margin-top:-30px; margin-left:55px; width:10px; height:10px ">' + units[slots[1]].charge +'</div>');
                        }
                        if(units[slots[1]].type==="Enchantress"){
                            $('#' + slots[1]).append('<img style="position: absolute; margin-top:40px; margin-left:-30px; width:48px; height:35px" src="Pictures/Orb.gif" /><div id = "ORB' + slots[1] + '" style="color: yellow; position: absolute; font-size:17px; margin-top:-27px; margin-left:50px; width:10px; height:10px ">' + units[slots[1]].mana +'</div>');
                        }
                        if(units[slots[1]].type==="Sorcerer"){
                            $("#" +slots[1]).append('<div class="manabar" id ="EB' + slots[1] + '"style="width: ' + (sorcerermana) + '%"></div>');
                        }
                        if(units[slots[1]].type==="Healer"){
                            $("#" +slots[1]).append('<div class="healerbar" id ="EB' + slots[1] + '"style="width: ' + (units[slots[1]].power) + '%"></div>');
                        }

                        if(units[slots[1]].type==="Invisible"){
                           $("#" + slots[1]).addClass("Invisible");
                        }
                    }
                    if (slots[2]!=-1){
                        units[slots[2]].curleft=225;
                        units[slots[2]].curtop=currenttop;
                        $('#battlebackground').append('<div STYLE="position:absolute; TOP:' + currenttop + 'px; LEFT:225px;" class="unit"  id="' + slots[2] + '" ><img src="' + units[slots[2]].image + '"/></div>');
                        $('#' + slots[2]).append('<div class="healthbar" id = "HB' + slots[2] + '" style="width: ' + (units[slots[2]].health/units[slots[2]].maxhealth)*100 + '%"></div><div class="level"><p>' + units[slots[2]].level + '</p></div><div class="energybar" id ="EB' + units[slots[2]].index + '"style="width: ' + (units[slots[2]].energy) + '%"></div>');
                        if(units[slots[2]].type==="Wizard"){
                            $('#' + slots[2]).append('<img style="position: absolute; margin-top:40px; margin-left:-30px; width:35px; height:35px" src="Pictures/Orb.gif" /><div id = "ORB' + slots[2] + '" style="color: yellow; position: absolute; font-size:20px; margin-top:-30px; margin-left:55px; width:10px; height:10px ">' + units[slots[2]].charge +'</div>');
                        }
                        if(units[slots[2]].type==="Enchantress"){
                            $('#' + slots[2]).append('<img style="position: absolute; margin-top:40px; margin-left:-30px; width:48px; height:35px" src="Pictures/Orb.gif" /><div id = "ORB' + slots[2] + '" style="text-align: center; position: absolute; font-size:17px; margin-top:-27px; margin-left:50px; width:10px; height:10px ">' + units[slots[2]].mana +'</div>');
                        }
                        if(units[slots[2]].type==="Sorcerer"){
                            $("#" +slots[2]).append('<div class="manabar" id ="EB' + units[slots[2]].index + '"style="width: ' + (sorcerermana) + '%"></div>');
                        }
                        if(units[slots[2]].type==="Healer"){
                            $("#" +slots[2]).append('<div class="healerbar" id ="EB' + slots[2] + '"style="width: ' + (units[slots[2]].power) + '%"></div>');
                        }
                        if(units[slots[2]].type==="Invisible"){
                            $("#" + slots[2]).addClass("Invisible");
                        }
                    }
                    if (slots[3]!=-1){
                        units[slots[3]].curleft=325;
                        units[slots[3]].curtop=currenttop;
                        $('#battlebackground').append('<div STYLE="position:absolute; TOP:' + currenttop + 'px; LEFT:325px;" class="unit"  id="' + slots[3] + '" ><img src="' + units[slots[3]].image + '"/></div>');
                        $('#' + slots[3]).append('<div class="healthbar" id = "HB' + slots[3] + '" style="width: ' + (units[slots[3]].health/units[slots[3]].maxhealth)*100 + '%"></div><div class="level"><p>' + units[slots[3]].level + '</p></div><div class="energybar" id ="EB' + units[slots[3]].index + '"style="width: ' + (units[slots[3]].energy) + '%"></div>');
                        if(units[slots[3]].type==="Wizard"){
                            $('#' + slots[3]).append('<img style="position: absolute; margin-top:40px; margin-left:-30px; width:35px; height:35px" src="Pictures/Orb.gif" /><div id = "ORB' + slots[3] + '" style="color: yellow;position: absolute; font-size:20px; margin-top:-30px; margin-left:55px; width:10px; height:10px ">' + units[slots[3]].charge +'</div>');
                        }
                        if(units[slots[3]].type==="Sorcerer"){
                            $("#" +slots[3]).append('<div class="manabar" id ="EB' + units[slots[3]].index + '"style="width: ' + (sorcerermana) + '%"></div>');
                        }
                        if(units[slots[3]].type==="Enchantress"){
                            $('#' + slots[3]).append('<img style="position: absolute; margin-top:40px; margin-left:-30px; width:48px; height:35px" src="Pictures/Orb.gif" /><div id = "ORB' + slots[3] + '" style="text-align: center; position: absolute; font-size:17px; margin-top:-27px; margin-left:50px; width:10px; height:10px ">' + units[slots[3]].mana +'</div>');
                        }
                        if(units[slots[3]].type==="Healer"){
                            $("#" +slots[3]).append('<div class="healerbar" id ="EB' + slots[3] + '"style="width: ' + (units[slots[3]].power) + '%"></div>');
                        }
                        if(units[slots[3]].type==="Invisible"){
                            $("#" + slots[3]).addClass("Invisible");
                        }
                    }



                    Eslots[1]=-1;
                    Eslots[2]=-1;
                    Eslots[3]=-1;
                    Eslots[4]=-1;
                    Eslots[5]=-1;

                    for(k=0;k<Eindex;k++){
                        if(Eunits[k].group===j && Eunits[k].alive===true){
                                if (Eslots[1]===-1){
                                    Eslots[1]=k;
                                } else if (Eslots[2]===-1){
                                    Eslots[2]=k;
                                } else if (Eslots[3]===-1){
                                    Eslots[3]=k;
                                }else if (Eslots[4]===-1){
                                    Eslots[4]=k;
                                } else if (Eslots[5]===-1){
                                    Eslots[5]=k;
                                }
                        }
                    }
                    //to shift units left if more than 3 enemies
var mult = 0;
                    if(Eslots[4]!=-1){
                        mult=1
                    }



                    Eunits[Eslots[1]].curleft=125-mult*100;
                    Eunits[Eslots[1]].curtop=25;

                        $('#battlebackground').append('<div STYLE="position:absolute; TOP:25px; LEFT:' +  Eunits[Eslots[1]].curleft + 'px;" class="Eunit"  id="E' + Eslots[1] + '" ><img src="' + Eunits[Eslots[1]].image + '"/></div>');
                    $("#battlebackground").hide();
                        $('#E' + Eslots[1]).append('<div class="healthbar" id = "EHB' + Eslots[1] + '" style="width: ' + (Eunits[Eslots[1]].health/Eunits[Eslots[1]].maxhealth)*100 + '%"></div>');
                    if(Eunits[Eslots[1]].charge===0){
                        var maxcharge = 0;
                        if(Eunits[Eslots[1]].type === "Fire Elemental" || Eunits[Eslots[1]].type === "Beekeeper" || Eunits[Eslots[1]].type === "Necromancer" || Eunits[Eslots[1]].type === "Shaman" || Eunits[Eslots[1]].type === "Wisp" || Eunits[Eslots[1]].type === "Frostwraith" || Eunits[Eslots[1]].type === "Waterwraith"){
                            maxcharge = 1;
                            $('#E' + Eslots[1]).append('<img style="position: absolute; margin-top:40px; margin-left:-30px; width:35px; height:35px" src="Pictures/Orb.gif" /><div id = "ORBE' + Eslots[1] + '" style="color:yellow;position: absolute; font-size:20px; margin-top:-30px; margin-left:50px; width:10px; height:10px ">' + Eunits[Eslots[1]].charge +'/' + maxcharge +'</div>');
                        }
                        if(Eunits[Eslots[1]].type === "Ice Elemental" || Eunits[Eslots[1]].type === "Flamewraith"){
                            maxcharge = 2;
                            $('#E' + Eslots[1]).append('<img style="position: absolute; margin-top:40px; margin-left:-30px; width:35px; height:35px" src="Pictures/Orb.gif" /><div id = "ORBE' + Eslots[1] + '" style="color:yellow;position: absolute; font-size:20px; margin-top:-30px; margin-left:50px; width:10px; height:10px ">' + Eunits[Eslots[1]].charge +'/' + maxcharge +'</div>');
                        }
                        if(Eunits[Eslots[1]].type === "Lightning Elemental" || Eunits[Eslots[1]].type === "Angel" || Eunits[Eslots[1]].type === "Frostlord" || Eunits[Eslots[1]].type === "Demon" || Eunits[Eslots[1]].type === "Unknown" || Eunits[Eslots[1]].type === "Dragon"){
                            maxcharge = 3;
                            $('#E' + Eslots[1]).append('<img style="position: absolute; margin-top:40px; margin-left:-30px; width:35px; height:35px" src="Pictures/Orb.gif" /><div id = "ORBE' + Eslots[1] + '" style="color:yellow;position: absolute; font-size:20px; margin-top:-30px; margin-left:50px; width:10px; height:10px ">' + Eunits[Eslots[1]].charge +'/' + maxcharge +'</div>');
                        }
                        if(Eunits[Eslots[1]].type === "Cannon"){
                           maxcharge=5;
                            $('#E' + Eslots[1]).append('<img style="position: absolute; margin-top:40px; margin-left:-30px; width:35px; height:35px" src="Pictures/Orb.gif" /><div id = "ORBE' + Eslots[1] + '" style="color:yellow;position: absolute; font-size:20px; margin-top:-30px; margin-left:50px; width:10px; height:10px ">' + Eunits[Eslots[1]].charge +'/' + maxcharge +'</div>');
                        }
                    }

                    if (Eslots[2]!=-1){
                        Eunits[Eslots[2]].curleft=225-mult*100;
                        Eunits[Eslots[2]].curtop=25;
                        $('#battlebackground').append('<div STYLE="position:absolute; TOP:25px; LEFT:' +  Eunits[Eslots[2]].curleft + 'px;" class="Eunit"  id="E' + Eslots[2] + '" ><img src="' + Eunits[Eslots[2]].image + '"/></div>');
                        $('#E' + Eslots[2]).append('<div class="healthbar" id = "EHB' + Eslots[2] + '" style="width: ' + (Eunits[Eslots[2]].health/Eunits[Eslots[2]].maxhealth)*100 + '%"></div>');
                        if(Eunits[Eslots[2]].charge===0){
                            var maxcharge = 0;
                            if(Eunits[Eslots[2]].type === "Fire Elemental" || Eunits[Eslots[2]].type === "Beekeeper" || Eunits[Eslots[2]].type === "Necromancer" || Eunits[Eslots[2]].type === "Shaman" || Eunits[Eslots[2]].type === "Wisp" || Eunits[Eslots[2]].type === "Frostwraith" || Eunits[Eslots[2]].type === "Waterwraith"){
                                maxcharge = 1;
                                $('#E' + Eslots[2]).append('<img style="position: absolute; margin-top:40px; margin-left:-30px; width:35px; height:35px" src="Pictures/Orb.gif" /><div id = "ORBE' + Eslots[2] + '" style="color:yellow;position: absolute; font-size:20px; margin-top:-30px; margin-left:50px; width:10px; height:10px ">' + Eunits[Eslots[2]].charge +'/' + maxcharge +'</div>');
                            }
                            if(Eunits[Eslots[2]].type === "Ice Elemental" || Eunits[Eslots[2]].type === "Flamewraith"){
                                maxcharge = 2;
                                $('#E' + Eslots[2]).append('<img style="position: absolute; margin-top:40px; margin-left:-30px; width:35px; height:35px" src="Pictures/Orb.gif" /><div id = "ORBE' + Eslots[2] + '" style="color:yellow;position: absolute; font-size:20px; margin-top:-30px; margin-left:50px; width:10px; height:10px ">' + Eunits[Eslots[2]].charge +'/' + maxcharge +'</div>');
                            }
                            if(Eunits[Eslots[2]].type === "Lightning Elemental" || Eunits[Eslots[2]].type === "Angel" || Eunits[Eslots[2]].type === "Frostlord" || Eunits[Eslots[2]].type === "Demon" || Eunits[Eslots[2]].type === "Unknown" || Eunits[Eslots[2]].type === "Dragon"){
                                maxcharge = 3;
                                $('#E' + Eslots[2]).append('<img style="position: absolute; margin-top:40px; margin-left:-30px; width:35px; height:35px" src="Pictures/Orb.gif" /><div id = "ORBE' + Eslots[2] + '" style="color:yellow;position: absolute; font-size:20px; margin-top:-30px; margin-left:50px; width:10px; height:10px ">' + Eunits[Eslots[2]].charge +'/' + maxcharge +'</div>');
                            }
                            if(Eunits[Eslots[2]].type === "Cannon"){
                               maxcharge=5;
                                $('#E' + Eslots[2]).append('<img style="position: absolute; margin-top:40px; margin-left:-30px; width:35px; height:35px" src="Pictures/Orb.gif" /><div id = "ORBE' + Eslots[2] + '" style="color:yellow;position: absolute; font-size:20px; margin-top:-30px; margin-left:50px; width:10px; height:10px ">' + Eunits[Eslots[2]].charge +'/' + maxcharge +'</div>');
                            }
                        }
                    }
                    if (Eslots[3]!=-1){
                        Eunits[Eslots[3]].curleft=325-mult*100;
                        Eunits[Eslots[3]].curtop=25;
                        $('#battlebackground').append('<div STYLE="position:absolute; TOP:25px; LEFT:' +  Eunits[Eslots[3]].curleft + 'px;" class="Eunit"  id="E' + Eslots[3] + '" ><img src="' + Eunits[Eslots[3]].image + '"/></div>');
                        $('#E' + Eslots[3]).append('<div class="healthbar" id = "EHB' + Eslots[3] + '" style="width: ' + (Eunits[Eslots[3]].health/Eunits[Eslots[3]].maxhealth)*100 + '%"></div>');
                        if(Eunits[Eslots[3]].charge===0){
                            var maxcharge = 0;
                            if(Eunits[Eslots[3]].type === "Fire Elemental" || Eunits[Eslots[3]].type === "Beekeeper" || Eunits[Eslots[3]].type === "Necromancer" || Eunits[Eslots[3]].type === "Shaman" || Eunits[Eslots[3]].type === "Wisp" || Eunits[Eslots[3]].type === "Frostwraith" || Eunits[Eslots[3]].type === "Waterwraith"){
                                maxcharge = 1;
                                $('#E' + Eslots[3]).append('<img style="position: absolute; margin-top:40px; margin-left:-30px; width:35px; height:35px" src="Pictures/Orb.gif" /><div id = "ORBE' + Eslots[3] + '" style="color:yellow;position: absolute; font-size:20px; margin-top:-30px; margin-left:50px; width:10px; height:10px ">' + Eunits[Eslots[3]].charge +'/' + maxcharge +'</div>');
                            }
                            if(Eunits[Eslots[3]].type === "Ice Elemental" || Eunits[Eslots[3]].type === "Flamewraith"){
                                maxcharge = 2;
                                $('#E' + Eslots[3]).append('<img style="position: absolute; margin-top:40px; margin-left:-30px; width:35px; height:35px" src="Pictures/Orb.gif" /><div id = "ORBE' + Eslots[3] + '" style="color:yellow;position: absolute; font-size:20px; margin-top:-30px; margin-left:50px; width:10px; height:10px ">' + Eunits[Eslots[3]].charge +'/' + maxcharge +'</div>');
                            }
                            if(Eunits[Eslots[3]].type === "Lightning Elemental" || Eunits[Eslots[3]].type === "Angel" || Eunits[Eslots[3]].type === "Frostlord" || Eunits[Eslots[3]].type === "Demon" || Eunits[Eslots[3]].type === "Unknown" || Eunits[Eslots[3]].type === "Dragon"){
                                maxcharge = 3;
                                $('#E' + Eslots[3]).append('<img style="position: absolute; margin-top:40px; margin-left:-30px; width:35px; height:35px" src="Pictures/Orb.gif" /><div id = "ORBE' + Eslots[3] + '" style="color:yellow;position: absolute; font-size:20px; margin-top:-30px; margin-left:50px; width:10px; height:10px ">' + Eunits[Eslots[3]].charge +'/' + maxcharge +'</div>');
                            }
                            if(Eunits[Eslots[3]].type === "Cannon"){
                              maxcharge=5;
                                $('#E' + Eslots[3]).append('<img style="position: absolute; margin-top:40px; margin-left:-30px; width:35px; height:35px" src="Pictures/Orb.gif" /><div id = "ORBE' + Eslots[3] + '" style="color:yellow;position: absolute; font-size:20px; margin-top:-30px; margin-left:50px; width:10px; height:10px ">' + Eunits[Eslots[3]].charge +'/' + maxcharge +'</div>');
                            }
                        }

                    }
                    if (Eslots[4]!=-1){
                        Eunits[Eslots[4]].curleft=325;
                        Eunits[Eslots[4]].curtop=25;
                        $('#battlebackground').append('<div STYLE="position:absolute; TOP:25px; LEFT:' +  Eunits[Eslots[4]].curleft + 'px;" class="Eunit"  id="E' + Eslots[4] + '" ><img src="' + Eunits[Eslots[4]].image + '"/></div>');
                        $('#E' + Eslots[4]).append('<div class="healthbar" id = "EHB' + Eslots[4] + '" style="width: ' + (Eunits[Eslots[4]].health/Eunits[Eslots[4]].maxhealth)*100 + '%"></div>');
                        if(Eunits[Eslots[4]].charge===0){
                            var maxcharge = 0;
                            if(Eunits[Eslots[4]].type === "Fire Elemental" || Eunits[Eslots[4]].type === "Beekeeper" || Eunits[Eslots[4]].type === "Necromancer" || Eunits[Eslots[4]].type === "Shaman" || Eunits[Eslots[4]].type === "Wisp" || Eunits[Eslots[4]].type === "Frostwraith" || Eunits[Eslots[4]].type === "Waterwraith"){
                                maxcharge = 1;
                                $('#E' + Eslots[4]).append('<img style="position: absolute; margin-top:40px; margin-left:-30px; width:35px; height:35px" src="Pictures/Orb.gif" /><div id = "ORBE' + Eslots[4] + '" style="color:yellow;position: absolute; font-size:20px; margin-top:-30px; margin-left:50px; width:10px; height:10px ">' + Eunits[Eslots[4]].charge +'/' + maxcharge +'</div>');
                            }
                            if(Eunits[Eslots[4]].type === "Ice Elemental" || Eunits[Eslots[4]].type === "Flamewraith"){
                                maxcharge = 2;
                                $('#E' + Eslots[4]).append('<img style="position: absolute; margin-top:40px; margin-left:-30px; width:35px; height:35px" src="Pictures/Orb.gif" /><div id = "ORBE' + Eslots[4] + '" style="color:yellow;position: absolute; font-size:20px; margin-top:-30px; margin-left:50px; width:10px; height:10px ">' + Eunits[Eslots[4]].charge +'/' + maxcharge +'</div>');
                            }
                            if(Eunits[Eslots[4]].type === "Lightning Elemental" || Eunits[Eslots[4]].type === "Angel" || Eunits[Eslots[4]].type === "Frostlord" || Eunits[Eslots[4]].type === "Demon" || Eunits[Eslots[4]].type === "Unknown" || Eunits[Eslots[4]].type === "Dragon"){
                                maxcharge = 3;
                                $('#E' + Eslots[4]).append('<img style="position: absolute; margin-top:40px; margin-left:-30px; width:35px; height:35px" src="Pictures/Orb.gif" /><div id = "ORBE' + Eslots[4] + '" style="color:yellow;position: absolute; font-size:20px; margin-top:-30px; margin-left:50px; width:10px; height:10px ">' + Eunits[Eslots[4]].charge +'/' + maxcharge +'</div>');
                            }
                            if(Eunits[Eslots[4]].type === "Cannon"){
                              maxcharge=5;
                                $('#E' + Eslots[4]).append('<img style="position: absolute; margin-top:40px; margin-left:-30px; width:35px; height:35px" src="Pictures/Orb.gif" /><div id = "ORBE' + Eslots[4] + '" style="color:yellow;position: absolute; font-size:20px; margin-top:-30px; margin-left:50px; width:10px; height:10px ">' + Eunits[Eslots[4]].charge +'/' + maxcharge +'</div>');
                            }
                        }
                    }
                    if (Eslots[5]!=-1){
                        Eunits[Eslots[5]].curleft=425;
                        Eunits[Eslots[5]].curtop=25;
                        $('#battlebackground').append('<div STYLE="position:absolute; TOP:25px; LEFT:' +  Eunits[Eslots[5]].curleft + 'px;" class="Eunit"  id="E' + Eslots[5] + '" ><img src="' + Eunits[Eslots[5]].image + '"/></div>');
                        $('#E' + Eslots[5]).append('<div class="healthbar" id = "EHB' + Eslots[5] + '" style="width: ' + (Eunits[Eslots[5]].health/Eunits[Eslots[5]].maxhealth)*100 + '%"></div>');
                        if(Eunits[Eslots[5]].charge===0){
                            var maxcharge = 0;
                            if(Eunits[Eslots[5]].type === "Fire Elemental" || Eunits[Eslots[5]].type === "Beekeeper" || Eunits[Eslots[5]].type === "Necromancer" || Eunits[Eslots[5]].type === "Shaman" || Eunits[Eslots[5]].type === "Wisp" || Eunits[Eslots[5]].type === "Frostwraith" || Eunits[Eslots[5]].type === "Waterwraith"){
                                maxcharge = 1;
                                $('#E' + Eslots[5]).append('<img style="position: absolute; margin-top:40px; margin-left:-30px; width:35px; height:35px" src="Pictures/Orb.gif" /><div id = "ORBE' + Eslots[5] + '" style="color:yellow;position: absolute; font-size:20px; margin-top:-30px; margin-left:50px; width:10px; height:10px ">' + Eunits[Eslots[5]].charge +'/' + maxcharge +'</div>');
                            }
                            if(Eunits[Eslots[5]].type === "Ice Elemental" || Eunits[Eslots[5]].type === "Flamewraith"){
                                maxcharge = 2;
                                $('#E' + Eslots[5]).append('<img style="position: absolute; margin-top:40px; margin-left:-30px; width:35px; height:35px" src="Pictures/Orb.gif" /><div id = "ORBE' + Eslots[5] + '" style="color:yellow;position: absolute; font-size:20px; margin-top:-30px; margin-left:50px; width:10px; height:10px ">' + Eunits[Eslots[5]].charge +'/' + maxcharge +'</div>');
                            }
                            if(Eunits[Eslots[5]].type === "Lightning Elemental" || Eunits[Eslots[5]].type === "Angel" || Eunits[Eslots[5]].type === "Frostlord" || Eunits[Eslots[5]].type === "Demon" || Eunits[Eslots[5]].type === "Unknown" || Eunits[Eslots[5]].type === "Dragon"){
                                maxcharge = 3;
                                $('#E' + Eslots[5]).append('<img style="position: absolute; margin-top:40px; margin-left:-30px; width:35px; height:35px" src="Pictures/Orb.gif" /><div id = "ORBE' + Eslots[5] + '" style=color:yellow;"position: absolute; font-size:20px; margin-top:-30px; margin-left:50px; width:10px; height:10px ">' + Eunits[Eslots[5]].charge +'/' + maxcharge +'</div>');
                            }
                            if(Eunits[Eslots[5]].type === "Cannon"){
                               maxcharge=5;
                                $('#E' + Eslots[5]).append('<img style="position: absolute; margin-top:40px; margin-left:-30px; width:35px; height:35px" src="Pictures/Orb.gif" /><div id = "ORBE' + Eslots[5] + '" style="color:yellow;position: absolute; font-size:20px; margin-top:-30px; margin-left:50px; width:10px; height:10px ">' + Eunits[Eslots[5]].charge +'/' + maxcharge +'</div>');
                            }
                        }
                    }
                    getstatsbattle();
                    battlehighlight();
                    battlemove();
                    attackbadguy();
                    clickactionbuttons();
                    lootenemy[1]="";
                    lootenemy[2]="";
                    lootenemy[3]="";
                    lootenemy[4]="";
                    lootenemy[5]="";
                    lootenemy[1]=lootenemyfunction(Eslots[1]);
                    lootenemy[2]=lootenemyfunction(Eslots[2]);
                    lootenemy[3]=lootenemyfunction(Eslots[3]);
                    lootenemy[4]=lootenemyfunction(Eslots[4]);
                    lootenemy[5]=lootenemyfunction(Eslots[5]);
                    var whoseattack = Math.floor((Math.random() * 2) + 1);
                    if(whoseattack===2 && units[slots[1]].abilityscout!=true && units[slots[2]].abilityscout!=true && units[slots[3]].abilityscout!=true && units[slots[1]].accessory!="Scouter's_Goggles" && units[slots[2]].accessory!="Scouter's_Goggles" && units[slots[3]].accessory!="Scouter's_Goggles" &&  groups[i].haste!=true){
                        setTimeout(function(){enemyturn("PassTurn")},500);
                    }
                    groups[i].haste=false;
                    return;
                }
            }
        }

    }

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

    //in combat stuff///////////////////////////////////////////////////////////////////////

//highlight spaces during battle
    function battlehighlight(){
        $('.battleareas').mouseenter(function(){
            $(this).addClass("battlehighlight")
        });
        $('.battleareas').mouseleave(function(){
            $(this).removeClass("battlehighlight")
        });
        $('.battleareas').click(function(){
            if ($(this).is(":empty")) {
                selectedunit = "";
            }
        });
    }
//move your units
    function battlemove(){

        $('.battleareas').mousedown(function(e) {
            $("#TEXT").empty();
            if(e.button === 2 ){
                switch(this.id){
                    case "space11":
                        var futureleft = 25;
                        var futuretop = 25;
                        break;
                    case "space21":
                        var futureleft = 125;
                        var futuretop = 25;
                        break;
                    case "space31":
                        var futureleft = 225;
                        var futuretop = 25;
                        break;
                    case "space41":
                        var futureleft = 325;
                        var futuretop = 25;
                        break;
                    case "space51":
                        var futureleft = 425;
                        var futuretop = 25;
                        break;
                    case "space12":
                        var futureleft = 25;
                        var futuretop = 125;
                        break;
                    case "space22":
                        var futureleft = 125;
                        var futuretop = 125;
                        break;
                    case "space32":
                        var futureleft = 225;
                        var futuretop = 125;
                        break;
                    case "space42":
                        var futureleft = 325;
                        var futuretop = 125;
                        break;
                    case "space52":
                        var futureleft = 425;
                        var futuretop = 125;
                        break;
                    case "space13":
                        var futureleft = 25;
                        var futuretop = 225;
                        break;
                    case "space23":
                        var futureleft = 125;
                        var futuretop = 225;
                        break;
                    case "space33":
                        var futureleft = 225;
                        var futuretop = 225;
                        break;
                    case "space43":
                        var futureleft = 325;
                        var futuretop = 225;
                        break;
                    case "space53":
                        var futureleft = 425;
                        var futuretop = 225;
                        break;
                    case "space14":
                        var futureleft = 25;
                        var futuretop = 325;
                        break;
                    case "space24":
                        var futureleft = 125;
                        var futuretop = 325;
                        break;
                    case "space34":
                        var futureleft = 225;
                        var futuretop = 325;
                        break;
                    case "space44":
                        var futureleft = 325;
                        var futuretop = 325;
                        break;
                    case "space54":
                        var futureleft = 425;
                        var futuretop = 325;
                        break;
                    case "space15":
                        var futureleft = 25;
                        var futuretop = 425;
                        break;
                    case "space25":
                        var futureleft = 125;
                        var futuretop = 425;
                        break;
                    case "space35":
                        var futureleft = 225;
                        var futuretop = 425;
                        break;
                    case "space45":
                        var futureleft = 325;
                        var futuretop = 425;
                        break;
                    case "space55":
                        var futureleft = 425;
                        var futuretop = 425;
                        break;
                }
                if(($('#wizardchoice option:selected').text() === "Teleport(1)" && units[selectedindex].charge>0) || units[selectedindex].accessory==="Winged_Talisman" || units[selectedindex].abilityfly===true || units[selectedindex].flight===true || ((units[selectedindex].curtop - 100 === futuretop && units[selectedindex].curleft ===futureleft) || (units[selectedindex].curtop + 100 === futuretop && units[selectedindex].curleft ===futureleft) || (units[selectedindex].curleft - 100 === futureleft && units[selectedindex].curtop ===futuretop) || (units[selectedindex].curleft + 100 === futureleft && units[selectedindex].curtop ===futuretop))) {

                    if (units[selectedindex].moved===true){
                        if((units[selectedindex].abilitydash===true && units[selectedindex].usedaction===false)){
                            $('#TEXT').append("<p>" + units[selectedindex].name + " dashed</p>");
                            units[selectedindex].usedaction=true;
                        } else{
                            $('#TEXT').append("<p>" + units[selectedindex].name + " has already moved this turn</p>");
                            return;
                        }
                    }



                    if(units[selectedindex].immobilized>0){
                        $("#TEXT").append("This unit is immobolized for another " + units[selectedindex].immobilized + " days.");
                        return;
                    }

if(units[selectedindex].type==="Knight"){
    if(units[selectedindex].abilityfreemove===false){
        if(units[selectedindex].energy<30){
            message("The Knight doesn't have enough stamina to move. Pass the turn without using him to refill his stamina.");
            return;
        } else{
            units[selectedindex].energy-=30;
            $("#EB" + units[selectedindex].index).remove();
            $("#" + selectedindex).append('<div class="energybar" id ="EB'+ units[selectedindex].index + '"style="width: ' + units[selectedindex].energy + '%"></div>');
        }
    }
}
                    $('.selectedUnit').animate({
                        left: futureleft+'px',
                        top: futuretop+'px'
                    }, 500);

                    if($('#wizardchoice option:selected').text() === "Teleport(1)"){
                        $("#" + selectedindex).fadeIn(1600)
                    }

                    units[selectedindex].curleft=futureleft;
                    units[selectedindex].curtop=futuretop;
                    units[selectedindex].moved=true;
                    for(var i = 1;i<6;i++){
                        if(Eunits[Eslots[i]].type === "Cannon" && units[selectedindex].type != "Invisible" && Eunits[Eslots[i]].alive === true) {
                            if (Eunits[Eslots[i]].curleft === units[selectedindex].curleft) {
                                $("#battlebackground").append("<div class='staticEffects' style='margin-top: " + (Eunits[Eslots[i]].curtop - 450) + "px; margin-left: " + (Eunits[Eslots[i]].curleft - 20) + "px'><img style = ' width:100px; height:700px' src='Pictures/Effects/Cannonbeam.gif' /></div>");

                            }
                            if (Eunits[Eslots[i]].curtop === units[selectedindex].curtop && Eunits[Eslots[i]].curleft <= units[selectedindex].curleft) {

                                $("#battlebackground").append("<div class='staticEffects' style='transform: rotate(90deg) translate(-100%,-100%); margin-top: " + (units[selectedindex].curtop - 725) + "px; margin-left: " + (units[selectedindex].curleft - 450) + "px'><img style = ' width:100px; height:700px' src='Pictures/Effects/Cannonbeam.gif' /></div>");
                            }
                            if (Eunits[Eslots[i]].curtop === units[selectedindex].curtop && Eunits[Eslots[i]].curleft >= units[selectedindex].curleft) {
                                $("#battlebackground").append("<div class='staticEffects' style='transform: rotate(270deg) translate(-100%,-100%); margin-top: " + (units[selectedindex].curtop - 925) + "px; margin-left: " + (units[selectedindex].curleft + 400) + "px'><img style = ' width:100px; height:700px' src='Pictures/Effects/Cannonbeam.gif' /></div>");
                            }
                            if (Eunits[Eslots[i]].curleft === units[selectedindex].curleft || Eunits[Eslots[i]].curtop === units[selectedindex].curtop) {
                                var damage = (Eunits[Eslots[i]].attack + Eunits[Eslots[i]].attack * Eunits[Eslots[i]].charge) - units[selectedindex].resistance;
                                Eunits[Eslots[i]].charge = 0;
                                Damaging(damage, selectedindex);
                                if (units[selectedindex].health <= 0) {
                                    Dies("Soldier", selectedindex);
                                }
                                charging(Eslots[i]);
                            }

                            $(".staticEffects").fadeOut(1000);
                        }
                    }

                }
            }
            function Damaging(damage, index) {

                if(units[index].protectedby!=-1 && units[units[index].protectedby].alive===true){
                    index=units[index].protectedby;
                }
                var temp = "#" + index;
                var tempbar="#HB" + index;
                if(units[index].abilitydodge===true || units[index].accessory==="Dodging_Boots"){
                    var randnum=Math.floor((Math.random() * 50) + 1);
                    var randchance = Math.floor((Math.random() * 2) + 1);
                    if(randnum<damage && randchance ===1){
                        damage="Miss";
                    }
                }
                if(damage>-1){
                    //shield stuff
                    if(units[index].energy>0 && units[index].type==="Guard"){
                        //reducing life or energy
                        if(units[index].energy>damage){
                            units[index].energy-=damage;
                        } else {
                            units[index].health-=(damage-units[index].energy);
                            units[index].energy=0;
                        }
                        $("#EB" + units[index].index).remove();
                        $("#" + index).append('<div class="energybar" id ="EB'+ units[index].index + '"style="width: ' + units[index].energy + '%"></div>');
                    } else{units[index].health-=damage}
                    //steadfast stuff
                    if(units[index].health<1 && (units[index].health + damage)!=1 && (units[index].abilitysteadfast===true || units[index].accessory==="Steadfast_Band")){
                        units[index].health = 1;
                        $("#TEXT").append(units[index].name + " was saved by steadfast.</p>");
                    }
                    $(tempbar).remove();
                    $(temp).append('<div class="healthbar" id ="HB'+ units[index].index + '"style="width: ' + (units[index].health/units[index].maxhealth)*100 + '%"></div>');
                };


                $(temp).append('<p id="damage' + damagenum +'" style="position: absolute; font-size:40px; margin-top:-70px; margin-left:30px; color:white; font-weight:bold ">' + damage + '</p>');
                $("#damage" + damagenum).delay(1000).effect("puff");
                damagenum+=1;
                if (units[index].health <= 0) {
                    units[index].curleft = 10000;
                    units[index].curtop = 10000;

                }
            }
            function Dies(type, index) {
                var dyingname = "";
                var temp="#"+index;
                $(temp).effect("explode");
                dyingname=units[index].name;
                $("#TEXT").append("<p>" + dyingname + " has died</p>");
                units[index].alive=false;
                units[index].group=-1;
                if(units[index].type==="Beast" || units[index].type==="Djinn"){
                    if (slots[1] === index) {
                        var templeft = units[slots[1]].curleft;
                        var temptop = units[slots[1]].curtop;
                        slots[1] = units[slots[1]].owner;
                        units[slots[1]].captured="";
                        units[slots[1]].curleft = templeft;
                        units[slots[1]].curtop = temptop;
                        $('#battlebackground').append('<div STYLE="position:absolute; TOP:' + temptop + 'px; LEFT:' + templeft + 'px;" class="unit"  id="' + slots[1] + '" ><img src="' + units[slots[1]].image + '"/></div>');
                        $('#' + slots[1]).append('<div class="healthbar" id = "HB' + slots[1] + '" style="width: ' + (units[slots[1]].health / units[slots[1]].maxhealth) * 100 + '%"></div>');
                    }
                    if (slots[2] === index) {
                        var templeft = units[slots[2]].curleft;
                        var temptop = units[slots[2]].curtop;
                        slots[2] = units[slots[2]].owner;
                        units[slots[1]].captured="";
                        units[slots[2]].curleft = templeft;
                        units[slots[2]].curtop = temptop;
                        $('#battlebackground').append('<div STYLE="position:absolute; TOP:' + temptop + 'px; LEFT:' + templeft + 'px;" class="unit"  id="' + slots[2] + '" ><img src="' + units[slots[2]].image + '"/></div>');
                        $('#' + slots[2]).append('<div class="healthbar" id = "HB' + slots[2] + '" style="width: ' + (units[slots[2]].health / units[slots[2]].maxhealth) * 100 + '%"></div>');
                    }
                    if (slots[3] === index) {
                        var templeft = units[slots[3]].curleft;
                        var temptop = units[slots[3]].curtop;
                        slots[3] = units[slots[3]].owner;
                        units[slots[1]].captured="";
                        units[slots[3]].curleft = templeft;
                        units[slots[3]].curtop = temptop;
                        $('#battlebackground').append('<div STYLE="position:absolute; TOP:' + temptop + 'px; LEFT:' + templeft + 'px;" class="unit"  id="' + slots[3] + '" ><img src="' + units[slots[3]].image + '"/></div>');
                        $('#' + slots[3]).append('<div class="healthbar" id = "HB' + slots[3] + '" style="width: ' + (units[slots[3]].health / units[slots[3]].maxhealth) * 100 + '%"></div>');
                    }
                    getstatsbattle();
                    clickactionbuttons();
                }

            }
            function charging(index){
                $("#TEXT").empty();
                Chargesound.play();
                $("#TEXT").append("<p>" + Eunits[index].name + "'s charge increased to  " + Eunits[index].charge + "\n</p>");

                $("#ORBE" + + Eunits[index].index).remove();

                $('#E' + index).append('<div id = "ORBE' + Eunits[index].index + '" style="color:yellow; position: absolute; font-size:20px; margin-top:-30px; margin-left:57px; width:10px; height:10px ">' + Eunits[index].charge + '</div>');

            }
            if(units[selectedindex].moved===true || units[selectedindex].usedaction===true){
                $('#' + selectedindex).addClass("lighticon");
            }
            if(units[selectedindex].moved===true && units[selectedindex].usedaction===true){
                $('#' + selectedindex).removeClass("lighticon");
                $('#' + selectedindex).addClass("grayicon");
            }
        });

    }


//select a unit///////////////////////////////////////////////////////////////////////////////
    var curtype="";
var selectedindex=-1;
    var selectedaction = "";
    function getstatsbattle(){
        $('.unit').click(function(){
            if (battleon===false){
                return;
            }
            //gives stats on selected unit

            for (var i = 0; i < index; i++) {
                if (units[i].index === parseInt($(this).attr("id"),10)) {
                    if(units[i].sleep>0){
                        $("#TEXT").append("This unit is asleep for " + units[i].sleep + " more turns.");
                        return;
                    }
                    $('#TEXT').empty();
                    $('#TEXT').append("<ul>Stats for " + units[i].name + " <li>Type: " + units[i].type + "</li> <li>Attack: " + units[i].attack + "</li> <li>Defense: " + units[i].defense + "</li><li>Resistance: " + units[i].resistance + "</li><li>Health: " + units[i].health + "</li></ul>");
                    curtype = units[i].type;
                    selectedindex = units[i].index;
                    $('*').removeClass("selectedUnit");
                    $(this).addClass("selectedUnit");
                    $("#TEXT").append('<div id="abilitycontainer"></div>').append('<div id="abilitycontainer2"></div><ul>ABILITIES</ul>');

                    if(units[selectedindex].type==="Soldier"){
                        $('#abilitycontainer').append("<div id='Soldier_Normal' class='ability'><img src='Pictures/abilities/Soldier/Soldier_Normal.png' /></div>");
                        $("#Soldier_Normal").click(function(){
                            message("Normal Attack: Deals damage equal to it's attack to an adjacent enemy.")
                        });
                        if(units[selectedindex].abilitydash===true){
                            $('#abilitycontainer2').append("<div id='Soldier_Dash' class='ability'><img src='Pictures/abilities/Soldier/Soldier_Dash.png' /></div>");
                            $("#Soldier_Dash").click(function(){
                                message("Dash: The soldier may move an extra move as it's action for the turn.")
                            });
                        }
                        if(units[selectedindex].abilityimmunity===true){
                            $('#abilitycontainer').append("<div id='Soldier_immunity' class='ability'><img src='Pictures/abilities/Guard/Guard_immunity.png' /></div>");
                            $("#Soldier_immunity").click(function(){
                                message("Immunity: Soldier is immune to all ailments")
                            });
                        }
                        if(units[selectedindex].abilitysteadfast===true){
                            $('#abilitycontainer2').append("<div id='Soldier_Steadfast' class='ability'><img src='Pictures/abilities/Soldier/Soldier_Steadfast.png' /></div>");
                            $("#Soldier_Steadfast").click(function(){
                                message("Steadfast: If damage would kill the soldier, and it's life isn't 1, it will reduce it's life to 1 instead.")
                            });
                        }
                        if(units[selectedindex].abilitycounter===true){
                            $('#abilitycontainer').append("<div id='Soldier_Counter' class='ability'><img src='Pictures/abilities/Soldier/Soldier_counter.png' /></div>");
                            $("#Soldier_Counter").click(function(){
                                message("Counter: Portion of damage dealt to soldier is dealt back to the enemy if it's a closerange attack.")
                            });
                        }
                        if(units[selectedindex].abilitymedkit===true){
                            $('#abilitycontainer2').append("<div id='Soldier_Medkit' class='ability'><img src='Pictures/abilities/Soldier/Soldier_medkit.png' /></div>");
                            $("#Soldier_Medkit").click(function(){
                                message("Medkit: Fully heals Soldier. He gets a new medkit whenever he visits the hospital.")
                            });
                        }
                    }
                    if(units[selectedindex].type==="Knight"){
                        $('#abilitycontainer').append("<div id='Knight_Normal' class='ability'><img src='Pictures/abilities/Soldier/Soldier_Normal.png' /></div>");
                        $("#Knight_Normal").click(function(){
                            message("Normal Attack: Deals damage equal to it's attack to an adjacent enemy.")
                        });
                        if(units[selectedindex].abilityswirl===true){
                            $('#abilitycontainer2').append("<div id='Knight_Swirl' class='ability'><img src='Pictures/abilities/Knight/Knight_Swirl.png' /></div>");
                            $("#Knight_Swirl").click(function(){
                                message("Swirl: Deals damage to all adjacent enemies.")
                            });
                        }
                        if(units[selectedindex].abilitysweep===true){
                            $('#abilitycontainer').append("<div id='Knight_sweep' class='ability'><img src='Pictures/abilities/Knight/Knight_Sweep.png' /></div>");
                            $("#Knight_sweep").click(function(){
                                message("Sweep: Attacks an enemy and the ones beside it.")
                            });
                        }
                        if(units[selectedindex].abilitypiercer===true){
                            $('#abilitycontainer2').append("<div id='Knight_Piercer' class='ability'><img src='Pictures/abilities/Knight/Knight_Piercer.png' /></div>");
                            $("#Knight_Piercer").click(function(){
                                message("Piercer: Deals damage to an adjacent enemy and ignores defenses.")
                            });
                        }
                        if(units[selectedindex].abilityfreemove===true){
                            $('#abilitycontainer').append("<div id='Knight_Freemove' class='ability'><img src='Pictures/abilities/Knight/Knight_freemove.png' /></div>");
                            $("#Knight_Freemove").click(function(){
                                message("Free Move: Moving no longer uses energy.")
                            });
                        }
                        if(units[selectedindex].abilityreact===true){
                            $('#abilitycontainer2').append("<div id='Knight_React' class='ability'><img src='Pictures/abilities/Knight/Knight_React.png' /></div>");
                            $("#Knight_React").click(function(){
                                message("React: Enemies moving next to Knight will make knight attack that enemy for half damage..")
                            });
                        }
                    }
                    if(units[selectedindex].type==="Thief" || units[selectedindex].type==="Invisible"){
                        $('#abilitycontainer').append("<div id='Thief_Steal' class='ability'><img src='Pictures/abilities/Thief/Thief_Steal.png' /></div>");
                        $("#Thief_Steal").click(function(){
                            message("Mug/Steal: Steals from an adjacent enemy. The lower the enemy's health, the easier to steal. Mugging will make thief visible if invisible.")
                        });
                        if(units[selectedindex].abilityinvisible===true){
                            $('#abilitycontainer2').append("<div id='Thief_Invisible' class='ability'><img src='Pictures/abilities/Thief/Thief_Invisible.png' /></div>");
                            $("#Thief_Invisible").click(function(){
                                message("Invisible: Thief is invisible and can't be attacked. Attacking will make the Thief visible for a turn.")
                            });
                        }
                        if(units[selectedindex].abilitydodge===true){
                            $('#abilitycontainer').append("<div id='Thief_Dodge' class='ability'><img src='Pictures/abilities/Thief/Thief_dodge.png' /></div>");
                            $("#Thief_Dodge").click(function(){
                                message("Dodge: Thief can dodge attacks. The higher the damage, the easier to dodge.")
                            });
                        }
                        if(units[selectedindex].abilitybackstab===true){
                            $('#abilitycontainer2').append("<div id='Thief_Backstab' class='ability'><img src='Pictures/abilities/Thief/Thief_backstab.png' /></div>");
                            $("#Thief_Backstab").click(function(){
                                message("Backstab: Double damage if the thief is behind the enemy.")
                            });
                        }
                        if(units[selectedindex].abilityfirstblow===true){
                            $('#abilitycontainer').append("<div id='Thief_FirstBlow' class='ability'><img src='Pictures/abilities/Thief/Thief_firstblow.png' /></div>");
                            $("#Thief_FirstBlow").click(function(){
                                message("Firstblow: Attacking inflicts blindness for two turns to an enemy if it is at full health.")
                            });
                        }
                        if(units[selectedindex].abilitybettersteal===true){
                            $('#abilitycontainer2').append("<div id='Thief_bettersteal' class='ability'><img src='Pictures/abilities/Thief/Thief_bettersteal.png' /></div>");
                            $("#Thief_bettersteal").click(function(){
                                message("Superior Steal: Successfully steals every time.")
                            });
                        }
                    }
                    if(units[selectedindex].type==="Guard"){
                        $('#abilitycontainer').append("<div id='Guard_Bash' class='ability'><img src='Pictures/abilities/Guard/Guard_Bash.png' /></div>");
                        $("#Guard_Bash").click(function(){
                            message("Bash: Deals damage equal to attack to an adjacent enemy.")
                        });
                        if(units[selectedindex].abilityprotect===true){
                            $('#abilitycontainer2').append("<div id='Guard_Protect' class='ability'><img src='Pictures//abilities/Guard/Guard_Protect.png' /></div>");
                            $("#Guard_Protect").click(function(){
                                message("Protect: Protects an ally for the rest of the turn. A protected ally will have all damage redirected to the guard.")
                            });
                        }
                        if(units[selectedindex].abilityimmunity===true){
                            $('#abilitycontainer').append("<div id='Guard_Immunity' class='ability'><img src='Pictures//abilities/Guard/Guard_immunity.png' /></div>");
                            $("#Guard_Immunity").click(function(){
                                message("Immunity: Guard, and whoever the guard is protecting, is immune to all ailments.")
                            });
                        }
                        if(units[selectedindex].abilityscout===true){
                            $('#abilitycontainer2').append("<div id='Guard_Scout' class='ability'><img src='Pictures//abilities/Guard/Guard_Scout.png' /></div>");
                            $("#Guard_Scout").click(function(){
                                message("Scout: Groups with the guard will always go first.")
                            });
                        }
                        if(units[selectedindex].abilityreshield===true){
                            $('#abilitycontainer').append("<div id='Guard_reshield' class='ability'><img src='Pictures//abilities/Guard/Guard_Reshield.png' /></div>");
                            $("#Guard_reshield").click(function(){
                                message("Reshield: Use to add 10 energy to guard's shield.")
                            });
                        }
                        if(units[selectedindex].abilityincreaseenergy===true){
                            $('#abilitycontainer2').append("<div id='Guard_increaseenergy' class='ability'><img src='Pictures//abilities/Guard/Guard_increaseenergy.png' /></div>");
                            $("#Guard_increaseenergy").click(function(){
                                message("Super Shield: Guard starts with 50 Shield instead of 25.")
                            });
                        }
                    }
                    if(units[selectedindex].type==="Enchantress"){
                        $('#TEXT').append("<p style = 'margin-top: 250px; margin-left:30%'>Mana: " +  units[selectedindex].mana + "</p>");
                        $('#abilitycontainer').append("<div id='Enchantress_absorb' class='ability'><img src='Pictures/abilities/Enchantress/Enchantress_Absorb.png' /></div>");
                        $("#Enchantress_absorb").click(function(){
                            message("Converts an enemy's life into mana.")
                        });
                        if(units[selectedindex].abilitystorm===true){
                            $('#abilitycontainer2').append("<div id='Enchantress_storm' class='ability'><img src='Pictures/abilities/Enchantress/Enchantress_Storm.png' /></div>");
                            $("#Enchantress_storm").click(function(){
                                message("Storm: Summons a storm that will help whenever the enchantress attacks.")
                            });
                        }
                        if(units[selectedindex].abilitytorment===true){
                            $('#abilitycontainer').append("<div id='Enchantress_Torment' class='ability'><img src='Pictures//abilities/Enchantress/Enchantress_Torment.png' /></div>");
                            $("#Enchantress_Torment").click(function(){
                                message("Torment: Inflicts sleep, poison, and enfeeble for two turns.")
                            });
                        }
                        if(units[selectedindex].abilitytransform===true){
                            $('#abilitycontainer2').append("<div id='Enchantress_transform' class='ability'><img src='Pictures//abilities/Enchantress/Enchantress_transform.png' /></div>");
                            $("#Enchantress_transform").click(function(){
                                message("Transform: Enchantress transforms into a golem for the rest of the battle.")
                            });
                        }
                        if(units[selectedindex].abilitybestow===true){
                            $('#abilitycontainer').append("<div id='Enchantress_Attackboost' class='ability'><img src='Pictures//abilities/Enchantress/Enchantress_bestow.png' /></div>");
                            $("#Enchantress_Attackboost").click(function(){
                                message("Bestow: Doubles an ally's attack and makes them invincible for 1 turn. Costs 50 mana.")
                            });
                        }
                        if(units[selectedindex].abilityreplenish===true){
                            $('#abilitycontainer2').append("<div id='Enchantress_replenish' class='ability'><img src='Pictures/Enchantress_replenish.png' /></div>");
                            $("#Enchantress_replenish").click(function(){
                                message("Replenish: Restores charge, energy, power, or arrows of an ally.")
                            });
                        }
                    }
                    if(units[selectedindex].type==="Healer"){
                        $('#abilitycontainer').append("<div id='Healer_vigor' class='ability'><img src='Pictures/abilities/Healer/Healer_Vigor.png' /></div>");
                        $("#Healer_vigor").click(function(){
                            message("Vigor: Gives an ally an extra action.")
                        });
                        if(units[selectedindex].abilitymove===true){
                            $('#abilitycontainer2').append("<div id='Healer_move' class='ability'><img src='Pictures/abilities/Healer/Healer_move.png' /></div>");
                            $("#Healer_move").click(function(){
                                message("Restore move: Vigor also allows the ally to move again.")
                            });
                        }
                        if(units[selectedindex].abilityheal===true){
                            $('#abilitycontainer').append("<div id='Healer_Heal' class='ability'><img src='Pictures/abilities/Healer/Healer_Heal.png' /></div>");
                            $("#Healer_Heal").click(function(){
                                message("Heal: Heals an ally by 60 life.")
                            });
                        }
                        if(units[selectedindex].abilityreach===true){
                            $('#abilitycontainer2').append("<div id='Healer_Reach' class='ability'><img src='Pictures/abilities/Healer/Healer_Reach.png' /></div>");
                            $("#Healer_Reach").click(function(){
                                message("Reach: Healer can use vigor and heal on any unit regardless of location.")
                            });
                        }
                        if(units[selectedindex].abilitycleanse===true){
                            $('#abilitycontainer').append("<div id='Healer_cleanse' class='ability'><img src='Pictures/abilities/Healer/Healer_cleanse.png' /></div>");
                            $("#Healer_cleanse").click(function(){
                                message("Cleanse: Vigor and Heal also remove all ailments.")
                            });
                        }
                        if(units[selectedindex].abilitydoublevigor===true){
                            $('#abilitycontainer2').append("<div id='Healer_doublevigor' class='ability'><img src='Pictures/abilities/Healer/Healer_doublevigor.png' /></div>");
                            $("#Healer_doublevigor").click(function(){
                                message("DoubleVigor: Vigor effects both other allies instead of just one.")
                            });
                        }

                    }
                    if(units[selectedindex].type==="Mage"){
                        $('#abilitycontainer').append("<div id='Mage_Fire' class='ability'><img src='Pictures/abilities/Mage/Mage_Fire.png' /></div>");
                        $("#Mage_Fire").click(function(){
                            message("Fire: Deals fire, magic damage equal to power to an enemy up to two spaces away or diagonally.")
                        });
                        if(units[selectedindex].abilityzap===true){
                            $('#abilitycontainer2').append("<div id='Mage_zap' class='ability'><img src='Pictures/abilities/Mage/Mage_Zap.png' /></div>");
                            $("#Mage_zap").click(function(){
                                message("Zap: Deals lightning, magic damage to one or two enemys up to two spaces away.")
                            });
                        }
                        if(units[selectedindex].abilityfreeze===true){
                            $('#abilitycontainer').append("<div id='Mage_freeze' class='ability'><img src='Pictures/abilities/Mage/Mage_Freeze.png' /></div>");
                            $("#Mage_freeze").click(function(){
                                message("Freeze: Deals ice, magic damage to an enemy up to three spaces away..")
                            });
                        }
                        if(units[selectedindex].abilityelementalailments===true){
                            $('#abilitycontainer2').append("<div id='Mage_addailments' class='ability'><img src='Pictures/abilities/Mage/Mage_Elementalailments.png' /></div>");
                            $("#Mage_addailments").click(function(){
                                message("Elemental Ailments: Ice may cause sleep, fire may cause blindness, and lightning may cause immobolize.")
                            });
                        }
                        if(units[selectedindex].abilitypain===true){
                            $('#abilitycontainer').append("<div id='Mage_pain' class='ability'><img src='Pictures/abilities/Mage/Mage_Pain.png' /></div>");
                            $("#Mage_pain").click(function(){
                                message("Pain: Deals damage equal to her attack plus the enemy's defense to an adjacent enemy.")
                            });
                        }
                        if(units[selectedindex].abilitydoubletap===true){
                            $('#abilitycontainer2').append("<div id='Mage_doubletap' class='ability'><img src='Pictures/abilities/Mage/Mage_Doubletap.png' /></div>");
                            $("#Mage_doubletap").click(function(){
                                message("Doubletap: Mage may do two actions instead of moving.")
                            });
                        }
                    }
                    if(units[selectedindex].type==="Wizard"){
                        $('#abilitycontainer').append("<div id='Wizard_Gust' class='ability'><img src='Pictures/abilities/Wizard/Wizard_Gust.png' /></div>");
                        $("#Wizard_Gust").click(function(){
                            message("Gust: Deals ice, magic damage to any enemy and pushes it back a space. Costs 1 charge")
                        });
                        if(units[selectedindex].abilitybolt===true){
                            $('#abilitycontainer2').append("<div id='Wizard_bolt' class='ability'><img src='Pictures/abilities/Wizard/Wizard_Bolt.png' /></div>");
                            $("#Wizard_bolt").click(function(){
                                message("Bolt: Deals X2 lightning, magic damage to any enemy. Costs 2 charge.")
                            });
                        }
                        if(units[selectedindex].abilitymissile===true){
                            $('#abilitycontainer').append("<div id='Wizard_Missile' class='ability'><img src='Pictures/abilities/Wizard/Wizard_Missile.png' /></div>");
                            $("#Wizard_Missile").click(function(){
                                message("Missile: Deals fire, magic damage to any enemy. Higher the charge, the more damage.")
                            });
                        }
                        if(units[selectedindex].abilityelementalailments===true){
                            $('#abilitycontainer2').append("<div id='Mage_addailments' class='ability'><img src='Pictures/abilities/Mage/Mage_Elementalailments.png' /></div>");
                            $("#Mage_addailments").click(function(){
                                message("Elemental Ailments: Ice may cause sleep, fire may cause blindness, and lightning may cause immobolize.")
                            });
                        }
                        if(units[selectedindex].abilitydrain===true){
                            $('#abilitycontainer').append("<div id='Wizard_Drain' class='ability'><img src='Pictures/abilities/Wizard/Wizard_Drain.png' /></div>");
                            $("#Wizard_Drain").click(function(){
                                message("Drain: Completely drains an adjacent enemy's charge, and refills wizard's charge by that amount.")
                            });
                        }
                        if(units[selectedindex].abilitystartcharge===true){
                            $('#abilitycontainer2').append("<div id='Wizard_startcharge' class='ability'><img src='Pictures/abilities/Wizard/Wizard_startcharge.png' /></div>");
                            $("#Wizard_startcharge").click(function(){
                                message("Energized: Wizard starts with 2 charge.")
                            });
                        }
                    }
                    if(units[selectedindex].type==="Sorcerer"){
                        $('#abilitycontainer').append("<div id='Sorcerer_Blizzard' class='ability'><img src='Pictures/abilities/Sorcerer/Sorcerer_blizzard.png' /></div>");
                        $("#Sorcerer_Blizzard").click(function(){
                            message("Deals ice, magic damage to all enemies. Costs 20 power.")
                        });
                        if(units[selectedindex].abilitylightning===true){
                            $('#abilitycontainer2').append("<div id='Sorcerer_Lightning' class='ability'><img src='Pictures/abilities/Wizard/Wizard_Bolt.png' /></div>");
                            $("#Sorcerer_Lightning").click(function(){
                                message("Bolt: Deals X2 lightning, magic damage to any enemy. Costs 20 power.")
                            });
                        }
                        if(units[selectedindex].abilityfireblast===true){
                            $('#abilitycontainer').append("<div id='Sorcerer_fireblast' class='ability'><img src='Pictures/abilities/Sorcerer/Sorcerer_Fireblast.png' /></div>");
                            $("#Sorcerer_fireblast").click(function(){
                                message("Fireblast: Deals X2 fire, magic damage to any enemy, and X1 damage to all enemies adjacent to that enemy. Costs 20 power")
                            });
                        }
                        if(units[selectedindex].abilitymanaincrease===true){
                            $('#abilitycontainer2').append("<div id='Sorcerer_manaincrease' class='ability'><img src='Pictures/abilities/Sorcerer/Sorcerer_manaincrease.png' /></div>");
                            $("#Sorcerer_manaincrease").click(function(){
                                message("Power increase: Sorcerer will gain 10 power a day instead of 5.")
                            });
                        }
                        if(units[selectedindex].abilityslumber===true){
                            $('#abilitycontainer').append("<div id='Sorcerer_slumber' class='ability'><img src='Pictures/abilities/Sorcerer/Sorcerer_Slumber.png' /></div>");
                            $("#Sorcerer_slumber").click(function(){
                                message("Slumber: Puts all enemies to sleep for a turn. Costs 10 power.")
                            });
                        }
                        if(units[selectedindex].abilitydeath===true){
                            $('#abilitycontainer2').append("<div id='Sorcerer_Death' class='ability'><img src='Pictures/abilities/Sorcerer/Sorcerer_Death.png' /></div>");
                            $("#Sorcerer_Death").click(function(){
                                message("Death: Kill any enemy. Costs 50 power.")
                            });
                        }
                    }
                    if(units[selectedindex].type==="Archer"){
                        $('#abilitycontainer').append("<div id='Archer_normal' class='ability'><img src='Pictures/abilities/Archer/Archer_Normal.png' /></div>");
                        $("#Archer_normal").click(function(){
                            message("Deals damage equal to it's attack to any enemy.")
                        });
                        if(units[selectedindex].abilityexplosion===true){
                            $('#abilitycontainer2').append("<div id='Archer_Explode' class='ability'><img src='Pictures/abilities/Archer/Archer_explosion.png' /></div>");
                            $("#Archer_Explode").click(function(){
                                message("Exploding arrow: Deals fire damage to any enemy and all enemies next to it.")
                            });
                        }
                        if(units[selectedindex].abilitypierce===true){
                            $('#abilitycontainer').append("<div id='Archer_pierce' class='ability'><img src='Pictures/abilities/Archer/Archer_Pierce.png' /></div>");
                            $("#Archer_pierce").click(function(){
                                message("Piercing Arrow: Deals damage equal to it's attack to any enemy and ignores defenses.")
                            });
                        }
                        if(units[selectedindex].abilityimmobolize===true){
                            $('#abilitycontainer2').append("<div id='Archer_Immobolize' class='ability'><img src='Pictures/abilities/Archer/Archer_Immobilize.png' /></div>");
                            $("#Archer_Immobolize").click(function(){
                                message("Immobolize arrow: Inflict immobolize onto an enemy. I won't be able to move for two turns.")
                            });
                        }
                        if(units[selectedindex].abilitytitan===true){
                            $('#abilitycontainer').append("<div id='Archer_Titan' class='ability'><img src='Pictures/abilities/Archer/Archer_Titan.png' /></div>");
                            $("#Archer_Titan").click(function(){
                                message("Titan arrow: Deals double damage to any enemy.")
                            });
                        }
                        if(units[selectedindex].abilitydoublearrows===true){
                            $('#abilitycontainer2').append("<div id='Archer_doublearrows' class='ability'><img src='Pictures/abilities/Rouge/Rouge_doublearrows.png' /></div>");
                            $("#Archer_doublearrows").click(function(){
                                message("Double arrows: Arrow capacity doubled.")
                            });
                        }
                    }
                    if(units[selectedindex].type==="Rouge"){
                        $('#abilitycontainer').append("<div id='Rouge_Poison' class='ability'><img src='Pictures/abilities/Rouge/Rouge_poison.png' /></div>");
                        $("#Rouge_Poison").click(function(){
                            message("Poison Arrow: Inflicts poison on an enemy for 3 turns.")
                        });
                        if(units[selectedindex].abilityblindness===true){
                            $('#abilitycontainer2').append("<div id='Archer_blindness' class='ability'><img src='Pictures/abilities/Rouge/Rouge_Blindness.png' /></div>");
                            $("#Archer_blindness").click(function(){
                                message("Blinding Arrow: Inflicts blindness on an enemy for 2 turns. It won't be able to use physical attacks.")
                            });
                        }
                        if(units[selectedindex].abilityenfeeble===true){
                            $('#abilitycontainer').append("<div id='Rouge_Enfeeble' class='ability'><img src='Pictures/abilities/Rouge/Rouge_enfeeble.png' /></div>");
                            $("#Rouge_Enfeeble").click(function(){
                                message("Enfeeble Arrow: Inflicts enfeeble on an enemy for 2 turns. Attacks will ignore it's defenses.")
                            });
                        }
                        if(units[selectedindex].abilitysleep===true){
                            $('#abilitycontainer2').append("<div id='Rouge_sleep' class='ability'><img src='Pictures/abilities/Rouge/Rouge_Sleep.png' /></div>");
                            $("#Rouge_sleep").click(function(){
                                message("Sleep Arrow: Puts an enemy to sleep for 1 turns.")
                            });
                        }
                        if(units[selectedindex].abilityailmentduration===true){
                            $('#abilitycontainer').append("<div id='Rouge_duration' class='ability'><img src='Pictures/abilities/Rouge/Rouge_ailmentduration.png' /></div>");
                            $("#Rouge_duration").click(function(){
                                message("Ailment Duration: All ailments inflicted on an enemy will last an extra turn.")
                            });
                        }
                        if(units[selectedindex].abilitydoublearrows===true){
                            $('#abilitycontainer2').append("<div id='Archer_doublearrows' class='ability'><img src='Pictures/abilities/Rouge/Rouge_doublearrows.png' /></div>");
                            $("#Archer_doublearrows").click(function(){
                                message("Double arrows: Arrow capacity Doubled.")
                            });
                        }
                    }
                    if(units[selectedindex].type==="Templar"){
                        $('#abilitycontainer').append("<div id='Templar_silence' class='ability'><img src='Pictures/abilities/Templar/Templar_silence.png' /></div>");
                        $("#Templar_silence").click(function(){
                            message("Silencing Arrow: Inflicts silence on an enemy for 2 turns. It can't use magic attacks")
                        });
                        if(units[selectedindex].abilitygrapplinghook===true){
                            $('#abilitycontainer2').append("<div id='Templar_hook' class='ability'><img src='Pictures/abilities/Templar/Templar_grapplinghook.png' /></div>");
                            $("#Templar_hook").click(function(){
                                message("Grappling Hook: Pulls an enemy to the templar.")
                            });
                        }
                        if(units[selectedindex].abilityburst===true){
                            $('#abilitycontainer').append("<div id='Templar_burst' class='ability'><img src='Pictures/abilities/Templar/Templar_burst.png' /></div>");
                            $("#Templar_burst").click(function(){
                                message("Burst Arrow: Deals damage equal to attack plus the enemy's resistance.")
                            });
                        }
                        if(units[selectedindex].abilityelemental===true){
                            $('#abilitycontainer2').append("<div id='Templar_elemental' class='ability'><img src='Pictures/abilities/Templar/Templar_elemental.png' /></div>");
                            $("#Templar_elemental").click(function(){
                                message("Elemental: You can select an element that will be added to it's attacks.")
                            });
                        }
                        if(units[selectedindex].abilitydisrupt===true){
                            $('#abilitycontainer').append("<div id='Templar_disrupt' class='ability'><img src='Pictures/abilities/Templar/Templar_Disrupt.png' /></div>");
                            $("#Templar_disrupt").click(function(){
                                message("Disrupting Arrow: Reduce all enemies' charge to 0.")
                            });
                        }
                        if(units[selectedindex].abilitydoublearrows===true){
                            $('#abilitycontainer2').append("<div id='Archer_doublearrows' class='ability'><img src='Pictures/abilities/Rouge/Rouge_doublearrows.png' /></div>");
                            $("#Archer_doublearrows").click(function(){
                                message("Double Arrows: Arrow capacity doubled.")
                            });
                        }
                    }
                }
                //shows buttons//////////////////////////////////
                $('*').removeClass('battlehighlight');

                switch (curtype) {
                    case "Soldier":
                        tipmessage("Soldier","This is a soldier. He is a well balanced close ranged fighter. It has a decent defense against physical damage, but it has a low resistance against magic.");
                        $('.actions').empty();
                        $('.actions').append("<select class = 'options' id='soldierchoice' style='position:absolute; margin-left:5px; margin-right:40px; margin-top: 2px; width:110px;'><option value = 'Normal'>Normal</option></select><div class = 'actionbutton' style='position:absolute; margin-top:30px; margin-left:5px' id = 'soldierAttack'>Use</div>");
                        if(units[selectedindex].medkit===true){
                            $('#soldierchoice').append(new Option('Medkit'));
                        }
                        $('#soldierAttack').addClass('battlehighlight');
                        selectedaction = 'soldierAttack';
                     traincommands(selectedindex);
                        clickactionbuttons();
                        break;
                    case "Knight":
                        tipmessage("Knight","This is a Knight. He is a master of the close range with it's high attack and high defense against physical damage, but it has a low resistance against magic. Moving and attacking uses stamina. End a turn without using him to restore stamina.");
                        $('.actions').empty();
                        $('.actions').append("<select class = 'options' id='knightchoice' style='position:absolute; margin-left:5px; margin-right:40px; margin-top: 2px; width:110px;'><option value = 'Normal'>Normal</option></select><div class = 'actionbutton' style='position:absolute; margin-top:30px; margin-left:5px' id = 'knightAttack'>Attack</div>");
                        if(units[selectedindex].abilitypiercer===true){
                            $('#knightchoice').append(new Option('Piercer'));
                        }
                        if(units[selectedindex].abilityswirl===true){
                            $('#knightchoice').append(new Option('Swirl'));
                        }
                        if(units[selectedindex].abilitysweep===true){
                            $('#knightchoice').append(new Option('Sweep'));
                        }
                        $('#knightAttack').addClass('battlehighlight');
                        selectedaction = 'knightAttack';
                        traincommands(selectedindex);
                        clickactionbuttons();
                        break;
                    case "Thief":
                    case "Invisible":
                        tipmessage("Thief","This is a thief. He has lower stats, but plenty of tricks up his sleeves, including the ability to steal. The lower the enemy's health, the easier it is to steal.");
                        $('.actions').empty();
                        var tempoption="Normal";
                        if(units[selectedindex].abilitymug===true){
                            tempoption="Mug"
                        }
                        $('.actions').append("<select class = 'options' id='thiefchoice' style='position:absolute; margin-left:5px; margin-right:40px; margin-top: 2px; width:110px;'><option value = '" + tempoption + "'>" + tempoption + "</option></select><div class = 'actionbutton' style='position:absolute; margin-top:30px; margin-left:5px' id = 'thiefAttack'>Attack</div>");
                            $('#thiefchoice').append(new Option('Steal'));
                        if(units[selectedindex].abilityinvisible===true){
                            $('#thiefchoice').append(new Option('Invisible'));
                        }
                        $('#thiefAttack').addClass('battlehighlight');
                        selectedaction = 'thiefAttack';
                        traincommands(selectedindex);
                        clickactionbuttons();
                        break;
                    case "Enchantress":
                        tipmessage("Enchantress","This is an enchantress. She is a support unit that can absorb mana from enemy. The closer, the more it will absorb.");
                        $('.actions').empty();
                        $('.actions').append("<select class = 'options' id='enchantresschoice' style='position:absolute; margin-left:5px; margin-right:40px; margin-top: 2px; width:110px;'><option value = 'Absorb'>Absorb</option></select><div class = 'actionbutton' style='position:absolute; margin-top:30px; margin-left:5px' id = 'enchantressUse'>Use</div>");
                        if(units[selectedindex].abilitybestow===true){
                            $('#enchantresschoice').append(new Option('Bestow(50)'));
                        }
                        if(units[selectedindex].abilitytorment===true){
                            $('#enchantresschoice').append(new Option('Torment(50)'));
                        }
                        if(units[selectedindex].abilityreplenish===true){
                            $('#enchantresschoice').append(new Option('Replenish(100)'));
                        }
                        if(units[selectedindex].abilitystorm===true){
                            $('#enchantresschoice').append(new Option('Storm(30)'));
                        }
                        if(units[selectedindex].abilitytransform===true){
                            $('#enchantresschoice').append(new Option('Transform(100)'));
                        }
                        $('#enchantressUse').addClass('battlehighlight');
                        selectedaction = 'enchantressUse';
                        traincommands(selectedindex);
                        clickactionbuttons();
                        break;
                    case "Healer":
                        tipmessage("Healer","This is a healer. She gets energy whenever she rests. Use that energy to heal your units or use vigor to give them extra turns.");
                        $('.actions').empty();
                        $('.actions').append("<select class = 'options' id='healerchoice' style='position:absolute; margin-left:5px; margin-right:40px; margin-top: 2px; width:110px;'></select><div class = 'actionbutton' style='position:absolute; margin-top:30px; margin-left:5px' id = 'healerUse'>Use</div>");
                        $('#healerchoice').append(new Option('Vigor'));
                        if(units[selectedindex].abilityheal===true){
                            $('#healerchoice').append(new Option('Heal(10)'));
                        }

                        $('#healerUse').addClass('battlehighlight');
                        selectedaction = 'healerUse';
                        traincommands(selectedindex);
                        clickactionbuttons();
                        break;
                    case "Djinn":
                    case "Golem":
                        $('.actions').empty();
                        $('.actions').append("<div class = 'actionbutton' id = 'DjinnAttack'>Attack</div>");
                        $('#DjinnAttack').addClass('battlehighlight');
                        selectedaction = 'DjinnAttack';
                        clickactionbuttons();
                        break;
                    case "Rouge":
                        tipmessage("Rouge","This is a Rouge. It is a master of poisons with it's bow. It can attack any enemy that's in a straight line.");
                        $('.actions').empty();
                        $('.actions').append("<select class = 'options' id='rougechoice' style='position:absolute; margin-left:5px; margin-right:40px; margin-top: 2px; width:110px;'><option value = 'Normal'>Normal</option><option value = 'Poison'>Poison(" + units[selectedindex].usedpoison + ")</option></select><div class = 'actionbutton' style='position:absolute; margin-top:30px; margin-left:5px' id = 'rougeAttack'>Attack</div>");
                        if(units[selectedindex].abilityblindness===true){
                            $('#rougechoice').append(new Option('Blindness(' + units[selectedindex].usedblindness + ')','Blindness'));
                        }
                        if(units[selectedindex].abilitysleep===true){
                            $('#rougechoice').append(new Option('Sleep(' + units[selectedindex].usedsleep + ')','Sleep'));
                        }
                        if(units[selectedindex].abilityenfeeble===true){
                            $('#rougechoice').append(new Option('Enfeeble(' + units[selectedindex].usedenfeeble + ')','Enfeeble'));
                        }
                        $('#rougeAttack').addClass('battlehighlight');
                        selectedaction = 'rougeAttack';
                        traincommands(selectedindex);
                        clickactionbuttons();
                        break;
                    case "Templar":
                        tipmessage("Templar","This is a Templar. He is a terror for any with magic with it's high resistance and anti-magic attacks. It can attack any enemy that's in a straight line.");
                        $('.actions').empty();
                        $('.actions').append("<select class = 'options' id='templarchoice' style='position:absolute; margin-left:5px; margin-right:40px; margin-top: 2px; width:110px;'><option value = 'Normal'>Normal</option><option value = 'Silence'>Silence(" + units[selectedindex].usedsilence + ")</option></select><div class = 'actionbutton' style='position:absolute; margin-top:30px; margin-left:5px' id = 'templarAttack'>Attack</div>");
                        if(units[selectedindex].abilityelemental===true){
                            $('.actions').append("<p style='position:absolute; margin-left:130px; margin-top: 10px; width:110px;'>Choose Element</p>");
                            $('.actions').append("<select class='options' id='elemental' style='position:absolute; margin-left:130px; margin-top: 32px; width:110px;'><option value = 'Fire'>Fire</option><option value = '<Lightning'>Lightning</option><option value = 'Ice'>Ice</option></select>");
                        }
                        if(units[selectedindex].abilityburst===true){
                            $('#templarchoice').append(new Option('Burst(' + units[selectedindex].usedburst + ')','Burst'));
                        }
                        if(units[selectedindex].abilitydisrupt===true){
                            $('#templarchoice').append(new Option('Disrupt(' + units[selectedindex].useddisrupt + ')','Disrupt'));
                        }
                        if(units[selectedindex].abilitygrapplinghook===true){
                            $('#templarchoice').append(new Option('Grappling_Hook(' + units[selectedindex].usedgrappling + ')','Grappling_Hook'));
                        }
                        $('#templarAttack').addClass('battlehighlight');
                        selectedaction = 'templarAttack';
                        traincommands(selectedindex);
                        clickactionbuttons();
                        break;
                    case "Archer":
                        tipmessage("Archer","This is an Archer. She is a master of the long range. It can attack any enemy regardless of location.");
                        $('.actions').empty();
                        $('.actions').append("<select class = 'options' id='archerchoice' style='position:absolute; margin-left:5px; margin-right:40px; margin-top: 2px; width:110px;'><option value = 'Normal'>Normal</select><div class = 'actionbutton' style='position:absolute; margin-top:30px; margin-left:5px' id = 'archerAttack'>Attack</div>");
                        if(units[selectedindex].abilityexplosion===true){
                            $('#archerchoice').append(new Option('Exploding(' + units[selectedindex].usedexploding + ')','Exploding'));
                        }
                        if(units[selectedindex].abilitypierce===true){
                            $('#archerchoice').append(new Option('Pierce(' + units[selectedindex].usedpierce + ')','Piercing'));
                        }
                        if(units[selectedindex].abilityimmobolize===true){
                            $('#archerchoice').append(new Option('Immobolize(' + units[selectedindex].usedimmobolize + ')','Immobolize'));
                        }
                        if(units[selectedindex].abilitytitan===true){
                            $('#archerchoice').append(new Option('Titan(' + units[selectedindex].usedtitan + ')','Titan'));
                        }
                        $('#archerAttack').addClass('battlehighlight');
                        selectedaction = 'archerAttack';
                        traincommands(selectedindex);
                        clickactionbuttons();
                        break;
                    case "Guard":
                            tipmessage("Guard","This is a Guard. He is a master of defense. It may have a low attack, but it has both great defense and resistance. It has a shield shown in blue above it's health. Any damage to it will be absorbed by that shield first.");
                        $('.actions').empty();
                        $('.actions').append("<select class = 'options' id='guardchoice' style='position:absolute; margin-left:5px; margin-right:40px; margin-top: 2px; width:110px;'><option value = 'Bash'>Bash</option></select><div class = 'actionbutton' style='position:absolute; margin-top:30px; margin-left:5px' id = 'guardUse'>Use</div></div>");
                        if(units[selectedindex].abilityprotect===true){
                            $('#guardchoice').append(new Option('Protect'));
                        }
                        if(units[selectedindex].abilityreshield===true){
                            $('#guardchoice').append(new Option('Reshield'));
                        }
                        $('#guardUse').addClass('battlehighlight');
                        selectedaction = 'guardUse';
                        traincommands(selectedindex);
                        clickactionbuttons();
                        break;
                    case "Mage":
                        tipmessage("Mage","This is a Mage. She is a master of short-range magic. It can attack enemies up to two spaces away, and it's fire can attack diagonally.");
                        $('.actions').empty();
                        $('.actions').append("<select class = 'options' id='magechoice' style='position:absolute; margin-left:5px; margin-right:40px; margin-top: 2px; width:110px;'><option value = 'Fire'>Fire</option></select><div class = 'actionbutton' style='position:absolute; margin-top:30px; margin-left:5px' id = 'mageCast'>Cast</div>");
                        if(units[selectedindex].abilityzap===true){
                            $('#magechoice').append(new Option('Zap'));
                        }
                        if(units[selectedindex].abilityfreeze===true){
                            $('#magechoice').append(new Option('Freeze'));
                        }
                        if(units[selectedindex].abilitypain===true){
                            $('#magechoice').append(new Option('Pain'));
                        }
                        $('#mageCast').addClass('battlehighlight');
                        selectedaction = 'mageCast';
                        traincommands(selectedindex);
                        clickactionbuttons();
                        break;
                    case "Wizard":
                        tipmessage("Wizard","This is a wizard. He is a master of long-range magic. It can attack at any enemy regardless of location using magic/elemental attacks, but those attacks require charging first, shown inside that purple orb.");
                        $('.actions').empty();
                        $('.actions').append("<select class = 'options' id='wizardchoice' style='position:absolute; margin-left:5px; margin-right:40px; margin-top: 2px; width:110px;'><option value = 'Gust'>Gust(1)</option></select><div class = 'actionbutton' style='position:absolute; margin-top:30px; margin-left:5px' id = 'wizardCast'>Cast</div><div class = 'actionbutton' style='position:absolute; margin-left:130px;' id = 'wizardCharge'>Charge</div>");
                        if(units[selectedindex].abilitybolt===true){
                            $('#wizardchoice').append(new Option('Bolt(2)'));
                        }
                        if(units[selectedindex].abilitymissile===true){
                            $('#wizardchoice').append(new Option('Missile(X)'));
                        }
                        if(units[selectedindex].abilitydrain===true){
                            $('#wizardchoice').append(new Option('Drain'));
                        }
                        $('#wizardCast').addClass('battlehighlight');
                        selectedaction = 'wizardCast';
                        traincommands(selectedindex);
                        clickactionbuttons();
                        break;
                    case "Sorcerer":
                        tipmessage("Sorcerer","This is a sorcerer. He is the master of long-range magic. It can attack at any enemy regardless of location using magic/elemental attacks, but those attacks require power shown in blue. It will increase every day.");
                        $('.actions').empty();
                        $('.actions').append("<select class = 'options' id='sorcererchoice' style='position:absolute; margin-left:5px; margin-right:40px; margin-top: 2px; width:110px;'><option value = 'Blizzard'>Blizzard(20)</option></select><div class = 'actionbutton' style='position:absolute; margin-top:30px; margin-left:5px' id = 'sorcererCast'>Cast</div>");
                        if(units[selectedindex].abilitylightning===true){
                            $('#sorcererchoice').append(new Option('Lightning(20)'));
                        }
                        if(units[selectedindex].abilityfireblast===true){
                            $('#sorcererchoice').append(new Option('Fireblast(30)'));
                        }
                        if(units[selectedindex].abilityslumber===true){
                            $('#sorcererchoice').append(new Option('Slumber(20)'));
                        }
                        if(units[selectedindex].abilitydeath===true){
                            $('#sorcererchoice').append(new Option('Death(50)'));
                        }
                        $('#sorcererCast').addClass('battlehighlight');
                        selectedaction = 'sorcererCast';
                        traincommands(selectedindex);
                        clickactionbuttons();
                        break;
                }//end of switch

            }
        });
        $('.Eunit').click(function(){
            //gives stats on selected unit
            for (var i = 0; i < Eindex; i++) {
                var temp = $(this).attr("id").replace("E","");
                if (Eunits[i].index === parseInt(temp,10)) {
                    $('#TEXT').empty();
                    $('#TEXT').append("<ul>Stats for " + Eunits[i].name + " <li>Type: " + Eunits[i].type + "</li> <li>Attack: " + Eunits[i].attack + "</li> <li>Defense: " + Eunits[i].defense + "</li><li>Resistance: " + Eunits[i].resistance + "</li><li>Charge: " + Eunits[i].charge + "</li><li>Health: " + Eunits[i].health + "</li></ul>");
                }
            }
        });

    }
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

//Click on stuff////////////////////////////////////////////////////////////////////////////
    function youwin() {
        setTimeout(function(){
            if(battleon===false){
                return;
            }
            for (var i = 0; i < index; i++) {
                if (units[i].type === "Beast" || units[i].type === "Djinn") {
                    if (slots[1] === i) {
                        slots[1] = units[slots[1]].owner;
                    }
                    if (slots[2] === i) {
                        slots[2] = units[slots[2]].owner;
                    }
                    if (slots[3] === i) {
                        slots[3] = units[slots[3]].owner;
                    }
                }
            }
            curmapmusic.src="sounds/music-tutorial.mp3";
            curmapmusic.loop=true;
            curmapmusic.play();
            curbattlemusic.src="";
            curbattlemusic.play();
            liberate(Egroups[curenemy].location);
            $("#battlebackground").empty();
            $(".actionbutton").remove();
            $(".actions").empty();
            $(".battleareas").remove();
            $("#EM" + curenemy).remove();
            Egroups[curenemy].location = -2;

            for(var a =1;a<4;a++){
                if(units[slots[a]].type==="Invisible" || units[slots[a]].type==="Golem"){
                    units[slots[a]].type= units[slots[a]].realtype;
                }
            }
            if (units[slots[1]].alive === true) {
                var templevel = units[slots[1]].level
                levelup(1);
                $("#battlebackground").append("<div class= 'levelup' id = 'levelup'" + 1 + "><img class='barrackpic'' src='" + units[slots[1]].image + "'/><p style=' margin-left:10px; font-size:25px; font-family:bold'' class='leveling'>" + units[slots[1]].name + "</p><p style='margin-left:10px; font-size:25px; font-family:bold'' class='leveling'>LEVEL: " + units[slots[1]].level + "</p><p style='margin-top: -60px; margin-left:250px; font-size:35px; font-family:bold'' class='level'>Experience: " + units[slots[1]].experience + "</p></div>");
                if(templevel < units[slots[1]].level){
                    $("#battlebackground").append("<img class='leveluppic' src='Pictures/levelup.png'/>")
                }
            }
            if (units[slots[2]].alive === true) {
                var templevel = units[slots[2]].level
                levelup(2);
                $("#battlebackground").append("<div class= 'levelup' id = 'levelup'" + 2 + "><img class='barrackpic'' src='" + units[slots[2]].image + "'/><p style=' margin-left:10px; font-size:25px; font-family:bold'' class='leveling'>" + units[slots[2]].name + "</p><p style='margin-left:10px; font-size:25px; font-family:bold'' class='leveling'>LEVEL: " + units[slots[2]].level + "</p><p style='margin-top: -60px; margin-left:250px; font-size:35px; font-family:bold'' class='level'>Experience: " + units[slots[2]].experience + "</p></div>");
                if(templevel < units[slots[2]].level){
                    $("#battlebackground").append("<img class='leveluppic' src='Pictures/levelup.png'/>")
                }
            }
            if (units[slots[3]].alive === true) {
                var templevel = units[slots[3]].level
                levelup(3);
                $("#battlebackground").append("<div class= 'levelup' id = 'levelup'" + 3 + "><img class='barrackpic'' src='" + units[slots[3]].image + "'/><p style=' margin-left:10px; font-size:25px; font-family:bold'' class='leveling'>" + units[slots[3]].name + "</p><p style='margin-left:10px; font-size:25px; font-family:bold'' class='leveling'>LEVEL: " + units[slots[3]].level + "</p><p style='margin-top: -60px; margin-left:250px; font-size:35px; font-family:bold'' class='level'>Experience: " + units[slots[3]].experience + "</p></div>");
                if(templevel < units[slots[3]].level){
                    $("#battlebackground").append("<img class='leveluppic' src='Pictures/levelup.png'/>")
                }
            }
            $("#battlebackground").append("<p style='margin-left:30%; font-size:30px'>Click to continue</p>");
            if(Eunits[Eslots[2]].type==="Dragon"){
                $(".areas").remove();
                $('#Pass').remove();
                $(".icon").remove();
                $(".Eicon").remove();
                $("#background").append("<div style='position: absolute; background-color:gray; width:200px; height:400px; margin-top:-400px; margin-left:200px'><p style='font-size:20px; margin-left:20px'>YOU WIN</p><p>Created by Jake Murphy</p><p>Music by 'Light elves Music'. See more at</p><p>'butterflytea.bandcamp.com'</p><p>Special thanks to:</p><p>www.piskelapp.com</p><p>mapeditor.org</p><p>This game and all of it's images are licensed under a: <p>Creative Commons Attribution-ShareAlike 3.0 Unported License</p></p></div>")
            }
            //get summon souls
            if (lootenemy[1] === "Angel") {
                lootenemy[1] = -1;
                $("#TEXT").append("<p>You received the soul of an angel. Research summoning to use summons.</p>");
                angel=true;
            }
            if (lootenemy[1] === "Frostlord") {
                lootenemy[1] = -1;
                $("#TEXT").append("<p>You received the soul of a frostlord. Research summoning to use summons.</p>");
                frostlord=true;
            }
            if (lootenemy[1] === "Demon") {
                lootenemy[1] = -1;
                $("#TEXT").append("<p>You received the soul of a demon. Research summoning to use summons.</p>");
                demon=true;
            }
            if (lootenemy[1] === "Djinn") {
                lootenemy[1] = -1;
                $("#TEXT").append("<p>You received the soul of a Djinn. Research summoning to use summons.</p>");
                djinn=true;
            }

            if (lootenemy[1] != -1) {
                ingredient[lootenemy[1]].quantity += 1;
                $("#TEXT").append("<p>You received " + ingredient[lootenemy[1]].name + "</p>")
            }
            if (lootenemy[2] != -1) {
                ingredient[lootenemy[2]].quantity += 1;
                $("#TEXT").append("<p>You received " + ingredient[lootenemy[2]].name + "</p>")
            }
            if (lootenemy[3] != -1) {
                ingredient[lootenemy[3]].quantity += 1;
                $("#TEXT").append("<p>You received " + ingredient[lootenemy[3]].name + "</p>")
            }
            if (lootenemy[4] != -1) {
                ingredient[lootenemy[4]].quantity += 1;
                $("#TEXT").append("<p>You received " + ingredient[lootenemy[4]].name + "</p>")
            }
            if (lootenemy[5] != -1) {
                ingredient[lootenemy[5]].quantity += 1;
                $("#TEXT").append("<p>You received " + ingredient[lootenemy[5]].name + "</p>")
            }
            $('#battlebackground').click(function () {
                $('#battlebackground').remove();
                startcombat();
            });

            battleon = false;
            presspass();
        },1000)

    }
    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
    function attackbadguy(){
        $('.Eunit').mousedown(function(e){
            $("#TEXT").empty();
if (battleon===false){
    return;
}
            if(e.button === 2) {
                //determine enemy's number
                for (var i = 0; i < Eindex; i++) {
                    var temp = this.id;
                    temp = temp.replace("E", "");
                    if (Eunits[i].index === parseInt(temp, 10)) {
                        enemyindex = i;
                    }
                }


                //determine whether this unit did an action this turn
                if (units[selectedindex].usedaction === true && !(units[selectedindex].abilitydoubletap===true && units[selectedindex].moved===false)) {
                    $("#TEXT").append("<p>" + units[selectedindex].name + " has already used an action this turn</p>");
                    return;
                }
if(units[selectedindex].usedaction===true){
    units[selectedindex].moved===true;
}
                if(units[selectedindex].type==="Invisible"){
                    units[selectedindex].type=units[selectedindex].realtype;
                    $("#" + selectedindex).removeClass("Invisible");
                }


                function dies(enemyindex) {
                    if (Eunits[enemyindex].health <= 0 || isNumeric(Eunits[enemyindex].health)===false) {
                        if (Eunits[enemyindex].type === "Bee" || Eunits[enemyindex].type === "Zombie" || Eunits[enemyindex].type === "Golem") {

                            $("#E" + enemyindex).fadeOut();
                            $("#E" + enemyindex).animate({
                                left: 225 + "px",
                                top: 25 + "px"
                            });
                            Eunits[enemyindex].curleft = 225;
                            Eunits[enemyindex].curtop = 25;
                        } else {
                            $("#E" + enemyindex).effect('explode');
                    }
                        if(units[selectedindex].type==="Enchantress" && Eunits[enemyindex].alive === false){
                            units[selectedindex].mana+=30;
                            $("#TEXT").append("You recieved 30 mana for killing that enemy.")
                        }
                        Eunits[enemyindex].alive = false;
                        $("#TEXT").append("<p>" + Eunits[enemyindex].name + " has been killed</p>");
                        if ((Eslots[1] === -1 || Eunits[Eslots[1]].alive === false) && (Eslots[2] === -1 || Eunits[Eslots[2]].alive === false) && (Eslots[3] === -1 || Eunits[Eslots[3]].alive === false) && (Eslots[4] === -1 || Eunits[Eslots[4]].alive === false) && (Eslots[5] === -1 || Eunits[Eslots[5]].alive === false)) {
                            youwin();
                        }

                    }
                }
                function Damaging(index, damage) {
                    var temp = "#E" + index;
                    var tempbar = "#EHB" + index;
                    $(tempbar).remove();
                    $(temp).append('<div class="healthbar" id ="EHB' + Eunits[index].index + '"style="width: ' + (Eunits[index].health / Eunits[index].maxhealth) * 100 + '%"></div>');
                    $(".damage").remove();
                    $(temp).append('<p class="damage" style="position: absolute; font-size:40px; margin-top:-70px; margin-left:30px; color:white ">' + damage + '</p>');
                //    $("#battlebackground").append('<p class="damage" style="position: absolute; font-size:40px; margin-top:' + (-500 + Eunits[index].curtop) +'px; margin-left:' + (10 + Eunits[index].curleft) + 'px; color:white ">' + damage + '</p>');
                    $(".damage").delay(1000).effect("puff");
                }

                function turngray() {
                    if (units[selectedindex].moved === true || units[selectedindex].usedaction === true) {
                        $('#' + selectedindex).addClass("lighticon");
                    }
                    if (units[selectedindex].moved === true && units[selectedindex].usedaction === true) {
                        $('#' + selectedindex).removeClass("lighticon");
                        $('#' + selectedindex).addClass("grayicon");
                    }

                }
function shootarrow(enemyindex,selectedindex){
    //effects
    var tempAngle = Math.atan((units[selectedindex].curleft-Eunits[enemyindex].curleft)/(Eunits[enemyindex].curtop-units[selectedindex].curtop))/(Math.PI/180);
  //  if(units[selectedindex].curleft>Eunits[enemyindex].curleft){
  //      tempAngle+=180;
  //  }
    if(units[selectedindex].curtop<=Eunits[enemyindex].curtop){
        tempAngle+=180;
    }
    $("#battlebackground").append("<div class='Effects' style='top: " + units[selectedindex].curtop +"px; left: " + units[selectedindex].curleft +"px'><img style = ' -ms-transform: rotate(" + tempAngle + "deg); -webkit-transform: rotate(" + tempAngle + "deg); transform: rotate(" + tempAngle + "deg);' src='Pictures/Effects/Arrow.gif' /></div>");
    $(".Effects").animate({
        left: Eunits[enemyindex].curleft + "px",
        top: Eunits[enemyindex].curtop + "px"
    },500).fadeOut(500);
    Arrow.play();
}

                //rouge
                if (selectedaction === "rougeAttack") {
                    if (units[selectedindex].curleft === Eunits[enemyindex].curleft || units[selectedindex].curtop === Eunits[enemyindex].curtop) {
                        if (units[selectedindex].blind === 0) {
                            for(var i = 1;i<6;i++){
                                if(Eunits[Eslots[i]].type==="Magnet" && Eunits[Eslots[i]].alive===true){
                                    enemyindex=Eslots[i]
                                    damage=0;
                                }
                            }

                            var e = document.getElementById("rougechoice");
                            var defense=0;
                            if(Eunits[enemyindex].enfeeble===0){defense=Eunits[enemyindex].defense}
                            var damage = units[selectedindex].attack + units[selectedindex].attacktempboost - defense;
                            if (damage < 0) {
                                damage = 0
                            }
                            //magnet
                            var magnetthere =false;
                            for(var i = 1;i<6;i++){
                                if(Eunits[Eslots[i]].type==="Magnet" && Eunits[Eslots[i]].alive===true){
                                    enemyindex=Eslots[i];
                                    magnetthere=true;
                                    damage=0;
                                }
                            }
                            if (Eunits[enemyindex].phasedout === true) {
                                damage = 0;
                            }

                            if ($('#rougechoice option:selected').text() === "Normal") {
                                $("#TEXT").empty();
                                $("#TEXT").append("<p>" + units[selectedindex].name + " did " + damage + " damage to " + Eunits[enemyindex].name + "\n</p>");
                                Eunits[enemyindex].health -= damage;
                               shootarrow(enemyindex,selectedindex);
                                setTimeout(function(){Damaging(enemyindex, damage);},500);
                                setTimeout(function(){dies(enemyindex);},500);
                                units[selectedindex].usedaction = true;
                            }
                            if(e.options[e.selectedIndex].value==="Sleep") {
                                if (units[selectedindex].usedsleep === 0) {
                                    $("#TEXT").append('<p>' + units[selectedindex].name + ' is out of sleep arrows\n</p>');
                                    return
                                }
                                $("#TEXT").append("<p>" + units[selectedindex].name + " did " + damage + " damage to " + Eunits[enemyindex].name + "\n</p>");

                                Eunits[enemyindex].health -= damage;
                                units[selectedindex].usedsleep -= 1;
                                if(magnetthere===false){
                                    Paralyzesound.play();
                                    Eunits[enemyindex].sleep = 1 + units[selectedindex].duration;
                                    $("#TEXT").append('<p>' + Eunits[enemyindex].name + ' was put to sleep for 1 turn.\n</p>');
                                }

                                shootarrow(enemyindex,selectedindex);
                                setTimeout(function(){Damaging(enemyindex, damage);},500);
                                setTimeout(function(){dies(enemyindex);},500);

                                units[selectedindex].usedaction = true;
                                showailments();
                            }
                            if(e.options[e.selectedIndex].value==="Blindness") {
                                if (units[selectedindex].usedblindness === 0) {
                                    $("#TEXT").append('<p>' + units[selectedindex].name + ' is out of blinding arrows\n</p>');
                                    return
                                }
                                $("#TEXT").append("<p>" + units[selectedindex].name + " did " + damage + " damage to " + Eunits[enemyindex].name + "\n</p>");
                                if(magnetthere===false){
                                    Paralyzesound.play();
                                    Eunits[enemyindex].blind = 2 + units[selectedindex].duration;
                                    $("#TEXT").append('<p>' + Eunits[enemyindex].name + ' was blinded for 2 turns, so it can not attack\n</p>');
                                }
                                Eunits[enemyindex].health -= damage;
                                units[selectedindex].usedblindness -= 1;

                                shootarrow(enemyindex,selectedindex);
                                setTimeout(function(){Damaging(enemyindex, damage);},500);
                                setTimeout(function(){dies(enemyindex);},500);

                                units[selectedindex].usedaction = true;
                                showailments();
                            }
                            if(e.options[e.selectedIndex].value==="Poison") {
                                if (units[selectedindex].usedpoison === 0) {
                                    $("#TEXT").append('<p>' + units[selectedindex].name + ' is out of poison arrows\n</p>');
                                    return
                                }
                                $("#TEXT").append("<p>" + units[selectedindex].name + " did " + damage + " damage to " + Eunits[enemyindex].name + "\n</p>");
                                if(magnetthere===false){
                                    Paralyzesound.play();
                                    Eunits[enemyindex].poison = 3 + units[selectedindex].duration;
                                    $("#TEXT").append('<p>' + Eunits[enemyindex].name + ' was poisoned for 3 turns\n</p>');
                                }

                                Eunits[enemyindex].health -= damage;
                                units[selectedindex].usedpoison -= 1;

                                shootarrow(enemyindex,selectedindex);
                                setTimeout(function(){Damaging(enemyindex, damage);},500);
                                setTimeout(function(){dies(enemyindex);},500);

                                units[selectedindex].usedaction = true;
                                showailments();
                            }
                            if(e.options[e.selectedIndex].value==="Enfeeble") {
                                if (units[selectedindex].usedenfeeble === 0) {
                                    $("#TEXT").append('<p>' + units[selectedindex].name + ' is out of enfeebling arrows\n</p>');
                                    return
                                }
                                if(magnetthere===false){
                                    Paralyzesound.play();
                                    Eunits[enemyindex].enfeeble = 3 + units[selectedindex].duration;
                                    $("#TEXT").append('<p>' + Eunits[enemyindex].name + ' was enfeebled for 3 turns, so its defense and resistance are 0.\n</p>');
                                }

                                Eunits[enemyindex].health -= damage;
                                units[selectedindex].usedenfeeble -= 1;

                                shootarrow(enemyindex,selectedindex);
                                setTimeout(function(){Damaging(enemyindex, damage);},500);
                                setTimeout(function(){dies(enemyindex);},500);

                                units[selectedindex].usedaction = true;
                                showailments();
                            }
                        } else {
                            $("#TEXT").append("This unit is blind for " + units[selectedindex].blind + " more turns.")
                        }
                    }
                }
                //templar
                if (selectedaction === "templarAttack") {
                    if (units[selectedindex].curleft === Eunits[enemyindex].curleft || units[selectedindex].curtop === Eunits[enemyindex].curtop) {
                        if (units[selectedindex].blind === 0) {
                            var e = document.getElementById("templarchoice");
                            var defense=0;
                            if(Eunits[enemyindex].enfeeble===0){defense=Eunits[enemyindex].defense}
                            var damage = units[selectedindex].attack + units[selectedindex].attacktempboost - defense;
                            if (damage < 0) {
                                damage = 0
                            }
                            //magnet
                            var magnetthere =false;
                            for(var i = 1;i<6;i++){
                                if(Eunits[Eslots[i]].type==="Magnet" && Eunits[Eslots[i]].alive===true){
                                    enemyindex=Eslots[i];
                                    magnetthere=true;
                                    damage=0;
                                }
                            }
                            //elemental stuff
                            if (units[selectedindex].abilityelemental === true) {
                               var elementalboost = 1;
                                if ($('#elemental option:selected').text() === "Fire") {
                                    elementalboost = Eunits[enemyindex].fire;
                                }
                                if ($('#elemental option:selected').text() === "Ice") {
                                    elementalboost = Eunits[enemyindex].ice;
                                }
                                if ($('#elemental option:selected').text() === "Lightning") {
                                    elementalboost = Eunits[enemyindex].lightning;
                                }
                                damage = damage * elementalboost;
                            }

                            //phasing stuff
                            if (Eunits[enemyindex].phasedout === true && units[selectedindex].abilityelemental === true) {
                                if ((Eunits[enemyindex].type === "Frostwraith" && $('#elemental option:selected').text() === "Fire") || (Eunits[enemyindex].type === "Flamewraith" && $('#elemental option:selected').text() === "Ice") || (Eunits[enemyindex].type === "Waterwraith" && $('#elemental option:selected').text() === "Lightning")) {
                                } else {
                                    damage = 0;
                                }
                                if ($('#elemental option:selected').text() != "") {
                                    Eunits[enemyindex].phasedout = false;
                                    $("#E" + Eunits[enemyindex].index).removeClass("Invisible");
                                    $("#TEXT").append("The wraith phased back in.")
                                }
                            }

                            if ($('#templarchoice option:selected').text() === "Normal") {
                                Eunits[enemyindex].health -= damage;
                                shootarrow(enemyindex,selectedindex);
                                setTimeout(function(){Damaging(enemyindex, damage);},500);
                                setTimeout(function(){dies(enemyindex);},500);
                                units[selectedindex].usedaction = true;
                                $("#TEXT").empty();
                                $("#TEXT").append("<p>" + units[selectedindex].name + " did " + damage + " damage to " + Eunits[enemyindex].name + "\n</p>");
                                Arrow.play();
                            }
                            if(e.options[e.selectedIndex].value==="Silence") {
                                if (units[selectedindex].usedsilence === 0) {
                                    $("#TEXT").append('<p>' + units[selectedindex].name + ' is out of silencing arrows\n</p>');
                                    return
                                }
                                if(magnetthere===false){
                                    Eunits[enemyindex].silenced = 2;
                                    $("#TEXT").append('<p>' + Eunits[enemyindex].name + ' was silenced for 2 turns\n</p>');
                                }
                                Paralyzesound.play();
                                Eunits[enemyindex].health -= damage;
                                units[selectedindex].usedsilence -= 1;


                                shootarrow(enemyindex,selectedindex);
                                setTimeout(function(){Damaging(enemyindex, damage);},500);
                                setTimeout(function(){dies(enemyindex);},500);

                                units[selectedindex].usedaction = true;
                                showailments()
                                $("#TEXT").empty();
                                $("#TEXT").append("<p>" + units[selectedindex].name + " did " + damage + " damage to " + Eunits[enemyindex].name + "\n</p>");
                                Arrow.play();
                            }
                            if(e.options[e.selectedIndex].value==="Burst") {
                                if (units[selectedindex].usedburst === 0) {
                                    $("#TEXT").append('<p>' + units[selectedindex].name + ' is out of burst arrows\n</p>');
                                    return
                                }
                                damage+=Eunits[enemyindex].resistance;

                                Eunits[enemyindex].health -= damage;
                                units[selectedindex].usedburst -= 1;
                                shootarrow(enemyindex,selectedindex);
                                setTimeout(function(){Damaging(enemyindex, damage);},500);
                                setTimeout(function(){dies(enemyindex);},500);

                                units[selectedindex].usedaction = true;
                                showailments();
                                $("#TEXT").empty();
                                $("#TEXT").append("<p>" + units[selectedindex].name + " did " + damage + " damage to " + Eunits[enemyindex].name + "\n</p>");
                                Arrow.play();
                            }
                            if(e.options[e.selectedIndex].value==="Disrupt") {
                                if (units[selectedindex].useddisrupt === 0) {
                                    $("#TEXT").append('<p>' + units[selectedindex].name + ' is out of disrupting arrows\n</p>');
                                    return
                                }
                                Eunits[enemyindex].health -= damage;
                                units[selectedindex].useddisrupt -= 1;
                                if(magnetthere===false){
                                    $("#battlebackground").append("<div class='totalbackground'] style='background-color:white; margin-left:0px; margin-top:-500px'</div>");
                                    $(".totalbackground").fadeOut(500);
                                    Disrupt.play();
                                    for(var i = 1;i<6;i++){

                                        $("#ORBE" + + Eunits[Eslots[i]].index).remove();
                                        var maxcharge = 0;
                                        if(Eunits[Eslots[i]].type === "Fire Elemental" || Eunits[Eslots[i]].type === "Beekeeper" || Eunits[Eslots[i]].type === "Necromancer" || Eunits[Eslots[i]].type === "Shaman" || Eunits[Eslots[i]].type === "Wisp" || Eunits[Eslots[i]].type === "Frostwraith" || Eunits[Eslots[i]].type === "Waterwraith"){
                                            Eunits[Eslots[i]].charge = 0;
                                            maxcharge = 1;
                                        }
                                        if(Eunits[Eslots[i]].type === "Ice Elemental" || Eunits[Eslots[i]].type === "Flamewraith"){
                                            Eunits[Eslots[i]].charge = 0;
                                            maxcharge = 2;
                                        }
                                        if(Eunits[Eslots[i]].type === "Lightning Elemental" || Eunits[Eslots[i]].type === "Angel" || Eunits[Eslots[i]].type === "Frostlord" || Eunits[Eslots[i]].type === "Demon" || Eunits[Eslots[i]].type === "Unknown" || Eunits[Eslots[i]].type === "Dragon"){
                                            Eunits[Eslots[i]].charge = 0;
                                            maxcharge = 3;
                                        }
                                        $('#E' + Eslots[i]).append('<img style="position: absolute; margin-top:40px; margin-left:-30px; width:35px; height:35px" src="Pictures/Orb.gif" /><div id = "ORBE' + Eslots[Eslots[i]] + '" style="color:yellow; position: absolute; font-size:20px; margin-top:-30px; margin-left:50px; width:10px; height:10px ">' + Eunits[Eslots[i]].charge +'/' + maxcharge +'</div>');


                                    }
                                    $("#TEXT").append('<p>All enemy charge have been reduced to 0.\n</p>');
                                }


                                shootarrow(enemyindex,selectedindex);
                                setTimeout(function(){Damaging(enemyindex, damage);},500);
                                setTimeout(function(){dies(enemyindex);},500);

                                units[selectedindex].usedaction = true;
                                showailments();
                                $("#TEXT").empty();
                                $("#TEXT").append("<p>" + units[selectedindex].name + " did " + damage + " damage to " + Eunits[enemyindex].name + "\n</p>");
                                Arrow.play();
                            }
                            if(e.options[e.selectedIndex].value==="Grappling_Hook") {
                                if (units[selectedindex].usedgrappling === 0) {
                                    $("#TEXT").append('<p>' + units[selectedindex].name + ' is out of Grappling Hook arrows\n</p>');
                                    return
                                }
                                Eunits[enemyindex].health -= damage;
                                units[selectedindex].usedgrappling -= 1;
                                setTimeout(function(){Damaging(enemyindex, damage);},500);
                                setTimeout(function(){dies(enemyindex);},500);
                                if(magnetthere===false) {
                                    if (Eunits[enemyindex].curleft === units[selectedindex].curleft && Eunits[enemyindex].curtop < units[selectedindex].curtop) {
                                        if ((Eunits[Eslots[1]].curleft === units[selectedindex].curleft && Eunits[Eslots[1]].curtop === units[selectedindex].curtop - 100) || (Eunits[Eslots[2]].curleft === units[selectedindex].curleft && Eunits[Eslots[2]].curtop === units[selectedindex].curtop - 100) || (Eunits[Eslots[3]].curleft === units[selectedindex].curleft && Eunits[Eslots[3]].curtop === units[selectedindex].curtop - 100) || (Eunits[Eslots[4]].curleft === units[selectedindex].curleft && Eunits[Eslots[4]].curtop === units[selectedindex].curtop - 100) || (Eunits[Eslots[5]].curleft === units[selectedindex].curleft && Eunits[Eslots[5]].curtop === units[selectedindex].curtop - 100) || (units[slots[1]].curleft === units[selectedindex].curleft && units[slots[1]].curtop === units[selectedindex].curtop - 100) || (units[slots[2]].curleft === units[selectedindex].curleft && units[slots[2]].curtop === units[selectedindex].curtop - 100) || (units[slots[3]].curleft === units[selectedindex].curleft && units[slots[3]].curtop === units[selectedindex].curtop - 100)) {
                                            message("There is someone blocking the soldier's line of sight.");
                                            return;
                                        }
                                        Eunits[enemyindex].curtop = units[selectedindex].curtop - 100;
                                        Hook.play();
                                        $("#E" + enemyindex).append("<div class='slashEffects'><img src='Pictures/Effects/Hook.gif' /></div>");
                                        setTimeout(function () {
                                            $(".slashEffects").remove();
                                        }, 1000);

                                        $('#E' + enemyindex).animate({
                                            top: (units[selectedindex].curtop - 100) + 'px'
                                        }, 1000);
                                    }
                                    if (Eunits[enemyindex].curleft === units[selectedindex].curleft && Eunits[enemyindex].curtop > units[selectedindex].curtop) {
                                        if ((Eunits[Eslots[1]].curleft === units[selectedindex].curleft && Eunits[Eslots[1]].curtop === units[selectedindex].curtop + 100) || (Eunits[Eslots[2]].curleft === units[selectedindex].curleft && Eunits[Eslots[2]].curtop === units[selectedindex].curtop + 100) || (Eunits[Eslots[3]].curleft === units[selectedindex].curleft && Eunits[Eslots[3]].curtop === units[selectedindex].curtop + 100) || (Eunits[Eslots[4]].curleft === units[selectedindex].curleft && Eunits[Eslots[4]].curtop === units[selectedindex].curtop + 100) || (Eunits[Eslots[5]].curleft === units[selectedindex].curleft && Eunits[Eslots[5]].curtop === units[selectedindex].curtop + 100) || (units[slots[1]].curleft === units[selectedindex].curleft && units[slots[1]].curtop === units[selectedindex].curtop + 100) || (units[slots[2]].curleft === units[selectedindex].curleft && units[slots[2]].curtop === units[selectedindex].curtop + 100) || (units[slots[3]].curleft === units[selectedindex].curleft && units[slots[3]].curtop === units[selectedindex].curtop + 100)) {
                                            message("There is someone blocking the soldier's line of sight.");
                                            return;
                                        }
                                        Eunits[enemyindex].curtop = units[selectedindex].curtop + 100;

                                        $("#E" + enemyindex).append("<div class='slashEffects'><img style='transform: rotate(180deg) translate(-100%,-100%); margin-left:-40px; margin-top:-200px' src='Pictures/Effects/Hook.gif' /></div>");
                                        setTimeout(function () {
                                            $(".slashEffects").remove();
                                        }, 1000);
                                        $('#E' + enemyindex).animate({
                                            top: (units[selectedindex].curtop + 100) + 'px'
                                        }, 500);
                                    }
                                    if (Eunits[enemyindex].curtop === units[selectedindex].curtop && Eunits[enemyindex].curleft > units[selectedindex].curleft) {
                                        if ((Eunits[Eslots[1]].curtop === units[selectedindex].curtop && Eunits[Eslots[1]].curleft === units[selectedindex].curleft + 100) || (Eunits[Eslots[2]].curtop === units[selectedindex].curtop && Eunits[Eslots[2]].curleft === units[selectedindex].curleft + 100) || (Eunits[Eslots[3]].curtop === units[selectedindex].curtop && Eunits[Eslots[3]].curleft === units[selectedindex].curleft + 100) || (Eunits[Eslots[4]].curtop === units[selectedindex].curtop && Eunits[Eslots[4]].curleft === units[selectedindex].curleft + 100) || (Eunits[Eslots[5]].curtop === units[selectedindex].curtop && Eunits[Eslots[5]].curleft === units[selectedindex].curleft + 100) || (units[slots[1]].curtop === units[selectedindex].curtop && units[slots[1]].curleft === units[selectedindex].curleft + 100) || (units[slots[2]].curtop === units[selectedindex].curtop && units[slots[2]].curleft === units[selectedindex].curleft + 100) || (units[slots[3]].curtop === units[selectedindex].curtop && units[slots[3]].curleft === units[selectedindex].curleft + 100)) {
                                            message("There is someone blocking the soldier's line of sight.");
                                            return;
                                        }
                                        Eunits[enemyindex].curleft = units[selectedindex].curleft + 100;
                                        $("#E" + enemyindex).append("<div class='slashEffects'><img style='transform: rotate(90deg) translate(-100%,-100%); margin-left:-40px; margin-top:-10px' src='Pictures/Effects/Hook.gif' /></div>");
                                        setTimeout(function () {
                                            $(".slashEffects").remove();
                                        }, 1000);
                                        $('#E' + enemyindex).animate({
                                            left: (units[selectedindex].curleft + 100) + 'px'
                                        }, 500);
                                    }
                                    if (Eunits[enemyindex].curtop === units[selectedindex].curtop && Eunits[enemyindex].curleft < units[selectedindex].curleft) {
                                        if ((Eunits[Eslots[1]].curtop === units[selectedindex].curtop && Eunits[Eslots[1]].curleft === units[selectedindex].curleft - 100) || (Eunits[Eslots[2]].curtop === units[selectedindex].curtop && Eunits[Eslots[2]].curleft === units[selectedindex].curleft - 100) || (Eunits[Eslots[3]].curtop === units[selectedindex].curtop && Eunits[Eslots[3]].curleft === units[selectedindex].curleft - 100) || (Eunits[Eslots[4]].curtop === units[selectedindex].curtop && Eunits[Eslots[4]].curleft === units[selectedindex].curleft - 100) || (Eunits[Eslots[5]].curtop === units[selectedindex].curtop && Eunits[Eslots[5]].curleft === units[selectedindex].curleft - 100) || (units[slots[1]].curtop === units[selectedindex].curtop && units[slots[1]].curleft === units[selectedindex].curleft - 100) || (units[slots[2]].curtop === units[selectedindex].curtop && units[slots[2]].curleft === units[selectedindex].curleft - 100) || (units[slots[3]].curtop === units[selectedindex].curtop && units[slots[3]].curleft === units[selectedindex].curleft - 100)) {
                                            message("There is someone blocking the soldier's line of sight.");
                                            return;
                                        }
                                        Eunits[enemyindex].curleft = units[selectedindex].curleft - 100;
                                        $("#E" + enemyindex).append("<div class='slashEffects'><img style='transform: rotate(270deg) translate(-100%,-100%); margin-left:50px; margin-top:-200px' src='Pictures/Effects/Hook.gif' /></div>");
                                        setTimeout(function () {
                                            $(".slashEffects").remove();
                                        }, 1000);
                                        $('#E' + enemyindex).animate({
                                            left: (units[selectedindex].curleft - 100) + 'px'
                                        }, 500);
                                    }
                                }
                                if(magnetthere===true){
                                    shootarrow(enemyindex,selectedindex);
                                }
                                units[selectedindex].usedaction = true;
                                showailments();
                                $("#TEXT").empty();
                                $("#TEXT").append("<p>" + units[selectedindex].name + " did " + damage + " damage to " + Eunits[enemyindex].name + "\n</p>");
                                Arrow.play();
                            }
                        } else {
                            $("#TEXT").append("This unit is blind for " + units[selectedindex].blind + " more turns.")
                        }
                    }
                }
                //Archer
                if (selectedaction === "archerAttack") {
                        if (units[selectedindex].blind === 0) {
                            var e = document.getElementById("archerchoice");
                            var defense=0;

                            //magnet
                            var magnetthere =false;
                            for(var i = 1;i<6;i++){
                                if(Eunits[Eslots[i]].type==="Magnet" && Eunits[Eslots[i]].alive===true){
                                    enemyindex=Eslots[i];
                                    magnetthere=true;
                                }
                            }
                            if(Eunits[enemyindex].enfeeble===0){defense=Eunits[enemyindex].defense}
                            var damage = units[selectedindex].attack + units[selectedindex].attacktempboost - defense;
                            if (damage < 0) {
                                damage = 0
                            }
                            if(e.options[e.selectedIndex].value==="Piercing"){
                                if (units[selectedindex].usedpierce === 0) {
                                    $("#TEXT").append('<p>' + units[selectedindex].name + ' is out of piercing arrows\n</p>');
                                    return
                                }
                                units[selectedindex].usedpierce-=1;
                                damage=units[selectedindex].attack+ units[selectedindex].attacktempboost;
                            }
                            if(e.options[e.selectedIndex].value==="Titan"){
                                if (units[selectedindex].usedtitan === 0) {
                                    $("#TEXT").append('<p>' + units[selectedindex].name + ' is out of titan arrows\n</p>');
                                    return
                                }
                                units[selectedindex].usedtitan-=1;
                                damage=(units[selectedindex].attack + units[selectedindex].attacktempboost- defense) *2;
                            }
                            if(e.options[e.selectedIndex].value==="Immobolize"){
                                if (units[selectedindex].usedimmobolize === 0) {
                                    $("#TEXT").append('<p>' + units[selectedindex].name + ' is out of immobolizing arrows\n</p>');
                                    return
                                }
                                units[selectedindex].usedimmobolize-=1;
                                if(magnetthere===false){
                                    Eunits[enemyindex].immobilized=2;
                                    Paralyzesound.play();
                                }

                                showailments();
                            }


                            if(magnetthere===true){
                                damage=0;
                            }

                            if (Eunits[enemyindex].phasedout === true && !(Eunits[enemyindex].type==="Frostwraith" && e.options[e.selectedIndex].value==="Exploding")) {
                                damage = 0;
                            }

                            $("#TEXT").empty();
                            $("#TEXT").append("<p>" + units[selectedindex].name + " did " + damage + " damage to " + Eunits[enemyindex].name + "\n</p>");


                            if ($('#archerchoice option:selected').text() === "Normal" || e.options[e.selectedIndex].value==="Piercing" || e.options[e.selectedIndex].value==="Titan" || e.options[e.selectedIndex].value==="Immobolize") {
                                Eunits[enemyindex].health -= damage;
                                //$("#E" + enemyindex).append("<div class='slashEffects'><img src='Pictures/Effects/EffectArrow.gif' /></div>");
                           shootarrow(enemyindex,selectedindex);

                                setTimeout(function(){Damaging(enemyindex, damage);},500);
                                setTimeout(function(){dies(enemyindex);},500);
                              //  setTimeout(function(){ $(".slashEffects").remove()},500);
                                units[selectedindex].usedaction = true;
                            }
                            if(e.options[e.selectedIndex].value==="Exploding") {
                                damage=damage * Eunits[enemyindex].fire;
                                if (units[selectedindex].usedexploding === 0) {
                                    $("#TEXT").append('<p>' + units[selectedindex].name + ' is out of exploding arrows\n</p>');
                                    return
                                }
                                Eunits[enemyindex].health -= damage;
                                units[selectedindex].usedexploding -= 1;
                                if (Eunits[enemyindex].phasedout === true) {
                                    if (Eunits[enemyindex].type === "Frostwraith") {
                                    } else {
                                        damage = 0;
                                    }
                                    Eunits[enemyindex].phasedout = false;
                                    $("#E" + Eunits[enemyindex].index).removeClass("Invisible");
                                    $("#TEXT").append("The wraith phased back in.")
                                }
                                if(magnetthere===false){
                                    Lightning.play();
                                    $("#E" + enemyindex).append("<div class='staticEffects' style='margin-top:-180px; margin-left:-120px'><img src='Pictures/Effects/EffectExplode.gif' /></div>");
                                    setTimeout(function(){Damaging(enemyindex, damage);},500);
                                    setTimeout(function(){dies(enemyindex);},500);
                                    setTimeout(function(){ $(".staticEffects").remove()},500);
                                }
                                if(magnetthere===true){
                                    shootarrow(enemyindex,selectedindex);
                                }
                                units[selectedindex].usedaction = true;


                                //adjacent enemies
                                for (var z = 1; z < 6; z++) {

                                    if (Eunits[Eslots[z]].alive === true && magnetthere===false) {
                                        if ((Eunits[Eslots[z]].curleft === Eunits[enemyindex].curleft - 100 && Eunits[Eslots[z]].curtop === Eunits[enemyindex].curtop) || (Eunits[Eslots[z]].curleft === Eunits[enemyindex].curleft + 100 && Eunits[Eslots[z]].curtop === Eunits[enemyindex].curtop) || (Eunits[Eslots[z]].curleft === Eunits[enemyindex].curleft && Eunits[Eslots[z]].curtop === Eunits[enemyindex].curtop + 100) || (Eunits[Eslots[z]].curleft === Eunits[enemyindex].curleft && Eunits[Eslots[z]].curtop === Eunits[enemyindex].curtop - 100)) {
                                            var smalldamage = ((units[selectedindex].attack) - Eunits[Eslots[z]].defense) * Eunits[Eslots[z]].fire;
                                            if (smalldamage < 0) {
                                                smalldamage = 0
                                            }
                                            if (Eunits[Eslots[z]].phasedout === true) {
                                                if (Eunits[Eslots[z]].type === "Frostwraith") {
                                                } else {
                                                    damage = 0;
                                                }
                                                Eunits[Eslots[z]].phasedout = false;
                                                $("#E" + Eunits[Eslots[z]].index).removeClass("Invisible");
                                                $("#TEXT").append("The wraith phased back in.")
                                            }
                                            $("#TEXT").append("<p>" + units[selectedindex].name + " did " + smalldamage + " damage to " + Eunits[Eslots[z]].name + "\n</p>");
                                            Eunits[Eslots[z]].health -= smalldamage;
                                            Damaging(Eslots[z], smalldamage);
                                            dies(Eslots[z]);
                                        }
                                    }

                                }
                            }
                        } else {
                            $("#TEXT").append("This unit is blind for " + units[selectedindex].blind + " more turns.")
                        }
                }
                //soldier
                if (selectedaction === "soldierAttack") {
                    if (units[selectedindex].blind === 0) {
                        var defense=0;
                        if(Eunits[enemyindex].enfeeble===0){defense=Eunits[enemyindex].defense}
                        var damage = (units[selectedindex].attack + units[selectedindex].attacktempboost - defense);
                        if (damage < 0) {
                            damage = 0
                        }
                        if (Eunits[enemyindex].phasedout === true) {
                            damage = 0;
                        }
                        if ($('#soldierchoice option:selected').text() === "Normal") {
                            if ((units[selectedindex].curtop - 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curtop + 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curleft - 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop) || (units[selectedindex].curleft + 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop)) {
                                $("#TEXT").append("<p>" + units[selectedindex].name + " Did " + damage + " damage to " + Eunits[enemyindex].name + "\n</p>");
                                Sword.play();
                                Eunits[enemyindex].health -= damage;
                                units[selectedindex].usedaction = true;


                                $("#E" + enemyindex).append("<div class='slashEffects'><img src='Pictures/Effects/EffectSlash.gif' /></div>");
                                setTimeout(function(){Damaging(enemyindex, damage);},500);
                                setTimeout(function(){dies(enemyindex);},500);
                                $(".slashEffects").fadeOut(2000);
                                turngray();
                                return;
                            }
                        }

                    } else {
                        $("#TEXT").append("This unit is blind for " + units[selectedindex].blind + " more turns.")
                    }
                }
                //soldier
                if (selectedaction === "DjinnAttack") {
                    if (units[selectedindex].blind === 0) {
                        var defense=0;
                        if(Eunits[enemyindex].enfeeble===0){defense=Eunits[enemyindex].defense}
                        var damage = (units[selectedindex].attack + units[selectedindex].attacktempboost - defense);
                        if (damage < 0) {
                            damage = 0
                        }
                        if (Eunits[enemyindex].phasedout === true) {
                            damage = 0;
                        }
                            if ((units[selectedindex].curtop - 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curtop + 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curleft - 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop) || (units[selectedindex].curleft + 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop)) {
                                $("#TEXT").append("<p>" + units[selectedindex].name + " did " + damage + " damage to " + Eunits[enemyindex].name + "\n</p>");
                                Sword.play();
                                Eunits[enemyindex].health -= damage;
                                units[selectedindex].usedaction = true;


                                $("#E" + enemyindex).append("<div class='slashEffects'><img src='Pictures/Effects/EffectSlash.gif' /></div>");
                              Damaging(enemyindex, damage);
                            dies(enemyindex);
                                $(".slashEffects").fadeOut(2000);
                                turngray();
                                return;
                            }
                    } else {
                        $("#TEXT").append("This unit is blind for " + units[selectedindex].blind + " more turns.")
                    }
                }
                //knight
                if (selectedaction === "knightAttack") {
                    if (units[selectedindex].blind === 0) {
                        if ($('#knightchoice option:selected').text() === "Normal") {
                            var defense=0;
                            if(Eunits[enemyindex].enfeeble===0){defense=Eunits[enemyindex].defense}
                            var damage = (units[selectedindex].attack - defense + units[selectedindex].attacktempboost);
                            if (damage < 0) {damage = 0}
                            if (Eunits[enemyindex].phasedout === true) {
                                damage = 0;
                            }

                            if ((units[selectedindex].curtop - 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curtop + 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curleft - 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop) || (units[selectedindex].curleft + 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop)) {
                                if(units[selectedindex].energy<20){
                                    message("The Knight doesn't have enough stamina to attack. Pass the turn without using him to refill his stamina.");
                                    return;
                                } else{
                                    units[selectedindex].energy-=20;
                                    $("#EB" + units[selectedindex].index).remove();
                                    $("#" + selectedindex).append('<div class="energybar" id ="EB'+ units[selectedindex].index + '"style="width: ' + units[selectedindex].energy + '%"></div>');
                                }
                                $("#TEXT").append("<p>" + units[selectedindex].name + " did " + damage + " damage to " + Eunits[enemyindex].name + "\n</p>");
                                Sword.play();
                                Eunits[enemyindex].health -= damage;
                                units[selectedindex].usedaction = true;

                                $("#E" + enemyindex).append("<div class='slashEffects'><img src='Pictures/Effects/EffectSlash.gif' /></div>");
                                setTimeout(function(){Damaging(enemyindex, damage);},500);
                                setTimeout(function(){dies(enemyindex);},500);
                                $(".slashEffects").fadeOut(2000);
                                turngray();
                            }
                        }
                        if ($('#knightchoice option:selected').text() === "Piercer") {
                            var damage = (units[selectedindex].attack + units[selectedindex].attacktempboost);
                            if (damage < 0) {
                                damage = 0
                            }
                            if ((units[selectedindex].curtop - 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curtop + 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curleft - 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop) || (units[selectedindex].curleft + 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop)) {
                                if(units[selectedindex].energy<40){
                                    message("The Knight doesn't have enough stamina to use piercer. Pass the turn without using him to refill his stamina.");
                                    return;
                                } else{
                                    units[selectedindex].energy-=40;
                                    $("#EB" + units[selectedindex].index).remove();
                                    $("#" + selectedindex).append('<div class="energybar" id ="EB'+ units[selectedindex].index + '"style="width: ' + units[selectedindex].energy + '%"></div>');
                                }
                                $("#TEXT").append("<p>" + units[selectedindex].name + " used piercer and did " + damage + "damage to " + Eunits[enemyindex].name + ". ");
                                Specialsound.play();
                                Eunits[enemyindex].health -= damage;
                                units[selectedindex].usedspecial = true;
                                units[selectedindex].usedaction = true;
                                $("#E" + enemyindex).append("<div class='slashEffects'><img style='width:200px; margin-left:-50px' src='Pictures/Effects/EffectSlash.gif' /></div>");
                                setTimeout(function(){Damaging(enemyindex, damage);},500);
                                setTimeout(function(){dies(enemyindex);},500);
                                $(".slashEffects").fadeOut(2000);
                                return;
                            }
                        }
                        if ($('#knightchoice option:selected').text() === "Swirl") {
                            if(units[selectedindex].energy<30){
                                message("The Knight doesn't have enough stamina to use swirl. Pass the turn without using him to refill his stamina.");
                                return;
                            }
                                units[selectedindex].energy-=30;
                                $("#EB" + units[selectedindex].index).remove();
                                $("#" + selectedindex).append('<div class="energybar" id ="EB'+ units[selectedindex].index + '"style="width: ' + units[selectedindex].energy + '%"></div>');

                            for (var z = 1; z < 6; z++) {
                                if(Eunits[Eslots[z]].alive===false){
                                    continue;
                                }
                                defense=0;
                                if(Eunits[Eslots[z]].enfeeble===0){defense=Eunits[Eslots[z]].defense}
                                damage = (units[selectedindex].attack - defense + units[selectedindex].attacktempboost);
                                if (damage < 0) {
                                    damage = 0
                                }
                                if (units[selectedindex].curtop - 100 === Eunits[Eslots[z]].curtop && units[selectedindex].curleft === Eunits[Eslots[z]].curleft) {
                                    $("#TEXT").append("<p>" + units[selectedindex].name + " Did " + damage + " damage to " + Eunits[Eslots[z]].name + "\n</p>");
                                    Sword.play();
                                    Eunits[Eslots[z]].health -= damage;
                                    units[selectedindex].usedaction = true;
                                    $("#E" + Eslots[z]).append("<div class='slashEffects'><img src='Pictures/Effects/EffectSlash.gif' /></div>");
                                    Damaging(Eslots[z], damage);
                                    dies(Eslots[z]);
                                    $(".slashEffects").fadeOut(2000);
                                }
                                if (units[selectedindex].curtop + 100 === Eunits[Eslots[z]].curtop && units[selectedindex].curleft === Eunits[Eslots[z]].curleft) {
                                    $("#TEXT").append("<p>" + units[selectedindex].name + " Did " + damage + " damage to " + Eunits[Eslots[z]].name + "\n</p>");
                                    Sword.play();
                                    Eunits[Eslots[z]].health -= damage;
                                    units[selectedindex].usedaction = true;
                                    $("#E" + Eslots[z]).append("<div class='slashEffects'><img src='Pictures/Effects/EffectSlash.gif' /></div>");
                                    Damaging(Eslots[z], damage);
                                    dies(Eslots[z]);
                                    $(".slashEffects").fadeOut(2000);
                                }
                                if (units[selectedindex].curleft - 100 === Eunits[Eslots[z]].curleft && units[selectedindex].curtop === Eunits[Eslots[z]].curtop) {
                                    $("#TEXT").append("<p>" + units[selectedindex].name + " Did " + damage + " damage to " + Eunits[Eslots[z]].name + "\n</p>");
                                    Sword.play();
                                    Eunits[Eslots[z]].health -= damage;
                                    units[selectedindex].usedaction = true;
                                    $("#E" + Eslots[z]).append("<div class='slashEffects'><img src='Pictures/Effects/EffectSlash.gif' /></div>");
                                    Damaging(Eslots[z], damage);
                                    dies(Eslots[z]);
                                    $(".slashEffects").fadeOut(2000);
                                }
                                if (units[selectedindex].curleft + 100 === Eunits[Eslots[z]].curleft && units[selectedindex].curtop === Eunits[Eslots[z]].curtop) {
                                    $("#TEXT").append("<p>" + units[selectedindex].name + " Did " + damage + " damage to " + Eunits[Eslots[z]].name + "\n</p>");
                                    Sword.play();
                                    Eunits[Eslots[z]].health -= damage;
                                    units[selectedindex].usedaction = true;
                                    $("#E" + Eslots[z]).append("<div class='slashEffects'><img src='Pictures/Effects/EffectSlash.gif' /></div>");
                                    Damaging(Eslots[z], damage);
                                    dies(Eslots[z]);
                                    $(".slashEffects").fadeOut(2000);
                                }
                            }
                        }
                        if ($('#knightchoice option:selected').text() === "Sweep") {
                            $("#EB" + units[selectedindex].index).remove();
                            $("#" + selectedindex).append('<div class="energybar" id ="EB'+ units[selectedindex].index + '"style="width: ' + units[selectedindex].energy + '%"></div>');

                            for (var z = 1; z < 6; z++) {
                                if(Eunits[Eslots[z]].alive===false){
                                    continue;
                                }
                                defense=0;
                                if(Eunits[Eslots[z]].enfeeble===0){defense=Eunits[Eslots[z]].defense}
                                damage = (units[selectedindex].attack - defense + units[selectedindex].attacktempboost);
                                if (damage < 0) {
                                    damage = 0
                                }
                                if (units[selectedindex].curtop - 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) {
                                    if((Eunits[enemyindex].curleft===Eunits[Eslots[z]].curleft && Eunits[enemyindex].curtop===Eunits[Eslots[z]].curtop) || (Eunits[enemyindex].curleft-100 ===Eunits[Eslots[z]].curleft && Eunits[enemyindex].curtop===Eunits[Eslots[z]].curtop) || (Eunits[enemyindex].curleft+100 ===Eunits[Eslots[z]].curleft && Eunits[enemyindex].curtop===Eunits[Eslots[z]].curtop)){
                                        if(units[selectedindex].usedaction === false){
                                            if(units[selectedindex].energy<30){
                                                message("The Knight doesn't have enough stamina to use sweep. Pass the turn without using him to refill his stamina.");
                                                return;
                                            }
                                            units[selectedindex].energy-=30;
                                        }
                                        $("#TEXT").append("<p>" + units[selectedindex].name + " did " + damage + " damage to " + Eunits[Eslots[z]].name + "\n</p>");
                                        Sword.play();
                                        Eunits[Eslots[z]].health -= damage;
                                        units[selectedindex].usedaction = true;
                                        $("#E" + enemyindex).append("<div class='slashEffects'><img style='width:400px; margin-left:-200px' src='Pictures/Effects/EffectSlash.gif' /></div>");
                                        Damaging(Eslots[z], damage);
                                        dies(Eslots[z]);
                                        $(".slashEffects").fadeOut(2000);
                                    }
                                }
                                if (units[selectedindex].curtop + 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) {
                                    if((Eunits[enemyindex].curleft===Eunits[Eslots[z]].curleft && Eunits[enemyindex].curtop===Eunits[Eslots[z]].curtop) || (Eunits[enemyindex].curleft-100 ===Eunits[Eslots[z]].curleft && Eunits[enemyindex].curtop===Eunits[Eslots[z]].curtop) || (Eunits[enemyindex].curleft+100 ===Eunits[Eslots[z]].curleft && Eunits[enemyindex].curtop===Eunits[Eslots[z]].curtop)){
                                        if(units[selectedindex].usedaction === false){
                                            if(units[selectedindex].energy<30){
                                                message("The Knight doesn't have enough stamina to use sweep. Pass the turn without using him to refill his stamina.");
                                                return;
                                            }
                                            units[selectedindex].energy-=30;
                                        }
                                        $("#TEXT").append("<p>" + units[selectedindex].name + " did " + damage + " damage to " + Eunits[Eslots[z]].name + "\n</p>");
                                        Sword.play();
                                        Eunits[Eslots[z]].health -= damage;
                                        units[selectedindex].usedaction = true;
                                        $("#E" + enemyindex).append("<div class='slashEffects'><img style='width:400px; margin-left:-200px' src='Pictures/Effects/EffectSlash.gif' /></div>");
                                        Damaging(Eslots[z], damage);
                                        dies(Eslots[z]);
                                        $(".slashEffects").fadeOut(2000);
                                    }
                                }
                                if (units[selectedindex].curleft - 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop) {

                                    if((Eunits[enemyindex].curtop===Eunits[Eslots[z]].curtop && Eunits[enemyindex].curleft===Eunits[Eslots[z]].curleft) || (Eunits[enemyindex].curtop-100 ===Eunits[Eslots[z]].curtop && Eunits[enemyindex].curleft===Eunits[Eslots[z]].curleft) || (Eunits[enemyindex].curtop+100 ===Eunits[Eslots[z]].curtop && Eunits[enemyindex].curleft===Eunits[Eslots[z]].curleft)){
                                        if(units[selectedindex].energy<30){
                                            message("The Knight doesn't have enough stamina to use sweep. Pass the turn without using him to refill his stamina.");
                                            return;
                                        }
                                        units[selectedindex].energy-=30;
                                        $("#TEXT").append("<p>" + units[selectedindex].name + " did " + damage + " damage to " + Eunits[Eslots[z]].name + "\n</p>");
                                        Sword.play();
                                        Eunits[Eslots[z]].health -= damage;
                                        if(units[selectedindex].usedaction === false){
                                            if(units[selectedindex].energy<30){
                                                message("The Knight doesn't have enough stamina to use sweep. Pass the turn without using him to refill his stamina.");
                                                return;
                                            }
                                            units[selectedindex].energy-=30;
                                        }
                                        units[selectedindex].usedaction = true;
                                        $("#E" + enemyindex).append("<div class='slashEffects'><img style='transform: rotate(90deg) translate(-100%,-100%); width:400px;margin-left:-230px; margin-top:330px' src='Pictures/Effects/EffectSlash.gif' /></div>");
                                        Damaging(Eslots[z], damage);
                                        dies(Eslots[z]);
                                        $(".slashEffects").fadeOut(2000);
                                    }
                                }
                                if (units[selectedindex].curleft + 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop) {
                                    if((Eunits[enemyindex].curtop===Eunits[Eslots[z]].curtop && Eunits[enemyindex].curleft===Eunits[Eslots[z]].curleft) || (Eunits[enemyindex].curtop-100 ===Eunits[Eslots[z]].curtop && Eunits[enemyindex].curleft===Eunits[Eslots[z]].curleft) || (Eunits[enemyindex].curtop+100 ===Eunits[Eslots[z]].curtop && Eunits[enemyindex].curleft===Eunits[Eslots[z]].curleft)){
                                        if(units[selectedindex].energy<30){
                                            message("The Knight doesn't have enough stamina to use sweep. Pass the turn without using him to refill his stamina.");
                                            return;
                                        }
                                        units[selectedindex].energy-=30;
                                        $("#TEXT").append("<p>" + units[selectedindex].name + " did " + damage + " damage to " + Eunits[Eslots[z]].name + "\n</p>");
                                        Sword.play();
                                        Eunits[Eslots[z]].health -= damage;
                                        if(units[selectedindex].usedaction === false){
                                            if(units[selectedindex].energy<30){
                                                message("The Knight doesn't have enough stamina to use sweep. Pass the turn without using him to refill his stamina.");
                                                return;
                                            }
                                            units[selectedindex].energy-=30;
                                        }
                                        units[selectedindex].usedaction = true;
                                        $("#E" + enemyindex).append("<div class='slashEffects'><img style='transform: rotate(90deg) translate(-100%,-100%);width:400px;margin-left:-230px; margin-top:330px' src='Pictures/Effects/EffectSlash.gif' /></div>");
                                        Damaging(Eslots[z], damage);
                                        dies(Eslots[z]);
                                        $(".slashEffects").fadeOut(2000);
                                    }
                                }
                            }
                        }
                    } else {
                        $("#TEXT").append("This unit is blind for " + units[selectedindex].blind + " more turns.")
                    }
                }
                //Thief
                if (selectedaction === "thiefAttack") {
                    if (units[selectedindex].blind === 0) {
                        if ($('#thiefchoice option:selected').text() === "Normal" || $('#thiefchoice option:selected').text() === "Mug") {
                            var defense=0;
                            if(Eunits[enemyindex].enfeeble===0){defense=Eunits[enemyindex].defense}
                            var damage = (units[selectedindex].attack - defense + units[selectedindex].attacktempboost);
                            if (damage < 0) {
                                damage = 0
                            }
                            if (Eunits[enemyindex].phasedout === true) {
                                damage = 0;
                            }
                            if(Eunits[enemyindex].health===Eunits[enemyindex].maxhealth && units[selectedindex].abilityfirstblow===true){
                                Eunits[enemyindex].blind+=2;
                                showailments();
                            }
                            if(units[selectedindex].abilitybackstab===true && units[selectedindex].curleft===Eunits[enemyindex].curleft && (units[selectedindex].curtop===Eunits[enemyindex].curtop-100)){
                                damage=damage*2;
                            }
                            if ((units[selectedindex].curtop - 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curtop + 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curleft - 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop) || (units[selectedindex].curleft + 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop)) {
                                $("#TEXT").append("<p>" + units[selectedindex].name + " did " + damage + " damage to " + Eunits[enemyindex].name + "\n</p>");
                                Sword.play();
                                Eunits[enemyindex].health -= damage;
                                units[selectedindex].usedaction = true;

                                $("#E" + enemyindex).append("<div class='slashEffects'><img src='Pictures/Effects/EffectSlash.gif' /></div>");
                                setTimeout(function(){Damaging(enemyindex, damage);},500);
                                setTimeout(function(){dies(enemyindex);},500);
                                $(".slashEffects").fadeOut(2000);
                                turngray();
                            }
                        }
                        if ($('#thiefchoice option:selected').text() === "Steal"  || $('#thiefchoice option:selected').text() === "Mug") {
                            if ((units[selectedindex].curtop - 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curtop + 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curleft - 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop) || (units[selectedindex].curleft + 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop)) {

                                if(Eunits[enemyindex].item===""){
                                    $("#TEXT").append(Eunits[enemyindex].name + " has nothing to steal.");
                                    return;
                                }
                                units[selectedindex].usedaction=true;
                                $("#TEXT").empty();
                                var randnum=Math.floor((Math.random() * Eunits[enemyindex].maxhealth) + 1);
                                if(Eunits[enemyindex].abilitybettersteal===true){
                                    randnum=Eunits[enemyindex].health+1;
                                }
                                if(randnum>Eunits[enemyindex].health){
                                    Eunits[enemyindex].item="";
                                    var stealnum=Math.floor((Math.random() * 60) + 1);
                                    if(Eunits[enemyindex].type==="Clunker" || Eunits[enemyindex].type==="Sounddepressor" || Eunits[enemyindex].type==="Magnet" || Eunits[enemyindex].type==="Cannon"){
                                        stealnum="";
                                        $("#TEXT").append("<p>He stole the machine's battery. The machine shuts down.</p>");
                                        Eunits[enemyindex].health=0;
                                    } else{
                                        if(stealnum<=10){
                                            ingredient[1].quantity += 1;
                                            $("#TEXT").append("<p>He stole a " + ingredient[1].name + "</p>")
                                        }
                                        if(stealnum<=20 && stealnum>10){
                                            ingredient[2].quantity += 1;
                                            $("#TEXT").append("<p>He stole a " + ingredient[2].name + "</p>")
                                        }
                                        if(stealnum<=30 && stealnum>20){
                                            ingredient[3].quantity += 1;
                                            $("#TEXT").append("<p>He stole a " + ingredient[3].name + "</p>")
                                        }
                                        if(stealnum<=40 && stealnum>30){
                                            ingredient[4].quantity += 1;
                                            $("#TEXT").append("<p>He stole a " + ingredient[4].name + "</p>")
                                        }
                                        if(stealnum<=50 && stealnum>40){
                                            ingredient[5].quantity += 1;
                                            $("#TEXT").append("<p>He stole a " + ingredient[5].name + "</p>")
                                        }
                                        if(stealnum===51){
                                            accessory[1].quantity += 1;
                                            $("#TEXT").append("<p>He stole a " + accessory[1].name + "</p>")
                                        }
                                        if(stealnum===52){
                                            accessory[2].quantity += 1;
                                            $("#TEXT").append("<p>He stole a " + accessory[2].name + "</p>")
                                        }
                                        if(stealnum===53){
                                            accessory[3].quantity += 1;
                                            $("#TEXT").append("<p>He stole a " + accessory[3].name + "</p>")
                                        }
                                        if(stealnum===54){
                                            accessory[4].quantity += 1;
                                            $("#TEXT").append("<p>He stole a " + accessory[4].name + "</p>")
                                        }
                                        if(stealnum===55){
                                            accessory[5].quantity += 1;
                                            $("#TEXT").append("<p>He stole a " + accessory[5].name + "</p>")
                                        }
                                        if(stealnum===56){
                                            accessory[6].quantity += 1;
                                            $("#TEXT").append("<p>He stole a " + accessory[6].name + "</p>")
                                        }
                                        if(stealnum===57){
                                            $("#TEXT").append(Eunits[enemyindex].name + " has nothing to steal.");
                                        }
                                        if(stealnum===58){
                                            $("#TEXT").append(Eunits[enemyindex].name + " has nothing to steal.");
                                        }
                                        if(stealnum===59){
                                            $("#TEXT").append(Eunits[enemyindex].name + " has nothing to steal.");
                                        }
                                        if(stealnum===60){
                                            money+=50;
                                            $("#TEXT").append("He stole 50 gold.")
                                            $('#top').empty();
                                            $('#top').append("<h1 class = 'heading'>Day: " + day + "</h1>");
                                            $('#top').append("<h1 class = 'heading'>Money: " + money + "</h1>");
                                            $('#top').append("<h1 class = 'heading'>Research: " + currentresearch() + "</h1>");
                                        }
                                    }

                                } else {
                                    $("#TEXT").append(units[selectedindex].name + " failed to steal. Lower the enemy's health to make it easier to steal from.")
                                }
                                if($('#thiefchoice option:selected').text() === "Steal" && units[selectedindex].abilityinvisible===true){
                                    units[selectedindex].type = "Invisible";
                                    $("#" + selectedindex).addClass("Invisible");

                                }
                                turngray();
                            }
                        }
                    } else {
                        $("#TEXT").append("This unit is blind for " + units[selectedindex].blind + " more turns.")
                    }
                }
                //mage
                if (selectedaction === "mageCast") {
                    if (units[selectedindex].silenced === 0) {
                        if((Eunits[Eslots[1]].type==="Sounddepressor" && Eunits[Eslots[1]].alive===true) || (Eunits[Eslots[2]].type==="Sounddepressor" && Eunits[Eslots[2]].alive===true) || (Eunits[Eslots[3]].type==="Sounddepressor" && Eunits[Eslots[3]].alive===true) || (Eunits[Eslots[4]].type==="Sounddepressor" && Eunits[Eslots[4]].alive===true) || (Eunits[Eslots[5]].type==="Sounddepressor" && Eunits[Eslots[5]].alive===true)){
                            message("The Sound Depressor nullifies all magic.")
                            return;
                        }
                        //fire
                        if ($('#magechoice option:selected').text() === "Fire") {
                            var defense=0;
                            if(Eunits[enemyindex].enfeeble===0){defense=Eunits[enemyindex].resistance}
                            var damage = (units[selectedindex].attack - defense + units[selectedindex].attacktempboost) * Eunits[enemyindex].fire;
                            if (damage < 0) {
                                damage = 0
                            }

                            if ((units[selectedindex].curtop + 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft+100 === Eunits[enemyindex].curleft) || (units[selectedindex].curtop + 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft-100 === Eunits[enemyindex].curleft) || (units[selectedindex].curtop - 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft+100 === Eunits[enemyindex].curleft) || (units[selectedindex].curtop - 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft-100 === Eunits[enemyindex].curleft) || (units[selectedindex].curtop - 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curtop + 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curleft - 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop) || (units[selectedindex].curleft + 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop) || (units[selectedindex].curtop - 200 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curtop + 200 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curleft - 200 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop) || (units[selectedindex].curleft + 200 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop)) {
                                if (Eunits[enemyindex].phasedout === true) {
                                    if (Eunits[enemyindex].type === "Frostwraith") {
                                    } else {
                                        damage = 0;
                                    }
                                        Eunits[enemyindex].phasedout = false;
                                        $("#E" + Eunits[enemyindex].index).removeClass("Invisible");
                                        $("#TEXT").append("The wraith phased back in.")
                                }
                               var tempran= Math.floor((Math.random() * 2) + 1);
                                if(units[selectedindex].abilityelementalailments===true && tempran===2){
                                    Eunits[enemyindex].blind=2;
                                    showailments();
                                }
                                $("#TEXT").append("<p>" + units[selectedindex].name + " did " + damage + " damage to " + Eunits[enemyindex].name + "\n</p>");

                                //effects
                                $("#battlebackground").append("<div class='Effects' style='top: " + units[selectedindex].curtop +"px; left: " + units[selectedindex].curleft +"px'><img src='Pictures/Effects/EffectFire.gif' /></div>");
                                $(".Effects").animate({
                                    left: Eunits[enemyindex].curleft + "px",
                                        top: Eunits[enemyindex].curtop + "px"
                            },500).fadeOut(500);
                                setTimeout(function(){Damaging(enemyindex, damage);},500);
                                setTimeout(function(){dies(enemyindex);},500);
                                Fire.play();
                                Eunits[enemyindex].health -= damage;
                                if(units[selectedindex].usedaction === true && units[selectedindex].abilitydoubletap===true){
                                    units[selectedindex].moved=true;
                                }
                                units[selectedindex].usedaction = true;

                            }
                        }
                        //zap
                        if ($('#magechoice option:selected').text() === "Zap") {


                            if ((units[selectedindex].curtop - 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curtop + 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curleft - 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop) || (units[selectedindex].curleft + 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop) || (units[selectedindex].curtop - 200 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curtop + 200 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curleft - 200 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop) || (units[selectedindex].curleft + 200 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop)) {
                                Zap.play();
                                if(units[selectedindex].usedaction === true && units[selectedindex].abilitydoubletap===true){
                                    units[selectedindex].moved=true;
                                }
                                units[selectedindex].usedaction = true;




                                if(units[selectedindex].curtop > Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft){
                                    $("#battlebackground").append("<div class='staticEffects' style='margin-top: " + (units[selectedindex].curtop-750) +"px; margin-left: " + (units[selectedindex].curleft-115) +"px'><img src='Pictures/Effects/Zap.gif' /></div>");
for(var i =1;i<6;i++){
    if((units[selectedindex].curtop-100 === Eunits[Eslots[i]].curtop && units[selectedindex].curleft === Eunits[Eslots[i]].curleft) || (units[selectedindex].curtop-200 === Eunits[Eslots[i]].curtop && units[selectedindex].curleft === Eunits[Eslots[i]].curleft)){
        var defense=0;
        if(Eunits[Eslots[i]].enfeeble===0){defense=Eunits[Eslots[i]].resistance}
        var damage = (units[selectedindex].attack - defense + units[selectedindex].attacktempboost) * Eunits[Eslots[i]].lightning;
        if (damage < 0) {
            damage = 0
        }
        if (Eunits[Eslots[i]].phasedout === true) {
            if (Eunits[Eslots[i]].type === "Waterwraith") {
            } else {
                damage = 0;
            }
            Eunits[Eslots[i]].phasedout = false;
            $("#E" + Eunits[Eslots[i]].index).removeClass("Invisible");
            $("#TEXT").append("The wraith phased back in.")
        }
        var tempran= Math.floor((Math.random() * 2) + 1);
        if(units[selectedindex].abilityelementalailments===true && tempran===2){
            Eunits[Eslots[i]].immobilized=2;
            showailments();
        }
        $("#TEXT").append("<p>" + units[selectedindex].name + " did " + damage + " damage to " + Eunits[Eslots[i]].name + "\n</p>");
        Eunits[Eslots[i]].health -= damage;

       Damaging(Eslots[i], damage);
        dies(Eslots[i]);
    }
}
                                }
                                if(units[selectedindex].curtop < Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft){
                                    $("#battlebackground").append("<div class='staticEffects' style='margin-top: " + (units[selectedindex].curtop-450) +"px; margin-left: " + (units[selectedindex].curleft-115) +"px'><img src='Pictures/Effects/Zap.gif' /></div>");
                                    for(var i =1;i<6;i++){
                                        if((units[selectedindex].curtop+100 === Eunits[Eslots[i]].curtop && units[selectedindex].curleft === Eunits[Eslots[i]].curleft) || (units[selectedindex].curtop+200 === Eunits[Eslots[i]].curtop && units[selectedindex].curleft === Eunits[Eslots[i]].curleft)){
                                            var defense=0;
                                            if(Eunits[Eslots[i]].enfeeble===0){defense=Eunits[Eslots[i]].resistance}
                                            var damage = (units[selectedindex].attack - defense + units[selectedindex].attacktempboost) * Eunits[Eslots[i]].lightning;
                                            if (damage < 0) {
                                                damage = 0
                                            }
                                            if (Eunits[Eslots[i]].phasedout === true) {
                                                if (Eunits[Eslots[i]].type === "Waterwraith") {
                                                } else {
                                                    damage = 0;
                                                }
                                                Eunits[Eslots[i]].phasedout = false;
                                                $("#E" + Eunits[Eslots[i]].index).removeClass("Invisible");
                                                $("#TEXT").append("The wraith phased back in.")
                                            }
                                            var tempran= Math.floor((Math.random() * 2) + 1);
                                            if(units[selectedindex].abilityelementalailments===true && tempran===2){
                                                Eunits[Eslots[i]].immobilized=2;
                                                showailments();
                                            }
                                            $("#TEXT").append("<p>" + units[selectedindex].name + " did " + damage + " damage to " + Eunits[Eslots[i]].name + "\n</p>");
                                            Eunits[Eslots[i]].health -= damage;
                                          Damaging(Eslots[i], damage);
                                          dies(Eslots[i]);
                                        }
                                    }
                                }
                                if(units[selectedindex].curtop === Eunits[enemyindex].curtop && units[selectedindex].curleft < Eunits[enemyindex].curleft){
                                    $("#battlebackground").append("<div class='staticEffects' style='transform: rotate(90deg) translate(-100%,-100%); margin-top: " + (units[selectedindex].curtop-320) +"px; margin-left: " + (units[selectedindex].curleft-280) +"px'><img src='Pictures/Effects/Zap.gif' /></div>");
                                    for(var i =1;i<6;i++){
                                        if(Eunits[Eslots[i]].alive===false){
                                            continue;
                                        }
                                        if((units[selectedindex].curtop === Eunits[Eslots[i]].curtop && units[selectedindex].curleft+100 === Eunits[Eslots[i]].curleft) || (units[selectedindex].curtop === Eunits[Eslots[i]].curtop && units[selectedindex].curleft+200 === Eunits[Eslots[i]].curleft)){
                                            var defense=0;
                                            if(Eunits[Eslots[i]].enfeeble===0){defense=Eunits[Eslots[i]].resistance}
                                            var damage = (units[selectedindex].attack - defense + units[selectedindex].attacktempboost) * Eunits[Eslots[i]].lightning;
                                            if (damage < 0) {
                                                damage = 0
                                            }
                                            if (Eunits[Eslots[i]].phasedout === true) {
                                                if (Eunits[Eslots[i]].type === "Waterwraith") {
                                                } else {
                                                    damage = 0;
                                                }
                                                Eunits[Eslots[i]].phasedout = false;
                                                $("#E" + Eunits[Eslots[i]].index).removeClass("Invisible");
                                                $("#TEXT").append("The wraith phased back in.")
                                            }
                                            var tempran= Math.floor((Math.random() * 2) + 1);
                                            if(units[selectedindex].abilityelementalailments===true && tempran===2){
                                                Eunits[Eslots[i]].immobilized=2;
                                                showailments();
                                            }
                                            $("#TEXT").append("<p>" + units[selectedindex].name + " did " + damage + " damage to " + Eunits[Eslots[i]].name + "\n</p>");
                                            Eunits[Eslots[i]].health -= damage;
                                           Damaging(Eslots[i], damage);
                                           dies(Eslots[i]);
                                        }
                                    }
                                }
                                if(units[selectedindex].curtop === Eunits[enemyindex].curtop && units[selectedindex].curleft > Eunits[enemyindex].curleft){
                                    $("#battlebackground").append("<div class='staticEffects' style='transform: rotate(90deg) translate(-100%,-100%); margin-top: " + (units[selectedindex].curtop-320) +"px; margin-left: " + (units[selectedindex].curleft-530) +"px'><img src='Pictures/Effects/Zap.gif' /></div>");

                                    for(var i =1;i<6;i++){
                                        if(Eunits[Eslots[i]].alive===false){
                                            continue;
                                        }
                                        if((units[selectedindex].curtop === Eunits[Eslots[i]].curtop && units[selectedindex].curleft-100 === Eunits[Eslots[i]].curleft) || (units[selectedindex].curtop === Eunits[Eslots[i]].curtop && units[selectedindex].curleft-200 === Eunits[Eslots[i]].curleft)){
                                            var defense=0;
                                            if(Eunits[Eslots[i]].enfeeble===0){defense=Eunits[Eslots[i]].resistance}
                                            var damage = (units[selectedindex].attack - defense + units[selectedindex].attacktempboost) * Eunits[Eslots[i]].lightning;
                                            if (damage < 0) {
                                                damage = 0
                                            }
                                            if (Eunits[Eslots[i]].phasedout === true) {
                                                if (Eunits[Eslots[i]].type === "Waterwraith") {
                                                } else {
                                                    damage = 0;
                                                }
                                                Eunits[Eslots[i]].phasedout = false;
                                                $("#E" + Eunits[Eslots[i]].index).removeClass("Invisible");
                                                $("#TEXT").append("The wraith phased back in.")
                                            }
                                            var tempran= Math.floor((Math.random() * 2) + 1);
                                            if(units[selectedindex].abilityelementalailments===true && tempran===2){
                                                Eunits[Eslots[i]].immobilized=2;
                                                showailments();
                                            }
                                            $("#TEXT").append("<p>" + units[selectedindex].name + " did " + damage + " damage to " + Eunits[Eslots[i]].name + "\n</p>");
                                            Eunits[Eslots[i]].health -= damage;
                                            Damaging(Eslots[i], damage);
                                            dies(Eslots[i]);
                                        }
                                    }
                                }



                                $(".staticEffects").fadeOut(2000);
                            }
                        }
                        //Freeze
                        if ($('#magechoice option:selected').text() === "Freeze") {
                            var defense = 0;
                            if (Eunits[enemyindex].enfeeble === 0) {
                                defense = Eunits[enemyindex].resistance
                            }
                            var damage = ((units[selectedindex].attack) - defense + units[selectedindex].attacktempboost) * Eunits[enemyindex].ice;
                            if (damage < 0) {
                                damage = 0
                            }

                            if (Eunits[enemyindex].phasedout === true) {
                                if (Eunits[enemyindex].type === "Flamewraith") {
                                } else {
                                    damage = 0;
                                }
                                Eunits[enemyindex].phasedout = false;
                                $("#E" + Eunits[enemyindex].index).removeClass("Invisible");
                                $("#TEXT").append("The wraith phased back in.")
                            }
                            var tempran = Math.floor((Math.random() * 2) + 1);
                            if (units[selectedindex].abilityelementalailments === true && tempran === 2) {
                                Eunits[enemyindex].sleep = 2;
                                showailments();
                            }
                            if ((units[selectedindex].curtop - 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curtop + 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curleft - 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop) || (units[selectedindex].curleft + 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop) || (units[selectedindex].curtop - 200 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curtop + 200 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curleft - 200 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop) || (units[selectedindex].curleft + 200 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop) || (units[selectedindex].curtop - 300 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curtop + 300 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curleft - 300 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop) || (units[selectedindex].curleft + 300 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop) ) {
                            $("#TEXT").append("<p>" + units[selectedindex].name + " did " + damage + " damage to " + Eunits[enemyindex].name + "\n</p>");

                            //effects
                            $("#battlebackground").append("<div class='Effects' style='top: " + units[selectedindex].curtop + "px;left: " + units[selectedindex].curleft + "px'><img src='Pictures/Effects/EffectIce.gif' /></div>");
                            $(".Effects").animate({
                                left: Eunits[enemyindex].curleft + "px",
                                top: Eunits[enemyindex].curtop + "px"
                            }, 500).fadeOut(500);

                            setTimeout(function () {
                                Damaging(enemyindex, damage);
                            }, 500);
                            setTimeout(function () {
                                dies(enemyindex);
                            }, 500);
                            $(".staticEffects").fadeOut(2000);
                            Iceattack.play();

                            Eunits[enemyindex].health -= damage;
                                if(units[selectedindex].usedaction === true && units[selectedindex].abilitydoubletap===true){
                                    units[selectedindex].moved=true;
                                }
                            units[selectedindex].usedaction = true;
                        }
                        }
                        //Pain
                        if ($('#magechoice option:selected').text() === "Pain") {
                            var defense = 0;
                            if (Eunits[enemyindex].enfeeble === 0) {
                                defense = Eunits[enemyindex].resistance
                            }
                            var damage = ((units[selectedindex].attack) + Eunits[enemyindex].defense - defense + units[selectedindex].attacktempboost);
                            if (damage < 0) {
                                damage = 0
                            }

                            if ((units[selectedindex].curtop - 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curtop + 100 === Eunits[enemyindex].curtop &&
                                units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curleft - 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop) || (units[selectedindex].curleft + 100 === Eunits[enemyindex].curleft &&
                                units[selectedindex].curtop === Eunits[enemyindex].curtop)) {
                                $("#TEXT").append("<p>" + units[selectedindex].name + " did " + damage + " damage to " + Eunits[enemyindex].name + "\n</p>");


                                setTimeout(function () {
                                    Damaging(enemyindex, damage);
                                }, 500);
                                setTimeout(function () {
                                    dies(enemyindex);
                                }, 500);
                                $("#E" + enemyindex).append("<div class='slashEffects'><img src='Pictures/Effects/pain.gif' /></div>");
                                $(".staticEffects").fadeOut(2000);
                                Death.play();
                                $(".slashEffects").fadeOut(2000);
                                Eunits[enemyindex].health -= damage;
                                if(units[selectedindex].usedaction === true && units[selectedindex].abilitydoubletap===true){
                                    units[selectedindex].moved=true;
                                }
                                units[selectedindex].usedaction = true;
                            }
                        }
                    } else {
                        $("#TEXT").append("This unit is silenced for " + units[selectedindex].silenced + " more turns.")
                    }
                }
                //wizard
                if (selectedaction === "wizardCast") {
                    if (units[selectedindex].silenced === 0) {
                        if((Eunits[Eslots[1]].type==="Sounddepressor" && Eunits[Eslots[1]].alive===true) || (Eunits[Eslots[2]].type==="Sounddepressor" && Eunits[Eslots[2]].alive===true) || (Eunits[Eslots[3]].type==="Sounddepressor" && Eunits[Eslots[3]].alive===true) || (Eunits[Eslots[4]].type==="Sounddepressor" && Eunits[Eslots[4]].alive===true) || (Eunits[Eslots[5]].type==="Sounddepressor" && Eunits[Eslots[5]].alive===true)){
                            message("The Sound Depressor nullifies all magic.")
                            return;
                        }
                        //bolt
                        if ($('#wizardchoice option:selected').text() === "Bolt(2)") {
                            var defense=0;
                            if(Eunits[enemyindex].enfeeble===0){defense=Eunits[enemyindex].resistance}
                            var damage = ((units[selectedindex].attack + units[selectedindex].attacktempboost) * 2 - defense) * Eunits[enemyindex].lightning;
                            if (damage < 0) {
                                damage = 0
                            }
                            if (units[selectedindex].charge < 2) {
                                $("#TEXT").append("<p>" + units[selectedindex].name + " only has a charge of " + units[selectedindex].charge + ". He needs a charge of 2 to use Bolt\n</p>");
                                return;
                            }
                            if (Eunits[enemyindex].phasedout === true) {
                                if (Eunits[enemyindex].type === "Waterwraith") {
                                } else {
                                    damage = 0;
                                }
                                Eunits[enemyindex].phasedout = false;
                                $("#E" + Eunits[enemyindex].index).removeClass("Invisible");
                                $("#TEXT").append("The wraith phased back in.")
                            }
                            var tempran= Math.floor((Math.random() * 2) + 1);

                            $("#TEXT").append("<p>" + units[selectedindex].name + " did " + damage + " damage to " + Eunits[enemyindex].name + "\n</p>");
                            var tempran= Math.floor((Math.random() * 2) + 1);
                            if(units[selectedindex].abilityelementalailments===true && tempran===2){
                                Eunits[enemyindex].immobilized=2;
                                showailments();
                            }
                            //effects
                            $("#battlebackground").append("<div class='staticEffects' style='margin-top: " + (Eunits[enemyindex].curtop-750) +"px; margin-left: " + (Eunits[enemyindex].curleft-100) +"px'><img src='Pictures/Effects/EffectLightning.gif' /></div>");
                            setTimeout(function(){Damaging(enemyindex, damage);},500);
                            setTimeout(function(){dies(enemyindex);},500);
                            $(".staticEffects").fadeOut(2000);
                            Lightning.play();

                            Eunits[enemyindex].health -= damage;
                            units[selectedindex].charge -= 2;
                            units[selectedindex].usedaction = true;
                        }
                        //Missile
                        if ($('#wizardchoice option:selected').text() === "Missile(X)") {
                            var defense=0;
                            if(Eunits[enemyindex].enfeeble===0){defense=Eunits[enemyindex].resistance}
                            var damage = (units[selectedindex].attack + units[selectedindex].attacktempboost - defense) * Eunits[enemyindex].fire * units[selectedindex].charge;
                            if (damage < 0) {
                                damage = 0
                            }
                            if (units[selectedindex].charge < 1) {
                                $("#TEXT").append("<p>" + units[selectedindex].name + " only has a charge of " + units[selectedindex].charge + ". He needs a charge of at least 1 to use missiles.\n</p>");
                                return;
                            }

                            if (Eunits[enemyindex].phasedout === true) {
                                if (Eunits[enemyindex].type === "Frostwraith") {
                                } else {
                                    damage = 0;
                                }
                                Eunits[enemyindex].phasedout = false;
                                $("#E" + Eunits[enemyindex].index).removeClass("Invisible");
                                $("#TEXT").append("The wraith phased back in.")
                            }
                            $("#TEXT").append("<p>" + units[selectedindex].name + " did " + damage + " damage to " + Eunits[enemyindex].name + "\n</p>");
                            var tempran= Math.floor((Math.random() * 2) + 1);
                            if(units[selectedindex].abilityelementalailments===true && tempran===2){
                                Eunits[enemyindex].blind=2;
                                showailments();
                            }
                            Eunits[enemyindex].health -= damage;

                            units[selectedindex].usedaction = true;

                            var keepgoing=units[selectedindex].charge;
                            setTimeout(function(){Damaging(enemyindex, damage);},500*keepgoing);
                            setTimeout(function(){dies(enemyindex);},500*keepgoing);
                            //effects

                            while(keepgoing>0){
                                $("#battlebackground").append("<div class='Effects' style='top: " + units[selectedindex].curtop +"px; left: " + units[selectedindex].curleft +"px'><img src='Pictures/Effects/EffectFire.gif' /></div>");
                                $(".Effects").animate({
                                    left: Eunits[enemyindex].curleft + "px",
                                    top: Eunits[enemyindex].curtop + "px"
                                },500*keepgoing).fadeOut(500 *keepgoing);
                                keepgoing-=1;
                                Fire.play();
                            }
                            units[selectedindex].charge = 0;

                        }
                        //gust
                        if ($('#wizardchoice option:selected').text() === "Gust(1)") {
                            var defense=0;
                            if(Eunits[enemyindex].enfeeble===0){defense=Eunits[enemyindex].resistance}
                            var damage = (units[selectedindex].attack - defense + units[selectedindex].attacktempboost) * Eunits[enemyindex].ice;
                            if (damage < 0) {
                                damage = 0
                            }
                            if (units[selectedindex].charge < 1) {
                                $("#TEXT").append("<p>" + units[selectedindex].name + " only has a charge of " + units[selectedindex].charge + ". He needs a charge of 1 to use Gust\n</p>");
                                return;
                            }
                            if (Eunits[enemyindex].phasedout === true) {
                                if (Eunits[enemyindex].type === "Flamewraith") {
                                } else {
                                    damage = 0;
                                }
                                Eunits[enemyindex].phasedout = false;
                                $("#E" + Eunits[enemyindex].index).removeClass("Invisible");
                                $("#TEXT").append("The wraith phased back in.")
                            }
                            var tempran= Math.floor((Math.random() * 2) + 1);

                            $("#TEXT").append("<p>" + units[selectedindex].name + " did " + damage + " damage to " + Eunits[enemyindex].name + "\n</p>");
                            var tempran= Math.floor((Math.random() * 2) + 1);
                            if(units[selectedindex].abilityelementalailments===true && tempran===2){
                                Eunits[enemyindex].sleep=1;
                                showailments();
                            }
                            Gust.play();
                            Eunits[enemyindex].health -= damage;
                            units[selectedindex].charge -= 1;
                            units[selectedindex].usedaction = true;
                            if (Eunits[enemyindex].curtop > 25 && !(units[slots[1]].curtop + 100 === Eunits[enemyindex].curtop && units[slots[1]].curleft === Eunits[enemyindex].curleft) && !(units[slots[2]].curtop + 100 === Eunits[enemyindex].curtop && units[slots[2]].curleft === Eunits[enemyindex].curleft) && !(units[slots[3]].curtop + 100 === Eunits[enemyindex].curtop && units[slots[3]].curleft === Eunits[enemyindex].curleft) && !(Eunits[Eslots[1]].curtop + 100 === Eunits[enemyindex].curtop && Eunits[Eslots[1]].curleft === Eunits[enemyindex].curleft) && !(Eunits[Eslots[2]].curtop + 100 === Eunits[enemyindex].curtop && Eunits[Eslots[2]].curleft === Eunits[enemyindex].curleft) && !(Eunits[Eslots[3]].curtop + 100 === Eunits[enemyindex].curtop && Eunits[Eslots[3]].curleft === Eunits[enemyindex].curleft) && !(Eunits[Eslots[4]].curtop + 100 === Eunits[enemyindex].curtop && Eunits[Eslots[4]].curleft === Eunits[enemyindex].curleft) && !(Eunits[Eslots[5]].curtop + 100 === Eunits[enemyindex].curtop && Eunits[Eslots[5]].curleft === Eunits[enemyindex].curleft)) {
                                $('#E' + enemyindex).animate({
                                    top: (Eunits[enemyindex].curtop - 100) + 'px'
                                }, 500);
                                Eunits[enemyindex].curtop -= 100;
                            }

                            $("#E" + enemyindex).append("<div class='slashEffects'><img style='width:300px; height:300px; margin-left:-110px; margin-top:-170px' src='Pictures/Effects/Gust.gif' /></div>");
                            setTimeout(function(){Damaging(enemyindex, damage);},500);
                            setTimeout(function(){dies(enemyindex);},500);
                            setTimeout(function(){ $(".slashEffects").remove()},500);
                        }
                        //drain
                        if ($('#wizardchoice option:selected').text() === "Drain") {
                            if ((units[selectedindex].curtop - 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curtop + 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curleft - 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop) || (units[selectedindex].curleft + 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop)) {
                                $("#TEXT").append("<p>" + units[selectedindex].name + " drained all charge from " + Eunits[enemyindex].name + "\n</p>");

                                units[selectedindex].charge+=Eunits[enemyindex].charge;
                                $("#ORB" + + selectedindex).remove();
                                $('#' + selectedindex).append('<img style="position: absolute; margin-top:40px; margin-left:-30px; width:35px; height:35px" src="Pictures/Orb.gif" /><div id = "ORB' + selectedindex + '" style="color: yellow; position: absolute; font-size:20px; margin-top:-30px; margin-left:55px; width:10px; height:10px ">' + units[selectedindex].charge + '</div>');

                                Eunits[enemyindex].charge = 0;
                                units[selectedindex].usedaction = true;
                                Absorb.play();

                                    $("#ORBE" + enemyindex).remove();
                                    var maxcharge = 0;
                                    if(Eunits[enemyindex].type === "Fire Elemental" || Eunits[enemyindex].type === "Beekeeper" || Eunits[enemyindex].type === "Necromancer" || Eunits[enemyindex].type === "Shaman" || Eunits[enemyindex].type === "Wisp" || Eunits[enemyindex].type === "Frostwraith" || Eunits[enemyindex].type === "Waterwraith"){
                                        maxcharge = 1;
                                    }
                                    if(Eunits[enemyindex].type === "Ice Elemental" || Eunits[enemyindex].type === "Flamewraith"){
                                        maxcharge = 2;
                                    }
                                    if(Eunits[enemyindex].type === "Lightning Elemental" || Eunits[enemyindex].type === "Angel" || Eunits[enemyindex].type === "Frostlord" || Eunits[enemyindex].type === "Demon" || Eunits[enemyindex].type === "Unknown" || Eunits[enemyindex].type === "Dragon"){
                                        maxcharge = 3;
                                    }
                                    $('#E' + enemyindex).append('<img style="position: absolute; margin-top:40px; margin-left:-30px; width:35px; height:35px" src="Pictures/Orb.gif" /><div id = "ORBE' + enemyindex + '" style="color:yellow; position: absolute; font-size:20px; margin-top:-30px; margin-left:50px; width:10px; height:10px ">' + Eunits[enemyindex].charge +'/' + maxcharge +'</div>');


                                return;
                            }
                        }
                        $("#ORB" + +units[selectedindex].index).remove();
                        $('#' + units[selectedindex].index).append('<div id = "ORB' + units[selectedindex].index + '" style="color: yellow; position: absolute; font-size:20px; margin-top:-30px; margin-left:55px; width:10px; height:10px ">' + units[selectedindex].charge + '</div>');
                    } else {
                        $("#TEXT").append("This unit is silenced for " + units[selectedindex].silenced + " more turns.")
                    }
                }
                //Sorcerer
                if (selectedaction === "sorcererCast") {
                    if (units[selectedindex].silenced === 0) {
                        if((Eunits[Eslots[1]].type==="Sounddepressor" && Eunits[Eslots[1]].alive===true) || (Eunits[Eslots[2]].type==="Sounddepressor" && Eunits[Eslots[2]].alive===true) || (Eunits[Eslots[3]].type==="Sounddepressor" && Eunits[Eslots[3]].alive===true) || (Eunits[Eslots[4]].type==="Sounddepressor" && Eunits[Eslots[4]].alive===true) || (Eunits[Eslots[5]].type==="Sounddepressor" && Eunits[Eslots[5]].alive===true)){
                            message("The Sound Depressor nullifies all magic.")
                            return;
                        }
                        //lightning
                        if ($('#sorcererchoice option:selected').text() === "Lightning(20)") {
                            if (sorcerermana < 20) {
                                $("#TEXT").append("<p>" + units[selectedindex].name + " only has " + sorcerermana + " power. He needs a 20 power to use Lightning.\n</p>");
                                return;
                            };
                            var defense=0;
                            if(Eunits[enemyindex].enfeeble===0){defense=Eunits[enemyindex].resistance}
                            var damage = (units[selectedindex].attack + units[selectedindex].attacktempboost - defense) * 3 * Eunits[enemyindex].lightning;
                            if (damage < 0) {
                                damage = 0
                            }
                            if (Eunits[enemyindex].phasedout === true) {
                                if (Eunits[enemyindex].type === "Waterwraith") {
                                } else {
                                    damage = 0;
                                }
                                Eunits[enemyindex].phasedout = false;
                                $("#E" + Eunits[enemyindex].index).removeClass("Invisible");
                                $("#TEXT").append("The wraith phased back in.")
                            }
                            var tempran= Math.floor((Math.random() * 2) + 1);
                            $("#TEXT").append("<p>" + units[selectedindex].name + " did " + damage + " damage to " + Eunits[enemyindex].name + "\n</p>");

                            //effects
                            $("#battlebackground").append("<div class='staticEffects' style='margin-top: " + (Eunits[enemyindex].curtop-750) +"px; margin-left: " + (Eunits[enemyindex].curleft-100) +"px'><img src='Pictures/Effects/EffectLightning.gif' /></div>");
                            setTimeout(function(){Damaging(enemyindex, damage);},500);
                            setTimeout(function(){dies(enemyindex);},500);
                            $(".staticEffects").fadeOut(2000);
                            Lightning.play();

                            Eunits[enemyindex].health -= damage;
                            sorcerermana -= 20;
                            units[selectedindex].usedaction = true;
                            $(".manabar").remove();
                            $("#" + selectedindex).append('<div class="manabar" id ="EB' + units[selectedindex].index + '"style="width: ' + (sorcerermana) + '%"></div>');
                        }
                        //Blizzard
                        if ($('#sorcererchoice option:selected').text() === "Blizzard(20)") {
                            if (sorcerermana < 20) {
                                $("#TEXT").append("<p>" + units[selectedindex].name + " only has " + sorcerermana + " power. He needs a 20 power to use Blizzard.\n</p>");
                                return;
                            }
                            var defense=0;

                            for(var i=1;i<6;i++){
                                if(Eunits[Eslots[i]].enfeeble===0){defense=Eunits[Eslots[i]].resistance}
                                var damage = ((units[selectedindex].attack + units[selectedindex].attacktempboost) - defense) * Eunits[Eslots[i]].ice;
                                if (damage < 0) {
                                    damage = 0
                                }
                                if(Eunits[Eslots[i]].alive===false){
                                    continue;
                                }
                                if (Eunits[Eslots[i]].phasedout === true) {
                                    if (Eunits[Eslots[i]].type === "Flamewraith") {
                                    } else {
                                        damage = 0;
                                    }
                                    Eunits[Eslots[i]].phasedout = false;
                                    $("#E" + Eunits[Eslots[i]].index).removeClass("Invisible");
                                    $("#TEXT").append("The wraith phased back in.")
                                }
                                var tempran= Math.floor((Math.random() * 2) + 1);
                                if(units[selectedindex].abilityelementalailments===true && tempran===2){
                                    Eunits[Eslots[i]].sleep=1;
                                    showailments();
                                }
                                $("#TEXT").append("<p>" + units[selectedindex].name + " did " + damage + " damage to " + Eunits[Eslots[i]].name + "\n</p>");
                                Eunits[Eslots[i]].health -= damage;
                                Damaging(Eslots[i], damage);
                                dies(Eslots[i]);
                            }
                            $("#battlebackground").append("<img class='totalbackground' src='Pictures/Effects/Blizzard.gif' />");
                            Hurricane.play();
                            $(".totalbackground").fadeOut(2000);
                            sorcerermana -= 20;
                            units[selectedindex].usedaction = true;
                            $(".manabar").remove();
                            $("#" + selectedindex).append('<div class="manabar" id ="EB' + units[selectedindex].index + '"style="width: ' + (sorcerermana) + '%"></div>');
                        }
                        //Fireblast
                        if ($('#sorcererchoice option:selected').text() === "Fireblast(30)") {
                            var defense=0;
                            if(Eunits[enemyindex].enfeeble===0){defense=Eunits[enemyindex].resistance}
                            var damage = ((units[selectedindex].attack + units[selectedindex].attacktempboost) - defense) *2 * Eunits[enemyindex].fire;
                            if (damage < 0) {
                                damage = 0
                            }
                            if (sorcerermana<30) {
                                $("#TEXT").append("<p>" + units[selectedindex].name + " only has " + sorcerermana + " power. He needs a 30 power to use Fireblast.\n</p>");
                                return;
                            }

                            if (Eunits[enemyindex].phasedout === true) {
                                if (Eunits[enemyindex].type === "Frostwraith") {
                                } else {
                                    damage = 0;
                                }
                                Eunits[enemyindex].phasedout = false;
                                $("#E" + Eunits[enemyindex].index).removeClass("Invisible");
                                $("#TEXT").append("The wraith phased back in.")
                            }
                            $("#TEXT").append("<p>" + units[selectedindex].name + " did " + damage + " damage to " + Eunits[enemyindex].name + "\n</p>");
                            Lightning.play();
                            Eunits[enemyindex].health -= damage;
                            sorcerermana-=30;
                            units[selectedindex].usedaction = true;

                            //effects
                            $("#E" + enemyindex).append("<div class='staticEffects' style='margin-top:-180px; margin-left:-120px'><img src='Pictures/Effects/EffectExplode.gif' /></div>");
                            setTimeout(function(){Damaging(enemyindex, damage);},500);
                            setTimeout(function(){dies(enemyindex);},500);
                            setTimeout(function(){ $(".staticEffects").remove()},500);
                            Lightning.play();

                            //adjacent enemies
                            for (var z = 1; z < 6; z++) {

                                if (Eunits[Eslots[z]].alive === true) {
                                    if ((Eunits[Eslots[z]].curleft === Eunits[enemyindex].curleft - 100 && Eunits[Eslots[z]].curtop === Eunits[enemyindex].curtop) || (Eunits[Eslots[z]].curleft === Eunits[enemyindex].curleft + 100 && Eunits[Eslots[z]].curtop === Eunits[enemyindex].curtop) || (Eunits[Eslots[z]].curleft === Eunits[enemyindex].curleft && Eunits[Eslots[z]].curtop === Eunits[enemyindex].curtop + 100) || (Eunits[Eslots[z]].curleft === Eunits[enemyindex].curleft && Eunits[Eslots[z]].curtop === Eunits[enemyindex].curtop - 100)) {
                                        var smalldamage = ((units[selectedindex].attack) - Eunits[Eslots[z]].resistance) * Eunits[Eslots[z]].fire;
                                        if (smalldamage < 0) {
                                            smalldamage = 0
                                        }
                                        if (Eunits[Eslots[z]].phasedout === true) {
                                            if (Eunits[Eslots[z]].type === "Frostwraith") {
                                            } else {
                                                damage = 0;
                                            }
                                            Eunits[Eslots[z]].phasedout = false;
                                            $("#E" + Eunits[Eslots[z]].index).removeClass("Invisible");
                                            $("#TEXT").append("The wraith phased back in.")
                                        }
                                        $("#TEXT").append("<p>" + units[selectedindex].name + " did " + smalldamage + " damage to " + Eunits[Eslots[z]].name + "\n</p>");
                                        Eunits[Eslots[z]].health -= smalldamage;
                                        Damaging(Eslots[z], smalldamage);
                                        dies(Eslots[z]);
                                    }
                                }

                            }
                            $(".manabar").remove();
                            $("#" + selectedindex).append('<div class="manabar" id ="EB' + units[selectedindex].index + '"style="width: ' + (sorcerermana) + '%"></div>');
                        }
                        //Slumber
                        if ($('#sorcererchoice option:selected').text() === "Slumber(20)") {
                            if (sorcerermana < 10) {
                                $("#TEXT").append("<p>" + units[selectedindex].name + " only has " + sorcerermana + " power. He needs a 10 power to use Blizzard.\n</p>");
                                return;
                            }

                            for(var i=1;i<6;i++){
                                if(Eunits[Eslots[i]].alive===false){
                                    continue;
                                }
                                Eunits[Eslots[i]].sleep+=1;
                            }
showailments();
                            sorcerermana -= 10;
                            units[selectedindex].usedaction = true;
                            $(".manabar").remove();
                            $("#" + selectedindex).append('<div class="manabar" id ="EB' + units[selectedindex].index + '"style="width: ' + (sorcerermana) + '%"></div>');
                        }
                        //Death
                        if ($('#sorcererchoice option:selected').text() === "Death(50)") {
                            if (sorcerermana < 50) {
                                $("#TEXT").append("<p>" + units[selectedindex].name + " only has " + sorcerermana + " power. He needs a 50 power to use Death.\n</p>");
                                return;
                            }
if( Eunits[enemyindex].type==="Dragon" ||  Eunits[enemyindex].type==="Hands"|| Eunits[enemyindex].type==="Unknown" ||  Eunits[enemyindex].type==="Unknown2"){
    message("You can't target this unit with death.")
    return;
}
                            Death.play();
                            Eunits[enemyindex].health=0;
                            //effects
                            $("#battlebackground").append("<div class='slashEffects' style='margin-top: " + (Eunits[enemyindex].curtop-450) +"px; margin-left: " + (Eunits[enemyindex].curleft-0) +"px'><img src='Pictures/Effects/Death.gif' /></div>");
                            setTimeout(function(){dies(enemyindex);},500);
                            $(".slashEffects").fadeOut(2000);

                            sorcerermana -= 50;
                            units[selectedindex].usedaction = true;
                            $(".manabar").remove();
                            $("#" + selectedindex).append('<div class="manabar" id ="EB' + units[selectedindex].index + '"style="width: ' + (sorcerermana) + '%"></div>');
                        }
                    } else {
                        $("#TEXT").append("This unit is silenced for " + units[selectedindex].silenced + " more turns.")
                    }
                }
                //Guards
                if (selectedaction === "enchantressUse") {
                    if (units[selectedindex].silenced === 0) {
                        if ($('#enchantresschoice option:selected').text() === "Absorb") {
                            var multiplier = 0;
                            var toleft = units[selectedindex].curleft-Eunits[enemyindex].curleft;
                            var totop = units[selectedindex].curtop-Eunits[enemyindex].curtop;
                            if(toleft<0){toleft*=-1}
                            if(totop<0){totop*=-1}
                            if(totop>=toleft){
                                multiplier = totop/100;
                                switch(multiplier){
                                    case 4:
                                        multiplier=1;
                                        break;
                                    case 3:
                                        multiplier=2;
                                        break;
                                    case 2:
                                        multiplier=3;
                                        break;
                                    case 1:
                                        multiplier=4;
                                        break;
                                }
                            }else{
                                multiplier = toleft/100;
                                switch(multiplier){
                                    case 4:
                                        multiplier=1;
                                        break;
                                    case 3:
                                        multiplier=2;
                                        break;
                                    case 2:
                                        multiplier=3;
                                        break;
                                    case 1:
                                        multiplier=4;
                                        break;
                                }
                            }
                        var damage = units[selectedindex].attack * multiplier;
                        if (Eunits[enemyindex].phasedout === true) {
                            damage = 0;
                        }
                            units[selectedindex].mana += damage;
                        $("#TEXT").append("<p>" + units[selectedindex].name + " absorbed " + damage + " life from " + Eunits[enemyindex].name + "\n</p>");
                        Absorb.play();

                            $("#ORB" + selectedindex).remove();
                                $('#' + selectedindex).append('<img style="position: absolute; margin-top:40px; margin-left:-30px; width:48px; height:35px" src="Pictures/Orb.gif" /><div id = "ORB' + selectedindex + '" style="color: yellow; position: absolute; font-size:17px; margin-top:-27px; margin-left:50px; width:10px; height:10px ">' + units[selectedindex].mana +'</div>');


                        //effects
                        $("#battlebackground").append("<div class='Effects' style='top: " + Eunits[enemyindex].curtop + "px; left: " + Eunits[enemyindex].curleft + "px'><img src='Pictures/Effects/AbsorbEffect.gif' /></div>");
                        $(".Effects").animate({
                            left: units[selectedindex].curleft + "px",
                            top: units[selectedindex].curtop + 10 + "px"
                        }, 500).fadeOut(500);
                        setTimeout(function () {
                            Damaging(enemyindex, damage);
                        }, 500);
                        setTimeout(function () {
                            dies(enemyindex);
                        }, 500);

                        Eunits[enemyindex].health -= damage;
                        units[selectedindex].usedaction = true;
                        Damaging(enemyindex, damage);
                        dies(enemyindex);
                    }
                        if($('#enchantresschoice option:selected').text()==="Storm(30)") {
                            if(units[selectedindex].mana<30){
                                message("She requires at least 30 power to use Attack Boost");
                                return;
                            }
                            units[selectedindex].mana-=30;
                            $("#ORB" + selectedindex).remove();
                            $('#' + selectedindex).append('<img style="position: absolute; margin-top:40px; margin-left:-30px; width:48px; height:35px" src="Pictures/Orb.gif" /><div id = "ORB' + selectedindex + '" style="color: yellow; text-align: center; position: absolute; font-size:17px; margin-top:-27px; margin-left:50px; width:10px; height:10px ">' + units[selectedindex].mana +'</div>');
                            units[selectedindex].stormactive=true;
                            stormcheck();
                        }
                } else {
                    $("#TEXT").append("This unit is silenced for " + units[selectedindex].silenced + " more turns.")
                }
                    if (units[selectedindex].silenced === 0) {
                        if ($('#enchantresschoice option:selected').text() === "Torment(50)") {
                            var damage = units[selectedindex].power;
if(units[selectedindex].mana<50){
    message("You don't have enough mana for that.");
    return;
}
                            units[selectedindex].mana-=50;
                            $("#ORB" + selectedindex).remove();
                            $('#' + selectedindex).append('<img style="position: absolute; margin-top:40px; margin-left:-30px; width:48px; height:35px" src="Pictures/Orb.gif" /><div id = "ORB' + selectedindex + '" style="color: yellow; position: absolute; font-size:17px; margin-top:-27px; margin-left:50px; width:10px; height:10px ">' + units[selectedindex].mana +'</div>');
                            Eunits[enemyindex].poison += 2;
                            Eunits[enemyindex].enfeeble += 2;
                            Eunits[enemyindex].sleep += 2;
showailments();
                            //effects
                            Death.play();

                            units[selectedindex].usedaction = true;

                        }

                    } else {
                        $("#TEXT").append("This unit is silenced for " + units[selectedindex].silenced + " more turns.")
                    }
                }
                //soldier
                if (selectedaction === "guardUse") {
                    if (units[selectedindex].blind === 0) {
                        var defense=0;
                        if(Eunits[enemyindex].enfeeble===0){defense=Eunits[enemyindex].defense}
                        var damage = (units[selectedindex].attack + units[selectedindex].attacktempboost - defense);
                        if (damage < 0) {
                            damage = 0
                        }
                        if (Eunits[enemyindex].phasedout === true) {
                            damage = 0;
                        }
                        if ($('#guardchoice option:selected').text() === "Bash") {
                            if ((units[selectedindex].curtop - 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curtop + 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curleft - 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop) || (units[selectedindex].curleft + 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop)) {
                                $("#TEXT").append("<p>" + units[selectedindex].name + " Did " + damage + " damage to " + Eunits[enemyindex].name + "\n</p>");
                                Sword.play();
                                Eunits[enemyindex].health -= damage;
                                units[selectedindex].usedaction = true;


                                $("#E" + enemyindex).append("<div class='slashEffects'><img src='Pictures/Effects/EffectSlash.gif' /></div>");
                                setTimeout(function(){Damaging(enemyindex, damage);},500);
                                setTimeout(function(){dies(enemyindex);},500);
                                $(".slashEffects").fadeOut(2000);
                                turngray();
                                return;
                            }
                        }

                    } else {
                        $("#TEXT").append("This unit is blind for " + units[selectedindex].blind + " more turns.")
                    }
                }
                if (selectedaction === "Use"){
                    var e = document.getElementById("alchemychoice");
                    if(e.options[e.selectedIndex].value==="Frostlord") {
                        $("#TEXT").empty();
                        if (frostlordrest > 0) {
                            $("#TEXT").append("Frostlord still have to rest for another " + frostlordrest + " days.")
                            return;
                        }

                        if (units[selectedindex].usedaction === true) {
                            $("#TEXT").append("<p>" + units[selectedindex].name + " has already used an action this turn</p>");
                            return;
                        }
                        $("#battlebackground").append("<img class='totalbackground' src='Pictures/Effects/Blizzard.gif' />");
                        Hurricane.play();
                        $(".totalbackground").fadeOut(4000);
                            $("#TEXT").append("The Frostlord did ice damage to all enemies, and must now rest for 6 days.");
                            frostlordrest = 6;



                        for (var i = 1; i < 6; i++) {

                            if (Eunits[Eslots[i]].alive === true) {
                                var damage = 60 - Eunits[Eslots[i]].resistance;
                                if (damage < 0) {
                                    damage = 0
                                }
                                Eunits[Eslots[i]].health -= damage;

                                Damaging(Eslots[i], damage);
                                dies(Eslots[i]);
                            }
                        }

                    }
                    if(e.options[e.selectedIndex].value==="Demon") {
                        $("#TEXT").empty();
                        if(demonrest>0){
                            $("#TEXT").append("The Demon still has to rest for another " + demonrest + " days.")
                            return;
                        }

                        if (units[selectedindex].usedaction === true) {
                            $("#TEXT").append("<p>" + units[selectedindex].name + " has already used an action this turn</p>");
                            return;
                        }
                        $("#battlebackground").append("<img class='totalbackground' src='Pictures/Enemies/Demon.gif' />");

                        $(".totalbackground").fadeOut(4000);
                            $("#TEXT").append("The Demon did fire damage to all enemies, and must now rest for 8 days.");
                            demonrest=8;
                        for(var i = 1;i<6;i++){
                            if(Eunits[Eslots[i]].alive===true){
                                var damage = 100-Eunits[Eslots[i]].resistance;
                                if (damage<0){damage=0}
                                Eunits[Eslots[i]].health-=damage;
                                Damaging(Eslots[i], damage);
                                dies(Eslots[i]);
                            }
                        }

                    }
                    }//use
                turngray();
            }//end of ebutton
        });

        $('.unit').mousedown(function(e){
            if (battleon===false){
                return;
            }
            $("#TEXT").empty();
            if(e.button === 2){
                //determine whether this unit did an action this turn
                if (units[selectedindex].usedaction===true){
                    $("#TEXT").append("<p>" + units[selectedindex].name + " has already used an action this turn</p>");
                    return;
                }
                //determine enemy's number
                for (var i = 0; i < index; i++) {
                    var temp=this.id;
                    temp=temp.replace("E","");
                    if (units[i].index === parseInt(temp,10)) {
                        allyindex = i;
                    }};

                function Damaging(index,damage) {
                    var temp = "#" + index;
                    var tempbar="#HB" + index;
                    $(tempbar).remove();
                    $(temp).append('<div class="healthbar" id ="HB'+ units[index].index + '"style="width: ' + (units[index].health/units[index].maxhealth)*100 + '%"></div>');
                    $(".damage").remove();
                    $(temp).append('<p class="damage" style=" position: absolute; font-size:40px; margin-top:-70px; margin-left:30px; color:green ">' + damage + '</p>');
                    $(".damage").delay(1000).effect("puff");
                }
                function turngray(){
                    if(units[selectedindex].moved===true || units[selectedindex].usedaction===true){
                        $('#' + selectedindex).addClass("lighticon");
                    }

                    if(units[selectedindex].moved===true && units[selectedindex].usedaction===true){
                        $('#' + selectedindex).removeClass("lighticon");
                        $('#' + selectedindex).addClass("grayicon");
                    }
                    if(units[allyindex].moved===false || units[allyindex].usedaction===false){
                        $('#' + allyindex).removeClass("grayicon");
                    }
                    if(units[allyindex].moved===false && units[allyindex].usedaction===false){
                        $('#' + allyindex).removeClass("lighticon");
                    }
                }

if(selectedaction==="guardUse"){
    var e = document.getElementById("guardchoice");
    if(e.options[e.selectedIndex].text==="Protect") {
        var temp3=this.id;
        temp3=temp3.replace("E","");
        for (var j = 0; j < index; j++) {
            if (units[j].index === parseInt(temp3,10)) {
                allyindex = j;
            }};

        if ((units[selectedindex].curtop - 100 === units[allyindex].curtop && units[selectedindex].curleft === units[allyindex].curleft) || (units[selectedindex].curtop + 100 === units[allyindex].curtop && units[selectedindex].curleft === units[allyindex].curleft) || (units[selectedindex].curleft - 100 === units[allyindex].curleft && units[selectedindex].curtop === units[allyindex].curtop) || (units[selectedindex].curleft + 100 === units[allyindex].curleft && units[selectedindex].curtop === units[allyindex].curtop) || (units[selectedindex].curleft === units[allyindex].curleft && units[selectedindex].curtop === units[allyindex].curtop)) {
$("#TEXT").empty();
            Protect.play();
            $("#TEXT").append("Your guard is now protecting that unit.");
            units[allyindex].protectedby=selectedindex;
units[selectedindex].usedaction=true;
        }
        showailments();
    }
}
                if(selectedaction==="healerUse"){
                    var e = document.getElementById("healerchoice");
                    if(e.options[e.selectedIndex].value==="Heal(10)") {
                        if(units[selectedindex].power<10){
                            message("She requires at least 10 power to use Heal");
                            return;
                        }
                        units[selectedindex].power-=10;
                        if (units[selectedindex].abilityreach ===true || ((units[selectedindex].curtop - 100 === units[allyindex].curtop && units[selectedindex].curleft === units[allyindex].curleft) || (units[selectedindex].curtop + 100 === units[allyindex].curtop && units[selectedindex].curleft === units[allyindex].curleft) || (units[selectedindex].curleft - 100 === units[allyindex].curleft && units[selectedindex].curtop === units[allyindex].curtop) || (units[selectedindex].curleft + 100 === units[allyindex].curleft && units[selectedindex].curtop === units[allyindex].curtop) || (units[selectedindex].curleft === units[allyindex].curleft && units[selectedindex].curtop === units[allyindex].curtop))) {
                            var temp3 = this.id;
                            temp3 = temp3.replace("E", "");
                            for (var j = 0; j < index; j++) {
                                if (units[j].index === parseInt(temp3, 10)) {
                                    allyindex = j;
                                }
                            }
                            ;

                            units[selectedindex].usedaction = true;
                            Cleanse.play();
                            if(units[selectedindex].abilitycleanse===true){
                                units[allyindex].poison = 0;
                                units[allyindex].blind = 0;
                                units[allyindex].immobilized = 0;
                                units[allyindex].silenced = 0;
                                units[allyindex].sleep = 0;
                            }

                            showailments();
                            units[allyindex].health += 60;
                            if (units[allyindex].health > units[allyindex].maxhealth) {
                                units[allyindex].health = units[allyindex].maxhealth
                            }
                            $(".healerbar").remove();
                            $("#" + selectedindex).append('<div class="healerbar" id ="EB' + units[selectedindex].index + '"style="width: ' + (units[selectedindex].power) + '%"></div>');
                            setTimeout(function () {
                                Damaging(allyindex, 60);
                            }, 500);
                        }
                    }
                    if(e.options[e.selectedIndex].value==="Vigor") {
                        if (units[selectedindex].abilityreach ===true || ((units[selectedindex].curtop - 100 === units[allyindex].curtop && units[selectedindex].curleft === units[allyindex].curleft) || (units[selectedindex].curtop + 100 === units[allyindex].curtop && units[selectedindex].curleft === units[allyindex].curleft) || (units[selectedindex].curleft - 100 === units[allyindex].curleft && units[selectedindex].curtop === units[allyindex].curtop) || (units[selectedindex].curleft + 100 === units[allyindex].curleft && units[selectedindex].curtop === units[allyindex].curtop) || (units[selectedindex].curleft === units[allyindex].curleft && units[selectedindex].curtop === units[allyindex].curtop))) {

                            var temp3 = this.id;
                            for (var j = 0; j < index; j++) {
                                if (units[j].index === parseInt(temp3, 10)) {
                                    allyindex = j;
                                }
                            }

                            temp3 = temp3.replace("E", "");
if(units[selectedindex].abilitydoublevigor===true){
    $("#TEXT").append("<p>" + units[selectedindex].name + " gave an extra turn to all your other allies\n</p>");
} else{
    $("#TEXT").append("<p>" + units[selectedindex].name + " gave an extra turn to " + units[allyindex].name + "\n</p>");
}

                            units[selectedindex].usedaction = true;

                            Cleanse.play();
                            if(units[selectedindex].abilitymove===true){
                                units[allyindex].moved = false;
                            }
                            units[allyindex].usedaction = false;
                            if(units[selectedindex].abilitycleanse===true){
                                units[allyindex].poison = 0;
                                units[allyindex].blind = 0;
                                units[allyindex].immobilized = 0;
                                units[allyindex].silenced = 0;
                                units[allyindex].sleep = 0;
                            }
                            if(units[selectedindex].abilitydoublevigor===true){
                                for(var i = 1;i<4;i++){
                                    if(units[slots[i]].type!="Healer"){
                                        units[slots[i]].usedaction = false;
                                        units[slots[i]].moved = false;
                                        units[slots[i]].poison = 0;
                                        units[slots[i]].blind = 0;
                                        units[slots[i]].immobilized = 0;
                                        units[slots[i]].silenced = 0;
                                        units[slots[i]].sleep = 0;
                                    }
                                }
                            }
                            turngray();
                            $(".healerbar").remove();
                            $("#" + selectedindex).append('<div class="healerbar" id ="EB' + units[selectedindex].index + '"style="width: ' + (units[selectedindex].power) + '%"></div>');
                        }
                    }

                }

                if(selectedaction==="enchantressUse"){
                    var e = document.getElementById("enchantresschoice");
                    if(e.options[e.selectedIndex].value==="Bestow(50)") {
                        if(units[selectedindex].mana<50){
                            message("She requires at least 50 power to use Bestow");
                            return;
                        }
                        units[selectedindex].mana-=50;
                        $("#ORB" + selectedindex).remove();
                        $('#' + selectedindex).append('<img style="position: absolute; margin-top:40px; margin-left:-30px; width:48px; height:35px" src="Pictures/Orb.gif" /><div id = "ORB' + selectedindex + '" style="color: yellow; position: absolute; font-size:17px; margin-top:-27px; margin-left:50px; width:10px; height:10px ">' + units[selectedindex].mana +'</div>');
                        for (var j = 0; j < index; j++) {
                            if (units[j].index === parseInt(temp3,10)) {
                                allyindex = j;
                            }};

                        $("#TEXT").append("<p>" + units[selectedindex].name + " boosted the attack and defenses of " + units[allyindex].name + "\n</p>");
                        units[selectedindex].usedaction = true;
                        Cleanse.play();
                        units[allyindex].attacktempboost+=units[allyindex].attack;
                        units[allyindex].defensetempboost+= 1000;
                        turngray();
                    }
                    if(e.options[e.selectedIndex].value==="Replenish(100)") {
                        if(units[selectedindex].mana<100){
                            message("She requires at least 100 mana to use replenish");
                            return;
                        }
                        units[selectedindex].mana-=100;
                        $("#ORB" + selectedindex).remove();
                        $('#' + selectedindex).append('<img style="position: absolute; margin-top:40px; margin-left:-30px; width:48px; height:35px" src="Pictures/Orb.gif" /><div id = "ORB' + selectedindex + '" style="color: yellow; position: absolute; font-size:17px; margin-top:-27px; margin-left:50px; width:10px; height:10px ">' + units[selectedindex].mana +'</div>');
                        var temp3=this.id;
                        for (var j = 0; j < index; j++) {
                            if (units[j].index === parseInt(temp3,10)) {
                                allyindex = j;
                            }};        temp3=temp3.replace("E","");
                        if(units[allyindex].type==="Soldier" || units[allyindex].type==="Thief" || units[allyindex].type==="Mage" || units[allyindex].type==="Enchantress"){
                            message("You can not replenish this unit.");
                            return;
                        }
                        if(units[allyindex].type==="Archer"){
                            units[allyindex].usedexploding=units[allyindex].arrowcapacity;
                            units[allyindex].usedpierce=units[allyindex].arrowcapacity;
                            units[allyindex].usedtitan=units[allyindex].arrowcapacity;
                            units[allyindex].usedimmobolize=units[allyindex].arrowcapacity;
                            message("She replenished the unit's arrows.")
                        }
                        if(units[allyindex].type==="Templar"){
                            units[allyindex].usedsilence=units[allyindex].arrowcapacity;
                            units[allyindex].usedburst=units[allyindex].arrowcapacity;
                            units[allyindex].useddisrupt=units[allyindex].arrowcapacity;
                            units[allyindex].usedgrappling=units[allyindex].arrowcapacity;
                            message("She replenished the unit's arrows.")
                        }
                        if(units[allyindex].type==="Rouge"){
                            units[allyindex].usedblindness=units[allyindex].arrowcapacity;
                            units[allyindex].usedenfeeble=units[allyindex].arrowcapacity;
                            units[allyindex].usedsleep=units[allyindex].arrowcapacity;
                            units[allyindex].usedpoison=units[allyindex].arrowcapacity;
                            message("She replenished the unit's arrows.")
                        }

                        if(units[allyindex].type==="Guard"){
                            units[allyindex].energy+=40;
                            $("#EB" + allyindex).remove();
                            $("#" + allyindex).append('<div class="energybar" id ="EB'+ units[allyindex].index + '"style="width: ' + (units[allyindex].power) + '%"></div>');
                            message("She replenished the unit's shield.")
                        }
                        if(units[allyindex].type==="Knight"){
                            units[allyindex].energy+=60;
                            $("#EB" + allyindex).remove();
                            $("#" + allyindex).append('<div class="energybar" id ="EB'+ units[allyindex].index + '"style="width: ' + (units[allyindex].energy) + '%"></div>');
                            message("She replenished the unit's energy.")
                        }
                        if(units[allyindex].type==="Healer"){
                            units[allyindex].power+=50;
                            $("#EB" + allyindex).remove();
                            $("#" + allyindex).append('<div class="energybar" id ="EB'+ units[allyindex].index + '"style="width: ' + (units[allyindex].energy) + '%"></div>');
                            message("She replenished the unit's power.")
                        }
                        if(units[allyindex].type==="Wizard"){
                            units[allyindex].charge+=3;
                            $("#ORB" + + units[allyindex].index).remove();
                            $('#' + allyindex).append('<div id = "ORB' + units[allyindex].index + '" style="color: yellow; position: absolute; font-size:20px; margin-top:-30px; margin-left:55px; width:10px; height:10px ">' + units[allyindex].charge +'</div>');
                            message("She gave the mage 3 charge.")
                        }
                        if(units[allyindex].type==="Sorcerer"){
                            sorcerermana+=10;
                            $("#EB" + allyindex).remove();
                            $("#" + allyindex).append('<div class="manabar" id ="EB'+ units[allyindex].index + '"style="width: ' + (sorcerermana) + '%"></div>');
                            message("She gave the sorcerer 10 mana.")
                        }

                        units[selectedindex].usedaction = true;
                        Cleanse.play();
                        turngray();
                    }

                }

            }
        });
    }
    function levelup(index) {
        units[slots[index]].experience += curexperience;
        if (units[slots[index]].experience >= 1000) {
            units[slots[index]].experience -= 1000;
            units[slots[index]].level += 1;
            if(units[slots[index]].type==="Soldier" || units[slots[index]].type==="Guard" || units[slots[index]].type==="Knight"){
                units[slots[index]].health+=15;
                units[slots[index]].maxhealth+=15;
            }
            if(units[slots[index]].type==="Mage" || units[slots[index]].type==="Rouge" || units[slots[index]].type==="Thief" || units[slots[index]].type==="Archer"){
                units[slots[index]].health+=10;
                units[slots[index]].maxhealth+=10;
            }
            if(units[slots[index]].type==="Templar" || units[slots[index]].type==="Wizard" || units[slots[index]].type==="Sorcerer" || units[slots[index]].type==="Healer" || units[slots[index]].type==="Enchantress"){
                units[slots[index]].health+=5;
                units[slots[index]].maxhealth+=5;
            }

            if(units[slots[index]].type==="Soldier"){
                switch(units[slots[index]].level){
                    case 2:
                        units[slots[index]].abilitydash=true;
                        $("#TEXT").append("<p>The Soldier learned 'DASH'. He can now move an extra space as his action for the turn.</p>");
                        break;
                    case 3:
                        units[slots[index]].abilityimmunity=true;
                        $("#TEXT").append("<p>The Soldier learned 'IMMUNITY'. He's now immune to all ailments.</p>");
                        break;
                    case 4:
                        units[slots[index]].abilitysteadfast=true;
                        $("#TEXT").append("<p>The Soldier learned 'STEADFAST'. If damage would kill him, it reduces it to one instead.</p>");
                        break;
                    case 5:
                        units[slots[index]].abilitymedkit=true;
                        units[slots[index]].medkit=true;
                        $("#TEXT").append("<p>The Soldier learned 'MEDKIT'. Use this to fully restore soldier's health. Soldier will refill medkit when he visits the hospital.</p>");
                        break;
                    case 6:
                        units[slots[index]].abilitycounter=true;
                        $("#TEXT").append("<p>The Soldier learned 'COUNTER'. If an adjacent enemy damages the soldier, he will hit a portion of that damage back.</p>");
                        break;
                }
            }
            if(units[slots[index]].type==="Knight"){
                switch(units[slots[index]].level){
                    case 2:
                        units[slots[index]].abilityswirl=true;
                        $("#TEXT").append("<p>The Knight learned 'SWIRL'. Use this special to attack all adjacent enemies around him.</p>");
                        break;
                    case 3:
                        units[slots[index]].abilitysweep=true;
                        $("#TEXT").append("<p>The Knight learned 'SWEEP'. Use it to attack an enemy and the enemies beside it.</p>");
                        break;
                    case 4:
                        units[slots[index]].abilityfreemove=true;
                        $("#TEXT").append("<p>The Knight learned 'FREE MOVE'. Moving no longer takes energy.</p>");
                        break;
                    case 5:
                        units[slots[index]].abilitypiercer=true;
                        $("#TEXT").append("<p>The Knight learned 'PIERCER'. Use this special to do damage that ignores defenses.</p>");
                        break;
                    case 6:
                        units[slots[index]].abilityreact=true;
                        $("#TEXT").append("<p>The Knight learned 'REACT'. Any enemy that moves next to the Knight will be attacked.</p>");
                        break;
                }
            }
            if(units[slots[index]].type==="Thief"){
                switch(units[slots[index]].level){
                    case 2:
                        units[slots[index]].abilityinvisible=true;
                        $("#TEXT").append("<p>The Thief learned 'INVISIBLE'. Enemies will ignore him while invisible, but he will lose invisibility for a turn if he attacks..</p>");
                        break;
                    case 3:
                        units[slots[index]].abilitydodge=true;
                        $("#TEXT").append("<p>The Thief learned 'DODGE'. Thief has a chance to dodge an attack. Higher the damage, the more likely he will be able to dodge.</p>");
                        break;
                    case 4:
                        units[slots[index]].abilitybackstab=true;
                        $("#TEXT").append("<p>The Thief learned 'BACKSTAB'. Attacks from behind the enemy are double damage.</p>");
                        break;
                    case 5:
                        units[slots[index]].abilityfirstblow=true;
                        $("#TEXT").append("<p>The Thief learned 'FIRSTBLOW'. Attacks on an undamaged enemy will inflict blindness for two turns.</p>");
                        break;
                    case 6:
                        units[slots[index]].abilitybettersteal=true;
                        $("#TEXT").append("<p>The Thief learned 'BETTERSTEAL'. He will have 100% success at stealing.</p>");
                        break;
                }
            }

            if(units[slots[index]].type==="Guard"){
                switch(units[slots[index]].level){
                    case 2:
                        units[slots[index]].abilityprotect=true;
                        $("#TEXT").append("<p>The Guard learned 'PROTECT'. Use it on an ally, and for the rest of the battle, all damage will be redirected to the guard.</p>");
                        break;
                    case 3:
                        units[slots[index]].abilityimmunity=true;
                        $("#TEXT").append("<p>The Guard learned 'IMMUNITY'. Guard, and whomever the guard is protecting, are immune to all ailments.</p>");
                        break;
                    case 4:
                        units[slots[index]].abilityscout=true;
                        $("#TEXT").append("<p>The Guard learned 'SCOUT'. Groups with the guard will always go first.</p>");
                        break;
                    case 5:
                        units[slots[index]].abilityreshield=true;
                        $("#TEXT").append("<p>The Guard learned 'RESHIELD'. Use to gain 10 to the shield.</p>");
                        break;
                    case 6:
                        units[slots[index]].abilityincreaseenergy=true;
                        $("#TEXT").append("<p>The Guard learned 'INCREASE SHIELD'. Starting shield is doubled.</p>");
                        break;
                }
            }
            if(units[slots[index]].type==="Enchantress"){
                switch(units[slots[index]].level){
                    case 2:
                        units[slots[index]].abilitystorm=true;
                        $("#TEXT").append("<p>The Enchantress learned 'STORM'. It summons a storm cloud that helps for the rest of the battle. Costs 30 mana</p>");
                        break;
                    case 3:
                        units[slots[index]].abilitytorment=true;
                        $("#TEXT").append("<p>The Enchantress learned 'TORMENT'. Use to give an enemy sleep, poison, and enfeeble for 2 turns. Costs 50 mana.</p>");
                        break;
                    case 4:
                        units[slots[index]].abilitytransform=true;
                        $("#TEXT").append("<p>The Enchantress learned 'TRANSFORM'. Enchantress transforms into a golem for the rest of the battle. Costs 100 mana.</p>");
                        break;
                    case 5:
                        units[slots[index]].abilitybestow=true;
                        $("#TEXT").append("<p>The Enchantress learned 'Bestow'. Uses to double the attack, and make invincible an ally for a turn. Costs 50 mana</p>");
                        break;
                    case 6:
                        units[slots[index]].abilityreplenish=true;
                        $("#TEXT").append("<p>The Enchantress learned 'Replenish'. Use it on an ally to restore arrows, charge, energy, or power. Costs 100 mana</p>");
                        break;
                }
            }
            if(units[slots[index]].type==="Healer"){
                switch(units[slots[index]].level){
                    case 2:
                        units[slots[index]].abilitymove=true;
                        $("#TEXT").append("<p>The Healer learned 'RESTORE MOVE'. Vigor now also allows ally to move again.</p>");
                        break;
                    case 3:
                        units[slots[index]].abilityheal=true;
                        $("#TEXT").append("<p>The Healer learned 'HEAL'. Use it on an ally to restore 60 health.</p>");
                        break;
                    case 4:
                        units[slots[index]].abilityreach=true;
                        $("#TEXT").append("<p>The Healer learned 'REACH'. She can use vigor and heal on any unit regardless of location.</p>");
                        break;
                    case 5:
                        units[slots[index]].abilitycleanse=true;
                        $("#TEXT").append("<p>The Healer learned 'CLEANSE'. Vigor and Heal also remove all ailments.</p>");
                        break;
                    case 6:
                        units[slots[index]].abilitydoublevigor=true;
                        $("#TEXT").append("<p>The Healer learned 'DOUBLE VIGOR'. Vigor now affects both other allies.</p>");
                        break;
                }
            }

            if(units[slots[index]].type==="Mage"){
                switch(units[slots[index]].level){
                    case 2:
                        units[slots[index]].abilityzap=true;
                        $("#TEXT").append("<p>The Mage learned 'ZAP'. Deals lightning, magic damage to one or two enemy up to two linear spaces away.</p>");
                        break;
                    case 3:
                        units[slots[index]].abilityfreeze=true;
                        $("#TEXT").append("<p>The Mage learned 'FREEZE'.  Deals ice, magic damage to one enemy up to three linear spaces away.</p>");
                        break;
                    case 4:
                        units[slots[index]].abilityelementalailments=true;
                        $("#TEXT").append("<p>The Mage learned 'ADDED AILMENTS'. Ice may cause sleep, fire blindness, and lightning immobolize.</p>");
                        break;
                    case 5:
                        units[slots[index]].abilitypain=true;
                        $("#TEXT").append("<p>The Mage learned 'PAIN'. Deals damage equal to her attack plus the enemy's attack to an adjacent enemy.</p>");
                        break;
                    case 6:
                        units[slots[index]].abilitydoubletap=true;
                        $("#TEXT").append("<p>The Mage learned 'DOUBLETAP'. Mage may do another action instead of moving.</p>");
                        break;
                }
            }
            if(units[slots[index]].type==="Wizard"){
                switch(units[slots[index]].level){
                    case 2:
                        units[slots[index]].abilitybolt =true;
                        $("#TEXT").append("<p>The Wizard learned 'BOLT'. Deals 2X lightning, magic damage to any enemy for 3 charge.</p>");
                        break;
                    case 3:
                        units[slots[index]].abilitymissile=true;
                        $("#TEXT").append("<p>The Wizard learned 'MISSILE'. Deals fire, magic damage times the current charge to any enemy.</p>");
                        break;
                    case 4:
                        units[slots[index]].abilityelementalailments=true;
                        $("#TEXT").append("<p>The Wizard learned 'ELEMENTAL AILMENTS'. Ice may cause sleep, fire blindness, and lightning immobolize.</p>");
                        break;
                    case 5:
                        units[slots[index]].abilitydrain=true;
                        $("#TEXT").append("<p>The Wizard learned 'DRAIN'. Use it on an adjacent enemy to completely drain it's charge and give it to the wizard.</p>");
                        break;
                    case 6:
                        units[slots[index]].abilitystartcharge=true;
                        $("#TEXT").append("<p>The Wizard learned 'START CHARGE'. Starts with 3 charge.</p>");
                        break;
                }
            }
            if(units[slots[index]].type==="Sorcerer"){
                switch(units[slots[index]].level){
                    case 2:
                        units[slots[index]].abilitylightning=true;
                        $("#TEXT").append("<p>The Sorcerer learned 'LIGHTNING'. Deals 2X lightning, magic damage.</p>");
                        break;
                    case 3:
                        units[slots[index]].abilityfireblast=true;
                        $("#TEXT").append("<p>The Sorcerer learned 'FIREBLAST'. Deals 2X fire, magic damage to any enemy and 1X fire, magic damage to all adjacent enemies.</p>");
                        break;
                    case 4:
                        units[slots[index]].abilitymanaincrease=true;
                        sorcererincrease=2;
                        $("#TEXT").append("<p>The Sorcerer learned 'POWER INCREASE'. Daily increase of Power is doubled.</p>");
                        break;
                    case 5:
                        units[slots[index]].abilityslumber=true;
                        $("#TEXT").append("<p>The Sorcerer learned 'SLUMBER'. Puts all enemies to sleep.</p>");
                        break;
                    case 6:
                        units[slots[index]].abilitydeath=true;
                        $("#TEXT").append("<p>The Sorcerer learned 'DEATH'. Instantly kills an enemy.</p>");
                        break
                }
            }

            if(units[slots[index]].type==="Archer"){
                switch(units[slots[index]].level){
                    case 2:
                        units[slots[index]].abilityexplosion=true;
                        $("#TEXT").append("<p>The Archer learned 'EXPLODING ARROW'. Deals physical, fire damage to any enemy and all enemies adjacent to it.</p>");
                        break;
                    case 3:
                        units[slots[index]].abilitypierce=true;
                        $("#TEXT").append("<p>The Archer learned 'PIERCING ARROW'. Deals damage to enemy ignoring defenses.</p>");
                        break;
                    case 4:
                        units[slots[index]].abilityimmobolize=true;
                        $("#TEXT").append("<p>The Archer learned 'IMMOBOLIZED ARROW'. Inflicts immobolized onto enemy. It can't move for two turns.</p>");
                        break;
                    case 5:
                        units[slots[index]].abilitytitan=true;
                        $("#TEXT").append("<p>The Archer learned 'TITAN ARROW'. Deals 2X damage.</p>");
                        break;
                    case 6:
                        units[slots[index]].abilitydoublearrows=true;
                        units[slots[index]].arrowcapacity=2;
                        $("#TEXT").append("<p>The Archer learned 'DOUBLE ARROWS'. Starts with 2 arrows instead of 1.</p>");
                        break;
                }
            }
            if(units[slots[index]].type==="Rouge"){
                switch(units[slots[index]].level){
                    case 2:
                        units[slots[index]].abilityblindness =true;
                        $("#TEXT").append("<p>The Rouge learned 'BLINDNESS'. Inflicts blindness onto enemy for two turns, making it so it can't attack.</p>");
                        break;
                    case 3:
                        units[slots[index]].abilityenfeeble=true;
                        $("#TEXT").append("<p>The Rouge learned 'ENFEEBLE'. Inflicts enfeeble onto enemy for 2 turns. While enfeebled, all damage to it will ignore defenses and resistance.</p>");
                        break;
                    case 4:
                        units[slots[index]].abilitysleep=true;
                        $("#TEXT").append("<p>The Rouge learned 'SLEEP'. Inflicts sleep onto enemy for one turn. It skips it's turn while asleep.</p>");
                        break;
                    case 5:
                        units[slots[index]].abilityailmentduration=true;
                        units[slots[index]].duration=1;
                        $("#TEXT").append("<p>The Rouge learned 'AILMENT DURATION'. All ailments from the rouge with last an extra turn.</p>");
                        break;
                    case 6:
                        units[slots[index]].abilitydoublearrows=true;
                        units[slots[index]].arrowcapacity=2;
                        $("#TEXT").append("<p>The Rouge learned 'DOUBLE ARROWS'. Starts with 2 arrows instead of 1.</p>");
                        break;
                }
            }
            if(units[slots[index]].type==="Templar"){
                switch(units[slots[index]].level){
                    case 2:
                        units[slots[index]].abilitygrapplinghook=true;
                        $("#TEXT").append("<p>The Templar learned 'GRAPPLING HOOK ARROW'. Pulls an enemy to the templar.</p>");
                        break;
                    case 3:
                        units[slots[index]].abilityelemental=true;
                        $("#TEXT").append("<p>The Templar learned 'ELEMENTAL'. You can choose an element to apply to the templar's attacks.</p>");
                        break;
                    case 4:
                        units[slots[index]].abilitydisrupt=true;
                        $("#TEXT").append("<p>The Templar learned 'DISRUPTING ARROW'. Removes all charge from all enemies.</p>");
                        break;
                    case 5:
                        units[slots[index]].abilityburst=true;
                        $("#TEXT").append("<p>The Templar learned 'BURST ARROW'. Deals damage equal to it's attack plus the enemy's resistance.</p>");
                        break;
                    case 6:
                        units[slots[index]].abilitydoublearrows=true;
                        units[slots[index]].arrowcapacity=2;
                        $("#TEXT").append("<p>The Templar learned 'DOUBLE ARROWS'. Starts with 2 arrows instead of 1.</p>");
                        break;
                }
            }
        }
        if(units[slots[index]].level===6 || units[slots[index]].level==="-"){
            units[slots[index]].experience = 0;
            units[slots[index]].level="-";
            return;
        }
    }

function clickactionbuttons(){
    $('.actionbutton').click(function () {
        $('*').removeClass('battlehighlight');
        $(this).addClass('battlehighlight');
        selectedaction = $(this).attr('id');
        if (selectedaction === "wizardCharge") {
            $("#TEXT").empty();
            if (units[selectedindex].usedaction === true) {
                $("#TEXT").append("<p>" + units[selectedindex].name + " has already used an action this turn</p>");
                return;
            }
            $('.selectedUnit').effect("pulsate","fast");
            Chargesound.play();
            $("#TEXT").append("<p>" + units[selectedindex].name + "'s charge increased to  " + units[selectedindex].charge + "\n</p>");
            units[selectedindex].usedaction = true;
            units[selectedindex].charge+=1;
                $("#ORB" + + units[selectedindex].index).remove();
                $('#' + selectedindex).append('<div id = "ORB' + units[selectedindex].index + '" style="color: yellow; position: absolute; font-size:20px; margin-top:-30px; margin-left:55px; width:10px; height:10px ">' + units[selectedindex].charge +'</div>');
        }
        if (selectedaction === "Use") {
            var e = document.getElementById("alchemychoice");
            if(e.options[e.selectedIndex].value==="Angel") {
                $("#TEXT").empty();
                if(angelrest>0){
                    $("#TEXT").append("The angel still has to rest for another " + angelrest + " days.")
                    return;
                }

                if (units[selectedindex].usedaction === true) {
                    $("#TEXT").append("<p>" + units[selectedindex].name + " has already used an action this turn</p>");
                    return;
                }
                $("#battlebackground").append("<img class='totalbackground' src='Pictures/Enemies/Angel.gif' />");
                $(".totalbackground").fadeOut(4000);
                    $("#TEXT").append("The Angel did healed all your allies, and must now rest for 8 days.");
                    angelrest=8;
                for(var i = 1;i<4;i++){
                    if(units[slots[i]].alive===true){
                        units[slots[i]].health+=100;
                        if(units[slots[i]].health>units[slots[i]].maxhealth){units[slots[i]].health=units[slots[i]].maxhealth}
                        ADamaging(slots[i],100);
                    }
                }

            }
            if(e.options[e.selectedIndex].value==="Djinn") {
                $("#TEXT").empty();
                if(djinnrest>0){
                    $("#TEXT").append("The djinn still has to rest for another " + djinnrest + " days.")
                    return;
                }
                $(".button").remove();
                if (units[selectedindex].usedaction === true) {
                    $("#TEXT").append("<p>" + units[selectedindex].name + " has already used an action this turn</p>");
                    return;
                }
                units[selectedindex].usedaction = true;
                $("#" + selectedindex).remove();
                units[index]=new ADjinn(index,selectedindex);
                units[index-1].owner=selectedindex;
                if(units[selectedindex].abilitysummon===true){
                    djinnrest=4;
                } else {
                    djinnrest=8;
                }
                if (slots[1] === selectedindex) {
                    var templeft = units[slots[1]].curleft;
                    var temptop = units[slots[1]].curtop;
                    slots[1] = index-1;
                    units[slots[1]].curleft = templeft;
                    units[slots[1]].curtop = temptop;
                    $('#battlebackground').append('<div STYLE="position:absolute; TOP:' + temptop + 'px; LEFT:' + templeft + 'px;" class="unit"  id="' + slots[1] + '" ><img src="' + units[slots[1]].image + '"/></div>');
                    $('#' + slots[1]).append('<div class="healthbar" id = "HB' + slots[1] + '" style="width: ' + (units[slots[1]].health / units[slots[1]].maxhealth) * 100 + '%"></div>');
                }
                if (slots[2] === selectedindex) {
                    var templeft = units[slots[2]].curleft;
                    var temptop = units[slots[2]].curtop;
                    slots[2] = index-1;
                    units[slots[2]].curleft = templeft;
                    units[slots[2]].curtop = temptop;
                    $('#battlebackground').append('<div STYLE="position:absolute; TOP:' + temptop + 'px; LEFT:' + templeft + 'px;" class="unit"  id="' + slots[2] + '" ><img src="' + units[slots[2]].image + '"/></div>');
                    $('#' + slots[2]).append('<div class="healthbar" id = "HB' + slots[2] + '" style="width: ' + (units[slots[2]].health / units[slots[2]].maxhealth) * 100 + '%"></div>');
                }
                if (slots[3] === selectedindex) {
                    var templeft = units[slots[3]].curleft;
                    var temptop = units[slots[3]].curtop;
                    slots[3] = index-1;
                    units[slots[3]].curleft = templeft;
                    units[slots[3]].curtop = temptop;
                    $('#battlebackground').append('<div STYLE="position:absolute; TOP:' + temptop + 'px; LEFT:' + templeft + 'px;" class="unit"  id="' + slots[3] + '" ><img src="' + units[slots[3]].image + '"/></div>');
                    $('#' + slots[3]).append('<div class="healthbar" id = "HB' + slots[3] + '" style="width: ' + (units[slots[3]].health / units[slots[3]].maxhealth) * 100 + '%"></div>');
                }
                getstatsbattle();

            }
        }

        if (selectedaction === "Escape") {
            $("#TEXT").empty();
            if(units[selectedindex].type==="Djinn"){
                $("#TEXT").append("The Djinn can't escape!");
                return;
            }
            if(units[selectedindex].type==="Golem"){
                units[selectedindex].type==="Enchantress"
            }
            if (units[selectedindex].usedaction === true) {
                $("#TEXT").append("<p>" + units[selectedindex].name + " has already used an action this turn</p>");
                return;
            }
            $("#TEXT").append("<p>" + units[selectedindex].name + " escaped and will return to the capitol in 5 days.\n</p>");
            units[selectedindex].enroute=5;
            $("#" + selectedindex).remove();
            units[selectedindex].group=0;
            if(units[selectedindex].abilityprotect===true){
                units[slots[1]].protectedby=-1;
                units[slots[2]].protectedby=-1;
                units[slots[3]].protectedby=-1;
                showailments();
            }
            if(slots[1]===selectedindex){
                slots[1]=-1;
            }
            if(slots[2]===selectedindex){
                slots[2]=-1;
            }
            if(slots[3]===selectedindex){
                slots[3]=-1;
            }
            if (units[slots[1]].alive === false && units[slots[2]].alive === false && units[slots[3]].alive === false) {
                $("#TEXT").empty;
                $("#battlebackground").remove();
                $("#M"+curally).remove();
                $("#space" + groups[curally].location).data("filled",0);
                groups[curally].location=-1;

                $(".actionbutton").remove();
                battleon=false;
                $('.actions').append("<div class = 'actionbutton' id='Pass'><p>Pass</p></div>");
                presspass();
                startcombat();
            }//end of loses battle
        }
        if(selectedaction==="enchantressUse") {
            var e = document.getElementById("enchantresschoice");
            if (e.options[e.selectedIndex].text === "Transform(100)" && units[selectedindex].usedaction === false) {
          $("#" + selectedindex + " img").attr("src","Pictures/Enemies/golem.gif");
                units[selectedindex].type="Golem";
                units[selectedindex].attacktempboost= units[selectedindex].attack * 8;
                units[selectedindex].defensetempboost=20;
            }
        }
        if(selectedaction==="soldierAttack") {
            var e = document.getElementById("soldierchoice");
            if (e.options[e.selectedIndex].text === "Medkit" && units[selectedindex].usedaction === false && units[selectedindex].medkit===true) {
                var gain = units[selectedindex].maxhealth-units[selectedindex].health;
                units[selectedindex].health=units[selectedindex].maxhealth;
                units[selectedindex].medkit=false;
                ADamaging(selectedindex,gain);
                selectedaction="";
                units[selectedindex].usedaction = true;
            }
        }
        if(selectedaction==="guardUse") {
            var e = document.getElementById("guardchoice");
            if (e.options[e.selectedIndex].text === "Reshield" && units[selectedindex].usedaction === false) {
                units[selectedindex].energy+=10;
                selectedaction="";
                units[selectedindex].usedaction = true;
                $("#EB" + units[selectedindex].index).remove();
                $("#" + selectedindex).append('<div class="energybar" id ="EB'+ units[selectedindex].index + '"style="width: ' + units[selectedindex].energy + '%"></div>');
            }
        }
        function youlose() {
            if (units[slots[1]].health <= 0) {
                units[slots[1]].alive = false;
            }//not sure why i need this, but do
            if (units[slots[1]].alive === false && units[slots[2]].alive === false && units[slots[3]].alive === false) {
                $("#TEXT").empty;
                $("#battlebackground").remove();
                $("#M" + curally).remove();
                $("#space" + groups[curally].location).data("filled", 0);
                groups[curally].location = -1;

                $(".actions").empty();
                battleon = false;
                $('.actions').append("<div class = 'actionbutton' id='Pass'><p>Pass</p></div>");
                presspass();
            }
        }
        function ADamaging(index,damage) {
            var temp = "#" + index;
            var tempbar="#HB" + index;
            $(tempbar).remove();
            $(temp).append('<div class="healthbar" id ="HB'+ units[index].index + '"style="width: ' + (units[index].health/units[index].maxhealth)*100 + '%"></div>');
            $(temp).append('<p class="damage" style="position: absolute; font-size:40px; margin-top:-70px; margin-left:30px; color:green ">' + damage + '</p>');
            $(".damage").delay(1000).effect("puff");
        }

        if(units[selectedindex].moved===true && units[selectedindex].usedaction===true){
            $('#' + selectedindex).addClass("grayicon");}
        if(units[selectedindex].moved===true || units[selectedindex].usedaction===true){
            $('#' + selectedindex).addClass("lighticon");}
    });//end of .button click event

}

    //Bad guy's turn//////////////////////////////////////////////////////////////////////////////////////////
    function passturnbutton(){
        $('.actionbutton').click(function () {
            enemyturn($(this).attr('id'));
        })//end of action button
    }
var damagenum=0;
    var curenemyleft=0;
    var curenemytop=0;
function enemyturn(selectedactions){

    $('*').removeClass("selectedUnit");
    $('*').removeClass('battlehighlight');
    $(this).addClass('battlehighlight');
    selectedaction = selectedactions;
    if (selectedaction === "PassTurn") {

        //reset allies
        $("#TEXT").empty();
        for (var i = 0; i < index; i++) {
            if(units[i].type==="Knight" && units[i].moved===false && units[i].usedaction===false){
                units[i].energy+=60;

                    if(units[i].energy>100){
                        units[i].energy=100
                    }


                $("#EB" + units[i].index).remove();
                $("#" + i).append('<div class="energybar" id ="EB'+ units[i].index + '"style="width: ' + units[i].energy + '%"></div>');
            }
            if(units[i].sleep>0){
                units[i].sleep-=1
            }
            if(units[i].poison>0){
                units[i].health-=10;
                if(units[i].health<0){
                    units[i].health=1;
                }
                units[i].poison-=1
                $("#HB" + i).remove();
                $("#" + i).append('<div class="healthbar" id ="HB'+ units[i].index + '"style="width: ' + (units[i].health/units[i].maxhealth)*100 + '%"></div>');
            }
            if(units[i].immobilized>0){
                units[i].immobilized-=1
            }
            if(units[i].blind>0){
                units[i].blind-=1
            }
            if(units[i].silenced>0){
                units[i].silenced-=1
            }
            units[i].moved = false;
            units[i].usedaction = false;
            if(units[i].abilitybuildenergy){
                units[i].energy+=5;
                $("#EB" + i).remove();
                $("#" + i).append('<div class="energybar" id ="EB' + units[i].index + '"style="width: ' + (units[i].energy) + '%"></div>');
            }
            $('#' + i).removeClass("grayicon");
            $('#' + i).removeClass("lighticon");
            $('*').removeClass('highlight');
        }
        for (var i = 0; i < Eindex; i++) {
            if(Eunits[i].poison>0){
                Eunits[i].health-=10;
                if(Eunits[i].health<=0){
                    Eunits[i].health=1;
                }
                Eunits[i].poison-=1;
                $("#EHB" + i).remove();
                $("#E" + i).append('<div class="healthbar" id ="EHB'+ Eunits[i].index + '"style="width: ' + (Eunits[i].health/Eunits[i].maxhealth)*100 + '%"></div>');
            }
            if(Eunits[i].enfeeble>0){
                Eunits[i].enfeeble-=1;
            }
        }
        $('.battleactions').empty();

        // Enemy's turns
        var curenemynum=1;
        if (Eslots[2]!==-1){
            curenemynum=2
        }
        if (Eslots[3]!==-1){
            curenemynum=3
        }
        if (Eslots[4]!==-1){
            curenemynum=4
        }
        if (Eslots[5]!==-1){
            curenemynum=5
        }
        //enemies turns/////////////////////////////////////////////////////
        for (var y = 1; y < curenemynum+1; y++) {

            Eunits[Eslots[y]].moved=false;
            //righthere
            if(Eunits[Eslots[y]].sleep===0) {
                //here
                if (Eunits[Eslots[y]].alive === true) {

                    var belowempty = true;
                    var leftempty = true;
                    var rightempty = true;
                    var upempty = true;
                    var enemyonright = "";
                    var enemyontop = "";
                    var enemyonleft = "";
                    var enemyonbottom = "";
                    var enemyonright2 = "";
                    var enemyontop2 = "";
                    var enemyonleft2 = "";
                    var enemyonbottom2 = "";
                    var enemyonright2index = -1;
                    var enemyontop2index = -1;
                    var enemyonleft2index = -1;
                    var enemyonbottom2index = -1;
                    var enemyonrightindex = -1;
                    var enemyontopindex = -1;
                    var enemyonleftindex = -1;
                    var enemyonbottomindex = -1;
                    var attackthisone = -1;
                    var row1empty=true;
                    var row2empty=true;
                    var row3empty=true;
                    var row4empty=true;
                    var row5empty=true;

                    //determine enemy's image
                    $('*').removeClass("selected");
                    $("#E" + Eunits[Eslots[y]].index).addClass("selected");
                    //Determine if below is empty

                    belowempty=true;
                    for (var x = 1; x < 4; x++) {
                        if ((((units[slots[x]].curtop - 100) === Eunits[Eslots[y]].curtop && (units[slots[x]].curleft === Eunits[Eslots[y]].curleft)&& units[slots[x]].alive===true && units[slots[x]].type!="Invisible") || Eunits[Eslots[y]].curtop > 350)) {
                            belowempty = false;
                        }
                    }
                    for (var x = 1; x < 6; x++) {
                        if ((((Eunits[Eslots[x]].curtop - 100) === Eunits[Eslots[y]].curtop && (Eunits[Eslots[x]].curleft === Eunits[Eslots[y]].curleft) && Eunits[Eslots[x]].alive===true) || Eunits[Eslots[y]].curtop > 350)) {
                            belowempty = false;
                        }
                    }

                    //Determine if above is empty
                    for (var x = 1; x < 4; x++) {
                        if ((((units[slots[x]].curtop + 100) === Eunits[Eslots[y]].curtop) && (units[slots[x]].curleft === Eunits[Eslots[y]].curleft) && units[slots[x]].alive===true && units[slots[x]].type!="Invisible") || Eunits[Eslots[y]].curtop < 50) {
                            upempty = false;
                        }
                    }
                    for (var x = 1; x < 6; x++) {
                        if ((((Eunits[Eslots[x]].curtop + 100) === Eunits[Eslots[y]].curtop) && (Eunits[Eslots[x]].curleft === Eunits[Eslots[y]].curleft) && Eunits[Eslots[x]].alive===true) || Eunits[Eslots[y]].curtop < 50) {
                            upempty = false;
                        }
                    }

                    //Determine if left is empty
                    for (var x = 1; x < 4; x++) {
                        if ((((units[slots[x]].curleft + 100) === Eunits[Eslots[y]].curleft) && (units[slots[x]].curtop === Eunits[Eslots[y]].curtop)&& units[slots[x]].alive===true && units[slots[x]].type!="Invisible") || Eunits[Eslots[y]].curleft < 50) {
                            leftempty = false;
                        }
                    }
                    for (var x = 1; x < 6; x++) {
                        if ((((Eunits[Eslots[x]].curleft + 100) === Eunits[Eslots[y]].curleft) && (Eunits[Eslots[x]].curtop === Eunits[Eslots[y]].curtop) && Eunits[Eslots[x]].alive===true) || Eunits[Eslots[y]].curleft < 50) {
                            leftempty = false;
                        }
                    }

                    //Determine if right is empty
                    for (var x = 1; x < 4; x++) {
                        if ((((units[slots[x]].curleft - 100) === Eunits[Eslots[y]].curleft) && (units[slots[x]].curtop === Eunits[Eslots[y]].curtop) && units[slots[x]].alive===true && units[slots[x]].type!="Invisible") || Eunits[Eslots[y]].curleft > 350) {
                            rightempty = false;
                        }
                    }
                    for (var x = 1; x < 6; x++) {
                        if ((((Eunits[Eslots[x]].curleft - 100) === Eunits[Eslots[y]].curleft) && (Eunits[Eslots[x]].curtop === Eunits[Eslots[y]].curtop) && Eunits[Eslots[x]].alive===true) || Eunits[Eslots[y]].curleft > 350) {
                            rightempty = false;
                        }
                    }
                    //determine if row5 is empty
                    for (var x = 1;x<slots.length;x++){
                        if(units[slots[x]].curtop===485){
                            row5empty=false;
                        }
                        if(units[slots[x]].curtop===385){
                            row4empty=false;
                        }
                        if(units[slots[x]].curtop===285){
                            row3empty=false;
                        }
                        if(units[slots[x]].curtop===185){
                            row2empty=false;
                        }
                        if(units[slots[x]].curtop===85){
                            row1empty=false;
                        }
                    }
                    function findenemy() {
                        enemyonbottomindex=-1;
                        enemyontopindex=-1;
                        enemyonleftindex=-1;
                        enemyonrightindex=-1;
                        for (var x = 1; x < 4; x++) {
                            if (units[slots[x]].alive === true && units[slots[x]].type != "Invisible") {

                                if ((units[slots[x]].curtop - 100) === Eunits[Eslots[y]].curtop && units[slots[x]].curleft === Eunits[Eslots[y]].curleft) {
                                    enemyonbottom = units[slots[x]].type;
                                    enemyonbottomindex = slots[x];
                                }
                                if ((units[slots[x]].curtop - 200) === Eunits[Eslots[y]].curtop && units[slots[x]].curleft === Eunits[Eslots[y]].curleft) {
                                    enemyonbottom2 = units[slots[x]].type;
                                    enemyonbottom2index = slots[x];
                                }

                                //if above

                                if (((units[slots[x]].curtop + 100) === Eunits[Eslots[y]].curtop) && units[slots[x]].curleft === Eunits[Eslots[y]].curleft) {
                                    enemyontop = units[slots[x]].type;
                                    enemyontopindex = slots[x];
                                }
                                if (((units[slots[x]].curtop + 200) === Eunits[Eslots[y]].curtop) && units[slots[x]].curleft === Eunits[Eslots[y]].curleft) {
                                    enemyontop2 = units[slots[x]].type;
                                    enemyontop2index = slots[x];
                                }

                                //if right

                                if (((units[slots[x]].curleft - 100) === Eunits[Eslots[y]].curleft) && units[slots[x]].curtop === Eunits[Eslots[y]].curtop) {
                                    enemyonright = units[slots[x]].type;
                                    enemyonrightindex = slots[x];
                                }
                                if (((units[slots[x]].curleft - 200) === Eunits[Eslots[y]].curleft) && units[slots[x]].curtop === Eunits[Eslots[y]].curtop) {
                                    enemyonright2 = units[slots[x]].type;
                                    enemyonright2index = slots[x];
                                }
                                //if right

                                //if left

                                if (((units[slots[x]].curleft + 100) === Eunits[Eslots[y]].curleft) && units[slots[x]].curtop === Eunits[Eslots[y]].curtop) {
                                    enemyonleft = units[slots[x]].type;
                                    enemyonleftindex = slots[x];
                                }
                                if (((units[slots[x]].curleft + 200) === Eunits[Eslots[y]].curleft) && units[slots[x]].curtop === Eunits[Eslots[y]].curtop) {
                                    enemyonleft2 = units[slots[x]].type;
                                    enemyonleft2index = slots[x];
                                }

                            }
                        }
                    }
                    findenemy();

                    function warriorwhotoattack(type) {

                        if ((enemyonbottom === type) && (Eunits[Eslots[y]].usedaction === false)) {
                            if (Eunits[Eslots[y]].moved===true) {
                                attackthisone = enemyonbottomindex;
                                var damage = Eunits[Eslots[y]].attack - units[attackthisone].defense - units[attackthisone].defensetempboost;
                                if (damage < 0) {
                                    damage = 0
                                }
                                $("#" + attackthisone).append("<div class='slashEffects'><img src='Pictures/Effects/EffectSlash.gif' /></div>");
                                Damaging(damage, attackthisone)
                                $(".slashEffects").fadeOut(2000);
                                countering(attackthisone,y)
                                Sword.play();
                                if (units[attackthisone].health <= 0) {
                                    Dies(enemyonbottom, attackthisone);
                                    units[attackthisone].curleft = 10000;
                                    units[attackthisone].curtop = 10000;
                                }
                                Eunits[Eslots[y]].usedaction = true;

                            } else {
                                attackthisone = enemyonbottomindex;
                                var damage = 2*(Eunits[Eslots[y]].attack) - units[attackthisone].defense- units[attackthisone].defensetempboost;
                                if (damage < 0) {
                                    damage = 0
                                }
                                Eunits[Eslots[y]].usedspecial=true;
                                $("#" + attackthisone).append("<div class='slashEffects'><img src='Pictures/Effects/EffectSlash.gif' /></div>");
                                Damaging(damage, attackthisone)
                                $(".slashEffects").fadeOut(2000);
                                if (units[attackthisone].health <= 0) {
                                    Dies(enemyonbottom, attackthisone);
                                    units[attackthisone].curleft = 10000;
                                    units[attackthisone].curtop = 10000;
                                }
                                Eunits[Eslots[y]].usedaction = true;
                            }
                        }
                        if ((enemyonright === type) && (Eunits[Eslots[y]].usedaction === false)) {
                            if (Eunits[Eslots[y]].moved === true) {
                                attackthisone = enemyonrightindex;
                                var damage = Eunits[Eslots[y]].attack - units[attackthisone].defense- units[attackthisone].defensetempboost;
                                if (damage < 0) {
                                    damage = 0
                                }
                                Sword.play();
                                $("#" + attackthisone).append("<div class='slashEffects'><img src='Pictures/Effects/EffectSlash.gif' /></div>");
                                Damaging(damage, attackthisone)
                                $(".slashEffects").fadeOut(2000);
                                countering(attackthisone,y)
                                if (units[attackthisone].health <= 0) {
                                    Dies(enemyonright, attackthisone);
                                    units[attackthisone].curleft = 10000;
                                    units[attackthisone].curtop = 10000;
                                }
                                Eunits[Eslots[y]].usedaction = true;
                            }else {
                                attackthisone = enemyonrightindex;
                                var damage = 2*(Eunits[Eslots[y]].attack) - units[attackthisone].defense- units[attackthisone].defensetempboost;
                                if (damage < 0) {
                                    damage = 0
                                }
                                Eunits[Eslots[y]].usedspecial=true;
                                $("#" + attackthisone).append("<div class='slashEffects'><img src='Pictures/Effects/EffectSlash.gif' /></div>");
                                Damaging(damage, attackthisone)
                                $(".slashEffects").fadeOut(2000);
                                if (units[attackthisone].health <= 0) {
                                    Dies(enemyonbottom, attackthisone);
                                    units[attackthisone].curleft = 10000;
                                    units[attackthisone].curtop = 10000;
                                }
                                Eunits[Eslots[y]].usedaction = true;
                            }
                        }
                        if ((enemyonleft === type) && (Eunits[Eslots[y]].usedaction === false)) {
                            if (Eunits[Eslots[y]].moved === true) {
                                attackthisone = enemyonleftindex;
                                var damage = Eunits[Eslots[y]].attack - units[attackthisone].defense- units[attackthisone].defensetempboost;
                                if (damage < 0) {
                                    damage = 0
                                }
                                Sword.play();
                                $("#" + attackthisone).append("<div class='slashEffects'><img src='Pictures/Effects/EffectSlash.gif' /></div>");
                                Damaging(damage, attackthisone)
                                $(".slashEffects").fadeOut(2000);
                                countering(attackthisone,y)
                                if (units[attackthisone].health <= 0) {
                                    Dies(enemyonleft, attackthisone)
                                    units[attackthisone].curleft = 10000;
                                    units[attackthisone].curtop = 10000;
                                }
                                Eunits[Eslots[y]].usedaction = true;
                            } else {
                                attackthisone = enemyonleftindex;
                                var damage = 2*(Eunits[Eslots[y]].attack) - units[attackthisone].defense- units[attackthisone].defensetempboost;
                                if (damage < 0) {
                                    damage = 0
                                }
                                Eunits[Eslots[y]].usedspecial=true;
                                $("#" + attackthisone).append("<div class='slashEffects'><img src='Pictures/Effects/EffectSlash.gif' /></div>");
                                Damaging(damage, attackthisone)
                                $(".slashEffects").fadeOut(2000);
                                if (units[attackthisone].health <= 0) {
                                    Dies(enemyonbottom, attackthisone);
                                    units[attackthisone].curleft = 10000;
                                    units[attackthisone].curtop = 10000;
                                }
                                Eunits[Eslots[y]].usedaction = true;
                            }
                        }
                        if ((enemyontop === type) && (Eunits[Eslots[y]].usedaction === false)) {
                            if (Eunits[Eslots[y]].moved === true) {
                                attackthisone = enemyontopindex;
                                var damage = Eunits[Eslots[y]].attack - units[attackthisone].defense- units[attackthisone].defensetempboost;
                                if (damage < 0) {
                                    damage = 0
                                }
                                Sword.play();
                                $("#" + attackthisone).append("<div class='slashEffects'><img src='Pictures/Effects/EffectSlash.gif' /></div>");
                                Damaging(damage, attackthisone)
                                $(".slashEffects").fadeOut(2000);
                                countering(attackthisone,y)
                                if (units[attackthisone].health <= 0) {
                                    Dies(enemyontop, attackthisone);
                                    units[attackthisone].curleft = 10000;
                                    units[attackthisone].curtop = 10000;
                                }
                                Eunits[Eslots[y]].usedaction = true;
                            } else {
                                attackthisone = enemyontopindex;
                                var damage = 2*(Eunits[Eslots[y]].attack) - units[attackthisone].defense;
                                if (damage < 0) {
                                    damage = 0
                                }
                                Eunits[Eslots[y]].usedspecial=true;
                                $("#" + attackthisone).append("<div class='slashEffects'><img src='Pictures/Effects/EffectSlash.gif' /></div>");
                                Damaging(damage, attackthisone)
                                $(".slashEffects").fadeOut(2000);
                                if (units[attackthisone].health <= 0) {
                                    Dies(enemyonbottom, attackthisone);
                                    units[attackthisone].curleft = 10000;
                                    units[attackthisone].curtop = 10000;
                                }
                                units[Eslots[y]].usedaction = true;
                            }
                        }
                    }//end of who to attack function
                    function goblinwhotoattack(type) {
                        if ((enemyonbottom === type) && (Eunits[Eslots[y]].usedaction === false)) {
                            attackthisone = enemyonbottomindex;
                            var damage = Eunits[Eslots[y]].attack - units[attackthisone].defense- units[attackthisone].defensetempboost;
                            if (damage < 0) {
                                damage = 0
                            }
                            Sword.play();
                            $("#" + attackthisone).append("<div class='slashEffects'><img src='Pictures/Effects/EffectSlash.gif' /></div>");
                            Damaging(damage, attackthisone)
                            $(".slashEffects").fadeOut(2000);
                            countering(attackthisone,y)
                            Eunits[Eslots[y]].usedaction = true;
                        }
                        if ((enemyonright === type) && (Eunits[Eslots[y]].usedaction === false)) {
                            attackthisone = enemyonrightindex;
                            var damage = Eunits[Eslots[y]].attack - units[attackthisone].defense- units[attackthisone].defensetempboost;
                            if (damage < 0) {
                                damage = 0
                            }
                            Sword.play();
                            $("#" + attackthisone).append("<div class='slashEffects'><img src='Pictures/Effects/EffectSlash.gif' /></div>");
                            Damaging(damage, attackthisone)
                            $(".slashEffects").fadeOut(2000);
                            countering(attackthisone,y)
                            if (units[attackthisone].health <= 0) {
                                Dies(enemyonright, attackthisone);
                                units[attackthisone].curleft = 10000;
                                units[attackthisone].curtop = 10000;
                            }
                            Eunits[Eslots[y]].usedaction = true;
                        }
                        if ((enemyonleft === type) && (Eunits[Eslots[y]].usedaction === false)) {
                            attackthisone = enemyonleftindex;
                            var damage = Eunits[Eslots[y]].attack - units[attackthisone].defense- units[attackthisone].defensetempboost;
                            if (damage < 0) {
                                damage = 0
                            }
                            Sword.play();
                            $("#" + attackthisone).append("<div class='slashEffects'><img src='Pictures/Effects/EffectSlash.gif' /></div>");
                            Damaging(damage, attackthisone)
                            $(".slashEffects").fadeOut(2000);
                            countering(attackthisone,y)
                            if (units[attackthisone].health <= 0) {
                                Dies(enemyonleft, attackthisone)
                                units[attackthisone].curleft = 10000;
                                units[attackthisone].curtop = 10000;
                            }
                            Eunits[Eslots[y]].usedaction = true;
                        }
                        if ((enemyontop === type) && (Eunits[Eslots[y]].usedaction === false)) {
                            attackthisone = enemyontopindex;
                            var damage = Eunits[Eslots[y]].attack - units[attackthisone].defense- units[attackthisone].defensetempboost;
                            if (damage < 0) {
                                damage = 0
                            }
                            Sword.play();
                            $("#" + attackthisone).append("<div class='slashEffects'><img src='Pictures/Effects/EffectSlash.gif' /></div>");
                            Damaging(damage, attackthisone)
                            $(".slashEffects").fadeOut(2000);
                            countering(attackthisone,y)
                            if (units[attackthisone].health <= 0) {
                                Dies(enemyontop, attackthisone);
                                units[attackthisone].curleft = 10000;
                                units[attackthisone].curtop = 10000;
                            }
                            Eunits[Eslots[y]].usedaction = true;
                        }

                    }//end of who to attack function
                    function bearwhotoattack(type) {
                        var temprand= Math.floor((Math.random() * 2) + 1);
                        if ((enemyonbottom === type) && (Eunits[Eslots[y]].usedaction === false)) {
                            attackthisone = enemyonbottomindex;
                            var damage = Eunits[Eslots[y]].attack - units[attackthisone].defense- units[attackthisone].defensetempboost;
                            if (damage < 0) {
                                damage = 0
                            }
                            Dogbite.play();
                            $("#" + attackthisone).append("<div class='slashEffects'><img src='Pictures/Effects/EffectSlash.gif' /></div>");
                            Damaging(damage, attackthisone)
                            $(".slashEffects").fadeOut(2000);
                            countering(attackthisone,y)
                            Eunits[Eslots[y]].usedaction = true;
                            if(temprand===2 && units[attackthisone].abilityimmunity!=true  && units[units[attackthisone].protectedby].abilityimmunity!=true && units[attackthisone].accessory!="Ribbon"){
                                units[attackthisone].blind=2;
                                $("#TEXT").append(units[attackthisone].name + " has been blinded for " + units[attackthisone].blind + " turns.")
                            }
                        }
                        if ((enemyonright === type) && (Eunits[Eslots[y]].usedaction === false)) {
                            attackthisone = enemyonrightindex;
                            var damage = Eunits[Eslots[y]].attack - units[attackthisone].defense- units[attackthisone].defensetempboost;
                            if (damage < 0) {
                                damage = 0
                            }
                            Dogbite.play();

                            $("#" + attackthisone).append("<div class='slashEffects'><img src='Pictures/Effects/EffectSlash.gif' /></div>");
                            Damaging(damage, attackthisone)
                            $(".slashEffects").fadeOut(2000);
                            countering(attackthisone,y)
                            if (units[attackthisone].health <= 0) {
                                Dies(enemyonright, attackthisone);
                                units[attackthisone].curleft = 10000;
                                units[attackthisone].curtop = 10000;
                            }
                            Eunits[Eslots[y]].usedaction = true;
                            if(temprand===2 && units[attackthisone].abilityimmunity!=true  && units[units[attackthisone].protectedby].abilityimmunity!=true && units[attackthisone].accessory!="Ribbon"){
                                units[attackthisone].blind=2;
                                $("#TEXT").append(units[attackthisone].name + " has been blinded for " + units[attackthisone].blind + " turns.")
                            }
                        }
                        if ((enemyonleft === type) && (Eunits[Eslots[y]].usedaction === false)) {
                            attackthisone = enemyonleftindex;
                            var damage = Eunits[Eslots[y]].attack - units[attackthisone].defense- units[attackthisone].defensetempboost;
                            if (damage < 0) {
                                damage = 0
                            }
                            Dogbite.play();
                            $("#" + attackthisone).append("<div class='slashEffects'><img src='Pictures/Effects/EffectSlash.gif' /></div>");
                            Damaging(damage, attackthisone)
                            $(".slashEffects").fadeOut(2000);
                            countering(attackthisone,y)
                            if (units[attackthisone].health <= 0) {
                                Dies(enemyonleft, attackthisone)
                                units[attackthisone].curleft = 10000;
                                units[attackthisone].curtop = 10000;
                            }
                            Eunits[Eslots[y]].usedaction = true;
                            if(temprand===2 && units[attackthisone].abilityimmunity!=true  && units[units[attackthisone].protectedby].abilityimmunity!=true && units[attackthisone].accessory!="Ribbon"){
                                units[attackthisone].blind=2;
                                $("#TEXT").append(units[attackthisone].name + " has been blinded for " + units[attackthisone].blind + " turns.")
                            }
                        }
                        if ((enemyontop === type) && (Eunits[Eslots[y]].usedaction === false)) {
                            attackthisone = enemyontopindex;
                            var damage = Eunits[Eslots[y]].attack - Eunits[attackthisone].defense- units[attackthisone].defensetempboost;
                            if (damage < 0) {
                                damage = 0
                            }
                            Dogbite.play();
                            $("#" + attackthisone).append("<div class='slashEffects'><img src='Pictures/Effects/EffectSlash.gif' /></div>");
                            Damaging(damage, attackthisone)
                            $(".slashEffects").fadeOut(2000);
                            countering(attackthisone,y)
                            if (units[attackthisone].health <= 0) {
                                Dies(enemyontop, attackthisone);
                                units[attackthisone].curleft = 10000;
                                units[attackthisone].curtop = 10000;
                            }
                            Eunits[Eslots[y]].usedaction = true;
                            if(temprand===2 && units[attackthisone].abilityimmunity!=true && units[units[attackthisone].protectedby].abilityimmunity!=true && units[attackthisone].accessory!="Ribbon"){
                                units[attackthisone].blind=2;
                                $("#TEXT").append(units[attackthisone].name + " has been blinded for " + units[attackthisone].blind + " turns.")
                            }
                        }
                    }//end of who to attack function
                    function vampirewhotoattack(type) {
                        if ((enemyonbottom === type) && (Eunits[Eslots[y]].usedaction === false)) {
                            attackthisone = enemyonbottomindex;
                            var damage = Eunits[Eslots[y]].attack - units[attackthisone].defense- units[attackthisone].defensetempboost;
                            if (damage < 0) {
                                damage = 0
                            }
                            $("#TEXT").append("<p>" + Eunits[Eslots[y]].name + " gained " + damage + " life from the attack.</p>");
                            Eunits[Eslots[y]].health += damage;
                            if(Eunits[Eslots[y]].health>Eunits[Eslots[y]].maxhealth){Eunits[Eslots[y]].health=Eunits[Eslots[y]].maxhealth}
                            $("#EHB" + Eunits[Eslots[y]].index).remove();
                            $("#E"+Eunits[Eslots[y]].index).append('<div class="healthbar" id ="EHB'+ Eunits[Eslots[y]].index + '"style="width: ' + (Eunits[Eslots[y]].health/Eunits[Eslots[y]].maxhealth)*100 + '%"></div>');
                            Vampirebite.play();
                            $("#" + attackthisone).append("<div class='slashEffects'><img src='Pictures/Effects/EffectSlash.gif' /></div>");
                            Damaging(damage, attackthisone)
                            $(".slashEffects").fadeOut(2000);
                            countering(attackthisone,y)
                            if (units[attackthisone].health <= 0) {
                                Dies(enemyonbottom, attackthisone);
                                units[attackthisone].curleft = 10000;
                                units[attackthisone].curtop = 10000;
                            }
                            Eunits[Eslots[y]].usedaction = true;
                        }
                        if (enemyonright === type && (Eunits[Eslots[y]].usedaction === false)) {
                            attackthisone = enemyonrightindex;
                            var damage = Eunits[Eslots[y]].attack - units[attackthisone].defense- units[attackthisone].defensetempboost;
                            if (damage < 0) {
                                damage = 0
                            }
                            ;
                            $("#TEXT").append("<p>" + Eunits[Eslots[y]].name + " gained " + damage + " life from the attack.</p>");
                            Eunits[Eslots[y]].health += damage;
                            if(Eunits[Eslots[y]].health>Eunits[Eslots[y]].maxhealth){Eunits[Eslots[y]].health=Eunits[Eslots[y]].maxhealth}
                            $("#EHB" + Eunits[Eslots[y]].index).remove();
                            $("#E"+Eunits[Eslots[y]].index).append('<div class="healthbar" id ="EHB'+ Eunits[Eslots[y]].index + '"style="width: ' + (Eunits[Eslots[y]].health/Eunits[Eslots[y]].maxhealth)*100 + '%"></div>');
                            Vampirebite.play();
                            $("#" + attackthisone).append("<div class='slashEffects'><img src='Pictures/Effects/EffectSlash.gif' /></div>");
                            Damaging(damage, attackthisone)
                            $(".slashEffects").fadeOut(2000);
                            countering(attackthisone,y)
                            if (units[attackthisone].health <= 0) {
                                Dies(enemyonright, attackthisone);
                                units[attackthisone].curleft = 10000;
                                units[attackthisone].curtop = 10000;
                            }
                            Eunits[Eslots[y]].usedaction = true;
                        }
                        if (enemyonleft === type && (Eunits[Eslots[y]].usedaction === false)) {
                            attackthisone = enemyonleftindex;
                            var damage = Eunits[Eslots[y]].attack - units[attackthisone].defense- units[attackthisone].defensetempboost;
                            if (damage < 0) {
                                damage = 0
                            }
                            ;
                            $("#TEXT").append("<p>" + Eunits[Eslots[y]].name + " gained " + damage + " life from the attack.</p>");
                            Eunits[Eslots[y]].health += damage;
                            if(Eunits[Eslots[y]].health>Eunits[Eslots[y]].maxhealth){Eunits[Eslots[y]].health=Eunits[Eslots[y]].maxhealth}
                            $("#EHB" + Eunits[Eslots[y]].index).remove();
                            $("#E"+Eunits[Eslots[y]].index).append('<div class="healthbar" id ="EHB'+ Eunits[Eslots[y]].index + '"style="width: ' + (Eunits[Eslots[y]].health/Eunits[Eslots[y]].maxhealth)*100 + '%"></div>');
                            Vampirebite.play();
                            $("#" + attackthisone).append("<div class='slashEffects'><img src='Pictures/Effects/EffectSlash.gif' /></div>");
                            Damaging(damage, attackthisone)
                            $(".slashEffects").fadeOut(2000);
                            countering(attackthisone,y)
                            if (units[attackthisone].health <= 0) {
                                Dies(enemyonleft, attackthisone)
                                units[attackthisone].curleft = 10000;
                                units[attackthisone].curtop = 10000;
                            }
                            Eunits[Eslots[y]].usedaction = true;
                        }
                        if (enemyontop === type && (Eunits[Eslots[y]].usedaction === false)) {
                            attackthisone = enemyontopindex;
                            var damage = Eunits[Eslots[y]].attack - Eunits[attackthisone].defense- units[attackthisone].defensetempboost;
                            if (damage < 0) {
                                damage = 0
                            }
                            $("#TEXT").append("<p>" + Eunits[Eslots[y]].name + " gained " + damage + " life from the attack.</p>");
                            Eunits[Eslots[y]].health += damage;
                            if(Eunits[Eslots[y]].health>Eunits[Eslots[y]].maxhealth){Eunits[Eslots[y]].health=Eunits[Eslots[y]].maxhealth}
                            $("#EHB" + Eunits[Eslots[y]].index).remove();
                            $("#E"+Eunits[Eslots[y]].index).append('<div class="healthbar" id ="EHB'+ Eunits[Eslots[y]].index + '"style="width: ' + (Eunits[Eslots[y]].health/Eunits[Eslots[y]].maxhealth)*100 + '%"></div>');
                            Vampirebite.play();
                            $("#" + attackthisone).append("<div class='slashEffects'><img src='Pictures/Effects/EffectSlash.gif' /></div>");
                            Damaging(damage, attackthisone)
                            $(".slashEffects").fadeOut(2000);
                            countering(attackthisone,y)
                            if (units[attackthisone].health <= 0) {
                                Dies(enemyontop, attackthisone);
                                units[attackthisone].curleft = 10000;
                                units[attackthisone].curtop = 10000;
                            }
                            Eunits[Eslots[y]].usedaction = true;
                        }
                    }//end of who to attack function
                    function rangedwhotoattack(type) {
                        for (var x = 1; x < 4; x++) {
                            if (units[slots[x]].type === type && Eunits[Eslots[y]].usedaction === false && units[slots[x]].alive===true) {
                                var damage = Eunits[Eslots[y]].attack - units[slots[x]].defense- units[attackthisone].defensetempboost;
                                if (damage < 0) {
                                    damage = 0
                                }
                                Arrow.play();
                             shootarrow(slots[x],Eslots[y]);
                                Damaging(damage, slots[x])
                                Eunits[Eslots[y]].usedaction = true;
                            }
                        }
                    }
                    function spitterwhotoattack(type) {
                        for (var x = 1; x < slots.length; x++) {
                            if (units[slots[x]].type === type && Eunits[Eslots[y]].usedaction === false && units[slots[x]].alive===true && (units[slots[x]].curleft===Eunits[Eslots[y]].curleft || units[slots[x]].curtop===Eunits[Eslots[y]].curtop)) {
                                var damage = Eunits[Eslots[y]].attack - units[slots[x]].defense- units[slots[x]].defensetempboost;
                                if (damage < 0) {
                                    damage = 0
                                }
                                Damaging(damage, slots[x]);
                                Spit.play();
                                Eunits[Eslots[y]].usedaction = true;
                                if (Eunits[Eslots[y]].usedimmobilized>=3 && units[slots[x]].abilityimmunity!=true && units[units[slots[x]].protectedby].abilityimmunity!=true && units[slots[x]].accessory!="Ribbon"){
                                    $("#TEXT").append("<p>" + units[slots[x]].name + " was immobilized for 2 turns.</p>");
                                    Paralyzesound.play();
                                    units[slots[x]].blind = 2;
                                    Eunits[Eslots[y]].usedimmobilized=0;
                                    showailments();
                                }
                            }
                        }
                    }
                    function spiderwhotoattack(type) {
                        //web attack
                        for (var x = 1; x < slots.length; x++) {
                            if (units[slots[x]].type === type && Eunits[Eslots[y]].usedaction === false && units[slots[x]].alive===true && (units[slots[x]].curleft===Eunits[Eslots[y]].curleft || units[slots[x]].curtop===Eunits[Eslots[y]].curtop)) {
                                if(units[slots[x]].curleft===Eunits[Eslots[y]].curleft && units[slots[x]].curtop>Eunits[Eslots[y]].curtop){
                                    if(!(units[slots[1]].curleft===Eunits[Eslots[y]].curleft && units[slots[1]].curtop-100===Eunits[Eslots[y]].curtop)&&!(units[slots[2]].curleft===Eunits[Eslots[y]].curleft && units[slots[2]].curtop-100===Eunits[Eslots[y]].curtop)&&!(units[slots[3]].curleft===Eunits[Eslots[y]].curleft && units[slots[3]].curtop-100===Eunits[Eslots[y]].curtop)
                                        && !(Eunits[Eslots[1]].curleft===Eunits[Eslots[y]].curleft && Eunits[Eslots[1]].curtop-100===Eunits[Eslots[y]].curtop)&& !(Eunits[Eslots[2]].curleft===Eunits[Eslots[y]].curleft && Eunits[Eslots[2]].curtop-100===Eunits[Eslots[y]].curtop)&& !(Eunits[Eslots[3]].curleft===Eunits[Eslots[y]].curleft && Eunits[Eslots[3]].curtop-100===Eunits[Eslots[y]].curtop)
                                        && !(Eunits[Eslots[4]].curleft===Eunits[Eslots[y]].curleft && Eunits[Eslots[4]].curtop-100===Eunits[Eslots[y]].curtop)&& !(Eunits[Eslots[5]].curleft===Eunits[Eslots[y]].curleft && Eunits[Eslots[5]].curtop-100===Eunits[Eslots[y]].curtop)){
                                        units[slots[x]].curtop=Eunits[Eslots[y]].curtop+100;
                                        $("#" + slots[x]).animate({
                                            top:units[slots[x]].curtop
                                        })
                                        Hook.play();
                                    }
                                }

                            }
                        }
                        findenemy();

                        //poisoning
                        if ((enemyonbottom === type) && (Eunits[Eslots[y]].usedaction === false)) {
                            attackthisone = enemyonbottomindex;
                            if (units[attackthisone].abilityimmunity != true  && units[units[attackthisone].protectedby].abilityimmunity!=true && units[attackthisone].accessory!="Ribbon") {
                                units[attackthisone].poison += 3;
                                $("#TEXT").append(units[attackthisone].name + " has been poisoned.");
                                Paralyzesound.play();
                            } else{
                                $("#TEXT").append(units[attackthisone].name + " can't be poisoned.")
                            }
                            Eunits[Eslots[y]].usedaction = true;
                        }
                        if ((enemyonright === type) && (Eunits[Eslots[y]].usedaction === false)) {
                            attackthisone = enemyonrightindex;
                            if (units[attackthisone].abilityimmunity != true && units[units[attackthisone].protectedby].abilityimmunity!=true && units[attackthisone].accessory!="Ribbon") {
                                units[attackthisone].poison += 3;
                                $("#TEXT").append(units[attackthisone].name + " has been poisoned.");
                                Paralyzesound.play();
                            } else{
                                $("#TEXT").append(units[attackthisone].name + " can't be poisoned.")
                            }
                            Eunits[Eslots[y]].usedaction = true;
                        }
                        if ((enemyonleft === type) && (Eunits[Eslots[y]].usedaction === false) ) {
                            attackthisone = enemyonleftindex;
                            if (units[attackthisone].abilityimmunity != true && units[units[attackthisone].protectedby].abilityimmunity!=true && units[attackthisone].accessory!="Ribbon") {
                                units[attackthisone].poison += 3;
                                $("#TEXT").append(units[attackthisone].name + " has been poisoned.");
                                Paralyzesound.play();
                            } else{
                                $("#TEXT").append(units[attackthisone].name + " can't be poisoned.")
                            }
                            Eunits[Eslots[y]].usedaction = true;
                        }
                        if ((enemyontop === type) && (Eunits[Eslots[y]].usedaction === false)) {
                            attackthisone = enemyontopindex;
                            if (units[attackthisone].abilityimmunity != true && units[units[attackthisone].protectedby].abilityimmunity!=true && units[attackthisone].accessory!="Ribbon") {
                                units[attackthisone].poison += 3;
                                $("#TEXT").append(units[attackthisone].name + " has been poisoned.");
                                Paralyzesound.play();
                            } else{
                                $("#TEXT").append(units[attackthisone].name + " can't be poisoned.")
                            }
                            Eunits[Eslots[y]].usedaction = true;
                        }
                        $("#" + attackthisone).append("<div class='slashEffects' style='margin-left:10px'><img src='Pictures/Effects/Web.gif' /></div>");
                        $(".slashEffects").fadeOut(2000);

                    }//end of who to attack function

                    function frostwraithwhotoattack(type) {
                        for (var x = 1; x < slots.length; x++) {
                            if (units[slots[x]].alive===true && units[slots[x]].type === type && (Eunits[Eslots[y]].usedaction === false)) {
                                var res=1;
                                if(units[slots[x]].accessory==="Elementward_Ring"){
                                    res=.5;
                                }
                                var damage = parseInt((Eunits[Eslots[y]].attack - units[slots[x]].resistance- units[attackthisone].defensetempboost) * res);
                                if (damage < 0) {
                                    damage = 0
                                }
                                Iceattack.play();
                                Damaging(damage, slots[x]);
                                if (units[slots[x]].health <= 0) {
                                    Dies(type, slots[x]);
                                    units[slots[x]].curleft = 10000;
                                    units[slots[x]].curtop = 10000;
                                    units[slots[x]].type = "Dead";
                                }
                                Eunits[Eslots[y]].charge -= 1;
                                //minus one to offset charging
                                Eunits[Eslots[y]].charge -= 1;
                                charging();
                                Eunits[Eslots[y]].usedaction = true;
                            }
                        }
                    }
                    function flamewraithwhotoattack() {
                        if ((Eunits[Eslots[y]].usedaction === false)) {
                            if(enemyonbottomindex!=-1){
                                var damage = Eunits[Eslots[y]].attack - units[enemyonbottomindex].defense- units[attackthisone].defensetempboost;
                                if (damage < 0) {
                                    damage = 0
                                }
                                var res=1;
                                if(units[enemyonbottomindex].accessory==="Elementward_Ring"){
                                    res=.5;
                                }
                                damage = parseInt(damage * res);
                                Fire.play();
                                Damaging(damage, enemyonbottomindex);
                            }

                            if(enemyontopindex!=-1){
                                var damage = Eunits[Eslots[y]].attack - units[enemyontopindex].defense- units[attackthisone].defensetempboost;
                                if (damage < 0) {
                                    damage = 0
                                }
                                var res=1;
                                if(units[enemyontopindex].accessory==="Elementward_Ring"){
                                    res=.5;
                                }
                                damage = parseInt(damage * res);
                                Fire.play();
                                Damaging(damage, enemyontopindex);}

                            if(enemyonrightindex!=-1){
                                var damage = Eunits[Eslots[y]].attack - units[enemyonrightindex].defense- units[attackthisone].defensetempboost;
                                if (damage < 0) {
                                    damage = 0
                                }
                                var res=1;
                                if(units[enemyonrightindex].accessory==="Elementward_Ring"){
                                    res=.5;
                                }
                                damage = parseInt(damage * res);
                                Fire.play();
                                Damaging(damage, enemyonrightindex);}

                            if(enemyonleftindex!=-1){
                                var damage = Eunits[Eslots[y]].attack - units[enemyonleftindex].defense- units[attackthisone].defensetempboost;
                                if (damage < 0) {
                                    damage = 0
                                }
                                var res=1;
                                if(units[enemyonleftindex].accessory==="Elementward_Ring"){
                                    res=.5;
                                }
                                damage = parseInt(damage * res);
                                Fire.play();
                                Damaging(damage, enemyonleftindex);}

                            if(enemyonbottomindex===-1 && enemyontopindex===-1 && enemyonrightindex===-1 && enemyonleftindex===-1){
                            } else{
                                Eunits[Eslots[y]].charge=0;
                                //minus one to offset charging
                                Eunits[Eslots[y]].charge -= 1;
                                charging();
                                Eunits[Eslots[y]].usedaction = true;
                                $("#E" + Eslots[y]).append("<div class='staticEffects' style='margin-top:-180px; margin-left:-120px'><img src='Pictures/Effects/EffectExplode.gif' /></div>");
                                setTimeout(function(){ $(".staticEffects").remove()},500);
                            }

                        }
                    }//end of who to attack function

                    function lightningwhotoattack(type) {
                        for (var x = 1; x < slots.length; x++) {
                            if (units[slots[x]].alive===true && units[slots[x]].type === type && (Eunits[Eslots[y]].usedaction === false)) {
                                var damage = Eunits[Eslots[y]].attack - units[slots[x]].resistance- units[attackthisone].defensetempboost;
                                if (damage < 0) {
                                    damage = 0
                                }
                                var res=1;
                                if(units[slots[x]].accessory==="Elementward_Ring"){
                                    res=.5;
                                }
                                damage = parseInt((damage) * res);
                                Lightning.play();

                                Damaging(damage, slots[x]);
                                $("#battlebackground").append("<div class='staticEffects' style='margin-top: " + (units[slots[x]].curtop-750) +"px; margin-left: " + (units[slots[x]].curleft-100) +"px'><img src='Pictures/Effects/EffectLightning.gif' /></div>");

                                $(".staticEffects").fadeOut(2000);

                                if (units[slots[x]].health <= 0) {
                                    Dies(type, slots[x]);
                                    units[slots[x]].curleft = 10000;
                                    units[slots[x]].curtop = 10000;
                                    units[slots[x]].type = "Dead";
                                }
                                Eunits[Eslots[y]].charge -= 3;
                                Eunits[Eslots[y]].charge -= 1;
                                charging();
                                Eunits[Eslots[y]].usedaction = true;
                            }
                        }
                    }
                    function firewhotoattack(type) {
                        for (var x = 1; x < 4; x++) {
                            if (units[slots[x]].alive===true && units[slots[x]].type === type && (Eunits[Eslots[y]].usedaction === false)) {
                                var damage = Eunits[Eslots[y]].attack - units[slots[x]].resistance- units[attackthisone].defensetempboost;
                                if (damage < 0) {
                                    damage = 0
                                }
                                var res=1;
                                if(units[slots[x]].accessory==="Elementward_Ring"){
                                    res=.5;
                                }
                                damage = parseInt((damage) * res);
                                Fire.play();

                                $("#battlebackground").append("<div class='Effects' style='margin-top: " + Eunits[Eslots[y]].curtop +"px; margin-left: " + Eunits[Eslots[y]].curleft +"px'><img src='Pictures/Effects/EffectFire.gif' /></div>");
                                $(".Effects").animate({
                                    left: -(Eunits[Eslots[y]].curleft-units[slots[x]].curleft) + "px",
                                    top: -(Eunits[Eslots[y]].curtop-units[slots[x]].curtop) + "px"
                                },500).fadeOut(500);
                                Damaging(damage, slots[x]);

                                if (units[slots[x]].health <= 0) {
                                    Dies(type, slots[x]);
                                    units[slots[x]].curleft = 10000;
                                    units[slots[x]].curtop = 10000;
                                    units[slots[x]].type = "Dead";
                                }
                                Eunits[Eslots[y]].charge -= 1;
                                //minus one to offset charging
                                Eunits[Eslots[y]].charge -= 1;
                                charging();
                                Eunits[Eslots[y]].usedaction = true;
                            }
                        }
                    }
                    function icewhotoattack(type) {
                        if ((enemyonbottom === type) && (Eunits[Eslots[y]].usedaction === false)) {
                            attackthisone = enemyonbottomindex;

                            var damage = Eunits[Eslots[y]].attack - units[attackthisone].resistance- units[attackthisone].defensetempboost;
                            if (damage < 0) {
                                damage = 0
                            }
                            var res=1;
                            if(units[attackthisone].accessory==="Elementward_Ring"){
                                res=.5;
                            }
                            damage = parseInt((damage) * res);
                            Iceattack.play();

                            $("#battlebackground").append("<div class='Effects' style='margin-top: " + Eunits[Eslots[y]].curtop +"px; margin-left: " + Eunits[Eslots[y]].curleft +"px'><img src='Pictures/Effects/EffectIce.gif' /></div>");
                            $(".Effects").animate({
                                left: -(Eunits[Eslots[y]].curleft-units[attackthisone].curleft) + "px",
                                top: -(Eunits[Eslots[y]].curtop-units[attackthisone].curtop) + "px"
                            },500).fadeOut(500);
                            Damaging(damage, attackthisone);

                            if (units[attackthisone].health <= 0) {
                                Dies(enemyonbottom, attackthisone);
                                units[attackthisone].curleft = 10000;
                                units[attackthisone].curtop = 10000;
                            }
                            Eunits[Eslots[y]].usedaction = true;
                            Eunits[Eslots[y]].charge -= 2;
                            //minus one to offset charging
                            Eunits[Eslots[y]].charge -= 1;
                            charging();
                        }
                        if (enemyonright === type && (Eunits[Eslots[y]].usedaction === false)) {
                            attackthisone = enemyonrightindex;
                            var damage = Eunits[Eslots[y]].attack - units[attackthisone].resistance- units[attackthisone].defensetempboost;
                            if (damage < 0) {
                                damage = 0
                            }
                            var res=1;
                            if(units[attackthisone].accessory==="Elementward_Ring"){
                                res=.5;
                            }
                            damage = parseInt((damage) * res);
                            Iceattack.play();
                            $("#battlebackground").append("<div class='Effects' style='margin-top: " + Eunits[Eslots[y]].curtop +"px; margin-left: " + Eunits[Eslots[y]].curleft +"px'><img src='Pictures/Effects/EffectIce.gif' /></div>");
                            $(".Effects").animate({
                                left: -(Eunits[Eslots[y]].curleft-units[attackthisone].curleft) + "px",
                                top: -(Eunits[Eslots[y]].curtop-units[attackthisone].curtop) + "px"
                            },500).fadeOut(500);
                            Damaging(damage, attackthisone);
                            if (units[attackthisone].health <= 0) {
                                Dies(enemyonright, attackthisone)
                                units[attackthisone].curleft = 10000;
                                units[attackthisone].curtop = 10000;
                            }
                            Eunits[Eslots[y]].usedaction = true;
                            Eunits[Eslots[y]].charge -= 2;
                        }
                        if (enemyonleft === type && (Eunits[Eslots[y]].usedaction === false)) {
                            attackthisone = enemyonleftindex;
                            var damage = Eunits[Eslots[y]].attack - units[attackthisone].resistance- units[attackthisone].defensetempboost;
                            if (damage < 0) {
                                damage = 0
                            }
                            var res=1;
                            if(units[attackthisone].accessory==="Elementward_Ring"){
                                res=.5;
                            }
                            damage = parseInt((damage) * res);
                            Iceattack.play();
                            $("#battlebackground").append("<div class='Effects' style='margin-top: " + Eunits[Eslots[y]].curtop +"px; margin-left: " + Eunits[Eslots[y]].curleft +"px'><img src='Pictures/Effects/EffectIce.gif' /></div>");
                            $(".Effects").animate({
                                left: -(Eunits[Eslots[y]].curleft-units[attackthisone].curleft) + "px",
                                top: -(Eunits[Eslots[y]].curtop-units[attackthisone].curtop) + "px"
                            },500).fadeOut(500);
                            Damaging(damage, attackthisone);
                            if (units[attackthisone].health <= 0) {
                                Dies(enemyonleft, attackthisone);
                                units[attackthisone].curleft = 10000;
                                units[attackthisone].curtop = 10000;
                            }
                            Eunits[Eslots[y]].usedaction = true;
                            Eunits[Eslots[y]].charge -= 2;
                        }
                        if (enemyontop === type && (Eunits[Eslots[y]].usedaction === false)) {
                            attackthisone = enemyontopindex;
                            var damage = Eunits[Eslots[y]].attack - units[attackthisone].resistance- units[attackthisone].defensetempboost;
                            if (damage < 0) {
                                damage = 0
                            }
                            var res=1;
                            if(units[attackthisone].accessory==="Elementward_Ring"){
                                res=.5;
                            }
                            damage = parseInt((damage) * res);
                            Iceattack.play();
                            $("#battlebackground").append("<div class='Effects' style='margin-top: " + Eunits[Eslots[y]].curtop +"px; margin-left: " + Eunits[Eslots[y]].curleft +"px'><img src='Pictures/Effects/EffectIce.gif' /></div>");
                            $(".Effects").animate({
                                left: -(Eunits[Eslots[y]].curleft-units[attackthisone].curleft) + "px",
                                top: -(Eunits[Eslots[y]].curtop-units[attackthisone].curtop) + "px"
                            },500).fadeOut(500);
                            Damaging(damage, attackthisone);
                            if (units[attackthisone].health <= 0) {
                                Dies(enemyontop, attackthisone);
                                units[attackthisone].curleft = 10000;
                                units[attackthisone].curtop = 10000;
                            }
                            Eunits[Eslots[y]].usedaction = true;
                            Eunits[Eslots[y]].charge -= 2;
                        }

                        if ((enemyonbottom2 === type) && (Eunits[Eslots[y]].usedaction === false)) {
                            attackthisone = enemyonbottom2index;
                            var damage = Eunits[Eslots[y]].attack - units[attackthisone].resistance- units[attackthisone].defensetempboost;
                            if (damage < 0) {
                                damage = 0
                            }
                            var res=1;
                            if(units[attackthisone].accessory==="Elementward_Ring"){
                                res=.5;
                            }
                            damage = parseInt((damage) * res);
                            Iceattack.play();

                            $("#battlebackground").append("<div class='Effects' style='margin-top: " + Eunits[Eslots[y]].curtop +"px; margin-left: " + Eunits[Eslots[y]].curleft +"px'><img src='Pictures/Effects/EffectIce.gif' /></div>");
                            $(".Effects").animate({
                                left: -(Eunits[Eslots[y]].curleft-units[attackthisone].curleft) + "px",
                                top: -(Eunits[Eslots[y]].curtop-units[attackthisone].curtop) + "px"
                            },500).fadeOut(500);
                            Damaging(damage, attackthisone);

                            if (units[attackthisone].health <= 0) {
                                Dies(enemyonbottom2, attackthisone);
                                units[attackthisone].curleft = 10000;
                                units[attackthisone].curtop = 10000;
                            }
                            Eunits[Eslots[y]].usedaction = true;
                            Eunits[Eslots[y]].charge -= 2;
                        }
                        if (enemyonright2 === type && (Eunits[Eslots[y]].usedaction === false)) {
                            attackthisone = enemyonright2index;
                            var damage = Eunits[Eslots[y]].attack - units[attackthisone].resistance- units[attackthisone].defensetempboost;
                            if (damage < 0) {
                                damage = 0
                            }
                            var res=1;
                            if(units[attackthisone].accessory==="Elementward_Ring"){
                                res=.5;
                            }
                            damage = parseInt((damage) * res);
                            Iceattack.play();
                            $("#battlebackground").append("<div class='Effects' style='margin-top: " + Eunits[Eslots[y]].curtop +"px; margin-left: " + Eunits[Eslots[y]].curleft +"px'><img src='Pictures/Effects/EffectIce.gif' /></div>");
                            $(".Effects").animate({
                                left: -(Eunits[Eslots[y]].curleft-units[attackthisone].curleft) + "px",
                                top: -(Eunits[Eslots[y]].curtop-units[attackthisone].curtop) + "px"
                            },500).fadeOut(500);
                            Damaging(damage, attackthisone);
                            if (units[attackthisone].health <= 0) {
                                Dies(enemyonright2, attackthisone);
                                units[attackthisone].curleft = 10000;
                                units[attackthisone].curtop = 10000;
                            }
                            Eunits[Eslots[y]].usedaction = true;
                            Eunits[Eslots[y]].charge -= 2;
                        }
                        if (enemyonleft2 === type && (Eunits[Eslots[y]].usedaction === false)) {
                            attackthisone = enemyonleft2index;
                            var damage = Eunits[Eslots[y]].attack - units[attackthisone].resistance- units[attackthisone].defensetempboost;
                            if (damage < 0) {
                                damage = 0
                            }
                            var res=1;
                            if(units[attackthisone].accessory==="Elementward_Ring"){
                                res=.5;
                            }
                            damage = parseInt((damage) * res);
                            Iceattack.play();
                            $("#battlebackground").append("<div class='Effects' style='margin-top: " + Eunits[Eslots[y]].curtop +"px; margin-left: " + Eunits[Eslots[y]].curleft +"px'><img src='Pictures/Effects/EffectIce.gif' /></div>");
                            $(".Effects").animate({
                                left: -(Eunits[Eslots[y]].curleft-units[attackthisone].curleft) + "px",
                                top: -(Eunits[Eslots[y]].curtop-units[attackthisone].curtop) + "px"
                            },500).fadeOut(500);
                            Damaging(damage, attackthisone);
                            if (units[attackthisone].health <= 0) {
                                Dies(enemyonleft2, attackthisone);
                                units[attackthisone].curleft = 10000;
                                units[attackthisone].curtop = 10000;
                            }
                            Eunits[Eslots[y]].usedaction = true;
                            Eunits[Eslots[y]].charge -= 2;
                        }
                        if (enemyontop2 === type && (Eunits[Eslots[y]].usedaction === false)) {
                            attackthisone = enemyontop2index;
                            var damage = Eunits[Eslots[y]].attack - units[attackthisone].resistance- units[attackthisone].defensetempboost;
                            if (damage < 0) {
                                damage = 0
                            }
                            var res=1;
                            if(units[attackthisone].accessory==="Elementward_Ring"){
                                res=.5;
                            }
                            damage = parseInt((damage) * res);
                            $("#battlebackground").append("<div class='Effects' style='margin-top: " + Eunits[Eslots[y]].curtop +"px; margin-left: " + Eunits[Eslots[y]].curleft +"px'><img src='Pictures/Effects/EffectIce.gif' /></div>");
                            $(".Effects").animate({
                                left: -(Eunits[Eslots[y]].curleft-units[attackthisone].curleft) + "px",
                                top: -(Eunits[Eslots[y]].curtop-units[attackthisone].curtop) + "px"
                            },500).fadeOut(500);
                            Damaging(damage, attackthisone);
                            Iceattack.play();
                            if (units[attackthisone].health <= 0) {
                                Dies(enemyontop2, attackthisone);
                                units[attackthisone].curleft = 10000;
                                units[attackthisone].curtop = 10000;
                            }
                            Eunits[Eslots[y]].usedaction = true;
                            EUnits[Eslots[y]].charge -= 2;
                        }
                    }
                    function wispwhotoattack(type) {
                        for (var x = 1; x < slots.length; x++) {
                            if (units[slots[x]].alive===true && units[slots[x]].type === type && (Eunits[Eslots[y]].usedaction === false)) {
                                var damage = Eunits[Eslots[y]].attack - units[slots[x]].resistance- units[attackthisone].defensetempboost;
                                if (damage < 0) {
                                    damage = 0
                                }
                                var res=1;
                                if(units[attackthisone].accessory==="Elementward_Ring"){
                                    res=.5;
                                }
                                damage = parseInt((damage) * res);
                                Iceattack.play();
                                $("#battlebackground").append("<div class='Effects' style='margin-top: " + Eunits[Eslots[y]].curtop +"px; margin-left: " + Eunits[Eslots[y]].curleft +"px'><img src='Pictures/Effects/EffectIce.gif' /></div>");
                                $(".Effects").animate({
                                    left: -(Eunits[Eslots[y]].curleft-units[slots[x]].curleft) + "px",
                                    top: -(Eunits[Eslots[y]].curtop-units[slots[x]].curtop) + "px"
                                },500).fadeOut(500);
                                Damaging(damage, slots[x]);
                                if (units[slots[x]].health <= 0) {
                                    Dies(type, slots[x]);
                                    units[slots[x]].curleft = 10000;
                                    units[slots[x]].curtop = 10000;
                                    units[slots[x]].type = "Dead";
                                }
                                Eunits[Eslots[y]].charge -= 1;
                                //minus one to offset charging
                                Eunits[Eslots[y]].charge -= 1;
                                charging();
                                Eunits[Eslots[y]].usedaction = true;
                                var randnum= Math.floor((Math.random() * 2) + 1);
                                if(randnum===2 && units[slots[x]].abilityimmunity!=true  && units[units[slots[x]].protectedby].abilityimmunity!=true && units[slots[x]].accessory!="Ribbon"){
                                    $("#TEXT").append(units[slots[x]].name + " has been put to sleep.")
                                    units[slots[x]].sleep+=1;
                                }
                            }
                        }
                    }

                    function Damaging(damage, index) {

                        if(units[index].protectedby!=-1 && units[units[index].protectedby].alive===true){
                            index=units[index].protectedby;
                        }
                        var temp = "#" + index;
                        var tempbar="#HB" + index;
                        if(units[index].abilitydodge===true || units[index].accessory==="Dodging_Boots"){
                            var randnum=Math.floor((Math.random() * 50) + 1);
                            var randchance = Math.floor((Math.random() * 2) + 1);
                            if(randnum<damage && randchance ===1){
                                damage="Miss";
                            }
                        }
                        if(damage>-1){
                            $("#TEXT").append("<p>" + Eunits[Eslots[y]].name + " did " + damage + " damage to " + units[index].name + "</p>");
                            //shield stuff
                            if(units[index].energy>0 && units[index].type==="Guard"){
                                //reducing life or energy
                                if(units[index].energy>damage){
                                    units[index].energy-=damage;
                                } else {
                                    units[index].health-=(damage-units[index].energy);
                                    units[index].energy=0;
                                }
                                $("#EB" + units[index].index).remove();
                                $("#" + index).append('<div class="energybar" id ="EB'+ units[index].index + '"style="width: ' + units[index].energy + '%"></div>');
                            } else{units[index].health-=damage}
                            //steadfast stuff
                            if(units[index].health<1 && (units[index].health + damage)!=1 && (units[index].abilitysteadfast===true || units[index].accessory==="Steadfast_Band")){
                                units[index].health = 1;
                                $("#TEXT").append(units[index].name + " was saved by steadfast.</p>");
                            }
                            $(tempbar).remove();
                            $(temp).append('<div class="healthbar" id ="HB'+ units[index].index + '"style="width: ' + (units[index].health/units[index].maxhealth)*100 + '%"></div>');
                        }


                        $(temp).append('<p id="damage' + damagenum +'" style="position: absolute; font-size:40px; margin-top:-70px; margin-left:30px; color:white; font-weight:bold ">' + damage + '</p>');
                        $("#damage" + damagenum).delay(1000).effect("puff");
damagenum+=1;
                        if (units[index].health <= 0) {
                            Dies(enemyonbottom, index);
                            units[index].curleft = 10000;
                            units[index].curtop = 10000;

                        }
                    }
                    function Dies(type, index) {
                        var dyingname = "";
                        var temp="#"+index;
                        $(temp).effect("explode");
                        dyingname=units[index].name;
                        $("#TEXT").append("<p>" + dyingname + " has died</p>");
                        units[index].alive=false;
                        units[index].group=-1;
                        if(units[index].type==="Djinn"){
                            if (slots[1] === index) {
                                var templeft = units[slots[1]].curleft;
                                var temptop = units[slots[1]].curtop;
                                slots[1] = units[slots[1]].owner;
                                units[slots[1]].captured="";
                                units[slots[1]].curleft = templeft;
                                units[slots[1]].curtop = temptop;
                                $('#battlebackground').append('<div STYLE="position:absolute; TOP:' + temptop + 'px; LEFT:' + templeft + 'px;" class="unit"  id="' + slots[1] + '" ><img src="' + units[slots[1]].image + '"/></div>');
                                $('#' + slots[1]).append('<div class="healthbar" id = "HB' + slots[1] + '" style="width: ' + (units[slots[1]].health / units[slots[1]].maxhealth) * 100 + '%"></div>');
                            }
                            if (slots[2] === index) {
                                var templeft = units[slots[2]].curleft;
                                var temptop = units[slots[2]].curtop;
                                slots[2] = units[slots[2]].owner;
                                units[slots[1]].captured="";
                                units[slots[2]].curleft = templeft;
                                units[slots[2]].curtop = temptop;
                                $('#battlebackground').append('<div STYLE="position:absolute; TOP:' + temptop + 'px; LEFT:' + templeft + 'px;" class="unit"  id="' + slots[2] + '" ><img src="' + units[slots[2]].image + '"/></div>');
                                $('#' + slots[2]).append('<div class="healthbar" id = "HB' + slots[2] + '" style="width: ' + (units[slots[2]].health / units[slots[2]].maxhealth) * 100 + '%"></div>');
                            }
                            if (slots[3] === index) {
                                var templeft = units[slots[3]].curleft;
                                var temptop = units[slots[3]].curtop;
                                slots[3] = units[slots[3]].owner;
                                units[slots[1]].captured="";
                                units[slots[3]].curleft = templeft;
                                units[slots[3]].curtop = temptop;
                                $('#battlebackground').append('<div STYLE="position:absolute; TOP:' + temptop + 'px; LEFT:' + templeft + 'px;" class="unit"  id="' + slots[3] + '" ><img src="' + units[slots[3]].image + '"/></div>');
                                $('#' + slots[3]).append('<div class="healthbar" id = "HB' + slots[3] + '" style="width: ' + (units[slots[3]].health / units[slots[3]].maxhealth) * 100 + '%"></div>');
                            }
                            getstatsbattle();
                            clickactionbuttons();
                        }
if(units[index].type==="Golem"){
    units[index].type="Enchantress"
}
                    }
                    function countering(index,y){
                        if(units[index].abilitycounter===true && Eunits[Eslots[y]].phasedout!=true){
                            var counterdamage=parseInt((Eunits[Eslots[y]].attack - Eunits[Eslots[y]].defense) *.5);
                            if(counterdamage<0){counterdamage=0}
                            Eunits[Eslots[y]].health-= counterdamage;
                            $("#TEXT").append(units[index].name + " countered for " + counterdamage + " damage");
                            $("#EHB" + Eslots[y]).remove();
                            $("#E" + Eslots[y]).append('<div class="healthbar" id ="EHB'+ Eunits[Eslots[y]].index + '"style="width: ' + (Eunits[Eslots[y]].health/Eunits[Eslots[y]].maxhealth)*100 + '%"></div>');

                            $("#battlebackground").append('<p class="damage" style="position: absolute; font-size:40px; margin-top:' + (-500 + Eunits[Eslots[y]].curtop) +'px; margin-left:' + (10 + Eunits[Eslots[y]].curleft) + 'px; color:white ">' + counterdamage + '</p>');
                            $(".damage").delay(1000).effect("puff");
                        }
                    }
                    function reacting(){
                        for(var a = 1;a<4;a++){
                           if(units[slots[a]].alive === true && units[slots[a]].abilityreact===true && Eunits[Eslots[y]].phasedout!=true && ((Eunits[Eslots[y]].curleft===units[slots[a]].curleft && Eunits[Eslots[y]].curtop===units[slots[a]].curtop +100) || (Eunits[Eslots[y]].curleft===units[slots[a]].curleft && Eunits[Eslots[y]].curtop===units[slots[a]].curtop -100) || (Eunits[Eslots[y]].curleft===units[slots[a]].curleft+100 && Eunits[Eslots[y]].curtop===units[slots[a]].curtop) || (Eunits[Eslots[y]].curleft===units[slots[a]].curleft-100 && Eunits[Eslots[y]].curtop===units[slots[a]].curtop))){
                               var reactdamage=parseInt((units[slots[a]].attack - Eunits[Eslots[y]].defense) *.5);
                               if(reactdamage<0){reactdamage=0}
                               Eunits[Eslots[y]].health-= reactdamage;
                               $("#TEXT").append(units[slots[a]].name + " reacted and did " + reactdamage + " damage");
                               $("#EHB" + Eslots[y]).remove();
                               $("#E" + Eslots[y]).append('<div class="healthbar" id ="EHB'+ Eunits[Eslots[y]].index + '"style="width: ' + (Eunits[Eslots[y]].health/Eunits[Eslots[y]].maxhealth)*100 + '%"></div>');
                               $("#battlebackground").append('<p class="damage" style="position: absolute; font-size:40px; margin-top:' + (-500 + Eunits[Eslots[y]].curtop) +'px; margin-left:' + (10 + Eunits[Eslots[y]].curleft) + 'px; color:white ">' + reactdamage + '</p>');
                               $(".damage").delay(1000).effect("puff");
                           }
                        }
                    }
                    function shootarrow(enemyindex,selectedindex){
                        //effects
                        var tempAngle = Math.atan((Eunits[selectedindex].curleft-units[enemyindex].curleft)/(units[enemyindex].curtop-Eunits[selectedindex].curtop))/(Math.PI/180);

                        if(Eunits[selectedindex].curtop<=units[enemyindex].curtop){
                            tempAngle+=180;
                        }
                        $("#battlebackground").append("<div class='Effects' style='top: " + Eunits[selectedindex].curtop +"px; left: " + Eunits[selectedindex].curleft +"px'><img style = ' -ms-transform: rotate(" + tempAngle + "deg); -webkit-transform: rotate(" + tempAngle + "deg); transform: rotate(" + tempAngle + "deg);' src='Pictures/Effects/Arrow.gif' /></div>");
                        $(".Effects").animate({
                            left: units[enemyindex].curleft + "px",
                            top: units[enemyindex].curtop + "px"
                        },500).fadeOut(500);
                        Arrow.play();
                    }
                    function charging(){
                        $("#TEXT").empty();
                        Chargesound.play();
                        Eunits[Eslots[y]].charge+=1;
                        $("#TEXT").append("<p>" + Eunits[Eslots[y]].name + "'s charge increased to  " + Eunits[Eslots[y]].charge + "\n</p>");

                        $("#ORBE" + + Eunits[Eslots[y]].index).remove();
                        var maxcharge = 0;
                        if(Eunits[Eslots[y]].type === "Fire Elemental" || Eunits[Eslots[y]].type === "Beekeeper" || Eunits[Eslots[y]].type === "Necromancer" || Eunits[Eslots[y]].type === "Shaman" || Eunits[Eslots[y]].type === "Wisp" || Eunits[Eslots[y]].type === "Frostwraith" || Eunits[Eslots[y]].type === "Waterwraith"){
                            maxcharge = 1;
                        }
                        if(Eunits[Eslots[y]].type === "Ice Elemental" || Eunits[Eslots[y]].type === "Flamewraith"){
                            maxcharge = 2;
                        }
                        if(Eunits[Eslots[y]].type === "Lightning Elemental" || Eunits[Eslots[y]].type === "Angel" || Eunits[Eslots[y]].type === "Frostlord" || Eunits[Eslots[y]].type === "Demon" || Eunits[Eslots[y]].type === "Unknown" || Eunits[Eslots[y]].type === "Dragon"){
                            maxcharge = 3;
                        }
                        if(Eunits[Eslots[y]].type === "Cannon"){
                            maxcharge=5;
                        };
                        $('#E' + Eslots[y]).append('<div id = "ORBE' + Eunits[Eslots[y]].index + '" style="color:yellow;position: absolute; font-size:20px; margin-top:-30px; margin-left:50px; width:10px; height:10px ">' + Eunits[Eslots[y]].charge + '/' + maxcharge + '</div>');

                    }

                    function aggressivemove(){
                        if(Eunits[Eslots[y]].immobilized===0){
                            if (rightempty === true && Eunits[Eslots[y]].usedaction === false && Eunits[Eslots[y]].moved === false &&
                                (
                                ((Eunits[Eslots[y]].curtop===units[slots[1]].curtop || Eunits[Eslots[y]].curtop===units[slots[1]].curtop - 100 || Eunits[Eslots[y]].curtop===units[slots[1]].curtop +100) && Eunits[Eslots[y]].curleft<units[slots[1]].curleft && units[slots[1]].alive===true && units[slots[1]].type!="Invisible") ||
                                ((Eunits[Eslots[y]].curtop===units[slots[2]].curtop || Eunits[Eslots[y]].curtop===units[slots[2]].curtop - 100 || Eunits[Eslots[y]].curtop===units[slots[2]].curtop +100) && Eunits[Eslots[y]].curleft<units[slots[2]].curleft && units[slots[2]].alive===true && units[slots[2]].type!="Invisible") ||
                                ((Eunits[Eslots[y]].curtop===units[slots[3]].curtop || Eunits[Eslots[y]].curtop===units[slots[3]].curtop - 100 || Eunits[Eslots[y]].curtop===units[slots[3]].curtop +100) && Eunits[Eslots[y]].curleft<units[slots[3]].curleft && units[slots[3]].alive===true && units[slots[3]].type!="Invisible"))) {
                                curenemyleft = Eunits[Eslots[y]].curleft;
                                curenemytop = Eunits[Eslots[y]].curtop;
                                Eunits[Eslots[y]].curleft += 100;
                                Eunits[Eslots[y]].moved = true;
                                $('.selected').animate({
                                    left: Eunits[Eslots[y]].curleft + 'px',
                                    top: Eunits[Eslots[y]].curtop + 'px'
                                }, 500);
                                reacting();
                            }
                            if (leftempty === true && Eunits[Eslots[y]].usedaction === false && Eunits[Eslots[y]].moved === false &&
                                (
                                ((Eunits[Eslots[y]].curtop===units[slots[1]].curtop || Eunits[Eslots[y]].curtop===units[slots[1]].curtop - 100 || Eunits[Eslots[y]].curtop===units[slots[1]].curtop +100) && Eunits[Eslots[y]].curleft>units[slots[1]].curleft && units[slots[1]].alive===true && units[slots[1]].type!="Invisible") ||
                                ((Eunits[Eslots[y]].curtop===units[slots[2]].curtop || Eunits[Eslots[y]].curtop===units[slots[2]].curtop - 100 || Eunits[Eslots[y]].curtop===units[slots[2]].curtop +100) && Eunits[Eslots[y]].curleft>units[slots[2]].curleft && units[slots[2]].alive===true && units[slots[2]].type!="Invisible") ||
                                ((Eunits[Eslots[y]].curtop===units[slots[3]].curtop || Eunits[Eslots[y]].curtop===units[slots[3]].curtop - 100 || Eunits[Eslots[y]].curtop===units[slots[3]].curtop +100) && Eunits[Eslots[y]].curleft>units[slots[3]].curleft && units[slots[3]].alive===true && units[slots[3]].type!="Invisible"))) {
                                curenemyleft = Eunits[Eslots[y]].curleft;
                                curenemytop = Eunits[Eslots[y]].curtop;
                                Eunits[Eslots[y]].curleft -= 100;
                                Eunits[Eslots[y]].moved = true;
                                $('.selected').animate({
                                    left: Eunits[Eslots[y]].curleft + 'px',
                                    top: Eunits[Eslots[y]].curtop + 'px'
                                }, 500);
                                reacting();
                            }


                            if (belowempty === true && Eunits[Eslots[y]].usedaction === false && Eunits[Eslots[y]].moved===false && ((Eunits[Eslots[y]].curtop<units[slots[1]].curtop && units[slots[1]].alive===true && units[slots[1]].type!="Invisible") || (Eunits[Eslots[y]].curtop<units[slots[2]].curtop && units[slots[2]].alive===true && units[slots[2]].type!="Invisible") || (Eunits[Eslots[y]].curtop<units[slots[3]].curtop && units[slots[3]].alive===true && units[slots[3]].type!="Invisible"))) {
                                curenemyleft = Eunits[Eslots[y]].curleft;
                                curenemytop = Eunits[Eslots[y]].curtop;
                                Eunits[Eslots[y]].curtop += 100;
                                Eunits[Eslots[y]].moved = true;
                                $('.selected').animate({
                                    left: Eunits[Eslots[y]].curleft + 'px',
                                    top: Eunits[Eslots[y]].curtop + 'px'
                                }, 500);
                                reacting();
                            }
                            if (upempty === true && Eunits[Eslots[y]].usedaction === false && Eunits[Eslots[y]].moved === false) {
                                curenemyleft = Eunits[Eslots[y]].curleft;
                                curenemytop = Eunits[Eslots[y]].curtop;
                                Eunits[Eslots[y]].curtop -= 100;
                                Eunits[Eslots[y]].moved = true;
                                $('.selected').animate({
                                    left: Eunits[Eslots[y]].curleft + 'px',
                                    top: Eunits[Eslots[y]].curtop + 'px'
                                }, 500);
                                reacting();
                            }
                        } else{
                            Eunits[Eslots[y]].immobilized-=1
                        }
                    }
                    function scaredmove(){
                        //move away from enemies
                        if(Eunits[Eslots[y]].immobilized===0) {
                            curenemyleft = Eunits[Eslots[y]].curleft;
                            curenemytop = Eunits[Eslots[y]].curtop;
                                if ((Eunits[Eslots[y]].usedaction === false) && moved === false && (enemyonright != "" || enemyonright2 != "")) {
                                    if (leftempty === true && moved === false) {
                                        moved = true;
                                        Eunits[Eslots[y]].curleft -= 100;
                                    }
                                    if (belowempty === true && moved === false) {
                                        moved = true;
                                        Eunits[Eslots[y]].curtop += 100;
                                    }
                                    if (upempty === true && moved === false) {
                                        moved = true;
                                        units[Eslots[y]].curtop -= 100;
                                    }

                                    $('.selected').animate({
                                        left: Eunits[Eslots[y]].curleft + 'px',
                                        top: Eunits[Eslots[y]].curtop + 'px'
                                    }, 500);
                                    reacting();
                                }
                                if ((Eunits[Eslots[y]].usedaction === false) && (enemyonleft != "" || enemyonleft2 != "") && moved === false) {
                                    if (rightempty === true && moved === false) {
                                        moved = true;
                                        Eunits[Eslots[y]].curleft += 100;
                                    }
                                    if (belowempty === true && moved === false) {
                                        moved = true;
                                        Eunits[Eslots[y]].curtop += 100;
                                    }
                                    if (upempty === true && moved === false) {
                                        moved = true;
                                        Eunits[Eslots[y]].curtop -= 100;
                                    }

                                    $('.selected').animate({
                                        left: Eunits[Eslots[y]].curleft + 'px',
                                        top: Eunits[Eslots[y]].curtop + 'px'
                                    }, 500);
                                    reacting();
                                }
                                if ((Eunits[Eslots[y]].usedaction === false) && (enemyontop != "" || enemyontop2 != "") && moved === false) {
                                    if (rightempty === true && moved === false) {
                                        moved = true;
                                        Eunits[Eslots[y]].curleft += 100;
                                    }
                                    if (belowempty === true && moved === false) {
                                        moved = true;
                                        Eunits[Eslots[y]].curtop += 100;
                                    }
                                    if (leftempty === true && moved === false) {
                                        moved = true;
                                        Eunits[Eslots[y]].curleft -= 100;
                                    }

                                    $('.selected').animate({
                                        left: Eunits[Eslots[y]].curleft + 'px',
                                        top: Eunits[Eslots[y]].curtop + 'px'
                                    }, 500);
                                    reacting();
                                }
                                if ((Eunits[Eslots[y]].usedaction === false) && (enemyonbottom != "" || enemyonbottom2 != "") && moved === false) {

                                    if (rightempty === true && moved === false) {

                                        moved = true;
                                        Eunits[Eslots[y]].curleft += 100;
                                    }
                                    if (leftempty === true && moved === false) {
                                        moved = true;
                                        Eunits[Eslots[y]].curleft -= 100;
                                    }
                                    if (upempty === true && moved === false) {
                                        moved = true;
                                        Eunits[Eslots[y]].curtop -= 100;
                                    }

                                    $('.selected').animate({
                                        left: Eunits[Eslots[y]].curleft + 'px',
                                        top: Eunits[Eslots[y]].curtop + 'px'
                                    }, 500);
                                    reacting();
                                }

                        }else{
                            Eunits[Eslots[y]].immobilized-=1
                        }
                    }
                    function flymove(type){

                        var futuretop="";
                        var futureleft="";
                            for(var i =1;i<4;i++){
                                if(units[slots[i]].type==="Invisible"){
                                    continue;
                                }
                                if(units[slots[i]].type===type && units[slots[i]].alive===true && Eunits[Eslots[y]].moved===false){
                                    //top
                                    if((units[slots[1]].curleft===units[slots[i]].curleft && units[slots[1]].curtop+100===units[slots[i]].curtop && units[slots[1]].alive===true) || (units[slots[2]].curleft===units[slots[i]].curleft && units[slots[2]].curtop+100===units[slots[i]].curtop && units[slots[2]].alive===true) || (units[slots[3]].curleft===units[slots[i]].curleft && units[slots[3]].curtop+100===units[slots[i]].curtop && units[slots[3]].alive===true) || (Eunits[Eslots[1]].curleft===units[slots[i]].curleft && Eunits[Eslots[1]].curtop+100===units[slots[i]].curtop && Eunits[Eslots[1]].alive===true) || (Eunits[Eslots[2]].curleft===units[slots[i]].curleft && Eunits[Eslots[2]].curtop+100===units[slots[i]].curtop && Eunits[Eslots[2]].alive===true) || (Eunits[Eslots[3]].curleft===units[slots[i]].curleft && Eunits[Eslots[3]].curtop+100===units[slots[i]].curtop && Eunits[Eslots[3]].alive===true) || (Eunits[Eslots[4]].curleft===units[slots[i]].curleft && Eunits[Eslots[4]].curtop+100===units[slots[i]].curtop && Eunits[Eslots[4]].alive===true) || (Eunits[Eslots[5]].curleft===units[slots[i]].curleft && Eunits[Eslots[5]].curtop+100===units[slots[i]].curtop && Eunits[Eslots[5]].alive===true)){
                                    }else{
                                        if(units[slots[i]].curtop>0){
                                            futuretop=units[slots[i]].curtop-100;
                                            futureleft=units[slots[i]].curleft;
                                            Eunits[Eslots[y]].curleft=futureleft;
                                            Eunits[Eslots[y]].curtop=futuretop;
                                            Eunits[Eslots[y]].moved=true;
                                        }
                                    }//go to top

                                    //bottom
                                    if((units[slots[1]].curleft===units[slots[i]].curleft && units[slots[1]].curtop-100===units[slots[i]].curtop && units[slots[1]].alive===true) || (units[slots[2]].curleft===units[slots[i]].curleft && units[slots[2]].curtop-100===units[slots[i]].curtop && units[slots[2]].alive===true) || (units[slots[3]].curleft===units[slots[i]].curleft && units[slots[3]].curtop-100===units[slots[i]].curtop && units[slots[3]].alive===true) || (Eunits[Eslots[1]].curleft===units[slots[i]].curleft && Eunits[Eslots[1]].curtop-100===units[slots[i]].curtop && Eunits[Eslots[1]].alive===true) || (Eunits[Eslots[2]].curleft===units[slots[i]].curleft && Eunits[Eslots[2]].curtop-100===units[slots[i]].curtop && Eunits[Eslots[2]].alive===true) || (Eunits[Eslots[3]].curleft===units[slots[i]].curleft && Eunits[Eslots[3]].curtop-100===units[slots[i]].curtop && Eunits[Eslots[3]].alive===true) || (Eunits[Eslots[4]].curleft===units[slots[i]].curleft && Eunits[Eslots[4]].curtop-100===units[slots[i]].curtop && Eunits[Eslots[4]].alive===true) || (Eunits[Eslots[5]].curleft===units[slots[i]].curleft && Eunits[Eslots[5]].curtop-100===units[slots[i]].curtop && Eunits[Eslots[5]].alive===true)){
                                    }else{
                                        if(units[slots[i]].curtop<425){
                                            futuretop=units[slots[i]].curtop+100;
                                            futureleft=units[slots[i]].curleft;
                                            Eunits[Eslots[y]].curleft=futureleft;
                                            Eunits[Eslots[y]].curtop=futuretop;
                                            Eunits[Eslots[y]].moved=true;
                                        }
                                    }//go to bottom

                                    //left
                                    if((units[slots[1]].curtop===units[slots[i]].curtop && units[slots[1]].curleft+100===units[slots[i]].curleft && units[slots[1]].alive===true) || (units[slots[2]].curtop===units[slots[i]].curtop && units[slots[2]].curleft+100===units[slots[i]].curleft && units[slots[2]].alive===true) || (units[slots[3]].curtop===units[slots[i]].curtop && units[slots[3]].curleft+100===units[slots[i]].curleft && units[slots[3]].alive===true) || (Eunits[Eslots[1]].curtop===units[slots[i]].curtop && Eunits[Eslots[1]].curleft+100===units[slots[i]].curleft && Eunits[Eslots[1]].alive===true) || (Eunits[Eslots[2]].curtop===units[slots[i]].curtop && Eunits[Eslots[2]].curleft+100===units[slots[i]].curleft && Eunits[Eslots[2]].alive===true) || (Eunits[Eslots[3]].curtop===units[slots[i]].curtop && Eunits[Eslots[3]].curleft+100===units[slots[i]].curleft && Eunits[Eslots[3]].alive===true) || (Eunits[Eslots[4]].curtop===units[slots[i]].curtop && Eunits[Eslots[4]].curleft+100===units[slots[i]].curleft && Eunits[Eslots[4]].alive===true) || (Eunits[Eslots[5]].curtop===units[slots[i]].curtop && Eunits[Eslots[5]].curleft+100===units[slots[i]].curleft && Eunits[Eslots[5]].alive===true)){
                                    }else{
                                        if(units[slots[i]].curleft>0){
                                            futureleft=units[slots[i]].curleft-100;
                                            futuretop=units[slots[i]].curtop;
                                            Eunits[Eslots[y]].curleft=futureleft;
                                            Eunits[Eslots[y]].curtop=futuretop;
                                            Eunits[Eslots[y]].moved=true;
                                        }
                                    }//go to left

                                    //right
                                    if((units[slots[1]].curtop===units[slots[i]].curtop && units[slots[1]].curleft-100===units[slots[i]].curleft && units[slots[1]].alive===true) || (units[slots[2]].curtop===units[slots[i]].curtop && units[slots[2]].curleft-100===units[slots[i]].curleft && units[slots[2]].alive===true) || (units[slots[3]].curtop===units[slots[i]].curtop && units[slots[3]].curleft-100===units[slots[i]].curleft && units[slots[3]].alive===true) || (Eunits[Eslots[1]].curtop===units[slots[i]].curtop && Eunits[Eslots[1]].curleft-100===units[slots[i]].curleft && Eunits[Eslots[1]].alive===true) || (Eunits[Eslots[2]].curtop===units[slots[i]].curtop && Eunits[Eslots[2]].curleft-100===units[slots[i]].curleft && Eunits[Eslots[2]].alive===true) || (Eunits[Eslots[3]].curtop===units[slots[i]].curtop && Eunits[Eslots[3]].curleft-100===units[slots[i]].curleft && Eunits[Eslots[3]].alive===true) || (Eunits[Eslots[4]].curtop===units[slots[i]].curtop && Eunits[Eslots[4]].curleft-100===units[slots[i]].curleft && Eunits[Eslots[4]].alive===true) || (Eunits[Eslots[5]].curtop===units[slots[i]].curtop && Eunits[Eslots[5]].curleft-100===units[slots[i]].curleft && Eunits[Eslots[5]].alive===true)){
                                    }else{
                                        if(units[slots[i]].curleft>0){
                                            futureleft=units[slots[i]].curleft+100;
                                            futuretop=units[slots[i]].curtop;
                                            Eunits[Eslots[y]].curleft=futureleft;
                                            Eunits[Eslots[y]].curtop=futuretop;
                                            Eunits[Eslots[y]].moved=true;
                                        }
                                    }//go to right

                                }//type
                            }//for statement
                            if(futuretop!="" && futureleft!=""){
                                $("#E" + Eslots[y]).animate({
                                    left: futureleft + "px",
                                    top: futuretop + "px"
                                },500);
                            }
                        reacting();

                    }
                    function scrollingmove(){
                        //move away from enemies
                        if(Eunits[Eslots[y]].immobilized===0) {
                            curenemyleft = Eunits[Eslots[y]].curleft;
                            curenemytop = Eunits[Eslots[y]].curtop;
                                if(Eunits[Eslots[y]].usedaction === false){
                                    var moveto="";
                                    for (var i =1;i<4;i++){
                                        if(moved===true){
                                            break;
                                        }
                                        if(units[slots[i]].type==="Invisible"){
                                            continue;
                                        }
                                        if (units[slots[i]].curleft<Eunits[Eslots[y]].curleft && units[slots[i]].alive===true && leftempty===true){
                                            moveto="left"
                                        }
                                        if (units[slots[i]].curleft>Eunits[Eslots[y]].curleft && units[slots[i]].alive===true && rightempty===true){
                                            moveto="right"
                                        }
                                        if (moveto==="right"){
                                            moved = true;
                                            Eunits[Eslots[y]].curleft += 100;
                                        }
                                        if (moveto==="left"){
                                            moved = true;
                                            Eunits[Eslots[y]].curleft -= 100;
                                        }
                                        $('.selected').animate({
                                            left: Eunits[Eslots[y]].curleft + 'px',
                                            top: Eunits[Eslots[y]].curtop + 'px'
                                        }, 50);
                                        reacting();
                                    }
                                }
                        }else{
                            Eunits[Eslots[y]].immobilized-=1
                        }
                    }
                    function randommove(){
                        //move away from enemies
                        if(Eunits[Eslots[y]].immobilized===0) {
                            if(units[enemyonbottomindex].abilityintimidate!=true && units[enemyontopindex].abilityintimidate!=true && units[enemyonleftindex].abilityintimidate!=true && units[enemyonrightindex].abilityintimidate!=true){
                                var keepgoing=true;
                                var templeft=0;
                                var temptop=0;
                                var templeftnum=0;
                                var temptopnum=0;
                                while(keepgoing===true){
                                    templeft=Math.floor((Math.random() * 4));
                                    temptop=Math.floor((Math.random() * 4));
                                    templeftnum=templeft*100 + 25;
                                    temptopnum=temptop*100 + 25;
                                    if(!(templeftnum===units[slots[1]].curleft && temptopnum===units[slots[1]].curtop) && !(templeftnum===units[slots[2]].curleft && temptopnum===units[slots[2]].curtop) && !(templeftnum===units[slots[3]].curleft && temptopnum===units[slots[3]].curtop)
                                        && !(templeftnum===Eunits[Eslots[1]].curleft && temptopnum===Eunits[Eslots[1]].curtop)&& !(templeftnum===Eunits[Eslots[2]].curleft && temptopnum===Eunits[Eslots[2]].curtop)&& !(templeftnum===Eunits[Eslots[3]].curleft && temptopnum===Eunits[Eslots[3]].curtop)
                                        && !(templeftnum===Eunits[Eslots[4]].curleft && temptopnum===Eunits[Eslots[4]].curtop)&& !(templeftnum===Eunits[Eslots[5]].curleft && temptopnum===Eunits[Eslots[5]].curtop)){
                                        Eunits[Eslots[y]].curleft=templeftnum;
                                        Eunits[Eslots[y]].curtop=temptopnum;
                                        keepgoing=false;
                                    }

                                }
                                $("#E" + Eslots[y]).animate({
                                    left:Eunits[Eslots[y]].curleft + "px",
                                    top:Eunits[Eslots[y]].curtop + "px"
                                })
                                reacting();
                            }
                        }else{
                            Eunits[Eslots[y]].immobilized-=1
                        }
                    }


                    if ((Eunits[Eslots[y]].type === "Warrior")) {
                        if(Eunits[Eslots[y]].blind>0){
                        } else {
                            warriorwhotoattack("Wizard");
                            warriorwhotoattack("Sorcerer");
                            warriorwhotoattack("Enchantress");
                            warriorwhotoattack("Healer");
                            warriorwhotoattack("Templar");
                            warriorwhotoattack("Archer");
                            warriorwhotoattack("Rouge");
                            warriorwhotoattack("Mage");
                            warriorwhotoattack("Thief");
                            warriorwhotoattack("Soldier");
                            warriorwhotoattack("Knight");
                            warriorwhotoattack("Djinn");
                            warriorwhotoattack("Guard");
                            warriorwhotoattack("Golem");
                        }

                            aggressivemove();



                        findenemy();

                        if(Eunits[Eslots[y]].blind>0){
                        } else {
                            warriorwhotoattack("Wizard");
                            warriorwhotoattack("Sorcerer");
                            warriorwhotoattack("Enchantress");
                            warriorwhotoattack("Healer");
                            warriorwhotoattack("Templar");
                            warriorwhotoattack("Archer");
                            warriorwhotoattack("Rouge");
                            warriorwhotoattack("Mage");
                            warriorwhotoattack("Thief");
                            warriorwhotoattack("Soldier");
                            warriorwhotoattack("Knight");
                            warriorwhotoattack("Djinn");
                            warriorwhotoattack("Guard");
                            warriorwhotoattack("Golem");
                        }
                    }
                    if ((Eunits[Eslots[y]].type === "Goblin") || Eunits[Eslots[y]].type === "Wolf" || Eunits[Eslots[y]].type === "Djinn" || Eunits[Eslots[y]].type === "Zombie" || Eunits[Eslots[y]].type === "Golem" || Eunits[Eslots[y]].type === "Clunker" || Eunits[Eslots[y]].type === "Magnet" || Eunits[Eslots[y]].type === "Sounddepressor") {

                        if(Eunits[Eslots[y]].blind>0){
                        } else{
                            goblinwhotoattack("Wizard");
                            goblinwhotoattack("Sorcerer");
                            goblinwhotoattack("Enchantress");
                            goblinwhotoattack("Healer");
                            goblinwhotoattack("Templar");
                            goblinwhotoattack("Archer");
                            goblinwhotoattack("Rouge");
                            goblinwhotoattack("Mage");
                            goblinwhotoattack("Thief");
                            goblinwhotoattack("Soldier");
                            goblinwhotoattack("Knight");
                            goblinwhotoattack("Djinn");
                            goblinwhotoattack("Guard");
                            goblinwhotoattack("Golem");
                        }

                            aggressivemove();


                        findenemy();

                        if(Eunits[Eslots[y]].blind>0){
                        } else{
                            goblinwhotoattack("Wizard");
                            goblinwhotoattack("Sorcerer");
                            goblinwhotoattack("Enchantress");
                            goblinwhotoattack("Healer");
                            goblinwhotoattack("Templar");
                            goblinwhotoattack("Archer");
                            goblinwhotoattack("Rouge");
                            goblinwhotoattack("Mage");
                            goblinwhotoattack("Thief");
                            goblinwhotoattack("Soldier");
                            goblinwhotoattack("Knight");
                            goblinwhotoattack("Djinn");
                            goblinwhotoattack("Guard");
                            goblinwhotoattack("Golem");
                        }


                    }
                    if (Eunits[Eslots[y]].type === "Bear") {

                        if(Eunits[Eslots[y]].blind>0){
                        } else{
                            bearwhotoattack("Wizard");
                            bearwhotoattack("Sorcerer");
                            bearwhotoattack("Enchantress");
                            bearwhotoattack("Healer");
                            bearwhotoattack("Templar");
                            bearwhotoattack("Archer");
                            bearwhotoattack("Rouge");
                            bearwhotoattack("Mage");
                            bearwhotoattack("Thief");
                            bearwhotoattack("Soldier");
                            bearwhotoattack("Knight");
                            bearwhotoattack("Djinn");
                            bearwhotoattack("Guard");
                            bearwhotoattack("Golem");
                        }

                            aggressivemove();


                        findenemy();

                        if(Eunits[Eslots[y]].blind>0){
                        } else{
                            bearwhotoattack("Wizard");
                            bearwhotoattack("Sorcerer");
                            bearwhotoattack("Enchantress");
                            bearwhotoattack("Healer");
                            bearwhotoattack("Templar");
                            bearwhotoattack("Archer");
                            bearwhotoattack("Rouge");
                            bearwhotoattack("Mage");
                            bearwhotoattack("Thief");
                            bearwhotoattack("Soldier");
                            bearwhotoattack("Knight");
                            bearwhotoattack("Djinn");
                            bearwhotoattack("Guard");
                            bearwhotoattack("Golem");
                        }


                    }
                    if (Eunits[Eslots[y]].type === "Gremlin" || Eunits[Eslots[y]].type === "Hellhound") {

                        if(Eunits[Eslots[y]].blind>0){
                        } else{
                            goblinwhotoattack("Wizard");
                            goblinwhotoattack("Sorcerer");
                            goblinwhotoattack("Enchantress");
                            goblinwhotoattack("Healer");
                            goblinwhotoattack("Templar");
                            goblinwhotoattack("Archer");
                            goblinwhotoattack("Rouge");
                            goblinwhotoattack("Mage");
                            goblinwhotoattack("Thief");
                            goblinwhotoattack("Soldier");
                            goblinwhotoattack("Knight");
                            goblinwhotoattack("Djinn");
                            goblinwhotoattack("Guard");
                            goblinwhotoattack("Golem");
                        }

                            aggressivemove();

                        findenemy();

                        if(Eunits[Eslots[y]].blind>0){
                        } else{
                            goblinwhotoattack("Wizard");
                            goblinwhotoattack("Sorcerer");
                            goblinwhotoattack("Enchantress");
                            goblinwhotoattack("Healer");
                            goblinwhotoattack("Templar");
                            goblinwhotoattack("Archer");
                            goblinwhotoattack("Rouge");
                            goblinwhotoattack("Mage");
                            goblinwhotoattack("Thief");
                            goblinwhotoattack("Soldier");
                            goblinwhotoattack("Knight");
                            goblinwhotoattack("Djinn");
                            goblinwhotoattack("Guard");
                            goblinwhotoattack("Golem");
                        }

                        Eunits[Eslots[y]].moved=false;

                            aggressivemove();

                        findenemy();

                        if(Eunits[Eslots[y]].blind>0){
                        } else{
                            goblinwhotoattack("Wizard");
                            goblinwhotoattack("Sorcerer");
                            goblinwhotoattack("Enchantress");
                            goblinwhotoattack("Healer");
                            goblinwhotoattack("Templar");
                            goblinwhotoattack("Archer");
                            goblinwhotoattack("Rouge");
                            goblinwhotoattack("Mage");
                            goblinwhotoattack("Thief");
                            goblinwhotoattack("Soldier");
                            goblinwhotoattack("Knight");
                            goblinwhotoattack("Djinn");
                            goblinwhotoattack("Guard");
                            goblinwhotoattack("Golem");
                        }


                    }
                    if ((Eunits[Eslots[y]].type === "Spider")) {
                        //Move left
                        var moved = false;
                        if(Eunits[Eslots[y]].blind>0){
                        } else {
                            spiderwhotoattack("Wizard");
                            spiderwhotoattack("Sorcerer");
                            spiderwhotoattack("Enchantress");
                            spiderwhotoattack("Healer");
                            spiderwhotoattack("Templar");
                            spiderwhotoattack("Archer");
                            spiderwhotoattack("Rouge");
                            spiderwhotoattack("Mage");
                            spiderwhotoattack("Thief");
                            spiderwhotoattack("Soldier");
                            spiderwhotoattack("Knight");
                            spiderwhotoattack("Djinn");
                            spiderwhotoattack("Guard");
                            spiderwhotoattack("Golem");
                        }

                            scrollingmove();


                        //attack enemies
                        if(Eunits[Eslots[y]].blind>0){
                        } else {
                            spiderwhotoattack("Wizard");
                            spiderwhotoattack("Sorcerer");
                            spiderwhotoattack("Enchantress");
                            spiderwhotoattack("Healer");
                            spiderwhotoattack("Templar");
                            spiderwhotoattack("Archer");
                            spiderwhotoattack("Rouge");
                            spiderwhotoattack("Mage");
                            spiderwhotoattack("Thief");
                            spiderwhotoattack("Soldier");
                            spiderwhotoattack("Knight");
                            spiderwhotoattack("Djinn");
                            spiderwhotoattack("Guard");
                           spiderwhotoattack("Golem");
                        }
                    }

                    if ((Eunits[Eslots[y]].type === "Werewolf")) {
                        Eunits[Eslots[y]].health+=5;
                        if(Eunits[Eslots[y]].health>Eunits[Eslots[y]].maxhealth){
                            Eunits[Eslots[y]].health=Eunits[Eslots[y]].maxhealth}

                        $("#TEXT").append("The werewolf heals to " + Eunits[Eslots[y]].health);
                        $("#EHB" + Eunits[Eslots[y]].index).remove();
                        $("#E"+Eunits[Eslots[y]].index).append('<div class="healthbar" id ="EHB'+ Eunits[Eslots[y]].index + '"style="width: ' + (Eunits[Eslots[y]].health/Eunits[Eslots[y]].maxhealth)*100 + '%"></div>');

                        if(Eunits[Eslots[y]].blind>0){
                        } else{
                            goblinwhotoattack("Wizard");
                            goblinwhotoattack("Sorcerer");
                            goblinwhotoattack("Enchantress");
                            goblinwhotoattack("Healer");
                            goblinwhotoattack("Templar");
                            goblinwhotoattack("Archer");
                            goblinwhotoattack("Rouge");
                            goblinwhotoattack("Mage");
                            goblinwhotoattack("Thief");
                            goblinwhotoattack("Soldier");
                            goblinwhotoattack("Knight");
                            goblinwhotoattack("Djinn");
                            goblinwhotoattack("Guard");
                            goblinwhotoattack("Golem");
                        }


                            aggressivemove();


                        findenemy();
                        if(Eunits[Eslots[y]].blind>0){
                        } else{
                            goblinwhotoattack("Wizard");
                            goblinwhotoattack("Sorcerer");
                            goblinwhotoattack("Enchantress");
                            goblinwhotoattack("Healer");
                            goblinwhotoattack("Templar");
                            goblinwhotoattack("Archer");
                            goblinwhotoattack("Rouge");
                            goblinwhotoattack("Mage");
                            goblinwhotoattack("Thief");
                            goblinwhotoattack("Soldier");
                            goblinwhotoattack("Knight");
                            goblinwhotoattack("Djinn");
                            goblinwhotoattack("Guard");
                            goblinwhotoattack("Golem");
                        }



                    }
                    if ((Eunits[Eslots[y]].type === "Vampire")) {
                        if(Eunits[Eslots[y]].blind>0){
                        } else {
                            vampirewhotoattack("Wizard");
                            vampirewhotoattack("Sorcerer");
                            vampirewhotoattack("Enchantress");
                            vampirewhotoattack("Healer");
                            vampirewhotoattack("Templar");
                            vampirewhotoattack("Archer");
                            vampirewhotoattack("Rouge");
                            vampirewhotoattack("Mage");
                            vampirewhotoattack("Thief");
                            vampirewhotoattack("Soldier");
                            vampirewhotoattack("Knight");
                            vampirewhotoattack("Djinn");
                            vampirewhotoattack("Guard");
                            vampirewhotoattack("Golem");
                        }

                            aggressivemove();


                        findenemy();
                        if(Eunits[Eslots[y]].blind>0){
                        } else {
                            vampirewhotoattack("Wizard");
                            vampirewhotoattack("Sorcerer");
                            vampirewhotoattack("Enchantress");
                            vampirewhotoattack("Healer");
                            vampirewhotoattack("Templar");
                            vampirewhotoattack("Archer");
                            vampirewhotoattack("Rouge");
                            vampirewhotoattack("Mage");
                            vampirewhotoattack("Thief");
                            vampirewhotoattack("Soldier");
                            vampirewhotoattack("Knight");
                            vampirewhotoattack("Djinn");
                            vampirewhotoattack("Guard");
                            vampirewhotoattack("Golem");
                        }

                    }
                    if ((Eunits[Eslots[y]].type === "Sparrow") || Eunits[Eslots[y]].type === "Bee" || Eunits[Eslots[y]].type === "Angel")  {

                        if(Eunits[Eslots[y]].blind>0){
                        } else{
                            goblinwhotoattack("Wizard");
                            goblinwhotoattack("Sorcerer");
                            goblinwhotoattack("Enchantress");
                            goblinwhotoattack("Healer");
                            goblinwhotoattack("Templar");
                            goblinwhotoattack("Archer");
                            goblinwhotoattack("Rouge");
                            goblinwhotoattack("Mage");
                            goblinwhotoattack("Thief");
                            goblinwhotoattack("Soldier");
                            goblinwhotoattack("Knight");
                            goblinwhotoattack("Djinn");
                            goblinwhotoattack("Guard");
                            goblinwhotoattack("Golem");
                        }

                            if(Eunits[Eslots[y]].immobilized===0){
                                flymove("Nothing");
                                flymove("Wizard");
                                flymove("Sorcerer");
                                flymove("Enchantress");
                                flymove("Healer");
                                flymove("Templar");
                                flymove("Archer");
                                flymove("Rouge");
                                flymove("Mage");
                                flymove("Thief");
                                flymove("Soldier");
                                flymove("Knight");
                                flymove("Djinn");
                                flymove("Guard");
                                flymove("Golem");
                            }else{
                                Eunits[Eslots[y]].immobilized-=1
                            }




                        findenemy();

                        if(Eunits[Eslots[y]].blind>0){
                        } else{
                            goblinwhotoattack("Wizard");
                            goblinwhotoattack("Sorcerer");
                            goblinwhotoattack("Enchantress");
                            goblinwhotoattack("Healer");
                            goblinwhotoattack("Templar");
                            goblinwhotoattack("Archer");
                            goblinwhotoattack("Rouge");
                            goblinwhotoattack("Mage");
                            goblinwhotoattack("Thief");
                            goblinwhotoattack("Soldier");
                            goblinwhotoattack("Knight");
                            goblinwhotoattack("Djinn");
                            goblinwhotoattack("Guard");
                            goblinwhotoattack("Golem");
                        }

                        if(Eunits[Eslots[y]].type==="Angel"){
                            if (Eunits[Eslots[y]].charge >= 3) {
                                if(Eunits[Eslots[y]].silenced>0){
                                    Eunits[Eslots[y]].silenced-=1;
                                } else {
                                    Eunits[Eslots[y]].health+=50;
                                    Eunits[Eslots[y]].charge=0;
                                    //minus one to offset charging
                                    Eunits[Eslots[y]].charge -= 1;
                                    charging();
                                    if(Eunits[Eslots[y]].health>Eunits[Eslots[y]].maxhealth){
                                        Eunits[Eslots[y]].health=Eunits[Eslots[y]].maxhealth}

                                    $("#TEXT").append("The Angel heals to " + Eunits[Eslots[y]].health);
                                    $("#EHB" + Eunits[Eslots[y]].index).remove();
                                    $("#E"+Eunits[Eslots[y]].index).append('<div class="healthbar" id ="EHB'+ Eunits[Eslots[y]].index + '"style="width: ' + (Eunits[Eslots[y]].health/Eunits[Eslots[y]].maxhealth)*100 + '%"></div>');
                                    Eunits[Eslots[y]].usedaction=true;
                                }
                            }
                            charging();
                        }
                    }

                    //familar guys
                    if ((Eunits[Eslots[y]].type === "Beekeeper")) {

                        //summon bee
                        if (Eunits[Eslots[y]].charge >= 1) {
                            if(Eunits[Eslots[y]].silenced>0){
                            } else {
                                var tempslot=-1;

                                Eunits[Eslots[y]].charge-=1;
                                //minus one to offset charging
                                Eunits[Eslots[y]].charge -= 1;
                                charging();

                                //find empty slot
                                for (var o =1;o<6;o++){
                                    if(Eunits[Eslots[o]].alive===false){
                                        tempslot= o
                                    }
                                }


                                if(tempslot!=-1){
                                    if(units[slots[1]].aetherban===true || units[slots[2]].aetherban===true || units[slots[2]].aetherban===true){
                                        $("#TEXT").append("<p>The summoner can't summon due to the aetherban</p>");

                                    } else {
                                        Eunits[Eslots[tempslot]].health = Eunits[Eslots[tempslot]].maxhealth;
                                        Eunits[Eslots[tempslot]].alive = true;
                                        $("#E" + Eslots[tempslot]).fadeIn();
                                    }
                                }
                            }
                        } else {
                            charging();
                        }

                    }
                    if ((Eunits[Eslots[y]].type === "Necromancer")) {

                        //summon bee
                        if (Eunits[Eslots[y]].charge >= 1) {
                            if(Eunits[Eslots[y]].silenced>0){
                            } else {

                                var tempslot=-1;

                                //find free index number
                                Eunits[Eslots[y]].charge-=1;
                                //minus one to offset charging
                                Eunits[Eslots[y]].charge -= 1;
                                charging();


                                //find empty slot
                                for (var o =1;o<4;o++){
                                    if(Eunits[Eslots[o]].alive===false){
                                        tempslot= o
                                    }
                                }


                                if(tempslot!=-1  && !(enemyonbottom!=""&& enemyonleft!="" && enemyonright!="")){
                                    if(enemyonbottom===""){
                                        Eunits[Eslots[tempslot]].curtop+=100;
                                    }else if(enemyonleft===""){
                                        Eunits[Eslots[tempslot]].curleft-=100;
                                    }else if(enemyonright===""){
                                        Eunits[Eslots[tempslot]].curleft+=100;
                                    }
                                    if(units[slots[1]].aetherban===true || units[slots[2]].aetherban===true || units[slots[2]].aetherban===true){
                                        $("#TEXT").append("<p>The summoner can't summon due to the aetherban</p>");

                                    } else{
                                        $("#E" + Eslots[tempslot]).animate({
                                            top: Eunits[Eslots[tempslot]].curtop + "px",
                                            left: Eunits[Eslots[tempslot]].curleft + "px"
                                        });
                                        Eunits[Eslots[tempslot]].health=Eunits[Eslots[tempslot]].maxhealth;
                                        Eunits[Eslots[tempslot]].alive=true;
                                        $("#E" + Eslots[tempslot]).fadeIn();
                                    }

                                }
                            }
                        } else {
                            charging();
                        }

                    }
                    if ((Eunits[Eslots[y]].type === "Shaman")) {

                        //summon Golem
                        if (Eunits[Eslots[y]].charge >= 1) {
                            if(Eunits[Eslots[y]].silenced>0){
                            } else {

                                var tempslot=-1;

                                //find free index number
                                Eunits[Eslots[y]].charge-=1;
                                //minus one to offset charging
                                Eunits[Eslots[y]].charge -= 1;
                                charging();

                                if(Eunits[Eslots[1]].alive===false && !(enemyonbottom!=""&& enemyonleft!="" && enemyonright!="")){
                                    if(enemyonbottom===""){
                                        Eunits[Eslots[1]].curtop+=100;
                                    }else if(enemyonleft===""){
                                        Eunits[Eslots[1]].curleft-=100;
                                    }else if(enemyonright===""){
                                        Eunits[Eslots[1]].curleft+=100;
                                    }
                                    if(units[slots[1]].aetherban===true || units[slots[2]].aetherban===true || units[slots[2]].aetherban===true){
                                        $("#TEXT").append("<p>The summoner can't summon due to the aetherban</p>");

                                    } else {
                                        $("#E" + Eslots[1]).animate({
                                            top: Eunits[Eslots[1]].curtop + "px",
                                            left: Eunits[Eslots[1]].curleft + "px"
                                        });
                                        Eunits[Eslots[1]].health = Eunits[Eslots[1]].maxhealth;
                                        Eunits[Eslots[1]].alive = true;
                                        $("#E" + Eslots[1]).fadeIn();
                                    }
                                }
                            }
                        } else {
                            charging();
                        }

                    }

                    //summons
                    if ((Eunits[Eslots[y]].type === "Demon")) {

                        if(Eunits[Eslots[y]].blind>0){
                        } else{
                            goblinwhotoattack("Wizard");
                            goblinwhotoattack("Sorcerer");
                            goblinwhotoattack("Enchantress");
                            goblinwhotoattack("Healer");
                            goblinwhotoattack("Templar");
                            goblinwhotoattack("Archer");
                            goblinwhotoattack("Rouge");
                            goblinwhotoattack("Mage");
                            goblinwhotoattack("Thief");
                            goblinwhotoattack("Soldier");
                            goblinwhotoattack("Knight");
                            goblinwhotoattack("Djinn");
                            goblinwhotoattack("Guard");
                            goblinwhotoattack("Golem");
                        }

                            aggressivemove();


                        findenemy();

                        if(Eunits[Eslots[y]].blind>0){
                        } else{
                            goblinwhotoattack("Wizard");
                            goblinwhotoattack("Sorcerer");
                            goblinwhotoattack("Enchantress");
                            goblinwhotoattack("Healer");
                            goblinwhotoattack("Templar");
                            goblinwhotoattack("Archer");
                            goblinwhotoattack("Rouge");
                            goblinwhotoattack("Mage");
                            goblinwhotoattack("Thief");
                            goblinwhotoattack("Soldier");
                            goblinwhotoattack("Knight");
                            goblinwhotoattack("Djinn");
                            goblinwhotoattack("Guard");
                            goblinwhotoattack("Golem");
                        }

                        if (Eunits[Eslots[y]].charge >= 3) {
                            if(Eunits[Eslots[y]].silenced>0){
                                Eunits[Eslots[y]].silenced-=1;
                            } else {
                                for(var i = 1; i<4; i++){
                                    if(units[slots[i]].alive===true && Eunits[Eslots[y]].usedaction===false){
                                        units[slots[i]].health=0;
                                        Eunits[Eslots[y]].charge=0;
                                        //minus one to offset charging
                                        Eunits[Eslots[y]].charge -= 1;
                                        charging();
                                        $("#TEXT").append("The demon cast DEATH and killed " + units[slots[i]].name)
                                        Dies(units[slots[i]].type,slots[i]);
                                        Eunits[Eslots[y]].usedaction=true;
                                        $("#battlebackground").append("<div class='slashEffects' style='margin-top: " + (units[slots[i]].curtop-450) +"px; margin-left: " + (units[slots[i]].curleft-0) +"px'><img src='Pictures/Effects/Death.gif' /></div>");
                                        $(".slashEffects").fadeOut(2000);
                                        Death.play();
                                    }
                                }
                            }
                        }
                        if (Eunits[Eslots[y]].usedaction === false) {
                            charging();
                        }

                    }
                    if ((Eunits[Eslots[y]].type === "Frostlord")) {


                        scaredmove();



                        if (Eunits[Eslots[y]].charge >= 3) {
                            if(Eunits[Eslots[y]].silenced>0){
                            } else {
                                for(var i = 1; i<4; i++){
                                    if(units[slots[i]].alive===true){
                                        Eunits[Eslots[y]].charge=0;
                                        //minus one to offset charging
                                        Eunits[Eslots[y]].charge -= 1;
                                        charging();
                                        var damage=60-units[slots[i]].resistance;
                                        if (damage<0){damage=0}
                                        units[slots[i]].health-=damage;
                                        Damaging(damage,slots[i]);
                                        $("#battlebackground").append("<img class='totalbackground' src='Pictures/Effects/Blizzard.gif' />");
                                        Hurricane.play();
                                        $(".totalbackground").fadeOut(4000);
                                        if(units[slots[i]].health<=0){
                                            Dies(units[slots[i]].type,slots[i]);
                                        }
                                        Eunits[Eslots[y]].usedaction=true;
                                    }
                                }
                            }
                        }
                        if (Eunits[Eslots[y]].usedaction === false) {
                            charging();
                        }

                    }

                    if ((Eunits[Eslots[y]].type === "Assassin")) {
                        //Move left
                        var moved = false;
                        Eunits[Eslots[y]].usedsleep+=1;
                        //move away from enemies
                        scaredmove();
                        //attack enemies
                        if(Eunits[Eslots[y]].blind>0){
                        } else {
                            rangedwhotoattack("Nothing");
                            rangedwhotoattack("Wizard");
                            rangedwhotoattack("Sorcerer");
                            rangedwhotoattack("Enchantress");
                            rangedwhotoattack("Healer");
                            rangedwhotoattack("Templar");
                            rangedwhotoattack("Archer");
                            rangedwhotoattack("Rouge");
                            rangedwhotoattack("Mage");
                            rangedwhotoattack("Thief");
                            rangedwhotoattack("Soldier");
                            rangedwhotoattack("Knight");
                            rangedwhotoattack("Djinn");
                            rangedwhotoattack("Guard");
                            rangedwhotoattack("Golem");
                        }
                    }
                    if ((Eunits[Eslots[y]].type === "Spitter")) {
                        //Move left
                        var moved = false;
                        Eunits[Eslots[y]].usedimmobolized+=1;
                        if(Eunits[Eslots[y]].blind>0){
                        } else {
                            spitterwhotoattack("Wizard");
                            spitterwhotoattack("Sorcerer");
                            spitterwhotoattack("Enchantress");
                            spitterwhotoattack("Healer");
                            spitterwhotoattack("Templar");
                            spitterwhotoattack("Archer");
                            spitterwhotoattack("Rouge");
                            spitterwhotoattack("Mage");
                            spitterwhotoattack("Thief");
                            spitterwhotoattack("Soldier");
                            spitterwhotoattack("Knight");
                            spitterwhotoattack("Djinn");
                            spitterwhotoattack("Guard");
                            spitterwhotoattack("Golem");
                        }


                            scrollingmove();


                        //attack enemies
                        if(Eunits[Eslots[y]].blind>0 && Eunits[Eslots[y]].usedaction===false){
                        } else {
                            spitterwhotoattack("Wizard");
                            spitterwhotoattack("Sorcerer");
                            spitterwhotoattack("Enchantress");
                            spitterwhotoattack("Healer");
                            spitterwhotoattack("Templar");
                            spitterwhotoattack("Archer");
                            spitterwhotoattack("Rouge");
                            spitterwhotoattack("Mage");
                            spitterwhotoattack("Thief");
                            spitterwhotoattack("Soldier");
                            spitterwhotoattack("Knight");
                            spitterwhotoattack("Djinn");
                            spitterwhotoattack("Guard");
                            spitterwhotoattack("Golem");
                        }
                    }

                    //Elementals
                    if ((Eunits[Eslots[y]].type === "Fire Elemental")) {

                        scaredmove()

                        findenemy();
                        if (Eunits[Eslots[y]].charge >= 1) {
                            if(Eunits[Eslots[y]].silenced>0){
                            } else {
                                firewhotoattack("Nothing");
                                firewhotoattack("Knight");
                                firewhotoattack("Soldier");
                                firewhotoattack("Archer");
                                firewhotoattack("Rouge");
                                firewhotoattack("Mage");
                                firewhotoattack("Thief");
                                firewhotoattack("Enchantress");
                                firewhotoattack("Healer");
                                firewhotoattack("Wizard");
                                firewhotoattack("Sorcerer");
                                firewhotoattack("Templar");
                                firewhotoattack("Djinn");
                                firewhotoattack("Guard");
                                firewhotoattack("Golem");
                            }
                        }
                        if (Eunits[Eslots[y]].usedaction === false) {
                            charging();
                        }

                    }
                    if ((Eunits[Eslots[y]].type === "Ice Elemental")) {
                        if (Eunits[Eslots[y]].charge >= 2) {
                            if(Eunits[Eslots[y]].silenced>0){
                            } else {
                                icewhotoattack("Knight");
                                icewhotoattack("Soldier");
                                icewhotoattack("Archer");
                                icewhotoattack("Rouge");
                                icewhotoattack("Mage");
                                icewhotoattack("Thief");
                                icewhotoattack("Enchantress");
                                icewhotoattack("Healer");
                                icewhotoattack("Wizard");
                                icewhotoattack("Sorcerer");
                                icewhotoattack("Templar");
                                icewhotoattack("Djinn");
                                icewhotoattack("Guard");
                                icewhotoattack("Golem");
                            }
                        }

                            aggressivemove();

                        findenemy();

                        if (Eunits[Eslots[y]].charge >= 2) {
                            if(Eunits[Eslots[y]].silenced>0){
                            } else {
                                icewhotoattack("Knight");
                                icewhotoattack("Soldier");
                                icewhotoattack("Archer");
                                icewhotoattack("Rouge");
                                icewhotoattack("Mage");
                                icewhotoattack("Thief");
                                icewhotoattack("Enchantress");
                                icewhotoattack("Healer");
                                icewhotoattack("Wizard");
                                icewhotoattack("Sorcerer");
                                icewhotoattack("Templar");
                                icewhotoattack("Djinn");
                                icewhotoattack("Guard");
                                icewhotoattack("Golem");
                            }
                        }
                        if (Eunits[Eslots[y]].usedaction === false) {
                            charging();
                        }

                    }
                    if ((Eunits[Eslots[y]].type === "Lightning Elemental")) {
                        //Move left
                        var moved = false;

                        scaredmove();
                        //attack enemies

                        if (Eunits[Eslots[y]].charge >= 3) {
                            if(Eunits[Eslots[y]].silenced>0){
                            } else {
                                lightningwhotoattack("Knight");
                                lightningwhotoattack("Soldier");
                                lightningwhotoattack("Archer");
                                lightningwhotoattack("Rouge");
                                lightningwhotoattack("Mage");
                                lightningwhotoattack("Thief");
                                lightningwhotoattack("Enchantress");
                                lightningwhotoattack("Healer");
                                lightningwhotoattack("Wizard");
                                lightningwhotoattack("Sorcerer");
                                lightningwhotoattack("Templar");
                                lightningwhotoattack("Djinn");
                                lightningwhotoattack("Guard");
                                lightningwhotoattack("Golem");
                            }
                        } else {
                          charging();

                        }
                    }
                    if ((Eunits[Eslots[y]].type === "Wisp")) {
                        //Move left
                        var moved = false;
                            randommove();


                        //attack enemies

                        if (Eunits[Eslots[y]].charge >= 1) {
                            if(Eunits[Eslots[y]].silenced>0){
                            } else {
                                wispwhotoattack("Knight");
                                wispwhotoattack("Soldier");
                                wispwhotoattack("Archer");
                                wispwhotoattack("Rouge");
                                wispwhotoattack("Mage");
                                wispwhotoattack("Thief");
                                wispwhotoattack("Enchantress");
                                wispwhotoattack("Healer");
                                wispwhotoattack("Wizard");
                                wispwhotoattack("Sorcerer");
                                wispwhotoattack("Templar");
                                wispwhotoattack("Djinn");
                                wispwhotoattack("Guard");
                                wispwhotoattack("Golem");
                            }
                        } else {
                            charging();
                        }
                    }

                    //robots
                    if (Eunits[Eslots[y]].type === "Cannon") {

                        if(Eunits[Eslots[y]].silenced>0){
                        } else{
                         charging();
                        }
                        if(Eunits[Eslots[y]].charge===6){
                            Eunits[Eslots[y]].charge=0;
                            $("#E" + Eslots[y]).append("<div class='staticEffects' style='margin-top:-180px; margin-left:-120px'><img src='Pictures/Effects/boom.gif' /></div>");
                           Lightning.play();
                            setTimeout(function(){ $(".staticEffects").remove()},1000);
                            setTimeout(function(){
                            for(var i = 1;i<4;i++){
                                var damage=200-units[slots[i]].resistance;
                                Damaging(damage, slots[i]);
                                if (units[slots[i]].health <= 0) {

                                        Dies(enemyonbottom, slots[i]);

                                    units[slots[i]].curleft = 10000;
                                    units[slots[i]].curtop = 10000;
                                    $("#TEXT").append("The cannon exploded!")
                                }
                            }
                                if (units[slots[1]].alive === false && units[slots[2]].alive === false && units[slots[3]].alive === false) {
                                    curmapmusic.src="sounds/music-tutorial.mp3";
                                    curmapmusic.loop=true;
                                    curmapmusic.play();
                                    curbattlemusic.src="";
                                    curbattlemusic.play();

                                    $("#TEXT").empty();
                                    liberate(groups[curally].location);
                                    $("#battlebackground").remove();
                                    $("#M"+curally).remove();
                                    $("#space" + groups[curally].location).data("filled",0);
                                    groups[curally].location=-1;
                                    groups[curally].active=false;

                                    $(".actionbutton").remove();
                                    battleon=false;
                                    $('.actions').append("<div class = 'actionbutton' id='Pass'><p>Pass</p></div>");
                                    enemyconquer();
                                    presspass();
                                    startcombat();
                                }//end of loses battle
                        },1000);
                    }
                    }

                    //wraiths
                    if ((Eunits[Eslots[y]].type === "Frostwraith")) {
                        //Move left
                        var moved = false;

                        if(Eunits[Eslots[y]].phasedout===false){
                            Eunits[Eslots[y]].phasedout=true;
                            $("#E" + Eunits[Eslots[y]].index).addClass("Invisible")
                            $("#TEXT").append("This wraith just phased out.")
                        }

                        //physical
                        if(Eunits[Eslots[y]].blind>0){
                        } else{
                            goblinwhotoattack("Wizard");
                            goblinwhotoattack("Sorcerer");
                            goblinwhotoattack("Enchantress");
                            goblinwhotoattack("Healer");
                            goblinwhotoattack("Templar");
                            goblinwhotoattack("Archer");
                            goblinwhotoattack("Rouge");
                            goblinwhotoattack("Mage");
                            goblinwhotoattack("Thief");
                            goblinwhotoattack("Soldier");
                            goblinwhotoattack("Knight");
                            goblinwhotoattack("Djinn");
                            goblinwhotoattack("Guard");
                            goblinwhotoattack("Golem");
                        }

                            aggressivemove();

                        //attack enemies

                        findenemy();

                        //physical
                        if(Eunits[Eslots[y]].blind>0 && Eunits[Eslots[y]].usedaction===false){
                        } else{
                            goblinwhotoattack("Wizard");
                            goblinwhotoattack("Sorcerer");
                            goblinwhotoattack("Enchantress");
                            goblinwhotoattack("Healer");
                            goblinwhotoattack("Templar");
                            goblinwhotoattack("Archer");
                            goblinwhotoattack("Rouge");
                            goblinwhotoattack("Mage");
                            goblinwhotoattack("Thief");
                            goblinwhotoattack("Soldier");
                            goblinwhotoattack("Knight");
                            goblinwhotoattack("Djinn");
                            goblinwhotoattack("Guard");
                            goblinwhotoattack("Golem");
                        }
                        //ice attack
                        if(Eunits[Eslots[y]].usedaction===false){
                            if (Eunits[Eslots[y]].charge >= 1) {
                                if(Eunits[Eslots[y]].silenced>0){
                                } else {
                                    frostwraithwhotoattack("Knight");
                                    frostwraithwhotoattack("Soldier");
                                    frostwraithwhotoattack("Archer");
                                    frostwraithwhotoattack("Rouge");
                                    frostwraithwhotoattack("Mage");
                                    frostwraithwhotoattack("Thief");
                                    frostwraithwhotoattack("Enchantress");
                                    frostwraithwhotoattack("Healer");
                                    frostwraithwhotoattack("Wizard");
                                    frostwraithwhotoattack("Sorcerer");
                                    frostwraithwhotoattack("Templar");
                                    frostwraithwhotoattack("Djinn");
                                    frostwraithwhotoattack("Guard");
                                    frostwraithwhotoattack("Golem");
                                }
                            } else {
                                charging();
                            }
                        }

                    }
                    if ((Eunits[Eslots[y]].type === "Flamewraith")) {
                        //Move left
                        var moved = false;

                        if(Eunits[Eslots[y]].phasedout===false){
                            Eunits[Eslots[y]].phasedout=true;
                            $("#E" + Eunits[Eslots[y]].index).addClass("Invisible");
                            $("#TEXT").append("This wraith just phased out.")
                        }

                        if (Eunits[Eslots[y]].charge >= 2) {
                            if (Eunits[Eslots[y]].silenced > 0) {
                            } else {
                                flamewraithwhotoattack();
                            }
                        } else {
                            charging();
                            Eunits[Eslots[y]].usedaction=true;
                        }

                            aggressivemove();


                        //attack enemies

                        findenemy();

                        //fire attack
                        if (Eunits[Eslots[y]].usedaction === false) {
                            if (Eunits[Eslots[y]].charge >= 2) {
                                if (Eunits[Eslots[y]].silenced > 0) {
                                } else {
                                    flamewraithwhotoattack();
                                }
                            } else {
                                charging();
                            }
                        }

                    }
                    if ((Eunits[Eslots[y]].type === "Waterwraith")) {
                        //Move left
                        var moved = false;

                        if(Eunits[Eslots[y]].phasedout===false){
                            Eunits[Eslots[y]].phasedout=true;
                            $("#E" + Eunits[Eslots[y]].index).addClass("Invisible")
                            $("#TEXT").append("This wraith just phased out.")
                        }

                        //physical
                        if(Eunits[Eslots[y]].blind>0){
                        } else{
                            goblinwhotoattack("Wizard");
                            goblinwhotoattack("Sorcerer");
                            goblinwhotoattack("Enchantress");
                            goblinwhotoattack("Healer");
                            goblinwhotoattack("Templar");
                            goblinwhotoattack("Archer");
                            goblinwhotoattack("Rouge");
                            goblinwhotoattack("Mage");
                            goblinwhotoattack("Thief");
                            goblinwhotoattack("Soldier");
                            goblinwhotoattack("Knight");
                            goblinwhotoattack("Djinn");
                            goblinwhotoattack("Guard");
                            goblinwhotoattack("Golem");
                        }


                            aggressivemove();

                        //attack enemies

                        findenemy();

                        //physical
                        if(Eunits[Eslots[y]].blind>0 && Eunits[Eslots[y]].usedaction===false){
                            Eunits[Eslots[y]].blind-=1;
                        } else{
                            goblinwhotoattack("Wizard");
                            goblinwhotoattack("Sorcerer");
                            goblinwhotoattack("Enchantress");
                            goblinwhotoattack("Healer");
                            goblinwhotoattack("Templar");
                            goblinwhotoattack("Archer");
                            goblinwhotoattack("Rouge");
                            goblinwhotoattack("Mage");
                            goblinwhotoattack("Thief");
                            goblinwhotoattack("Soldier");
                            goblinwhotoattack("Knight");
                            goblinwhotoattack("Djinn");
                            goblinwhotoattack("Guard");
                            goblinwhotoattack("Golem");
                        }

                        //Wave attack
                        if(Eunits[Eslots[y]].usedaction===false){
                            if (Eunits[Eslots[y]].charge >= 1) {
                                if(Eunits[Eslots[y]].silenced>0){
                                    Eunits[Eslots[y]].silenced-=1;
                                } else {
                                    Eunits[Eslots[y]].charge -= 1;
                                    var keepgoing=true;
                                    $("#battlebackground").append("<img class='totalbackground' src='Pictures/Effects/Wave.gif' />");
                                    Water.play();
                                    $(".totalbackground").fadeOut(4000);
                                    while(keepgoing===true){
                                        keepgoing=false;
                                        var i =1
                                        for(i = 1; i<4;i++){
                                            if(units[slots[i]].curleft>25 && !(units[slots[i]].curleft===units[slots[1]].curleft+100 && units[slots[i]].curtop===units[slots[1]].curtop) &&
                                                !(units[slots[i]].curleft===units[slots[2]].curleft+100 && units[slots[i]].curtop===units[slots[2]].curtop) && !(units[slots[i]].curleft===units[slots[3]].curleft+100 && units[slots[i]].curtop===units[slots[3]].curtop) &&
                                                !(units[slots[i]].curleft===Eunits[Eslots[1]].curleft+100 && units[slots[i]].curtop===Eunits[Eslots[1]].curtop) && !(units[slots[i]].curleft===Eunits[Eslots[2]].curleft+100 && units[slots[i]].curtop===Eunits[Eslots[2]].curtop) &&
                                                !(units[slots[i]].curleft===Eunits[Eslots[3]].curleft+100 && units[slots[i]].curtop===Eunits[Eslots[3]].curtop) && !(units[slots[i]].curleft===Eunits[Eslots[4]].curleft+100 && units[slots[i]].curtop===Eunits[Eslots[4]].curtop) &&
                                                !(units[slots[i]].curleft===Eunits[Eslots[5]].curleft+100 && units[slots[i]].curtop===Eunits[Eslots[5]].curtop)){
                                                units[slots[i]].curleft-=100;
                                                keepgoing=true;
                                                $('#' + slots[i]).animate({
                                                    left: (units[slots[i]].curleft)  + 'px'
                                                });
                                            }
                                        }
                                        for(i = 1; i<6;i++){
                                            if(Eunits[Eslots[i]].curleft>25 && !(Eunits[Eslots[i]].curleft===units[slots[1]].curleft+100 && Eunits[Eslots[i]].curtop===units[slots[1]].curtop) &&
                                                !(Eunits[Eslots[i]].curleft===units[slots[2]].curleft+100 && Eunits[Eslots[i]].curtop===units[slots[2]].curtop) && !(Eunits[Eslots[i]].curleft===units[slots[3]].curleft+100 && Eunits[Eslots[i]].curtop===units[slots[3]].curtop) &&
                                                !(Eunits[Eslots[i]].curleft===Eunits[Eslots[1]].curleft+100 && Eunits[Eslots[i]].curtop===Eunits[Eslots[1]].curtop) && !(Eunits[Eslots[i]].curleft===Eunits[Eslots[2]].curleft+100 && Eunits[Eslots[i]].curtop===Eunits[Eslots[2]].curtop) &&
                                                !(Eunits[Eslots[i]].curleft===Eunits[Eslots[3]].curleft+100 && Eunits[Eslots[i]].curtop===Eunits[Eslots[3]].curtop) && !(Eunits[Eslots[i]].curleft===Eunits[Eslots[4]].curleft+100 && Eunits[Eslots[i]].curtop===Eunits[Eslots[4]].curtop) &&
                                                !(Eunits[Eslots[i]].curleft===Eunits[Eslots[5]].curleft+100 && Eunits[Eslots[i]].curtop===Eunits[Eslots[5]].curtop)){
                                                Eunits[Eslots[i]].curleft-=100;
                                                keepgoing=true;
                                                $('#E' + Eslots[i]).animate({
                                                    left: (Eunits[Eslots[i]].curleft)  + 'px'
                                                });
                                            }
                                        }

                                    }//end of while
                                    for(i = 1; i<4;i++){
                                        Damaging(10, slots[i]);
                                        if (units[slots[i]].health <= 0) {
                                            Dies(enemyonbottom, slots[i]);
                                            units[slots[i]].curleft = 10000;
                                            units[slots[i]].curtop = 10000;
                                        }
                                    }
                                }
                            } else {
                                charging();
                            }
                        }

                    }

                    if ((Eunits[Eslots[y]].type === "Dragon")) {

                        if (Eunits[Eslots[y]].charge >= 3) {
                            if(Eunits[Eslots[y]].silenced>0){
                            } else {
                                firewhotoattack("Nothing");
                                firewhotoattack("Knight");
                                firewhotoattack("Soldier");
                                firewhotoattack("Archer");
                                firewhotoattack("Rouge");
                                firewhotoattack("Mage");
                                firewhotoattack("Thief");
                                firewhotoattack("Enchantress");
                                firewhotoattack("Healer");
                                firewhotoattack("Wizard");
                                firewhotoattack("Sorcerer");
                                firewhotoattack("Templar");
                                firewhotoattack("Djinn");
                                firewhotoattack("Guard");
                                firewhotoattack("Golem");
                            }
                        }
                        if (Eunits[Eslots[y]].usedaction === false) {
                            charging();
                        }

                    }
                    if (Eunits[Eslots[y]].type === "Hand") {

                        if(Eunits[Eslots[y]].blind>0){
                        } else{
                           for(var i =1;i<4;i++){
                               if(units[slots[i]].curleft===225 && units[slots[i]].curtop===125){
                                   var damage = Eunits[Eslots[y]].attack - units[slots[i]].defense;
                                   if (damage < 0) {
                                       damage = 0
                                   }
                                   Sword.play();
                                   units[slots[i]].blind=3;
                                   units[slots[i]].immobilized=3;
                                   $("#TEXT").append("<p>The dragon's hand immobolized and blinded " + units[slots[i]].name +"</p>");
                                   $("#" + slots[i]).append("<div class='slashEffects'><img src='Pictures/Effects/EffectSlash.gif' /></div>");
                                   Damaging(damage, slots[i])
                                   $(".slashEffects").fadeOut(2000);
                                   countering(slots[i],y)
                                   Eunits[Eslots[y]].usedaction = true;
                               }
                           }
                        }

                        if(Eunits[Eslots[y]].blind>0){
                            Eunits[Eslots[y]].blind-=1;
                        } else{
                            goblinwhotoattack("Wizard");
                            goblinwhotoattack("Sorcerer");
                            goblinwhotoattack("Enchantress");
                            goblinwhotoattack("Healer");
                            goblinwhotoattack("Templar");
                            goblinwhotoattack("Archer");
                            goblinwhotoattack("Rouge");
                            goblinwhotoattack("Mage");
                            goblinwhotoattack("Thief");
                            goblinwhotoattack("Soldier");
                            goblinwhotoattack("Knight");
                            goblinwhotoattack("Djinn");
                            goblinwhotoattack("Guard");
                            goblinwhotoattack("Golem");
                        }


                    }



                    //you lose battle
                    if(units[slots[1]].health<=0){
                        units[slots[1]].alive=false;
                    }//not sure why i need this, but do
                    if (units[slots[1]].alive === false && units[slots[2]].alive === false && units[slots[3]].alive === false) {
                        curmapmusic.src="sounds/music-tutorial.mp3";
                        curmapmusic.loop=true;
                        curmapmusic.play();
                        curbattlemusic.src="";
                        curbattlemusic.play();

                        $("#TEXT").empty();
                        liberate(groups[curally].location);
                        $("#battlebackground").remove();
                        $("#M"+curally).remove();
                        $("#space" + groups[curally].location).data("filled",0);
                        groups[curally].location=-1;
                        groups[curally].active=false;

                        $(".actionbutton").remove();
                        battleon=false;
                        $('.actions').append("<div class = 'actionbutton' id='Pass'><p>Pass</p></div>");
                        enemyconquer();
                        presspass();
                        startcombat();
                    }//end of loses battle

                    if(Eunits[Eslots[y]].blind>0){
                        Eunits[Eslots[y]].blind -=1;
                    }
                    if(Eunits[Eslots[y]].silenced>0){
                        Eunits[Eslots[y]].silenced -=1;
                    }

                    Eunits[Eslots[y]].usedaction = false;

                }//End of isalive if statement

            } else{
                Eunits[Eslots[y]].sleep-=1;
            }//end of is sleep if statement

            for(var a =1;a<4;a++){
                for(var b = 1;b<6;b++){
                    if(units[slots[a]].curleft === Eunits[Eslots[b]].curleft && units[slots[a]].curtop === Eunits[Eslots[b]].curtop && units[slots[a]].alive===true && Eunits[Eslots[b]].alive===true){
                        units[slots[a]].curleft= curenemyleft;
                        units[slots[a]].curtop= curenemytop;
                        $('#' + slots[a]).animate({
                            left: units[slots[a]].curleft + 'px',
                            top: units[slots[a]].curtop + 'px'
                        }, 500);
                    }
                }
            }


        }//end of enemy's turns
    stormcheck();
        for(var i = 1;i<6;i++){
            if (Eunits[Eslots[i]].health <= 0) {
                if (Eunits[Eslots[i]].type === "Bee" || Eunits[Eslots[i]].type === "Zombie" || Eunits[Eslots[i]].type === "Golem") {

                    $("#E" + Eslots[i]).fadeOut();
                    $("#E" + Eslots[i]).animate({
                        left: 225 + "px",
                        top: 25 + "px"
                    });
                    Eunits[Eslots[i]].curleft = 225;
                    Eunits[Eslots[i]].curtop = 25;
                } else {
                    $("#E" + Eslots[i]).effect('explode');
                    setTimeout(function(){
                        $("#E" + Eslots[i]).remove();
                    },200)
                }
                Eunits[Eslots[i]].alive = false;
                $("#TEXT").append("<p>" + Eunits[Eslots[i]].name + " has been killed</p>");
                if ((Eslots[1] === -1 || Eunits[Eslots[1]].alive === false) && (Eslots[2] === -1 || Eunits[Eslots[2]].alive === false) && (Eslots[3] === -1 || Eunits[Eslots[3]].alive === false) && (Eslots[4] === -1 || Eunits[Eslots[4]].alive === false) && (Eslots[5] === -1 || Eunits[Eslots[5]].alive === false)) {
                    youwin();
                }
            }
        }

        $('*').usedaction=false;
        $('*').removeClass("selected");

        showailments();
    }//end of passturn button
    for(var i = 1;i<4;i++){
        if(units[slots[i]].abilityinvisible===true){
            units[slots[i]].type="Invisible";
               $("#" + slots[i]).addClass("Invisible");
        }
        if(units[slots[i]].bracing===true){
            units[slots[i]].bracing=false;
            units[slots[i]].defense-=20;
            units[slots[i]].resistance-=20;
        }
        units[slots[i]].attacktempboost=0;
        units[slots[i]].defensetempboost=0;
        if(units[slots[i]].type==="Golem"){
            units[slots[i]].attacktempboost= units[slots[i]].attack*8;
            units[slots[i]].defensetempboost= 20;
        }
    }

}

    function stormcheck(){
        ///Storm stuff
        if(units[slots[1]].stormactive===true || units[slots[2]].stormactive===true || units[slots[3]].stormactive===true){
            var randnum = Math.floor((Math.random() * 4)+1);
            $("#battlebackground").append("<div class='Effects' style='margin-top: " + (-95 - (100 *randnum)) + "px; margin-left: -200px'><img src='Pictures/Effects/Cloud.gif'/></div>");
            $(".Effects").animate({
                left: 800 + "px"
            },1500).fadeOut(500);
            switch(randnum){
                case 1:
                    randnum=4;
                    break;
                case 2:
                    randnum=3;
                    break;
                case 3:
                    randnum=2;
                    break;
                case 4:
                    randnum=1;
                    break;
            }
            var curattack=0;
            for(var i = 1;i<4;i++){
                if(units[slots[i]].stormactive===true){
                    curattack=units[slots[i]].attack;
                }
            }
            for(var w = 1; w<6;w++){
                if(Eunits[Eslots[w]].curtop === (-75 + randnum * 100) && Eunits[Eslots[w]].alive===true){
                    var damage = (50 + curattack - Eunits[Eslots[w]].resistance)*Eunits[Eslots[w]].lightning;
                    $("#TEXT").empty();
                    $("#TEXT").append("<p>The cloud did " + damage + " damage to " + Eunits[Eslots[w]].name + "\n</p>");
                    Eunits[Eslots[w]].health -= damage;

                    $("#EHB" + Eslots[w]).remove();
                    $("#E" + Eslots[w]).append('<div class="healthbar" id ="EHB'+ Eunits[Eslots[w]].index + '"style="width: ' + (Eunits[Eslots[w]].health/Eunits[Eslots[w]].maxhealth)*100 + '%"></div>');
                    $("#E" + Eslots[w]).append('<p class="damage" style="position: absolute; font-size:40px; margin-top:-70px; margin-left:30px; color:white; font-weight:bold ">' + damage + '</p>');
                    $(".damage").delay(1000).effect("puff");
                }
            }
        }
    }
function showailments(){
    $(".ailment").remove();
    for(var i = 1;i<4;i++){
        if(units[slots[i]].blind>0){
            $("#" + slots[i]).append("<img class='ailment' src='Pictures/Ailments/Blindness.gif'/>")
        }
        if(units[slots[i]].sleep>0){
            $("#" + slots[i]).append("<img class='ailment' src='Pictures/Ailments/Sleep.gif'/>")
        }
        if(units[slots[i]].poison>0){
            $("#" + slots[i]).append("<img class='ailment' src='Pictures/Ailments/Poison.gif'/>")
        }
        if(units[slots[i]].silenced>0){
            $("#" + slots[i]).append("<img class='ailment' src='Pictures/Ailments/Silenced.gif'/>")
        }
        if(units[slots[i]].immobilized>0){
            $("#" + slots[i]).append("<img class='ailment' src='Pictures/Ailments/Immobolized.gif'/>")
        }
        if(units[slots[i]].protectedby!=-1){
            $("#" + slots[i]).append("<img class='ailment' style='margin-top:10px' src='Pictures/Ailments/Shield.gif'/>")
        }
    }
    for(var i = 1;i<6;i++){
        if(Eunits[Eslots[i]].blind>0){
            $("#E" + Eslots[i]).append("<img class='ailment' src='Pictures/Ailments/Blindness.gif'/>")
        }
        if(Eunits[Eslots[i]].sleep>0){
            $("#E" + Eslots[i]).append("<img class='ailment' src='Pictures/Ailments/Sleep.gif'/>")
        }
        if(Eunits[Eslots[i]].poison>0){
            $("#E" + Eslots[i]).append("<img class='ailment' src='Pictures/Ailments/Poison.gif'/>")
        }
        if(Eunits[Eslots[i]].silenced>0){
            $("#E" + Eslots[i]).append("<img class='ailment' src='Pictures/Ailments/Silenced.gif'/>")
        }
        if(Eunits[Eslots[i]].immobilized>0){
            $("#E" + Eslots[i]).append("<img class='ailment' src='Pictures/Ailments/Immobolized.gif'/>")
        }
        if(Eunits[Eslots[i]].enfeeble>0){
            $("#E" + Eslots[i]).append("<img class='ailment' style='Margin-top:5px;' src='Pictures/Ailments/Enfeeble.gif'/>")
        }
    }
}
$(".XED").remove();


    function TEMPstartcombat(){


        Eunits[newEindex()]=new Sparrow(curEindex, 1,2);
        Eunits[newEindex()]=new Clunker(curEindex, 1,2);
        Eunits[newEindex()]=new Sparrow(curEindex, 1,2);
  //      Eunits[newEindex()]=new Vampire(curEindex, 1,2);
 //       Eunits[newEindex()]=new Magnet(curEindex, 1,2);

        Egroups[Egroupindex]=new Enewgroup(1,70,1000,"Warrior");

        units[index]=new Knight(index);
        units[index]=new Archer(index);
        units[index]=new Soldier(index);

        units[6].slot=1;
        units[7].slot=2;
        units[8].slot=3;
        units[6].group=1;
        units[7].group=1;
        units[8].group=1;


units[6].abilitycounter=true;

        units[8].abilitytitan=true;

        units[8].abilityexplosion=true;
demon=true;
        summoning=true;
        alchemy=true;
        units[7].accessory="Winged_Talisman";
   //     units[8].accessory="Winged_Talisman";
mana=100



        groups[groupindex]= new newgroup(1);

      //  groups[groupindex-1].enchanthaste=false;
        startcombat();
    }
  //TEMPstartcombat();
})//done
