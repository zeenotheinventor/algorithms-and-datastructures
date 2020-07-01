/*
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.

Example:

Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.
 */

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = function (x, y) {
  var result = 0;

  var xbits = x.toString(2);
  var ybits = y.toString(2);

  // Left-pad the bits with 0's so they align.
  var diff = Math.abs(xbits.length - ybits.length);
  if (xbits.length < ybits.length) {
    for (var i = 0; i < diff; i++) {
      xbits = "0" + xbits;
    }
  } else if (ybits.length < xbits.length) {
    for (var i = 0; i < diff; i++) {
      ybits = "0" + ybits;
    }
  }

  for (var i = 0; i < xbits.length; i++) {
    if (xbits[i] !== ybits[i]) {
      result++;
    }
  }

  return result;
};
