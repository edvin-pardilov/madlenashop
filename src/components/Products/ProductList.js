import React, { Component } from "react";
import { AppRegistry, FlatList, StyleSheet, Text, View,StatusBar, ScrollView, Image, TouchableHighlight } from "react-native";
import { StackNavigator } from "react-navigation";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import Constants from '../../constants/Constants';
import LoadingAnimation from '../../img/cart-loading.gif'; 
import * as ProductAction from '../../actions/ProductAction';

class ProductsList extends Component {
  

  componentDidMount() {
    this.props.ProductAction.getProducts();
  }

  _keyExtractor = (item, index) => item.id;

  render() {
    
    const { navigate } = this.props.navigation;
    const Items = <FlatList contentContainerStyle={styles.list} numColumns={2}
      data={this.props.products || []}
      keyExtractor={this._keyExtractor}
      renderItem={({ item }) => 
      <TouchableHighlight style={{width:'50%'}} onPress={() => navigate("Product", { product: item })} underlayColor="white">
        <View style={styles.view} >
          <Image style={styles.image} source={{uri: item.images[0].src}} />
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.text}>{Items.price}</Text>
        </View>
      </TouchableHighlight>
      }
    />;
    return (
      <ScrollView>
        <StatusBar
                 barStyle="dark-content"
                 backgroundColor="#ecf0f1"
            />
        {this.props.products.length ? Items : 
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>

            <Image style={styles.loader} source={LoadingAnimation}/>
          </View>
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flexDirection: 'column'
  },
  view: {
    padding: 10
  },
  loader: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 100, 
    height: 150,
    marginLeft:30
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
    padding: 5
  }
});

function mapStateToProps(state) {
	return {
		products: state.products
	};
}

function mapDispatchToProps(dispatch) {
	return {
		ProductAction: bindActionCreators(ProductAction, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
