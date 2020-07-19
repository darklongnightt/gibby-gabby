import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Gibby Gabby</Text>
            <TouchableOpacity onPress={() => { navigation.navigate('ProfileList') }}>
                <Text style={styles.startButton}>Start Chatting</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    title: {
        fontFamily: 'runy-tunes',
        fontSize: 42,
    },
    startButton: {
        paddingVertical: 10,
        marginVertical: 10,
        backgroundColor: '#000',
        color: '#fff',
        borderRadius: 10,
        width: 127,
        textAlign: 'center',
        fontFamily: 'roboto-medium',
    }
})