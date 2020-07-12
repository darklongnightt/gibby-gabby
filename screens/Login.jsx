import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Login() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Gibby Gabby</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: "runy-tunes",
        fontSize: 42,
    }
})
