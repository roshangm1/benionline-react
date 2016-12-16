import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import NewsList from './components/NewsList';
import NewsDetail from './components/NewsDetail';
import DrawerLayout from './DrawerLayout';

class RouterComponent extends Component {

  render() {
    return (
      <Router
        sceneStyle={styles.routerScene}
        titleStyle={styles.navTitle}
        //navigationBarStyle={styles.navBar}
      >
        <Scene key="drawer" component={DrawerLayout} >

          <Scene key="main">
            <Scene
              key="newsList"
              component={NewsList}
              title="ताजा समाचार"
              renderLeftButton={DrawerLayout.menuButton}
              renderBackButton={DrawerLayout.menuButton}
            />
            <Scene
              key="newsDetail"
              component={NewsDetail}
              title="बेनीअनलाइन"

            />
          </Scene>
        </Scene>
      </Router>
    );
  }
}

const styles = {
  navBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#3498DB'
  },
  navTitle: {
    color: 'black'
  },
  routerScene: {
    paddingTop: 0
  }
};

export default RouterComponent;
