/**
 * Created by Jake on 9/26/2015.
 */
//knight
if (selectedaction === "thiefAttack") {
    if (units[selectedindex].blind === 0) {
        if ($('#thiefchoice option:selected').text() === "Normal" || $('#thiefchoice option:selected').text() === "Mug") {
            var damage = (units[selectedindex].attack - Eunits[enemyindex].defense) * units[selectedindex].damageplus;
            if (damage < 0) {
                damage = 0
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
                    if(stealnum<=10){
                        ingredient[1].quantity += 1;
                        $("#TEXT").append("<p>She stole a " + ingredient[1].name + "</p>")
                    }
                    if(stealnum<=20 && stealnum>10){
                        ingredient[2].quantity += 1;
                        $("#TEXT").append("<p>She stole a " + ingredient[2].name + "</p>")
                    }
                    if(stealnum<=30 && stealnum>20){
                        ingredient[3].quantity += 1;
                        $("#TEXT").append("<p>She stole a " + ingredient[3].name + "</p>")
                    }
                    if(stealnum<=40 && stealnum>30){
                        ingredient[4].quantity += 1;
                        $("#TEXT").append("<p>She stole a " + ingredient[4].name + "</p>")
                    }
                    if(stealnum<=50 && stealnum>40){
                        ingredient[5].quantity += 1;
                        $("#TEXT").append("<p>She stole a " + ingredient[5].name + "</p>")
                    }
                    if(stealnum===51){
                        accessory[1].quantity += 1;
                        $("#TEXT").append("<p>She stole a " + accessory[1].name + "</p>")
                    }
                    if(stealnum===52){
                        accessory[2].quantity += 1;
                        $("#TEXT").append("<p>She stole a " + accessory[2].name + "</p>")
                    }
                    if(stealnum===53){
                        accessory[3].quantity += 1;
                        $("#TEXT").append("<p>She stole a " + accessory[3].name + "</p>")
                    }
                    if(stealnum===54){
                        accessory[4].quantity += 1;
                        $("#TEXT").append("<p>She stole a " + accessory[4].name + "</p>")
                    }
                    if(stealnum===55){
                        accessory[5].quantity += 1;
                        $("#TEXT").append("<p>She stole a " + accessory[5].name + "</p>")
                    }
                    if(stealnum===56){
                        $("#TEXT").append(Eunits[enemyindex].name + " has nothing to steal.");
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
                        $('#top').append("<h1 class = 'heading'>Mana: " + mana + "</h1>");
                    }
                } else {
                    $("#TEXT").append(units[selectedindex].name + " failed to steal. Lower the enemy's health to make it easier to steal from.")
                }
                turngray();
            }
        }
    } else {
        $("#TEXT").append("This unit is blind for " + units[selectedindex].blind + " more turns.")
    }
}
if (curresearch==="LevelupTower1"){
    tower1levelup+=researchers;
    if(tower1levelup>=9){
        tower1=true;
        researchmessage("research11","You can now use Lightning in any battle using Mana.")
    }
}
if (curresearch==="LevelupTower2"){
    tower2levelup+=researchers;
    if(tower2levelup>=19){
        tower2=true;
        researchmessage("research12","You can now use Heal and Cleanse in any battle using Mana.")
    }
}
if (curresearch==="LevelupTower3"){
    tower3levelup+=researchers;
    if(tower3levelup>=29){
        tower3=true;
        researchmessage("research13","You can now use Teleport and Death in any battle using Mana.")
    }
}
if(selectedaction==="towerUse"){
    var e = document.getElementById("towerchoice");
    if(e.options[e.selectedIndex].text==="Heal") {
        if (mana < 40) {
            $("#TEXT").append("<p>The tower needs 40 mana to use Lightning\n</p>");
            return;
        }
        if(usedtower===true){
            $("#TEXT").append("You already used the tower this turn.");
            return;
        }
        var temp3=this.id;
        temp3=temp3.replace("E","");
        for (var j = 0; j < index; j++) {
            if (units[j].index === parseInt(temp3,10)) {
                allyindex = j;
            }};

        units[allyindex].health+=40;
        if (units[allyindex].health > units[allyindex].maxhealth) {
            units[allyindex].health = units[allyindex].maxhealth
        }
        Damaging(allyindex, 50);
        Heal.play();
        $("#TEXT").append("<p>The tower healed " +units[allyindex].name + "\n</p>");
        mana -= 40;
        $('#top').empty();
        $('#top').append("<h1 class = 'heading'>Day: " + day + "</h1>");
        $('#top').append("<h1 class = 'heading'>Money: " + money + "</h1>");
        $('#top').append("<h1 class = 'heading'>Mana: " + mana + "</h1>");
        usedtower=true;
    }
    if(e.options[e.selectedIndex].text==="Cleanse") {
        var temp3=this.id;
        temp3=temp3.replace("E","");
        for (var j = 0; j < index; j++) {
            if (units[j].index === parseInt(temp3,10)) {
                allyindex = j;
            }};

        if(mana<10){
            $("#TEXT").append("Tower must have at least 10 mana to use this ability");
            return;
        }
        Cleanse.play();
        $("#TEXT").append("<p>The tower cured all ailments from " + units[allyindex].name + "\n</p>");
        usedtower = true;
        units[allyindex].poison=0;
        units[allyindex].blind=0;
        units[allyindex].immobilized=0;
        units[allyindex].silenced=0;
        units[allyindex].sleep=0;
        showailments();
        turngray();
        mana-=10;
        $('#top').empty();
        $('#top').append("<h1 class = 'heading'>Day: " + day + "</h1>");
        $('#top').append("<h1 class = 'heading'>Money: " + money + "</h1>");
        $('#top').append("<h1 class = 'heading'>Mana: " + mana + "</h1>");
    }
    if(e.options[e.selectedIndex].text==="Teleport") {
        var temp3=this.id;
        temp3=temp3.replace("E","");
        for (var j = 0; j < index; j++) {
            if (units[j].index === parseInt(temp3,10)) {
                allyindex = j;
            }};

        if(mana<20){
            $("#TEXT").append("Tower must have at least 20 mana to use this ability");
            return;
        }
        $("#" + allyindex).remove();
        units[allyindex].group=0;
        Teleport.play();
        $("#TEXT").append("<p>The tower teleported " + units[allyindex].name + " back to the capitol\n</p>");
        usedtower = true;
        turngray();
        mana-=20;
        $('#top').empty();
        $('#top').append("<h1 class = 'heading'>Day: " + day + "</h1>");
        $('#top').append("<h1 class = 'heading'>Money: " + money + "</h1>");
        $('#top').append("<h1 class = 'heading'>Mana: " + mana + "</h1>");
    }
}
//Tower
if (selectedaction === "towerUse") {
    if(usedtower===true){
        $("#TEXT").append("You already used the tower this turn.");
        return;
    }
    if ($('#towerchoice option:selected').text() === "Lightning") {
        var damage = 50 - Eunits[enemyindex].resistance;
        if (damage < 0) {
            damage = 0
        }
        if (mana < 10) {
            $("#TEXT").append("<p>The tower needs 30 mana to use Lightning\n</p>");
            return;
        }
        if (Eunits[enemyindex].phasedout === true) {
            if (Eunits[enemyindex].type === "Waterwraith") {
            } else {
                damage = 0;
            }
            if (units[selectedindex].elemental != "") {
                Eunits[enemyindex].phasedout = false;
                $("#E" + Eunits[enemyindex].index).removeClass("Invisible");
                $("#TEXT").append("The wraith phased back in.")
            }
        }


        $("#TEXT").append("<p>The tower did " + damage + " damage to " + Eunits[enemyindex].name + "\n</p>");
        $(this).effect('pulsate', "fast");
        Lightning.play();
        Eunits[enemyindex].health -= damage;
        mana -= 10;
        $('#top').empty();
        $('#top').append("<h1 class = 'heading'>Day: " + day + "</h1>");
        $('#top').append("<h1 class = 'heading'>Money: " + money + "</h1>");
        $('#top').append("<h1 class = 'heading'>Mana: " + mana + "</h1>");
        usedtower = true;

        //effects
        $("#battlebackground").append("<div class='staticEffects' style='margin-top: " + (Eunits[enemyindex].curtop - 750) + "px; margin-left: " + (Eunits[enemyindex].curleft - 100) + "px'><img src='Pictures/Effects/EffectLightning.gif' /></div>");
        setTimeout(function () {
            Damaging(enemyindex, damage);
        }, 500);
        setTimeout(function () {
            dies(enemyindex);
        }, 500);
        $(".staticEffects").fadeOut(2000);
    }
    if ($('#towerchoice option:selected').text() === "Death") {
        if(usedtower===true){
            $("#TEXT").append("You already used the tower this turn.");
            return;
        }
        if( Eunits[enemyindex].type==="Dragon" ||  Eunits[enemyindex].type==="Hands"|| Eunits[enemyindex].type==="Unknown" ||  Eunits[enemyindex].type==="Unknown2"){
            message("You can't target this unit with death.")
            return;
        }
        if (mana < 100) {
            $("#TEXT").append("<p>The tower needs 100 mana to use Death\n</p>");
            return;
        }
        $("#TEXT").append("<p>The tower killed " + Eunits[enemyindex].name + "\n</p>");

        mana -= 100;
        $('#top').empty();
        $('#top').append("<h1 class = 'heading'>Day: " + day + "</h1>");
        $('#top').append("<h1 class = 'heading'>Money: " + money + "</h1>");
        $('#top').append("<h1 class = 'heading'>Mana: " + mana + "</h1>");
        Death.play();
        Eunits[enemyindex].health=0;
        usedtower = true;
        //effects
        $("#battlebackground").append("<div class='slashEffects' style='margin-top: " + (Eunits[enemyindex].curtop-450) +"px; margin-left: " + (Eunits[enemyindex].curleft-0) +"px'><img src='Pictures/Effects/Death.gif' /></div>");
        setTimeout(function(){dies(enemyindex);},500);
        $(".slashEffects").fadeOut(2000);
        usedtower = true;
    }
    turngray();
    showailments();
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

if ($('#enchantresschoice option:selected').text()  === "Banish(20)") {
    if(units[selectedindex].power<20){
        message("She requires at least 20 power to use Attack Boost");
        return;
    }
    units[selectedindex].power-=20;
    for(var t =1;t<6;t++){

        if(Eunits[Eslots[t]].alive===true && (Eunits[Eslots[t]].type==='Bee' || Eunits[Eslots[t]].type==='Golem' || Eunits[Eslots[t]].type==='Zombie')){
            Eunits[Eslots[t]].health=0;

            dies(Eslots[t])
        }
    }
    units[selectedindex].usedaction=true;
}

$("#Save").click(function(){
    message("Game Saved");
    setCookie("day",day,365);

    setCookie("a",money,365);
    setCookie("b",mana,365);
    setCookie("c",ironsword,365);
    setCookie("d",steelsword,365);
    setCookie("e",titaniumsword,365);
    setCookie("f",ironshield,365);
    setCookie("g",steelshield,365);
    setCookie("h",titaniumshield,365);
    setCookie("i",ironarmor,365);
    setCookie("j",steelarmor,365);
    setCookie("k",titaniumarmor,365);
    setCookie("l",hunterbow,365);
    setCookie("m",longbow,365);
    setCookie("n",masterbow,365);
    setCookie("o",emeraldwand,365);
    setCookie("p",rubywand,365);
    setCookie("q",diamondwand,365);
    setCookie("r",ironswordnum,365);
    setCookie("s",steelswordnum,365);
    setCookie("t",titaniumswordnum,365);
    setCookie("u",ironshieldnum,365);
    setCookie("v",steelshieldnum,365);
    setCookie("w",titaniumshieldnum,365);
    setCookie("x",ironarmornum,365);
    setCookie("y",steelarmornum,365);
    setCookie("z",titaniumarmornum,365);
    setCookie("aa",hunterbownum,365);
    setCookie("ab",longbownum,365);
    setCookie("ac",masterbownum,365);
    setCookie("ad",emeraldwandnum,365);
    setCookie("ae",rubywandnum,365);
    setCookie("af",diamondwandnum,365);
    setCookie("ag",redtowns,365);
    setCookie("ah",greentowns,365);
    setCookie("ai",bluetowns,365);
    setCookie("aj",yellowtowns,365);
    setCookie("ak",redkingdom,365);
    setCookie("al",greenkingdom,365);
    setCookie("am",bluekingdom,365);
    setCookie("an",yellowkingdom,365);
    setCookie("ao",allynum,365);
    setCookie("ap",alchemy,365);
    setCookie("aq",alchemy2,365);
    setCookie("ar",summoning,365);
    setCookie("as",angel,365);
    setCookie("at",demon,365);
    setCookie("au",djinn,365);
    setCookie("av",frostlord,365);
    setCookie("aw",angelrest,365);
    setCookie("ax",demonrest,365);
    setCookie("ay",djinnrest,365);
    setCookie("az",frostlordrest,365);
    setCookie("ba",Hire,365);
    setCookie("bb",restorecipe,365);
    setCookie("bc",reviverecipe,365);
    setCookie("bd",recoverrecipe,365);
    setCookie("be",teleportrecipe,365);
    setCookie("bf",statrecipe,365);
    setCookie("bg",vigorrecipe,365);
    setCookie("bh",recoverrecipe,365);
    setCookie("bi",teleportrecipe,365);
    setCookie("bj",statrecipe,365);
    setCookie("bk",vigorrecipe,365);
    setCookie("bl",rejuvrecipe,365);
    setCookie("bm",icescreamrecipe,365);

    setCookie("bn",flightrecipe,365);
    setCookie("bo",restopotion,365);
    setCookie("bp",recoverpotion,365);
    setCookie("bq",revivepotion,365);
    setCookie("br",teleportpotion,365);
    setCookie("bs",statpotion,365);
    setCookie("bt",vigorpotion,365);
    setCookie("bu",rejuvpotion,365);
    setCookie("bv",icescreampotion,365);
    setCookie("bw",flightpotion,365);
    setCookie("bx",Hirelevelup,365);
    setCookie("by",curresearch,365);

    setCookie("bz",curindex,365);
    setCookie("ca",Ironweaponlevelup,365);
    setCookie("cb",Steelweaponlevelup,365);
    setCookie("cc",Titaniumweaponlevelup,365);
    setCookie("cd",Ironarmorlevelup,365);
    setCookie("ce",Steelarmorlevelup,365);
    setCookie("cf",Titaniumarmorlevelup,365);
    setCookie("cg",Alchemistlevelup,365);
    setCookie("ch",Alchemist2levelup,365);
    setCookie("ci",Summonlevelup,365);
    setCookie("cj",researchers,365);
    setCookie("ck",sorcerermana,365);
    setCookie("cl",sorcererincrease,365);

    setCookie("cm",index,365);
    setCookie("cn",movingindex,365);
    setCookie("co",Eindex,365);
    setCookie("cp",groupindex,365);
    setCookie("cq",Egroupindex,365);

    for(var i = 0;i<index;i++){
        setCookie("u" + i,units[i],365);

        setCookie("u" + i + ".a",units[i].type,365);
        setCookie("u" + i + ".b",units[i].realtype,365);
        setCookie("u" + i + ".c",units[i].name,365);
        setCookie("u" + i + ".d",i,365);
        setCookie("u" + i + ".e",units[i].attack,365);
        setCookie("u" + i + ".f",units[i].defense,365);
        setCookie("u" + i + ".g",units[i].resistance,365);
        setCookie("u" + i + ".h",units[i].health,365);
        setCookie("u" + i + ".i",units[i].maxhealth,365);
        setCookie("u" + i + ".j",units[i].useaction,365);
        setCookie("u" + i + ".k",units[i].alive,365);
        setCookie("u" + i + ".l",units[i].moved,365);
        setCookie("u" + i + ".m",units[i].group,365);
        setCookie("u" + i + ".n",units[i].slot,365);
        setCookie("u" + i + ".o",units[i].level,365);
        setCookie("u" + i + ".p",units[i].experience,365);
        setCookie("u" + i + ".q",units[i].weapon,365);
        setCookie("u" + i + ".r",units[i].armor,365);
        setCookie("u" + i + ".s",units[i].accessory,365);
        setCookie("u" + i + ".t",units[i].healthboost,365);
        setCookie("u" + i + ".u",units[i].weaponboost,365);
        setCookie("u" + i + ".v",units[i].armorboost,365);
        setCookie("u" + i + ".w",units[i].resistboost,365);
        setCookie("u" + i + ".x",units[i].attacktempboost,365);
        setCookie("u" + i + ".y",units[i].defensetempboost,365);
        setCookie("u" + i + ".z",units[i].enroute,365);
        setCookie("u" + i + ".aa",units[i].healing,365);
        setCookie("u" + i + ".ab",units[i].picture,365);
        setCookie("u" + i + ".ac",units[i].image,365);

        if(units[i].type="Soldier"){
            setCookie("u" + i + ".ad",units[i].abilitylunge,365);
            setCookie("u" + i + ".ae",units[i].abilitydash,365);
            setCookie("u" + i + ".af",units[i].abilitypurify,365);
            setCookie("u" + i + ".ag",units[i].abilitycounter,365);
            setCookie("u" + i + ".ah",units[i].abilitysteadfast,365);
        }

        if(units[i].type="Knight"){
            setCookie("u" + i + ".ai",units[i].abilitydoubledamage,365);
            setCookie("u" + i + ".aj",units[i].abilityswirl,365);
            setCookie("u" + i + ".ak",units[i].abilitypiercer,365);
            setCookie("u" + i + ".al",units[i].abilityreact,365);
            setCookie("u" + i + ".am",units[i].abilityincreasestamina,365);
        }
        if(units[i].type="Thief"){
            setCookie("u" + i + ".an",units[i].abilitybackstab,365);
            setCookie("u" + i + ".ao",units[i].abilityinvisible,365);
            setCookie("u" + i + ".ap",units[i].abilitydodge,365);
            setCookie("u" + i + ".aq",units[i].abilityfirstblow,365);
            setCookie("u" + i + ".ar",units[i].abilitybettersteal,365);
        }
        if(units[i].type="Mage"){
            setCookie("u" + i + ".as",units[i].abilityelementalailments,365);
            setCookie("u" + i + ".at",units[i].abilityzap,365);
            setCookie("u" + i + ".au",units[i].abilityfreeze,365);
            setCookie("u" + i + ".av",units[i].abilitydoubletap,365);
            setCookie("u" + i + ".aw",units[i].abilityexecute,365);
        }

        if(units[i].type="Wizard"){
            setCookie("u" + i + ".ax",units[i].abilitybolt,365);
            setCookie("u" + i + ".ay",units[i].abilitymissile,365);
            setCookie("u" + i + ".az",units[i].abilitystartcharge,365);
            setCookie("u" + i + ".ba",units[i].abilityteleport,365);
            setCookie("u" + i + ".bb",units[i].abilityelementalailments,365);

        }

        if(units[i].type="Sorcerer"){
            console.log(getCookie("day"));
            setCookie("u" + i + ".bc",units[i].abilityfireblast,365);

            setCookie("u" + i + ".bd",units[i].abilitylightning,365);
            setCookie("u" + i + ".be",units[i].abilitymanaincrease,365);
            setCookie("u" + i + ".bf",units[i].abilityslumber,365);
            setCookie("u" + i + ".bg",units[i].abilitydeath,365);
        }

        if(units[i].type="Archer"){
            setCookie("u" + i + ".bh",units[i].abilityexplosion,365);
            setCookie("u" + i + ".bi",units[i].abilitypierce,365);
            setCookie("u" + i + ".bj",units[i].abilitytitan,365);
            setCookie("u" + i + ".bk",units[i].abilityterrify,365);
            setCookie("u" + i + ".bl",units[i].abilitydoublearrows,365);
        }

        if(units[i].type="Rouge"){
            setCookie("u" + i + ".bm",units[i].abilityblindness,365);
            setCookie("u" + i + ".bn",units[i].abilitysleep,365);
            setCookie("u" + i + ".bo",units[i].abilityailmentduration,365);
            setCookie("u" + i + ".bp",units[i].abilityenfeeble,365);
            setCookie("u" + i + ".bq",units[i].abilitydoublearrows,365);
        }
        if(units[i].type="Templar"){
            setCookie("u" + i + ".br",units[i].abilityimmobolize,365);
            setCookie("u" + i + ".bs",units[i].abilitydisrupt,365);
            setCookie("u" + i + ".bt",units[i].abilitygrapplinghook,365);
            setCookie("u" + i + ".bu",units[i].abilityelemental,365);
            setCookie("u" + i + ".bv",units[i].abilitydoublearrows,365);
        }
        if(units[i].type="Enchantress"){
            setCookie("u" + i + ".bw",units[i].abilityattackboost,365);
            setCookie("u" + i + ".bx",units[i].abilitydefenseboost,365);
            setCookie("u" + i + ".by",units[i].abilitybanish,365);
            setCookie("u" + i + ".bz",units[i].abilitytorment,365);
            setCookie("u" + i + ".ca",units[i].abilitydoubleenergy,365);
        }
        if(units[i].type="Healer"){
            setCookie("u" + i + ".cb",units[i].abilitycleanse,365);
            setCookie("u" + i + ".cc",units[i].abilityheal,365);
            setCookie("u" + i + ".cd",units[i].abilityreplenish,365);
            setCookie("u" + i + ".ce",units[i].abilitydoubleheal,365);
            setCookie("u" + i + ".cf",units[i].abilitydoubleenergy,365);
        }
        if(units[i].type="Guard"){
            setCookie("u" + i + ".cg",units[i].abilityprotect,365);
            setCookie("u" + i + ".ch",units[i].abilityincreaseenergy,365);
            setCookie("u" + i + ".ci",units[i].abilityimmunity,365);
            setCookie("u" + i + ".cj",units[i].abilitybrace,365);
            setCookie("u" + i + ".ck",units[i].abilityfly,365);
        }

    }

    for(var i = 0;i<Eindex;i++){
        setCookie("E" + i + "]",Eunits[i],365);

        setCookie("E" + i + "].a",Eunits[i].type,365);
        setCookie("E" + i + "].b",Eunits[i].name,365);
        setCookie("E" + i + "].c",Eunits[i].level,365);
        setCookie("E" + i + "].d",Eunits[i].attack,365);
        setCookie("E" + i + "].e",Eunits[i].health,365);
        setCookie("E" + i + "].f",Eunits[i].maxhealth,365);
        setCookie("E" + i + "].g",Eunits[i].defense,365);
        setCookie("E" + i + "].h",Eunits[i].resistance,365);
        setCookie("E" + i + "].i",Eunits[i].sleep,365);
        setCookie("E" + i + "].j",Eunits[i].immobilized,365);
        setCookie("E" + i + "].k",Eunits[i].blind,365);
        setCookie("E" + i + "].l",Eunits[i].silenced,365);
        setCookie("E" + i + "].m",Eunits[i].poison,365);
        setCookie("E" + i + "].n",Eunits[i].enfeeble,365);
        setCookie("E" + i + "].o",Eunits[i].terrify,365);
        setCookie("E" + i + "].p",Eunits[i].lightning,365);
        setCookie("E" + i + "].q",Eunits[i].fire,365);
        setCookie("E" + i + "].r",Eunits[i].ice,365);
        setCookie("E" + i + "].s",Eunits[i].index,365);
        setCookie("E" + i + "].t",Eunits[i].usedaction,365);
        setCookie("E" + i + "].u",Eunits[i].alive,365);
        setCookie("E" + i + "].v",Eunits[i].charge,365);
        setCookie("E" + i + "].w",Eunits[i].curleft,365);
        setCookie("E" + i + "].x",Eunits[i].curtop,365);
        setCookie("E" + i + "].y",Eunits[i].group,365);
        setCookie("E" + i + "].z",Eunits[i].description,365);
        setCookie("E" + i + "].aa",Eunits[i].picture,365);
        setCookie("E" + i + "].ab",Eunits[i].image,365);


    }

    for(var i = 1;i<groupindex;i++){
        setCookie("g" + i,groups[i],365);
        setCookie("g" + i + ".a",groups[i].location,365);
        setCookie("g" + i + ".b",groups[i].hasmoved,365);
        setCookie("g" + i + ".c",groups[i].active,365);
        setCookie("g" + i + ".d",groups[i].curleft,365);
        setCookie("g" + i + ".e",groups[i].curtop,365);

    }

    for(var i = 1;i<Egroupindex;i++){
        setCookie("eg" + i,Egroups[i],365);
        setCookie("eg" + i + ".a",Egroups[i].location,365);
        setCookie("eg" + i + ".b",Egroups[i].experience,365);
        setCookie("eg" + i + ".c",Egroups[i].hasmoved,365);
        setCookie("eg" + i + ".d",Egroups[i].curleft,365);
        setCookie("eg" + i + ".e",Egroups[i].curtop,365);
        setCookie("eg" + i + ".f",Egroups[i].picture,365);
    }

    for(var i = 1;i<70;i++){
        setCookie("sa" + i,$('#space' + i).data('istown'),365);
        setCookie("sb" + i,$('#space' + i).data('fortify'),365);
        setCookie("sc" + i,$('#space' + i).data('loot'),365);
        setCookie("sd" + i,$('#space' + i).data('filled'),365);
        setCookie("se" + i,$('#space' + i).data('conquered'),365);
    }

});

$("#Load").click(function(){

    message("Game loaded");

    day =  parseInt(getCookie("a"));
    money =  getCookie("b");

    ironsword =  getCookie("c");
    steelsword =  getCookie("d");
    titaniumsword =  getCookie("e");
    ironshield =  getCookie("f");
    steelshield =  getCookie("g");
    titaniumshield =  getCookie("h");
    ironarmor =  getCookie("i");
    steelarmor =  getCookie("j");
    titaniumarmor =  getCookie("k");
    hunterbow =  getCookie("l");
    longbow =  getCookie("m");
    masterbow =  getCookie("n");
    emeraldwand =  getCookie("o");
    rubywand =  getCookie("p");
    diamondwand =  getCookie("q");
    ironswordnum =  getCookie("r");
    steelswordnum =  getCookie("s");
    titaniumswordnum =  getCookie("t");
    ironshieldnum =  getCookie("u");
    steelshieldnum =  getCookie("v");
    titaniumshieldnum =  getCookie("w");
    ironarmornum =  getCookie("x");
    steelarmornum =  getCookie("y");
    titaniumarmornum =  getCookie("z");
    hunterbownum =  getCookie("aa");
    longbownum =  getCookie("ab");
    masterbownum =  getCookie("ac");
    emeraldwandnum =  getCookie("ad");
    rubywandnum =  getCookie("ae");
    diamondwandnum =  getCookie("af");
    redtowns =  getCookie("ag");
    greentowns =  getCookie("ah");
    bluetowns =  getCookie("ai");
    yellowtowns =  getCookie("aj");
    redkingdom =  getCookie("ak");
    greenkingdom =  getCookie("al");
    bluekingdom =  getCookie("am");
    yellowkingdom =  getCookie("an");
    allynum =  getCookie("ao");
    alchemy =  getCookie("ap");
    alchemy2 =  getCookie("aq");
    summoning =  getCookie("ar");
    angel =  getCookie("as");
    demon =  getCookie("at");
    djinn =  getCookie("au");
    frostlord =  getCookie("av");
    angelrest =  getCookie("aw");
    demonrest =  getCookie("ax");
    djinnrest =  getCookie("ay");
    frostlordrest =  getCookie("az");
    Hire =  getCookie("ba");
    restorecipe =  getCookie("bb");
    reviverecipe =  getCookie("bc");
    recoverrecipe =  getCookie("bd");
    teleportrecipe =  getCookie("be");
    statrecipe =  getCookie("bf");
    vigorrecipe =  getCookie("bg");
    recoverrecipe =  getCookie("bh");
    teleportrecipe =  getCookie("bi");
    statrecipe =  getCookie("bj");
    vigorrecipe =  getCookie("bk");
    rejuvrecipe =  getCookie("bl");
    icescreamrecipe =  getCookie("bm");
    flightrecipe =  getCookie("bn");
    restopotion =  getCookie("bo");
    recoverpotion =  getCookie("bp");
    revivepotion =  getCookie("bq");
    teleportpotion =  getCookie("br");
    statpotion =  getCookie("bs");
    vigorpotion =  getCookie("bt");
    rejuvpotion =  getCookie("bu");
    icescreampotion =  getCookie("bv");
    flightpotion =  getCookie("bw");
    Hirelevelup =  getCookie("bx");
    curresearch =  getCookie("by");
    curindex =  getCookie("bz");
    Ironweaponlevelup =  getCookie("ca");
    Steelweaponlevelup =  getCookie("cb");
    Titaniumweaponlevelup =  getCookie("cc");
    Ironarmorlevelup =  getCookie("cd");
    Steelarmorlevelup =  getCookie("ce");
    Titaniumarmorlevelup =  getCookie("cf");
    Alchemistlevelup =  getCookie("cg");
    Alchemist2levelup =  getCookie("ch");
    Summonlevelup =  getCookie("ci");
    researchers =  getCookie("cj");
    sorcerermana =  getCookie("ck");
    sorcererincrease =  getCookie("cl");
    index =  getCookie("cm");
    movingindex =  getCookie("cn");
    Eindex =  getCookie("co");
    groupindex =  getCookie("cp");
    Egroupindex =  getCookie("cq");

    $(".icon").remove();
    $(".Eicon").remove();
    for(var i = 0;i<index;i++){
        units[i] = getCookie("u" + i + "]");

        units[i].type = getCookie("u" + i + ".a");
        units[i].realtype = getCookie("u" + i + ".b");
        units[i].name = getCookie("u" + i + ".c");
        units[i].index = getCookie("u" + i + ".d");
        units[i].attack = getCookie("u" + i + ".e");
        units[i].defense = getCookie("u" + i + ".f");
        units[i].resistance = getCookie("u" + i + ".g");
        units[i].health = getCookie("u" + i + ".h");
        units[i].maxhealth = getCookie("u" + i + ".i");
        units[i].usedaction = getCookie("u" + i + ".j");
        units[i].alive = getCookie("u" + i + ".k");
        units[i].moved = getCookie("u" + i + ".l");
        units[i].group = getCookie("u" + i + ".m");
        units[i].slot = getCookie("u" + i + ".n");
        units[i].level = getCookie("u" + i + ".o");
        units[i].experience = getCookie("u" + i + ".p");
        units[i].weapon = getCookie("u" + i + ".q");
        units[i].armor = getCookie("u" + i + ".r");
        units[i].accessory = getCookie("u" + i + ".s");
        units[i].healthboost = getCookie("u" + i + ".t");
        units[i].weaponboost = getCookie("u" + i + ".u");
        units[i].armorboost = getCookie("u" + i + ".v");
        units[i].resistboost = getCookie("u" + i + ".w");
        units[i].attacktempboost = getCookie("u" + i + ".x");
        units[i].defensetempboost = getCookie("u" + i + ".y");
        units[i].enroute = getCookie("u" + i + ".z");
        units[i].healing = getCookie("u" + i + ".aa");
        units[i].picture = getCookie("u" + i + ".ab");
        units[i].image = getCookie("u" + i + ".ac");


        if(units[i].type="Soldier"){
            units[i].abilitylunge = getCookie("u" + i + "].ad");
            units[i].abilitydash = getCookie("u" + i + "].ae");
            units[i].abilitypurify = getCookie("u" + i + "].af");
            units[i].abilitycounter = getCookie("u" + i + "].ag");
            units[i].abilitysteadfast = getCookie("u" + i + "].ah");
        }
        if(units[i].type="Knight"){
            units[i].abilitydoubledamage = getCookie("u" + i + "].ai");
            units[i].abilityswirl = getCookie("u" + i + "].aj");
            units[i].abilitypiercer = getCookie("u" + i + "].ak");
            units[i].abilityreact = getCookie("u" + i + "].al");
            units[i].abilityincreasestamina = getCookie("u" + i + "].am");
        }
        if(units[i].type="Thief"){
            units[i].abilitybackstab = getCookie("u" + i + "].an");
            units[i].abilityinvisible = getCookie("u" + i + "].ao");
            units[i].abilitydodge = getCookie("u" + i + "].ap");
            units[i].abilityfirstblow = getCookie("u" + i + "].aq");
            units[i].abilitybettersteal = getCookie("u" + i + "].ar");
        }
        if(units[i].type="Mage"){
            units[i].abilityelementalailments = getCookie("u" + i + "].as");
            units[i].abilityzap = getCookie("u" + i + "].at");
            units[i].abilityfreeze = getCookie("u" + i + "].au");
            units[i].abilitydoubletap = getCookie("u" + i + "].av");
            units[i].abilityexecute = getCookie("u" + i + "].aw");
        }
        if(units[i].type="Wizard"){
            units[i].abilitybolt = getCookie("u" + i + "].ax");
            units[i].abilitymissile = getCookie("u" + i + "].ay");
            units[i].abilitystartcharge = getCookie("u" + i + "].az");
            units[i].abilityteleport = getCookie("u" + i + "].ba");
            units[i].abilityelementalailments = getCookie("u" + i + "].bb");

        }
        if(units[i].type="Sorcerer"){
            units[i].abilityfireblast = getCookie("u" + i + "].bc");
            units[i].abilitylightning = getCookie("u" + i + "].bd");
            units[i].abilitymanaincrease = getCookie("u" + i + "].be");
            units[i].abilityslumber = getCookie("u" + i + "].bf");
            units[i].abilitydeath = getCookie("u" + i + "].bg");
        }
        if(units[i].type="Archer"){
            units[i].abilityexplosion = getCookie("u" + i + "].bh");
            units[i].abilitypierce = getCookie("u" + i + "].bi");
            units[i].abilitytitan = getCookie("u" + i + "].bj");
            units[i].abilityterrify = getCookie("u" + i + "].bk");
            units[i].abilitydoublearrows = getCookie("u" + i + "].bl");
        }
        if(units[i].type="Rouge"){
            units[i].abilityblindness = getCookie("u" + i + "].bm");
            units[i].abilitysleep = getCookie("u" + i + "].bn");
            units[i].abilityailmentduration = getCookie("u" + i + "].bo");
            units[i].abilityenfeeble = getCookie("u" + i + "].bp");
            units[i].abilitydoublearrows = getCookie("u" + i + "].bq");
        }
        if(units[i].type="Templar"){
            units[i].abilityimmobolize = getCookie("u" + i + "].br");
            units[i].abilitydisrupt = getCookie("u" + i + "].bs");
            units[i].abilitygrapplinghook = getCookie("u" + i + "].bt");
            units[i].abilityelemental = getCookie("u" + i + "].bu");
            units[i].abilitydoublearrows = getCookie("u" + i + "].bv");
        }
        if(units[i].type="Enchantress"){
            units[i].abilityattackboost = getCookie("u" + i + "].bw");
            units[i].abilitydefenseboost = getCookie("u" + i + "].bx");
            units[i].abilitybanish = getCookie("u" + i + "].by");
            units[i].abilitytorment = getCookie("u" + i + "].bz");
            units[i].abilitydoubleenergy = getCookie("u" + i + "].ca");
        }
        if(units[i].type="Healer"){
            units[i].abilitycleanse = getCookie("u" + i + "].cb");
            units[i].abilityheal = getCookie("u" + i + "].cc");
            units[i].abilityreplenish = getCookie("u" + i + "].cd");
            units[i].abilitydoubleheal = getCookie("u" + i + "].ce");
            units[i].abilitydoubleenergy = getCookie("u" + i + "].cf");
        }
        if(units[i].type="Guard"){
            units[i].abilityprotect = getCookie("u" + i + "].cg");
            units[i].abilityincreaseenergy = getCookie("u" + i + "].ch");
            units[i].abilityimmunity = getCookie("u" + i + "].ci");
            units[i].abilitybrace = getCookie("u" + i + "].cj");
            units[i].abilityfly = getCookie("u" + i + "].ck");
        }
    }
    for(var i = 0;i<Eindex;i++){
        Eunits[i] = getCookie("E" + i + "]");
        Eunits[i] = getCookie("E" + i + "].a");
        Eunits[i] = getCookie("E" + i + "].b");
        Eunits[i] = getCookie("E" + i + "].c");
        Eunits[i] = getCookie("E" + i + "].d");
        Eunits[i] = getCookie("E" + i + "].e");
        Eunits[i] = getCookie("E" + i + "].f");
        Eunits[i] = getCookie("E" + i + "].g");
        Eunits[i] = getCookie("E" + i + "].h");
        Eunits[i] = getCookie("E" + i + "].i");
        Eunits[i] = getCookie("E" + i + "].j");
        Eunits[i] = getCookie("E" + i + "].k");
        Eunits[i] = getCookie("E" + i + "].l");
        Eunits[i] = getCookie("E" + i + "].m");
        Eunits[i] = getCookie("E" + i + "].n");
        Eunits[i] = getCookie("E" + i + "].o");
        Eunits[i] = getCookie("E" + i + "].p");
        Eunits[i] = getCookie("E" + i + "].q");
        Eunits[i] = getCookie("E" + i + "].r");
        Eunits[i] = getCookie("E" + i + "].s");
        Eunits[i] = getCookie("E" + i + "].t");
        Eunits[i] = getCookie("E" + i + "].u");
        Eunits[i] = getCookie("E" + i + "].v");
        Eunits[i] = getCookie("E" + i + "].w");
        Eunits[i] = getCookie("E" + i + "].x");
        Eunits[i] = getCookie("E" + i + "].y");
        Eunits[i] = getCookie("E" + i + "].z");
        Eunits[i] = getCookie("E" + i + "].aa");
        Eunits[i] = getCookie("E" + i + "].ab");
    }
    for(var i = 1;i<groupindex;i++){
        groups[i].index = i;
        groups[i].location = getCookie("g" + i + ".a");
        groups[i].hasmoved = getCookie("g" + i + ".b");
        groups[i].active = getCookie("g" + i + ".c");
        groups[i].curleft = getCookie("g" + i + ".d");
        groups[i].curtop = getCookie("g" + i + ".e");

        $('#background').append('<img src="Pictures/soldiericon.png" class="icon" id="M' + i +'" style="left: ' + groups[i].curleft + 'px; top:' + groups[i].curtop + 'px" />');
    }
    for(var i = 1;i<Egroupindex;i++){
        Egroups[i].index = i;
        Egroups[i].location = getCookie("eg" + i + "].a");
        Egroups[i].hasmoved = getCookie("eg" + i + "].b");
        Egroups[i].active = getCookie("eg" + i + "].c");
        Egroups[i].curleft = getCookie("eg" + i + "].d");
        Egroups[i].curtop = getCookie("eg" + i + "].e");
        Egroups[i].picture = getCookie("eg" + i + "].f");

        $('#background').append('<img src="Pictures/Enemies/' + Egroups[i].picture + '.gif" class="Eicon" id="EM' + i +'" style="left: ' + Egroups[i].curleft + 'px; top:' + Egroups[i].curtop + 'px" />');
    }

    for(var i = 1;i<70;i++){
        $('#space' + i).data('istown',getCookie("sa" + i));
        $('#space' + i).data('fortify',getCookie("sb" + i));
        $('#space' + i).data('loot',getCookie("sc" + i));
        $('#space' + i).data('filled',getCookie("sd" + i));
        $('#space' + i).data('conquered',getCookie("se" + i));

        if($('#space' + i).data('istown')===true && $('#space' + i).data('conquered')===false){
            $('#space' + i + ' img').attr("src", "Pictures/town.gif");
        }
        if($('#space' + i).data('istown')===true && $('#space' + i).data('conquered')===true){
            $('#space' + i + ' img').attr("src", "Pictures/Etown.gif");
        }
        showwall();

    }

    $('#top').empty();
    $('#top').append("<h1 class = 'heading'>Day: " + day + "</h1>");
    $('#top').append("<h1 class = 'heading'>Money: " + money + "</h1>");
    $('#top').append("<h1 class = 'heading'>Research: " + currentresearch() + "</h1>");
    groupinfo();
});

<div id="Save" style = 'position:absolute; font-size:15px; background-color:grey; left:58px; top:5px; font-weight:bold; width:45px; border: black solid'>Save</div>
<div id="Load" style = 'position:absolute; font-size:15px; background-color:grey; left:58px; top:35px; font-weight:bold; width:45px; border: black solid'>Load</div>

setCookie("c",ironsword,365);
setCookie("d",steelsword,365);
setCookie("e",titaniumsword,365);
setCookie("f",ironshield,365);
setCookie("g",steelshield,365);
setCookie("h",titaniumshield,365);
setCookie("i",ironarmor,365);
setCookie("j",steelarmor,365);
setCookie("k",titaniumarmor,365);
setCookie("l",hunterbow,365);
setCookie("m",longbow,365);
setCookie("n",masterbow,365);
setCookie("o",emeraldwand,365);
setCookie("p",rubywand,365);
setCookie("q",diamondwand,365);
setCookie("r",ironswordnum,365);
setCookie("s",steelswordnum,365);
setCookie("t",titaniumswordnum,365);
setCookie("u",ironshieldnum,365);
setCookie("v",steelshieldnum,365);
setCookie("w",titaniumshieldnum,365);
setCookie("x",ironarmornum,365);
setCookie("y",steelarmornum,365);
setCookie("z",titaniumarmornum,365);
setCookie("aa",hunterbownum,365);
setCookie("ab",longbownum,365);
setCookie("ac",masterbownum,365);
setCookie("ad",emeraldwandnum,365);
setCookie("ae",rubywandnum,365);
setCookie("af",diamondwandnum,365);
setCookie("ag",redtowns,365);
setCookie("ah",greentowns,365);
setCookie("ai",bluetowns,365);
setCookie("aj",yellowtowns,365);
setCookie("ak",redkingdom,365);
setCookie("al",greenkingdom,365);
setCookie("am",bluekingdom,365);
setCookie("an",yellowkingdom,365);
setCookie("ao",allynum,365);
setCookie("ap",alchemy,365);
setCookie("aq",alchemy2,365);
setCookie("ar",summoning,365);
setCookie("as",angel,365);
setCookie("at",demon,365);
setCookie("au",djinn,365);
setCookie("av",frostlord,365);
setCookie("a",day,365);

setCookie("b",money,365);


setCookie("aw",angelrest,365);
setCookie("ax",demonrest,365);
setCookie("ay",djinnrest,365);
setCookie("az",frostlordrest,365);
setCookie("ba",Hire,365);
setCookie("bb",restorecipe,365);
setCookie("bc",reviverecipe,365);
setCookie("bd",recoverrecipe,365);
setCookie("be",teleportrecipe,365);
setCookie("bf",statrecipe,365);
setCookie("bg",vigorrecipe,365);
setCookie("bh",recoverrecipe,365);
setCookie("bi",teleportrecipe,365);
setCookie("bj",statrecipe,365);
setCookie("bk",vigorrecipe,365);
setCookie("bl",rejuvrecipe,365);
setCookie("bm",icescreamrecipe,365);

setCookie("bn",flightrecipe,365);
setCookie("bo",restopotion,365);
setCookie("bp",recoverpotion,365);
setCookie("bq",revivepotion,365);
setCookie("br",teleportpotion,365);
setCookie("bs",statpotion,365);
setCookie("bt",vigorpotion,365);
setCookie("bu",rejuvpotion,365);
setCookie("bv",icescreampotion,365);
setCookie("bw",flightpotion,365);
setCookie("bx",Hirelevelup,365);
setCookie("by",curresearch,365);

setCookie("bz",curindex,365);
setCookie("ca",Ironweaponlevelup,365);
setCookie("cb",Steelweaponlevelup,365);
setCookie("cc",Titaniumweaponlevelup,365);
setCookie("cd",Ironarmorlevelup,365);
setCookie("ce",Steelarmorlevelup,365);
setCookie("cf",Titaniumarmorlevelup,365);
setCookie("cg",Alchemistlevelup,365);
setCookie("ch",Alchemist2levelup,365);
setCookie("ci",Summonlevelup,365);
setCookie("cj",researchers,365);

setCookie("ck",sorcerermana,365);
setCookie("cl",sorcererincrease,365);

setCookie("cm",index,365);
setCookie("cn",movingindex,365);
setCookie("co",Eindex,365);
setCookie("cp",groupindex,365);
setCookie("cq",Egroupindex,365);


day =  parseInt(getCookie("a"));
money =  getCookie("b");

ironsword =  getCookie("c");
steelsword =  getCookie("d");
titaniumsword =  getCookie("e");
ironshield =  getCookie("f");
steelshield =  getCookie("g");
titaniumshield =  getCookie("h");
ironarmor =  getCookie("i");
steelarmor =  getCookie("j");
titaniumarmor =  getCookie("k");
hunterbow =  getCookie("l");
longbow =  getCookie("m");
masterbow =  getCookie("n");
emeraldwand =  getCookie("o");
rubywand =  getCookie("p");
diamondwand =  getCookie("q");
ironswordnum =  getCookie("r");
steelswordnum =  getCookie("s");
titaniumswordnum =  getCookie("t");
ironshieldnum =  getCookie("u");
steelshieldnum =  getCookie("v");
titaniumshieldnum =  getCookie("w");
ironarmornum =  getCookie("x");
steelarmornum =  getCookie("y");
titaniumarmornum =  getCookie("z");
hunterbownum =  getCookie("aa");
longbownum =  getCookie("ab");
masterbownum =  getCookie("ac");
emeraldwandnum =  getCookie("ad");
rubywandnum =  getCookie("ae");
diamondwandnum =  getCookie("af");
redtowns =  getCookie("ag");
greentowns =  getCookie("ah");
bluetowns =  getCookie("ai");
yellowtowns =  getCookie("aj");
redkingdom =  getCookie("ak");
greenkingdom =  getCookie("al");
bluekingdom =  getCookie("am");
yellowkingdom =  getCookie("an");
allynum =  getCookie("ao");
alchemy =  getCookie("ap");
alchemy2 =  getCookie("aq");
summoning =  getCookie("ar");
angel =  getCookie("as");
demon =  getCookie("at");
djinn =  getCookie("au");
frostlord =  getCookie("av");
angelrest =  getCookie("aw");
demonrest =  getCookie("ax");
djinnrest =  getCookie("ay");
frostlordrest =  getCookie("az");
Hire =  getCookie("ba");
restorecipe =  getCookie("bb");
reviverecipe =  getCookie("bc");
recoverrecipe =  getCookie("bd");
teleportrecipe =  getCookie("be");
statrecipe =  getCookie("bf");
vigorrecipe =  getCookie("bg");
recoverrecipe =  getCookie("bh");
teleportrecipe =  getCookie("bi");
statrecipe =  getCookie("bj");
vigorrecipe =  getCookie("bk");
rejuvrecipe =  getCookie("bl");
icescreamrecipe =  getCookie("bm");
flightrecipe =  getCookie("bn");
restopotion =  getCookie("bo");
recoverpotion =  getCookie("bp");
revivepotion =  getCookie("bq");
teleportpotion =  getCookie("br");
statpotion =  getCookie("bs");
vigorpotion =  getCookie("bt");
rejuvpotion =  getCookie("bu");
icescreampotion =  getCookie("bv");
flightpotion =  getCookie("bw");
Hirelevelup =  getCookie("bx");
curresearch =  getCookie("by");
curindex =  getCookie("bz");
Ironweaponlevelup =  getCookie("ca");
Steelweaponlevelup =  getCookie("cb");
Titaniumweaponlevelup =  getCookie("cc");
Ironarmorlevelup =  getCookie("cd");
Steelarmorlevelup =  getCookie("ce");
Titaniumarmorlevelup =  getCookie("cf");
Alchemistlevelup =  getCookie("cg");
Alchemist2levelup =  getCookie("ch");
Summonlevelup =  getCookie("ci");
researchers =  getCookie("cj");
sorcerermana =  getCookie("ck");
sorcererincrease =  getCookie("cl");
index =  getCookie("cm");
movingindex =  getCookie("cn");
Eindex =  getCookie("co");
groupindex =  getCookie("cp");
Egroupindex =  getCookie("cq");

for(var i = 0;i<index;i++){
    setCookie("u" + i,units[i],365);

    setCookie("u" + i + ".a",units[i].type,365);
    setCookie("u" + i + ".b",units[i].realtype,365);
    setCookie("u" + i + ".c",units[i].name,365);
    setCookie("u" + i + ".d",i,365);
    setCookie("u" + i + ".e",units[i].attack,365);
    setCookie("u" + i + ".f",units[i].defense,365);
    setCookie("u" + i + ".g",units[i].resistance,365);
    setCookie("u" + i + ".h",units[i].health,365);
    setCookie("u" + i + ".i",units[i].maxhealth,365);
    setCookie("u" + i + ".j",units[i].useaction,365);
    setCookie("u" + i + ".k",units[i].alive,365);
    setCookie("u" + i + ".l",units[i].moved,365);
    setCookie("u" + i + ".m",units[i].group,365);
    setCookie("u" + i + ".n",units[i].slot,365);
    setCookie("u" + i + ".o",units[i].level,365);
    setCookie("u" + i + ".p",units[i].experience,365);
    setCookie("u" + i + ".q",units[i].weapon,365);
    setCookie("u" + i + ".r",units[i].armor,365);
    setCookie("u" + i + ".s",units[i].accessory,365);
    setCookie("u" + i + ".t",units[i].healthboost,365);
    setCookie("u" + i + ".u",units[i].weaponboost,365);
    setCookie("u" + i + ".v",units[i].armorboost,365);
    setCookie("u" + i + ".w",units[i].resistboost,365);
    setCookie("u" + i + ".x",units[i].attacktempboost,365);
    setCookie("u" + i + ".y",units[i].defensetempboost,365);
    setCookie("u" + i + ".z",units[i].enroute,365);
    setCookie("u" + i + ".aa",units[i].healing,365);
    setCookie("u" + i + ".ab",units[i].picture,365);
    setCookie("u" + i + ".ac",units[i].image,365);

    if(units[i].type="Soldier"){
        setCookie("u" + i + ".ad",units[i].abilitylunge,365);
        setCookie("u" + i + ".ae",units[i].abilitydash,365);
        setCookie("u" + i + ".af",units[i].abilitypurify,365);
        setCookie("u" + i + ".ag",units[i].abilitycounter,365);
        setCookie("u" + i + ".ah",units[i].abilitysteadfast,365);
    }

    if(units[i].type="Knight"){
        setCookie("u" + i + ".ai",units[i].abilitydoubledamage,365);
        setCookie("u" + i + ".aj",units[i].abilityswirl,365);
        setCookie("u" + i + ".ak",units[i].abilitypiercer,365);
        setCookie("u" + i + ".al",units[i].abilityreact,365);
        setCookie("u" + i + ".am",units[i].abilityincreasestamina,365);
    }
    if(units[i].type="Thief"){
        setCookie("u" + i + ".an",units[i].abilitybackstab,365);
        setCookie("u" + i + ".ao",units[i].abilityinvisible,365);
        setCookie("u" + i + ".ap",units[i].abilitydodge,365);
        setCookie("u" + i + ".aq",units[i].abilityfirstblow,365);
        setCookie("u" + i + ".ar",units[i].abilitybettersteal,365);
    }
    if(units[i].type="Mage"){
        setCookie("u" + i + ".as",units[i].abilityelementalailments,365);
        setCookie("u" + i + ".at",units[i].abilityzap,365);
        setCookie("u" + i + ".au",units[i].abilityfreeze,365);
        setCookie("u" + i + ".av",units[i].abilitydoubletap,365);
        setCookie("u" + i + ".aw",units[i].abilityexecute,365);
    }

    if(units[i].type="Wizard"){
        setCookie("u" + i + ".ax",units[i].abilitybolt,365);
        setCookie("u" + i + ".ay",units[i].abilitymissile,365);
        setCookie("u" + i + ".az",units[i].abilitystartcharge,365);
        setCookie("u" + i + ".ba",units[i].abilityteleport,365);
        setCookie("u" + i + ".bb",units[i].abilityelementalailments,365);

    }
    if(units[i].type="Sorcerer"){

        setCookie("u" + i + ".bc",units[i].abilityfireblast,365);

        setCookie("u" + i + ".bd",units[i].abilitylightning,365);
        setCookie("u" + i + ".be",units[i].abilitymanaincrease,365);
        setCookie("u" + i + ".bf",units[i].abilityslumber,365);
        setCookie("u" + i + ".bg",units[i].abilitydeath,365);
    }

    if(units[i].type="Archer"){
        setCookie("u" + i + ".bh",units[i].abilityexplosion,365);
        setCookie("u" + i + ".bi",units[i].abilitypierce,365);
        setCookie("u" + i + ".bj",units[i].abilitytitan,365);
        setCookie("u" + i + ".bk",units[i].abilityterrify,365);
        setCookie("u" + i + ".bl",units[i].abilitydoublearrows,365);
    }

    if(units[i].type="Rouge"){
        setCookie("u" + i + ".bm",units[i].abilityblindness,365);
        setCookie("u" + i + ".bn",units[i].abilitysleep,365);
        setCookie("u" + i + ".bo",units[i].abilityailmentduration,365);
        setCookie("u" + i + ".bp",units[i].abilityenfeeble,365);
        setCookie("u" + i + ".bq",units[i].abilitydoublearrows,365);
    }
    if(units[i].type="Templar"){
        setCookie("u" + i + ".br",units[i].abilityimmobolize,365);
        setCookie("u" + i + ".bs",units[i].abilitydisrupt,365);
        setCookie("u" + i + ".bt",units[i].abilitygrapplinghook,365);
        setCookie("u" + i + ".bu",units[i].abilityelemental,365);
        setCookie("u" + i + ".bv",units[i].abilitydoublearrows,365);
    }
    if(units[i].type="Enchantress"){
        setCookie("u" + i + ".bw",units[i].abilityattackboost,365);
        setCookie("u" + i + ".bx",units[i].abilitydefenseboost,365);
        setCookie("u" + i + ".by",units[i].abilitybanish,365);
        setCookie("u" + i + ".bz",units[i].abilitytorment,365);
        setCookie("u" + i + ".ca",units[i].abilitydoubleenergy,365);
    }
    if(units[i].type="Healer"){
        setCookie("u" + i + ".cb",units[i].abilitycleanse,365);
        setCookie("u" + i + ".cc",units[i].abilityheal,365);
        setCookie("u" + i + ".cd",units[i].abilityreplenish,365);
        setCookie("u" + i + ".ce",units[i].abilitydoubleheal,365);
        setCookie("u" + i + ".cf",units[i].abilitydoubleenergy,365);
    }
    if(units[i].type="Guard"){
        setCookie("u" + i + ".cg",units[i].abilityprotect,365);
        setCookie("u" + i + ".ch",units[i].abilityincreaseenergy,365);
        setCookie("u" + i + ".ci",units[i].abilityimmunity,365);
        setCookie("u" + i + ".cj",units[i].abilitybrace,365);
        setCookie("u" + i + ".ck",units[i].abilityfly,365);
    }

}

for(var i = 0;i<Eindex;i++){
    setCookie("E" + i + "]",Eunits[i],365);

    setCookie("E" + i + "].a",Eunits[i].type,365);
    setCookie("E" + i + "].b",Eunits[i].name,365);
    setCookie("E" + i + "].c",Eunits[i].level,365);
    setCookie("E" + i + "].d",Eunits[i].attack,365);
    setCookie("E" + i + "].e",Eunits[i].health,365);
    setCookie("E" + i + "].f",Eunits[i].maxhealth,365);
    setCookie("E" + i + "].g",Eunits[i].defense,365);
    setCookie("E" + i + "].h",Eunits[i].resistance,365);
    setCookie("E" + i + "].i",Eunits[i].sleep,365);
    setCookie("E" + i + "].j",Eunits[i].immobilized,365);
    setCookie("E" + i + "].k",Eunits[i].blind,365);
    setCookie("E" + i + "].l",Eunits[i].silenced,365);
    setCookie("E" + i + "].m",Eunits[i].poison,365);
    setCookie("E" + i + "].n",Eunits[i].enfeeble,365);
    setCookie("E" + i + "].o",Eunits[i].terrify,365);
    setCookie("E" + i + "].p",Eunits[i].lightning,365);
    setCookie("E" + i + "].q",Eunits[i].fire,365);
    setCookie("E" + i + "].r",Eunits[i].ice,365);
    setCookie("E" + i + "].s",Eunits[i].index,365);
    setCookie("E" + i + "].t",Eunits[i].usedaction,365);
    setCookie("E" + i + "].u",Eunits[i].alive,365);
    setCookie("E" + i + "].v",Eunits[i].charge,365);
    setCookie("E" + i + "].w",Eunits[i].curleft,365);
    setCookie("E" + i + "].x",Eunits[i].curtop,365);
    setCookie("E" + i + "].y",Eunits[i].group,365);
    setCookie("E" + i + "].z",Eunits[i].description,365);
    setCookie("E" + i + "].aa",Eunits[i].picture,365);
    setCookie("E" + i + "].ab",Eunits[i].image,365);


}

for(var i = 1;i<groupindex;i++){
    setCookie("g" + i,groups[i],365);
    setCookie("g" + i + ".a",groups[i].location,365);
    setCookie("g" + i + ".b",groups[i].hasmoved,365);
    setCookie("g" + i + ".c",groups[i].active,365);
    setCookie("g" + i + ".d",groups[i].curleft,365);
    setCookie("g" + i + ".e",groups[i].curtop,365);

}

for(var i = 1;i<Egroupindex;i++){
    setCookie("eg" + i,Egroups[i],365);
    setCookie("eg" + i + ".a",Egroups[i].location,365);
    setCookie("eg" + i + ".b",Egroups[i].experience,365);
    setCookie("eg" + i + ".c",Egroups[i].hasmoved,365);
    setCookie("eg" + i + ".d",Egroups[i].curleft,365);
    setCookie("eg" + i + ".e",Egroups[i].curtop,365);
    setCookie("eg" + i + ".f",Egroups[i].picture,365);
}

for(var i = 1;i<70;i++){
    setCookie("sa" + i,$('#space' + i).data('istown'),365);
    setCookie("sb" + i,$('#space' + i).data('fortify'),365);
    setCookie("sc" + i,$('#space' + i).data('loot'),365);
    setCookie("sd" + i,$('#space' + i).data('filled'),365);
    setCookie("se" + i,$('#space' + i).data('conquered'),365);
}

setCookie("u" + i,units[i],365);

setCookie("u" + i + ".a",units[i].type,365);
setCookie("u" + i + ".b",units[i].realtype,365);
setCookie("u" + i + ".c",units[i].name,365);
setCookie("u" + i + ".d",i,365);
setCookie("u" + i + ".e",units[i].attack,365);
setCookie("u" + i + ".f",units[i].defense,365);
setCookie("u" + i + ".g",units[i].resistance,365);
setCookie("u" + i + ".h",units[i].health,365);
setCookie("u" + i + ".i",units[i].maxhealth,365);
setCookie("u" + i + ".j",units[i].useaction,365);
setCookie("u" + i + ".k",units[i].alive,365);
setCookie("u" + i + ".l",units[i].moved,365);
setCookie("u" + i + ".m",units[i].group,365);
setCookie("u" + i + ".n",units[i].slot,365);
setCookie("u" + i + ".o",units[i].level,365);
setCookie("u" + i + ".p",units[i].experience,365);
setCookie("u" + i + ".q",units[i].weapon,365);
setCookie("u" + i + ".r",units[i].armor,365);
setCookie("u" + i + ".s",units[i].accessory,365);
setCookie("u" + i + ".t",units[i].healthboost,365);
setCookie("u" + i + ".u",units[i].weaponboost,365);
setCookie("u" + i + ".v",units[i].armorboost,365);
setCookie("u" + i + ".w",units[i].resistboost,365);
setCookie("u" + i + ".x",units[i].attacktempboost,365);
setCookie("u" + i + ".y",units[i].defensetempboost,365);
setCookie("u" + i + ".z",units[i].enroute,365);
setCookie("u" + i + ".aa",units[i].healing,365);
setCookie("u" + i + ".ab",units[i].picture,365);
setCookie("u" + i + ".ac",units[i].image,365);

function gotoinventory(){
    $("#TEXT").empty();
    $("#TEXT").append('<div class="Backbutton"><img src = "Pictures/back.gif" /></div>');
    $(".Backbutton").click(function(){
        $("#TEXT").empty();
        gotocapitol();
    })

    $("#TEXT").append("<p style='text-align:center'>Inventory</p>");
    if(ironswordnum>0){
        $("#TEXT").append("<p style='background-color:gray; border:black solid' id='buyironsword'>Iron Sword(" + ironswordnum + " owned)</p>")
    };
    if(steelswordnum>0){
        $("#TEXT").append("<p style='background-color:gray; border:black solid' id='buysteelsword'>Steel Sword(" + steelswordnum + " owned)</p>")
    };
    if(titaniumswordnum>0){
        $("#TEXT").append("<p style='background-color:gray; border:black solid' id='buytitaniumsword'>Titanium Sword(" + titaniumswordnum + " owned)</p>")
    };
    if(ironarmornum>0){
        $("#TEXT").append("<p style='background-color:gray; border:black solid' id='buyironarmor'>Iron Armor(" + ironarmornum + " owned)</p>")
    };
    if(steelarmornum>0){
        $("#TEXT").append("<p style='background-color:gray; border:black solid' id='buysteelarmor'>Steel Armor(" + steelarmornum + " owned)</p>")
    };
    if(titaniumarmornum>0){
        $("#TEXT").append("<p style='background-color:gray; border:black solid' id='buytitaniumarmor'>Titanium Armor (" + titaniumarmornum + " owned)</p>")
    };
    if(hunterbownum>0){
        $("#TEXT").append("<p style='background-color:gray; border:black solid' id='buyhunterbow'>Hunter Bow(" + hunterbownum + " owned)</p>")
    };
    if(longbownum>0){
        $("#TEXT").append("<p style='background-color:gray; border:black solid' id='buylongbow'>Long Bow(" + longbownum + " owned)</p>")
    };
    if(masterbow>0){
        $("#TEXT").append("<p style='background-color:gray; border:black solid' id='buymasterbow'>Master Bow(" + masterbownum + " owned)</p>")
    };
    if(emeraldwand>0){
        $("#TEXT").append("<p style='background-color:gray; border:black solid' id='buyemeraldwand'>Emerald Wand(" + emeraldwandnum + " owned)</p>")
    };
    if(rubywand>0){
        $("#TEXT").append("<p style='background-color:gray; border:black solid' id='buyrubywand'>Ruby Wand(" + rubywandnum + " owned)</p>")
    };
    if(diamondwand>0){
        $("#TEXT").append("<p style='background-color:gray; border:black solid' id='buydiamondwand'>Diamond Wand(" + diamondwandnum + " owned)</p>")
    };

    for(var i = 1;i<ingredient.length;i++){
        if(ingredient[i].quantity>0) {
            $("#TEXT").append("<p style='background-color:gray; border:black solid' id='buydiamondwand'>" + ingredient[i].name + "(" + ingredient[i].quantity + " owned)</p>")
        }
    }
    for(var i = 1;i<accessory.length;i++){
        if(accessory[i].quantity>0) {
            $("#TEXT").append("<p style='background-color:gray; border:black solid' id='buydiamondwand'>" + accessory[i].name + "(" + accessory[i].quantity + " owned)</p>")
        }
    }
}

//Enchantments
{
    var Enchant = 0;
    if(curenchantment===""){
        exchangeunits(temp);
    } else{

        if(curenchantment==="immunity"){
            if(mana<20){
                message("You require 20 mana to use this ability.");
                return;
            }
            if(groups[parseInt(temp)].immune===true){
                message("This group is already enchanted with this enchantment.");
                return;
            }
            mana-=20;
            message("That group will be immune to all ailments during it's next battle.");
            groups[parseInt(temp)].immune=true;
            curenchantment="";
            $("#TEXT").empty();
            gotoenchanting();
        }
        if(curenchantment==="storm"){
            if(mana<100){
                message("You require 100 mana to use this ability.");
                return;
            }
            if(groups[parseInt(temp)].storm===true){
                message("This group is already enchanted with this enchantment.");
                return;
            }
            mana-=100;
            message("During the groups's next battle, a cloud will fly by and may do lightning, magic damage to some enemies.");
            groups[parseInt(temp)].storm=true;
            curenchantment="";
            $("#TEXT").empty();
            gotoenchanting();
        }
        if(curenchantment==="sicken"){
            if(mana<120){
                message("You require 120 mana to use this ability.");
                return;
            }
            if(groups[parseInt(temp)].sicken===true){
                message("This group is already enchanted with this enchantment.");
                return;
            }
            mana-=120;
            message("During the group's next battle, the enemies will start poisoned, enfeebled, and terrified.");
            groups[parseInt(temp)].sicken=true;
            curenchantment="";
            $("#TEXT").empty();
            gotoenchanting();
        }
        if(curenchantment==="haste"){
            if(mana<150){
                message("You require 150 mana to use this ability.");
                return;
            }
            if(groups[parseInt(temp)].haste===true){
                message("This group is already enchanted with this enchantment.");
                return;
            }
            mana-=150;
            message("The group will begin the next battle next to the enemies, and will go first.");
            groups[parseInt(temp)].haste=true;
            curenchantment="";
            $("#TEXT").empty();
            gotoenchanting();
        }
        if(curenchantment==="aetherban"){
            if(mana<50){
                message("You require 50 mana to use this ability.");
                return;
            }
            if(groups[parseInt(temp)].aetherban===true){
                message("This group is already enchanted with this enchantment.");
                return;
            }
            mana-=50;
            message("During the group's next battle, enemies can't summon creatures.");
            groups[parseInt(temp)].aetherban=true;
            curenchantment="";
            $("#TEXT").empty();
            gotoenchanting();
        }
        if(curenchantment==="flight"){
            if(mana<50){
                message("You require 50 mana to use this ability.");
                return;
            }
            if(groups[parseInt(temp)].flight===true){
                message("This group is already enchanted with this enchantment.");
                return;
            }
            mana-=50;
            message("The next move this group makes can move anywhere.");
            groups[parseInt(temp)].flight=true;
            curenchantment="";
            $("#TEXT").empty();
            gotoenchanting();
        }
        if(curenchantment==="refresh"){
            if(mana<50){
                message("You require 100 mana to use this ability.");
                return;
            }
            mana-=50;
            message("This group has been refreshed.");
            $("#M" + parseInt(temp)).removeClass("grayicon");
            groups[parseInt(temp)].hasmoved=false;
            curenchantment="";
            $("#TEXT").empty();
            gotoenchanting();
        }
    }
    if (curresearch==="LevelupEnchant"){
        Enchantlevelup+=researchers;
        if(Enchantlevelup>=(9 + Enchant*5)){
            Enchantlevelup=0;
            Enchant+=1;
            curresearch="";
            researchmessage("research13","You learned a new enchantment.");
            newunit();
        }
    }
    if(Enchant<3){

        $("#TEXT").append('<div class="research" id="LevelupEnchant"><img  src="Pictures/Tower1.png"/><p>Learn new enchantments<br>(' + parseInt(((10+5*Enchant)-Enchantlevelup)/researchers) + ' Days)</p></div>');
    }
    var curenchantment="";
    function gotoenchanting(){
        $("#TEXT").empty();
        $("#TEXT").append('<div class="Backbutton"><img src = "Pictures/back.gif" /></div>');
        $(".Backbutton").click(function(){
            $("#TEXT").empty();
            gotocapitol();
        });

        $("#TEXT").append("<p style='margin-left:20px'>Click an enchantment, and then right-click a group to enchant.</p><p style='margin-left:40%'>Mana: " + mana + "</p>");
        var enchantressnum = 1;
        for(var i =1;i<index;i++){
            if(units[i].type==="Enchantress"){
                enchantressnum= units[i].level;
            }
        }

        $("#TEXT").append('<div class="enchantment" id="immunity"><p>Immunity: Group will be immune to all ailments during its next battle</p><p>Costs 20 mana</p></div>');
        if(enchantressnum>=2 || enchantressnum==="-"){
            $("#TEXT").append('<div class="enchantment" id="refresh"><p>Refresh: Allows the group to move again.</p><p>Costs 50 mana</p></div>');
        }
        if(enchantressnum>=3 || enchantressnum==="-"){
            $("#TEXT").append('<div class="enchantment" id="sicken"><p>Sicken: All enemies start poisoned, terrified, and enfeebled during the groups next battle</p><p>Costs 100 mana</p></div>');
        }
        if(enchantressnum>=4 || enchantressnum==="-"){
            $("#TEXT").append('<div class="enchantment" id="haste"><p>Haste: Your group starts next to the enemies and starts first during next battle</p><p>Costs 150 mana</p></div>');
        }
        if(enchantressnum>=5 || enchantressnum==="-"){
            $("#TEXT").append('<div class="enchantment" id="aetherban"><p>Aetherban: Enemies can not summon creatures during groups next battle</p><p>Costs 50 mana</p></div>');
        }
        if(enchantressnum==="-"){
            $("#TEXT").append('<div class="enchantment" id="storm"><p>Storm: A lightning, magic cloud will appear every turn and may hit something</p><p>Costs 50 mana</p></div>');
        }
        if(Enchant>=1){
            $("#TEXT").append('<div class="enchantment" id="liberate"><p>Liberate: Liberate target town that has been conquered</p><p>Costs 50 mana</p></div>');
        }
        if(Enchant>=2){
            $("#TEXT").append('<div class="enchantment" id="stonewall"><p>Stonewall: Fortifies target town</p><p>Costs 50 mana</p></div>');
        }
        if(Enchant>=3){
            $("#TEXT").append('<div class="enchantment" id="flight"><p>Flight: Allows the group to move anywhere one time.</p><p>Costs 50 mana</p></div>');
        }


        $(".enchantment").click(function(){
            $(".enchantment").removeClass("selected");
            $(this).addClass("selected");
            curenchantment=$(this).attr("id");
        });

    }
    if(curenchantment===""){
        exchangeunits(temp);
    } else{

        if(curenchantment==="immunity"){
            if(mana<20){
                message("You require 20 mana to use this ability.");
                return;
            }
            if(groups[parseInt(temp)].immune===true){
                message("This group is already enchanted with this enchantment.");
                return;
            }
            mana-=20;
            message("That group will be immune to all ailments during it's next battle.");
            groups[parseInt(temp)].immune=true;
            curenchantment="";
            $("#TEXT").empty();
            gotoenchanting();
        }
        if(curenchantment==="storm"){
            if(mana<50){
                message("You require 50 mana to use this ability.");
                return;
            }
            if(groups[parseInt(temp)].storm===true){
                message("This group is already enchanted with this enchantment.");
                return;
            }
            mana-=50;
            message("During the groups's next battle, a cloud will fly by and may do lightning, magic damage to some enemies.");
            groups[parseInt(temp)].storm=true;
            curenchantment="";
            $("#TEXT").empty();
            gotoenchanting();
        }
        if(curenchantment==="sicken"){
            if(mana<100){
                message("You require 100 mana to use this ability.");
                return;
            }
            if(groups[parseInt(temp)].sicken===true){
                message("This group is already enchanted with this enchantment.");
                return;
            }
            mana-=100;
            message("During the group's next battle, the enemies will start poisoned, enfeebled, and terrified.");
            groups[parseInt(temp)].sicken=true;
            curenchantment="";
            $("#TEXT").empty();
            gotoenchanting();
        }
        if(curenchantment==="haste"){
            if(mana<150){
                message("You require 150 mana to use this ability.");
                return;
            }
            if(groups[parseInt(temp)].haste===true){
                message("This group is already enchanted with this enchantment.");
                return;
            }
            mana-=150;
            message("The group will begin the next battle next to the enemies, and will go first.");
            groups[parseInt(temp)].haste=true;
            curenchantment="";
            $("#TEXT").empty();
            gotoenchanting();
        }
        if(curenchantment==="aetherban"){
            if(mana<50){
                message("You require 50 mana to use this ability.");
                return;
            }
            if(groups[parseInt(temp)].aetherban===true){
                message("This group is already enchanted with this enchantment.");
                return;
            }
            mana-=50;
            message("During the group's next battle, enemies can't summon creatures.");
            groups[parseInt(temp)].aetherban=true;
            curenchantment="";
            $("#TEXT").empty();
            gotoenchanting();
        }
        if(curenchantment==="flight"){
            if(mana<50){
                message("You require 50 mana to use this ability.");
                return;
            }
            if(groups[parseInt(temp)].flight===true){
                message("This group is already enchanted with this enchantment.");
                return;
            }
            mana-=50;
            message("The next move this group makes can move anywhere.");
            groups[parseInt(temp)].flight=true;
            curenchantment="";
            $("#TEXT").empty();
            gotoenchanting();
        }
        if(curenchantment==="refresh"){
            if(mana<50){
                message("You require 50 mana to use this ability.");
                return;
            }
            mana-=50;
            message("This group has been refreshed.");
            $("#M" + parseInt(temp)).removeClass("grayicon");
            groups[parseInt(temp)].hasmoved=false;
            curenchantment="";
            $("#TEXT").empty();
            gotoenchanting();
        }
    }
    curenchantment="";
    if(groups[curgroupnum].immune===true){
        $("#barracks").append('<br><br><br><br><p>Group members are immune to ailments in their next battle</p>');
    }
    if(groups[curgroupnum].storm===true){
        $("#barracks").append("<br><br><br><br><p>A lightning cloud may zap some of you enemies in the group's next battle</p>");
    }
    if(groups[curgroupnum].sicken===true){
        $("#barracks").append("<br><br><br><br><p>Enemies in the group's next battle will start poisoned, enfeebled, and terrified</p>");
    }
    if(groups[curgroupnum].haste===true){
        $("#barracks").append('<br><br><br><br><p>Group members will begin next to the enemies, and will begin the battle during the next battle</p>');
    }
    if(groups[curgroupnum].aetherban===true){
        $("#barracks").append("<br><br><br><br><p>Enemies in the group's next battle will not be able to summon creatures</p>");
    }
    if(curenchantment === "stonewall" && $(this).data('fortify')!=true && $(this).data('conquered')!=true){
        if(mana<50){
            message("You require 50 mana to use stonewall.");
            return;
        }
        mana-=50;
        $(this).data('fortify',true);
        showwall();
        $("#TEXT").empty();
        gotoenchanting();
        return;
    }
    if(curenchantment === "liberate" && $(this).data('conquered')===true){
        if(mana<50){
            message("You require 50 mana to use liberate.");
            return;
        }
        mana-=50;
        $(this).data('conquered',false);
        $('img',this).attr("src", "Pictures/Town.gif");
        $("#TEXT").empty();
        gotoenchanting();
        return;
    }
    $("#Mana").click(function(){
        if(ingredient[8].quantity>=1 && ingredient[5].quantity>=1){
            mana+=100;
            ingredient[5].quantity-=1;
            ingredient[8].quantity-=1;
            message("You brewed a Mana potion. You recieved 100 mana.");
            gotobrewery();
        }else{
            message("You require 1 raw meat and 1 wheat for that. You only have " + ingredient[8].quantity + " raw meat and " + ingredient[5].quantity + " wheat.")
        }
    });
}
if($('#wizardchoice option:selected').text() === "Teleport(1)"){
    if(units[selectedindex].charge<1){
        message("He needs a charge of 1 to teleport");
        return;
    }
    units[selectedindex].charge-=1;
    $("#" + selectedindex).hide();
    $("#ORB" + +units[selectedindex].index).remove();
    $('#' + units[selectedindex].index).append('<div id = "ORB' + units[selectedindex].index + '" style="color: yellow; position: absolute; font-size:20px; margin-top:-30px; margin-left:55px; width:10px; height:10px ">' + units[selectedindex].charge + '</div>');
}
function hellhoundwhotoattack() {
    if ((Eunits[Eslots[y]].usedaction === false)) {
        if(enemyonbottomindex!=-1){
            Eunits[Eslots[y]].health=0;
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
            Eunits[Eslots[y]].health=0;
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
            Eunits[Eslots[y]].health=0;
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
            Eunits[Eslots[y]].health=0;
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