/**
 * Formats a number into a compact, human-readable string using the Intl.NumberFormat API.
 *
 * This function leverages the "compact" notation provided by the ECMAScript Internationalization API.
 * For example:
 *   - 950 is formatted as "950"
 *   - 1000 becomes "1K"
 *   - 1500 becomes "1.5K"
 *   - 3000000 becomes "3M"
 *
 * The function uses:
 *   - notation: "compact" to enable abbreviated formatting.
 *   - compactDisplay: "short" to use abbreviated symbols (e.g., "K", "M").
 *   - maximumFractionDigits: 1 to limit the number of decimal places.
 *
 * @param num - The number to format.
 * @returns A string representing the compact format of the number.
 *
 * @example
 * console.log(getCompactFormat(950));         // "950"
 * console.log(getCompactFormat(1000));        // "1K"
 * console.log(getCompactFormat(1500));        // "1.5K"
 * console.log(getCompactFormat(3000000));     // "3M"
 * console.log(getCompactFormat(2500000000));  // "2.5B"
 */
export const getCompactFormat = (num: number): string => {
  return new Intl.NumberFormat('en', {
    notation: 'compact',
    compactDisplay: 'short',
    maximumFractionDigits: 1,
  }).format(num);
};
