const teks = 'Surabaya';

function mengubahKonsonan() {
    let hasil = "";
    if (typeof teks === typeof "") {
        for (let i = 0; i < teks.length; i++) {
            if (teks[i] == "a") {
              hasil += "o";
            } else {
              hasil += teks[i];
            }
           }
            console.log(hasil);
    } else {
        console.log("Tipe Data Teks Harus String");
    }
}

mengubahKonsonan(teks);