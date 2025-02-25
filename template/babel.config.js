/*
 * Created: Thursday, February 20th 2025, 3:42:34 pm
 * Author: Melvin Isican (mj.isican.dev@gmail.com)
 * -------------------------------
 * Last Modified: Saturday, February 22nd 2025, 3:42:16 am
 * Modified By: Melvin Isican (mj.isican.dev@gmail.com)
 */
module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@utils-numbers': './src/utils/numbers',
        },
      },
    ],
  ],
};
