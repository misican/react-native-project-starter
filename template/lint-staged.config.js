/*
 * Created: Sunday, February 23rd 2025, 7:36:32 pm
 * Author: Melvin Isican (mj.isican.dev@gmail.com)
 * -------------------------------
 * Last Modified: Sunday, February 23rd 2025, 7:36:33 pm
 * Modified By: Melvin Isican (mj.isican.dev@gmail.com)
 */
module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'yarn tsc --noEmit',

  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': filenames => [
    `yarn eslint --fix ${filenames.join(' ')}`,
    `yarn prettier --write ${filenames.join(' ')}`,
  ],

  // Format MarkDown and JSON
  '**/*.(md|json)': filenames => `yarn prettier --write ${filenames.join(' ')}`,
};
