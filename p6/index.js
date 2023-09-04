// const cetakNama = (nama) => 'Hi, nama saya '+nama ;

// const fs = require('fs');  //core module
// const moment = require('moment');  //third party module
// const cetakNama = require('./coba'); // local module


const coba = require('./coba');

// console.log(coba);

console.log(
    coba.cetakNama('simax'), 
    coba.PI, 
    coba.mahasiswa.cetakMhs(), 
    new coba.Orang()
);