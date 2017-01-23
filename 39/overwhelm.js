
var qnum=0;

function queue(){
}

//window.location.href = './beforeairship.html'

$(window).load(function(){
    setTimeout(function(){
        window.location.href = 'meeting.html'
    },5000)
    
    setInterval(function(){
        var locationNum = Math.floor((Math.random() * 4) + 1);
        var locationleft;
        switch(locationNum){
            case 1:
                locationleft=100    
            break;
            case 2:
                locationleft=270    
            break;
            case 3:
                locationleft=470    
            break;
            case 4:
                locationleft=670    
            break;
        }
        
        var direction = Math.floor((Math.random() * 3) + 1);
        var typenum = Math.floor((Math.random() * 8) + 1);
        var type;
        switch(typenum){
            case 1:
                    type="goblin"
                break
                case 2:
                    type="warrior"
                break
                case 3:
                    type="Bat"
                break
                case 4:
                    type="Clunker"
                break
                case 5:
                    type="werewolf"
                break
                case 6:
                    type="flamewraith"
                break
                case 7:
                    type="Gremlin"
                break
                case 8:
                    type="hellhound"
                break  
        }
        
        
        switch(direction){
            case 1:
                        addobject(type,locationleft,50)
                        $("." + type).animate({
                         top:"+=200",
                         left:"+=200"
                        })
            break;
            case 2:
                        addobject(type,locationleft,50)
                        $("." + type).animate({
                         top:"+=200"
                        })
            break;
            case 3:
                        addobject(type,locationleft,50)
                        $("." + type).animate({
                         top:"+=200",
                         left:"-=200"
                        })
            break;
        }

    },50)
    
doeffect("Dramatic.mp3")

        
    
});