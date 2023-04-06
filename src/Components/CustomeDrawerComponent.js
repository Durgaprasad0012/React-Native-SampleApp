import { StyleSheet, Image, ImageBackground, View, Dimensions } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { COLORS, IMGS } from '../constants';
const { width } = Dimensions.get("screen")

const CustomeDrawerComponent = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <ImageBackground source={IMGS.bgPattern} style={{ height: 140 }}>
                <Image source={IMGS.user} style={styles.userImg} />
            </ImageBackground>

            <View style={styles.drawerListWapper}><DrawerItemList {...props} /></View>
        </DrawerContentScrollView>
    )
}

export default CustomeDrawerComponent

const styles = StyleSheet.create({
    userImg: {
        width: 110,
        height: 110,
        borderRadius: 110 / 2,
        position: 'absolute',
        left: width / 2 - 110,
        bottom: -110 / 2,
        borderWidth:5,
        borderColor:COLORS.white,
    },
    drawerListWapper: {
        marginTop: 110 / 2 + 10,
    }
})