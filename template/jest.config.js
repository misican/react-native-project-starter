/*
 * Created: Thursday, February 20th 2025, 3:42:34 pm
 * Author: Melvin Isican (mj.isican.dev@gmail.com)
 * -------------------------------
 * Last Modified: Friday, February 21st 2025, 2:06:29 am
 * Modified By: Melvin Isican (mj.isican.dev@gmail.com)
 */

module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@screens/(.*)$': '<rootDir>/src/screens/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
  },
};
