
var qnum=0;

function queue(){
    qnum+=1;
    switch(qnum){
        case 1:
            addobject("nexus",350,300)
            enterChar("Templar1",450,400);
            enterChar("Wizard1",400,400);
            enterChar("Rouge1",350,400);
            enterChar("Sandra",300,400);
            enterChar("Guard",250,400);
            enterChar("Thief1",200,400);
            enterChar("Enchantress",150,400);
            enterChar("Healer1",100,400);
            enterChar("Soldier2",500,400);
            
            enterChar("Knight",350,-100);
            enterChar("Archer2",300,-100);
            enterChar("Sorcerer",400,-100);
            
            enterChar("Mimic",350,-200);
            enterChar("fisherman",300,-200);
            enterChar("fisherman2",400,-200);
            enterChar("fisherman3",450,-200);
            enterChar("fisherman4",500,-200);
            
            movevert("Knight",300)
            movevert("Archer2",300)
            movevert("Sorcerer",300)
            
            movevert("Mimic",300)
            movevert("fisherman",300)
            movevert("fisherman2",300)
            movevert("fisherman3",300)
            movevert("fisherman4",300,"end")
        break
        case 2:
            dialog("Report!","Knight")
        break
        case 3:
            movevert("Templar1",-1);
            movevert("Wizard1",-1);
            movevert("Rouge1",-1);
            movevert("Sandra",-1);
            movevert("Guard",-1);
            movevert("Thief1",-1);
            movevert("Enchantress",-1);
            movevert("Healer1",-1);
            movevert("Soldier2",-1);
            dialog("The brush up ahead is filled with the horde!","Thief1")
        break
        case 4:
            dialog("Is there another way around?","Knight")
        break
        case 5:
            dialog("This is the only way to get to the bridge.","Thief1")
        break
        case 6:
            dialog("Then we will have to force our way through.","Knight")
        break
        case 7:
            dialog("I can bond with you in the Nexus, but my friends here can't.","Mimic")
        break
        case 8:
        movevert("Knight",-1)
            dialog("Fine, we will protect them. There is another Nexus across the way.","Knight")
        break
        case 9:
        movevert("Knight",1)
            dialog("They won't be able to bond with it, but we must get them across and into it.","Knight")
        break
        case 10:
            dialog("We cannot allow any of the civilians to die.","Knight")
        break
        case 11:
            dialog("Once we have all of the civilians into the Nexus, we can continue.","Knight")
        break
        case 12:
            dialog("Since it will be so close quarters, we can exchange between any two groups as long as they are within 6 spaces of one another.","Knight")
        break
        case 13:
            dialog("Now, let's go!","Knight")
        break
        case 14:
            window.location.href = '../40_rescue1/rescue2.html'
        break
    }
}

//window.location.href = './beforeairship.html'

$(window).load(function(){
changesong("01/Hurry.mp3")

        
    
});