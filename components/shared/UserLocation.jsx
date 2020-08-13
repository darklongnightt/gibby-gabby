import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Linking, AppState } from 'react-native';
import * as IntentLauncher from 'expo-intent-launcher';
import * as Location from 'expo-location';

export default function Geo() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [btnVisible, setBtnVisible] = useState(false);

    useEffect(() => {
        getLocation();
    });

    const getLocation = async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
        }

        Location.getCurrentPositionAsync({})
            .then(location => {
                setLocation(location);
                setBtnVisible(false);
            }).catch(err => {
                setErrorMsg('Device location service is disabled');
                let status = Location.getProviderStatusAsync();
                if (!status.locationServicesEnabled) {
                    setBtnVisible(true);
                }
            })
    }

    const openSettings = () => {
        console.log('opening settings...')

        if (Platform.OS == 'ios') {
            Linking.openURL('app-settings:');
        } else {
            IntentLauncher.startActivityAsync(
                IntentLauncher.ACTION_LOCATION_SOURCE_SETTINGS
            );
        }
    }

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    return (
        <View style={styles.container}>
            <Text>{text}</Text>
            {
                btnVisible &&
                <TouchableOpacity onPress={openSettings}>
                    <Text style={styles.settingsButton}>Enable Location</Text>
                </TouchableOpacity>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 35,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    settingsButton: {
        backgroundColor: '#e57373',
        color: '#fff',
        flex: 1,
        padding: 6,
    }
});