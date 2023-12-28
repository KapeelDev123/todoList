import { StatusBar } from 'expo-status-bar'
import { View, SafeAreaView } from 'react-native'
import TodoList from './Components/TodoList'

export default function App() {
  return (
    <SafeAreaView>
      <View>
        <TodoList />
      </View>
    </SafeAreaView>
  )
}
