var screen = document.querySelector(".screen")
var min = document.querySelector(".min")
var add = document.querySelector(".add")

function Add(){
   
 screen.innerHTML++;
}

function Min(){
    if(screen.innerHTML==0){
        return 0
    }else{
        screen.innerHTML--;
    }
}