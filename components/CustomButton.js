import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons';
import Colors from '../constans/Colors';

const CustomButton = ({ title, color, onpress, iconname, style }) => {
    return (
        <TouchableOpacity
            onPress={onpress}
            style={{ ...styles.button, ...style, ...{ backgroundColor: color } }}
            activeOpacity={0.5}
        >
            <SimpleLineIcons name={iconname} size={25} color={Colors.iconColor} />
            <Text style={styles.label}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '45%',
        borderRadius: 10,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        alignSelf: 'center',
        elevation: 1,
    },
    label: {
        color: Colors.btnTextColor,
        paddingHorizontal: 12,
        fontFamily: 'chakrapetch',
        fontSize: 15
    }
})

export default CustomButton