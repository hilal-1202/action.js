/*console.log("111111111111111111");

let kacAdet = +prompt("Kaç adet sayi girmek istersiniz?");
let toplam = 0;

for (let i = 1; i <= kacAdet; i++);
{
  toplam = +prompt(`${i}.sayiyi giriniz.`);
}

let ortalama = toplam / kacAdet;
i++;
alert(`ortalama: ${ortalama}`);

console.log("222222222222222222222222");
let taban = +prompt("Taban Değerini Pozitif Sayi Giriniz:");
let usSayi = +prompt("Üs Değerini Pozitif Sayi Giriniz:");

let sonuc = 1;
for (let i = 1; i <= usSayi; i++) {
  if (tabanSayi && usSayi > 0) {
    sonuc *= tabanSayi;
  }
}*/
alert(sonuc);

console.log("3333333333333333333");
let sayi = +prompt("Bir Sayi Giriniz:");
let sayac = 0;
let sonuc = 1;
while (sonuc >= 0) {
  sonuc = sayi /= 10;
  sayac += 1;
}
alert(sayac);
