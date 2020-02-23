  alert("программка выполняет некоторые ваши команды.");
  alert("пример: add,ira добавит ира stop остановит выполнение скрипта del,ira удалит иру del не работает");
   let arr = [];
   while(true) {
       let name = prompt("введите вашу команду").split(",");
       if(name == "stop"){
           break;
       }
       else if(name[0] == "add"){
           arr.push(name[1]);
       }
       else if(name[0] != "add" && name[0] != "del"){
        alert("вы не ввели команду");
    }
    else if(name[0] == "del"){
        for(let i = 0; i < arr.length; i++){
            if(name[1] == arr[i]){
                arr.splice(i, 1);
            }
        }
    }
   }
   for(kiy of arr){
        console.log(kiy);
   }
