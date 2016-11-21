
var qnum=0;
var height=2;

function queue(){
    qnum+=1;
    switch(qnum){
        case 1:
            addobject("diamond",100,300)
            addobject("diamond",400,300)
            addobject("diamond",250,500)

            
            enterChar("Thief2",250,340);
            enterChar("Archer4",250,290);
            enterChar("Knight2",250,240);
            enterChar("Soldier2",250,190);
            enterChar("Rouge2",250,140);
            enterChar("Mage2",250,90);
  
            movevert("Thief2",100,"end")
            movevert("Archer4",100,"no")
            movevert("Knight2",100,"no")
            movevert("Soldier2",100,"no")
            movevert("Rouge2",100,"no")
            movevert("Mage2",100,"no")


            break;
        case 2:
               enterChar("Enchantress",250,90);
            enterChar("Guard",250,140);
            movevert("Guard",150)
            movevert("Enchantress",150,"end")
            
            movehor("Archer4",50)
            movehor("Knight2",50)
            movehor("Soldier2",-50)
            movevert("Rouge2",150)
            movevert("Mage2",150)
             movevert("Thief2",-1)

            break
        case 3:
            movehor("Rouge2",-100)
            movehor("Mage2",-100)
              movevert("Guard",100)
            movevert("Enchantress",100)
            dialog("Is everyone inside the triangle?","Thief2")
            break
        case 4:
       movevert("Mage2",1)
        movevert("Knight2",1)
         movevert("Archer4",1)
          movevert("Rouge2",1)
           movevert("Soldier2",50,"end")
           
            break
        case 5:
         dialog("I think so.","Mage2")
        break
         case 6:
       dialog("Here we go!","Thief2")
        break
        case 7:
        addobject("powerup",85,180,400)
        doeffect("teleport.wav")
        delay(2000)
        break
        case 8:
        $(".Object").remove()
        delay(2000)
        break
         case 9:
         window.location.href = 'escape2.html'
        break
    }
}

$(window).load(function(){
    changesong("01/Hurry.mp3")
});