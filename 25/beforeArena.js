
var qnum=-1;

function queue(){
    qnum+=1;
    switch(qnum){
        case 1:
             movevert("Thief1",-150,"end")
                 changesong("Drummer.wav")
            break
        case 2:
             dialog("Welcome to day 3.","Thief1")
            break
        case 3:
            dialog("We're done well so far, but we're in for a tough fight today.","Thief1")
            break
        case 4:
            dialog("They want us to lose this one.","Thief1")
        break
         case 5:
            dialog("They plan for us to lose this one.","Thief1")
        break
        case 6:
            dialog("On top of fighting those soldiers, there will be a sorcerer hitting us with lightning.","Thief1")
        break
        case 7:
            dialog("We cannot touch him or stop him in anyway.","Thief1")
        break
        case 8:
            dialog("Our only option is to destroy all the enemies before he destroys us.","Thief1")
        break
        case 9:
        movevert("Thief1",1)
            dialog("I know I said failure wasn't an option, but if we fail today.","Thief1")
        break
         case 10:
            dialog("Know that you have all fought well and bravely.","Thief1")
        break
         case 11:
            dialog("It is the life of the slave to be fleeting.","Thief1")
        break
        case 12:
        movevert("Thief1",-1)
            dialog("Now Move out!.","Thief1")
        break
         case 13:
            window.location.href = '../26_arena3/Arena.html'
        break
    }
}

$(window).load(function(){
    doeffect("Dramatic.mp3")
            enterChar("Wizard2",250,200);
            enterChar("Templar1",300,200);
            enterChar("Guard",350,200);
            enterChar("Mage2",400,200);
            enterChar("Soldier2",450,200);
            enterChar("Archer4",500,200);
            enterChar("Enchantress",550,200);
              enterChar("Thief1",410,500);
     opening("Chapter Eleven:","Breaking the Wall")
});