let gomb = document.getElementById("gomb");
x = 0;
let indul = 0;
let ido = 30;

function start() {
    ido = 0;
    indul += 1;
}

gomb.onclick = start;

function timer(){
    ido += 1;
    console.log(ido);
}

setInterval(timer,500);

setInterval(process,100);

function process(){
    if (ido == 2){
        document.getElementById("szöveg").style.opacity = "0";
        document.getElementById("vonalak").style.animation = "fade_in 0.3s linear 1 forwards";
        document.getElementById("auto").style.animation = "fade_in 0.3s linear 1 forwards";
        
    }

    if (ido == 2){
        document.getElementById("vonalak").style.opacity = "1";
        document.getElementById("auto").style.opacity = "1";
        document.getElementById("auto").style.animation = "auto1 2s 1 forwards";
        

    }

    if (ido == 4){
        
        document.getElementById("box").style.animation = "box_in 0.7s linear forwards";
    }
    if (ido ==5 ){
        document.getElementById("auto").style.animation = "auto2 1s linear forwards";
    }
    if ( ido == 7){
        document.getElementById("auto").src = "Untitled-2.png";
        document.getElementById("box").style.opacity = "0";
        document.getElementById("auto").style.animation = "auto3 1s linear forwards";
        document.getElementById("vonalak").style.animation = "vonalmozgas 5s 10 linear ";


    }

    if (ido == 9){
        document.getElementById("auto").style.animation = "auto5 3s linear forwards";
    }
    if (ido == 16){
        document.getElementById("auto").style.animation = "auto_ki 4s 1 linear forwards";
        document.getElementById('szöveg').innerText= "Completed";
    }

    if (ido == 20){
        document.getElementById("vonalak").style.opacity = "0";
        document.getElementById('szöveg').style.animation= "fade_in 0.7s 1 "
        document.getElementById('szöveg').style.marginLeft= "-100px"
    }
    if (ido == 21){
        document.getElementById('szöveg').style.opacity= "1"
        document.getElementById("box").style.animation = "none";
        document.getElementById("box").style.opacity = "1";
    }
    if (ido == 43){
        document.getElementById('szöveg').innerText= "Complete Order";
    }
    


}

