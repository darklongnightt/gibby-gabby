import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import global from '../../styles/global';

export default function ProfileTile({ profile, navigation }) {
    const handlePress = () => {
        navigation.navigate('ProfileDetails', profile.item);
    }

    return (
        <TouchableOpacity style={styles.tile} onPress={handlePress}>
            <Text style={global.subTitle}>{profile.item.name}</Text>
            <Text style={global.paragraph}>Age: {profile.item.age}</Text>
            <Text style={global.paragraph}>Gender: {profile.item.gender}</Text>
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
