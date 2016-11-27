import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  
  const { textStyle, viewStyle } = styles;
  
  return(
  <View style = {viewStyle}>
      <Text style = {textStyle}> { props.headerText } </Text>
  </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center'
    
  }, 
  
  textStyle: {
    fontSize: 20
  }
}

export {Header};