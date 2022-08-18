/*
// Problem

Building on the previous exercise, write a function that returns true or false based on whether or not an inventory item is available. As before, the function takes two arguments: an inventory item and a list of transactions. The function should return true only if the sum of the quantity values of the item's transactions is greater than zero. Notice that there is a movement property in each transaction object. A movement value of 'out' will decrease the item's quantity.



in: itemid, list of transactions => nested array has objects that have id, movement, quantity properties
out: boolean if item is in stock

explicit:
- returns true or false based on whether or not an inventory item is available
- the function takes two arguments: an inventory item and a list of transactions
- return true only if the sum of the quantity values of the item's transactions is greater than zero
- Notice that there is a movement property in each transaction object
  - A movement value of 'out' will decrease the item's quantity.
implicit:
  - you can have a negative stock amount

mutating?
-------------------------------------------------
// Examples

- edge cases
-------------------------------------------------
// DataStructure

-------------------------------------------------
// Algorithym

- get transactions for a given id
- sum quantity in stock
  iterate through transactions
    add to total amount in quantity if movement is in
    subtract to total amount if movement is out
  return sum
- return conditiional of checking if greater than 0
  0 or negative should return false


- take example(s) through Algorithym
*/
"use strict"

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

let sumQuantityInStock = function(transactions) {
  return transactions.reduce(function(total, transaction) {
    if (transaction.movement === 'in') {
      total += transaction.quantity;
    } else {
      total -= transaction.quantity;
    }
    return total;
  }, 0)
}

let transactionsFor = function(itemID, transactions) {
  return transactions.filter( (transaction) => {
    return itemID === transaction.id;
  })
}

let isItemAvailable = function(itemID, transactions) {
  return sumQuantityInStock(transactionsFor(itemID)) > 0;
}

let sampleTransactions =[
  { id: 101, movement: "in",  quantity:  5 },
  { id: 101, movement: "in",  quantity: 12 },
  { id: 101, movement: "out", quantity: 18 }, ]

console.log(sumQuantityInStock(sampleTransactions));

isItemAvailable(101, transactions);     // false
isItemAvailable(105, transactions);     // true
