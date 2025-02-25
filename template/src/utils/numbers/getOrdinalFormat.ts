// utils/numbers/getOrdinalFormat.ts

/**
 * Returns the ordinal representation of a whole number.
 *
 * This function converts a given number into a string with its corresponding ordinal suffix.
 * For example:
 *   1 becomes "1st"
 *   2 becomes "2nd"
 *   3 becomes "3rd"
 *   4 becomes "4th"
 *
 * How It Works:
 * 1. It calculates the last digit (using modulo 10) to determine the default suffix.
 * 2. It uses modulo 100 to check if the number is in the special range of 11-13,
 *    which always uses the "th" suffix.
 * 3. A switch statement is used to return the appropriate suffix based on the last digit.
 *
 * @param num - The whole number to format.
 * @returns A string with the number and its correct ordinal suffix.
 *
 * @example
 * console.log(getOrdinalFormat(1));  // "1st"
 * console.log(getOrdinalFormat(22)); // "22nd"
 * console.log(getOrdinalFormat(13)); // "13th"
 */
export const getOrdinalFormat = (num: number): string => {
  // Get the last digit of the number.
  const mod10 = num % 10;
  // Get the last two digits to handle special cases (11, 12, 13).
  const mod100 = num % 100;

  // Special case: Numbers ending with 11, 12, or 13 always get "th".
  if (mod100 >= 11 && mod100 <= 13) {
    return `${num}th`;
  }

  // Determine the suffix based on the last digit.
  switch (mod10) {
    case 1:
      return `${num}st`;
    case 2:
      return `${num}nd`;
    case 3:
      return `${num}rd`;
    default:
      return `${num}th`;
  }
};
