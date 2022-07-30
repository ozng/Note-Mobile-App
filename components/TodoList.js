import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../constans/Colors';

const TodoList = ({ title, date, editonpress, deleteonpress }) => {
    return (
        <TouchableOpacity
            onPress={editonpress}
            activeOpacity={1}
        >
            <View style={styles.screen}>
                <View style={styles.textContainer}>
                    <Text numberOfLines={1} style={styles.text}>{title}</Text>
                    <Text style={styles.date}>{date}</Text>
                </View>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={deleteonpress}
                >
                    <View style={styles.icon}>
                        <MaterialCommunityIcons
                            name="delete-circle"
                            size={35}
                            color={Colors.btCancel}
                            style={{ paddingLeft: 20, paddingRight: 5 }}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: Colors.listBackground,
        borderRadius: 30,
        marginVertical: 15,
        padding: 13,
        elevation: 4,
        overflow: 'hidden',
        width: '95%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textContainer: {
        flex: 1,
        paddingLeft: 10,
    },
    text: {
        color: Colors.textColor,
        fontSize: 15,
        marginBottom: 13,
        fontFamily: "roboto-regular",
    },
    date: {
        color: Colors.textColorFaint,
        fontSize: 10,
        fontFamily: 'roboto-regular'
    }
})

export default TodoList;