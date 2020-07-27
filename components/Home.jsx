import React from 'react'
import { StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native'

export default function Home({ navigation }) {
    return (
        <ImageBackground
            source={require('../assets/images/RepeatBanana.jpg')}
            style={styles.container}
            resizeMode={"repeat"}
            imageStyle={{ opacity: 0.5 }}
        >
            <Text style={styles.title}>Gibby Gabby</Text>
            <TouchableOpacity onPress={() => { navigation.navigate('UserList') }}>
                <Text style={styles.startButton}>Start Chatting</Text>
            </TouchableOpacity>
        </ImageBackground>
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
        fontSize: 64,
        letterSpacing: 1,
    },
    startButton: {
        paddingVertical: 10,
        marginVertical: 10,
        backgroundColor: '#000',
        color: '#fff',
        borderRadius: 10,
        width: 200,
        textAlign: 'center',
        fontFamily: 'roboto-medium',
    }
})