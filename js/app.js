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
