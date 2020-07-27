import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import global from '../../styles/global';

export default function UserDetails({ navigation }) {
    return (
        <View>
            <Text>User</Text>
            <Text style={global.subTitle}>{navigation.getParam('name')}</Text>
            <Text style={global.paragraph}>Age: {navigation.getParam('age')}</Text>
            <Text style={global.paragraph}>Gender: {navigation.getParam('gender')}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
