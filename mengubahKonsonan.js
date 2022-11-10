// Membuat fungsi merubah huruf 'a' menjadi 'o'
function mengubahKonsonan(teks) {
    // Pengkondisian untuk validasi tipe data harus string
    if (typeof teks === "string") {
        // perulangan untuk mengakses setiap karakter diawali dari karakter pertama, mengganti huruf 'a' menjadi huruf 'o', dan menyusunnya kembali dalam variabel hasil
        let hasil = "";
        for (let i = 0; i < teks.length; i++) {
            if (teks[i] == "a") {
              hasil += "o";
            } else {
              hasil += teks[i];
            }
           }
            console.log(hasil); // akan mengeluarkan output teks dengan huruf 'a' diubah menjadi huruf 'o'
    } else {
        console.log("Tipe Data Teks Harus String"); // akan dipanggil jika tipe data teks bukan string
    }
}

mengubahKonsonan('Surabaya'); // Expected output: Suroboyo
mengubahKonsonan(100); // Expected output: Tipe Data Teks Harus String