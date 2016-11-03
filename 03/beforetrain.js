
var qnum=0;


function queue(){
    qnum+=1;
    switch(qnum){
        case 1:
            enterChar("Guard",420,200)
            enterChar("Enchantress",390,200)
            enterChar("Rouge1",360,200)
            
            enterChar("Sandra",420,550)
            enterChar("Archer1",390,550)
            enterChar("Edgar",360,550,"end")
            break
        case 2:
            movevert("Sandra",-250,"no")
            movevert("Edgar",-250,"no")
            movevert("Archer1",-250,"end")
            break
        case 3:
            dialog("Edgar, I'm glad you're here.","Guard")
            break
        case 4:
        dialog("Wouldn't miss it the hunt.","Edgar")
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
        dialog("It will be good practice before we get to the hunt. Let's go.","Edgar")
        break
         case 12:
         movevert("Guard",-100,"no")
         movevert("Enchantress",-100,"no")
         movevert("Rouge1",-100)
         movevert("Sandra",-100,"no")
         movevert("Edgar",-100,"no")
         movevert("Archer1",-100,"end")
        break
         case 13:
          window.location.href = '../04_Train/Train.html'
        break
    }
}

$(window).load(function(){

});