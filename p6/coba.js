function cetakNama(nama) {
    return `Hi, nama saya ${nama}`;
}

const PI = 3.14;

const mahasiswa = {
    nama: 'simax',
    umur: 22,
    // cetakMhs: function () {}
    // cetakMhs: () => {}
    cetakMhs() {
        return `Halo nama saya ${this.nama} dan saya umur ${this.umur} tahun`;
    },
}


class Orang {
    constructor() {
        console.log('Objek dibuat');
    }
}


// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

// module.exports = {
//     cetakNama: cetakNama,
//     PI: PI,
//     mahasiswa: mahasiswa,
//     Orang: Orang,
// }

module.exports = { cetakNama, PI, mahasiswa, Orang }