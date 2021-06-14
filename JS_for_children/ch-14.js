// ОБЩАЯ ОСНОВА - СОЗДАЕМ Canvas

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");


// БЕГУЩИЕ КВАДРАТЫ

// var position = 0;
// var opposite = 400;
//
// setInterval(function () {
//     context.clearRect(0,0,400,400);
//     context.fillRect(position,0,20,20);
//     context.fillRect(0,position,20,20);
//     context.fillRect(opposite,0,20,20);
//     context.fillRect(0,opposite,20,20);
//     context.fillRect(position,position,20,20);
//     context.fillRect(opposite,opposite,20,20);
//     context.fillRect(position,opposite,20,20);
//     context.fillRect(opposite,position,20,20);
//
//     position+=2; // posotoin ++;
//     opposite-=2; // opposite++;
//     if (position > 400, opposite < 0) {
//         position = 0;
//         opposite = 400;
//     }
// }, 10);


// УВЕЛИЧИВАЮЩИЙСЯ КВАДРАТ

// var size = 0; // Ширина на увеличение
// var oppSize = 400; // Ширина на уменьшение
//
// setInterval(function () {
//     context.clearRect(0,0,400,400);
//     context.fillRect(0,0, size, size);
//     context.fillRect(0,0,oppSize,oppSize);
    // context.fillRect(opposite,0,20,20);
    // context.fillRect(0,opposite,20,20);
    // context.fillRect(position,position,20,20);
    // context.fillRect(opposite,opposite,20,20);
    // context.fillRect(position,opposite,20,20);
    // context.fillRect(opposite,position,20,20);
//
//     size ++; // size+=2;
//     oppSize--; // oppSize-=2;
//     if (size > 400 || oppSize < 0) {
//         size = 0;
//         oppSize = 400;
//     }
// }, 10);


// ДЕЛАЕМ ЛЕТАЮЩУЮ ПЧЕЛУ

// var x = 200; // Начальная точка появления пчелы
// var y = 200; // Начальная точка появления пчелы
//
// // Создаем метод отрисовки кругов, для создания пчелы
// var circle = function (x,y,radius,fillCircle) {
//     context.beginPath();
//     context.arc(x,y,radius,0,Math.PI*2,false);
//     if (fillCircle) {
//         context.fill();
//     } else {
//         context.stroke();
//     }
// };
//
// // Создаем метод отрисовки пчелы с помощью метода circle(),
// // относительными координатами.
// var drawBee = function (x,y) {
//     context.lineWidth = 2;
//     context.strokeStyle = "black";
//     context.fillStyle = "gold";
//
//     circle(x,y,8,true);
//     circle(x,y,8);
//     circle(x-5,y-11,5);
//     circle(x+5,y-11,5);
//     circle(x-2,y-1,2);
//     circle(x+2,y-1,2);
// };
//
// // Создаем метод получения случайного Х, для сменяемых координат отрисовки пчелы.
// // В интервале 0 <= X <= 400, для контроля пчелы внутри области "canvas".
// var update = function (coordinate) {
//     var offset = Math.random() * 20 - 10;
//     coordinate += offset;
//
//     if (coordinate > 400) {
//         coordinate = 400;
//     }
//     if (coordinate < 0) {
//         coordinate = 0;
//     }
//     return coordinate;
// };
//
// // Запускаем пчелу
// setInterval(function () {
//     // Очищаем canvas каждый раз, чтобы пчелы не множились
//     context.clearRect(0,0,400,400);
//
//     // Рисуем пчелу по динамичным координатам
//     drawBee(update(x),update(y)); // Или передаем (х, у) и раскомментируем присвоение x=update(x)
//     // x = update(x);
//     // y = update(y);
//
//     // Отрисовываем квадрат вдоль границы canvas (опционально, не влияет)
//     context.strokeRect(0,0,400,400);
// }, 100);


// ОТСКАКИВАЮЩИЙ МЯЧ

// Берем переменные для ширины и высоты напрямую из Canvas
var width = canvas.width;
var height = canvas.height;
var colors = ["red", "orange", "yellow", "green", "blue", "purple"];


// Заготовка для отрисовки мяча с начальными координатами
// и начальным направлением движения (скоростью)
var Ball = function () {
    this.x = width/2;
    this.y = height/2;
    // this.xSpeed = - 2;
    this.xSpeed = Math.floor(Math.random() * 10 - 5); // Случайное направление при перезагрузке
    // this.ySpeed = 3;
    this.ySpeed = Math.floor(Math.random() * 10 - 5); // Случайное направление при перезагрузке
    context.fillStyle = colors[Math.floor(Math.random() * colors.length)]; // Цветные мячи только при перезагрузке
};

// Отрисовываем круг
var circle = function (x, y, radius, fillCircle) {
    context.beginPath();
    // context.fillStyle = colors[Math.floor(Math.random() * colors.length)]; // Цветные мячи
    context.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
        context.fill();
    } else {
        context.stroke();
    }
};

// Добавляем метод circle в прототип (prototype)
// объекта Ball (просто засовываем функцию глубже,
// чтобы было удобнее писать код)
Ball.prototype.draw = function () {
    circle(this.x, this.y, 20, true);
};

// Добавляем в прототип объекта Ball функцию смещения
// согласно "скорости"
Ball.prototype.move = function () {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
};

// Проверяем (и, если нужно меняем) значение "скорости"
// на противоположное, при "столкновении" с границей Canvas
Ball.prototype.checkCollision = function () {
    if (this.x < 0 || this.x > width) {
        this.xSpeed = -this.xSpeed;
    }
    if (this.y < 0 || this.y > height) {
        this.ySpeed = -this.ySpeed;
    }
};

// Создаем новый объект ball класса Ball
var ball = new Ball();

// Помещаем в переменную все, что мы написали
var movingBall = function () {

    // Очищаем Canvas
    context.clearRect(0,0,width,height);

    // Рисуем, придаем движение, создаем отскок
    ball.draw();
    ball.move();
    ball.checkCollision();

    // Рисуем границу Canvas
    context.strokeRect(0,0,width,height);
};

// Запускаем интервал
idInterval = setInterval(movingBall,30);

// Много мячей за раз (не готово)

// var arrayBall = [];
//
// var balls = function () {
//     for (var i = 0; i < 10; i++) {
//         arrayBall[i] = arrayBall.push(movingBall);
//     }
//     // return arrayBall;
// };
//
// setInterval(balls, 30);
