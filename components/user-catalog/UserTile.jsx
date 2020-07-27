import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import global from '../../styles/global';


export default function UserTile({ user, navigation }) {
    const handlePress = () => {
        navigation.navigate('UserDetails', user.item);
    }

    return (
        <TouchableOpacity style={styles.tile} onPress={handlePress}>
            <Text style={global.subTitle}>{user.item.name}</Text>
            <Text style={global.paragraph}>Age: {user.item.age}</Text>
            <Text style={global.paragraph}>Gender: {user.item.gender}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    tile: {
        flex: 1 / 3,
        backgroundColor: '#fff',
        paddingVertical: 16,
        margin: 1,
        borderRadius: 10,
        alignItems: 'center',
        elevation: 2,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 3,
    }
})
