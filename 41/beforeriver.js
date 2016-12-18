
var qnum=0;

function queue(){
    qnum+=1;
    switch(qnum){
        case 1:
            enterChar("Knight",-100,300);
            enterChar("Archer2",-100,370);
            enterChar("Sorcerer",-100,440);
            enterChar("Mimic",-100,230);
            enterChar("fisherman",-100,160);
            
            enterChar("Templar1",-200,300);
            enterChar("Wizard1",-200,370);
            enterChar("Rouge1",-200,440);
            enterChar("Sandra",-200,230);
            enterChar("Guard",-300,160);
            
            enterChar("Thief1",-300,300);
            enterChar("Enchantress",-300,370);
            enterChar("Healer1",-300,440);
            enterChar("Soldier2",-300,230);
            enterChar("fisherman2",-300,160);
            
            enterChar("fisherman3",-400,300);
            enterChar("fisherman4",-400,370);
            
            movehor("Knight",700,"end")
            movehor("Archer2",600)
            movehor("Sorcerer",600)
            movehor("Mimic",600)
            movehor("fisherman",600)
            movehor("fisherman2",600)
            movehor("fisherman3",600)
            movehor("fisherman4",600)
            
            movehor("Templar1",600)
            movehor("Wizard1",600)
            movehor("Rouge1",600)
            movehor("Sandra",600)
            movehor("Guard",600)
            movehor("Thief1",600)
            movehor("Enchantress",600)
            
            movehor("Healer1",600)
            movehor("Soldier2",600)
        break
        case 2:
        movevert("Knight",-1)
            dialog("The bridge has been destroyed,.","Knight")
        break
        case 3:
        movehor("fisherman",50,"end")
        break
        case 4:
                movevert("fisherman",1)
                movevert("Knight",-1)
            dialog("I have a raft upsteam by the Nexus.","fisherman")
        break
        case 5:
            dialog("But I can only take one person across a time.","fisherman")
        break
        case 6:
        movehor("Knight",-1)
            dialog("Ok, I guess that's the only plan we have.","Knight")
        break
        case 7:
            dialog("There will be enemies across the river, so we will have to send soldiers first to remove them.","Knight")
        break
        case 8:
            dialog("Then we can send the civilians.","Knight")
        break
        case 9:
        movehor("Wizard1",1)
            dialog("Once again, we cannot allow any of them to die. However, since the rest of us are bonded, we don't all have to cross.","Knight")
        break
        case 10:
            dialog("Once all the civilians are across and all enemies on that side are neutralized, just continue to the airship.","Knight")
        break
        case 11:
            dialog("The rest of us will just appear at the new Nexus on the ship.","Knight")
        break
        case 12:
            dialog("Ok, I'll get the raft ready.","fisherman")
        break
        case 13:
            movevert("fisherman",-200)
            delay(1000)
        break
        case 14:
            window.location.href = '../42_rescue2/river.html'
        break
    }
}

//window.location.href = './beforeairship.html'

$(window).load(function(){
changesong("01/Hurry.mp3")
saving("41")
        
    
});