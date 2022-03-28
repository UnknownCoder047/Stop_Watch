
var hr=0,min=0,sec=0,count=0;
var i=60;

var timer=false;



function start(){
    timer=true;
    stopwatch();
}

function stop(){
    timer=false;
}

function reset(){
    timer=false;
    let r="00";
    document.getElementById("count").innerHTML=r;
    document.getElementById("sec").innerHTML=r;
    document.getElementById("min").innerHTML=r;
    document.getElementById("hr").innerHTML=r;
    hr=0;min=0;sec=0;count=0;

}

function stopwatch(){
    if(timer){
        count=count+1;
        checkcount(count);
        var c=count;
        if(hr==100)
        {
            checkhr();
            count="99";
        }

        if(count<10)
        {
            c="0"+count;
        }else{
            c=count;
        }
        
        document.getElementById("count").innerHTML=c;
        setTimeout("stopwatch()",10);
    }
}

function checkcount(c){
    if(c==100){
        count=0;
        sec=sec+1;
        checksec(sec);
        var s=sec;
        if(sec<10)
        {
            s="0"+sec;
        }else{
            s=sec;
        }
        document.getElementById("sec").innerHTML=s;
    }
}

function checksec(s){
    if(s==60){
        sec=0;
        min=min+1;
        checkmin(min);
        var m=min;
        if(min<10)
        {
            m="0"+min;
        }else{
            m=min;
        }
        document.getElementById("min").innerHTML=m;
    }
}

function checkmin(m){
    if(m==60)
    {
        min=0;
        hr=hr+1;
        var h=hr;
        if(hr<10)
        {
            h="0"+hr;
        }else{
            h=hr;
        }
        document.getElementById("hr").innerHTML=h;
    }
}

function checkhr(){
    timer=false;
    let r="99";
    document.getElementById("count").innerHTML=r;
    document.getElementById("sec").innerHTML=r;
    document.getElementById("min").innerHTML=r;
    document.getElementById("hr").innerHTML=r;
    hr=0;min=0;sec=0;count=0;
}
