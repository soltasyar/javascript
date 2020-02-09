var yer = prompt("ваш возраст?");
if(yer < 18){
    alert("вы ещё молоды. учитесь.");
}
if(yer >= 18 && yer < 50){
    alert("вы можете работать");
}
if(yer >= 50 && yer < 59){
    alert("вы близки к пенсии");
}

var hour = prompt("введите время.", "пример: 8 или двухзначное 21");
if(hour >= 0 && hour <= 3 || hour >= 23 && hour <= 24){
    alert(hour + " ч ночи");
}
if(hour >= 4 && hour <= 11){
    alert(hour + " ч утра");
}
if(hour >= 12 && hour <= 16){
    alert(hour + " ч дня");
}
if(hour >= 17 && hour <= 22){
    alert(hour + " ч вечера");
}
else{
    alert("нет токого времени суток");
}

var x = +prompt("вычеслим среднее число из двух чисел. введите первое число.");
var y = +prompt("введите второе число");
alert((x + y) / 2);