
var qnum=0;

function queue(){
    qnum+=1;
    switch(qnum){
        case 1:
            addobject("EffectFire",200,100)
            addobject("EffectFire",100,100)
            addobject("EffectFire",100,50)
            addobject("EffectFire",500,100)
            addobject("EffectFire",500,50)
            addobject("EffectFire",600,50)
            addobject("EffectFire",700,150)
            enterChar("Mimic",-100,300);
            enterChar("fisherman",-100,200);
            enterChar("fisherman2",-100,300);
            enterChar("fisherman3",-100,400);
            enterChar("fisherman4",-100,450);
            enterChar("Knight",900,300);
            enterChar("Archer2",900,400);
            enterChar("Sorcerer",900,450);
            movehor("Mimic",400,"end")
        break
        case 2:
            movehor("Mimic",-1)
            dialog("Follow me, if we make it across the river, we should be able to escape!","Mimic")
        break
        case 3:

            movehor("fisherman",300)
            movehor("fisherman2",300)
            movehor("fisherman3",300)
            movehor("fisherman4",300)

            movehor("Knight",-300)
            movehor("Archer2",-300)
            movehor("Sorcerer",-300,"end")
        break
        case 4:
        movehor("Mimic",1)
            dialog("Who are you?","Mimic")
        break
        case 5:
            dialog("We're here to help.","Archer2")
        break
        case 6:
            dialog("We have an airship.","Sorcerer")
        break
        case 7:
            dialog("Guess we don't have much of a choice. Let's go.","Mimic")
        break
        case 8:
            movehor("Mimic",300)
            movehor("Knight",300)
            movehor("Archer2",300)
            movehor("Sorcerer",300)
            movehor("fisherman",300)
            movehor("fisherman2",300)
            movehor("fisherman3",300)
            movehor("fisherman4",300)
            delay(1000)
        break
        case 9:
            window.location.href = 'abovehedge.html'
        break
    }
}

//window.location.href = './beforeairship.html'

$(window).load(function(){
doeffect("Dramatic.wav")
changesong("01/Hurry.mp3")

        
    
});