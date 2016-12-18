
var qnum=-1;
function queue(){
    qnum+=1;
    switch(qnum){
        case 1:
            enterChar("Archer4",620,180);
            enterChar("Enchantress",650,240);
            enterChar("Rouge2",620,290);
            movehor("Archer4",1);
            movehor("Enchantress",1);
            movehor("Rouge2",1);

            enterChar("Guard-C",0,180);
            enterChar("Thief2",0,240);
            enterChar("Knight-C",0,290);
            enterChar("Mage-C",-100,240);
            enterChar("Soldier-C",-100,180);

            movehor("Guard-C",150);
            movehor("Thief2",150);
            movehor("Knight-C",150);
            movehor("Soldier-C",150);
            movehor("Mage-C",150,"end");
        break
        case 2:
            dialog("Olive!","Guard-C")
        break
        case 3:
            movehor("Archer4",-1)
             movehor("Enchantress",-1)
              movehor("Rouge2",-1)
              dialog("Bernard!","Archer4")
        break
         case 4:
            dialog("We're here to save you!","Guard-C")
        break
         case 5:
           movehor("Rouge2",1)
           dialog("We have enemy incoming!","Rouge2")
        break
         case 6:
             dialog("I was afraid of this.","Thief2")
        break
         case 7:
           dialog("This platform won't retract with people on it unless all enemies are defeated.","Thief2")
        break
         case 8:
         movevert("Knight-C",-1)
           dialog("So, we'll wait until they finish?","Knight-C")
        break
          case 9:
           dialog("Afraid it's not that simple.","Thief2")
        break
        case 10:
           dialog("The controllers know we are trying to escape.","Thief2")
        break
         case 11:
           dialog("They will send more creatures to try to kill them before they can escape.","Thief2")
        break
         case 12:
         movevert("Guard-C",1)
           dialog("We have to do something.","Guard-C")
        break
         case 13:
           dialog("Go on without us!","Archer4")
        break
        case 14:
           dialog("She doesn't speak for all of us!","Enchantress")
        break
        case 15:
           dialog("The platform won't retract, but it will extend.","Guard-C")
        break
         case 16:
           dialog("Send me!","Guard-C")
        break
         case 17:
           dialog("Send us.","Knight-C")
        break
         case 18:
           dialog("Me too!","Soldier-C")
        break
        case 19:
           dialog("Ok, it can only hold three. You three help them, and Tina and I will make sure the platform still works when you are done.","Thief2")
        break
          case 20:
          movehor("Guard-C",1)
           dialog("We're coming Olive!","Guard-C")
        break
        case 21:
           window.location.href = '../22_cell2/cell-start.html'
        break
    }
}

//window.location.href = './beforeairship.html'

$(window).load(function(){
    changesong("01/Hurry.mp3")
     queue()   
    
});