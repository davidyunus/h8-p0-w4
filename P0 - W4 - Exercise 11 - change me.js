function changeMe(arr) {
  var hasil = {};
  
  for(var i = 0; i < arr.length; i++) {
    
    myObj = {};
    
    myObj.firstName = arr[i][0];
    myObj.lastName = arr[i][1];
    myObj.gender = arr[i][2];
    myObj.age = 2018 - arr[i][3];
  
    if(myObj.age > 0) {
      
      } else {
      myObj.age = 'Invalid Birth Year';
    }
  console.log((i + 1)+ '. ' + myObj.firstName + ' ' + myObj.lastName + ':');
  console.log(myObj);  
  }
  
  if(arr == '') {
    console.log('""');
  }
  
}



// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male'], ['Dimitri', 'Irtimid', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
