import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Drawer from 'react-native-drawer';
import { Actions, DefaultRenderer, } from 'react-native-router-flux';
import Menu from './Menu';


export default class extends Component {

    menuButton() {
      return (
        <TouchableOpacity onPress={Actions.refresh({ key: 'drawer', open: true })}>
          <Text>Hello</Text>
        </TouchableOpacity>
        );
    }

    openDrawer() {

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
