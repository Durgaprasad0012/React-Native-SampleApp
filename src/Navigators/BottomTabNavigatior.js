import React from 'react';
import { StyleSheet, Platform, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, ROUTES } from '../constants';
import { Home, Wallet, Notifications, Settings } from '../screens';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";

// SettingsNavigator
import SettingsNavigations from './SettingsNavigations';

const Tab = createBottomTabNavigator();

function BottomTabNavigatior() {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarStyle: styles.tabBarStyle,
        tabBarInactiveTintColor: COLORS.dark,
        headerShown: false,

        // ====Tab Bar ICONS=====
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === ROUTES.HOME_TAB) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === ROUTES.SETTINGS_NAVIGATOR) {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === ROUTES.WALLET) {
            iconName = focused ? 'wallet' : 'wallet-outline';
          } else if (route.name === ROUTES.NOTIFICATIONS) {
            iconName = focused ? 'notifications' : 'notifications-outline';
          }
          return <Icon name={iconName} color={color} size={size} />
        },
      })}>
      <Tab.Screen name={ROUTES.HOME_TAB} component={Home} />
      <Tab.Screen name={ROUTES.WALLET} component={Wallet} />
      <Tab.Screen name={ROUTES.NOTIFICATIONS} component={Notifications} />
      <Tab.Screen name={ROUTES.SETTINGS_NAVIGATOR} component={SettingsNavigations} options={{
        headerShown: true,
        title: 'Settings',
        headerTitleAlign: 'center',
        headerRight: () => {
          return (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon
                name={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'}
                size={30}
                color={COLORS.dark}
                style={{ marginRight: 10 }}
              />
            </TouchableOpacity>
          )
        }
      }} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigatior;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    backgroundColor: COLORS.transparent,
    padding: 20,
    bottom: 15,
    left: 10,
    right: 10,
    borderRadius: 50,
    borderTopWidth: 0,
  }
})
