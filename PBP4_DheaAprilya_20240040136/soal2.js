var MotoGp = [
  {
    circuit: "Losail",
    location: "Qatar",
    winner: {
        firstName: "Andrea",
        lastName: "Dovizioso",
        country: "Italy"
    }
  },
  {
    circuit: "Autodromo",
    location: "Argentine",
    winner: {
        firstName: "Cal",
        lastName: "Crutchlow",
        country: "UK"
    }
  },
  {
    circuit: "De Jerez",
    location: "Spain",
    winner: {
        firstName: "Valentino",
        lastName: "Rossi",
        country: "Italy"
    }
  },
  {
    circuit: "Mugello",
    location: "Italy",
    winner:{
        firstName: "Andrea",
        lastName: "Dovizioso",
        country: "Italy"
    }
  }   
];

var groupedData = MotoGp.reduce((acc, race) => {
    let country = race.winner.country;
    let winnerName = race.winner.firstName + " " + race.winner.lastName;

    if (!acc[country]) {
      acc[country] = {
        winningCircuits: [],
        totalWin: 0
      };
    }

    acc[country].winningCircuits.push({
     name: winnerName,
     winLocation: race.circuit + ",  " + race.location 
    });
    acc[country].totalWin++;

    return acc;
}, {});

console.dir(groupedData, { depth: null, colors: true });