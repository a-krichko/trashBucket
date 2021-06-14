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
    this.draw();
    this.speed = 5;
};

Car.prototype.draw = function () {
    var carHtml = '<img src="pngtree-car-wash-logo-template-designs-cleaning-car-car-wash-service-logo-png-image_1908274.jpg">';
    this.carElement = $(carHtml);
    this.carElement.css({
        position: "absolute",
        left: this.x,
        top: this.y
    });
    $("body").append(this.carElement);
};

Car.prototype.moveRight = function () {
    this.x += Math.random()* 5;
    this.carElement.css({
        left: this.x,
        top: this.y
    });
};

Car.prototype.moveLeft = function () {
    this.x -= 5;
    this.carElement.css({
        left: this.x,
        top: this.y
    });
};

Car.prototype.moveUp = function () {
    this.y -= 5;
    this.carElement.css({
        left: this.x,
        top: this.y
    });
};

Car.prototype.moveDown = function () {
    this.y += 5;
    this.carElement.css({
        left: this.x,
        top: this.y
    });
};

var ford  = new Car(100, 200);
var nissan = new Car(20,20);
var opel = new Car(100, 100);

// ford.draw();
// nissan.draw();

// setInterval(() => nissan.moveRight(), 10);
// setInterval(() => ford.moveRight(), 10);

