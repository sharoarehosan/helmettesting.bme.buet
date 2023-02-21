var speed;
var newspeed;
var man=70;
var helmet=0.3;
var vertical=438.26;
var momentumx;
var momentum;
var time=0.033;
var force;
var pseudo;
var final ;
var temp;
var rad;
var afinal;
var fixedforce;
var fixedangle;
function submit(){
    speed = document.getElementById("speed").value;
    helmet = document.getElementById("helmetweight").value;
    man = document.getElementById("bikeweight").value;
    newspeed=speed*1000;
    speed=newspeed/3600;
    momentumx=speed*man;
    momentum=Math.sqrt((momentumx*momentumx)+(vertical*vertical));
    force = momentum/time;
    pseudo=force/man;
    final=pseudo*helmet;
    fixedforce=final.toFixed(2);
    rad=Math.atan(momentum/vertical);
    afinal=(rad*180/3.1416);
    fixedangle=afinal.toFixed(2);
    document.getElementById("value").innerHTML = "Force = " + (fixedforce) +"N";
}
function load(){
    setInterval(submit,5000);
    value.innerHTML='<img src="load.gif" height ="150px"  style="padding:none;">';
}