     var difflevel = 2;
     var day = 0
         , mana = 0;
     var spot1 = ""
         , spot2 = ""
         , spot3 = "";
     var battleon = false;
     var curgroupnum = "";
     var summoning;
     // window.location.href = '../08_Arena/Arena.html'
     function getCookie(cname) {
         var name = cname + "=";
         var ca = document.cookie.split(';');
         for (var i = 0; i < ca.length; i++) {
             var c = ca[i];
             while (c.charAt(0) == ' ') c = c.substring(1);
             if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
         }
         return "";
     }

     function setCookie(cname, cvalue, exdays) {
         var d = new Date();
         d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
         var expires = "expires=" + d.toUTCString();
         document.cookie = cname + "=" + cvalue + "; " + expires;
     }
     var angel = false;
     var demon = false;
     var djinn = false;
     var frostlord = false;
     var angelrest = 0;
     var demonrest = 0;
     var djinnrest = 0;
     var frostlordrest = 0;
     var replicaterecipe = true;
     var reviverecipe = true;
     var recoverrecipe = true;
     var teleportrecipe = true;
     var strengthrecipe = true;
     var resistancerecipe = true;
     var defenserecipe = true;
     var standin1recipe = true;
     var healthrecipe = true;
     var leveluprecipe = true;
     var recoverpotion = 0
     var revivepotion = 0;
     var teleportpotion = 0;
     var strengthpotion = 0;
     var resistancepotion = 0;
     var defensepotion = 0;
     var standin1potion = 0;
     var healthpotion = 0;
     var leveluppotion = 0;
     var iceActive = false;
     //sounds
     {
         var curmusic = new Audio();
         var Fire = new Audio();
         var Lightning = new Audio();
         var Heal = new Audio();
         var Sword = new Audio();
         var Arrow = new Audio();
         var Paralyzesound = new Audio();
         var Specialsound = new Audio();
         var Win = new Audio();
         var Turnsound = new Audio();
         var Chargesound = new Audio();
         var Absorb = new Audio();
         var Capture = new Audio();
         var Cleanse = new Audio();
         var Death = new Audio();
         var Dogbite = new Audio();
         var Disrupt = new Audio();
         var Flyby = new Audio();
         var Gust = new Audio();
         var Hook = new Audio();
         var Hurricane = new Audio();
         var Water = new Audio();
         var Icescream = new Audio();
         var Protect = new Audio();
         var Tar = new Audio();
         var Teleport = new Audio();
         var vigor = new Audio();
         var Zap = new Audio();
         var Iceattack = new Audio();
         var Spit = new Audio();
         var Vampirebite = new Audio();
         var propeller = new Audio();
         var powerup = new Audio();
         var crash = new Audio();
         var eating = new Audio();
         var break_window = new Audio();
         var swing = new Audio();
         var hell = new Audio();
         var dramatic = new Audio();
         var fail = new Audio();
         var success = new Audio();
         var missile = new Audio();

     }

     function changesong(song) {
         curmusic.src = "";
         curmusic.src = "../sounds/music/" + song;
         curmusic.volume = .2;
         curmusic.loop = true;
         curmusic.play();
     }
     //create pass turn stuff//////////////////////////////////////////////////////////////////////////
     var curindex = "";
     var accessory = new Array
     var Egroups = new Array();
     var groups = new Array();
     var tipmessagearray = new Array;
     var Egroupindex = 1;
     var sorcerermana = 100;
     var sorcererincrease = 1;
     var hasloaded = false;
     var inanimation = false;
     var groupindex = 1;
     var index = 0;
     var movingindex = 0;
     var units = new Array();
     var Eunits = new Array();
     var Eindex = 0;
     var ingredient = {}

     function message(e) {
         $("#top").append("<div class='tipmessage' style='word-wrap:break-word; position: absolute; border: orange solid 5px; z-index:1;margin-top:300px; margin-left:100px; width:350px; height: 130px; background-color:gray'></div>");
         $(".tipmessage").append("<p align='center' style='font-size: 15px; margin-left:5px; margin-right:5px; margin-top:0px'>" + e + "</p>");
         setInterval(function () {
             $(".tipmessage").addClass("removewindow");
         }, 100);
     }

     function getCookie(cname) {
         var name = cname + "=";
         var ca = document.cookie.split(';');
         for (var i = 0; i < ca.length; i++) {
             var c = ca[i];
             while (c.charAt(0) == ' ') c = c.substring(1);
             if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
         }
         return "";
     }
     //clicking buttons on map///////////////////////////////////////////
     function gotocapitol() {
         if (typeof indiv_gotocapitol == 'function') {
             indiv_gotocapitol();
         }
         $("#TEXT").html('<div class="gotobutton" id = "gotobarracks"><p>Barracks</p></div><div class="gotobutton" id = "gotodetails"><p>Mission Details</p></div>');
         if (typeof nobrew == 'undefined') {
             $("#TEXT").append('<div class="gotobutton" id = "gotobrewery"><p>Brewery</p></div>')
         }
         $("#gotobarracks").click(function () {
             gotobarracks();
         });
         $("#gotobrewery").click(function () {
             gotobrewery();
         });
         $("#gotodetails").click(function () {
             gotodetails();
         });
     }

     function Ingredient(name) {
         this.name = name;
         this.quantity = 0;
     }
     var barrackbutton;

     function gotobarracks() {
         if (battleon === true) {
             return;
         }
         barrackbutton = "";
         spot1 = "";
         spot2 = "";
         spot3 = "";
         $("#TEXT").empty();
         $("#TEXT").append('<div class="Backbutton"><img src = "../Pictures/back.gif" /></div>');
         $(".Backbutton").click(function () {
             $("#TEXT").empty();
             gotocapitol();
         })
         $("#TEXT").append("<p style='text-align:center'>Double click to add to group</p>");
         $("#TEXT").append('<div class="entrypoint" id = "entry1"></div>');
         $("#TEXT").append('<div class="entrypoint" id = "entry2"></div>');
         $("#TEXT").append('<div class="entrypoint" id = "entry3"></div>');
         $("#TEXT").append('<div class="button" id = "createbutton">Create Group</div>');
         $("#TEXT").append('<div class="row" id="barracks"></div>');
         for (var i = 0; i < index; i++) {
             if ((units[i].group === 0 || units[i].group === -1) && units[i].type != "Djinn" && units[i].isanimal == false) {
                 $("#barracks").append(units[i].picture);
                 if ((units[i].healing > 0 || units[i].health < units[i].maxhealth) && recoverpotion > 0 && units[i].alive === true) {
                     $('#' + i).append("<div class='Recover' id='Recover" + i + "'><p>Heal</p></div>")
                 }
                 if (units[i].enroute > 0 && teleportpotion > 0) {
                     $('#' + i).append("<div class='Teleport' id='Teleport" + i + "'><p>Teleport</p></div>")
                 }
                 if (units[i].alive === false && revivepotion > 0) {
                     $('#' + i).append("<div class='Revive' id='Revive" + i + "'><p>Revive</p></div>")
                 }
                 if (units[i].alive === true) {
                     $('#' + i).append('<div class="healthbar" id = "HB' + i + '" style="position: relative; margin-top:90%; width: ' + (units[i].health / units[i].maxhealth) * 100 + '%"></div><div class="level"><p>' + units[i].level + '</p></div>');
                 }
                 if (units[i].healing > 0 || units[i].enroute > 0 || units[i].alive === false) {
                     $('#' + i).addClass("grayicon")
                 }
                 if (units[i].type === "Sorcerer" && units[i].alive === true) {
                     $("#" + i).append('<div class="manabar" id ="EB' + i + '"style="width: ' + (sorcerermana) + '%"></div>');
                 }
                 if (units[i].type === "Healer" && units[i].alive === true) {
                     $("#" + i).append('<div class="healerbar" id ="EB' + i + '"style="width: ' + (units[i].power) + '%"></div>');
                 }
                 $("#" + i).append('<div class="potionLetters"></div>');
                 if (units[i].healthpotion == true) {
                     $("#" + i + " .potionLetters").append('<span class="potionLetter">H</span>');
                 }
                 if (units[i].strengthpotion == true) {
                     $("#" + i + " .potionLetters").append('<span class="potionLetter">S</span>');
                 }
                 if (units[i].resistpotion == true) {
                     $("#" + i + " .potionLetters").append('<span class="potionLetter">R</span>');
                 }
                 if (units[i].defensepotion == true) {
                     $("#" + i + " .potionLetters").append('<span class="potionLetter">D</span>');
                 }
             }
         }
         $(".Recover").click(function () {
             if (recoverpotion === 0) {
                 message("You have to brew a 'Recover' potion to recover this unit.")
                 return;
             }
             recoverpotion -= 1;
             var thisindex = $(this).attr("id");
             thisindex = thisindex.replace("Recover", "")
             units[thisindex].healing = 0;
             units[thisindex].health = units[thisindex].maxhealth;
             $("#TEXT").empty();
             gotobarracks();
         });
         $(".Teleport").click(function () {
             if (teleportpotion === 0) {
                 message("You have to brew a 'Teleport' potion to retrieve this unit.")
                 return;
             }
             teleportpotion -= 1;
             var thisindex = $(this).attr("id");
             thisindex = thisindex.replace("Teleport", "")
             units[thisindex].enroute = 0;
             $("#TEXT").empty();
             gotobarracks();
         });
         $(".Revive").click(function () {
             if (revivepotion === 0) {
                 message("You have to brew a 'Revive' potion to revive this unit.")
                 return;
             }
             revivepotion -= 1;
             var thisindex = $(this).attr("id");
             thisindex = thisindex.replace("Revive", "")
             units[thisindex].alive = true;
             units[thisindex].group = 0;
             units[thisindex].health = units[thisindex].maxhealth;
             units[thisindex].type = units[thisindex].realtype;
             $("#TEXT").empty();
             gotobarracks();
         });
         if (typeof (noheal) == 'undefined') {
             $("#TEXT").append("<div id='Heal' class='potions col-xs-10'><p class='potion' id='Heal'>Heal a Unit (" + (1 + difflevel) + " turns)</p></div>");
         }
         if (strengthpotion > 0) {
             $("#TEXT").append("<div id='Strength' class='potions col-xs-10'><p class='potion' id='Strength'>Strength boost:(" + strengthpotion + ")</p></div>");
         }
         if (defensepotion > 0) {
             $("#TEXT").append("<div id='Defense' class='potions col-xs-10'<p class='potion' id='Defense'>Defense boost:(" + defensepotion + ")</p></div>");
         }
         if (resistancepotion > 0) {
             $("#TEXT").append("<p class='potions col-xs-10' id='Resistance'>Resistance boost:(" + resistancepotion + ")</p>");
         }
         if (healthpotion > 0) {
             $("#TEXT").append("<div  id='Health' class='potions col-xs-10'<p class='potion' id='Health'>Health boost:(" + healthpotion + ")</p></div>");
         }
         if (leveluppotion > 0) {
             $("#TEXT").append("<div id='Levelup' class='potions col-xs-10'<p class='potion' id='Levelup'>Level up:(" + leveluppotion + ")</p></div>");
         }
         $(".potions").click(function () {
             if (barrackbutton != $(this).attr("id")) {
                 $(".potions").removeClass("battlehighlight")
                 $(this).addClass("battlehighlight");
                 barrackbutton = $(this).attr("id");
             }
             else {
                 barrackbutton = "";
                 $(".potions").removeClass("battlehighlight")
             }
         })
         $(".barrackpic").click(function () {
             if (barrackbutton == "Strength") {
                 if (units[this.id].strengthpotion == true) {
                     message("This unit has already been given a strength potion.")
                     return;
                 }
                 var add = Math.round(units[this.id].attack * .3)
                 message("This unit's attack increased by " + add)
                 units[this.id].attack += add;
                 strengthpotion -= 1;
                 units[this.id].strengthpotion = true;
                 gotobarracks();
             }
             if (barrackbutton == "Defense") {
                 if (units[this.id].defensepotion == true) {
                     message("This unit has already been given a defense potion.")
                     return;
                 }
                 var add = Math.round(units[this.id].defense * .3)
                 message("This unit's defense increased by " + add)
                 units[this.id].defense += add;
                 defensepotion -= 1;
                 units[this.id].defensepotion = true;
                 gotobarracks();
             }
             if (barrackbutton == "Resistance") {
                 if (units[this.id].resistpotion == true) {
                     message("This unit has already been given a Resistance potion.")
                     return;
                 }
                 var add = Math.round(units[this.id].resistance * .3)
                 message("This unit's resistance increased by " + add)
                 units[this.id].resistance += add;
                 resistancepotion -= 1;
                 units[this.id].resistpotion = true;
                 gotobarracks();
             }
             if (barrackbutton == "Health") {
                 if (units[this.id].healthpotion == true) {
                     message("This unit has already been given a Health potion.")
                     return;
                 }
                 var add = Math.round(units[this.id].maxhealth * .3)
                 message("This unit's health increased by " + add)
                 units[this.id].maxhealth += add;
                 units[this.id].health += add;
                 healthpotion -= 1;
                 units[this.id].healthpotion = true;
                 gotobarracks();
             }
             if (barrackbutton == "Levelup") {
                 levelup(this.id, true)
                 leveluppotion -= 1;
                 gotobarracks();
             }
             if (barrackbutton == "Heal") {
                 if (units[this.id].health == units[this.id].maxhealth) {
                     message("This unit is at max health.")
                     return
                 }
                 if (units[this.id].enroute > 0) {
                     return
                 }
                 units[this.id].health = units[this.id].maxhealth
                 units[this.id].healing = 1 + difflevel;
                 units[this.id].heatlh += add;
                 gotobarracks()
             }
         })
         getstats();
         groupunit();
         creategroup();
         if (typeof indiv_gotobarracks == 'function') {
             indiv_gotobarracks();
         }
     }

     function gotobrewery() {
         $("#TEXT").empty();
         $("#TEXT").append('<div class="Backbutton"><img src = "../Pictures/back.gif" /></div>');
         $(".Backbutton").click(function () {
             $("#TEXT").empty();
             gotocapitol();
         })
         $("#TEXT").append("<p style='text-align:center'>Brewery</p>");
         $("#TEXT").append("<p style='margin-left:5%'>Brew Potion:</p>");
         $("#TEXT").append("<p style='margin-left:55%; margin-top:-45px'>Ingredients:</p>");
         $("#TEXT").append("<div class='row'><div class='col-xs-6' id='potionchoice'></div><div class='col-xs-6' id='Ingredients' style = 'background-color: gray; text-align: center; border: black solid; height:auto'></div></div>");
         //populate ingredients
         for (var key in ingredient) {
             if (ingredient[key].quantity > 0) {
                 $("#Ingredients").append("<p style=' font-size:17px;'>" + ingredient[key].name + "(" + ingredient[key].quantity + ")</p>")
             }
         }
         //populate recipes
         if (replicaterecipe === true) {
             $("#potionchoice").append("<p class='brewpotions' id='Replicate'>Replicate<br> 5 Essence</p>");
             if (ingredient["Essence"].quantity >= 5) {
                 $("#Replicate").addClass("highlight")
             }
         }
         if (reviverecipe === true) {
             $("#potionchoice").append("<p class='brewpotions' id='Revive'>Revive(" + revivepotion + ")<br> 4 flowers <br> 4 extract</p>");
             if (ingredient["Flowers"].quantity >= 4 && ingredient["Extract"].quantity >= 4) {
                 $("#Revive").addClass("highlight")
             }
         }
         if (recoverrecipe === true) {
             $("#potionchoice").append("<p class='brewpotions' id='Recover'>Recover(" + recoverpotion + ") <br> 2 flower <BR> 2 berries.</p>");
             if (ingredient["Flowers"].quantity >= 2 && ingredient["Berries"].quantity >= 2) {
                 $("#Recover").addClass("highlight")
             }
         }
         if (teleportrecipe === true) {
             $("#potionchoice").append("<p class='brewpotions' id='Teleport'>teleport(" + teleportpotion + ")<br> 2 powder <br> 2 sap.</p>");
             if (ingredient["Powder"].quantity >= 2 && ingredient["Sap"].quantity >= 2) {
                 $("#Teleport").addClass("highlight")
             }
         }
         if (strengthrecipe === true) {
             $("#potionchoice").append("<p class='brewpotions' id='Strength'>Str. Boost(" + strengthpotion + ") <br> 2 mushrooms <BR> 2 berries.</p>");
             if (ingredient["Mushrooms"].quantity >= 2 && ingredient["Berries"].quantity >= 2) {
                 $("#Strength").addClass("highlight")
             }
         }
         if (defenserecipe === true) {
             $("#potionchoice").append("<p class='brewpotions' id='Defense'>Def. Boost(" + defensepotion + ")<br> 2 root <br> 2 honey</p>");
             if (ingredient["Roots"].quantity >= 2 && ingredient["Honey"].quantity >= 2) {
                 $("#Defense").addClass("highlight")
             }
         }
         if (resistancerecipe === true) {
             $("#potionchoice").append("<p class='brewpotions' id='Resistance'>Resist.boost(" + resistancepotion + ")<br> 2 herb <br> 2 honey</p>");
             if (ingredient["Herbs"].quantity >= 2 && ingredient["Honey"].quantity >= 2) {
                 $("#Resistance").addClass("highlight")
             }
         }
         if (standin1recipe === true) {
             //$("#TEXT").append("<p class='brewpotions' id='standin1'>Standin1:(" + standin1potion +") <br> 1 mushroom <BR> 6 bone marrow</p>");
         }
         if (healthrecipe === true) {
             $("#potionchoice").append("<p class='brewpotions' id='Health'>Health(" + healthpotion + ")<br> 2 Mushroom <br> 2 Sap</p>");
             if (ingredient["Mushrooms"].quantity >= 2 && ingredient["Sap"].quantity >= 2) {
                 $("#Health").addClass("highlight")
             }
         }
         if (leveluprecipe === true) {
             $("#potionchoice").append("<p class='brewpotions' id='Levelup'>Levelup(" + leveluppotion + ")<br> 2 root <br> 2 herb</p>");
             if (ingredient["Roots"].quantity >= 2 && ingredient["Herbs"].quantity >= 2) {
                 $("#Levelup").addClass("highlight")
             }
         }
         $("#Replicate").click(function () {
             if (ingredient["Essence"].quantity >= 5) {
                 ingredient["Essence"].quantity -= 5;
                 message("You brewed a Replicate potion. You receive one of each of the ingredients.");
                 for (var key in ingredient) {
                     ingredient[key].quantity += 1;
                 }
                 gotobrewery();
             }
             else {
                 message("You require 5 Essence for that. You only have " + ingredient["Essence"].quantity + " Essence.")
             }
         });
         $("#Revive").click(function () {
             if (ingredient["Flowers"].quantity >= 4 && ingredient["Extract"].quantity >= 4) {
                 revivepotion += 1;
                 ingredient["Flowers"].quantity -= 4;
                 ingredient["Extract"].quantity -= 4;
                 message("You brewed a Revive potion. Use it in the barracks to bring a dead unit back to life.")
                 gotobrewery();
             }
             else {
                 message("You require 4 flowers and 4 extract for that. You only have " + ingredient["Flowers"].quantity + " Flowers and " + ingredient["Extract"].quantity + " extract.")
             }
         });
         $("#Recover").click(function () {
             if (ingredient["Flowers"].quantity >= 2 && ingredient["Berries"].quantity >= 2) {
                 recoverpotion += 1;
                 ingredient["Flowers"].quantity -= 2;
                 ingredient["Berries"].quantity -= 2;
                 message("You brewed a Recover potion. Use it to fully heal a unit that was sent to the hospital.")
                 gotobrewery();
             }
             else {
                 message("You require 2 flowers and 2 berries for that. You only have " + ingredient["Flowers"].quantity + " flowers and " + ingredient["Berries"].quantity + " berries.")
             }
         });
         $("#Teleport").click(function () {
             if (ingredient["Powder"].quantity >= 2 && ingredient["Sap"].quantity >= 2) {
                 teleportpotion += 1;
                 ingredient["Powder"].quantity -= 2;
                 ingredient["Sap"].quantity -= 2;
                 message("You brewed a Teleport potion. Use it in the barracks to bring a unit that escaped immediately back to the barracks.")
                 gotobrewery();
             }
             else {
                 message("You require 2 powder and 2 sap for that. You only have " + ingredient["Powder"].quantity + " powder and " + ingredient["Sap"].quantity + " sap.")
             }
         });
         $("#Strength").click(function () {
             if (ingredient["Mushrooms"].quantity >= 2 && ingredient["Berries"].quantity >= 2) {
                 strengthpotion += 1;
                 ingredient["Mushrooms"].quantity -= 2;
                 ingredient["Berries"].quantity -= 2;
                 message("You brewed a Boost potion. Use it in the barracks to give a unit a permanent boost to strength.");
                 gotobrewery();
             }
             else {
                 message("You require 2 mushrooms and 2 Berries for that. You only have " + ingredient["Mushrooms"].quantity + " mushrooms and " + ingredient["Berries"].quantity + " berries.")
             }
         });
         $("#Defense").click(function () {
             if (ingredient["Roots"].quantity >= 2 && ingredient["Honey"].quantity >= 2) {
                 defensepotion += 1;
                 ingredient["Roots"].quantity -= 2;
                 ingredient["Honey"].quantity -= 2;
                 message("You brewed a Boost potion. Use it in the barracks to give a unit a permanent boost to defense.");
                 gotobrewery();
             }
             else {
                 message("You require 2 Roots and 2 Honey for that. You only have " + ingredient["Roots"].quantity + " roots and " + ingredient["Honey"].quantity + " Honey.")
             }
         });
         $("#Resistance").click(function () {
             if (ingredient["Herbs"].quantity >= 2 && ingredient["Honey"].quantity >= 2) {
                 resistancepotion += 1;
                 ingredient["Herbs"].quantity -= 2;
                 ingredient["Honey"].quantity -= 2;
                 message("You brewed a Boost potion. Use it in the barracks to give a unit a permanent boost to resistance.");
                 gotobrewery();
             }
             else {
                 message("You require 2 Herbs and 2 honey for that. You only have " + ingredient["Herbs"].quantity + " Herbs and " + ingredient["Honey"].quantity + " honey.")
             }
         });
         $("#Health").click(function () {
             if (ingredient["Mushrooms"].quantity >= 2 && ingredient["Sap"].quantity >= 2) {
                 healthpotion += 1;
                 ingredient["Mushrooms"].quantity -= 2;
                 ingredient["Sap"].quantity -= 2;
                 message("You brewed a Health potion. Use it in the barracks to give a unit a permanent boost to it's health.");
                 gotobrewery();
             }
             else {
                 message("You require 2 Mushrooms and 2 Sap for that. You only have " + ingredient["Mushrooms"].quantity + " Mushrooms and " + ingredient["Sap"].quantity + " Sap.")
             }
         });
         $("#Levelup").click(function () {
             if (ingredient["Roots"].quantity >= 2 && ingredient["Herbs"].quantity >= 2) {
                 leveluppotion += 1;
                 ingredient["Roots"].quantity -= 2;
                 ingredient["Herbs"].quantity -= 2;
                 message("You brewed a Level-up potion. Use it in the barracks to give a unit a level up.");
                 gotobrewery();
             }
             else {
                 message("You require 2 Roots and 2 Herbs for that. You only have " + ingredient["Roots"].quantity + " roots and " + ingredient["Herbs"].quantity + " herbs.")
             }
         });
     }

     function gotodetails() {
         $("#TEXT").html('<div class="Backbutton"><img src = "../Pictures/back.gif" /></div>');
         $(".Backbutton").click(function () {
             $("#TEXT").empty();
             gotocapitol();
         })
         $("#TEXT").append("<h1 style='text-align:center'>Mission Details</h1>");
         $("#TEXT").append("<p style='text-align:center'>" + missiondetails + "</p>")
     }

     function presspass() {
         //Get information on locations
         $("#Pass").click(function () {
             $("#TEXT").empty();
             $(".actions").empty();
             $(".actions").append("<div class = 'actionbutton' id='Pass'><p>Pass</p></div>");
             presspass();
             setTimeout(function () {
                 levelresearch()
             }, 300);
             movebadguys();
             setTimeout(function () {
                 createbadguys()
             }, 100);
             setTimeout(function () {
                 newday()
             }, 400);
             setTimeout(function () {
                 startcombat()
             }, 500);
             setTimeout(function () {
                 enemyconquer()
             }, 530);
         });
         $("#Hospital").click(function () {
             hospitalclick();

             function hospitalclick() {
                 $("#TEXT").empty().append("<p>Select unit to send to hospital</p>");
                 tipmessage("Healing", "Select a unit on the right to send to the hospital for " + (1 + difflevel) + " turns.");
                 for (var i = 0; i < index; i++) {
                     if (units[i].group === curgroupnum) {
                         $("#TEXT").append(units[i].picture);
                         $('#' + i).append('<div class="healthbar" id = "HB' + i + '" style="position: relative; margin-top:90%; width: ' + (units[i].health / units[i].maxhealth) * 100 + '%"></div><div class="level"><p>' + units[i].level + '</p></div>');
                     }
                 }
                 $(".barrackpic").click(function () {
                     var thisindex = $(this).attr("id");
                     var thisgroup = units[thisindex].group;
                     units[thisindex].health = units[thisindex].maxhealth;
                     units[thisindex].group = 0;
                     units[thisindex].healing = 1 + difflevel;
                     if (units[thisindex].type === "Healer") {
                         units[thisindex].power = 50;
                         if (units[thisindex].abilitydoubleenergy === true) {
                             units[thisindex].power = 100;
                         }
                     }
                     if (units[thisindex].type === "Soldier") {
                         if (units[thisindex].abilitymedkit === true) {
                             units[thisindex].medkit = true
                         }
                     }
                     var temp2 = 0;
                     for (var o = 0; o < index; o++) {
                         if (units[o].group === thisgroup) {
                             temp2 += 1;
                         }
                     }
                     if (temp2 === 0) {
                         $("#M" + thisgroup).remove();
                         $("#space" + groups[thisgroup].location).data("filled", 0);
                         groups[thisgroup].location = -1;
                         $("#TEXT").empty();
                     }
                     else {
                         hospitalclick();
                     }
                 });
             }
         });
         $("#Armory").click(function () {
             gotoarmory();
         });
         $("#Explore").click(function () {
             Explore();
         });
         $("#Return").click(function () {
             for (var i = 0; i < index; i++) {
                 if (units[i].group === curgroupnum) {
                     $("#TEXT").empty();
                     units[i].group = 0;
                     $("#space70").data('filled', 0);
                 }
                 $("#M" + curgroupnum).remove();
                 groups[curgroupnum].location = -1;
             }
         })
     }

     function newday() {
         day += 1;
         sorcerermana += 5 * sorcererincrease;
         if (demonrest > 0) {
             demonrest -= 1;
         }
         if (angelrest > 0) {
             angelrest -= 1;
         }
         if (djinnrest > 0) {
             djinnrest -= 1;
         }
         if (frostlordrest > 0) {
             frostlordrest -= 1;
         }
         if (sorcerermana > 100) {
             sorcerermana = 100;
         }
         var diffinverse = 0;
         switch (difflevel) {
         case 1:
             diffinverse = 3;
             break;
         case 2:
             diffinverse = 2;
             break;
         case 3:
             diffinverse = 1;
             break;
         }
         if (typeof indiv_newday == 'function') {
             indiv_newday(day);
         }
         for (var i = 1; i < groupindex; i++) {
             groups[i].hasmoved = false;
         }
         for (var i = 1; i < Egroupindex; i++) {
             Egroups[i].hasmoved = false;
             //Lose entire game
             if (Egroups[i].location === 70) {
                 gameover();
             }
         }
         for (var i = 0; i < index; i++) {
             if (units[i].group < 0) {
                 units[i].group = 0;
             }
             if (units[i].enroute > 0) {
                 units[i].enroute -= 1;
             }
             if (units[i].healing > 0) {
                 units[i].healing -= 1;
             }
         }
         $('.icon').removeClass("grayicon");
     }
     //wild
     function Wolf(e, Egroupindex, level) {
         this.type = "Wolf";
         this.name = "Wolf";
         this.level = level;
         if (level === 1) {
             this.attack = 40;
             this.health = 40;
             this.maxhealth = 40;
         }
         if (level === 2) {
             this.attack = 50;
             this.health = 60;
             this.maxhealth = 60;
         }
         if (level === 3) {
             this.attack = 60;
             this.health = 80;
             this.maxhealth = 80;
         }
         if (level === 4) {
             this.attack = 75;
             this.health = 100;
             this.maxhealth = 100;
         }
         this.defense = 20;
         this.resistance = 10;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.terrify = 0;
         this.lightning = 1;
         this.fire = 1;
         this.ice = 1;
         this.usedspecial = false;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.charge = "None";
         this.curleft = 0;
         this.curtop = 25;
         this.group = Egroupindex;
         this.description = "These pack creatures are intelligent and fierce.";
         this.picture = "<div class='Ebarrackpic' id='E" + e + "'><img src='../Pictures/Enemies/wolf.gif' /></div>";
         this.image = '../Pictures/Enemies/wolf.gif';
         this.dying = '../Pictures/Enemies/wolf_dying.gif'
     }

     function Sparrow(e, Egroupindex, level) {
         this.type = "Sparrow";
         this.name = "Sparrow";
         this.level = level;
         if (level === 1) {
             this.attack = 15;
             this.health = 25; //40
             this.maxhealth = 25; //40
         }
         if (level === 2) {
             this.attack = 25;
             this.health = 35;
             this.maxhealth = 35;
         }
         if (level === 3) {
             this.attack = 35;
             this.health = 45;
             this.maxhealth = 45;
         }
         if (level === 4) {
             this.attack = 43;
             this.health = 55;
             this.maxhealth = 55;
         }
         this.defense = 10;
         this.resistance = 10;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.terrify = 0;
         this.lightning = 1;
         this.fire = 1;
         this.ice = 1;
         this.usedspecial = false;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.charge = "None";
         this.curleft = 0;
         this.curtop = 25;
         this.group = Egroupindex;
         this.description = "These pesky creatures can soar instantly to any ally.";
         this.picture = "<div class='Ebarrackpic' id='E" + e + "'><img src='../Pictures/Enemies/Sparrow.gif'/></div>";
         this.image = '../Pictures/Enemies/Sparrow.gif';
         this.dying = '../Pictures/Enemies/Sparrow_dying.gif'
     }

     function Spider(e, Egroupindex, level) {
         this.type = "Spider";
         this.name = "Spider";
         this.level = level;
         if (level === 1) {
             this.attack = 0;
             this.health = 100;
             this.maxhealth = 100;
         }
         if (level === 2) {
             this.attack = 0;
             this.health = 120;
             this.maxhealth = 120;
         }
         if (level === 3) {
             this.attack = 0;
             this.health = 140;
             this.maxhealth = 140;
         }
         if (level === 4) {
             this.attack = 0;
             this.health = 175;
             this.maxhealth = 175;
         }
         this.defense = 25;
         this.resistance = 25;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.terrify = 0;
         this.lightning = 1;
         this.fire = 1;
         this.ice = 1;
         this.usedspecial = false;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.charge = "None";
         this.curleft = 0;
         this.curtop = 25;
         this.group = Egroupindex;
         this.description = "While unable to do damage, they can poison and drag units to them with their web.";
         this.picture = "<div class='Ebarrackpic' id='E" + e + "'><img src='../Pictures/Enemies/spider.gif' /></div>";
         this.image = '../Pictures/Enemies/spider.gif';
         this.dying = '../Pictures/Enemies/spider_dying.gif'
     }

     function Wisp(e, Egroupindex, level) {
         this.type = "Wisp";
         this.name = "Wisp";
         this.level = level;
         if (level === 1) {
             this.attack = 40;
             this.health = 40;
             this.maxhealth = 40;
         }
         if (level === 2) {
             this.attack = 60;
             this.health = 60;
             this.maxhealth = 60;
         }
         if (level === 3) {
             this.attack = 80;
             this.health = 80;
             this.maxhealth = 80;
         }
         if (level === 4) {
             this.attack = 100;
             this.health = 100;
             this.maxhealth = 100;
         }
         this.defense = 0;
         this.resistance = 30;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.terrify = 0;
         this.lightning = 1;
         this.fire = 2;
         this.ice = .5;
         this.maxcharge = 1;
         this.usedspecial = false;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.charge = 0;
         this.curleft = 0;
         this.curtop = 25;
         this.group = Egroupindex;
         this.description = "These flittery creatures are hard to catch. They can use icy magic that can hit regardless of location.";
         this.picture = "<div class='Ebarrackpic' id='E" + e + "'><img src='../Pictures/Enemies/Wisp.gif'/></div>";
         this.image = '../Pictures/Enemies/Wisp.gif';
         this.dying = '../Pictures/Enemies/Wisp_dying.gif'
     }

     function Bear(e, Egroupindex, level) {
         this.type = "Bear";
         this.name = "Bear";
         this.level = level;
         if (level === 1) {
             this.attack = 60;
             this.health = 100;
             this.maxhealth = 100;
         }
         if (level === 2) {
             this.attack = 80;
             this.health = 120;
             this.maxhealth = 120;
         }
         if (level === 3) {
             this.attack = 100;
             this.health = 140;
             this.maxhealth = 140;
         }
         if (level === 4) {
             this.attack = 125;
             this.health = 175;
             this.maxhealth = 175;
         }
         this.defense = 25;
         this.resistance = 25;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.terrify = 0;
         this.lightning = 1;
         this.fire = 1;
         this.ice = 1;
         this.usedspecial = false;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.charge = "None";
         this.curleft = 0;
         this.curtop = 25;
         this.group = Egroupindex;
         this.description = "These creatures love to attack the eyes and cause blindness.";
         this.picture = "<div class='Ebarrackpic' id='E" + e + "'><img src='../Pictures/Enemies/bear.gif' /></div>";
         this.image = '../Pictures/Enemies/bear.gif';
         this.dying = '../Pictures/Enemies/bear_dying.gif'
     }

     function Hellhound(e, Egroupindex, level) {
         this.type = "Hellhound";
         this.name = "Hellhound";
         this.level = level;
         if (level === 1) {
             this.attack = 70;
             this.health = 30;
             this.maxhealth = 30;
         }
         if (level === 2) {
             this.attack = 100;
             this.health = 50;
             this.maxhealth = 50;
         }
         if (level === 3) {
             this.attack = 130;
             this.health = 70;
             this.maxhealth = 70;
         }
         if (level === 4) {
             this.attack = 165;
             this.health = 85;
             this.maxhealth = 85;
         }
         this.defense = 0;
         this.resistance = 0;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.terrify = 0;
         this.lightning = 1;
         this.fire = .5;
         this.ice = 2;
         this.usedspecial = false;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.charge = "None";
         this.curleft = 0;
         this.curtop = 25;
         this.group = Egroupindex;
         this.description = "These fast beasts can move two spaces a turn and deal magic damage up close.";
         this.picture = "<div class='Ebarrackpic' id='E" + e + "'><img src='../Pictures/Enemies/hellhound.gif' /></div>";
         this.image = '../Pictures/Enemies/hellhound.gif';
         this.dying = '../Pictures/Enemies/hellhound_dying.gif'
     }

     function Elk(e, Egroupindex, level) {
         this.type = "Elk";
         this.name = "Elk";
         this.level = level;
         if (level === 1) {
             this.attack = 0;
             this.health = 100;
             this.maxhealth = 100;
         }
         if (level === 2) {
             this.attack = 0;
             this.health = 120;
             this.maxhealth = 120;
         }
         if (level === 3) {
             this.attack = 0;
             this.health = 140;
             this.maxhealth = 140;
         }
         if (level === 4) {
             this.attack = 0;
             this.health = 175;
             this.maxhealth = 175;
         }
         this.defense = 25;
         this.resistance = 25;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.terrify = 0;
         this.lightning = 1;
         this.fire = 1;
         this.ice = 1;
         this.usedspecial = false;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.charge = "None";
         this.curleft = 0;
         this.curtop = 25;
         this.group = Egroupindex;
         this.description = "These fast creatures won't attack you, but catching them won't be easy.";
         this.picture = "<div class='Ebarrackpic' id='E" + e + "'><img src='../Pictures/Enemies/Elk.gif' /></div>";
         this.image = '../Pictures/Enemies/Elk.gif';
         this.dying = '../Pictures/Enemies/Elk_dying.gif'
     }

     function Turtle(e, Egroupindex, level) {
         this.type = "Turtle";
         this.name = "Turtle";
         this.level = level;
         if (level === 1) {
             this.attack = 20;
             this.health = 100;
             this.maxhealth = 100;
         }
         if (level === 2) {
             this.attack = 40;
             this.health = 120;
             this.maxhealth = 120;
         }
         if (level === 3) {
             this.attack = 60;
             this.health = 140;
             this.maxhealth = 140;
         }
         if (level === 4) {
             this.attack = 80;
             this.health = 175;
             this.maxhealth = 175;
         }
         this.defense = 35;
         this.resistance = 5;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.terrify = 0;
         this.lightning = 1;
         this.fire = 1;
         this.ice = 1;
         this.usedspecial = false;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.charge = "None";
         this.curleft = 0;
         this.curtop = 25;
         this.group = Egroupindex;
         this.description = "With a hard shell, and a painful bite, these creatures are best dealt with using magic.";
         this.picture = "<div class='Ebarrackpic' id='E" + e + "'><img src='../Pictures/Enemies/Turtle.gif' /></div>";
         this.image = '../Pictures/Enemies/Turtle.gif';
         this.dying = '../Pictures/Enemies/Turtle_dying.gif'
     }
     //horde
     function Bat(e, Egroupindex, level) {
         this.type = "Bat";
         this.name = "Bat";
         this.level = level;
         if (level === 1) {
             this.attack = 25;
             this.health = 40; //40
             this.maxhealth = 40; //40
         }
         if (level === 2) {
             this.attack = 35;
             this.health = 50;
             this.maxhealth = 50;
         }
         if (level === 3) {
             this.attack = 45;
             this.health = 60;
             this.maxhealth = 60;
         }
         if (level === 4) {
             this.attack = 55;
             this.health = 70;
             this.maxhealth = 70;
         }
         this.defense = 10;
         this.resistance = 10;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.terrify = 0;
         this.lightning = 1;
         this.fire = 1;
         this.ice = 1;
         this.usedspecial = false;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.charge = "None";
         this.curleft = 0;
         this.curtop = 25;
         this.group = Egroupindex;
         this.description = "These pesky creatures can soar instantly to any ally.";
         this.picture = "<div class='Ebarrackpic' id='E" + e + "'><img src='../Pictures/Enemies/Bat.gif'/></div>";
         this.image = '../Pictures/Enemies/Bat.gif';
         this.dying = '../Pictures/Enemies/Bat_dying.gif'
     }

     function Goblin(e, Egroupindex, level) {
         this.type = "Goblin";
         this.name = "Goblin";
         this.level = level;
         if (level === 1) {
             this.attack = 20;
             this.health = 30;
             this.maxhealth = 30;
         }
         if (level === 2) {
             this.attack = 30;
             this.health = 40;
             this.maxhealth = 40;
         }
         if (level === 3) {
             this.attack = 40;
             this.health = 60;
             this.maxhealth = 60;
         }
         if (level === 4) {
             this.attack = 50;
             this.health = 75;
             this.maxhealth = 75;
         }
         this.defense = 15;
         this.resistance = 15;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.terrify = 0;
         this.lightning = 1;
         this.fire = 1;
         this.ice = 1;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.charge = "None";
         this.curleft = 0;
         this.curtop = 25;
         this.group = Egroupindex;
         this.description = "Kill one, and another will be around the corner.";
         this.picture = "<div class='Ebarrackpic' id='E" + e + "'><img src='../Pictures/Enemies/goblin.gif'/></div>";
         this.image = '../Pictures/Enemies/goblin.gif';
         this.dying = '../Pictures/Enemies/goblin_dying.gif'
             //Eindex+=1;
     }

     function Spitter(e, Egroupindex, level) {
         this.type = "Spitter";
         this.name = "Spitter";
         this.level = level;
         if (level === 1) {
             this.attack = 15;
             this.health = 30;
             this.maxhealth = 30;
         }
         if (level === 2) {
             this.attack = 25;
             this.health = 50;
             this.maxhealth = 50;
         }
         if (level === 3) {
             this.attack = 35;
             this.health = 70;
             this.maxhealth = 70;
         }
         if (level === 4) {
             this.attack = 45;
             this.health = 85;
             this.maxhealth = 85;
         }
         this.defense = 10;
         this.resistance = 10;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.terrify = 0;
         this.lightning = 1;
         this.fire = 1;
         this.ice = 1;
         this.usedspecial = false;
         this.usedimmobilized = 3;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.charge = "None";
         this.curleft = 0;
         this.curtop = 25;
         this.group = Egroupindex;
         this.description = "These long range fighters can hit any target in a straight line, and can blind with it's sticky attack.";
         this.picture = "<div class='Ebarrackpic' id='E" + e + "'><img src='../Pictures/Enemies/Spitter.gif' /></div>";
         this.image = '../Pictures/Enemies/Spitter.gif';
         this.dying = '../Pictures/Enemies/Spitter_dying.gif'
             //  Eindex+=1;
     }

     function Gremlin(e, Egroupindex, level) {
         this.type = "Gremlin";
         this.name = "Gremlin";
         this.level = level;
         if (level === 1) {
             this.attack = 40;
             this.health = 15;
             this.maxhealth = 15;
         }
         if (level === 2) {
             this.attack = 50;
             this.health = 20; //40
             this.maxhealth = 20; //40
         }
         if (level === 3) {
             this.attack = 70;
             this.health = 30;
             this.maxhealth = 30;
         }
         if (level === 4) {
             this.attack = 85;
             this.health = 38;
             this.maxhealth = 38;
         }
         this.defense = 0;
         this.resistance = 0;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.terrify = 0;
         this.lightning = 1;
         this.fire = 1;
         this.ice = 1;
         this.usedspecial = false;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.charge = "None";
         this.curleft = 0;
         this.curtop = 25;
         this.group = Egroupindex;
         this.description = "While weak alone, these devious creatures can swarm in high numbers.";
         this.picture = "<div class='Ebarrackpic' id='E" + e + "'><img src='../Pictures/Enemies/Gremlin.gif'/></div>";
         this.image = '../Pictures/Enemies/Gremlin.gif';
         this.dying = '../Pictures/Enemies/Gremlin_dying.gif'
     }

     function Warrior(e, Egroupindex, level) {
         this.type = "Warrior";
         this.name = "Warrior";
         this.level = level;
         if (level === 1) {
             this.attack = 40;
             this.health = 60;
             this.maxhealth = 60;
         }
         if (level === 2) {
             this.attack = 60;
             this.health = 90;
             this.maxhealth = 90;
         }
         if (level === 3) {
             this.attack = 80;
             this.health = 120;
             this.maxhealth = 120;
         }
         if (level === 4) {
             this.attack = 100;
             this.health = 150;
             this.maxhealth = 150;
         }
         this.defense = 35;
         this.resistance = 0;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.terrify = 0;
         this.lightning = 1;
         this.fire = 1;
         this.ice = 1;
         this.usedspecial = false;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.charge = "None";
         this.curleft = 0;
         this.curtop = 25;
         this.group = Egroupindex;
         this.description = "Masters of the close combat, these warriors can do double damage if they don't have to move first. Vunerable to Magic.";
         this.picture = "<div class='Ebarrackpic' id='E" + e + "'><img src='../Pictures/Enemies/warrior.gif' /></div>";
         this.image = '../Pictures/Enemies/warrior.gif';
         this.dying = '../Pictures/Enemies/warrior_dying.gif'
         if (e === -1) {
             this.picture = "";
             this.image = '';
             this.alive = false;
             this.curleft = 1;
             this.curtop = 424;
         }
     }

     function Clunker(e, Egroupindex, level) {
         this.type = "Clunker";
         this.name = "Clunker";
         this.level = level;
         if (level === 1) {
             this.attack = 20;
             this.health = 70;
             this.maxhealth = 70;
         }
         if (level === 2) {
             this.attack = 30;
             this.health = 100; //40
             this.maxhealth = 100; //40
         }
         if (level === 3) {
             this.attack = 40;
             this.health = 140;
             this.maxhealth = 140;
         }
         if (level === 4) {
             this.attack = 50;
             this.health = 175;
             this.maxhealth = 175;
         }
         this.defense = 20;
         this.resistance = 20;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.terrify = 0;
         this.lightning = 2;
         this.fire = 1;
         this.ice = 1;
         this.usedspecial = false;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.charge = "None";
         this.curleft = 0;
         this.curtop = 25;
         this.group = Egroupindex;
         this.description = "These big machines can take alot of abuse.";
         this.picture = "<div class='Ebarrackpic' id='E" + e + "'><img src='../Pictures/Enemies/Clunker.gif'/></div>";
         this.image = '../Pictures/Enemies/Clunker.gif';
         this.dying = '../Pictures/Enemies/Clunker_dying.gif'
     }

     function Vacuum(e, Egroupindex, level) {
         this.type = "Vacuum";
         this.name = "Vacuum";
         this.level = level;
         if (level === 1) {
             this.attack = 20;
             this.health = 50;
             this.maxhealth = 50;
         }
         if (level === 2) {
             this.attack = 30;
             this.health = 70; //40
             this.maxhealth = 70; //40
         }
         if (level === 3) {
             this.attack = 40;
             this.health = 100;
             this.maxhealth = 100;
         }
         if (level === 4) {
             this.attack = 50;
             this.health = 120;
             this.maxhealth = 120;
         }
         this.defense = 20;
         this.resistance = 20;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.terrify = 0;
         this.lightning = 2;
         this.fire = 1;
         this.ice = 1;
         this.usedspecial = false;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.charge = "None";
         this.curleft = 0;
         this.curtop = 25;
         this.group = Egroupindex;
         this.description = "This machine will use air to draw your units to it.";
         this.picture = "<div class='Ebarrackpic' id='E" + e + "'><img src='../Pictures/Enemies/Vacuum.gif'/></div>";
         this.image = '../Pictures/Enemies/Vacuum.gif';
         this.dying = '../Pictures/Enemies/Vacuum_dying.gif'
     }

     function Magnet(e, Egroupindex, level) {
         this.type = "Magnet";
         this.name = "Magnet";
         this.level = level;
         if (level === 1) {
             this.attack = 30;
             this.health = 50;
             this.maxhealth = 50;
         }
         if (level === 2) {
             this.attack = 40;
             this.health = 80; //40
             this.maxhealth = 80; //40
         }
         if (level === 3) {
             this.attack = 50;
             this.health = 110;
             this.maxhealth = 110;
         }
         if (level === 4) {
             this.attack = 60;
             this.health = 145;
             this.maxhealth = 145;
         }
         this.defense = 15;
         this.resistance = 15;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.terrify = 0;
         this.lightning = 2;
         this.fire = 1;
         this.ice = 1;
         this.usedspecial = false;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.charge = "None";
         this.curleft = 0;
         this.curtop = 25;
         this.group = Egroupindex;
         this.description = "These machines redirect and catch all arrows.";
         this.picture = "<div class='Ebarrackpic' id='E" + e + "'><img src='../Pictures/Enemies/Magnet.gif'/></div>";
         this.image = '../Pictures/Enemies/Magnet.gif';
         this.dying = '../Pictures/Enemies/Magnet_dying.gif'
     }

     function FireElemental(e, Egroupindex, level) {
         this.type = "Fire Elemental";
         this.name = "Fire Elemental";
         this.level = level;
         if (level === 1) {
             this.attack = 20;
             this.health = 40;
             this.maxhealth = 40;
         }
         if (level === 2) {
             this.attack = 30;
             this.health = 60;
             this.maxhealth = 60;
         }
         if (level === 3) {
             this.attack = 40;
             this.health = 80;
             this.maxhealth = 80;
         }
         if (level === 4) {
             this.attack = 50;
             this.health = 100;
             this.maxhealth = 100;
         }
         this.defense = 10;
         this.resistance = 15;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.terrify = 0;
         this.lightning = 1;
         this.fire = .5;
         this.ice = 2;
         this.maxcharge = 1;
         this.usedspecial = false;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.charge = 0;
         this.curleft = 0;
         this.curtop = 25;
         this.group = Egroupindex;
         this.description = "While the weakest of the elementals, these fiery beasts can shoot flames at any ally for only one charge.";
         this.picture = "<div class='Ebarrackpic' id='E" + e + "'><img src='../Pictures/Enemies/Fire Elemental.gif'/></div>";
         this.image = '../Pictures/Enemies/Fire Elemental.gif';
         this.dying = '../Pictures/Enemies/Fire Elemental_dying.gif'
     }

     function LightningElemental(e, Egroupindex, level) {
         this.type = "Lightning Elemental";
         this.name = "Lightning Elemental";
         this.level = level;
         if (level === 1) {
             this.attack = 100;
             this.health = 30;
             this.maxhealth = 30;
         }
         if (level === 2) {
             this.attack = 150;
             this.health = 40;
             this.maxhealth = 40;
         }
         if (level === 3) {
             this.attack = 200;
             this.health = 50;
             this.maxhealth = 50;
         }
         if (level === 4) {
             this.attack = 250;
             this.health = 60;
             this.maxhealth = 60;
         }
         this.defense = 10;
         this.resistance = 40;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.terrify = 0;
         this.lightning = .5;
         this.fire = 1;
         this.ice = 1;
         this.maxcharge = 2;
         this.usedspecial = false;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.charge = 0;
         this.curleft = 0;
         this.curtop = 25;
         this.group = Egroupindex;
         this.description = "Most powerful of the elementals, they can shoot a bolt anywhere for a high cost of 3 charge.";
         this.picture = "<div class='Ebarrackpic' id='E" + e + "'><img src='../Pictures/Enemies/Lightning Elemental.gif'/></div>";
         this.image = '../Pictures/Enemies/Lightning Elemental.gif';
         this.dying = '../Pictures/Enemies/Lightning Elemental_dying.gif'
     }

     function IceElemental(e, Egroupindex, level) {
         this.type = "Ice Elemental";
         this.name = "Ice Elemental";
         this.level = level;
         if (level === 1) {
             this.attack = 70;
             this.health = 60;
             this.maxhealth = 60;
         }
         if (level === 2) {
             this.attack = 90;
             this.health = 80;
             this.maxhealth = 80;
         }
         if (level === 3) {
             this.attack = 110;
             this.health = 100;
             this.maxhealth = 100;
         }
         if (level === 4) {
             this.attack = 135;
             this.health = 125;
             this.maxhealth = 125;
         }
         this.defense = 20;
         this.resistance = 5;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.terrify = 0;
         this.lightning = 1;
         this.fire = 2;
         this.ice = .5;
         this.maxcharge = 2;
         this.usedspecial = false;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.charge = 0;
         this.curleft = 0;
         this.curtop = 25;
         this.group = Egroupindex;
         this.description = "More powerful, yet slower than the flame elemental, these chilly creatures can do ice damage two spaces away for 2 charge.";
         this.picture = "<div class='Ebarrackpic' id='E" + e + "'><img src='../Pictures/Enemies/Ice Elemental.gif'/></div>";
         this.image = '../Pictures/Enemies/Ice Elemental.gif';
         this.dying = '../Pictures/Enemies/Ice Elemental_dying.gif'
     }

     function Werewolf(e, Egroupindex, level) {
         this.type = "Werewolf";
         this.name = "Werewolf";
         this.level = level;
         if (level === 1) {
             this.attack = 40;
             this.health = 70;
             this.maxhealth = 70;
         }
         if (level === 2) {
             this.attack = 60;
             this.health = 110;
             this.maxhealth = 110;
         }
         if (level === 3) {
             this.attack = 80;
             this.health = 150;
             this.maxhealth = 150;
         }
         if (level === 4) {
             this.attack = 100;
             this.health = 185;
             this.maxhealth = 185;
         }
         this.defense = 20;
         this.resistance = 40;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.terrify = 0;
         this.lightning = 1;
         this.fire = 1;
         this.ice = 1;
         this.usedspecial = false;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.charge = "None";
         this.curleft = 0;
         this.curtop = 25;
         this.group = Egroupindex;
         this.description = "These savage beasts have high resistance to magic, and can heal everyturn.";
         this.picture = "<div class='Ebarrackpic' id='E" + e + "'><img src='../Pictures/Enemies/werewolf.gif' /></div>";
         this.image = '../Pictures/Enemies/werewolf.gif';
         this.dying = '../Pictures/Enemies/werewolf_dying.gif'
     }

     function Sounddepressor(e, Egroupindex, level) {
         this.type = "Sounddepressor";
         this.name = "Sounddepressor";
         this.level = level;
         if (level === 1) {
             this.attack = 40;
             this.health = 50;
             this.maxhealth = 50;
         }
         if (level === 2) {
             this.attack = 50;
             this.health = 80; //40
             this.maxhealth = 80; //40
         }
         if (level === 3) {
             this.attack = 60;
             this.health = 110;
             this.maxhealth = 110;
         }
         if (level === 4) {
             this.attack = 75;
             this.health = 135;
             this.maxhealth = 135;
         }
         this.defense = 15;
         this.resistance = 50;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.terrify = 0;
         this.lightning = 2;
         this.fire = 1;
         this.ice = 1;
         this.usedspecial = false;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.charge = "None";
         this.curleft = 0;
         this.curtop = 25;
         this.group = Egroupindex;
         this.description = "These machines prevent the use of all magical attacks against enemies.";
         this.picture = "<div class='Ebarrackpic' id='E" + e + "'><img src='../Pictures/Enemies/Sounddepressor.gif'/></div>";
         this.image = '../Pictures/Enemies/Sounddepressor.gif';
         this.dying = '../Pictures/Enemies/Sounddepressor_dying.gif'
     }

     function Vampire(e, Egroupindex, level) {
         this.type = "Vampire";
         this.name = "Vampire";
         this.level = level;
         if (level === 1) {
             this.attack = 60;
             this.health = 80;
             this.maxhealth = 80;
         }
         if (level === 2) {
             this.attack = 80;
             this.health = 100;
             this.maxhealth = 100;
         }
         if (level === 3) {
             this.attack = 100;
             this.health = 120;
             this.maxhealth = 120;
         }
         if (level === 4) {
             this.attack = 125;
             this.health = 150;
             this.maxhealth = 150;
         }
         this.defense = 20;
         this.resistance = 20;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.terrify = 0;
         this.lightning = 1;
         this.fire = 1;
         this.ice = 1;
         this.usedspecial = false;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.charge = "None";
         this.curleft = 0;
         this.curtop = 25;
         this.group = Egroupindex;
         this.description = "Quick and dangerous, these creatures gain life for every damage dealt.";
         this.picture = "<div class='Ebarrackpic' id='E" + e + "'><img src='../Pictures/Enemies/vampire.gif'/></div>";
         this.image = '../Pictures/Enemies/vampire.gif';
         this.dying = '../Pictures/Enemies/vampire_dying.gif'
     }

     function Cannon(e, Egroupindex, level) {
         this.type = "Cannon";
         this.name = "Cannon";
         this.level = level;
         if (level === 1) {
             this.attack = 20;
             this.health = 90;
             this.maxhealth = 90;
         }
         if (level === 2) {
             this.attack = 40;
             this.health = 120;
             this.maxhealth = 120;
         }
         if (level === 3) {
             this.attack = 60;
             this.health = 150;
             this.maxhealth = 150;
         }
         if (level === 4) {
             this.attack = 75;
             this.health = 185;
             this.maxhealth = 185;
         }
         this.defense = 20;
         this.resistance = 60;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.terrify = 0;
         this.lightning = 2;
         this.fire = 1;
         this.ice = 1;
         this.maxcharge = 5;
         this.charge = 0;
         this.usedspecial = false;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.curleft = 0;
         this.curtop = 25;
         this.group = Egroupindex;
         this.description = "These machines charge every turn, and if an ally moves into it's line of sight, it will fire. It will overload at 5 charge!";
         this.picture = "<div class='Ebarrackpic' id='E" + e + "'><img src='../Pictures/Enemies/Cannon.gif'/></div>";
         this.image = '../Pictures/Enemies/Cannon.gif';
         this.dying = '../Pictures/Enemies/Cannon_dying.gif'
     }

     function Beekeeper(e, Egroupindex, level) {
         this.type = "Beekeeper";
         this.name = "Beekeeper";
         this.level = level;
         if (level === 1) {
             this.attack = 0;
             this.health = 80;
             this.maxhealth = 80;
         }
         if (level === 2) {
             this.attack = 0;
             this.health = 100;
             this.maxhealth = 100;
         }
         if (level === 3) {
             this.attack = 0;
             this.health = 120;
             this.maxhealth = 120;
         }
         if (level === 4) {
             this.attack = 0;
             this.health = 150;
             this.maxhealth = 150;
         }
         this.defense = 20;
         this.resistance = 20;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.terrify = 0;
         this.lightning = 1;
         this.fire = 1;
         this.ice = 1;
         this.maxcharge = 1;
         this.usedspecial = false;
         this.usedsleep = 3;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.charge = 0;
         this.curleft = 0;
         this.curtop = 25;
         this.group = Egroupindex;
         this.description = "This master of insects will fling an endless supply of bees at you.";
         this.picture = "<div class='Ebarrackpic' id='E" + e + "'><img src='../Pictures/Enemies/Beekeeper.gif' /></div>";
         this.image = '../Pictures/Enemies/Beekeeper.gif';
         this.dying = '../Pictures/Enemies/Beekeeper_dying.gif'
     }

     function Bee(e, Egroupindex, level) {
         this.type = "Bee";
         this.name = "Bee";
         this.level = level;
         if (level === 1) {
             this.attack = 15;
             this.health = 20; //40
             this.maxhealth = 20; //40
         }
         if (level === 2) {
             this.attack = 25;
             this.health = 30;
             this.maxhealth = 30;
         }
         if (level === 3) {
             this.attack = 35;
             this.health = 40;
             this.maxhealth = 40;
         }
         if (level === 4) {
             this.attack = 45;
             this.health = 50;
             this.maxhealth = 50;
         }
         this.defense = 10;
         this.resistance = 10;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.terrify = 0;
         this.lightning = 1;
         this.fire = 1;
         this.ice = 1;
         this.usedspecial = false;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.charge = "None";
         this.curleft = 0;
         this.curtop = 25;
         this.group = Egroupindex;
         this.description = "These flying bugs can swarm quickly. Kill the keeper to stop them.";
         this.picture = "<div class='Ebarrackpic' id='E" + e + "'><img src='../Pictures/Enemies/Bee.gif'/></div>";
         this.image = '../Pictures/Enemies/Bee.gif';
     }

     function Flamewraith(e, Egroupindex, level) {
         this.type = "Flamewraith";
         this.name = "Flamewraith";
         this.level = level;
         if (level === 1) {
             this.attack = 50;
             this.health = 80;
             this.maxhealth = 80;
         }
         if (level === 2) {
             this.attack = 70;
             this.health = 100;
             this.maxhealth = 100;
         }
         if (level === 3) {
             this.attack = 90;
             this.health = 120;
             this.maxhealth = 120;
         }
         if (level === 4) {
             this.attack = 105;
             this.health = 150;
             this.maxhealth = 150;
         }
         this.defense = 20;
         this.resistance = 20;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.terrify = 0;
         this.lightning = 1;
         this.fire = .5;
         this.ice = 2;
         this.maxcharge = 2;
         this.usedspecial = false;
         this.phasedout = false;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.charge = 0;
         this.curleft = 0;
         this.curtop = 25;
         this.group = Egroupindex;
         this.description = "Wraiths can phase out and then become invincible. Use an elemental attack to phase them back in, and if its ice, it will do damage.";
         this.picture = "<div class='Ebarrackpic' id='E" + e + "'><img src='../Pictures/Enemies/flamewraith.gif'/></div>";
         this.image = '../Pictures/Enemies/flamewraith.gif';
         this.dying = '../Pictures/Enemies/flamewraith_dying.gif'
     }

     function Necromancer(e, Egroupindex, level) {
         this.type = "Necromancer";
         this.name = "Necromancer";
         this.level = level;
         if (level === 1) {
             this.attack = 0;
             this.health = 110;
             this.maxhealth = 110;
         }
         if (level === 2) {
             this.attack = 0;
             this.health = 130;
             this.maxhealth = 130;
         }
         if (level === 3) {
             this.attack = 0;
             this.health = 150;
             this.maxhealth = 150;
         }
         if (level === 4) {
             this.attack = 0;
             this.health = 185;
             this.maxhealth = 185;
         }
         this.defense = 20;
         this.resistance = 30;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.terrify = 0;
         this.lightning = 1;
         this.fire = 1;
         this.ice = 1;
         this.maxcharge = 1;
         this.usedspecial = false;
         this.usedsleep = 3;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.charge = 0;
         this.curleft = 0;
         this.curtop = 25;
         this.group = Egroupindex;
         this.description = "This master of death will raise the dead and chuck them at you.";
         this.picture = "<div class='Ebarrackpic' id='E" + e + "'><img src='../Pictures/Enemies/Necromancer.gif' /></div>";
         this.image = '../Pictures/Enemies/Necromancer.gif';
         this.dying = '../Pictures/Enemies/Necromancer_dying.gif'
     }

     function Zombie(e, Egroupindex, level) {
         this.type = "Zombie";
         this.name = "Zombie";
         this.level = level;
         if (level === 1) {
             this.attack = 40;
             this.health = 60; //40
             this.maxhealth = 60; //40
         }
         if (level === 2) {
             this.attack = 55;
             this.health = 80;
             this.maxhealth = 80;
         }
         if (level === 3) {
             this.attack = 70;
             this.health = 100;
             this.maxhealth = 100;
         }
         if (level === 4) {
             this.attack = 85;
             this.health = 125;
             this.maxhealth = 125;
         }
         this.defense = 25;
         this.resistance = 15;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.terrify = 0;
         this.lightning = 1;
         this.fire = 1;
         this.ice = 1;
         this.usedspecial = false;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.charge = "None";
         this.curleft = 0;
         this.curtop = 25;
         this.group = Egroupindex;
         this.description = "These walking dead can get out of hand. Kill the Necromancer!";
         this.picture = "<div class='Ebarrackpic' id='E" + e + "'><img src='../Pictures/Enemies/Zombie.gif'/></div>";
         this.image = '../Pictures/Enemies/Zombie.gif';
     }

     function Waterwraith(e, Egroupindex, level) {
         this.type = "Waterwraith";
         this.name = "Waterwraith";
         this.level = level;
         if (level === 1) {
             this.attack = 60;
             this.health = 100;
             this.maxhealth = 100;
         }
         if (level === 2) {
             this.attack = 80;
             this.health = 120;
             this.maxhealth = 120;
         }
         if (level === 3) {
             this.attack = 100;
             this.health = 140;
             this.maxhealth = 140;
         }
         if (level === 4) {
             this.attack = 125;
             this.health = 175;
             this.maxhealth = 175;
         }
         this.defense = 20;
         this.resistance = 20;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.terrify = 0;
         this.lightning = 2;
         this.fire = 1;
         this.ice = 1;
         this.maxcharge = 1;
         this.usedspecial = false;
         this.phasedout = false;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.charge = 0;
         this.curleft = 0;
         this.curtop = 25;
         this.group = Egroupindex;
         this.description = "Wraiths can phase out and then become invincible. Use an elemental attack to phase them back in, and if its Lightning, it will do damage.";
         this.picture = "<div class='Ebarrackpic' id='E" + e + "'><img src='../Pictures/Enemies/waterwraith.gif'/></div>";
         this.image = '../Pictures/Enemies/waterwraith.gif';
         this.dying = '../Pictures/Enemies/waterwraith_dying.gif'
     }

     function Frostwraith(e, Egroupindex, level) {
         this.type = "Frostwraith";
         this.name = "Frostwraith";
         this.level = level;
         if (level === 1) {
             this.attack = 60;
             this.health = 150;
             this.maxhealth = 150;
         }
         if (level === 2) {
             this.attack = 80;
             this.health = 180;
             this.maxhealth = 180;
         }
         if (level === 3) {
             this.attack = 100;
             this.health = 210;
             this.maxhealth = 210;
         }
         if (level === 4) {
             this.attack = 125;
             this.health = 265;
             this.maxhealth = 265;
         }
         this.defense = 20;
         this.resistance = 20;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.terrify = 0;
         this.lightning = 1;
         this.fire = 2;
         this.ice = .5;
         this.maxcharge = 1;
         this.usedspecial = false;
         this.phasedout = false;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.charge = 0;
         this.curleft = 0;
         this.curtop = 25;
         this.group = Egroupindex;
         this.description = "Wraiths can phase out and then become invincible. Use an elemental attack to phase them back in, and if its fire, it will do damage.";
         this.picture = "<div class='Ebarrackpic' id='E" + e + "'><img src='../Pictures/Enemies/frostwraith.gif'/></div>";
         this.image = '../Pictures/Enemies/frostwraith.gif';
         this.dying = '../Pictures/Enemies/frostwraith_dying.gif'
     }

     function Assassin(e, Egroupindex, level) {
         this.type = "Assassin";
         this.name = "Assassin";
         this.level = level;
         if (level === 1) {
             this.attack = 30;
             this.health = 80;
             this.maxhealth = 80;
         }
         if (level === 2) {
             this.attack = 50;
             this.health = 100;
             this.maxhealth = 100;
         }
         if (level === 3) {
             this.attack = 70;
             this.health = 120;
             this.maxhealth = 120;
         }
         if (level === 4) {
             this.attack = 85;
             this.health = 150;
             this.maxhealth = 150;
         }
         this.defense = 20;
         this.resistance = 20;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.terrify = 0;
         this.lightning = 1;
         this.fire = 1;
         this.ice = 1;
         this.usedspecial = false;
         this.usedsleep = 3;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.charge = "None";
         this.curleft = 0;
         this.curtop = 25;
         this.group = Egroupindex;
         this.description = "These long range fighters can hit any target, and, with their poisons, can sometimes put their targets to sleep.";
         this.picture = "<div class='Ebarrackpic' id='E" + e + "'><img src='../Pictures/Enemies/Assassin.gif' /></div>";
         this.image = '../Pictures/Enemies/Assassin.gif';
         this.dying = '../Pictures/Enemies/Assassin_dying.gif'
     }

     function Shaman(e, Egroupindex, level) {
         this.type = "Shaman";
         this.name = "Shaman";
         this.level = level;
         if (level === 1) {
             this.attack = 0;
             this.health = 130;
             this.maxhealth = 130;
         }
         if (level === 2) {
             this.attack = 0;
             this.health = 150;
             this.maxhealth = 150;
         }
         if (level === 3) {
             this.attack = 0;
             this.health = 170;
             this.maxhealth = 170;
         }
         if (level === 4) {
             this.attack = 0;
             this.health = 205;
             this.maxhealth = 205;
         }
         this.defense = 25;
         this.resistance = 35;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.terrify = 0;
         this.lightning = 1;
         this.fire = 1;
         this.ice = 1;
         this.maxcharge = 1;
         this.usedspecial = false;
         this.usedsleep = 3;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.charge = 0;
         this.curleft = 0;
         this.curtop = 25;
         this.group = Egroupindex;
         this.description = "This master of earth will send it's rocky friend to smash you.";
         this.picture = "<div class='Ebarrackpic' id='E" + e + "'><img src='../Pictures/Enemies/Shaman.gif' /></div>";
         this.image = '../Pictures/Enemies/Shaman.gif';
         this.dying = '../Pictures/Enemies/Shaman_dying.gif'
     }

     function Golem(e, Egroupindex, level) {
         this.type = "Golem";
         this.name = "Golem";
         this.level = level;
         if (level === 1) {
             this.attack = 50;
             this.health = 160; //40
             this.maxhealth = 160; //40
         }
         if (level === 2) {
             this.attack = 60;
             this.health = 200;
             this.maxhealth = 200;
         }
         if (level === 3) {
             this.attack = 70;
             this.health = 240;
             this.maxhealth = 240;
         }
         if (level === 4) {
             this.attack = 85;
             this.health = 300;
             this.maxhealth = 300;
         }
         this.defense = 60;
         this.resistance = 50;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.terrify = 0;
         this.lightning = 1;
         this.fire = 1;
         this.ice = 1;
         this.usedspecial = false;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.charge = "None";
         this.curleft = 0;
         this.curtop = 25;
         this.group = Egroupindex;
         this.description = "Touch as rocks, kill the shaman, or this rocky creature is will keep coming back.";
         this.picture = "<div class='Ebarrackpic' id='E" + e + "'><img src='../Pictures/Enemies/golem.gif'/></div>";
         this.image = '../Pictures/Enemies/golem.gif';
     }

     function Dragon(e, Egroupindex, level) {
         this.type = "Dragon";
         this.name = "Dragon";
         this.level = level;
         if (level === 1) {
             this.attack = 80;
             this.health = 200;
             this.maxhealth = 200;
         }
         if (level === 2) {
             this.attack = 100;
             this.health = 250;
             this.maxhealth = 250;
         }
         if (level === 3) {
             this.attack = 120;
             this.health = 300;
             this.maxhealth = 300;
         }
         if (level === 4) {
             this.attack = 150;
             this.health = 350;
             this.maxhealth = 350;
         }
         this.defense = 40;
         this.resistance = 80;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.terrify = 0;
         this.lightning = 1;
         this.fire = 1;
         this.ice = 1;
         this.usedspecial = false;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.charge = 0;
         this.curleft = 0;
         this.curtop = 25;
         this.group = Egroupindex;
         this.description = "Something is coming...";
         this.picture = "<div class='Ebarrackpic' id='E" + e + "'><img src='../Pictures/Enemies/Dragon.gif'/></div>";
         this.image = '../Pictures/Enemies/Dragon.gif';
         this.dying = '../Pictures/Enemies/Dragon_dying.gif'
     }

     function Hand(e, Egroupindex, level) {
         this.type = "Hand";
         this.name = "Hand";
         this.level = level;
         if (level === 1) {
             this.attack = 80;
             this.defense = 30;
             this.resistance = 0;
             this.health = 150; //40
             this.maxhealth = 150; //40
         }
         if (level === 2) {
             this.attack = 100;
             this.defense = 40;
             this.resistance = 0;
             this.health = 200;
             this.maxhealth = 200;
         }
         if (level === 3) {
             this.attack = 120;
             this.defense = 50;
             this.resistance = 0;
             this.health = 250;
             this.maxhealth = 250;
         }
         if (level === 4) {
             this.attack = 150;
             this.health = 335;
             this.maxhealth = 335;
         }
         this.defense = 50;
         this.resistance = 0;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.terrify = 0;
         this.lightning = 1;
         this.fire = 1;
         this.ice = 1;
         this.usedspecial = false;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.charge = "None";
         this.curleft = 0;
         this.curtop = 25;
         this.group = Egroupindex;
         this.description = "Something is coming...";
         this.picture = "<div class='Ebarrackpic' id='E" + e + "'><img src='../Pictures/Enemies/Hand.gif'/></div>";
         this.image = '../Pictures/Enemies/Hand.gif';
         this.dying = '../Pictures/Enemies/Hand_dying.gif'
     }

     function Destroyer(e, Egroupindex, level) {
         this.type = "Destroyer";
         this.name = "Destroyer";
         this.level = level;
         if (level === 1) {
             this.attack = 30;
             this.health = 550;
             this.maxhealth = 350;
         }
         if (level === 2) {
             this.attack = 40;
             this.health = 400;
             this.maxhealth = 400;
         }
         if (level === 3) {
             this.attack = 50;
             this.health = 450;
             this.maxhealth = 450;
         }
         if (level === 4) {
             this.attack = 60;
             this.health = 500;
             this.maxhealth = 500;
         }
         this.defense = 20;
         this.resistance = 0;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.terrify = 0;
         this.lightning = 1;
         this.fire = 1;
         this.ice = 1;
         this.usedspecial = false;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.charge = 0;
         this.curleft = 0;
         this.curtop = 25;
         this.group = Egroupindex;
         this.description = "First kill the dragon, then kill it's rider. Weak against magic.";
         this.picture = "<div class='Ebarrackpic' id='E" + e + "'><img src='../Pictures/Enemies/DragonDestroyer.gif'/></div>";
         this.image = '../Pictures/Enemies/DragonDestroyer.gif';
         this.dying = '../Pictures/Enemies/Angel_dying.gif'
     }
     //summons
     function Frostlord(e, Egroupindex, level) {
         this.type = "Frostlord";
         this.name = "Frostlord";
         this.level = level;
         if (level === 1) {
             this.attack = 50;
             this.health = 200;
             this.maxhealth = 200;
         }
         if (level === 2) {
             this.attack = 70;
             this.health = 230;
             this.maxhealth = 230;
         }
         if (level === 3) {
             this.attack = 90;
             this.health = 260;
             this.maxhealth = 260;
         }
         if (level === 4) {
             this.attack = 115;
             this.health = 325;
             this.maxhealth = 325;
         }
         this.defense = 20;
         this.resistance = 20;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.terrify = 0;
         this.lightning = 1;
         this.fire = 2;
         this.ice = .5;
         this.maxcharge = 3;
         this.usedspecial = false;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.charge = 0;
         this.curleft = 0;
         this.curtop = 25;
         this.group = Egroupindex;
         this.description = "While weak in the close range, this rare creature can create a dangerous snow storm.";
         this.picture = "<div class='Ebarrackpic' id='E" + e + "'><img src='../Pictures/Enemies/Frostlord.gif'/></div>";
         this.image = '../Pictures/Enemies/Frostlord.gif';
         this.dying = '../Pictures/Enemies/Frostlord_dying.gif'
     }

     function Angel(e, Egroupindex, level) {
         this.type = "Angel";
         this.name = "Angel";
         this.level = level;
         if (level === 1) {
             this.attack = 40;
             this.health = 230;
             this.maxhealth = 230;
         }
         if (level === 2) {
             this.attack = 60;
             this.health = 260;
             this.maxhealth = 260;
         }
         if (level === 3) {
             this.attack = 80;
             this.health = 300;
             this.maxhealth = 300;
         }
         if (level === 4) {
             this.attack = 100;
             this.health = 350;
             this.maxhealth = 350;
         }
         this.defense = 15;
         this.resistance = 15;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.terrify = 0;
         this.lightning = 1;
         this.fire = 1;
         this.ice = 1;
         this.maxcharge = 3;
         this.usedspecial = false;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.charge = 0;
         this.curleft = 0;
         this.curtop = 25;
         this.group = Egroupindex;
         this.description = "Tough to kill, this rare creature heal itself with it's magic and fly.";
         this.picture = "<div class='Ebarrackpic' id='E" + e + "'><img src='../Pictures/Enemies/Angel.gif'/></div>";
         this.image = '../Pictures/Enemies/Angel.gif';
         this.dying = '../Pictures/Enemies/Angel_dying.gif'
     }

     function Djinn(e, Egroupindex, level) {
         this.type = "Djinn";
         this.name = "Djinn";
         this.level = level;
         if (level === 1) {
             this.attack = 80;
             this.health = 300;
             this.maxhealth = 300;
         }
         if (level === 2) {
             this.attack = 100;
             this.health = 350;
             this.maxhealth = 350;
         }
         if (level === 3) {
             this.attack = 120;
             this.health = 400;
             this.maxhealth = 400;
         }
         if (level === 4) {
             this.attack = 150;
             this.health = 500;
             this.maxhealth = 500;
         }
         this.defense = 40;
         this.resistance = 40;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.terrify = 0;
         this.lightning = 1;
         this.fire = 1;
         this.ice = 1;
         this.usedspecial = false;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.charge = "None";
         this.curleft = 0;
         this.curtop = 25;
         this.group = Egroupindex;
         this.description = "Tough to kill, this rare creature can give and take equally well.";
         this.picture = "<div class='Ebarrackpic' id='E" + e + "'><img src='../Pictures/Enemies/Djinn.gif'/></div>";
         this.image = '../Pictures/Enemies/Djinn.gif';
         this.dying = '../Pictures/Enemies/Djinn_dying.gif'
     }

     function Demon(e, Egroupindex, level) {
         this.type = "Demon";
         this.name = "Demon";
         this.level = level;
         if (level === 1) {
             this.attack = 100;
             this.health = 300;
             this.maxhealth = 300;
         }
         if (level === 2) {
             this.attack = 130;
             this.health = 350;
             this.maxhealth = 350;
         }
         if (level === 3) {
             this.attack = 160;
             this.health = 400;
             this.maxhealth = 400;
         }
         if (level === 4) {
             this.attack = 200;
             this.health = 500;
             this.maxhealth = 500;
         }
         this.defense = 40;
         this.resistance = 40;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.terrify = 0;
         this.lightning = 1;
         this.fire = .5;
         this.ice = 2;
         this.maxcharge = 3;
         this.usedspecial = false;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.charge = 0;
         this.curleft = 0;
         this.curtop = 25;
         this.group = Egroupindex;
         this.description = "Elite among it's kind, this rare creature can instantly kill any units with it's death spell for 5 charge.";
         this.picture = "<div class='Ebarrackpic' id='E" + e + "'><img src='../Pictures/Enemies/Demon.gif'/></div>";
         this.image = '../Pictures/Enemies/Demon.gif';
         this.dying = '../Pictures/Enemies/Demon_dying.gif'
     }

     function Demigod(e, Egroupindex, level) {
         this.type = "Demigod";
         this.name = "Demigod";
         this.level = level;
         if (level === 1) {
             this.attack = 100;
             this.health = 10000;
             this.maxhealth = 10000;
         }
         if (level === 2) {
             this.attack = 130;
             this.health = 10000;
             this.maxhealth = 10000;
         }
         if (level === 3) {
             this.attack = 160;
             this.health = 10000;
             this.maxhealth = 10000;
         }
         if (level === 4) {
             this.attack = 200;
             this.health = 10000;
             this.maxhealth = 10000;
         }
         this.defense = 1000;
         this.resistance = 1000;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.terrify = 0;
         this.lightning = 1;
         this.fire = 1;
         this.ice = 1;
         this.maxcharge = 3;
         this.usedspecial = false;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.charge = 0;
         this.curleft = 0;
         this.curtop = 25;
         this.group = Egroupindex;
         this.description = "Elite among it's kind, this rare creature can instantly kill any units with it's death spell for 5 charge. Defeat to get it's soul to summon.";
         this.picture = "<div class='Ebarrackpic' id='E" + e + "'><img src='../Pictures/Enemies/Demigod.gif'/></div>";
         this.image = '../Pictures/Enemies/Demigod.gif';
         this.dying = '../Pictures/Enemies/Demigod.gif'
     }

     function Eye(e, Egroupindex, level) {
         this.type = "Eye";
         this.name = "Eye";
         this.level = level;
         if (level === 1) {
             this.attack = 20;
             this.health = 50;
             this.maxhealth = 50;
         }
         if (level === 2) {
             this.attack = 35;
             this.health = 80;
             this.maxhealth = 80;
         }
         if (level === 3) {
             this.attack = 50;
             this.health = 110;
             this.maxhealth = 110;
         }
         if (level === 4) {
             this.attack = 65;
             this.health = 140;
             this.maxhealth = 140;
         }
         this.defense = 0;
         this.resistance = 0;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.terrify = 0;
         this.lightning = 1;
         this.fire = 1;
         this.ice = 1;
         this.resting = false;
         this.usedspecial = false;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.charge = "None";
         this.curleft = 0;
         this.curtop = 25;
         this.group = Egroupindex;
         this.description = "Every injured eye will delay the kraken by one turn.";
         this.picture = "<div class='Ebarrackpic' id='E" + e + "'><img src='../Pictures/Enemies/Eye.gif'/></div>";
         this.image = '../Pictures/Enemies/Eye.gif';
         this.dying = '../Pictures/Enemies/Demon_dying.gif'
     }
     //humans
     function ESoldier(e, Egroupindex, level) {
         this.type = "Soldier";
         this.name = "Soldier";
         this.level = level;
         if (level === 1) {
             this.attack = 50;
             this.health = 100;
             this.maxhealth = 100;
         }
         if (level === 2) {
             this.attack = 70;
             this.health = 130;
             this.maxhealth = 130;
         }
         if (level === 3) {
             this.attack = 90;
             this.health = 160;
             this.maxhealth = 160;
         }
         if (level === 4) {
             this.attack = 110;
             this.health = 190;
             this.maxhealth = 190;
         }
         this.defense = 25;
         this.resistance = 5;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.terrify = 0;
         this.lightning = 1;
         this.fire = 1;
         this.ice = 1;
         this.protectedby = -1;
         this.usedspecial = false;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.charge = "None";
         this.curleft = 0;
         this.curtop = 25;
         this.group = Egroupindex;
         this.description = "Don't let this soldier get too close. Vunerable to Magic.";
         this.picture = "<div class='Ebarrackpic' id='E" + e + "'><img src='../Pictures/Allies/Soldier.gif' /></div>";
         this.image = '../Pictures/Allies/Soldier.gif';
         this.dying = '../Pictures/Enemies/Soldier_dying.gif'
         if (e === -1) {
             this.picture = "";
             this.image = '';
             this.alive = false;
             this.curleft = 1;
             this.curtop = 424;
         }
     }

     function EArcher(e, Egroupindex, level) {
         this.type = "Archer";
         this.name = "Archer";
         this.level = level;
         if (level === 1) {
             this.attack = 15;
             this.health = 60;
             this.maxhealth = 60;
         }
         if (level === 2) {
             this.attack = 25;
             this.health = 80;
             this.maxhealth = 80;
         }
         if (level === 3) {
             this.attack = 35;
             this.health = 100;
             this.maxhealth = 100;
         }
         if (level === 4) {
             this.attack = 45;
             this.health = 120;
             this.maxhealth = 120;
         }
         this.defense = 10;
         this.resistance = 10;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.terrify = 0;
         this.lightning = 1;
         this.fire = 1;
         this.ice = 1;
         this.protectedby = -1;
         this.usedspecial = false;
         this.usedpoison = false;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.charge = "None";
         this.curleft = 0;
         this.curtop = 25;
         this.group = Egroupindex;
         this.description = "These long range fighters can hit any target.";
         this.picture = "<div class='Ebarrackpic' id='E" + e + "'><img src='../Pictures/Allies/Archer.gif' /></div>";
         this.image = '../Pictures/Allies/Archer.gif';
         this.dying = '../Pictures/Enemies/Archer_dying.gif'
     }

     function EMage(e, Egroupindex, level) {
         this.type = "Mage";
         this.name = "Mage";
         this.level = level;
         if (level === 1) {
             this.attack = 40;
             this.health = 80;
             this.maxhealth = 80;
         }
         if (level === 2) {
             this.attack = 60;
             this.health = 100;
             this.maxhealth = 100;
         }
         if (level === 3) {
             this.attack = 80;
             this.health = 120;
             this.maxhealth = 120;
         }
         if (level === 4) {
             this.attack = 100;
             this.health = 140;
             this.maxhealth = 140;
         }
         this.defense = 10;
         this.resistance = 20;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.terrify = 0;
         this.lightning = 1;
         this.fire = 1;
         this.ice = 1;
         this.protectedby = -1;
         this.usedspecial = false;
         this.usedpoison = false;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.charge = "None";
         this.curleft = 0;
         this.curtop = 25;
         this.group = Egroupindex;
         this.description = "These magic users can attack when they get two spaces away.";
         this.picture = "<div class='Ebarrackpic' id='E" + e + "'><img src='../Pictures/Allies/Mage.gif' /></div>";
         this.image = '../Pictures/Allies/Mage.gif';
         this.dying = '../Pictures/Enemies/Mage_dying.gif'
     }

     function ERouge(e, Egroupindex, level) {
         this.type = "Rouge";
         this.name = "Rouge";
         this.level = level;
         if (level === 1) {
             this.attack = 10;
             this.health = 50;
             this.maxhealth = 50;
         }
         if (level === 2) {
             this.attack = 20;
             this.health = 70;
             this.maxhealth = 70;
         }
         if (level === 3) {
             this.attack = 30;
             this.health = 90;
             this.maxhealth = 90;
         }
         if (level === 4) {
             this.attack = 40;
             this.health = 110;
             this.maxhealth = 110;
         }
         this.defense = 5;
         this.resistance = 5;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.terrify = 0;
         this.lightning = 1;
         this.fire = 1;
         this.ice = 1;
         this.protectedby = -1;
         this.usedspecial = false;
         this.usedpoison = true;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.charge = "None";
         this.curleft = 0;
         this.curtop = 25;
         this.group = Egroupindex;
         this.description = "These long range fighters can hit any target in a straight line, and will poison the first.";
         this.picture = "<div class='Ebarrackpic' id='E" + e + "'><img src='../Pictures/Allies/Rouge.gif' /></div>";
         this.image = '../Pictures/Allies/Rouge.gif';
         this.dying = '../Pictures/Enemies/Rouge_dying.gif'
     }

     function EWizard(e, Egroupindex, level) {
         this.type = "Wizard";
         this.name = "Wizard";
         this.level = level;
         if (level === 1) {
             this.attack = 70;
             this.health = 40;
             this.maxhealth = 40;
         }
         if (level === 2) {
             this.attack = 90;
             this.health = 60;
             this.maxhealth = 60;
         }
         if (level === 3) {
             this.attack = 110;
             this.health = 80;
             this.maxhealth = 80;
         }
         if (level === 4) {
             this.attack = 130;
             this.health = 100;
             this.maxhealth = 100;
         }
         this.defense = 0;
         this.resistance = 20;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.terrify = 0;
         this.lightning = 1;
         this.fire = 1;
         this.ice = 1;
         this.protectedby = -1;
         this.maxcharge = 2;
         this.usedspecial = false;
         this.usedpoison = false;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.charge = 0;
         this.curleft = 0;
         this.curtop = 25;
         this.group = Egroupindex;
         this.description = "These magic users will charge and then use powerful magics.";
         this.picture = "<div class='Ebarrackpic' id='E" + e + "'><img src='../Pictures/Allies/Wizard.gif' /></div>";
         this.image = '../Pictures/Allies/Wizard.gif';
         this.dying = '../Pictures/Enemies/Wizard_dying.gif'
     }

     function EGuard(e, Egroupindex, level) {
         this.type = "Guard";
         this.name = "Guard";
         this.level = level;
         if (level === 1) {
             this.attack = 20;
             this.health = 110;
             this.maxhealth = 110;
         }
         if (level === 2) {
             this.attack = 30;
             this.health = 140;
             this.maxhealth = 140;
         }
         if (level === 3) {
             this.attack = 40;
             this.health = 170;
             this.maxhealth = 170;
         }
         if (level === 4) {
             this.attack = 50;
             this.health = 200;
             this.maxhealth = 200;
         }
         this.defense = 25;
         this.resistance = 25;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.terrify = 0;
         this.lightning = 1;
         this.fire = 1;
         this.ice = 1;
         this.protectedby = -1;
         this.usedspecial = false;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.charge = "None";
         this.curleft = 0;
         this.curtop = 25;
         this.group = Egroupindex;
         this.description = "Guards can protect their allies, which will redirect damage back to the guard.";
         this.picture = "<div class='Ebarrackpic' id='E" + e + "'><img src='../Pictures/Allies/Guard.gif' /></div>";
         this.image = '../Pictures/Allies/Guard.gif';
         this.dying = '../Pictures/Enemies/Guard_dying.gif'
         if (e === -1) {
             this.picture = "";
             this.image = '';
             this.alive = false;
             this.curleft = 1;
             this.curtop = 424;
         }
     }
     //create good units//////////////////////////////////////////////////////////////////////
     function createsoldier(choice, name) {
         switch (choice) {
         case "Guard":
             units[index] = new Guard(index, name);
             break;
         case "Soldier":
             units[index] = new Soldier(index, name);
             break;
         case "Mage":
             units[index] = new Mage(index, name);
             break;
         case "Rouge":
             units[index] = new Rouge(index, name);
             break;
         case "Templar":
             units[index] = new Templar(index, name);
             break;
         case "Archer":
             units[index] = new Archer(index, name);
             break;
         case "Sorcerer":
             units[index] = new Sorcerer(index, name);
             break;
         case "Wizard":
             units[index] = new Wizard(index, name);
             break;
         case "Enchantress":
             units[index] = new Enchantress(index), name;
             break;
         case "Healer":
             units[index] = new Healer(index, name);
             break;
         case "Knight":
             units[index] = new Knight(index, name);
             break;
         case "Thief":
             units[index] = new Thief(index, name);
             break;
         case "Mimic":
             units[index] = new Mimic(index, name);
             break;
         case "Wolf":
             units[index] = new AWolf(index, name);
             break;
         case "Spider":
             units[index] = new ASpider(index, name);
             break;
         case "Bear":
             units[index] = new ABear(index, name);
             break;
         case "Turtle":
             units[index] = new ATurtle(index, name);
             break;
         case "Sparrow":
             units[index] = new ASparrow(index, name);
             break;
         }
     }

    //var allEffects = {}
     function preload(imgName) {
         $("#hidethis").append("<div class='slashEffects'><img src = '../Pictures/Effects/" + imgName + ".gif' /></div>")
//         allEffects[imgName]= new Image()
//         allEffects[imgName].src = "../Pictures/Effects/" + imgName + ".gif";
     }
    function preloadChar(imgName){
        console.log(imgName)
        $("#hidethis").append("<div class='barrackpic'><img src = '../CinePics/characters/" + imgName + "' /></div>")
    }

     function Soldier(e, type) {
         this.type = "Soldier";
         this.realtype = "Soldier";
         this.name = "The Soldier";
         this.index = e;
         this.attack = 60;
         this.defense = 20;
         this.resistance = 0;
         this.health = 120;
         this.maxhealth = 120;
         this.usedaction = false;
         this.alive = true;
         this.moved = false;
         this.curleft = 0;
         this.curtop = 425;
         this.group = 0;
         this.slot = 0;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.fireCircle = false;
         this.captured = "";
         this.immune = false;
         this.frosttouch = false;
         this.storm = false;
         this.aetherban = true;
         this.level = 1;
         this.experience = 0;
         this.abilitypoints = 0;
         this.levelhealth = 15;
         this.leveldefense = 3;
         this.levelresistance = 1;
         this.levelattack = 3;
         this.isanimal = false;
         this.weapon = "Bronze Sword";
         this.armor = "Bronze Armor";
         this.accessory = "None";
         this.healthboost = 0;
         this.weaponboost = 0;
         this.armorboost = 0;
         this.resistboost = 0;
         this.attacktempboost = 0;
         this.defensetempboost = 0;
         this.protectedby = -1;
         this.enroute = 0;
         this.healing = 0;
         this.healthpotion = false;
         this.strengthpotion = false;
         this.resistpotion = false;
         this.defensepotion = false;
         this.medkit = false;
         this.abilitymedkit = false;
         this.abilitydash = false;
         this.abilityimmunity = false;
         this.abilitycounter = false;
         this.abilitysteadfast = false;
         this.counterindex = [];
         this.picture = "<div class='barrackpic' id='" + e + "'><img src='../CinePics/characters/" + type + "/" + type + "_front.gif' /></div>";

         this.image = '../CinePics/characters/' + type + '/' + type + '_front.gif';
         this.rightpic ='../CinePics/characters/' + type + '/' + type + '_right.gif';
         this.leftpic = '../CinePics/characters/' + type + '/' + type + '_left.gif';
         this.backpic = '../CinePics/characters/' + type + '/' + type + '_back.gif';
         this.attackfront = '../CinePics/characters/' + type + '/' + type + '_attack_front.gif';
         this.attackback = '../CinePics/characters/' + type + '/' + type + '_back.gif';
         this.attackleft = '../CinePics/characters/' + type + '/' + type + '_attack_left.gif';
         this.attackright = '../CinePics/characters/' + type + '/' + type + '_attack_right.gif';
         index += 1;
         preload("EffectSlash")
         preload("heal")
         preloadChar(type + '/' + type + '_front.gif')
         preloadChar(type + '/' + type + '_right.gif')
         preloadChar(type + '/' + type + '_left.gif')
         preloadChar(type + '/' + type + '_back.gif')
         preloadChar(type + '/' + type + '_attack_front.gif')
         preloadChar(type + '/' + type + '_back.gif')
         preloadChar(type + '/' + type + '_attack_left.gif')
         preloadChar(type + '/' + type + '_attack_right.gif')
         if (e === -1) {
             this.curleft = 1;
             this.curtop = 424;
             index -= 1;
             this.picture = "";
             this.image = '';
             this.alive = false;
             this.abilityimmunity = false;
         }
     }

     function Knight(e, type) {
         this.type = "Knight";
         this.realtype = "Knight";
         this.name = "The Knight";
         this.index = e;
         this.attack = 80;
         this.defense = 20;
         this.resistance = 0;
         this.health = 120;
         this.maxhealth = 120;
         this.usedaction = false;
         this.alive = true;
         this.moved = false;
         this.curleft = 0;
         this.curtop = 425;
         this.group = 0;
         this.slot = 0;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.fireCircle = false;
         this.captured = "";
         this.immune = false;
         this.frosttouch = false;
         this.storm = false;
         this.aetherban = false;
         this.level = 1;
         this.experience = 0;
         this.abilitypoints = 0;
         this.levelhealth = 15;
         this.leveldefense = 3;
         this.levelresistance = 0;
         this.levelattack = 3;
         this.isanimal = false;
         this.weapon = "Bronze Sword";
         this.armor = "Bronze Armor";
         this.accessory = "None";
         this.healthboost = 0;
         this.weaponboost = 0;
         this.armorboost = 0;
         this.resistboost = 0;
         this.energy = 100;
         this.attacktempboost = 0;
         this.damageplus = 1;
         this.defensetempboost = 0;
         this.protectedby = -1;
         this.enroute = 0;
         this.healing = 0;
         this.healthpotion = false;
         this.strengthpotion = false;
         this.resistpotion = false;
         this.defensepotion = false;
         this.abilityswirl = false;
         this.abilitysweep = false;
         this.abilityfreemove = false;
         this.abilitypush = false;
         this.abilitywail = false;
         this.picture = "<div class='barrackpic' id='" + e + "'><img src='../CinePics/characters/" + type + "/" + type + "_front.gif' /></div>";
         this.image = '../CinePics/characters/' + type + '/' + type + '_front.gif';
         this.rightpic = '../CinePics/characters/' + type + '/' + type + '_right.gif';
         this.leftpic = '../CinePics/characters/' + type + '/' + type + '_left.gif';
         this.backpic = '../CinePics/characters/' + type + '/' + type + '_back.gif';
         this.attackfront = '../CinePics/characters/' + type + '/' + type + '_attack_front.gif';
         this.attackback = '../CinePics/characters/' + type + '/' + type + '_attack_back.gif';
         this.attackleft = '../CinePics/characters/' + type + '/' + type + '_attack_left.gif';
         this.attackright = '../CinePics/characters/' + type + '/' + type + '_attack_right.gif';
         this.swirl = '../CinePics/characters/' + type + '/' + type + '_swirl.gif';
         preloadChar(type + '/' + type + '_front.gif')
         preloadChar(type + '/' + type + '_right.gif')
         preloadChar(type + '/' + type + '_left.gif')
         preloadChar(type + '/' + type + '_back.gif')
         preloadChar(type + '/' + type + '_attack_front.gif')
         preloadChar(type + '/' + type + '_back.gif')
         preloadChar(type + '/' + type + '_attack_left.gif')
         preloadChar(type + '/' + type + '_attack_right.gif')
         preload("EffectSlash")
         index += 1;
     }

     function Thief(e, type) {
         this.type = "Thief";
         this.realtype = "Thief";
         this.name = "The Thief";
         this.index = e;
         this.attack = 40;
         this.defense = 10;
         this.resistance = 10;
         this.health = 90;
         this.maxhealth = 90;
         this.usedaction = false;
         this.alive = true;
         this.moved = false;
         this.curleft = 0;
         this.curtop = 425;
         this.group = 0;
         this.slot = 0;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.fireCircle = false;
         this.captured = "";
         this.immune = false;
         this.frosttouch = false;
         this.storm = false;
         this.aetherban = false;
         this.level = 1;
         this.experience = 0;
         this.abilitypoints = 0;
         this.levelhealth = 10;
         this.leveldefense = 2;
         this.levelresistance = 2;
         this.levelattack = 2;
         this.weapon = "Bronze Sword";
         this.armor = "Bronze Armor";
         this.accessory = "None";
         this.healthboost = 0;
         this.weaponboost = 0;
         this.armorboost = 0;
         this.resistboost = 0;
         this.attacktempboost = 0;
         this.damageplus = 1;
         this.defensetempboost = 0;
         this.protectedby = -1;
         this.isanimal = false;
         this.enroute = 0;
         this.healing = 0;
         this.abilitymug = true;
         this.healthpotion = false;
         this.strengthpotion = false;
         this.resistpotion = false;
         this.defensepotion = false;
         this.abilitybackstab = false;
         this.abilityinvisible = false;
         this.abilityphase = false;
         this.abilityfirstblow = false;
         this.abilitybettersteal = false;
         this.picture = "<div class='barrackpic' id='" + e + "'><img src='../CinePics/characters/" + type + "/" + type + "_front.gif' /></div>";
         this.image = '../CinePics/characters/' + type + '/' + type + '_front.gif';
         this.rightpic = '../CinePics/characters/' + type + '/' + type + '_right.gif';
         this.leftpic = '../CinePics/characters/' + type + '/' + type + '_left.gif';
         this.backpic = '../CinePics/characters/' + type + '/' + type + '_back.gif';
         this.attackfront = '../CinePics/characters/' + type + '/' + type + '_attack_front.gif';
         this.attackback = '../CinePics/characters/' + type + '/' + type + '_back.gif';
         this.attackleft = '../CinePics/characters/' + type + '/' + type + '_attack_left.gif';
         this.attackright = '../CinePics/characters/' + type + '/' + type + '_attack_right.gif';
        preloadChar(type + '/' + type + '_front.gif')
         preloadChar(type + '/' + type + '_right.gif')
         preloadChar(type + '/' + type + '_left.gif')
         preloadChar(type + '/' + type + '_back.gif')
         preloadChar(type + '/' + type + '_attack_front.gif')
         preloadChar(type + '/' + type + '_back.gif')
         preloadChar(type + '/' + type + '_attack_left.gif')
         preloadChar(type + '/' + type + '_attack_right.gif')
         preload("EffectSlash")
         index += 1;
     }

     function Mage(e, type) {
         this.type = "Mage";
         this.realtype = "Mage";
         this.name = "The Mage";
         this.attack = 40;
         this.defense = 15;
         this.resistance = 15;
         this.health = 100;
         this.maxhealth = 100;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.moved = false;
         this.curleft = 0;
         this.curtop = 425;
         this.group = 0;
         this.slot = 0;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.fireCircle = false;
         this.captured = "";
         this.immune = false;
         this.frosttouch = false;
         this.storm = false;
         this.aetherban = false;
         this.level = 1;
         this.experience = 0;
         this.abilitypoints = 0;
         this.levelhealth = 5;
         this.leveldefense = 1;
         this.levelresistance = 1;
         this.levelattack = 3;
         this.weapon = "Glass Wand";
         this.armor = "Bronze Armor";
         this.accessory = "None";
         this.healthboost = 0;
         this.weaponboost = 0;
         this.armorboost = 0;
         this.resistboost = 0;
         this.attacktempboost = 0;
         this.defensetempboost = 0;
         this.protectedby = -1;
         this.isanimal = false;
         this.enroute = 0;
         this.healing = 0;
         this.healthpotion = false;
         this.strengthpotion = false;
         this.resistpotion = false;
         this.defensepotion = false;
         this.abilityelementalailments = false;
         this.abilityzap = false;
         this.abilityfreeze = false;
         this.abilitydoubletap = false;
         this.abilityexecute = false;
         this.picture = "<div class='barrackpic' id='" + e + "'><img src='../CinePics/characters/" + type + "/" + type + "_front.gif' /></div>";
         this.image = '../CinePics/characters/' + type + '/' + type + '_front.gif';
         this.rightpic = '../CinePics/characters/' + type + '/' + type + '_right.gif';
         this.leftpic = '../CinePics/characters/' + type + '/' + type + '_left.gif';
         this.backpic = '../CinePics/characters/' + type + '/' + type + '_back.gif';
         this.casting = '../CinePics/characters/' + type + '/' + type + '_casting.gif';
         this.EffectFire = new Image();
         this.EffectFire.src = ""
         console.log(type)
         preload("EffectFire")
         preload("EffectIce")
         preload("Zap")
                  preloadChar(type + '/' + type + '_front.gif')
         preload("Death")
        preloadChar(type)
         preloadChar(type + '/' + type + '_right.gif')
         preloadChar(type + '/' + type + '_left.gif')
         preloadChar(type + '/' + type + '_back.gif')
         preloadChar(type + '/' + type + '_casting.gif')
         index += 1;
     }

     function Wizard(e, type) {
         this.type = "Wizard";
         this.realtype = "Wizard";
         this.name = "The Wizard";
         this.attack = 60;
         this.defense = 0;
         this.resistance = 30;
         this.health = 80;
         this.maxhealth = 80;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.moved = false;
         this.curleft = 0;
         this.curtop = 425;
         this.group = 0;
         this.slot = 0;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.fireCircle = false;
         this.captured = "";
         this.immune = false;
         this.frosttouch = false;
         this.storm = false;
         this.aetherban = false;
         this.level = 1;
         this.experience = 0;
         this.abilitypoints = 0;
         this.levelhealth = 5;
         this.leveldefense = 0;
         this.levelresistance = 2;
         this.levelattack = 3;
         this.weapon = "Glass Wand";
         this.armor = "Bronze Armor";
         this.accessory = "None";
         this.healthboost = 0;
         this.weaponboost = 0;
         this.armorboost = 0;
         this.resistboost = 0;
         this.attacktempboost = 0;
         this.defensetempboost = 0;
         this.protectedby = -1;
         this.isanimal = false;
         this.enroute = 0;
         this.healing = 0;
         this.healthpotion = false;
         this.strengthpotion = false;
         this.resistpotion = false;
         this.defensepotion = false;
         this.abilitybolt = false;
         this.abilitymissile = false;
         this.abilitystartcharge = false;
         this.abilitydrain = false;
         this.abilityelementalailments = false;
         this.picture = "<div class='barrackpic' id='" + e + "'><img src='../CinePics/characters/" + type + "/" + type + "_front.gif' /></div>";
         this.image = '../CinePics/characters/' + type + '/' + type + '_front.gif';
         this.rightpic = '../CinePics/characters/' + type + '/' + type + '_right.gif';
         this.leftpic = '../CinePics/characters/' + type + '/' + type + '_left.gif';
         this.backpic = '../CinePics/characters/' + type + '/' + type + '_back.gif';
         this.casting = '../CinePics/characters/' + type + '/' + type + '_casting.gif';
         preload("EffectFire")
         preload("EffectLightning")
         preload("Gust")
         preload("EffectFire")
                  preloadChar(type + '/' + type + '_front.gif')
         preloadChar(type + '/' + type + '_right.gif')
         preloadChar(type + '/' + type + '_left.gif')
         preloadChar(type + '/' + type + '_back.gif')
         preloadChar(type + '/' + type + '_casting.gif')
         index += 1;
     }

     function Sorcerer(e, type) {
         this.type = "Sorcerer";
         this.realtype = "Sorcerer";
         this.name = "The Sorcerer";
         this.attack = 40;
         this.defense = 0;
         this.resistance = 30;
         this.health = 80;
         this.maxhealth = 80;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.moved = false;
         this.curleft = 0;
         this.curtop = 425;
         this.group = 0;
         this.slot = 0;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.fireCircle = false;
         this.captured = "";
         this.immune = false;
         this.frosttouch = false;
         this.storm = false;
         this.level = 1;
         this.experience = 0;
         this.abilitypoints = 0;
         this.levelhealth = 5;
         this.leveldefense = 0;
         this.levelresistance = 2;
         this.levelattack = 3;
         this.weapon = "Glass Wand";
         this.armor = "Bronze Armor";
         this.accessory = "None";
         this.healthboost = 0;
         this.weaponboost = 0;
         this.armorboost = 0;
         this.resistboost = 0;
         this.isanimal = false;
         this.power = 0;
         this.attacktempboost = 0;
         this.defensetempboost = 0;
         this.protectedby = 1;
         this.enroute = 0;
         this.healing = 0;
         this.healthpotion = false;
         this.strengthpotion = false;
         this.resistpotion = false;
         this.defensepotion = false;
         this.abilityfireblast = false;
         this.abilitylightning = false;
         this.abilitymanaincrease = false;
         this.abilityearth = false;
         this.abilitydeath = false;
         this.picture = "<div class='barrackpic' id='" + e + "'><img src='../CinePics/characters/" + type + "/" + type + "_front.gif' /></div>";
         this.image = '../CinePics/characters/' + type + '/' + type + '_front.gif';
         this.rightpic = '../CinePics/characters/' + type + '/' + type + '_right.gif';
         this.leftpic = '../CinePics/characters/' + type + '/' + type + '_left.gif';
         this.backpic = '../CinePics/characters/' + type + '/' + type + '_back.gif';
         this.casting = '../CinePics/characters/' + type + '/' + type + '_casting.gif';
         preload("EffectLightning")
         preload("Death")
         preload("Earth")
         preload("EffectExplode")
         preload("Blizzard")
                  preloadChar(type + '/' + type + '_front.gif')
         preloadChar(type + '/' + type + '_right.gif')
         preloadChar(type + '/' + type + '_left.gif')
         preloadChar(type + '/' + type + '_back.gif')
         preloadChar(type + '/' + type + '_casting.gif')
         index += 1;
     }

     function Rouge(e, type) {
         this.type = "Rouge";
         this.realtype = "Rouge";
         this.name = "The Rouge";
         this.attack = 30;
         this.defense = 10;
         this.resistance = 10;
         this.health = 80;
         this.maxhealth = 80;
         this.usedsleep = 1;
         this.usedblindness = 1;
         this.usedenfeeble = 1;
         this.usedpoison = 1;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.moved = false;
         this.curleft = 0;
         this.curtop = 425;
         this.group = 0;
         this.slot = 0;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.fireCircle = false;
         this.captured = "";
         this.immune = false;
         this.frosttouch = false;
         this.storm = false;
         this.level = 1;
         this.experience = 0;
         this.abilitypoints = 0;
         this.levelhealth = 5;
         this.leveldefense = 3;
         this.levelresistance = 2;
         this.levelattack = 2;
         this.isanimal = false;
         this.weapon = "Wooden Bow";
         this.armor = "Bronze Armor";
         this.accessory = "None";
         this.healthboost = 0;
         this.weaponboost = 0;
         this.armorboost = 0;
         this.resistboost = 0;
         this.enroute = 0;
         this.healing = 0;
         this.healthpotion = false;
         this.strengthpotion = false;
         this.resistpotion = false;
         this.defensepotion = false;
         this.defensetempboost = 0;
         this.attacktempboost = 0;
         this.protectedby = -1;
         this.arrowcapacity = 1;
         this.duration = 0;
         this.abilityblindness = false;
         this.false = true;
         this.abilityailmentduration = false;
         this.abilityenfeeble = false;
         this.abilitydoublearrows = false;
         this.picture = "<div class='barrackpic' id='" + e + "'><img src='../CinePics/characters/" + type + "/" + type + "_front.gif' /></div>";
         this.image = '../CinePics/characters/' + type + '/' + type + '_front.gif';
         this.rightpic = '../CinePics/characters/' + type + '/' + type + '_right.gif';
         this.leftpic = '../CinePics/characters/' + type + '/' + type + '_left.gif';
         this.backpic = '../CinePics/characters/' + type + '/' + type + '_back.gif';
         preload("Arrow")
                  preloadChar(type + '/' + type + '_front.gif')
         preloadChar(type + '/' + type + '_right.gif')
         preloadChar(type + '/' + type + '_left.gif')
         preloadChar(type + '/' + type + '_back.gif')
         index += 1;
     }

     function Archer(e, type) {
         this.type = "Archer";
         this.realtype = "Archer";
         this.name = "The Archer";
         this.attack = 40;
         this.defense = 10;
         this.resistance = 10;
         this.health = 80;
         this.maxhealth = 80;
         this.usedpierce = 1;
         this.usedexploding = 1;
         this.usedtitan = 1;
         this.usedimmobolize = 1;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.moved = false;
         this.curleft = 0;
         this.curtop = 425;
         this.group = 0;
         this.slot = 0;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.fireCircle = false;
         this.captured = "";
         this.immune = false;
         this.frosttouch = false;
         this.storm = false;
         this.level = 1;
         this.experience = 0;
         this.abilitypoints = 0;
         this.levelhealth = 10;
         this.leveldefense = 2;
         this.levelresistance = 2;
         this.levelattack = 3;
         this.isanimal = false;
         this.weapon = "Wooden Bow";
         this.armor = "Bronze Armor";
         this.accessory = "None";
         this.healthboost = 0;
         this.weaponboost = 0;
         this.armorboost = 0;
         this.resistboost = 0;
         this.enroute = 0;
         this.healing = 0;
         this.healthpotion = false;
         this.strengthpotion = false;
         this.resistpotion = false;
         this.defensepotion = false;
         this.defensetempboost = 0;
         this.attacktempboost = 0;
         this.protectedby = -1;
         this.arrowcapacity = 1;
         this.abilityexplosion = false;
         this.abilitypierce = false;
         this.abilitytitan = false;
         this.abilityimmobolize = false;
         this.abilitydoublearrows = false;
         this.picture = "<div class='barrackpic' id='" + e + "'><img src='../CinePics/characters/" + type + "/" + type + "_front.gif' /></div>";
         this.image = '../CinePics/characters/' + type + '/' + type + '_front.gif';
         this.rightpic = '../CinePics/characters/' + type + '/' + type + '_right.gif';
         this.leftpic = '../CinePics/characters/' + type + '/' + type + '_left.gif';
         this.backpic = '../CinePics/characters/' + type + '/' + type + '_back.gif';
         preload("EffectExplode")
         preload("Arrow")
                           preloadChar(type + '/' + type + '_front.gif')
         preloadChar(type + '/' + type + '_right.gif')
         preloadChar(type + '/' + type + '_left.gif')
         preloadChar(type + '/' + type + '_back.gif')
         index += 1;
     }

     function Templar(e, type) {
         this.type = "Templar";
         this.realtype = "Templar";
         this.name = "The Templar";
         this.attack = 30;
         this.defense = 0;
         this.resistance = 30;
         this.health = 80;
         this.maxhealth = 80;
         this.useddisrupt = 1;
         this.usedgrappling = 1;
         this.usedsilence = 1;
         this.usedburst = 1;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.moved = false;
         this.curleft = 0;
         this.curtop = 425;
         this.group = 0;
         this.slot = 0;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.fireCircle = false;
         this.captured = "";
         this.immune = false;
         this.frosttouch = false;
         this.storm = false;
         this.level = 1;
         this.experience = 0;
         this.abilitypoints = 0;
         this.levelhealth = 5;
         this.leveldefense = 0;
         this.levelresistance = 3;
         this.levelattack = 2;
         this.isanimal = false;
         this.weapon = "Wooden Bow";
         this.armor = "Bronze Armor";
         this.accessory = "None";
         this.healthboost = 0;
         this.weaponboost = 0;
         this.armorboost = 0;
         this.resistboost = 0;
         this.enroute = 0;
         this.healing = 0;
         this.healthpotion = false;
         this.strengthpotion = false;
         this.resistpotion = false;
         this.defensepotion = false;
         this.defensetempboost = 0;
         this.attacktempboost = 0;
         this.protectedby = -1;
         this.arrowcapacity = 1;
         this.abilityburst = false;
         this.abilitydisrupt = false;
         this.abilitygrapplinghook = false;
         this.abilityelemental = false;
         this.abilitydoublearrows = false;
         this.picture = "<div class='barrackpic' id='" + e + "'><img src='../CinePics/characters/" + type + "/" + type + "_front.gif' /></div>";
         this.image = '../CinePics/characters/' + type + '/' + type + '_front.gif';
         this.rightpic = '../CinePics/characters/' + type + '/' + type + '_right.gif';
         this.leftpic = '../CinePics/characters/' + type + '/' + type + '_left.gif';
         this.backpic = '../CinePics/characters/' + type + '/' + type + '_back.gif';
         preload("Arrow")
         preload("Hook")
        preloadChar(type + '/' + type + '_front.gif')
         preloadChar(type + '/' + type + '_right.gif')
         preloadChar(type + '/' + type + '_left.gif')
         preloadChar(type + '/' + type + '_back.gif')
         index += 1;
     }

     function Guard(e, type) {
         this.type = "Guard";
         this.realtype = "Guard";
         this.name = "The Guard";
         this.index = e;
         this.attack = 30;
         this.defense = 20;
         this.resistance = 20;
         this.health = 170;
         this.maxhealth = 170;
         this.energy = 25;
         this.bracing = false;
         this.usedaction = false;
         this.alive = true;
         this.moved = false;
         this.curleft = 0;
         this.curtop = 425;
         this.group = 0;
         this.slot = 0;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.fireCircle = false;
         this.captured = "";
         this.braced = false;
         this.immune = false;
         this.frosttouch = false;
         this.storm = false;
         this.isanimal = false;
         this.level = 1;
         this.experience = 0;
         this.abilitypoints = 0;
         this.levelhealth = 15;
         this.leveldefense = 3;
         this.levelresistance = 3;
         this.levelattack = 1;
         this.weapon = "Bronze Shield";
         this.armor = "Bronze Armor";
         this.accessory = "None";
         this.healthboost = 0;
         this.weaponboost = 0;
         this.armorboost = 0;
         this.resistboost = 0;
         this.enroute = 0;
         this.healing = 0;
         this.healthpotion = false;
         this.strengthpotion = false;
         this.resistpotion = false;
         this.defensepotion = false;
         this.defensetempboost = 0;
         this.attacktempboost = 0;
         this.protectedby = -1;
         this.abilityprotect = false;
         this.abilityincreaseenergy = false;
         this.abilityimmunity = false;
         this.abilityscout = false;
         this.abilityreshield = false;
         this.picture = "<div class='barrackpic' id='" + e + "'><img src='../CinePics/characters/" + type + "/" + type + "_front.gif' /></div>";
         this.image = '../CinePics/characters/' + type + '/' + type + '_front.gif';
         this.rightpic = '../CinePics/characters/' + type + '/' + type + '_right.gif';
         this.leftpic = '../CinePics/characters/' + type + '/' + type + '_left.gif';
         this.backpic = '../CinePics/characters/' + type + '/' + type + '_back.gif';
         this.attackfront = '../CinePics/characters/' + type + '/' + type + '_front.gif';
         this.attackback = '../CinePics/characters/' + type + '/' + type + '_back.gif';
         this.attackleft = '../CinePics/characters/' + type + '/' + type + '_left.gif';
         this.attackright = '../CinePics/characters/' + type + '/' + type + '_right.gif';
         preload("EffectSlash")
                           preloadChar(type + '/' + type + '_front.gif')
         preloadChar(type + '/' + type + '_right.gif')
         preloadChar(type + '/' + type + '_left.gif')
         preloadChar(type + '/' + type + '_back.gif')
         
         index += 1;
     }

     function Enchantress(e, type) {
         if (!type) {
             var type = "Enchantress";
         }
         this.type = "Enchantress";
         this.realtype = "Enchantress";
         this.name = "The Enchantress";
         this.index = e;
         this.attack = 5;
         this.defense = 0;
         this.resistance = 0;
         this.health = 80;
         this.maxhealth = 80;
         this.power = 0;
         this.usedaction = false;
         this.alive = true;
         this.moved = false;
         this.curleft = 0;
         this.curtop = 425;
         this.group = 0;
         this.slot = 0;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.fireCircle = false;
         this.immune = false;
         this.frosttouch = false;
         this.storm = false;
         this.isanimal = false;
         this.captured = "";
         this.level = 1;
         this.experience = 0;
         this.abilitypoints = 0;
         this.levelhealth = 5;
         this.leveldefense = 1;
         this.levelresistance = 1;
         this.levelattack = 1;
         this.weapon = "Glass Wand";
         this.armor = "Bronze Armor";
         this.accessory = "None";
         this.healthboost = 0;
         this.weaponboost = 0;
         this.armorboost = 0;
         this.resistboost = 0;
         this.enroute = 0;
         this.healing = 0;
         this.healthpotion = false;
         this.strengthpotion = false;
         this.resistpotion = false;
         this.defensepotion = false;
         this.defensetempboost = 0;
         this.attacktempboost = 0;
         this.protectedby = -1;
         this.stormactive = false;
         this.mana = 0;
         this.abilitystorm = false;
         this.abilityfireCircle = false;
         this.abilityiceFall = false;
         this.abilitytorment = false;
         this.abilitybestow = false;
         this.picture = "<div class='barrackpic' id='" + e + "'><img src='../CinePics/characters/" + type + "/" + type + "_front.gif' /></div>";
         this.image = '../CinePics/characters/' + type + '/' + type + '_front.gif';
         this.rightpic = '../CinePics/characters/' + type + '/' + type + '_right.gif';
         this.leftpic = '../CinePics/characters/' + type + '/' + type + '_left.gif';
         this.backpic = '../CinePics/characters/' + type + '/' + type + '_back.gif';
         this.casting = '../CinePics/characters/' + type + '/' + type + '_casting.gif';
         preload("Ice-drop")
         preload("AbsorbEffect")
         preload("Cloud")
         preload("EffectFire")
                           preloadChar(type + '/' + type + '_front.gif')
         preloadChar(type + '/' + type + '_right.gif')
         preloadChar(type + '/' + type + '_left.gif')
         preloadChar(type + '/' + type + '_back.gif')
         index += 1;
     }

     function Healer(e, type) {
         this.type = "Healer";
         this.realtype = "Healer";
         this.name = "The Healer";
         this.index = e;
         this.attack = 10;
         this.defense = 0;
         this.resistance = 0;
         this.health = 80;
         this.maxhealth = 80;
         this.power = 50;
         this.usedaction = false;
         this.alive = true;
         this.moved = false;
         this.curleft = 0;
         this.curtop = 425;
         this.group = 0;
         this.slot = 0;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.fireCircle = false;
         this.isanimal = false;
         this.captured = "";
         this.immune = false;
         this.frosttouch = false;
         this.storm = false;
         this.level = 1;
         this.experience = 0;
         this.abilitypoints = 0;
         this.weapon = "Nothing";
         this.armor = "Bronze Armor";
         this.accessory = "None";
         this.healthboost = 0;
         this.weaponboost = 0;
         this.armorboost = 0;
         this.resistboost = 0;
         this.levelhealth = 5;
         this.leveldefense = 1;
         this.levelresistance = 1;
         this.levelattack = 0;
         this.enroute = 0;
         this.healing = 0;
         this.healthpotion = false;
         this.strengthpotion = false;
         this.resistpotion = false;
         this.defensepotion = false;
         this.attacktempboost = 0;
         this.defensetempboost = 0;
         this.protectedby = -1;
         this.abilityreach = false;
         this.abilityheal = false;
         this.abilitydoublevigor = false;
         this.abilitymove = false;
         this.abilitycleanse = false;
         this.picture = "<div class='barrackpic' id='" + e + "'><img src='../CinePics/characters/" + type + "/" + type + "_front.gif' /></div>";
         this.image = '../CinePics/characters/' + type + '/' + type + '_front.gif';
         this.rightpic = '../CinePics/characters/' + type + '/' + type + '_right.gif';
         this.leftpic = '../CinePics/characters/' + type + '/' + type + '_left.gif';
         this.backpic = '../CinePics/characters/' + type + '/' + type + '_back.gif';
         this.casting = '../CinePics/characters/' + type + '/' + type + '_casting.gif';
         preload("heal")
         preload("vigor")
                           preloadChar(type + '/' + type + '_front.gif')
         preloadChar(type + '/' + type + '_right.gif')
         preloadChar(type + '/' + type + '_left.gif')
         preloadChar(type + '/' + type + '_back.gif')
         preloadChar(type + '/' + type + '_casting.gif')
         index += 1;
     }

     function Mimic(e, type) {
         this.type = "Mimic";
         this.realtype = "Mimic";
         this.name = "The Mimic";
         this.attack = 40;
         this.defense = 15;
         this.resistance = 15;
         this.health = 100;
         this.maxhealth = 100;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.moved = false;
         this.curleft = 0;
         this.curtop = 425;
         this.group = 0;
         this.slot = 0;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.fireCircle = false;
         this.isanimal = false;
         this.usedsleep = 1;
         this.usedblindness = 1;
         this.usedenfeeble = 1;
         this.usedpoison = 1;
         this.arrowcapacity = 1;
         this.duration = 0;
         this.usedpierce = 1;
         this.usedexploding = 1;
         this.usedtitan = 1;
         this.usedimmobolize = 1;
         this.useddisrupt = 1;
         this.usedgrappling = 1;
         this.usedsilence = 1;
         this.usedburst = 1;
         this.medkit = true;
         this.captured = "";
         this.immune = false;
         this.frosttouch = false;
         this.storm = false;
         this.level = 1;
         this.experience = 0;
         this.abilitypoints = 0;
         this.levelhealth = 5;
         this.leveldefense = 1;
         this.levelresistance = 1;
         this.levelattack = 3;
         this.weapon = "Glass Wand";
         this.armor = "Bronze Armor";
         this.accessory = "None";
         this.healthboost = 0;
         this.weaponboost = 0;
         this.armorboost = 0;
         this.resistboost = 0;
         this.healthpotion = false;
         this.strengthpotion = false;
         this.resistpotion = false;
         this.defensepotion = false;
         this.attacktempboost = 0;
         this.defensetempboost = 0;
         this.protectedby = -1;
         this.enroute = 0;
         this.healing = 0;
         this.picture = "<div class='barrackpic' id='" + e + "'><img src='../CinePics/characters/" + type + "/" + type + "_front.gif' /></div>";
         this.image = '../CinePics/characters/' + type + '/' + type + '_front.gif';
         this.rightpic = '../CinePics/characters/' + type + '/' + type + '_right.gif';
         this.leftpic = '../CinePics/characters/' + type + '/' + type + '_left.gif';
         this.backpic = '../CinePics/characters/' + type + '/' + type + '_back.gif';
                           preloadChar(type + '/' + type + '_front.gif')
         preloadChar(type + '/' + type + '_right.gif')
         preloadChar(type + '/' + type + '_left.gif')
         preloadChar(type + '/' + type + '_back.gif')
         index += 1;
     }

     function Civilian(e, type) {
         this.type = "Civilian";
         this.realtype = "Civilian";
         this.name = "The Civilian";
         this.index = e;
         this.attack = 10;
         this.defense = 0;
         this.resistance = 0;
         this.health = 60;
         this.maxhealth = 60;
         this.usedaction = false;
         this.alive = true;
         this.moved = false;
         this.curleft = 0;
         this.curtop = 425;
         this.group = 0;
         this.slot = 0;
         this.isanimal = false;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.fireCircle = false;
         this.captured = "";
         this.isanimal = false;
         this.immune = false;
         this.frosttouch = false;
         this.storm = false;
         this.level = 1;
         this.experience = 0;
         this.abilitypoints = 0;
         this.levelhealth = 15;
         this.leveldefense = 3;
         this.levelresistance = 1;
         this.levelattack = 3;
         this.weapon = "Bronze Sword";
         this.armor = "Bronze Armor";
         this.accessory = "None";
         this.healthboost = 0;
         this.weaponboost = 0;
         this.armorboost = 0;
         this.resistboost = 0;
         this.attacktempboost = 0;
         this.defensetempboost = 0;
         this.protectedby = -1;
         this.enroute = 0;
         this.healing = 0;
         this.healthpotion = false;
         this.strengthpotion = false;
         this.resistpotion = false;
         this.defensepotion = false;
         this.medkit = false;
         this.abilitymedkit = false;
         this.abilitydash = false;
         this.abilityimmunity = false;
         this.abilitycounter = false;
         this.abilitysteadfast = false;
         this.picture = "<div class='barrackpic' id='" + e + "'><img src='../CinePics/characters/fisherman/fisherman_front.gif' /></div>";
         this.image = '../CinePics/characters/fisherman/fisherman_front.gif';
         this.rightpic = '../CinePics/characters/fisherman/fisherman_right.gif';
         this.leftpic = '../CinePics/characters/fisherman/fisherman_left.gif';
         this.backpic = '../CinePics/characters/fisherman/fisherman_back.gif';
                           preloadChar(type + '/' + type + '_front.gif')
         preloadChar(type + '/' + type + '_right.gif')
         preloadChar(type + '/' + type + '_left.gif')
         preloadChar(type + '/' + type + '_back.gif')
         index += 1;
         if (e === -1) {
             this.curleft = 1;
             this.curtop = 424;
             index -= 1;
             this.picture = "";
             this.image = '';
             this.alive = false;
             this.abilityimmunity = false;
         }
     }

     function AWolf(e, type) {
         this.type = "Wolf";
         this.realtype = "Wolf";
         this.name = "Wolf";
         this.attack = 40;
         this.health = 100;
         this.maxhealth = 100;
         this.defense = 10;
         this.resistance = 10;
         this.isanimal = true;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.moved = false;
         this.curleft = 0;
         this.curtop = 425;
         this.group = 0;
         this.slot = 0;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.fireCircle = false;
         this.captured = "";
         this.immune = false;
         this.frosttouch = false;
         this.storm = false;
         this.level = 1;
         this.experience = 0;
         this.abilitypoints = 0;
         this.levelhealth = 5;
         this.leveldefense = 1;
         this.levelresistance = 1;
         this.levelattack = 3;
         this.weapon = "Glass Wand";
         this.armor = "Bronze Armor";
         this.accessory = "None";
         this.healthboost = 0;
         this.weaponboost = 0;
         this.armorboost = 0;
         this.resistboost = 0;
         this.attacktempboost = 0;
         this.defensetempboost = 0;
         this.protectedby = -1;
         this.enroute = 0;
         this.healing = 0;
         this.picture = "<div class='barrackpic' id='" + e + "'><img src='../Pictures/Enemies/wolf.gif' /></div>";
         this.image = '../Pictures/Enemies/wolf.gif';
         this.rightpic = '../Pictures/Enemies/wolf.gif';
         this.leftpic = '../Pictures/Enemies/wolf.gif';
         this.backpic = '../Pictures/Enemies/wolf.gif';
         index += 1;
     }

     function ATurtle(e, type) {
         this.type = "Turtle";
         this.realtype = "Turtle";
         this.name = "Turtle";
         this.attack = 40;
         this.health = 160;
         this.maxhealth = 160;
         this.defense = 20;
         this.resistance = 0;
         this.isanimal = true;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.moved = false;
         this.curleft = 0;
         this.curtop = 425;
         this.group = 0;
         this.slot = 0;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.fireCircle = false;
         this.captured = "";
         this.immune = false;
         this.frosttouch = false;
         this.storm = false;
         this.level = 1;
         this.experience = 0;
         this.abilitypoints = 0;
         this.levelhealth = 5;
         this.leveldefense = 1;
         this.levelresistance = 1;
         this.levelattack = 3;
         this.weapon = "Glass Wand";
         this.armor = "Bronze Armor";
         this.accessory = "None";
         this.healthboost = 0;
         this.weaponboost = 0;
         this.armorboost = 0;
         this.resistboost = 0;
         this.attacktempboost = 0;
         this.defensetempboost = 0;
         this.protectedby = -1;
         this.enroute = 0;
         this.healing = 0;
         this.picture = "<div class='barrackpic' id='" + e + "'><img src='../Pictures/Enemies/Turtle.gif' /></div>";
         this.image = '../Pictures/Enemies/Turtle.gif';
         this.rightpic = '../Pictures/Enemies/Turtle.gif';
         this.leftpic = '../Pictures/Enemies/Turtle.gif';
         this.backpic = '../Pictures/Enemies/Turtle.gif';
         index += 1;
     }

     function ASparrow(e, type) {
         this.type = "Sparrow";
         this.realtype = "Sparrow";
         this.name = "Sparrow";
         this.attack = 20;
         this.health = 60;
         this.maxhealth = 60;
         this.defense = 0;
         this.resistance = 0;
         this.isanimal = true;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.moved = false;
         this.curleft = 0;
         this.curtop = 425;
         this.group = 0;
         this.slot = 0;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.fireCircle = false;
         this.captured = "";
         this.immune = false;
         this.frosttouch = false;
         this.storm = false;
         this.level = 1;
         this.experience = 0;
         this.abilitypoints = 0;
         this.levelhealth = 5;
         this.leveldefense = 1;
         this.levelresistance = 1;
         this.levelattack = 3;
         this.weapon = "Glass Wand";
         this.armor = "Bronze Armor";
         this.accessory = "Winged_Talisman";
         this.healthboost = 0;
         this.weaponboost = 0;
         this.armorboost = 0;
         this.resistboost = 0;
         this.attacktempboost = 0;
         this.defensetempboost = 0;
         this.protectedby = -1;
         this.enroute = 0;
         this.healing = 0;
         this.abilityflight = true;
         this.picture = "<div class='barrackpic' id='" + e + "'><img src='../Pictures/Enemies/Sparrow.gif' /></div>";
         this.image = '../Pictures/Enemies/Sparrow.gif';
         this.rightpic = '../Pictures/Enemies/Sparrow.gif';
         this.leftpic = '../Pictures/Enemies/Sparrow.gif';
         this.backpic = '../Pictures/Enemies/Sparrow.gif';
         index += 1;
     }

     function ASpider(e, type) {
         this.type = "Spider";
         this.realtype = "Spider";
         this.name = "Spider";
         this.attack = 0;
         this.health = 140;
         this.maxhealth = 140;
         this.defense = 10;
         this.resistance = 10;
         this.isanimal = true;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.moved = false;
         this.curleft = 0;
         this.curtop = 425;
         this.group = 0;
         this.slot = 0;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.fireCircle = false;
         this.captured = "";
         this.immune = false;
         this.frosttouch = false;
         this.storm = false;
         this.level = 1;
         this.experience = 0;
         this.abilitypoints = 0;
         this.levelhealth = 5;
         this.leveldefense = 1;
         this.levelresistance = 1;
         this.levelattack = 3;
         this.weapon = "Glass Wand";
         this.armor = "Bronze Armor";
         this.accessory = "None";
         this.healthboost = 0;
         this.weaponboost = 0;
         this.armorboost = 0;
         this.resistboost = 0;
         this.attacktempboost = 0;
         this.defensetempboost = 0;
         this.protectedby = -1;
         this.enroute = 0;
         this.healing = 0;
         this.picture = "<div class='barrackpic' id='" + e + "'><img src='../Pictures/Enemies/spider.gif' /></div>";
         this.image = '../Pictures/Enemies/spider.gif';
         this.rightpic = '../Pictures/Enemies/spider.gif';
         this.leftpic = '../Pictures/Enemies/spider.gif';
         this.backpic = '../Pictures/Enemies/spider.gif';
         index += 1;
     }

     function ABear(e, type) {
         this.type = "Bear";
         this.realtype = "Bear";
         this.name = "Bear";
         this.attack = 55;
         this.health = 130;
         this.maxhealth = 130;
         this.defense = 10;
         this.resistance = 10;
         this.isanimal = true;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.moved = false;
         this.curleft = 0;
         this.curtop = 425;
         this.group = 0;
         this.slot = 0;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.fireCircle = false;
         this.captured = "";
         this.immune = false;
         this.frosttouch = false;
         this.storm = false;
         this.level = 1;
         this.experience = 0;
         this.abilitypoints = 0;
         this.levelhealth = 5;
         this.leveldefense = 1;
         this.levelresistance = 1;
         this.levelattack = 3;
         this.weapon = "Glass Wand";
         this.armor = "Bronze Armor";
         this.accessory = "None";
         this.healthboost = 0;
         this.weaponboost = 0;
         this.armorboost = 0;
         this.resistboost = 0;
         this.attacktempboost = 0;
         this.defensetempboost = 0;
         this.protectedby = -1;
         this.enroute = 0;
         this.healing = 0;
         this.picture = "<div class='barrackpic' id='" + e + "'><img src='../Pictures/Enemies/bear.gif' /></div>";
         this.image = '../Pictures/Enemies/bear.gif';
         this.rightpic = '../Pictures/Enemies/bear.gif';
         this.leftpic = '../Pictures/Enemies/bear.gif';
         this.backpic = '../Pictures/Enemies/bear.gif';
         index += 1;
     }

     function ADjinn(e, type, Owner) {
         this.type = "Djinn";
         this.name = "Bobo";
         this.attack = 70;
         this.defense = 15;
         this.resistance = 15;
         this.health = 140;
         this.maxhealth = 140;
         this.sleep = 0;
         this.immobilized = 0;
         this.blind = 0;
         this.silenced = 0;
         this.poison = 0;
         this.poison = 0;
         this.enfeeble = 0;
         this.healthboost = 0;
         this.weaponboost = 0;
         this.armorboost = 0;
         this.resistboost = 0;
         this.defensetempboost = 0;
         this.attacktempboost = 0;
         this.owner = "";
         this.group = -1;
         this.protectedby = -1;
         this.usedspecial = false;
         this.index = e;
         this.usedaction = false;
         this.alive = true;
         this.curleft = 0;
         this.curtop = 25;
         this.picture = "<div class='barrackpic' id='" + e + "'><img src='../CinePics/characters/" + type + "/" + type + "_front.gif' /></div>";
         this.image = '../CinePics/characters/' + type + '/' + type + '_front.gif';
         this.rightpic = '../CinePics/characters/' + type + '/' + type + '_right.gif';
         this.leftpic = '../CinePics/characters/' + type + '/' + type + '_left.gif';
         this.backpic = '../CinePics/characters/' + type + '/' + type + '_back.gif';
         index += 1;
     }

     function newEindex() {
         for (var i = 0; i < Eindex; i++) {
             if (Eunits[i].alive === false) {
                 curEindex = i;
                 return i
             }
         }
         Eindex += 1;
         curEindex = Eindex - 1;
         return Eindex - 1;
     }
     //grouping in barracks////////////////////////////////////////////////////////////////////
     function groupunit() {
         $('.barrackpic').dblclick(function () {
             var temp = $(this).offset();
             var templeft = temp.left;
             var temptop = temp.top;
             if (units[$(this).attr("id")].healing > 0) {
                 message("This unit is still healing for " + units[$(this).attr("id")].healing + " more turns.");
                 return;
             }
             if (units[$(this).attr("id")].enroute > 0) {
                 message("This unit is disoriented from escaping and will take " + units[$(this).attr("id")].enroute + " more turns to return.");
                 return;
             }
             if (units[$(this).attr("id")].alive === false) {
                 message("This unit is dead.");
                 return;
             }
             if ($(this).attr("id") === spot1 || $(this).attr("id") === spot2 || $(this).attr("id") === spot2) {
                 $("#TEXT").empty();
                 spot1 = "";
                 spot2 = "";
                 spot3 = "";
                 gotobarracks();
                 return;
             }
             if (spot1 === "") {
                 spot1 = $(this).attr("id");
                 $(this).animate({
                     left: 553 - templeft + 'px'
                     , top: 180 - temptop + 'px'
                 }, 500);
                 return;
             }
             if (spot2 === "") {
                 spot2 = $(this).attr("id");
                 $(this).animate({
                     left: 640 - templeft + 'px'
                     , top: 180 - temptop + 'px'
                 }, 500);
                 return;
             }
             if (spot3 === "") {
                 spot3 = $(this).attr("id");
                 $(this).animate({
                     left: 727 - templeft + 'px'
                     , top: 180 - temptop + 'px'
                 }, 500);
                 return;
             }
         })
     }
     //creates a new group
     function creategroup() {
         $("#createbutton").click(function () {
             if (spot1 === "") {
                 message("There has to be at least one unit to make a group.");
                 return;
             }
             if ($("#space70").data('filled') === 0) {
                 groups[groupindex] = new newgroup(groupindex);
                 if (spot1 != "") {
                     units[spot1].group = groupindex - 1;
                     units[spot1].slot = 1;
                 }
                 if (spot2 != "") {
                     units[spot2].group = groupindex - 1;
                     units[spot2].slot = 2;
                 }
                 if (spot3 != "") {
                     units[spot3].group = groupindex - 1;
                     units[spot3].slot = 3;
                 }
                 $("#TEXT").empty();
                 spot1 = "";
                 spot2 = "";
                 spot3 = "";
                 groupinfo();
                 $("#space70").data('filled', groupindex);
             }
             else {
                 message("You have to move the soldiers off the home base to create another group.")
             }
             //exchange
             $(".icon").mousedown(function (e) {
                 if (e.button === 2) {
                     var temp = $(this).attr('id').replace("M", "");
                     exchangeunits(temp);
                 }
             });
             if (typeof indiv_creategroup == 'function') {
                 indiv_creategroup();
             }
         })
     }
     //exchange////////////////////////////////////////////////////////////////////////////
     function exchangeunits(temp) {
         var location2 = groups[temp].location;
         var location1 = groups[curgroupnum].location;
         if ((location1 == 71 && location2 == 70) || (location2 == 71 && location1 == 70)) {
             return;
         }
         var isfortified = false;
         if ((($("#space" + location1).data("fortify") == true) || ($("#space" + location1).data("castle") == true)) && ($("#space" + location2).data("fortify") == true || $("#space" + location2).data("castle") == true)) {
             isfortified = true;
         }
         var isanimal1 = false;
         var isanimal2 = false
         for (var i = 0; i < index; i++) {
             if (units[i].isanimal == true && units[i].group == temp) {
                 isanimal1 = true
             }
             if (units[i].isanimal == true && units[i].group == curgroupnum) {
                 isanimal2 = true
             }
         }
         if (($("#space" + location2).data("move1") != location1 && $("#space" + location2).data("move2") != location1 && $("#space" + location2).data("move3") != location1 && $("#space" + location2).data("move4") != location1) && isfortified === false) {
             if (isanimal1 == false || isanimal2 == false) {
                 return;
             }
         }
         $("#TEXT").empty();
         $('#TEXT').append("Click unit, and then right-click to exchange units.");
         $('#TEXT').append("<div class = 'exchange' style='border: #d5d406 solid 5px;' id='S" + parseInt(curgroupnum) + "'></div>");
         $('#TEXT').append("<div class = 'exchange' id='S" + parseInt(temp) + "'></div>");
         for (var j = 1; j < 4; j++) {
             for (var i = 0; i < index; i++) {
                 if (units[i].group === curgroupnum && units[i].slot === j) {
                     $("#S" + parseInt(curgroupnum)).append(units[i].picture)
                     $('#' + i).append('<div class="healthbar" id = "HB' + i + '" style="position: relative; margin-top:90%; width: ' + (units[i].health / units[i].maxhealth) * 100 + '%"></div><div class="level"><p>' + units[i].level + '</p></div>');
                 }
                 if (units[i].group === parseInt(temp) && units[i].slot === j) {
                     $("#S" + parseInt(temp)).append(units[i].picture)
                     $('#' + i).append('<div class="healthbar" id = "HB' + i + '" style="position: relative; margin-top:90%; width: ' + (units[i].health / units[i].maxhealth) * 100 + '%"></div><div class="level"><p>' + units[i].level + '</p></div>');
                 }
             }
         }
         $('.barrackpic').click(function () {
             $(".selectedUnit").removeClass("selectedUnit");
             $(this).addClass("selectedUnit");
             curindex = $(this).attr("id");
         });
         $('.barrackpic').mousedown(function (e) {
             if (e.button === 2) {
                 var thistemp = units[curindex].group;
                 var thisslot = units[curindex].slot;
                 units[curindex].group = units[$(this).attr("id")].group;
                 units[curindex].slot = units[$(this).attr("id")].slot;
                 units[$(this).attr("id")].group = thistemp;
                 units[$(this).attr("id")].slot = thisslot;
                 $('#TEXT').empty();
                 exchangeunits(temp);
                 getstats();
             }
         });
         $('.exchange').mousedown(function (e) {
             if (e.button === 2) {
                 var temp2 = 0;
                 var recievingloc = units[curindex].group;
                 var slot1empty = true;
                 var slot2empty = true;
                 var slot3empty = true;
                 for (var i = 0; i < index; i++) {
                     if (units[i].group === parseInt(($(this).attr("id")).replace('S', ""))) {
                         temp2 += 1;
                         if (units[i].slot === 1) {
                             slot1empty = false;
                         }
                         if (units[i].slot === 2) {
                             slot2empty = false;
                         }
                         if (units[i].slot === 3) {
                             slot3empty = false;
                         }
                     }
                 }
                 if (temp2 > 2) {
                     return
                 }
                 if (slot1empty === true) {
                     units[curindex].slot = 1;
                     slot1empty = false
                 }
                 if (slot2empty === true) {
                     units[curindex].slot = 2;
                     slot2empty = false
                 }
                 if (slot3empty === true) {
                     units[curindex].slot = 3;
                     slot3empty = false
                 }
                 units[curindex].group = parseInt(($(this).attr("id")).replace('S', ""));
                 //check to remove group
                 $('#TEXT').empty();
                 temp2 = 0;
                 for (var i = 0; i < index; i++) {
                     if (units[i].group === recievingloc) {
                         temp2 += 1;
                     }
                 }
                 if (temp2 === 0) {
                     $("#M" + recievingloc).remove();
                     $("#space" + groups[recievingloc].location).data("filled", 0)
                     groups[recievingloc].location = -1;
                 }
                 else {
                     exchangeunits(temp);
                 }
                 if (typeof indiv_exchange == 'function') {
                     indiv_exchange();
                 }
             }
         });
         getstats();
         if (typeof indiv_exchangeunits == 'function') {
             indiv_exchangeunits();
         }
     }

     function newgroup(e) {
         this.index = e;
         this.location = 70;
         this.hasmoved = false;
         this.active = true;
         this.curleft = 310;
         this.curtop = 280;
         this.slot1 = -1;
         this.slot2 = -1;
         this.slot3 = -1;
         var leftpos = Number($("#space70").css("left").replace("px", "")) + 13;
         var toppos = Number($("#space70").css("top").replace("px", "")) + 10;
         $('#background').append('<img src="../Pictures/soldiericon.png" class="icon" id="M' + groupindex + '" style="left: ' + leftpos + 'px; top:' + toppos + 'px" />');
         groupindex += 1;
     }
     //Get information//////////////////////////////////////////////////////////////////////////////
     function getstats() {
         $('.barrackpic').click(function () {
             var curunit = $(this).attr('id');
             $("#stats").remove();
             $("body").append('<div id="stats"></div>');
             $("#stats").append("<p>Level: " + units[curunit].level + "</p><p>Type: " + units[curunit].type + "</p><p>Health: " + units[curunit].health + "/" + units[curunit].maxhealth + "</p><p>Attack: " + units[curunit].attack + "</p><p>Defense: " + units[curunit].defense + "</p><p>Resistance: " + units[curunit].resistance + "</p>")
         });
         $('.Ebarrackpic').click(function () {
             var curunit = $(this).attr('id');
             curunit = parseInt(curunit.replace("E", ""));
             $("#stats").remove();
             $("body").append('<div id="stats"></div>');
             $("#stats").append("<p>Type: " + Eunits[curunit].type + "</p><p>Health: " + Eunits[curunit].health + "</p><p>Attack: " + Eunits[curunit].attack + "</p><p>Defense: " + Eunits[curunit].defense + "</p><p>Resistance: " + Eunits[curunit].resistance + "</p><p>" + Eunits[curunit].description + "</p>")
         });
         $('#background').click(function (e) {
             $("#stats").remove();
         });
     }
     //check who is in a group
     function groupinfo() {
         $('.icon').click(function () {
             $(".icon").removeClass("highlight");
             $(".Bicon").removeClass("highlight");
             $(this).addClass("highlight");
             curgroupnum = $(this).attr("id").replace("M", "");
             curgroupnum = parseInt(curgroupnum, 10);
             //highlight spaces
             $(".areas").removeClass("battlehighlight");
             var move1 = $("#space" + groups[curgroupnum].location).data("move1");
             var move2 = $("#space" + groups[curgroupnum].location).data("move2");
             var move3 = $("#space" + groups[curgroupnum].location).data("move3");
             var move4 = $("#space" + groups[curgroupnum].location).data("move4");
             for (var i = 1; i < 70; i++) {
                 if ($("#space" + i)) {
                     if ($("#space" + i).data("location") == move1 || $("#space" + i).data("location") == move2 || $("#space" + i).data("location") == move3 || $("#space" + i).data("location") == move4) {
                         $("#space" + i).addClass("battlehighlight");
                     }
                 }
             }
             dothis();

             function dothis() {
                 curindex = "";
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
                 $(".barrackpic").mousedown(function (e) {
                     if (e.button === 2) {
                         var slotfor1 = units[curindex].slot;
                         var slotfor2 = units[$(this).attr("id")].slot;
                         units[curindex].slot = slotfor2;
                         units[$(this).attr("id")].slot = slotfor1;
                         $("#TEXT").empty();
                         dothis();
                     }
                 });
                 $(".actions").empty();
                 $(".actions").append("<div class = 'actionbutton' id='Pass'><p>Pass</p></div>");
                 if (groups[curgroupnum].location === 70) {
                     $(".actions").append("<div class = 'actionbutton' id='Return'><p>Return</p></div>")
                 }
                 else {
                     if (typeof (noexplore) == 'undefined') {
                         $(".actions").append("<div class = 'actionbutton' id='Explore'><p>Explore</p></div>");
                     }
                 }
                 //                if ($('#space' + groups[curgroupnum].location).data("fortify") === true || $('#space' + groups[curgroupnum].location).data("castle") === true) {
                 //                    $(".actions").append("<div class = 'actionbutton'  id = 'Armory'>Equip</div>");
                 //                    $(".actions").append("<div class = 'actionbutton'  id = 'Hospital'>Heal</div>");
                 //                }
                 if ($('#space' + groups[curgroupnum].location).data("istown") === true && $('#space' + groups[curgroupnum].location).data("fortify") != true) {
                     $(".actions").append("<div class = 'actionbutton'  id = 'Fortify'>Fortify</div>");
                 }
                 presspass();
                 getstats();
             }
             if (typeof indiv_groupinfo == 'function') {
                 indiv_groupinfo();
             }
         });
     }

     function Egroupinfo() {
         $('.Eicon').click(function () {
             curgroupnum = $(this).attr("id");
             curgroupnum = curgroupnum.replace("EM", "");
             curgroupnum = parseInt(curgroupnum, 10);
             $('#TEXT').empty();
             for (var i = 0; i < Eindex; i++) {
                 if (Eunits[i].group === curgroupnum && Eunits[i].alive === true) {
                     $("#TEXT").append('<div id="barracks"></div>');
                     $("#barracks").append(Eunits[i].picture);
                     $('#E' + i).append('<div class="Ehealthbar" id = "HB' + i + '" style="position: absolute; margin-top:90%; width: ' + (Eunits[i].health / Eunits[i].maxhealth) * 100 + '%"></div>');
                 }
             }
             getstats()
         });
     }
     //move good guys groups//////////////////////////////////////////////////////////////////////////////
     function clickEicon() {
         $(".Eicon").mousedown(function (e) {
             if (e.button === 2) {
                 if (battleon === true) {
                     return;
                 }
                 $('#TEXT').empty();
                 var enemynum = $(this).attr('id').replace("EM", "");
                 var enemylocation = Egroups[enemynum].location;
                 var activenum = $('.highlight').attr('id').replace("M", "");
                 var curloc;
                 if (activenum.indexOf("B") > -1) {
                     activenum = activenum.replace("B", "");
                     activenum = parseInt(activenum, 10)
                     curloc = Bgroups[activenum].location;
                     if (Bgroups[activenum].hasmoved === true) {
                         return;
                     }
                     if ((($("#space" + enemylocation).data("fortify") === true || $("#space" + enemylocation).data("castle") === true) && ($("#space" + Bgroups[activenum].location).data("fortify") === true || $("#space" + Bgroups[activenum].location).data("castle") === true || Bgroups[activenum].location === 70)) || Bgroups[activenum].location == $("#space" + enemylocation).data("move1") || Bgroups[activenum].location == $("#space" + enemylocation).data("move2") || Bgroups[activenum].location == $("#space" + enemylocation).data("move3") || Bgroups[activenum].location == $("#space" + enemylocation).data("move4")) {
                         Bgroups[activenum].curleft = $("#space" + enemylocation).data("left");
                         Bgroups[activenum].curtop = $("#space" + enemylocation).data("top");
                         $('.highlight').animate({
                             left: $("#space" + enemylocation).data("left") + 'px'
                             , top: $("#space" + enemylocation).data("top") + 'px'
                         });
                         Bgroups[activenum].location = enemylocation;
                         Bgroups[activenum].hasmoved = true;
                         $(".highlight").addClass("grayicon");
                         clearspaces(curloc);
                         $("#space" + enemylocation).data('filled', Bgroups[activenum].index);
                         Bstartcombat();
                     }
                 }
                 else {
                     curloc = groups[activenum].location;
                     if (groups[activenum].hasmoved === true) {
                         return;
                     }
                     if ((($("#space" + enemylocation).data("fortify") === true || $("#space" + enemylocation).data("castle") === true) && ($("#space" + groups[activenum].location).data("fortify") === true || $("#space" + groups[activenum].location).data("castle") === true || groups[activenum].location === 70)) || groups[activenum].location == $("#space" + enemylocation).data("move1") || groups[activenum].location == $("#space" + enemylocation).data("move2") || groups[activenum].location == $("#space" + enemylocation).data("move3") || groups[activenum].location == $("#space" + enemylocation).data("move4")) {
                         groups[activenum].curleft = $("#space" + enemylocation).data("left");
                         groups[activenum].curtop = $("#space" + enemylocation).data("top");
                         $('.highlight').animate({
                             left: $("#space" + enemylocation).data("left") + 'px'
                             , top: $("#space" + enemylocation).data("top") + 'px'
                         });
                         groups[activenum].location = enemylocation;
                         groups[activenum].hasmoved = true;
                         $(".highlight").addClass("grayicon");
                         clearspaces(curloc);
                         $("#space" + enemylocation).data('filled', groups[activenum].index);
                     }
                 }
                 startcombat();
             }
         });
     }

     function clearspaces(e) {
         $("#space" + e).data('filled', 0);
     }

     function Explore() {
         var curlocation = groups[curgroupnum].location;
         var lootdate = $('#space' + curlocation).data('loot');
         var treasurenum = Math.floor((Math.random() * 20) + 1);
         $("#TEXT").empty();
         if (typeof lootdate === 'undefined' || lootdate === "" || lootdate > 0) {
             $('#TEXT').append("Found Nothing");
             return;
         }
         $('#space' + curlocation).data('loot', 10);
         switch (treasurenum) {
         case 1:
             $('#TEXT').append("Found two <b>Honey</b>");
             ingredient["Honey"].quantity += 2;
             break;
         case 2:
             $('#TEXT').append("Found two <b>Extract</b>");
             ingredient["Extract"].quantity += 2;
             break;
         case 3:
             $('#TEXT').append("Found two <b>Mushrooms</b>");
             ingredient["Mushrooms"].quantity += 2;
             break;
         case 4:
             $('#TEXT').append("Found two <b>Flowers</b>");
             ingredient["Flowers"].quantity += 2;
             break;
         case 5:
             $('#TEXT').append("Found two <b>Essence</b>");
             ingredient["Essence"].quantity += 2;
             break;
         case 6:
             $('#TEXT').append("Found two <b>Powder</b>");
             ingredient["Powder"].quantity += 2;
             break;
         case 7:
             $('#TEXT').append("Found two <b>Sap</b>");
             ingredient["Sap"].quantity += 2;
             break;
         case 8:
             $('#TEXT').append("Found two <b>Herbs</b>");
             ingredient["Herbs"].quantity += 2;
             break;
         case 9:
             $('#TEXT').append("Found two <b>Berries</b>");
             ingredient["Berries"].quantity += 2;
             break;
         case 10:
             $('#TEXT').append("Found two <b>Roots</b>");
             ingredient["Roots"].quantity += 2;
             break;
         case 11:
             $('#TEXT').append("Found four <b>Honey</b>");
             ingredient["Honey"].quantity += 4;
             break;
         case 12:
             $('#TEXT').append("Found four <b>Extract</b>");
             ingredient["Extract"].quantity += 4;
             break;
         case 13:
             $('#TEXT').append("Found four <b>Mushrooms</b>");
             ingredient["Mushrooms"].quantity += 4;
             break;
         case 14:
             $('#TEXT').append("Found four <b>Flowers</b>");
             ingredient["Flowers"].quantity += 4;
             break;
         case 15:
             $('#TEXT').append("Found four <b>Essence</b>");
             ingredient["Essence"].quantity += 4;
             break;
         case 16:
             $('#TEXT').append("Found four <b>Powder</b>");
             ingredient["Powder"].quantity += 4;
             break;
         case 17:
             $('#TEXT').append("Found four <b>Sap</b>");
             ingredient["Sap"].quantity += 4;
             break;
         case 18:
             $('#TEXT').append("Found four <b>Herbs</b>");
             ingredient["Herbs"].quantity += 4;
             break;
         case 19:
             $('#TEXT').append("Found four <b>Berries</b>");
             ingredient["Berries"].quantity += 4;
             break;
         case 20:
             $('#TEXT').append("Found four <b>Roots</b>");
             ingredient["Roots"].quantity += 4;
             break;
         }
     }
     //looting
     function lootenemyfunction(index) {
         var rand = Math.floor((Math.random() * 10) + 1);
         switch (rand) {
         case 1:
             $('#TEXT').append("<p>Found <b>Honey</b></p>");
             ingredient["Honey"].quantity += 1;
             break;
         case 2:
             $('#TEXT').append("<p>Found <b>Extract</b></p>");
             ingredient["Extract"].quantity += 1;
             break;
         case 3:
             $('#TEXT').append("<p>Found a <b>Mushroom</b></p>");
             ingredient["Mushrooms"].quantity += 1;
             break;
         case 4:
             $('#TEXT').append("<p>Found a <b>Flower</b></p>");
             ingredient["Flowers"].quantity += 1;
             break;
         case 5:
             $('#TEXT').append("<p>Found <b>Essence</b></p>");
             ingredient["Essence"].quantity += 1;
             break;
         case 6:
             $('#TEXT').append("<p>Found <b>Powder</b></p>");
             ingredient["Powder"].quantity += 1;
             break;
         case 7:
             $('#TEXT').append("<p>Found <b>Sap</b></p>");
             ingredient["Sap"].quantity += 1;
             break;
         case 8:
             $('#TEXT').append("<p>Found an <b>Herb</b></p>");
             ingredient["Herbs"].quantity += 1;
             break;
         case 9:
             $('#TEXT').append("<p>Found a <b>Berry</b></p>");
             ingredient["Berries"].quantity += 1;
             break;
         case 10:
             $('#TEXT').append("<p>Found a <b>Root</b></p>");
             ingredient["Roots"].quantity += 1;
             break;
         }
     }
     ///////combat
     function startcombat() {
         if (gameoverset == true) {
             return;
         }
         setTimeout(function () {
                 if (gameoverset) {
                     $("#battlebackground").remove();
                 }
             }, 1000)
             //check if there's a fight
         function checkslots(type) {
             var typepresent = false;
             for (var p = 0; p < index; p++) {
                 if (units[slots[1]].type == type || units[slots[2]].type == type || units[slots[3]].type == type) {
                     typepresent = true;
                 }
             }
             return typepresent
         }
         for (var i = 1; i < groupindex; i++) {
             if (groups[i].location < 0 || groups[i].location === undefined) {
                 continue;
             }
             for (var j = 1; j < Egroupindex; j++) {
                 if (Egroups[j].location == undefined || Egroups[j].location < 0) {
                     continue;
                 }
                 if (groups[i].location === Egroups[j].location) {
                     //reset everyone
                     setTimeout(function () {
                         $("#battlebackground").fadeIn();
                     }, 500);
                     setTimeout(function () {
                         $("#temp").remove();
                     }, 1000);
                     var testnum = 0;
                     for (var w = 0; w < index; w++) {
                         if (units[w].group === undefined) {
                             continue;
                         }
                         units[w].moved = false;
                         units[w].usedaction = false;
                         units[w].usedspecial = false;
                         units[w].protectedby = -1;
                         units[w].immobilized = 0;
                         units[w].blind = 0;
                         units[w].silenced = 0;
                         units[w].sleep = 0;
                         units[w].poison = 0;
                         units[w].fireCircle = false;
                         units[w].stormactive = false;
                         //stormhere
                         iceActive = false;
                         units[w].defensetempboost = 0;
                         units[w].attacktempboost = 0;
                         units[w].immune = groups[i].immune;
                         units[w].frosttouch = groups[i].frosttouch;
                         units[w].storm = groups[i].storm;
                         units[w].aetherban = groups[i].aetherban;

                         function checktypes(type) {
                             var typepresent = false;
                             for (var p = 0; p < index; p++) {
                                 if (w >= index) {
                                     return;
                                 }
                                 if (units[p].type == type && units[p].group == units[w].group) {
                                     typepresent = true;
                                 }
                             }
                             return typepresent
                         }
                         if (units[w].group === i) {
                             testnum += 1;
                         }
                         if (units[w].type === "Templar" || units[w].type === "Soldier" || units[w].type === "Mage" || units[w].type === "Enchantress" || units[w].type === "Wizard" || units[w].type === "Rouge" || units[w].type === "Archer" || units[w].type === "Thief" || units[w].type === "Sorcerer" || units[w].type === "Healer" || units[w].type === "Mimic") {
                             units[w].energy = 0;
                         }
                         if (units[w].type === "Wizard" || (checktypes("Wizard") && units[w].type === "Mimic")) {
                             if (units[w].abilitystartcharge === true) {
                                 units[w].charge = 2;
                             }
                             else {
                                 units[w].charge = 0;
                             }
                         }
                         if (units[w].type === "Rouge" || units[w].type === "Mimic") {
                             units[w].usedblindness = units[w].arrowcapacity;
                             units[w].usedsleep = units[w].arrowcapacity;
                             units[w].usedenfeeble = units[w].arrowcapacity;
                             units[w].usedpoison = units[w].arrowcapacity;
                         }
                         if (units[w].type === "Templar" || units[w].type === "Mimic") {
                             units[w].usedsilence = units[w].arrowcapacity;
                             units[w].usedimmobilize = units[w].arrowcapacity;
                             units[w].useddisrupt = units[w].arrowcapacity;
                             units[w].usedgrappling = units[w].arrowcapacity;
                             units[w].usedburst = units[w].arrowcapacity;
                         }
                         if (units[w].type === "Archer" || units[w].type === "Mimic") {
                             units[w].usedtitan = units[w].arrowcapacity;
                             units[w].usedimmobolize = units[w].arrowcapacity;
                             units[w].usedexploding = units[w].arrowcapacity;
                             units[w].usedpierce = units[w].arrowcapacity;
                         }
                         if (units[w].type === "Guard") {
                             if (units[w].abilityincreaseenergy) {
                                 units[w].energy = 50;
                             }
                             else {
                                 units[w].energy = 25;
                             }
                         }
                         if (units[w].type === "Knight" || (checktypes("Knight") && units[w].type === "Mimic")) {
                             units[w].energy = 100;
                         }
                         if (units[w].type == "Thief" && units[w].abilityinvisible == true) {
                             units[w].type = "Invisible";
                         }
                         if (units[w].type === "Soldier") {
                             units[w].counterindex = [];
                         }
                     }
                     if (testnum === 0) {
                         groups[i].location = -1;
                         continue;
                     }
                     for (var q = 0; q < Eindex; q++) {
                         if (Eunits[q].group != j) {
                             continue;
                         }
                         Eunits[q].moved = false;
                         if (Eunits[q].charge != "None") {
                             Eunits[q].charge = 0;
                         }
                         Eunits[q].usedaction = false;
                         Eunits[q].immobilized = 0;
                         Eunits[q].blind = 0;
                         Eunits[q].silenced = 0;
                         Eunits[q].sleep = 0;
                         Eunits[q].poison = 0;
                         Eunits[q].terrify = 0;
                         Eunits[q].enfeeble = 0;
                         if (Eunits[q].type === "Spitter") {
                             Eunits[q].usedimmobilized = 3;
                         }
                     }
                     //create battle area//
                     $("#stats").remove();
                     curenemy = j;
                     curally = i;
                     curlocation = groups[i].location;
                     curexperience = Egroups[j].experience;
                     $(".actions").empty();
                     var backgroundpic = set_area_background(i);
                     $('body').append("<div id = 'battlebackground'><img style='width: 100%; height:100%' src='" + backgroundpic + "' /></div>");
                     $('#background').append("<img class = 'icon' id='temp' style='left: " + groups[i].curleft + "px; top: " + groups[i].curtop + "px' src='" + backgroundpic + "' />");
                     $('#temp').animate({
                         width: 500 + 'px'
                         , height: 500 + 'px'
                         , left: 50 + 'px'
                         , top: 70 + 'px'
                     }, 500);
                     var vert = 1;
                     var horz = 1;
                     var addLeft = 15;
                     var addTop = 15;
                     for (var q = 1; q < 26; q++) {
                         $("#battlebackground").append("<div class='battleareas' id = 'space" + vert + horz + "' style ='position: absolute; LEFT: " + addLeft + "px; Top:" + addTop + "px'></div>");
                         if (addLeft < 400) {
                             addLeft += 100;
                             vert += 1;
                         }
                         else {
                             horz += 1;
                             addTop += 100;
                             addLeft = 15;
                             vert = 1;
                         }
                     }
                     $("#passarea").append("<div class = 'actionbutton' id='PassTurn'>PassTurn</div>");
                     if (typeof (noescape) == "undefined") {
                         $("#passarea").append("<div class = 'actionbutton' id='Escape'>Escape</div>");
                     }
                     passturnbutton();
                     battleon = true;
                     //put in units
                     slots[1] = -1;
                     slots[2] = -1;
                     slots[3] = -1;
                     var currenttop = 425;
                     for (k = 0; k < index; k++) {
                         if (units[k].group === i) {
                             if (slots[1] === -1 && units[k].slot === 1) {
                                 slots[1] = k;
                             }
                             else if (slots[2] === -1 && units[k].slot === 2) {
                                 slots[2] = k;
                             }
                             else if (slots[3] === -1 && units[k].slot === 3) {
                                 slots[3] = k;
                             }
                         }
                     }
                     if (slots[1] != -1) {
                         units[slots[1]].curleft = 125;
                         units[slots[1]].curtop = currenttop;
                         $('#battlebackground').append('<div STYLE="position:absolute; TOP:' + currenttop + 'px; LEFT:125px;" class="unit"  id="' + slots[1] + '" ><img class="dirpic" src="' + units[slots[1]].backpic + '"/></div>');
                         $('#' + slots[1]).append('<div class="healthbar" id = "HB' + slots[1] + '" style="width: ' + (units[slots[1]].health / units[slots[1]].maxhealth) * 100 + '%"></div><div class="level"><p>' + units[slots[1]].level + '</p></div><div class="energybar" id ="EB' + units[slots[1]].index + '"style="width: ' + (units[slots[1]].energy) + '%"></div>');
                         if (units[slots[1]].type === "Wizard" || (checkslots("Wizard") && units[slots[1]].type === "Mimic")) {
                             $('#' + slots[1]).append('<img  style="position: absolute; margin-top:40px; margin-left:-30px; width:35px; height:35px" src="../Pictures/Orb.gif" /><div id = "ORB' + slots[1] + '" style="color: yellow; position: absolute; font-size:20px; margin-top:-30px; margin-left:55px; width:10px; height:10px ">' + units[slots[1]].charge + '</div>');
                         }
                         if (units[slots[1]].type === "Enchantress") {
                             $('#' + slots[1]).append('<img class="ORB" style="position: absolute; margin-top:40px; margin-left:-30px; width:48px; height:35px" src="../Pictures/Orb.gif" /><div id = "ORB' + slots[1] + '" style="color: yellow; position: absolute; font-size:17px; margin-top:-27px; margin-left:50px; width:10px; height:10px ">' + units[slots[1]].mana + '</div>');
                         }
                         if (units[slots[1]].type === "Sorcerer") {
                             $("#" + slots[1]).append('<div class="manabar" id ="EB' + slots[1] + '"style="width: ' + (sorcerermana) + '%"></div>');
                         }
                         if (units[slots[1]].type === "Healer") {
                             $("#" + slots[1]).append('<div class="healerbar" id ="EB' + slots[1] + '"style="width: ' + (units[slots[1]].power) + '%"></div>');
                         }
                         if (units[slots[1]].type === "Invisible") {
                             $("#" + slots[1]).addClass("Invisible");
                         }
                     }
                     if (slots[2] != -1) {
                         units[slots[2]].curleft = 225;
                         units[slots[2]].curtop = currenttop;
                         $('#battlebackground').append('<div STYLE="position:absolute; TOP:' + currenttop + 'px; LEFT:225px;" class="unit"  id="' + slots[2] + '" ><img class="dirpic" src="' + units[slots[2]].backpic + '"/></div>');
                         $('#' + slots[2]).append('<div class="healthbar" id = "HB' + slots[2] + '" style="width: ' + (units[slots[2]].health / units[slots[2]].maxhealth) * 100 + '%"></div><div class="level"><p>' + units[slots[2]].level + '</p></div><div class="energybar" id ="EB' + units[slots[2]].index + '"style="width: ' + (units[slots[2]].energy) + '%"></div>');
                         if (units[slots[2]].type === "Wizard" || (checkslots("Wizard") && units[slots[2]].type === "Mimic")) {
                             $('#' + slots[2]).append('<img style="position: absolute; margin-top:40px; margin-left:-30px; width:35px; height:35px" src="../Pictures/Orb.gif" /><div id = "ORB' + slots[2] + '" style="color: yellow; position: absolute; font-size:20px; margin-top:-30px; margin-left:55px; width:10px; height:10px ">' + units[slots[2]].charge + '</div>');
                         }
                         if (units[slots[2]].type === "Enchantress") {
                             $('#' + slots[2]).append('<img class="ORB" style="position: absolute; margin-top:40px; margin-left:-30px; width:48px; height:35px" src="../Pictures/Orb.gif" /><div id = "ORB' + slots[2] + '" style="text-align: center; position: absolute; font-size:17px; margin-top:-27px; margin-left:50px; width:10px; height:10px ">' + units[slots[2]].mana + '</div>');
                         }
                         if (units[slots[2]].type === "Sorcerer") {
                             $("#" + slots[2]).append('<div class="manabar" id ="EB' + units[slots[2]].index + '"style="width: ' + (sorcerermana) + '%"></div>');
                         }
                         if (units[slots[2]].type === "Healer") {
                             $("#" + slots[2]).append('<div class="healerbar" id ="EB' + slots[2] + '"style="width: ' + (units[slots[2]].power) + '%"></div>');
                         }
                         if (units[slots[2]].type === "Invisible") {
                             $("#" + slots[2]).addClass("Invisible");
                         }
                     }
                     if (slots[3] != -1) {
                         units[slots[3]].curleft = 325;
                         units[slots[3]].curtop = currenttop;
                         $('#battlebackground').append('<div STYLE="position:absolute; TOP:' + currenttop + 'px; LEFT:325px;" class="unit"  id="' + slots[3] + '" ><img class="dirpic" src="' + units[slots[3]].backpic + '"/></div>');
                         $('#' + slots[3]).append('<div class="healthbar" id = "HB' + slots[3] + '" style="width: ' + (units[slots[3]].health / units[slots[3]].maxhealth) * 100 + '%"></div><div class="level"><p>' + units[slots[3]].level + '</p></div><div class="energybar" id ="EB' + units[slots[3]].index + '"style="width: ' + (units[slots[3]].energy) + '%"></div>');
                         if (units[slots[3]].type === "Wizard" || (checkslots("Wizard") && units[slots[3]].type === "Mimic")) {
                             $('#' + slots[3]).append('<img style="position: absolute; margin-top:40px; margin-left:-30px; width:35px; height:35px" src="../Pictures/Orb.gif" /><div id = "ORB' + slots[3] + '" style="color: yellow;position: absolute; font-size:20px; margin-top:-30px; margin-left:55px; width:10px; height:10px ">' + units[slots[3]].charge + '</div>');
                         }
                         if (units[slots[3]].type === "Sorcerer") {
                             $("#" + slots[3]).append('<div class="manabar" id ="EB' + units[slots[3]].index + '"style="width: ' + (sorcerermana) + '%"></div>');
                         }
                         if (units[slots[3]].type === "Enchantress") {
                             $('#' + slots[3]).append('<img class="ORB" style="position: absolute; margin-top:40px; margin-left:-30px; width:48px; height:35px" src="../Pictures/Orb.gif" /><div id = "ORB' + slots[3] + '" style="text-align: center; position: absolute; font-size:17px; margin-top:-27px; margin-left:50px; width:10px; height:10px ">' + units[slots[3]].mana + '</div>');
                         }
                         if (units[slots[3]].type === "Healer") {
                             $("#" + slots[3]).append('<div class="healerbar" id ="EB' + slots[3] + '"style="width: ' + (units[slots[3]].power) + '%"></div>');
                         }
                         if (units[slots[3]].type === "Invisible") {
                             $("#" + slots[3]).addClass("Invisible");
                         }
                     }
                     Eslots[1] = -1;
                     Eslots[2] = -1;
                     Eslots[3] = -1;
                     Eslots[4] = -1;
                     Eslots[5] = -1;
                     for (k = 0; k < Eindex; k++) {
                         if (Eunits[k].group === j && Eunits[k].alive === true) {
                             if (Eslots[1] === -1) {
                                 Eslots[1] = k;
                             }
                             else if (Eslots[2] === -1) {
                                 Eslots[2] = k;
                             }
                             else if (Eslots[3] === -1) {
                                 Eslots[3] = k;
                             }
                             else if (Eslots[4] === -1) {
                                 Eslots[4] = k;
                             }
                             else if (Eslots[5] === -1) {
                                 Eslots[5] = k;
                             }
                         }
                     }
                     //to shift units left if more than 3 enemies
                     var mult = 0;
                     if (Eslots[4] != -1) {
                         mult = 1
                     }
                     Eunits[Eslots[1]].curleft = 125 - mult * 100;
                     Eunits[Eslots[1]].curtop = 25;
                     $('#battlebackground').append('<div STYLE="position:absolute; TOP:25px; LEFT:' + Eunits[Eslots[1]].curleft + 'px;" class="Eunit"  id="E' + Eslots[1] + '" ><img src="' + Eunits[Eslots[1]].image + '"/></div>');
                     $("#battlebackground").hide();
                     $('#E' + Eslots[1]).append('<div class="healthbar" id = "EHB' + Eslots[1] + '" style="width: ' + (Eunits[Eslots[1]].health / Eunits[Eslots[1]].maxhealth) * 100 + '%"></div>');
                     if (Eunits[Eslots[1]].charge === 0) {
                         $('#E' + Eslots[1]).append('<img class="ORBIMG" style="position: absolute; margin-top:40px; margin-left:-30px; width:35px; height:35px" src="../Pictures/Orb.gif" /><div id = "ORBE' + Eslots[1] + '" style="color:yellow;position: absolute; font-size:20px; margin-top:-30px; margin-left:50px; width:10px; height:10px ">' + Eunits[Eslots[1]].charge + '/' + Eunits[Eslots[1]].maxcharge + '</div>');
                     }
                     if (Eslots[2] != -1) {
                         Eunits[Eslots[2]].curleft = 225 - mult * 100;
                         Eunits[Eslots[2]].curtop = 25;
                         $('#battlebackground').append('<div STYLE="position:absolute; TOP:25px; LEFT:' + Eunits[Eslots[2]].curleft + 'px;" class="Eunit"  id="E' + Eslots[2] + '" ><img src="' + Eunits[Eslots[2]].image + '"/></div>');
                         $('#E' + Eslots[2]).append('<div class="healthbar" id = "EHB' + Eslots[2] + '" style="width: ' + (Eunits[Eslots[2]].health / Eunits[Eslots[2]].maxhealth) * 100 + '%"></div>');
                         if (Eunits[Eslots[2]].charge === 0) {
                             $('#E' + Eslots[2]).append('<img class="ORBIMG" style="position: absolute; margin-top:40px; margin-left:-30px; width:35px; height:35px" src="../Pictures/Orb.gif" /><div id = "ORBE' + Eslots[2] + '" style="color:yellow;position: absolute; font-size:20px; margin-top:-30px; margin-left:50px; width:10px; height:10px ">' + Eunits[Eslots[2]].charge + '/' + Eunits[Eslots[2]].maxcharge + '</div>');
                         }
                     }
                     if (Eslots[3] != -1) {
                         Eunits[Eslots[3]].curleft = 325 - mult * 100;
                         Eunits[Eslots[3]].curtop = 25;
                         $('#battlebackground').append('<div STYLE="position:absolute; TOP:25px; LEFT:' + Eunits[Eslots[3]].curleft + 'px;" class="Eunit"  id="E' + Eslots[3] + '" ><img src="' + Eunits[Eslots[3]].image + '"/></div>');
                         $('#E' + Eslots[3]).append('<div class="healthbar" id = "EHB' + Eslots[3] + '" style="width: ' + (Eunits[Eslots[3]].health / Eunits[Eslots[3]].maxhealth) * 100 + '%"></div>');
                         if (Eunits[Eslots[3]].charge === 0) {
                             $('#E' + Eslots[3]).append('<img class="ORBIMG" style="position: absolute; margin-top:40px; margin-left:-30px; width:35px; height:35px" src="../Pictures/Orb.gif" /><div id = "ORBE' + Eslots[3] + '" style="color:yellow;position: absolute; font-size:20px; margin-top:-30px; margin-left:50px; width:10px; height:10px ">' + Eunits[Eslots[3]].charge + '/' + Eunits[Eslots[3]].maxcharge + '</div>');
                         }
                     }
                     if (Eslots[4] != -1) {
                         Eunits[Eslots[4]].curleft = 325;
                         Eunits[Eslots[4]].curtop = 25;
                         $('#battlebackground').append('<div STYLE="position:absolute; TOP:25px; LEFT:' + Eunits[Eslots[4]].curleft + 'px;" class="Eunit"  id="E' + Eslots[4] + '" ><img src="' + Eunits[Eslots[4]].image + '"/></div>');
                         $('#E' + Eslots[4]).append('<div class="healthbar" id = "EHB' + Eslots[4] + '" style="width: ' + (Eunits[Eslots[4]].health / Eunits[Eslots[4]].maxhealth) * 100 + '%"></div>');
                         if (Eunits[Eslots[4]].charge === 0) {
                             $('#E' + Eslots[4]).append('<img class="ORBIMG" style="position: absolute; margin-top:40px; margin-left:-30px; width:35px; height:35px" src="../Pictures/Orb.gif" /><div id = "ORBE' + Eslots[4] + '" style="color:yellow;position: absolute; font-size:20px; margin-top:-30px; margin-left:50px; width:10px; height:10px ">' + Eunits[Eslots[4]].charge + '/' + Eunits[Eslots[4]].maxcharge + '</div>');
                         }
                     }
                     if (Eslots[5] != -1) {
                         Eunits[Eslots[5]].curleft = 425;
                         Eunits[Eslots[5]].curtop = 25;
                         $('#battlebackground').append('<div STYLE="position:absolute; TOP:25px; LEFT:' + Eunits[Eslots[5]].curleft + 'px;" class="Eunit"  id="E' + Eslots[5] + '" ><img src="' + Eunits[Eslots[5]].image + '"/></div>');
                         $('#E' + Eslots[5]).append('<div class="healthbar" id = "EHB' + Eslots[5] + '" style="width: ' + (Eunits[Eslots[5]].health / Eunits[Eslots[5]].maxhealth) * 100 + '%"></div>');
                         if (Eunits[Eslots[5]].charge === 0) {
                             $('#E' + Eslots[5]).append('<img class="ORBIMG" style="position: absolute; margin-top:40px; margin-left:-30px; width:35px; height:35px" src="../Pictures/Orb.gif" /><div id = "ORBE' + Eslots[5] + '" style="color:yellow;position: absolute; font-size:20px; margin-top:-30px; margin-left:50px; width:10px; height:10px ">' + Eunits[Eslots[5]].charge + '/' + Eunits[Eslots[5]].maxcharge + '</div>');
                         }
                     }
                     getstatsbattle();
                     battlehighlight();
                     battlemove();
                     attackbadguy();
                     clickactionbuttons();
                     lootenemy[1] = "";
                     lootenemy[2] = "";
                     lootenemy[3] = "";
                     lootenemy[4] = "";
                     lootenemy[5] = "";
                     var whoseattack = Math.floor((Math.random() * 2) + 1);
                     if (whoseattack === 2 && units[slots[1]].abilityscout != true && units[slots[2]].abilityscout != true && units[slots[3]].abilityscout != true && units[slots[1]].accessory != "Scouter's_Goggles" && units[slots[2]].accessory != "Scouter's_Goggles" && units[slots[3]].accessory != "Scouter's_Goggles" && groups[i].haste != true) {
                         setTimeout(function () {
                             enemyturn("PassTurn")
                         }, 500);
                     }
                     groups[i].haste = false;
                     if (typeof indiv_startcombat == 'function') {
                         indiv_startcombat();
                     }
                     return;
                 }
             }
         }
     }
     //in combat stuff///////////////////////////////////////////////////////////////////////
     var selectedunit = "";
     var enemyindex = "";
     var slots = new Array();
     var Eslots = new Array();
     var curenemy = '';
     var curally = "";
     var curlocation = "";
     var curexperience = 0;
     var lootenemy = new Array();
     //highlight spaces during battle
     function battlehighlight() {
         $('.battleareas').mouseenter(function () {
             $(this).addClass("battlehighlight")
         });
         $('.battleareas').mouseleave(function () {
             $(this).removeClass("battlehighlight")
         });
         $('.battleareas').click(function () {
             if ($(this).is(":empty")) {
                 selectedunit = "";
             }
         });
     }
     //move your units
     function battlemove() {
         $('.battleareas').mousedown(function (e) {
             if (inanimation) {
                 return;
             }
             $("#TEXT").empty();
             var newpic;
             if (e.button === 2) {
                 switch (this.id) {
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
                 if (($('#wizardchoice option:selected').text() === "Teleport(1)" && units[selectedindex].charge > 0) || units[selectedindex].accessory === "Winged_Talisman" || units[selectedindex].abilityfly === true || units[selectedindex].flight === true || ((units[selectedindex].curtop - 100 === futuretop && units[selectedindex].curleft === futureleft) || (units[selectedindex].curtop + 100 === futuretop && units[selectedindex].curleft === futureleft) || (units[selectedindex].curleft - 100 === futureleft && units[selectedindex].curtop === futuretop) || (units[selectedindex].curleft + 100 === futureleft && units[selectedindex].curtop === futuretop))) {
                     if (units[selectedindex].moved === true) {
                         if ((units[selectedindex].abilitydash === true && units[selectedindex].usedaction === false)) {
                             $('#TEXT').append("<p>" + units[selectedindex].name + " dashed</p>");
                             units[selectedindex].usedaction = true;
                         }
                         else {
                             $('#TEXT').append("<p>" + units[selectedindex].name + " has already moved this turn</p>");
                             return;
                         }
                     }
                     if (units[selectedindex].curleft + 100 === futureleft) {
                         $("#" + selectedindex + " .dirpic").attr("src", units[selectedindex].rightpic)
                     }
                     if (units[selectedindex].curleft - 100 === futureleft) {
                         $("#" + selectedindex + " .dirpic").attr("src", units[selectedindex].leftpic)
                     }
                     if (units[selectedindex].curtop + 100 === futuretop) {
                         $("#" + selectedindex + " .dirpic").attr("src", units[selectedindex].image)
                     }
                     if (units[selectedindex].curtop - 100 === futuretop) {
                         $("#" + selectedindex + " .dirpic").attr("src", units[selectedindex].backpic)
                     }
                     showailments();

                     function checktypes(type) {
                         if (units[slots[1]].type == type || units[slots[2]].type == type || units[slots[3]].type == type) {
                             return true;
                         }
                         else {
                             return false;
                         }
                     }
                     if (units[selectedindex].immobilized > 0) {
                         $("#TEXT").append("This unit is immobolized for another " + units[selectedindex].immobilized + " turns.");
                         return;
                     }
                     if (units[selectedindex].type === "Knight") {
                         if (units[selectedindex].abilityfreemove === false) {
                             if (units[selectedindex].energy < 30) {
                                 message("The Knight doesn't have enough stamina to move. Pass the turn without using him to refill his stamina.");
                                 return;
                             }
                             else {
                                 units[selectedindex].energy -= 30;
                                 $("#EB" + units[selectedindex].index).remove();
                                 $("#" + selectedindex).append('<div class="energybar" id ="EB' + units[selectedindex].index + '"style="width: ' + units[selectedindex].energy + '%"></div>');
                             }
                         }
                     }
                     $('.selectedUnit').animate({
                         left: futureleft + 'px'
                         , top: futuretop + 'px'
                     }, 500);
                     if ($('#wizardchoice option:selected').text() === "Teleport(1)") {
                         $("#" + selectedindex).fadeIn(1600)
                     }
                     units[selectedindex].curleft = futureleft;
                     units[selectedindex].curtop = futuretop;
                     units[selectedindex].moved = true;
                     for (var i = 1; i < 6; i++) {
                         if (Eunits[Eslots[i]].type === "Cannon" && units[selectedindex].type != "Invisible" && Eunits[Eslots[i]].alive === true) {
                             if (Eunits[Eslots[i]].curleft === units[selectedindex].curleft) {
                                 $("#battlebackground").append("<div class='staticEffects' style='margin-top: " + (Eunits[Eslots[i]].curtop - 450) + "px; margin-left: " + (Eunits[Eslots[i]].curleft - 20) + "px'><img style = ' width:100px; height:700px' src='../Pictures/Effects/Cannonbeam.gif' /></div>");
                             }
                             if (Eunits[Eslots[i]].curtop === units[selectedindex].curtop && Eunits[Eslots[i]].curleft <= units[selectedindex].curleft) {
                                 $("#battlebackground").append("<div class='staticEffects' style='transform: rotate(90deg) translate(-100%,-100%); margin-top: " + (units[selectedindex].curtop - 725) + "px; margin-left: " + (units[selectedindex].curleft - 450) + "px'><img style = ' width:100px; height:700px' src='../Pictures/Effects/Cannonbeam.gif' /></div>");
                             }
                             if (Eunits[Eslots[i]].curtop === units[selectedindex].curtop && Eunits[Eslots[i]].curleft >= units[selectedindex].curleft) {
                                 $("#battlebackground").append("<div class='staticEffects' style='transform: rotate(270deg) translate(-100%,-100%); margin-top: " + (units[selectedindex].curtop - 925) + "px; margin-left: " + (units[selectedindex].curleft + 400) + "px'><img style = ' width:100px; height:700px' src='../Pictures/Effects/Cannonbeam.gif' /></div>");
                             }
                             if (Eunits[Eslots[i]].curleft === units[selectedindex].curleft || Eunits[Eslots[i]].curtop === units[selectedindex].curtop) {
                                 var damage = (Eunits[Eslots[i]].attack + Eunits[Eslots[i]].attack * Eunits[Eslots[i]].charge) - units[selectedindex].resistance;
                                 if(damage<0){damage=0}
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
                 if (units[index].protectedby != -1 && units[units[index].protectedby].alive === true) {
                     index = units[index].protectedby;
                 }
                 var temp = "#" + index;
                 var tempbar = "#HB" + index;
                 if (units[index].abilitydodge === true || units[index].accessory === "Dodging_Boots") {
                     var randnum = Math.floor((Math.random() * 50) + 1);
                     var randchance = Math.floor((Math.random() * 2) + 1);
                     if (randnum < damage && randchance === 1) {
                         damage = "Miss";
                     }
                 }
                 if (damage > -1) {
                     //shield stuff
                     if (units[index].energy > 0 && units[index].type === "Guard") {
                         //reducing life or energy
                         if (units[index].energy > damage) {
                             units[index].energy -= damage;
                         }
                         else {
                             units[index].health -= (damage - units[index].energy);
                             units[index].energy = 0;
                         }
                         $("#EB" + units[index].index).remove();
                         $("#" + index).append('<div class="energybar" id ="EB' + units[index].index + '"style="width: ' + units[index].energy + '%"></div>');
                     }
                     else {
                         units[index].health -= damage
                     }
                     //steadfast stuff
                     if (units[index].health < 1 && (units[index].health + damage) != 1 && (units[index].abilitysteadfast === true || units[index].accessory === "Steadfast_Band")) {
                         units[index].health = 1;
                         $("#TEXT").append(units[index].name + " was saved by steadfast.</p>");
                     }
                     $(tempbar).remove();
                     $(temp).append('<div class="healthbar" id ="HB' + units[index].index + '"style="width: ' + (units[index].health / units[index].maxhealth) * 100 + '%"></div>');
                 };
                 $(temp).append('<p id="damage' + damagenum + '" style="position: absolute; font-size:40px; margin-top:-70px; margin-left:30px; color:white; font-weight:bold ">' + damage + '</p>');
                 $("#damage" + damagenum).delay(1000).effect("puff");
                 damagenum += 1;
                 //                if (units[index].health <= 0) {
                 //                    var temp="#"+index;
                 //                    $(temp).append("<img class='ailment' src='../Pictures/Effects/dying.gif'/>")
                 //                    setTimeout(function(){
                 //                        $(temp).remove()
                 //                    },1000)
                 //                    units[index].alive=false;
                 //                    units[index].group=-1;
                 //                    if(units[index].type==="Djinn"){
                 //
                 //                        if (slots[1] === index) {
                 //                            var templeft = units[slots[1]].curleft;
                 //                            var temptop = units[slots[1]].curtop;
                 //                            slots[1] = units[slots[1]].owner;
                 //                            units[slots[1]].captured="";
                 //                            units[slots[1]].curleft = templeft;
                 //                            units[slots[1]].curtop = temptop;
                 //                            $('#battlebackground').append('<div STYLE="position:absolute; TOP:' + temptop + 'px; LEFT:' + templeft + 'px;" class="unit"  id="' + slots[1] + '" ><img src="' + units[slots[1]].backpic + '"/></div>');
                 //                            $('#' + slots[1]).append('<div class="healthbar" id = "HB' + slots[1] + '" style="width: ' + (units[slots[1]].health / units[slots[1]].maxhealth) * 100 + '%"></div>');
                 //                        }
                 //                        if (slots[2] === index) {
                 //                            var templeft = units[slots[2]].curleft;
                 //                            var temptop = units[slots[2]].curtop;
                 //                            slots[2] = units[slots[2]].owner;
                 //                            units[slots[2]].captured="";
                 //                            units[slots[2]].curleft = templeft;
                 //                            units[slots[2]].curtop = temptop;
                 //                            $('#battlebackground').append('<div STYLE="position:absolute; TOP:' + temptop + 'px; LEFT:' + templeft + 'px;" class="unit"  id="' + slots[2] + '" ><img src="' + units[slots[2]].backpic + '"/></div>');
                 //                            $('#' + slots[2]).append('<div class="healthbar" id = "HB' + slots[2] + '" style="width: ' + (units[slots[2]].health / units[slots[2]].maxhealth) * 100 + '%"></div>');
                 //                        }
                 //                        if (slots[3] === index) {
                 //                            var templeft = units[slots[3]].curleft;
                 //                            var temptop = units[slots[3]].curtop;
                 //                            slots[3] = units[slots[3]].owner;
                 //                            units[slots[3]].captured="";
                 //                            units[slots[3]].curleft = templeft;
                 //                            units[slots[3]].curtop = temptop;
                 //                            $('#battlebackground').append('<div STYLE="position:absolute; TOP:' + temptop + 'px; LEFT:' + templeft + 'px;" class="unit"  id="' + slots[3] + '" ><img src="' + units[slots[3]].backpic + '"/></div>');
                 //                            $('#' + slots[3]).append('<div class="healthbar" id = "HB' + slots[3] + '" style="width: ' + (units[slots[3]].health / units[slots[3]].maxhealth) * 100 + '%"></div>');
                 //                        }
                 //                        getstatsbattle();
                 //                        clickactionbuttons();
                 //                    }
                 //                    if(units[index].type==="Golem"){
                 //                        units[index].type="Enchantress"
                 //                    }
                 //                }
             }

             function Dies(type, index) {
                 var temp = "#" + index;
                 $(temp).append("<img class='ailment' src='../Pictures/Effects/dying.gif'/>")
                 setTimeout(function () {
                     $(temp).remove()
                 }, 1000)
                 units[index].alive = false;
                 units[index].group = -1;
                 if (units[index].type === "Beast" || units[index].type === "Djinn") {
                     if (slots[1] === index) {
                         var templeft = units[slots[1]].curleft;
                         var temptop = units[slots[1]].curtop;
                         slots[1] = units[slots[1]].owner;
                         units[slots[1]].captured = "";
                         units[slots[1]].curleft = templeft;
                         units[slots[1]].curtop = temptop;
                         $('#battlebackground').append('<div STYLE="position:absolute; TOP:' + temptop + 'px; LEFT:' + templeft + 'px;" class="unit"  id="' + slots[1] + '" ><img src="' + units[slots[1]].backpic + '"/></div>');
                         $('#' + slots[1]).append('<div class="healthbar" id = "HB' + slots[1] + '" style="width: ' + (units[slots[1]].health / units[slots[1]].maxhealth) * 100 + '%"></div>');
                     }
                     if (slots[2] === index) {
                         var templeft = units[slots[2]].curleft;
                         var temptop = units[slots[2]].curtop;
                         slots[2] = units[slots[2]].owner;
                         units[slots[1]].captured = "";
                         units[slots[2]].curleft = templeft;
                         units[slots[2]].curtop = temptop;
                         $('#battlebackground').append('<div STYLE="position:absolute; TOP:' + temptop + 'px; LEFT:' + templeft + 'px;" class="unit"  id="' + slots[2] + '" ><img src="' + units[slots[2]].backpic + '"/></div>');
                         $('#' + slots[2]).append('<div class="healthbar" id = "HB' + slots[2] + '" style="width: ' + (units[slots[2]].health / units[slots[2]].maxhealth) * 100 + '%"></div>');
                     }
                     if (slots[3] === index) {
                         var templeft = units[slots[3]].curleft;
                         var temptop = units[slots[3]].curtop;
                         slots[3] = units[slots[3]].owner;
                         units[slots[1]].captured = "";
                         units[slots[3]].curleft = templeft;
                         units[slots[3]].curtop = temptop;
                         $('#battlebackground').append('<div STYLE="position:absolute; TOP:' + temptop + 'px; LEFT:' + templeft + 'px;" class="unit"  id="' + slots[3] + '" ><img src="' + units[slots[3]].backpic + '"/></div>');
                         $('#' + slots[3]).append('<div class="healthbar" id = "HB' + slots[3] + '" style="width: ' + (units[slots[3]].health / units[slots[3]].maxhealth) * 100 + '%"></div>');
                     }
                     getstatsbattle();
                     clickactionbuttons();
                 }
             }

             function charging(index) {
                 $("#TEXT").empty();
                 Chargesound.play();
                 $("#TEXT").append("<p>" + Eunits[index].name + "'s charge increased to  " + Eunits[index].charge + "\n</p>");
                 $("#ORBE" + +Eunits[index].index).remove();
                 $('#E' + index).append('<div id = "ORBE' + Eunits[index].index + '" style="color:yellow; position: absolute; font-size:20px; margin-top:-30px; margin-left:57px; width:10px; height:10px ">' + Eunits[index].charge + '</div>');
             }
             if (units[selectedindex].moved === true || units[selectedindex].usedaction === true) {
                 $('#' + selectedindex).addClass("lighticon");
             }
             if (units[selectedindex].moved === true && units[selectedindex].usedaction === true) {
                 $('#' + selectedindex).removeClass("lighticon");
                 $('#' + selectedindex).addClass("grayicon");
             }
             if (typeof indiv_moveunit == 'function') {
                 indiv_moveunit();
             }
         });
     }
     //select a unit///////////////////////////////////////////////////////////////////////////////
     var curtype = "";
     var selectedindex = -1;
     var selectedaction = "";

     function getstatsbattle() {
         $('.unit').click(function () {
             if (battleon === false) {
                 return;
             }
             //gives stats on selected unit
             for (var i = 0; i < index; i++) {
                 if (units[i].index === parseInt($(this).attr("id"), 10)) {
                     if (units[i].sleep > 0) {
                         $("#TEXT").append("This unit is asleep for " + units[i].sleep + " more turns.");
                         return;
                     }
                     $('#TEXT').empty();
                     $('#TEXT').append("<ul>Stats for " + units[i].name + " <li>Type: " + units[i].type + "</li> <li>Attack: " + (units[i].attack + units[i].attacktempboost) + "</li> <li>Defense: " + (units[i].defense + units[i].defensetempboost) + "</li><li>Resistance: " + units[i].resistance + "</li><li>Health: " + units[i].health + "</li></ul>");
                     curtype = units[i].type;
                     selectedindex = units[i].index;
                     $('*').removeClass("selectedUnit");
                     $(this).addClass("selectedUnit");
                     $("#TEXT").append('<div id="abilitycontainer"></div>').append('<div id="abilitycontainer2"></div><ul>ABILITIES</ul>');
                     if (units[selectedindex].type === "Soldier") {
                         $('#abilitycontainer').append("<div id='Soldier_Normal' class='ability'><img src='../Pictures/abilities/Soldier/Normal.png' /></div>");
                         $("#Soldier_Normal").click(function () {
                             message("Normal Attack: Deals damage equal to it's attack to an adjacent enemy.")
                         });
                         if (units[selectedindex].abilitydash === true) {
                             $('#abilitycontainer2').append("<div id='Soldier_Dash' class='ability'><img src='../Pictures/abilities/Soldier/Soldier_Dash.png' /></div>");
                             $("#Soldier_Dash").click(function () {
                                 message("Dash: The soldier may move an extra move as it's action for the turn.")
                             });
                         }
                         if (units[selectedindex].abilityimmunity === true) {
                             $('#abilitycontainer').append("<div id='Soldier_immunity' class='ability'><img src='../Pictures/abilities/Guard/Guard_immunity.png' /></div>");
                             $("#Soldier_immunity").click(function () {
                                 message("Immunity: Soldier is immune to all ailments")
                             });
                         }
                         if (units[selectedindex].abilitysteadfast === true) {
                             $('#abilitycontainer2').append("<div id='Soldier_Steadfast' class='ability'><img src='../Pictures/abilities/Soldier/Soldier_Steadfast.png' /></div>");
                             $("#Soldier_Steadfast").click(function () {
                                 message("Steadfast: If damage would kill the soldier, and it's life isn't 1, it will reduce it's life to 1 instead.")
                             });
                         }
                         if (units[selectedindex].abilitycounter === true) {
                             $('#abilitycontainer').append("<div id='Soldier_Counter' class='ability'><img src='../Pictures/abilities/Soldier/Soldier_counter.png' /></div>");
                             $("#Soldier_Counter").click(function () {
                                 message("Counter: Soldier counter-attacks at half damage to an enemy if it attacks with a closerange attack.")
                             });
                         }
                         if (units[selectedindex].abilitymedkit === true) {
                             $('#abilitycontainer2').append("<div id='Soldier_Medkit' class='ability'><img src='../Pictures/abilities/Soldier/Soldier_medkit.png' /></div>");
                             $("#Soldier_Medkit").click(function () {
                                 message("Medkit: Fully heals Soldier. He gets a new medkit whenever he visits the hospital.")
                             });
                         }
                     }
                     if (units[selectedindex].type === "Knight") {
                         $('#abilitycontainer').append("<div id='Knight_Normal' class='ability'><img src='../Pictures/abilities/Soldier/Normal.png' /></div>");
                         $("#Knight_Normal").click(function () {
                             message("Normal Attack: Deals damage equal to it's attack to an adjacent enemy.")
                         });
                         if (units[selectedindex].abilityswirl === true) {
                             $('#abilitycontainer2').append("<div id='Knight_Swirl' class='ability'><img src='../Pictures/abilities/Knight/Knight_Swirl.png' /></div>");
                             $("#Knight_Swirl").click(function () {
                                 message("Swirl: Deals damage to all adjacent enemies.")
                             });
                         }
                         if (units[selectedindex].abilitysweep === true) {
                             $('#abilitycontainer').append("<div id='Knight_sweep' class='ability'><img src='../Pictures/abilities/Knight/Knight_Sweep.png' /></div>");
                             $("#Knight_sweep").click(function () {
                                 message("Sweep: Attacks an enemy and the ones beside it.")
                             });
                         }
                         if (units[selectedindex].abilitypush === true) {
                             $('#abilitycontainer2').append("<div id='Knight_Push' class='ability'><img src='../Pictures/abilities/Knight/Knight_push.png' /></div>");
                             $("#Knight_Push").click(function () {
                                 message("Push: An attack that pushes an enemy back. Can only use if he hasn't moved this turn.")
                             });
                         }
                         if (units[selectedindex].abilityfreemove === true) {
                             $('#abilitycontainer').append("<div id='Knight_Freemove' class='ability'><img src='../Pictures/abilities/Knight/Knight_freemove.png' /></div>");
                             $("#Knight_Freemove").click(function () {
                                 message("Free Move: Moving no longer uses energy.")
                             });
                         }
                         if (units[selectedindex].abilitywail === true) {
                             $('#abilitycontainer2').append("<div id='Knight_Wail' class='ability'><img src='../Pictures/abilities/Knight/Knight_wail.png' /></div>");
                             $("#Knight_Wail").click(function () {
                                 message("Wail: Attack an adjacent enemy multiple takes based on remaining stamina. Each strike past the first has a chance of missing.")
                             });
                         }
                     }
                     if (units[selectedindex].type === "Thief" || units[selectedindex].type === "Invisible") {
                         $('#abilitycontainer').append("<div id='Thief_Steal' class='ability'><img src='../Pictures/abilities/Thief/Thief_Steal.png' /></div>");
                         $("#Thief_Steal").click(function () {
                             message("Mug/Steal: Steals from an adjacent enemy. The lower the enemy's health, the easier to steal. Mugging will make thief visible if invisible.")
                         });
                         if (units[selectedindex].abilityinvisible === true) {
                             $('#abilitycontainer2').append("<div id='Thief_Invisible' class='ability'><img src='../Pictures/abilities/Thief/Thief_Invisible.png' /></div>");
                             $("#Thief_Invisible").click(function () {
                                 message("Invisible: Thief is invisible and can't be attacked. Attacking will make the Thief visible for a turn.")
                             });
                         }
                         if (units[selectedindex].abilityphase === true) {
                             $('#abilitycontainer').append("<div id='Thief_Dodge' class='ability'><img src='../Pictures/abilities/Thief/Thief_phase.png' /></div>");
                             $("#Thief_Dodge").click(function () {
                                 message("Phase: Thief will switch places with an adjacent enemy and enfeeble it.")
                             });
                         }
                         if (units[selectedindex].abilitybackstab === true) {
                             $('#abilitycontainer2').append("<div id='Thief_Backstab' class='ability'><img src='../Pictures/abilities/Thief/Thief_backstab.png' /></div>");
                             $("#Thief_Backstab").click(function () {
                                 message("Backstab: Double damage if the thief is behind the enemy.")
                             });
                         }
                         if (units[selectedindex].abilityfirstblow === true) {
                             $('#abilitycontainer').append("<div id='Thief_FirstBlow' class='ability'><img src='../Pictures/abilities/Thief/Thief_firstblow.png' /></div>");
                             $("#Thief_FirstBlow").click(function () {
                                 message("Firstblow: Inflicts blindness for two turns to an enemy that hasn't been damaged.")
                             });
                         }
                         if (units[selectedindex].abilitybettersteal === true) {
                             $('#abilitycontainer2').append("<div id='Thief_bettersteal' class='ability'><img src='../Pictures/abilities/Thief/Thief_bettersteal.png' /></div>");
                             $("#Thief_bettersteal").click(function () {
                                 message("Superior Steal: Successfully steals every time.")
                             });
                         }
                     }
                     if (units[selectedindex].type === "Guard") {
                         $('#abilitycontainer').append("<div id='Guard_Bash' class='ability'><img src='../Pictures/abilities/Guard/Guard_Bash.png' /></div>");
                         $("#Guard_Bash").click(function () {
                             message("Bash: Deals damage equal to attack to an adjacent enemy.")
                         });
                         if (units[selectedindex].abilityprotect === true) {
                             $('#abilitycontainer2').append("<div id='Guard_Protect' class='ability'><img src='../Pictures/abilities/Guard/Guard_Protect.png' /></div>");
                             $("#Guard_Protect").click(function () {
                                 message("Protect: Protects an ally for the rest of the turn. A protected ally will have all damage redirected to the guard.")
                             });
                         }
                         if (units[selectedindex].abilityimmunity === true) {
                             $('#abilitycontainer').append("<div id='Guard_Immunity' class='ability'><img src='../Pictures/abilities/Guard/Guard_immunity.png' /></div>");
                             $("#Guard_Immunity").click(function () {
                                 message("Immunity: Guard, and whoever the guard is protecting, is immune to all ailments.")
                             });
                         }
                         if (units[selectedindex].abilityscout === true) {
                             $('#abilitycontainer2').append("<div id='Guard_Scout' class='ability'><img src='../Pictures/abilities/Guard/Guard_Scout.png' /></div>");
                             $("#Guard_Scout").click(function () {
                                 message("Scout: Groups with the guard will always go first.")
                             });
                         }
                         if (units[selectedindex].abilityreshield === true) {
                             $('#abilitycontainer').append("<div id='Guard_reshield' class='ability'><img src='../Pictures/abilities/Guard/Guard_Reshield.png' /></div>");
                             $("#Guard_reshield").click(function () {
                                 message("Reshield: Bash refills the guard's shield.")
                             });
                         }
                         if (units[selectedindex].abilityincreaseenergy === true) {
                             $('#abilitycontainer2').append("<div id='Guard_increaseenergy' class='ability'><img src='../Pictures/abilities/Guard/Guard_increaseenergy.png' /></div>");
                             $("#Guard_increaseenergy").click(function () {
                                 message("Super Shield: Guard starts with 50 Shield instead of 25.")
                             });
                         }
                     }
                     if (units[selectedindex].type === "Enchantress") {
                         $('#TEXT').append("<p style = 'margin-top: 250px; margin-left:30%'>Mana: " + units[selectedindex].mana + "</p>");
                         $('#abilitycontainer').append("<div id='Enchantress_absorb' class='ability'><img src='../Pictures/abilities/Enchantress/Enchantress_Absorb.png' /></div>");
                         $("#Enchantress_absorb").click(function () {
                             message("Converts an enemy's life into mana.")
                         });
                         if (units[selectedindex].abilitystorm === true) {
                             $('#abilitycontainer2').append("<div id='Enchantress_storm' class='ability'><img src='../Pictures/abilities/Enchantress/Enchantress_Storm.png' /></div>");
                             $("#Enchantress_storm").click(function () {
                                 message("Storm: Summons a storm that will help whenever the enchantress attacks.")
                             });
                         }
                         if (units[selectedindex].abilitytorment === true) {
                             $('#abilitycontainer').append("<div id='Enchantress_Torment' class='ability'><img src='../Pictures/abilities/Enchantress/Enchantress_Torment.png' /></div>");
                             $("#Enchantress_Torment").click(function () {
                                 message("Torment: Inflicts sleep, poison, and enfeeble for two turns.")
                             });
                         }
                         if (units[selectedindex].abilityiceFall === true) {
                             $('#abilitycontainer2').append("<div id='Enchantress_iceFall' class='ability'><img src='../Pictures/abilities/Enchantress/Enchantress_iceFall.png' /></div>");
                             $("#Enchantress_iceFall").click(function () {
                                 message("Ice Fall: A random enemy may will be hit by an ice sickle. The more enemies, the more likely a hit. Costs 50 mana.")
                             });
                         }
                         if (units[selectedindex].abilitybestow === true) {
                             $('#abilitycontainer').append("<div id='Enchantress_Attackboost' class='ability'><img src='../Pictures/abilities/Enchantress/Enchantress_bestow.png' /></div>");
                             $("#Enchantress_Attackboost").click(function () {
                                 message("Bestow: Doubles an ally's attack and made invincible for 1 turn. Costs 50 mana.")
                             });
                         }
                         if (units[selectedindex].abilityfireCircle === true) {
                             $('#abilitycontainer2').append("<div id='Enchantress_fireCircle' class='ability'><img src='../Pictures/abilities/Enchantress/Enchantress_fireCircle.png' /></div>");
                             $("#Enchantress_fireCircle").click(function () {
                                 message("Fire Circle: Enchants an ally with fire circle. Adjacent Enemies to that ally take fire damage every turn. Costs 50 mana.")
                             });
                         }
                     }
                     if (units[selectedindex].type === "Healer") {
                         $('#abilitycontainer').append("<div id='Healer_vigor' class='ability'><img src='../Pictures/abilities/Healer/Healer_Vigor.png' /></div>");
                         $("#Healer_vigor").click(function () {
                             message("Gives an ally an extra action.")
                         });
                         if (units[selectedindex].abilitymove === true) {
                             $('#abilitycontainer2').append("<div id='Healer_move' class='ability'><img src='../Pictures/abilities/Healer/Healer_move.png' /></div>");
                             $("#Healer_move").click(function () {
                                 message("Restore move: Vigor also allows the ally to move again.")
                             });
                         }
                         if (units[selectedindex].abilityheal === true) {
                             $('#abilitycontainer').append("<div id='Healer_Heal' class='ability'><img src='../Pictures/abilities/Healer/Healer_Heal.png' /></div>");
                             $("#Healer_Heal").click(function () {
                                 message("Heal: Heals an ally by 60 life.")
                             });
                         }
                         if (units[selectedindex].abilityreach === true) {
                             $('#abilitycontainer2').append("<div id='Healer_Reach' class='ability'><img src='../Pictures/abilities/Healer/Healer_Reach.png' /></div>");
                             $("#Healer_Reach").click(function () {
                                 message("Reach: Healer can use vigor and heal on any unit regardless of location.")
                             });
                         }
                         if (units[selectedindex].abilitycleanse === true) {
                             $('#abilitycontainer').append("<div id='Healer_cleanse' class='ability'><img src='../Pictures/abilities/Healer/Healer_cleanse.png' /></div>");
                             $("#Healer_cleanse").click(function () {
                                 message("Cleanse: Vigor and Heal also remove all ailments.")
                             });
                         }
                         if (units[selectedindex].abilitydoublevigor === true) {
                             $('#abilitycontainer2').append("<div id='Healer_doublevigor' class='ability'><img src='../Pictures/abilities/Healer/Healer_doublevigor.png' /></div>");
                             $("#Healer_doublevigor").click(function () {
                                 message("DoubleVigor: Both other allies get vigor instead of just one.")
                             });
                         }
                     }
                     if (units[selectedindex].type === "Mage") {
                         $('#abilitycontainer').append("<div id='Mage_Fire' class='ability'><img src='../Pictures/abilities/Mage/Mage_Fire.png' /></div>");
                         $("#Mage_Fire").click(function () {
                             message("Fire: Deals fire, magic damage equal to power to an enemy up to two spaces away or diagonally.")
                         });
                         if (units[selectedindex].abilityzap === true) {
                             $('#abilitycontainer2').append("<div id='Mage_zap' class='ability'><img src='../Pictures/abilities/Mage/Mage_Zap.png' /></div>");
                             $("#Mage_zap").click(function () {
                                 message("Zap: Deals lightning, magic damage to one or two enemys up to two spaces away.")
                             });
                         }
                         if (units[selectedindex].abilityfreeze === true) {
                             $('#abilitycontainer').append("<div id='Mage_freeze' class='ability'><img src='../Pictures/abilities/Mage/Mage_Freeze.png' /></div>");
                             $("#Mage_freeze").click(function () {
                                 message("Freeze: Deals ice, magic damage to an enemy up to three spaces away..")
                             });
                         }
                         if (units[selectedindex].abilityelementalailments === true) {
                             $('#abilitycontainer2').append("<div id='Mage_addailments' class='ability'><img src='../Pictures/abilities/Mage/Mage_Elementalailments.png' /></div>");
                             $("#Mage_addailments").click(function () {
                                 message("Elemental Ailments: Ice may cause sleep, fire may cause blindness, and lightning may cause immobolize.")
                             });
                         }
                         if (units[selectedindex].abilityexecute === true) {
                             $('#abilitycontainer').append("<div id='Mage_execute' class='ability'><img src='../Pictures/abilities/Mage/Mage_Execute.png' /></div>");
                             $("#Mage_execute").click(function () {
                                 message("Execute: Can instantly kill any enemy regardless of location. The lower the health, the more likely of success.")
                             });
                         }
                         if (units[selectedindex].abilitydoubletap === true) {
                             $('#abilitycontainer2').append("<div id='Mage_doubletap' class='ability'><img src='../Pictures/abilities/Mage/Mage_Doubletap.png' /></div>");
                             $("#Mage_doubletap").click(function () {
                                 message("Doubletap: Mage may do two actions instead of moving.")
                             });
                         }
                     }
                     if (units[selectedindex].type === "Wizard") {
                         $('#abilitycontainer').append("<div id='Wizard_Gust' class='ability'><img src='../Pictures/abilities/Wizard/Wizard_Gust.png' /></div>");
                         $("#Wizard_Gust").click(function () {
                             message("Gust: Deals ice, magic damage to any enemy and pushes it back a space. Costs 1 charge")
                         });
                         if (units[selectedindex].abilitybolt === true) {
                             $('#abilitycontainer2').append("<div id='Wizard_bolt' class='ability'><img src='../Pictures/abilities/Wizard/Wizard_Bolt.png' /></div>");
                             $("#Wizard_bolt").click(function () {
                                 message("Bolt: Deals X2 lightning, magic damage to any enemy. Costs 2 charge.")
                             });
                         }
                         if (units[selectedindex].abilitymissile === true) {
                             $('#abilitycontainer').append("<div id='Wizard_Missile' class='ability'><img src='../Pictures/abilities/Wizard/Wizard_Missile.png' /></div>");
                             $("#Wizard_Missile").click(function () {
                                 message("Missile: Deals fire, magic damage to any enemy in a straight line. Higher the charge, the more damage.")
                             });
                         }
                         if (units[selectedindex].abilityelementalailments === true) {
                             $('#abilitycontainer2').append("<div id='Mage_addailments' class='ability'><img src='../Pictures/abilities/Mage/Mage_Elementalailments.png' /></div>");
                             $("#Mage_addailments").click(function () {
                                 message("Elemental Ailments: Ice may cause sleep, fire may cause blindness, and lightning may cause immobolize.")
                             });
                         }
                         if (units[selectedindex].abilitydrain === true) {
                             $('#abilitycontainer').append("<div id='Wizard_Drain' class='ability'><img src='../Pictures/abilities/Wizard/Wizard_Drain.png' /></div>");
                             $("#Wizard_Drain").click(function () {
                                 message("Drain: Completely drains an adjacent enemy's charge, and refills wizard's charge by that amount.")
                             });
                         }
                         if (units[selectedindex].abilitystartcharge === true) {
                             $('#abilitycontainer2').append("<div id='Wizard_startcharge' class='ability'><img src='../Pictures/abilities/Wizard/Wizard_startcharge.png' /></div>");
                             $("#Wizard_startcharge").click(function () {
                                 message("Energized: Wizard starts with 2 charge.")
                             });
                         }
                     }
                     if (units[selectedindex].type === "Sorcerer") {
                         $('#abilitycontainer').append("<div id='Sorcerer_Blizzard' class='ability'><img src='../Pictures/abilities/Sorcerer/Sorcerer_blizzard.png' /></div>");
                         $("#Sorcerer_Blizzard").click(function () {
                             message("Deals ice, magic damage to all enemies. Costs 20 power.")
                         });
                         if (units[selectedindex].abilitylightning === true) {
                             $('#abilitycontainer2').append("<div id='Sorcerer_Lightning' class='ability'><img src='../Pictures/abilities/Wizard/Wizard_Bolt.png' /></div>");
                             $("#Sorcerer_Lightning").click(function () {
                                 message("Bolt: Deals X2 lightning, magic damage to any enemy. Costs 20 power.")
                             });
                         }
                         if (units[selectedindex].abilityfireblast === true) {
                             $('#abilitycontainer').append("<div id='Sorcerer_fireblast' class='ability'><img src='../Pictures/abilities/Sorcerer/Sorcerer_Fireblast.png' /></div>");
                             $("#Sorcerer_fireblast").click(function () {
                                 message("Fireblast: Deals X2 fire, magic damage to any enemy, and X1 damage to all enemies adjacent to that enemy. Costs 20 power")
                             });
                         }
                         if (units[selectedindex].abilitymanaincrease === true) {
                             $('#abilitycontainer2').append("<div id='Sorcerer_manaincrease' class='ability'><img src='../Pictures/abilities/Sorcerer/Sorcerer_manaincrease.png' /></div>");
                             $("#Sorcerer_manaincrease").click(function () {
                                 message("Power increase: Sorcerer will gain 10 power a turn instead of 5.")
                             });
                         }
                         if (units[selectedindex].abilityearth === true) {
                             $('#abilitycontainer').append("<div id='Sorcerer_earth' class='ability'><img src='../Pictures/abilities/Sorcerer/Sorcerer_Earth.png' /></div>");
                             $("#Sorcerer_earth").click(function () {
                                 message("Earth: Deals X2 physical damage to any enemy. Costs 20 power.")
                             });
                         }
                         if (units[selectedindex].abilitydeath === true) {
                             $('#abilitycontainer2').append("<div id='Sorcerer_Death' class='ability'><img src='../Pictures/abilities/Sorcerer/Sorcerer_Death.png' /></div>");
                             $("#Sorcerer_Death").click(function () {
                                 message("Death: Kill any enemy. Costs 50 power.")
                             });
                         }
                     }
                     if (units[selectedindex].type === "Archer") {
                         $('#abilitycontainer').append("<div id='Archer_normal' class='ability'><img src='../Pictures/abilities/Archer/Archer_Normal.png' /></div>");
                         $("#Archer_normal").click(function () {
                             message("Deals damage equal to it's attack to any enemy.")
                         });
                         if (units[selectedindex].abilityexplosion === true) {
                             $('#abilitycontainer2').append("<div id='Archer_Explode' class='ability'><img src='../Pictures/abilities/Archer/Archer_explosion.png' /></div>");
                             $("#Archer_Explode").click(function () {
                                 message("Exploding arrow: Deals fire damage to any enemy and all enemies next to it.")
                             });
                         }
                         if (units[selectedindex].abilitypierce === true) {
                             $('#abilitycontainer').append("<div id='Archer_pierce' class='ability'><img src='../Pictures/abilities/Archer/Archer_Pierce.png' /></div>");
                             $("#Archer_pierce").click(function () {
                                 message("Piercing Arrow: Deals damage equal to it's attack to any enemy and ignores defenses.")
                             });
                         }
                         if (units[selectedindex].abilityimmobolize === true) {
                             $('#abilitycontainer2').append("<div id='Archer_immobolize' class='ability'><img src='../Pictures/abilities/Archer/Archer_Immobilize.png' /></div>");
                             $("#Archer_immobolize").click(function () {
                                 message("Immobolize arrow: Inflict immobolize onto an enemy. I won't be able to move for two turns.")
                             });
                         }
                         if (units[selectedindex].abilitytitan === true) {
                             $('#abilitycontainer').append("<div id='Archer_Titan' class='ability'><img src='../Pictures/abilities/Archer/Archer_Titan.png' /></div>");
                             $("#Archer_Titan").click(function () {
                                 message("Titan arrow: Deals double damage to any enemy.")
                             });
                         }
                         if (units[selectedindex].abilitydoublearrows === true) {
                             $('#abilitycontainer2').append("<div id='Archer_doublearrows' class='ability'><img src='../Pictures/abilities/Rouge/Rouge_doublearrows.png' /></div>");
                             $("#Archer_doublearrows").click(function () {
                                 message("Double arrows: Arrow capacity doubled.")
                             });
                         }
                     }
                     if (units[selectedindex].type === "Rouge") {
                         $('#abilitycontainer').append("<div id='Rouge_Poison' class='ability'><img src='../Pictures/abilities/Rouge/Rouge_poison.png' /></div>");
                         $("#Rouge_Poison").click(function () {
                             message("Poison arrow: Inflicts poison on an enemy for 3 turns.")
                         });
                         if (units[selectedindex].abilityblindness === true) {
                             $('#abilitycontainer2').append("<div id='Archer_blindness' class='ability'><img src='../Pictures/abilities/Rouge/Rouge_Blindness.png' /></div>");
                             $("#Archer_blindness").click(function () {
                                 message("Blinding Arrow: Inflicts blindness on an enemy for 2 turns. It won't be able to use physical attacks.")
                             });
                         }
                         if (units[selectedindex].abilityenfeeble === true) {
                             $('#abilitycontainer').append("<div id='Rouge_Enfeeble' class='ability'><img src='../Pictures/abilities/Rouge/Rouge_enfeeble.png' /></div>");
                             $("#Rouge_Enfeeble").click(function () {
                                 message("Enfeeble Arrow: Inflicts enfeeble on an enemy for 2 turns. Attacks will ignore it's defenses.")
                             });
                         }
                         if (units[selectedindex].abilitysleep === true) {
                             $('#abilitycontainer2').append("<div id='Rouge_sleep' class='ability'><img src='../Pictures/abilities/Rouge/Rouge_Sleep.png' /></div>");
                             $("#Rouge_sleep").click(function () {
                                 message("Sleep Arrow: Puts an enemy to sleep for 1 turns.")
                             });
                         }
                         if (units[selectedindex].abilityailmentduration === true) {
                             $('#abilitycontainer').append("<div id='Rouge_duration' class='ability'><img src='../Pictures/abilities/Rouge/Rouge_ailmentduration.png' /></div>");
                             $("#Rouge_duration").click(function () {
                                 message("Ailment Duration: All ailments inflicted on an enemy will last an extra turn.")
                             });
                         }
                         if (units[selectedindex].abilitydoublearrows === true) {
                             $('#abilitycontainer2').append("<div id='Archer_doublearrows' class='ability'><img src='../Pictures/abilities/Rouge/Rouge_doublearrows.png' /></div>");
                             $("#Archer_doublearrows").click(function () {
                                 message("Double arrows: Arrow capacity doubled.")
                             });
                         }
                     }
                     if (units[selectedindex].type === "Templar") {
                         $('#abilitycontainer').append("<div id='Templar_silence' class='ability'><img src='../Pictures/abilities/Templar/Templar_silence.png' /></div>");
                         $("#Templar_silence").click(function () {
                             message("Silencing Arrow: Inflicts silence on an enemy for 2 turns. It can't use magic attacks")
                         });
                         if (units[selectedindex].abilitygrapplinghook === true) {
                             $('#abilitycontainer2').append("<div id='Templar_hook' class='ability'><img src='../Pictures/abilities/Templar/Templar_grapplinghook.png' /></div>");
                             $("#Templar_hook").click(function () {
                                 message("Grappling Hook: Pulls an enemy to the templar.")
                             });
                         }
                         if (units[selectedindex].abilityburst === true) {
                             $('#abilitycontainer').append("<div id='Templar_burst' class='ability'><img src='../Pictures/abilities/Templar/Templar_burst.png' /></div>");
                             $("#Templar_burst").click(function () {
                                 message("Burst Arrow: Deals damage equal to attack plus the enemy's resistance.")
                             });
                         }
                         if (units[selectedindex].abilityelemental === true) {
                             $('#abilitycontainer2').append("<div id='Templar_elemental' class='ability'><img src='../Pictures/abilities/Templar/Templar_elemental.png' /></div>");
                             $("#Templar_elemental").click(function () {
                                 message("Elemental: You can select an element that will be added to it's attacks.")
                             });
                         }
                         if (units[selectedindex].abilitydisrupt === true) {
                             $('#abilitycontainer').append("<div id='Templar_disrupt' class='ability'><img src='../Pictures/abilities/Templar/Templar_Disrupt.png' /></div>");
                             $("#Templar_disrupt").click(function () {
                                 message("Disrupting Arrow: Reduce all enemies' charge to 0.")
                             });
                         }
                         if (units[selectedindex].abilitydoublearrows === true) {
                             $('#abilitycontainer2').append("<div id='Archer_doublearrows' class='ability'><img src='../Pictures/abilities/Rouge/Rouge_doublearrows.png' /></div>");
                             $("#Archer_doublearrows").click(function () {
                                 message("Double arrows: Arrow capacity doubled.")
                             });
                         }
                     }
                 }
                 //shows buttons//////////////////////////////////
                 $('*').removeClass('battlehighlight');

                 function checktypes(type) {
                     if (units[slots[1]].type == type || units[slots[2]].type == type || units[slots[3]].type == type) {
                         return true;
                     }
                     else {
                         return false;
                     }
                 }
                 switch (curtype) {
                 case "Mimic":
                     $('.actions').empty();
                     $('.actions').append("<select class = 'options' id='mimicchoice' style='position:absolute; margin-left:5px; margin-right:40px; margin-top: 2px; width:110px;'></select><div class = 'actionbutton' style='position:absolute; margin-top:30px; margin-left:5px' id = 'mimicAttack'>Use</div>");
                     if (checktypes("Wizard")) {
                         $('.actions').append("<div class = 'actionbutton' style='position:absolute; margin-left:130px;' id = 'wizardCharge'>Charge</div>")
                     }
                     if (units[selectedindex].level >= 1 || units[selectedindex].level == "-") {
                         if (checktypes("Rouge")) {
                             $('#mimicchoice').append(new Option('Straight-Arrow', 'Straight-Arrow'));
                             $('#mimicchoice').append(new Option('Poison(' + units[selectedindex].usedpoison + ')', 'Poison'));
                         }
                         if (checktypes("Templar")) {
                             $('#mimicchoice').append(new Option('Straight-Arrow', 'Straight-Arrow'));
                             $('#mimicchoice').append(new Option('Silence(' + units[selectedindex].usedsilence + ')', 'Silence'));
                         }
                         if (checktypes("Archer")) {
                             $('#mimicchoice').append(new Option('Arrow', 'Arrow'));
                         }
                         if (checktypes("Mage")) {
                             $('#mimicchoice').append(new Option('Fire', 'Fire'));
                         }
                         if (checktypes("Wizard")) {
                             $('#mimicchoice').append(new Option('Gust(1)', 'Gust(1)'));
                         }
                         if (checktypes("Guard") && typeof (braceActive) != "undefined") {
                             $('#mimicchoice').append(new Option('Brace', 'Brace'));
                         }
                         if (checktypes("Sorcerer") && typeof (ultimateActive) != "undefined") {
                             $('#mimicchoice').append(new Option('Blood-Sacrifice', 'Blood-Sacrifice'));
                         }
                         if (units[selectedindex].ultimate == true) {
                             $('#mimicchoice').append(new Option('Ultimate', 'Ultimate'));
                         }
                         if (checktypes("Healer")) {
                             $('#mimicchoice').append(new Option('Vigor', 'Vigor'));
                         }
                         if (checktypes("Soldier") || checktypes("Thief")) {
                             $('#mimicchoice').append(new Option('Sword', 'Sword'));
                         }
                         if (checktypes("Knight")) {
                             $('#mimicchoice').append(new Option('Knight-Sword', 'Knight-Sword'));
                         }
                     }
                     if (units[selectedindex].level >= 2 || units[selectedindex].level == "-") {
                         if (checktypes("Rouge")) {
                             $('#mimicchoice').append(new Option('Blindness(' + units[selectedindex].usedblindness + ')', 'Blindness'));
                         }
                         if (checktypes("Templar")) {
                             $('#mimicchoice').append(new Option('Grappling_Hook(' + units[selectedindex].usedgrappling + ')', 'Grappling_Hook'));
                         }
                         if (checktypes("Archer")) {
                             $('#mimicchoice').append(new Option('Exploding(' + units[selectedindex].usedexploding + ')', 'Exploding'));
                         }
                         if (checktypes("Guard")) {
                             $('#mimicchoice').append(new Option('Protect', 'Protect'));
                         }
                         if (checktypes("Knight")) {
                             $('#mimicchoice').append(new Option('Swirl', 'Swirl'));
                         }
                         if (checktypes("Mage")) {
                             $('#mimicchoice').append(new Option('Zap', 'Zap'));
                         }
                         if (checktypes("Wizard")) {
                             $('#mimicchoice').append(new Option('Bolt(2)', 'Bolt(2)'));
                         }
                     }
                     if (units[selectedindex].level >= 3 || units[selectedindex].level == "-") {
                         if (checktypes("Rouge")) {
                             $('#mimicchoice').append(new Option('Enfeeble(' + units[selectedindex].usedenfeeble + ')', 'Enfeeble'));
                         }
                         if (checktypes("Archer")) {
                             $('#mimicchoice').append(new Option('Piercing(' + units[selectedindex].usedpierce + ')', 'Piercing'));
                         }
                         if (checktypes("Knight")) {
                             $('#mimicchoice').append(new Option('Sweep', 'Sweep'));
                         }
                         if (checktypes("Mage")) {
                             $('#mimicchoice').append(new Option('Freeze', 'Freeze'));
                         }
                         if (checktypes("Wizard")) {
                             $('#mimicchoice').append(new Option('Missile(X)', 'Missile(X)'));
                         }
                     }
                     if (units[selectedindex].level >= 4 || units[selectedindex].level == "-") {
                         if (checktypes("Rouge")) {
                             $('#mimicchoice').append(new Option('Sleep(' + units[selectedindex].usedsleep + ')', 'Sleep'));
                         }
                         if (checktypes("Templar")) {
                             $('#mimicchoice').append(new Option('Disrupt(' + units[selectedindex].useddisrupt + ')', 'Disrupt'));
                         }
                         if (checktypes("Archer")) {
                             $('#mimicchoice').append(new Option('Immobolize(' + units[selectedindex].usedimmobolize + ')', 'Immobolize'));
                         }
                     }
                     if (units[selectedindex].level >= 5 || units[selectedindex].level == "-") {
                         if (checktypes("Templar")) {
                             $('#mimicchoice').append(new Option('Burst(' + units[selectedindex].usedburst + ')', 'Burst'));
                         }
                         if (checktypes("Archer")) {
                             $('#mimicchoice').append(new Option('Titan(' + units[selectedindex].usedtitan + ')', 'Titan'));
                         }
                         if (checktypes("Knight")) {
                             $('#mimicchoice').append(new Option('Push', 'Push'));
                         }
                         if (checktypes("Mage")) {
                             $('#mimicchoice').append(new Option('Execute', 'Execute'));
                         }
                         if (checktypes("Wizard")) {
                             $('#mimicchoice').append(new Option('Drain', 'Drain'));
                         }
                     }
                     if (units[selectedindex].level == "-") {}
                     if (units[selectedindex].medkit === true) {
                         $('#soldierchoice').append(new Option('Medkit'));
                     }
                     $('#mimicAttack').addClass('battlehighlight');
                     selectedaction = 'mimicAttack';
                     traincommands(selectedindex);
                     clickactionbuttons();
                     break;
                 case "Soldier":
                     tipmessage("Soldier", "This is a soldier. He is a well balanced close ranged fighter. It has a decent defense against physical damage, but it has a low resistance against magic.");
                     $('.actions').empty();
                     $('.actions').append("<select class = 'options' id='soldierchoice' style='position:absolute; margin-left:5px; margin-right:40px; margin-top: 2px; width:110px;'><option value = 'Normal'>Normal</option></select><div class = 'actionbutton' style='position:absolute; margin-top:30px; margin-left:5px' id = 'soldierAttack'>Use</div>");
                     if (units[selectedindex].medkit === true) {
                         $('#soldierchoice').append(new Option('Medkit'));
                     }
                     $('#soldierAttack').addClass('battlehighlight');
                     selectedaction = 'soldierAttack';
                     traincommands(selectedindex);
                     clickactionbuttons();
                     break;
                 case "Knight":
                     tipmessage("Knight", "This is a Knight. He is a master of the close range with it's high attack and high defense against physical damage, but it has a low resistance against magic. Moving and attacking uses stamina. End a turn without using him to restore stamina.");
                     $('.actions').empty();
                     $('.actions').append("<select class = 'options' id='knightchoice' style='position:absolute; margin-left:5px; margin-right:40px; margin-top: 2px; width:110px;'><option value = 'Normal'>Normal</option></select><div class = 'actionbutton' style='position:absolute; margin-top:30px; margin-left:5px' id = 'knightAttack'>Attack</div>");
                     if (units[selectedindex].abilitypush === true) {
                         $('#knightchoice').append(new Option('Push'));
                     }
                     if (units[selectedindex].abilityswirl === true) {
                         $('#knightchoice').append(new Option('Swirl'));
                     }
                     if (units[selectedindex].abilitysweep === true) {
                         $('#knightchoice').append(new Option('Sweep'));
                     }
                     if (units[selectedindex].abilitywail === true) {
                         $('#knightchoice').append(new Option('Wail'));
                     }
                     $('#knightAttack').addClass('battlehighlight');
                     selectedaction = 'knightAttack';
                     traincommands(selectedindex);
                     clickactionbuttons();
                     break;
                 case "Thief":
                 case "Invisible":
                     $('.actions').empty();
                     var tempoption = "Normal";
                     if (units[selectedindex].abilitymug === true) {
                         tempoption = "Mug"
                     }
                     $('.actions').append("<select class = 'options' id='thiefchoice' style='position:absolute; margin-left:5px; margin-right:40px; margin-top: 2px; width:110px;'><option value = '" + tempoption + "'>" + tempoption + "</option></select><div class = 'actionbutton' style='position:absolute; margin-top:30px; margin-left:5px' id = 'thiefAttack'>Attack</div>");
                     $('#thiefchoice').append(new Option('Steal'));
                     if (units[selectedindex].abilityphase === true) {
                         $('#thiefchoice').append(new Option('Phase'));
                     }
                     $('#thiefAttack').addClass('battlehighlight');
                     selectedaction = 'thiefAttack';
                     traincommands(selectedindex);
                     clickactionbuttons();
                     break;
                 case "Enchantress":
                     tipmessage("Enchantress", "This is an enchantress. She is a support unit that can absorb mana from enemy. The closer, the more it will absorb.");
                     $('.actions').empty();
                     $('.actions').append("<select class = 'options' id='enchantresschoice' style='position:absolute; margin-left:5px; margin-right:40px; margin-top: 2px; width:110px;'><option value = 'Absorb'>Absorb</option></select><div class = 'actionbutton' style='position:absolute; margin-top:30px; margin-left:5px' id = 'enchantressUse'>Use</div>");
                     if (units[selectedindex].abilitybestow === true) {
                         $('#enchantresschoice').append(new Option('Bestow(50)'));
                     }
                     if (units[selectedindex].abilitytorment === true) {
                         $('#enchantresschoice').append(new Option('Torment(50)'));
                     }
                     if (units[selectedindex].abilityfireCircle === true) {
                         $('#enchantresschoice').append(new Option('Fire_Circle(50)'));
                     }
                     if (units[selectedindex].abilitystorm === true) {
                         $('#enchantresschoice').append(new Option('Storm(30)'));
                     }
                     if (units[selectedindex].abilityiceFall === true) {
                         $('#enchantresschoice').append(new Option('Ice_Fall(50)'));
                     }
                     $('#enchantressUse').addClass('battlehighlight');
                     selectedaction = 'enchantressUse';
                     traincommands(selectedindex);
                     clickactionbuttons();
                     break;
                 case "Healer":
                     tipmessage("Healer", "This is a healer. She gets energy whenever she rests. Use that energy to heal your units or use vigor to give them extra turns.");
                     $('.actions').empty();
                     $('.actions').append("<select class = 'options' id='healerchoice' style='position:absolute; margin-left:5px; margin-right:40px; margin-top: 2px; width:110px;'></select><div class = 'actionbutton' style='position:absolute; margin-top:30px; margin-left:5px' id = 'healerUse'>Use</div>");
                     $('#healerchoice').append(new Option('Vigor'));
                     if (units[selectedindex].abilityheal === true) {
                         $('#healerchoice').append(new Option('Heal(10)'));
                     }
                     $('#healerUse').addClass('battlehighlight');
                     selectedaction = 'healerUse';
                     traincommands(selectedindex);
                     clickactionbuttons();
                     break;
                 case "Spider":
                     $('.actions').empty();
                     $('.actions').append("<div class = 'actionbutton' style='position:absolute; margin-top:30px; margin-left:5px' id = 'web'>Web</div>");
                     $('#web').addClass('battlehighlight');
                     selectedaction = 'web';
                     traincommands(selectedindex);
                     clickactionbuttons();
                     break
                 case "Djinn":
                 case "Golem":
                 case "Bear":
                 case "Turtle":
                 case "Wolf":
                 case "Sparrow":
                     $('.actions').empty();
                     $('.actions').append("<div class = 'actionbutton' id = 'DjinnAttack'>Attack</div>");
                     $('#DjinnAttack').addClass('battlehighlight');
                     selectedaction = 'DjinnAttack';
                     clickactionbuttons();
                     break;
                 case "Rouge":
                     tipmessage("Rouge", "This is a Rouge. It is a master of poisons with it's bow. It can attack any enemy that's in a straight line.");
                     $('.actions').empty();
                     $('.actions').append("<select class = 'options' id='rougechoice' style='position:absolute; margin-left:5px; margin-right:40px; margin-top: 2px; width:110px;'><option value = 'Normal'>Normal</option><option value = 'Poison'>Poison(" + units[selectedindex].usedpoison + ")</option></select><div class = 'actionbutton' style='position:absolute; margin-top:30px; margin-left:5px' id = 'rougeAttack'>Attack</div>");
                     if (units[selectedindex].abilityblindness === true) {
                         $('#rougechoice').append(new Option('Blindness(' + units[selectedindex].usedblindness + ')', 'Blindness'));
                     }
                     if (units[selectedindex].abilitysleep === true) {
                         $('#rougechoice').append(new Option('Sleep(' + units[selectedindex].usedsleep + ')', 'Sleep'));
                     }
                     if (units[selectedindex].abilityenfeeble === true) {
                         $('#rougechoice').append(new Option('Enfeeble(' + units[selectedindex].usedenfeeble + ')', 'Enfeeble'));
                     }
                     $('#rougeAttack').addClass('battlehighlight');
                     selectedaction = 'rougeAttack';
                     traincommands(selectedindex);
                     clickactionbuttons();
                     break;
                 case "Templar":
                     tipmessage("Templar", "This is a Templar. He is a terror for any with magic with it's high resistance and anti-magic attacks. It can attack any enemy that's in a straight line.");
                     $('.actions').empty();
                     $('.actions').append("<select class = 'options' id='templarchoice' style='position:absolute; margin-left:5px; margin-right:40px; margin-top: 2px; width:110px;'><option value = 'Normal'>Normal</option><option value = 'Silence'>Silence(" + units[selectedindex].usedsilence + ")</option></select><div class = 'actionbutton' style='position:absolute; margin-top:30px; margin-left:5px' id = 'templarAttack'>Attack</div>");
                     if (units[selectedindex].abilityelemental === true) {
                         $('.actions').append("<p style='position:absolute; margin-left:130px; margin-top: 10px; width:110px;'>Choose Element</p>");
                         $('.actions').append("<select class='options' id='elemental' style='position:absolute; margin-left:130px; margin-top: 32px; width:110px;'><option value = 'Fire'>Fire</option><option value = '<Lightning'>Lightning</option><option value = 'Ice'>Ice</option></select>");
                     }
                     if (units[selectedindex].abilityburst === true) {
                         $('#templarchoice').append(new Option('Burst(' + units[selectedindex].usedburst + ')', 'Burst'));
                     }
                     if (units[selectedindex].abilitydisrupt === true) {
                         $('#templarchoice').append(new Option('Disrupt(' + units[selectedindex].useddisrupt + ')', 'Disrupt'));
                     }
                     if (units[selectedindex].abilitygrapplinghook === true) {
                         $('#templarchoice').append(new Option('Grappling_Hook(' + units[selectedindex].usedgrappling + ')', 'Grappling_Hook'));
                     }
                     $('#templarAttack').addClass('battlehighlight');
                     selectedaction = 'templarAttack';
                     traincommands(selectedindex);
                     clickactionbuttons();
                     break;
                 case "Archer":
                     tipmessage("Archer", "This is an Archer. She is a master of the long range. It can attack any enemy regardless of location.");
                     $('.actions').empty();
                     $('.actions').append("<select class = 'options' id='archerchoice' style='position:absolute; margin-left:5px; margin-right:40px; margin-top: 2px; width:110px;'><option value = 'Normal'>Normal</select><div class = 'actionbutton' style='position:absolute; margin-top:30px; margin-left:5px' id = 'archerAttack'>Attack</div>");
                     if (units[selectedindex].abilityexplosion === true) {
                         $('#archerchoice').append(new Option('Exploding(' + units[selectedindex].usedexploding + ')', 'Exploding'));
                     }
                     if (units[selectedindex].abilitypierce === true) {
                         $('#archerchoice').append(new Option('Pierce(' + units[selectedindex].usedpierce + ')', 'Piercing'));
                     }
                     if (units[selectedindex].abilityimmobolize === true) {
                         $('#archerchoice').append(new Option('Immobolize(' + units[selectedindex].usedimmobolize + ')', 'Immobolize'));
                     }
                     if (units[selectedindex].abilitytitan === true) {
                         $('#archerchoice').append(new Option('Titan(' + units[selectedindex].usedtitan + ')', 'Titan'));
                     }
                     $('#archerAttack').addClass('battlehighlight');
                     selectedaction = 'archerAttack';
                     traincommands(selectedindex);
                     clickactionbuttons();
                     break;
                 case "Guard":
                     $('.actions').empty();
                     $('.actions').append("<select class = 'options' id='guardchoice' style='position:absolute; margin-left:5px; margin-right:40px; margin-top: 2px; width:110px;'><option value = 'Bash'>Bash</option></select><div class = 'actionbutton' style='position:absolute; margin-top:30px; margin-left:5px' id = 'guardUse'>Use</div></div>");
                     if (units[selectedindex].abilityprotect === true) {
                         $('#guardchoice').append(new Option('Protect'));
                     }
                     if (typeof (braceActive) != "undefined") {
                         $('#guardchoice').append(new Option('Brace'));
                     }
                     $('#guardUse').addClass('battlehighlight');
                     selectedaction = 'guardUse';
                     traincommands(selectedindex);
                     clickactionbuttons();
                     break;
                 case "Mage":
                     tipmessage("Mage", "This is a Mage. She is a master of short-range magic. It can attack enemies up to two spaces away, and it's fire can attack diagonally.");
                     $('.actions').empty();
                     $('.actions').append("<select class = 'options' id='magechoice' style='position:absolute; margin-left:5px; margin-right:40px; margin-top: 2px; width:110px;'><option value = 'Fire'>Fire</option></select><div class = 'actionbutton' style='position:absolute; margin-top:30px; margin-left:5px' id = 'mageCast'>Cast</div>");
                     if (units[selectedindex].abilityzap === true) {
                         $('#magechoice').append(new Option('Zap'));
                     }
                     if (units[selectedindex].abilityfreeze === true) {
                         $('#magechoice').append(new Option('Freeze'));
                     }
                     if (units[selectedindex].abilityexecute === true) {
                         $('#magechoice').append(new Option('Execute'));
                     }
                     $('#mageCast').addClass('battlehighlight');
                     selectedaction = 'mageCast';
                     traincommands(selectedindex);
                     clickactionbuttons();
                     break;
                 case "Wizard":
                     tipmessage("Wizard", "This is a wizard. He is a master of long-range magic. It can attack at any enemy regardless of location using magic/elemental attacks, but those attacks require charging first, shown inside that purple orb.");
                     $('.actions').empty();
                     $('.actions').append("<select class = 'options' id='wizardchoice' style='position:absolute; margin-left:5px; margin-right:40px; margin-top: 2px; width:110px;'><option value = 'Gust'>Gust(1)</option></select><div class = 'actionbutton' style='position:absolute; margin-top:30px; margin-left:5px' id = 'wizardCast'>Cast</div><div class = 'actionbutton' style='position:absolute; margin-left:130px;' id = 'wizardCharge'>Charge</div>");
                     if (units[selectedindex].abilitybolt === true) {
                         $('#wizardchoice').append(new Option('Bolt(2)'));
                     }
                     if (units[selectedindex].abilitymissile === true) {
                         $('#wizardchoice').append(new Option('Missile(X)'));
                     }
                     if (units[selectedindex].abilitydrain === true) {
                         $('#wizardchoice').append(new Option('Drain'));
                     }
                     $('#wizardCast').addClass('battlehighlight');
                     selectedaction = 'wizardCast';
                     traincommands(selectedindex);
                     clickactionbuttons();
                     break;
                 case "Sorcerer":
                     tipmessage("Sorcerer", "This is a sorcerer. He is the master of long-range magic. It can attack at any enemy regardless of location using magic/elemental attacks, but those attacks require power shown in blue. It will increase every day.");
                     $('.actions').empty();
                     $('.actions').append("<select class = 'options' id='sorcererchoice' style='position:absolute; margin-left:5px; margin-right:40px; margin-top: 2px; width:110px;'><option value = 'Blizzard'>Blizzard(20)</option></select><div class = 'actionbutton' style='position:absolute; margin-top:30px; margin-left:5px' id = 'sorcererCast'>Cast</div>");
                     if (units[selectedindex].abilitylightning === true) {
                         $('#sorcererchoice').append(new Option('Lightning(20)'));
                     }
                     if (units[selectedindex].abilityfireblast === true) {
                         $('#sorcererchoice').append(new Option('Fireblast(30)'));
                     }
                     if (units[selectedindex].abilityearth === true) {
                         $('#sorcererchoice').append(new Option('Earth(20)'));
                     }
                     if (typeof (ultimateActive) != "undefined") {
                         if (units[selectedindex].ultimate === true) {
                             $('#sorcererchoice').append(new Option('Ultimate'));
                         }
                         else {
                             $('#sorcererchoice').append(new Option('Blood-Sacrifice'));
                         }
                     }
                     if (units[selectedindex].abilitydeath === true) {
                         $('#sorcererchoice').append(new Option('Death(50)'));
                     }
                     $('#sorcererCast').addClass('battlehighlight');
                     selectedaction = 'sorcererCast';
                     traincommands(selectedindex);
                     clickactionbuttons();
                     break;
                 } //end of switch
                 if (typeof indiv_clickUnit == 'function') {
                     indiv_clickUnit();
                 }
             }
         });
         $('.Eunit').click(function () {
             //gives stats on selected unit
             for (var i = 0; i < Eindex; i++) {
                 var temp = $(this).attr("id").replace("E", "");
                 if (Eunits[i].index === parseInt(temp, 10)) {
                     $('#TEXT').empty();
                     $('#TEXT').append("<ul>Stats for " + Eunits[i].name + " <li>Type: " + Eunits[i].type + "</li> <li>Attack: " + Eunits[i].attack + "</li> <li>Defense: " + Eunits[i].defense + "</li><li>Resistance: " + Eunits[i].resistance + "</li><li>Health: " + Eunits[i].health + "</li><li>" + Eunits[i].description + "</li></ul>");
                 }
             }
         });
     }
     //Click on stuff////////////////////////////////////////////////////////////////////////////
     function youwin() {
         setTimeout(function () {
             if (battleon === false) {
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
             var curlocation = Egroups[curenemy].location;
             liberate(Egroups[curenemy].location);
             $("#battlebackground").empty();
             $(".actionbutton").remove();
             $(".actions").empty();
             $(".battleareas").remove();
             $("#EM" + curenemy).remove();
             Egroups[curenemy].location = -2;
             for (var a = 1; a < 4; a++) {
                 if (units[slots[a]].type === "Invisible" || units[slots[a]].type === "Golem") {
                     units[slots[a]].type = units[slots[a]].realtype;
                 }
             }
             if (units[slots[1]].alive === true) {
                 var templevel = units[slots[1]].level
                 levelup(1);
                 $("#battlebackground").append("<div class= 'levelup' id = 'levelup'" + 1 + "><img class='barrackpic'' src='" + units[slots[1]].image + "'/><p style=' margin-left:10px; font-size:25px; font-family:bold'' class='leveling'>" + units[slots[1]].name + "</p><p style='margin-left:10px; font-size:25px; font-family:bold'' class='leveling'>LEVEL: " + units[slots[1]].level + "</p><p style='margin-top: -60px; margin-left:250px; font-size:35px; font-family:bold'' class='level'>Experience: " + units[slots[1]].experience + "</p></div>");
                 if (templevel < units[slots[1]].level) {
                     $("#battlebackground").append("<img class='leveluppic' src='../Pictures/levelup.png'/>")
                 }
             }
             if (units[slots[2]].alive === true) {
                 var templevel = units[slots[2]].level
                 levelup(2);
                 $("#battlebackground").append("<div class= 'levelup' id = 'levelup'" + 2 + "><img class='barrackpic'' src='" + units[slots[2]].image + "'/><p style=' margin-left:10px; font-size:25px; font-family:bold'' class='leveling'>" + units[slots[2]].name + "</p><p style='margin-left:10px; font-size:25px; font-family:bold'' class='leveling'>LEVEL: " + units[slots[2]].level + "</p><p style='margin-top: -60px; margin-left:250px; font-size:35px; font-family:bold'' class='level'>Experience: " + units[slots[2]].experience + "</p></div>");
                 if (templevel < units[slots[2]].level) {
                     $("#battlebackground").append("<img class='leveluppic' src='../Pictures/levelup.png'/>")
                 }
             }
             if (units[slots[3]].alive === true) {
                 var templevel = units[slots[3]].level
                 levelup(3);
                 $("#battlebackground").append("<div class= 'levelup' id = 'levelup'" + 3 + "><img class='barrackpic'' src='" + units[slots[3]].image + "'/><p style=' margin-left:10px; font-size:25px; font-family:bold'' class='leveling'>" + units[slots[3]].name + "</p><p style='margin-left:10px; font-size:25px; font-family:bold'' class='leveling'>LEVEL: " + units[slots[3]].level + "</p><p style='margin-top: -60px; margin-left:250px; font-size:35px; font-family:bold'' class='level'>Experience: " + units[slots[3]].experience + "</p></div>");
                 if (templevel < units[slots[3]].level) {
                     $("#battlebackground").append("<img class='leveluppic' src='../Pictures/levelup.png'/>")
                 }
             }
             $("#battlebackground").append("<p style='margin-left:30%; font-size:30px'>Click to continue</p>");
             var rand = Math.floor((Math.random() * 3) + 2);
             for (var i = 1; i < rand; i++) {
                 lootenemyfunction();
             }
             $('#battlebackground').click(function () {
                 if (typeof indiv_youwin == 'function') {
                     indiv_youwin(curlocation);
                 }
                 $('#battlebackground').remove();
                 startcombat();
             });
             battleon = false;
             presspass();
         }, 1000)
     }

     function isNumeric(n) {
         return !isNaN(parseFloat(n)) && isFinite(n);
     }
     var dir;

     function attackbadguy() {
         $('.Eunit').mousedown(function (e) {
             $("#TEXT").empty();
             if (battleon === false || inanimation) {
                 return;
             }
             if (e.button === 2) {
                 //determine enemy's number
                 for (var i = 0; i < Eindex; i++) {
                     var temp = this.id;
                     temp = temp.replace("E", "");
                     if (Eunits[i].index === parseInt(temp, 10)) {
                         enemyindex = i;
                     }
                 }
                 var elementalNum = 1;
                 //determine whether this unit did an action this turn
                 if (units[selectedindex].usedaction === true && !(units[selectedindex].abilitydoubletap === true && units[selectedindex].moved === false)) {
                     $("#TEXT").append("<p>" + units[selectedindex].name + " has already used an action this turn</p>");
                     return;
                 }
                 //change directional pic
                 var dirleft = units[selectedindex].curleft - Eunits[enemyindex].curleft;
                 var dirtop = units[selectedindex].curtop - Eunits[enemyindex].curtop;
                 if (Math.abs(dirleft) >= Math.abs(dirtop)) {
                     if (dirleft > 0) {
                         dir = units[selectedindex].leftpic;
                     }
                     else {
                         dir = units[selectedindex].rightpic;
                     }
                 }
                 else {
                     if (dirtop > 0) {
                         dir = units[selectedindex].backpic;
                     }
                     else {
                         dir = units[selectedindex].image;
                     }
                 }
                 setTimeout(function () {
                     if (units[selectedindex].usedaction) {
                         $("#" + selectedindex + " .dirpic").attr("src", dir);
                         showailments()
                     }
                 }, 100)
                 if (units[selectedindex].usedaction === true) {
                     units[selectedindex].moved === true;
                 }
                 if (units[selectedindex].type === "Invisible") {
                     units[selectedindex].type = units[selectedindex].realtype;
                     $("#" + selectedindex).removeClass("Invisible");
                 }

                 function dies(enemyindex) {
                     if (Eunits[enemyindex].health <= 0 || isNumeric(Eunits[enemyindex].health) === false) {
                         if (Eunits[enemyindex].type === "Bee" || Eunits[enemyindex].type === "Zombie" || Eunits[enemyindex].type === "Golem" || Eunits[enemyindex].type === "Eye") {
                             if (Eunits[enemyindex].type === "Eye") {
                                 $("#E" + enemyindex).animate({
                                     top: -225 + "px"
                                 });
                                 Eunits[enemyindex].resting = true;
                                 Eunits[enemyindex].health = Eunits[enemyindex].maxhealth
                                 delayKraken += 1;
                                 updateHeader()
                                 setTimeout(function () {
                                     for (var i = 0; i < 2; i++) {
                                         if (Eunits[i].resting == true) {
                                             Eunits[i].resting = false
                                             $("#E" + i).animate({
                                                 top: "+=250px"
                                             });
                                             var temp = "#E" + i;
                                             var tempbar = "#EHB" + i;
                                             $(tempbar).remove();
                                             $(temp).append('<div class="healthbar" id ="EHB' + Eunits[i].index + '"style="width: ' + (Eunits[i].health / Eunits[i].maxhealth) * 100 + '%"></div>');
                                         }
                                     }
                                 }, 300)
                                 return;
                             }
                             else {
                                 $("#E" + enemyindex).fadeOut();
                                 $("#E" + enemyindex).animate({
                                     left: 225 + "px"
                                     , top: 25 + "px"
                                 });
                                 Eunits[enemyindex].curleft = 225;
                                 Eunits[enemyindex].curtop = 25;
                             }
                         }
                         else {
                             if (Eunits[enemyindex].alive == true) {
                                 $("#ORBE" + enemyindex).remove();
                                 $("#E" + enemyindex + " .ORBIMG").remove();
                                 $("#E" + enemyindex + " .ailment").remove();
                                 $("#E" + enemyindex + " img").attr("src", Eunits[enemyindex].dying);
                                 setTimeout(function () {
                                     $("#E" + enemyindex).remove();
                                 }, 1500)
                             }
                         }
                         if (units[selectedindex].type === "Enchantress" && Eunits[enemyindex].alive === false) {
                             units[selectedindex].mana += 30;
                             $("#TEXT").append("You recieved 30 mana for killing that enemy.")
                         }
                         Eunits[enemyindex].alive = false;
                         if ((Eslots[1] === -1 || Eunits[Eslots[1]].alive === false) && (Eslots[2] === -1 || Eunits[Eslots[2]].alive === false) && (Eslots[3] === -1 || Eunits[Eslots[3]].alive === false) && (Eslots[4] === -1 || Eunits[Eslots[4]].alive === false) && (Eslots[5] === -1 || Eunits[Eslots[5]].alive === false)) {
                             youwin();
                         }
                     }
                 }

                 function Damaging(index, damage) {
                     if (Eunits[index].protectedby || Eunits[index].protectedby == 0) {
                         if (Eunits[index].protectedby != -1 && Eunits[Eunits[index].protectedby].alive === true) {
                             index = Eunits[index].protectedby;
                         }
                     }
                     var temp = "#E" + index;
                     var tempbar = "#EHB" + index;
                     var elementalchange = "normalDamage";
                     if (elementalNum > 1) {
                         elementalchange = "BigDamage";
                     }
                     if (elementalNum < 1) {
                         elementalchange = "SmallDamage";
                     }
                     $("#battlebackground").append('<p class="damage ' + elementalchange + '" style="margin-top:' + (Eunits[index].curtop - 500) + 'px; margin-left:' + (Eunits[index].curleft) + 'px;">' + damage + '</p>');
                     $('.damage').animate({
                         top: (450) + 'px'
                     }, 1000);
                     if (damage == "Miss") {
                         damage = 0;
                     }
                     Eunits[index].health -= damage;
                     setTimeout(function () {
                         dies(index);
                     }, 500);
                     $(tempbar).remove();
                     $(temp).append('<div class="healthbar" id ="EHB' + Eunits[index].index + '"style="width: ' + (Eunits[index].health / Eunits[index].maxhealth) * 100 + '%"></div>');
                     setTimeout(function () {
                         $(".damage").remove();
                         turngray();
                     }, 900)
                 }

                 function turngray() {
                     for (var i = 1; i < 4; i++) {
                         if (units[slots[i]].moved === true || units[slots[i]].usedaction === true) {
                             $('#' + slots[i]).addClass("lighticon");
                         }
                         if (units[slots[i]].moved === true && units[slots[i]].usedaction === true) {
                             $('#' + slots[i]).removeClass("lighticon");
                             $('#' + slots[i]).addClass("grayicon");
                         }
                     }
                 }

                 function shootarrow(enemyindex, selectedindex) {
                     inanimation = true
                     setTimeout(function () {
                             inanimation = false
                         }, 1000)
                         //effects
                     var tempAngle = Math.atan((units[selectedindex].curleft - Eunits[enemyindex].curleft) / (Eunits[enemyindex].curtop - units[selectedindex].curtop)) / (Math.PI / 180);
                     //  if(units[selectedindex].curleft>Eunits[enemyindex].curleft){
                     //      tempAngle+=180;
                     //  }
                     if (units[selectedindex].curtop <= Eunits[enemyindex].curtop) {
                         tempAngle += 180;
                     }
                     $("#battlebackground").append("<div class='Effects' style='top: " + units[selectedindex].curtop + "px; left: " + units[selectedindex].curleft + "px'><img style = ' -ms-transform: rotate(" + tempAngle + "deg); -webkit-transform: rotate(" + tempAngle + "deg); transform: rotate(" + tempAngle + "deg);' src='../Pictures/Effects/Arrow.gif' /></div>");
                     $(".Effects").animate({
                         left: Eunits[enemyindex].curleft + "px"
                         , top: Eunits[enemyindex].curtop + "px"
                     }, 500).fadeOut(500);
                     Arrow.play();
                 }

                 function slashattack() {
                     $("#" + selectedindex).css("z-index", "2")
                     inanimation = true;
                     setTimeout(function () {
                         inanimation = false;
                     }, 1000)
                     var selectednow = selectedindex
                     if (Eunits[enemyindex].curleft < units[selectedindex].curleft) {
                         setTimeout(function () {
                             $("#" + selectedindex + " .dirpic").attr("src", units[selectedindex].attackleft)
                         }, 100)
                         $("#" + selectedindex).animate({
                             left: "-=60px"
                         }, 500)
                         setTimeout(function () {
                             $("#" + selectedindex + " .dirpic").attr("src", units[selectedindex].leftpic)
                         }, 500)
                     }
                     if (Eunits[enemyindex].curleft > units[selectedindex].curleft) {
                         setTimeout(function () {
                             $("#" + selectedindex + " .dirpic").attr("src", units[selectedindex].attackright)
                         }, 100)
                         $("#" + selectedindex).animate({
                             left: "+=60px"
                         }, 500)
                         setTimeout(function () {
                             $("#" + selectedindex + " .dirpic").attr("src", units[selectedindex].rightpic)
                         }, 500)
                     }
                     if (Eunits[enemyindex].curtop < units[selectedindex].curtop) {
                         setTimeout(function () {
                             $("#" + selectedindex + " .dirpic").attr("src", units[selectedindex].attackback)
                         }, 100)
                         $("#" + selectedindex).animate({
                             top: "-=40px"
                         }, 500)
                         setTimeout(function () {
                             $("#" + selectedindex + " .dirpic").attr("src", units[selectedindex].backpic)
                         }, 500)
                     }
                     if (Eunits[enemyindex].curtop > units[selectedindex].curtop) {
                         setTimeout(function () {
                             $("#" + selectedindex).css("z-index", "auto")
                             $("#" + selectedindex + " .dirpic").attr("src", units[selectedindex].attackfront)
                         }, 100)
                         $("#" + selectedindex).animate({
                             top: "+=40px"
                         }, 500)
                         setTimeout(function () {
                             $("#" + selectedindex + " .dirpic").attr("src", units[selectedindex].image)
                         }, 500)
                     }
                     setTimeout(function () {
                         $("#" + selectedindex).css("z-index", "auto")
                         $("#E" + enemyindex).append("<div class='slashEffects'><img src='../Pictures/Effects/EffectSlash.gif' /></div>");
                         $(".slashEffects").fadeOut(2000);
                         Sword.play();
                         $("#" + selectednow).animate({
                             top: units[selectednow].curtop + "px"
                             , left: units[selectednow].curleft + "px"
                         , }, 500)
                     }, 500)
                 }

                 function checktypes(type) {
                     var typepresent = false;
                     for (var p = 0; p < index; p++) {
                         if (selectedindex >= index) {
                             return;
                         }
                         if (units[p].type == type && units[p].group == units[selectedindex].group) {
                             typepresent = true;
                         }
                     }
                     return typepresent
                 }
                 //rouge
                 if (selectedaction === "rougeAttack" || selectedaction === "mimicAttack") {
                     if (units[selectedindex].curleft === Eunits[enemyindex].curleft || units[selectedindex].curtop === Eunits[enemyindex].curtop) {
                         if (units[selectedindex].blind === 0) {
                             for (var i = 1; i < 6; i++) {
                                 if (Eunits[Eslots[i]].type === "Magnet" && Eunits[Eslots[i]].alive === true) {
                                     enemyindex = Eslots[i]
                                     damage = 0;
                                 }
                             }
                             var e = document.getElementById("rougechoice");
                             if (selectedaction === "mimicAttack") {
                                 e = document.getElementById("mimicchoice");
                             }
                             var defense = 0;
                             if (Eunits[enemyindex].enfeeble === 0) {
                                 defense = Eunits[enemyindex].defense
                             }
                             var damage = units[selectedindex].attack + units[selectedindex].attacktempboost - defense;
                             if (damage < 0) {
                                 damage = 0
                             }
                             //magnet
                             var magnetthere = false;
                             for (var i = 1; i < 6; i++) {
                                 if (Eunits[Eslots[i]].type === "Magnet" && Eunits[Eslots[i]].alive === true) {
                                     enemyindex = Eslots[i];
                                     magnetthere = true;
                                     damage = 0;
                                 }
                             }
                             if (Eunits[enemyindex].phasedout === true) {
                                 damage = 0;
                             }
                             if ($('#rougechoice option:selected').text() === "Normal" || e.options[e.selectedIndex].value === "Straight-Arrow") {
                                 shootarrow(enemyindex, selectedindex);
                                 setTimeout(function () {
                                     Damaging(enemyindex, damage);
                                 }, 500);
                                 units[selectedindex].usedaction = true;
                             }
                             if (e.options[e.selectedIndex].value === "Sleep") {
                                 if (units[selectedindex].usedsleep === 0) {
                                     $("#TEXT").append('<p>' + units[selectedindex].name + ' is out of sleep arrows\n</p>');
                                     return
                                 }
                                 units[selectedindex].usedsleep -= 1;
                                 if (magnetthere === false) {
                                     Paralyzesound.play();
                                     Eunits[enemyindex].sleep = 1 + units[selectedindex].duration;
                                     $("#TEXT").append('<p>' + Eunits[enemyindex].name + ' was put to sleep for 1 turn.\n</p>');
                                 }
                                 shootarrow(enemyindex, selectedindex);
                                 setTimeout(function () {
                                     Damaging(enemyindex, damage);
                                 }, 500);
                                 units[selectedindex].usedaction = true;
                                 showailments();
                             }
                             if (e.options[e.selectedIndex].value === "Blindness") {
                                 if (units[selectedindex].usedblindness === 0) {
                                     $("#TEXT").append('<p>' + units[selectedindex].name + ' is out of blinding arrows\n</p>');
                                     return
                                 }
                                 if (magnetthere === false) {
                                     Paralyzesound.play();
                                     Eunits[enemyindex].blind = 2 + units[selectedindex].duration;
                                     $("#TEXT").append('<p>' + Eunits[enemyindex].name + ' was blinded for 2 turns, so it can not attack\n</p>');
                                 }
                                 units[selectedindex].usedblindness -= 1;
                                 shootarrow(enemyindex, selectedindex);
                                 setTimeout(function () {
                                     Damaging(enemyindex, damage);
                                 }, 500);
                                 units[selectedindex].usedaction = true;
                                 showailments();
                             }
                             if (e.options[e.selectedIndex].value === "Poison") {
                                 if (units[selectedindex].usedpoison === 0) {
                                     $("#TEXT").append('<p>' + units[selectedindex].name + ' is out of poison arrows\n</p>');
                                     return
                                 }
                                 if (magnetthere === false) {
                                     Paralyzesound.play();
                                     Eunits[enemyindex].poison = 3 + units[selectedindex].duration;
                                     $("#TEXT").append('<p>' + Eunits[enemyindex].name + ' was poisoned for 3 turns\n</p>');
                                 }
                                 units[selectedindex].usedpoison -= 1;
                                 shootarrow(enemyindex, selectedindex);
                                 setTimeout(function () {
                                     Damaging(enemyindex, damage);
                                 }, 500);
                                 units[selectedindex].usedaction = true;
                                 showailments();
                             }
                             if (e.options[e.selectedIndex].value === "Enfeeble") {
                                 if (units[selectedindex].usedenfeeble === 0) {
                                     $("#TEXT").append('<p>' + units[selectedindex].name + ' is out of enfeebling arrows\n</p>');
                                     return
                                 }
                                 if (magnetthere === false) {
                                     Paralyzesound.play();
                                     Eunits[enemyindex].enfeeble = 3 + units[selectedindex].duration;
                                     $("#TEXT").append('<p>' + Eunits[enemyindex].name + ' was enfeebled for 3 turns, so its defense and resistance are 0.\n</p>');
                                 }
                                 units[selectedindex].usedenfeeble -= 1;
                                 shootarrow(enemyindex, selectedindex);
                                 setTimeout(function () {
                                     Damaging(enemyindex, damage);
                                 }, 500);
                                 units[selectedindex].usedaction = true;
                                 showailments();
                             }
                             if (units[selectedindex].usedaction === true) {
                                 return;
                             }
                         }
                         else {
                             $("#TEXT").append("This unit is blind for " + units[selectedindex].blind + " more turns.")
                         }
                     }
                 }
                 //templar
                 if (selectedaction === "templarAttack" || selectedaction === "mimicAttack") {
                     if (units[selectedindex].curleft === Eunits[enemyindex].curleft || units[selectedindex].curtop === Eunits[enemyindex].curtop) {
                         if (units[selectedindex].blind === 0) {
                             var e = document.getElementById("templarchoice");
                             if (selectedaction === "mimicAttack") {
                                 e = document.getElementById("mimicchoice");
                             }
                             var defense = 0;
                             if (Eunits[enemyindex].enfeeble === 0) {
                                 defense = Eunits[enemyindex].defense
                             }
                             var damage = units[selectedindex].attack + units[selectedindex].attacktempboost - defense;
                             if (damage < 0) {
                                 damage = 0
                             }
                             //magnet
                             var magnetthere = false;
                             for (var i = 1; i < 6; i++) {
                                 if (Eunits[Eslots[i]].type === "Magnet" && Eunits[Eslots[i]].alive === true) {
                                     enemyindex = Eslots[i];
                                     magnetthere = true;
                                     damage = 0;
                                 }
                             }
                             //elemental stuff
                             if (units[selectedindex].abilityelemental === true) {
                                 var elementalboost = 1;
                                 if ($('#elemental option:selected').text() === "Fire") {
                                     elementalboost = Eunits[enemyindex].fire;
                                     setTimeout(function () {
                                         $("#battlebackground").append("<div class='Effects' style='top: " + Eunits[enemyindex].curtop + "px; left: " + Eunits[enemyindex].curleft + "px'><img  src='../Pictures/Effects/EffectFire.gif' /></div>");
                                         Fire.play()
                                     }, 500)
                                 }
                                 if ($('#elemental option:selected').text() === "Ice") {
                                     elementalboost = Eunits[enemyindex].ice;
                                     setTimeout(function () {
                                         $("#battlebackground").append("<div class='Effects' style='top: " + Eunits[enemyindex].curtop + "px; left: " + Eunits[enemyindex].curleft + "px'><img  src='../Pictures/Effects/EffectIce.gif' /></div>");
                                         Iceattack.play()
                                     }, 500)
                                 }
                                 if ($('#elemental option:selected').text() === "Lightning") {
                                     elementalboost = Eunits[enemyindex].lightning;
                                     setTimeout(function () {
                                         $("#battlebackground").append("<div class='Effects' style='top: " + Eunits[enemyindex].curtop + "px; left: " + Eunits[enemyindex].curleft + "px'><img  src='../Pictures/Effects/Zap.gif' /></div>");
                                         Zap.play()
                                     }, 500)
                                 }
                                 elementalNum = elementalboost;
                                 damage = damage * elementalboost;
                                 setTimeout(function () {
                                     $(".Effects").remove()
                                 }, 1000)
                             }
                             //phasing stuff
                             if (Eunits[enemyindex].phasedout === true && units[selectedindex].abilityelemental === true) {
                                 if ((Eunits[enemyindex].type === "Frostwraith" && $('#elemental option:selected').text() === "Fire") || (Eunits[enemyindex].type === "Flamewraith" && $('#elemental option:selected').text() === "Ice") || (Eunits[enemyindex].type === "Waterwraith" && $('#elemental option:selected').text() === "Lightning")) {}
                                 else {
                                     damage = 0;
                                 }
                                 if ($('#elemental option:selected').text() != "") {
                                     Eunits[enemyindex].phasedout = false;
                                     $("#E" + Eunits[enemyindex].index).removeClass("Invisible");
                                     $("#TEXT").append("The wraith phased back in.")
                                 }
                             }
                             if ($('#templarchoice option:selected').text() === "Normal") {
                                 shootarrow(enemyindex, selectedindex);
                                 setTimeout(function () {
                                     Damaging(enemyindex, damage);
                                 }, 500);
                                 units[selectedindex].usedaction = true;
                                 Arrow.play();
                             }
                             if (e.options[e.selectedIndex].value === "Silence") {
                                 if (units[selectedindex].usedsilence === 0) {
                                     $("#TEXT").append('<p>' + units[selectedindex].name + ' is out of silencing arrows\n</p>');
                                     return
                                 }
                                 if (magnetthere === false) {
                                     Eunits[enemyindex].silenced = 2;
                                     $("#TEXT").append('<p>' + Eunits[enemyindex].name + ' was silenced for 2 turns\n</p>');
                                 }
                                 Paralyzesound.play();
                                 units[selectedindex].usedsilence -= 1;
                                 shootarrow(enemyindex, selectedindex);
                                 setTimeout(function () {
                                     Damaging(enemyindex, damage);
                                 }, 500);
                                 units[selectedindex].usedaction = true;
                                 showailments()
                                 Arrow.play();
                             }
                             if (e.options[e.selectedIndex].value === "Burst") {
                                 if (units[selectedindex].usedburst === 0) {
                                     $("#TEXT").append('<p>' + units[selectedindex].name + ' is out of burst arrows\n</p>');
                                     return
                                 }
                                 damage += Eunits[enemyindex].resistance;
                                 units[selectedindex].usedburst -= 1;
                                 shootarrow(enemyindex, selectedindex);
                                 setTimeout(function () {
                                     Damaging(enemyindex, damage);
                                 }, 500);
                                 units[selectedindex].usedaction = true;
                                 showailments();
                                 Arrow.play();
                             }
                             if (e.options[e.selectedIndex].value === "Disrupt") {
                                 if (units[selectedindex].useddisrupt === 0) {
                                     $("#TEXT").append('<p>' + units[selectedindex].name + ' is out of disrupting arrows\n</p>');
                                     return
                                 }
                                 units[selectedindex].useddisrupt -= 1;
                                 if (magnetthere === false) {
                                     $("#battlebackground").append("<div class='totalbackground'] style='background-color:white; margin-left:0px; margin-top:-500px'</div>");
                                     $(".totalbackground").fadeOut(500);
                                     Disrupt.play();
                                     for (var i = 1; i < 6; i++) {
                                         $("#ORBE" + +Eunits[Eslots[i]].index).remove();
                                         var maxcharge = 0;
                                         if (Eunits[Eslots[i]].type === "Beekeeper" || Eunits[Eslots[i]].type === "Necromancer" || Eunits[Eslots[i]].type === "Shaman" || Eunits[Eslots[i]].type === "Wisp" || Eunits[Eslots[i]].type === "Frostwraith" || Eunits[Eslots[i]].type === "Waterwraith") {
                                             Eunits[Eslots[i]].charge = 0;
                                             maxcharge = 1;
                                             $('#E' + Eslots[i]).append('<img style="position: absolute; margin-top:40px; margin-left:-30px; width:35px; height:35px" src="../Pictures/Orb.gif" />');
                                         }
                                         if (Eunits[Eslots[i]].type === "Fire Elemental" || Eunits[Eslots[i]].type === "Ice Elemental" || Eunits[Eslots[i]].type === "Flamewraith" || Eunits[Eslots[i]].type === "Wizard") {
                                             Eunits[Eslots[i]].charge = 0;
                                             maxcharge = 2;
                                             $('#E' + Eslots[i]).append('<img style="position: absolute; margin-top:40px; margin-left:-30px; width:35px; height:35px" src="../Pictures/Orb.gif" />');
                                         }
                                         if (Eunits[Eslots[i]].type === "Lightning Elemental" || Eunits[Eslots[i]].type === "Angel" || Eunits[Eslots[i]].type === "Frostlord" || Eunits[Eslots[i]].type === "Demon" || Eunits[Eslots[i]].type === "Unknown" || Eunits[Eslots[i]].type === "Dragon") {
                                             Eunits[Eslots[i]].charge = 0;
                                             maxcharge = 3;
                                             $('#E' + Eslots[i]).append('<img style="position: absolute; margin-top:40px; margin-left:-30px; width:35px; height:35px" src="../Pictures/Orb.gif" />');
                                         }
                                     }
                                     $("#TEXT").append('<p>All enemy charge have been reduced to 0.\n</p>');
                                 }
                                 shootarrow(enemyindex, selectedindex);
                                 setTimeout(function () {
                                     Damaging(enemyindex, damage);
                                 }, 500);
                                 units[selectedindex].usedaction = true;
                                 showailments();
                                 Arrow.play();
                             }
                             if (e.options[e.selectedIndex].value === "Grappling_Hook") {
                                 if (units[selectedindex].usedgrappling === 0) {
                                     $("#TEXT").append('<p>' + units[selectedindex].name + ' is out of Grappling Hook arrows\n</p>');
                                     return
                                 }
                                 units[selectedindex].usedgrappling -= 1;
                                 setTimeout(function () {
                                     Damaging(enemyindex, damage);
                                 }, 500);
                                 if (magnetthere === false) {
                                     if (Eunits[enemyindex].curleft === units[selectedindex].curleft && Eunits[enemyindex].curtop < units[selectedindex].curtop) {
                                         if ((Eunits[Eslots[1]].curleft === units[selectedindex].curleft && Eunits[Eslots[1]].curtop === units[selectedindex].curtop - 100) || (Eunits[Eslots[2]].curleft === units[selectedindex].curleft && Eunits[Eslots[2]].curtop === units[selectedindex].curtop - 100) || (Eunits[Eslots[3]].curleft === units[selectedindex].curleft && Eunits[Eslots[3]].curtop === units[selectedindex].curtop - 100) || (Eunits[Eslots[4]].curleft === units[selectedindex].curleft && Eunits[Eslots[4]].curtop === units[selectedindex].curtop - 100) || (Eunits[Eslots[5]].curleft === units[selectedindex].curleft && Eunits[Eslots[5]].curtop === units[selectedindex].curtop - 100) || (units[slots[1]].curleft === units[selectedindex].curleft && units[slots[1]].curtop === units[selectedindex].curtop - 100) || (units[slots[2]].curleft === units[selectedindex].curleft && units[slots[2]].curtop === units[selectedindex].curtop - 100) || (units[slots[3]].curleft === units[selectedindex].curleft && units[slots[3]].curtop === units[selectedindex].curtop - 100)) {
                                             message("There is someone blocking the soldier's line of sight.");
                                             return;
                                         }
                                         if (Eunits[enemyindex].type != "Eye") {
                                             Eunits[enemyindex].curtop = units[selectedindex].curtop - 100;
                                             Hook.play();
                                             $("#E" + enemyindex).append("<div class='slashEffects'><img src='../Pictures/Effects/Hook.gif' /></div>");
                                             setTimeout(function () {
                                                 $(".slashEffects").remove();
                                             }, 1000);
                                             $('#E' + enemyindex).animate({
                                                 top: (units[selectedindex].curtop - 100) + 'px'
                                             }, 1000);
                                         }
                                     }
                                     if (Eunits[enemyindex].curleft === units[selectedindex].curleft && Eunits[enemyindex].curtop > units[selectedindex].curtop) {
                                         if ((Eunits[Eslots[1]].curleft === units[selectedindex].curleft && Eunits[Eslots[1]].curtop === units[selectedindex].curtop + 100) || (Eunits[Eslots[2]].curleft === units[selectedindex].curleft && Eunits[Eslots[2]].curtop === units[selectedindex].curtop + 100) || (Eunits[Eslots[3]].curleft === units[selectedindex].curleft && Eunits[Eslots[3]].curtop === units[selectedindex].curtop + 100) || (Eunits[Eslots[4]].curleft === units[selectedindex].curleft && Eunits[Eslots[4]].curtop === units[selectedindex].curtop + 100) || (Eunits[Eslots[5]].curleft === units[selectedindex].curleft && Eunits[Eslots[5]].curtop === units[selectedindex].curtop + 100) || (units[slots[1]].curleft === units[selectedindex].curleft && units[slots[1]].curtop === units[selectedindex].curtop + 100) || (units[slots[2]].curleft === units[selectedindex].curleft && units[slots[2]].curtop === units[selectedindex].curtop + 100) || (units[slots[3]].curleft === units[selectedindex].curleft && units[slots[3]].curtop === units[selectedindex].curtop + 100)) {
                                             message("There is someone blocking the soldier's line of sight.");
                                             return;
                                         }
                                         if (Eunits[enemyindex].type != "Eye") {
                                             Eunits[enemyindex].curtop = units[selectedindex].curtop + 100;
                                             $("#E" + enemyindex).append("<div class='slashEffects'><img style='transform: rotate(180deg) translate(-100%,-100%); margin-left:-40px; margin-top:-200px' src='../Pictures/Effects/Hook.gif' /></div>");
                                             setTimeout(function () {
                                                 $(".slashEffects").remove();
                                             }, 1000);
                                             $('#E' + enemyindex).animate({
                                                 top: (units[selectedindex].curtop + 100) + 'px'
                                             }, 500);
                                         }
                                     }
                                     if (Eunits[enemyindex].curtop === units[selectedindex].curtop && Eunits[enemyindex].curleft > units[selectedindex].curleft) {
                                         if ((Eunits[Eslots[1]].curtop === units[selectedindex].curtop && Eunits[Eslots[1]].curleft === units[selectedindex].curleft + 100) || (Eunits[Eslots[2]].curtop === units[selectedindex].curtop && Eunits[Eslots[2]].curleft === units[selectedindex].curleft + 100) || (Eunits[Eslots[3]].curtop === units[selectedindex].curtop && Eunits[Eslots[3]].curleft === units[selectedindex].curleft + 100) || (Eunits[Eslots[4]].curtop === units[selectedindex].curtop && Eunits[Eslots[4]].curleft === units[selectedindex].curleft + 100) || (Eunits[Eslots[5]].curtop === units[selectedindex].curtop && Eunits[Eslots[5]].curleft === units[selectedindex].curleft + 100) || (units[slots[1]].curtop === units[selectedindex].curtop && units[slots[1]].curleft === units[selectedindex].curleft + 100) || (units[slots[2]].curtop === units[selectedindex].curtop && units[slots[2]].curleft === units[selectedindex].curleft + 100) || (units[slots[3]].curtop === units[selectedindex].curtop && units[slots[3]].curleft === units[selectedindex].curleft + 100)) {
                                             message("There is someone blocking the soldier's line of sight.");
                                             return;
                                         }
                                         if (Eunits[enemyindex].type != "Eye") {
                                             Eunits[enemyindex].curleft = units[selectedindex].curleft + 100;
                                             $("#E" + enemyindex).append("<div class='slashEffects'><img style='transform: rotate(90deg) translate(-100%,-100%); margin-left:-40px; margin-top:-10px' src='../Pictures/Effects/Hook.gif' /></div>");
                                             setTimeout(function () {
                                                 $(".slashEffects").remove();
                                             }, 1000);
                                             $('#E' + enemyindex).animate({
                                                 left: (units[selectedindex].curleft + 100) + 'px'
                                             }, 500);
                                         }
                                     }
                                     if (Eunits[enemyindex].curtop === units[selectedindex].curtop && Eunits[enemyindex].curleft < units[selectedindex].curleft) {
                                         if ((Eunits[Eslots[1]].curtop === units[selectedindex].curtop && Eunits[Eslots[1]].curleft === units[selectedindex].curleft - 100) || (Eunits[Eslots[2]].curtop === units[selectedindex].curtop && Eunits[Eslots[2]].curleft === units[selectedindex].curleft - 100) || (Eunits[Eslots[3]].curtop === units[selectedindex].curtop && Eunits[Eslots[3]].curleft === units[selectedindex].curleft - 100) || (Eunits[Eslots[4]].curtop === units[selectedindex].curtop && Eunits[Eslots[4]].curleft === units[selectedindex].curleft - 100) || (Eunits[Eslots[5]].curtop === units[selectedindex].curtop && Eunits[Eslots[5]].curleft === units[selectedindex].curleft - 100) || (units[slots[1]].curtop === units[selectedindex].curtop && units[slots[1]].curleft === units[selectedindex].curleft - 100) || (units[slots[2]].curtop === units[selectedindex].curtop && units[slots[2]].curleft === units[selectedindex].curleft - 100) || (units[slots[3]].curtop === units[selectedindex].curtop && units[slots[3]].curleft === units[selectedindex].curleft - 100)) {
                                             message("There is someone blocking the soldier's line of sight.");
                                             return;
                                         }
                                         if (Eunits[enemyindex].type != "Eye") {
                                             Eunits[enemyindex].curleft = units[selectedindex].curleft - 100;
                                             $("#E" + enemyindex).append("<div class='slashEffects'><img style='transform: rotate(270deg) translate(-100%,-100%); margin-left:50px; margin-top:-200px' src='../Pictures/Effects/Hook.gif' /></div>");
                                             setTimeout(function () {
                                                 $(".slashEffects").remove();
                                             }, 1000);
                                             $('#E' + enemyindex).animate({
                                                 left: (units[selectedindex].curleft - 100) + 'px'
                                             }, 500);
                                         }
                                     }
                                 }
                                 if (magnetthere === true) {
                                     shootarrow(enemyindex, selectedindex);
                                 }
                                 units[selectedindex].usedaction = true;
                                 showailments();
                                 Arrow.play();
                             }
                             if (units[selectedindex].usedaction === true) {
                                 return;
                             }
                         }
                         else {
                             $("#TEXT").append("This unit is blind for " + units[selectedindex].blind + " more turns.")
                         }
                     }
                 }
                 //Archer
                 if (selectedaction === "archerAttack" || selectedaction === "mimicAttack") {
                     if (units[selectedindex].blind === 0) {
                         var e = document.getElementById("archerchoice");
                         if (selectedaction === "mimicAttack") {
                             e = document.getElementById("mimicchoice");
                         }
                         var defense = 0;
                         //magnet
                         var magnetthere = false;
                         for (var i = 1; i < 6; i++) {
                             if (Eunits[Eslots[i]].type === "Magnet" && Eunits[Eslots[i]].alive === true) {
                                 enemyindex = Eslots[i];
                                 magnetthere = true;
                             }
                         }
                         if (Eunits[enemyindex].enfeeble === 0) {
                             defense = Eunits[enemyindex].defense
                         }
                         var damage = units[selectedindex].attack + units[selectedindex].attacktempboost - defense;
                         if (damage < 0) {
                             damage = 0
                         }
                         if (Eunits[enemyindex].phasedout === true) {
                             damage = 0
                         }
                         if (e.options[e.selectedIndex].value === "Piercing") {
                             if (units[selectedindex].usedpierce === 0) {
                                 $("#TEXT").append('<p>' + units[selectedindex].name + ' is out of piercing arrows\n</p>');
                                 return
                             }
                             units[selectedindex].usedpierce -= 1;
                             damage = units[selectedindex].attack + units[selectedindex].attacktempboost;
                         }
                         if (e.options[e.selectedIndex].value === "Titan") {
                             if (units[selectedindex].usedtitan === 0) {
                                 $("#TEXT").append('<p>' + units[selectedindex].name + ' is out of titan arrows\n</p>');
                                 return
                             }
                             units[selectedindex].usedtitan -= 1;
                             damage = (units[selectedindex].attack + units[selectedindex].attacktempboost - defense) * 2;
                         }
                         if (e.options[e.selectedIndex].value === "Immobolize") {
                             if (units[selectedindex].usedimmobolize === 0) {
                                 $("#TEXT").append('<p>' + units[selectedindex].name + ' is out of immobolizing arrows\n</p>');
                                 return
                             }
                             units[selectedindex].usedimmobolize -= 1;
                             if (magnetthere === false) {
                                 Eunits[enemyindex].immobilized = 2;
                                 Paralyzesound.play();
                             }
                             showailments();
                         }
                         if (magnetthere === true) {
                             damage = 0;
                         }
                         if ($('#archerchoice option:selected').text() === "Normal" || e.options[e.selectedIndex].value === "Piercing" || e.options[e.selectedIndex].value === "Titan" || e.options[e.selectedIndex].value === "Immobolize" || e.options[e.selectedIndex].value === "Arrow") {
                             shootarrow(enemyindex, selectedindex);
                             setTimeout(function () {
                                 Damaging(enemyindex, damage);
                             }, 500);
                             units[selectedindex].usedaction = true;
                         }
                         if (e.options[e.selectedIndex].value === "Exploding") {
                             if (units[selectedindex].usedexploding === 0) {
                                 $("#TEXT").append('<p>' + units[selectedindex].name + ' is out of exploding arrows\n</p>');
                                 return
                             }
                             units[selectedindex].usedexploding -= 1;
                             if (magnetthere === false) {
                                 shootarrow(enemyindex, selectedindex);
                                 setTimeout(function () {
                                     Lightning.play();
                                     $("#E" + enemyindex).append("<div class='staticEffects' style='margin-top:-180px; margin-left:-120px'><img src='../Pictures/Effects/EffectExplode.gif' /></div>");
                                     setTimeout(function () {
                                         $(".staticEffects").remove()
                                     }, 500);
                                 }, 500)
                             }
                             if (magnetthere === true) {
                                 shootarrow(enemyindex, selectedindex);
                             }
                             units[selectedindex].usedaction = true;
                             //adjacent enemies
                             setTimeout(function () {
                                 for (var z = 1; z < 6; z++) {
                                     if (Eunits[Eslots[z]].alive === true && magnetthere === false) {
                                         if ((Eunits[Eslots[z]].curleft === Eunits[enemyindex].curleft - 100 && Eunits[Eslots[z]].curtop === Eunits[enemyindex].curtop) || (Eunits[Eslots[z]].curleft === Eunits[enemyindex].curleft + 100 && Eunits[Eslots[z]].curtop === Eunits[enemyindex].curtop) || (Eunits[Eslots[z]].curleft === Eunits[enemyindex].curleft && Eunits[Eslots[z]].curtop === Eunits[enemyindex].curtop + 100) || (Eunits[Eslots[z]].curleft === Eunits[enemyindex].curleft && Eunits[Eslots[z]].curtop === Eunits[enemyindex].curtop - 100) || (enemyindex == Eslots[z])) {
                                             var smalldamage = ((units[selectedindex].attack) - Eunits[Eslots[z]].defense) * Eunits[Eslots[z]].fire;
                                             elementalNum = Eunits[Eslots[z]].fire;
                                             if (smalldamage < 0) {
                                                 smalldamage = 0
                                             }
                                             if (Eunits[Eslots[z]].phasedout === true) {
                                                 console.log(Eunits[Eslots[z]].type)
                                                 if (Eunits[Eslots[z]].type === "Frostwraith") {}
                                                 else {
                                                     smalldamage = 0;
                                                 }
                                                 Eunits[Eslots[z]].phasedout = false;
                                                 $("#E" + Eunits[Eslots[z]].index).removeClass("Invisible");
                                                 $("#TEXT").append("The wraith phased back in.")
                                             }
                                             Damaging(Eslots[z], smalldamage);
                                         }
                                     }
                                 }
                             }, 500)
                         }
                     }
                     else {
                         $("#TEXT").append("This unit is blind for " + units[selectedindex].blind + " more turns.")
                     }
                     if (typeof indiv_archershoot == 'function') {
                         indiv_archershoot();
                     }
                     if (units[selectedindex].usedaction === true) {
                         return;
                     }
                 }
                 //soldier
                 if (selectedaction === "soldierAttack" || selectedaction === "mimicAttack") {
                     if (units[selectedindex].blind === 0) {
                         var e = document.getElementById("soldierchoice");
                         if (selectedaction === "mimicAttack") {
                             e = document.getElementById("mimicchoice");
                         }
                         var defense = 0;
                         if (Eunits[enemyindex].enfeeble === 0) {
                             defense = Eunits[enemyindex].defense
                         }
                         var damage = (units[selectedindex].attack + units[selectedindex].attacktempboost - defense);
                         if (damage < 0) {
                             damage = 0
                         }
                         if (Eunits[enemyindex].phasedout === true) {
                             damage = 0;
                         }
                         if ($('#soldierchoice option:selected').text() === "Normal" || e.options[e.selectedIndex].value === "Sword") {
                             if ((units[selectedindex].curtop - 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curtop + 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curleft - 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop) || (units[selectedindex].curleft + 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop)) {
                                 units[selectedindex].usedaction = true;
                                 slashattack();
                                 setTimeout(function () {
                                     Damaging(enemyindex, damage);
                                 }, 500);
                                 return;
                             }
                         }
                     }
                     else {
                         $("#TEXT").append("This unit is blind for " + units[selectedindex].blind + " more turns.")
                     }
                 }
                 //Djinn
                 if (selectedaction === "DjinnAttack") {
                     if (units[selectedindex].blind === 0) {
                         var defense = 0;
                         if (Eunits[enemyindex].enfeeble === 0) {
                             defense = Eunits[enemyindex].defense
                         }
                         var damage = (units[selectedindex].attack + units[selectedindex].attacktempboost - defense);
                         if (damage < 0) {
                             damage = 0
                         }
                         if (Eunits[enemyindex].phasedout === true) {
                             damage = 0;
                         }
                         if ((units[selectedindex].curtop - 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curtop + 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curleft - 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop) || (units[selectedindex].curleft + 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop)) {
                             Sword.play();
                             units[selectedindex].usedaction = true;
                             $("#E" + enemyindex).append("<div class='slashEffects'><img src='../Pictures/Effects/EffectSlash.gif' /></div>");
                             Damaging(enemyindex, damage);
                             $(".slashEffects").fadeOut(2000);
                             turngray();
                             return;
                         }
                     }
                     else {
                         $("#TEXT").append("This unit is blind for " + units[selectedindex].blind + " more turns.")
                     }
                 }
                 //knight
                 if (selectedaction === "knightAttack" || selectedaction === "mimicAttack") {
                     if (units[selectedindex].blind === 0) {
                         var e = document.getElementById("knightchoice");
                         if (selectedaction === "mimicAttack") {
                             e = document.getElementById("mimicchoice");
                         }
                         if ($('#knightchoice option:selected').text() === "Normal" || e.options[e.selectedIndex].value === "Knight-Sword") {
                             var defense = 0;
                             if (Eunits[enemyindex].enfeeble === 0) {
                                 defense = Eunits[enemyindex].defense
                             }
                             var damage = (units[selectedindex].attack - defense + units[selectedindex].attacktempboost);
                             if (damage < 0) {
                                 damage = 0
                             }
                             if (Eunits[enemyindex].phasedout === true) {
                                 damage = 0;
                             }
                             if ((units[selectedindex].curtop - 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curtop + 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curleft - 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop) || (units[selectedindex].curleft + 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop)) {
                                 if (units[selectedindex].energy < 20) {
                                     message("The Knight doesn't have enough stamina to attack. Pass the turn without using him to refill his stamina.");
                                     return;
                                 }
                                 else {
                                     units[selectedindex].energy -= 20;
                                     $("#EB" + units[selectedindex].index).remove();
                                     $("#" + selectedindex).append('<div class="energybar" id ="EB' + units[selectedindex].index + '"style="width: ' + units[selectedindex].energy + '%"></div>');
                                 }
                                 units[selectedindex].usedaction = true;
                                 setTimeout(function () {
                                     Damaging(enemyindex, damage);
                                 }, 500);
                                 slashattack()
                             }
                         }
                         if ($('#knightchoice option:selected').text() === "Push" || e.options[e.selectedIndex].value === "Push") {
                             var damage = (units[selectedindex].attack + units[selectedindex].attacktempboost);
                             if (damage < 0) {
                                 damage = 0
                             }
                             if ((units[selectedindex].curtop - 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curtop + 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curleft - 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop) || (units[selectedindex].curleft + 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop)) {
                                 if (units[selectedindex].hasmoved == true) {
                                     message("The Knight can't use 'Push' if he has already moved this turn.");
                                     return;
                                 }
                                 if (units[selectedindex].energy < 40) {
                                     message("The Knight doesn't have enough stamina to use Push. Pass the turn without using him to refill his stamina.");
                                     return;
                                 }
                                 else {
                                     units[selectedindex].energy -= 40;
                                     $("#EB" + units[selectedindex].index).remove();
                                     $("#" + selectedindex).append('<div class="energybar" id ="EB' + units[selectedindex].index + '"style="width: ' + units[selectedindex].energy + '%"></div>');
                                 }
                                 Specialsound.play();
                                 units[selectedindex].usedspecial = true;
                                 units[selectedindex].usedaction = true;
                                 slashattack()
                                 setTimeout(function () {
                                     Damaging(enemyindex, damage)
                                 }, 500);
                                 if (units[selectedindex].curleft == Eunits[enemyindex].curleft) {
                                     if (units[selectedindex].curtop > Eunits[enemyindex].curtop) {
                                         var keepgoing = true;
                                         var newtop = Eunits[enemyindex].curtop;
                                         while (keepgoing) {
                                             newtop -= 100
                                             for (var i = 1; i < 4; i++) {
                                                 if (units[slots[i]].curtop == newtop && units[slots[i]].curleft == Eunits[enemyindex].curleft) {
                                                     keepgoing = false;
                                                     newtop += 100;
                                                 }
                                             }
                                             for (var i = 1; i < 6; i++) {
                                                 if (Eunits[Eslots[i]].curtop == newtop && Eunits[Eslots[i]].curleft == Eunits[enemyindex].curleft) {
                                                     keepgoing = false;
                                                     newtop += 100;
                                                 }
                                             }
                                             if (newtop < 50) {
                                                 keepgoing = false
                                             }
                                         }
                                         Eunits[enemyindex].curtop = newtop;
                                         $("#E" + enemyindex).animate({
                                             top: newtop + "px"
                                         , })
                                     }
                                     if (units[selectedindex].curtop < Eunits[enemyindex].curtop) {
                                         var keepgoing = true;
                                         var newtop = Eunits[enemyindex].curtop;
                                         while (keepgoing) {
                                             newtop += 100
                                             for (var i = 1; i < 4; i++) {
                                                 if (units[slots[i]].curtop == newtop && units[slots[i]].curleft == Eunits[enemyindex].curleft) {
                                                     keepgoing = false
                                                     newtop -= 100
                                                 }
                                             }
                                             for (var i = 1; i < 6; i++) {
                                                 if (Eunits[Eslots[i]].curtop == newtop && Eunits[Eslots[i]].curleft == Eunits[enemyindex].curleft) {
                                                     keepgoing = false;
                                                     newtop -= 100;
                                                 }
                                             }
                                             if (newtop > 450) {
                                                 newtop -= 100
                                                 keepgoing = false
                                             }
                                         }
                                         Eunits[enemyindex].curtop = newtop;
                                         $("#E" + enemyindex).animate({
                                             top: newtop + "px"
                                         , })
                                     }
                                 }
                                 if (units[selectedindex].curtop == Eunits[enemyindex].curtop) {
                                     if (units[selectedindex].curleft > Eunits[enemyindex].curleft) {
                                         var keepgoing = true;
                                         var newleft = Eunits[enemyindex].curleft;
                                         while (keepgoing) {
                                             newleft -= 100
                                             for (var i = 1; i < 4; i++) {
                                                 if (units[slots[i]].curleft == newleft && units[slots[i]].curtop == Eunits[enemyindex].curtop) {
                                                     keepgoing = false;
                                                     newleft += 100;
                                                 }
                                             }
                                             for (var i = 1; i < 6; i++) {
                                                 if (Eunits[Eslots[i]].curleft == newleft && Eunits[Eslots[i]].curtop == Eunits[enemyindex].curtop && keepgoing) {
                                                     keepgoing = false;
                                                     newleft += 100;
                                                 }
                                             }
                                             if (newleft < 50) {
                                                 keepgoing = false
                                             }
                                         }
                                         Eunits[enemyindex].curleft = newleft;
                                         $("#E" + enemyindex).animate({
                                             left: newleft + "px"
                                         , })
                                     }
                                     if (units[selectedindex].curleft < Eunits[enemyindex].curleft) {
                                         var keepgoing = true;
                                         var newleft = Eunits[enemyindex].curleft;
                                         while (keepgoing) {
                                             newleft += 100
                                             for (var i = 1; i < 4; i++) {
                                                 if (units[slots[i]].curleft == newleft && units[slots[i]].curtop == Eunits[enemyindex].curtop) {
                                                     keepgoing = false
                                                     newleft -= 100
                                                 }
                                             }
                                             for (var i = 1; i < 6; i++) {
                                                 if (Eunits[Eslots[i]].curleft == newleft && Eunits[Eslots[i]].curtop == Eunits[enemyindex].curtop) {
                                                     keepgoing = false;
                                                     newleft -= 100;
                                                 }
                                             }
                                             if (newleft > 350) {
                                                 keepgoing = false
                                             }
                                         }
                                         Eunits[enemyindex].curleft = newleft;
                                         $("#E" + enemyindex).animate({
                                             left: newleft + "px"
                                         , })
                                     }
                                 }
                                 return;
                             }
                         }
                         if ($('#knightchoice option:selected').text() === "Wail" || e.options[e.selectedIndex].value === "Wail") {
                             var defense = Eunits[enemyindex].defense;
                             if (Eunits[enemyindex].enfeeble > 0) {
                                 defense = 0
                             }
                             var damage = (units[selectedindex].attack + units[selectedindex].attacktempboost - defense);
                             if (damage < 0) {
                                 damage = 0
                             }
                             if ((units[selectedindex].curtop - 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curtop + 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curleft - 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop) || (units[selectedindex].curleft + 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop)) {
                                 if (units[selectedindex].energy < 20) {
                                     message("The Knight doesn't have enough stamina to use wail. Pass the turn without using him to refill his stamina.");
                                     return;
                                 }
                                 else {
                                     var blows = Math.floor(units[selectedindex].energy / 20)
                                     var loopnum = 0
                                     inanimation = true;
                                     for (var i = 0; i < blows; i++) {
                                         setTimeout(function () {
                                             var tempdamage = damage;
                                             if (Math.floor((Math.random() * 4) + loopnum) > 3) {
                                                 tempdamage = "Miss"
                                             }
                                             loopnum += 1;
                                             if (Eunits[enemyindex].health <= 0) {
                                                 return
                                             }
                                             units[selectedindex].energy -= 20;
                                             $("#EB" + units[selectedindex].index).remove();
                                             $("#" + selectedindex).append('<div class="energybar" id ="EB' + units[selectedindex].index + '"style="width: ' + units[selectedindex].energy + '%"></div>');
                                             Specialsound.play();
                                             units[selectedindex].usedaction = true;
                                             slashattack()
                                             setTimeout(function () {
                                                 Damaging(enemyindex, tempdamage)
                                             }, 500);
                                         }, i * 1000)
                                     }
                                     setTimeout(function () {
                                         inanimation = false;
                                     }, 1000 * blows)
                                 }
                             }
                         }
                         if ($('#knightchoice option:selected').text() === "Swirl" || e.options[e.selectedIndex].value === "Swirl") {
                             if (units[selectedindex].energy < 30) {
                                 message("The Knight doesn't have enough stamina to use swirl. Pass the turn without using him to refill his stamina.");
                                 return;
                             }
                             inanimation = true;
                             var selectednow = selectedindex
                             units[selectedindex].energy -= 30;
                             $("#EB" + units[selectedindex].index).remove();
                             $("#" + selectedindex).append('<div class="energybar" id ="EB' + units[selectedindex].index + '"style="width: ' + units[selectedindex].energy + '%"></div>');
                             setTimeout(function () {
                                 $("#" + selectednow + " .dirpic").attr("src", units[selectednow].swirl)
                             }, 100)
                             swing.play()
                             setTimeout(function () {
                                 $("#" + selectednow + " .dirpic").attr("src", units[selectednow].image)
                                 inanimation = false;
                             }, 1300)
                             setTimeout(function () {
                                 for (var z = 1; z < 6; z++) {
                                     if (Eunits[Eslots[z]].alive === false) {
                                         continue;
                                     }
                                     defense = 0;
                                     if (Eunits[Eslots[z]].enfeeble === 0) {
                                         defense = Eunits[Eslots[z]].defense
                                     }
                                     damage = (units[selectednow].attack - defense + units[selectednow].attacktempboost);
                                     if (damage < 0) {
                                         damage = 0
                                     }
                                     if (units[selectednow].curtop - 100 === Eunits[Eslots[z]].curtop && units[selectednow].curleft === Eunits[Eslots[z]].curleft) {
                                         units[selectednow].usedaction = true;
                                         Damaging(Eslots[z], damage);
                                     }
                                     if (units[selectednow].curtop + 100 === Eunits[Eslots[z]].curtop && units[selectednow].curleft === Eunits[Eslots[z]].curleft) {
                                         units[selectednow].usedaction = true;
                                         Damaging(Eslots[z], damage);
                                     }
                                     if (units[selectednow].curleft - 100 === Eunits[Eslots[z]].curleft && units[selectednow].curtop === Eunits[Eslots[z]].curtop) {
                                         units[selectednow].usedaction = true;
                                         Damaging(Eslots[z], damage);
                                     }
                                     if (units[selectednow].curleft + 100 === Eunits[Eslots[z]].curleft && units[selectednow].curtop === Eunits[Eslots[z]].curtop) {
                                         units[selectednow].usedaction = true;
                                         Damaging(Eslots[z], damage);
                                     }
                                 }
                             }, 1300)
                         }
                         if ($('#knightchoice option:selected').text() === "Sweep" || e.options[e.selectedIndex].value === "Sweep") {
                             if (units[selectedindex].energy < 30) {
                                 message("The Knight doesn't have enough stamina to use swirl. Pass the turn without using him to refill his stamina.");
                                 return;
                             }
                             units[selectedindex].energy -= 30;
                             $("#EB" + units[selectedindex].index).remove();
                             $("#" + selectedindex).append('<div class="energybar" id ="EB' + units[selectedindex].index + '"style="width: ' + units[selectedindex].energy + '%"></div>');
                             for (var z = 1; z < 6; z++) {
                                 if (Eunits[Eslots[z]].alive === false) {
                                     continue;
                                 }
                                 defense = 0;
                                 if (Eunits[Eslots[z]].enfeeble === 0) {
                                     defense = Eunits[Eslots[z]].defense
                                 }
                                 damage = (units[selectedindex].attack - defense + units[selectedindex].attacktempboost);
                                 if (damage < 0) {
                                     damage = 0
                                 }
                                 if (units[selectedindex].curtop - 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) {
                                     if ((Eunits[enemyindex].curleft === Eunits[Eslots[z]].curleft && Eunits[enemyindex].curtop === Eunits[Eslots[z]].curtop) || (Eunits[enemyindex].curleft - 100 === Eunits[Eslots[z]].curleft && Eunits[enemyindex].curtop === Eunits[Eslots[z]].curtop) || (Eunits[enemyindex].curleft + 100 === Eunits[Eslots[z]].curleft && Eunits[enemyindex].curtop === Eunits[Eslots[z]].curtop)) {
                                         units[selectedindex].usedaction = true;
                                         slashattack()
                                         Damaging(Eslots[z], damage);
                                     }
                                 }
                                 if (units[selectedindex].curtop + 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) {
                                     if ((Eunits[enemyindex].curleft === Eunits[Eslots[z]].curleft && Eunits[enemyindex].curtop === Eunits[Eslots[z]].curtop) || (Eunits[enemyindex].curleft - 100 === Eunits[Eslots[z]].curleft && Eunits[enemyindex].curtop === Eunits[Eslots[z]].curtop) || (Eunits[enemyindex].curleft + 100 === Eunits[Eslots[z]].curleft && Eunits[enemyindex].curtop === Eunits[Eslots[z]].curtop)) {
                                         units[selectedindex].usedaction = true;
                                         slashattack()
                                         Damaging(Eslots[z], damage);
                                     }
                                 }
                                 if (units[selectedindex].curleft - 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop) {
                                     if ((Eunits[enemyindex].curtop === Eunits[Eslots[z]].curtop && Eunits[enemyindex].curleft === Eunits[Eslots[z]].curleft) || (Eunits[enemyindex].curtop - 100 === Eunits[Eslots[z]].curtop && Eunits[enemyindex].curleft === Eunits[Eslots[z]].curleft) || (Eunits[enemyindex].curtop + 100 === Eunits[Eslots[z]].curtop && Eunits[enemyindex].curleft === Eunits[Eslots[z]].curleft)) {
                                         if (units[selectedindex].usedaction === false) {
                                             if (units[selectedindex].energy < 30) {
                                                 message("The Knight doesn't have enough stamina to use sweep. Pass the turn without using him to refill his stamina.");
                                                 return;
                                             }
                                             units[selectedindex].energy -= 30;
                                         }
                                         units[selectedindex].usedaction = true;
                                         slashattack()
                                         Damaging(Eslots[z], damage);
                                     }
                                 }
                                 if (units[selectedindex].curleft + 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop) {
                                     if ((Eunits[enemyindex].curtop === Eunits[Eslots[z]].curtop && Eunits[enemyindex].curleft === Eunits[Eslots[z]].curleft) || (Eunits[enemyindex].curtop - 100 === Eunits[Eslots[z]].curtop && Eunits[enemyindex].curleft === Eunits[Eslots[z]].curleft) || (Eunits[enemyindex].curtop + 100 === Eunits[Eslots[z]].curtop && Eunits[enemyindex].curleft === Eunits[Eslots[z]].curleft)) {
                                         slashattack()
                                         if (units[selectedindex].usedaction === false) {
                                             if (units[selectedindex].energy < 30) {
                                                 message("The Knight doesn't have enough stamina to use sweep. Pass the turn without using him to refill his stamina.");
                                                 return;
                                             }
                                             units[selectedindex].energy -= 30;
                                         }
                                         units[selectedindex].usedaction = true;
                                         Damaging(Eslots[z], damage);
                                     }
                                 }
                             }
                         }
                     }
                     else {
                         $("#TEXT").append("This unit is blind for " + units[selectedindex].blind + " more turns.")
                     }
                 }
                 //Thief
                 if (selectedaction === "thiefAttack" || selectedaction === "mimicAttack") {
                     if (units[selectedindex].blind === 0) {
                         var e = document.getElementById("thiefchoice");
                         if (selectedaction === "mimicAttack") {
                             e = document.getElementById("mimicchoice");
                         }
                         if ($('#thiefchoice option:selected').text() === "Normal" || $('#thiefchoice option:selected').text() === "Mug" || e.options[e.selectedIndex].value === "Mug") {
                             var defense = 0;
                             if (Eunits[enemyindex].enfeeble === 0) {
                                 defense = Eunits[enemyindex].defense
                             }
                             var damage = (units[selectedindex].attack - defense + units[selectedindex].attacktempboost);
                             if (damage < 0) {
                                 damage = 0
                             }
                             if (Eunits[enemyindex].phasedout === true) {
                                 damage = 0;
                             }
                             if (Eunits[enemyindex].health === Eunits[enemyindex].maxhealth && units[selectedindex].abilityfirstblow === true) {
                                 Eunits[enemyindex].blind += 2;
                                 showailments();
                             }
                             if (units[selectedindex].abilitybackstab === true && units[selectedindex].curleft === Eunits[enemyindex].curleft && (units[selectedindex].curtop === Eunits[enemyindex].curtop - 100)) {
                                 damage = damage * 2;
                             }
                             if ((units[selectedindex].curtop - 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curtop + 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curleft - 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop) || (units[selectedindex].curleft + 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop)) {
                                 units[selectedindex].usedaction = true;
                                 slashattack()
                                 setTimeout(function () {
                                     Damaging(enemyindex, damage);
                                 }, 500);
                             }
                         }
                         if ($('#thiefchoice option:selected').text() === "Steal" || $('#thiefchoice option:selected').text() === "Mug" || e.options[e.selectedIndex].value === "Steal") {
                             if ((units[selectedindex].curtop - 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curtop + 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curleft - 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop) || (units[selectedindex].curleft + 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop)) {
                                 if (Eunits[enemyindex].item === "") {
                                     $("#TEXT").append(Eunits[enemyindex].name + " has nothing to steal.");
                                     return;
                                 }
                                 units[selectedindex].usedaction = true;
                                 $("#TEXT").empty();
                                 var randnum = Math.floor((Math.random() * Eunits[enemyindex].maxhealth) + 1) + 20;
                                 if (Eunits[enemyindex].abilitybettersteal === true) {
                                     randnum = 10000000
                                 }
                                 if (randnum > (Eunits[enemyindex].health - damage)) {
                                     Eunits[enemyindex].item = "";
                                     var stealnum = Math.floor((Math.random() * 33) + 1);
                                     if (Eunits[enemyindex].type === "Clunker" || Eunits[enemyindex].type === "Sounddepressor" || Eunits[enemyindex].type === "Magnet" || Eunits[enemyindex].type === "Cannon" || Eunits[enemyindex].type === "Vacuum") {
                                         stealnum = "";
                                         $("#TEXT").append("<p>He stole the machine's battery. The machine shuts down.</p>");
                                         Eunits[enemyindex].health = 0;
                                     }
                                     switch (stealnum) {
                                     case 1:
                                         ingredient["Honey"].quantity += 1;
                                         $("#TEXT").append("<p>He stole <b>Honey</b></p>")
                                         break;
                                     case 2:
                                         ingredient["Honey"].quantity += 2;
                                         $("#TEXT").append("<p>He stole 2 <b>Honey</b></p>")
                                         break;
                                     case 3:
                                         ingredient["Extract"].quantity += 1;
                                         $("#TEXT").append("<p>He stole <b>Extract</b></p>")
                                         break;
                                     case 4:
                                         ingredient["Extract"].quantity += 2;
                                         $("#TEXT").append("<p>He stole 2 <b>Extract</b></p>")
                                         break;
                                     case 5:
                                         ingredient["Mushrooms"].quantity += 1;
                                         $("#TEXT").append("<p>He stole a <b>Mushroom</b></p>")
                                         break;
                                     case 6:
                                         ingredient["Mushrooms"].quantity += 2;
                                         $("#TEXT").append("<p>He stole 2 <b>Mushrooms</b></p>")
                                         break;
                                     case 7:
                                         ingredient["Flowers"].quantity += 1;
                                         $("#TEXT").append("<p>He stole a <b>Flower</b></p>")
                                         break;
                                     case 8:
                                         ingredient["Flowers"].quantity += 2;
                                         $("#TEXT").append("<p>He stole 2 <b>Flowers</b></p>")
                                         break;
                                     case 9:
                                         ingredient["Essence"].quantity += 1;
                                         $("#TEXT").append("<p>He stole a <b>Essence</b></p>")
                                         break;
                                     case 10:
                                         ingredient["Essence"].quantity += 2;
                                         $("#TEXT").append("<p>He stole 2 <b>Essence</b></p>")
                                         break;
                                     case 11:
                                         ingredient["Powder"].quantity += 1;
                                         $("#TEXT").append("<p>He stole a <b>Powder</b></p>")
                                         break;
                                     case 12:
                                         ingredient["Powder"].quantity += 2;
                                         $("#TEXT").append("<p>He stole 2 <b>Powder</b></p>")
                                         break;
                                     case 13:
                                         ingredient["Sap"].quantity += 1;
                                         $("#TEXT").append("<p>He stole a <b>Sap</b></p>")
                                         break;
                                     case 14:
                                         ingredient["Sap"].quantity += 2;
                                         $("#TEXT").append("<p>He stole 2 <b>Sap</b></p>")
                                         break;
                                     case 15:
                                         ingredient["Herbs"].quantity += 1;
                                         $("#TEXT").append("<p>He stole an <b>Herb</b></p>")
                                         break;
                                     case 16:
                                         ingredient["Herbs"].quantity += 2;
                                         $("#TEXT").append("<p>He stole 2 <b>Herbs</b></p>")
                                         break;
                                     case 17:
                                         ingredient["Berries"].quantity += 1;
                                         $("#TEXT").append("<p>He stole a <b>Berry</b></p>")
                                         break;
                                     case 18:
                                         ingredient["Berries"].quantity += 2;
                                         $("#TEXT").append("<p>He stole 2 <b>Berries</b></p>")
                                         break;
                                     case 19:
                                         ingredient["Roots"].quantity += 1;
                                         $("#TEXT").append("<p>He stole a <b>Root</b></p>")
                                         break;
                                     case 20:
                                         ingredient["Roots"].quantity += 2;
                                         $("#TEXT").append("<p>He stole 2 <b>Roots</b></p>")
                                         break;
                                     case 21:
                                     case 22:
                                     case 23:
                                     case 24:
                                     case 25:
                                         $("#TEXT").append(Eunits[enemyindex].name + " has nothing to steal.");
                                         break;
                                     case 26:
                                         revivepotion += 1;
                                         $("#TEXT").append("<p>He stole a revive potion.</p>")
                                         break;
                                     case 27:
                                         recoverpotion += 1;
                                         $("#TEXT").append("<p>He stole a recover potion</p>")
                                         break;
                                     case 28:
                                         teleportpotion += 1;
                                         $("#TEXT").append("<p>He stole teleport potion</p>")
                                         break;
                                     case 29:
                                         defensepotion += 1;
                                         $("#TEXT").append("<p>He stole a defence potion</p>")
                                         break;
                                     case 30:
                                         strengthpotion += 1;
                                         $("#TEXT").append("<p>He stole a strength potion</p>")
                                         break;
                                     case 31:
                                         healthpotion += 1;
                                         $("#TEXT").append("<p>He stole a health potion</p>")
                                         break;
                                     case 32:
                                         resistancepotion += 1;
                                         $("#TEXT").append("<p>He stole a resistance potion</p>")
                                         break;
                                     case 33:
                                         leveluppotion += 2;
                                         $("#TEXT").append("<p>He stole a level-up potion</p>")
                                         break;
                                     }
                                 }
                                 else {
                                     $("#TEXT").append(units[selectedindex].name + " failed to steal. Lower the enemy's health to make it easier to steal from.")
                                 }
                                 if ($('#thiefchoice option:selected').text() === "Steal" && units[selectedindex].abilityinvisible === true) {
                                     units[selectedindex].type = "Invisible";
                                     $("#" + selectedindex).addClass("Invisible");
                                 }
                             }
                         }
                         if ($('#thiefchoice option:selected').text() === "Phase" || e.options[e.selectedIndex].value === "Phase") {
                             if (units[selectedindex].abilityinvisible === true) {
                                 units[selectedindex].type = "Invisible";
                                 $("#" + selectedindex).addClass("Invisible");
                             }
                             if (units[selectedindex].curtop - 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) {
                                 units[selectedindex].usedaction = true;
                                 units[selectedindex].curtop -= 100
                                 Eunits[enemyindex].curtop += 100;
                                 $("#E" + enemyindex).animate({
                                     top: "+=100px"
                                 , })
                                 $("#" + selectedindex).animate({
                                     top: "-=100px"
                                 , })
                             }
                             if (units[selectedindex].curtop + 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft && units[selectedindex].usedaction == false) {
                                 units[selectedindex].usedaction = true;
                                 units[selectedindex].curtop += 100
                                 Eunits[enemyindex].curtop -= 100;
                                 $("#E" + enemyindex).animate({
                                     top: "-=100px"
                                 , })
                                 $("#" + selectedindex).animate({
                                     top: "+=100px"
                                 , })
                             }
                             if (units[selectedindex].curtop === Eunits[enemyindex].curtop && units[selectedindex].curleft - 100 === Eunits[enemyindex].curleft && units[selectedindex].usedaction == false) {
                                 units[selectedindex].usedaction = true;
                                 units[selectedindex].curleft -= 100
                                 Eunits[enemyindex].curleft += 100;
                                 $("#E" + enemyindex).animate({
                                     left: "+=100px"
                                 , })
                                 $("#" + selectedindex).animate({
                                     left: "-=100px"
                                 , })
                             }
                             if (units[selectedindex].curtop === Eunits[enemyindex].curtop && units[selectedindex].curleft + 100 === Eunits[enemyindex].curleft && units[selectedindex].usedaction == false) {
                                 units[selectedindex].usedaction = true;
                                 units[selectedindex].curleft += 100
                                 Eunits[enemyindex].curleft -= 100;
                                 $("#E" + enemyindex).animate({
                                     left: "-=100px"
                                 , })
                                 $("#" + selectedindex).animate({
                                     left: "+=100px"
                                 , })
                             }
                             $("#TEXT").append("<p>" + Eunits[enemyindex].name + " has been enfeebled for 3 turns.</p>")
                             Eunits[enemyindex].enfeeble = 3;
                         }
                     }
                     else {
                         $("#TEXT").append("This unit is blind for " + units[selectedindex].blind + " more turns.")
                     }
                 }
                 //mage
                 if (selectedaction === "mageCast" || selectedaction === "mimicAttack") {
                     if (units[selectedindex].silenced === 0) {
                         var e = document.getElementById("magechoice");
                         if (selectedaction === "mimicAttack") {
                             e = document.getElementById("mimicchoice");
                         }
                         //fire
                         if ($('#magechoice option:selected').text() === "Fire" || e.options[e.selectedIndex].value === "Fire") {
                             var defense = 0;
                             if (Eunits[enemyindex].enfeeble === 0) {
                                 defense = Eunits[enemyindex].resistance
                             }
                             var damage = (units[selectedindex].attack - defense + units[selectedindex].attacktempboost) * Eunits[enemyindex].fire;
                             elementalNum = Eunits[enemyindex].fire;
                             if (damage < 0) {
                                 damage = 0
                             }
                             if ((Eunits[Eslots[1]].type === "Sounddepressor" && Eunits[Eslots[1]].alive === true) || (Eunits[Eslots[2]].type === "Sounddepressor" && Eunits[Eslots[2]].alive === true) || (Eunits[Eslots[3]].type === "Sounddepressor" && Eunits[Eslots[3]].alive === true) || (Eunits[Eslots[4]].type === "Sounddepressor" && Eunits[Eslots[4]].alive === true) || (Eunits[Eslots[5]].type === "Sounddepressor" && Eunits[Eslots[5]].alive === true)) {
                                 message("The Sound Depressor nullifies all magic.")
                                 return;
                             }
                             if ((units[selectedindex].curtop + 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft + 100 === Eunits[enemyindex].curleft) || (units[selectedindex].curtop + 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft - 100 === Eunits[enemyindex].curleft) || (units[selectedindex].curtop - 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft + 100 === Eunits[enemyindex].curleft) || (units[selectedindex].curtop - 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft - 100 === Eunits[enemyindex].curleft) || (units[selectedindex].curtop - 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curtop + 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curleft - 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop) || (units[selectedindex].curleft + 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop) || (units[selectedindex].curtop - 200 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curtop + 200 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curleft - 200 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop) || (units[selectedindex].curleft + 200 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop)) {
                                 if (Eunits[enemyindex].phasedout === true) {
                                     if (Eunits[enemyindex].type === "Frostwraith") {}
                                     else {
                                         damage = 0;
                                     }
                                     Eunits[enemyindex].phasedout = false;
                                     $("#E" + Eunits[enemyindex].index).removeClass("Invisible");
                                     $("#TEXT").append("The wraith phased back in.")
                                 }
                                 var tempran = Math.floor((Math.random() * 2) + 1);
                                 if (units[selectedindex].abilityelementalailments === true && tempran === 2) {
                                     Eunits[enemyindex].blind = 2;
                                     showailments();
                                 }
                                 //effects
                                 var selectednow = selectedindex
                                 setTimeout(function () {
                                     $("#" + selectednow + " .dirpic").attr("src", units[selectednow].casting)
                                     $("#" + selectednow).append("<img style='margin-left:-16px;margin-top:-170px' class='effect' src='../Pictures/Effects/Mage_effect.gif' />")
                                 }, 100)
                                 setTimeout(function () {
                                     $("#" + selectednow + " .dirpic").attr("src", units[selectednow].image)
                                     $(".effect").remove();
                                 }, 1000)
                                 $("#battlebackground").append("<div class='Effects' style='top: " + units[selectedindex].curtop + "px; left: " + units[selectedindex].curleft + "px'><img src='../Pictures/Effects/EffectFire.gif' /></div>");
                                 $(".Effects").animate({
                                     left: Eunits[enemyindex].curleft + "px"
                                     , top: Eunits[enemyindex].curtop + "px"
                                 }, 500).fadeOut(500);
                                 setTimeout(function () {
                                     Damaging(enemyindex, damage);
                                 }, 500);
                                 Fire.play();
                                 if (units[selectedindex].usedaction === true && units[selectedindex].abilitydoubletap === true) {
                                     units[selectedindex].moved = true;
                                 }
                                 units[selectedindex].usedaction = true;
                             }
                         }
                         //zap
                         if ($('#magechoice option:selected').text() === "Zap" || e.options[e.selectedIndex].value === "Zap") {
                             if ((Eunits[Eslots[1]].type === "Sounddepressor" && Eunits[Eslots[1]].alive === true) || (Eunits[Eslots[2]].type === "Sounddepressor" && Eunits[Eslots[2]].alive === true) || (Eunits[Eslots[3]].type === "Sounddepressor" && Eunits[Eslots[3]].alive === true) || (Eunits[Eslots[4]].type === "Sounddepressor" && Eunits[Eslots[4]].alive === true) || (Eunits[Eslots[5]].type === "Sounddepressor" && Eunits[Eslots[5]].alive === true)) {
                                 message("The Sound Depressor nullifies all magic.")
                                 return;
                             }
                             if ((units[selectedindex].curtop - 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curtop + 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curleft - 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop) || (units[selectedindex].curleft + 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop) || (units[selectedindex].curtop - 200 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curtop + 200 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curleft - 200 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop) || (units[selectedindex].curleft + 200 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop)) {
                                 Zap.play();
                                 //effects
                                 var selectednow = selectedindex
                                 setTimeout(function () {
                                     $("#" + selectednow + " .dirpic").attr("src", units[selectednow].casting)
                                     $("#" + selectednow).append("<img style='margin-left:-16px;margin-top:-170px' class='effect' src='../Pictures/Effects/Mage_effect.gif' />")
                                 }, 100)
                                 setTimeout(function () {
                                     $("#" + selectednow + " .dirpic").attr("src", units[selectednow].image)
                                     $(".effect").remove();
                                 }, 1000)
                                 if (units[selectedindex].usedaction === true && units[selectedindex].abilitydoubletap === true) {
                                     units[selectedindex].moved = true;
                                 }
                                 units[selectedindex].usedaction = true;
                                 elementalNum = Eunits[enemyindex].lightning;
                                 if (units[selectedindex].curtop > Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) {
                                     $("#battlebackground").append("<div class='staticEffects' style='margin-top: " + (units[selectedindex].curtop - 750) + "px; margin-left: " + (units[selectedindex].curleft - 115) + "px'><img src='../Pictures/Effects/Zap.gif' /></div>");
                                     for (var i = 1; i < 6; i++) {
                                         if ((units[selectedindex].curtop - 100 === Eunits[Eslots[i]].curtop && units[selectedindex].curleft === Eunits[Eslots[i]].curleft) || (units[selectedindex].curtop - 200 === Eunits[Eslots[i]].curtop && units[selectedindex].curleft === Eunits[Eslots[i]].curleft)) {
                                             var defense = 0;
                                             if (Eunits[Eslots[i]].enfeeble === 0) {
                                                 defense = Eunits[Eslots[i]].resistance
                                             }
                                             var damage = (units[selectedindex].attack - defense + units[selectedindex].attacktempboost) * Eunits[Eslots[i]].lightning;
                                             if (damage < 0) {
                                                 damage = 0
                                             }
                                             if (Eunits[Eslots[i]].phasedout === true) {
                                                 if (Eunits[Eslots[i]].type === "Waterwraith") {}
                                                 else {
                                                     damage = 0;
                                                 }
                                                 Eunits[Eslots[i]].phasedout = false;
                                                 $("#E" + Eunits[Eslots[i]].index).removeClass("Invisible");
                                                 $("#TEXT").append("The wraith phased back in.")
                                             }
                                             var tempran = Math.floor((Math.random() * 2) + 1);
                                             if (units[selectedindex].abilityelementalailments === true && tempran === 2) {
                                                 Eunits[Eslots[i]].immobilized = 2;
                                                 showailments();
                                             }
                                             Damaging(Eslots[i], damage);
                                         }
                                     }
                                 }
                                 if (units[selectedindex].curtop < Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) {
                                     $("#battlebackground").append("<div class='staticEffects' style='margin-top: " + (units[selectedindex].curtop - 450) + "px; margin-left: " + (units[selectedindex].curleft - 115) + "px'><img src='../Pictures/Effects/Zap.gif' /></div>");
                                     for (var i = 1; i < 6; i++) {
                                         if ((units[selectedindex].curtop + 100 === Eunits[Eslots[i]].curtop && units[selectedindex].curleft === Eunits[Eslots[i]].curleft) || (units[selectedindex].curtop + 200 === Eunits[Eslots[i]].curtop && units[selectedindex].curleft === Eunits[Eslots[i]].curleft)) {
                                             var defense = 0;
                                             if (Eunits[Eslots[i]].enfeeble === 0) {
                                                 defense = Eunits[Eslots[i]].resistance
                                             }
                                             var damage = (units[selectedindex].attack - defense + units[selectedindex].attacktempboost) * Eunits[Eslots[i]].lightning;
                                             if (damage < 0) {
                                                 damage = 0
                                             }
                                             if (Eunits[Eslots[i]].phasedout === true) {
                                                 if (Eunits[Eslots[i]].type === "Waterwraith") {}
                                                 else {
                                                     damage = 0;
                                                 }
                                                 Eunits[Eslots[i]].phasedout = false;
                                                 $("#E" + Eunits[Eslots[i]].index).removeClass("Invisible");
                                                 $("#TEXT").append("The wraith phased back in.")
                                             }
                                             var tempran = Math.floor((Math.random() * 2) + 1);
                                             if (units[selectedindex].abilityelementalailments === true && tempran === 2) {
                                                 Eunits[Eslots[i]].immobilized = 2;
                                                 showailments();
                                             }
                                             Damaging(Eslots[i], damage);
                                         }
                                     }
                                 }
                                 if (units[selectedindex].curtop === Eunits[enemyindex].curtop && units[selectedindex].curleft < Eunits[enemyindex].curleft) {
                                     $("#battlebackground").append("<div class='staticEffects' style='transform: rotate(90deg) translate(-100%,-100%); margin-top: " + (units[selectedindex].curtop - 320) + "px; margin-left: " + (units[selectedindex].curleft - 280) + "px'><img src='../Pictures/Effects/Zap.gif' /></div>");
                                     for (var i = 1; i < 6; i++) {
                                         if (Eunits[Eslots[i]].alive === false) {
                                             continue;
                                         }
                                         if ((units[selectedindex].curtop === Eunits[Eslots[i]].curtop && units[selectedindex].curleft + 100 === Eunits[Eslots[i]].curleft) || (units[selectedindex].curtop === Eunits[Eslots[i]].curtop && units[selectedindex].curleft + 200 === Eunits[Eslots[i]].curleft)) {
                                             var defense = 0;
                                             if (Eunits[Eslots[i]].enfeeble === 0) {
                                                 defense = Eunits[Eslots[i]].resistance
                                             }
                                             var damage = (units[selectedindex].attack - defense + units[selectedindex].attacktempboost) * Eunits[Eslots[i]].lightning;
                                             if (damage < 0) {
                                                 damage = 0
                                             }
                                             if (Eunits[Eslots[i]].phasedout === true) {
                                                 if (Eunits[Eslots[i]].type === "Waterwraith") {}
                                                 else {
                                                     damage = 0;
                                                 }
                                                 Eunits[Eslots[i]].phasedout = false;
                                                 $("#E" + Eunits[Eslots[i]].index).removeClass("Invisible");
                                                 $("#TEXT").append("The wraith phased back in.")
                                             }
                                             var tempran = Math.floor((Math.random() * 2) + 1);
                                             if (units[selectedindex].abilityelementalailments === true && tempran === 2) {
                                                 Eunits[Eslots[i]].immobilized = 2;
                                                 showailments();
                                             }
                                             Damaging(Eslots[i], damage);
                                         }
                                     }
                                 }
                                 if (units[selectedindex].curtop === Eunits[enemyindex].curtop && units[selectedindex].curleft > Eunits[enemyindex].curleft) {
                                     $("#battlebackground").append("<div class='staticEffects' style='transform: rotate(90deg) translate(-100%,-100%); margin-top: " + (units[selectedindex].curtop - 320) + "px; margin-left: " + (units[selectedindex].curleft - 530) + "px'><img src='../Pictures/Effects/Zap.gif' /></div>");
                                     for (var i = 1; i < 6; i++) {
                                         if (Eunits[Eslots[i]].alive === false) {
                                             continue;
                                         }
                                         if ((units[selectedindex].curtop === Eunits[Eslots[i]].curtop && units[selectedindex].curleft - 100 === Eunits[Eslots[i]].curleft) || (units[selectedindex].curtop === Eunits[Eslots[i]].curtop && units[selectedindex].curleft - 200 === Eunits[Eslots[i]].curleft)) {
                                             var defense = 0;
                                             if (Eunits[Eslots[i]].enfeeble === 0) {
                                                 defense = Eunits[Eslots[i]].resistance
                                             }
                                             var damage = (units[selectedindex].attack - defense + units[selectedindex].attacktempboost) * Eunits[Eslots[i]].lightning;
                                             if (damage < 0) {
                                                 damage = 0
                                             }
                                             if (Eunits[Eslots[i]].phasedout === true) {
                                                 if (Eunits[Eslots[i]].type === "Waterwraith") {}
                                                 else {
                                                     damage = 0;
                                                 }
                                                 Eunits[Eslots[i]].phasedout = false;
                                                 $("#E" + Eunits[Eslots[i]].index).removeClass("Invisible");
                                                 $("#TEXT").append("The wraith phased back in.")
                                             }
                                             var tempran = Math.floor((Math.random() * 2) + 1);
                                             if (units[selectedindex].abilityelementalailments === true && tempran === 2) {
                                                 Eunits[Eslots[i]].immobilized = 2;
                                                 showailments();
                                             }
                                             Damaging(Eslots[i], damage);
                                         }
                                     }
                                 }
                                 $(".staticEffects").fadeOut(2000);
                             }
                         }
                         //Freeze
                         if ($('#magechoice option:selected').text() === "Freeze" || e.options[e.selectedIndex].value === "Freeze") {
                             if ((Eunits[Eslots[1]].type === "Sounddepressor" && Eunits[Eslots[1]].alive === true) || (Eunits[Eslots[2]].type === "Sounddepressor" && Eunits[Eslots[2]].alive === true) || (Eunits[Eslots[3]].type === "Sounddepressor" && Eunits[Eslots[3]].alive === true) || (Eunits[Eslots[4]].type === "Sounddepressor" && Eunits[Eslots[4]].alive === true) || (Eunits[Eslots[5]].type === "Sounddepressor" && Eunits[Eslots[5]].alive === true)) {
                                 message("The Sound Depressor nullifies all magic.")
                                 return;
                             }
                             var defense = 0;
                             if (Eunits[enemyindex].enfeeble === 0) {
                                 defense = Eunits[enemyindex].resistance
                             }
                             var damage = ((units[selectedindex].attack) - defense + units[selectedindex].attacktempboost) * Eunits[enemyindex].ice;
                             elementalNum = Eunits[enemyindex].ice;
                             if (damage < 0) {
                                 damage = 0
                             }
                             if (Eunits[enemyindex].phasedout === true) {
                                 if (Eunits[enemyindex].type === "Flamewraith") {}
                                 else {
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
                             if ((units[selectedindex].curtop - 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curtop + 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curleft - 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop) || (units[selectedindex].curleft + 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop) || (units[selectedindex].curtop - 200 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curtop + 200 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curleft - 200 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop) || (units[selectedindex].curleft + 200 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop) || (units[selectedindex].curtop - 300 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curtop + 300 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curleft - 300 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop) || (units[selectedindex].curleft + 300 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop)) {
                                 console.log("Freeze3")
                                     //effects
                                 $("#battlebackground").append("<div class='Effects' style='top: " + units[selectedindex].curtop + "px;left: " + units[selectedindex].curleft + "px'><img src='../Pictures/Effects/EffectIce.gif' /></div>");
                                 $(".Effects").animate({
                                     left: Eunits[enemyindex].curleft + "px"
                                     , top: Eunits[enemyindex].curtop + "px"
                                 }, 500).fadeOut(500);
                                 setTimeout(function () {
                                     Damaging(enemyindex, damage);
                                 }, 500);
                                 $(".staticEffects").fadeOut(2000);
                                 Iceattack.play();
                                 //effects
                                 var selectednow = selectedindex
                                 setTimeout(function () {
                                     $("#" + selectednow + " .dirpic").attr("src", units[selectednow].casting)
                                     $("#" + selectednow).append("<img style='margin-left:-16px;margin-top:-170px' class='effect' src='../Pictures/Effects/Mage_effect.gif' />")
                                 }, 100)
                                 setTimeout(function () {
                                     $("#" + selectednow + " .dirpic").attr("src", units[selectednow].image)
                                     $(".effect").remove();
                                 }, 1000)
                                 if (units[selectedindex].usedaction === true && units[selectedindex].abilitydoubletap === true) {
                                     units[selectedindex].moved = true;
                                 }
                                 units[selectedindex].usedaction = true;
                             }
                         }
                         //Execute
                         if ($('#magechoice option:selected').text() === "Execute" || e.options[e.selectedIndex].value === "Execute") {
                             if ((Eunits[Eslots[1]].type === "Sounddepressor" && Eunits[Eslots[1]].alive === true) || (Eunits[Eslots[2]].type === "Sounddepressor" && Eunits[Eslots[2]].alive === true) || (Eunits[Eslots[3]].type === "Sounddepressor" && Eunits[Eslots[3]].alive === true) || (Eunits[Eslots[4]].type === "Sounddepressor" && Eunits[Eslots[4]].alive === true) || (Eunits[Eslots[5]].type === "Sounddepressor" && Eunits[Eslots[5]].alive === true)) {
                                 message("The Sound Depressor nullifies all magic.")
                                 return;
                             }
                             var temprand = Math.floor((Math.random() * Eunits[enemyindex].maxhealth) + 1);
                             if (Eunits[enemyindex].health < temprand) {
                                 Death.play();
                                 //effects
                                 var selectednow = selectedindex
                                 setTimeout(function () {
                                     $("#" + selectednow + " .dirpic").attr("src", units[selectednow].casting)
                                     $("#" + selectednow).append("<img style='margin-left:-16px;margin-top:-170px' class='effect' src='../Pictures/Effects/Mage_effect.gif' />")
                                 }, 100)
                                 setTimeout(function () {
                                     $("#" + selectednow + " .dirpic").attr("src", units[selectednow].image)
                                     $(".effect").remove();
                                 }, 1000)
                                 $("#battlebackground").append("<div class='slashEffects' style='margin-top: " + (Eunits[enemyindex].curtop - 450) + "px; margin-left: " + (Eunits[enemyindex].curleft - 0) + "px'><img src='../Pictures/Effects/Death.gif' /></div>");
                                 $(".slashEffects").fadeOut(2000);
                                 if (units[selectedindex].usedaction === true && units[selectedindex].abilitydoubletap === true) {
                                     units[selectedindex].moved = true;
                                 }
                                 units[selectedindex].usedaction = true;
                                 setTimeout(function () {
                                     Damaging(enemyindex, Eunits[enemyindex].health);
                                 }, 500);
                             }
                             else {
                                 $("#TEXT").append(units[selectedindex].name + " has failed to execute the " + Eunits[enemyindex].name)
                                 units[selectedindex].usedaction = true;
                             }
                         }
                     }
                     else {
                         $("#TEXT").append("This unit is silenced for " + units[selectedindex].silenced + " more turns.")
                     }
                     if (units[selectedindex].usedaction === true) {
                         return;
                     }
                 }
                 //wizard
                 if (selectedaction === "wizardCast" || selectedaction === "mimicAttack") {
                     if (units[selectedindex].silenced === 0) {
                         var e = document.getElementById("wizardchoice");
                         if (selectedaction === "mimicAttack") {
                             e = document.getElementById("mimicchoice");
                         }
                         //bolt
                         if ($('#wizardchoice option:selected').text() === "Bolt(2)" || e.options[e.selectedIndex].value === "Bolt(2)") {
                             if ((Eunits[Eslots[1]].type === "Sounddepressor" && Eunits[Eslots[1]].alive === true) || (Eunits[Eslots[2]].type === "Sounddepressor" && Eunits[Eslots[2]].alive === true) || (Eunits[Eslots[3]].type === "Sounddepressor" && Eunits[Eslots[3]].alive === true) || (Eunits[Eslots[4]].type === "Sounddepressor" && Eunits[Eslots[4]].alive === true) || (Eunits[Eslots[5]].type === "Sounddepressor" && Eunits[Eslots[5]].alive === true)) {
                                 message("The Sound Depressor nullifies all magic.")
                                 return;
                             }
                             var defense = 0;
                             if (Eunits[enemyindex].enfeeble === 0) {
                                 defense = Eunits[enemyindex].resistance
                             }
                             var damage = ((units[selectedindex].attack + units[selectedindex].attacktempboost) - defense) * 2 * Eunits[enemyindex].lightning;
                             elementalNum = Eunits[enemyindex].lightning;
                             if (damage < 0) {
                                 damage = 0
                             }
                             if (units[selectedindex].charge < 2) {
                                 $("#TEXT").append("<p>" + units[selectedindex].name + " only has a charge of " + units[selectedindex].charge + ". He needs a charge of 2 to use Bolt\n</p>");
                                 return;
                             }
                             if (Eunits[enemyindex].phasedout === true) {
                                 if (Eunits[enemyindex].type === "Waterwraith") {}
                                 else {
                                     damage = 0;
                                 }
                                 Eunits[enemyindex].phasedout = false;
                                 $("#E" + Eunits[enemyindex].index).removeClass("Invisible");
                                 $("#TEXT").append("The wraith phased back in.")
                             }
                             var tempran = Math.floor((Math.random() * 2) + 1);
                             if (units[selectedindex].abilityelementalailments === true && tempran === 2) {
                                 Eunits[enemyindex].immobilized = 2;
                                 showailments();
                             }
                             //effects
                             var selectednow = selectedindex
                             setTimeout(function () {
                                 $("#" + selectednow + " .dirpic").attr("src", units[selectednow].casting)
                                 $("#" + selectednow).append("<img style='margin-left:20px;margin-top:-160px' class='effect' src='../Pictures/Effects/Wizard_effect.gif' />")
                             }, 100)
                             setTimeout(function () {
                                 $("#" + selectednow + " .dirpic").attr("src", units[selectednow].image)
                                 $(".effect").remove();
                             }, 1000)
                             $("#battlebackground").append("<div class='staticEffects' style='margin-top: " + (Eunits[enemyindex].curtop - 750) + "px; margin-left: " + (Eunits[enemyindex].curleft - 100) + "px'><img src='../Pictures/Effects/EffectLightning.gif' /></div>");
                             setTimeout(function () {
                                 Damaging(enemyindex, damage);
                             }, 500);
                             $(".staticEffects").fadeOut(2000);
                             Lightning.play();
                             units[selectedindex].charge -= 2;
                             units[selectedindex].usedaction = true;
                         }
                         //Missile
                         if ($('#wizardchoice option:selected').text() === "Missile(X)" || e.options[e.selectedIndex].value === "Missile(X)") {
                             if ((Eunits[Eslots[1]].type === "Sounddepressor" && Eunits[Eslots[1]].alive === true) || (Eunits[Eslots[2]].type === "Sounddepressor" && Eunits[Eslots[2]].alive === true) || (Eunits[Eslots[3]].type === "Sounddepressor" && Eunits[Eslots[3]].alive === true) || (Eunits[Eslots[4]].type === "Sounddepressor" && Eunits[Eslots[4]].alive === true) || (Eunits[Eslots[5]].type === "Sounddepressor" && Eunits[Eslots[5]].alive === true)) {
                                 message("The Sound Depressor nullifies all magic.")
                                 return;
                             }
                             if (Eunits[enemyindex].curleft != units[selectedindex].curleft && Eunits[enemyindex].curtop != units[selectedindex].curtop) {
                                 return;
                             }
                             if (units[selectedindex].charge < 1) {
                                 $("#TEXT").append("<p>" + units[selectedindex].name + " only has a charge of " + units[selectedindex].charge + ". He needs a charge of at least 1 to use missiles.\n</p>");
                                 return;
                             }
                             var blows = units[selectedindex].charge;
                             var loopnum = 0
                             inanimation = true;
                             for (var i = 0; i < blows; i++) {
                                 setTimeout(function () {
                                     var defense = 0;
                                     if (Eunits[enemyindex].enfeeble === 0) {
                                         defense = Eunits[enemyindex].resistance
                                     }
                                     var damage = (units[selectedindex].attack + units[selectedindex].attacktempboost - defense) * Eunits[enemyindex].fire;
                                     elementalNum = Eunits[enemyindex].fire
                                     if (damage < 0) {
                                         damage = 0
                                     }
                                     if (Eunits[enemyindex].phasedout === true) {
                                         if (Eunits[enemyindex].type === "Frostwraith") {}
                                         else {
                                             damage = 0;
                                         }
                                         Eunits[enemyindex].phasedout = false;
                                         $("#E" + Eunits[enemyindex].index).removeClass("Invisible");
                                         $("#TEXT").append("The wraith phased back in.")
                                     }
                                     var tempran = Math.floor((Math.random() * 2) + 1);
                                     if (units[selectedindex].abilityelementalailments === true && tempran === 2) {
                                         Eunits[enemyindex].blind = 2;
                                         showailments();
                                     }
                                     setTimeout(function () {
                                         Damaging(enemyindex, damage)
                                     }, 500);
                                     $("#battlebackground").append("<div class='Effects' style='top: " + units[selectedindex].curtop + "px; left: " + units[selectedindex].curleft + "px'><img src='../Pictures/Effects/EffectFire.gif' /></div>");
                                     $(".Effects").animate({
                                         left: Eunits[enemyindex].curleft + "px"
                                         , top: Eunits[enemyindex].curtop + "px"
                                     }, 500).fadeOut(500);
                                     keepgoing -= 1;
                                     Fire.play();
                                 }, i * 1000)
                             }
                             units[selectedindex].usedaction = true;
                             setTimeout(function () {
                                     inanimation = false;
                                 }, 1000 * blows)
                                 //effects
                             var selectednow = selectedindex
                             setTimeout(function () {
                                 $("#" + selectednow + " .dirpic").attr("src", units[selectednow].casting)
                                 $("#" + selectednow).append("<img style='margin-left:20px;margin-top:-160px' class='effect' src='../Pictures/Effects/Wizard_effect.gif' />")
                             }, 100)
                             setTimeout(function () {
                                 $("#" + selectednow + " .dirpic").attr("src", units[selectednow].image)
                                 $(".effect").remove();
                             }, 1000)
                             units[selectedindex].charge = 0;
                         }
                         //gust
                         if ($('#wizardchoice option:selected').text() === "Gust(1)" || e.options[e.selectedIndex].value === "Gust(1)") {
                             if ((Eunits[Eslots[1]].type === "Sounddepressor" && Eunits[Eslots[1]].alive === true) || (Eunits[Eslots[2]].type === "Sounddepressor" && Eunits[Eslots[2]].alive === true) || (Eunits[Eslots[3]].type === "Sounddepressor" && Eunits[Eslots[3]].alive === true) || (Eunits[Eslots[4]].type === "Sounddepressor" && Eunits[Eslots[4]].alive === true) || (Eunits[Eslots[5]].type === "Sounddepressor" && Eunits[Eslots[5]].alive === true)) {
                                 message("The Sound Depressor nullifies all magic.")
                                 return;
                             }
                             var defense = 0;
                             if (Eunits[enemyindex].enfeeble === 0) {
                                 defense = Eunits[enemyindex].resistance
                             }
                             var damage = (units[selectedindex].attack - defense + units[selectedindex].attacktempboost) * Eunits[enemyindex].ice;
                             elementalNum = Eunits[enemyindex].ice;
                             if (damage < 0) {
                                 damage = 0
                             }
                             if (units[selectedindex].charge < 1) {
                                 $("#TEXT").append("<p>" + units[selectedindex].name + " only has a charge of " + units[selectedindex].charge + ". He needs a charge of 1 to use Gust\n</p>");
                                 return;
                             }
                             if (Eunits[enemyindex].phasedout === true) {
                                 if (Eunits[enemyindex].type === "Flamewraith") {}
                                 else {
                                     damage = 0;
                                 }
                                 Eunits[enemyindex].phasedout = false;
                                 $("#E" + Eunits[enemyindex].index).removeClass("Invisible");
                                 $("#TEXT").append("The wraith phased back in.")
                             }
                             var tempran = Math.floor((Math.random() * 2) + 1);
                             if (units[selectedindex].abilityelementalailments === true && tempran === 2) {
                                 Eunits[enemyindex].sleep = 1;
                                 showailments();
                             }
                             //effects
                             var selectednow = selectedindex
                             setTimeout(function () {
                                 $("#" + selectednow + " .dirpic").attr("src", units[selectednow].casting)
                                 $("#" + selectednow).append("<img style='margin-left:20px;margin-top:-160px' class='effect' src='../Pictures/Effects/Wizard_effect.gif' />")
                             }, 100)
                             setTimeout(function () {
                                 $("#" + selectednow + " .dirpic").attr("src", units[selectednow].image)
                                 $(".effect").remove();
                             }, 1000)
                             Gust.play();
                             units[selectedindex].charge -= 1;
                             units[selectedindex].usedaction = true;
                             if (Eunits[enemyindex].curtop > 25 && !(units[slots[1]].curtop + 100 === Eunits[enemyindex].curtop && units[slots[1]].curleft === Eunits[enemyindex].curleft) && !(units[slots[2]].curtop + 100 === Eunits[enemyindex].curtop && units[slots[2]].curleft === Eunits[enemyindex].curleft) && !(units[slots[3]].curtop + 100 === Eunits[enemyindex].curtop && units[slots[3]].curleft === Eunits[enemyindex].curleft) && !(Eunits[Eslots[1]].curtop + 100 === Eunits[enemyindex].curtop && Eunits[Eslots[1]].curleft === Eunits[enemyindex].curleft) && !(Eunits[Eslots[2]].curtop + 100 === Eunits[enemyindex].curtop && Eunits[Eslots[2]].curleft === Eunits[enemyindex].curleft) && !(Eunits[Eslots[3]].curtop + 100 === Eunits[enemyindex].curtop && Eunits[Eslots[3]].curleft === Eunits[enemyindex].curleft) && !(Eunits[Eslots[4]].curtop + 100 === Eunits[enemyindex].curtop && Eunits[Eslots[4]].curleft === Eunits[enemyindex].curleft) && !(Eunits[Eslots[5]].curtop + 100 === Eunits[enemyindex].curtop && Eunits[Eslots[5]].curleft === Eunits[enemyindex].curleft)) {
                                 $('#E' + enemyindex).animate({
                                     top: (Eunits[enemyindex].curtop - 100) + 'px'
                                 }, 500);
                                 Eunits[enemyindex].curtop -= 100;
                             }
                             $("#E" + enemyindex).append("<div class='slashEffects'><img style='width:300px; height:300px; margin-left:-110px; margin-top:-170px' src='../Pictures/Effects/Gust.gif' /></div>");
                             setTimeout(function () {
                                 Damaging(enemyindex, damage);
                             }, 500);
                             setTimeout(function () {
                                 $(".slashEffects").remove()
                             }, 500);
                         }
                         //drain
                         if ($('#wizardchoice option:selected').text() === "Drain" || e.options[e.selectedIndex].value === "Drain") {
                             if ((Eunits[Eslots[1]].type === "Sounddepressor" && Eunits[Eslots[1]].alive === true) || (Eunits[Eslots[2]].type === "Sounddepressor" && Eunits[Eslots[2]].alive === true) || (Eunits[Eslots[3]].type === "Sounddepressor" && Eunits[Eslots[3]].alive === true) || (Eunits[Eslots[4]].type === "Sounddepressor" && Eunits[Eslots[4]].alive === true) || (Eunits[Eslots[5]].type === "Sounddepressor" && Eunits[Eslots[5]].alive === true)) {
                                 message("The Sound Depressor nullifies all magic.")
                                 return;
                             }
                             if ((units[selectedindex].curtop - 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curtop + 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curleft - 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop) || (units[selectedindex].curleft + 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop)) {
                                 $("#TEXT").append("<p>" + units[selectedindex].name + " drained all charge from " + Eunits[enemyindex].name + "\n</p>");
                                 units[selectedindex].charge += Eunits[enemyindex].charge;
                                 $("#ORB" + +selectedindex).remove();
                                 $('#' + selectedindex).append('<img style="position: absolute; margin-top:40px; margin-left:-30px; width:35px; height:35px" src="../Pictures/Orb.gif" /><div id = "ORB' + selectedindex + '" style="color: yellow; position: absolute; font-size:20px; margin-top:-30px; margin-left:55px; width:10px; height:10px ">' + units[selectedindex].charge + '</div>');
                                 Eunits[enemyindex].charge = 0;
                                 units[selectedindex].usedaction = true;
                                 Absorb.play();
                                 //effects
                                 var selectednow = selectedindex
                                 setTimeout(function () {
                                     $("#" + selectednow + " .dirpic").attr("src", units[selectednow].casting)
                                     $("#" + selectednow).append("<img style='margin-left:20px;margin-top:-160px' class='effect' src='../Pictures/Effects/Wizard_effect.gif' />")
                                 }, 100)
                                 setTimeout(function () {
                                     $("#" + selectednow + " .dirpic").attr("src", units[selectednow].image)
                                     $(".effect").remove();
                                 }, 1000)
                                 $("#ORBE" + enemyindex).remove();
                                 var maxcharge = 0;
                                 if (Eunits[enemyindex].type === "Beekeeper" || Eunits[enemyindex].type === "Necromancer" || Eunits[enemyindex].type === "Shaman" || Eunits[enemyindex].type === "Wisp" || Eunits[enemyindex].type === "Frostwraith" || Eunits[enemyindex].type === "Waterwraith") {
                                     maxcharge = 1;
                                 }
                                 if (Eunits[enemyindex].type === "Fire Elemental" || Eunits[enemyindex].type === "Ice Elemental" || Eunits[enemyindex].type === "Flamewraith" || Eunits[Eslots[enemyindex]].type === "Wizard") {
                                     maxcharge = 2;
                                 }
                                 if (Eunits[enemyindex].type === "Lightning Elemental" || Eunits[enemyindex].type === "Angel" || Eunits[enemyindex].type === "Frostlord" || Eunits[enemyindex].type === "Demon" || Eunits[enemyindex].type === "Unknown" || Eunits[enemyindex].type === "Dragon") {
                                     maxcharge = 3;
                                 }
                                 $('#E' + enemyindex).append('<img style="position: absolute; margin-top:40px; margin-left:-30px; width:35px; height:35px" src="../Pictures/Orb.gif" /><div id = "ORBE' + enemyindex + '" style="color:yellow; position: absolute; font-size:20px; margin-top:-30px; margin-left:50px; width:10px; height:10px ">' + Eunits[enemyindex].charge + '/' + maxcharge + '</div>');
                                 return;
                             }
                         }
                         if (e.options[e.selectedIndex].value === "Drain" || e.options[e.selectedIndex].value === "Gust(1)" || e.options[e.selectedIndex].value === "Missile(X)" || e.options[e.selectedIndex].value === "Bolt(2)" || units[selectedindex].type == "Wizard") {
                             $("#ORB" + +units[selectedindex].index).remove();
                             $('#' + units[selectedindex].index).append('<div id = "ORB' + units[selectedindex].index + '" style="color: yellow; position: absolute; font-size:20px; margin-top:-30px; margin-left:55px; width:10px; height:10px ">' + units[selectedindex].charge + '</div>');
                         }
                     }
                     else {
                         $("#TEXT").append("This unit is silenced for " + units[selectedindex].silenced + " more turns.")
                     }
                 }
                 //Sorcerer
                 if (selectedaction === "sorcererCast" || selectedaction === "mimicAttack") {
                     if (units[selectedindex].silenced === 0) {
                         if ((Eunits[Eslots[1]].type === "Sounddepressor" && Eunits[Eslots[1]].alive === true) || (Eunits[Eslots[2]].type === "Sounddepressor" && Eunits[Eslots[2]].alive === true) || (Eunits[Eslots[3]].type === "Sounddepressor" && Eunits[Eslots[3]].alive === true) || (Eunits[Eslots[4]].type === "Sounddepressor" && Eunits[Eslots[4]].alive === true) || (Eunits[Eslots[5]].type === "Sounddepressor" && Eunits[Eslots[5]].alive === true)) {
                             message("The Sound Depressor nullifies all magic.")
                             return;
                         }
                         var e = document.getElementById("sorcererchoice");
                         if (selectedaction === "mimicAttack") {
                             e = document.getElementById("mimicchoice");
                         }
                         //lightning
                         if ($('#sorcererchoice option:selected').text() === "Lightning(20)" || e.options[e.selectedIndex].value === "Lightning(20)") {
                             if (sorcerermana < 20) {
                                 $("#TEXT").append("<p>" + units[selectedindex].name + " only has " + sorcerermana + " power. He needs a 20 power to use Lightning.\n</p>");
                                 return;
                             };
                             var defense = 0;
                             if (Eunits[enemyindex].enfeeble === 0) {
                                 defense = Eunits[enemyindex].resistance
                             }
                             var damage = (units[selectedindex].attack + units[selectedindex].attacktempboost - defense) * 2 * Eunits[enemyindex].lightning;
                             elementalNum = Eunits[enemyindex].lightning;
                             if (damage < 0) {
                                 damage = 0
                             }
                             if (Eunits[enemyindex].phasedout === true) {
                                 if (Eunits[enemyindex].type === "Waterwraith") {}
                                 else {
                                     damage = 0;
                                 }
                                 Eunits[enemyindex].phasedout = false;
                                 $("#E" + Eunits[enemyindex].index).removeClass("Invisible");
                                 $("#TEXT").append("The wraith phased back in.")
                             }
                             var tempran = Math.floor((Math.random() * 2) + 1);
                             //effects
                             $("#battlebackground").append("<div class='staticEffects' style='margin-top: " + (Eunits[enemyindex].curtop - 750) + "px; margin-left: " + (Eunits[enemyindex].curleft - 100) + "px'><img src='../Pictures/Effects/EffectLightning.gif' /></div>");
                             setTimeout(function () {
                                 Damaging(enemyindex, damage);
                             }, 500);
                             $(".staticEffects").fadeOut(2000);
                             Lightning.play();
                             var selectednow = selectedindex
                             setTimeout(function () {
                                 $("#" + selectednow + " .dirpic").attr("src", units[selectednow].casting)
                             }, 100)
                             setTimeout(function () {
                                 $("#" + selectednow + " .dirpic").attr("src", units[selectednow].image)
                             }, 1000)
                             sorcerermana -= 20;
                             units[selectedindex].usedaction = true;
                             $(".manabar").remove();
                             $("#" + selectedindex).append('<div class="manabar" id ="EB' + units[selectedindex].index + '"style="width: ' + (sorcerermana) + '%"></div>');
                         }
                         //Ultimate
                         if ($('#sorcererchoice option:selected').text() === "Ultimate" || e.options[e.selectedIndex].value === "Ultimate") {
                             //effects
                             setTimeout(function () {
                                 $("#E" + enemyindex).remove();
                             }, 1000)
                             inanimation = true;
                             Eunits[enemyindex].health = 0;
                             Eunits[enemyindex].group = -2;
                             $("body").append("<div style='background-color:lightblue' id = 'cinemabackground'><img id='backgroundpic' style='width:100%;height:100%' src='../Pictures/backgroundpics/desertbackground.png'/><div id='thisunit' STYLE='position:absolute; TOP:300px; LEFT:200px;' class='unit' ><img src='" + Eunits[enemyindex].image + "'/></div></div>")
                             setTimeout(function () {
                                 $("#cinemabackground").append("<div class='blackhole' STYLE='position:absolute; TOP:300px; LEFT:700px;' class='unit' ><img style = 'height:400px;width:400px;margin-top:-200px;margin-left:-280px;opacity:0.7' src='../Pictures/Effects/blackhole.gif'/></div>")
                                 hell.play();
                                 dramatic.play();
                                 $("#thisunit img").animate({
                                     width: "2px"
                                     , height: "2px"
                                 }, 4000)
                                 $("#thisunit").animate({
                                     left: "+=400px"
                                 , }, 4000)
                                 $("#thisunit").addClass("blackhole")
                             }, 1000)
                             setTimeout(function () {
                                 hell.pause();
                                 $("#cinemabackground").remove()
                             }, 7000)
                             setTimeout(function () {
                                 Damaging(enemyindex, Eunits[enemyindex].health);
                             }, 0);
                             units[selectedindex].usedaction = true;
                         }
                         //Blizzard
                         if ($('#sorcererchoice option:selected').text() === "Blizzard(20)" || e.options[e.selectedIndex].value === "Blizzard(20)") {
                             if (sorcerermana < 20) {
                                 $("#TEXT").append("<p>" + units[selectedindex].name + " only has " + sorcerermana + " power. He needs a 20 power to use Blizzard.\n</p>");
                                 return;
                             }
                             var defense = 0;
                             for (var i = 1; i < 6; i++) {
                                 if (Eunits[Eslots[i]].enfeeble === 0) {
                                     defense = Eunits[Eslots[i]].resistance
                                 }
                                 var damage = ((units[selectedindex].attack + units[selectedindex].attacktempboost) - defense) * Eunits[Eslots[i]].ice;
                                 elementalNum = Eunits[Eslots[i]].ice;
                                 if (damage < 0) {
                                     damage = 0
                                 }
                                 if (Eunits[Eslots[i]].alive === false) {
                                     continue;
                                 }
                                 if (Eunits[Eslots[i]].phasedout === true) {
                                     if (Eunits[Eslots[i]].type === "Flamewraith") {}
                                     else {
                                         damage = 0;
                                     }
                                     Eunits[Eslots[i]].phasedout = false;
                                     $("#E" + Eunits[Eslots[i]].index).removeClass("Invisible");
                                     $("#TEXT").append("The wraith phased back in.")
                                 }
                                 Damaging(Eslots[i], damage);
                             }
                             $("#battlebackground").append("<img class='totalbackground' src='../Pictures/Effects/Blizzard.gif' />");
                             Hurricane.play();
                             var selectednow = selectedindex
                             setTimeout(function () {
                                 $("#" + selectednow + " .dirpic").attr("src", units[selectednow].casting)
                             }, 100)
                             setTimeout(function () {
                                 $("#" + selectednow + " .dirpic").attr("src", units[selectednow].image)
                             }, 1000)
                             $(".totalbackground").fadeOut(2000);
                             sorcerermana -= 20;
                             units[selectedindex].usedaction = true;
                             $(".manabar").remove();
                             $("#" + selectedindex).append('<div class="manabar" id ="EB' + units[selectedindex].index + '"style="width: ' + (sorcerermana) + '%"></div>');
                         }
                         //Fireblast
                         if ($('#sorcererchoice option:selected').text() === "Fireblast(30)" || e.options[e.selectedIndex].value === "Fireblast(30)") {
                             var defense = 0;
                             if (Eunits[enemyindex].enfeeble === 0) {
                                 defense = Eunits[enemyindex].resistance
                             }
                             var damage = ((units[selectedindex].attack + units[selectedindex].attacktempboost) - defense) * 2 * Eunits[enemyindex].fire;
                             if (damage < 0) {
                                 damage = 0
                             }
                             if (sorcerermana < 30) {
                                 $("#TEXT").append("<p>" + units[selectedindex].name + " only has " + sorcerermana + " power. He needs a 30 power to use Fireblast.\n</p>");
                                 return;
                             }
                             if (Eunits[enemyindex].phasedout === true) {
                                 if (Eunits[enemyindex].type === "Frostwraith") {}
                                 else {
                                     damage = 0;
                                 }
                                 Eunits[enemyindex].phasedout = false;
                                 $("#E" + Eunits[enemyindex].index).removeClass("Invisible");
                                 $("#TEXT").append("The wraith phased back in.")
                             }
                             Lightning.play();
                             var selectednow = selectedindex
                             setTimeout(function () {
                                 $("#" + selectednow + " .dirpic").attr("src", units[selectednow].casting)
                             }, 100)
                             setTimeout(function () {
                                 $("#" + selectednow + " .dirpic").attr("src", units[selectednow].image)
                             }, 1000)
                             sorcerermana -= 30;
                             units[selectedindex].usedaction = true;
                             //effects
                             $("#E" + enemyindex).append("<div class='staticEffects' style='margin-top:-180px; margin-left:-120px'><img src='../Pictures/Effects/EffectExplode.gif' /></div>");
                             setTimeout(function () {
                                 Damaging(enemyindex, damage);
                             }, 500);
                             setTimeout(function () {
                                 dies(enemyindex);
                             }, 500);
                             setTimeout(function () {
                                 $(".staticEffects").remove()
                             }, 500);
                             Lightning.play();
                             //adjacent enemies
                             for (var z = 1; z < 6; z++) {
                                 if (Eunits[Eslots[z]].alive === true) {
                                     if ((Eunits[Eslots[z]].curleft === Eunits[enemyindex].curleft - 100 && Eunits[Eslots[z]].curtop === Eunits[enemyindex].curtop) || (Eunits[Eslots[z]].curleft === Eunits[enemyindex].curleft + 100 && Eunits[Eslots[z]].curtop === Eunits[enemyindex].curtop) || (Eunits[Eslots[z]].curleft === Eunits[enemyindex].curleft && Eunits[Eslots[z]].curtop === Eunits[enemyindex].curtop + 100) || (Eunits[Eslots[z]].curleft === Eunits[enemyindex].curleft && Eunits[Eslots[z]].curtop === Eunits[enemyindex].curtop - 100)) {
                                         var smalldamage = ((units[selectedindex].attack) - Eunits[Eslots[z]].resistance) * Eunits[Eslots[z]].fire;
                                         elementalNum = Eunits[Eslots[z]].fire;
                                         if (smalldamage < 0) {
                                             smalldamage = 0
                                         }
                                         if (Eunits[Eslots[z]].phasedout === true) {
                                             if (Eunits[Eslots[z]].type === "Frostwraith") {}
                                             else {
                                                 damage = 0;
                                             }
                                             Eunits[Eslots[z]].phasedout = false;
                                             $("#E" + Eunits[Eslots[z]].index).removeClass("Invisible");
                                             $("#TEXT").append("The wraith phased back in.")
                                         }
                                         Damaging(Eslots[z], smalldamage);
                                     }
                                 }
                             }
                             $(".manabar").remove();
                             $("#" + selectedindex).append('<div class="manabar" id ="EB' + units[selectedindex].index + '"style="width: ' + (sorcerermana) + '%"></div>');
                         }
                         //Earth
                         if ($('#sorcererchoice option:selected').text() === "Earth(20)" || e.options[e.selectedIndex].value === "Earth(20)") {
                             if (sorcerermana < 20) {
                                 $("#TEXT").append("<p>" + units[selectedindex].name + " only has " + sorcerermana + " power. He needs a 20 power to use Earth.\n</p>");
                                 return;
                             }
                             var defense = 0;
                             if (Eunits[enemyindex].enfeeble === 0) {
                                 defense = Eunits[enemyindex].defense
                             }
                             var damage = (units[selectedindex].attack + units[selectedindex].attacktempboost - defense) * 2;
                             if (damage < 0) {
                                 damage = 0
                             }
                             setTimeout(function () {
                                 Damaging(enemyindex, damage);
                             }, 500);
                             //animation
                             $("#battlebackground").append("<div class='Effects' style='top: " + units[selectedindex].curtop + "px; left: " + units[selectedindex].curleft + "px'><img src='../Pictures/Effects/Earth.gif' /></div>");
                             setTimeout(function () {
                                 Sword.play()
                             }, 500)
                             var selectednow = selectedindex
                             setTimeout(function () {
                                 $("#" + selectednow + " .dirpic").attr("src", units[selectednow].casting)
                             }, 100)
                             setTimeout(function () {
                                 $("#" + selectednow + " .dirpic").attr("src", units[selectednow].image)
                             }, 1000)
                             $(".Effects").animate({
                                 left: Eunits[enemyindex].curleft + "px"
                                 , top: Eunits[enemyindex].curtop + "px"
                             }, 500).fadeOut(500);
                             //backearth
                             sorcerermana -= 20;
                             units[selectedindex].usedaction = true;
                             $(".manabar").remove();
                             $("#" + selectedindex).append('<div class="manabar" id ="EB' + units[selectedindex].index + '"style="width: ' + (sorcerermana) + '%"></div>');
                         }
                         //Death
                         if ($('#sorcererchoice option:selected').text() === "Death(50)" || e.options[e.selectedIndex].value === "Death(50)") {
                             if (sorcerermana < 50) {
                                 $("#TEXT").append("<p>" + units[selectedindex].name + " only has " + sorcerermana + " power. He needs a 50 power to use Death.\n</p>");
                                 return;
                             }
                             if (Eunits[enemyindex].type === "Dragon" || Eunits[enemyindex].type === "Hands" || Eunits[enemyindex].type === "Unknown" || Eunits[enemyindex].type === "Unknown2" || Eunits[enemyindex].type === "Demigod") {
                                 message("You can't target this unit with death.")
                                 return;
                             }
                             Death.play();
                             Eunits[enemyindex].health = 0;
                             //effects
                             var selectednow = selectedindex
                             setTimeout(function () {
                                 $("#" + selectednow + " .dirpic").attr("src", units[selectednow].casting)
                             }, 100)
                             setTimeout(function () {
                                 $("#" + selectednow + " .dirpic").attr("src", units[selectednow].image)
                             }, 1000)
                             $("#battlebackground").append("<div class='slashEffects' style='margin-top: " + (Eunits[enemyindex].curtop - 450) + "px; margin-left: " + (Eunits[enemyindex].curleft - 0) + "px'><img src='../Pictures/Effects/Death.gif' /></div>");
                             setTimeout(function () {
                                 dies(enemyindex);
                             }, 500);
                             $(".slashEffects").fadeOut(2000);
                             sorcerermana -= 50;
                             units[selectedindex].usedaction = true;
                             $(".manabar").remove();
                             $("#" + selectedindex).append('<div class="manabar" id ="EB' + units[selectedindex].index + '"style="width: ' + (sorcerermana) + '%"></div>');
                         }
                     }
                     else {
                         $("#TEXT").append("This unit is silenced for " + units[selectedindex].silenced + " more turns.")
                     }
                 }
                 //enchantress
                 if (selectedaction === "enchantressUse" || selectedaction === "mimicAttack") {
                     if (units[selectedindex].silenced === 0) {
                         var e = document.getElementById("enchantresschoice");
                         if (selectedaction === "mimicAttack") {
                             e = document.getElementById("mimicchoice");
                         }
                         if ($('#enchantresschoice option:selected').text() === "Absorb") {
                             var multiplier = 0;
                             var toleft = units[selectedindex].curleft - Eunits[enemyindex].curleft;
                             var totop = units[selectedindex].curtop - Eunits[enemyindex].curtop;
                             if (toleft < 0) {
                                 toleft *= -1
                             }
                             if (totop < 0) {
                                 totop *= -1
                             }
                             if (totop >= toleft) {
                                 multiplier = totop / 100;
                                 switch (multiplier) {
                                 case 4:
                                     multiplier = 1;
                                     break;
                                 case 3:
                                     multiplier = 2;
                                     break;
                                 case 2:
                                     multiplier = 3;
                                     break;
                                 case 1:
                                     multiplier = 4;
                                     break;
                                 }
                             }
                             else {
                                 multiplier = toleft / 100;
                                 switch (multiplier) {
                                 case 4:
                                     multiplier = 1;
                                     break;
                                 case 3:
                                     multiplier = 2;
                                     break;
                                 case 2:
                                     multiplier = 3;
                                     break;
                                 case 1:
                                     multiplier = 4;
                                     break;
                                 }
                             }
                             var damage = units[selectedindex].attack * multiplier;
                             if (Eunits[enemyindex].phasedout === true) {
                                 damage = 0;
                             }
                             units[selectedindex].mana += damage;
                             Absorb.play();
                             $("#ORB" + selectedindex).remove();
                             $('#' + selectedindex).append('<img style="position: absolute; margin-top:40px; margin-left:-30px; width:48px; height:35px" src="../Pictures/Orb.gif" /><div id = "ORB' + selectedindex + '" style="color: yellow; position: absolute; font-size:17px; margin-top:-27px; margin-left:50px; width:10px; height:10px ">' + units[selectedindex].mana + '</div>');
                             //effects
                             $("#battlebackground").append("<div class='Effects' style='top: " + Eunits[enemyindex].curtop + "px; left: " + Eunits[enemyindex].curleft + "px'><img src='../Pictures/Effects/AbsorbEffect.gif' /></div>");
                             $(".Effects").animate({
                                 left: units[selectedindex].curleft + "px"
                                 , top: units[selectedindex].curtop + 10 + "px"
                             }, 500).fadeOut(500);
                             setTimeout(function () {
                                 Damaging(enemyindex, damage);
                             }, 500);
                             setTimeout(function () {
                                 dies(enemyindex);
                             }, 500);
                             units[selectedindex].usedaction = true;
                         }
                         if ($('#enchantresschoice option:selected').text() === "Storm(30)") {
                             if (units[selectedindex].mana < 30) {
                                 message("She requires at least 30 power to use Storm");
                                 return;
                             }
                             units[selectedindex].mana -= 30;
                             $("#ORB" + selectedindex).remove();
                             $('#' + selectedindex).append('<img style="position: absolute; margin-top:40px; margin-left:-30px; width:48px; height:35px" src="../Pictures/Orb.gif" /><div id = "ORB' + selectedindex + '" style="color: yellow; text-align: center; position: absolute; font-size:17px; margin-top:-27px; margin-left:50px; width:10px; height:10px ">' + units[selectedindex].mana + '</div>');
                             units[selectedindex].stormactive = true;
                             units[selectedindex].usedaction = true;
                             stormcheck();
                         }
                         if ($('#enchantresschoice option:selected').text() === "Ice_Fall(50)") {
                             if (units[selectedindex].mana < 70) {
                                 message("She requires at least 50 power to use Ice Fall");
                                 return;
                             }
                             units[selectedindex].mana -= 70;
                             $("#ORB" + selectedindex).remove();
                             $('#' + selectedindex).append('<img style="position: absolute; margin-top:40px; margin-left:-30px; width:48px; height:35px" src="../Pictures/Orb.gif" /><div id = "ORB' + selectedindex + '" style="color: yellow; text-align: center; position: absolute; font-size:17px; margin-top:-27px; margin-left:50px; width:10px; height:10px ">' + units[selectedindex].mana + '</div>');
                             iceActive = true;
                             units[selectedindex].usedaction = true;
                             stormcheck(true);
                         }
                     }
                     else {
                         $("#TEXT").append("This unit is silenced for " + units[selectedindex].silenced + " more turns.")
                     }
                     if (units[selectedindex].silenced === 0) {
                         if ($('#enchantresschoice option:selected').text() === "Torment(50)" || e.options[e.selectedIndex].value === "Absorb)") {
                             var damage = units[selectedindex].power;
                             if (units[selectedindex].mana < 50) {
                                 message("You don't have enough mana for that.");
                                 return;
                             }
                             units[selectedindex].mana -= 50;
                             $("#ORB" + selectedindex).remove();
                             $('#' + selectedindex).append('<img style="position: absolute; margin-top:40px; margin-left:-30px; width:48px; height:35px" src="../Pictures/Orb.gif" /><div id = "ORB' + selectedindex + '" style="color: yellow; position: absolute; font-size:17px; margin-top:-27px; margin-left:50px; width:10px; height:10px ">' + units[selectedindex].mana + '</div>');
                             Eunits[enemyindex].poison += 2;
                             Eunits[enemyindex].enfeeble += 2;
                             Eunits[enemyindex].sleep += 2;
                             showailments();
                             //effects
                             Death.play();
                             units[selectedindex].usedaction = true;
                         }
                     }
                     else {
                         $("#TEXT").append("This unit is silenced for " + units[selectedindex].silenced + " more turns.")
                     }
                 }
                 //soldier
                 if (selectedaction === "guardUse") {
                     if (units[selectedindex].blind === 0) {
                         var defense = 0;
                         if (Eunits[enemyindex].enfeeble === 0) {
                             defense = Eunits[enemyindex].defense
                         }
                         var damage = (units[selectedindex].attack + units[selectedindex].attacktempboost - defense);
                         if (damage < 0) {
                             damage = 0
                         }
                         if (Eunits[enemyindex].phasedout === true) {
                             damage = 0;
                         }
                         if ($('#guardchoice option:selected').text() === "Bash") {
                             if ((units[selectedindex].curtop - 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curtop + 100 === Eunits[enemyindex].curtop && units[selectedindex].curleft === Eunits[enemyindex].curleft) || (units[selectedindex].curleft - 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop) || (units[selectedindex].curleft + 100 === Eunits[enemyindex].curleft && units[selectedindex].curtop === Eunits[enemyindex].curtop)) {
                                 slashattack();
                                 units[selectedindex].usedaction = true;
                                 if (units[selectedindex].abilityreshield) {
                                     $("#TEXT").append("<p>The Guard's shield increased by " + parseInt(damage * .5) + "</p>")
                                     units[selectedindex].energy += parseInt(damage * .5);
                                     $("#EB" + units[selectedindex].index).remove();
                                     $("#" + selectedindex).append('<div class="energybar" id ="EB' + units[selectedindex].index + '"style="width: ' + units[selectedindex].energy + '%"></div>');
                                 }
                                 setTimeout(function () {
                                     Damaging(enemyindex, damage);
                                 }, 500);
                                 turngray();
                                 return;
                             }
                         }
                     }
                     else {
                         $("#TEXT").append("This unit is blind for " + units[selectedindex].blind + " more turns.")
                     }
                 }
                 //spider
                 if (selectedaction === "web") {
                     if (Eunits[enemyindex].curleft === units[selectedindex].curleft && Eunits[enemyindex].curtop < units[selectedindex].curtop) {
                         if ((Eunits[Eslots[1]].curleft === units[selectedindex].curleft && Eunits[Eslots[1]].curtop === units[selectedindex].curtop - 100) || (Eunits[Eslots[2]].curleft === units[selectedindex].curleft && Eunits[Eslots[2]].curtop === units[selectedindex].curtop - 100) || (Eunits[Eslots[3]].curleft === units[selectedindex].curleft && Eunits[Eslots[3]].curtop === units[selectedindex].curtop - 100) || (Eunits[Eslots[4]].curleft === units[selectedindex].curleft && Eunits[Eslots[4]].curtop === units[selectedindex].curtop - 100) || (Eunits[Eslots[5]].curleft === units[selectedindex].curleft && Eunits[Eslots[5]].curtop === units[selectedindex].curtop - 100) || (units[slots[1]].curleft === units[selectedindex].curleft && units[slots[1]].curtop === units[selectedindex].curtop - 100) || (units[slots[2]].curleft === units[selectedindex].curleft && units[slots[2]].curtop === units[selectedindex].curtop - 100) || (units[slots[3]].curleft === units[selectedindex].curleft && units[slots[3]].curtop === units[selectedindex].curtop - 100)) {
                             message("There is someone blocking the spider's line of sight.");
                             return;
                         }
                         Eunits[enemyindex].curtop = units[selectedindex].curtop - 100;
                         Hook.play();
                         $("#E" + enemyindex).append("<div class='slashEffects'><img src='../Pictures/Effects/Web.gif' /></div>");
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
                         $("#E" + enemyindex).append("<div class='slashEffects'><img style='transform: rotate(180deg) translate(-100%,-100%); margin-left:-40px; margin-top:-200px' src='../Pictures/Effects/Web.gif' /></div>");
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
                         $("#E" + enemyindex).append("<div class='slashEffects'><img style='transform: rotate(90deg) translate(-100%,-100%); margin-left:-40px; margin-top:-10px' src='../Pictures/Effects/Web.gif' /></div>");
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
                         $("#E" + enemyindex).append("<div class='slashEffects'><img style='transform: rotate(270deg) translate(-100%,-100%); margin-left:50px; margin-top:-200px' src='../Pictures/Effects/Web.gif' /></div>");
                         setTimeout(function () {
                             $(".slashEffects").remove();
                         }, 1000);
                         $('#E' + enemyindex).animate({
                             left: (units[selectedindex].curleft - 100) + 'px'
                         }, 500);
                     }
                     units[selectedindex].usedaction = true;
                     Eunits[enemyindex].poison += 3;
                     showailments();
                 }
                 if (selectedaction === "Use") {
                     var e = document.getElementById("alchemychoice");
                     if (e.options[e.selectedIndex].value === "Frostlord") {
                         $("#TEXT").empty();
                         if (frostlordrest > 0) {
                             $("#TEXT").append("Frostlord still have to rest for another " + frostlordrest + " turns.")
                             return;
                         }
                         if (units[selectedindex].usedaction === true) {
                             $("#TEXT").append("<p>" + units[selectedindex].name + " has already used an action this turn</p>");
                             return;
                         }
                         $("#battlebackground").append("<img class='totalbackground' src='../Pictures/Effects/Blizzard.gif' />");
                         Hurricane.play();
                         $(".totalbackground").fadeOut(4000);
                         $("#TEXT").append("The Frostlord did ice damage to all enemies, and must now rest for 6 Turns.");
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
                     if (e.options[e.selectedIndex].value === "Demon") {
                         $("#TEXT").empty();
                         if (demonrest > 0) {
                             $("#TEXT").append("The Demon still has to rest for another " + demonrest + " Turns.")
                             return;
                         }
                         if (units[selectedindex].usedaction === true) {
                             $("#TEXT").append("<p>" + units[selectedindex].name + " has already used an action this turn</p>");
                             return;
                         }
                         $("#battlebackground").append("<img class='totalbackground' src='../Pictures/Enemies/Demon.gif' />");
                         $(".totalbackground").fadeOut(4000);
                         $("#TEXT").append("The Demon did fire damage to all enemies, and must now rest for 8 turns.");
                         demonrest = 8;
                         for (var i = 1; i < 6; i++) {
                             if (Eunits[Eslots[i]].alive === true) {
                                 var damage = 100 - Eunits[Eslots[i]].resistance;
                                 if (damage < 0) {
                                     damage = 0
                                 }
                                 Eunits[Eslots[i]].health -= damage;
                                 Damaging(Eslots[i], damage);
                                 dies(Eslots[i]);
                             }
                         }
                     }
                 } //use
                 if (selectedaction === "Capture") {
                     var temprand = Math.floor((Math.random() * Eunits[enemyindex].maxhealth) + 1);
                     if (Eunits[enemyindex].health < temprand) {
                         $("#E" + enemyindex).addClass("grayicon");
                         $("#E" + enemyindex + " .healthbar").remove();
                         $("#E" + enemyindex + " img").animate({
                             height: 0 + "px"
                             , width: 0 + "px"
                         , }, 2000);
                         $("#E" + enemyindex).animate({
                             left: units[selectedindex].curleft + 30 + "px"
                             , top: units[selectedindex].curtop + "px"
                         , }, 2000);
                         Eunits[enemyindex].health = -1000000;
                         setTimeout(function () {
                             dies(enemyindex);
                         }, 500);
                         switch (Eunits[enemyindex].name) {
                         case "Elk":
                             elk += 1;
                             break;
                         case "Spider":
                             spiders += 1;
                             break;
                         case "Sparrow":
                             sparrows += 1;
                             break;
                         case "Turtle":
                             turtles += 1;
                             break;
                         case "Bear":
                             bears += 1;
                             break;
                         case "Wolf":
                             wolves += 1;
                             break;
                         }
                         updateHeader();
                         success.currentTime = 0
                         success.play()
                         setTimeout(function () {
                             success.pause()
                         }, 3000)
                         capturedAll(Eunits[enemyindex].name);
                     }
                     else {
                         $("#TEXT").append(units[selectedindex].name + " has failed to capture the " + Eunits[enemyindex].name)
                         fail.play()
                     }
                     units[selectedindex].usedaction = true;
                 }
             } //end of ebutton
         });
         $('.unit').mousedown(function (e) {
             if (battleon === false) {
                 return;
             }
             $("#TEXT").empty();
             if (e.button === 2) {
                 //determine whether this unit did an action this turn
                 if (units[selectedindex].usedaction === true) {
                     $("#TEXT").append("<p>" + units[selectedindex].name + " has already used an action this turn</p>");
                     return;
                 }
                 //determine enemy's number
                 for (var i = 0; i < index; i++) {
                     var temp = this.id;
                     temp = temp.replace("E", "");
                     if (units[i].index === parseInt(temp, 10)) {
                         allyindex = i;
                     }
                 };
                 //change directional pic
                 var dirleft = units[selectedindex].curleft - units[allyindex].curleft;
                 var dirtop = units[selectedindex].curtop - units[allyindex].curtop;
                 if (Math.abs(dirleft) >= Math.abs(dirtop)) {
                     if (dirleft > 0) {
                         dir = units[selectedindex].leftpic;
                     }
                     else {
                         dir = units[selectedindex].rightpic;
                     }
                 }
                 else {
                     if (dirtop > 0) {
                         dir = units[selectedindex].backpic;
                     }
                     else {
                         dir = units[selectedindex].image;
                     }
                 }
                 setTimeout(function () {
                     if (units[selectedindex].usedaction) {
                         $("#" + selectedindex + " dirpics").attr("src", dir);
                     }
                 }, 100)

                 function Damaging(index, damage) {
                     var temp = "#" + index;
                     var tempbar = "#HB" + index;
                     $(tempbar).remove();
                     $(temp).append('<div class="healthbar" id ="HB' + units[index].index + '"style="width: ' + (units[index].health / units[index].maxhealth) * 100 + '%"></div>');
                     $(".damage").remove();
                     $(temp).append('<p class="damage" style=" position: absolute; font-size:40px; margin-top:-70px; margin-left:30px; color:green ">' + damage + '</p>');
                     $(".damage").delay(1000).effect("puff");
                 }

                 function turngray() {
                     for (var w = 1; w < 4; w++) {
                         $('#' + slots[w]).removeClass("lighticon")
                         $('#' + slots[w]).removeClass("grayicon")
                         if (units[slots[w]].moved === true || units[slots[w]].usedaction === true) {
                             $('#' + slots[w]).addClass("lighticon");
                         }
                         if (units[slots[w]].moved === true && units[slots[w]].usedaction === true) {
                             $('#' + slots[w]).removeClass("lighticon");
                             $('#' + slots[w]).addClass("grayicon");
                         }
                     }
                 }
                 if (selectedaction === "guardUse" || selectedaction === "mimicAttack") {
                     var e = document.getElementById("guardchoice");
                     if (selectedaction === "mimicAttack") {
                         e = document.getElementById("mimicchoice");
                     }
                     if (e.options[e.selectedIndex].text === "Protect") {
                         var temp3 = this.id;
                         temp3 = temp3.replace("E", "");
                         for (var j = 0; j < index; j++) {
                             if (units[j].index === parseInt(temp3, 10)) {
                                 allyindex = j;
                             }
                         };
                         //   if ((units[selectedindex].curtop - 100 === units[allyindex].curtop && units[selectedindex].curleft === units[allyindex].curleft) || (units[selectedindex].curtop + 100 === units[allyindex].curtop && units[selectedindex].curleft === units[allyindex].curleft) || (units[selectedindex].curleft - 100 === units[allyindex].curleft && units[selectedindex].curtop === units[allyindex].curtop) || (units[selectedindex].curleft + 100 === units[allyindex].curleft && units[selectedindex].curtop === units[allyindex].curtop) || (units[selectedindex].curleft === units[allyindex].curleft && units[selectedindex].curtop === units[allyindex].curtop)) {
                         $("#TEXT").empty();
                         Protect.play();
                         $("#TEXT").append("Your guard is now protecting that unit.");
                         units[allyindex].protectedby = selectedindex;
                         units[selectedindex].usedaction = true;
                         //   }
                         showailments();
                     }
                 }
                 if (selectedaction === "healerUse" || selectedaction === "mimicAttack") {
                     var e = document.getElementById("healerchoice");
                     if (selectedaction === "mimicAttack") {
                         e = document.getElementById("mimicchoice");
                     }
                     if (e.options[e.selectedIndex].value === "Heal(10)") {
                         if (units[selectedindex].power < 10) {
                             message("She requires at least 10 power to use Heal");
                             return;
                         }
                         units[selectedindex].power -= 10;
                         if (units[selectedindex].abilityreach === true || ((units[selectedindex].curtop - 100 === units[allyindex].curtop && units[selectedindex].curleft === units[allyindex].curleft) || (units[selectedindex].curtop + 100 === units[allyindex].curtop && units[selectedindex].curleft === units[allyindex].curleft) || (units[selectedindex].curleft - 100 === units[allyindex].curleft && units[selectedindex].curtop === units[allyindex].curtop) || (units[selectedindex].curleft + 100 === units[allyindex].curleft && units[selectedindex].curtop === units[allyindex].curtop) || (units[selectedindex].curleft === units[allyindex].curleft && units[selectedindex].curtop === units[allyindex].curtop))) {
                             var temp3 = this.id;
                             temp3 = temp3.replace("E", "");
                             for (var j = 0; j < index; j++) {
                                 if (units[j].index === parseInt(temp3, 10)) {
                                     allyindex = j;
                                 }
                             };
                             units[selectedindex].usedaction = true;
                             Cleanse.play();
                             var selectednow = selectedindex
                             setTimeout(function () {
                                 $("#" + selectednow + " .dirpic").attr("src", units[selectednow].casting)
                                 $("#" + selectednow).append("<img style='margin-left:00px;margin-top:-100px' class='effect' src='../Pictures/Effects/Healer_effect.gif' />")
                             }, 100)
                             setTimeout(function () {
                                 $("#" + selectednow + " .dirpic").attr("src", units[selectednow].image)
                                 $(".effect").remove();
                             }, 1000)
                             if (units[selectedindex].abilitycleanse === true) {
                                 units[allyindex].poison = 0;
                                 units[allyindex].blind = 0;
                                 units[allyindex].immobilized = 0;
                                 units[allyindex].silenced = 0;
                                 units[allyindex].sleep = 0;
                                 showailments();
                             }
                             showailments();
                             units[allyindex].health += 60;
                             if (units[allyindex].health > units[allyindex].maxhealth) {
                                 units[allyindex].health = units[allyindex].maxhealth
                             }
                             $("#" + allyindex).append("<div class='healerEffects'><img src='../Pictures/Effects/heal.gif' /></div>");
                             $(".healerEffects").fadeOut(2000);
                             $(".healerbar").remove();
                             $("#" + selectedindex).append('<div class="healerbar" id ="EB' + units[selectedindex].index + '"style="width: ' + (units[selectedindex].power) + '%"></div>');
                             setTimeout(function () {
                                 Damaging(allyindex, 60);
                             }, 500);
                         }
                     }
                     if (e.options[e.selectedIndex].value === "Vigor") {
                         if (units[selectedindex].abilityreach === true || ((units[selectedindex].curtop - 100 === units[allyindex].curtop && units[selectedindex].curleft === units[allyindex].curleft) || (units[selectedindex].curtop + 100 === units[allyindex].curtop && units[selectedindex].curleft === units[allyindex].curleft) || (units[selectedindex].curleft - 100 === units[allyindex].curleft && units[selectedindex].curtop === units[allyindex].curtop) || (units[selectedindex].curleft + 100 === units[allyindex].curleft && units[selectedindex].curtop === units[allyindex].curtop) || (units[selectedindex].curleft === units[allyindex].curleft && units[selectedindex].curtop === units[allyindex].curtop))) {
                             var temp3 = this.id;
                             for (var j = 0; j < index; j++) {
                                 if (units[j].index === parseInt(temp3, 10)) {
                                     allyindex = j;
                                 }
                             }
                             temp3 = temp3.replace("E", "");
                             if (selectedindex == allyindex) {
                                 $("#TEXT").append("<p>The Healer can't use Vigor on herself./p>");
                                 return;
                             }
                             if (units[selectedindex].abilitydoublevigor === true) {
                                 $("#TEXT").append("<p>" + units[selectedindex].name + " gave an extra turn to all your other allies\n</p>");
                             }
                             else {
                                 $("#TEXT").append("<p>" + units[selectedindex].name + " gave an extra turn to " + units[allyindex].name + "\n</p>");
                             }
                             units[selectedindex].usedaction = true;
                             Cleanse.play();
                             $("#" + allyindex).append("<div class='healerEffects'><img src='../Pictures/Effects/vigor.gif' /></div>");
                             $(".healerEffects").fadeOut(2000);
                             var selectednow = selectedindex
                             setTimeout(function () {
                                 $("#" + selectednow + " .dirpic").attr("src", units[selectednow].casting)
                                 $("#" + selectednow).append("<img style='margin-left:00px;margin-top:-100px' class='effect' src='../Pictures/Effects/Healer_effect.gif' />")
                             }, 100)
                             setTimeout(function () {
                                 $("#" + selectednow + " .dirpic").attr("src", units[selectednow].image)
                                 $(".effect").remove();
                             }, 1000)
                             if (units[selectedindex].abilitymove === true) {
                                 units[allyindex].moved = false;
                             }
                             units[allyindex].usedaction = false;
                             if (units[selectedindex].abilitycleanse === true) {
                                 units[allyindex].poison = 0;
                                 units[allyindex].blind = 0;
                                 units[allyindex].immobilized = 0;
                                 units[allyindex].silenced = 0;
                                 units[allyindex].sleep = 0;
                                 showailments();
                             }
                             if (units[selectedindex].abilitydoublevigor === true) {
                                 for (var i = 1; i < 4; i++) {
                                     if (units[slots[i]].type != "Healer") {
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
                 if (selectedaction === "enchantressUse" || selectedaction === "mimicAttack") {
                     var e = document.getElementById("enchantresschoice");
                     if (selectedaction === "mimicAttack") {
                         e = document.getElementById("mimicchoice");
                     }
                     if (e.options[e.selectedIndex].value === "Bestow(50)") {
                         if (units[selectedindex].mana < 50) {
                             message("She requires at least 50 power to use Bestow");
                             return;
                         }
                         units[selectedindex].mana -= 50;
                         $("#ORB" + selectedindex).remove();
                         $('#' + selectedindex).append('<img style="position: absolute; margin-top:40px; margin-left:-30px; width:48px; height:35px" src="../Pictures/Orb.gif" /><div id = "ORB' + selectedindex + '" style="color: yellow; position: absolute; font-size:17px; margin-top:-27px; margin-left:50px; width:10px; height:10px ">' + units[selectedindex].mana + '</div>');
                         for (var j = 0; j < index; j++) {
                             if (units[j].index === parseInt(temp3, 10)) {
                                 allyindex = j;
                             }
                         };
                         $("#TEXT").append("<p>" + units[selectedindex].name + " boosted the attack and defenses of " + units[allyindex].name + "\n</p>");
                         units[selectedindex].usedaction = true;
                         Cleanse.play();
                         units[allyindex].attacktempboost += units[allyindex].attack;
                         units[allyindex].defensetempboost += 1000;
                         turngray();
                         showailments()
                     }
                     if (e.options[e.selectedIndex].value === "Fire_Circle(50)") {
                         if (units[selectedindex].mana < 100) {
                             message("She requires at least 100 mana to use Fire Circle");
                             return;
                         }
                         units[selectedindex].mana -= 100;
                         $("#ORB" + selectedindex).remove();
                         $('#' + selectedindex).append('<img style="position: absolute; margin-top:40px; margin-left:-30px; width:48px; height:35px" src="../Pictures/Orb.gif" /><div id = "ORB' + selectedindex + '" style="color: yellow; position: absolute; font-size:17px; margin-top:-27px; margin-left:50px; width:10px; height:10px ">' + units[selectedindex].mana + '</div>');
                         var temp3 = this.id;
                         for (var j = 0; j < index; j++) {
                             if (units[j].index === parseInt(temp3, 10)) {
                                 allyindex = j;
                             }
                         };
                         temp3 = temp3.replace("E", "");
                         units[allyindex].fireCircle = true;
                         units[selectedindex].usedaction = true;
                         Cleanse.play();
                         showailments();
                         turngray();
                     }
                 }
             }
         });
     }

     function levelup(index, mode) {
         var curindex = slots[index]
         if (mode) {
             curindex = index;
             units[curindex].experience += 1000;
         }
         else {
             units[curindex].experience += curexperience;
         }
         if (units[curindex].isanimal) {
             return;
         }
         if (units[curindex].experience >= 1000) {
             units[curindex].experience -= 1000;
             if (units[curindex].level == "-") {
                 return;
             }
             units[curindex].level += 1;
             units[curindex].health += units[curindex].levelhealth;
             units[curindex].maxhealth += units[curindex].levelhealth;
             //            units[slots[index]].resistance+=units[slots[index]].levelresistance;
             //            units[slots[index]].defense+=units[slots[index]].leveldefense;
             //            units[slots[index]].attack+=units[slots[index]].levelattack;
             if (units[curindex].type === "Soldier") {
                 switch (units[curindex].level) {
                 case 2:
                     units[curindex].abilitydash = true;
                     $("#TEXT").append("<p>The Soldier learned 'DASH'. He can now move an extra space as his action for the turn.</p>");
                     break;
                 case 3:
                     units[curindex].abilityimmunity = true;
                     $("#TEXT").append("<p>The Soldier learned 'IMMUNITY'. He's now immune to all ailments.</p>");
                     break;
                 case 4:
                     units[curindex].abilitysteadfast = true;
                     $("#TEXT").append("<p>The Soldier learned 'STEADFAST'. If damage would kill him, it reduces it to one instead.</p>");
                     break;
                 case 5:
                     units[curindex].abilitymedkit = true;
                     units[curindex].medkit = true;
                     $("#TEXT").append("<p>The Soldier learned 'MEDKIT'. Use this to fully restore soldier's health. Soldier will refill medkit when he visits the hospital.</p>");
                     break;
                 case 6:
                     units[curindex].abilitycounter = true;
                     $("#TEXT").append("<p>The Soldier learned 'COUNTER'. If an adjacent enemy damages the soldier, he will hit a portion of that damage back.</p>");
                     break;
                 }
             }
             if (units[curindex].type === "Knight") {
                 switch (units[curindex].level) {
                 case 2:
                     units[curindex].abilityswirl = true;
                     $("#TEXT").append("<p>The Knight learned 'SWIRL'. Use this special to attack all adjacent enemies around him.</p>");
                     break;
                 case 3:
                     units[curindex].abilitysweep = true;
                     $("#TEXT").append("<p>The Knight learned 'SWEEP'. Use it to attack an enemy and the enemies beside it.</p>");
                     break;
                 case 4:
                     units[curindex].abilityfreemove = true;
                     $("#TEXT").append("<p>The Knight learned 'FREE MOVE'. Moving no longer takes energy.</p>");
                     break;
                 case 5:
                     units[curindex].abilitypush = true;
                     $("#TEXT").append("<p>The Knight learned 'Push'. If the Knight hasn't moved this turn, he can use this special push an enemy back.</p>");
                     break;
                 case 6:
                     units[curindex].abilitywail = true;
                     $("#TEXT").append("<p>The Knight learned 'Wail'. Attack an enemy multiple times based on remaining stamina with increasing chance of missing.</p>");
                     break;
                 }
             }
             if (units[curindex].type === "Thief") {
                 switch (units[curindex].level) {
                 case 2:
                     units[curindex].abilityinvisible = true;
                     $("#TEXT").append("<p>The Thief learned 'INVISIBLE'. Enemies will ignore him while invisible, but he will lose invisibility for a turn if he attacks..</p>");
                     break;
                 case 3:
                     units[curindex].abilityphase = true;
                     $("#TEXT").append("<p>The Thief learned 'PHASE'. Thief will switch places with an adjacent enemy and enfeeble it.</p>");
                     break;
                 case 4:
                     units[curindex].abilitybackstab = true;
                     $("#TEXT").append("<p>The Thief learned 'BACKSTAB'. Attacks from behind the enemy are double damage.</p>");
                     break;
                 case 5:
                     units[curindex].abilityfirstblow = true;
                     $("#TEXT").append("<p>The Thief learned 'FIRSTBLOW'. Attacks on an undamaged enemy will inflict blindness for two turns.</p>");
                     break;
                 case 6:
                     units[curindex].abilitybettersteal = true;
                     $("#TEXT").append("<p>The Thief learned 'BETTERSTEAL'. He will have 100% success at stealing.</p>");
                     break;
                 }
             }
             if (units[curindex].type === "Guard") {
                 switch (units[curindex].level) {
                 case 2:
                     units[curindex].abilityprotect = true;
                     $("#TEXT").append("<p>The Guard learned 'PROTECT'. Use it on an ally, and for the rest of the battle, all damage will be redirected to the guard.</p>");
                     break;
                 case 3:
                     units[curindex].abilityimmunity = true;
                     $("#TEXT").append("<p>The Guard learned 'IMMUNITY'. Guard, and whomever the guard is protecting, are immune to all ailments.</p>");
                     break;
                 case 4:
                     units[curindex].abilityscout = true;
                     $("#TEXT").append("<p>The Guard learned 'SCOUT'. Groups with the guard will always go first.</p>");
                     break;
                 case 5:
                     units[curindex].abilityreshield = true;
                     $("#TEXT").append("<p>The Guard learned 'RESHIELD'. Attacking refills the guard's shield.</p>");
                     break;
                 case 6:
                     units[curindex].abilityincreaseenergy = true;
                     $("#TEXT").append("<p>The Guard learned 'INCREASE SHIELD'. Starting shield is doubled.</p>");
                     break;
                 }
             }
             if (units[curindex].type === "Enchantress") {
                 switch (units[curindex].level) {
                 case 2:
                     units[curindex].abilitystorm = true;
                     $("#TEXT").append("<p>The Enchantress learned 'STORM'. It summons a storm cloud that helps for the rest of the battle. Costs 30 mana</p>");
                     break;
                 case 3:
                     units[curindex].abilityiceFall = true;
                     $("#TEXT").append("<p>The Enchantress learned 'Ice Fall'. Summons an ice sickle to fall on a random enemy every turn. Costs 50 mana.</p>");
                     break;
                 case 4:
                     units[curindex].abilitytorment = true;
                     $("#TEXT").append("<p>The Enchantress learned 'TORMENT'. Use to give an enemy sleep, poison, and enfeeble for 2 turns. Costs 50 mana.</p>");
                     break;
                 case 5:
                     units[curindex].abilityfireCircle = true;
                     $("#TEXT").append("<p>The Enchantress learned 'Fire Circle'. Use it on an ally to give a fire circle that will damage enemies around it every turn.Costs 50 mana.</p>");
                     break;
                 case 6:
                     units[curindex].abilitybestow = true;
                     $("#TEXT").append("<p>The Enchantress learned 'Bestow'. Uses to double the attack, and make invincible an ally for a turn. Costs 50 mana</p>");
                     break;
                 }
             }
             if (units[curindex].type === "Healer") {
                 switch (units[curindex].level) {
                 case 2:
                     units[curindex].abilitymove = true;
                     $("#TEXT").append("<p>The Healer learned 'RESTORE MOVE'. Vigor now also allows ally to move again.</p>");
                     break;
                 case 3:
                     units[curindex].abilityheal = true;
                     $("#TEXT").append("<p>The Healer learned 'HEAL'. Use it on an ally to restore 60 health.</p>");
                     break;
                 case 4:
                     units[curindex].abilityreach = true;
                     $("#TEXT").append("<p>The Healer learned 'REACH'. She can use vigor and heal on any unit regardless of location.</p>");
                     break;
                 case 5:
                     units[curindex].abilitycleanse = true;
                     $("#TEXT").append("<p>The Healer learned 'CLEANSE'. Vigor and Heal also remove all ailments.</p>");
                     break;
                 case 6:
                     units[curindex].abilitydoublevigor = true;
                     $("#TEXT").append("<p>The Healer learned 'DOUBLE VIGOR'. Vigor now affects both other allies.</p>");
                     break;
                 }
             }
             if (units[curindex].type === "Mage") {
                 switch (units[curindex].level) {
                 case 2:
                     units[curindex].abilityzap = true;
                     $("#TEXT").append("<p>The Mage learned 'ZAP'. Deals lightning, magic damage to one or two enemy up to two linear spaces away.</p>");
                     break;
                 case 3:
                     units[curindex].abilityfreeze = true;
                     $("#TEXT").append("<p>The Mage learned 'FREEZE'.  Deals ice, magic damage to one enemy up to three linear spaces away.</p>");
                     break;
                 case 4:
                     units[curindex].abilityelementalailments = true;
                     $("#TEXT").append("<p>The Mage learned 'ADDED AILMENTS'. Ice may cause sleep, fire blindness, and lightning immobolize.</p>");
                     break;
                 case 5:
                     units[curindex].abilitypain = true;
                     $("#TEXT").append("<p>The Mage learned 'PAIN'. Deals magic damage equal to her attack plus the enemy's defense to an adjacent enemy.</p>");
                     break;
                 case 6:
                     units[curindex].abilitydoubletap = true;
                     $("#TEXT").append("<p>The Mage learned 'DOUBLETAP'. Mage may do another action instead of moving.</p>");
                     break;
                 }
             }
             if (units[curindex].type === "Wizard") {
                 switch (units[curindex].level) {
                 case 2:
                     units[curindex].abilitybolt = true;
                     $("#TEXT").append("<p>The Wizard learned 'BOLT'. Deals 2X lightning, magic damage to any enemy for 3 charge.</p>");
                     break;
                 case 3:
                     units[curindex].abilitymissile = true;
                     $("#TEXT").append("<p>The Wizard learned 'MISSILE'. Deals fire, magic damage times the current charge to any enemy in a straight line.</p>");
                     break;
                 case 4:
                     units[curindex].abilityelementalailments = true;
                     $("#TEXT").append("<p>The Wizard learned 'ELEMENTAL AILMENTS'. Ice may cause sleep, fire blindness, and lightning immobolize.</p>");
                     break;
                 case 5:
                     units[curindex].abilitydrain = true;
                     $("#TEXT").append("<p>The Wizard learned 'DRAIN'. Use it on an adjacent enemy to completely drain it's charge and give it to the wizard.</p>");
                     break;
                 case 6:
                     units[curindex].abilitystartcharge = true;
                     $("#TEXT").append("<p>The Wizard learned 'START CHARGE'. Starts with 2 charge.</p>");
                     break;
                 }
             }
             if (units[curindex].type === "Sorcerer") {
                 switch (units[curindex].level) {
                 case 2:
                     units[curindex].abilitylightning = true;
                     $("#TEXT").append("<p>The Sorcerer learned 'LIGHTNING'. Deals 2X lightning, magic damage.</p>");
                     break;
                 case 3:
                     units[curindex].abilityfireblast = true;
                     $("#TEXT").append("<p>The Sorcerer learned 'FIREBLAST'. Deals 2X fire, magic damage to any enemy and 1X fire, magic damage to all adjacent enemies.</p>");
                     break;
                 case 4:
                     units[curindex].abilityearth = true;
                     $("#TEXT").append("<p>The Sorcerer learned 'Earth'. Deals 2X physical damage.</p>");
                     break;
                 case 5:
                     units[curindex].abilitymanaincrease = true;
                     sorcererincrease = 2;
                     $("#TEXT").append("<p>The Sorcerer learned 'POWER INCREASE'. Daily increase of Power is doubled.</p>");
                     break;
                 case 6:
                     units[curindex].abilitydeath = true;
                     $("#TEXT").append("<p>The Sorcerer learned 'DEATH'. Instantly kills an enemy.</p>");
                     break
                 }
             }
             if (units[curindex].type === "Archer") {
                 switch (units[curindex].level) {
                 case 2:
                     units[curindex].abilityexplosion = true;
                     $("#TEXT").append("<p>The Archer learned 'EXPLODING ARROW'. Deals physical, fire damage to any enemy and all enemies adjacent to it.</p>");
                     break;
                 case 3:
                     units[curindex].abilitypierce = true;
                     $("#TEXT").append("<p>The Archer learned 'PIERCING ARROW'. Deals damage to enemy ignoring defenses.</p>");
                     break;
                 case 4:
                     units[curindex].abilityimmobolize = true;
                     $("#TEXT").append("<p>The Archer learned 'IMMOBOLIZED ARROW'. Inflicts immobolized onto enemy. It can't move for two turns.</p>");
                     break;
                 case 5:
                     units[curindex].abilitytitan = true;
                     $("#TEXT").append("<p>The Archer learned 'TITAN ARROW'. Deals 2X damage.</p>");
                     break;
                 case 6:
                     units[curindex].abilitydoublearrows = true;
                     units[curindex].arrowcapacity = 2;
                     $("#TEXT").append("<p>The Archer learned 'DOUBLE ARROWS'. Starts with 2 arrows instead of 1.</p>");
                     break;
                 }
             }
             if (units[curindex].type === "Rouge") {
                 switch (units[curindex].level) {
                 case 2:
                     units[curindex].abilityblindness = true;
                     $("#TEXT").append("<p>The Rouge learned 'BLINDNESS'. Inflicts blindness onto enemy for two turns, making it so it can't attack.</p>");
                     break;
                 case 3:
                     units[curindex].abilityenfeeble = true;
                     $("#TEXT").append("<p>The Rouge learned 'ENFEEBLE'. Inflicts enfeeble onto enemy for 2 turns. While enfeebled, all damage to it will ignore defenses and resistance.</p>");
                     break;
                 case 4:
                     units[curindex].abilitysleep = true;
                     $("#TEXT").append("<p>The Rouge learned 'SLEEP'. Inflicts sleep onto enemy for one turn. It skips it's turn while asleep.</p>");
                     break;
                 case 5:
                     units[curindex].abilityailmentduration = true;
                     units[curindex].duration = 1;
                     $("#TEXT").append("<p>The Rouge learned 'AILMENT DURATION'. All ailments from the rouge with last an extra turn.</p>");
                     break;
                 case 6:
                     units[curindex].abilitydoublearrows = true;
                     units[curindex].arrowcapacity = 2;
                     $("#TEXT").append("<p>The Rouge learned 'DOUBLE ARROWS'. Starts with 2 arrows instead of 1.</p>");
                     break;
                 }
             }
             if (units[curindex].type === "Templar") {
                 switch (units[curindex].level) {
                 case 2:
                     units[curindex].abilitygrapplinghook = true;
                     $("#TEXT").append("<p>The Templar learned 'GRAPPLING HOOK ARROW'. Pulls an enemy to the templar.</p>");
                     break;
                 case 3:
                     units[curindex].abilityelemental = true;
                     $("#TEXT").append("<p>The Templar learned 'ELEMENTAL'. You can choose an element to apply to the templar's attacks.</p>");
                     break;
                 case 4:
                     units[curindex].abilitydisrupt = true;
                     $("#TEXT").append("<p>The Templar learned 'DISRUPTING ARROW'. Removes all charge from all enemies.</p>");
                     break;
                 case 5:
                     units[curindex].abilityburst = true;
                     $("#TEXT").append("<p>The Templar learned 'BURST ARROW'. Deals damage equal to it's attack plus the enemy's resistance.</p>");
                     break;
                 case 6:
                     units[curindex].abilitydoublearrows = true;
                     units[curindex].arrowcapacity = 2;
                     $("#TEXT").append("<p>The Templar learned 'DOUBLE ARROWS'. Starts with 2 arrows instead of 1.</p>");
                     break;
                 }
             }
         }
         if (units[curindex].level === 6 || units[curindex].level === "-") {
             units[curindex].experience = 0;
             units[curindex].level = "-";
             return;
         }
     }
     var gameoverset = false;

     function gameovercheck() {
         var alldead = true
         for (var i = 0; i < index; i++) {
             if (units[i].alive == true) {
                 alldead = false
             }
         }
         if (alldead) {
             if (typeof indiv_alldead == 'function') {
                 indiv_alldead();
             }
             else {
                 gameover()
             }
         }
     }

     function gameover() {
         gameoverset = true;
         $(".areas").remove();
         $('#Pass').remove();
         $(".icon").remove();
         $(".Eicon").remove();
         $("#battlebackground").remove();
         $("#background").append("<div style='border-radius:5px;box-shadow: 10px 5px 5px black; position: absolute; background-color:red; width:150px; margin-top:-300px; margin-left:200px'><p style='font-size:20px; margin-left:20px'>YOU LOSE</p><p class='retry' style='font-size:20px; margin-left:20px; font-weight:bold; cursor:pointer'>RETRY?</p></div>")
         $("#cinemabackground").append("<div style='border-radius:5px;box-shadow: 10px 5px 5px black; position: absolute; background-color:red; width:150px; margin-top:200px; margin-left:400px'><p style='font-size:20px; margin-left:20px'>YOU LOSE</p><p class='retry' style='font-size:20px; margin-left:20px; font-weight:bold; cursor:pointer'>RETRY?</p></div>")
         setTimeout(function () {
             $(".retry").click(function () {
                 location.reload();
             })
         }, 1000)
     }

     function winbattle(location) {
         if (gameoverset) {
             return;
         }
         gameoverset = true;
         $(".Eicon").effect("explode");
         $("#background").append("<p class='epictext' style ='position: absolute; margin-left:200px; margin-top:-300px'>You Win</p>")
         changesong("01/win-theme.mp3")
         setTimeout(function () {
             window.location.href = location;
         }, 5000)
         $("#battlebackground").remove();
     }

     function clickactionbuttons() {
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
                 $('.selectedUnit').effect("pulsate", "fast");
                 Chargesound.play();
                 $("#TEXT").append("<p>" + units[selectedindex].name + "'s charge increased to  " + units[selectedindex].charge + "\n</p>");
                 units[selectedindex].usedaction = true;
                 units[selectedindex].charge += 1;
                 $("#ORB" + units[selectedindex].index).remove();
                 $('#' + selectedindex).append('<div id = "ORB' + units[selectedindex].index + '" style="color: yellow; position: absolute; font-size:20px; margin-top:-30px; margin-left:55px; width:10px; height:10px ">' + units[selectedindex].charge + '</div>');
             }
             if (selectedaction === "Use") {
                 var e = document.getElementById("alchemychoice");
                 if (e.options[e.selectedIndex].value === "Angel") {
                     $("#TEXT").empty();
                     if (angelrest > 0) {
                         $("#TEXT").append("The angel still has to rest for another " + angelrest + " turns.")
                         return;
                     }
                     if (units[selectedindex].usedaction === true) {
                         $("#TEXT").append("<p>" + units[selectedindex].name + " has already used an action this turn</p>");
                         return;
                     }
                     $("#battlebackground").append("<img class='totalbackground' src='../Pictures/Enemies/Angel.gif' />");
                     $(".totalbackground").fadeOut(4000);
                     $("#TEXT").append("The Angel did healed all your allies, and must now rest for 8 turns.");
                     angelrest = 8;
                     for (var i = 1; i < 4; i++) {
                         if (units[slots[i]].alive === true) {
                             units[slots[i]].health += 100;
                             if (units[slots[i]].health > units[slots[i]].maxhealth) {
                                 units[slots[i]].health = units[slots[i]].maxhealth
                             }
                             ADamaging(slots[i], 100);
                         }
                     }
                 }
                 if (e.options[e.selectedIndex].value === "Djinn") {
                     $("#TEXT").empty();
                     if (djinnrest > 0) {
                         $("#TEXT").append("The djinn still has to rest for another " + djinnrest + " turns.")
                         return;
                     }
                     $(".button").remove();
                     if (units[selectedindex].usedaction === true) {
                         $("#TEXT").append("<p>" + units[selectedindex].name + " has already used an action this turn</p>");
                         return;
                     }
                     units[selectedindex].usedaction = true;
                     $("#" + selectedindex).remove();
                     units[index] = new ADjinn(index, selectedindex);
                     units[index - 1].owner = selectedindex;
                     if (units[selectedindex].abilitysummon === true) {
                         djinnrest = 4;
                     }
                     else {
                         djinnrest = 8;
                     }
                     if (slots[1] === selectedindex) {
                         var templeft = units[slots[1]].curleft;
                         var temptop = units[slots[1]].curtop;
                         slots[1] = index - 1;
                         units[slots[1]].curleft = templeft;
                         units[slots[1]].curtop = temptop;
                         $('#battlebackground').append('<div STYLE="position:absolute; TOP:' + temptop + 'px; LEFT:' + templeft + 'px;" class="unit"  id="' + slots[1] + '" ><img src="' + units[slots[1]].image + '"/></div>');
                         $('#' + slots[1]).append('<div class="healthbar" id = "HB' + slots[1] + '" style="width: ' + (units[slots[1]].health / units[slots[1]].maxhealth) * 100 + '%"></div>');
                     }
                     if (slots[2] === selectedindex) {
                         var templeft = units[slots[2]].curleft;
                         var temptop = units[slots[2]].curtop;
                         slots[2] = index - 1;
                         units[slots[2]].curleft = templeft;
                         units[slots[2]].curtop = temptop;
                         $('#battlebackground').append('<div STYLE="position:absolute; TOP:' + temptop + 'px; LEFT:' + templeft + 'px;" class="unit"  id="' + slots[2] + '" ><img src="' + units[slots[2]].image + '"/></div>');
                         $('#' + slots[2]).append('<div class="healthbar" id = "HB' + slots[2] + '" style="width: ' + (units[slots[2]].health / units[slots[2]].maxhealth) * 100 + '%"></div>');
                     }
                     if (slots[3] === selectedindex) {
                         var templeft = units[slots[3]].curleft;
                         var temptop = units[slots[3]].curtop;
                         slots[3] = index - 1;
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
                 if (units[selectedindex].type === "Djinn") {
                     $("#TEXT").append("The Djinn can't escape!");
                     return;
                 }
                 if (units[selectedindex].type === "Golem") {
                     units[selectedindex].type === "Enchantress"
                 }
                 if (units[selectedindex].usedaction === true) {
                     $("#TEXT").append("<p>" + units[selectedindex].name + " has already used an action this turn</p>");
                     return;
                 }
                 $("#TEXT").append("<p>" + units[selectedindex].name + " escaped and will return to the nexus in " + (1 + difflevel) + " turns.\n</p>");
                 units[selectedindex].enroute = 1 + difflevel;
                 $("#" + selectedindex).remove();
                 units[selectedindex].group = 0;
                 if (units[selectedindex].abilityprotect === true) {
                     units[slots[1]].protectedby = -1;
                     units[slots[2]].protectedby = -1;
                     units[slots[3]].protectedby = -1;
                     showailments();
                 }
                 if (slots[1] === selectedindex) {
                     slots[1] = -1;
                 }
                 if (slots[2] === selectedindex) {
                     slots[2] = -1;
                 }
                 if (slots[3] === selectedindex) {
                     slots[3] = -1;
                 }
                 if (units[slots[1]].alive === false && units[slots[2]].alive === false && units[slots[3]].alive === false) {
                     $("#TEXT").empty;
                     $("#battlebackground").remove();
                     $("#M" + curally).remove();
                     $("#space" + groups[curally].location).data("filled", 0);
                     groups[curally].location = -1;
                     $(".actionbutton").remove();
                     battleon = false;
                     $('.actions').append("<div class = 'actionbutton' id='Pass'><p>Pass</p></div>");
                     presspass();
                     startcombat();
                 } //end of loses battle
             }
             if (selectedaction === "enchantressUse") {}
             if (selectedaction === "soldierAttack" || selectedaction === "mimicAttack") {
                 var e = document.getElementById("soldierchoice");
                 if (selectedaction === "mimicAttack") {
                     var e = document.getElementById("mimicchoice");
                 }
                 if (e.options[e.selectedIndex].text === "Medkit" && units[selectedindex].usedaction === false && units[selectedindex].medkit === true) {
                     var gain = units[selectedindex].maxhealth - units[selectedindex].health;
                     units[selectedindex].health = units[selectedindex].maxhealth;
                     units[selectedindex].medkit = false;
                     ADamaging(selectedindex, gain);
                     selectedaction = "";
                     units[selectedindex].usedaction = true;
                     //animation
                     $("#" + selectedindex).append("<div class='healerEffects'><img src='../Pictures/Effects/heal.gif' /></div>");
                     $(".healerEffects").fadeOut(2000);
                     Cleanse.play()
                 }
             }
             if (selectedaction === "sorcererCast" || selectedaction === "mimicAttack") {
                 var e = document.getElementById("sorcererchoice");
                 if (selectedaction === "mimicAttack") {
                     var e = document.getElementById("mimicchoice");
                 }
                 if (e.options[e.selectedIndex].text === "Blood-Sacrifice" && units[selectedindex].usedaction === false) {
                     if (units[selectedindex].braced) {
                         units[selectedindex].ultimate = true;
                         units[selectedindex].usedaction = true;
                         units[selectedindex].health = 1;
                         Death.play();
                         var temp = "#" + selectedindex;
                         var tempbar = "#HB" + selectedindex;
                         $(tempbar).remove();
                         $(temp).append('<div class="healthbar" id ="HB' + units[selectedindex].index + '"style="width: ' + (units[selectedindex].health / units[selectedindex].maxhealth) * 100 + '%"></div>');
                     }
                     else {
                         ADies("whatever", selectedindex)
                     }
                 }
             }
             if (selectedaction === "guardUse" || selectedaction === "mimicAttack") {
                 var e = document.getElementById("guardchoice");
                 if (selectedaction === "mimicAttack") {
                     var e = document.getElementById("mimicchoice");
                 }
                 //            if (e.options[e.selectedIndex].text === "Reshield" && units[selectedindex].usedaction === false) {
                 //                units[selectedindex].energy+=10;
                 //                selectedaction="";
                 //                units[selectedindex].usedaction = true;
                 //                $("#EB" + units[selectedindex].index).remove();
                 //                $("#" + selectedindex).append('<div class="energybar" id ="EB'+ units[selectedindex].index + '"style="width: ' + units[selectedindex].energy + '%"></div>');
                 //            }
                 if (e.options[e.selectedIndex].text === "Brace" && units[selectedindex].usedaction === false) {
                     $("#TEXT").html("<p>" + units[selectedindex].name + " used braced. If the next source of damage would kill him, and he currently has more than 1 health, it reduces his health to 1 instead.</p>")
                     Protect.play();
                     units[selectedindex].braced = true
                     selectedaction = "";
                     units[selectedindex].usedaction = true;
                 }
             }

             function youlose() {
                 if (units[slots[1]].health <= 0) {
                     units[slots[1]].alive = false;
                 } //not sure why i need this, but do
                 if (units[slots[1]].alive === false && units[slots[2]].alive === false && units[slots[3]].alive === false) {
                     $("#TEXT").empty;
                     $("#battlebackground").remove();
                     $("#M" + curally).remove();
                     $("#space" + groups[curally].location).data("filled", 0);
                     groups[curally].location = -1;
                     $(".actions").empty();
                     battleon = false;
                     $('.actions').append("<div class = 'actionbutton' id='Pass'><p>Pass</p></div>");
                     gameovercheck();
                     presspass();
                 }
             }

             function ADies(type, index) {
                 var dyingname = "";
                 var temp = "#" + index;
                 //$(temp).attr("src",Eunits[index].dying);
                 $(temp).append("<img class='ailment' src='../Pictures/Effects/dying.gif'/>")
                 setTimeout(function () {
                     $(temp).remove()
                 }, 1000)
                 dyingname = units[index].name;
                 $("#TEXT").append("<p>" + dyingname + " has died</p>");
                 units[index].alive = false;
                 units[index].group = -1;
                 units[index].location = 0;
             }

             function ADamaging(index, damage) {
                 var temp = "#" + index;
                 var tempbar = "#HB" + index;
                 $(tempbar).remove();
                 $(temp).append('<div class="healthbar" id ="HB' + units[index].index + '"style="width: ' + (units[index].health / units[index].maxhealth) * 100 + '%"></div>');
                 $(temp).append('<p class="damage" style="position: absolute; font-size:40px; margin-top:-70px; margin-left:30px; color:green ">' + damage + '</p>');
                 $(".damage").delay(1000).effect("puff");
             }
             if (units[selectedindex].moved === true && units[selectedindex].usedaction === true) {
                 $('#' + selectedindex).addClass("grayicon");
             }
             if (units[selectedindex].moved === true || units[selectedindex].usedaction === true) {
                 $('#' + selectedindex).addClass("lighticon");
             }
         }); //end of .button click event
     }
     //Bad guy's turn//////////////////////////////////////////////////////////////////////////////////////////
     function passturnbutton() {
         $('.actionbutton').click(function () {
                 enemyturn($(this).attr('id'));
                 if (typeof indiv_passTurn == 'function' && $(this).attr('id') == "PassTurn") {
                     indiv_passTurn();
                 }
             }) //end of action button
     }
     var damagenum = 0;
     var curenemyleft = 0;
     var curenemytop = 0;

     function enemyturn(selectedactions) {
         //prevents enemy's turn if in a length animation.
         if (inanimation) {
             return;
         }
         $('*').removeClass("selectedUnit");
         $('*').removeClass('battlehighlight');
         $(this).addClass('battlehighlight');
         selectedaction = selectedactions;
         if (selectedaction === "PassTurn") {
             selectedindex = -1;
             //reset allies
             $("#TEXT").empty();
             for (var i = 0; i < index; i++) {
                 if (units[i].type === "Knight" && units[i].moved === false && units[i].usedaction === false) {
                     units[i].energy += 60;
                     if (units[i].energy > 100) {
                         units[i].energy = 100
                     }
                     $("#EB" + units[i].index).remove();
                     $("#" + i).append('<div class="energybar" id ="EB' + units[i].index + '"style="width: ' + units[i].energy + '%"></div>');
                 }
                 if (units[i].sleep > 0) {
                     units[i].sleep -= 1
                 }
                 if (units[i].poison > 0) {
                     units[i].health -= 10;
                     if (units[i].health < 0) {
                         units[i].health = 1;
                     }
                     units[i].poison -= 1
                     $("#HB" + i).remove();
                     $("#" + i).append('<div class="healthbar" id ="HB' + units[i].index + '"style="width: ' + (units[i].health / units[i].maxhealth) * 100 + '%"></div>');
                 }
                 if (units[i].immobilized > 0) {
                     units[i].immobilized -= 1
                 }
                 if (units[i].blind > 0) {
                     units[i].blind -= 1
                 }
                 if (units[i].silenced > 0) {
                     units[i].silenced -= 1
                 }
                 units[i].moved = false;
                 units[i].usedaction = false;
                 if (units[i].abilitybuildenergy) {
                     units[i].energy += 5;
                     $("#EB" + i).remove();
                     $("#" + i).append('<div class="energybar" id ="EB' + units[i].index + '"style="width: ' + (units[i].energy) + '%"></div>');
                 }
                 $('#' + i).removeClass("grayicon");
                 $('#' + i).removeClass("lighticon");
                 $('*').removeClass('highlight');
             }
             for (var i = 0; i < Eindex; i++) {
                 if (Eunits[i].poison > 0) {
                     Eunits[i].health -= 10;
                     if (Eunits[i].health <= 0) {
                         Eunits[i].health = 1;
                     }
                     Eunits[i].poison -= 1;
                     $("#EHB" + i).remove();
                     $("#E" + i).append('<div class="healthbar" id ="EHB' + Eunits[i].index + '"style="width: ' + (Eunits[i].health / Eunits[i].maxhealth) * 100 + '%"></div>');
                 }
                 if (Eunits[i].enfeeble > 0) {
                     Eunits[i].enfeeble -= 1;
                 }
             }
             $('.battleactions').empty();
             // Enemy's turns
             var curenemynum = 1;
             if (Eslots[2] !== -1) {
                 curenemynum = 2
             }
             if (Eslots[3] !== -1) {
                 curenemynum = 3
             }
             if (Eslots[4] !== -1) {
                 curenemynum = 4
             }
             if (Eslots[5] !== -1) {
                 curenemynum = 5
             }
             //enemies turns/////////////////////////////////////////////////////
             firecheck()
             for (var y = 1; y < curenemynum + 1; y++) {
                 Eunits[Eslots[y]].moved = false;
                 //righthere
                 if (Eunits[Eslots[y]].sleep === 0) {
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
                         var row1empty = true;
                         var row2empty = true;
                         var row3empty = true;
                         var row4empty = true;
                         var row5empty = true;
                         //determine enemy's image
                         $('*').removeClass("selected");
                         $("#E" + Eunits[Eslots[y]].index).addClass("selected");
                         //Determine if below is empty
                         belowempty = true;
                         for (var x = 1; x < 4; x++) {
                             if ((((units[slots[x]].curtop - 100) === Eunits[Eslots[y]].curtop && (units[slots[x]].curleft === Eunits[Eslots[y]].curleft) && units[slots[x]].alive === true && units[slots[x]].type != "Invisible") || Eunits[Eslots[y]].curtop > 350)) {
                                 belowempty = false;
                             }
                         }
                         for (var x = 1; x < 6; x++) {
                             if ((((Eunits[Eslots[x]].curtop - 100) === Eunits[Eslots[y]].curtop && (Eunits[Eslots[x]].curleft === Eunits[Eslots[y]].curleft) && Eunits[Eslots[x]].alive === true) || Eunits[Eslots[y]].curtop > 350)) {
                                 belowempty = false;
                             }
                         }
                         //Determine if above is empty
                         for (var x = 1; x < 4; x++) {
                             if ((((units[slots[x]].curtop + 100) === Eunits[Eslots[y]].curtop) && (units[slots[x]].curleft === Eunits[Eslots[y]].curleft) && units[slots[x]].alive === true && units[slots[x]].type != "Invisible") || Eunits[Eslots[y]].curtop < 50) {
                                 upempty = false;
                             }
                         }
                         for (var x = 1; x < 6; x++) {
                             if ((((Eunits[Eslots[x]].curtop + 100) === Eunits[Eslots[y]].curtop) && (Eunits[Eslots[x]].curleft === Eunits[Eslots[y]].curleft) && Eunits[Eslots[x]].alive === true) || Eunits[Eslots[y]].curtop < 50) {
                                 upempty = false;
                             }
                         }
                         //Determine if left is empty
                         for (var x = 1; x < 4; x++) {
                             if ((((units[slots[x]].curleft + 100) === Eunits[Eslots[y]].curleft) && (units[slots[x]].curtop === Eunits[Eslots[y]].curtop) && units[slots[x]].alive === true && units[slots[x]].type != "Invisible") || Eunits[Eslots[y]].curleft < 50) {
                                 leftempty = false;
                             }
                         }
                         for (var x = 1; x < 6; x++) {
                             if ((((Eunits[Eslots[x]].curleft + 100) === Eunits[Eslots[y]].curleft) && (Eunits[Eslots[x]].curtop === Eunits[Eslots[y]].curtop) && Eunits[Eslots[x]].alive === true) || Eunits[Eslots[y]].curleft < 50) {
                                 leftempty = false;
                             }
                         }
                         //Determine if right is empty
                         for (var x = 1; x < 4; x++) {
                             if ((((units[slots[x]].curleft - 100) === Eunits[Eslots[y]].curleft) && (units[slots[x]].curtop === Eunits[Eslots[y]].curtop) && units[slots[x]].alive === true && units[slots[x]].type != "Invisible") || Eunits[Eslots[y]].curleft > 350) {
                                 rightempty = false;
                             }
                         }
                         for (var x = 1; x < 6; x++) {
                             if ((((Eunits[Eslots[x]].curleft - 100) === Eunits[Eslots[y]].curleft) && (Eunits[Eslots[x]].curtop === Eunits[Eslots[y]].curtop) && Eunits[Eslots[x]].alive === true) || Eunits[Eslots[y]].curleft > 350) {
                                 rightempty = false;
                             }
                         }
                         //determine if row5 is empty
                         for (var x = 1; x < slots.length; x++) {
                             if (units[slots[x]].curtop === 485) {
                                 row5empty = false;
                             }
                             if (units[slots[x]].curtop === 385) {
                                 row4empty = false;
                             }
                             if (units[slots[x]].curtop === 285) {
                                 row3empty = false;
                             }
                             if (units[slots[x]].curtop === 185) {
                                 row2empty = false;
                             }
                             if (units[slots[x]].curtop === 85) {
                                 row1empty = false;
                             }
                         }

                         function findenemy() {
                             enemyonbottomindex = -1;
                             enemyontopindex = -1;
                             enemyonleftindex = -1;
                             enemyonrightindex = -1;
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

                         function lowestD() {
                             findenemy();
                             var lowest = -1
                             units[lowest].defense = 100;
                             if (enemyonrightindex != -1 || enemyonright != "Invisible") {
                                 lowest = enemyonrightindex
                             }
                             if (enemyontopindex != -1 && units[enemyontopindex].defense < units[lowest].defense && enemyontop != "Invisible") {
                                 lowest = enemyontopindex
                             }
                             if (enemyonleftindex != -1 && units[enemyonleftindex].defense < units[lowest].defense && enemyonleft != "Invisible") {
                                 lowest = enemyonleftindex
                             }
                             if (enemyonbottomindex != -1 && units[enemyonbottomindex].defense < units[lowest].defense && enemyonbottom != "Invisible") {
                                 lowest = enemyonbottomindex
                             }
                             return lowest;
                         }

                         function lowestR() {
                             findenemy();
                             var lowest = -1
                             units[lowest].resistance = 100;
                             if (enemyonrightindex != -1 || enemyonright != "Invisible") {
                                 lowest = enemyonrightindex
                             }
                             if (enemyontopindex != -1 && units[enemyontopindex].resistance < units[lowest].resistance && enemyontop != "Invisible") {
                                 lowest = enemyontopindex
                             }
                             if (enemyonleftindex != -1 && units[enemyonleftindex].resistance < units[lowest].resistance && enemyonleft != "Invisible") {
                                 lowest = enemyonleftindex
                             }
                             if (enemyonbottomindex != -1 && units[enemyonbottomindex].resistance < units[lowest].resistance && enemyonbottom != "Invisible") {
                                 lowest = enemyonbottomindex
                             }
                             return lowest;
                         }

                         function closePattack() {
                             var attackthisone = lowestD();
                             if (Eunits[Eslots[y]].blind == 0) {
                                 if (attackthisone > -1 && Eunits[Eslots[y]].usedaction == false) {
                                     var damage = Eunits[Eslots[y]].attack - units[attackthisone].defense - units[attackthisone].defensetempboost;
                                     //warrior
                                     if (Eunits[Eslots[y]].type == "Warrior" && Eunits[Eslots[y]].moved == false) {
                                         damage = damage * 2;
                                     }
                                     if (damage < 0) {
                                         damage = 0
                                     }
                                     //sound
                                     if (Eunits[Eslots[y]].type == "Bear" || Eunits[Eslots[y]].type == "Wolf") {
                                         Dogbite.play();
                                     }
                                     else if (Eunits[Eslots[y]].type == "Vampire") {
                                         Vampirebite.play();
                                     }
                                     else {
                                         Sword.play();
                                     }
                                     //bear
                                     if (Eunits[Eslots[y]].type == "Bear") {
                                         var temprand = Math.floor((Math.random() * 2) + 1);
                                         if (temprand === 2 && units[attackthisone].abilityimmunity != true && units[units[attackthisone].protectedby].abilityimmunity != true) {
                                             units[attackthisone].blind = 2;
                                             $("#TEXT").append(units[attackthisone].name + " has been blinded for " + units[attackthisone].blind + " turns.")
                                         }
                                     }
                                     //vampire
                                     if (Eunits[Eslots[y]].type == "Vampire") {
                                         $("#TEXT").append("<p>" + Eunits[Eslots[y]].name + " gained " + damage + " life from the attack.</p>");
                                         Eunits[Eslots[y]].health += damage;
                                         if (Eunits[Eslots[y]].health > Eunits[Eslots[y]].maxhealth) {
                                             Eunits[Eslots[y]].health = Eunits[Eslots[y]].maxhealth
                                         }
                                         $("#EHB" + Eunits[Eslots[y]].index).remove();
                                         $("#E" + Eunits[Eslots[y]].index).append('<div class="healthbar" id ="EHB' + Eunits[Eslots[y]].index + '"style="width: ' + (Eunits[Eslots[y]].health / Eunits[Eslots[y]].maxhealth) * 100 + '%"></div>');
                                     }
                                     $("#" + attackthisone).append("<div class='slashEffects'><img src='../Pictures/Effects/EffectSlash.gif' /></div>");
                                     Damaging(damage, attackthisone)
                                     $(".slashEffects").fadeOut(2000);
                                     countering(attackthisone, y)
                                     Eunits[Eslots[y]].usedaction = true;
                                 }
                             }
                         }

                         function closeMattack() {
                             var attackthisone = lowestR();
                             if (Eunits[Eslots[y]].silence == 0) {
                                 if (attackthisone > -1 && Eunits[Eslots[y]].usedaction == false) {
                                     var damage = Eunits[Eslots[y]].attack - units[attackthisone].resistance - units[attackthisone].defensetempboost;
                                     if (damage < 0) {
                                         damage = 0
                                     }
                                     Sword.play();
                                     $("#" + attackthisone).append("<div class='slashEffects'><img src='../Pictures/Effects/EffectSlash.gif' /></div>");
                                     Damaging(damage, attackthisone)
                                     $(".slashEffects").fadeOut(2000);
                                     countering(attackthisone, y)
                                     Eunits[Eslots[y]].usedaction = true;
                                 }
                             }
                         }

                         function rangedPattack() {
                             var lowest = -1;
                             var lowestD = 100
                             if (Eunits[Eslots[y]].blind == 0) {
                                 for (var i = 1; i < 4; i++) {
                                     if (units[slots[i]] != -1 && units[slots[i]].type != "Invisible" && units[slots[i]].defense < lowestD && units[slots[i]].health > 0) {
                                         lowest = slots[i];
                                         lowestD = units[slots[i]].defense;
                                     }
                                 }
                                 if (lowest > -1) {
                                     var damage = Eunits[Eslots[y]].attack - units[lowest].defense - units[lowest].defensetempboost;
                                     if (damage < 0) {
                                         damage = 0
                                     }
                                     Arrow.play();
                                     shootarrow(lowest, Eslots[y]);
                                     Damaging(damage, lowest)
                                     Eunits[Eslots[y]].usedaction = true;
                                 }
                             }
                         }

                         function rangedMattack() {
                             var lowest = -1;
                             var lowestR = 100
                             units[-1].resistance = 100;
                             if (Eunits[Eslots[y]].charge == Eunits[Eslots[y]].maxcharge) {
                                 if (Eunits[Eslots[y]].silenced == 0) {
                                     for (var i = 1; i < 4; i++) {
                                         if (units[slots[i]] != -1 && units[slots[i]].type != "Invisible" && units[slots[i]].resistance < lowestR && units[slots[i]].health > 0) {
                                             lowest = slots[i];
                                             lowestR = units[slots[i]].resistance;
                                         }
                                     }
                                     if (lowest > -1) {
                                         var damage = Eunits[Eslots[y]].attack - units[lowest].resistance - units[lowest].defensetempboost;
                                         if (damage < 0) {
                                             damage = 0
                                         }
                                         if (Eunits[Eslots[y]].type == "Wizard" || Eunits[Eslots[y]].type == "Lightning Elemental") {
                                             Lightning.play();
                                             $("#battlebackground").append("<div class='staticEffects' style='margin-top: " + (units[lowest].curtop - 750) + "px; margin-left: " + (units[lowest].curleft - 100) + "px'><img src='../Pictures/Effects/EffectLightning.gif' /></div>");
                                             $(".staticEffects").fadeOut(2000);
                                         }
                                         if (Eunits[Eslots[y]].type == "Fire Elemental") {
                                             Fire.play();
                                             $("#battlebackground").append("<div class='Effects' style='top: " + (Eunits[Eslots[y]].curtop) + "px; left: " + (Eunits[Eslots[y]].curleft) + "px'><img src='../Pictures/Effects/EffectFire.gif' /></div>");
                                             $(".Effects").animate({
                                                 left: units[lowest].curleft + "px"
                                                 , top: units[lowest].curtop + "px"
                                             }, 500).fadeOut(500);
                                         }
                                         if (Eunits[Eslots[y]].type == "Wisp" || Eunits[Eslots[y]].type == "Frostwraith") {
                                             Iceattack.play();
                                             $("#battlebackground").append("<div class='Effects' style='top: " + Eunits[Eslots[y]].curtop + "px;left: " + Eunits[Eslots[y]].curleft + "px'><img src='../Pictures/Effects/EffectIce.gif' /></div>");
                                             $(".Effects").animate({
                                                 left: units[lowest].curleft + "px"
                                                 , top: units[lowest].curtop + "px"
                                             }, 500).fadeOut(500);
                                         }
                                         Damaging(damage, lowest);
                                         Eunits[Eslots[y]].charge -= Eunits[Eslots[y]].maxcharge;
                                         //minus one to offset charging
                                         Eunits[Eslots[y]].charge -= 1;
                                         charging();
                                         Eunits[Eslots[y]].usedaction = true;
                                     }
                                 }
                             }
                             if (Eunits[Eslots[y]].usedaction === false) {
                                 charging();
                             }
                         }

                         function scrollattack() {
                             var lowest = -1;
                             units[lowest].defense = 1000
                             if (Eunits[Eslots[y]].usedaction) {
                                 return;
                             }
                             for (var x = 1; x < slots.length; x++) {
                                 if (Eunits[Eslots[y]].usedaction === false && units[slots[x]].alive === true && units[slots[x]].type != "Invisible" && (units[slots[x]].curleft === Eunits[Eslots[y]].curleft || units[slots[x]].curtop === Eunits[Eslots[y]].curtop)) {
                                     if (units[lowest].defense > units[slots[x]].defense) {
                                         lowest = slots[x]
                                     }
                                 }
                             }
                             if (lowest != -1) {
                                 var damage = Eunits[Eslots[y]].attack - units[lowest].defense - units[lowest].defensetempboost;
                                 if (damage < 0) {
                                     damage = 0
                                 }
                                 Damaging(damage, lowest);
                                 if (Eunits[Eslots[y]].type == "Spitter") {
                                     Spit.play();
                                     Eunits[Eslots[y]].usedaction = true;
                                     if (Eunits[Eslots[y]].usedimmobilized >= 3 && units[lowest].abilityimmunity != true && units[units[lowest].protectedby].abilityimmunity != true) {
                                         $("#TEXT").append("<p>" + units[lowest].name + " was blinded for 2 turns.</p>");
                                         Paralyzesound.play();
                                         units[lowest].blind = 2;
                                         Eunits[Eslots[y]].usedimmobilized = 0;
                                         showailments();
                                     }
                                 }
                                 if (Eunits[Eslots[y]].type == "Rouge") {
                                     Arrow.play();
                                     shootarrow(lowest, Eslots[y]);
                                     Eunits[Eslots[y]].usedaction = true;
                                     if (Eunits[Eslots[y]].usedpoison && units[lowest].abilityimmunity != true && units[units[lowest].protectedby].abilityimmunity != true) {
                                         $("#TEXT").append("<p>" + units[lowest].name + " was poisoned for 3 turns.</p>");
                                         Paralyzesound.play();
                                         units[lowest].poison = 3;
                                         Eunits[Eslots[y]].usedpoison = false;
                                         showailments();
                                     }
                                 }
                             }
                         }

                         function spiderwhotoattack(type) {
                             //web attack
                             for (var x = 1; x < slots.length; x++) {
                                 if (units[slots[x]].type === type && Eunits[Eslots[y]].usedaction === false && units[slots[x]].alive === true && (units[slots[x]].curleft === Eunits[Eslots[y]].curleft || units[slots[x]].curtop === Eunits[Eslots[y]].curtop)) {
                                     if (units[slots[x]].curleft === Eunits[Eslots[y]].curleft && units[slots[x]].curtop > Eunits[Eslots[y]].curtop) {
                                         if (!(units[slots[1]].curleft === Eunits[Eslots[y]].curleft && units[slots[1]].curtop - 100 === Eunits[Eslots[y]].curtop) && !(units[slots[2]].curleft === Eunits[Eslots[y]].curleft && units[slots[2]].curtop - 100 === Eunits[Eslots[y]].curtop) && !(units[slots[3]].curleft === Eunits[Eslots[y]].curleft && units[slots[3]].curtop - 100 === Eunits[Eslots[y]].curtop) && !(Eunits[Eslots[1]].curleft === Eunits[Eslots[y]].curleft && Eunits[Eslots[1]].curtop - 100 === Eunits[Eslots[y]].curtop) && !(Eunits[Eslots[2]].curleft === Eunits[Eslots[y]].curleft && Eunits[Eslots[2]].curtop - 100 === Eunits[Eslots[y]].curtop) && !(Eunits[Eslots[3]].curleft === Eunits[Eslots[y]].curleft && Eunits[Eslots[3]].curtop - 100 === Eunits[Eslots[y]].curtop) && !(Eunits[Eslots[4]].curleft === Eunits[Eslots[y]].curleft && Eunits[Eslots[4]].curtop - 100 === Eunits[Eslots[y]].curtop) && !(Eunits[Eslots[5]].curleft === Eunits[Eslots[y]].curleft && Eunits[Eslots[5]].curtop - 100 === Eunits[Eslots[y]].curtop)) {
                                             units[slots[x]].curtop = Eunits[Eslots[y]].curtop + 100;
                                             $("#" + slots[x]).animate({
                                                 top: units[slots[x]].curtop
                                             })
                                             if (Eunits[Eslots[y]].type == "Spider") {
                                                 Hook.play();
                                                 if (units[slots[x]].abilityimmunity != true && units[units[slots[x]].protectedby].abilityimmunity != true) {
                                                     units[slots[x]].poison += 3;
                                                     $("#TEXT").append(units[slots[x]].name + " has been poisoned.");
                                                     Paralyzesound.play();
                                                 }
                                                 else {
                                                     $("#TEXT").append(units[slots[x]].name + " can't be poisoned.")
                                                 }
                                                 Eunits[Eslots[y]].usedaction = true;
                                                 $("#" + slots[x]).append("<div class='slashEffects' style='margin-left:10px'><img src='../Pictures/Effects/Web.gif' /></div>");
                                                 $(".slashEffects").fadeOut(2000);
                                             }
                                         }
                                     }
                                 }
                             }
                             findenemy();
                             if (Eunits[Eslots[y]].type == "Vacuum") {
                                 closePattack()
                             }
                             //poisoning
                             if (Eunits[Eslots[y]].type == "Spider") {
                                 if ((enemyonbottom === type) && (Eunits[Eslots[y]].usedaction === false)) {
                                     attackthisone = enemyonbottomindex;
                                     if (units[attackthisone].abilityimmunity != true && units[units[attackthisone].protectedby].abilityimmunity != true && units[attackthisone].accessory != "Ribbon") {
                                         units[attackthisone].poison += 3;
                                         $("#TEXT").append(units[attackthisone].name + " has been poisoned.");
                                         Paralyzesound.play();
                                     }
                                     else {
                                         $("#TEXT").append(units[attackthisone].name + " can't be poisoned.")
                                     }
                                     Eunits[Eslots[y]].usedaction = true;
                                 }
                                 if ((enemyonright === type) && (Eunits[Eslots[y]].usedaction === false)) {
                                     attackthisone = enemyonrightindex;
                                     if (units[attackthisone].abilityimmunity != true && units[units[attackthisone].protectedby].abilityimmunity != true && units[attackthisone].accessory != "Ribbon") {
                                         units[attackthisone].poison += 3;
                                         $("#TEXT").append(units[attackthisone].name + " has been poisoned.");
                                         Paralyzesound.play();
                                     }
                                     else {
                                         $("#TEXT").append(units[attackthisone].name + " can't be poisoned.")
                                     }
                                     Eunits[Eslots[y]].usedaction = true;
                                 }
                                 if ((enemyonleft === type) && (Eunits[Eslots[y]].usedaction === false)) {
                                     attackthisone = enemyonleftindex;
                                     if (units[attackthisone].abilityimmunity != true && units[units[attackthisone].protectedby].abilityimmunity != true && units[attackthisone].accessory != "Ribbon") {
                                         units[attackthisone].poison += 3;
                                         $("#TEXT").append(units[attackthisone].name + " has been poisoned.");
                                         Paralyzesound.play();
                                     }
                                     else {
                                         $("#TEXT").append(units[attackthisone].name + " can't be poisoned.")
                                     }
                                     Eunits[Eslots[y]].usedaction = true;
                                 }
                                 if ((enemyontop === type) && (Eunits[Eslots[y]].usedaction === false)) {
                                     attackthisone = enemyontopindex;
                                     if (units[attackthisone].abilityimmunity != true && units[units[attackthisone].protectedby].abilityimmunity != true && units[attackthisone].accessory != "Ribbon") {
                                         units[attackthisone].poison += 3;
                                         $("#TEXT").append(units[attackthisone].name + " has been poisoned.");
                                         Paralyzesound.play();
                                     }
                                     else {
                                         $("#TEXT").append(units[attackthisone].name + " can't be poisoned.")
                                     }
                                     Eunits[Eslots[y]].usedaction = true;
                                 }
                             }
                         } //end of who to attack function
                         function magewhotoattack(type) {
                             if ((enemyonbottom === type) && (Eunits[Eslots[y]].usedaction === false)) {
                                 attackthisone = enemyonbottomindex;
                                 var damage = Eunits[Eslots[y]].attack - units[attackthisone].resistance - units[attackthisone].defensetempboost;
                                 if (damage < 0) {
                                     damage = 0
                                 }
                                 var res = 1;
                                 if (units[attackthisone].accessory === "Elementward_Ring") {
                                     res = .5;
                                 }
                                 damage = parseInt((damage) * res);
                                 Fire.play();
                                 $("#battlebackground").append("<div class='Effects' style='margin-top: " + Eunits[Eslots[y]].curtop + "px; margin-left: " + Eunits[Eslots[y]].curleft + "px'><img src='../Pictures/Effects/EffectFire.gif' /></div>");
                                 $(".Effects").animate({
                                     left: -(Eunits[Eslots[y]].curleft - units[attackthisone].curleft) + "px"
                                     , top: -(Eunits[Eslots[y]].curtop - units[attackthisone].curtop) + "px"
                                 }, 500).fadeOut(500);
                                 Damaging(damage, attackthisone);
                                 if (units[attackthisone].health <= 0) {
                                     Dies(enemyonbottom, attackthisone);
                                     units[attackthisone].curleft = 10000;
                                     units[attackthisone].curtop = 10000;
                                 }
                                 Eunits[Eslots[y]].usedaction = true;
                             }
                             if (enemyonright === type && (Eunits[Eslots[y]].usedaction === false)) {
                                 attackthisone = enemyonrightindex;
                                 var damage = Eunits[Eslots[y]].attack - units[attackthisone].resistance - units[attackthisone].defensetempboost;
                                 if (damage < 0) {
                                     damage = 0
                                 }
                                 var res = 1;
                                 if (units[attackthisone].accessory === "Elementward_Ring") {
                                     res = .5;
                                 }
                                 damage = parseInt((damage) * res);
                                 Fire.play();
                                 $("#battlebackground").append("<div class='Effects' style='margin-top: " + Eunits[Eslots[y]].curtop + "px; margin-left: " + Eunits[Eslots[y]].curleft + "px'><img src='../Pictures/Effects/EffectFire.gif' /></div>");
                                 $(".Effects").animate({
                                     left: -(Eunits[Eslots[y]].curleft - units[attackthisone].curleft) + "px"
                                     , top: -(Eunits[Eslots[y]].curtop - units[attackthisone].curtop) + "px"
                                 }, 500).fadeOut(500);
                                 Damaging(damage, attackthisone);
                                 if (units[attackthisone].health <= 0) {
                                     Dies(enemyonright, attackthisone)
                                     units[attackthisone].curleft = 10000;
                                     units[attackthisone].curtop = 10000;
                                 }
                                 Eunits[Eslots[y]].usedaction = true;
                             }
                             if (enemyonleft === type && (Eunits[Eslots[y]].usedaction === false)) {
                                 attackthisone = enemyonleftindex;
                                 var damage = Eunits[Eslots[y]].attack - units[attackthisone].resistance - units[attackthisone].defensetempboost;
                                 if (damage < 0) {
                                     damage = 0
                                 }
                                 var res = 1;
                                 if (units[attackthisone].accessory === "Elementward_Ring") {
                                     res = .5;
                                 }
                                 damage = parseInt((damage) * res);
                                 Fire.play();
                                 $("#battlebackground").append("<div class='Effects' style='margin-top: " + Eunits[Eslots[y]].curtop + "px; margin-left: " + Eunits[Eslots[y]].curleft + "px'><img src='../Pictures/Effects/EffectFire.gif' /></div>");
                                 $(".Effects").animate({
                                     left: -(Eunits[Eslots[y]].curleft - units[attackthisone].curleft) + "px"
                                     , top: -(Eunits[Eslots[y]].curtop - units[attackthisone].curtop) + "px"
                                 }, 500).fadeOut(500);
                                 Damaging(damage, attackthisone);
                                 if (units[attackthisone].health <= 0) {
                                     Dies(enemyonleft, attackthisone);
                                     units[attackthisone].curleft = 10000;
                                     units[attackthisone].curtop = 10000;
                                 }
                                 Eunits[Eslots[y]].usedaction = true;
                             }
                             if (enemyontop === type && (Eunits[Eslots[y]].usedaction === false)) {
                                 attackthisone = enemyontopindex;
                                 var damage = Eunits[Eslots[y]].attack - units[attackthisone].resistance - units[attackthisone].defensetempboost;
                                 if (damage < 0) {
                                     damage = 0
                                 }
                                 var res = 1;
                                 if (units[attackthisone].accessory === "Elementward_Ring") {
                                     res = .5;
                                 }
                                 damage = parseInt((damage) * res);
                                 Fire.play();
                                 $("#battlebackground").append("<div class='Effects' style='margin-top: " + Eunits[Eslots[y]].curtop + "px; margin-left: " + Eunits[Eslots[y]].curleft + "px'><img src='../Pictures/Effects/EffectFire.gif' /></div>");
                                 $(".Effects").animate({
                                     left: -(Eunits[Eslots[y]].curleft - units[attackthisone].curleft) + "px"
                                     , top: -(Eunits[Eslots[y]].curtop - units[attackthisone].curtop) + "px"
                                 }, 500).fadeOut(500);
                                 Damaging(damage, attackthisone);
                                 if (units[attackthisone].health <= 0) {
                                     Dies(enemyontop, attackthisone);
                                     units[attackthisone].curleft = 10000;
                                     units[attackthisone].curtop = 10000;
                                 }
                                 Eunits[Eslots[y]].usedaction = true;
                             }
                             if ((enemyonbottom2 === type) && (Eunits[Eslots[y]].usedaction === false)) {
                                 attackthisone = enemyonbottom2index;
                                 var damage = Eunits[Eslots[y]].attack - units[attackthisone].resistance - units[attackthisone].defensetempboost;
                                 if (damage < 0) {
                                     damage = 0
                                 }
                                 var res = 1;
                                 if (units[attackthisone].accessory === "Elementward_Ring") {
                                     res = .5;
                                 }
                                 damage = parseInt((damage) * res);
                                 Fire.play();
                                 $("#battlebackground").append("<div class='Effects' style='margin-top: " + Eunits[Eslots[y]].curtop + "px; margin-left: " + Eunits[Eslots[y]].curleft + "px'><img src='../Pictures/Effects/EffectFire.gif' /></div>");
                                 $(".Effects").animate({
                                     left: -(Eunits[Eslots[y]].curleft - units[attackthisone].curleft) + "px"
                                     , top: -(Eunits[Eslots[y]].curtop - units[attackthisone].curtop) + "px"
                                 }, 500).fadeOut(500);
                                 Damaging(damage, attackthisone);
                                 if (units[attackthisone].health <= 0) {
                                     Dies(enemyonbottom2, attackthisone);
                                     units[attackthisone].curleft = 10000;
                                     units[attackthisone].curtop = 10000;
                                 }
                                 Eunits[Eslots[y]].usedaction = true;
                             }
                             if (enemyonright2 === type && (Eunits[Eslots[y]].usedaction === false)) {
                                 attackthisone = enemyonright2index;
                                 var damage = Eunits[Eslots[y]].attack - units[attackthisone].resistance - units[attackthisone].defensetempboost;
                                 if (damage < 0) {
                                     damage = 0
                                 }
                                 var res = 1;
                                 if (units[attackthisone].accessory === "Elementward_Ring") {
                                     res = .5;
                                 }
                                 damage = parseInt((damage) * res);
                                 Fire.play();
                                 $("#battlebackground").append("<div class='Effects' style='margin-top: " + Eunits[Eslots[y]].curtop + "px; margin-left: " + Eunits[Eslots[y]].curleft + "px'><img src='../Pictures/Effects/EffectFire.gif' /></div>");
                                 $(".Effects").animate({
                                     left: -(Eunits[Eslots[y]].curleft - units[attackthisone].curleft) + "px"
                                     , top: -(Eunits[Eslots[y]].curtop - units[attackthisone].curtop) + "px"
                                 }, 500).fadeOut(500);
                                 Damaging(damage, attackthisone);
                                 if (units[attackthisone].health <= 0) {
                                     Dies(enemyonright2, attackthisone);
                                     units[attackthisone].curleft = 10000;
                                     units[attackthisone].curtop = 10000;
                                 }
                                 Eunits[Eslots[y]].usedaction = true;
                             }
                             if (enemyonleft2 === type && (Eunits[Eslots[y]].usedaction === false)) {
                                 attackthisone = enemyonleft2index;
                                 var damage = Eunits[Eslots[y]].attack - units[attackthisone].resistance - units[attackthisone].defensetempboost;
                                 if (damage < 0) {
                                     damage = 0
                                 }
                                 var res = 1;
                                 if (units[attackthisone].accessory === "Elementward_Ring") {
                                     res = .5;
                                 }
                                 damage = parseInt((damage) * res);
                                 Fire.play();
                                 $("#battlebackground").append("<div class='Effects' style='margin-top: " + Eunits[Eslots[y]].curtop + "px; margin-left: " + Eunits[Eslots[y]].curleft + "px'><img src='../Pictures/Effects/EffectFire.gif' /></div>");
                                 $(".Effects").animate({
                                     left: -(Eunits[Eslots[y]].curleft - units[attackthisone].curleft) + "px"
                                     , top: -(Eunits[Eslots[y]].curtop - units[attackthisone].curtop) + "px"
                                 }, 500).fadeOut(500);
                                 Damaging(damage, attackthisone);
                                 if (units[attackthisone].health <= 0) {
                                     Dies(enemyonleft2, attackthisone);
                                     units[attackthisone].curleft = 10000;
                                     units[attackthisone].curtop = 10000;
                                 }
                                 Eunits[Eslots[y]].usedaction = true;
                             }
                             if (enemyontop2 === type && (Eunits[Eslots[y]].usedaction === false)) {
                                 attackthisone = enemyontop2index;
                                 var damage = Eunits[Eslots[y]].attack - units[attackthisone].resistance - units[attackthisone].defensetempboost;
                                 if (damage < 0) {
                                     damage = 0
                                 }
                                 var res = 1;
                                 if (units[attackthisone].accessory === "Elementward_Ring") {
                                     res = .5;
                                 }
                                 damage = parseInt((damage) * res);
                                 Fire.play();
                                 $("#battlebackground").append("<div class='Effects' style='margin-top: " + Eunits[Eslots[y]].curtop + "px; margin-left: " + Eunits[Eslots[y]].curleft + "px'><img src='../Pictures/Effects/EffectFire.gif' /></div>");
                                 $(".Effects").animate({
                                     left: -(Eunits[Eslots[y]].curleft - units[attackthisone].curleft) + "px"
                                     , top: -(Eunits[Eslots[y]].curtop - units[attackthisone].curtop) + "px"
                                 }, 500).fadeOut(500);
                                 Damaging(damage, attackthisone);
                                 Iceattack.play();
                                 if (units[attackthisone].health <= 0) {
                                     Dies(enemyontop2, attackthisone);
                                     units[attackthisone].curleft = 10000;
                                     units[attackthisone].curtop = 10000;
                                 }
                                 Eunits[Eslots[y]].usedaction = true;
                             }
                         }

                         function guardprotect(type) {
                             if (Eunits[Eslots[y]].usedaction) {
                                 return
                             }
                             for (var i = 1; i < 4; i++) {
                                 if (Eunits[Eslots[i]].type == type && Eunits[Eslots[i]].protectedby == -1 && Eslots[i] != Eunits[Eslots[y]].index) {
                                     Eunits[Eslots[i]].protectedby = Eunits[Eslots[y]].index;
                                     showailments();
                                     Protect.play()
                                     Eunits[Eslots[y]].usedaction = true
                                 }
                             }
                         }

                         function flamewraithwhotoattack() {
                             if ((Eunits[Eslots[y]].usedaction === false)) {
                                 if (enemyonbottomindex != -1) {
                                     var damage = Eunits[Eslots[y]].attack - units[enemyonbottomindex].defense - units[attackthisone].defensetempboost;
                                     if (damage < 0) {
                                         damage = 0
                                     }
                                     var res = 1;
                                     if (units[enemyonbottomindex].accessory === "Elementward_Ring") {
                                         res = .5;
                                     }
                                     damage = parseInt(damage * res);
                                     Fire.play();
                                     Damaging(damage, enemyonbottomindex);
                                 }
                                 if (enemyontopindex != -1) {
                                     var damage = Eunits[Eslots[y]].attack - units[enemyontopindex].defense - units[attackthisone].defensetempboost;
                                     if (damage < 0) {
                                         damage = 0
                                     }
                                     var res = 1;
                                     if (units[enemyontopindex].accessory === "Elementward_Ring") {
                                         res = .5;
                                     }
                                     damage = parseInt(damage * res);
                                     Fire.play();
                                     Damaging(damage, enemyontopindex);
                                 }
                                 if (enemyonrightindex != -1) {
                                     var damage = Eunits[Eslots[y]].attack - units[enemyonrightindex].defense - units[attackthisone].defensetempboost;
                                     if (damage < 0) {
                                         damage = 0
                                     }
                                     var res = 1;
                                     if (units[enemyonrightindex].accessory === "Elementward_Ring") {
                                         res = .5;
                                     }
                                     damage = parseInt(damage * res);
                                     Fire.play();
                                     Damaging(damage, enemyonrightindex);
                                 }
                                 if (enemyonleftindex != -1) {
                                     var damage = Eunits[Eslots[y]].attack - units[enemyonleftindex].defense - units[attackthisone].defensetempboost;
                                     if (damage < 0) {
                                         damage = 0
                                     }
                                     var res = 1;
                                     if (units[enemyonleftindex].accessory === "Elementward_Ring") {
                                         res = .5;
                                     }
                                     damage = parseInt(damage * res);
                                     Fire.play();
                                     Damaging(damage, enemyonleftindex);
                                 }
                                 if (enemyonbottomindex === -1 && enemyontopindex === -1 && enemyonrightindex === -1 && enemyonleftindex === -1) {}
                                 else {
                                     Eunits[Eslots[y]].charge = 0;
                                     //minus one to offset charging
                                     Eunits[Eslots[y]].charge -= 1;
                                     charging();
                                     Eunits[Eslots[y]].usedaction = true;
                                     $("#E" + Eslots[y]).append("<div class='staticEffects' style='margin-top:-180px; margin-left:-120px'><img src='../Pictures/Effects/EffectExplode.gif' /></div>");
                                     setTimeout(function () {
                                         $(".staticEffects").remove()
                                     }, 500);
                                 }
                             }
                         } //end of who to attack function
                         function icewhotoattack(type) {
                             if ((enemyonbottom === type) && (Eunits[Eslots[y]].usedaction === false)) {
                                 attackthisone = enemyonbottomindex;
                                 var damage = Eunits[Eslots[y]].attack - units[attackthisone].resistance - units[attackthisone].defensetempboost;
                                 if (damage < 0) {
                                     damage = 0
                                 }
                                 var res = 1;
                                 if (units[attackthisone].accessory === "Elementward_Ring") {
                                     res = .5;
                                 }
                                 damage = parseInt((damage) * res);
                                 Iceattack.play();
                                 $("#battlebackground").append("<div class='Effects' style='top: " + Eunits[Eslots[y]].curtop + "px;left: " + Eunits[Eslots[y]].curleft + "px'><img src='../Pictures/Effects/EffectIce.gif' /></div>");
                                 $(".Effects").animate({
                                     left: units[attackthisone].curleft + "px"
                                     , top: units[attackthisone].curtop + "px"
                                 }, 500).fadeOut(500);
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
                                 var damage = Eunits[Eslots[y]].attack - units[attackthisone].resistance - units[attackthisone].defensetempboost;
                                 if (damage < 0) {
                                     damage = 0
                                 }
                                 damage = parseInt((damage));
                                 Iceattack.play();
                                 $("#battlebackground").append("<div class='Effects' style='top: " + Eunits[Eslots[y]].curtop + "px;left: " + Eunits[Eslots[y]].curleft + "px'><img src='../Pictures/Effects/EffectIce.gif' /></div>");
                                 $(".Effects").animate({
                                     left: units[attackthisone].curleft + "px"
                                     , top: units[attackthisone].curtop + "px"
                                 }, 500).fadeOut(500);
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
                                 var damage = Eunits[Eslots[y]].attack - units[attackthisone].resistance - units[attackthisone].defensetempboost;
                                 if (damage < 0) {
                                     damage = 0
                                 }
                                 var res = 1;
                                 if (units[attackthisone].accessory === "Elementward_Ring") {
                                     res = .5;
                                 }
                                 damage = parseInt((damage) * res);
                                 Iceattack.play();
                                 $("#battlebackground").append("<div class='Effects' style='top: " + Eunits[Eslots[y]].curtop + "px;left: " + Eunits[Eslots[y]].curleft + "px'><img src='../Pictures/Effects/EffectIce.gif' /></div>");
                                 $(".Effects").animate({
                                     left: units[attackthisone].curleft + "px"
                                     , top: units[attackthisone].curtop + "px"
                                 }, 500).fadeOut(500);
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
                                 var damage = Eunits[Eslots[y]].attack - units[attackthisone].resistance - units[attackthisone].defensetempboost;
                                 if (damage < 0) {
                                     damage = 0
                                 }
                                 var res = 1;
                                 if (units[attackthisone].accessory === "Elementward_Ring") {
                                     res = .5;
                                 }
                                 damage = parseInt((damage) * res);
                                 Iceattack.play();
                                 $("#battlebackground").append("<div class='Effects' style='top: " + Eunits[Eslots[y]].curtop + "px;left: " + Eunits[Eslots[y]].curleft + "px'><img src='../Pictures/Effects/EffectIce.gif' /></div>");
                                 $(".Effects").animate({
                                     left: units[attackthisone].curleft + "px"
                                     , top: units[attackthisone].curtop + "px"
                                 }, 500).fadeOut(500);
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
                                 var damage = Eunits[Eslots[y]].attack - units[attackthisone].resistance - units[attackthisone].defensetempboost;
                                 if (damage < 0) {
                                     damage = 0
                                 }
                                 var res = 1;
                                 if (units[attackthisone].accessory === "Elementward_Ring") {
                                     res = .5;
                                 }
                                 damage = parseInt((damage) * res);
                                 Iceattack.play();
                                 $("#battlebackground").append("<div class='Effects' style='top: " + Eunits[Eslots[y]].curtop + "px;left: " + Eunits[Eslots[y]].curleft + "px'><img src='../Pictures/Effects/EffectIce.gif' /></div>");
                                 $(".Effects").animate({
                                     left: units[attackthisone].curleft + "px"
                                     , top: units[attackthisone].curtop + "px"
                                 }, 500).fadeOut(500);
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
                                 var damage = Eunits[Eslots[y]].attack - units[attackthisone].resistance - units[attackthisone].defensetempboost;
                                 if (damage < 0) {
                                     damage = 0
                                 }
                                 var res = 1;
                                 if (units[attackthisone].accessory === "Elementward_Ring") {
                                     res = .5;
                                 }
                                 damage = parseInt((damage) * res);
                                 Iceattack.play();
                                 $("#battlebackground").append("<div class='Effects' style='top: " + Eunits[Eslots[y]].curtop + "px;left: " + Eunits[Eslots[y]].curleft + "px'><img src='../Pictures/Effects/EffectIce.gif' /></div>");
                                 $(".Effects").animate({
                                     left: units[attackthisone].curleft + "px"
                                     , top: units[attackthisone].curtop + "px"
                                 }, 500).fadeOut(500);
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
                                 var damage = Eunits[Eslots[y]].attack - units[attackthisone].resistance - units[attackthisone].defensetempboost;
                                 if (damage < 0) {
                                     damage = 0
                                 }
                                 var res = 1;
                                 if (units[attackthisone].accessory === "Elementward_Ring") {
                                     res = .5;
                                 }
                                 damage = parseInt((damage) * res);
                                 Iceattack.play();
                                 $("#battlebackground").append("<div class='Effects' style='top: " + Eunits[Eslots[y]].curtop + "px;left: " + Eunits[Eslots[y]].curleft + "px'><img src='../Pictures/Effects/EffectIce.gif' /></div>");
                                 $(".Effects").animate({
                                     left: units[attackthisone].curleft + "px"
                                     , top: units[attackthisone].curtop + "px"
                                 }, 500).fadeOut(500);
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
                                 var damage = Eunits[Eslots[y]].attack - units[attackthisone].resistance - units[attackthisone].defensetempboost;
                                 if (damage < 0) {
                                     damage = 0
                                 }
                                 var res = 1;
                                 if (units[attackthisone].accessory === "Elementward_Ring") {
                                     res = .5;
                                 }
                                 damage = parseInt((damage) * res);
                                 $("#battlebackground").append("<div class='Effects' style='top: " + Eunits[Eslots[y]].curtop + "px;left: " + Eunits[Eslots[y]].curleft + "px'><img src='../Pictures/Effects/EffectIce.gif' /></div>");
                                 $(".Effects").animate({
                                     left: units[attackthisone].curleft + "px"
                                     , top: units[attackthisone].curtop + "px"
                                 }, 500).fadeOut(500);
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

                         function Damaging(damage, index) {
                             if (units[index].protectedby != -1 && units[units[index].protectedby].alive === true) {
                                 index = units[index].protectedby;
                             }
                             var temp = "#" + index;
                             var tempbar = "#HB" + index;
                             if (units[index].abilitydodge === true || units[index].accessory === "Dodging_Boots") {
                                 var randnum = Math.floor((Math.random() * 50) + 1);
                                 var randchance = Math.floor((Math.random() * 2) + 1);
                                 if (randnum < damage && randchance === 1) {
                                     damage = "Miss";
                                 }
                             }
                             if (damage > -1) {
                                 //shield stuff
                                 if (units[index].energy > 0 && units[index].type === "Guard") {
                                     //reducing life or energy
                                     if (units[index].energy > damage) {
                                         units[index].energy -= damage;
                                     }
                                     else {
                                         units[index].health -= (damage - units[index].energy);
                                         units[index].energy = 0;
                                     }
                                     $("#EB" + units[index].index).remove();
                                     $("#" + index).append('<div class="energybar" id ="EB' + units[index].index + '"style="width: ' + units[index].energy + '%"></div>');
                                 }
                                 else {
                                     units[index].health -= damage
                                 }
                                 //steadfast stuff
                                 if (units[index].health < 1 && (units[index].health + damage) != 1) {
                                     if (units[index].abilitysteadfast === true || units[index].accessory === "Steadfast_Band") {
                                         units[index].health = 1;
                                         $("#TEXT").append(units[index].name + " was saved by steadfast.</p>");
                                     }
                                     if (units[index].braced === true) {
                                         units[index].health = 1;
                                         $("#TEXT").append(units[index].name + " was saved by brace.</p>");
                                     }
                                 }
                                 units[index].braced = false;
                                 $(tempbar).remove();
                                 $(temp).append('<div class="healthbar" id ="HB' + units[index].index + '"style="width: ' + (units[index].health / units[index].maxhealth) * 100 + '%"></div>');
                             }
                             $(temp).append('<p id="damage' + damagenum + '" style="position: absolute; font-size:40px; margin-top:-70px; margin-left:30px; color:white; font-weight:bold ">' + damage + '</p>');
                             $("#damage" + damagenum).delay(1000).effect("puff");
                             damagenum += 1;
                             if (units[index].health <= 0) {
                                 Dies(enemyonbottom, index);
                                 units[index].curleft = 10000;
                                 units[index].curtop = 10000;
                             }
                         }

                         function Dies(type, index) {
                             var dyingname = "";
                             var temp = "#" + index;
                             $(temp).append("<div class='dying'><img src='../Pictures/Effects/dying.gif'/></div>")
                             setTimeout(function () {
                                 $(temp + " .dirpic").css("opacity", "0")
                                 setTimeout(function () {
                                     $(temp).remove();
                                 }, 500)
                             }, 500)
                             units[index].alive = false;
                             units[index].group = -1;
                             if (units[index].type === "Djinn") {
                                 if (slots[1] === index) {
                                     var templeft = units[slots[1]].curleft;
                                     var temptop = units[slots[1]].curtop;
                                     slots[1] = units[slots[1]].owner;
                                     units[slots[1]].captured = "";
                                     units[slots[1]].curleft = templeft;
                                     units[slots[1]].curtop = temptop;
                                     $('#battlebackground').append('<div STYLE="position:absolute; TOP:' + temptop + 'px; LEFT:' + templeft + 'px;" class="unit"  id="' + slots[1] + '" ><img src="' + units[slots[1]].image + '"/></div>');
                                     $('#' + slots[1]).append('<div class="healthbar" id = "HB' + slots[1] + '" style="width: ' + (units[slots[1]].health / units[slots[1]].maxhealth) * 100 + '%"></div>');
                                 }
                                 if (slots[2] === index) {
                                     var templeft = units[slots[2]].curleft;
                                     var temptop = units[slots[2]].curtop;
                                     slots[2] = units[slots[2]].owner;
                                     units[slots[1]].captured = "";
                                     units[slots[2]].curleft = templeft;
                                     units[slots[2]].curtop = temptop;
                                     $('#battlebackground').append('<div STYLE="position:absolute; TOP:' + temptop + 'px; LEFT:' + templeft + 'px;" class="unit"  id="' + slots[2] + '" ><img src="' + units[slots[2]].image + '"/></div>');
                                     $('#' + slots[2]).append('<div class="healthbar" id = "HB' + slots[2] + '" style="width: ' + (units[slots[2]].health / units[slots[2]].maxhealth) * 100 + '%"></div>');
                                 }
                                 if (slots[3] === index) {
                                     var templeft = units[slots[3]].curleft;
                                     var temptop = units[slots[3]].curtop;
                                     slots[3] = units[slots[3]].owner;
                                     units[slots[1]].captured = "";
                                     units[slots[3]].curleft = templeft;
                                     units[slots[3]].curtop = temptop;
                                     $('#battlebackground').append('<div STYLE="position:absolute; TOP:' + temptop + 'px; LEFT:' + templeft + 'px;" class="unit"  id="' + slots[3] + '" ><img src="' + units[slots[3]].image + '"/></div>');
                                     $('#' + slots[3]).append('<div class="healthbar" id = "HB' + slots[3] + '" style="width: ' + (units[slots[3]].health / units[slots[3]].maxhealth) * 100 + '%"></div>');
                                 }
                                 getstatsbattle();
                                 clickactionbuttons();
                             }
                             if (typeof indiv_ally_dies == 'function') {
                                 indiv_ally_dies(index);
                             }
                         }
                         var counternum = 0;

                         function countering(index, y) {
                             if (units[index].abilitycounter === true && Eunits[Eslots[y]].phasedout != true && units[index].type == "Soldier") {
                                 units[index].counterindex.push(Eslots[y])
                             }
                         }

                         function reacting() {
                             for (var a = 1; a < 4; a++) {
                                 if (units[slots[a]].alive === true && units[slots[a]].abilityreact === true && Eunits[Eslots[y]].phasedout != true && ((Eunits[Eslots[y]].curleft === units[slots[a]].curleft && Eunits[Eslots[y]].curtop === units[slots[a]].curtop + 100) || (Eunits[Eslots[y]].curleft === units[slots[a]].curleft && Eunits[Eslots[y]].curtop === units[slots[a]].curtop - 100) || (Eunits[Eslots[y]].curleft === units[slots[a]].curleft + 100 && Eunits[Eslots[y]].curtop === units[slots[a]].curtop) || (Eunits[Eslots[y]].curleft === units[slots[a]].curleft - 100 && Eunits[Eslots[y]].curtop === units[slots[a]].curtop))) {
                                     var reactdamage = parseInt((units[slots[a]].attack - Eunits[Eslots[y]].defense) * .5)
                                     if (reactdamage < 0) {
                                         reactdamage = 0
                                     }
                                     Eunits[Eslots[y]].health -= reactdamage;
                                     $("#TEXT").append(units[slots[a]].name + " reacted and did " + reactdamage + " damage");
                                     $("#EHB" + Eslots[y]).remove();
                                     $("#E" + Eslots[y]).append('<div class="healthbar" id ="EHB' + Eunits[Eslots[y]].index + '"style="width: ' + (Eunits[Eslots[y]].health / Eunits[Eslots[y]].maxhealth) * 100 + '%"></div>');
                                     $("#E" + Eslots[y]).append('<p class="damage" style="position: absolute; font-size:40px; margin-top:-70px; margin-left:30px; color:white; font-weight:bold ">' + reactdamage + '</p>');
                                     $(".damage").delay(1000).effect("puff");
                                 }
                             }
                         }

                         function shootarrow(enemyindex, selectedindex) {
                             //effects
                             var tempAngle = Math.atan((Eunits[selectedindex].curleft - units[enemyindex].curleft) / (units[enemyindex].curtop - Eunits[selectedindex].curtop)) / (Math.PI / 180);
                             if (Eunits[selectedindex].curtop <= units[enemyindex].curtop) {
                                 tempAngle += 180;
                             }
                             $("#battlebackground").append("<div class='Effects' style='top: " + Eunits[selectedindex].curtop + "px; left: " + Eunits[selectedindex].curleft + "px'><img style = ' -ms-transform: rotate(" + tempAngle + "deg); -webkit-transform: rotate(" + tempAngle + "deg); transform: rotate(" + tempAngle + "deg);' src='../Pictures/Effects/Arrow.gif' /></div>");
                             $(".Effects").animate({
                                 left: units[enemyindex].curleft + "px"
                                 , top: units[enemyindex].curtop + "px"
                             }, 500).fadeOut(500);
                             Arrow.play();
                         }

                         function charging() {
                             $("#TEXT").empty();
                             Chargesound.play();
                             Eunits[Eslots[y]].charge += 1;
                             $("#TEXT").append("<p>" + Eunits[Eslots[y]].name + "'s charge increased to  " + Eunits[Eslots[y]].charge + "\n</p>");
                             $("#ORBE" + +Eunits[Eslots[y]].index).remove();
                             var maxcharge = Eunits[Eslots[y]].maxcharge;
                             $('#E' + Eslots[y]).append('<div id = "ORBE' + Eunits[Eslots[y]].index + '" style="color:yellow;position: absolute; font-size:20px; margin-top:-30px; margin-left:50px; width:10px; height:10px ">' + Eunits[Eslots[y]].charge + '/' + maxcharge + '</div>');
                         }

                         function aggressivemove() {
                             if (Eunits[Eslots[y]].immobilized === 0) {
                                 if (rightempty === true && Eunits[Eslots[y]].usedaction === false && Eunits[Eslots[y]].moved === false && (
                                         ((Eunits[Eslots[y]].curtop === units[slots[1]].curtop || Eunits[Eslots[y]].curtop === units[slots[1]].curtop - 100 || Eunits[Eslots[y]].curtop === units[slots[1]].curtop + 100) && Eunits[Eslots[y]].curleft < units[slots[1]].curleft && units[slots[1]].alive === true && units[slots[1]].type != "Invisible") || ((Eunits[Eslots[y]].curtop === units[slots[2]].curtop || Eunits[Eslots[y]].curtop === units[slots[2]].curtop - 100 || Eunits[Eslots[y]].curtop === units[slots[2]].curtop + 100) && Eunits[Eslots[y]].curleft < units[slots[2]].curleft && units[slots[2]].alive === true && units[slots[2]].type != "Invisible") || ((Eunits[Eslots[y]].curtop === units[slots[3]].curtop || Eunits[Eslots[y]].curtop === units[slots[3]].curtop - 100 || Eunits[Eslots[y]].curtop === units[slots[3]].curtop + 100) && Eunits[Eslots[y]].curleft < units[slots[3]].curleft && units[slots[3]].alive === true && units[slots[3]].type != "Invisible"))) {
                                     if (((units[slots[1]].curtop == Eunits[Eslots[y]].curtop || units[slots[1]].curtop == Eunits[Eslots[y]].curtop - 100 || units[slots[1]].curtop == Eunits[Eslots[y]].curtop + 100) && units[slots[1]].curleft == Eunits[Eslots[y]].curleft - 100) || ((units[slots[2]].curtop == Eunits[Eslots[y]].curtop || units[slots[2]].curtop == Eunits[Eslots[y]].curtop - 100 || units[slots[2]].curtop == Eunits[Eslots[y]].curtop + 100) && units[slots[2]].curleft == Eunits[Eslots[y]].curleft - 100) || ((units[slots[3]].curtop == Eunits[Eslots[y]].curtop || units[slots[3]].curtop == Eunits[Eslots[y]].curtop - 100 || units[slots[3]].curtop == Eunits[Eslots[y]].curtop + 100) && units[slots[3]].curleft == Eunits[Eslots[y]].curleft - 100)) {}
                                     else {
                                         curenemyleft = Eunits[Eslots[y]].curleft;
                                         curenemytop = Eunits[Eslots[y]].curtop;
                                         Eunits[Eslots[y]].curleft += 100;
                                         Eunits[Eslots[y]].moved = true;
                                         $('.selected').animate({
                                             left: Eunits[Eslots[y]].curleft + 'px'
                                             , top: Eunits[Eslots[y]].curtop + 'px'
                                         }, 500);
                                     }
                                 }
                                 if (leftempty === true && Eunits[Eslots[y]].usedaction === false && Eunits[Eslots[y]].moved === false && (
                                         ((Eunits[Eslots[y]].curtop === units[slots[1]].curtop || Eunits[Eslots[y]].curtop === units[slots[1]].curtop - 100 || Eunits[Eslots[y]].curtop === units[slots[1]].curtop + 100) && Eunits[Eslots[y]].curleft > units[slots[1]].curleft && units[slots[1]].alive === true && units[slots[1]].type != "Invisible") || ((Eunits[Eslots[y]].curtop === units[slots[2]].curtop || Eunits[Eslots[y]].curtop === units[slots[2]].curtop - 100 || Eunits[Eslots[y]].curtop === units[slots[2]].curtop + 100) && Eunits[Eslots[y]].curleft > units[slots[2]].curleft && units[slots[2]].alive === true && units[slots[2]].type != "Invisible") || ((Eunits[Eslots[y]].curtop === units[slots[3]].curtop || Eunits[Eslots[y]].curtop === units[slots[3]].curtop - 100 || Eunits[Eslots[y]].curtop === units[slots[3]].curtop + 100) && Eunits[Eslots[y]].curleft > units[slots[3]].curleft && units[slots[3]].alive === true && units[slots[3]].type != "Invisible"))) {
                                     curenemyleft = Eunits[Eslots[y]].curleft;
                                     curenemytop = Eunits[Eslots[y]].curtop;
                                     Eunits[Eslots[y]].curleft -= 100;
                                     Eunits[Eslots[y]].moved = true;
                                     $('.selected').animate({
                                         left: Eunits[Eslots[y]].curleft + 'px'
                                         , top: Eunits[Eslots[y]].curtop + 'px'
                                     }, 500);
                                 }
                                 if (belowempty === true && Eunits[Eslots[y]].usedaction === false && Eunits[Eslots[y]].moved === false && ((Eunits[Eslots[y]].curtop < units[slots[1]].curtop && units[slots[1]].alive === true && units[slots[1]].type != "Invisible") || (Eunits[Eslots[y]].curtop < units[slots[2]].curtop && units[slots[2]].alive === true && units[slots[2]].type != "Invisible") || (Eunits[Eslots[y]].curtop < units[slots[3]].curtop && units[slots[3]].alive === true && units[slots[3]].type != "Invisible"))) {
                                     curenemyleft = Eunits[Eslots[y]].curleft;
                                     curenemytop = Eunits[Eslots[y]].curtop;
                                     Eunits[Eslots[y]].curtop += 100;
                                     Eunits[Eslots[y]].moved = true;
                                     $('.selected').animate({
                                         left: Eunits[Eslots[y]].curleft + 'px'
                                         , top: Eunits[Eslots[y]].curtop + 'px'
                                     }, 500);
                                 }
                                 if (upempty === true && Eunits[Eslots[y]].usedaction === false && Eunits[Eslots[y]].moved === false) {
                                     curenemyleft = Eunits[Eslots[y]].curleft;
                                     curenemytop = Eunits[Eslots[y]].curtop;
                                     Eunits[Eslots[y]].curtop -= 100;
                                     Eunits[Eslots[y]].moved = true;
                                     $('.selected').animate({
                                         left: Eunits[Eslots[y]].curleft + 'px'
                                         , top: Eunits[Eslots[y]].curtop + 'px'
                                     }, 500);
                                 }
                             }
                             else {
                                 Eunits[Eslots[y]].immobilized -= 1
                             }
                         }

                         function scaredmove() {
                             //move away from enemies
                             if (Eunits[Eslots[y]].immobilized === 0) {
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
                                         left: Eunits[Eslots[y]].curleft + 'px'
                                         , top: Eunits[Eslots[y]].curtop + 'px'
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
                                         left: Eunits[Eslots[y]].curleft + 'px'
                                         , top: Eunits[Eslots[y]].curtop + 'px'
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
                                         left: Eunits[Eslots[y]].curleft + 'px'
                                         , top: Eunits[Eslots[y]].curtop + 'px'
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
                                         left: Eunits[Eslots[y]].curleft + 'px'
                                         , top: Eunits[Eslots[y]].curtop + 'px'
                                     }, 500);
                                     reacting();
                                 }
                             }
                             else {
                                 Eunits[Eslots[y]].immobilized -= 1
                             }
                         }

                         function flymove(type) {
                             var futuretop = "";
                             var futureleft = "";
                             for (var i = 1; i < 4; i++) {
                                 if (units[slots[i]].type === "Invisible") {
                                     continue;
                                 }
                                 if (units[slots[i]].type === type && units[slots[i]].alive === true && Eunits[Eslots[y]].moved === false) {
                                     //top
                                     if ((units[slots[1]].curleft === units[slots[i]].curleft && units[slots[1]].curtop + 100 === units[slots[i]].curtop && units[slots[1]].alive === true) || (units[slots[2]].curleft === units[slots[i]].curleft && units[slots[2]].curtop + 100 === units[slots[i]].curtop && units[slots[2]].alive === true) || (units[slots[3]].curleft === units[slots[i]].curleft && units[slots[3]].curtop + 100 === units[slots[i]].curtop && units[slots[3]].alive === true) || (Eunits[Eslots[1]].curleft === units[slots[i]].curleft && Eunits[Eslots[1]].curtop + 100 === units[slots[i]].curtop && Eunits[Eslots[1]].alive === true) || (Eunits[Eslots[2]].curleft === units[slots[i]].curleft && Eunits[Eslots[2]].curtop + 100 === units[slots[i]].curtop && Eunits[Eslots[2]].alive === true) || (Eunits[Eslots[3]].curleft === units[slots[i]].curleft && Eunits[Eslots[3]].curtop + 100 === units[slots[i]].curtop && Eunits[Eslots[3]].alive === true) || (Eunits[Eslots[4]].curleft === units[slots[i]].curleft && Eunits[Eslots[4]].curtop + 100 === units[slots[i]].curtop && Eunits[Eslots[4]].alive === true) || (Eunits[Eslots[5]].curleft === units[slots[i]].curleft && Eunits[Eslots[5]].curtop + 100 === units[slots[i]].curtop && Eunits[Eslots[5]].alive === true)) {}
                                     else {
                                         if (units[slots[i]].curtop > 0) {
                                             futuretop = units[slots[i]].curtop - 100;
                                             futureleft = units[slots[i]].curleft;
                                             Eunits[Eslots[y]].curleft = futureleft;
                                             Eunits[Eslots[y]].curtop = futuretop;
                                             Eunits[Eslots[y]].moved = true;
                                         }
                                     } //go to top
                                     //bottom
                                     if ((units[slots[1]].curleft === units[slots[i]].curleft && units[slots[1]].curtop - 100 === units[slots[i]].curtop && units[slots[1]].alive === true) || (units[slots[2]].curleft === units[slots[i]].curleft && units[slots[2]].curtop - 100 === units[slots[i]].curtop && units[slots[2]].alive === true) || (units[slots[3]].curleft === units[slots[i]].curleft && units[slots[3]].curtop - 100 === units[slots[i]].curtop && units[slots[3]].alive === true) || (Eunits[Eslots[1]].curleft === units[slots[i]].curleft && Eunits[Eslots[1]].curtop - 100 === units[slots[i]].curtop && Eunits[Eslots[1]].alive === true) || (Eunits[Eslots[2]].curleft === units[slots[i]].curleft && Eunits[Eslots[2]].curtop - 100 === units[slots[i]].curtop && Eunits[Eslots[2]].alive === true) || (Eunits[Eslots[3]].curleft === units[slots[i]].curleft && Eunits[Eslots[3]].curtop - 100 === units[slots[i]].curtop && Eunits[Eslots[3]].alive === true) || (Eunits[Eslots[4]].curleft === units[slots[i]].curleft && Eunits[Eslots[4]].curtop - 100 === units[slots[i]].curtop && Eunits[Eslots[4]].alive === true) || (Eunits[Eslots[5]].curleft === units[slots[i]].curleft && Eunits[Eslots[5]].curtop - 100 === units[slots[i]].curtop && Eunits[Eslots[5]].alive === true)) {}
                                     else {
                                         if (units[slots[i]].curtop < 425) {
                                             futuretop = units[slots[i]].curtop + 100;
                                             futureleft = units[slots[i]].curleft;
                                             Eunits[Eslots[y]].curleft = futureleft;
                                             Eunits[Eslots[y]].curtop = futuretop;
                                             Eunits[Eslots[y]].moved = true;
                                         }
                                     } //go to bottom
                                     //left
                                     if ((units[slots[1]].curtop === units[slots[i]].curtop && units[slots[1]].curleft + 100 === units[slots[i]].curleft && units[slots[1]].alive === true) || (units[slots[2]].curtop === units[slots[i]].curtop && units[slots[2]].curleft + 100 === units[slots[i]].curleft && units[slots[2]].alive === true) || (units[slots[3]].curtop === units[slots[i]].curtop && units[slots[3]].curleft + 100 === units[slots[i]].curleft && units[slots[3]].alive === true) || (Eunits[Eslots[1]].curtop === units[slots[i]].curtop && Eunits[Eslots[1]].curleft + 100 === units[slots[i]].curleft && Eunits[Eslots[1]].alive === true) || (Eunits[Eslots[2]].curtop === units[slots[i]].curtop && Eunits[Eslots[2]].curleft + 100 === units[slots[i]].curleft && Eunits[Eslots[2]].alive === true) || (Eunits[Eslots[3]].curtop === units[slots[i]].curtop && Eunits[Eslots[3]].curleft + 100 === units[slots[i]].curleft && Eunits[Eslots[3]].alive === true) || (Eunits[Eslots[4]].curtop === units[slots[i]].curtop && Eunits[Eslots[4]].curleft + 100 === units[slots[i]].curleft && Eunits[Eslots[4]].alive === true) || (Eunits[Eslots[5]].curtop === units[slots[i]].curtop && Eunits[Eslots[5]].curleft + 100 === units[slots[i]].curleft && Eunits[Eslots[5]].alive === true)) {}
                                     else {
                                         if (units[slots[i]].curleft > 0) {
                                             futureleft = units[slots[i]].curleft - 100;
                                             futuretop = units[slots[i]].curtop;
                                             Eunits[Eslots[y]].curleft = futureleft;
                                             Eunits[Eslots[y]].curtop = futuretop;
                                             Eunits[Eslots[y]].moved = true;
                                         }
                                     } //go to left
                                     //right
                                     if ((units[slots[1]].curtop === units[slots[i]].curtop && units[slots[1]].curleft - 100 === units[slots[i]].curleft && units[slots[1]].alive === true) || (units[slots[2]].curtop === units[slots[i]].curtop && units[slots[2]].curleft - 100 === units[slots[i]].curleft && units[slots[2]].alive === true) || (units[slots[3]].curtop === units[slots[i]].curtop && units[slots[3]].curleft - 100 === units[slots[i]].curleft && units[slots[3]].alive === true) || (Eunits[Eslots[1]].curtop === units[slots[i]].curtop && Eunits[Eslots[1]].curleft - 100 === units[slots[i]].curleft && Eunits[Eslots[1]].alive === true) || (Eunits[Eslots[2]].curtop === units[slots[i]].curtop && Eunits[Eslots[2]].curleft - 100 === units[slots[i]].curleft && Eunits[Eslots[2]].alive === true) || (Eunits[Eslots[3]].curtop === units[slots[i]].curtop && Eunits[Eslots[3]].curleft - 100 === units[slots[i]].curleft && Eunits[Eslots[3]].alive === true) || (Eunits[Eslots[4]].curtop === units[slots[i]].curtop && Eunits[Eslots[4]].curleft - 100 === units[slots[i]].curleft && Eunits[Eslots[4]].alive === true) || (Eunits[Eslots[5]].curtop === units[slots[i]].curtop && Eunits[Eslots[5]].curleft - 100 === units[slots[i]].curleft && Eunits[Eslots[5]].alive === true)) {}
                                     else {
                                         if (units[slots[i]].curleft > 0) {
                                             futureleft = units[slots[i]].curleft + 100;
                                             futuretop = units[slots[i]].curtop;
                                             Eunits[Eslots[y]].curleft = futureleft;
                                             Eunits[Eslots[y]].curtop = futuretop;
                                             Eunits[Eslots[y]].moved = true;
                                         }
                                     } //go to right
                                 } //type
                             } //for statement
                             if (futuretop != "" && futureleft != "") {
                                 $("#E" + Eslots[y]).animate({
                                     left: futureleft + "px"
                                     , top: futuretop + "px"
                                 }, 500);
                             }
                             reacting();
                         }

                         function scrollingmove() {
                             //move away from enemies
                             if (Eunits[Eslots[y]].immobilized === 0) {
                                 curenemyleft = Eunits[Eslots[y]].curleft;
                                 curenemytop = Eunits[Eslots[y]].curtop;
                                 if (Eunits[Eslots[y]].usedaction === false) {
                                     var moveto = "";
                                     for (var i = 1; i < 4; i++) {
                                         if (moved === true) {
                                             break;
                                         }
                                         if (units[slots[i]].type === "Invisible") {
                                             continue;
                                         }
                                         if (units[slots[i]].curleft < Eunits[Eslots[y]].curleft && units[slots[i]].alive === true && leftempty === true) {
                                             moveto = "left"
                                         }
                                         if (units[slots[i]].curleft > Eunits[Eslots[y]].curleft && units[slots[i]].alive === true && rightempty === true) {
                                             moveto = "right"
                                         }
                                         if (moveto === "right") {
                                             moved = true;
                                             Eunits[Eslots[y]].curleft += 100;
                                         }
                                         if (moveto === "left") {
                                             moved = true;
                                             Eunits[Eslots[y]].curleft -= 100;
                                         }
                                         $('.selected').animate({
                                             left: Eunits[Eslots[y]].curleft + 'px'
                                             , top: Eunits[Eslots[y]].curtop + 'px'
                                         }, 50);
                                         reacting();
                                     }
                                 }
                             }
                             else {
                                 Eunits[Eslots[y]].immobilized -= 1
                             }
                         }

                         function randommove() {
                             //move away from enemies
                             if (Eunits[Eslots[y]].immobilized === 0) {
                                 if (units[enemyonbottomindex].abilityintimidate != true && units[enemyontopindex].abilityintimidate != true && units[enemyonleftindex].abilityintimidate != true && units[enemyonrightindex].abilityintimidate != true) {
                                     var keepgoing = true;
                                     var templeft = 0;
                                     var temptop = 0;
                                     var templeftnum = 0;
                                     var temptopnum = 0;
                                     while (keepgoing === true) {
                                         templeft = Math.floor((Math.random() * 4));
                                         temptop = Math.floor((Math.random() * 4));
                                         templeftnum = templeft * 100 + 25;
                                         temptopnum = temptop * 100 + 25;
                                         if (!(templeftnum === units[slots[1]].curleft && temptopnum === units[slots[1]].curtop) && !(templeftnum === units[slots[2]].curleft && temptopnum === units[slots[2]].curtop) && !(templeftnum === units[slots[3]].curleft && temptopnum === units[slots[3]].curtop) && !(templeftnum === Eunits[Eslots[1]].curleft && temptopnum === Eunits[Eslots[1]].curtop) && !(templeftnum === Eunits[Eslots[2]].curleft && temptopnum === Eunits[Eslots[2]].curtop) && !(templeftnum === Eunits[Eslots[3]].curleft && temptopnum === Eunits[Eslots[3]].curtop) && !(templeftnum === Eunits[Eslots[4]].curleft && temptopnum === Eunits[Eslots[4]].curtop) && !(templeftnum === Eunits[Eslots[5]].curleft && temptopnum === Eunits[Eslots[5]].curtop)) {
                                             Eunits[Eslots[y]].curleft = templeftnum;
                                             Eunits[Eslots[y]].curtop = temptopnum;
                                             keepgoing = false;
                                         }
                                     }
                                     $("#E" + Eslots[y]).animate({
                                         left: Eunits[Eslots[y]].curleft + "px"
                                         , top: Eunits[Eslots[y]].curtop + "px"
                                     })
                                     reacting();
                                 }
                             }
                             else {
                                 Eunits[Eslots[y]].immobilized -= 1
                             }
                         }

                         function fleeingmove() {
                             //fleeing
                             if (Eunits[Eslots[y]].immobilized === 0) {
                                 curenemyleft = Eunits[Eslots[y]].curleft;
                                 curenemytop = Eunits[Eslots[y]].curtop;
                                 if (moved === false) {
                                     moved = true;
                                     Eunits[Eslots[y]].curtop += 100;
                                     if (Eunits[Eslots[y]].curtop > 500) {
                                         $('.selected').remove();
                                         $("#TEXT").append(Eunits[Eslots[y]].name + " has escaped.")
                                         Egroups[Eunits[Eslots[y]].group].experience -= 200;
                                         Eunits[Eslots[y]].health = -1000000;
                                     }
                                     $('.selected').animate({
                                         left: Eunits[Eslots[y]].curleft + 'px'
                                         , top: Eunits[Eslots[y]].curtop + 'px'
                                     }, 500);
                                     reacting();
                                 }
                             }
                             else {
                                 Eunits[Eslots[y]].immobilized -= 1
                             }
                         }
                         moved = false;
                         if ((Eunits[Eslots[y]].type === "Warrior")) {
                             closePattack()
                             aggressivemove();
                             findenemy();
                             closePattack()
                         }
                         if ((Eunits[Eslots[y]].type === "Goblin") || Eunits[Eslots[y]].type === "Wolf" || Eunits[Eslots[y]].type === "Djinn" || Eunits[Eslots[y]].type === "Zombie" || Eunits[Eslots[y]].type === "Golem" || Eunits[Eslots[y]].type === "Clunker" || Eunits[Eslots[y]].type === "Magnet" || Eunits[Eslots[y]].type === "Sounddepressor" || Eunits[Eslots[y]].type === "Turtle" || Eunits[Eslots[y]].type === "Soldier" || Eunits[Eslots[y]].type === "Guard" || Eunits[Eslots[y]].type === "Bear") {
                             if (Eunits[Eslots[y]].type === "Guard" && Eunits[Eslots[y]].blind == 0) {
                                 guardprotect("Wizard");
                                 guardprotect("Rouge");
                                 guardprotect("Archer");
                                 guardprotect("Mage");
                                 guardprotect("Soldier");
                             }
                             closePattack()
                             aggressivemove();
                             findenemy();
                             closePattack()
                         }
                         if (Eunits[Eslots[y]].type === "Gremlin" || Eunits[Eslots[y]].type === "Hellhound") {
                             if (Eunits[Eslots[y]].type === "Hellhound") {
                                 closeMattack()
                             }
                             else {
                                 closePattack()
                             }
                             aggressivemove();
                             Eunits[Eslots[y]].moved = false
                             findenemy();
                             if (Eunits[Eslots[y]].type === "Hellhound") {
                                 closeMattack()
                             }
                             else {
                                 closePattack()
                             }
                             aggressivemove();
                             findenemy();
                             if (Eunits[Eslots[y]].type === "Hellhound") {
                                 closeMattack()
                             }
                             else {
                                 closePattack()
                             }
                         }
                         if ((Eunits[Eslots[y]].type === "Spider" || Eunits[Eslots[y]].type === "Vacuum")) {
                             //Move left
                             var moved = false;
                             if (Eunits[Eslots[y]].blind > 0 || Eunits[Eslots[y]].terrify > 0) {}
                             else {
                                 spiderwhotoattack("Civilian");
                                 spiderwhotoattack("Wizard");
                                 spiderwhotoattack("Sorcerer");
                                 spiderwhotoattack("Enchantress");
                                 spiderwhotoattack("Healer");
                                 spiderwhotoattack("Templar");
                                 spiderwhotoattack("Archer");
                                 spiderwhotoattack("Rouge");
                                 spiderwhotoattack("Mimic");
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
                             if (Eunits[Eslots[y]].blind > 0) {}
                             else {
                                 spiderwhotoattack("Civilian");
                                 spiderwhotoattack("Wizard");
                                 spiderwhotoattack("Sorcerer");
                                 spiderwhotoattack("Enchantress");
                                 spiderwhotoattack("Healer");
                                 spiderwhotoattack("Templar");
                                 spiderwhotoattack("Archer");
                                 spiderwhotoattack("Rouge");
                                 spiderwhotoattack("Mimic");
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
                             Eunits[Eslots[y]].health += 5;
                             if (Eunits[Eslots[y]].health > Eunits[Eslots[y]].maxhealth) {
                                 Eunits[Eslots[y]].health = Eunits[Eslots[y]].maxhealth
                             }
                             $("#TEXT").append("The werewolf heals to " + Eunits[Eslots[y]].health);
                             $("#EHB" + Eunits[Eslots[y]].index).remove();
                             $("#E" + Eunits[Eslots[y]].index).append('<div class="healthbar" id ="EHB' + Eunits[Eslots[y]].index + '"style="width: ' + (Eunits[Eslots[y]].health / Eunits[Eslots[y]].maxhealth) * 100 + '%"></div>');
                             closePattack()
                             aggressivemove();
                             findenemy();
                             closePattack()
                         }
                         if ((Eunits[Eslots[y]].type === "Vampire")) {
                             closePattack()
                             aggressivemove();
                             findenemy();
                             closePattack()
                         }
                         if ((Eunits[Eslots[y]].type === "Sparrow") || Eunits[Eslots[y]].type === "Bee" || Eunits[Eslots[y]].type === "Bat" || Eunits[Eslots[y]].type === "Angel") {
                             closePattack()
                             if (Eunits[Eslots[y]].immobilized === 0) {
                                 flymove("Nothing");
                                 flymove("Civilian");
                                 flymove("Wizard");
                                 flymove("Sorcerer");
                                 flymove("Enchantress");
                                 flymove("Healer");
                                 flymove("Templar");
                                 flymove("Archer");
                                 flymove("Rouge");
                                 flymove("Mimic");
                                 flymove("Mage");
                                 flymove("Thief");
                                 flymove("Soldier");
                                 flymove("Knight");
                                 flymove("Djinn");
                                 flymove("Guard");
                                 flymove("Golem");
                             }
                             else {
                                 Eunits[Eslots[y]].immobilized -= 1
                             }
                             findenemy();
                             closePattack()
                             if (Eunits[Eslots[y]].type === "Angel") {
                                 if (Eunits[Eslots[y]].charge >= 3) {
                                     if (Eunits[Eslots[y]].silenced > 0) {
                                         Eunits[Eslots[y]].silenced -= 1;
                                     }
                                     else {
                                         Eunits[Eslots[y]].health += 50;
                                         Eunits[Eslots[y]].charge = 0;
                                         //minus one to offset charging
                                         Eunits[Eslots[y]].charge -= 1;
                                         charging();
                                         if (Eunits[Eslots[y]].health > Eunits[Eslots[y]].maxhealth) {
                                             Eunits[Eslots[y]].health = Eunits[Eslots[y]].maxhealth
                                         }
                                         $("#TEXT").append("The Angel heals to " + Eunits[Eslots[y]].health);
                                         $("#EHB" + Eunits[Eslots[y]].index).remove();
                                         $("#E" + Eunits[Eslots[y]].index).append('<div class="healthbar" id ="EHB' + Eunits[Eslots[y]].index + '"style="width: ' + (Eunits[Eslots[y]].health / Eunits[Eslots[y]].maxhealth) * 100 + '%"></div>');
                                         Eunits[Eslots[y]].usedaction = true;
                                     }
                                 }
                                 charging();
                             }
                         }
                         if ((Eunits[Eslots[y]].type === "Destroyer")) {
                             if (Eunits[Eslots[y]].blind > 0 || Eunits[Eslots[y]].terrify > 0) {}
                             else {
                                 closePattack()
                             }
                             if (Eunits[Eslots[y]].terrify > 0) {
                                 scaredmove();
                                 Eunits[Eslots[y]].terrify -= 1;
                             }
                             else {
                                 if (Eunits[Eslots[y]].immobilized === 0) {
                                     flymove("Nothing");
                                     flymove("Civilian");
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
                                 }
                                 else {
                                     Eunits[Eslots[y]].immobilized -= 1
                                 }
                             }
                             findenemy();
                             if (Eunits[Eslots[y]].blind > 0) {}
                             else {
                                 closePattack()
                             }
                         }
                         //familar guys
                         if ((Eunits[Eslots[y]].type === "Beekeeper")) {
                             //summon bee
                             if (Eunits[Eslots[y]].charge >= 1) {
                                 if (Eunits[Eslots[y]].silenced > 0) {}
                                 else {
                                     var tempslot = -1;
                                     //find empty slot
                                     for (var o = 1; o < 6; o++) {
                                         if (Eunits[Eslots[o]].alive === false) {
                                             tempslot = o
                                         }
                                     }
                                     if (tempslot != -1) {
                                         Eunits[Eslots[tempslot]].health = Eunits[Eslots[tempslot]].maxhealth;
                                         Eunits[Eslots[tempslot]].alive = true;
                                         $("#E" + Eslots[tempslot]).fadeIn();
                                         Eunits[Eslots[y]].charge -= 1;
                                         //minus one to offset charging
                                         Eunits[Eslots[y]].charge -= 1;
                                         charging()
                                     }
                                 }
                             }
                             else {
                                 charging();
                             }
                         }
                         if ((Eunits[Eslots[y]].type === "Necromancer")) {
                             //summon bee
                             if (Eunits[Eslots[y]].charge >= 1) {
                                 if (Eunits[Eslots[y]].silenced > 0) {}
                                 else {
                                     var tempslot = -1;
                                     //find empty slot
                                     for (var o = 1; o < 4; o++) {
                                         if (Eunits[Eslots[o]].alive === false) {
                                             tempslot = o
                                         }
                                     }
                                     if (tempslot != -1 && !(enemyonbottom != "" && enemyonleft != "" && enemyonright != "")) {
                                         if (enemyonbottom === "") {
                                             Eunits[Eslots[tempslot]].curtop += 100;
                                         }
                                         else if (enemyonleft === "") {
                                             Eunits[Eslots[tempslot]].curleft -= 100;
                                         }
                                         else if (enemyonright === "") {
                                             Eunits[Eslots[tempslot]].curleft += 100;
                                         }
                                         $("#E" + Eslots[tempslot]).animate({
                                             top: Eunits[Eslots[tempslot]].curtop + "px"
                                             , left: Eunits[Eslots[tempslot]].curleft + "px"
                                         });
                                         Eunits[Eslots[tempslot]].health = Eunits[Eslots[tempslot]].maxhealth;
                                         Eunits[Eslots[tempslot]].alive = true;
                                         $("#E" + Eslots[tempslot]).fadeIn();
                                         //find free index number
                                         Eunits[Eslots[y]].charge -= 1;
                                         //minus one to offset charging
                                         Eunits[Eslots[y]].charge -= 1;
                                         charging();
                                     }
                                 }
                             }
                             else {
                                 charging();
                             }
                         }
                         if ((Eunits[Eslots[y]].type === "Shaman")) {
                             //summon Golem
                             if (Eunits[Eslots[y]].charge >= 2) {
                                 if (Eunits[Eslots[y]].silenced > 0) {}
                                 else {
                                     var tempslot = -1;
                                     if (Eunits[Eslots[1]].alive === false && !(enemyonbottom != "" && enemyonleft != "" && enemyonright != "")) {
                                         if (enemyonbottom === "") {
                                             Eunits[Eslots[1]].curtop += 100;
                                         }
                                         else if (enemyonleft === "") {
                                             Eunits[Eslots[1]].curleft -= 100;
                                         }
                                         else if (enemyonright === "") {
                                             Eunits[Eslots[1]].curleft += 100;
                                         }
                                         $("#E" + Eslots[1]).animate({
                                             top: Eunits[Eslots[1]].curtop + "px"
                                             , left: Eunits[Eslots[1]].curleft + "px"
                                         });
                                         Eunits[Eslots[1]].health = Eunits[Eslots[1]].maxhealth;
                                         Eunits[Eslots[1]].alive = true;
                                         $("#E" + Eslots[1]).fadeIn();
                                         Eunits[Eslots[y]].charge -= 1;
                                         //minus one to offset charging
                                         Eunits[Eslots[y]].charge -= 1;
                                         charging();
                                     }
                                 }
                             }
                             else {
                                 charging();
                             }
                         }
                         //summons
                         if ((Eunits[Eslots[y]].type === "Demon" || Eunits[Eslots[y]].type === "Demigod")) {
                             if (Eunits[Eslots[y]].blind > 0 || Eunits[Eslots[y]].terrify > 0) {}
                             else {
                                 closePattack()
                             }
                             if (Eunits[Eslots[y]].terrify > 0) {
                                 scaredmove();
                                 Eunits[Eslots[y]].terrify -= 1;
                             }
                             else {
                                 aggressivemove();
                             }
                             findenemy();
                             if (Eunits[Eslots[y]].blind > 0) {}
                             else {
                                 closePattack()
                             }
                             if (Eunits[Eslots[y]].charge >= 3) {
                                 if (Eunits[Eslots[y]].silenced > 0) {
                                     Eunits[Eslots[y]].silenced -= 1;
                                 }
                                 else {
                                     for (var i = 1; i < 4; i++) {
                                         if (units[slots[i]].alive === true && Eunits[Eslots[y]].usedaction === false) {
                                             units[slots[i]].health = 0;
                                             Eunits[Eslots[y]].charge = 0;
                                             //minus one to offset charging
                                             Eunits[Eslots[y]].charge -= 1;
                                             charging();
                                             $("#TEXT").append("The " + Eunits[Eslots[y]].name + " cast DEATH and killed " + units[slots[i]].name)
                                             Dies(units[slots[i]].type, slots[i]);
                                             Eunits[Eslots[y]].usedaction = true;
                                             $("#battlebackground").append("<div class='slashEffects' style='margin-top: " + (units[slots[i]].curtop - 450) + "px; margin-left: " + (units[slots[i]].curleft - 0) + "px'><img src='../Pictures/Effects/Death.gif' /></div>");
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
                                 if (Eunits[Eslots[y]].silenced > 0) {}
                                 else {
                                     for (var i = 1; i < 4; i++) {
                                         if (units[slots[i]].alive === true) {
                                             Eunits[Eslots[y]].charge = 0;
                                             //minus one to offset charging
                                             Eunits[Eslots[y]].charge -= 1;
                                             charging();
                                             var damage = 60 - units[slots[i]].resistance;
                                             if (damage < 0) {
                                                 damage = 0
                                             }
                                             units[slots[i]].health -= damage;
                                             Damaging(damage, slots[i]);
                                             $("#battlebackground").append("<img class='totalbackground' src='../Pictures/Effects/Blizzard.gif' />");
                                             Hurricane.play();
                                             $(".totalbackground").fadeOut(4000);
                                             if (units[slots[i]].health <= 0) {
                                                 Dies(units[slots[i]].type, slots[i]);
                                             }
                                             Eunits[Eslots[y]].usedaction = true;
                                         }
                                     }
                                 }
                             }
                             if (Eunits[Eslots[y]].usedaction === false) {
                                 charging();
                             }
                         }
                         if ((Eunits[Eslots[y]].type === "Assassin" || Eunits[Eslots[y]].type === "Archer")) {
                             var moved = false;
                             scaredmove();
                             //attack enemies
                             rangedPattack()
                         }
                         if ((Eunits[Eslots[y]].type === "Eye")) {
                             //attack enemies
                             if (Eunits[Eslots[y]].index == 0) {
                                 var randnum;
                                 var keepgoing = true;
                                 while (keepgoing == true) {
                                     randnum = Math.floor((Math.random() * 3) + 1);
                                     if (units[slots[randnum]].health > 0 && slots[randnum] != -1) {
                                         keepgoing = false
                                     }
                                     if (units[slots[1]].health <= 0 && units[slots[2]].health <= 0 && units[slots[3]].health <= 0) {
                                         keepgoing = false
                                     }
                                 }
                                 var mode = Math.floor((Math.random() * 7) + 1);
                                 if (mode == 1) {
                                     $("#battlebackground").append("<div id='claw' style = 'width:700px;height:700px; position:absolute;z-index:10;margin-top:-1300px'><img style = 'width:700px;height:700px' src='../Pictures/Effects/claw-left.gif' /></div>");
                                     $("#claw").animate({
                                         left: (units[slots[randnum]].curleft - 250) + "px"
                                         , top: (units[slots[randnum]].curtop + 920) + "px"
                                     , }, 500);
                                     setTimeout(function () {
                                         $("#claw").animate({
                                             top: "-=850px"
                                         }, 700);
                                         $("#" + slots[randnum]).animate({
                                             top: "-=850px"
                                         }, 700);
                                         $("#TEXT").append("<p>The Kraken ate " + units[slots[randnum]].name + "</p>")
                                         units[slots[randnum]].health = 0;
                                         Dies("type", slots[randnum])
                                         units[slots[randnum]].curleft = 10000;
                                         units[slots[randnum]].curtop = 10000;
                                         eating.play()
                                         setTimeout(function () {
                                             $("#claw").remove()
                                             if (units[slots[1]].alive === false && units[slots[2]].alive === false && units[slots[3]].alive === false) {
                                                 $("#TEXT").empty();
                                                 $("#battlebackground").remove();
                                                 $("#M" + curally).remove();
                                                 $("#space" + groups[curally].location).data("filled", 0);
                                                 groups[curally].location = -1;
                                                 groups[curally].active = false;
                                                 $(".actionbutton").remove();
                                                 battleon = false;
                                                 $('.actions').append("<div class = 'actionbutton' id='Pass'><p>Pass</p></div>");
                                                 gameovercheck();
                                                 enemyconquer();
                                                 presspass();
                                                 startcombat();
                                             } //end of loses battle
                                         }, 1000)
                                     }, 700)
                                 }
                                 else if (mode > 1 && mode <= 7) {
                                     $("#battlebackground").append("<div id='claw' style = 'width:700px;height:700px; position:absolute;z-index:10;margin-top:" + (units[slots[randnum]].curtop - 1000) + "px; margin-left:-1000px'><img style = 'width:700px;height:700px' src='../Pictures/Effects/claw-left.gif' /></div>");
                                     Sword.play();
                                     $("#claw").animate({
                                         left: "+=2000px"
                                     , }, 1000);
                                     setTimeout(function () {
                                         $("#claw").remove()
                                     }, 1000)
                                     for (var x = 1; x < 4; x++) {
                                         if (units[slots[x]].curtop == units[slots[randnum]].curtop) {
                                             var damage = Eunits[Eslots[y]].attack - units[slots[x]].defense - units[attackthisone].defensetempboost;
                                             if (damage < 0) {
                                                 damage = 0
                                             }
                                             Damaging(damage, slots[x])
                                         }
                                     }
                                 }
                             }
                         }
                         if ((Eunits[Eslots[y]].type === "Spitter") || Eunits[Eslots[y]].type === "Rouge") {
                             if (Eunits[Eslots[y]].type == "Spitter") {
                                 Eunits[Eslots[y]].usedimmobolized += 1;
                             }
                             scrollattack()
                             scrollingmove();
                             scrollattack()
                         }
                         if ((Eunits[Eslots[y]].type === "Mage")) {
                             if (Eunits[Eslots[y]].silenced > 0 || Eunits[Eslots[y]].terrify > 0) {}
                             else {
                                 magewhotoattack("Civilian");
                                 magewhotoattack("Turtle");
                                 magewhotoattack("Sparrow");
                                 magewhotoattack("Wolf");
                                 magewhotoattack("Bear");
                                 magewhotoattack("Spider");
                                 magewhotoattack("Knight");
                                 magewhotoattack("Soldier");
                                 magewhotoattack("Archer");
                                 magewhotoattack("Rouge");
                                 magewhotoattack("Mimic");
                                 magewhotoattack("Mage");
                                 magewhotoattack("Thief");
                                 magewhotoattack("Enchantress");
                                 magewhotoattack("Healer");
                                 magewhotoattack("Wizard");
                                 magewhotoattack("Sorcerer");
                                 magewhotoattack("Templar");
                                 magewhotoattack("Djinn");
                                 magewhotoattack("Guard");
                                 magewhotoattack("Golem");
                             }
                             if (Eunits[Eslots[y]].terrify > 0) {
                                 scaredmove();
                                 Eunits[Eslots[y]].terrify -= 1;
                             }
                             else {
                                 aggressivemove();
                             }
                             findenemy();
                             if (Eunits[Eslots[y]].silenced > 0) {}
                             else {
                                 magewhotoattack("Civilian");
                                 magewhotoattack("Turtle");
                                 magewhotoattack("Sparrow");
                                 magewhotoattack("Wolf");
                                 magewhotoattack("Bear");
                                 magewhotoattack("Spider");
                                 magewhotoattack("Knight");
                                 magewhotoattack("Soldier");
                                 magewhotoattack("Archer");
                                 magewhotoattack("Rouge");
                                 magewhotoattack("Mimic");
                                 magewhotoattack("Mage");
                                 magewhotoattack("Thief");
                                 magewhotoattack("Enchantress");
                                 magewhotoattack("Healer");
                                 magewhotoattack("Wizard");
                                 magewhotoattack("Sorcerer");
                                 magewhotoattack("Templar");
                                 magewhotoattack("Djinn");
                                 magewhotoattack("Guard");
                                 magewhotoattack("Golem");
                             }
                         }
                         //Elementals
                         if ((Eunits[Eslots[y]].type === "Fire Elemental" || Eunits[Eslots[y]].type === "Wizard" || Eunits[Eslots[y]].type === "Lightning Elemental")) {
                             scaredmove()
                             rangedMattack()
                         }
                         if ((Eunits[Eslots[y]].type === "Ice Elemental")) {
                             if (Eunits[Eslots[y]].charge >= 2) {
                                 if (Eunits[Eslots[y]].silenced > 0 || Eunits[Eslots[y]].terrify > 0) {}
                                 else {
                                     icewhotoattack("Civilian");
                                     icewhotoattack("Knight");
                                     icewhotoattack("Soldier");
                                     icewhotoattack("Archer");
                                     icewhotoattack("Rouge");
                                     icewhotoattack("Mage");
                                     icewhotoattack("Mimic");
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
                             if (Eunits[Eslots[y]].terrify > 0) {
                                 scaredmove();
                                 Eunits[Eslots[y]].terrify -= 1;
                             }
                             else {
                                 aggressivemove();
                             }
                             findenemy();
                             if (Eunits[Eslots[y]].charge >= 2) {
                                 if (Eunits[Eslots[y]].silenced > 0) {}
                                 else {
                                     icewhotoattack("Civilian");
                                     icewhotoattack("Knight");
                                     icewhotoattack("Soldier");
                                     icewhotoattack("Archer");
                                     icewhotoattack("Rouge");
                                     icewhotoattack("Mimic");
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
                         if ((Eunits[Eslots[y]].type === "Wisp")) {
                             rangedMattack()
                             randommove();
                         }
                         //robots
                         if (Eunits[Eslots[y]].type === "Cannon") {
                             if (Eunits[Eslots[y]].silenced > 0 || Eunits[Eslots[y]].terrify > 0) {}
                             else {
                                 charging();
                             }
                             if (Eunits[Eslots[y]].charge === 6) {
                                 Eunits[Eslots[y]].charge = 0;
                                 $("#E" + Eslots[y]).append("<div class='staticEffects' style='margin-top:-180px; margin-left:-120px'><img src='../Pictures/Effects/boom.gif' /></div>");
                                 Lightning.play();
                                 setTimeout(function () {
                                     $(".staticEffects").remove()
                                 }, 1000);
                                 setTimeout(function () {
                                     for (var i = 1; i < 4; i++) {
                                         var damage = 200 - units[slots[i]].resistance;
                                         Damaging(damage, slots[i]);
                                         if (units[slots[i]].health <= 0) {
                                             Dies(enemyonbottom, slots[i]);
                                             units[slots[i]].curleft = 10000;
                                             units[slots[i]].curtop = 10000;
                                             $("#TEXT").append("The cannon exploded!")
                                         }
                                     }
                                     if (units[slots[1]].alive === false && units[slots[2]].alive === false && units[slots[3]].alive === false) {
                                         $("#TEXT").empty();
                                         liberate(groups[curally].location);
                                         $("#battlebackground").remove();
                                         $("#M" + curally).remove();
                                         $("#space" + groups[curally].location).data("filled", 0);
                                         groups[curally].location = -1;
                                         groups[curally].active = false;
                                         $(".actionbutton").remove();
                                         battleon = false;
                                         $('.actions').append("<div class = 'actionbutton' id='Pass'><p>Pass</p></div>");
                                         enemyconquer();
                                         presspass();
                                         startcombat();
                                     } //end of loses battle
                                 }, 1000);
                             }
                         }
                         //wraiths
                         if ((Eunits[Eslots[y]].type === "Frostwraith")) {
                             rangedMattack()
                             if (Eunits[Eslots[y]].phasedout === false) {
                                 Eunits[Eslots[y]].phasedout = true;
                                 $("#E" + Eunits[Eslots[y]].index).addClass("Invisible")
                                 $("#TEXT").append("This wraith just phased out.")
                             }
                             closePattack()
                             aggressivemove();
                             findenemy();
                             closePattack()
                         }
                         if ((Eunits[Eslots[y]].type === "Flamewraith")) {
                             //Move left
                             var moved = false;
                             if (Eunits[Eslots[y]].phasedout === false) {
                                 Eunits[Eslots[y]].phasedout = true;
                                 $("#E" + Eunits[Eslots[y]].index).addClass("Invisible");
                                 $("#TEXT").append("This wraith just phased out.")
                             }
                             if (Eunits[Eslots[y]].charge >= 2) {
                                 if (Eunits[Eslots[y]].silenced > 0) {}
                                 else {
                                     flamewraithwhotoattack();
                                 }
                             }
                             if (Eunits[Eslots[y]].terrify > 0) {
                                 scaredmove();
                                 Eunits[Eslots[y]].terrify -= 1;
                             }
                             else {
                                 aggressivemove();
                             }
                             //attack enemies
                             findenemy();
                             //fire attack
                             if (Eunits[Eslots[y]].usedaction === false) {
                                 if (Eunits[Eslots[y]].charge >= 2) {
                                     if (Eunits[Eslots[y]].silenced > 0) {}
                                     else {
                                         flamewraithwhotoattack();
                                     }
                                 }
                                 else {
                                     charging();
                                 }
                             }
                         }
                         if ((Eunits[Eslots[y]].type === "Waterwraith")) {
                             //Move left
                             var moved = false;
                             if (Eunits[Eslots[y]].phasedout === false) {
                                 Eunits[Eslots[y]].phasedout = true;
                                 $("#E" + Eunits[Eslots[y]].index).addClass("Invisible")
                                 $("#TEXT").append("This wraith just phased out.")
                             }
                             //physical
                             if (Eunits[Eslots[y]].blind > 0 || Eunits[Eslots[y]].terrify > 0) {}
                             else {
                                 closePattack()
                             }
                             aggressivemove();
                             //attack enemies
                             findenemy();
                             //physical
                             if (Eunits[Eslots[y]].blind > 0 && Eunits[Eslots[y]].usedaction === false) {
                                 Eunits[Eslots[y]].blind -= 1;
                             }
                             else {
                                 closePattack()
                             }
                             //Wave attack
                             if (Eunits[Eslots[y]].usedaction === false) {
                                 if (Eunits[Eslots[y]].charge >= 1) {
                                     if (Eunits[Eslots[y]].silenced > 0) {
                                         Eunits[Eslots[y]].silenced -= 1;
                                     }
                                     else {
                                         Eunits[Eslots[y]].charge -= 1;
                                         //minus one to offset charging
                                         Eunits[Eslots[y]].charge -= 1;
                                         charging()
                                         var keepgoing = true;
                                         $("#battlebackground").append("<img class='totalbackground' src='../Pictures/Effects/Wave.gif' />");
                                         Water.play();
                                         $(".totalbackground").fadeOut(4000);
                                         while (keepgoing === true) {
                                             keepgoing = false;
                                             var i = 1
                                             for (i = 1; i < 4; i++) {
                                                 if (units[slots[i]].curleft > 25 && !(units[slots[i]].curleft === units[slots[1]].curleft + 100 && units[slots[i]].curtop === units[slots[1]].curtop) && !(units[slots[i]].curleft === units[slots[2]].curleft + 100 && units[slots[i]].curtop === units[slots[2]].curtop) && !(units[slots[i]].curleft === units[slots[3]].curleft + 100 && units[slots[i]].curtop === units[slots[3]].curtop) && !(units[slots[i]].curleft === Eunits[Eslots[1]].curleft + 100 && units[slots[i]].curtop === Eunits[Eslots[1]].curtop) && !(units[slots[i]].curleft === Eunits[Eslots[2]].curleft + 100 && units[slots[i]].curtop === Eunits[Eslots[2]].curtop) && !(units[slots[i]].curleft === Eunits[Eslots[3]].curleft + 100 && units[slots[i]].curtop === Eunits[Eslots[3]].curtop) && !(units[slots[i]].curleft === Eunits[Eslots[4]].curleft + 100 && units[slots[i]].curtop === Eunits[Eslots[4]].curtop) && !(units[slots[i]].curleft === Eunits[Eslots[5]].curleft + 100 && units[slots[i]].curtop === Eunits[Eslots[5]].curtop)) {
                                                     units[slots[i]].curleft -= 100;
                                                     keepgoing = true;
                                                     $('#' + slots[i]).animate({
                                                         left: (units[slots[i]].curleft) + 'px'
                                                     });
                                                 }
                                             }
                                             for (i = 1; i < 6; i++) {
                                                 if (Eunits[Eslots[i]].curleft > 25 && !(Eunits[Eslots[i]].curleft === units[slots[1]].curleft + 100 && Eunits[Eslots[i]].curtop === units[slots[1]].curtop) && !(Eunits[Eslots[i]].curleft === units[slots[2]].curleft + 100 && Eunits[Eslots[i]].curtop === units[slots[2]].curtop) && !(Eunits[Eslots[i]].curleft === units[slots[3]].curleft + 100 && Eunits[Eslots[i]].curtop === units[slots[3]].curtop) && !(Eunits[Eslots[i]].curleft === Eunits[Eslots[1]].curleft + 100 && Eunits[Eslots[i]].curtop === Eunits[Eslots[1]].curtop) && !(Eunits[Eslots[i]].curleft === Eunits[Eslots[2]].curleft + 100 && Eunits[Eslots[i]].curtop === Eunits[Eslots[2]].curtop) && !(Eunits[Eslots[i]].curleft === Eunits[Eslots[3]].curleft + 100 && Eunits[Eslots[i]].curtop === Eunits[Eslots[3]].curtop) && !(Eunits[Eslots[i]].curleft === Eunits[Eslots[4]].curleft + 100 && Eunits[Eslots[i]].curtop === Eunits[Eslots[4]].curtop) && !(Eunits[Eslots[i]].curleft === Eunits[Eslots[5]].curleft + 100 && Eunits[Eslots[i]].curtop === Eunits[Eslots[5]].curtop)) {
                                                     Eunits[Eslots[i]].curleft -= 100;
                                                     keepgoing = true;
                                                     $('#E' + Eslots[i]).animate({
                                                         left: (Eunits[Eslots[i]].curleft) + 'px'
                                                     });
                                                 }
                                             }
                                         } //end of while
                                         for (m = 1; m < 4; m++) {
                                             var damage = (Eunits[Eslots[y]].attack / 2) - units[slots[m]].resistance
                                             Damaging(damage, slots[m]);
                                             if (units[slots[m]].health <= 0) {
                                                 Dies(enemyonbottom, slots[m]);
                                                 units[slots[m]].curleft = 10000;
                                                 units[slots[m]].curtop = 10000;
                                             }
                                         }
                                     }
                                 }
                                 else {
                                     charging();
                                 }
                             }
                         }
                         if ((Eunits[Eslots[y]].type === "Dragon")) {
                             if (Eunits[Eslots[y]].charge >= 3) {
                                 if (Eunits[Eslots[y]].silenced > 0) {}
                                 else {
                                     firewhotoattack("Nothing");
                                     firewhotoattack("Knight");
                                     firewhotoattack("Soldier");
                                     firewhotoattack("Archer");
                                     firewhotoattack("Rouge");
                                     firewhotoattack("Mimic");
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
                             if (Eunits[Eslots[y]].blind > 0) {}
                             else {
                                 for (var i = 1; i < 4; i++) {
                                     if (units[slots[i]].curleft === 225 && units[slots[i]].curtop === 125) {
                                         var damage = Eunits[Eslots[y]].attack - units[slots[i]].defense;
                                         if (damage < 0) {
                                             damage = 0
                                         }
                                         Sword.play();
                                         units[slots[i]].blind = 3;
                                         units[slots[i]].immobilized = 3;
                                         $("#TEXT").append("<p>The dragon's hand immobolized and blinded " + units[slots[i]].name + "</p>");
                                         $("#" + slots[i]).append("<div class='slashEffects'><img src='../Pictures/Effects/EffectSlash.gif' /></div>");
                                         Damaging(damage, slots[i])
                                         $(".slashEffects").fadeOut(2000);
                                         countering(slots[i], y)
                                         Eunits[Eslots[y]].usedaction = true;
                                     }
                                 }
                             }
                             if (Eunits[Eslots[y]].blind > 0) {
                                 Eunits[Eslots[y]].blind -= 1;
                             }
                             else {
                                 closePattack()
                             }
                         }
                         if ((Eunits[Eslots[y]].type === "Elk")) {
                             findenemy();
                             if (Eunits[Eslots[y]].terrify > 0) {
                                 scaredmove();
                                 Eunits[Eslots[y]].terrify -= 1;
                             }
                             else {
                                 fleeingmove();
                             }
                         }
                         //you lose battle
                         if (units[slots[1]].health <= 0) {
                             units[slots[1]].alive = false;
                         } //not sure why i need this, but do
                         if (units[slots[1]].alive === false && units[slots[2]].alive === false && units[slots[3]].alive === false) {
                             $("#TEXT").empty();
                             liberate(groups[curally].location);
                             $("#battlebackground").remove();
                             $("#M" + curally).remove();
                             $("#space" + groups[curally].location).data("filled", 0);
                             groups[curally].location = -1;
                             groups[curally].active = false;
                             $(".actionbutton").remove();
                             battleon = false;
                             $('.actions').append("<div class = 'actionbutton' id='Pass'><p>Pass</p></div>");
                             gameovercheck();
                             enemyconquer();
                             presspass();
                             startcombat();
                         } //end of loses battle
                         if (Eunits[Eslots[y]].blind > 0) {
                             Eunits[Eslots[y]].blind -= 1;
                         }
                         if (Eunits[Eslots[y]].silenced > 0) {
                             Eunits[Eslots[y]].silenced -= 1;
                         }
                         Eunits[Eslots[y]].usedaction = false;
                     } //End of isalive if statement
                 }
                 else {
                     Eunits[Eslots[y]].sleep -= 1;
                 } //end of is sleep if statement    
                 for (var a = 1; a < 4; a++) {
                     for (var b = 1; b < 6; b++) {
                         if (units[slots[a]].curleft === Eunits[Eslots[b]].curleft && units[slots[a]].curtop === Eunits[Eslots[b]].curtop && units[slots[a]].alive === true && Eunits[Eslots[b]].alive === true) {
                             units[slots[a]].curleft = curenemyleft;
                             units[slots[a]].curtop = curenemytop;
                             $('#' + slots[a]).animate({
                                 left: units[slots[a]].curleft + 'px'
                                 , top: units[slots[a]].curtop + 'px'
                             }, 500);
                         }
                     }
                 }
             } //end of enemy's turns
             stormcheck();
             //counter attacking
             function slashattack(selectedindex, enemyindex) {
                 if (units[selectedindex].alive == true) {
                     $("#" + selectedindex).css("z-index", "2")
                     if (Eunits[enemyindex].curleft < units[selectedindex].curleft) {
                         setTimeout(function () {
                             $("#" + selectedindex + " .dirpic").attr("src", units[selectedindex].attackleft)
                         }, 100)
                         $("#" + selectedindex).animate({
                             left: "-=60px"
                         }, 500)
                         setTimeout(function () {
                             $("#" + selectedindex + " .dirpic").attr("src", units[selectedindex].leftpic)
                             $("#" + selectedindex).animate({
                                 top: units[selectedindex].curtop + "px"
                                 , left: units[selectedindex].curleft + "px"
                             , }, 500)
                         }, 500)
                     }
                     if (Eunits[enemyindex].curleft > units[selectedindex].curleft) {
                         setTimeout(function () {
                             $("#" + selectedindex + " .dirpic").attr("src", units[selectedindex].attackright)
                         }, 100)
                         $("#" + selectedindex).animate({
                             left: "+=60px"
                         }, 500)
                         setTimeout(function () {
                             $("#" + selectedindex + " .dirpic").attr("src", units[selectedindex].rightpic)
                             $("#" + selectedindex).animate({
                                 top: units[selectedindex].curtop + "px"
                                 , left: units[selectedindex].curleft + "px"
                             , }, 500)
                         }, 500)
                     }
                     if (Eunits[enemyindex].curtop < units[selectedindex].curtop) {
                         setTimeout(function () {
                             $("#" + selectedindex + " .dirpic").attr("src", units[selectedindex].attackback)
                         }, 100)
                         $("#" + selectedindex).animate({
                             top: "-=40px"
                         }, 500)
                         setTimeout(function () {
                             $("#" + selectedindex + " .dirpic").attr("src", units[selectedindex].backpic)
                             $("#" + selectedindex).animate({
                                 top: units[selectedindex].curtop + "px"
                                 , left: units[selectedindex].curleft + "px"
                             , }, 500)
                         }, 500)
                     }
                     if (Eunits[enemyindex].curtop > units[selectedindex].curtop) {
                         setTimeout(function () {
                             $("#" + selectedindex).css("z-index", "auto")
                             $("#" + selectedindex + " .dirpic").attr("src", units[selectedindex].attackfront)
                         }, 100)
                         $("#" + selectedindex).animate({
                             top: "+=40px"
                         }, 500)
                         setTimeout(function () {
                             $("#" + selectedindex + " .dirpic").attr("src", units[selectedindex].image)
                             $("#" + selectedindex).animate({
                                 top: units[selectedindex].curtop + "px"
                                 , left: units[selectedindex].curleft + "px"
                             , }, 500)
                         }, 500)
                     }
                     setTimeout(function () {
                         $("#" + selectedindex).css("z-index", "auto")
                         $("#E" + enemyindex).append("<div class='slashEffects'><img src='../Pictures/Effects/EffectSlash.gif' /></div>");
                         $(".slashEffects").fadeOut(2000);
                         Sword.play();
                     }, 500)
                 }
             }

             function checkcounter(enemyindex, index, loop) {
                 var counterdamage = parseInt((units[index].attack - Eunits[enemyindex].defense) * .5);
                 if (counterdamage < 0) {
                     counterdamage = 0
                 }
                 Eunits[enemyindex].health -= counterdamage;
                 $("#TEXT").append("<p>" + units[index].name + " countered for " + counterdamage + " damage</p>");
                 $("#EHB" + enemyindex).remove();
                 $("#E" + enemyindex).append('<div class="healthbar" id ="EHB' + Eunits[enemyindex].index + '"style="width: ' + (Eunits[enemyindex].health / Eunits[enemyindex].maxhealth) * 100 + '%"></div>');
                 $("#E" + enemyindex).append('<p class="damage" style="position: absolute; font-size:40px; margin-top:-70px; margin-left:30px; color:white; font-weight:bold ">' + counterdamage + '</p>');
                 $(".damage").delay(1000).effect("puff");
                 slashattack(index, enemyindex)
                 if (loop < counterarray.length) {
                     var loopnum = loop + 1;
                     setTimeout(function () {
                         checkcounter(counterarray[loopnum], index, loopnum)
                     }, loopnum * 1000)
                 }
                 checkdeath()
             }
             var counterarray = [];
             for (var a = 1; a < 4; a++) {
                 if (typeof (units[slots[a]].counterindex) != 'undefined') {
                     counterarray = units[slots[a]].counterindex;
                     units[slots[a]].counterindex = []
                     if (counterarray.length > 0) {
                         inanimation = true;
                         setTimeout(function () {
                             inanimation = false;
                         }, 1000 * counterarray.length)
                         console.log(counterarray)
                         checkcounter(counterarray[0], slots[a], 0)
                     }
                 }
             }

             function checkdeath() {
                 for (var i = 1; i < 6; i++) {
                     if (Eunits[Eslots[i]].health <= 0 && Eunits[Eslots[i]].alive) {
                         if (Eunits[Eslots[i]].type === "Bee" || Eunits[Eslots[i]].type === "Zombie" || Eunits[Eslots[i]].type === "Golem" || Eunits[Eslots[i]].type === "Eye") {
                             if (Eunits[Eslots[i]].type != "Eye") {
                                 $("#E" + Eslots[i]).fadeOut();
                                 $("#E" + Eslots[i]).animate({
                                     left: 225 + "px"
                                     , top: 25 + "px"
                                 });
                                 Eunits[Eslots[i]].curleft = 225;
                                 Eunits[Eslots[i]].curtop = 25;
                             }
                         }
                         else {
                             $("#ORBE" + Eslots[i]).remove();
                             $("#E" + Eslots[i] + " .ORBIMG").remove();
                             $("#E" + Eslots[i] + " .ailment").remove();
                             $("#E" + Eslots[i] + " img").attr("src", Eunits[Eslots[i]].dying);
                             var curenemyindex = Eslots[i]
                             setTimeout(function () {
                                 $("#E" + curenemyindex).remove();
                                 $("#E" + Eslots[i]).remove();
                             }, 1500)
                         }
                         if (Eunits[Eslots[i]].type != "Eye") {
                             Eunits[Eslots[i]].alive = false;
                         }
                         if ((Eslots[1] === -1 || Eunits[Eslots[1]].alive === false) && (Eslots[2] === -1 || Eunits[Eslots[2]].alive === false) && (Eslots[3] === -1 || Eunits[Eslots[3]].alive === false) && (Eslots[4] === -1 || Eunits[Eslots[4]].alive === false) && (Eslots[5] === -1 || Eunits[Eslots[5]].alive === false)) {
                             youwin();
                         }
                     }
                 }
             }
             checkdeath()
             setTimeout(function () {
                 checkdeath()
             }, 3000)
             $('*').usedaction = false;
             $('*').removeClass("selected");
             showailments();
         } //end of passturn button
         for (var i = 1; i < 4; i++) {
             if (units[slots[i]].abilityinvisible === true) {
                 units[slots[i]].type = "Invisible";
                 $("#" + slots[i]).addClass("Invisible");
             }
             units[slots[i]].attacktempboost = 0;
             units[slots[i]].defensetempboost = 0;
             if (units[slots[i]].type === "Golem") {
                 units[slots[i]].attacktempboost = units[slots[i]].attack * 12;
                 units[slots[i]].defensetempboost = 30;
             }
         }
         setTimeout(function () {
             showailments()
         }, 500)
     }

     function stormcheck(nostorm) {
         var elementalNum = 1;
         ///Storm stuff
         if (units[slots[1]].stormactive === true || units[slots[2]].stormactive === true || units[slots[3]].stormactive === true && nostorm != true) {
             var randnum = Math.floor((Math.random() * 4) + 1);
             $("#battlebackground").append("<div class='Effects' style='margin-top: " + (-95 - (100 * randnum)) + "px; margin-left: -200px'><img src='../Pictures/Effects/Cloud.gif'/></div>");
             $(".Effects").animate({
                 left: 800 + "px"
             }, 1500).fadeOut(500);
             switch (randnum) {
             case 1:
                 randnum = 4;
                 break;
             case 2:
                 randnum = 3;
                 break;
             case 3:
                 randnum = 2;
                 break;
             case 4:
                 randnum = 1;
                 break;
             }
             var curattack = 0;
             for (var i = 1; i < 4; i++) {
                 if (units[slots[i]].stormactive === true) {
                     curattack = units[slots[i]].attack;
                 }
             }
             for (var w = 1; w < 6; w++) {
                 if (Eunits[Eslots[w]].curtop === (-75 + randnum * 100) && Eunits[Eslots[w]].alive === true) {
                     var defense = Eunits[Eslots[w]].resistance;
                     if (Eunits[Eslots[w]].enfeeble > 0) {
                         defense = 0;
                     }
                     var damage = (50 + curattack - defense) * Eunits[Eslots[w]].lightning;
                     if (damage < 0) {
                         damage = 0;
                     }
                     damaging(w, "lightning")
                 }
             }
             checkdeath();
         }
         //fire circle   
         setTimeout(function () {
                 firecheck()
             }, 1000)
             //ice fall
         if (iceActive) {
             var keepgoing = true;
             var randnum = -1;
             var exitNum = 0
             while (keepgoing) {
                 randnum = Math.floor((Math.random() * 5) + 1);
                 if (Eunits[Eslots[randnum]].alive) {
                     keepgoing = false;
                 }
                 exitNum += 1;
                 if (exitNum > 50) {
                     keepgoing = false;
                 }
             }
             if (Eunits[Eslots[randnum]].alive) {
                 var defense = Eunits[Eslots[randnum]].resistance;
                 if (Eunits[Eslots[randnum]].enfeeble > 0) {
                     defense = 0;
                 }
                 var damage = (50 - defense) * Eunits[Eslots[randnum]].ice;
                 if (damage < 0) {
                     damage = 0
                 }
                 elementalNum = Eunits[Eslots[randnum]].ice;
                 $("#battlebackground").append("<div class='slashEffects' style='margin-top: " + (Eunits[Eslots[randnum]].curtop - 750) + "px; margin-left: " + (Eunits[Eslots[randnum]].curleft - 0) + "px'><img src='../Pictures/Effects/Ice-drop.gif' /></div>");
                 $(".slashEffects").animate({
                     top: "+=300px"
                 , }, 1000, "linear")
                 setTimeout(function () {
                     damaging(randnum, "ice")
                     Iceattack.play()
                     checkdeath();
                 }, 1000)
             }
         }

         function damaging(index, element) {
             var wraithtype;
             var name;
             if (element == "ice") {
                 wraithtype = "Flamewraith"
                 name = "ice sickle"
             }
             if (element == "fire") {
                 wraithtype = "Frostwraith"
                 name = "fire circle"
             }
             if (element == "lightning") {
                 wraithtype = "Waterwraith"
                 name = "cloud"
             }
             if (Eunits[Eslots[index]].phasedout === true) {
                 if (Eunits[Eslots[index]].type === wraithtype) {}
                 else {
                     damage = 0;
                 }
                 Eunits[Eslots[index]].phasedout = false;
                 $("#E" + Eunits[Eslots[index]].index).removeClass("Invisible");
                 $("#TEXT").append("The wraith phased back in.")
             }
             var elementalchange = "normalDamage";
             if (elementalNum > 1) {
                 elementalchange = "BigDamage";
             }
             if (elementalNum < 1) {
                 elementalchange = "SmallDamage";
             }
             $("#battlebackground").append('<p class="damage ' + elementalchange + '" style="margin-top:' + (Eunits[Eslots[index]].curtop - 500) + 'px; margin-left:' + (Eunits[Eslots[index]].curleft) + 'px;">' + damage + '</p>');
             $('.damage').animate({
                 top: (450) + 'px'
             }, 1000);
             $(".slashEffects").remove();
             Eunits[Eslots[index]].health -= damage;
             $("#EHB" + Eslots[index]).remove();
             $("#E" + Eslots[index]).append('<div class="healthbar" id ="EHB' + Eunits[Eslots[index]].index + '"style="width: ' + (Eunits[Eslots[index]].health / Eunits[Eslots[index]].maxhealth) * 100 + '%"></div>');
             setTimeout(function () {
                 $(".damage").remove()
             }, 1000)
         }

         function checkdeath() {
             for (var i = 1; i < 6; i++) {
                 if (Eunits[Eslots[i]].health <= 0) {
                     if (Eunits[Eslots[i]].type === "Bee" || Eunits[Eslots[i]].type === "Zombie" || Eunits[Eslots[i]].type === "Golem" || Eunits[Eslots[i]].type === "Eye") {
                         if (Eunits[Eslots[i]].type != "Eye") {
                             $("#E" + Eslots[i]).fadeOut();
                             $("#E" + Eslots[i]).animate({
                                 left: 225 + "px"
                                 , top: 25 + "px"
                             });
                             Eunits[Eslots[i]].curleft = 225;
                             Eunits[Eslots[i]].curtop = 25;
                         }
                     }
                     else {
                         $("#ORBE" + Eslots[i]).remove();
                         $("#E" + Eslots[i] + " .ORBIMG").remove();
                         $("#E" + Eslots[i] + " .ailment").remove();
                         $("#E" + Eslots[i] + " img").attr("src", Eunits[Eslots[i]].dying);
                         var curenemyindex = Eslots[i]
                         $("#E" + Eslots[i]).remove();
                     }
                     if (Eunits[Eslots[i]].type != "Eye") {
                         Eunits[Eslots[i]].alive = false;
                     }
                     if ((Eslots[1] === -1 || Eunits[Eslots[1]].alive === false) && (Eslots[2] === -1 || Eunits[Eslots[2]].alive === false) && (Eslots[3] === -1 || Eunits[Eslots[3]].alive === false) && (Eslots[4] === -1 || Eunits[Eslots[4]].alive === false) && (Eslots[5] === -1 || Eunits[Eslots[5]].alive === false)) {
                         youwin();
                     }
                 }
             }
         }
     }

     function firecheck() {
         //fire circle
         for (var i = 1; i < 4; i++) {
             if (units[slots[i]].fireCircle === true) {
                 for (var w = 1; w < 6; w++) {
                     if ((units[slots[i]].curleft == Eunits[Eslots[w]].curleft && units[slots[i]].curtop + 100 == Eunits[Eslots[w]].curtop) || (units[slots[i]].curleft == Eunits[Eslots[w]].curleft && units[slots[i]].curtop - 100 == Eunits[Eslots[w]].curtop) || (units[slots[i]].curtop == Eunits[Eslots[w]].curtop && units[slots[i]].curleft + 100 == Eunits[Eslots[w]].curleft) || (units[slots[i]].curtop == Eunits[Eslots[w]].curtop && units[slots[i]].curleft - 100 == Eunits[Eslots[w]].curleft)) {
                         var defense = Eunits[Eslots[w]].resistance;
                         if (Eunits[Eslots[w]].enfeeble > 0) {
                             defense = 0;
                         }
                         var damage = (50 - defense) * Eunits[Eslots[w]].fire;
                         damaging(w, "fire")
                         Fire.play()
                     }
                 }
             }
         }
         var elementalNum;

         function damaging(index, element) {
             var wraithtype;
             var name;
             if (element == "ice") {
                 wraithtype = "Flamewraith"
                 name = "ice sickle"
             }
             if (element == "fire") {
                 wraithtype = "Frostwraith"
                 name = "fire circle"
             }
             if (element == "lightning") {
                 wraithtype = "Waterwraith"
                 name = "cloud"
             }
             if (Eunits[Eslots[index]].phasedout === true) {
                 if (Eunits[Eslots[index]].type === wraithtype) {}
                 else {
                     damage = 0;
                 }
                 Eunits[Eslots[index]].phasedout = false;
                 $("#E" + Eunits[Eslots[index]].index).removeClass("Invisible");
                 $("#TEXT").append("The wraith phased back in.")
             }
             var elementalchange = "normalDamage";
             if (elementalNum > 1) {
                 elementalchange = "BigDamage";
             }
             if (elementalNum < 1) {
                 elementalchange = "SmallDamage";
             }
             $("#battlebackground").append('<p class="damage ' + elementalchange + '" style="margin-top:' + (Eunits[Eslots[index]].curtop - 500) + 'px; margin-left:' + (Eunits[Eslots[index]].curleft) + 'px;">' + damage + '</p>');
             $('.damage').animate({
                 top: (450) + 'px'
             }, 1000);
             $(".slashEffects").remove();
             Eunits[Eslots[index]].health -= damage;
             $("#EHB" + Eslots[index]).remove();
             $("#E" + Eslots[index]).append('<div class="healthbar" id ="EHB' + Eunits[Eslots[index]].index + '"style="width: ' + (Eunits[Eslots[index]].health / Eunits[Eslots[index]].maxhealth) * 100 + '%"></div>');
             setTimeout(function () {
                 $(".damage").remove()
             }, 1000)
         }
     }

     function showailments() {
         $(".ailment").remove();
         $(".ailments").remove();
         for (var i = 1; i < 4; i++) {
             if (units[slots[i]].blind > 0) {
                 $("#" + slots[i]).append("<img class='ailment' src='../Pictures/Ailments/Blindness.gif'/>")
             }
             if (units[slots[i]].sleep > 0) {
                 $("#" + slots[i]).append("<img class='ailment' src='../Pictures/Ailments/Sleep.gif'/>")
             }
             if (units[slots[i]].poison > 0) {
                 $("#" + slots[i]).append("<img class='ailment' src='../Pictures/Ailments/Poison.gif'/>")
             }
             if (units[slots[i]].silenced > 0) {
                 $("#" + slots[i]).append("<img class='ailment' src='../Pictures/Ailments/Silenced.gif'/>")
             }
             if (units[slots[i]].immobilized > 0) {
                 $("#" + slots[i]).append("<img class='ailment' src='../Pictures/Ailments/Immobolized.gif'/>")
             }
             if (units[slots[i]].protectedby != -1) {
                 $("#" + slots[i]).append("<img class='ailment' style='margin-top:10px' src='../Pictures/Ailments/Shield.gif'/>")
             }
             if (units[slots[i]].fireCircle) {
                 $("#" + slots[i]).append("<img class='ailments' style='margin-top:-95px;margin-left:-40px; width:150px;height:150px' src='../Pictures/Ailments/Fire-circle.gif'/>")
             }
             if (units[slots[i]].attacktempboost > 0) {
                 $("#" + slots[i]).append("<div class='healerEffects ailments'><img src='../Pictures/Ailments/bestow.gif'/></div>")
             }
         }
         for (var i = 1; i < 6; i++) {
             if (Eunits[Eslots[i]].blind > 0) {
                 $("#E" + Eslots[i]).append("<img class='ailment' src='../Pictures/Ailments/Blindness.gif'/>")
             }
             if (Eunits[Eslots[i]].sleep > 0) {
                 $("#E" + Eslots[i]).append("<img class='ailment' src='../Pictures/Ailments/Sleep.gif'/>")
             }
             if (Eunits[Eslots[i]].poison > 0) {
                 $("#E" + Eslots[i]).append("<img class='ailment' src='../Pictures/Ailments/Poison.gif'/>")
             }
             if (Eunits[Eslots[i]].silenced > 0) {
                 $("#E" + Eslots[i]).append("<img class='ailment' src='../Pictures/Ailments/Silenced.gif'/>")
             }
             if (Eunits[Eslots[i]].immobilized > 0) {
                 $("#E" + Eslots[i]).append("<img class='ailment' src='../Pictures/Ailments/Immobolized.gif'/>")
             }
             if (Eunits[Eslots[i]].enfeeble > 0) {
                 $("#E" + Eslots[i]).append("<img class='ailment' style='Margin-top:5px;' src='../Pictures/Ailments/Enfeeble.gif'/>")
             }
             if (Eunits[Eslots[i]].terrify > 0) {
                 $("#E" + Eslots[i]).append("<img class='ailment' style='Margin-top:-20px;' src='../Pictures/Ailments/Terrify.gif'/>")
             }
             if (Eunits[Eslots[i]].protectedby > -1) {
                 $("#E" + Eslots[i]).append("<img class='ailment' style='margin-top:10px' src='../Pictures/Ailments/Shield.gif'/>")
             }
         }
     }
     $(".XED").remove();

     function text(words, left, top) {
         $(".epictext").remove();
         $("#quickscene").append("<p class='epictext' style ='position: absolute; display:none; margin-left:" + left + "px; margin-top:" + top + "px'>" + words + "</p>")
         setTimeout(function () {
             $(".epictext").fadeIn(2000);
         }, 2000)
     }

     function saving(level) {
         if (window.localStorage) {
             localStorage.setItem("level", level);
         }
         if (parseInt(localStorage.getItem("diff")) > 0) {
             difflevel = parseInt(localStorage.getItem("diff"));
         }
     }
     $(window).load(function () {
             if (parseInt(localStorage.getItem("diff")) > 0) {
                 difflevel = parseInt(localStorage.getItem("diff"));
             }
             //varibles
         
         
             {
                 $('.actions').append("<div class = 'actionbutton' id='Pass'><p>Pass</p></div>");
                 setTimeout(function(){
        Fire.src = "../sounds/Fire.mp3";
         Fire.volume = .3;
         Lightning.src = "../sounds/Lightning.mp3";
         Lightning.volume = .2;
         Heal.src = "../sounds/Heal.mp3";
         Heal.volume = .3;
         Sword.src = "../sounds/Sword.mp3";
         Sword.volume = .3;
         Arrow.src = "../sounds/Arrow.mp3";
         Arrow.volume = .3;
         Paralyzesound.src = "../sounds/Paralyze.mp3";
         Paralyzesound.volume = .3;
         Specialsound.src = "../sounds/Special.mp3";
         Specialsound.volume = .3;
         Win.src = "../sounds/Win.mp3";
         Win.volume = .3;
         Turnsound.src = "../sounds/Turn.mp3";
         Turnsound.volume = .3;
         Chargesound.src = "../sounds/Charge.mp3";
         Chargesound.volume = .1;
         Absorb.src = "../sounds/absorb.mp3";
         Absorb.volume = .3;
         Capture.src = "../sounds/capture.mp3";
         Capture.volume = .3;
         Cleanse.src = "../sounds/Cleanse.mp3";
         Cleanse.volume = .3;
         Death.src = "../sounds/Death.mp3";
         Death.volume = .3;
         Dogbite.src = "../sounds/dogbite.mp3";
         Dogbite.volume = .3;
         Disrupt.src = "../sounds/Disrupt.mp3";
         Disrupt.volume = .3;
         Flyby.src = "../sounds/flyby.mp3";
         Flyby.volume = .3;
         Gust.src = "../sounds/Gust.mp3";
         Gust.volume = .3;
         Hook.src = "../sounds/Hook.mp3";
         Hook.volume = .3;
         Hurricane.src = "../sounds/Hurricane.mp3";
         Hurricane.volume = .3;
         Water.src = "../sounds/Water.mp3";
         Water.volume = .3;
         Icescream.src = "../sounds/Icescream.mp3";
         Icescream.volume = .3;
         Protect.src = "../sounds/protect.mp3";
         Protect.volume = .3;
         Tar.src = "../sounds/Tar.mp3";
         Tar.volume = .3;
         Teleport.src = "../sounds/teleport.mp3";
         Teleport.volume = .3;
         vigor.src = "../sounds/vigor.mp3";
         vigor.volume = .3;
         Zap.src = "../sounds/zap.mp3";
         Zap.volume = .3;
         Iceattack.src = "../sounds/Iceattack.mp3";
         Iceattack.volume = .3;
         Spit.src = "../sounds/Spit.mp3";
         Spit.volume = .3;
         Vampirebite.src = "../sounds/Vampire.mp3";
         Vampirebite.volume = .3;
         propeller.src = "../sounds/Helicopter.mp3";
         propeller.volume = .3;
         powerup.src = "../sounds/powerup.mp3";
         powerup.volume = .3;
         crash.src = "../sounds/crash.mp3";
         crash.volume = .3;
         eating.src = "../sounds/eating.mp3";
         eating.volume = .6;
         break_window.src = "../sounds/break_window.mp3";
         break_window.volume = .6;
         swing.src = "../sounds/swing.mp3";
         swing.volume = .6;
         hell.src = "../sounds/Hell.mp3";
         hell.volume = 1;
         dramatic.src = "../sounds/Dramatic.mp3";
         dramatic.volume = 1;
         fail.src = "../sounds/fail.mp3";
         fail.volume = 1;
         success.src = "../sounds/success.mp3";
         success.volume = 1;
         missile.src = "../sounds/missile.mp3";
         missile.volume = 1;
                 },1000)

             } {
                 $("body").append("<div id='hidethis' style='visibility:hidden;display:none'></div>")
                 newday();
                 //disable rightclick window
                 document.oncontextmenu = function () {
                     return false;
                 };
             }
             $("body").click(function () {
                 $(".removewindow").remove();
             });
             //set filled varibles
             for (var i = 1; i < 100; i++) {
                 $("#space" + i).data('filled', 0)
             }
             $(".actions").empty();
             //citatol stuff////////////////////////////////////////////////////////////////////////////////////////////////////////
             {
                 ingredient["Flowers"] = new Ingredient("Flowers");
                 ingredient["Mushrooms"] = new Ingredient("Mushrooms");
                 ingredient["Honey"] = new Ingredient("Honey");
                 ingredient["Roots"] = new Ingredient("Roots");
                 ingredient["Powder"] = new Ingredient("Powder");
                 ingredient["Sap"] = new Ingredient("Sap");
                 ingredient["Extract"] = new Ingredient("Extract");
                 ingredient["Berries"] = new Ingredient("Berries");
                 ingredient["Herbs"] = new Ingredient("Herbs");
                 ingredient["Essence"] = new Ingredient("Essence");
             } //ingredients
             //create bad units/////////////////////////////////////////////////////////////////////
             var curEindex = 0;
             var curEgroupindex = 0;
             //starting stuff///////////////////////////////////////////////////////////////////
             presspass();
             setlocationstuff();
             //starting units
             var going = false;
             var tempclass = "";
             for (var i = 1; i < number_of_units + 1; i++) {
                 newunit();
             }
             units[-1] = new Soldier(-1);
             Eunits[-1] = new Warrior(-1);
             //Map stuff//////////////////////////////////////////////////////////////////////////////////////
             assignlocations();
             for (var p = 1; p < 100; p++) {
                 $('#space' + p).data('loot', 0)
             }
             //move allies
             $(".areas").mousedown(function (e) {
                 if (e.button === 2) {
                     $('#TEXT').empty();
                     $(".actions").empty().append("<div class = 'actionbutton' id='Pass'><p>Pass</p></div>");
                     presspass();
                     if ($(this).data("location") == 71) {
                         var checking = condition71();
                         if (checking == "stop") {
                             return;
                         }
                     }
                     if ($(this).data('filled') != 0) {
                         message("There is already a group there!");
                         return;
                     }
                     var activenum = $('.highlight').attr('id');
                     var curloc;
                     if (activenum.indexOf("B") > -1) {
                         activenum = activenum.replace("BM", "");
                         activenum = parseInt(activenum, 10)
                         curloc = Bgroups[activenum].location;
                         if (Bgroups[activenum].hasmoved === true) {
                             return;
                         }
                         if (Bgroups[activenum].flight === true || ((($(this).data("fortify") == true) || ($(this).data("castle") == true)) && ($("#space" + Bgroups[activenum].location).data("fortify") == true || $("#space" + Bgroups[activenum].location).data("castle") == true)) || (Bgroups[activenum].location == $(this).data("move1") || Bgroups[activenum].location == $(this).data("move2") || Bgroups[activenum].location == $(this).data("move3") || Bgroups[activenum].location == $(this).data("move4"))) {
                             $('.highlight').animate({
                                 left: $(this).data("left") + 'px'
                                 , top: $(this).data("top") + 'px'
                             });
                             Bgroups[activenum].location = $(this).data('location');
                             Bgroups[activenum].curleft = $(this).data("left");
                             Bgroups[activenum].curtop = $(this).data("top");
                             Bgroups[activenum].hasmoved = true;
                             $(".highlight").addClass("grayicon");
                             clearspaces(curloc);
                             $(this).data('filled', Bgroups[activenum].index);
                             if (Bgroups[activenum].location == 72) {
                                 for (var i = 0; i < index; i++) {
                                     if (Beasts[i].group == activenum) {
                                         $("#TEXT").empty();
                                         Beasts[i].group = 0;
                                         $("#space70").data('filled', 0);
                                     }
                                     setTimeout(function () {
                                         $("#BM" + activenum).remove();
                                     }, 500);
                                     Bgroups[activenum].location = -1;
                                 }
                             }
                         }
                         curloc = Bgroups[activenum].location;
                     }
                     else {
                         activenum = activenum.replace("M", "");
                         activenum = parseInt(activenum, 10)
                         curloc = groups[activenum].location;
                         if (groups[activenum].hasmoved === true) {
                             return;
                         }
                         if (groups[activenum].flight === true || ((($(this).data("fortify") == true) || ($(this).data("castle") == true)) && ($("#space" + groups[activenum].location).data("fortify") == true || $("#space" + groups[activenum].location).data("castle") == true)) || (groups[activenum].location == $(this).data("move1") || groups[activenum].location == $(this).data("move2") || groups[activenum].location == $(this).data("move3") || groups[activenum].location == $(this).data("move4"))) {
                             $('.highlight').animate({
                                 left: $(this).data("left") + 'px'
                                 , top: $(this).data("top") + 'px'
                             });
                             groups[activenum].location = $(this).data('location');
                             groups[activenum].curleft = $(this).data("left");
                             groups[activenum].curtop = $(this).data("top");
                             groups[activenum].hasmoved = true;
                             $(".highlight").addClass("grayicon");
                             clearspaces(curloc);
                             $(this).data('filled', groups[activenum].index);
                             if (groups[activenum].location == 70) {
                                 for (var i = 0; i < index; i++) {
                                     if (units[i].group == activenum) {
                                         $("#TEXT").empty();
                                         units[i].group = 0;
                                         $("#space70").data('filled', 0);
                                     }
                                     setTimeout(function () {
                                         $("#M" + activenum).remove();
                                     }, 500);
                                     groups[activenum].location = -1;
                                 }
                                 if (typeof indiv_return == 'function') {
                                     indiv_return();
                                 }
                             }
                         }
                         curloc = groups[activenum].location;
                     }
                     if (typeof indiv_moveally == 'function') {
                         indiv_moveally();
                     }
                     startcombat();
                     liberate(curloc);
                 }
             });
             //start combat////////////////////////////////////////////////////////////////
             lootenemy[1] = "";
             lootenemy[2] = "";
             lootenemy[3] = "";
             lootenemy[4] = "";
             lootenemy[5] = "";
             clickEicon();
             Egroupinfo();
             //click buttons on map
             $("#space70").click(function () {
                 gotocapitol();
             });
             $(".actions").append("<div class = 'actionbutton' id='Pass'><p>Pass</p></div>");
             presspass();
             if (typeof (tempstart) != 'undefined') {
                 TEMPstartcombat();
             }
         }) //done