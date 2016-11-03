/**
 * Created by Jake on 1/22/2015.
 */
$(document).ready(function() {
    //Start window

    $('.starts').click(function(){
        window.location.href = 'Home_game.html';
    });
    $('.tutorial').click(function(){
        window.location.href = 'Tutorial_game.html';
    });
    $('.starts').mouseenter(function(){
        console.log("how");
        $(this).addClass("enlarge");
    });
    $('.tutorial').mouseenter(function(){
        $(this).addClass("enlarge");
    });
    $('.starts').mouseleave(function(){
        $(this).removeClass("enlarge");
    });
    $('.tutorial').mouseleave(function(){
        $(this).removeClass("enlarge");
    });




    //varibles
    var addLeft=65;
    var addTop=75;
    var vert = 1;
    var horz = 1;
    var selectedunit = "";
    var selectedindex= 0;
    var Unit=new Array();
    var selectedaction = "";
    var starting = true;
    var Arrow =new Audio();
    var musicchanged=false;
    Arrow.src="sounds/Arrow.wav";
    var Fire =new Audio();
    Fire.src="sounds/Fire.wav";
    var Lightning =new Audio();
    Lightning.src="sounds/Lightning.wav";
    var Shield =new Audio();
    Shield.src="sounds/Shield.wav";
    var Sword =new Audio();
    Sword.src="sounds/Sword.wav";
    Arrow.src="sounds/Arrow.wav";
    var Disrupt =new Audio();
    Disrupt.src="sounds/Disrupt.mp3";
    var Lose =new Audio();
    Lose.src="sounds/Lose.mp3";
    var Paralyzesound =new Audio();
    Paralyzesound.src="sounds/Paralyze.mp3";
    var Specialsound =new Audio();
    Specialsound.src="sounds/Special.mp3";
    var Win =new Audio();
    Win.src="sounds/Win.mp3";
    var Turnsound =new Audio();
    Turnsound.src="sounds/Turn.mp3";
    var Chargesound =new Audio();
    Chargesound.src="sounds/Charge.mp3";
    var curmusic=new Audio();

        curmusic.src = "sounds/music-start.mp3";

    //music
    curmusic.loop=true;

        curmusic.play();


    //seesion stored level
    var level = 1;
    if (sessionStorage.getItem("level")>0 && sessionStorage.getItem("level")<11){
       level = sessionStorage.getItem("level");
    } else {var level=1}






    //disable rightclick window
    document.oncontextmenu = function() {return false;};
function startinggame() {

    //create level on top
    $('#top').empty();
    $('#top').append("<h1 class = 'heading'>Level: " + level + "</h1>");
    //create enemies based on level
    $('Eunits').remove();
    if (level===2){
        Unit[3]=new ESoldier(4);
        Unit[4]=new ESoldier(5);
        Unit[5]=new EGuard(6);
    } else if(level===3){
        Unit[3]=new ERouge(4);
        Unit[4]=new ETemplar(5);
        Unit[5]=new ERouge(6);
    } else if(level===4){
        Unit[3]=new EWizard(4);
        Unit[4]=new EWizard(5);
        Unit[5]=new EWizard(6);
    }else if(level===5){
        Unit[3]=new ERouge(4);
        Unit[4]=new ESoldier(5);
        Unit[5]=new ERouge(6);
        Unit[6]=new ERouge(7);
    }else if(level===6){
        Unit[3]=new EMage(4);
        Unit[4]=new ESoldier(5);
        Unit[5]=new ESoldier(6);
        Unit[6]=new EMage(7);
    }else if(level===7){
        Unit[3]=new ERouge(4);
        Unit[4]=new EMage(5);
        Unit[5]=new EMage(6);
        Unit[6]=new ERouge(7);
    }else if(level===8){
        Unit[3]=new ETemplar(4);
        Unit[4]=new ESoldier(5);
        Unit[5]=new ESoldier(6);
        Unit[6]=new ETemplar(7);
    }else if(level===9){
        Unit[3]=new EGuard(4);
        Unit[4]=new EGuard(5);
        Unit[5]=new EGuard(6);
        Unit[6]=new EGuard(7);
    }else if(level===10){
        Unit[3]=new EMage(3);
        Unit[4]=new ESoldier(4);
        Unit[5]=new ERouge(5);
        Unit[6]=new EGuard(6);
        Unit[7]=new EWizard(7);
    }else if(level===11){
        $('#top').empty();
        $('#TEXT').empty();
        $('#TEXT').append("You WON! I'll come up with more waves later.")
    }

    //starting stuff
    $('.actions').empty();
    starting=true;
    selectedindex=0;
    $('.unit').remove();

    //select enemy unit's stats
    $('.Eunit').click(function(){
        //gives stats on selected unit
        for (var i = 3; i < 50; i++) {
            if (Unit[i].name === this.name) {
                $('#TEXT').empty();
                $('#TEXT').append("<ul>Stats for " + Unit[i].name + " <li>Type: " + Unit[i].type + "</li> <li>Attack: " + Unit[i].attack + "</li> <li>Defense: " + Unit[i].defense + "</li><li>Resistance: " + Unit[i].resistance + "</li><li>Charge: " + Unit[i].charge + "</li><li>Health: " + Unit[i].health + "</li></ul>");
                var curtype = Unit[i].type;
            }
        }
    });


    //create Starting icons
    $('.actions').append("<img class='startingicon' id='startingSoldier'  src='gamepictures/soldier.jpg'/>");
    $('.actions').append("<img class='startingicon' id='startingTemplar' src='gamepictures/templar.jpg'/>");
    $('.actions').append("<img class='startingicon' id='startingRouge' src='gamepictures/rouge.jpg'/>");
    $('.actions').append("<img class='startingicon' id='startingGuard' src='gamepictures/guard.jpg'/>");
    $('.actions').append("<img class='startingicon' id='startingWizard' src='gamepictures/wizard.jpg'/>");
    $('.actions').append("<img class='startingicon' id='startingMage' src='gamepictures/mage.jpg'/>");
    //hover over starting icons to get stats
    $('#startingSoldier').mouseenter(function () {
        $('#TEXT').empty();
        $('#TEXT').append("<ul>Stats for a Soldier<li>Attack: 2 physical damage</li> <li>Defense: 2</li><li>Resistance:0</li><li>Health: 5</li><li>Special: Has an attack that does 4, but will lose it's next turn</li></ul>");
    });
    $('#startingWizard').mouseenter(function () {
        $('#TEXT').empty();
        $('#TEXT').append("<ul>Stats for a Wizard<li>Defense: 0</li><li>Resistance:3</li><li>Health: 3</li><li>Magic: To use it's magic, it must charge. One charge per turn. Can target any enemy regardless of location.</li><li>Lightning: Deals 5 magic damage. Costs 3 charge.</li><li>Disrupt: Drains another wizard's or mage's charge. Costs 2 charge.</li></ul>");
    });
    $('#startingRouge').mouseenter(function () {
        $('#TEXT').empty();
        $('#TEXT').append("<ul>Stats for a Rouge<li>Attack: 1 physical damage</li><li>Defense: 1</li><li>Resistance:1</li><li>Health: 4</li><li>Range: It can attack any enemy regardless of location</li><li>Paralyze: Can paralyze an enemy for one turn. Can't use this ability again for three turns.</li></ul>");
    });
    $('#startingGuard').mouseenter(function () {
        $('#TEXT').empty();
        $('#TEXT').append("<ul>Stats for a Guard<li>Attack: 1 physical damage</li><li>Defense: 2</li><li>Resistance:2</li><li>Health: 5</li></ul>");
    });
    $('#startingMage').mouseenter(function () {
        $('#TEXT').empty();
        $('#TEXT').append("<ul>Stats for a Mage<li>Defense: 1</li><li>Resistance:1</li><li>Health: 4</li><li>Magic: To use it's magic, it must charge. One charge per turn. Can target enemies within two spaces from itself.</li><li>Fire: Deals 3 magic damage. Costs 1 charge.</li></ul>");
    });
    $('#startingTemplar').mouseenter(function () {
        $('#TEXT').empty();
        $('#TEXT').append("<ul>Stats for a Templar<li>Attack: 2 physical damage</li> <li>Defense: 0</li><li>Resistance:3</li><li>Health: 5</li><li>Special: Can give an ally a permanent resistance boost of 2. Once per wave.</li></ul>");
    });
    $('.startingicon').mouseleave(function () {
        $('#TEXT').empty();
    });

    //create units by clicking starting icons
    $('.startingicon').click(function(){
        //create unit based on what was clicked
        if (selectedindex<3) {

            switch(this.id) {
                case "startingSoldier":
                    Unit[selectedindex] = new Soldier(selectedindex);
                    break;
                case "startingTemplar":
                    Unit[selectedindex] = new Templar(selectedindex);
                    break;
                case "startingRouge":
                    Unit[selectedindex] = new Rouge(selectedindex);
                    break;
                case "startingGuard":
                    Unit[selectedindex] = new Guard(selectedindex);
                    break;
                case "startingWizard":
                    Unit[selectedindex] = new Wizard(selectedindex);
                    break;
                case "startingMage":
                    Unit[selectedindex] = new Mage(selectedindex);
                    break;
            }
            selectedindex += 1;}
        //stops after three are chosen
        if (selectedindex>=3){
            $('.startingicon').hide();
            starting=false;
            if (musicchanged===false) {
                curmusic.src = "sounds/music-start.mp3";
                curmusic.src = "sounds/music-main game.mp3";
                curmusic.play();
                musicchanged=true;
            }
        }

        //select units//give stats//click button event
        $('.unit').click(function(){
            if (starting===false) {

                selectedunit = this.name;
                $('*').removeClass("selectedUnit");
                $(this).addClass("selectedUnit");
                //gives stats on selected unit/shows action buttons
                var curtype = "";
                for (var i = 0; i < Unit.length; i++) {
                    if (Unit[i].name === this.name) {
                        selectedindex = i;
                        $('#TEXT').empty();
                        $('#TEXT').append("<ul>Stats for " + Unit[i].name + " <li>Type: " + Unit[i].type + "</li> <li>Attack: " + Unit[i].attack + "</li> <li>Defense: " + Unit[i].defense + "</li><li>Resistance: " + Unit[i].resistance + "</li><li>Charge: " + Unit[i].charge + "</li><li>Health: " + Unit[i].health + "</li></ul>")
                        curtype = Unit[i].type;
                    }//end of if statement
                }//end of for statement
                //show actions buttons
                switch (curtype) {
                    case "Soldier":
                        $('.actions').empty();
                        $('.actions').append("<div class = 'button' id = 'soldierAttack'>Attack</div> <div class = 'button' id='soldierSpecial'>Special</div><div class = 'button' id='PassTurn'>PassTurn</div>");
                        break;
                    case "Wizard":
                        $('.actions').empty();
                        $('.actions').append("<div class = 'button' id='wizardCharge'>Charge</div><div class = 'button' id='wizardLightning'>Lightning(3)</div><div class = 'button' id='wizardDisrupt'>Disrupt(2)</div><div class = 'button' id='PassTurn'>PassTurn</div>");
                        break;
                    case "Rouge":
                        $('.actions').empty();
                        $('.actions').append("<div class = 'button' id = 'rougeAttack'>Attack</div> <div class = 'button' id='rougeParalyze'>Paralyze</div><div class = 'button' id='PassTurn'>PassTurn</div>");
                        break;
                    case "Templar":
                        $('.actions').empty();
                        $('.actions').append("<div class = 'button' id = 'templarAttack'>Attack</div> <div class = 'button' id='templarShield'>Shield</div><div class = 'button' id='PassTurn'>PassTurn</div>");
                        break;
                    case "Guard":
                        $('.actions').empty();
                        $('.actions').append("<div class = 'button' id='guardAttack'>Attack</div><div class = 'button' id='PassTurn'>PassTurn</div>");
                        break;
                    case "Mage":
                        $('.actions').empty();
                        $('.actions').append("<div class = 'button' id = 'mageCharge'>Charge</div> <div class = 'button' id='mageFire'>Fire</div><div class = 'button' id='PassTurn'>PassTurn</div>");
                        break;
                }//end of switch

                //click button event
                $('.button').click(function () {
                    $("#TEXT").empty();
                    $('*').removeClass('highlight');
                    $(this).addClass('highlight');
                    selectedaction = $(this).attr('id');
                    if (selectedaction === "mageCharge") {
                        if (Unit[selectedindex].usedaction === true) {
                            $("#TEXT").append("<p>" + Unit[selectedindex].name + " has already used an action this turn</p>");
                            Break;
                        }
                        Unit[selectedindex].charge += 1;
                        $('.selectedUnit').effect("pulsate");
                        Chargesound.play();
                        $("#TEXT").append("<p>" + Unit[selectedindex].name + "'s charge increased to  " + Unit[selectedindex].charge + "\n</p>");
                        Unit[selectedindex].usedaction = true;
                        Break;
                    }
                    if (selectedaction === "wizardCharge") {
                        if (Unit[selectedindex].usedaction === true) {
                            $("#TEXT").append("<p>" + Unit[selectedindex].name + " has already used an action this turn</p>");
                            Break;
                        }
                        Unit[selectedindex].charge += 1;
                        $('.selectedUnit').effect("pulsate");
                        Chargesound.play();
                        $("#TEXT").append("<p>" + Unit[selectedindex].name + "'s charge increased to  " + Unit[selectedindex].charge + "\n</p>");
                        Unit[selectedindex].usedaction = true;
                        Break;
                    }
                    if (selectedaction === "PassTurn") {
                        Unit[0].aparalyzed=false;
                        Unit[1].aparalyzed=false;
                        Unit[2].aparalyzed=false;
                        //reset allies
                        for (var i = 0; i < 3; i++) {
                            Unit[i].moved = false;
                            Unit[i].usedaction = false;
                            if ((Unit[i].type === "Soldier" && Unit[i].usedspecial === true)) {
                                Unit[i].usedspecial = false;
                                Unit[i].moved = true;
                                Unit[i].usedaction = true;
                                $("#TEXT").append("<p>" + Unit[i].name + " is exhausted from his special and loses this turn</p>");
                            }
                            if ((Unit[i].type === "Rouge" && Unit[i].usedparalyze < 3)) {
                                Unit[i].usedparalyze += 1;
                            }
                            $('*').removeClass('highlight');
                        }
                        $('.actions').empty();


                        // Enemy's turns
                        for (var y = 3; y < Unit.length; y++) {
                            Unit[y].moved=false;
                            if(Unit[y].paralyzed===false) {
                                if (Unit[y].alive === true) {
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
                                    var enemyonright2index = "";
                                    var enemyontop2index = "";
                                    var enemyonleft2index = "";
                                    var enemyonbottom2index = "";
                                    var enemyonrightindex = "";
                                    var enemyontopindex = "";
                                    var enemyonleftindex = "";
                                    var enemyonbottomindex = "";
                                    var attackthisone = "";
                                    var row1empty=true;
                                    var row2empty=true;
                                    var row3empty=true;
                                    var row4empty=true;
                                    var row5empty=true;

                                    //determine enemy's image
                                    $('*').removeClass("selected");
                                    if (Unit[y].type === "Soldier") {
                                        switch (Unit[y].index) {
                                            case 3:
                                                $(Bane).addClass("selected");
                                                break;
                                            case 4:
                                                $(Thrasher).addClass("selected");
                                                break;
                                            case 5:
                                                $(Chainer).addClass("selected");
                                                break;
                                            case 6:
                                                $(Bulk).addClass("selected");
                                                break;
                                            case 7:
                                                $(Deathcheck).addClass("selected");
                                                break;
                                        }
                                    }
                                    if (Unit[y].type === "Wizard") {
                                        switch (Unit[y].index) {
                                            case 3:
                                                $(Mordoc).addClass("selected");
                                                break;
                                            case 4:
                                                $(Pine).addClass("selected");
                                                break;
                                            case 5:
                                                $(Sidius).addClass("selected");
                                                break;
                                            case 6:
                                                $(Torment).addClass("selected");
                                                break;
                                            case 7:
                                                $(Finale).addClass("selected");
                                                break;
                                        }
                                    }
                                    if (Unit[y].type === "Rouge") {
                                        switch (Unit[y].index) {
                                            case 3:
                                                $(Shadow).addClass("selected");
                                                break;
                                            case 4:
                                                $(Darkwater).addClass("selected");
                                                break;
                                            case 5:
                                                $(Nightwatch).addClass("selected");
                                                break;
                                            case 6:
                                                $(Knives).addClass("selected");
                                                break;
                                            case 7:
                                                $(Wounds).addClass("selected");
                                                break;
                                        }
                                    }
                                    if (Unit[y].type === "Guard") {
                                        switch (Unit[y].index) {
                                            case 3:
                                                $(Bull).addClass("selected");
                                                break;
                                            case 4:
                                                $(Donkey).addClass("selected");
                                                break;
                                            case 5:
                                                $(Mule).addClass("selected");
                                                break;
                                            case 6:
                                                $(Ox).addClass("selected");
                                                break;
                                            case 7:
                                                $(Horse).addClass("selected");
                                                break;
                                        }
                                    }
                                    if (Unit[y].type === "Templar") {
                                        switch (Unit[y].index) {
                                            case 3:
                                                $(Gallows).addClass("selected");
                                                break;
                                            case 4:
                                                $(Guillotine).addClass("selected");
                                                break;
                                            case 5:
                                                $(Plunge).addClass("selected");
                                                break;
                                            case 6:
                                                $(Electrocute).addClass("selected");
                                                break;
                                            case 7:
                                                $(Sickness).addClass("selected");
                                                break;
                                        }
                                    }
                                    if (Unit[y].type === "Mage") {
                                        switch (Unit[y].index) {
                                            case 3:
                                                $(Mystery).addClass("selected");
                                                break;
                                            case 4:
                                                $(Enigma).addClass("selected");
                                                break;
                                            case 5:
                                                $(Unknown).addClass("selected");
                                                break;
                                            case 6:
                                                $(Myth).addClass("selected");
                                                break;
                                            case 7:
                                                $(Legend).addClass("selected");
                                                break;
                                        }
                                    }

                                    //Determine if below is empty
                                    for (var x = 0; x < Unit.length; x++) {
                                        if ((((Unit[x].curtop - 100) === Unit[y].curtop) && (Unit[x].curleft === Unit[y].curleft)) || Unit[y].curtop > 450) {
                                            belowempty = false;
                                        }
                                    }
                                    //Determine if above is empty
                                    for (var x = 0; x < Unit.length; x++) {
                                        if ((((Unit[x].curtop + 100) === Unit[y].curtop) && (Unit[x].curleft === Unit[y].curleft)) || Unit[y].curtop < 100) {
                                            upempty = false;
                                        }
                                    }
                                    //Determine if left is empty
                                    for (var x = 0; x < Unit.length; x++) {
                                        if ((((Unit[x].curleft + 100) === Unit[y].curleft) && (Unit[x].curtop === Unit[y].curtop)) || Unit[y].curleft < 100) {
                                            leftempty = false;
                                        }
                                    }
                                    //Determine if right is empty
                                    for (var x = 0; x < Unit.length; x++) {
                                        if ((((Unit[x].curleft - 100) === Unit[y].curleft) && (Unit[x].curtop === Unit[y].curtop)) || Unit[y].curleft > 400) {
                                            rightempty = false;
                                        }
                                    }

                                    //determine if row5 is empty
                                    for (var x = 0;x<3;x++){
                                        if(Unit[x].curtop===485){
                                            row5empty=false;
                                        }
                                        if(Unit[x].curtop===385){
                                            row4empty=false;
                                        }
                                        if(Unit[x].curtop===285){
                                            row3empty=false;
                                        }
                                        if(Unit[x].curtop===185){
                                            row2empty=false;
                                        }
                                        if(Unit[x].curtop===85){
                                            row1empty=false;
                                        }
                                    }

                                    //determine if enemy is beside this unit
                                    //if below
                                    function findenemy() {
                                        for (var x = 0; x < 3; x++) {
                                            if ((Unit[x].curtop - 100) === Unit[y].curtop && Unit[x].curleft === Unit[y].curleft) {
                                                enemyonbottom = Unit[x].type;
                                                enemyonbottomindex = x;
                                            }
                                            if ((Unit[x].curtop - 200) === Unit[y].curtop && Unit[x].curleft === Unit[y].curleft) {
                                                enemyonbottom2 = Unit[x].type;
                                                enemyonbottom2index = x;
                                            }
                                        }
                                        //if above
                                        for (var x = 0; x < 3; x++) {
                                            if (((Unit[x].curtop + 100) === Unit[y].curtop) && Unit[x].curleft === Unit[y].curleft) {
                                                enemyontop = Unit[x].type;
                                                enemyontopindex = x;
                                            }
                                            if (((Unit[x].curtop + 200) === Unit[y].curtop) && Unit[x].curleft === Unit[y].curleft) {
                                                enemyontop2 = Unit[x].type;
                                                enemyontop2index = x;
                                            }
                                        }
                                        //if right
                                        for (var x = 0; x < 3; x++) {
                                            if (((Unit[x].curleft - 100) === Unit[y].curleft) && Unit[x].curtop === Unit[y].curtop) {
                                                enemyonright = Unit[x].type;
                                                enemyonrightindex = x;
                                            }
                                            if (((Unit[x].curleft - 200) === Unit[y].curleft) && Unit[x].curtop === Unit[y].curtop) {
                                                enemyonright2 = Unit[x].type;
                                                enemyonright2index = x;
                                            }
                                            //if right
                                        }
                                        //if left
                                        for (var x = 0; x < 3; x++) {
                                            if (((Unit[x].curleft + 100) === Unit[y].curleft) && Unit[x].curtop === Unit[y].curtop) {
                                                enemyonleft = Unit[x].type;
                                                enemyonleftindex = x;
                                            }
                                            if (((Unit[x].curleft + 200) === Unit[y].curleft) && Unit[x].curtop === Unit[y].curtop) {
                                                enemyonleft2 = Unit[x].type;
                                                enemyonleft2index = x;
                                            }
                                        }
                                    }

                                    findenemy();

                                    function soldierwhotoattack(type) {
                                        if ((enemyonbottom === type) && (Unit[y].attacked === false)) {
                                            if (type != "Soldier" || Unit[y].moved===true) {
                                            attackthisone = enemyonbottomindex;
                                            var damage = Unit[y].attack - Unit[attackthisone].defense;
                                            if (damage < 0) {
                                                damage = 0
                                            }
                                            $("#TEXT").append("<p>" + Unit[y].name + " did " + damage + " damage to " + Unit[attackthisone].name + "</p>");
                                            Unit[attackthisone].health -= damage;
                                            Damaging(enemyonbottom, attackthisone);
                                                Sword.play();
                                            if (Unit[attackthisone].health <= 0) {
                                                Dies(enemyonbottom, attackthisone);
                                                Unit[attackthisone].curleft = 10000;
                                                Unit[attackthisone].curtop = 10000;
                                            }
                                            Unit[y].attacked = true;
                                        } else {
                                                attackthisone = enemyonbottomindex;
                                                var damage = 4 - Unit[attackthisone].defense;
                                                if (damage < 0) {
                                                    damage = 0
                                                }
                                                ;
                                                $("#TEXT").append("<p>" + Unit[y].name + " used his special and did " + damage + " damage to " + Unit[attackthisone].name + ". He is exhausted and will skip his next turn.</p>");
                                                Unit[y].usedspecial=true;
                                                Unit[attackthisone].health -= damage;
                                                Damaging(enemyonbottom, attackthisone);
                                                if (Unit[attackthisone].health <= 0) {
                                                    Dies(enemyonbottom, attackthisone);
                                                    Unit[attackthisone].curleft = 10000;
                                                    Unit[attackthisone].curtop = 10000;
                                                }
                                                Unit[y].attacked = true;
                                            }
                                        }
                                        if (enemyonright === type && (Unit[y].attacked === false)) {
                                            if (type != "Soldier" || Unit[y].moved === true) {
                                                attackthisone = enemyonrightindex;
                                                var damage = Unit[y].attack - Unit[attackthisone].defense;
                                                if (damage < 0) {
                                                    damage = 0
                                                }
                                                ;
                                                $("#TEXT").append("<p>" + Unit[y].name + " did " + damage + " damage to " + Unit[attackthisone].name + "</p>");
                                                Unit[attackthisone].health -= damage;
                                                Sword.play();
                                                Damaging(enemyonright, attackthisone);
                                                if (Unit[attackthisone].health <= 0) {
                                                    Dies(enemyonright, attackthisone)
                                                    Unit[attackthisone].curleft = 10000;
                                                    Unit[attackthisone].curtop = 10000;
                                                }
                                                Unit[y].attacked = true;
                                            }else {
                                                attackthisone = enemyonrightindex;
                                                var damage = 4 - Unit[attackthisone].defense;
                                                if (damage < 0) {
                                                    damage = 0
                                                }
                                                ;
                                                $("#TEXT").append("<p>" + Unit[y].name + "used his special and did " + damage + " to " + Unit[attackthisone].name + ". He is exhausted and will skip his next turn.</p>");
                                                Unit[y].usedspecial=true;
                                                Unit[attackthisone].health -= damage;
                                                Damaging(enemyonright, attackthisone);
                                                if (Unit[attackthisone].health <= 0) {
                                                    Dies(enemyonbottom, attackthisone);
                                                    Unit[attackthisone].curleft = 10000;
                                                    Unit[attackthisone].curtop = 10000;
                                                }
                                                Unit[y].attacked = true;
                                            }
                                        }
                                        if (enemyonleft === type && (Unit[y].attacked === false)) {
                                            if (type != "Soldier" || Unit[y].moved === true) {
                                                attackthisone = enemyonleftindex;
                                                var damage = Unit[y].attack - Unit[attackthisone].defense;
                                                if (damage < 0) {
                                                    damage = 0
                                                }
                                                ;
                                                $("#TEXT").append("<p>" + Unit[y].name + " did " + damage + " damage to " + Unit[attackthisone].name + "</p>");
                                                Unit[attackthisone].health -= damage;
                                                Sword.play();
                                                Damaging(enemyonleft, attackthisone);
                                                if (Unit[attackthisone].health <= 0) {
                                                    Dies(enemyonleft, attackthisone)
                                                    Unit[attackthisone].curleft = 10000;
                                                    Unit[attackthisone].curtop = 10000;
                                                }
                                                Unit[y].attacked = true;
                                            } else {
                                                attackthisone = enemyonleftindex;
                                                var damage = 4 - Unit[attackthisone].defense;
                                                if (damage < 0) {
                                                    damage = 0
                                                }
                                                ;
                                                $("#TEXT").append("<p>" + Unit[y].name + " used his special and did " + damage + " damage to " + Unit[attackthisone].name + ". He is exhausted and will skip his next turn.</p>");
                                                Unit[y].usedspecial=true;
                                                Unit[attackthisone].health -= damage;
                                                Damaging(enemyonleft, attackthisone);
                                                if (Unit[attackthisone].health <= 0) {
                                                    Dies(enemyonbottom, attackthisone);
                                                    Unit[attackthisone].curleft = 10000;
                                                    Unit[attackthisone].curtop = 10000;
                                                }
                                                Unit[y].attacked = true;
                                            }
                                        }
                                        if (enemyontop === type && (Unit[y].attacked === false)) {
                                            if (type != "Soldier" || Unit[y].moved === true) {
                                                attackthisone = enemyontopindex;
                                                var damage = Unit[y].attack - Unit[attackthisone].defense;
                                                if (damage < 0) {
                                                    damage = 0
                                                }
                                                ;
                                                $("#TEXT").append("<p>" + Unit[y].name + " did " + damage + " damage to " + Unit[attackthisone].name + "</p>");
                                                Unit[attackthisone].health -= damage;
                                                Sword.play();
                                                Damaging(enemyontop, attackthisone);
                                                if (Unit[attackthisone].health <= 0) {
                                                    Dies(enemyontop, attackthisone)
                                                    Unit[attackthisone].curleft = 10000;
                                                    Unit[attackthisone].curtop = 10000;
                                                }
                                                Unit[y].attacked = true;
                                            } else {
                                                attackthisone = enemyontopindex;
                                                var damage = 4 - Unit[attackthisone].defense;
                                                if (damage < 0) {
                                                    damage = 0
                                                }
                                                ;
                                                $("#TEXT").append("<p>" + Unit[y].name + " used his special and did " + damage + " damage to " + Unit[attackthisone].name + ". He is exhausted and will skip his next turn.</p>");
                                                Unit[y].usedspecial=true;
                                                Unit[attackthisone].health -= damage;
                                                Damaging(enemyontop, attackthisone);
                                                if (Unit[attackthisone].health <= 0) {
                                                    Dies(enemyonbottom, attackthisone);
                                                    Unit[attackthisone].curleft = 10000;
                                                    Unit[attackthisone].curtop = 10000;
                                                }
                                                Unit[y].attacked = true;
                                            }
                                        }
                                    }//end of who to attack function
                                    function whotoattack(type) {
                                        if ((enemyonbottom === type) && (Unit[y].attacked === false)) {
                                            if (type != "Soldier" || Unit[y].moved===true) {
                                                attackthisone = enemyonbottomindex;
                                                var damage = Unit[y].attack - Unit[attackthisone].defense;
                                                if (damage < 0) {
                                                    damage = 0
                                                }
                                                ;
                                                $("#TEXT").append("<p>" + Unit[y].name + " did " + damage + " damage to " + Unit[attackthisone].name + "</p>");
                                                Unit[attackthisone].health -= damage;
                                                Sword.play();
                                                Damaging(enemyonbottom, attackthisone);
                                                if (Unit[attackthisone].health <= 0) {
                                                    Dies(enemyonbottom, attackthisone);
                                                    Unit[attackthisone].curleft = 10000;
                                                    Unit[attackthisone].curtop = 10000;
                                                }
                                                Unit[y].attacked = true;
                                            } else {
                                                attackthisone = enemyonbottomindex;
                                                var damage = 4 - Unit[attackthisone].defense;
                                                if (damage < 0) {
                                                    damage = 0
                                                }
                                                ;
                                                $("#TEXT").append("<p>" + Unit[y].name + " used his special and did " + damage + " damage to " + Unit[attackthisone].name + ". He is exhausted and will skip his next turn.</p>");
                                                Unit[y].usedspecial=true;
                                                Unit[attackthisone].health -= damage;
                                                Damaging(enemyonbottom, attackthisone);
                                                if (Unit[attackthisone].health <= 0) {
                                                    Dies(enemyonbottom, attackthisone);
                                                    Unit[attackthisone].curleft = 10000;
                                                    Unit[attackthisone].curtop = 10000;
                                                }
                                                Unit[y].attacked = true;
                                            }
                                        }
                                        if (enemyonright === type && (Unit[y].attacked === false)) {
                                                attackthisone = enemyonrightindex;
                                                var damage = Unit[y].attack - Unit[attackthisone].defense;
                                                if (damage < 0) {
                                                    damage = 0
                                                }
                                                ;
                                                $("#TEXT").append("<p>" + Unit[y].name + " did " + damage + " damage to " + Unit[attackthisone].name + "</p>");
                                                Unit[attackthisone].health -= damage;
                                            Sword.play();
                                                Damaging(enemyonright, attackthisone);
                                                if (Unit[attackthisone].health <= 0) {
                                                    Dies(enemyonright, attackthisone)
                                                    Unit[attackthisone].curleft = 10000;
                                                    Unit[attackthisone].curtop = 10000;
                                                }
                                                Unit[y].attacked = true;
                                            }
                                        if (enemyonleft === type && (Unit[y].attacked === false)) {
                                                attackthisone = enemyonleftindex;
                                                var damage = Unit[y].attack - Unit[attackthisone].defense;
                                                if (damage < 0) {
                                                    damage = 0
                                                }
                                                ;
                                                $("#TEXT").append("<p>" + Unit[y].name + " did " + damage + " damage to " + Unit[attackthisone].name + "</p>");
                                                Unit[attackthisone].health -= damage;
                                            Sword.play();
                                                Damaging(enemyonleft, attackthisone);
                                                if (Unit[attackthisone].health <= 0) {
                                                    Dies(enemyonleft, attackthisone)
                                                    Unit[attackthisone].curleft = 10000;
                                                    Unit[attackthisone].curtop = 10000;
                                                }
                                                Unit[y].attacked = true;
                                            }
                                        if (enemyontop === type && (Unit[y].attacked === false)) {
                                                attackthisone = enemyontopindex;
                                                var damage = Unit[y].attack - Unit[attackthisone].defense;
                                                if (damage < 0) {
                                                    damage = 0
                                                }
                                                ;
                                                $("#TEXT").append("<p>" + Unit[y].name + " did " + damage + " damage to " + Unit[attackthisone].name + "</p>");
                                                Unit[attackthisone].health -= damage;
                                            Sword.play();
                                                Damaging(enemyontop, attackthisone);
                                                if (Unit[attackthisone].health <= 0) {
                                                    Dies(enemyontop, attackthisone)
                                                    Unit[attackthisone].curleft = 10000;
                                                    Unit[attackthisone].curtop = 10000;
                                                }
                                                Unit[y].attacked = true;
                                            }
                                    }//end of who to attack function
                                    function rangedwhotoattack(type) {
                                        for (var x = 0; x < 3; x++) {
                                            if (Unit[x].type === type && (Unit[y].attacked === false)) {
                                                var damage = Unit[y].attack - Unit[x].defense;
                                                if (damage < 0) {
                                                    damage = 0
                                                }
                                                ;
                                                $("#TEXT").append("<p>" + Unit[y].name + " did " + damage + " to " + Unit[x].name + "</p>");
                                                Unit[x].health -= damage;
                                                Arrow.play();
                                                Damaging(type, x);
                                                if (Unit[x].health <= 0) {

                                                    Dies(type, x);
                                                    Unit[x].curleft = 10000;
                                                    Unit[x].curtop = 10000;
                                                    Unit[x].type = "Dead";
                                                }
                                                Unit[y].attacked = true;
                                                if (Unit[y].usedparalyze>=3){
                                                    $("#TEXT").append("<p>" + Unit[x].name + " is paralyzed for a turn.</p>");
                                                    Paralyzesound.play();
                                                    Unit[x].aparalyzed = true;
                                                    Unit[y].usedparalyze=0;
                                                }
                                            }
                                        }
                                    }
                                    function wizardwhotoattack(type) {
                                        for (var x = 0; x < 3; x++) {
                                            if (Unit[x].type === type && (Unit[y].attacked === false)) {
                                                var damage = 5 - Unit[x].resistance;
                                                if (damage < 0) {
                                                    damage = 0
                                                }
                                                $("#TEXT").append("<p>" + Unit[y].name + " did " + damage + " damage to " + Unit[x].name + "</p>");
                                                Unit[x].health -= damage;
                                                Lightning.play();
                                                Damaging(type, x);
                                                if (Unit[x].health <= 0) {
                                                    Dies(type, x);
                                                    Unit[x].curleft = 10000;
                                                    Unit[x].curtop = 10000;
                                                    Unit[x].type = "Dead";
                                                }
                                                Unit[y].charge -= 3;
                                                Unit[y].attacked = true;
                                            }
                                        }
                                    }
                                    function magewhotoattack(type) {
                                        if ((enemyonbottom === type) && (Unit[y].attacked === false)) {
                                            attackthisone = enemyonbottomindex;
                                            var damage = 3 - Unit[attackthisone].resistance;
                                            if (damage < 0) {
                                                damage = 0
                                            }
                                            ;
                                            $("#TEXT").append("<p>" + Unit[y].name + " did " + damage + " to " + Unit[attackthisone].name + "</p>");
                                            Unit[attackthisone].health -= damage;
                                            Fire.play();
                                            Damaging(enemyonbottom, attackthisone);
                                            if (Unit[attackthisone].health <= 0) {
                                                Dies(enemyonbottom, attackthisone);
                                                Unit[attackthisone].curleft = 10000;
                                                Unit[attackthisone].curtop = 10000;
                                            }
                                            Unit[y].attacked = true;
                                            Unit[y].charge -= 1;
                                        }
                                        if (enemyonright === type && (Unit[y].attacked === false)) {
                                            attackthisone = enemyonrightindex;
                                            var damage = 3 - Unit[attackthisone].resistance;
                                            if (damage < 0) {
                                                damage = 0
                                            }
                                            ;
                                            $("#TEXT").append("<p>" + Unit[y].name + " did " + damage + " to " + Unit[attackthisone].name + "</p>");
                                            Unit[attackthisone].health -= damage;
                                            Fire.play();
                                            Damaging(enemyonright, attackthisone);
                                            if (Unit[attackthisone].health <= 0) {
                                                Dies(enemyonright, attackthisone)
                                                Unit[attackthisone].curleft = 10000;
                                                Unit[attackthisone].curtop = 10000;
                                            }
                                            Unit[y].attacked = true;
                                            Unit[y].charge -= 1;
                                        }
                                        if (enemyonleft === type && (Unit[y].attacked === false)) {
                                            attackthisone = enemyonleftindex;
                                            var damage = 3 - Unit[attackthisone].resistance;
                                            if (damage < 0) {
                                                damage = 0
                                            }
                                            ;
                                            $("#TEXT").append("<p>" + Unit[y].name + " did " + damage + " to " + Unit[attackthisone].name + "</p>");
                                            Unit[attackthisone].health -= damage;
                                            Fire.play();
                                            Damaging(enemyonleft, attackthisone);
                                            if (Unit[attackthisone].health <= 0) {
                                                Dies(enemyonleft, attackthisone)
                                                Unit[attackthisone].curleft = 10000;
                                                Unit[attackthisone].curtop = 10000;
                                            }
                                            Unit[y].attacked = true;
                                            Unit[y].charge -= 1;
                                        }
                                        if (enemyontop === type && (Unit[y].attacked === false)) {
                                            attackthisone = enemyontopindex;
                                            var damage = 3 - Unit[attackthisone].resistance;
                                            if (damage < 0) {
                                                damage = 0
                                            }
                                            ;
                                            $("#TEXT").append("<p>" + Unit[y].name + " did " + damage + " to " + Unit[attackthisone].name + "</p>");
                                            Unit[attackthisone].health -= damage;
                                            Fire.play();
                                            Damaging(enemyontop, attackthisone);
                                            if (Unit[attackthisone].health <= 0) {
                                                Dies(enemyontop, attackthisone);
                                                Unit[attackthisone].curleft = 10000;
                                                Unit[attackthisone].curtop = 10000;
                                            }
                                            Unit[y].attacked = true;
                                            Unit[y].charge -= 1;
                                        }

                                        if ((enemyonbottom2 === type) && (Unit[y].attacked === false)) {
                                            attackthisone = enemyonbottom2index;
                                            var damage = 3 - Unit[attackthisone].resistance;
                                            if (damage < 0) {
                                                damage = 0
                                            }
                                            ;
                                            $("#TEXT").append("<p>" + Unit[y].name + " did " + damage + " to " + Unit[attackthisone].name + "</p>");
                                            Unit[attackthisone].health -= damage;
                                            Fire.play();
                                            Damaging(enemyonbottom2, attackthisone);
                                            if (Unit[attackthisone].health <= 0) {
                                                Dies(enemyonbottom2, attackthisone);
                                                Unit[attackthisone].curleft = 10000;
                                                Unit[attackthisone].curtop = 10000;
                                            }
                                            Unit[y].attacked = true;
                                            Unit[y].charge -= 1;
                                        }
                                        if (enemyonright2 === type && (Unit[y].attacked === false)) {
                                            attackthisone = enemyonright2index;
                                            var damage = 3 - Unit[attackthisone].resistance;
                                            if (damage < 0) {
                                                damage = 0
                                            }
                                            ;
                                            $("#TEXT").append("<p>" + Unit[y].name + " did " + damage + " to " + Unit[attackthisone].name + "</p>");
                                            Unit[attackthisone].health -= damage;
                                            Fire.play();
                                            Damaging(enemyonright2, attackthisone);
                                            if (Unit[attackthisone].health <= 0) {
                                                Dies(enemyonright2, attackthisone);
                                                Unit[attackthisone].curleft = 10000;
                                                Unit[attackthisone].curtop = 10000;
                                            }
                                            Unit[y].attacked = true;
                                            Unit[y].charge -= 1;
                                        }
                                        if (enemyonleft2 === type && (Unit[y].attacked === false)) {
                                            attackthisone = enemyonleft2index;
                                            var damage = 3 - Unit[attackthisone].resistance;
                                            if (damage < 0) {
                                                damage = 0
                                            }
                                            ;
                                            $("#TEXT").append("<p>" + Unit[y].name + " did " + damage + " to " + Unit[attackthisone].name + "</p>");
                                            Unit[attackthisone].health -= damage;
                                            Fire.play();
                                            Damaging(enemyonleft2, attackthisone);
                                            if (Unit[attackthisone].health <= 0) {
                                                Dies(enemyonleft2, attackthisone);
                                                Unit[attackthisone].curleft = 10000;
                                                Unit[attackthisone].curtop = 10000;
                                            }
                                            Unit[y].attacked = true;
                                            Unit[y].charge -= 1;
                                        }
                                        if (enemyontop2 === type && (Unit[y].attacked === false)) {
                                            attackthisone = enemyontop2index;
                                            var damage = 3 - Unit[attackthisone].resistance;
                                            if (damage < 0) {
                                                damage = 0
                                            }
                                            ;
                                            $("#TEXT").append("<p>" + Unit[y].name + " did " + damage + " to " + Unit[attackthisone].name + "</p>");
                                            Unit[attackthisone].health -= damage;
                                            Damaging(enemyontop2, attackthisone);
                                            if (Unit[attackthisone].health <= 0) {
                                                Dies(enemyontop2, attackthisone);
                                                Unit[attackthisone].curleft = 10000;
                                                Unit[attackthisone].curtop = 10000;
                                            }
                                            Unit[y].attacked = true;
                                            Unit[y].charge -= 1;
                                        }
                                    }
                                    function Damaging(type, index) {
                                        if (type === "Soldier") {
                                            if (index === 0) {
                                                $(Joe).effect("shake");
                                            }
                                            if (index === 1) {
                                                $(Bill).effect("shake");
                                            }
                                            if (index === 2) {
                                                $(Saul).effect("shake");
                                            }
                                        }
                                        if (type === "Wizard") {
                                            if (index === 0) {
                                                $(Merlin).effect("shake");
                                            }
                                            if (index === 1) {
                                                $(Voldon).effect("shake");
                                            }
                                            if (index === 2) {
                                                $(Rubin).effect("shake");
                                            }
                                        }
                                        if (type === "Rouge") {
                                            if (index === 0) {
                                                $(Jennifer).effect("shake");
                                            }
                                            if (index === 1) {
                                                $(Sneaks).effect("shake");
                                            }
                                            if (index === 2) {
                                                $(Shirley).effect("shake");
                                            }
                                        }
                                        if (type === "Guard") {
                                            if (index === 0) {
                                                $(Victor).effect("shake");
                                            }
                                            if (index === 1) {
                                                $(Bigs).effect("shake");
                                            }
                                            if (index === 2) {
                                                $(Papabear).effect("shake");
                                            }
                                        }
                                        if (type === "Templar") {
                                            if (index === 0) {
                                                $(Joseph).effect("shake");
                                            }
                                            if (index === 1) {
                                                $(David).effect("shake");
                                            }
                                            if (index === 2) {
                                                $(Jeremiah).effect("shake");
                                            }
                                        }
                                        if (type === "Mage") {
                                            if (index === 0) {
                                                $(Diana).effect("shake");
                                                ;
                                            }
                                            if (index === 1) {
                                                $(Electra).effect("shake");
                                            }
                                            if (index === 2) {
                                                $(Red).effect("shake");
                                            }
                                        }
                                    }
                                    function Dies(type, index) {
                                        var dyingname = "";
                                        if (type === "Soldier") {
                                            if (index === 0) {
                                                $(Joe).effect("explode");
                                                dyingname = "Joe";
                                            }
                                            if (index === 1) {
                                                $(Bill).effect("explode");
                                                dyingname = "Bill";
                                            }
                                            if (index === 2) {
                                                $(Saul).effect("explode");
                                                dyingname = "Saul";
                                            }
                                        }
                                        if (type === "Wizard") {
                                            if (index === 0) {
                                                $(Merlin).effect("explode");
                                                dyingname = "Merlin";
                                            }
                                            if (index === 1) {
                                                $(Voldon).effect("explode");
                                                dyingname = "Voldon";
                                            }
                                            if (index === 2) {
                                                $(Rubin).effect("explode");
                                                dyingname = "Rubin";
                                            }
                                        }
                                        if (type === "Rouge") {
                                            if (index === 0) {
                                                $(Jennifer).effect("explode");
                                                dyingname = "Jennifer";
                                            }
                                            if (index === 1) {
                                                $(Sneaks).effect("explode");
                                                dyingname = "Sneaks";
                                            }
                                            if (index === 2) {
                                                $(Shirley).effect("explode");
                                                dyingname = "Shirley";
                                            }
                                        }
                                        if (type === "Guard") {
                                            if (index === 0) {
                                                $(Victor).effect("explode");
                                                dyingname = "Victor";
                                            }
                                            if (index === 1) {
                                                $(Bigs).effect("explode");
                                                dyingname = "Bigs";
                                            }
                                            if (index === 2) {
                                                $(Papabear).effect("explode");
                                                dyingname = "Papabear";
                                            }
                                        }
                                        if (type === "Templar") {
                                            if (index === 0) {
                                                $(Joseph).effect("explode");
                                                dyingname = "Joseph";
                                            }
                                            if (index === 1) {
                                                $(David).effect("explode");
                                                dyingname = "David";
                                            }
                                            if (index === 2) {
                                                $(Jeremiah).effect("explode");
                                                dyingname = "Jeremiah";
                                            }
                                        }
                                        if (type === "Mage") {
                                            if (index === 0) {
                                                $(Diana).effect("explode");
                                                dyingname = "Diana";
                                            }
                                            if (index === 1) {
                                                $(Electra).effect("explode");
                                                dyingname = "Electra";
                                            }
                                            if (index === 2) {
                                                $(Red).effect("explode");
                                                dyingname = "Red";
                                            }
                                        }

                                        $("#TEXT").append("<p>" + dyingname + " has died</p>");
                                    }

                                    //Soldier
                                    if ((Unit[y].type === "Soldier")) {
                                        if (Unit[y].usedspecial === true) {
                                            $("#TEXT").append("<p>" + Unit[y].name + " is exhausted for using his special and skips this turn</p>");
                                            Unit[y].usedspecial = false;
                                        } else {
                                        soldierwhotoattack("Wizard");
                                        soldierwhotoattack("Templar");
                                        soldierwhotoattack("Rouge");
                                        soldierwhotoattack("Mage");
                                        soldierwhotoattack("Guard");
                                        soldierwhotoattack("Soldier");
                                        //Move down
                                            console.log(belowempty);
                                        if (belowempty === true && Unit[y].attacked === false && (Unit[y].curtop<Unit[0].curtop || Unit[y].curtop<Unit[1].curtop || Unit[y].curtop<Unit[2].curtop)) {
                                            Unit[y].curtop += 100;
                                            Unit[y].moved = true;
                                            $('.selected').animate({
                                                left: Unit[y].curleft + 'px',
                                                top: Unit[y].curtop + 'px'
                                            }, 500);
                                        }

                                            if (rightempty === true && Unit[y].attacked === false && Unit[y].moved === false && ((Unit[y].curtop===Unit[0].curtop && Unit[y].curleft<Unit[0].curleft) || (Unit[y].curtop===Unit[1].curtop && Unit[y].curleft<Unit[1].curleft) || (Unit[y].curtop===Unit[2].curtop && Unit[y].curleft<Unit[2].curleft))) {
                                                Unit[y].curleft += 100;
                                                Unit[y].moved = true;
                                                $('.selected').animate({
                                                    left: Unit[y].curleft + 'px',
                                                    top: Unit[y].curtop + 'px'
                                                }, 500);
                                            }
                                            if (leftempty === true && Unit[
                                                    y].attacked === false && Unit[y].moved === false && ((Unit[y].curtop===Unit[0].curtop && Unit[y].curleft>Unit[0].curleft) || (Unit[y].curtop===Unit[1].curtop && Unit[y].curleft>Unit[1].curleft) || (Unit[y].curtop===Unit[2].curtop && Unit[y].curleft>Unit[2].curleft))) {
                                                Unit[y].curleft -= 100;
                                                Unit[y].moved = true;
                                                $('.selected').animate({
                                                    left: Unit[y].curleft + 'px',
                                                    top: Unit[y].curtop + 'px'
                                                }, 500);
                                            }
                                            if (upempty === true && Unit[y].attacked === false && Unit[y].moved === false) {
                                                Unit[y].curtop -= 100;
                                                Unit[y].moved = true;
                                                $('.selected').animate({
                                                    left: Unit[y].curleft + 'px',
                                                    top: Unit[y].curtop + 'px'
                                                }, 500);
                                            }

                                            findenemy();
                                            soldierwhotoattack("Wizard");
                                            soldierwhotoattack("Templar");
                                            soldierwhotoattack("Rouge");
                                            soldierwhotoattack("Mage");
                                            soldierwhotoattack("Guard");
                                            soldierwhotoattack("Soldier");
                                    }
                                    }

                                    //Templar
                                    if ((Unit[y].type === "Templar")) {
                                        whotoattack("Wizard");
                                        whotoattack("Templar");
                                        whotoattack("Rouge");
                                        whotoattack("Mage");
                                        whotoattack("Guard");
                                        whotoattack("Soldier");
                                        //Move down
                                        if ((belowempty === true) && Unit[y].attacked === false && (Unit[y].curtop<Unit[0].curtop || Unit[y].curtop<Unit[1].curtop || Unit[y].curtop<Unit[2].curtop)) {
                                            Unit[y].curtop += 100;
                                            Unit[y].moved = true;
                                            $('.selected').animate({
                                                left: Unit[y].curleft + 'px',
                                                top: Unit[y].curtop + 'px'
                                            }, 500);
                                        }
                                        if (rightempty === true && Unit[y].attacked === false && Unit[y].moved === false && ((Unit[y].curtop===Unit[0].curtop && Unit[y].curleft<Unit[0].curleft) || (Unit[y].curtop===Unit[1].curtop && Unit[y].curleft<Unit[1].curleft) || (Unit[y].curtop===Unit[2].curtop && Unit[y].curleft<Unit[2].curleft))) {
                                            Unit[y].curleft += 100;
                                            Unit[y].moved = true;
                                            $('.selected').animate({
                                                left: Unit[y].curleft + 'px',
                                                top: Unit[y].curtop + 'px'
                                            }, 500);
                                        }
                                        if (leftempty === true && Unit[y].attacked === false && Unit[y].moved === false && ((Unit[y].curtop===Unit[0].curtop && Unit[y].curleft>Unit[0].curleft) || (Unit[y].curtop===Unit[1].curtop && Unit[y].curleft>Unit[1].curleft) || (Unit[y].curtop===Unit[2].curtop && Unit[y].curleft>Unit[2].curleft))) {
                                            Unit[y].curleft -= 100;
                                            Unit[y].moved = true;
                                            $('.selected').animate({
                                                left: Unit[y].curleft + 'px',
                                                top: Unit[y].curtop + 'px'
                                            }, 500);
                                        }
                                        if (upempty === true && Unit[y].attacked === false && Unit[y].moved === false) {
                                            Unit[y].curtop -= 100;
                                            Unit[y].moved = true;
                                            $('.selected').animate({
                                                left: Unit[y].curleft + 'px',
                                                top: Unit[y].curtop + 'px'
                                            }, 500);
                                        }
                                        findenemy();
                                        whotoattack("Wizard");
                                        whotoattack("Templar");
                                        whotoattack("Rouge");
                                        whotoattack("Mage");
                                        whotoattack("Guard");
                                        whotoattack("Soldier");
                                    }

                                    //Guard
                                    if ((Unit[y].type === "Guard")) {
                                        whotoattack("Wizard");
                                        whotoattack("Templar");
                                        whotoattack("Rouge");
                                        whotoattack("Mage");
                                        whotoattack("Guard");
                                        whotoattack("Soldier");
                                        //Move down
                                        if ((belowempty === true) && Unit[y].attacked === false && (Unit[y].curtop<Unit[0].curtop || Unit[y].curtop<Unit[1].curtop || Unit[y].curtop<Unit[2].curtop)) {
                                            Unit[y].curtop += 100;
                                            Unit[y].moved = true;
                                            $('.selected').animate({
                                                left: Unit[y].curleft + 'px',
                                                top: Unit[y].curtop + 'px'
                                            }, 500);
                                        }
                                        if (rightempty === true && Unit[y].attacked === false && Unit[y].moved === false && ((Unit[y].curtop===Unit[0].curtop && Unit[y].curleft<Unit[0].curleft) || (Unit[y].curtop===Unit[1].curtop && Unit[y].curleft<Unit[1].curleft) || (Unit[y].curtop===Unit[2].curtop && Unit[y].curleft<Unit[2].curleft))) {
                                            Unit[y].curleft += 100;
                                            Unit[y].moved = true;
                                            $('.selected').animate({
                                                left: Unit[y].curleft + 'px',
                                                top: Unit[y].curtop + 'px'
                                            }, 500);
                                        }
                                        if (leftempty === true && Unit[y].attacked === false && Unit[y].moved === false && ((Unit[y].curtop===Unit[0].curtop && Unit[y].curleft>Unit[0].curleft) || (Unit[y].curtop===Unit[1].curtop && Unit[y].curleft>Unit[1].curleft) || (Unit[y].curtop===Unit[2].curtop && Unit[y].curleft>Unit[2].curleft))) {
                                            Unit[y].curleft -= 100;
                                            Unit[y].moved = true;
                                            $('.selected').animate({
                                                left: Unit[y].curleft + 'px',
                                                top: Unit[y].curtop + 'px'
                                            }, 500);
                                        }
                                        if (upempty === true && Unit[y].attacked === false && Unit[y].moved === false) {
                                            Unit[y].curtop -= 100;
                                            Unit[y].moved = true;
                                            $('.selected').animate({
                                                left: Unit[y].curleft + 'px',
                                                top: Unit[y].curtop + 'px'
                                            }, 500);
                                        }

                                        findenemy();
                                        whotoattack("Wizard");
                                        whotoattack("Templar");
                                        whotoattack("Rouge");
                                        whotoattack("Mage");
                                        whotoattack("Guard");
                                        whotoattack("Soldier");
                                    }

                                    //Rouge
                                    if ((Unit[y].type === "Rouge")) {
                                        //Move left
                                        var moved = false;
                                        Unit[y].usedparalyze+=1;
                                        //move away from enemies
                                        if ((Unit[y].attacked === false) && moved === false && enemyonright != "") {
                                            if (leftempty === true && moved === false) {
                                                moved = true;
                                                Unit[y].curleft -= 100;
                                            }
                                            if (belowempty === true && moved === false) {
                                                moved = true;
                                                Unit[y].curtop += 100;
                                            }
                                            if (upempty === true && moved === false) {
                                                moved = true;
                                                Unit[y].curtop -= 100;
                                            }

                                            $('.selected').animate({
                                                left: Unit[y].curleft + 'px',
                                                top: Unit[y].curtop + 'px'
                                            }, 500);
                                        }
                                        if ((Unit[y].attacked === false) && enemyonleft != "" && moved === false) {
                                            if (rightempty === true && moved === false) {
                                                moved = true;
                                                Unit[y].curleft += 100;
                                            }
                                            if (belowempty === true && moved === false) {
                                                moved = true;
                                                Unit[y].curtop += 100;
                                            }
                                            if (upempty === true && moved === false) {
                                                moved = true;
                                                Unit[y].curtop -= 100;
                                            }

                                            $('.selected').animate({
                                                left: Unit[y].curleft + 'px',
                                                top: Unit[y].curtop + 'px'
                                            }, 500);
                                        }
                                        if ((Unit[y].attacked === false) && enemyontop != "" && moved === false) {
                                            if (rightempty === true && moved === false) {
                                                moved = true;
                                                Unit[y].curleft += 100;
                                            }
                                            if (belowempty === true && moved === false) {
                                                moved = true;
                                                Unit[y].curtop += 100;
                                            }
                                            if (leftempty === true && moved === false) {
                                                moved = true;
                                                Unit[y].curleft -= 100;
                                            }

                                            $('.selected').animate({
                                                left: Unit[y].curleft + 'px',
                                                top: Unit[y].curtop + 'px'
                                            }, 500);
                                        }
                                        if ((Unit[y].attacked === false) && enemyonbottom != "" && moved === false) {

                                            if (rightempty === true && moved === false) {
                                                console.log(Unit[y].curleft);

                                                moved = true;
                                                Unit[y].curleft += 100;
                                            }
                                            if (leftempty === true && moved === false) {
                                                moved = true;
                                                Unit[y].curleft -= 100;
                                            }
                                            if (upempty === true && moved === false) {
                                                moved = true;
                                                Unit[y].curtop -= 100;
                                            }

                                            $('.selected').animate({
                                                left: Unit[y].curleft + 'px',
                                                top: Unit[y].curtop + 'px'
                                            }, 500);
                                        }
                                        //attack enemies
                                        rangedwhotoattack("Wizard");
                                        rangedwhotoattack("Templar");
                                        rangedwhotoattack("Rouge");
                                        rangedwhotoattack("Mage");
                                        rangedwhotoattack("Guard");
                                        rangedwhotoattack("Soldier");
                                    }

                                    //Wizard
                                    if ((Unit[y].type === "Wizard")) {
                                        //Move left
                                        var moved = false;
                                        //move away from enemies
                                        if ((Unit[y].attacked === false) && moved === false && enemyonright != "") {
                                            if (leftempty === true && moved === false) {
                                                moved = true;
                                                Unit[y].curleft -= 100;
                                            }
                                            if (belowempty === true && moved === false) {
                                                moved = true;
                                                Unit[y].curtop += 100;
                                            }
                                            if (upempty === true && moved === false) {
                                                moved = true;
                                                Unit[y].curtop -= 100;
                                            }

                                            $('.selected').animate({
                                                left: Unit[y].curleft + 'px',
                                                top: Unit[y].curtop + 'px'
                                            }, 500);
                                        }
                                        if ((Unit[y].attacked === false) && enemyonleft != "" && moved === false) {
                                            if (rightempty === true && moved === false) {
                                                moved = true;
                                                Unit[y].curleft += 100;
                                            }
                                            if (belowempty === true && moved === false) {
                                                moved = true;
                                                Unit[y].curtop += 100;
                                            }
                                            if (upempty === true && moved === false) {
                                                moved = true;
                                                Unit[y].curtop -= 100;
                                            }

                                            $('.selected').animate({
                                                left: Unit[y].curleft + 'px',
                                                top: Unit[y].curtop + 'px'
                                            }, 500);
                                        }
                                        if ((Unit[y].attacked === false) && enemyontop != "" && moved === false) {
                                            if (rightempty === true && moved === false) {
                                                moved = true;
                                                Unit[y].curleft += 100;
                                            }
                                            if (belowempty === true && moved === false) {
                                                moved = true;
                                                Unit[y].curtop += 100;
                                            }
                                            if (leftempty === true && moved === false) {
                                                moved = true;
                                                Unit[y].curleft -= 100;
                                            }

                                            $('.selected').animate({
                                                left: Unit[y].curleft + 'px',
                                                top: Unit[y].curtop + 'px'
                                            }, 500);
                                        }
                                        if ((Unit[y].attacked === false) && enemyonbottom != "" && moved === false) {

                                            if (rightempty === true && moved === false) {
                                                console.log(Unit[y].curleft);

                                                moved = true;
                                                Unit[y].curleft += 100;
                                            }
                                            if (leftempty === true && moved === false) {
                                                moved = true;
                                                Unit[y].curleft -= 100;
                                            }
                                            if (upempty === true && moved === false) {
                                                moved = true;
                                                Unit[y].curtop -= 100;
                                            }

                                            $('.selected').animate({
                                                left: Unit[y].curleft + 'px',
                                                top: Unit[y].curtop + 'px'
                                            }, 500);
                                        }
                                        //attack enemies

                                        if (Unit[y].charge >= 3) {
                                            wizardwhotoattack("Soldier");
                                            wizardwhotoattack("Rouge");
                                            wizardwhotoattack("Mage");
                                            wizardwhotoattack("Guard");
                                            wizardwhotoattack("Wizard");
                                            wizardwhotoattack("Templar");
                                        } else {
                                            Unit[y].charge += 1;
                                            $('.selected').effect("pulsate");
                                            $("#TEXT").append("<p>" + Unit[y].name + " Charged his magic to " + Unit[y].charge + "</p>");
                                        }
                                    }

                                    //Mage
                                    if ((Unit[y].type === "Mage")) {
                                        if (Unit[y].charge >= 1) {
                                            magewhotoattack("Soldier");
                                            magewhotoattack("Rouge");
                                            magewhotoattack("Mage");
                                            magewhotoattack("Guard");
                                            magewhotoattack("Wizard");
                                            magewhotoattack("Templar");
                                        }
                                        //Move down
                                        if (belowempty === true && Unit[y].attacked === false && (Unit[y].curtop<Unit[0].curtop || Unit[y].curtop<Unit[1].curtop || Unit[y].curtop<Unit[2].curtop)) {
                                            Unit[y].curtop += 100;
                                            Unit[y].moved = true;
                                            $('.selected').animate({
                                                left: Unit[y].curleft + 'px',
                                                top: Unit[y].curtop + 'px'
                                            }, 500);
                                        }
                                        if (rightempty === true && Unit[y].attacked === false && Unit[y].moved === false && ((Unit[y].curtop===Unit[0].curtop && Unit[y].curleft<Unit[0].curleft) || (Unit[y].curtop===Unit[1].curtop && Unit[y].curleft<Unit[1].curleft) || (Unit[y].curtop===Unit[2].curtop && Unit[y].curleft<Unit[2].curleft))) {
                                            Unit[y].curleft += 100;
                                            Unit[y].moved = true;
                                            $('.selected').animate({
                                                left: Unit[y].curleft + 'px',
                                                top: Unit[y].curtop + 'px'
                                            }, 500);
                                        }
                                        if (leftempty === true && Unit[y].attacked === false && Unit[y].moved === false && ((Unit[y].curtop===Unit[0].curtop && Unit[y].curleft>Unit[0].curleft) || (Unit[y].curtop===Unit[1].curtop && Unit[y].curleft>Unit[1].curleft) || (Unit[y].curtop===Unit[2].curtop && Unit[y].curleft>Unit[2].curleft))) {
                                            Unit[y].curleft -= 100;
                                            Unit[y].moved = true;
                                            $('.selected').animate({
                                                left: Unit[y].curleft + 'px',
                                                top: Unit[y].curtop + 'px'
                                            }, 500);
                                        }
                                        if (upempty === true && Unit[y].attacked === false && Unit[y].moved === false) {
                                            Unit[y].curtop -= 100;
                                            Unit[y].moved = true;
                                            $('.selected').animate({
                                                left: Unit[y].curleft + 'px',
                                                top: Unit[y].curtop + 'px'
                                            }, 500);
                                        }
                                        findenemy();
                                        if (Unit[y].charge >= 1) {
                                            magewhotoattack("Soldier");
                                            magewhotoattack("Rouge");
                                            magewhotoattack("Mage");
                                            magewhotoattack("Guard");
                                            magewhotoattack("Wizard");
                                            magewhotoattack("Templar");
                                        }
                                        if (Unit[y].attacked === false) {
                                            Unit[y].charge += 1;
                                            $('.selected').effect("pulsate");
                                            var temp = Unit[y].charge;
                                            $("#TEXT").append("<p>" + Unit[y].name + " charged his magic to " + temp + "</p>");
                                        }

                                    }

                                    //gameover
                                    if (Unit[0].curleft === 10000 && Unit[1].curleft === 10000 && Unit[2].curleft === 10000) {
                                        $("#TEXT").empty;
                                        $("#TEXT").append("YOU LOSE");
                                        $(".actions").append("<div class= 'button' id = 'Lose' >Restart</div>");
                                        $('.button').click(function () {
                                            selectedaction = $(this).attr('id');
                                            if (selectedaction === "Lose") {
                                                location.reload();
                                            }
                                            Break;
                                        })//end of this button thing
                                    }
                                    Unit[y].attacked = false;
                                }//End of isalive if statement

                            } else{$("#TEXT").append("<p>" + Unit[y].name + " has recovered from being paralyzed</p>");
                                Unit[y].paralyzed=false
                            }//end of is paralyzed if statement
                        }//end of enemy's turns


                        $('*').attacked=false;
                        $('*').removeClass("selected");
                    }//end of passturn button
                });//end of .button click event
            }//end of Starting===false
        });//end of .unit.click

        //Use actions on enemies
        $('.Eunit').mousedown(function(e){
            if(e.button === 2){
                if (Unit[selectedindex].aparalyzed===true){
                    $('#TEXT').append("<p>" + Unit[selectedindex].name + " is paralyzed</p>");
                    Break;
                }
                //determine whether this unit did an action this turn
                if (Unit[selectedindex].usedaction===true){
                    $("#TEXT").append("<p>" + Unit[selectedindex].name + " has already used an action this turn</p>");
                    Break;
                }
                //determine enemy's number
                for (var i = 0; i < Unit.length; i++) {
                    if (Unit[i].name === this.name) {
                        enemyindex = i;
                    }}

                function youwin() {
                    var alldead = 0;
                    for(var z = 3;z<Unit.length;z++){
                        console.log(Unit.length);
                        if (Unit[z].health<=0){
                            console.log(2);
                            alldead+=1;}}
                    if (alldead>=(Unit.length-3)){
                        level+=1;
                        sessionStorage.setItem("level",level);
                        $("#TEXT").append("<p>You won the battle! Now for Level: " + level + "</p>");
startinggame();
                    }
                }
                if (selectedaction === "rougeAttack"){
                    var damage = Unit[selectedindex].attack -Unit[enemyindex].defense;
                    if (damage<0){damage = 0}
                    $("#TEXT").append("<p>" + Unit[selectedindex].name + " Did " + damage + " damage to " + Unit[enemyindex].name + "\n</p>");
                    $(this).effect('shake');
                    Arrow.play();
                    Unit[enemyindex].health -= damage;
                    if (Unit[enemyindex].health<=0){
                        $(this).effect('explode');
                        Unit[enemyindex].alive=false;
                        $("#TEXT").append("<p>" + Unit[enemyindex].name + " has been killed</p>");
                        youwin();
                    }
                    Unit[selectedindex].usedaction=true;
                    Break;
                }
                if (selectedaction === "rougeParalyze"){
                    if (Unit[selectedindex].usedparalyze < 3){
                        var turnsleft = 3 - Unit[selectedindex].usedparalyze;
                        $("#TEXT").append("<p>Paralyze can't be used for another " + turnsleft + " turn(s)\n</p>");
                        Break;
                    } else {
                        var damage = Unit[selectedindex].attack - Unit[enemyindex].defense;
                        if (damage < 0) {damage = 0}
                        $("#TEXT").append("<p>" + Unit[selectedindex].name + " Did " + damage + " damage to " + Unit[enemyindex].name + "\n</p>");
                        $(this).effect('shake');
                        Arrow.play();
                        Paralyzesound.play();
                        Unit[enemyindex].health -= damage;
                        Unit[selectedindex].usedparalyze = 0;
                        Unit[enemyindex].paralyzed = true;
                        $("#TEXT").append('<p>' + Unit[enemyindex].name + ' is paralyzed\n</p>');
                        if (Unit[enemyindex].health<=0){$(this).effect('explode');
                            Unit[enemyindex].alive=false;
                            $("#TEXT").append("<p>" + Unit[enemyindex].name + " has been killed</p>");
                            youwin();
                        }
                        Unit[selectedindex].usedaction=true;
                        Break;
                    }
                }
                if (selectedaction === "soldierAttack"){
                    var damage = Unit[selectedindex].attack -Unit[enemyindex].defense;
                    if (damage<0){damage = 0}
                    if((Unit[selectedindex].curtop - 100 === Unit[enemyindex].curtop && Unit[selectedindex].curleft ===Unit[enemyindex].curleft) || (Unit[selectedindex].curtop + 100 === Unit[enemyindex].curtop && Unit[selectedindex].curleft ===Unit[enemyindex].curleft) || (Unit[selectedindex].curleft - 100 === Unit[enemyindex].curleft && Unit[selectedindex].curtop ===Unit[enemyindex].curtop) || (Unit[selectedindex].curleft + 100 === Unit[enemyindex].curleft && Unit[selectedindex].curtop ===Unit[enemyindex].curtop)) {

                        $("#TEXT").append("<p>" + Unit[selectedindex].name + " Did " + damage + " damage to " + Unit[enemyindex].name + "\n</p>");
                        $(this).effect('shake');
                        Sword.play();
                        Unit[enemyindex].health -= damage;
                        Unit[selectedindex].usedaction=true;
                        if (Unit[enemyindex].health <= 0) {
                            $(this).effect('explode');
                            Unit[enemyindex].alive=false;
                            $("#TEXT").append("<p>" + Unit[enemyindex].name + " has been killed</p>");
                            youwin();
                        }
                        Break;
                    }
                }
                if (selectedaction === "soldierSpecial"){
                    var damage = 4 -Unit[enemyindex].defense;
                    if (damage<0){damage = 0}
                    if((Unit[selectedindex].curtop - 100 === Unit[enemyindex].curtop && Unit[selectedindex].curleft ===Unit[enemyindex].curleft) || (Unit[selectedindex].curtop + 100 === Unit[enemyindex].curtop && Unit[selectedindex].curleft ===Unit[enemyindex].curleft) || (Unit[selectedindex].curleft - 100 === Unit[enemyindex].curleft && Unit[selectedindex].curtop ===Unit[enemyindex].curtop) || (Unit[selectedindex].curleft + 100 === Unit[enemyindex].curleft && Unit[selectedindex].curtop ===Unit[enemyindex].curtop)) {
                        if (Unit[selectedindex].moved === true) {
                            $("#TEXT").append("<p>" + Unit[selectedindex].name + " moved this turn and cannot use his special</p>");
                            Break;
                        } else {
                        $("#TEXT").append("<p>" + Unit[selectedindex].name + " used his special and did " + damage + "damage to " + Unit[enemyindex].name + ". " + Unit[selectedindex].name + " is exhausted and will lose his next turn.\n</p>");
                        $(this).effect('shake');
                            Specialsound.play();
                        Unit[enemyindex].health -= damage;
                        Unit[selectedindex].usedspecial = true;
                        Unit[selectedindex].usedaction = true;
                        if (Unit[enemyindex].health <= 0) {
                            $(this).effect('explode');
                            Unit[enemyindex].alive = false;
                            $("#TEXT").append("<p>" + Unit[enemyindex].name + " has been killed</p>");
                            youwin();
                        }
                        Break;
                    }
                    }
                }
                if (selectedaction === "templarAttack"){
                    var damage = Unit[selectedindex].attack -Unit[enemyindex].defense;
                    if (damage<0){damage = 0}
                    if((Unit[selectedindex].curtop - 100 === Unit[enemyindex].curtop && Unit[selectedindex].curleft ===Unit[enemyindex].curleft) || (Unit[selectedindex].curtop + 100 === Unit[enemyindex].curtop && Unit[selectedindex].curleft ===Unit[enemyindex].curleft) || (Unit[selectedindex].curleft - 100 === Unit[enemyindex].curleft && Unit[selectedindex].curtop ===Unit[enemyindex].curtop) || (Unit[selectedindex].curleft + 100 === Unit[enemyindex].curleft && Unit[selectedindex].curtop ===Unit[enemyindex].curtop)) {

                        $("#TEXT").append("<p>" + Unit[selectedindex].name + " Did " + damage + " damage to " + Unit[enemyindex].name + "\n</p>");
                        $(this).effect('shake');
                        Sword.play();
                        Unit[enemyindex].health -= damage;
                        Unit[selectedindex].usedaction=true;
                        if (Unit[enemyindex].health <= 0) {
                            $(this).effect('explode');
                            Unit[enemyindex].alive=false;
                            $("#TEXT").append("<p>" + Unit[enemyindex].name + " has been killed</p>");
                            youwin();}
                        Break;
                    }
                }
                if (selectedaction === "guardAttack"){
                    var damage = Unit[selectedindex].attack -Unit[enemyindex].defense;
                    if (damage<0){damage = 0}
                    if((Unit[selectedindex].curtop - 100 === Unit[enemyindex].curtop && Unit[selectedindex].curleft ===Unit[enemyindex].curleft) || (Unit[selectedindex].curtop + 100 === Unit[enemyindex].curtop && Unit[selectedindex].curleft ===Unit[enemyindex].curleft) || (Unit[selectedindex].curleft - 100 === Unit[enemyindex].curleft && Unit[selectedindex].curtop ===Unit[enemyindex].curtop) || (Unit[selectedindex].curleft + 100 === Unit[enemyindex].curleft && Unit[selectedindex].curtop ===Unit[enemyindex].curtop)) {

                        $("#TEXT").append("<p>" + Unit[selectedindex].name + " Did " + damage + " damage to " + Unit[enemyindex].name + "\n</p>");
                        $(this).effect('shake');
                        Sword.play();
                        Unit[enemyindex].health -= damage;
                        Unit[selectedindex].usedaction=true;
                        if (Unit[enemyindex].health <= 0) {
                            $(this).effect('explode');
                            Unit[enemyindex].alive=false;
                            $("#TEXT").append("<p>" + Unit[enemyindex].name + " has been killed</p>");
                            youwin();}
                        Break;
                    }
                }
                if (selectedaction === "wizardLightning"){
                    var damage = 5 -Unit[enemyindex].resistance;
                    if (damage<0){damage = 0}
                    if(Unit[selectedindex].charge<3){
                        $("#TEXT").append("<p>" + Unit[selectedindex].name + " only has a charge of " + Unit[selectedindex].charge + ". She needs a charge of 3 to use Lightning\n</p>");
                        Break;}

                    $("#TEXT").append("<p>" + Unit[selectedindex].name + " Did " + damage + " damage to " + Unit[enemyindex].name + "\n</p>");
                    $(this).effect('pulsate');
                    Lightning.play();
                    Unit[enemyindex].health -= damage;
                    Unit[selectedindex].charge-=3;
                    Unit[selectedindex].usedaction=true;
                    if (Unit[enemyindex].health<=0){
                        $(this).effect('explode');
                        Unit[enemyindex].alive=false;
                        $("#TEXT").append("<p>" + Unit[enemyindex].name + " has been killed</p>");
                        youwin();}
                    Break;
                }
                if (selectedaction === "wizardDisrupt"){
                    if(Unit[selectedindex].charge<2){
                        $("#TEXT").append("<p>" + Unit[selectedindex].name + " only has a charge of " + Unit[selectedindex].charge + ". She needs a charge of 2 to use Disrupt\n</p>");
                        Break;}
                    if(Unit[enemyindex].type==="ESoldier" || Unit[enemyindex].type==="ETemplar" || Unit[enemyindex].type==="EGuard" || Unit[enemyindex].type==="ERouge"){
                        $("#TEXT").append("<p>This enemy doesn't have a charge\n</p>");
                        Break;}

                    $("#TEXT").append("<p>" + Unit[enemyindex].name + "'s charge has been reduced to 0.\n</p>");
                    $(this).effect('pulsate');
                    Disrupt.play();
                    Unit[selectedindex].charge-=2;
                    Unit[enemyindex].charge=0;
                    Unit[selectedindex].usedaction=true;
                    Break;
                }
                if (selectedaction === "mageFire"){
                    var damage = 3 -Unit[enemyindex].resistance;
                    if (damage<0){damage = 0}
                    if((Unit[selectedindex].curtop - 100 === Unit[enemyindex].curtop && Unit[selectedindex].curleft ===Unit[enemyindex].curleft) || (Unit[selectedindex].curtop + 100 === Unit[enemyindex].curtop && Unit[selectedindex].curleft ===Unit[enemyindex].curleft) || (Unit[selectedindex].curleft - 100 === Unit[enemyindex].curleft && Unit[selectedindex].curtop ===Unit[enemyindex].curtop) || (Unit[selectedindex].curleft + 100 === Unit[enemyindex].curleft && Unit[selectedindex].curtop ===Unit[enemyindex].curtop) || (Unit[selectedindex].curtop - 200 === Unit[enemyindex].curtop && Unit[selectedindex].curleft ===Unit[enemyindex].curleft) || (Unit[selectedindex].curtop + 200 === Unit[enemyindex].curtop && Unit[selectedindex].curleft ===Unit[enemyindex].curleft) || (Unit[selectedindex].curleft - 200 === Unit[enemyindex].curleft && Unit[selectedindex].curtop ===Unit[enemyindex].curtop) || (Unit[selectedindex].curleft + 200 === Unit[enemyindex].curleft && Unit[selectedindex].curtop ===Unit[enemyindex].curtop)) {
                        if(Unit[selectedindex].charge<1){
                            $("#TEXT").append("<p>" + Unit[selectedindex].name + "  only has a charge of " + Unit[selectedindex].charge + ". He needs a charge of 1 to use Fire\n</p>")
                            Break;}
                        $("#TEXT").append("<p>" + Unit[selectedindex].name + " Did " + damage + " damage to " + Unit[enemyindex].name + "\n</p>");
                        $(this).effect('pulsate');
                        Fire.play();
                        Unit[enemyindex].health -= damage;
                        Unit[selectedindex].charge-=1;
                        Unit[selectedindex].usedaction=true;
                        if (Unit[enemyindex].health <= 0) {
                            $(this).effect('explode');
                            Unit[enemyindex].alive=false;
                            $("#TEXT").append("<p>" + Unit[enemyindex].name + " has been killed</p>");
                            youwin();}
                        Break;
                    }
                }
            }
        });

        //Use actions on allies
        $('.unit').mousedown(function(e){
            if(e.button === 2){
                if (Unit[selectedindex].usedaction===true){
                    $("#TEXT").append("<p>" + Unit[selectedindex].name + " has already used an action this turn</p>");
                    Break;
                }
                if (Unit[selectedindex].aparalyzed===true){
                    $('#TEXT').append("<p>" + Unit[selectedindex].name + " is paralyzed</p>");
                    Break;
                }
                //determine ally's number
                for (var i = 0; i < Unit.length; i++) {
                    if (Unit[i].name === this.name) {
                        enemyindex = i;
                    }}

                $(this).effect("pulsate");
                Shield.play();
                if (selectedaction === "templarShield"){

                    if((Unit[selectedindex].curtop - 150 === Unit[enemyindex].curtop && Unit[selectedindex].curleft ===Unit[enemyindex].curleft) || (Unit[selectedindex].curtop + 150 === Unit[enemyindex].curtop && Unit[selectedindex].curleft ===Unit[enemyindex].curleft) || (Unit[selectedindex].curleft - 150 === Unit[enemyindex].curleft && Unit[selectedindex].curtop ===Unit[enemyindex].curtop) || (Unit[selectedindex].curleft + 150 === Unit[enemyindex].curleft && Unit[selectedindex].curtop ===Unit[enemyindex].curtop)) {
                        if (Unit[selectedindex].usedShield === true){
                            $("#TEXT").append("<p>" + Unit[selectedindex].name + "'s shield has already been used this game\n</p>");
                            Break;}
                        Unit[enemyindex].resistance+=2;
                        $("#TEXT").append("<p>" + Unit[enemyindex].name + "'s resistance permanently rose to " + Unit[enemyindex].resistance + "\n</p>");
                        Unit[selectedindex].usedShield = true;
                        Unit[selectedindex].usedaction=true;
                        Break;
                    }
                }


            }
        });



//end of startingicon
    });




}//end of starting game
    startinggame();




//create spaces//
    for (var i = 1; i<26; i++) {
        $("#background").append("<div class='areas' id = 'space" + vert + horz + "' style ='position: absolute; LEFT: " + addLeft + "px; Top:" + addTop + "px'></div>");

        if (addLeft < 400) {
            addLeft += 100;
            vert+=1;
        } else {
            horz+=1;
            addTop += 100;
            addLeft = 65;
            vert=1;
        }
    }

    //create enemy methods
    function ESoldier(index){
        this.type= "Soldier";
        this.attack= 2;
        this.defense= 2;
        this.resistance= 0;
        this.health= 5;
        this.paralyzed=false;
        this.usedspecial=false;
        this.index=index;
        this.attacked=false;
        this.alive=true;
        this.charge= "None";
        if (index===3){
            var newtop = 85;
            var newleft=75;
            this.name="Bane";
        } else if (index===4){
            var newtop = 85;
            var newleft=175;
            this.name="Thrasher";
        } else if (index===5) {
            var newtop = 85;
            var newleft = 275;
            this.name="Chainer";
        }else if (index===6) {
            var newtop = 85;
            var newleft = 375;
            this.name="Bulk";
        }else if (index===7) {
            var newtop = 85;
            var newleft = 475;
            this.name="Deathcheck";
        }

        this.curleft=newleft;
        this.curtop=newtop;

        $('#background').append('<img STYLE="position:absolute; TOP:'+ newtop + 'px; LEFT:' + newleft + 'px;" class="Eunit" name= ' + this.name + ' src="gamepictures/Esoldier.jpg"/>');
    }
    function EWizard(index){
        this.attack= "None";
        this.type= "Wizard";
        this.charge= 0;
        this.lightning=5;
        this.defense= 0;
        this.resistance= 4;
        this.health= 3;
        this.paralyzed=false;
        this.index=index;
        this.attacked=false;
        this.alive=true;
        if (index===3){
            var newtop = 85;
            var newleft=75;
            this.name="Mordoc";
        } else if (index===4){
            var newtop = 85;
            var newleft=175;
            this.name="Pine";
        } else if (index===5) {
            var newtop = 85;
            var newleft = 275;
            this.name="Sidius";
        }else if (index===6) {
            var newtop = 85;
            var newleft = 375;
            this.name="Torment";
        }else if (index===7) {
            var newtop = 85;
            var newleft = 475;
            this.name="Finale";
        }

        this.curleft=newleft;
        this.curtop=newtop;

        $('#background').append('<img STYLE="position:absolute; TOP:'+ newtop + 'px; LEFT:' + newleft + 'px;" class="Eunit"  name= ' + this.name + ' src="gamepictures/Ewizard.jpg"/>');
    }
    function ERouge(index){
        this.type= "Rouge";
        this.attack= 1;
        this.defense= 1;
        this.resistance= 1;
        this.health= 4;
        this.paralyzed=false;
        this.index=index;
        this.attacked=false;
        this.alive=true;
        this.charge= "None";
        this.usedparalyze=3;
        if (index===3){
            var newtop = 85;
            var newleft=75;
            this.name="Shadow";
        } else if (index===4){
            var newtop = 85;
            var newleft=175;
            this.name="Darkwater";
        } else if (index===5) {
            var newtop = 85;
            var newleft = 275;
            this.name="Nightwatch";
        }else if (index===6) {
            var newtop = 85;
            var newleft = 375;
            this.name="Knives";
        }else if (index===7) {
            var newtop = 85;
            var newleft = 475;
            this.name="Wounds";
        }
        this.curleft=newleft;
        this.curtop=newtop;

        $('#background').append('<img STYLE="position:absolute; TOP:'+ newtop + 'px; LEFT:' + newleft + 'px;" class="Eunit"  name= ' + this.name + ' src="gamepictures/ERouge.jpg"/>');
    }
    function EGuard(index){
        this.type= "Guard";
        this.attack= 1;
        this.defense= 2;
        this.resistance= 2;
        this.health= 5;
        this.paralyzed=false;
        this.index=index;
        this.attacked=false;
        this.alive=true;
        this.charge= "None";
        if (index===3){
            var newtop = 85;
            var newleft=75;
            this.name="Bull";
        } else if (index===4){
            var newtop = 85;
            var newleft=175;
            this.name="Donkey";
        } else if (index===5) {
            var newtop = 85;
            var newleft = 275;
            this.name="Mule";
        }else if (index===6) {
            var newtop = 85;
            var newleft = 375;
            this.name="Ox";
        }else if (index===7) {
            var newtop = 85;
            var newleft = 475;
            this.name="Horse";
        }
        this.curleft=newleft;
        this.curtop=newtop;

        $('#background').append('<img STYLE="position:absolute; TOP:'+ newtop + 'px; LEFT:' + newleft + 'px;" class="Eunit"  name= ' + this.name + ' src="gamepictures/Eguard.jpg"/>');
    }
    function ETemplar(index){
        this.type= "Templar";
        this.attack= 2;
        this.defense= 0;
        this.resistance= 3;
        this.health= 5;
        this.paralyzed=false;
        this.index=index;
        this.attacked=false;
        this.alive=true;
        this.charge= "None";
        if (index===3){
            var newtop = 85;
            var newleft=75;
            this.name="Gallows";
        } else if (index===4){
            var newtop = 85;
            var newleft=175;
            this.name="Guillotine";
        } else if (index===5) {
            var newtop = 85;
            var newleft = 275;
            this.name="Plunge";
        }else if (index===6) {
            var newtop = 85;
            var newleft = 375;
            this.name="Electrocute";
        }else if (index===7) {
            var newtop = 85;
            var newleft = 475;
            this.name="Sickness";
        }
        this.curleft=newleft;
        this.curtop=newtop;

        $('#background').append('<img STYLE="position:absolute; TOP:'+ newtop + 'px; LEFT:' + newleft + 'px;" class="Eunit"  name= ' + this.name + ' src="gamepictures/Etemplar.jpg"/>');
    }
    function EMage(index){
        this.type= "Mage";
        this.attack= "None";
        this.defense= 1;
        this.resistance= 1;
        this.health= 4;
        this.paralyzed=false;
        this.index=index;
        this.attacked=false;
        this.charge=0;
        this.alive=true;
        if (index===3){
            var newtop = 85;
            var newleft=75;
            this.name="Mystery";
        } else if (index===4){
            var newtop = 85;
            var newleft=175;
            this.name="Enigma";
        } else if (index===5) {
            var newtop = 85;
            var newleft = 275;
            this.name="Unknown";
        }else if (index===6) {
            var newtop = 85;
            var newleft = 375;
            this.name="Myth";
        }else if (index===7) {
            var newtop = 85;
            var newleft = 475;
            this.name="Legend";
        }
        this.curleft=newleft;
        this.curtop=newtop;

        $('#background').append('<img STYLE="position:absolute; TOP:'+ newtop + 'px; LEFT:' + newleft + 'px;" class="Eunit"  name= ' + this.name + ' src="gamepictures/Emage.jpg"/>');
    }
//create ally methods
    function Soldier(index){
        this.type= "Soldier";
        this.attack= 2;
        this.defense= 2;
        this.resistance= 0;
        this.health= 5;
       this.charge= "none";
       this.usedspecial=false;
        this.moved=false;
        this.usedaction=false;
        this.index=index;
        this.aparalyzed=false;

       if (index===0){
           var newtop = 485;
           var newleft=175;
           this.name="Joe";
       } else if (index===1){
           var newtop = 485;
           var newleft=275;
           this.name="Bill";
       } else if (index===2) {
           var newtop = 485;
           var newleft = 375;
           this.name="Saul";
       }

       this.curleft=newleft;
       this.curtop=newtop;
            $('#background').append('<img STYLE="position:absolute; TOP:'+ newtop + 'px; LEFT:' + newleft + 'px;" class="unit" name= ' + this.name + ' src="gamepictures/soldier.jpg"/>');
    }
    function Wizard(index){
        this.attack= "None";
        this.type= "Wizard";
        this.charge= 0;
        this.lightning=5;
        this.defense= 0;
        this.resistance= 4;
        this.health= 3;
        this.moved=false;
        this.usedaction=false;
        this.index=index;
        this.aparalyzed=false;
        if (index===0){
            var newtop = 485;
            var newleft=175;
            this.name="Merlin";
        } else if (index===1){
            var newtop = 485;
            var newleft=275;
            this.name="Voldon";
        } else if (index===2) {
            var newtop = 485;
            var newleft = 375;
            this.name="Rubin";
        }

        this.curleft=newleft;
        this.curtop=newtop;

        $('#background').append('<img STYLE="position:absolute; TOP:'+ newtop + 'px; LEFT:' + newleft + 'px;" class="unit"  name= ' + this.name + ' src="gamepictures/wizard.jpg"/>');
    }
    function Rouge(index){
        this.type= "Rouge";
        this.attack= 1;
        this.defense= 1;
        this.resistance= 1;
        this.health= 4;
        this.usedparalyze=3;
        this.charge= "none";
        this.moved=false;
        this.usedaction=false;
        this.index=index;
        this.aparalyzed=false;
        if (index===0){
            var newtop = 485;
            var newleft=175;
            this.name="Jennifer";
        } else if (index===1){
            var newtop = 485;
            var newleft=275;
            this.name="Sneaks";
        } else if (index===2) {
            var newtop = 485;
            var newleft = 375;
            this.name="Shirley";
        }
        this.curleft=newleft;
        this.curtop=newtop;

        $('#background').append('<img STYLE="position:absolute; TOP:'+ newtop + 'px; LEFT:' + newleft + 'px;" class="unit"  name= ' + this.name + ' src="gamepictures/rouge.jpg"/>');
    }
    function Guard(index){
        this.type= "Guard";
        this.attack= 1;
        this.defense= 2;
        this.resistance= 2;
        this.health= 5;
        this.charge= "none";
        this.moved=false;
        this.usedaction=false;
        this.index=index;
        this.aparalyzed=false;
        if (index===0){
            var newtop = 485;
            var newleft=175;
            this.name="Victor";
        } else if (index===1){
            var newtop = 485;
            var newleft=275;
            this.name="Bigs";
        } else if (index===2) {
            var newtop = 485;
            var newleft = 375;
            this.name="Papabear";
        }
        this.curleft=newleft;
        this.curtop=newtop;

        $('#background').append('<img STYLE="position:absolute; TOP:'+ newtop + 'px; LEFT:' + newleft + 'px;" class="unit"  name= ' + this.name + ' src="gamepictures/guard.jpg"/>');
    }
    function Templar(index){
        this.type= "Templar";
        this.attack= 2;
        this.defense= 0;
        this.resistance= 3;
        this.health= 5;
        this.usedShield=false;
        this.charge= "none";
        this.moved=false;
        this.usedaction=false;
        this.index=index;
        this.aparalyzed=false;
        if (index===0){
            var newtop = 485;
            var newleft=175;
            this.name="Joseph";
        } else if (index===1){
            var newtop = 485;
            var newleft=275;
            this.name="David";
        } else if (index===2) {
            var newtop = 485;
            var newleft = 375;
            this.name="Jeremiah";
        }
        this.curleft=newleft;
        this.curtop=newtop;

        $('#background').append('<img STYLE="position:absolute; TOP:'+ newtop + 'px; LEFT:' + newleft + 'px;" class="unit"  name= ' + this.name + ' src="gamepictures/templar.jpg"/>');
    }
    function Mage(index){
        this.type= "Mage";
        this.attack= "None";
        this.defense= 1;
        this.resistance= 1;
        this.health= 4;
        this.charge=0;
        this.moved=false;
        this.usedaction=false;
        this.index=index;
        this.aparalyzed=false;
        if (index===0){
            var newtop = 485;
            var newleft=175;
            this.name="Diana";
        } else if (index===1){
            var newtop = 485;
            var newleft=275;
            this.name="Electra";
        } else if (index===2) {
            var newtop = 485;
            var newleft = 375;
            this.name="Red";
        }
        this.curleft=newleft;
        this.curtop=newtop;

        $('#background').append('<img STYLE="position:absolute; TOP:'+ newtop + 'px; LEFT:' + newleft + 'px;" class="unit"  name= ' + this.name + ' src="gamepictures/mage.jpg"/>');
    }

    //create enemies
    $("#TEXT").append("Welcome, General. You must defend the castle from these waves of enemies.You can only have three Units per wave, so make sure to use their strengths against the enemies' weaknesses.");

    Unit[3]=new ESoldier(4);
    Unit[4]=new ESoldier(5);

    //select enemy unit's stats
    $('.Eunit').click(function(){
        //gives stats on selected unit
        for (var i = 3; i < 50; i++) {
            if (Unit[i].name === this.name) {
                $('#TEXT').empty();
                $('#TEXT').append("<ul>Stats for " + Unit[i].name + " <li>Type: " + Unit[i].type + "</li> <li>Attack: " + Unit[i].attack + "</li> <li>Defense: " + Unit[i].defense + "</li><li>Resistance: " + Unit[i].resistance + "</li><li>Charge: " + Unit[i].charge + "</li><li>Health: " + Unit[i].health + "</li></ul>");
                var curtype = Unit[i].type;
            }
        }
    });

//highlight spaces//
    $('.areas').mouseenter(function(){
        $(this).addClass("highlight")
    });
    $('.areas').mouseleave(function(){
        $(this).removeClass("highlight")
    });
    $('.areas').click(function(){
        $("*").removeClass("selected");
        $(this).addClass("selected");
       if ($(this).is(":empty")) {
            selectedunit = "";
        }
    });


    //rightclick to move units
    $('.areas').mousedown(function(e) {
        if(e.button === 2 ){

                switch(this.id){
                    case "space11":
                        var futureleft = 75;
                        var futuretop = 85;
                        break;
                    case "space21":
                        var futureleft = 175;
                        var futuretop = 85;
                        break;
                    case "space31":
                        var futureleft = 275;
                        var futuretop = 85;
                        break;
                    case "space41":
                        var futureleft = 375;
                        var futuretop = 85;
                        break;
                    case "space51":
                        var futureleft = 475;
                        var futuretop = 85;
                        break;
                    case "space12":
                        var futureleft = 75;
                        var futuretop = 185;
                        break;
                    case "space22":
                        var futureleft = 175;
                        var futuretop = 185;
                        break;
                    case "space32":
                        var futureleft = 275;
                        var futuretop = 185;
                        break;
                    case "space42":
                        var futureleft = 375;
                        var futuretop = 185;
                        break;
                    case "space52":
                        var futureleft = 475;
                        var futuretop = 185;
                        break;
                    case "space13":
                        var futureleft = 75;
                        var futuretop = 285;
                        break;
                    case "space23":
                        var futureleft = 175;
                        var futuretop = 285;
                        break;
                    case "space33":
                        var futureleft = 275;
                        var futuretop = 285;
                        break;
                    case "space43":
                        var futureleft = 375;
                        var futuretop = 285;
                        break;
                    case "space53":
                        var futureleft = 475;
                        var futuretop = 285;
                        break;
                    case "space14":
                        var futureleft = 75;
                        var futuretop = 385;
                        break;
                    case "space24":
                        var futureleft = 175;
                        var futuretop = 385;
                        break;
                    case "space34":
                        var futureleft = 275;
                        var futuretop = 385;
                        break;
                    case "space44":
                        var futureleft = 375;
                        var futuretop = 385;
                        break;
                    case "space54":
                        var futureleft = 475;
                        var futuretop = 385;
                        break;
                    case "space15":
                        var futureleft = 75;
                        var futuretop = 485;
                        break;
                    case "space25":
                        var futureleft = 175;
                        var futuretop = 485;
                        break;
                    case "space35":
                        var futureleft = 275;
                        var futuretop = 485;
                        break;
                    case "space45":
                        var futureleft = 375;
                        var futuretop = 485;
                        break;
                    case "space55":
                        var futureleft = 475;
                        var futuretop = 485;
                        break;
                }
            if((Unit[selectedindex].curtop - 100 === futuretop && Unit[selectedindex].curleft ===futureleft) || (Unit[selectedindex].curtop + 100 === futuretop && Unit[selectedindex].curleft ===futureleft) || (Unit[selectedindex].curleft - 100 === futureleft && Unit[selectedindex].curtop ===futuretop) || (Unit[selectedindex].curleft + 100 === futureleft && Unit[selectedindex].curtop ===futuretop)) {
               if (Unit[selectedindex].moved===true){
                   $('#TEXT').append("<p>" + Unit[selectedindex].name + " has already moved this turn</p>");
                   Break;
               }

                if (Unit[selectedindex].aparalyzed===true){
                    $('#TEXT').append("<p>" + Unit[selectedindex].name + " is paralyzed</p>");
                    Break;
                }
                $('.selectedUnit').animate({
                    left: futureleft+'px',
                    top: futuretop+'px'
                }, 500);
                Unit[selectedindex].curleft=futureleft;
                Unit[selectedindex].curtop=futuretop;
                Unit[selectedindex].moved=true;
            }
        }
    });



    //Done
});










