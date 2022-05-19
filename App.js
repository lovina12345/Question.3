import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button,Dimensions,FlatList, } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CardView from "./components/CardView";



const Stack= createNativeStackNavigator();

const App = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CardView">
        <Stack.Screen name="CardView" component={CardView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

