import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
} from 'react-native';
import AddUser from './addUser';
import Users from './users';
import { useFocusEffect } from '@react-navigation/native';

export default function Home() {

    const url = 'http://192.168.0.103:8080/api';
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [data, setData] = useState([]);


    const getUsers = async () => {
        try {
            const response = await axios.get(url);
            setData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const deleteUser = async (id) => {
        try {
            const response = await axios.delete(`${url}/${id}`);
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useFocusEffect(
        React.useCallback(() => {
            getUsers();
        }, [])
    );

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden />
            <AddUser url={url} setData={setData} name={name} setName={setName} city={city} setCity={setCity} />
            <FlatList
                contentContainerStyle={{
                    paddingHorizontal: 6,
                    paddingVertical: 3,
                }}
                data={data}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <Users deleteUser={deleteUser} {...item} />}
            />
        </SafeAreaView>
    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
});