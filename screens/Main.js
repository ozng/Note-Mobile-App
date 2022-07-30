import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import * as todoActions from '../store/action/todo';
//Components
import TodoList from '../components/TodoList';
import CustomButton from '../components/CustomButton';
import CustomModal from '../components/CustomModal';
import Colors from '../constans/Colors';

const Main = ({ navigation }) => {
    const todoss = useSelector(state => state.todos.todos);
    const [data, setData] = useState([]);
    const [visibleModal, setVisibleModal] = useState(false);
    const [itemId, setItemId] = useState();

    const dispatch = useDispatch();

    useEffect(() => {
        setData(todoss)
        dispatch(todoActions.loadTodo())
    }, [dispatch, todoss])

    const deleteItem = id => {
        dispatch(todoActions.deleteToDo(id));
        navigation.navigate('Main')
    };

    return (
        <View style={styles.screen}>
            <View style={styles.textContainer}>
                <Text style={styles.textOne}>Not</Text>
                <Text style={styles.textTwo}>Defterim</Text>
            </View>
            <CustomButton
                title="Not Ekle"
                onpress={() => navigation.navigate('Create')}
                style={styles.button}
                iconname="notebook"
                color={Colors.btConfirm}
            />
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return (
                        <TodoList
                            editonpress={() => navigation.navigate('Detail', {
                                item: item
                            })}
                            title={item.title}
                            date={item.date}
                            deleteonpress={() => {
                                setVisibleModal(!visibleModal)
                                setItemId(item.id)
                            }}
                        />
                    )
                }}
            />
            < CustomModal
                visible={visibleModal}
                onReqClose={() => {
                    setVisibleModal(false)
                }}
                onCancel={() => setVisibleModal(false)}
                onConfirm={() => {
                    deleteItem(itemId)
                    setVisibleModal(false)
                }}
                label="Seçtiğiniz not silinecek, emin misiniz?"
                headerText="Dikkat!"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
        paddingTop: '12%'
    },
    button: {
        marginHorizontal: 10,
        zIndex: 1,
        position: 'absolute',
        top: '99%',
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    textOne: {
        fontSize: 25,
        fontFamily: 'dancing-bold'
    },
    textTwo: {
        fontSize: 40,
        fontFamily: 'dancing-bold'
    }
})

export default Main;