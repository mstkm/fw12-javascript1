let mtk = 80;
let bahasaIndonesia = 90;
let bahasaInggris = 89;
let ipa = 69;

let jumlah = mtk + bahasaIndonesia + bahasaInggris + ipa
let rataRata = jumlah / 4;
 
if (mtk, bahasaIndonesia, bahasaInggris, ipa === undefined) {
    console.log("Semua Nilai Harus Terisi!");
} else if (rataRata >= 90 && rataRata == 100) {
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
} else if (rataRata == 0 && rataRata <= 59) {
    console.log("Rata-rata = " + rataRata);
    console.log("Grade = E");
}



