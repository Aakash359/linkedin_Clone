import * as React from 'react'
import {Text, View,TouchableOpacity } from 'react-native';
import MainContainer from './component/mainContainer';
import Icon from 'react-native-vector-icons/AntDesign';
import UserAvatar from 'react-native-avatar-generator';



function SideMenuScreen() {
  
  
 return (
      <MainContainer>
            

           
        <View style={{flexDirection:'row',
        backgroundColor:'#F3F2EE',
        height:'16%',
        padding:20,
        
        }}>
         <View style={{flexDirection:'row', marginVertical:20
                              
                     }}>
                     <UserAvatar
                           src="https://static.toiimg.com/thumb/msid-58475411,width-748,height-499,resizemode=4,imgsize-142947/.jpg"
                           showImage={true}
                           size={50}
                           />
               <View style={{width:'70%',marginLeft:5,}}>

                     <Text style={{fontWeight:'bold',fontSize: 16,}}>

                     Er. Aakash Verma
                     </Text>
                              
                              <View style={{flexDirection:'row',
                                          justifyContent:'space-between',
                                          alignItems:'center',
                                          }}>

                                          <Text style={{fontWeight:'bold',fontSize: 16, color:'#4388CE'}}>

                                                View Profile
                                          </Text>
                                          <Text style={{fontWeight:'bold',fontSize: 25, color: 'black',
                                                         height:45,
                                                      }}>
                                                         .
                                          </Text>

                                          <Text style={{fontWeight:'bold',fontSize: 16, color:'#4388CE'}}>

                                                   Settings
                                          </Text>
                              </View>
               </View>
      

         </View>

         <TouchableOpacity>

           <Icon style = {{paddingLeft : 10,marginTop:30}} name="close" size={26} color="black" />

          </TouchableOpacity>
       
         
         
       </View>
       
       
      
     <View style={{borderWidth:0.5,borderColor:'grey', height:'7%',backgroundColor:'#F3F2EE',justifyContent:'center'}}>
           <View style = {{flexDirection:'row',}}>
           <Icon style = {{paddingLeft : 10,}} name="close" size={25} color="black" />

           <Text  style={{textAlign:'center',paddingLeft:10, fontSize:18,}} >
                 Reactivate Premium
           </Text>

           </View>
           

      </View> 
     
      

 </MainContainer>
     
    );
  
}


export default SideMenuScreen

