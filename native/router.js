import { StackNavigator } from 'react-navigation'

import List from './container/list'
import Detail from './container/detail'

export default StackNavigator({
  List: { screen: List },
  Detail: { screen: Detail }
});
