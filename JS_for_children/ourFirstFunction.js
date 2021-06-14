// var ourFirstFunction = function () {
//     console.log("Привет, мир!");
// };
// var sayHelloTo = function (name) {
//     console.log("Привет, "+name+"!");
// }
// sayHelloTo("Уася");
//
// var drawCats = function (howManyTimes) {
//     for (var i=0; i<howManyTimes; i++) {
//         console.log(i+" =^.^=");
//     }
// }
// drawCats(10);

// var printMultipleTimes = function (howManyTimes, whatToDraw) {
//     for (var i=0; i<howManyTimes; i++) {
//         console.log(i+" "+whatToDraw);
//     }
// };
// printMultipleTimes(9,"*_*");

// var fifthLetter = function (name) {
//     if (name.length<5) {
//         console.log("Слишком короткое имя!");
//         return;
//     }
//     return ("Пятая буква вашего имени: " + name[4] + ".");
// };
// console.log(fifthLetter("sasaa"));

// var medalForScore = function (score) {
//     if (score<3) {
//         return "Бронзовая";
//     }
//     if (score<7) {
//         return "Серебряная";
//     }
//     return "Золотая";
// };
// medalForScore(11);
//
// function double(number) {
//     return number*2;
// }
//
// function add(num1, num2) {
//     return num1 + num2;
// }
// function multiply(num1, num2) {
//     return num1*num2;
// }
// add(multiply(36325, 9824), 777);

// function areArraysSame(array1, array2) {
//     if (array1.length !== array2.length) {
//         return false;
//     };
//     for (i=0; i<array1.length; i++) {
//       if (array1[i] !== array2[i]) {
//           return false;
//       }
//     }
//     return true;
// };
// areArraysSame([1,2,3],[1,2,3]);

var array = ["alpaka", "lama", "cacadu", "mouse"];

var pickWord = function () {
    return array[Math.floor(Math.random()*array.length)];
};
var setupAnswerArray = function (word) {
    for (var i = 0; i < word.length; i++) {
        setupAnswerArray[i] = "_";
    }
    return setupAnswerArray;
};
var showPlayerProgress = function (answerArray) {
    alert(answerArray.join(" "));
};
var getGuess = function () {
    var guess = prompt("Угадайте букву или нажмите Отмена для выхода.");
    guess = guess.toLowerCase();
};
var remainingLetters = pickWord.length;
var updateGameState = function (guess, word, answerArray) {
    for (var j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            answerArray[j] = guess;
            remainingLetters--;
        }
    }
};

var word = pickWord();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;
while (remainingLetters > 0) {
    showPlayerProgress(answerArray);
    var guess = getGuess();
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Пожалуйста, введите одиночную букву.");
    } else {
        var correctGuesses = updateGameState(guess, word, answerArray);
        remainingLetters -=correctGuesses;
    }
}
showAnswerAndCongratulatePlayer(answerArray);








