function dms(angle) {
  angle = normalizeDegrees(angle);
  const MIN_TO_DEG = 60;
  const SEC_TO_MIN = 60;
  const degrees = parseInt(angle, 10);
  let remainder = (angle - degrees) * MIN_TO_DEG;
  // console.log(`remainder: ${remainder}`)
  const minutes = padZeros(String(parseInt(remainder, 10)));
  remainder = (remainder - minutes) * SEC_TO_MIN;
  const seconds = padZeros(String(parseInt(remainder, 10)));
  return `${degrees}°${minutes}'${seconds}"`
}

function padZeros(numberString) {
  return (numberString.length < 2) ? '0' + numberString : numberString;
}

function normalizeDegrees(number) {
  while (number > 360) {
    number -= 360;
  }

  while (number < 0) {
    number += 360;
  }

  return number;
}

// console.log(dms(30));

console.log(dms(30)        === "30°00'00\"");           // 30°00'00"
console.log(dms(76.73)     === "76°43'48\"");        // 76°43'48"
console.log(dms(254.6)     === "254°35'59\"");        // 254°35'59"
console.log(dms(93.034773) === "93°02'05\"");    // 93°02'05"
console.log(dms(0)         === "0°00'00\"");            // 0°00'00"
console.log(dms(360)       === "360°00'00\"");          // 360°00'00" or 0°00'00"


console.log(dms(-1)   === "359°00'00\"");   // -1°00'00"
console.log(dms(400)  === "40°00'00\"");  // 400°00'00"
console.log(dms(-40)  === "320°00'00\"");  // -40°00'00"
console.log(dms(-420) === "300°00'00\""); // 420°00'00"
