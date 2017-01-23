
var qnum=0;
var height=2;

function queue(){
    qnum+=1;
    switch(qnum){
        case 1:

            
            enterChar("Thief2",250,340,"no","moving_front");
            enterChar("Archer4",250,290,"no","moving_front");
            enterChar("Knight-C",250,240,"no","moving_front");
            enterChar("Soldier-C",250,190,"no","moving_front");
            enterChar("Rouge2",250,140,"no","moving_front");
            enterChar("Mage-C",250,90,"no","moving_front");
  
            movevert("Thief2",100,"end")
            movevert("Archer4",100,"no")
            movevert("Knight-C",100,"no")
            movevert("Soldier-C",100,"no")
            movevert("Rouge2",100,"no")
            movevert("Mage-C",100,"no")


            break;
        case 2:
               enterChar("Enchantress",250,90);
            enterChar("Guard-C",250,140);
            movevert("Guard-C",150)
            movevert("Enchantress",150,"end")
            
            movehor("Archer4",50)
            movehor("Knight-C",50)
            movehor("Soldier-C",-50)
            movevert("Rouge2",150)
            movevert("Mage-C",150)
             movevert("Thief2",-1)

            break
        case 3:
            movehor("Rouge2",-100)
            movehor("Mage-C",-100)
              movevert("Guard-C",100)
            movevert("Enchantress",100)
            dialog("Is everyone inside the triangle?","Thief2")
            break
        case 4:
       movevert("Mage-C",1)
        movevert("Knight-C",1)
         movevert("Archer4",1)
          movevert("Rouge2",1)
           movevert("Soldier-C",50,"end")
           
            break
        case 5:
         dialog("I think so.","Mage-C")
        break
         case 6:
       dialog("Here we go!","Thief2")
        break
        case 7:
        addobject("powerup",85,180,400)
        doeffect("teleport.mp3")
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
    saving("33")
});