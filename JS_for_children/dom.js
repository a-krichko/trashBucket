// var headingElement = document.getElementById("main-heading");
// console.log(headingElement.innerText);
// var newHeadingText = prompt("Введите новый заголовок:");
// headingElement.innerHTML = newHeadingText;

// var newHeadingText = prompt("Введите новый заголовок:");
// $("#main-heading").text(newHeadingText);
// $("body").append("<p>Это новый параграф</p>");
// for (var i=0; i<3; i++) {
//     var hobby = prompt("Назови хобби!");
//     $("body").append("<p>"+hobby+"</p>");
// }
// $("h1").text("Этот текст исчезнет").fadeOut(3000).fadeIn(1000).slideUp(2000).slideDown(3000);

// for (var i=0; i<3; i++) {
//     $("h1").hide(1000);
//     $("h1").show(1000);
// }
// $("h1").hide(1000);
// $("h1").show(1000);

// var array = ["sasa","dasa","fasa","gasa","hasa"];
// var newHeadingText = prompt("Введите новый заголовок:");
// $("#main-heading").text(newHeadingText);
// for (var i=0; i<array.length; i++) {
//     $("body").append("<p>"+array[i]+"</p>");
// };
// $("p").append(" kexibq");

// for (var i=0, j=1000; i<5; i++, j=j+1000) {
//     $("h1").fadeOut(j).fadeIn(j);
// };

// $("h1").fadeOut(1000).delay(3000).fadeIn(1000);

// var a = function () {
//     $("h1").fadeTo(500, 0).fadeTo(500, 1);
    // alert("Время вышло!");
// };
// var timeoutId = setTimeout(a,2000);
// };
// clearTimeout(timeoutId);
// setInterval(a, 2000);

// var counter = 1;
// var printMessage = function () {
//     console.log("Ты смотришь в консоль, сек:"+counter);
//     counter++;
// };
//
// var intervalId = setInterval(printMessage, 1000);
//
// clearInterval(intervalId);

// var leftOffset = 0;
//
// var moveHeading = function () {
//     $("#main-heading").offset({left: leftOffset}).fadeTo(500, 0).fadeTo(500, 1);
//     leftOffset++;
//     if (leftOffset > 400) {
//         leftOffset = 0;
//     }
// };
// setInterval(moveHeading, 20);

// var clickHandler = function (event) {
//     console.log("Клик! "+event.pageX+" "+event.pageY);
// };
// $("h1").click(clickHandler);

// $("html").click(function (event) {
//     $("#main-heading").offset ({
//         left: event.pageX,
//         top: event.pageY
//     });
// });

// var moveHeading = function () {
//     $("#main-heading").offset({left: 200}).offset({left: 200, top: 200}).offset({left:0, top:200}).offset({left:0, top:0});
// };
// moveHeading()

// var moveHeading = function () {

// var a=0;
// while (a=0) {

var score = 1;

var a = function () {
    // for (c=0; c<2; c++) {
        setTimeout(() => $("#main-heading").offset({left: 0, top: 0}), 0);
        setTimeout(() => $("#main-heading").offset({left: 200, top: 0}), 1000);
        setTimeout(() => $("#main-heading").offset({left: 200, top: 200}), 2000);
        setTimeout(() => $("#main-heading").offset({left: 0, top: 200}), 3000);
        setTimeout(() => $("#main-heading").offset({left: 0, top: 0}), 4000);
    // }
};

intervalId = setInterval(a, 4000/(score*2));

$("body").click(function () {
    $("main-heading").append(score);
    score+=1;
    if (score >= 3) {
            $("main-heading").text("Вы победили!");
    }
    else if (score > 3) {
            clearInterval(intervalId);
    }
});
// var c = 0;
// var b = function() {
//             clearInterval(intervalId);
//     }
//     c+=1;
// };

// b();



// clearInterval(intervalId);


// a();


// };


// };
// setInterval(moveHeading, 1000);

// var position0 = function () {
//     $("#main-heading").offset({left: 200});
// };
// var position1 = function () {
//     $("#main-heading").offset({left: 200, top: 200});
// };
// var position2 = function () {
//     $("#main-heading").offset({left: 0, top: 200});
// };
// var position3 = function () {
//     $("#main-heading").offset({left: 0, top: 0});
// };
//
// var infinite = 0;
//
// if ($("html").click() && infinite === 0) {
//     position0;
//     infinite++;
// } else if ($("html").click() && infinite === 1) {
//     position1;
//     infinite++;
// } else if ($("html").click() && infinite === 2) {
//     position2;
//     infinite++;
// } else if ($("html").click() && infinite === 3) {
//     position3;
//     infinite = 0;
// };











