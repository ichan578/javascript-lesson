let nickname = '(いっちゃん)'
let age = '(２４歳)'
let greet ='私のニックネームは' + name + 'です。' + '年齢は' + age +'です。'
console.log(greet)
let languages = ['JavaScript','PHP','Ruby','Python',' Go'];
let languagestext = (`私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`);
console.log(languagestext);
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1]);
let Johnage = 26;
let Bobage = 33;
let Michaelage = 22;
console.log((Johnage + Bobage + Michaelage) / 4) ;
function sayHello(Hello){
console.log('Hello')
};
sayHello();
let sayWorld = function(){
  console.log('World')
}
sayWorld();
user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
  birthday: '2000-09-27',
  sayHello: function(){
    console.log('Hello！');
  }
};
user.sayHello();
let calc = {};
   calc.add = function(x,y){
   console.log(3 + 4);
   };
   calc.add();
calc = {};
   calc.subtract = function(x,y){
   console.log(12 - 2); 
   };
   calc.subtract();
calc = {};
   calc.multiply = function(x,y){
   console.log(7 * 7); 
   };
   calc.multiply ();
calc = {};
   calc.divide = function(x,y){
   console.log(10 / 2); 
   };
   calc.divide();   
function remainder (x,y){
  return x % y;
}
   let result = remainder(5,3)
   console.log(`5 を 3 で割った余りは${result}です。`);
remainder();
//変数xのスコープがはfooという関数の中で、関数内でしか参照できないため、エラーが出てしまう。//
let random = Math.floor(Math.random()* 10);
console.log('floor =>', random);
setTimeout(function() {
  console.log('Hello World!');
}, 3000);
let num = 1;
if (num >0){
  console.log('num is greater than 0');
}else if (num <0){
  console.log('num is less than 0');
}else if (num ===0){
  console.log('num is 0')
}
let numbers = [];
for (let i = 0; i < 100; i++){
  numbers.push(i);
}
console.log(numbers);
let mixed = [4, '2', 5, '8', '9', 0, 1];
for (let i = 0; i < mixed.length; i++){
  let value = mixed[i];
  if(typeof value === 'number'){
    if(value % 2 ===0){
      console.log('even');
    } else {
      console.log('odd');
    }
  } else {
    console.log('not number');
  }
}