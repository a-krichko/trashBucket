// var name = prompt("Как вас зовут?");
// console.log("Привет, "+name);

// var likesCats = confirm("Тебе нравятся кошки?");
// if (likesCats) {
//     console.log("Ты классная кошка!");
// } else {
//     console.log("Что ж, не проблема. Все равно ты молодец!");
// }
// alert("JavaScript");

//Создаем массив слов из которых берем слова
var words = ["программа","макака","прекрасный","оладушек"];
//Часть для случайного выбора слова
var word = words[Math.floor(Math.random()*words.length)];
//Часть для составления массива-маски для игры на величину выбранного слова, забиваем туда "_"
var answerArray=[];
for (var i=0; i<word.length; i++) {
    answerArray[i] = "_";
}
//Переменная на длину выбранного слова, для остановки
var remainingLetters = word.length;
var numberTry = 15;
var k = 0;
//Массив игры. Начало - вывод маски, запрос буквы либо Отмена(Отмена возвращает null)
while (remainingLetters > 0) {
    //вывод маски в строку с разделителем " "
    alert(answerArray.join(" "));
    //Запрос буквы
    var guess = prompt("Угадайте букву или нажмите Отмена для выхода.");
    guess = guess.toLowerCase();
    //Проверка на отмену
    if (guess === null) {
        break;
        //Проверка ввода лишь 1 символа
    } else if (guess.length !== 1) {
        alert("Пожалуйста, введите одну букву.");
        //Обновляем состояние игры
    } else if (k===numberTry) {
        alert("Проиграл!");
        break;
    }else {
        k++;
        //Цикл для присвоения значения ввода определенной
        //позиции маски при совпадении значений (вводится на определенно место),
        //повторяется, пока переменная равная длине загаданного слова != 0,
        //т.е. пока не угадаешь все буквы
        for (var j=0; j<word.length; j++) {
            
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}
//вывод готового массива-маски в строку
alert(answerArray.join(" "));
//вывод Поздравления + загаданное слово
alert("Отлично! Было загадано слово "+ word);