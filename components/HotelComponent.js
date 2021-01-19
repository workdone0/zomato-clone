import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {Icon} from 'react-native-elements';

class HotelComponent extends Component {
  render() {
    return (
      <View
        style={{
          borderRadius: 15,
          elevation: 5,
          backgroundColor: '#ffffff',
          margin: 10,
        }}>
        <View
          style={{
            width: '100%',
            height: 200,
            borderRadius: 15,
          }}>
          <Image
            style={{width: '100%', height: 200, borderRadius: 15}}
            resizeMode="cover"
            source={{
              uri: this.props.uri,
            }}
          />
        </View>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: 25,
              marginHorizontal: 10,
              marginVertical: 5,
              fontWeight: '500',
            }}>
            {this.props.name}
          </Text>
          <Text
            style={{
              fontSize: 20,
              marginHorizontal: 10,
              marginVertical: 5,
              fontWeight: '300',
            }}>
            <Icon name="star" size={15} color="#E23744" />
            4/5
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: 15,
              marginHorizontal: 10,
              marginBottom: 10,
              fontWeight: '300',
            }}>
            North India, Chinese, Biryani
          </Text>
          <Text
            style={{
              fontSize: 15,
              marginHorizontal: 10,
              marginBottom: 10,
              fontWeight: '300',
            }}>
            ₹150 for one
          </Text>
        </View>
      </View>
    );
  }
}

export default HotelComponent;
