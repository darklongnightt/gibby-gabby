import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import global from '../../styles/global';

const validationSchema = yup.object({
    email: yup.string()
        .required()
        .email('Email must be valid'),
    password: yup.string()
        .required()
        .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Password must be a combination of letters and numbers of minimum length of 8'),
    number: yup.string()
        .required()
        .test('is-num-1-5', 'Must be a number 1 - 5', (val) => {
            return parseInt(val) < 6 && parseInt(val) > 0;
        }),
});

export default function Form() {
    const handleSubmit = (values, actions) => {
        console.log(values);
        actions.resetForm();
    }

    return (
        <View style={global.container}>
            <Text style={[global.title, styles.title]}>Register</Text>
            <Formik
                initialValues={{ email: '', password: '', number: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {
                    (props) => (
                        <View>
                            <TextInput
                                style={styles.inputText}
                                placeholder='E.g. john.doe@gmail.com'
                                onChangeText={props.handleChange('email')}
                                value={props.values.email}
                            />
                            <Text style={styles.errorText}>{props.touched.email && props.errors.email}</Text>

                            <TextInput
                                style={styles.inputText}
                                secureTextEntry={true}
                                placeholder='E.g. ********'
                                onChangeText={props.handleChange('password')}
                                value={props.values.password}
                            />
                            <Text style={styles.errorText}>{props.touched.password && props.errors.password}</Text>

                            <TextInput
                                style={styles.inputText}
                                placeholder='E.g. 123'
                                onChangeText={props.handleChange('number')}
                                value={props.values.number}
                            />
                            <Text style={styles.errorText}>{props.touched.number && props.errors.number}</Text>

                            <Button onPress={props.handleSubmit} title='submit' />
                        </View>
                    )
                }
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        marginVertical: 30,
        alignSelf: 'center',
    },
    inputText: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 10,
    },
    errorText: {
        color: 'crimson',
        textAlign: 'center',
        marginBottom: 10,
        textTransform: 'uppercase',
        opacity: 0.8
    },
});
