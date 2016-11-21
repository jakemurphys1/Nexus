
var qnum=0;
var height=2;

function queue(){
    qnum+=1;
    switch(qnum){
        case 1:

        delay(2000)

            break;
        case 2:
                        addobject("diamond",100,300)
            addobject("diamond",400,300)
            addobject("diamond",250,500)
            addobject("powerup",85,180,400)
            doeffect("teleport.wav")
            
            enterChar("Thief2",250,440);
            enterChar("Archer4",300,390);
            enterChar("Knight2",300,340);
            enterChar("Soldier2",200,340);
            enterChar("Rouge2",150,390);
            enterChar("Mage2",150,330);
            enterChar("Enchantress",250,340);
            enterChar("Guard",250,390);
            movevert("Thief2",-1)
        delay(1000)
            break
        case 3:
        $("#powerup").remove()
        dialog("Is that it.. Are we free?","Guard")
            break
        case 4:
       dialog("Yes, you are free.","Thief2")
            break
        case 5:
         movevert("Enchantress",-50)
         movevert("Knight2",-50)
         movehor("Guard",20)
         movehor("Archer4",-20)
         dialog("WE'RE FREE!","Guard")
        break
         case 6:
         movevert("Enchantress",1)
         movevert("Knight2",1)
         movehor("Guard",-20)
         movehor("Soldier",30)
        dialog("Can you tell us why they imprisoned us?","Soldier2")
        break
        case 7:
        movevert("Archer4",1)
         movevert("Guard",1)
        dialog("Defeating beasts like that produced a lot of energy. They were selling that energy to the wealthy.","Thief2")
        break
        case 8:
        dialog("We were forced to suffer like that just to make a bunch of snob's lives slightly easier?","Knight2")
        break
         case 9:
         movehor("Mage2",1)
         dialog("If it helps, I don't think those snobs knew where the power came from. And I doubt they cared.","Mage2")
        break
         case 10:
         movehor("Knight2",-1)
         dialog("They just paid to have energy.","Mage2")
        break
         case 11:
            dialog("Won't they just capture more people to power it?","Soldier2")
        break
         case 12:
          dialog("It costs money to do so, and I think their source of income just ran out the door.","Thief2")
        break
        case 13:
          dialog("Nevertheless, if people start going missing again, I know where to find them.","Thief2")
        break
         case 14:
         movevert("Knight2",1)
         dialog("And if they do, let us know.","Knight2")
        break
         case 15:
         dialog("Will do. For now, I'm sure you have plenty of family that will be relieved to find you all safe.","Thief2")
        break
          case 16:
          movehor("Guard",1)
           movehor("Archer4",-1)
          dialog("I think it's time I see your family's house by the beach.","Archer4")
        break
        case 17:
       dialog("It's probably been empty for years, so it might be a little dirty.","Guard")
        break
        case 18:
              dialog("We'll just have to clean it up together.","Archer4")
        break
        case 19:
        movehor("Guard",10)
        delay(2000)
        break
        case 20:
               window.location.href = 'city.html'
        break
    }
}

$(window).load(function(){
    changesong("01/peaceful.mp3")
});