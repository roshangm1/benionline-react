import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';

class Menu extends Component {
  render() {
    return (

      <ScrollView style={styles.container}>
      <View style={styles.container}>
          <Image
            style={styles.headerImageStyle}
            source={require('./res/image/header.jpg')}
          />

          <TouchableOpacity
            onPress={() =>
              Actions.newsList({
                url: 'http://myagdikali.com/api/get_category_posts/?slug=news&count=20',
                title: 'ताजा समाचार'
              })
            }
          >
          <View style={{ flexDirection: 'row' }}>
            <Icon name='ios-menu' size={24} style={styles.iconStyle} />
            <Text style={this.state.active ? styles.textStyle : styles.textStyle}>ताजा समाचार</Text>
          </View>

          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              Actions.newsList({
                url: 'http://myagdikali.com/api/get_category_posts/?slug=national-news&count=20',
                title: 'राष्ट्रिय समाचार'
              })
            }
          >
          <View style={{ flexDirection: 'row' }}>
            <Icon name='ios-menu' size={24} style={styles.iconStyle} />
            <Text style={styles.textStyle}>राष्ट्रिय समाचार</Text>
          </View>
          <View style={{ width: null, backgroundColor: '#ddd', height: 1 }} />

          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              Actions.newsList({
                url: 'http://myagdikali.com/api/get_category_posts/?slug=myagdeli-news&count=20',
                title: 'म्याग्दी समाचार'
              })
            }
          >
          <View style={{ flexDirection: 'row' }}>
            <Icon name='ios-menu' size={24} style={styles.iconStyle} />
            <Text style={styles.textStyle}>म्याग्दी समाचार</Text>
          </View>

          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              Actions.newsList({
                url: 'http://myagdikali.com/api/get_category_posts/?slug=parbat-news&count=20',
                title: 'पर्वत समाचार'
              })
            }
          >
          <View style={{ flexDirection: 'row' }}>
            <Icon name='ios-menu' size={24} style={styles.iconStyle} />
            <Text style={styles.textStyle}>पर्वत समाचार</Text>
          </View>

          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              Actions.newsList({
                url: 'http://myagdikali.com/api/get_category_posts/?slug=baglunge-news&count=20',
                title: 'बाग्लुङ्ग समाचार'
              })
            }
          >
          <View style={{ flexDirection: 'row' }}>
            <Icon name='ios-menu' size={24} style={styles.iconStyle} />
            <Text style={styles.textStyle}>बाग्लुङ्ग समाचार</Text>
          </View>

          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              Actions.newsList({
                url: 'http://myagdikali.com/api/get_category_posts/?slug=mustangi-news&count=20',
                title: 'मुस्ताङ समाचार'
              })
            }
          >
          <View style={{ flexDirection: 'row' }}>
            <Icon name='ios-menu' size={24} style={styles.iconStyle} />
            <Text style={styles.textStyle}>मुस्ताङ समाचार</Text>
          </View>

          </TouchableOpacity>

          <View style={{ width: null, backgroundColor: '#ddd', height: 1 }} />

          <TouchableOpacity
            onPress={() =>
              Actions.newsList({
                url: 'http://myagdikali.com/api/get_category_posts/?slug=%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%B5%E0%A4%BE%E0%A4%B8&count=20',
                title: 'प्रबास समाचार'
              })
            }
          >
          <View style={{ flexDirection: 'row' }}>
            <Icon name='ios-menu' size={24} style={styles.iconStyle} />
            <Text style={styles.textStyle}>प्रबास समाचार</Text>
          </View>

          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              Actions.newsList({
                url: 'http://myagdikali.com/api/get_category_posts/?slug=sport-news&count=20',
                title: 'खेलकुद समाचार'
              })
            }
          >
          <View style={{ flexDirection: 'row' }}>
            <Icon name='ios-menu' size={24} style={styles.iconStyle} />
            <Text style={styles.textStyle}>खेलकुद समाचार</Text>
          </View>

          </TouchableOpacity>


          <TouchableOpacity
            onPress={() =>
              Actions.newsList({
                url: 'http://myagdikali.com/api/get_category_posts/?slug=%E0%A4%85%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%A5%E0%A4%BF%E0%A4%95&count=20',
                title: 'अार्थिक समाचार'
              })
            }
          >
          <View style={{ flexDirection: 'row' }}>
            <Icon name='ios-menu' size={24} style={styles.iconStyle} />
            <Text style={styles.textStyle}>अार्थिक समाचार</Text>
          </View>

          </TouchableOpacity>


          <TouchableOpacity
            onPress={() =>
              Actions.newsList({
                url: 'http://myagdikali.com/api/get_category_posts/?slug=%e0%a4%b5%e0%a4%bf%e0%a4%b5%e0%a4%bf%e0%a4%a7&count=20',
                title: 'विविध समाचार'
              })
            }
          >
          <View style={{ flexDirection: 'row' }}>
            <Icon name='ios-menu' size={24} style={styles.iconStyle} />
            <Text style={styles.textStyle}>विविध समाचार</Text>
          </View>

          </TouchableOpacity>

      </View>
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  iconStyle: {
    padding: 10

  },
  container: {
    flex: 1,
    backgroundColor: '#fffafafa',
  },
  textStyle: {
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15

  },
  headerImageStyle: {
    width: null,
    resizeMode: 'stretch'
  }
});

export default Menu;
