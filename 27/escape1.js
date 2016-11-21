
var qnum=0;
var height=2;
     

function queue(){
    qnum+=1;
    switch(qnum){
        case 1:
            enterChar("Thief1",200,400);
            enterChar("Guard",300,400);
            enterChar("Enchantress",400,400);
            movevert("Thief1",-1)
            movevert("Guard",-1)
            movevert("Enchantress",-1)
            delay(1000)
            break;
        case 2:
             dialog("What was that?","Guard")
            break
        case 3:
           dialog("Some ship just crashed into a wall!","Enchantress")
            break
        case 4:
        dialog("This is our chance to escape. Let's go!","Thief1")
            break
        case 5:
         movevert("Thief1",-500,"no","fast")
            movevert("Guard",-500,"no","fast")
            movevert("Enchantress",-500,"no","fast")
            delay(3000)
        break
         case 6:
       window.location.href = 'escape2.html'
        break
          
    }
}

$(window).load(function(){
    changesong("01/Hurry.mp3")
});