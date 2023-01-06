// Armstrong Sayısı Bulma (153 - 370 - 407 vb..)

// Her bir sayının rakamlarının küpünün toplamı kendisini veriyorsa buna Armstrong sayısı denir.
// Örnek: 153: 1*1*1 + 5*5*5 + 3*3*3 = 1 + 125 + 27 = 153 Bu bir Armstrong sayısıdır.

let sayi = prompt("Bir sayı giriniz!");
let toplam = 0;

for (let i = 0; i < sayi.length; i++) {
  let rakam = sayi.charAt(i);
  toplam += rakam * rakam * rakam;
}

if (Number(sayi) == toplam) {
  alert("Bu bir Armstrong sayısıdır!");
} else {
  alert("Bu bir Armstrong sayısı değildir!");
}
