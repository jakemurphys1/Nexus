
var qnum=-1;

function queue(){
    qnum+=1;
    switch(qnum){
        case 1:
            enterChar("Wizard2",250,200);
            enterChar("Templar1",300,200);
            enterChar("Guard",350,200);
            enterChar("Mage2",400,200);
            enterChar("Soldier2",450,200);
            enterChar("Archer4",500,200);
            enterChar("Enchantress",550,200);
              enterChar("Thief1",410,500,"moving_back");
             movevert("Thief1",-150,"end")
                 changesong("Drummer.wav")
            break
        case 2:
             dialog("Welcome to day 2.","Thief1")
            break
        case 3:
            dialog("Today will be tougher than the last.","Thief1")
            break
        case 4:
            dialog("This group will be stronger and smarter.","Thief1")
        break
         case 5:
            dialog("They will be moving this time, so plan ahead.","Thief1")
        break
        case 6:
            dialog("However, this time, we have a new ally.","Thief1")
        break
        case 7:
            movehor("Thief1",145,"end")
        break
        case 8:
            movevert("Thief1",-1,"end")
        break
        case 9:
            dialog("We now have an enchantress.","Thief1")
        break
         case 10:
            dialog("She should be able to help a little, but we need to stay vigilant.","Thief1")
        break
         case 11:
            dialog("If we use our potions correctly, and pay attention to our enemy's movements, we should be able to survive this.","Thief1")
        break
        case 12:
            dialog("Now Move out!","Thief1")
        break
         case 13:
            window.location.href = '../16_arena2/Arena.html'
        break
    }
}

$(window).load(function(){
    doeffect("Dramatic.wav")
    saving("15")
     opening("Chapter Seven:","Back to the Arena")
});