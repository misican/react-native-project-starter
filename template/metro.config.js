const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */

/*
 * Created: Thursday, February 20th 2025, 3:42:34 pm
 * Author: Melvin Isican (mj.isican.dev@gmail.com)
 * -------------------------------
 * Last Modified: Thursday, February 20th 2025, 5:32:21 pm
 * Modified By: Melvin Isican (mj.isican.dev@gmail.com)
 */


const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
