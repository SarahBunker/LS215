/*
// Problem

Write a function that takes two arguments, an inventory item ID and a list of transactions, and returns an array containing only the transactions for the specified inventory item.

in: itemid, list of transactions => nested array has objects that have id, movement, quantity properties
out: nested array same objects from list of transactions

explicit:
implicit:

mutating?
-------------------------------------------------
// Examples

- edge cases
-------------------------------------------------
// DataStructure

-------------------------------------------------
// Algorithym

- iterate through transactions
- select transactions that match the input itemID
return selected objects


- take example(s) through Algorithym
*/

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

let transactionsFor = function(itemID, transactions) {
  return transactions.filter( (transaction) => {
    return itemID === transaction.id;
  })
}

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]
