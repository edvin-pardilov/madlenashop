import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  StatusBar,
  Button,
  Image,
  ScrollView
} from "react-native";


class HomePage extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#ecf0f1"
        />
        <ScrollView
          horizontal
          scrollEventThrottle={10}
          pagingEnabled
          style={{ marginBottom: 10 }}
        >
          <Image
            source={{ uri: 'https://sprutio.beget.com/image_cache/dozor1.beget:9443/edvin9ng/95d41f6f65827e83950e57ee52fe8290/slide1.JPG' }} style={styles.sliderImage}
          />
          <Image
            source={{ uri: 'https://madlenashop.ru/wp-content/uploads/2018/11/banner-2.png' }} style={styles.sliderImage}
          />
          <Image
            source={{ uri: 'https://madlenashop.ru/wp-content/uploads/2018/11/banner-3.png' }} style={styles.sliderImage}
          />
        </ScrollView>
        <Text style={styles.transparentButton} onPress={() => navigate("Products")} >Каталог </Text>
        <Text style={styles.transparentButton} onPress={() => navigate("CartPage")} >Корзина </Text>
        
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    padding: 10
  },
  sliderImage: {
    height: 360,
    width: 360,
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
});

export default HomePage;
