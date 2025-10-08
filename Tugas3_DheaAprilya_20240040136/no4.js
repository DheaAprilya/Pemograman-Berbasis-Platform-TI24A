const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function tanya(prompt) {
  return new Promise((resolve) => rl.question(prompt, resolve));
}

async function hitungKalori() {
  const menitLari = Number(await tanya("Masukkan lama waktu lari (menit): "));
  const menitPushup = Number(await tanya("Masukkan lama waktu push-up (menit): "));
  const menitPlank = Number(await tanya("Masukkan lama waktu plank (menit): "));

  const kaloriLari = (60 / 5) * menitLari;
  const kaloriPushup = (200 / 30) * menitPushup;
  const kaloriPlank = 5 * menitPlank;

  const totalKalori = kaloriLari + kaloriPushup + kaloriPlank;

  console.log("\nHasil Perhitungan Kalori Terbakar:");
  console.log(`Kalori terbakar dari lari: ${kaloriLari.toFixed(2)} kalori`);
  console.log(`Kalori terbakar dari push-up: ${kaloriPushup.toFixed(2)} kalori`);
  console.log(`Kalori terbakar dari plank: ${kaloriPlank.toFixed(2)} kalori`);
  console.log(`Total kalori terbakar: ${totalKalori.toFixed(2)} kalori`);

  rl.close();
  process.exit(0);
}

hitungKalori();
