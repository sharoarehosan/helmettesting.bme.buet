var height=4.3;
var force;
var mass=4.5;
var angle;
var tanvalue;
var bolt;
var moment;
var delv;
var newheight;

function submit(){
    force = document.getElementById("force").value;
    angle = document.getElementById("angle").value;
    angle = (angle*3.1416)/180;
    tanvalue=Math.tan(angle);
    bolt=tanvalue*height;
    bolt=bolt.toFixed(2);
    moment=force*0.033;
    delv= moment/4.5;
    delv=(delv*delv);
    newheight=delv/(2*9.8);
    newheight=newheight*100;
    newheight=newheight.toFixed(2);
    document.getElementById("value").innerHTML = "\n Bolt Height = " + (bolt) +"cm \n Load Drop =" + (newheight) + "cm";
}
function load(){
    setInterval(submit,5000);
    value.innerHTML='<img src="load.gif" height ="150px"  style="padding:none;">';
}

