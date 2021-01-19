import React, {Component} from 'react';
import {ScrollView, Text, View, StyleSheet, Image} from 'react-native';
import {Icon, Input, Button} from 'react-native-elements';
import HotelComponent from '../components/HotelComponent';

class HomeOrder extends Component {
  render() {
    return (
      <View>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            <Icon name="place" size={20} color="#E23744" />
            New Delhi
          </Text>
        </View>
        <View style={styles.inputView}>
          <Input
            placeholder="Restaurant name, cuisine, or a dish..."
            leftIcon={{name: 'search', color: '#E23744'}}
            inputContainerStyle={styles.inputStyle}
          />
        </View>
        <View>
          <ScrollView
            horizontal
            style={styles.buttonView}
            showsHorizontalScrollIndicator={false}>
            <Button
              title="Filter"
              type="outline"
              titleStyle={styles.buttonTitleStyle}
              buttonStyle={styles.buttonStyle}
              icon={{
                name: 'tune',
                size: 15,
                color: '#000000',
              }}
            />
            <Button
              title="Rating: 4.0+"
              type="outline"
              titleStyle={styles.buttonTitleStyle}
              buttonStyle={styles.buttonStyle}
            />
            <Button
              title="Safe And Hygenic"
              type="outline"
              titleStyle={styles.buttonTitleStyle}
              buttonStyle={styles.buttonStyle}
            />
            <Button
              title="Takeaway"
              type="outline"
              titleStyle={styles.buttonTitleStyle}
              buttonStyle={styles.buttonStyle}
            />
            <Button
              title="Fastest Delivery"
              type="outline"
              titleStyle={styles.buttonTitleStyle}
              buttonStyle={styles.buttonStyle}
            />
            <Button
              title="Rating"
              type="outline"
              titleStyle={styles.buttonTitleStyle}
              buttonStyle={styles.buttonStyle}
            />
          </ScrollView>
        </View>
        <ScrollView>
          <View style={{height: 200, padding: 10, borderRadius: 15}}>
            <Image
              style={{height: 200, width: '100%', borderRadius: 15}}
              resizeMode="contain"
              source={require('../assets/zomato.png')}
            />
          </View>
          <View>
            <Text style={styles.resCountText}>23 restaurants around you</Text>
            <HotelComponent
              uri="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              name="Milan Hotel"
            />
            <HotelComponent
              uri="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=653&q=80"
              name="Taj Hotel"
            />
            <HotelComponent
              uri="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              name="Cafe Coffee Day"
            />
            <HotelComponent
              uri="https://images.unsplash.com/photo-1545231027-637d2f6210f8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
              name="Starbucks"
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 20,
    paddingLeft: 10,
  },
  headerText: {
    fontSize: 25,
    fontWeight: '800',
  },
  inputStyle: {
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
  },
  inputView: {
    marginTop: 10,
  },
  buttonView: {
    marginHorizontal: 5,
  },
  buttonStyle: {
    borderRadius: 15,
    padding: 5,
    marginHorizontal: 10,
  },
  buttonTitleStyle: {
    fontSize: 15,
    color: '#000000',
    fontWeight: '300',
  },
  resCountText: {
    fontSize: 25,
    margin: 15,
    fontWeight: '700',
  },
});
export default HomeOrder;
