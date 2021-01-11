import * as React from 'react'
import { StyleSheet,FlatList,Text, View,TouchableHighlight } from 'react-native';
import MainContainer from './component/mainContainer';
import Icon from 'react-native-vector-icons/FontAwesome';
import UserAvatar from 'react-native-avatar-generator';
import { scale } from "react-native-size-matters";

function Home() {
  

  const data = [
    { id: '1', title: 'First item' },
    { id: '2', title: 'Second item' },
    { id: '3', title: 'Third item' },
    { id: '4', title: 'Fourth item' },
    { id: '5', title: 'Fifth item' },
    { id: '6', title: 'First item' },
    { id: '7', title: 'Second item' },
    { id: '8', title: 'Third item' },
    { id: '9', title: 'Fourth item' },
    { id: '10', title: 'Fifth item' },
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
   
   
       
      <View>
      <FlatList
        data={data}
        horizontal={true}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
           <UserAvatar
          src="https://static.toiimg.com/thumb/msid-58475411,width-748,height-499,resizemode=4,imgsize-142947/.jpg"
          showImage={true}
          size={50}
          
        />
        <Text style={{textAlign:'center',marginVertical:5}}>Aakash</Text>
          
          </View>
        )}
      />
      </View>
    <View style={{backgroundColor:'#bdb9b7'}}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View  style={{
            padding: scale(10),
            backgroundColor: "#fff",
            marginVertical: scale(10),
            height:scale(100),
        }}>
         
        <Text style={{fontSize:12}}>Aakash</Text>
          
          </View>
        )}
      />
      </View>

      
     

      
      </MainContainer>
     
    );
  
}

const styles = StyleSheet.create({
 
 
 
  listItem: {
    
    justifyContent:'center',
    padding:15,
    
       
  },
 
});
export default Home

