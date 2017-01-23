   difflevel = 3;
   var allynum = 0;
   var angel = false;
   var demon = false;
   var djinn = false;
   var frostlord = false;
   var angelrest = 0;
   var demonrest = 0;
   var djinnrest = 0;
   var frostlordrest = 0;
   var replicaterecipe = false;
   var reviverecipe = false;
   var recoverrecipe = false;
   var teleportrecipe = false;
   var boostrecipe = false;
   var goldrecipe = false;
   var manarecipe = false;
   var summonrecipe = false;
   var intelligencerecipe = false;
   var flourishrecipe = false;
   var refreshrecipe = false;
   var recoverpotion = 0;
   var revivepotion = 0;
   var teleportpotion = 0;
   var boostpotion = 0;
   var number_of_units = 8;
   missiondetails = "<p>The enemies will appear in the holes in the wall and will race towards the crystals. If they reach one, they will begin to drag it towards a eddy. If a crystal reaches an eddy, it will be permanently destroyed.</p><p>Create groups to intercept them before they destroy too many crystals.</p><p>The number of crystals that are allowed to be destroyed is displayed at the top, and if more than that is destroyed, it's gameover.</p><p>You units can move instantly between the eddies, which look like colorful swirls near the top, and the nexus. You can also exchange units between any two groups on a nexus or an eddy.</p><p>Survive 30 turns, and you win.</p>"
   crystaldestroyed = 0;

   function containaccessories() {}
   //wall
   function showwall() {
       $(".wall").remove();
       for (var i = 1; i < 70; i++) {
           if ($('#space' + i).data("fortify") === true) {
               $('#space' + i).append("<img class='wall' style='margin-top:-40px' src='Pictures/Wall.gif' />");
           }
       }
   }

   function setlocationstuff() {
       $("#space70").data("castle", true).data("move1", '35').data("move2", '').data("move3", '').data("move4", '').data("left", 275).data("top", 480).data("location", 70);
       $("#space1").data("move1", '2').data("move2", '25').data("move3", '').data("move4", '').data("left", 105).data("top", 100).data("location", 1).data("fortify", false);
       $("#space2").data("move1", '3').data("move2", '1').data("move3", '26').data("move4", '').data("left", 105).data("top", 160).data("location", 2).data("fortify", false);
       $("#space3").data("move1", '4').data("move2", '2').data("move3", '27').data("move4", '').data("left", 105).data("top", 220).data("location", 3).data("fortify", false);
       $("#space4").data("move1", '5').data("move2", '3').data("move3", '28').data("move4", '').data("left", 105).data("top", 280).data("location", 4).data("fortify", false);
       $("#space5").data("move1", '6').data("move2", '4').data("move3", '29').data("move4", '').data("left", 105).data("top", 340).data("location", 5).data("fortify", false);
       $("#space6").data("move1", '5').data("move2", '').data("move3", '').data("move4", '').data("left", 105).data("top", 400).data("location", 6).data("fortify", false);
       $("#space7").data("move1", '8').data("move2", '25').data("move3", '30').data("move4", '').data("left", 220).data("top", 100).data("location", 7).data("fortify", false);
       $("#space8").data("move1", '9').data("move2", '7').data("move3", '26').data("move4", '31').data("left", 220).data("top", 160).data("location", 8).data("fortify", false);
       $("#space9").data("move1", '10').data("move2", '8').data("move3", '27').data("move4", '32').data("left", 220).data("top", 220).data("location", 9).data("fortify", false);
       $("#space10").data("move1", '11').data("move2", '9').data("move3", '28').data("move4", '33').data("left", 220).data("top", 280).data("location", 10).data("fortify", false);
       $("#space11").data("move1", '12').data("move2", '10').data("move3", '29').data("move4", '34').data("left", 220).data("top", 340).data("location", 11).data("fortify", false);
       $("#space12").data("move1", '35').data("move2", '11').data("move3", '').data("move4", '').data("left", 220).data("top", 400).data("location", 12).data("fortify", false);
       $("#space13").data("move1", '14').data("move2", '30').data("move3", '36').data("move4", '').data("left", 345).data("top", 100).data("location", 13).data("fortify", false);
       $("#space14").data("move1", '15').data("move2", '13').data("move3", '31').data("move4", '37').data("left", 345).data("top", 160).data("location", 14).data("fortify", false);
       $("#space15").data("move1", '14').data("move2", '16').data("move3", '32').data("move4", '38').data("left", 345).data("top", 220).data("location", 15).data("fortify", false);
       $("#space16").data("move1", '15').data("move2", '17').data("move3", '33').data("move4", '39').data("left", 345).data("top", 280).data("location", 16).data("fortify", false);
       $("#space17").data("move1", '16').data("move2", '18').data("move3", '34').data("move4", '40').data("left", 345).data("top", 340).data("location", 17).data("fortify", false);
       $("#space18").data("move1", '').data("move2", '35').data("move3", '17').data("move4", '').data("left", 345).data("top", 400).data("location", 18).data("fortify", false);
       $("#space19").data("move1", '20').data("move2", '36').data("move3", '41').data("move4", '').data("left", 445).data("top", 100).data("location", 19).data("fortify", false);
       $("#space20").data("move1", '21').data("move2", '19').data("move3", '37').data("move4", '42').data("left", 445).data("top", 160).data("location", 20).data("fortify", false);
       $("#space21").data("move1", '22').data("move2", '20').data("move3", '38').data("move4", '43').data("left", 445).data("top", 220).data("location", 21).data("fortify", false);
       $("#space22").data("move1", '23').data("move2", '21').data("move3", '39').data("move4", '44').data("left", 445).data("top", 280).data("location", 22).data("fortify", false);
       $("#space23").data("move1", '24').data("move2", '22').data("move3", '40').data("move4", '45').data("left", 445).data("top", 340).data("location", 23).data("fortify", false);
       $("#space24").data("move1", '23').data("move2", '').data("move3", '').data("move4", '').data("left", 445).data("top", 400).data("location", 24).data("fortify", false);
       $("#space25").data("move1", '1').data("move2", '7').data("move3", '26').data("move4", '').data("left", 160).data("top", 100).data("location", 25).data("fortify", true);
       $("#space26").data("move1", '25').data("move2", '27').data("move3", '2').data("move4", '8').data("left", 160).data("top", 160).data("location", 26).data("fortify", false);
       $("#space27").data("move1", '26').data("move2", '28').data("move3", '3').data("move4", '9').data("left", 160).data("top", 220).data("location", 27).data("fortify", false);
       $("#space28").data("move1", '27').data("move2", '29').data("move3", '4').data("move4", '10').data("left", 160).data("top", 280).data("location", 28).data("fortify", false);
       $("#space29").data("move1", '28').data("move2", '').data("move3", '5').data("move4", '11').data("left", 160).data("top", 340).data("location", 29).data("fortify", false);
       $("#space30").data("move1", '31').data("move2", '7').data("move3", '13').data("move4", '').data("left", 280).data("top", 100).data("location", 30).data("fortify", true);
       $("#space31").data("move1", '32').data("move2", '8').data("move3", '14').data("move4", '30').data("left", 280).data("top", 160).data("location", 31).data("fortify", false);
       $("#space32").data("move1", '33').data("move2", '9').data("move3", '15').data("move4", '31').data("left", 280).data("top", 220).data("location", 32).data("fortify", false);
       $("#space33").data("move1", '34').data("move2", '10').data("move3", '16').data("move4", '32').data("left", 280).data("top", 280).data("location", 33).data("fortify", false);
       $("#space34").data("move1", '').data("move2", '11').data("move3", '17').data("move4", '33').data("left", 280).data("top", 340).data("location", 34).data("fortify", false);
       $("#space35").data("move1", '12').data("move2", '16').data("move3", '').data("move4", '').data("left", 285).data("top", 430).data("location", 35).data("fortify", false);
       $("#space36").data("move1", '37').data("move2", '13').data("move3", '19').data("move4", '').data("left", 400).data("top", 100).data("location", 36).data("fortify", true);
       $("#space37").data("move1", '38').data("move2", '14').data("move3", '20').data("move4", '36').data("left", 400).data("top", 160).data("location", 37).data("fortify", false);
       $("#space38").data("move1", '39').data("move2", '15').data("move3", '21').data("move4", '').data("left", 400).data("top", 220).data("location", 38).data("fortify", false);
       $("#space39").data("move1", '40').data("move2", '16').data("move3", '22').data("move4", '').data("left", 400).data("top", 280).data("location", 39).data("fortify", false);
       $("#space40").data("move1", '').data("move2", '17').data("move3", '23').data("move4", '').data("left", 400).data("top", 340).data("location", 40).data("fortify", false);
       $("#space41").data("move1", '19').data("move2", '42').data("move3", '').data("move4", '').data("left", 510).data("top", 100).data("location", 41).data("fortify", true);
       $("#space42").data("move1", '20').data("move2", '43').data("move3", '41').data("move4", '').data("left", 510).data("top", 160).data("location", 42).data("fortify", false);
       $("#space43").data("move1", '21').data("move2", '44').data("move3", '').data("move4", '').data("left", 510).data("top", 220).data("location", 43).data("fortify", false);
       $("#space44").data("move1", '22').data("move2", '45').data("move3", '').data("move4", '').data("left", 510).data("top", 280).data("location", 44).data("fortify", false);
       $("#space45").data("move1", '23').data("move2", '').data("move3", '').data("move4", '').data("left", 510).data("top", 340).data("location", 45).data("fortify", false);
   }

   function assignlocations() {}

   function newunit() {
       going = true;
       var tempname;
       while (going === true) {
           going = false;
           var temp = Math.floor((Math.random() * number_of_units) + 1);
           switch (temp) {
           case 1:
               tempclass = "Sorcerer";
               tempname = "Sorcerer";
               break;
           case 2:
               tempclass = "Wizard";
               tempname = "Wizard2";
               break;
           case 3:
               tempclass = "Archer";
               tempname = "Archer3";
               break;
           case 4:
               tempclass = "Templar";
               tempname = "Templar2";
               break;
           case 5:
               tempclass = "Soldier";
               tempname = "Soldier2";
               break;
           case 6:
               tempclass = "Knight";
               tempname = "Knight2";
               break;
           case 7:
               tempclass = "Rouge";
               tempname = "Rouge2";
               break;
           case 8:
               tempclass = "Healer";
               tempname = "Healer2";
               break;
           }
           for (var j = 0; j < index; j++) {
               if (units[j].realtype == tempclass) {
                   going = true;
               }
               if (units[j].type == "Invisible" && tempclass == "Thief") {
                   going = true;
               }
           }
       } //end of while
       createsoldier(tempclass, tempname);
   }
   //special abilities
   function traincommands(e) {
       if (summoning === true) {
           $('.actions').append("<select class = 'options' id='alchemychoice' style='position: absolute; margin-left:260px; margin-top: 2px; width:110px;'><option value = 'Alchemy'></option></select>" + "<div class = 'actionbutton' style='position:absolute; margin-top:30px; margin-left:265px; width:100px' id = 'Use'>Summon</div>");
           if (angel === true && summoning === true) {
               $('#alchemychoice').append(new Option("Summon Angel", 'Angel'));
           }
           if (demon === true && summoning === true) {
               $('#alchemychoice').append(new Option("Summon Demon", 'Demon'));
           }
           if (djinn === true && summoning === true) {
               $('#alchemychoice').append(new Option("Summon Djinn", 'Djinn'));
           }
           if (frostlord === true && summoning === true) {
               $('#alchemychoice').append(new Option("Summon Frostlord", 'Frostlord'));
           }
       }
       clickactionbuttons();
   }

   function liberate(curloc) {}

   function tipmessage(index, e) {}

   function movebadguys() {
       var direction = Math.floor((Math.random() * 2) + 1);
       var thistemp = "";

       function nomove(e) {
           for (var i = 1; i < Egroupindex; i++) {
               if (Egroups[i].location == undefined) {
                   continue;
               }
               if (Egroups[i].location == e) {
                   return true;
               }
           }
           return false
       }

       function checkcrystal(location) {
           for (var i = 1; i < 17; i++) {
               if ($("#C" + i).data("location") == location) {
                   crystalnum = i;
                   return i;
               }
           }
           return -1;
       }
       //moving
       for (var i = 1; i < Egroupindex; i++) {
           var crystalnum = 0;
           if (Egroups[i].location == undefined) {
               continue;
           }
           if (Egroups[i].location < 0) {
               continue;
           }
           if ($('#space' + Egroups[i].location).data("fortify") === true) {
               $('#space' + Egroups[i].location).data("fortify", false);
           }
           else {
               if (Egroups[i].location === 1 && nomove(2) === false && Egroups[i].hasmoved === false) {
                   Egroups[i].hasmoved = true;
                   thistemp = 2;
                   Egroups[i].location = thistemp;
                   $('#EM' + i).animate({
                       left: $("#space" + thistemp).data("left") + 'px'
                       , top: $("#space" + thistemp).data("top") + 'px'
                   });
               }
               if (Egroups[i].location === 2 & nomove(3) === false && Egroups[i].hasmoved === false) {
                   Egroups[i].hasmoved = true;
                   if (direction === 1) {
                       thistemp = 3;
                   }
                   else {
                       thistemp = 3
                   }
                   Egroups[i].location = thistemp;
                   $('#EM' + i).animate({
                       left: $("#space" + thistemp).data("left") + 'px'
                       , top: $("#space" + thistemp).data("top") + 'px'
                   });
               }
               if (Egroups[i].location === 3 && Egroups[i].hasmoved === false) {
                   Egroups[i].hasmoved = true;
                   if (checkcrystal(3) >= 0 && nomove(26) == false) {
                       thistemp = 26;
                   }
                   else if (checkcrystal(27) > 0 && nomove(27)) {
                       thistemp = 27;
                   }
                   else {
                       if (nomove(4) === false) {
                           thistemp = 4
                       }
                   }
                   Egroups[i].location = thistemp;
                   $('#EM' + i).animate({
                       left: $("#space" + thistemp).data("left") + 'px'
                       , top: $("#space" + thistemp).data("top") + 'px'
                   });
               }
               if (Egroups[i].location === 4 && Egroups[i].hasmoved === false) {
                   Egroups[i].hasmoved = true;
                   if (checkcrystal(4) >= 0 && nomove(27) == false) {
                       thistemp = 27;
                   }
                   else if (checkcrystal(28) > 0 && nomove(28)) {
                       thistemp = 28;
                   }
                   else {
                       if (nomove(5) === false) {
                           thistemp = 5
                       }
                   }
                   Egroups[i].location = thistemp;
                   $('#EM' + i).animate({
                       left: $("#space" + thistemp).data("left") + 'px'
                       , top: $("#space" + thistemp).data("top") + 'px'
                   });
               }
               if (Egroups[i].location === 5 && Egroups[i].hasmoved === false) {
                   Egroups[i].hasmoved = true;
                   if (checkcrystal(5) >= 0 && nomove(28) == false) {
                       thistemp = 28;
                   }
                   else if (checkcrystal(29) > 0 && nomove(29)) {
                       thistemp = 29;
                   }
                   else {
                       if (nomove(6) === false) {
                           thistemp = 6;
                       }
                   }
                   Egroups[i].location = thistemp;
                   $('#EM' + i).animate({
                       left: $("#space" + thistemp).data("left") + 'px'
                       , top: $("#space" + thistemp).data("top") + 'px'
                   });
               }
               if (Egroups[i].location === 6 && Egroups[i].hasmoved === false) {
                   Egroups[i].hasmoved = true;
                   if (checkcrystal(6) >= 0 && nomove(29) == false) {
                       thistemp = 29;
                   }
                   else {
                       continue;
                   }
                   Egroups[i].location = thistemp;
                   $('#EM' + i).animate({
                       left: $("#space" + thistemp).data("left") + 'px'
                       , top: $("#space" + thistemp).data("top") + 'px'
                   });
               }
               if (Egroups[i].location === 7 & nomove(8) === false && Egroups[i].hasmoved === false) {
                   Egroups[i].hasmoved = true;
                   thistemp = 8
                   Egroups[i].location = thistemp;
                   $('#EM' + i).animate({
                       left: $("#space" + thistemp).data("left") + 'px'
                       , top: $("#space" + thistemp).data("top") + 'px'
                   });
               }
               if (Egroups[i].location === 8 & nomove(9) === false && Egroups[i].hasmoved === false) {
                   Egroups[i].hasmoved = true;
                   if (direction === 1) {
                       thistemp = 9;
                   }
                   else {
                       thistemp = 9
                   }
                   Egroups[i].location = thistemp;
                   $('#EM' + i).animate({
                       left: $("#space" + thistemp).data("left") + 'px'
                       , top: $("#space" + thistemp).data("top") + 'px'
                   });
               }
               if (Egroups[i].location === 9 && Egroups[i].hasmoved === false) {
                   Egroups[i].hasmoved = true;
                   if (checkcrystal(9) >= 0 && nomove(31) == false) {
                       thistemp = 31;
                   }
                   else if (checkcrystal(32) > 0 && nomove(32)) {
                       thistemp = 32;
                   }
                   else {
                       if (nomove(10) === false) {
                           thistemp = 10;
                       }
                   }
                   Egroups[i].location = thistemp;
                   $('#EM' + i).animate({
                       left: $("#space" + thistemp).data("left") + 'px'
                       , top: $("#space" + thistemp).data("top") + 'px'
                   });
               }
               if (Egroups[i].location === 10 && Egroups[i].hasmoved === false) {
                   Egroups[i].hasmoved = true;
                   if (checkcrystal(10) >= 0 && nomove(32) == false) {
                       thistemp = 32;
                   }
                   else if (checkcrystal(33) > 0 && nomove(33)) {
                       thistemp = 33;
                   }
                   else {
                       if (nomove(11) === false) {
                           thistemp = 11;
                       }
                   }
                   Egroups[i].location = thistemp;
                   $('#EM' + i).animate({
                       left: $("#space" + thistemp).data("left") + 'px'
                       , top: $("#space" + thistemp).data("top") + 'px'
                   });
               }
               if (Egroups[i].location === 11 && Egroups[i].hasmoved === false) {
                   Egroups[i].hasmoved = true;
                   if (checkcrystal(11) >= 0 && nomove(33) == false) {
                       thistemp = 33;
                   }
                   else if (checkcrystal(34) > 0 && nomove(34)) {
                       thistemp = 34;
                   }
                   else {
                       if (nomove(12) === false) {
                           thistemp = 12;
                       }
                   }
                   Egroups[i].location = thistemp;
                   $('#EM' + i).animate({
                       left: $("#space" + thistemp).data("left") + 'px'
                       , top: $("#space" + thistemp).data("top") + 'px'
                   });
               }
               if (Egroups[i].location === 12 && Egroups[i].hasmoved === false) {
                   Egroups[i].hasmoved = true;
                   if (checkcrystal(12) >= 0 && nomove(34) == false) {
                       thistemp = 34;
                   }
                   else {
                       continue;
                   }
                   Egroups[i].location = thistemp;
                   $('#EM' + i).animate({
                       left: $("#space" + thistemp).data("left") + 'px'
                       , top: $("#space" + thistemp).data("top") + 'px'
                   });
               }
               if (Egroups[i].location === 13 & nomove(14) === false && Egroups[i].hasmoved === false) {
                   Egroups[i].hasmoved = true;
                   thistemp = 14
                   Egroups[i].location = thistemp;
                   $('#EM' + i).animate({
                       left: $("#space" + thistemp).data("left") + 'px'
                       , top: $("#space" + thistemp).data("top") + 'px'
                   });
               }
               if (Egroups[i].location === 14 & nomove(15) === false && Egroups[i].hasmoved === false) {
                   Egroups[i].hasmoved = true;
                   if (direction === 1) {
                       thistemp = 15;
                   }
                   else {
                       thistemp = 15
                   }
                   Egroups[i].location = thistemp;
                   $('#EM' + i).animate({
                       left: $("#space" + thistemp).data("left") + 'px'
                       , top: $("#space" + thistemp).data("top") + 'px'
                   });
               }
               if (Egroups[i].location === 15 && Egroups[i].hasmoved === false) {
                   Egroups[i].hasmoved = true;
                   if (checkcrystal(15) >= 0 && nomove(37) == false) {
                       thistemp = 37;
                   }
                   else if (checkcrystal(38) > 0 && nomove(38)) {
                       thistemp = 38;
                   }
                   else {
                       if (nomove(16) === false) {
                           thistemp = 16;
                       }
                   }
                   Egroups[i].location = thistemp;
                   $('#EM' + i).animate({
                       left: $("#space" + thistemp).data("left") + 'px'
                       , top: $("#space" + thistemp).data("top") + 'px'
                   });
               }
               if (Egroups[i].location === 16 && Egroups[i].hasmoved === false) {
                   Egroups[i].hasmoved = true;
                   if (checkcrystal(16) >= 0 && nomove(38) == false) {
                       thistemp = 38;
                   }
                   else if (checkcrystal(39) > 0 && nomove(39)) {
                       thistemp = 39;
                   }
                   else {
                       if (nomove(17) === false) {
                           thistemp = 17;
                       }
                   }
                   Egroups[i].location = thistemp;
                   $('#EM' + i).animate({
                       left: $("#space" + thistemp).data("left") + 'px'
                       , top: $("#space" + thistemp).data("top") + 'px'
                   });
               }
               if (Egroups[i].location === 17 && Egroups[i].hasmoved === false) {
                   Egroups[i].hasmoved = true;
                   if (checkcrystal(17) >= 0 && nomove(39) == false) {
                       thistemp = 39;
                   }
                   else if (checkcrystal(40) > 0 && nomove(40)) {
                       thistemp = 40;
                   }
                   else {
                       if (nomove(18) === false) {
                           thistemp = 18;
                       }
                   }
                   Egroups[i].location = thistemp;
                   $('#EM' + i).animate({
                       left: $("#space" + thistemp).data("left") + 'px'
                       , top: $("#space" + thistemp).data("top") + 'px'
                   });
               }
               if (Egroups[i].location === 18 & nomove(20) === false && Egroups[i].hasmoved === false) {
                   Egroups[i].hasmoved = true;
                   if (checkcrystal(18) >= 0 && nomove(40) == false) {
                       thistemp = 40;
                   }
                   else {
                       continue;
                   }
                   Egroups[i].location = thistemp;
                   $('#EM' + i).animate({
                       left: $("#space" + thistemp).data("left") + 'px'
                       , top: $("#space" + thistemp).data("top") + 'px'
                   });
               }
               if (Egroups[i].location === 19 & nomove(20) === false && Egroups[i].hasmoved === false) {
                   Egroups[i].hasmoved = true;
                   if (direction === 1) {
                       thistemp = 20;
                   }
                   else {
                       thistemp = 20
                   }
                   Egroups[i].location = thistemp;
                   $('#EM' + i).animate({
                       left: $("#space" + thistemp).data("left") + 'px'
                       , top: $("#space" + thistemp).data("top") + 'px'
                   });
               }
               if (Egroups[i].location === 20 && Egroups[i].hasmoved === false) {
                   Egroups[i].hasmoved = true;
                   if (direction === 1) {
                       thistemp = 21;
                   }
                   else {
                       thistemp = 21
                   }
                   Egroups[i].location = thistemp;
                   $('#EM' + i).animate({
                       left: $("#space" + thistemp).data("left") + 'px'
                       , top: $("#space" + thistemp).data("top") + 'px'
                   });
               }
               if (Egroups[i].location === 21 && Egroups[i].hasmoved === false) {
                   Egroups[i].hasmoved = true;
                   if (checkcrystal(21) >= 0 && nomove(42) == false) {
                       thistemp = 42;
                   }
                   else if (checkcrystal(43) > 0 && nomove(43)) {
                       thistemp = 43;
                   }
                   else {
                       if (nomove(22) === false) {
                           thistemp = 22;
                       }
                   }
                   Egroups[i].location = thistemp;
                   $('#EM' + i).animate({
                       left: $("#space" + thistemp).data("left") + 'px'
                       , top: $("#space" + thistemp).data("top") + 'px'
                   });
               }
               if (Egroups[i].location === 22 && Egroups[i].hasmoved === false) {
                   Egroups[i].hasmoved = true;
                   if (checkcrystal(22) >= 0 && nomove(43) == false) {
                       thistemp = 43;
                   }
                   else if (checkcrystal(44) > 0 && nomove(44)) {
                       thistemp = 44;
                   }
                   else {
                       if (nomove(23) === false) {
                           thistemp = 23;
                       }
                   }
                   Egroups[i].location = thistemp;
                   $('#EM' + i).animate({
                       left: $("#space" + thistemp).data("left") + 'px'
                       , top: $("#space" + thistemp).data("top") + 'px'
                   });
               }
               if (Egroups[i].location === 23 && Egroups[i].hasmoved === false) {
                   Egroups[i].hasmoved = true;
                   if (checkcrystal(23) >= 0 && nomove(44) == false) {
                       thistemp = 44;
                   }
                   else if (checkcrystal(45) > 0) {
                       thistemp = 45;
                   }
                   else {
                       if (nomove(24) === false) {
                           thistemp = 24;
                       }
                   }
                   Egroups[i].location = thistemp;
                   $('#EM' + i).animate({
                       left: $("#space" + thistemp).data("left") + 'px'
                       , top: $("#space" + thistemp).data("top") + 'px'
                   });
               }
               if (Egroups[i].location === 24 && Egroups[i].hasmoved === false) {
                   Egroups[i].hasmoved = true;
                   if (checkcrystal(24) >= 0 && nomove(45) == false) {
                       thistemp = 45;
                   }
                   else {
                       continue;
                   }
                   Egroups[i].location = thistemp;
                   $('#EM' + i).animate({
                       left: $("#space" + thistemp).data("left") + 'px'
                       , top: $("#space" + thistemp).data("top") + 'px'
                   });
               }
               if (Egroups[i].location === 25 && Egroups[i].hasmoved === false) {}
               if (Egroups[i].location === 26 && Egroups[i].hasmoved === false) {
                   Egroups[i].hasmoved = true;
                   thistemp = 25;
                   checkcrystal(26)
                   Egroups[i].location = thistemp;
                   $('#EM' + i).animate({
                       left: $("#space" + thistemp).data("left") + 'px'
                       , top: $("#space" + thistemp).data("top") + 'px'
                   });
               }
               if (Egroups[i].location === 27 && Egroups[i].hasmoved === false) {
                   Egroups[i].hasmoved = true;
                   thistemp = 26;
                   checkcrystal(27)
                   Egroups[i].location = thistemp;
                   $('#EM' + i).animate({
                       left: $("#space" + thistemp).data("left") + 'px'
                       , top: $("#space" + thistemp).data("top") + 'px'
                   });
               }
               if (Egroups[i].location === 28 && Egroups[i].hasmoved === false) {
                   Egroups[i].hasmoved = true;
                   thistemp = 27;
                   checkcrystal(28)
                   Egroups[i].location = thistemp;
                   $('#EM' + i).animate({
                       left: $("#space" + thistemp).data("left") + 'px'
                       , top: $("#space" + thistemp).data("top") + 'px'
                   });
               }
               if (Egroups[i].location === 29 && Egroups[i].hasmoved === false) {
                   Egroups[i].hasmoved = true;
                   thistemp = 28;
                   checkcrystal(29)
                   Egroups[i].location = thistemp;
                   $('#EM' + i).animate({
                       left: $("#space" + thistemp).data("left") + 'px'
                       , top: $("#space" + thistemp).data("top") + 'px'
                   });
               }
               if (Egroups[i].location === 30 && Egroups[i].hasmoved === false) {}
               if (Egroups[i].location === 31 && Egroups[i].hasmoved === false) {
                   Egroups[i].hasmoved = true;
                   thistemp = 30;
                   checkcrystal(31)
                   Egroups[i].location = thistemp;
                   $('#EM' + i).animate({
                       left: $("#space" + thistemp).data("left") + 'px'
                       , top: $("#space" + thistemp).data("top") + 'px'
                   });
               }
               if (Egroups[i].location === 32 & nomove(31) === false && Egroups[i].hasmoved === false) {
                   Egroups[i].hasmoved = true;
                   thistemp = 31;
                   checkcrystal(32)
                   Egroups[i].location = thistemp;
                   $('#EM' + i).animate({
                       left: $("#space" + thistemp).data("left") + 'px'
                       , top: $("#space" + thistemp).data("top") + 'px'
                   });
               }
               if (Egroups[i].location === 33 & nomove(32) === false && Egroups[i].hasmoved === false) {
                   Egroups[i].hasmoved = true;
                   thistemp = 32;
                   checkcrystal(33)
                   Egroups[i].location = thistemp;
                   $('#EM' + i).animate({
                       left: $("#space" + thistemp).data("left") + 'px'
                       , top: $("#space" + thistemp).data("top") + 'px'
                   });
               }
               if (Egroups[i].location === 34 & nomove(33) === false && Egroups[i].hasmoved === false) {
                   Egroups[i].hasmoved = true;
                   thistemp = 33;
                   checkcrystal(34)
                   Egroups[i].location = thistemp;
                   $('#EM' + i).animate({
                       left: $("#space" + thistemp).data("left") + 'px'
                       , top: $("#space" + thistemp).data("top") + 'px'
                   });
               }
               if (Egroups[i].location === 36 && Egroups[i].hasmoved === false) {
                   Egroups[i].hasmoved = true;
                   thistemp = 35;
                   checkcrystal(36)
                   Egroups[i].location = thistemp;
                   $('#EM' + i).animate({
                       left: $("#space" + thistemp).data("left") + 'px'
                       , top: $("#space" + thistemp).data("top") + 'px'
                   });
               }
               if (Egroups[i].location === 37 && Egroups[i].hasmoved === false) {
                   Egroups[i].hasmoved = true;
                   thistemp = 36;
                   checkcrystal(37)
                   Egroups[i].location = thistemp;
                   $('#EM' + i).animate({
                       left: $("#space" + thistemp).data("left") + 'px'
                       , top: $("#space" + thistemp).data("top") + 'px'
                   });
               }
               if (Egroups[i].location === 38 & nomove(37) === false && Egroups[i].hasmoved === false) {
                   Egroups[i].hasmoved = true;
                   thistemp = 37;
                   checkcrystal(38)
                   Egroups[i].location = thistemp;
                   $('#EM' + i).animate({
                       left: $("#space" + thistemp).data("left") + 'px'
                       , top: $("#space" + thistemp).data("top") + 'px'
                   });
               }
               if (Egroups[i].location === 39 & nomove(38) === false && Egroups[i].hasmoved === false) {
                   Egroups[i].hasmoved = true;
                   thistemp = 38;
                   checkcrystal(39)
                   Egroups[i].location = thistemp;
                   $('#EM' + i).animate({
                       left: $("#space" + thistemp).data("left") + 'px'
                       , top: $("#space" + thistemp).data("top") + 'px'
                   });
               }
               if (Egroups[i].location === 40 & nomove(39) === false && Egroups[i].hasmoved === false) {
                   Egroups[i].hasmoved = true;
                   thistemp = 39;
                   checkcrystal(40)
                   Egroups[i].location = thistemp;
                   $('#EM' + i).animate({
                       left: $("#space" + thistemp).data("left") + 'px'
                       , top: $("#space" + thistemp).data("top") + 'px'
                   });
               }
               if (Egroups[i].location === 42 && Egroups[i].hasmoved === false) {
                   Egroups[i].hasmoved = true;
                   thistemp = 41;
                   checkcrystal(42)
                   Egroups[i].location = thistemp;
                   $('#EM' + i).animate({
                       left: $("#space" + thistemp).data("left") + 'px'
                       , top: $("#space" + thistemp).data("top") + 'px'
                   });
               }
               if (Egroups[i].location === 43 & nomove(42) === false && Egroups[i].hasmoved === false) {
                   Egroups[i].hasmoved = true;
                   thistemp = 42;
                   checkcrystal(43)
                   Egroups[i].location = thistemp;
                   $('#EM' + i).animate({
                       left: $("#space" + thistemp).data("left") + 'px'
                       , top: $("#space" + thistemp).data("top") + 'px'
                   });
               }
               if (Egroups[i].location === 44 & nomove(43) === false && Egroups[i].hasmoved === false) {
                   Egroups[i].hasmoved = true;
                   thistemp = 43;
                   checkcrystal(44)
                   Egroups[i].location = thistemp;
                   $('#EM' + i).animate({
                       left: $("#space" + thistemp).data("left") + 'px'
                       , top: $("#space" + thistemp).data("top") + 'px'
                   });
               }
               if (Egroups[i].location === 45 & nomove(44) === false && Egroups[i].hasmoved === false) {
                   Egroups[i].hasmoved = true;
                   thistemp = 44;
                   checkcrystal(45)
                   Egroups[i].location = thistemp;
                   $('#EM' + i).animate({
                       left: $("#space" + thistemp).data("left") + 'px'
                       , top: $("#space" + thistemp).data("top") + 'px'
                   });
               }
           }
           Egroups[i].curleft = $("#space" + thistemp).data("left");
           Egroups[i].curtop = $("#space" + thistemp).data("top");
           if (crystalnum > 0) {
               $('#C' + crystalnum).animate({
                   left: $("#space" + thistemp).data("left") - 40 + 'px'
                   , top: $("#space" + thistemp).data("top") + 'px'
               });
               $("#C" + crystalnum).data("top", $("#space" + thistemp).data("top")).data("left", $("#space" + thistemp).data("left")).data("location", thistemp)
           }
       }
       setTimeout(function () {
           for (var i = 1; i < Egroupindex; i++) {
               if (Egroups[i].location == 25 || Egroups[i].location == 30 || Egroups[i].location == 36 || Egroups[i].location == 41) {
                   $("#EM" + i).remove()
                   Egroups[i].location = -2;
               }
           }
           for (var i = 1; i < 17; i++) {
               if ($("#C" + i).data("location") == 25 || $("#C" + i).data("location") == 30 || $("#C" + i).data("location") == 36 || $("#C" + i).data("location") == 41) {
                   $("#C" + i).data("location", -1)
                   $("#C" + i).remove()
                   crystaldestroyed += 1;
                   $('.heading').remove();
                   $('#top').html("<h1 class = 'heading'>Turn: " + day + "/30</h1><span style='margin-left:40px'>Crystals Destroyed: " + crystaldestroyed + "/" + (14 - difflevel * 2) + "</span>");
                   if (crystaldestroyed > (10 - (difflevel * 2))) {
                       gameover();
                   }
               }
           }
       }, 1000)
   }

   function createbadguys() {
       //choose badguy
       var temp = Math.floor((Math.random() * 10) + 1);
       //choose starting location
       var baddielocation = Math.floor((Math.random() * 4) + 1);
       switch (baddielocation) {
       case 1:
           baddielocation = 1;
           break;
       case 2:
           baddielocation = 7;
           break;
       case 3:
           baddielocation = 13;
           break;
       case 4:
           baddielocation = 19;
           break;
       }
       if (day <= 10 && day >= 1) {
           switch (temp) {
           case 1:
           case 2:
               Eunits[newEindex()] = new Bat(curEindex, Egroupindex, difflevel);
               Egroups[Egroupindex] = new Enewgroup(Egroupindex, baddielocation, 200, 'Bat');
               break;
           case 3:
               Eunits[newEindex()] = new FireElemental(curEindex, Egroupindex, difflevel);
               Egroups[Egroupindex] = new Enewgroup(Egroupindex, baddielocation, 300, 'Fire Elemental');
               break;
           case 4:
           case 5:
               Eunits[newEindex()] = new Goblin(curEindex, Egroupindex, difflevel);
               Egroups[Egroupindex] = new Enewgroup(Egroupindex, baddielocation, 200, 'goblin');
               break;
           case 6:
               Eunits[newEindex()] = new FireElemental(curEindex, Egroupindex, difflevel);
               Eunits[newEindex()] = new Goblin(curEindex, Egroupindex, difflevel);
               Egroups[Egroupindex] = new Enewgroup(Egroupindex, baddielocation, 300, 'goblin');
               break;
           case 7:
               Eunits[newEindex()] = new Bat(curEindex, Egroupindex, difflevel);
               Eunits[newEindex()] = new Goblin(curEindex, Egroupindex, difflevel);
               Egroups[Egroupindex] = new Enewgroup(Egroupindex, baddielocation, 400, 'Bat');
               break;
           case 8:
               Eunits[newEindex()] = new Goblin(curEindex, Egroupindex, difflevel);
               Eunits[newEindex()] = new Goblin(curEindex, Egroupindex, difflevel);
               Egroups[Egroupindex] = new Enewgroup(Egroupindex, baddielocation, 400, 'goblin');
               break;
           case 9:
               Eunits[newEindex()] = new Goblin(curEindex, Egroupindex, difflevel);
               Eunits[newEindex()] = new Goblin(curEindex, Egroupindex, difflevel);
               Eunits[newEindex()] = new Goblin(curEindex, Egroupindex, difflevel);
               Egroups[Egroupindex] = new Enewgroup(Egroupindex, baddielocation, 500, 'goblin');
               break;
           case 10:
               Eunits[newEindex()] = new FireElemental(curEindex, Egroupindex, difflevel);
               Eunits[newEindex()] = new Goblin(curEindex, Egroupindex, difflevel);
               Eunits[newEindex()] = new FireElemental(curEindex, Egroupindex, difflevel);
               Egroups[Egroupindex] = new Enewgroup(Egroupindex, baddielocation, 500, 'Fire Elemental');
               break;
           }
       }
       if (day < 20 && day > 10) {
           switch (temp) {
           case 1:
           case 2:
               Eunits[newEindex()] = new Bat(curEindex, Egroupindex, difflevel);
               Eunits[newEindex()] = new Bat(curEindex, Egroupindex, difflevel);
               Egroups[Egroupindex] = new Enewgroup(Egroupindex, baddielocation, 200, 'Bat');
               break;
           case 3:
               Eunits[newEindex()] = new Goblin(curEindex, Egroupindex, difflevel);
               Eunits[newEindex()] = new Goblin(curEindex, Egroupindex, difflevel);
               Egroups[Egroupindex] = new Enewgroup(Egroupindex, baddielocation, 200, 'goblin');
               break;
           case 4:
               Eunits[newEindex()] = new Goblin(curEindex, Egroupindex, difflevel);
               Eunits[newEindex()] = new FireElemental(curEindex, Egroupindex, difflevel);
               Egroups[Egroupindex] = new Enewgroup(Egroupindex, baddielocation, 300, 'Fire Elemental');
               break;
           case 5:
               Eunits[newEindex()] = new FireElemental(curEindex, Egroupindex, difflevel);
               Eunits[newEindex()] = new Goblin(curEindex, Egroupindex, difflevel);
               Eunits[newEindex()] = new FireElemental(curEindex, Egroupindex, difflevel);
               Egroups[Egroupindex] = new Enewgroup(Egroupindex, baddielocation, 400, 'Fire Elemental');
               break;
           case 6:
               Eunits[newEindex()] = new Warrior(curEindex, Egroupindex, difflevel);
               Eunits[newEindex()] = new Warrior(curEindex, Egroupindex, difflevel);
               Egroups[Egroupindex] = new Enewgroup(Egroupindex, baddielocation, 500, 'warrior');
               break;
           case 7:
               Eunits[newEindex()] = new FireElemental(curEindex, Egroupindex, difflevel);
               Eunits[newEindex()] = new Warrior(curEindex, Egroupindex, difflevel);
               Eunits[newEindex()] = new FireElemental(curEindex, Egroupindex, difflevel);
               Egroups[Egroupindex] = new Enewgroup(Egroupindex, baddielocation, 600, 'Fire Elemental');
               break;
           case 8:
               Eunits[newEindex()] = new Goblin(curEindex, Egroupindex, difflevel);
               Eunits[newEindex()] = new Warrior(curEindex, Egroupindex, difflevel);
               Eunits[newEindex()] = new Goblin(curEindex, Egroupindex, difflevel);
               Egroups[Egroupindex] = new Enewgroup(Egroupindex, baddielocation, 500, 'warrior');
               break;
           case 9:
               Eunits[newEindex()] = new Bat(curEindex, Egroupindex, difflevel);
               Eunits[newEindex()] = new Warrior(curEindex, Egroupindex, difflevel);
               Eunits[newEindex()] = new Bat(curEindex, Egroupindex, difflevel);
               Egroups[Egroupindex] = new Enewgroup(Egroupindex, baddielocation, 400, 'Bat');
               break;
           case 10:
               Eunits[newEindex()] = new Warrior(curEindex, Egroupindex, difflevel);
               Eunits[newEindex()] = new Spitter(curEindex, Egroupindex, difflevel);
               Eunits[newEindex()] = new Warrior(curEindex, Egroupindex, difflevel);
               Egroups[Egroupindex] = new Enewgroup(Egroupindex, baddielocation, 600, 'warrior');
               break;
           }
       }
       if (day < 30 && day >= 20) {
           switch (temp) {
           case 1:
           case 2:
               Eunits[newEindex()] = new Bat(curEindex, Egroupindex, difflevel);
               Eunits[newEindex()] = new Bat(curEindex, Egroupindex, difflevel);
               Egroups[Egroupindex] = new Enewgroup(Egroupindex, baddielocation, 200, 'Bat');
               break;
           case 3:
               Eunits[newEindex()] = new Spitter(curEindex, Egroupindex, difflevel);
               Eunits[newEindex()] = new Spitter(curEindex, Egroupindex, difflevel);
               Egroups[Egroupindex] = new Enewgroup(Egroupindex, baddielocation, 200, 'Spitter');
               break;
           case 4:
               Eunits[newEindex()] = new Spitter(curEindex, Egroupindex, difflevel);
               Eunits[newEindex()] = new Flamewraith(curEindex, Egroupindex, difflevel);
               Egroups[Egroupindex] = new Enewgroup(Egroupindex, baddielocation, 300, 'Spitter');
               break;
           case 5:
               Eunits[newEindex()] = new Spitter(curEindex, Egroupindex, difflevel);
               Eunits[newEindex()] = new Warrior(curEindex, Egroupindex, difflevel);
               Eunits[newEindex()] = new Spitter(curEindex, Egroupindex, difflevel);
               Egroups[Egroupindex] = new Enewgroup(Egroupindex, baddielocation, 400, 'Spitter');
               break;
           case 6:
               Eunits[newEindex()] = new Flamewraith(curEindex, Egroupindex, difflevel);
               Eunits[newEindex()] = new Warrior(curEindex, Egroupindex, difflevel);
               Eunits[newEindex()] = new Flamewraith(curEindex, Egroupindex, difflevel);
               Egroups[Egroupindex] = new Enewgroup(Egroupindex, baddielocation, 400, 'flamewraith');
               break;
           case 7:
               Eunits[newEindex()] = new Goblin(curEindex, Egroupindex, difflevel);
               Eunits[newEindex()] = new Bat(curEindex, Egroupindex, difflevel);
               Eunits[newEindex()] = new Goblin(curEindex, Egroupindex, difflevel);
               Eunits[newEindex()] = new Bat(curEindex, Egroupindex, difflevel);
               Eunits[newEindex()] = new Goblin(curEindex, Egroupindex, difflevel);
               Egroups[Egroupindex] = new Enewgroup(Egroupindex, baddielocation, 400, 'Bat');
               break;
           case 8:
               Eunits[newEindex()] = new Bat(curEindex, Egroupindex, difflevel);
               Eunits[newEindex()] = new Bat(curEindex, Egroupindex, difflevel);
               Eunits[newEindex()] = new Warrior(curEindex, Egroupindex, difflevel);
               Eunits[newEindex()] = new Bat(curEindex, Egroupindex, difflevel);
               Eunits[newEindex()] = new Bat(curEindex, Egroupindex, difflevel);
               Egroups[Egroupindex] = new Enewgroup(Egroupindex, baddielocation, 500, 'Bat');
               break;
           case 9:
               Eunits[newEindex()] = new Warrior(curEindex, Egroupindex, difflevel);
               Eunits[newEindex()] = new Flamewraith(curEindex, Egroupindex, difflevel);
               Egroups[Egroupindex] = new Enewgroup(Egroupindex, baddielocation, 400, 'flamewraith');
               break;
           case 10:
               Eunits[newEindex()] = new Zombie(curEindex, Egroupindex, difflevel);
               Eunits[newEindex()] = new Necromancer(curEindex, Egroupindex, difflevel);
               Eunits[newEindex()] = new Zombie(curEindex, Egroupindex, difflevel);
               Egroups[Egroupindex] = new Enewgroup(Egroupindex, baddielocation, 400, 'Necromancer');
               break;
           }
       }
       if (day == 30) {
           winbattle();
       }
       clickEicon();
       Egroupinfo();
   }

   function Enewgroup(index, location, experience, picture) {
       var thisleft = 0;
       var thistop = 0;
       if (location === 1) {
           thisleft = $("#space1").css("left");
           thistop = $("#space1").css("top");
       }
       if (location === 7) {
           thisleft = $("#space7").css("left");;
           thistop = $("#space7").css("top");;
       }
       if (location === 13) {
           thisleft = $("#space13").css("left");;
           thistop = $("#space13").css("top");;
       }
       if (location === 19) {
           thisleft = $("#space19").css("left");;
           thistop = $("#space19").css("top");;
       }
       this.index = index;
       this.location = location;
       this.experience = experience;
       this.hasmoved = false;
       this.curleft = thisleft;
       this.curtop = thistop;
       this.picture = picture;
       $('#background').append('<img src="../Pictures/Enemies/' + picture + '.gif" class="Eicon" id="EM' + Egroupindex + '" style="left: ' + thisleft + '; top:' + thistop + '" />');
       Egroupindex += 1;
   }
   //towns and castles
   function set_area_background(i) {
       var backgroundpic = "";
       backgroundpic = "../Pictures/backgroundpics/seige2background.png";
       return backgroundpic;
   }

   function indiv_newday() {
       $('.heading').remove();
       $('#top').html("<h1 class = 'heading'>Turn: " + day + "/30</h1><span style='margin-left:40px'>Crystals Destroyed: " + crystaldestroyed + "/" + (10 - difflevel * 2) + "</span>");
       if (day >= 30) {
           winbattle("../21/beforecells.html")
       }
   }

   function indiv_gotocapitol() {
       $("#TEXT").empty().append('<div class="gotobutton" id = "gotobarracks"><p>BARRACKS</p></div><div class="gotobutton" id = "gotobrewery"><p>BREWERY</p></div>');
   }

   function levelresearch() {}

   function enemyconquer() {}
   $(window).load(function () {
       changesong("01/NBattle.mp3")
       containaccessories();
       saving("20")
       $('#background').append('<img src="pics/diamond.gif" class="crystal" id="C1" style="left:65px; top:220px" />');
       $('#background').append('<img src="pics/diamond.gif" class="crystal" id="C2" style="left:65px; top:280px" />');
       $('#background').append('<img src="pics/diamond.gif" class="crystal" id="C3" style="left:65px; top:340px" />');
       $('#background').append('<img src="pics/diamond.gif" class="crystal" id="C4" style="left:65px; top:400px" />');
       $("#C1").data("top", 220).data("left", 65).data("index", 1).data("location", 3)
       $("#C2").data("top", 280).data("left", 65).data("index", 2).data("location", 4)
       $("#C3").data("top", 340).data("left", 65).data("index", 3).data("location", 5)
       $("#C4").data("top", 400).data("left", 65).data("index", 4).data("location", 6)
       $('#background').append('<img src="pics/diamond.gif" class="crystal" id="C5" style="left:180px; top:220px" />');
       $('#background').append('<img src="pics/diamond.gif" class="crystal" id="C6" style="left:180px; top:280px" />');
       $('#background').append('<img src="pics/diamond.gif" class="crystal" id="C7" style="left:180px; top:340px" />');
       $('#background').append('<img src="pics/diamond.gif" class="crystal" id="C8" style="left:180px; top:400px" />');
       $("#C5").data("top", 220).data("left", 180).data("index", 5).data("location", 9)
       $("#C6").data("top", 280).data("left", 180).data("index", 6).data("location", 10)
       $("#C7").data("top", 340).data("left", 180).data("index", 7).data("location", 11)
       $("#C8").data("top", 400).data("left", 180).data("index", 8).data("location", 12)
       $('#background').append('<img src="pics/diamond.gif" class="crystal" id="C9" style="left:305px; top:220px" />');
       $('#background').append('<img src="pics/diamond.gif" class="crystal" id="C10" style="left:305px; top:280px" />');
       $('#background').append('<img src="pics/diamond.gif" class="crystal" id="C11" style="left:305px; top:340px" />');
       $('#background').append('<img src="pics/diamond.gif" class="crystal" id="C12" style="left:305px; top:400px" />');
       $("#C9").data("top", 220).data("left", 305).data("index", 9).data("location", 15)
       $("#C10").data("top", 280).data("left", 305).data("index", 10).data("location", 16)
       $("#C11").data("top", 340).data("left", 305).data("index", 11).data("location", 17)
       $("#C12").data("top", 400).data("left", 305).data("index", 12).data("location", 18)
       $('#background').append('<img src="pics/diamond.gif" class="crystal" id="C13" style="left:405px; top:220px" />');
       $('#background').append('<img src="pics/diamond.gif" class="crystal" id="C14" style="left:405px; top:280px" />');
       $('#background').append('<img src="pics/diamond.gif" class="crystal" id="C15" style="left:405px; top:340px" />');
       $('#background').append('<img src="pics/diamond.gif" class="crystal" id="C16" style="left:405px; top:400px" />');
       $("#C13").data("top", 220).data("left", 405).data("index", 13).data("location", 21)
       $("#C14").data("top", 280).data("left", 405).data("index", 14).data("location", 22)
       $("#C15").data("top", 340).data("left", 405).data("index", 15).data("location", 23)
       $("#C16").data("top", 400).data("left", 405).data("index", 16).data("location", 24)
   });