// 1. Gabung String
// Buat fungsi yang menerima dua string dan menggabungkannya.
// Tampilkan juga panjang string hasil gabungan.
// Test case & output yang diharapkan:
// str1 = "halo", str2 = "dunia" → Gabungan: halodunia, Panjang: 9
// str1 = "a", str2 = "b"         → Gabungan: ab, Panjang: 2
// str1 = "123", str2 = "456"     → Gabungan: 123456, Panjang: 6
let str = "jawa"
str += " kontol"
 console.log(str)


// 2. Konversi Number → String → Number
// Buat fungsi yang menerima angka:
// - Ubah menjadi string, tampilkan panjangnya
// - Ubah kembali ke angka, tambahkan 1, tampilkan hasilnya
// Test case & output yang diharapkan:
// angka = 7        → Panjang string: 1, Hasil setelah +1: 8
// angka = 1000     → Panjang string: 4, Hasil setelah +1: 1001
// angka = 987654   → Panjang string: 6, Hasil setelah +1: 987655
let kntl = 99
kntl += 1
kntl = String(kntl)
let angkalen = kntl.length

console.log (`${kntl} panjangnya sebesar ${angkalen}`)



// 3. Cek Positif dan Genap
// Buat fungsi yang menerima angka dan mengembalikan:
// - "Positif dan genap" jika lebih dari 0 dan habis dibagi 2
// - "Positif" jika lebih dari 0 dan ganjil
// - "Negatif" jika kurang dari 0
// - "Nol" jika sama dengan 0
// Test case & output yang diharapkan:
// input = -3  → Negatif
// input = 0   → Nol
// input = 7   → Positif
// input = 8   → Positif dan genap
let jokowidodo = 5

if (jokowidodo > 0 && jokowidodo%2 === 0){
    console.log ("Positive dan Genap")
} 
    else if (jokowidodo > 0 && jokowidodo%2 === 1){
        console.log ("Positive dan ganjil")
    }
    else if (jokowidodo < 0){
        console.log ("Niggative")
    }
    else if (jokowidodo === 0){
        console.log ("Nol")
    }



    