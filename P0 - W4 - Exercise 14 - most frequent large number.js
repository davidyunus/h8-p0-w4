
function sorting(arrNumber) {
  // code di sini
  var input = arrNumber;
  var temp = '';
  var outputSort = [];
  var terkecil = 0;
  var replace = 0;

    for(var i = 0; i < input.length; i++) {
        terkecil = i;
        replace = i;
      for(var j = i; j < input.length; j++) {
        if(input[terkecil] > input[j]) {
         terkecil = j;
        }
      }
      outputSort.push(input[terkecil]);
      temp = input[replace];
      input[replace] = input[terkecil];
      input[terkecil] = temp;
    }

    return outputSort;

}

function getTotal(arrNumber) {
// code di sini
    var countTerbesar = sorting(arrNumber);
    var terbesar = countTerbesar[countTerbesar.length - 1];
    var arrTerbesar = [];
    var jumlah = 0;

    for(var i = 0; i < countTerbesar.length; i++) {
      if(terbesar == countTerbesar[i]) {
        arrTerbesar.push(terbesar);

      } else {

      }

  }
  if(arrTerbesar.length == 0) {
   return '';
  } else {
    return 'angka paling besar adalah ' + arrTerbesar[0] + ' jumlah kemunculan sebanyak ' + arrTerbesar.length + ' kali';
  }
}


function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
