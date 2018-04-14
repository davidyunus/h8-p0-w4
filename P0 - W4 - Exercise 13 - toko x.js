function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];

  // you can only write your code here!
    var buyer = [{
                  product: listBarang[0][0],
                  shoppers: [],
                  leftOver: listBarang[0][2],
                  totalProfit: 0
                  }, 
                  {
                    product: listBarang[1][0],
                    shoppers: [],
                    leftOver: listBarang[1][2],
                    totalProfit: 0
                  }, 
                  {
                    product: listBarang[2][0],
                    shoppers: [],
                    leftOver: listBarang[2][2],
                    totalProfit: 0
                  }];
  
  for(let i = 0; i < buyer.length; i++) {
    for(let j = 0; j < shoppers.length; j++) {
      if(buyer[i].product == shoppers[j].product && buyer[i].leftOver >= shoppers[i].amount) {
        buyer[i].shoppers.push(shoppers[j].name);
        buyer[i].leftOver -= shoppers[j].amount;
        if(shoppers[i].product == 'Sepatu Stacattu') {
          buyer[i].totalProfit += 150000 * shoppers[j].amount;
        } else if(shoppers[i].product == 'Baju Zoro') {
          buyer[i].totalProfit += 50000 * shoppers[j].amount;
        } else {
          buyer[i].totalProfit += 175000 * shoppers[j].amount;
        }
      }
    }
  }
    
  return buyer;
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, 
{name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
// console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// // [ { product: 'Sepatu Stacattu',
// //     shoppers: [],
// //     leftOver: 10,
// //     totalProfit: 0 },
// //   { product: 'Baju Zoro',
// //     shoppers: [],
// //     leftOver: 2,
// //     totalProfit: 0 },
// //   { product: 'Sweater Uniklooh',
// //     shoppers: [],
// //     leftOver: 1,
// //     totalProfit: 0 } ]
// console.log(countProfit([])); //[]