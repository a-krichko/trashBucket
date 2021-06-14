// var speak = function () {
//     console.log(this.sound + "! Меня зовут " + this.name + "!");
// };
// var cat = {
//     sound: "Miaow",
//     name: "Варежка",
//     // speak: "Привет",
//     say: speak
// };
//
// cat.say();

var Car = function (x, y) {
    this.x = x;
    this.y = y;
};

var drawCar = function (car) {
    var carHtml = '<img src="pngtree-car-wash-logo-template-designs-cleaning-car-car-wash-service-logo-png-image_1908274.jpg">';
    var carElement = $(carHtml);
    carElement.css({
        position: "absolute",
        left: car.x,
        top: car.y
    });
    $("body").append(carElement);
};

var ford  = new Car(100, 200);
var nissan = new Car(20,20);

drawCar(ford);
drawCar(nissan);