let mtk = 90;
let bahasaIndonesia = 90;
let bahasaInggris = 90;
let ipa = 95;

let jumlah = mtk + bahasaIndonesia + bahasaInggris + ipa
let rataRata = jumlah / 4;
 
if (mtk === undefined || bahasaIndonesia === undefined || bahasaInggris === undefined || ipa === undefined) {
    console.log("Semua Nilai Harus Terisi!");
} else if (rataRata >= 90 && rataRata <= 100) {
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
