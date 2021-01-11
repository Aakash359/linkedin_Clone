import React from "react";
import { StyleSheet} from "react-native";
import { TouchableHighlight } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';
const PickerComponent = (props) => {

    return (
        
        <TouchableHighlight underlayColor = {'#ccc'}
                     style={{
                       height:45,
                       width:45,
                       borderRadius:22,
                       justifyContent:"center",
                       alignItems:'center',
                       
                     }}
                     onPress={props.onPress}
                     >
                         {
                             props.iconType=='feather'?
                  <Feather name="more-horizontal" size={22} color= {'#494949'}/>:
                 <Icon name={props.name}
                   size={20}
                    color= {'#494949'}/>

                         }
                        
        </TouchableHighlight>
    );
};


PickerComponent.propTypes = {
    iconType: PropTypes.string,
    // ...prop type definitions here
  }

  PickerComponent.defaultProps ={
      iconType:'icon'
  }

const styles = StyleSheet.create({
    container: {
        height:45,
        width:45,
        borderRadius:22,
        justifyContent:"center",
        alignItems:'center',
    },
  
  });

export default PickerComponent;
