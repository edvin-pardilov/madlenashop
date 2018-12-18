import React from 'react'
import { StyleSheet, Text, View, FlatList,StatusBar, Image, TouchableOpacity, AsyncStorage } from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Entypo } from '@expo/vector-icons';

import * as CartAction from '../../actions/CartAction';

class CartPage extends React.Component {

  componentDidMount() {
    this.props.CartAction.getCart();
  }

  _keyExtractor = (item, index) => item.id;

  removeItem(item) {
    this.props.CartAction.removeFromCart(item);
  }

  render() {
    const { cart } = this.props;
    console.log('render cart', cart)

    if (cart && cart.length > 0) {
      const Items = <FlatList contentContainerStyle={styles.list}
        data={cart}
        keyExtractor={this._keyExtractor}
        renderItem={({ item }) =>
          <View style={styles.lineItem} >
            <Image style={styles.image} source={{ uri: item.image }} />
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>{item.quantity}</Text>
            <TouchableOpacity style={{ marginLeft: 'auto' }} onPress={() => this.removeItem(item)}><Entypo name="cross" style={{marginTop: 10}} size={30} /></TouchableOpacity>
          </View>
        }
      />;
      return (
        <View style={styles.container}>
        <StatusBar
                 barStyle="dark-content"
                 backgroundColor="#ecf0f1"
            />
          {Items}
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
        <StatusBar
                 barStyle="dark-content"
                 backgroundColor="#ecf0f1"
            />
          <Text>Корзина пуста!</Text>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  lineItem: {
    flexDirection: 'row'
  },
  list: {
    flexDirection: 'column'
  },
  image: {
    width: 50,
    height: 70
  },
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 13,
    padding: 5,
    paddingRight:20,
    paddingTop: 12
  }
})

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    CartAction: bindActionCreators(CartAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);