// Implement a function that checks whether an email address is valid. An email address has two parts: A "local part" and a "domain part." An @ sign separates the two parts: local-part@domain-part. The local part is the name of the mailbox; this is usually a username. The domain part is the domain name (e.g., gmail.com, yahoo.com.ph, or myCompanyName.com). The domain name contains a server name (sometimes called the mail server name) and a top-level domain (.com, .ph, etc.).

// For this practice problem, use the following criteria to determine whether an email address is valid:

// There must be one @ sign.
// The local part must contain one or more letters (A-Z, a-z) and/or digits (0-9). It may not contain any other characters.
// The domain part must contain two or more components with a single dot (.) between each component. Each component must contain one or more letters (A-Z, a-z) only.

// To keep things simple, you don't need to check whether the domain part or top-level domain is "real" or "official".

let checkAtSign = function(email) {
  return !!email.match(/@/);
}
let string1 = 'a@a'
let string2 = 'aa'
// console.log(checkAtSign(string1) === true);
// console.log(checkAtSign(string2) === false);

// let checkLocalPart = function(localPart) {
//   if (localPart.match(/[^a-z\d]/i)) {
//     return false
//   }
//   return !!localPart.match(/[a-z\d]+/);
// }

let checkLocalPart = function(localPart) {
  return !!localPart.match(/^[a-z\d]+$/i);
}

let string3 = 'sarahbunker'
let string4 = 'sarah.bunker'
let string5 = ''
// console.log(checkLocalPart(string3) === true);
// console.log(checkLocalPart(string4) === false);
// console.log(checkLocalPart(string5) === false);

// // The domain part must contain two or more components with a single dot (.) between each component. Each component must contain one or more letters (A-Z, a-z) only.

let checkDomainPart = function(domainPart) {
  return !!domainPart.match(/^([a-z]+\.)+[a-z]+$/i)
}

let string6 = 'gmail.com'
let string7 = 'gmail'
let string8 = ''
// console.log(checkDomainPart(string6) === true);
// console.log(checkDomainPart(string7) === false);
// console.log(checkDomainPart(string8) === false);

// function isValidEmail(email) {
//   let localPart = email.split('@')[0];
//   let domainPart = email.split('@')[1] || '';
//   return (checkAtSign(email) && checkLocalPart(localPart) && checkDomainPart(domainPart));
// }

function isValidEmail(email) {
  return !!email.match(/^[a-z\d]+@([a-z]+\.)+[a-z]+$/i);
}

console.log(isValidEmail('Foo@baz.com.ph')    === true );          // returns true
console.log(isValidEmail('Foo@mx.baz.com.ph') === true );       // returns true
console.log(isValidEmail('foo@baz.com')       === true );             // returns true
console.log(isValidEmail('foo@baz.ph')        === true );              // returns true
console.log(isValidEmail('HELLO123@baz')      === false );            // returns false
console.log(isValidEmail('foo.bar@baz.to')    === false );          // returns false
console.log(isValidEmail('foo@baz.')          === false );                // returns false
console.log(isValidEmail('foo_bat@baz')       === false );             // returns false
console.log(isValidEmail('foo@bar.a12')       === false );             // returns false
console.log(isValidEmail('foo_bar@baz.com')   === false );         // returns false
console.log(isValidEmail('foo@bar.....com')   === false );         // returns false
