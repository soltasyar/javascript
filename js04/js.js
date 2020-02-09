function minus(m1 , m2){
  return m1 - m2;
}

function degree(d1 , d2){
  let res = 1;
  for(let i = res; i <= d2; i++){
    res = res * d1;
 }
 return res;
}


let name = prompt("введите ваше имя");
do{var age = +prompt("ваш год рождения");
}while(isNaN(age) || age == 0);
var pol = prompt("введите ваш пол. м или ж");
if(pol == "м" || pol == "М"){
  var age2 = prompt("бро! что-то я запамятовал, какой сейчас год?");
}
else if(pol == "ж" || pol == "Ж"){
  age2 = prompt("красавица! подскажи какой сейчас год?");
}
alert(name + " вам " + minus(age2 , age) + " года (лет)");

alert("решаем степень");
do{var nun1 = +prompt("введите число");
}while(isNaN(nun1) || nun1 == 0);
do{var nun2 = +prompt("введите степень");
}while(isNaN(nun2) || nun2 == 0);
alert("ответ " + degree(nun1 , nun2));
