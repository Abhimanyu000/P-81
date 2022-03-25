canvas=document.getElementById("myCanvas");

var ctx=canvas.getContext("2d");

canvascolor="black";

ctx.beginPath();

ctx.strokeStyle=canvascolor;

ctx.lineWidth=2;

ctx.arc(150, 150, 40.000000000000000001, 0, 2*Math.PI);

ctx.stroke();

canvas.addEventListener("mousedown",mymousemove);

function mymousemove(e) {
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;

    console.log("position="+mouse_x+" , "+mouse_y);

    circle(mouse_x, mouse_y);

};

function circle(mouse_x, mouse_y) {
    
    ctx.beginPath();

    ctx.strokeStyle=canvascolor;

    ctx.lineWidth=2;

    ctx.arc(mouse_x, mouse_y, 40.000000000000000001, 0, 2*Math.PI);

    ctx.stroke();
}

function clearbutton() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}