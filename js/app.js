// 28 ejercicios 8 kyu
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
  for (let num of arr) {
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
  for (let char of str) {
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
  for (let n of arr) {
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
  for (let num of arr) {
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

// 10) multiplicar todos los numeros de un array
function multiply(arr) {
  return arr.reduce((acum, num) => acum * num);
}
console.log(multiply([1, 2, 3, 4]));

function multiply2(arr) {
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
  }
  return result;
}
console.log(multiply2([1, 2, 3, 4]));

function multiply3(arr) {
  let result = 1;
  for (let num of arr) {
    result *= num;
  }
  return result;
}
console.log(multiply3([1, 2, 3, 4]));

// 11) dado un array, devolver un array con sus longitudes
function arrLength(arr) {
  return arr.map((num) => num.length);
}
console.log(arrLength(["hola", "mundo"]));

function arrLength2(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i].length);
  }
  return result;
}
console.log(arrLength2(["hola", "mundo"]));

function arrLength3(arr) {
  let result = [];
  for (let word of arr) {
    result.push(word.length);
  }
  return result;
}
console.log(arrLength3(["hola", "mundo"]));

// 12)verificar si string contiene espacios y devolver true si tiene
function space(str) {
  return str.split("").some((letter) => letter === " ");
}
console.log(space("hola mundo"));
console.log(space("hola"));

function space2(str) {
  return str.includes(" ");
}
console.log(space2("hola mundo"));
console.log(space2("hola"));

function space3(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      return true;
    }
  }
  return false;
}
console.log(space3("hola mundo"));
console.log(space3("hola"));

function space4(str) {
  for (let letter of str) {
    if (letter === " ") {
      return true;
    }
  }
  return false;
}
console.log(space4("hola mundo"));
console.log(space4("hola"));

// 13) reemplazar espacios de str por guiones
function replace(str) {
  return str.replace(" ", "-");
}
// esta cambia solo la primer ocurrencia
console.log(replace("hola mundo"));
console.log(replace("hola mundo cruel"));

function replace2(str) {
  return str.split(" ").join("-");
}
// esta cambia todas las ocurrencias
console.log(replace2("hola mundo"));
console.log(replace2("hola mundo cruel"));

function replace3(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      newStr += "-";
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}
console.log(replace3("hola mundo"));
console.log(replace3("hola mundo cruel"));

function replace4(str) {
  let newStr = "";
  for (let letter of str) {
    if (letter === " ") {
      newStr += "-";
    } else {
      newStr += letter;
    }
  }
  return newStr;
}
console.log(replace4("hola mundo"));
console.log(replace4("hola mundo cruel"));

// 14)contar cuantas vocales tiene un string
function countVowels(str) {
  let vowels = "aeiouAEIOUáéíóúÁÉÍÓÚ";
  return str.split("").filter((word) => vowels.includes(word)).length;
}
console.log(countVowels("hola"));
console.log(countVowels("hl"));

function countVowels2(str) {
  let vowels = "aeiouAEIOUáéíóúÁÉÍÓÚ";
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) result++;
  }
  return result;
}
console.log(countVowels2("hola"));
console.log(countVowels2("hl"));

function countVowels3(str) {
  let vowels = "aeiouAEIOUáéíóúÁÉÍÓÚ";
  let result = 0;
  for (let char of str) {
    if (vowels.includes(char)) result++;
  }
  return result;
}
console.log(countVowels3("hola"));
console.log(countVowels3("hl"));

// 15) contar numeros mayores que 5
function countBiggerThan5(arr) {
  return arr.filter((num) => num > 5).length;
}
console.log(countBiggerThan5([1, 6, 8, 3]));

function countBiggerThan5_2(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) count++;
  }
  return count;
}
console.log(countBiggerThan5_2([1, 6, 8, 3]));

function countBiggerThan5_3(arr) {
  let count = 0;
  for (let num of arr) {
    if (num > 5) count++;
  }
  return count;
}
console.log(countBiggerThan5_3([1, 6, 8, 3]));

// 16) sumar todos los positivos de un array
function sumPositives(arr) {
  return arr.filter((num) => num > 0).reduce((acum, num) => acum + num, 0);
}
console.log(sumPositives([-2, -5, 1, 2]));

function sumPositives2(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) sum += arr[i];
  }
  return sum;
}
console.log(sumPositives2([-2, -5, 1, 2]));

function sumPositives3(arr) {
  let sum = 0;
  for (let char of arr) {
    if (char > 0) sum += char;
  }
  return sum;
}
console.log(sumPositives3([-2, -5, 1, 2]));

// 17) convertir un numero a string
function numToString(num) {
  return num.toString();
}
console.log(numToString(4));

function numToString2(num) {
  return String(num);
}
console.log(numToString2(4));

// 18) devolver Even si un numero es par y Odd si es impar
function evenOrOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
console.log(evenOrOdd(3));
console.log(evenOrOdd(4));

function evenOrOdd2(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(evenOrOdd2(3));
console.log(evenOrOdd2(4));

// 19) eliminar el primer y ultimo caracter de un str
function removeChar(str) {
  return str.slice(1, -1);
}
console.log(removeChar("hola mundo"));

function removeChar2(str) {
  let newStr = "";
  for (let i = 1; i < str.length; i++) {
    newStr += str[i];
  }
  return newStr;
}
console.log(removeChar2("hola mundo"));

// 20) encontrar el menor numero en un array
function theSmallest(arr) {
  return Math.min(...arr);
}
console.log(theSmallest([-5, 7, 999, -42, 0, 5]));

function theSmallest2(arr) {
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
console.log(theSmallest2([-5, 7, 999, -42, 0, 5]));

function theSmallest3(arr) {
  let min = Infinity;
  for (let num of arr) {
    if (num < min) min = num;
  }
  return min;
}
console.log(theSmallest3([-5, 7, 999, -42, 0, 5]));

// 21) convertir un string a mayusculas
function toUpper(str) {
  return str.toUpperCase();
}
console.log(toUpper("hola"));

function toUpper2(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    newStr += str[i].toUpperCase();
  }
  return newStr;
}
console.log(toUpper2("hola"));

function toUpper3(str) {
  let newStr = "";
  for (let char of str) {
    newStr += char.toUpperCase();
  }
  return newStr;
}
console.log(toUpper3("hola"));

// 22) realizar operaciones matematicas entre 2 valores
function mathOp(operator, val1, val2) {
  switch (operator) {
    case "+":
      return val1 + val2;
    case "-":
      return val1 - val2;
    case "/":
      return val1 / val2;
    case "*":
      return val1 * val2;
    case "%":
      return val1 % val2;
  }
}
console.log(mathOp("+", 2, 5));

function mathOp2(operator, val1, val2) {
  if (operator === "+") return val1 + val2;
  if (operator === "-") return val1 - val2;
  if (operator === "*") return val1 * val2;
  if (operator === "/") return val1 / val2;
  if (operator === "%") return val1 % val2;
}
console.log(mathOp2("+", 2, 5));

// 23) devolver el numero opuesto
function theNegative(num) {
  return -num;
}
console.log(theNegative(4));
console.log(theNegative(-7));

function theNegative2(num) {
  return num * -1;
}
console.log(theNegative2(4));
console.log(theNegative2(-7));

// 24) devolver el numero negativo únicamente
function negativeNum(num) {
  return num > 0 ? -num : num;
}
console.log(negativeNum(4));
console.log(negativeNum(-7));

// 25) contar cuantos valores true hay en un array
function countTrue(arr) {
  return arr.filter(Boolean).length;
}
console.log(countTrue([true, true, false]));

function countTrue2(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true) count++;
  }
  return count;
}
console.log(countTrue2([true, true, false]));

function countTrue3(arr) {
  let count = 0;
  for (exp of arr) {
    if (exp) count++;
  }
  return count;
}
console.log(countTrue3([true, true, false]));

// 26) abreviar un nombre a las iniciales con . Ej Martin Pravia -> M. P.
function abbreviate(str) {
  return (
    str
      .split(" ")
      .map((word) => word[0].toUpperCase())
      .join(".") + "."
  );
}
console.log(abbreviate("martin pravia"));

function abbreviate2(str) {
  let words = str.split(" ");
  return words[0][0].toUpperCase() + "." + words[1][0].toUpperCase() + ".";
}
console.log(abbreviate2("martin pravia"));

function abbreviate3(str) {
  let newStr = "";
  let strSplit = str.split(" ");
  for (word of strSplit) {
    newStr += word[0].toUpperCase() + ".";
  }
  return newStr;
}
console.log(abbreviate3("martin pravia"));

// 27) remover espacios de un string
function removeSpaces(str) {
  return str.replaceAll(" ", "");
}
console.log(removeSpaces("hola me llamo martin"));

function removeSpaces2(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      newStr += str[i];
    }
  }
  return newStr;
}
console.log(removeSpaces2("hola me llamo martin"));

function removeSpaces3(str) {
  let newStr = "";
  for (let char of str) {
    if (char !== " ") {
      newStr += char;
    }
  }
  return newStr;
}
console.log(removeSpaces3("hola me llamo martin"));

// 28) duplicar un numero entero
function duplicateNum(num) {
  return num * 2;
}
console.log(duplicateNum(5));

function duplicateNum2(num) {
  let double = 1;
  for (let i = 0; i < num; i++) {
    double *= i * 2;
  }
  return double;
}
console.log(duplicateNum(6));

// ejercicios 7 kyu

// 1) devolver el caracter del medio si la longitud es impar o los dos caracteres del medio si es par en un string
function middleChar(str) {
  return str.length % 2 === 0
    ? str[str.length / 2 - 1] + str[str.length / 2]
    : str[Math.floor(str.length / 2)];
}
console.log(middleChar("hola"));
console.log(middleChar("ola"));

function middleChar2(str) {
  if (str.length % 2 === 0) {
    return str[str.length / 2 - 1] + str[str.length / 2];
  } else {
    return str[Math.floor(str.length / 2)];
  }
}
console.log(middleChar2("hola"));
console.log(middleChar2("ola"));

// 2) devolver el numero mas alto y mas bajo de un string
function highestAndLowest(str) {
  let nums = str.split(" ").map(Number);
  let max = Math.max(...nums);
  let min = Math.min(...nums);
  return `${max} ${min}`;
}
console.log(highestAndLowest("3 0 9 -55 125 19"));

function highestAndLowest2(str) {
  let numbers = str.split(" ").map(Number);
  let min = 0;
  let max = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) min = numbers[i];
    if (numbers[i] > max) max = numbers[i];
  }
  return `${max} ${min}`;
}
console.log(highestAndLowest2("3 0 9 -55 125 19"));

// 3) transforma una cadena como "abcd" a A-Bb-Ccc-Dddd
function mumbling(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[i].toUpperCase() + str[i].toLowerCase().repeat(i);
    if (i < str.length - 1) result += "-";
  }
  return result;
}
console.log(mumbling("hola"));

function mumbling2(str) {
  return str
    .split("")
    .map((word, index) => word.toUpperCase() + word.toLowerCase().repeat(index))
    .join("-");
}
console.log(mumbling2("hola"));
