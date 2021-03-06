import { StyleSheet } from 'react-native';

export default global = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontFamily: 'roboto-bold',
        fontSize: 22,
        letterSpacing: 1,
    },
    subTitle: {
        fontFamily: 'roboto-medium',
        fontSize: 20,
    },
    paragraph: {
        fontFamily: 'roboto',
        fontSize: 16,
    },
    modalContent: {
        flex: 1,
        marginHorizontal: 10,
    },
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
});