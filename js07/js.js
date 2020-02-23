let i = 0;
let name = "";
let age = "";
let users = {};
for(i = 1; i <= 3; i++){
  name = prompt("введите ваше имя");
  age = +prompt("введите ваш возраст");
  users[i] = {
    name: name,
    age: age,
  };
}
for(id in users){
  for(key in users[id]){
    console.log("пользовател " + (i) + " " +  users[id][key]);
  }
}