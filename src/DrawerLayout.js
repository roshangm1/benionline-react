import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import Drawer from 'react-native-drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions, DefaultRenderer, } from 'react-native-router-flux';
import Menu from './Menu';


class DrawerLayout extends Component {

  static menuButton() {
    return (
      <TouchableOpacity
        onPress={() => {
          Actions.refresh({ key: 'drawer', open: true });
        }}
        style={{ alignSelf: 'stretch' }}
      >
        <Icon
          name='ios-menu'
          size={24}
        />
      </TouchableOpacity>
    );
  }

  render() {
    const state = this.props.navigationState;
    const children = state.children;

    return (
      <Drawer
      ref="navigation"
      open={state.open}
      onOpen={() => Actions.refresh({ key: state.key, open: true })}
      onClose={() => Actions.refresh({ key: state.key, open: false })}
      type="overlay"
      content={<Menu />}
      tapToClose
      styles={drawerStyles}
      openDrawerOffset={0.2}
      panCloneMask={0.2}
      negotiatePan
      tweenHandler={(ratio) => ({
        main: { opacity: Math.max(0.54, 1 - ratio) }
      })}
      >

      <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
      </Drawer>

    );
  }
}
const drawerStyles = {
  drawer: {
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 3
  }
};

export default DrawerLayout;
