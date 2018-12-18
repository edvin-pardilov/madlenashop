import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { NavigationActions } from 'react-navigation'

export default class DrawerContainer extends React.Component {
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Text
          onPress={() => navigation.navigate('Home')}
          style={styles.transparentButton}>
          Главная
        </Text>
        <Text
          onPress={() => navigation.navigate('Products')}
          style={styles.transparentButton}>
          Магазин
        </Text>
        <Text
          onPress={() => navigation.navigate('CartPage')}
          style={styles.transparentButton}>
          Корзина
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  transparentButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4C3E54',
    padding: 15,
    margin: 5,
    borderRadius: 2,
    borderColor: '#4C3E54',
    borderWidth: 1,
    textAlign: 'center'
  }
})
