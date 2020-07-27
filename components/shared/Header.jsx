import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';
import global from '../../styles/global';

function Header({ navigation, title }) {
    const openMenu = () => {
        navigation.openDrawer();
    }

    return (
        <View style={styles.header}>
            <MaterialIcons
                name='menu'
                size={28}
                onPress={openMenu}
                style={styles.icon}
            />
            <View>
                <Text style={global.title}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: Dimensions.get('screen').width,
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        position: 'absolute',
        left: 15,
    },
});

export default withNavigation(Header)