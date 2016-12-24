   difflevel=1;
var number_of_units=6;
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

    var alchemy = false;
        var alchemy2 = false;
    var summoning=false;


        var Hire=0;
var money=0;


        var Hirelevelup=0;
        var curresearch="Weapon_LevelupIron";

var tempstart = true;

//research stuff
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

//town pics
var conquered = "Pictures/Etown.gif";

//soldier stuff
var boughtsoldier=0;

//accessory
    function containaccessories(){
        accessory[1]=new Accessory("Steadfast_Band");
        accessory[2]=new Accessory("Elementward_Ring");
        accessory[3]=new Accessory("Scouter's_Goggles");
        accessory[4]=new Accessory("Winged_Talisman");
        accessory[5]=new Accessory("Ribbon");
        accessory[6]=new Accessory("Dodging_Boots");
    }

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

//research
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
    $("#TEXT").append('<div class="Backbutton"><img src = "../Pictures/back.gif" /></div>');
    $(".Backbutton").click(function(){
        $("#TEXT").empty();
        gotocapitol();
    })

    $("#TEXT").append("<p style='margin-left:20px'>Click the item to research</p>");
    $("#TEXT").append("<p style='margin-left:20px'>Researchers: " + researchers +"</p>");
    if(ironsword!=true){
        $("#TEXT").append('<div class="research" id="Weapon_LevelupIron"><img  src="../Pictures/Swordlevelup.png"/><p>Learn to build level 2 weapons<br>(' + parseInt((15-Ironweaponlevelup)/researchers) + ' Days)</p></div>');
    }
    if(steelsword!=true && ironsword===true){
        $("#TEXT").append('<div class="research" id="Weapon_LevelupSteel"><img  src="../Pictures/Swordlevelup.png"/><p>Learn to build level 3 weapons<br>(' + parseInt((40-Steelweaponlevelup)/researchers) + ' Days)</p></div>')
    }
    if(titaniumsword!=true && steelsword===true){
        $("#TEXT").append('<div class="research" id="Weapon_LevelupTitanium"><img  src="../Pictures/Swordlevelup.png"/><p>Learn to build level 4 weapons<br>(' + parseInt((80-Titaniumweaponlevelup)/researchers) + ' Days)</p></div>')
    }
    if(ironarmor!=true){
        $("#TEXT").append('<div class="research" id="Armor_LevelupIron"><img  src="../Pictures/Armorlevelup.png"/><p>Learn to build level 2 armor<br>(' + parseInt((15-Ironarmorlevelup)/researchers) + ' Days)</p></div>')
    }
    if(steelarmor!=true && ironarmor===true){
        $("#TEXT").append('<div class="research" id="Armor_LevelupSteel"><img  src="../Pictures/Armorlevelup.png"/><p>Learn to build level 3 armor<br>(' + parseInt((40-Steelarmorlevelup)/researchers) + ' Days)</p></div>')
    }
    if(titaniumarmor!=true && steelarmor===true){
        $("#TEXT").append('<div class="research" id="Armor_LevelupTitanium"><img  src="../Pictures/Armorlevelup.png"/><p>Learn to build level 4 armor<br>(' + parseInt((80-Titaniumarmorlevelup)/researchers) + ' Days)</p></div>')
    }
    if(alchemy===false){
        $("#TEXT").append('<div class="research" id="Alchemy_Levelup"><img  src="../Pictures/Alchemylevelup.png"/><p>Learn to use alchemy<br>(' + parseInt((15-Alchemistlevelup)/researchers) + ' Days)</p></div>')
    }
    if(alchemy2===false && alchemy===true){
        $("#TEXT").append('<div class="research" id="Alchemy2_Levelup"><img  src="../Pictures/Alchemylevelup.png"/><p>Get new recipes to purchase<br>(' + parseInt((30-Alchemist2levelup)/researchers) + ' Days)</p></div>')
    }
    if(summoning===false && alchemy2===true){
        $("#TEXT").append('<div class="research" id="Summon_Levelup"><img  src="../Pictures/Summonlevelup.png"/><p>Units learn to summon<br>(' + parseInt((45-Summonlevelup)/researchers) + ' Days)</p></div>')
    }
    if(Hire<3){

        $("#TEXT").append('<div class="research" id="LevelupHire"><img  src="../Pictures/BuyUnit.png"/><p>Recruit a new unit<br>(' + parseInt(((10+5*Hire)-Hirelevelup)/researchers) + ' Days)</p></div>');
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
        return "<img class='nothing' src = '../Pictures/empty.gif'/>";

    }

//shop
    function gotoshop(){
        $("#TEXT").empty();
        $("#TEXT").append('<div class="Backbutton"><img src = "../Pictures/back.gif" /></div>');
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
                $("#TEXT").append("<p style='background-color:gray; border:black solid' id='summonrecipe'>Summoner's recipe-100gold</p>")
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
//wall
    function showwall(){
        $(".wall").remove();

        for(var i =1;i<70;i++){
            if($('#space' + i).data("fortify")===true){
                $('#space' + i).append("<img class='wall' style='margin-top:-40px' src='../Pictures/Wall.gif' />");
            }
        }



    }

    function setlocationstuff(){
        $("#space70").data("castle",true).data("move1",'20').data("move2",'').data("move3",'').data("move4",'').data("left",300).data("top",270).data("location",70)
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
        $("#space14").data("move1",'18').data("move2",'').data("move3",'13').data("move4",'17').data("left",250).data("top",220).data("location",14).data("fortify",false).data("castle",true).data("color",'red')
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
        $("#space39").data("move1",'20').data("move2",'').data("move3",'27').data("move4",'').data("left",240).data("top",320).data("location",39).data("fortify",false).data("castle",true).data("color",'green');
        $("#space40").data("move1",'41').data("move2",'').data("move3",'44').data("move4",'').data("left",280).data("top",520).data("location",40).data("fortify",false);

        $("#space41").data("move1",'42').data("move2",'').data("move3",'47').data("move4",'40').data("left",295).data("top",455).data("location",41).data("fortify",false);
        $("#space42").data("move1",'43').data("move2",'53').data("move3",'38').data("move4",'41').data("left",300).data("top",390).data("location",42).data("fortify",false).data("castle",true).data("color",'blue')
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
        $("#space58").data("move1",'56').data("move2",'60').data("move3",'59').data("move4",'66').data("left",345).data("top",255).data("location",58).data("fortify",false).data("castle",true).data("color",'yellow');
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


function newunit(){
//    going=true;
//    var tempname;
//    while(going===true){
//        going=false;
//        var temp=Math.floor((Math.random() * 12) + 1);
//
//        switch(temp){
//            case 1:
//                tempclass="Guard";
//                 tempname="Guard";
//                break;
//            case 2:
//                tempclass="Enchantress";
//                 tempname="Enchantress";
//                break;
//            case 3:
//                tempclass="Healer";
//                 tempname="Healer1";
//                break;
//            case 4:
//                tempclass="Mage";
//                 tempname="Sandra";
//                break;
//            case 5:
//                tempclass="Wizard";
//                 tempname="Wizard1";
//                break;
//            case 6:
//                tempclass="Sorcerer";
//                 tempname="Sorcerer";
//                break;
//            case 7:
//                tempclass="Rouge";
//                 tempname="Rouge1";
//                break;
//            case 8:
//                tempclass="Archer";
//                 tempname="Archer1";
//                break;
//            case 9:
//                tempclass="Templar";
//                 tempname="Templar1";
//                break;
//            case 10:
//                tempclass="Soldier";
//                 tempname="Edgar";
//                break;
//            case 11:
//                tempclass="Thief";
//                 tempname="Thief1";
//                break;
//            case 12:
//                tempclass="Knight";
//                 tempname="Knight";
//                break;
//        }
//
//        for(var j =0;j<index;j++){
//            if(units[j].realtype==tempclass){
//                going=true;
//            }
//            if(units[j].type=="Invisible" && tempclass=="Thief"){
//                going=true;
//            }
//        }
//    }//end of while
//   createsoldier(tempclass,tempname);
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

//towns and castles
function set_area_background(i){
        var backgroundpic="";
                    if(groups[i].location<20){
                        backgroundpic="../Pictures/backgroundpics/mountainbackground.png"
                    }
                    if(groups[i].location>=20 && groups[i].location<40){
                        backgroundpic="../Pictures/backgroundpics/grassbackground.png"
                    }
                    if(groups[i].location>=40 && groups[i].location<56){
                        backgroundpic="../Pictures/backgroundpics/sandbackground.png"
                    }
                    if(groups[i].location>=56){
                        backgroundpic="../Pictures/backgroundpics/desertbackground.png"
                    }
                    if($("#space" + groups[i].location).data("castle")===true){
                        backgroundpic="../Pictures/backgroundpics/castlebackground.png"
                    }
                    if($("#space" + groups[i].location).data("istown")===true){
                        backgroundpic="../Pictures/backgroundpics/townbackground.png"
                    }
    return backgroundpic;
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
        if(tipmessagearray[index]===true || hasloaded==true){
            return;
        }
        tipmessagearray[index]=true;
        $("#top").append("<div class='tipmessage' style='word-wrap:break-word; position: absolute; border: gold solid 5px; z-index:1; margin-left:100px; width:350px; height: 140px; background-color:gray'></div>");
        $(".tipmessage").append("<p align='center' style='font-size: 15px; margin-left:5px; margin-right:5px; margin-top:0px'>" + e + "</p>");
        setInterval(function(){
            $(".tipmessage").addClass("removewindow");
        },100)
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
            tipmessage("enemymessage","Look! A goblin appeared the top-left part of the map. Every turn it will move towards your capitol, and if it reaches it, you lose. Use your units to intercept it!");
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
                    Eunits[newEindex()]=new Gremlin(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Warrior(curEindex, Egroupindex,difflevel);
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
                    Eunits[newEindex()]=new Bee(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Beekeeper(curEindex, Egroupindex,difflevel);
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
                    Eunits[newEindex()]=new Bee(curEindex, Egroupindex,difflevel);
                    Eunits[newEindex()]=new Beekeeper(curEindex, Egroupindex,difflevel);
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
        $('#background').append('<img src="../Pictures/Enemies/' + picture + '.gif" class="Eicon" id="EM' + Egroupindex +'" style="left: ' + thisleft + 'px; top:' + thistop + 'px" />');
        Egroupindex+=1;
    }

   function enemyconquer(){
        for(var i =1; i<Egroupindex;i++){
            var curlocation=Egroups[i].location;
            if($('#space' + curlocation).data("istown")===true && $('#space' + curlocation).data("conquered")!=true && $('#space' + curlocation).data("fortify")===false) {

                $('#space' + curlocation).data('conquered', true);
                $('#space' + curlocation + ' img').attr("src", conquered);
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
            $("#space14").append("<img class='XED' src='../Pictures/XED.gif'/>")
        } else{
            allynum+=1;
        }
        if (bluetowns < 3) {
            $("#space42").append("<img class='XED' src='../Pictures/XED.gif'/>")
        }else{
            allynum+=1;
        }
        if (yellowtowns < 3) {
            $("#space58").append("<img class='XED' src='../Pictures/XED.gif'/>")
        }else{
            allynum+=1;
        }
        if (greentowns < 3) {
            $("#space39").append("<img class='XED' src='../Pictures/XED.gif'/>")
        }else{
            allynum+=1;
        }
        showwall();
        }

function indiv_newday(day){
            if (day===5 || day===15 || day===25 || day===35 || day===45 || day===55 || day===65 || day===75 || day===85 || day===95){

            money+=20*allynum + diffinverse*10;
            message("You received " + (20*allynum+ diffinverse*10) + " gold from " + allynum + " allies.")
        }
        if (day===10 || day===20 || day===30 || day===40 || day===50 || day===60 || day===70 || day===80 || day===90 || day===100){
            money+=20*allynum+ diffinverse*10;
            researchers+=1;
            message("You received " + (20*allynum+ diffinverse*10) + " gold from " + allynum + " allies. One researcher joined you.")
        }

        $('.heading').remove();
        $('#top').append("<h1 class = 'heading'>Day: " + day + "</h1>");
        $('#top').append("<h1 class = 'heading'>Money: " + money + "</h1>");
        $('#top').append("<h1 class = 'heading'>Research: " + currentresearch() + "</h1>");
}

function indiv_gotocapitol(){
      $("#TEXT").empty().append('<div class="gotobutton" id = "gotobarracks"><p>BARRACKS</p></div><div class="gotobutton" id = "gotoshop"><p>SHOP</p></div><div class="gotobutton" id = "gotoresearchcenter"><p>RESEARCH</p></div>');
        if(alchemy===true){
            $("#TEXT").append('<div class="gotobutton" id = "gotobrewery"><p>BREWERY</p></div>');
        }
}
    var braceActive=true;
var ultimateActive=true;
function winbattle(){
      $(".areas").remove();
                $('#Pass').remove();
                $(".icon").remove();
                $(".Eicon").remove();
                $("#background").append("<div style='position: absolute; background-color:gray; width:200px; height:400px; margin-top:-400px; margin-left:200px'><p style='font-size:20px; margin-left:20px'>YOU WIN</p><p>Created by Jake Murphy</p><p>Music by 'Light elves Music'. See more at</p><p>'butterflytea.bandcamp.com'</p><p>Special thanks to:</p><p>www.piskelapp.com</p><p>mapeditor.org</p><p>This game and all of it's images are licensed under a: <p>Creative Commons Attribution-ShareAlike 3.0 Unported License</p></p></div>")
}

function TEMPstartcombat(){

                 Eunits[newEindex()]=new ESoldier(curEindex, 1,2);
               Eunits[newEindex()]=new Frostwraith(curEindex, 1,2);
       //         Eunits[newEindex()]=new ESoldier(curEindex, 1,2);
//                Eunits[newEindex()]=new Bee(curEindex, 1,2);
//                Eunits[newEindex()]=new Bee(curEindex, 1,2);

                Egroups[Egroupindex]=new Enewgroup(1,70,1000,"Warrior");
                units[index]=new Enchantress(index,"Enchantress");
                units[index]=new Wizard(index,"Wizard1");
                units[index]=new Guard(index,"Guard");


                units[0].slot=1;
                units[1].slot=2;
                units[2].slot=3;
                units[0].group=1;
                units[1].group=1;
                units[2].group=1;


        units[0].abilityfireCircle=true;
    units[0].abilityiceFall=true;
    units[0].abilitystorm=true;
    units[0].flight=true;
        units[1].flight=true;
    
    units[0].mana=1000;
    units[1].abilitymissile=true;
     units[2].abilitymedkit=true;
         units[2].medkit=true;
    units[2].health=80;
    
        mana=100
        
        Eunits[0].attack=0;

                groups[groupindex]= new newgroup(1);

                startcombat();
   
    }

$(window).load(function(){

        containaccessories();
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
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='../Pictures/Enemies/goblin.gif'/></div>";
                    Eunits[i].image='../Pictures/Enemies/goblin.gif';
                }
                if(Eunits[i].type==="Angel"){
                    Eunits[i].description = "Tough to kill, this rare creature heal itself with it's magic. Defeat to get it's soul to summon.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='../Pictures/Enemies/Angel.gif'/></div>";
                    Eunits[i].image='../Pictures/Enemies/Angel.gif';
                    Eunits[i].dying='../Pictures/Enemies/Angel_dying.gif';
                }
                if(Eunits[i].type==="Assassin"){
                    Eunits[i].description = "These long range fighters can hit any target, and, with their poisons, can sometimes put their targets to sleep.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='../Pictures/Enemies/Assassin.gif'/></div>";
                    Eunits[i].image='../Pictures/Enemies/Assassin.gif';
                    Eunits[i].dying='../Pictures/Enemies/Assassin_dying.gif';
                }
                if(Eunits[i].type==="Bear"){
                    Eunits[i].description = "These creatures love to attack the eyes and cause blindness.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='../Pictures/Enemies/bear.gif'/></div>";
                    Eunits[i].image='../Pictures/Enemies/bear.gif';
                    Eunits[i].dying='../Pictures/Enemies/bear_dying.gif';
                }
                if(Eunits[i].type==="Beekeeper"){
                    Eunits[i].description = "This master of insects will fling an endless supply of bees at you.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='../Pictures/Enemies/Beekeeper.gif'/></div>";
                    Eunits[i].image='../Pictures/Enemies/Beekeeper.gif';
                    Eunits[i].dying='../Pictures/Enemies/Beekeeper_dying.gif';
                }
                if(Eunits[i].type==="Bee"){
                    Eunits[i].description = "These flying bugs can swarm quickly. Kill the keeper to stop them.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='../Pictures/Enemies/Bee.gif'/></div>";
                    Eunits[i].image='../Pictures/Enemies/Bee.gif';
                }

                if(Eunits[i].type==="Demon"){
                    Eunits[i].description = "Elite among it's kind, this rare creature can instantly kill any units with it's death spell for 5 charge. Defeat to get it's soul to summon.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='../Pictures/Enemies/Demon.gif'/></div>";
                    Eunits[i].image='../Pictures/Enemies/Demon.gif';
                    Eunits[i].dying='../Pictures/Enemies/Demon_dying.gif';
                }
                if(Eunits[i].type==="Djinn"){
                    Eunits[i].description = "Tough to kill, this rare creature can give and take equally well. Defeat to get it's soul to summon.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='../Pictures/Enemies/Djinn.gif'/></div>";
                    Eunits[i].image='../Pictures/Enemies/Djinn.gif';
                    Eunits[i].dying='../Pictures/Enemies/Djinn_dying.gif';
                }
                if(Eunits[i].type==="Dragon"){
                    Eunits[i].description ="Something is coming...";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='../Pictures/Enemies/Dragon.gif'/></div>";
                    Eunits[i].image='../Pictures/Enemies/Dragon.gif';
                    Eunits[i].dying='../Pictures/Enemies/Dragon_dying.gif';
                }
                if(Eunits[i].type==="Fire Elemental"){
                    Eunits[i].description = "While the weakest of the elementals, these fiery beasts can shoot flames two spaces away for only one charge.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='../Pictures/Enemies/Fire Elemental.gif'/></div>";
                    Eunits[i].image='../Pictures/Enemies/Fire Elemental.gif';
                    Eunits[i].dying='../Pictures/Enemies/Fire Elemental_dying.gif';
                }
                if(Eunits[i].type==="Flamewraith"){
                    Eunits[i].description = "Wraiths can phase out and then become invincible. Use an elemental attack to phase them back in, and if its ice, it will do damage.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='../Pictures/Enemies/flamewraith.gif'/></div>";
                    Eunits[i].image='../Pictures/Enemies/flamewraith.gif';
                    Eunits[i].dying='../Pictures/Enemies/flamewraith_dying.gif';
                }

                if(Eunits[i].type==="Frostlord"){
                    Eunits[i].description = "While weak in the close range, this rare creature can create a dangerous snow storm. Defeat to get it's soul to summon.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='../Pictures/Enemies/Frostlord.gif'/></div>";
                    Eunits[i].image='../Pictures/Enemies/Frostlord.gif';
                    Eunits[i].dying='../Pictures/Enemies/Frostlord_dying.gif';
                }
                if(Eunits[i].type==="Frostwraith"){
                    Eunits[i].description = "Wraiths can phase out and then become invincible. Use an elemental attack to phase them back in, and if its fire, it will do damage.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='../Pictures/Enemies/frostwraith.gif'/></div>";
                    Eunits[i].image='../Pictures/Enemies/frostwraith.gif';
                    Eunits[i].dying='../Pictures/Enemies/frostwraith_dying.gif';
                }
                if(Eunits[i].type==="Golem"){
                    Eunits[i].description = "Touch as rocks, kill the shaman, or this rocky creature is will keep coming back.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='../Pictures/Enemies/golem.gif'/></div>";
                    Eunits[i].image='../Pictures/Enemies/golem.gif';
                    Eunits[i].dying='../Pictures/Enemies/golem_dying.gif';
                }
                if(Eunits[i].type==="Gremlin"){
                    Eunits[i].description = "While weak alone, these devious creatures can swarm in high numbers.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='../Pictures/Enemies/Gremlin.gif'/></div>";
                    Eunits[i].image='../Pictures/Enemies/Gremlin.gif';
                    Eunits[i].dying='../Pictures/Enemies/Gremlin_dying.gif';
                }
                if(Eunits[i].type==="Hand"){
                    Eunits[i].description = "Something is coming...";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='../Pictures/Enemies/Hand.gif'/></div>";
                    Eunits[i].image='../Pictures/Enemies/Hand.gif';
                    Eunits[i].dying='../Pictures/Enemies/Hand_dying.gif';
                }

                if(Eunits[i].type==="Ice Elemental"){
                    Eunits[i].description = "More powerful, yet slower than the flame elemental, these chilly creatures can do ice damage two spaces away for 2 charge.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='../Pictures/Enemies/Ice Elemental.gif'/></div>";
                    Eunits[i].image='../Pictures/Enemies/Ice Elemental.gif';
                    Eunits[i].dying='../Pictures/Enemies/Ice Elemental_dying.gif';
                }
                if(Eunits[i].type==="Lightning Elemental"){
                    Eunits[i].description = "Most powerful of the elementals, they can shoot a bolt anywhere for a high cost of 3 charge.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='../Pictures/Enemies/Lightning Elemental.gif'/></div>";
                    Eunits[i].image='../Pictures/Enemies/Lightning Elemental.gif';
                    Eunits[i].dying='../Pictures/Enemies/Lightning Elemental_dying.gif';
                }
                if(Eunits[i].type==="Necromancer"){
                    Eunits[i].description = "This master of death will raise the dead and chuck them at you.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='../Pictures/Enemies/Necromancer.gif'/></div>";
                    Eunits[i].image='../Pictures/Enemies/Necromancer.gif';
                    Eunits[i].dying='../Pictures/Enemies/Necromancer_dying.gif';
                }
                if(Eunits[i].type==="Shaman"){
                    Eunits[i].description = "This master of earth will send it's rocky friend to smash you.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='../Pictures/Enemies/Shaman.gif'/></div>";
                    Eunits[i].image='../Pictures/Enemies/Shaman.gif';
                    Eunits[i].dying='../Pictures/Enemies/Shaman_dying.gif';
                }
                if(Eunits[i].type==="Sparrow"){
                    Eunits[i].description = "These pesky creatures can soar instantly to any ally.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='../Pictures/Enemies/Sparrow.gif'/></div>";
                    Eunits[i].image='../Pictures/Enemies/Sparrow.gif';
                    Eunits[i].dying='../Pictures/Enemies/Sparrow_dying.gif';
                }

                if(Eunits[i].type==="Spider"){
                    Eunits[i].description = "While unable to do damage, they can poison and drag units to them with their web.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='../Pictures/Enemies/spider.gif'/></div>";
                    Eunits[i].image='../Pictures/Enemies/spider.gif';
                    Eunits[i].dying='../Pictures/Enemies/spider_dying.gif';
                }
                if(Eunits[i].type==="Spitter"){
                    Eunits[i].description = "These long range fighters can hit any target in a straight line, and can immobilize with it's sticky attack.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='../Pictures/Enemies/Spitter.gif'/></div>";
                    Eunits[i].image='../Pictures/Enemies/Spitter.gif';
                    Eunits[i].dying='../Pictures/Enemies/Spitter_dying.gif';
                }
                if(Eunits[i].type==="Unknown"){
                    Eunits[i].description = "Something is coming...";;
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='../Pictures/Enemies/unknown.gif'/></div>";
                    Eunits[i].image='../Pictures/Enemies/unknown.gif';
                }
                if(Eunits[i].type==="Vampire"){
                    Eunits[i].description = "Quick and dangerous, these creatures gain life for every damage dealt.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='../Pictures/Enemies/vampire.gif'/></div>";
                    Eunits[i].image='../Pictures/Enemies/vampire.gif';
                    Eunits[i].dying='../Pictures/Enemies/vampire_dying.gif';
                }
                if(Eunits[i].type==="Warrior"){
                    Eunits[i].description = "Masters of the close combat, these warriors can do double damage if they don't have to move first. Vunerable to Magic.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='../Pictures/Enemies/warrior.gif'/></div>";
                    Eunits[i].image='../Pictures/Enemies/warrior.gif';
                    Eunits[i].dying='../Pictures/Enemies/warrior_dying.gif';
                }

                if(Eunits[i].type==="Waterwraith"){
                    Eunits[i].description = "Wraiths can phase out and then become invincible. Use an elemental attack to phase them back in, and if its Lightning, it will do damage.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='../Pictures/Enemies/waterwraith.gif'/></div>";
                    Eunits[i].image='../Pictures/Enemies/waterwraith.gif';
                    Eunits[i].dying='../Pictures/Enemies/waterwraith_dying.gif';
                }
                if(Eunits[i].type==="Werewolf"){
                    Eunits[i].description = "These savage beasts have high resistance to magic, and can heal everyturn.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='../Pictures/Enemies/werewolf.gif'/></div>";
                    Eunits[i].image='../Pictures/Enemies/werewolf.gif';
                    Eunits[i].dying='../Pictures/Enemies/werewolf_dying.gif';
                }
                if(Eunits[i].type==="Wisp"){
                    Eunits[i].description = "These flittery creatures are hard to catch. They can use icy magic which can put units to sleep.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='../Pictures/Enemies/Wisp.gif'/></div>";
                    Eunits[i].image='../Pictures/Enemies/Wisp.gif';
                    Eunits[i].dying='../Pictures/Enemies/Wisp_dying.gif';
                }
                if(Eunits[i].type==="Wolf"){
                    Eunits[i].description = "These pack creatures are intelligent and fierce.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='../Pictures/Enemies/wolf.gif'/></div>";
                    Eunits[i].image='../Pictures/Enemies/wolf.gif';
                    Eunits[i].dying='../Pictures/Enemies/wolf_dying.gif';
                }
                if(Eunits[i].type==="Zombie"){
                    Eunits[i].description = "These walking dead can get out of hand. Kill the Necromancer!";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='../Pictures/Enemies/Zombie.gif'/></div>";
                    Eunits[i].image='../Pictures/Enemies/Zombie.gif';
                }
                if(Eunits[i].type==="Clunker"){
                    Eunits[i].description = "These machines can take alot of abuse!";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='../Pictures/Enemies/Clunker.gif'/></div>";
                    Eunits[i].image='../Pictures/Enemies/Clunker.gif';
                    Eunits[i].dying='../Pictures/Enemies/Clunker_dying.gif';
                }
                if(Eunits[i].type==="Magnet"){
                    Eunits[i].description = "These machines redirect and catch all arrows.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='../Pictures/Enemies/Magnet.gif'/></div>";
                    Eunits[i].image='../Pictures/Enemies/Magnet.gif';
                    Eunits[i].dying='../Pictures/Enemies/Magnet_dying.gif';
                }
                if(Eunits[i].type==="Sounddepressor"){
                    Eunits[i].description = "These machines prevent the use of all magic.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='../Pictures/Enemies/Sounddepressor.gif'/></div>";
                    Eunits[i].image='../Pictures/Enemies/Sounddepressor.gif';
                    Eunits[i].dying='../Pictures/Enemies/Sounddepressor_dying.gif';
                }
                if(Eunits[i].type==="Cannon"){
                    Eunits[i].description = "These machines charge every turn, and if an ally moves into it's line of sight, it will fire. It will overload at 5 charge!";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='../Pictures/Enemies/Cannon.gif'/></div>";
                    Eunits[i].image='../Pictures/Enemies/Cannon.gif';
                    Eunits[i].dying='../Pictures/Enemies/Cannon_dying.gif';
                }
                if(Eunits[i].type==="Hellhound"){
                    Eunits[i].description = "These fast beasts will explode when it comes into contact with one of your units.";
                    Eunits[i].picture="<div class='Ebarrackpic' id='E"+ i + "'><img src='../Pictures/Enemies/hellhound.gif'/></div>";
                    Eunits[i].image='../Pictures/Enemies/hellhound.gif';
                    Eunits[i].dying='../Pictures/Enemies/hellhound_dying.gif';
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
                $('#background').append('<img src="../Pictures/soldiericon.png" class="icon" id="M' + i +'" style="left: ' + groups[i].curleft + 'px; top:' + groups[i].curtop + 'px" />');
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
                $('#background').append('<img src="../Pictures/Enemies/' + Egroups[i].picture + '.gif" class="Eicon" id="EM' + i +'" style="left: ' + Egroups[i].curleft + 'px; top:' + Egroups[i].curtop + 'px" />');
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