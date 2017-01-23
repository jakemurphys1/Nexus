
var qnum=0;
   var Fire = new Audio();
        Fire.src = "../sounds/Fire.mp3";
        Fire.volume=.3;


function queue(){
    qnum+=1;
    switch(qnum){
        case 1:
            enterChar("Sandra",250,600,"no","moving_back");
            enterChar("Archer1",300,200,"back");
            movevert("Archer1",-1,"no")
            enterChar("Edgar",350,600,"end","no","moving_back");
            
            break
            case 2:
       movevert("Sandra",-100,"no")
        movevert("Edgar",-100,"end")
        break
        case 3:
  dialog("Is that Teresa?","Sandra")
        break
        case 4:
         dialog("Yeah, looks like she's fighting a goblin. We should help","Edgar")
        break
        case 5:
             window.location.href = '../02_Cave/Cave.html'
        break
    }
}

$(window).load(function(){
    
    addobject("nexus",300,500)
    addobject("goblin",300,100)
});