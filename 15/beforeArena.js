
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
              enterChar("Thief1",410,500);
             movevert("Thief1",-150,"end")
                 changesong("Drummer.wav")
            break
        case 2:
             dialog("Welcome to day 2.","Thief1")
            break
        case 3:
            dialog("But today will be tougher.","Thief1")
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
            dialog("This is an enchantress.","Thief1")
        break
         case 10:
            dialog("She can absorb energy from enemies to be used later for powerful enchantments.","Thief1")
        break
         case 11:
            dialog("Try to stock up on energy early; we're going to need it.","Thief1")
        break
        case 12:
            dialog("Move out!.","Thief1")
        break
         case 13:
            window.location.href = '../16_Arena2/Arena.html'
        break
    }
}

$(window).load(function(){
    doeffect("Dramatic.wav")

     opening("Chapter Seven:","Back to the Arena")
});