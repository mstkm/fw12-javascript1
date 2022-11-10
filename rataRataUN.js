const mtk = 90;
const bahasaIndonesia = 95;
const bahasaInggris = 90;
const ipa = 89;

const jumlah = mtk + bahasaIndonesia + bahasaInggris + ipa
const rataRata = jumlah / 4;

// Pengkonsdisian untuk validasi nilai mtk, bahasaIndonesia, bahasaInggris dan ipa harus terisi semua dengan tipe data number
if (typeof mtk !== "number" || typeof bahasaIndonesia !== "number" || typeof bahasaInggris !== "number" || typeof ipa !== "number") {
    console.log("Semua Nilai Harus Terisi!");
} else {
    // Pengkondisian untuk menentukan grade
    if (rataRata >= 90 && rataRata <= 100) {
        console.log("Rata-rata = " + rataRata);
        console.log("Grade = A");
    } else if (rataRata >= 80 && rataRata <= 89) {
        console.log("Rata-rata = " + rataRata);
        console.log("Grade = B");
    } else if (rataRata >= 70 && rataRata <= 79) {
        console.log("Rata-rata = " + rataRata);
        console.log("Grade = C");
    } else if (rataRata >= 60 && rataRata <= 69) {
        console.log("Rata-rata = " + rataRata);
        console.log("Grade = D");
    } else if (rataRata >= 0 && rataRata <= 59) {
        console.log("Rata-rata = " + rataRata);
        console.log("Grade = E");
    }    
}

