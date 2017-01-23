
var qnum=0;


function queue(){
    qnum+=1;
    switch(qnum){
        case 1:
            enterChar("Guard",420,200)
            enterChar("Rouge1",360,200)
            
            enterChar("Sandra",420,550,"no","moving_back")
            enterChar("Archer1",390,550,"no","moving_back")
            enterChar("Edgar",360,550,"end","moving_back")
            break
        case 2:
            movevert("Sandra",-250,"no")
            movevert("Edgar",-250,"no")
            movevert("Archer1",-230,"end")
            break
        case 3:
            dialog("Edgar, I'm glad you're here.","Guard")
            break
        case 4:
        dialog("Would never miss the hunt.","Edgar")
        break
         case 5:
        dialog("Is this your daughter?","Guard")
        break
        case 6:
        dialog("Yes, turns out she's a mage.","Edgar")
        break
        case 7:
        dialog("Yep, already burned down a tree.","Sandra")
        break
         case 8:
        dialog("Be quiet, honey","Edgar")
        break
         case 9:
        dialog("Listen, we have a problem.","Rouge1")
        break
         case 10:
        dialog("The train is out of coal, and the supplies are down a trail filled with beasts.","Rouge1")
        break
         case 11:
        dialog("It will be good practice before we get to the hunt. But first let's go over a few things.","Edgar")
        break
        case 12:
        movehor("Edgar",1)
        movehor("Sandra",-1)
        dialog("We are all different classes. In order to win battle, you need to understand when and how to use each class.","Edgar")
        break
         case 13:
        dialog("For instance, I am a Soldier, so I deal close-range physical damage.","Edgar")
        break
         case 14:
        dialog("Because it's a physical attack, whenever I attack an enemy, the damage is reduced by it's defense.","Edgar")
        break
         case 15:
        dialog("So, if my attack is 40, and the enemy's defense is 10, I would deal 30 damage to it.","Edgar")
        break
        case 16:
        dialog("You Sandra, however, are a mage, so you deal magical damage","Edgar")
        break
        case 17:
        dialog("Magical damage is reduced by an enemy's resistance instead.","Edgar")
        break
         case 18:
        dialog("So if you have an attack of 40, and you throw that fire at an enemy with resistance of 15, it will only do 25 damage.","Edgar")
        break
        case 19:
        dialog("We will need to remember those differences in battle.","Edgar")
        break
         case 20:
        dialog("You seem to be the only magic user here.","Edgar")
        break
         case 21:
        dialog("I'll let everyone else explain what they are.","Edgar")
        break
         case 22:
         movehor("Archer1",1)
        dialog("I'm an archer, so I can do physical damage to anyone. I have lower defenses than your father, so I try not to get too close to enemies.","Archer1")
        break
        case 23:
        movevert("Sandra",-1)
        movevert("Archer1",-1)
        dialog("I'm a rouge. Unlike Teresa, I can only shoot enemies in a straight line. However, I have some toxic arrows that can inflict status effects on enemies for a period of time.","Rouge1")
        break
        case 24:
        dialog("I can only use those arrows once per battle, but battles aren't too long, so use them often.","Rouge1")
        break
        case 25:
        dialog("I'm a guard. My attack is low, and I'm short range, but my real strength is my defenses.","Guard")
        break
        case 26:
        dialog("I have both high defense and resistance, not to mention every battle I start with a shield that protects my life.","Guard")
        break
        case 27:
        dialog("In later levels, I can use a 'Protect' ability, which redirects damage from an ally back to me.","Guard")
        break
        case 28:
        movehor("Sandra",-1)
        dialog("I was going to ask about levels. How can I level up and gain more abilities?","Sandra")
        break
        case 29:
        dialog("Killing enemies gives you energy. When you get enough, you can unlock new abilities.","Edgar")
        break
        case 30:
        dialog("But, remember, when you leave a nexus, the energy goes away, and so does the levels.","Edgar")
        break
        case 31:
        dialog("But leveling is fast and easy, so you should be able to get back up there fast.","Edgar")
        break
        case 32:
        dialog("Now, let's get that coal.","Edgar")
        break
         case 33:
         movevert("Guard",-100,"no")
         movevert("Enchantress",-100,"no")
         movevert("Rouge1",-100)
         movevert("Sandra",-100,"no")
         movevert("Edgar",-100,"no")
         movevert("Archer1",-100,"end")
        break
         case 34:
          window.location.href = '../04_Train/Train.html'
        break
    }
}

$(window).load(function(){
    localStorage.setItem("level", "3");
changesong("01/happy.mp3")
});