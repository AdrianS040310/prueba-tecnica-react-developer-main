import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import Home from './src/pages/home/home'
import Series from './src/pages/series/series';
import Peliculas from './src/pages/peliculas/peliculas';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Provider } from 'react-redux';
// import store from './Redux/store/index';
// import Home from './src/pages/home/home';
// import FooterScreen from './src/pages/footer/footer';
// import HeaderScreen from './src/pages/header/header';
// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </Provider>
//   );
// }