// fungsi waktu Sabtu, 16 Desember 2023
let waktu = new Date(); 
tahun = waktu.getFullYear();
bulan = waktu.getMonth();
tanggal = waktu.getDate();
hari = waktu.getDay();
jam = waktu.getHours();
menit = waktu.getMinutes();
detik = waktu.getSeconds();
dataHari = ["Minggu","Senin","Selasa","Rabu","Kamis","Jum'at","Sabtu"];
dataBulan = ["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Desember"];
hasilWaktu = `${dataHari[hari]}, ${tanggal} ${dataBulan[bulan]} ${tahun}`;
console.log(hasilWaktu);

//aritmatika
let a = 1;
    b = 1;
console.log(a < b);
let c = 20;
    d = 5;
console.log(c/d);
let e = 2;
    f = 3;
console.log(e < f);
let g = 90;
    h = 873;
console.log(g*h);
let i = 1;
    j = 2;
console.log(i == j);
let k = 1;
    l = 2;
console.log(k === l);
