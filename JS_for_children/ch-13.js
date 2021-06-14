var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
// for (var i = 0; i<20; i++) {
//     ctx.fillRect(i*10,i*10,10,10);
// }
// ctx.strokeStyle = "Red";
// ctx.lineWidth = 1;
// ctx.strokeRect(80,10,50,50); // голова
// ctx.fillStyle = "black";
// ctx.fillRect(80+50/2-10/2,10+50,10,20); // шея
// ctx.fillStyle = "Yellow";
// ctx.fillRect(80+25-60,10+50+20,120,10); // руки
// ctx.fillStyle = "Blue";
// ctx.fillRect(80+25-35,10+50+20+10,70,70); // туловище
// ctx.fillStyle = "orange";
// ctx.fillRect(80+25-35,10+50+20+10+70,10,50); // левая нога
// ctx.fillStyle = "green";
// ctx.fillRect(80+25+25,10+50+20+10+70,10,50); // правая нога


// ctx.strokeStyle = "Turquoise"; // цвет бирюзовый
// ctx.lineWidth = 4;
// ctx.beginPath(); // начало блока
// ctx.strokeRect(40,30,20,20); // квадрат головы 20х20 с координатами х40, у30
// ctx.moveTo(50,50); // начало шеи
// ctx.lineTo(50,100); // пипирка
// ctx.lineTo(30,130); // левая нога пипка - ступня
// ctx.moveTo(70,130); // правая нога ступня
// ctx.lineTo(50,100); // пипирка
// ctx.moveTo(50,70); // грудь (центр рук)
// ctx.lineTo(30,60); // левая кисть
// ctx.moveTo(50,70); //  грудь (центр рук)
// ctx.lineTo(70,60); // правая кисть
// ctx.stroke(); // конец блока (отрисовка)


// Тренировка дуги (arc)

// ctx.lineWidth = 2;
// ctx.strokeStyle = "green";
//
// ctx.beginPath();
// ctx.arc(50,50,20,0,Math.PI/2,false);
// ctx.stroke();
//
// ctx.beginPath();
// ctx.arc(100,50,20,0,Math.PI,false);
// ctx.stroke();
//
// ctx.beginPath();
// ctx.arc(150,50,20,0,Math.PI*2,false);
// ctx.stroke();


// Делаем конструктор для кругов

// var circle = function (x, y, radius, fillCircle) {
//     ctx.beginPath();
//     ctx.arc(x,y,radius,0,Math.PI*2,false);
//     if (fillCircle === false) {
//         ctx.stroke();
//     } else {
//         ctx.fill();
//     }
// };
//
// ctx.lineWidth = 2; // Просто размер линии

// circle(50,100,20);


// Круги - радуга

// ctx.strokeStyle = "red";
// ctx.fillStyle = "red";
// circle(100,100,10);
// ctx.strokeStyle = "orange";
// circle(100,100,20);
// ctx.strokeStyle = "yellow";
// circle(100,100,30);
// ctx.strokeStyle = "green";
// circle(100,100,40);
// ctx.strokeStyle = "blue";
// circle(100,100,50);
// ctx.strokeStyle = "purple";
// circle(100,100,60);


// Снеговик

// circle(50,30,30, false);
// circle(50,100,40,false);
// ctx.fillStyle = "orange";
// circle(50,30,5,true);
// ctx.fillStyle = "black";
// circle(40,20,5,true);
// circle(60,20,5,true);
// circle(50,100,5,true);
// circle(50,80,5,true);
// circle(50,120,5,true);


// Функция "Армия снеговиков"

// var drawSnowman = function (x, y) {
//
//     var circle = function (x, y, radius, fillCircle) {
//         ctx.beginPath();
//         ctx.arc(x, y, radius, 0, Math.PI * 2, false);
//         if (fillCircle === false) {
//             ctx.stroke();
//         } else {
//             ctx.fill();
//         }
//     };
//
//     ctx.lineWidth = 2; // Просто размер линии
//
//     ctx.fillStyle = "orange";
//     circle(x, y-20, 5, true);
//     ctx.fillStyle = "black"
//     circle(x, y-20, 30, false);
//     circle(x, y+50, 40, false);
//     circle(x-10, y-30, 5, true);
//     circle(x+10, y-30, 5, true);
//     circle(x, y+50, 5, true);
//     circle(x, y+30, 5, true);
//     circle(x, y+70, 5, true);
// };
//
// drawSnowman(50,50);
// drawSnowman(150,50);
// drawSnowman(250,50);
// drawSnowman(350,50);


// Рисуем по точкам через фунцию с массивом

// drawPoints = function (array) {
//     ctx.beginPath();
//     ctx.strokeStyle = "Turquoise"; // цвет бирюзовый
//     ctx.lineWidth = 4;
//     ctx.moveTo(array[0].x, array[0].y);
//     for (var i = 0; i < array.length; i++) {
//         var x = array[i][0];
//         var y = array[i][1];
//     ctx.lineTo(x, y);
//     };
//     ctx.stroke();
// };
// var points = [[50,50],[50,100],[100,100],[100,50],[50,50]];
// drawPoints(points);

// var mysteryPoints = [[50,50],[50,100],[25,120],[100,50],[70,90],[100,90],[70,120]]

// drawPoints(mysteryPoints);


// Рисование мышкой

var canvasPos = getPosition(canvas);
var mouseX = 0;
var mouseY = 0;

canvas.addEventListener("mousemove", setMousePosition, false);

function setMousePosition(e) {
    mouseX = e.clientX - canvasPos.x;
    mouseY = e.clientY - canvasPos.y;
};

function getPosition(el) {
    var xPosition = 0;
    var yPosition = 0;

    while (el) {
        xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
        yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
        el = el.offsetParent;
    };
    return {
        x: xPosition,
        y: yPosition
    };
};

function update() {
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 3, 0, 2 * Math.PI, true);
    ctx.fillStyle = "black";
    ctx.fill();
    requestAnimationFrame(update);
};

update(); // Проверка рисовки
