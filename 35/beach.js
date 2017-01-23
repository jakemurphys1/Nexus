
var qnum=-1;
var height=2;

function queue(){
    qnum+=1;
    switch(qnum){
        case 0:
            opening("Chapter Fifteen:","The Beach")
            enterChar("Guard-C",200,520,"no","right");
            enterChar("Archer4",340,500);
            addobject("baby",350,550,35)
            addobject("nexus",150,550)
            break;
        case 1:
            delay(1000)
            break;
        case 2:
            dialog("I can't believe it's been so long since we used a Nexus.","Guard-C")
            break
        case 3:
        movehor("Archer4",-1)
        dialog("Since we escaped that prison, I guess we haven't really needed it.","Archer4")
            break
        case 4:
       dialog("Not sure why we're doing it now.","Archer4")
            break
        case 5:
         dialog("For old time's sake.","Guard-C")
        break
         case 6:
         dialog("Those weren't happy times.","Archer4")
        break
        case 7:
         dialog("They remind me of when we first met.","Guard-C")
        break
        case 8:
        dialog("In those cold cells?","Archer4")
        break
         case 9:
         dialog("You were so pretty.","Guard-C")
        break
         case 10:
         dialog("Were?","Archer4")
        break
         case 11:
         dialog("I know those were miserable times, but without them, I wouldn't have you or the little one.","Guard-C")
        break
         case 12:
        dialog("You have a way to always look at the bright side.","Archer4")
        break
        case 13:
         dialog("Hard to believe it's only been a year since we escaped.","Guard-C")
        break
         case 14:
         movevert("Archer4",1)
         dialog("I can't believe it's only been a month since I had the little one.","Archer4")
        break
         case 15:
         movehor("Guard-C",100)
         dialog("I think it's time I introduce little Bruce to the ocean.","Guard-C")
        break
          case 16:
          dialog("That's not going to happen!","Archer4")
        break
        case 17:
        dialog("C'mon, if he's going to live next to the beach, he needs to be introduced to it.","Guard-C")
        break
        case 18:
              dialog("When he can walk, you can dip him in that disgusting water.","Archer4")
        break
        case 19:
       enterChar("General",250,-100)
       movevert("General",200,"end")
        break
        case 20:
              dialog("Good-day","General")
              changesong("01/Threat.mp3")
        break
        case 21:
        movevert("Archer4",-1)
        movevert("Guard-C",-1)
              dialog("Hello...","Guard-C")
        break
        case 22:
              dialog("I'm looking for a Bernard and an Olivia.","General")
        break
        case 23:
              dialog("That's us. What do you want?","Archer4")
        break
        case 24:
        movevert("General",100)
              dialog("I see you have had your baby, just as the story-teller told me you would.","General")
        break
        case 25:
              dialog("Are you from the prison? Because we're prepared to FIGHT!","Archer4")
        break
        case 26:
              dialog("I'm not. Well, not really. Have you ever wondered why that prison was built?","General")
        break
        case 27:
              dialog("So a bunch of bad people can get money from apathetic people.","Guard-C")
        break
        case 28:
              dialog("No, that's how it was maintained. The 'why' is because of the Nexus.","General")
        break
        case 29:
              dialog("The Nexus helped us escape!","Archer4")
        break
        case 30:
              dialog("Only after you two were captured and forced to live together for years.","General")
        break
        case 31:
              dialog("Are you saying someone did all that just to bring us together?","Archer4")
        break
        case 32:
              dialog("No, they did all that so that little bundle of joy could be born.","General")
        break
        case 33:
        movevert("Archer4",1)
              dialog("You see, your baby there is special.","General")
        break
        case 34:
              dialog("When he enters the Nexus, he will have a unique power no one else has.","General")
        break
        case 35:
        movevert("Archer4",-1)
        dialog("I want you to leave now!","Archer4")
        break
        case 36:
              dialog("In about thirty years, a darkness will descend, and your son will be vital in stopping it.","General")
        break
        case 37:
              dialog("Then come back in thirty years.","Guard-C")
        break
        case 38:
              dialog("I'm afraid he will need special training to meet his potential.","General")
        break
        case 39:
              dialog("Training he can't get with you.","General")
        break
        case 40:
              dialog("I'm afraid I will have to take your baby.","General")
        break
        case 41:
        movevert("Guard-C",-50)
              dialog("THE HELL YOU ARE!","Guard-C")
        break
        case 42:
        addobject("Soldier",200,-100)
        addobject("Wizard",300,-100)
        addobject("Rouge",400,-100)
        $("#Soldier").animate({
                              top:"+=200"
                              },2000)
        $("#Wizard").animate({
                              top:"+=200"
                              },2000)
        $("#Rouge").animate({
                              top:"+=200"
                              },2000)
              dialog("We don't want to hurt you.","General")
        break
        case 43:
              dialog("But we will if you force us.","General")
        break
        case 44:
         window.location.href = '../36_cell4/Beach.html'
        break
    }
}
    var beach = new Audio();
        beach.src = "../sounds/beach.mp3";
        beach.volume=.3;

$(window).load(function(){
    changesong("01/Peaceful.mp3")
    saving("35")
    setTimeout(function(){
        $(".wave").removeClass("hidden")
    },300)
    beach.play()
    setInterval(function(){
        beach.play()
    },18000)
});