//Task 1
/*
let x ='Hello js', 
    x1=100, 
    x2=5.5, 
    x3=true;
const color = 'red';
console.log(`x= ${x} x1= ${x1} x2= ${x2} x3= ${x3} color= ${color}`);
*/

/*
//Task 2
let m;
m=parseFloat(prompt('Введите значение в метрах'));
let с= m*100;
let d= m/2.54;
console.log('метры=',m, 'сантиметры=', с, 'дюйм=', d);
*/


/*
//Task 3
let q = 9;
let i;
for (i=1; i<=10; i++){
    console.log(`${i} * ${q} = ${i * q}`);
}

//Task 3*
let i;
let j;
for (i=1; i<=10; i++)
for (j=1; j<=10; j++){
    console.log(`${i} * ${j} = ${i*j}`);
}
*/ 


//Task 4 
/*
let price = parseInt(prompt('Введите цену за 1 кг.'));
let price2 = parseInt(prompt('Введите сумму заказа.'));
let price3 = parseInt(prompt('Введите вес в граммах.'));
let total = price/10
let sale = 3;
let sum = 500, weight = 1000//(gram)
console.log(`Сумма за 100 грамм = ${total} грн.`);
if(price2 >= sum){
    price2 = price2 * (100- sale) / 100 ;
    console.log(`Сумма со скидкой в 3% = ${price2} грн.`);
} if (price3 >= weight){
    console.log('Ваш вес ', price3,'грамм = скидка 3%');
} else { 
   console.log('Ваш вес ', price3,' грамм = без скидки');
}*/


/*
//Task 5
let num = 2;
let exp = 10;
let result = 1;
let count = 1;
while (count <= exp){
  result = result * num;
  console.log(result)
  count++;
}
*/

/*
//Task 6
let sum = 0;
let number;
for(number=1; number<=30; number=number+2){
    sum = sum + number;
}
console.log(' сумма не четных чисел =', sum);
*/

/*
//Task 7
let accessAllowed;
let planet = prompt('Какая наша планета по счету от солнца?');
if (planet>= 3){
    accessAllowed = true;
}  else {
    accessAllowed = false;
}
 alert(accessAllowed);
*/

/*
//Task7*
let user, comp;
comp = 88;
do{
    user = +prompt ('44+44=?');
} while (user != comp);
console.log(user);
*/