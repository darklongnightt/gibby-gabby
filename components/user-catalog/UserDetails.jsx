import React, { useState } from 'react'
import { StyleSheet, Text, View, Modal } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import global from '../../styles/global';

export default function UserDetails({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={global.subTitle}>{navigation.getParam('name')}</Text>
            <Text style={global.paragraph}>Age: {navigation.getParam('age')}</Text>
            <Text style={global.paragraph}>Gender: {navigation.getParam('gender')}</Text>

            <MaterialIcons name='chat' size={28} onPress={() => setModalVisible(true)} />
            <Modal visible={modalVisible}>
                <View style={styles.container}>
                    <Text>This is a modal!</Text>
                    <MaterialIcons name='close' size={28} onPress={() => setModalVisible(false)} />
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    }
})
