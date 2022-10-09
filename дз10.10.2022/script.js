//1
/*let i = 1;
while(i<=10) {
    console.log(i); 
    i++;
}
for (let i = 0; i<=1; i++) {
    console.log(i);
}

//2
for (let i = 0; i<=20; i++) {
    if (i % 2 == 0)
    console.log(i);
}

//3
let myName = prompt('Введите имя')
let str2 = prompt('Введите год рождения')
let str3 = prompt('Введите место жительства')

console.log(`Добрый день ${myName}, вы проживаете в городе ${str3}, ваш возраст - ${2022-str2} лет`)

//4
let price = 7500;
let sale = 0;

if (price => 2000 && price < 5000) {
    sale = price * 0.05;
} else if (price => 5000 && price < 10000) {
    sale = price * 0.10;
} else if (price => 10000) {
    sale = price * 0.15;
} else if ( price< 1000) {
    console.log (`Бесплатная доставка от 1000 рублей. До бесплатной доставки не хватает ${1000 - price} Рублей`)
}
console.log(`В корзине товаров на сумму ${price}.С учётом скидки ${price - sale} рублей`);

//5
let price = 10000
let promo = prompt(`Стоимость товара в корзине ${10000} рублей. Введите промокод:`);
if (promo == 'DELFA') {
    console.log(`Скидка по промокоду 50%. Стоимость товара - ${price - price * 0.5}`)
} else {
    console.log('Промокод не подходит')
}

//8
for (let n = 1000, num = 1; n > 50; num++) {
    if (n /= 2)
    console.log(n , num)
}
*/
//9
let array = [-2, 4, -10, 8, -7, 3, -5, 1, -9, 6];
let result = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        result += array[i];
    }
}
console.log(result);