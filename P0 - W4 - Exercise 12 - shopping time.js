function shoppingTime(memberId, money) {
    // you can only write your code here!
    var udahBeliStacattu = 0;
    var udahBeliZoro = 0;
    var udahBeliHN = 0;
    var udahBeliUniklooh = 0;
    var udahBeliCasing = 0;
    
    var myObj = {
      memberId : memberId,
      money : money,
      listPurchased : [],
      changeMoney : money
    };
    
    var product = {
      item1 : ['Sepatu Stacattu', 1500000],
      item2 : ['Baju Zoro', 500000],
      item3 : ['Baju H&N', 250000],
      item4 : ['Sweater Uniklooh', 175000],
      item5 : ['Casing Handphone', 50000]
    };
    
    if(myObj.memberId === '') {
      return 'Mohon maaf, toko X hanya berlaku untuk member saja';
    } else if(myObj.money < 50000) {
      return 'Mohon maaf, uang tidak cukup';
    } else if(myObj.memberId === undefined || myObj.money === undefined) {
      return 'Mohon maaf, toko X hanya berlaku untuk member saja';
    }
    
    while(myObj.changeMoney >= 50000) {
      
      if(myObj.changeMoney >= 1500000) {
        myObj.listPurchased.push('Baju Stacattu');
        myObj.changeMoney = myObj.changeMoney - product.item1[1];
        udahBeliStacattu = 1;
        
      } else if(myObj.changeMoney >= 500000) {
        myObj.listPurchased.push('Baju Zoro');
        myObj.changeMoney = myObj.changeMoney - product.item2[1];
        udahBeliZoro = 1;
        
      } else if(myObj.changeMoney >= 250000) {
        myObj.listPurchased.push('Baju H&N');
        myObj.changeMoney = myObj.changeMoney - product.item3[1];
        udahBeliHN = 1;
        
      } else if(myObj.changeMoney >= 175000) {
        myObj.listPurchased.push('Sweater Uniklooh');
        myObj.changeMoney = myObj.changeMoney - product.item4[1];
        udahBeliUniklooh = 1;
        
      } else if(myObj.changeMoney >= 50000 && udahBeliCasing != 1) {
        myObj.listPurchased.push('Casing Handphone');
        myObj.changeMoney = myObj.changeMoney - product.item5[1];  
        udahBeliCasing = 1;
        
      } else {
        myObj.changeMoney = myObj.changeMoney;
        break;
      }
      
    }
    
    return myObj;
    
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja