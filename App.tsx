import {View, Text} from 'react-native';
import colors from './src/theme/colors';
import fonts from './src/theme/fonts';

const App = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        style={{
          color: colors.primary,
          fontWeight: fonts.weight.normal,
          fontSize: fonts.size.xxlg,
        }}>
        Hello World
      </Text>
    </View>
  );
};

export default App;
