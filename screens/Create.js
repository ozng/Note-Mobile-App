import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import { useDispatch } from 'react-redux';

import * as todoActions from '../store/action/todo';
import CustomButton from '../components/CustomButton';
import Colors from '../constans/Colors';


const Create = ({ navigation }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const dispatch = useDispatch();

    const add = (title, content) => {
        dispatch(todoActions.addToDo(title, content))
        navigation.navigate('Main')
    };

    return (
        <View style={styles.screen}>
            <Text style={styles.label}>Başlık</Text>
            <TextInput
                style={[styles.input, { backgroundColor: 'white', borderColor: '#ccc', borderWidth: 1, borderRadius: 5 }]}
                value={title}
                onChangeText={text => setTitle(text)}
                autoCapitalize="words"
                maxLength={60}
            />
            <Text style={styles.titleLength}>{title.length}/60</Text>
            <Text style={styles.label}>İçerik</Text>
            <TextInput
                style={[styles.input, { height: 300, marginTop: 5 }]}
                textAlignVertical="top"
                placeholder="Buraya not içeriğinizi yazabilirsiniz."
                multiline
                value={content}
                onChangeText={text => setContent(text)}
            />
            <View style={styles.button}>
                <CustomButton
                    iconname="check"
                    title="Oluştur"
                    onpress={() => add(title, content)}
                    color={Colors.btConfirm}
                />
                <CustomButton
                    style={{ marginLeft: 5 }}
                    iconname="ban"
                    title="Vazgeç"
                    onpress={() => navigation.navigate('Main')}
                    color={Colors.btCancel}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
        paddingTop: '12%'
    },
    input: {
        padding: 10,
        width: '95%',
        alignSelf: 'center',
        marginBottom: 10,
        fontFamily: 'roboto-regular',
        fontSize: 18,
        color: Colors.textColor,
        marginTop: 5
    },
    button: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        position: 'absolute',
        bottom: 20
    },
    label: {
        padding: 7,
        color: Colors.textColor,
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'dancing-bold'
    },
    titleLength: {
        color: Colors.textColorFaint,
        textAlign: 'right',
        marginHorizontal: 5
    }
})

export default Create