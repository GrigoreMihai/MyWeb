onload=function(){
    setInterval(go, 1000);
};
var x=3;   //利用了全局变量来执行
function go(){
x--;
    if(x>0){
    document.getElementById("sp").innerHTML=x;
    }else{
    location.href='/学习/理/编程/HTML5/基础练习.html';
    }
}