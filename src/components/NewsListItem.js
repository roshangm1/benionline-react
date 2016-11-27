import React, { Component } from 'react';
import moment from 'moment';
import { Actions } from 'react-native-router-flux';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { CardSection, Card } from './common';

class NewsListItem extends Component {

  render() {
    let image = '';
    let category = '';
    const { title, date, content, author } = this.props.post;

    try {
      image = this.props.post.attachments[0].url;
      category = this.props.post.categories[0].title;
    } catch (err) {
        image = 'http://i.imgur.com/MkQfLYI.jpg';
        category = 'Samachar';
    }

    return (
      <TouchableWithoutFeedback
        onPress={() => Actions.newsDetail({
             newsTitle: title,
             content,
             date,
             category,
             author: author.name
        })}
      >
        <View>
          <Card>
            <CardSection style={{ flexDirection: 'row' }}>

                <View style={styles.headerContentStyle}>
                  <Text style={styles.textStyle}>
                    {title}
                  </Text>

                  <View style={styles.subStyle}>
                    <Text style={{ flex: 1 }}> {moment(date).fromNow()} </Text>
                    <Text style={{ flex: 1 }}> {category} </Text>
                  </View>
                </View>

                <View style={styles.imageContainerStyle}>
                  <Image
                    source={{ uri: image }}
                    style={styles.imageStyle}
                  />
                </View>
            </CardSection>
          </Card>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  textStyle: {
    color: '#3498DB',
    fontSize: 20
  },
  subStyle: {
    flexDirection: 'row',
  },
  imageStyle: {
    height: null,
    width: null,
    flex: 1,
    margin: 3
  },
  headerContentStyle: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  imageContainerStyle: {
    flex: 0.4,
    justifyContent: 'flex-end'
  }
};

export default NewsListItem;
