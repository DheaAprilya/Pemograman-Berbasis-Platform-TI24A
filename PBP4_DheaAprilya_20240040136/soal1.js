let studentsScore = [
    { name : 'Andi', score: 90 },
    { name : 'Rudi', score: 80 },
    { name : 'Dira', score: 100 },
];

let topStudent = studentsScore.reduce((max, student) => {
    return (student.score > max.score) ? student : max;
});

console.log(`Nama: ${topStudent.name}, Nilai: ${topStudent.score}`);