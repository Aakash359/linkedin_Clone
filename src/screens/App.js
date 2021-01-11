import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer,} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './Home';
import MyNetwork from './MyNetwork';
import Post from './Post';
import Notifications from './Notifications';
import Jobs from './Jobs';
import { createStackNavigator,} from '@react-navigation/stack';
import SideMenu  from './SideMenu';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();
const Drawer = createDrawerNavigator();
 
function MyTabs({navigation}) {
  return (
    <Tab.Navigator 
    tabBarOptions={{activeTintColor:"black",inactiveTintColor:"#cccccc",
    indicatorStyle: {
      borderTopColor: 'black',
      borderTopWidth: 6,
    },}}
    
    >
      <Tab.Screen name="Home" component={Home}
      options={{
        tabBarIcon: ({ color, size}) => (
          <Icon name="home" size={size} color= {color}
          style={{alignSelf:'center'}}
          />
        ),
      }}/>

        <Tab.Screen name="MyNetwork" component={MyNetwork}
         
            options={{
              tabBarIcon: ({ color, size}) => (
                <Icon name="users" size={size} color= {color}
                style={{alignSelf:'center'}}
                />
              ),
            }}/>
   

        <Tab.Screen
          name="Post"
          component={Post}
          listeners={{
            tabPress: e => {
              navigation.navigate('Post')
              e.preventDefault();
            },
          }}
          options={{
            tabBarIcon: ({ color, size}) => (
              <Icon name="plus-square" size={size} color= {color}
              style={{alignSelf:'center'}}
              />
            ),
          }}
        />

         <Tab.Screen name="Notifications" component={Notifications}
            options={{
              tabBarIcon: ({ color, size}) => (
                <Icon name="bell"size={size} color= {color}
                style={{alignSelf:'center'}}
                />
              ),
            }}/>

     
     

      <Tab.Screen name="Jobs" component={Jobs}
      options={{
        tabBarIcon: ({ color, size}) => (
          <Icon name="suitcase" size={size} color= {color}
          style={{alignSelf:'center'}}
          />
        ),
      }}/>
    </Tab.Navigator>
  );
}

function MyDrawer() {


  return (
          <Drawer.Navigator
              initialRouteName="Root"
              drawerStyle={{
                flex: 1,
                width: '89%',
                backgroundColor: 'transparent'
              }}
              contentcontainerstyle={{ flex: 1 }}
             
              drawerContent={props => {return <SideMenu {...props} />;
              }}>
              <Drawer.Screen name="Root"
             >
                  {
                  props => <MyTabs {...props}
                />}
              </Drawer.Screen>

          </Drawer.Navigator>

  );
}

export default function App() {

  return (
    <NavigationContainer>
  <RootStack.Navigator mode="modal">

      <RootStack.Screen
        name="Main"
        component={MyDrawer}
        options={{ headerShown: false }}
      />
       <RootStack.Screen name="Post" component={Post}
     
      
      />
    </RootStack.Navigator>

    </NavigationContainer>
  );
}

