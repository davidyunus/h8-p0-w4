function shoppingTime(memberId, money) {
  if(memberId === '' || memberId === undefined || money === undefined) {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  } else if(money < 50000) {
    return 'Mohon maaf, uang tidak cukup';
  } else {
    
    var buyer = {};
    var item = [['Sepatu Stacattu', 1500000], 
                    ['Baju Zoro', 500000],  
                    ['Baju  H&N', 250000], 
                    ['Sweater Uniklooh', 175000], 
                    ['Casing Handphone', 50000]];
    
    buyer['memberId'] = memberId;
    buyer['money'] = money;
    buyer['listPurchased'] = [];
    buyer['changeMoney'] = money;
    
    for(let i = 0; i < item.length; i++) {
      if(buyer.changeMoney >= 1500000 && buyer.listPurchased[buyer.listPurchased.length-1] != item[0][0]) {
        buyer.changeMoney -= 1500000;
        buyer.listPurchased.push(item[0][0]);
      } else if(buyer.changeMoney >= 500000 && buyer.listPurchased[buyer.listPurchased.length-1] != item[1][0]) {
        buyer.changeMoney -= 500000;
        buyer.listPurchased.push(item[1][0]);
      } else if(buyer.changeMoney >= 250000 && buyer.listPurchased[buyer.listPurchased.length-1] != item[2][0]) {
        buyer.changeMoney -= 250000;
        buyer.listPurchased.push(item[2][0]);
      } else if(buyer.changeMoney >= 175000 && buyer.listPurchased[buyer.listPurchased.length-1] != item[3][0]) {
        buyer.changeMoney -= 175000;
        buyer.listPurchased.push(item[3][0]);
      } else if(buyer.changeMoney >= 50000 && buyer.listPurchased[buyer.listPurchased.length-1] != item[4][0]) {
        buyer.changeMoney -= 50000;
        buyer.listPurchased.push(item[4][0]);
      }
    }
    
    return buyer;
  }
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