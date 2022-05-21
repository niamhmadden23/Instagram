import {View, Text} from 'react-native';
import colors from './src/theme/colors';

const App = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: colors.primary}}>Hello World</Text>
    </View>
  );
};

export default App;
