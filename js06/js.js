let summ = 0;
let staff = {
  roman: 180,
  kiril: 200,
  anna: 250,
  kira: 270,
  denis: 300,
  alesya: 360,
  "full amount": summ,
};
for(key in staff){
  summ = summ + staff[key];
}
alert(summ);

let nation = {
   uzbekistan: "Odil Ahmedov",
   portugal: "Cristiano Ronaldo",
   swiden: "Zlatan Ibrahimović",
 };
 let copy = {};
 for(key in nation){
 copy[key] = nation[key];
 alert(key + " " +  copy[key]);
}

//  console.log(copy);