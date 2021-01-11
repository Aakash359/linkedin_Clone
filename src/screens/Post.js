import * as React from 'react'
import PickerComponent from './component/PickerComponent';
import SlideIcon from './component/SlideIcon';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import DraggablePanel from 'react-native-draggable-panel';
import UserAvatar from 'react-native-avatar-generator';
import {useNavigation } from '@react-navigation/native';
import { TouchableOpacity,TextInput } from 'react-native';
import MainContainer from './component/mainContainer'
import { View } from 'react-native';
import { Text, Dimensions } from 'react-native';
import {useEffect, useRef} from 'react';


const Post=()=> {
  const navigation=useNavigation()
  const refContainer = useRef();
  const windowHeight = Dimensions.get('window').height;
 
  useEffect(
  ()=>{
         navigation.setOptions(
           {
             title:"Share Post",
             
             headerLeft: () => (
              <TouchableOpacity                
              onPress={()=>navigation.goBack()}
               >
           <Icon style = {{paddingLeft : 10}} name="close" size={26} color="black" />
          </TouchableOpacity>
  
          ),
          headerRight: () => (
            <TouchableOpacity   style={{marginRight:20}}>

               <Text style={{fontSize:18}}>Post</Text>
               
            </TouchableOpacity>

        ),
           }
         )
  },[]
)

const showPanel=()=> {
  refContainer.current.show();
}
 


const takePhoto=()=> {

  const imagePickerConfig = {
      width: 300,
      height: 300,
      cropping: true,
      includeBase64: true,
      compressImageQuality: 0.8,
      mediaType: 'photo    '
  };

  ImagePicker.openCamera(imagePickerConfig)
      .then(file => {


          if (file) {

              var ext = this.getExtention(file.path)

              if (ext[0] == 'jpeg' || ext[0] == 'png' || ext[0] == 'jpg') {


                  this.setState({
                      image_path: file.data,
                      image_name: file.path.substring(file.path.lastIndexOf('/') + 1, file.path.length)

                  });
              }
              else {
                  alert("Invalid Image")
              }
          }


      }).catch(e => {
          console.log(e)
      })




}

  

    return (
      <MainContainer>
        <View style={{flexDirection:'row', margin:15,}}>

              <UserAvatar
                src="https://static.toiimg.com/thumb/msid-58475411,width-748,height-499,resizemode=4,imgsize-142947/.jpg"
                showImage={true}
                size={45}
              />
        <View>
        <Text style={{marginLeft:15,fontWeight:'bold'}}> Er.  Aakash Verma</Text>
              <View style={{  flexDirection:'row',
                              borderWidth:1.5,
                              justifyContent:'center',
                              borderRadius:22,
                              borderColor:"#494949",
                              paddingHorizontal:10,
                              paddingVertical:2,
                              alignItems:'center',
                              margin:5,
                            
                              }}
                              >
                <Icon name="users" size={15} color= {'#494949'}/>

                <Text style={{marginLeft:5,fontSize:13,fontWeight:'bold',color:'#494949'}}
                onPress={showPanel} >Connections Only</Text>

                <Icon style={{marginLeft:5}} name="caret-down" size={22} color= {'#494949'}/>

              </View>
        </View>
     </View>

          <TextInput 
          placeholder="What do want to talk about?"
          
          multiline={true}
          style={{fontSize:18,marginHorizontal:10,height:'65%',textAlignVertical:'top'}}
          scrollEnabled={true}
          />
          <DraggablePanel
          expandable={true}
          borderRadius={15}
          visible={true}
          borderColor={'Black'}
          ref={refContainer}
          
          overlayOpacity={0.2}
          initialHeight={windowHeight/2}

           >   
           <SlideIcon
              name="picture-o"
              onPress={()=>console.log('test')}
              title='Add a photo'
              />
            
              
              <SlideIcon
              name="video-camera"
              onPress={()=>console.log('test')}
              title='Take a video'
            
              />
              
              <SlideIcon
              name="certificate"
              onPress={()=>console.log('test')}
              title='Celebrate an ocassion'
             
              />
               <SlideIcon
              name="file-text"
              onPress={()=>console.log('test')}
              title='Add a document'
          
              />
               <SlideIcon
              name="suitcase"
              onPress={()=>console.log('test')}
              title='Share that you are hiring'
             
              />
               <SlideIcon
              name="id-badge"
              onPress={()=>console.log('test')}
              title='Find an expert'
            
              />
              <SlideIcon
              name="bar-chart-o"
              onPress={()=>console.log('test')}
              title='Create a poll'
            
              />
              <SlideIcon
              name="camera"
              onPress={()=>console.log('test')}
              title='Share your story'
             
              />
              
              

          
         </DraggablePanel>



             <View style={{ 
             position:"absolute",
             bottom:0,
             padding:10,
             width:'100%'
            }}>
              <View style={{flexDirection:'row', 
                            justifyContent:"space-between",
                            marginHorizontal:10
                            
                            }}>

               <View style={{flexDirection:'row', 
                            justifyContent:'space-around',
                            width:'55%',
                            }}>
                      <PickerComponent
                      name="camera"
                      onPress={takePhoto}
                      iconType='icon'
                      
                      />
                       <PickerComponent
                      name="video-camera"
                      onPress={()=>console.log('test')}
                      iconType='icon'
                      />
                       <PickerComponent
                      name="picture-o"
                      onPress={()=>console.log('test')}
                      iconType='icon'
                      />
                     
                   
                       <PickerComponent
                      name="more-horizontal"
                      onPress={showPanel}
                      iconType='feather'
                      />
                   

                      
                      

                    </View>
                    

                    <Icon name="at" size={22} color= {'#494949'}/>
                    
                    </View>

              </View>

        
      </MainContainer>

       
      
   
    );
  
}

Post['navigationOptions'] = screenProps => ({
  title: 'Home'
})

export default Post





