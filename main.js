var last_position_of_x, last_position_of_y;


    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
    var width = screen.width;
    var height = screen.height;
    canvas.addEventListener("touchstart", my_touchstart);
    var new_width = width - 70;
    var new_height = height - 300;
    if (width < 992){
        document.getElementById("myCanvas").width = new_width;
        document.getElementById("myCanvas").height = new_height;
        document.body.style.overflow = "hidden";
    }
    function my_touchstart(e)
    {
        
        color = document.getElementById("colorInput").value;
        width_of_line = document.getElementById("widthInput").value;
        last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
    }

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
        current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
        current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);
        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }
    function clearCanvas(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
    }

    canvas.addEventListener("mousedown", myMouseDown);
function myMouseDown (e) {
    color = document.getElementById("colorInput").value;
    widthOfLine = document.getElementById("widthInput").value;
    mouseEvent = "md";
    console.log("Mouse Down key has been pressed")
}

canvas.addEventListener("mouseup",myMouseUp);
function myMouseUp (e) {
    mouseEvent = "mu"
}

canvas.addEventListener("mouseleave",myMouseLeave);
function myMouseLeave (e) {
    mouseEvent = "ml"
}

canvas.addEventListener("mousemove",myMouseMove);
function myMouseMove (e) {
    var curentPosX = e.clientX - canvas.offsetLeft;
    var curentPosY = e.clientY - canvas.offsetTop;
    if (mouseEvent == "md") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;
        console.log("Last Position of X & Y is ");
        console.log("X = ",lastPosX," & Y = ",lastPosY);
        ctx.moveTo(lastPosX, lastPosY);
        ctx.lineTo(curentPosX, curentPosY);
        console.log("X = ",curentPosX," & Y = ",curentPosY)
        ctx.stroke();
    }
    lastPosX = curentPosX;
    lastPosY = curentPosY;
}