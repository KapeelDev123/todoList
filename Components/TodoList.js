import { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import { IconButton } from 'react-native-paper'
import FallBack from './FallBack'



function TodoList() {
  // init local states//
  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState([])
  const [editedTodo, setEditedTodo] = useState(null)

  // handle add todo

  const handleAddTodo = () => {
    //structure of a single todo item
    //{
    // id:
    // title:
    // }

    if (todo === '') {
      return
    }
    setTodoList([...todoList, { id: Date.now().toString(), title: todo }])
    setTodo('')
  }

  const handleDeleteTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id)
    setTodoList(updatedTodoList)
  }

  // handle edited todo
  const handleEditedTodo = (todo) => {
    setEditedTodo(todo)
    setTodo(todo.title)
  }

  // handle update
  const handleUpdateTodo = () => {
    const updatedTodos = todoList.map((item) => {
      if (item.id === editedTodo.id) {
        return { ...item, title: todo }
      }
      return item
    })
    setTodoList(updatedTodos)
    setEditedTodo(null)
    setTodo('')
  }

  // render todo
  const renderTodos = ({ item, index }) => {
    return (
      <View style={styles.temprary}>
        <Text style={styles.iconText}>{item.title}</Text>
        <IconButton 
          icon="pencil"
          iconColor="#fff"
          onPress={() => handleEditedTodo(item)}
        />
        <IconButton 
          icon="trash-can"
          iconColor="#fff"
          onPress={() => handleDeleteTodo(item.id)}
        />
      </View>
    )
  }
  return (
    <View>
      <Text style={styles.headingText}>Todo List</Text>
      <TextInput
        style={styles.input}
        placeholder="Add a task"
        value={todo}
        onChangeText={(userText) => setTodo(userText)}
      />

      {editedTodo ? (
        <TouchableOpacity
          onPress={() => handleUpdateTodo()}
          style={styles.touch}
        >
          <Text style={styles.button}>Save</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => handleAddTodo()} style={styles.touch}>
          <Text style={styles.button}>Add</Text>
        </TouchableOpacity>
      )}
      <FlatList data={todoList} renderItem={renderTodos} />
      {todoList.length <= 0 && <FallBack />}
    </View>
  )
}

export default TodoList

const styles = StyleSheet.create({
  temprary: {
    backgroundColor: '#1e09ff',
    borderRadius: 6,
    paddingHorizontal: 6,
    marginBottom: 12,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
  },
  headingText: {
    marginTop: 40,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderRadius: 6,
    borderColor: '#1e90ff',
    borderWidth: 3,
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 20,
  },
  touch: {
    backgroundColor: '#000',
    borderRadius: 6,
    paddingVertical: 8,
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10,
    marginVertical: 34,
  },
  button: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
})
