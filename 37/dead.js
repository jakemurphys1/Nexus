
var qnum=0;
var height=2;

function queue(){
    qnum+=1;
    switch(qnum){
        case 1:
            enterChar("General",400,200);
            delay(1000)
            break;
        case 2:
            dialog("I'm not sure if you can still hear me...","General")
            break
        case 3:
        dialog("I'm truly sorry to do this.","General")
            break
        case 4:
       dialog("The Nexus has never done me wrong. I trust it.","General")
            break
        case 5:
         dialog("I will make you this promise. Your baby will be taken care of.","General")
        break
         case 6:
         dialog("One day, he will fight to save this world.","General")
        break
        case 7:
         dialog("And he will know you two as heroes, and myself as a villian.","General")
        break
        case 8:
        dialog("I was told to tell you this as well.","General")
        break
         case 9:
         dialog("I will take him to the city of Jadesmith.","General")
        break
         case 10:
         dialog("I do not know where you are headed, but I hope the best for you two.","General")
        break
         case 11:
         movevert("General",-200);
            $("#General").fadeOut()
            delay(3000)
        break
         case 12:
         enterChar("Guard-C",400,-200);
            enterChar("Archer4",500,-200);
            
            $("#Archer4 img").css("transform","rotate(180deg)")
           $("#Archer4 img").css("-ms-transform","rotate(180deg)")
           $("#Archer4 img").css("-webkit-transform","rotate(180deg)")
            $("#Guard-C img").css("transform","rotate(180deg)")
           $("#Guard-C img").css("-ms-transform","rotate(180deg)")
           $("#Guard-C img").css("-webkit-transform","rotate(180deg)")
            $("#Archer4").animate({
               top:"+=500px"
           },3000, "linear")
            $("#Guard-C").animate({
               top:"+=500px"
           },3000, "linear")
            
        delay(3000)
        break
        case 13:
         dialog("Where are we?","Guard-C")
        break
         case 14:
         dialog("I think we are lost in the Nexus.","Archer4")
        break
         case 15:
         dialog("I'm sorry I wasn't stronger.","Guard-C")
        break
          case 16:
          dialog("I don't understand what all just happened, but I trust the Nexus.","Archer4")
        break
        case 17:
        dialog("I believe that our baby will be protected.","Archer4")
        break
        case 18:
              dialog("What now?","Guard-C")
        break
        case 19:
       dialog("I guess it's time for our next adventure.","Archer4")
        break
        case 20:
            dialog("Together...","Archer4")
        break
        case 21:
            $("#Archer4 img").animate({
               width:"0px",
                height:"0px"
           },5000, "linear")
            $("#Guard-C img").animate({
               width:"0px",
                height:"0px"
           },5000, "linear")
            delay(10000)
        break
        case 22:
                 window.location.href = 'city.html'
        break
    }
}
$(window).load(function(){
    changesong("01/dead.mp3")
    saving("37")
});