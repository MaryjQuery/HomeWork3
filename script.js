
function task1() {
  let i = 10;
  while (i <= 20) {
    console.log('i = ', i++)
  }
}
// task1 ();

function task2() {
  for (let i = 10; i <= 20; i++) {
    let degree;
    degree = i * i;
    console.log(i + " = " + degree);
  }
}
// task2 ();

function task3() {
  for (let j = 1; j <= 9; j++) {
    let i = 7;
    let sum = i * j;
    console.log(i + '*' + j + '=' + sum);
  }
}
// task3 ();

function task4() {
  let sum = 0;
  for (let i = 1; i < 15; i++) {
    sum = sum + i;
  }
  console.log(sum);
}
// task4();

function task5() {
  let mult = 1;
  for (let i = 15; i < 35; i++) {
    mult = mult * i;
  }
  console.log(mult);
}
// task5();

function task6() {
  let sum = 0;
  for (let i = 1; i < 500; i++) {
    sum = sum + i;
  }
  let average = sum / 500;
  console.log(average);
}
// task6();

function task7() {
  for (let i = 30; i < 80; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
// task7();

function task8() {
  for (i = 100; i < 200; i++) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }
}
// task8();

function task9() {
  let number = +prompt("Введите число");
  let numberSum = 0;
  console.log(number, typeof number);
  for (let i = 1; i <= number; i++) {
    if (number % 1 === 0 && number === !number); {
      console.log(i);
      if (i % 2 === 0) {
        numberSum += +i;
        console.log('сумма четных делителей:' + numberSum);
      }
    }
  }
}
// task9();

function task10() {
  for (let i = 1; i <= 9; i++) {
    for (j = 1; j <= 9; j++) {
      console.log(`${i} * ${j} = ${i * j}`);
    }
  }
}
// task10();

function task11() {
  let number = Math.floor(Math.random() * 10) + 1;
  let guessNumber = +prompt('Угадайте число от 1 до 10');
  console.log("рандом=" + number, "ввели=" + guessNumber);
  if (guessNumber === !number || guessNumber > 10 || guessNumber < 1) {
    alert("try from 1 to 10");
  }
  if (guessNumber === number) {
    alert('Winner');
  }
  if (guessNumber != number) {
    alert("try again");
  }
}
// task11();

