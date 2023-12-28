import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const FallBack = () => {
  return (
    <View style={styles.back}>
      <Image
        source={require('../assets/maxresdefault.jpg')}
        style={{ height: '40%', width: '60%' }}
      />
      <Text style={{ marginTop: 10 }}>Start Adding Your Task </Text>
    </View>
  )
}

export default FallBack

const styles = StyleSheet.create({
  back: {
    width: '80%',
    height: '50%',
    alignItems: 'center',
    marginLeft: 40,
  },
})
