import {View, Text} from 'react-native';
import colors from './src/theme/colors';
import fonts from './src/theme/fonts';
import Feather from 'react-native-vector-icons/Feather';

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
        <Feather name="home" size={25} />
      </Text>
    </View>
  );
};

export default App;
