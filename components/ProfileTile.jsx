import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import global from '../styles/global';

export default function ProfileTile({ profile }) {
    return (
        <View style={styles.tile}>
            <Text style={global.subTitle}>{profile.item.name}</Text>
            <Text style={global.paragraph}>Age: {profile.item.age}</Text>
            <Text style={global.paragraph}>Gender: {profile.item.gender}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    tile: {
        flex: 1/3,
        backgroundColor: 'gold',
        paddingVertical: 16,
        margin: 1,
        borderRadius: 10,
        alignItems: 'center'
    }
})
