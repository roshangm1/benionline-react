import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Menu extends Component {
  render() {
    return (
      <View style={styles.container}>
            <TouchableOpacity
              onPress={() =>
                Actions.newsList({
                  url: 'http://myagdikali.com/api/get_category_posts/?slug=myagdeli-news&count=20'
                })}
            >
              <Text style={styles.textStyle}>Nepal</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.textStyle}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.textStyle} >Friends</Text>
            </TouchableOpacity>
          </View>
        );
      }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffafafa',
    padding: 30
  },
  textStyle: {
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
});

export default Menu;
