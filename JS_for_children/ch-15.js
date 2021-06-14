// ОБЩАЯ ОСНОВА - СОЗДАЕМ Canvas для рисования

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;

// Объект с названиями и кодом клавиш
// var keyNames = {
//     32: "space",
//     37: "left",
//     38: "up",
//     39: "right",
//     40: "down",
//     16: "shift",
//     13: "enter",
//     8: "return(backspace)",
//     18: "alt",
//     17: "ctrl"
// };

// Событие клавиатуры (нажатие клавиш)
// $("body").keydown(function (event) {
//     console.log(event.keyCode); // Отображение кода по нажатию клавиши
//     console.log(keyNames[event.keyCode]); // Отображение соотв-го названия по коду клавиши из массива
// });

// Массив с цветами для .fillStyle
// var colors = ["red", "orange", "yellow", "green", "blue", "purple"];

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

// Заготовка для отрисовки мяча с начальными координатами
// и начальным направлением движения (скоростью)
var Ball = function () {
    this.speedy = 5;
    this.x = width / 2;
    this.y = height / 2;
    this.xSpeed = this.speedy;
    // this.speed = 5; // не работает (решено: нужно было сменить название переменной на уникальное)
    // this.xSpeed = Math.floor(Math.random() * 10 - 5); // Случайное направление при перезагрузке
    this.ySpeed = 0;
    // this.ySpeed = Math.floor(Math.random() * 10 - 5); // Случайное направление при перезагрузке
    // context.fillStyle = colors[Math.floor(Math.random() * colors.length)]; // Цветные мячи только при перезагрузке
};

// Добавляем в прототип смещение мяча + создаем правило,
// при касании границы - появляется с другой стороны (правило плоской Земли)
Ball.prototype.move = function () {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x < 0) {
        this.x = width;
    } else if (this.x > width) {
        this.x = 0;
    }
    if (this.y < 0) {
        this.y = height;
    } else if (this.y > height) {
        this.y = 0;
    }
};

// Проверяем (и, если нужно меняем) значение "скорости"
// на противоположное, при "столкновении" с границей Canvas
Ball.prototype.checkCollision = function () {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x < 0 || this.x > width) {
        this.xSpeed = -this.xSpeed;
    }
    if (this.y < 0 || this.y > height) {
        this.ySpeed = -this.ySpeed;
    }
};

// Добавляем в прототип отрисовку мяча с динамичными координатами,
// фиксированным радиусом и с заполнением
Ball.prototype.draw = function () {
    circle(this.x, this.y, 10, true);
};

// Добавляем в прототип условия для
// смещения-скорости при нажатии соответствующих клавиш
Ball.prototype.setDirection = function (direction) {
    if (direction === "up") {
        this.xSpeed = 0;
        this.ySpeed = -this.speedy;
    } else if (direction === "down") {
        this.xSpeed = 0;
        this.ySpeed = this.speedy;
    } else if (direction === "left") {
        this.xSpeed = -this.speedy;
        this.ySpeed = 0;
    } else  if (direction === "right") {
        this.xSpeed = this.speedy;
        this.ySpeed = 0;
    } else if (direction === "stop") {
        this.xSpeed = 0;
        this.ySpeed = 0;
    } else if (direction === "1") { // Выбираем скорость (почему-то работает только при смене траектории)
        this.speedy = 1;
    } else if (direction === "2") {
        this.speedy = 2;
    } else if (direction === "3") {
        this.speedy = 3;
    } else  if (direction === "4") {
        this.speedy = 4;
    } else if (direction === "5") {
        this.speedy = 5;
    } else if (direction === "6") {
        this.speedy = 6;
    } else if (direction === "7") {
        this.speedy = 7;
    } else  if (direction === "8") {
        this.speedy = 8;
    } else if (direction === "9") {
        this.speedy = 9;
    }
};

// Создаем объект с указанием условного
// кода клавиш и присвоенных им имен
var keyActions = {
    32: "stop",
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    97: "1",
    98: "2",
    99: "3",
    100: "4",
    101: "5",
    102: "6",
    103: "7",
    104: "8",
    105: "9"
};

// Создаем объект мяч
var ball = new Ball();

// Создаем условие при событии смены направления (нажатие клавиш в поле "body")
$("body").keydown(function (event) {
    var direction = keyActions[event.keyCode]; // Определяем и выбираем из массива нажатую клавишу (либо undefined)
    ball.setDirection(direction); // Проверяем нажатую клавишу через прототип и реагируем
});

// Задаем анимацию мяча: мяч рисуется по координатам, координаты обновляются,
// мяч стирается и потом рисуется уже на новом месте, и так далее (интервал 30мс)
setInterval(function () {
    context.clearRect(0,0,width,height);
    ball.checkCollision();
    ball.draw();
    context.strokeRect(0,0,width,height);
}, 30);
