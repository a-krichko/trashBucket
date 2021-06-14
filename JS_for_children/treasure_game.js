//Получить случайное число от 1 до size-1
var getRandomNumber = function (size) {
    return Math.floor(Math.random()*size)
};
// Создаем переменные
var width = 400;
var height = 400;
var clicks = 0;

// Случайная позиция клада
var target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

var getDistance = function (event, target) { // Вычислить расстояние от клика (event) до клада (target)
    var diffX = event.offsetX - target.x;
    var diffY = event.offsetY - target.y;
    return Math.sqrt((diffX*diffX) + (diffY*diffY));
};

var getDistanceHint = function (distance) {  // Получить строку подсказки (холодно\горячо)
    if (distance < 10) {
        return "Обожжешься";
    } else if (distance < 20) {
        return "Очень горячо";
    } else if (distance < 40) {
        return "Горячо";
    } else if (distance < 80) {
        return "Тепло";
    } else if (distance < 160) {
        return "Холодно";
    } else if (distance < 320) {
        return "Очень холодно";
    } else {
        return "Замерзнешь";
    }
};

// Добавляем Обработчик клика в <img>
$("#map").click(function (event) {
    clicks++;

    // Получаем расстояние от клика до клада (!Важно понимать, что тут мы именно помещаем результат
    // вычислений из функции в переменную)
    var distance = getDistance(event,target)

    // Преобразуем расстояние в подсказку (!Важно понимать, что тут мы именно помещаем результат
    // вычислений из функции в переменную)
    var distanceHint = getDistanceHint(distance);

    // Записываем в элемент #distance новую подсказку
    $("#distance").text(distanceHint + ". Сделано кликов: " + clicks + " из 40 возможных.");

    // Если клик был достаточно близко - поздравляем с победой
    if (distance <= 8) {
        alert("Клад найден! Сделано кликов: " + clicks);
    }
    if (clicks > 41) {
        alert("КОНЕЦ ИГРЫ");
        location.reload();
    }
});

