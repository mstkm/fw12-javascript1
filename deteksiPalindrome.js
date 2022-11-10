const teks = "apa";

// Pengkondisian untuk validasi bahwa teks harus lebih dari 2 huruf
if (teks.length > 2) {
    // Perulangan untuk mengakses setiap karakter pada teks dimulai dari karakter terakhir dan menyusunnya kembali dalam variable hasil
    let hasil = ""; 
    for (let i = teks.length - 1; i >= 0; i-- ) { 
        hasil += teks[i];
    }
    // Pengkondisian untuk mengecek hasil palindrome dan bukan palindrome
    if (hasil === teks) { 
        console.log("Palindrome");
    } else {
        console.log("Bukan palindrome");
    }
} else {
    console.log("Teks Harus Lebih dari 2 Huruf!") // akan dipanggil jika teks kurang dari 2 huruf
}