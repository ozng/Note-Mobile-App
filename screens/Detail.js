import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import Colors from '../constans/Colors';
import CustomButton from '../components/CustomButton';
import { useDispatch } from 'react-redux';

import * as todoActions from '../store/action/todo'


const Detail = ({ route, navigation }) => {
    const dispatch = useDispatch();
    const item = route.params.item;
    const [content, setContent] = useState(item.content)
    const [title, setTitle] = useState(item.title)

    const contentChangeHandler = text => {
        setContent(text);
    };
    const titleChangeHandler = text => {
        setTitle(text);
    };

    return (
        <View style={styles.screen}>
            <Text style={styles.label}>Başlık</Text>
            <TextInput
                style={[styles.textInputTitle, { backgroundColor: 'white', borderColor: '#ccc', borderWidth: 1, borderRadius: 5 }]}
                value={title}
                onChangeText={text => titleChangeHandler(text)}
                autoCapitalize="words"
                maxLength={60}
            />
            <Text style={styles.titleLength}>{title.length}/60</Text>
            <Text style={styles.label}>İçerik</Text>
            <TextInput
                style={styles.textInputContent}
                value={content}
                onChangeText={text => contentChangeHandler(text)}
                placeholder="Buraya not içeriğinizi yazabilirsiniz."
                multiline
            />
            <View style={styles.button}>
                <CustomButton
                    iconname="check"
                    title="Düzenle"
                    onpress={() => {
                        dispatch(todoActions.updateToDo(
                            item.id,
                            title,
                            content,
                            item.isDone
                        ))
                        navigation.navigate('Main')
                    }
                    }
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
    label: {
        padding: 7,
        color: Colors.textColor,
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'dancing-bold'
    },
    textInputTitle: {
        padding: 7,
        width: '98%',
        alignSelf: 'center',
        marginBottom: 10,
        fontFamily: 'roboto-regular',
        fontSize: 18,
        color: Colors.textColor,
        marginTop: 5
    },
    textInputContent: {
        textAlignVertical: 'top',
        paddingHorizontal: 8,
        height: '70%',
        fontFamily: 'roboto-regular',
        fontSize: 20,
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
    titleLength: {
        color: Colors.textColorFaint,
        textAlign: 'right',
        marginHorizontal: 5
    }
})

export default Detail