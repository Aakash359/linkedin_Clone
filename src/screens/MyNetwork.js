import * as React from 'react'
import {Text,StyleSheet, View,TouchableHighlight,FlatList,TouchableOpacity} from 'react-native';
import MainContainer from './component/mainContainer';
import Icon from 'react-native-vector-icons/FontAwesome';
import UserAvatar from 'react-native-avatar-generator';
import { scale } from "react-native-size-matters";
import { FloatingAction } from "react-native-floating-action";


function MyNetwork() {
  
  const actions = [
    {
      text: "Accessibility",
      name: "bt_accessibility",
      position: 2
    },
    {
      text: "Language",
      name: "bt_language",
      position: 1
    },
    {
      text: "Location",
      name: "bt_room",
      position: 3
    },
    {
      text: "Video",
      name: "bt_videocam",
      position: 4
    }
  ];

    return (
        <MainContainer>
         <View style={{flexDirection:'row',
        
        alignItems:'center',
        padding:10,
        
 
        }}>


        <UserAvatar
          src="https://static.toiimg.com/thumb/msid-58475411,width-748,height-499,resizemode=4,imgsize-142947/.jpg"
          showImage={true}
          size={35}
          
        />

     
      
        <View style={{
          flexDirection:'row',
          backgroundColor:'#f5f5f5',
          borderRadius:5,
          width:"75%",
          padding:8,
          marginHorizontal:10,
          justifyContent:"space-between",
          alignItems:'center'
          
          
         }}>
           <View style={{   flexDirection:'row', 
                            justifyContent:'space-around',
                            alignItems:'center',
                            width:'30%',
                            
                            }}>
          <Icon name="search" size={18} color= {'black'}/>
          <Text style={{fontSize:15}}>
            Search
          </Text>
          </View>
          <Icon name="qrcode" size={18} color= {'black'}/>
         
        </View>
        <TouchableHighlight underlayColor = {'#ccc'}
                     style={{
                       height:35,
                       width:35,
                       borderRadius:2,
                       justifyContent:"center",
                       alignItems:'center',
                       
                     }}
                     onPress={() => alert('Pressed!')}
                     >
        <Icon name="commenting-o" size={25} color= {'black'}/>


        </TouchableHighlight>

      </View>
      <View style={{
                    padding:12,
                    
                   
                    }}>
        <TouchableOpacity
            style={{flexDirection:'row',
                    justifyContent:'space-between',
                    paddingHorizontal:5,
                    alignItems:'center',
                    }}
                    onPress={()=>console.log('test')}>

            <Text style={{fontSize:16,color:'#2962ff',fontWeight:'bold'}}>
                Manage my network
            </Text>

            <Icon name="angle-right" size={25} color= {'black'}/>

            </TouchableOpacity>
            </View>
           
            <View style={{
                    padding:12,
                    marginTop:15,
                    backgroundColor:'#c2c2c2',
                    }}>
        <TouchableOpacity
            style={{flexDirection:'row',
                    justifyContent:'space-between',
                    paddingHorizontal:5,
                    alignItems:'center',
                    }}
                    onPress={()=>console.log('test')}>

            <Text style={{fontSize:16,color:'#2962ff',fontWeight:'bold'}}>
                Invitations
            </Text>

            <Icon name="angle-right" size={25} color= {'black'}/>

            </TouchableOpacity>
            </View>
            <View style={{ marginTop:10,
              flexDirection:'row',
              justifyContent:'space-around', 
              height:'60%'}}>
            <View
            style={{
                padding: scale(10),
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 9,
            },
            shadowOpacity: 0.48,
            shadowRadius: 11.95,

            elevation: 20,
            borderRadius: scale(15),
            backgroundColor: "#fff",
            marginHorizontal: scale(10),
            marginVertical: scale(20),
            height:'60%',
            width:'46%',
        }}
        
        >
          <View style={{height:'20%',backgroundColor:'grey',alignItems:'center',justifyContent:'center'}}>
          <UserAvatar
         
          src="https://static.toiimg.com/thumb/msid-58475411,width-748,height-499,resizemode=4,imgsize-142947/.jpg"
          showImage={true}
          size={35}
          
        />

          </View>
          <Text>
            Heelo
          </Text>
          
          
        </View>

        <View
        style={{
            padding: scale(10),
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 9,
            },
            shadowOpacity: 0.48,
            shadowRadius: 11.95,

            elevation: 20,
            borderRadius: scale(15),
            backgroundColor: "#fff",
            marginHorizontal: scale(10),
            marginVertical: scale(20),
            height:'60%',
            width:'45%',
        }}
        
        >
           <View style={{height:'20%',backgroundColor:'grey',alignItems:'center',justifyContent:'center'}}>
          <UserAvatar
         
          src="https://static.toiimg.com/thumb/msid-58475411,width-748,height-499,resizemode=4,imgsize-142947/.jpg"
          showImage={true}
          size={35}
          
        />

          </View>
          
          <Text>
            Heelo
          </Text>
          
          
        </View>
              

            </View>

           
                
                <FloatingAction
                  actions={actions}
                  showBackground={false}
                  buttonSize={scale(50)}
                  
                  iconHeight={scale(15)}
                  iconWidth={scale(15)}
                  actions={actions}
                  onPressItem={name => {
                    console.log(`selected button: ${name}`);
                  }}
                />
           

      </MainContainer>
    );
  
}

const styles = StyleSheet.create({
 
 
 
  listItem: {
    
    justifyContent:'center',
    padding:15,
    
       
  },
 
});
export default MyNetwork

