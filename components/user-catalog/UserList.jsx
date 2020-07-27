import React, { useState } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import UserTile from './UserTile';
import global from '../../styles/global';

const UserList = ({ navigation }) => {
    const [users, setUsers] = useState([
        { name: 'Royston', gender: 'M', age: 23, id: '1' },
        { name: 'Bo Rui', gender: 'M', age: 22, id: '2' },
        { name: 'Cain', gender: 'M', age: 44, id: '3' },
        { name: 'Xavier', gender: 'M', age: 11, id: '4' },
        { name: 'Ernest', gender: 'M', age: 11, id: '5' },
        { name: 'Royston', gender: 'M', age: 23, id: '6' },
        { name: 'Bo Rui', gender: 'M', age: 22, id: '7' },
        { name: 'Cain', gender: 'M', age: 44, id: '8' },
        { name: 'Xavier', gender: 'M', age: 11, id: '9' },
        { name: 'Ernest', gender: 'M', age: 11, id: '10' },
        { name: 'Royston', gender: 'M', age: 23, id: '11' },
        { name: 'Bo Rui', gender: 'M', age: 22, id: '12' },
        { name: 'Cain', gender: 'M', age: 44, id: '13' },
        { name: 'Xavier', gender: 'M', age: 11, id: '14' },
        { name: 'Ernest', gender: 'M', age: 11, id: '15' },
        { name: 'Royston', gender: 'M', age: 23, id: '16' },
    ]);

    return (
        <View style={global.container}>
            <Text style={global.title}>UserList</Text>
            <View style={styles.tileContainer}>
                <FlatList
                    keyExtractor={(item) => item.id}
                    data={users}
                    renderItem={(item) => <UserTile user={item} navigation={navigation} />}
                    numColumns={3}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    tileContainer: {
        flex: 1,
    }
});

export default UserList
