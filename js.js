alert("данная программа выводит чётные числа. <br> вам нужно ввести начальное и конечное число. <br> программа выведит чётные числа в заданом интервале");
do{
  var nunber1 = +prompt("введите начальное число");
}while(isNaN(nunber1) || nunber1 == 0);
do{
  var nunber2 = +prompt("введите конечное число");
}while(isNaN(nunber2) || nunber2 == 0);
for (let chotnye = nunber1; chotnye <= nunber2; chotnye++) {
    if (chotnye % 2 == 0) {
      alert( chotnye );
    }
  }
