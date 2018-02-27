function kaliTerusRekursif(angka) {
  // you can only write your code here!
  angka = angka.toString();
  var temp = 1;
  
  if(angka.length == 1) {
    temp = parseInt(angka);
    return temp;
  } else {
    temp = parseInt(angka[0]) * kaliTerusRekursif(angka.slice(1));
    
  }
  
  temp = temp.toString();
  return parseInt(temp[temp.length - 1]);
  
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6