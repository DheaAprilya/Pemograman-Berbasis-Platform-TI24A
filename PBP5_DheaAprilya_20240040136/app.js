const { tambah, kali } = require('./modul/kalkulasi');
const sapa = require('./modul/sapaan');
const getTanggalSekarang = require('./modul/tanggal');
const { celciusToFahrenheit, kmToMil } = require('./modul/konversi');

console.log("== Aplikasi Modular Node.js ===\n");

console.log(sapa("Eya"));
console.log(`Tanggal hari ini: ${getTanggalSekarang()}`);

console.log("\n--- Operasi Matematika ---");
console.log(`5 + 3 = ${tambah(5, 3)}`);
console.log(`5 x 3 = ${kali(5,3)}`);

console.log("\n--- Konversi ---");
console.log(`30°C = ${celciusToFahrenheit(30)}°F`);
console.log(`10 km = ${kmToMil(10).toFixed(2)} mil`);