//1) escribir f(x) que reciba str y lo devuelva invertido
function reverse(str) {
  return str.split("").reverse().join("");
}
console.log(reverse("hola"));

function reverse2(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
console.log(reverse2("Hola"));

// 2) sumar todos los numeros de un arr
function sumArr(arr) {
  return arr.reduce((acum, num) => acum + num, 0);
}
console.log(sumArr([1, 2, 3, 4, 5]));

function sumArr2(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumArr2([1, 2, 3, 4, 5]));

function sumArr3(arr) {
  let sum = 0;
  for (num of arr) {
    sum += num;
  }
  return sum;
}
console.log(sumArr2([1, 2, 3, 4, 5]));

// 3) Devolver el primer caracter de un string
function firstChar(str) {
  return str.charAt(0);
}
console.log(firstChar("Hola"));

function firstChar2(str) {
  for (let i = 0; i < str.length; i++) {
    return str[i];
  }
}
console.log(firstChar2("Hola"));

// 4) Determinar si un numero es par con true o false
function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(2));
console.log(isEven(3));

function isEven2(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}
console.log(isEven2(2));
console.log(isEven2(3));

// 5) devolver el ultimo caracter de un str
function lastChar(str) {
  return str[str.length - 1];
}
console.log(lastChar("hola"));

function lastChar2(str) {
  last = "";
  for (let i = 0; i < str.length; i++) {
    last = str[i];
  }
  return last;
}
console.log(lastChar2("hola"));

function lastChar3(str) {
  let last = "";
  for (char of str) {
    last = char;
  }
  return last;
}
console.log(lastChar3("hola"));

// 6) repetir un string n veces
function repeat(str, times) {
  return str.repeat(times);
}
console.log(repeat("hola", 3));

function repeat2(str, times) {
  let newStr = "";
  for (let i = 0; i < times; i++) {
    newStr += str;
  }
  return newStr;
}
console.log(repeat2("hola", 3));

// hacerla con espacios
function repeat3(str, times) {
  let newStr = "";
  for (let i = 0; i < times; i++) {
    newStr += str + " ";
  }
  return newStr;
}
console.log(repeat3("hola", 3));

// 7) funcion que verifique si un array tiene un numero especifico

function includesNum(arr, num) {
  return arr.includes(num);
}
console.log(includesNum([1, 2, 3], 3));
console.log(includesNum([1, 2, 3], 4));

function includesNum2(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return true;
    }
  }
  return false;
}
console.log(includesNum2([1, 2, 3], 3));
console.log(includesNum2([1, 2, 3], 4));

function includesNum3(arr, num) {
  for (n of arr) {
    if (n === num) {
      return true;
    }
  }
  return false;
}
console.log(includesNum3([1, 2, 3], 3));
console.log(includesNum3([1, 2, 3], 4));

// 8) funcion que devuelva un nuevo array con los numeros pares
function evenNums(arr) {
  return arr.filter((num) => num % 2 === 0);
}
console.log(evenNums([2, 4, 6, 7, 9]));

function evenNums2(arr) {
  let even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    }
  }
  return even;
}
console.log(evenNums2([2, 4, 6, 7, 9]));

function evenNums3(arr) {
  let even = [];
  for (num of arr) {
    if (num % 2 === 0) {
      even.push(num);
    }
  }
  return even;
}
console.log(evenNums3([2, 4, 6, 7, 9]));

// 9 funcion que diga si una palabra empieza con vocal
function vowel(str) {
  let vowels = "aeiouAEIOUáéíóúÁÉÍÓÚ";
  return vowels.includes(str[0]);
}
console.log(vowel("hola"));
console.log(vowel("ola"));

function vowel2(str) {
  let vowels = "aeiouAEIOUáéíóúÁÉÍÓÚ";
  for (let i = 0; i < vowels.length; i++) {
    if (str[0] === vowels[i]) {
      return true;
    }
  }
  return false;
}
console.log(vowel2("hola"));
console.log(vowel2("ola"));
