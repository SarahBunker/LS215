/*
A triangle is classified as follows:

Right: One angle is a right angle (exactly 90 degrees).
Acute: All three angles are less than 90 degrees.
Obtuse: One angle is greater than 90 degrees.
To be a valid triangle, the sum of the angles must be exactly 180 degrees, and every angle must be greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the three angles of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

You may assume that all angles have integer values, so you do not have to worry about floating point errors. You may also assume that the arguments are in degrees.

rules:
  valid triangle
    - the sum of the angles must be exactly 180 degrees
    - every angle must be greater than 0
  Right: One angle is a right angle (exactly 90 degrees).
  Acute: All three angles are less than 90 degrees.
  Obtuse: One angle is greater than 90 degrees.

input
  three angles as numbers
output
  'right', 'acute', 'obtuse', or 'invalid'.

// Algorithm
store degrees in array
sort degrees as numbers
guard clause
  check for valid triangle
    return 'invalid'
check if greatest degree is larger then 90
  return 'obtuse'
check if greatest degree is equal to 90
  return 'obtuse'
otherwise
  return 'acute'


helper valid triangle
  - sum all angles and compare to 180
  - check smallest angle is greater then zero
*/

function triangle(A, B, C) {
  let angles = [A, B, C]
  angles.sort( (a, b) => a - b);
  function validTriangle() {
    let sumAngles = angles.reduce( (total, current) => total += current);
    return (sumAngles === 180 && angles[0] > 0);
  }

  if (!validTriangle()) return "invalid";
  if (angles[2] > 90) return "obtuse";
  if (angles[2] === 90) return "right";
  return "acute";
}


console.log(triangle(60, 70, 50) === "acute");       // "acute"
console.log(triangle(30, 90, 60) === "right");       // "right"
console.log(triangle(120, 50, 10)=== "obtuse");      // "obtuse"
console.log(triangle(0, 90, 90)  === "invalid");        // "invalid"
console.log(triangle(50, 50, 50) === "invalid");       // "invalid"
