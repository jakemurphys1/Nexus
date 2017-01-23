
var qnum=0;
var height=2;

function queue(){
    qnum+=1;
    switch(qnum){
        case 1:
            enterChar("Sorcerer",200,50);
            enterChar("Archer2",280,0);
            enterChar("Wizard1",220,120);
            enterChar("Templar1",500,70);
            enterChar("Edgar",450,90);
            enterChar("Healer1",450,0);
            enterChar("Rouge2",350,20);
            enterChar("Knight",680,70);
            enterChar("Sandra",370,80);
            movehor("Knight",-100,"end")
            break;
        case 2:
             movevert("Knight",70,"end")
            break
        case 3:
            movehor("Knight",-160,"end")
            break
        case 4:
       movevert("Knight",-1,"end")
            break
        case 5:
         dialog("Is everyone accounted for?","Knight")
        break
         case 6:
         movevert("Wizard1",1)
        dialog("I think everyone is here.","Wizard1")
        break
        case 7:
            movevert("Archer2",100,"end")
        break
        case 8:
        movehor("Archer2",1)
        dialog("How far are we from the Arena?","Archer2")
        break
         case 9:
         movehor("Knight",-1)
            dialog("I think we just plowed through it!","Knight") 
        
        break
         case 10:
        movehor("Knight",-30,"end")
        break
         case 11:
         movevert("Knight",-1)
        dialog("Sandra, we're going back there to search for the people you saw in your dreams.","Knight")
        break
         case 12:
        dialog("It won't be easy. I'm sure the owners aren't happy we just destroyed their arena.","Knight")
        break
         case 13:
         dialog("So keep you eyes open and tell us if you see them.","Knight")
        break
         case 14:
         
            enterChar("Thief1",-100,400);
            enterChar("Guard",-150,450);
            enterChar("Enchantress",-100,500);
            movehor("Thief1",1000,"no","fast")
            movehor("Guard",1000,"no","fast")
            movehor("Enchantress",1000,"end","fast")
        break
          case 15:
              dialog("I think that was them!","Sandra")
        break
        case 16:
        movevert("Knight",1)
              dialog("That was easy.","Wizard1")
        break
        case 17:
              dialog("Let's go. We have to help them.","Knight")
        break
          case 18:
              window.location.href = 'escape3.html'
        break
    }
}

$(window).load(function(){
    changesong("01/Hurry.mp3")
});