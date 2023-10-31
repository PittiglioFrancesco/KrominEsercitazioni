class Invoice {
    constructor(id) {
        this.id = id;
        this.nextId = id + 1;
    }
}

var array = [];

do {
    var length = prompt('Number of elements in the array');
} while (length < 0);

for (var i = 1; i <= length; i++) {
    array.push(new Invoice(i));
}

function searchInvoiceById(array, id) {
    var temp;
    for (var i = 0; i < array.length; i++) {
        if (array[i].id === id) {
            temp = array[i];
        }
    }
    return temp
}

console.log(array);
var a = searchInvoiceById(array, 2);
console.log(a);