let min = 25;
let sec = 0;
let x,res = 25;

function $(id){
    return document.getElementById(id);
}

function display(m,s){
    let str='';
    if(s<10){
        str=m+':0'+s;
    }
    else{
        str=m+':'+s;
    }
    return str;
}

function play(){
    let audio = document.createElement("audio");
    let inner = "<source src='sound.mp3' type='audio/ogg'> ";
    audio.innerHTML = inner;
    audio.play();
}

$("timer").innerHTML=display(min,sec);

$("pomodoro").addEventListener("click",function(event){
    clearInterval(x);
    min=25;
    res=25;
    sec=0;
    $("timer").innerHTML=display(min,sec);
    document.title = '('+display(min,sec)+')TomatoTimer';
})

$("start").addEventListener("click",start);

$("stop").addEventListener("click",function(){
    clearInterval(x);
})
$("reset").addEventListener("click",function(){
    min=res;
    sec=0;
    $("timer").innerHTML=display(res,0);
    clearInterval(x);
})

function start(event){
    clearInterval(x);
    x = setInterval(function(){
        $("timer").innerHTML=display(min,sec);
        document.title = '('+display(min,sec)+')TomatoTimer';
        if(sec===0){
            min--;
            sec=59;
        }
        else{
            sec--;
        }
        if(min===0 && sec===0){
            play();
            $("timer").innerHTML=display(0,0);
            document.title = '('+display(0,0)+')TomatoTimer';
            clearInterval(x);
        }
    },1000)
}

$("shortBreak").addEventListener("click",function(event){
    min=5;
    res=5;
    sec=0;
    start();
})

$("longBreak").addEventListener("click",function(event){
    min=10;
    res=10;
    sec=0;
    start();
})

