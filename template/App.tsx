/*
 * Created: Thursday, February 20th 2025, 3:42:34 pm
 * Author: Melvin Isican (mj.isican.dev@gmail.com)
 * -------------------------------
 * Last Modified: Saturday, February 22nd 2025, 3:49:23 am
 * Modified By: Melvin Isican (mj.isican.dev@gmail.com)
 */

import React from 'react';
// import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import Text from '@components/Text';
import {getCompactFormat} from '@utils-numbers/getCompactFormat';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  /*
   * To keep the template simple and small we're adding padding to prevent view
   * from rendering under the System UI.
   * For bigger apps the reccomendation is to use `react-native-safe-area-context`:
   * https://github.com/AppAndFlow/react-native-safe-area-context
   *
   * You can read more about it here:
   * https://github.com/react-native-community/discussions-and-proposals/discussions/827
   */
  const safePadding = '5%';

  return (
    <View style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView style={backgroundStyle}>
        <View style={styles.safeSpace}>
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
              paddingHorizontal: safePadding,
              paddingBottom: safePadding,
            }}>
            <Text>{`${getCompactFormat(12345)} test`}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  safeSpace: {paddingRight: '5%'},
});

export default App;
