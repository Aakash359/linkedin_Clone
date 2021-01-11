import React from "react";
import { StyleSheet,View,Text} from "react-native";
import PropTypes from 'prop-types';
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';

const SlideIcon = (props) => {
    return (
            
           
                <View style={{
                      
                       flexDirection:'row',
                       padding:12,
                       }}>
                         
              <Icon name={props.name}
                    size={22}
                    color= {'#494949'}/>

                       <Text style={{fontSize:13,
                        marginHorizontal:20,
                        color:'grey',
                        fontWeight:'bold'}} >
                           {props.title}
                          
                       </Text>
                      
                           
                    </View>

           
            
      
    );
};

SlideIcon.propTypes = {
    iconType: PropTypes.string,
    textType: PropTypes.string
   
    
   
  }
  
  

  SlideIcon.defaultProps ={
      iconType:'icon',
      textType:'text'
    
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

export default SlideIcon;
