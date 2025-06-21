// Jumlahkan semua angka genap dalam array berikut

console.log("Latihan 1");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let resultOne = 0

for (let index = 0; index < numbers.length; index++){
    if(numbers[index] % 2 === 0){
        resultOne += numbers[index]
    }
}

console.log(resultOne);


//Tambahkan semua angka ganjil dalam array dan kembalikan hasilnya.
console.log("Latihan 2");
const numbersTwo = [1, 2, 3, 4, 5, 6, 7, 8];
let resultTwo = 0

for (let index = 0; index < numbersTwo.length; index++) {
    if(numbersTwo[index] % 2 !== 0) {
        resultTwo += numbersTwo[index]
    } 
}

console.log(resultTwo);



// Ubah semua huruf kecil dalam array menjadi huruf besar
console.log("Latihan 3");
let students = ["Tito", "arY", "Bostang"]
let resultThree = []

for (let index = 0; index < students.length; index++) {
    resultThree.push(students[index].toUpperCase())
}

console.log(resultThree);


// Ambil hanya nama-nama orang yang umurnya di atas 18 tahun.
// Ambil hanya orang yang panjang namanya lebih dari 5
console.log("Latihan 4");
const people = [
    { name: 'Andi', age: 17 },
    { name: 'Tito Alexsta', age: 20 },
    { name: 'Bostang', age: 22 },
    { name: 'Cici', age: 17 }
];

let people1 = []
let people2 = []
let people3 = []

for (let index = 0; index < people.length; index++) {
    if (people[index].age > 18) {
       people1.push(people[index].name) 
    }
    
    if (people[index].name.length > 5) {
        people2.push(people[index])
    }

}
console.log(people1);
console.log(people2);


// Hitung total harga semua barang
console.log("Latihan 5");
const items = [
    { name: 'Book', price: 10000 },
    { name: 'Pen', price: 5000 },
    { name: 'Pencil', price: 3000 },
];

let totalHarga = 0

for (let index = 0; index < items.length; index++) {
    totalHarga += items[index].price
}

console.log(totalHarga);


//Ambil hanya angka unik dari array (hapus duplikat).
console.log("Latihan 6");
const numbersThree = [1, 2, 2, 3, 4, 4, 5];
let uniqueNumbers = []

for (let index = 0; index < numbersThree.length; index++) {
    if(!uniqueNumbers.includes(numbersThree[index])){
        uniqueNumbers.push(numbersThree[index])
    }
}

console.log(uniqueNumbers);


// Ambil nama produk dengan harga tertinggi
console.log("Latihan 7");
const products = [
    { name: 'Laptop', price: 15000000 },
    { name: 'Phone', price: 8000000 },
    { name: 'Monitor', price: 3000000 },
];
let maxPrice = products[0]

for (let index = 0; index < products.length; index++) {
    if (products[index].price > maxPrice) {
        maxPrice = products[index].price
    }
    
}

console.log(maxPrice.name);

// Buat kalimat dari array kata.
console.log("Latihan 8");
const words = ['Belajar', 'array', 'itu', 'menyenangkan'];
const sentence = words.join(" ")

// console.log(`${words[0]} ${words[1]} ${words[2]} ${words[3]}`);
console.log(sentence);


// Ambil hanya 3 data pertama yang mengandung kata 'a' pada nama.
console.log("Latihan 9");
const names = ['Aldo', 'Budi', 'Caca', 'Dinda', 'Eka', 'Fajar'];
let threeWord = []
for (let index = 0; index < names.length; index++) {
    if (names[index].toLowerCase().includes('a')) {
        threeWord.push(names[index])
    }

    if (threeWord.length >= 3) {
        break;
    }
    
}

console.log(threeWord);


// Hitung total karakter dari semua nama dalam array.
console.log("Latihan 10");
const namesTwo = ['Ani', 'Budi', 'Citra']; // 12 karakter
let totalChar = 0
for (let index = 0; index < namesTwo.length; index++) {
    totalChar += namesTwo[index].length
}

console.log(totalChar);

// Output: ['Tono (22)', 'Tara (25)']
// Ubah array objek ke array string dengan format 'Nama (Umur)' dan hanya yang umurnya di atas 21.
console.log("Latihan 11");
const peopleTwo = [
    { name: 'Tono', age: 22 },
    { name: 'Tini', age: 19 },
    { name: 'Tara', age: 25 },
];

let sentences = []

for (let index = 0; index < peopleTwo.length; index++) {
   if (peopleTwo[index].age > 21) {
    sentences.push(peopleTwo[index].name + " (" + peopleTwo[index].age + ")")
   }
}

console.log(sentences);


