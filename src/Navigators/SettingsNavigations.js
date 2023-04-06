import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Settings, SettingsDetail} from '../screens';
import {COLORS, ROUTES} from '../constants';


const Stack = createStackNavigator();

const SettingsNavigations = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.LOGIN}
      screenOptions={{
        headerTitleAlign:'center',
        headerBackTitleVisible:false,
        headerShown:false,
        headerStyle: {
          backgroundColor: COLORS.primary,   
        },
      }}>
      <Stack.Screen name={ROUTES.SETTINGS} component={Settings} />
      <Stack.Screen name={ROUTES.SETTINGS_DETAIL} component={SettingsDetail} />
    </Stack.Navigator>
  );
};

export default SettingsNavigations;
