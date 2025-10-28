const http = require('http');

// Data MotoGP
const motoGP = [
  {
    circuit: 'Losail',
    location: 'Qatar',
    winner: { firstName: 'Andrea', lastName: 'Dovizioso', country: 'Italy' }
  },
  {
    circuit: 'Autodromo',
    location: 'Argentine',
    winner: { firstName: 'Cal', lastName: 'Crutchlow', country: 'UK' }
  },
  {
    circuit: 'De Jerez',
    location: 'Spain',
    winner: { firstName: 'Valentino', lastName: 'Rossi', country: 'Italy' }
  },
  {
    circuit: 'Mugello',
    location: 'Italy',
    winner: { firstName: 'Andrea', lastName: 'Dovizioso', country: 'Italy' }
  }
];

// Fungsi bantu
function groupByCountry(data) {
  const grouped = {};
  data.forEach(item => {
    const c = item.winner.country;
    if (!grouped[c]) grouped[c] = [];
    grouped[c].push(item);
  });
  return grouped;
}

function groupByWinner(data) {
  const grouped = {};
  data.forEach(item => {
    const name = `${item.winner.firstName} ${item.winner.lastName}`;
    if (!grouped[name]) grouped[name] = [];
    grouped[name].push(item);
  });
  return grouped;
}

// Buat server
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // tampilkan semua data
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(motoGP, null, 2));
  } else if (req.url === '/country') {
    // tampilkan berdasarkan negara
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(groupByCountry(motoGP), null, 2));
  } else if (req.url === '/name') {
    // tampilkan berdasarkan nama pemenang
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(groupByWinner(motoGP), null, 2));
  } else {
    // jika URL tidak dikenali
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Bad Request');
  }
});

// Jalankan server
server.listen(8000, () => {
  console.log('Server berjalan di http://localhost:8000');
});
