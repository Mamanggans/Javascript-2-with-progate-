// 1 

let number = 1;

console.log(number);

number += 1; 

console.log(number);

number += 1; 

console.log(number);

number += 1; 

console.log(number);

number += 1; 

console.log(number);

number += 1; 

// 2 loop while 

let number = 1 ; 
while (number <= 100){
  console.log(number);
  number += 1;
}

let number = 1 ; 
while (number <= 100){
  console.log(number % 2 === 0);
  number += 1;
}
// 3 loop for 

for (let number=1;number<=100;number ++){
  console.log(number);
}

// 4 loop for but somethin in the middle 

for (let number = 1; number <=100; number ++) {
  console.log(number);
  if (number % 3 === 0){
    console.log("Kelipatan 3");
  }
  else {
    console.log(number);
  }
}
// 5 array simple
const animals = ["anjing","kucing","domba"];

console.log(animals);

// 6 array get array base on position 

const animals = ["anjing", "kucing", "domba"];

console.log(animals[0]); // print anjing 

console.log(animals[2]); // print domba 

// 7 update an array 

const animals = ["anjing", "kucing", "domba"];

animals[2] = "kelinci";

console.log(animals[2]);

// 8 for ( iterasi dengan array )

const animals = ["anjing", "kucing", "domba"];

for (let i = 0;i < 3; i++){
  console.log(animals[i]);
}

// 9 mengtahui jumlah panjang (length) dalam suatu array 
const animals = ["anjing", "kucing", "domba", "kelinci", "monyet", "harimau", "beruang", "gajah"];

console.log(animals.length);

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

// 10 object

const character = {name: "Ninja Ken" , age : 14};

console.log(character);

// 11 dapetin suatu object dan update an object 

const character = {name: "Ninja Ken", age: 14};

console.log(character.name);

character.age = 20;

console.log(character);

// 12 object di dalam suatu array 

const characters = [
  {name: "Ninja Ken", age: 14},
  {name: "Guru Domba", age: 1000}
];

console.log(characters[0]); // panggil array pertama 
console.log(characters[1].name); // panggil nama di dalam array pertama 

// 13 iterasi untuk object yang berada didalam array 
const characters = [
  {name: "Ninja Ken", age: 14},
  {name: "Guru Domba", age: 100},
  {name: "Baby Ninja Ben", age: 5},
];


for (let i = 0;i < characters.length; i++) {
  console.log(characters[i]);

  const character = characters[i];
  
  // Print "Nama saya adalah ____"
  console.log("Nama saya adalah"+character.name);
  // atau bisa juga 
  console.log(`Nama saya ${character.name}`);
  


  // Print "Saya berusia ____ tahun"
  console.log(`Saya berusia ${character.age} tahun`);
  
}


// 14 undefined 
const characters = [
  {name: "Ninja Ken", age: 14},
  {name: "Guru Domba", age: 100},
  {name: "Baby Ninja Ben", age: 5},
  // Tambahkan element dibawah
  {name: "Birdie"}, // undefined age 
];

for (let i = 0; i < characters.length; i++) {
  console.log("--------------------");
  
  const character = characters[i];
  
  console.log(`Nama saya adalah ${character.name}`);
  console.log(`Saya berumur ${character.age} tahun`);
}
// 15 mencegah undefined dengan if else 


const characters = [
  {name: "Ninja Ken", age: 14},
  {name: "Guru Domba", age: 100},
  {name: "Baby Ninja Ben", age: 5},
  {name: "Birdie"}
];

for (let i = 0; i < characters.length; i++) {
  console.log("--------------------");
  
  const character = characters[i];
  
  console.log(`Nama saya adalah ${character.name}`);
  
  // Tambahkan statement if dibawah
  if (character.age === undefined){
    console.log("Umur saya rahasia!");
  } else {
    console.log(`Saya berumur ${character.age} tahun`);
  }
  
  
}
// 16 menggunakan objek bersarang 

const cafe = {
  name: "Progate Cafe",
  businessHours: {
    opening: "10:00",
    closing: "20:00"
  },
};

// Print "Nama: ____"
 console.log(`Nama: ${cafe.name}`);

// Print "Jam: Dari jam ____ sampai jam ____"
console.log(`Jam: Dari jam ${cafe.businessHours.opening} sampai jam ${cafe.businessHours.closing}`);

//[
//   {property: "opening", nilai: "10:00"},
//   {property: "closing", nilai: "20:00"},
// ]

// 17 menggunakan banyak objek dalam obbjek bersarang 
const cafe = {
  name: "Progate Cafe",
  businessHours: { 
    opening: "10:00",
    closing: "20:00"
  },
  // Tambahkan property menu dan berikan array yang sudah disediakan
  menu: ["Kopi","Teh","Kue Cokelat"]
};

console.log(`Nama: ${cafe.name}`);
console.log(`Jam: Dari jam ${cafe.businessHours.opening} sampai jam ${cafe.businessHours.closing}`);
console.log(`----------------------------`);
console.log("Menu Rekomendasi");

for (let i = 0; i < cafe.menu.length; i ++) {
  console.log(cafe.menu[i]);
}


