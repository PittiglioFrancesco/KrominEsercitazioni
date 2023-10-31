var array = [1, 4, 7, 2, 6, 12];

for (var i = 1; i < array.length; i++) {
  var min = array[0];
  var max = array[0];
  if (array[i] < min) {
    min = array[i];
  }

  if (array[i] > max) {
    max = array[i];
  }
}

console.log(min, max);
