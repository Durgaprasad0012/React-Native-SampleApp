
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Wallet, Notifications } from '../screens';
import { COLORS, ROUTES } from '../constants';
import BottomTabNavigator from './BottomTabNavigatior';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomeDrawerComponent from '../Components/CustomeDrawerComponent';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator drawerContent={props => <CustomeDrawerComponent {...props}/>} screenOptions={{
            headerShown: false,
            drawerActiveBackgroundColor: COLORS.primary,
            drawerActiveTintColor: COLORS.white,
            drawerLabelStyle:{
                marginLeft:-20,
            },
        }}>
            <Drawer.Screen
                name={ROUTES.HOME_DRAWER}
                component={BottomTabNavigator}
                options={{
                    title: 'Home',
                    drawerIcon: ({ focused, color, size }) => (
                        <Icon name="home" size={18} color={color} />
                    ),
                }}
            />

            <Drawer.Screen
                name={ROUTES.WALLET_DRAWER}
                component={Wallet}
                options={{
                    title: 'Wallet',
                    drawerIcon: ({ focused, color, size }) => (
                        <Icon name="wallet" size={18} color={color} />
                    ),
                }}
            />

            <Drawer.Screen
                name={ROUTES.NOTIFICATIONS_DRAWER}
                component={Notifications}
                options={{
                    title: 'Notifications',
                    drawerIcon: ({ focused, color, size }) => (
                        <Icon name="notifications" size={18} color={color} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({})

export default DrawerNavigator;
