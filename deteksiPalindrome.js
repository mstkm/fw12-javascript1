const teks = "kakak";

// console.log(teks.length > 2);
let hasil = "";

 if (teks.length > 2) {
    for (let i = teks.length - 1; i >= 0; i-- ) {
        hasil += teks[i];
    }
    // console.log(hasil);
    // console.log(typeof hasil);

    if (hasil === teks) {
        console.log("Palindrome");
    } else {
        console.log("Bukan palindrome");
    }
} else {
    console.log("Teks Harus Lebih dari 2 Huruf!")
}