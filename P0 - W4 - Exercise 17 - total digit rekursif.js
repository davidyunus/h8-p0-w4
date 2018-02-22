var angkaAsli;
var input;
var jumlah = 0;
var i = 0;
var hasilAkhir = 0;
function totalDigitRekursif(angka) {
  // you can only write your code here!
  input = angka.toString().split('');


  if(input.length > 1) {
    i = 0;
    jumlah = 0;
    angkaAsli=angka.toString().split('');
    totalDigitRekursif(angkaAsli[i]);
  }
  else {
    jumlah = jumlah + parseInt(angka);
    i++;
    if(i < angkaAsli.length)
    {
      totalDigitRekursif(angkaAsli[i]);
    }
    else{
      hasilAkhir=jumlah;
      jumlah=0;
    }
  }
  return hasilAkhir;
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
