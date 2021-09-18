/**
 * Add a comma after the first digit of a number
 * @param {number} num
 * @returns number
 */
export default function addCommaAfterFirstDigit(num) {
  return num.toString().replace(/\B(?=(\d{1})+(?!\d))/, ",");
}
