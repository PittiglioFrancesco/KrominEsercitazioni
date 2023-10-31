// var array = [1, 4, 7, 2, 6, 12];
// var orderedArray = [];
// var arrayLength = array.length;

// var done = false;
// do {
//   done = true;
//   for (var i = 1; i < array.length; i++) {
//     if (array[i - 1] < array[i]) {
//       done = false;
//       var temp = array[i - 1];
//       array[i - 1] = array[i];
//       array[i] = temp;
//     }
//   }
// } while (!done);

// do {
//   done = true;
//   for (var i = 1; i < array.length; i++) {
//     if (array[i] < array[i - 1]) {
//       done = false;
//       var temp = array[i - 1];
//       array[i - 1] = array[i];
//       array[i] = temp;
//     }
//   }
// } while (!done);

// console.log(array);

function orderArray(numbers, method) {
  var done = false;
  if (method === "crescente") {
    while (!done) {
      done = true;
      for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] < numbers[i - 1]) {
          done = false;
          var temp = numbers[i - 1];
          numbers[i - 1] = numbers[i];
          numbers[i] = temp;
        }
      }
    }
  }
  if (method === "decrescente") {
    while (!done) {
      done = true;
      for (var i = 1; i < numbers.length; i++) {
        if (numbers[i - 1] < numbers[i]) {
          done = false;
          var temp = numbers[i - 1];
          numbers[i - 1] = numbers[i];
          numbers[i] = temp;
        }
      }
    }
  }
  return numbers;
}

// do {
//   var method = prompt("Choose method (crescente or decrescente)");
// } while (method !== "crescente" || "decrescente");

var a = [1, 4, 7, 2, 6, 12];

var array = orderArray(a, "decrescente");
console.log(array);
