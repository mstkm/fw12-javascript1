const teks = "apa";

let hasil = "";
if (teks.length > 2) {
    for (let i = teks.length - 1; i >= 0; i-- ) {
        hasil += teks[i];
    }
    if (hasil === teks) {
        console.log("Palindrome");
    } else {
        console.log("Bukan palindrome");
    }
} else {
    console.log("Teks Harus Lebih dari 2 Huruf!")
}