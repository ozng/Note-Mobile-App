import React from 'react'
import { StyleSheet, Text, View, Modal } from 'react-native'
import Colors from '../constans/Colors'
import CustomButton from './CustomButton'

const CustomModal = ({ visible, onReqClose, onCancel, label, headerText, onConfirm }) => {
    return (
        <View style={styles.screen}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={visible}
                onRequestClose={onReqClose}
            >
                <View style={styles.screen}>
                    <View>
                        <Text style={styles.headerText}>{headerText}</Text>
                    </View>
                    <View>
                        <Text style={styles.labelText}>{label}</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <CustomButton
                            color={Colors.btConfirm}
                            iconname="check"
                            onpress={onConfirm}
                            title="Onayla"
                        />
                        <CustomButton
                            color={Colors.btCancel}
                            iconname="ban"
                            onpress={onCancel}
                            title="Vazgeç"
                        />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        width: '90%',
        alignSelf: 'center',
        top: '40%',
        elevation: 13,
        backgroundColor: Colors.modalBackground,
        borderRadius: 10,
        padding: 20,
    },
    headerText: {
        fontSize: 20,
        textAlign: 'center',
        color: Colors.textColor,
        fontFamily: 'chakrapetch',
        borderBottomWidth: 1,
        borderBottomColor: Colors.textColor
    },
    labelText: {
        paddingVertical: 25,
        textAlign: 'center',
        fontFamily: 'roboto-regular',
        fontSize: 14
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 2
    }
})

export default CustomModal