function getTanggalSekarang() {
    const today = new Date();
    return today.toLocaleDateString('id-ID');
}

module.exports = getTanggalSekarang;