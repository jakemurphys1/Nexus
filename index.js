var level
function queue(){}

        function getCookie(cname) {
           
        var name = cname + "=";
        var ca = document.cookie.split(';');

        for(var i=0; i<ca.length; i++) {
            var c = ca[i];

            while (c.charAt(0)==' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
        }

        return "";
    }
        function setCookie(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
            var expires = "expires="+d.toUTCString();
            document.cookie = cname + "=" + cvalue + "; " + expires;
        }

$(window).load(function(){

var curmusic = new Audio();
    curmusic.src="sounds/music/01/Flying.mp3";
     curmusic.volume=.2;
    curmusic.loop=true;
    curmusic.play();
    
        $("#cinema").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:-140px;" ><img style="height:80px" src="CinePics/trees.png"/></div>');
        $("#cinema").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:-60px;" ><img style="height:80px" src="CinePics/trees.png"/></div>');
            $("#cinema").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:20px;" ><img style="height:80px" src="CinePics/trees.png"/></div>');
                $("#cinema").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:100px;" ><img style="height:80px" src="CinePics/trees.png"/></div>');
        $("#cinema").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:180px;" ><img style="height:80px" src="CinePics/trees.png"/></div>');
        $("#cinema").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:260px;" ><img style="height:80px" src="CinePics/trees.png"/></div>');
           $("#cinema").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:460px;" ><img style="height:80px" src="CinePics/trees.png"/></div>');
               $("#cinema").append('<div class="trees" STYLE="position:absolute; TOP:570px; LEFT:540px;" ><img style="height:80px" src="CinePics/trees.png"/></div>');
    
    var dir = "up";
    
    setInterval(function(){
        if(dir == "up"){
            dir="down"
            $("#palace").animate({
                top:"-=10px"
            },2000,"linear")
        }else{
            dir="up"
            $("#palace").animate({
                top:"+=10px"
            },2000,"linear")
        }
    },2000)
    
    $(".menu").append('<p class="new-game">New Game</p>')
    setTimeout(function(){
        level = parseInt(localStorage.getItem("level"));
        if(level>0){
            $(".menu").append('<p class="continue">Continue</p>')
        }
            $(".continue").click(function(){
        switch(level){
            case 2:
               window.location.href = '02_Cave/Cave.html' 
            break;
            case 4:
               window.location.href = '04_Train/Train.html' 
            break;
            case 6:
               window.location.href = '06_airship/Airship.html' 
            break;
            case 8:
               window.location.href = '08_Arena/Arena.html' 
            break;
            case 10:
               window.location.href = '10_Hunter/Hunter.html' 
            break;
            case 12:
               window.location.href = '12_seige/Seige.html' 
            break;
            case 14:
               window.location.href = '14_cell-start/cell-start.html' 
            break;
            case 16:
               window.location.href = '16_arena2/Arena.html' 
            break;
                
            case 18:
               window.location.href = '18_airship2/Airship.html' 
            break;
            case 20:
               window.location.href = '20_seige2/Seige.html' 
            break;
            case 22:
               window.location.href = '22_cell2/cell-start.html' 
            break;
            case 24:
               window.location.href = '24_airship3/Airship.html' 
            break;
            case 26:
               window.location.href = '26_arena3/Arena.html' 
            break;
            case 28:
               window.location.href = '28_escape/escape.html' 
            break;
            case 30:
               window.location.href = '30_Hunter2/Hunter.html' 
            break;
            case 32:
               window.location.href = '32_cell3/cell3.html' 
            break;
                
            case 34:
               window.location.href = '34_city/city.html' 
            break;
            case 36:
               window.location.href = '36_cell4/Beach.html' 
            break;
            case 38:
               window.location.href = '38_seige3/Seige.html' 
            break;
            case 40:
               window.location.href = '40_rescue1/rescue2.html' 
            break;
            case 42:
               window.location.href = '42_rescue2/River.html' 
            break;
            case 44:
               window.location.href = '44_seige_final/seige.html' 
            break;
            case 46:
               window.location.href = '46_palace/palace.html' 
            break;
                
            case 1:
               window.location.href = '01/Starting.html' 
            break;
            case 3:
               window.location.href = '03/beforetrain.html' 
            break;
            case 5:
               window.location.href = '05/aftertrain.html' 
            break;
            case 7:
               window.location.href = '07/afterairship.html' 
            break;
            case 9:
               window.location.href = '09/intrain.html' 
            break;
            case 11:
               window.location.href = '11/beforeseige.html' 
            break;
            case 13:
               window.location.href = '13/beforecells.html' 
            break;
            case 15:
               window.location.href = '15/chaos1.html' 
            break;
                
            case 17:
               window.location.href = '17/meeting.html' 
            break;
            case 19:
               window.location.href = '19/afterairship.html' 
            break;
            case 21:
               window.location.href = '21/beforecells.html' 
            break;
            case 23:
               window.location.href = '23/beforeairship.html' 
            break;
            case 25:
               window.location.href = '25/afterairship.html' 
            break;
            case 27:
               window.location.href = '27/escape1.html' 
            break;
            case 29:
               window.location.href = '29/escaped.html' 
            break;
            case 31:
               window.location.href = '31/beforecell3.html' 
            break;
                
            case 33:
               window.location.href = '33/escape1.html' 
            break;
            case 35:
               window.location.href = '35/beach.html' 
            break;
            case 37:
               window.location.href = '37/dead.html' 
            break;
            case 39:
               window.location.href = '39/beforeseige.html' 
            break;
            case 41:
               window.location.href = '41/beforeriver.html' 
            break;
            case 43:
               window.location.href = '43/beforeairship.html' 
            break;
            case 45:
               window.location.href = '45/beforeseige.html' 
            break;
        }
        
    })
    },100)

    

    
    $(".new-game").click(function(){
        
            $(".menu").html('<h3>Difficulty Mode</h3><p class="Easy">Easy</p><p class="Normal">Normal</p><p class="Hard">Hard</p>')
            
            $(".Easy").click(function(){
                        localStorage.setItem("diff", "1");
                        window.location.href = '01/intro.html'
            })
            $(".Normal").click(function(){
                        localStorage.setItem("diff", "2");
                        window.location.href = '01/intro.html'
            })
            $(".Hard").click(function(){
                        localStorage.setItem("diff", "3");
                        window.location.href = '01/intro.html'
            })
            
            

    })

});