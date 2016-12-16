import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { View, ListView } from 'react-native';
import { fetchFromInternet } from '../actions';
import { Spinner } from './common';

import NewsListItem from './NewsListItem';

class NewsList extends Component {
//  constructor(props) {
  //  super(props);
    //this.state = { url: 'http://myagdikali.com/api/get_category_posts/?slug=news&count=20' };
//  }

  componentWillMount() {
    Actions.refresh({ key: 'drawer', open: false });
    this.props.fetchFromInternet(this.props.url || 'http://myagdikali.com/api/get_category_posts/?slug=news&count=20');
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ news }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(news);
  }

//  changeState() {
  //  this.setState({ url: 'http://myagdikali.com/api/get_category_posts/?slug=myagdeli-news&count=20' }, function () {
    //  this.props.fetchFromInternet(this.state.url);
  //  });
//  }

  renderData() {
    if (this.props.fetching === false) {
      return (
        <View style={{ flex: 1, paddingTop: 54 }}>
          <ListView
            enableEmptySections
            automaticallyAdjustContentInsets={false}
            dataSource={this.dataSource}
            renderRow={this.renderRow}
          />
        </View>
      );
    }
    return <Spinner />;
  }

  renderRow(post) {
    return <NewsListItem post={post} />;
  }

  render() {
    return (
    <View style={{ flex: 1 }}>
        {this.renderData()}
    </View>
    );
  }
}

const mapStateToProps = ({ list }) => {
  const { fetching, news, error } = list;
  return { fetching, news, error };
};


export default connect(mapStateToProps, { fetchFromInternet })(NewsList);
