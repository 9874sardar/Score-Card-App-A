import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './src/loginPage';
import Signuppage from './src/signuppage';
import Home from './src/Home';
import Overview from './src/Components/Players/Overview';

import SelectPlayer from './src/Components/Players/SelectPlayer';
import AddPlayers from './src/Components/Players/AddPlayers';
import ScoreProvider from './src/context/ScoreContext';
import ScoreCard from './src/Components/ScoreCard';

const Stack = createNativeStackNavigator();

function App() {

  return (
    <ScoreProvider>

    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="SignIn-Page" component={LoginPage} />
        <Stack.Screen name="SignUp-Page" component={Signuppage} /> */}
        <Stack.Screen name="overview"  component={Overview} />
      {/* <Stack.Screen name="players"  component={SelectPlayer} /> */}
        {/* <Stack.Screen name="home"  component={ScoreCard} /> */}
        {/* <Stack.Screen name="addPlayer"  component={AddPlayers} /> */}

      </Stack.Navigator>
    </NavigationContainer>
      </ScoreProvider>
  );
}

export default App;