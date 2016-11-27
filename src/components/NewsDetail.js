import React, { Component } from 'react';
import { Text, View, WebView } from 'react-native';
import moment from 'moment';

class NewsDetail extends Component {
  render() {
    return (
      <View style={{ flex: 1, paddingTop: 54 }}>
        <Text style={styles.titleStyle}>
          {this.props.newsTitle}
        </Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Text> {moment(this.props.date).fromNow()} </Text>
          <Text> {this.props.category} </Text>
          <Text> {this.props.author} </Text>
        </View>

        <WebView
          html={this.props.content}
          style={styles.webViewStyle}
          startInLoadingState={false}
          scalesPageToFit
        />

      </View>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 27,
    color: '#3498DB'
  },
  webViewStyle: {
    flex: 1,

  }
};
export default NewsDetail;
