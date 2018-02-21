function changeVocals (str) {
  //code di sini
  var tampung = '';
  for(var i = 0; i < str.length; i++) {
    switch(str[i]) {
    case 'A' :
      tampung += 'B';
      break;
    case 'E' :
      tampung += 'F';
      break;
    case 'I' :
      tampung += 'J';
      break;
    case 'O' :
      tampung += 'P';
      break;
    case 'U' :
      tampung += 'V';
      break;
    case 'a' :
      tampung += 'b';
      break;
    case 'e' :
      tampung += 'f';
      break;
    case 'i' :
      tampung += 'j';
      break;
    case 'o' :
      tampung += 'p';
      break;
    case 'u' :
      tampung += 'v';
      break;
    default :
    tampung += str[i];
    }
  }
  return tampung;
}

function reverseWord (str) {
  //code di sini

  var output = str.split('');
  var hasil = output.reverse();
  return hasil.join('');
}

function setLowerUpperCase (str) {
  //code di sini
  var input = str;
  var output = '';

  for(var i = 0; i < input.length; i++) {

    if(input[i] == input[i].toUpperCase()) {
      output += input[i].toLowerCase();
    } else if(input[i] == input[i].toLowerCase()) {
      output += input[i].toUpperCase();
    }
  }
  return output;
}

function removeSpaces (str) {
  //code di sini
  var input = str;
  var output = '';

  for(var i = 0; i < input.length; i++) {
  if(input[i] == ' ') {
      output += '';
    } else if(input[i] != ' ') {
      output += input[i];
    }
  }
  return output;
}

function passwordGenerator (name) {
  //code di sini
  var vocalsIncrement = changeVocals(name);
  var reversedWord = reverseWord(vocalsIncrement);
  var changeCapital = setLowerUpperCase(reversedWord);
  var output = removeSpaces(changeCapital);
  if(output.length < 5) {
    output = 'Minimal karakter yang diinputkan adalah 5 karakter';
  }

  return output;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
