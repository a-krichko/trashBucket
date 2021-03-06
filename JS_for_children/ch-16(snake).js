// ОБЩАЯ ОСНОВА - СОЗДАЕМ Canvas для рисования

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;

////////////////////////////////////////////////

// ЗМЕЙКА !

var blockSize = 10;
var widthInBlocks = width / blockSize;
var heightInBlocks = height / blockSize;
var score = 0;

// Рисуем границу из прямоугольников, шириной в 1 блок
var drawBorder = function () {
    context.fillStyle = "gray";
    context.fillRect(0, 0, width, blockSize);
    context.fillRect(0, height - blockSize, width, blockSize);
    context.fillRect(0, 0, blockSize, height);
    context.fillRect(width - blockSize, 0, blockSize, height);
};

// Рисуем текущий счет
var drawScore = function () {
    context.textAlign = "left";
    context.fillStyle = "gray";
    context.textBaseline = "top";
    context.font = "20px Comic Sans MS";
    context.fillText("Текущий счет: " + score, blockSize, blockSize);
};

// Конец игры
var gameOver = function () {
    clearInterval(intervalId);
    context.font = "60px Comic Sans MS";
    context.fillStyle = "gray";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText("GAME OVER", width / 2, height / 2);
};

// Рисуем окружность
var circle = function (x, y, radius, fillCircle) {
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
        context.fill();
    } else {
        context.stroke();
    }
};

// Создаем конструктор Block
var Block = function (col, row) {
    this.col = col;
    this.row = row;
};

// Прототип принимающий цвет, отвечает за отрисовку
// квадрата по координатам сетки поля
Block.prototype.drawSquare = function (color) {
    var x = this.col * blockSize;
    var y = this.row * blockSize;
    context.fillStyle = color;
    context.fillRect(x, y, blockSize, blockSize);
};

// Прототип принимающий цвет, отвечает за отрисовку
// круга по координатам сетки поля
Block.prototype.drawCircle = function (color) {
    var centerX = this.col * blockSize + blockSize / 2;
    var centerY = this.row * blockSize + blockSize / 2;
    context.fillStyle = color;
    circle(centerX, centerY, blockSize / 2, true);
};

// Прототип для упрощения сравнивания ячеек
// (столкновения типа яблоко-голова, голова-хвост)
Block.prototype.equal = function (otherBlock) {
    return this.col === otherBlock.col && this.row === otherBlock.row;
};

// Конструктор для Змейки
var Snake = function () {
    this.segments = [
        new Block(7, 5),
        new Block(6, 5),
        new Block(5, 5)
    ];
    this.direction = "right";
    this.nextDirection = "right";
};

// Движение Змейки
Snake.prototype.draw = function () {
    for (var i = 0; i < this.segments.length; i++) {
        this.segments[i].drawSquare("blue");
    }
};

// Описываем логику Змейки
Snake.prototype.move = function () {
    var head = this.segments[0]; // Присваиваем "голове" (первый блок массива) свою переменную
    var newHead; // Объявляем переменную для новой "головы"

    this.direction = this.nextDirection; // Направление движения головы и следующего квадрата равны,
                                         // если не нажата кнопка смены направления
// Логика для смены направления (рисуем новый блок по измененным координатам)
    if (this.direction === "right") {
        newHead = new Block(head.col + 1, head.row);
    } else if (this.direction === "down") {
        newHead = new Block(head.col, head.row + 1);
    } else if (this.direction === "left") {
        newHead = new Block(head.col - 1, head.row);
    } else if (this.direction === "up") {
        newHead = new Block(head.col, head.row - 1);
    }

    // Проверка на столкновение... ->
    if (this.checkCollision(newHead)) {
        gameOver();
        return;
    }
    // Добавляем в начало массива новую голову по новым координатам
    this.segments.unshift(newHead);

    // Если голова встретила яблоко - блок не удаляется - змейка растет
    if (newHead.equal(apple.position)) {
        score++;
        apple.move();
    } else {
        this.segments.pop(); // Если не встретила - удаляем блок с конца
    }
};

// Проверка на столкновение
Snake.prototype.checkCollision = function (head) {
    // Проверяем на столкновение со стенами (равны ли координаты)
    var leftCollision = (head.col === 0);
    var topCollision = (head.row === 0);
    var rightCollision = (head.col === widthInBlocks -1);
    var bottomCollision = (head.row === heightInBlocks - 1);

    // Объединяем все стены в общею переменную (для удобства понимания)
    var wallCollision = leftCollision || topCollision || rightCollision || bottomCollision;

    // Задаем первоначальное значение для удара об себя равным false
    var selfCollision = false;

    // Если все же голова (head) совпадает по значению (столкновение)
    // с блоком хвоста (проверяем каждый блок this.segments[i]) - возвражаем true
    for (var i = 0; i < this.segments.length; i++) {
        if (head.equal(this.segments[i])) {
            selfCollision = true;
        }
    }
    // Возвращаем в результате работы функции false || false в head = все ок,
    // если есть true, значит есть столкновение
    return wallCollision || selfCollision;
};

// Проверка на недопустимое направление
Snake.prototype.setDirection = function (newDirection) {
    if (this.direction === "up" && newDirection === "down") {
        return;
    } else if (this.direction === "right" && newDirection === "left") {
        return;
    } else if (this.direction === "down" && newDirection === "up") {
        return;
    } else if (this.direction === "left" && newDirection === "right") {
        return;
    }
    // При прохождении присваиваем нажатую клавишу переменной нового направления
    this.nextDirection = newDirection;
};

// Конструктор для яблока (задает только стартовую точку)
var Apple = function () {
    this.position = new Block(10, 10);
};

// Рисуем яблоко на стандартной позиции при помощи метода круга
Apple.prototype.draw = function () {
    this.position.drawCircle("limeGreen");
};

// Для яблока создается случайная позиция
// (отнимаем толщину стен, прибавляем единицу, чтобы не начиналось на стене)
Apple.prototype.move = function () {
    var randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1;
    var randomRow = Math.floor(Math.random() * (heightInBlocks - 2)) + 1;
    this.position = new Block(randomCol, randomRow);
};

// Создаем объект-змейку и объект-яблоко
var snake = new Snake();
var apple = new Apple();

// Запускаем анимацию через setInterval
var intervalId = setInterval(function () {
    context.clearRect(0, 0, width, height);
    drawScore();
    snake.move();
    snake.draw();
    apple.draw();
    drawBorder();
}, 100);

// Прописываем коды нужных клавиш с присвоением предпочитаемых имен
var directions = {
    37: "left",
    38: "up",
    39: "right",
    40: "down"
};

// Обработчик событий нажатия клавиш
$("body").keydown(function (event) {

    // Записываем код нажатия клавиши в переменную
    var newDirection = directions[event.keyCode];

    // Проверяем нажата клавиша из списка или другая,
    // если из списка - возвращаем ее как команду змее
    if (newDirection !== undefined) {
        snake.setDirection(newDirection);
    }
});
