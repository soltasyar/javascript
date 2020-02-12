function myRandom(min , max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function matZnaki(a , b , c){
let znak;
let raidAns;
switch(a){
  case 1 : znak = " + ";
  raidAns = b + c;
  break;
  case 2 : znak = " - ";
  raidAns = b - c;
  break;
  case 3 : znak = " / ";
  raidAns = b / c;
  break;
  case 4 : znak = " * ";
 raidAns = b * c;
  break;
  case 5 : znak = " % ";
  raidAns = b % c;
  break;
}
let userAns = +prompt(b + znak + c);
if(userAns == raidAns){
  alert("верно");
}else{alert("не верно");}
}


let nun1;
let nun2;
let taskCount = 5;
let min = +prompt("введите начальное число");
let max = +prompt("введите конечное число");

for(let i = 0; i< taskCount; i++){
  nun1 = myRandom(min , max);
  nun2 = myRandom(min , max);
  let id = myRandom(1 , 5);
  matZnaki(id , nun1 , nun2);
}
