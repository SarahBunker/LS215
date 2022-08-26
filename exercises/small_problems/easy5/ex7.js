// Write a function that takes a string argument consisting of a first name, a space, and a last name, and returns a new string consisting of the last name, a comma, a space, and the first name.

function swapName(name) {
  return name.replace(/(^[a-z ]*?) ([a-z]*$)/i, '$2, $1')
}

console.log(swapName('Joe Roberts') === "Roberts, Joe");    // "Roberts, Joe"
console.log(swapName('Joe Momma Roberts') === "Roberts, Joe Momma");    // "Roberts, Joe"
