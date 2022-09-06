let ladder = '';
// let wordArray = ['head', 'heal', 'teal', 'tell', 'tall', 'tail'];
// wordArray.forEach(word => {
//   if (ladder !== '') {
//     ladder += '-'
//   }
//
//   ladder += word
// })

['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
  if (ladder !== '') {
    ladder += '-'
  }

  ladder += word
})

console.log(ladder)  // expect: head-heal-teal-tell-tall-tail
