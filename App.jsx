// import  React from 'react';
// import Navigator from './Pages/landingscreen';
// import { View ,Text, SafeAreaView, StatusBar } from 'react-native';
// import LandingScreen from './Pages/landingscreen';
// import SplashScreen from './Pages/splashPage'
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// const Stack = createStackNavigator();
// const App =()=> {
//   return (
//     // <View style={{backgroundColor: '#fff', flex: 1 }}>
//     //   <Navigator/>
//     // </View>

//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="LandingScreen" component={LandingScreen} />
//         <Stack.Screen name="SplashScreen" component={SplashScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>

    
   

   




//   );
// }

// export default App;




// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from './Pages/landingscreen';
import ProjectScreen from './Pages/ProjectScreen';
import ProjectDetailScreen from './Pages/ProjectDetailScreen';
import TestApiScren from './Pages/testApiscreen'



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="landingScreen">
      <Stack.Screen name='landingScreen' component={LandingScreen} 
        options={{
          headerShown: false  }}
          />
          <Stack.Screen name='ProjectScreen' component={ProjectScreen} 
        options={{
          headerShown: false  }}
          />
           <Stack.Screen name='ProjectDetailScreen' component={ProjectDetailScreen} 
        options={{
          headerShown: false  }}
          />
           <Stack.Screen name='TestApiScreen' component={TestApiScren} 
        options={{
          headerShown: false  }}
          />
       
          
          
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

export default App;