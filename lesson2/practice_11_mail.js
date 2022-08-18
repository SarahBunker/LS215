// The objective of this practice problem is to build a function that parses a string of email data. The function takes an argument that contains the data, parses it, then produces two basic statistics about the email:
//
// - The number of email messages found in the string
// - The date range of the email messages
//
// The email messages string has the following characteristics:
//
// - The string contains multiple email messages separated by the delimiter string ##||##.
//
// - Each email message has five parts. The delimiter string #/# separates the parts.
//   - Sender
//   - Subject
//   - Date
//   - Recipient
//   - Body
// - All five parts occur in the sequence shown above.

// PROBLEM
// parse the text into emails
// parse the emails into 5 parts
// determine the number of emails
// determine the date range of the emails


// in: text
// out: output of two statistics

// EXAMPLES
// Count of Email: 5
// Date Range: Sat Jun 25 2016 - Thu Aug 11 2016
// date in data is in this form:
// Date: 07-27-2016
// need to convert to a day of week and change display format

// DATA
// In: text
// split text into an array of emails
// split email into 5 components into an array
// split date component into array of description and date
// convert date into date object
// out: text

// ALGORITHYM

// get array of emails by splitting text on ##||##
// number of emails is length of array of emails
// determine min and max dates using helper method
// output Count of Email: [# of emails]
// output Date Range: [min date, day of week] [min date formated]- [max date, day of week] [max date formated]


// helper method
// accepts array of emails
// declare start date
// declare end date
// iterate through array of emails with index
  // split email into array of components by splitting on #/#
  // access the third element of component which is index 2
  // split into two parts by splitting on ': '
  // convert the second part to a date object
  // if index is 0 initialize start date and end date to date object then continue to next date
  // check if date object earlier then start date > set start date to date object, continue
  // check if date object is later then end date > set end date to date object
// returns array of min and max date

function minMaxDates(emails) {
  let minDate;
  let maxDate;

  for (let index = 0; index < emails.length; index += 1) {
    const email = emails[index];
    const components = email.split(/#\/#/);
    const dateString = components[2].split(': ')[1]
    const currentDate = new Date(dateString);
    if (index === 0) {
      minDate = currentDate;
      maxDate = currentDate;
      continue;
    }

    if (currentDate < minDate) minDate = currentDate;
    if (currentDate > maxDate) maxDate = currentDate;
  }

  return [minDate, maxDate];
}

function mailCount(emailData) {
  const emails = emailData.split(/##\|\|##/);
  const numEmails = emails.length;
  const dates = minMaxDates(emails);
  const minDate = dates[0];
  const maxDate = dates[1];
  console.log(`Count of Email: ${numEmails}`);
  console.log(`Date Range: ${minDate.toDateString()} - Thu ${maxDate.toDateString()}`);
}

mailCount(emailData);
