//variabel biasa
let alamat = "Tangerang";
nama = "Rafi, Fitri, Anggara";
hobi = "jogging";
merkMobil = "Toyota, Daihatsu, Honda";
console.log(alamat);

//variabel perubahan dari yang awal Instagram ke Facebook
let socialMedia = "Instagram";
socialMedia = "Facebook";
console.log(socialMedia);

//variabel manipulasi string dengan fungsi substring
let tempatTinggal = "Tangerang";
nama = "Rafi, Fitri, Anggara";
hobi = "jogging";
merkMobil = "Toyota, Daihatsu, Honda";
data = nama.substring(6,11);
data1 = merkMobil.substring(18,23)
console.log(`nama saya ${data} mobil saya ${data1}`);

//variabel manipulasi string dengan fungsi replace
let laptop = "Asus";
merkLaplop = laptop.replace("Asus", "Lenovo");
console.log(merkLaplop);

//variable manipulasi string dengan fungsi tolocallowercase
let tas = "Pallazo";
data = tas.toLocaleLowerCase();
console.log(data);
let baju = "Zara";
data = baju.toLocaleUpperCase();
console.log(data);

//object
let dataDiri = {
    umur: 26,
    tinggiBadan: 170,
    noSIm: 213124124,

}
console.log(nama);
console.log(dataDiri);
console.log(dataDiri.tinggiBadan); 

//const
const tempatTinggalManusia = "Bumi";
intiTataSurya = "matahari";
console.log(tempatTinggalManusia);

//array
let merkSepatu1 = "New Balance"; //contoh mengisi variable biasa 
merkSepatu2 = "Nike"; //contoh mengisi variable biasa
merkSepatu3 = "Adidas"; //contoh mengisi variable biasa
merkSepatu = ["New Balance", "Nike", "Adidas"]; //contoh array
merkSepatu [1] = "Onitsuka";
merkSepatu.push(...["Diadora", "Ventela"]);
console.log(merkSepatu);

//variabel fungsi boolean

let diskon = 100,
gratis = "baju";
if(diskon > 90){
    gratis = "baju";
}
else {
    gratis = "celana";
}
console.log(gratis);

