import React, { useRef, useState } from 'react';
import { faker } from '@faker-js/faker';
import {
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { styles } from './addUserStyle';
import axios from 'axios';
import { ActivityIndicator } from 'react-native';

export default function AddUser(props) {

    const nameTextInputRef = useRef();
    const [statusProgress, setStatusProgress] = useState(false);

    const {
        name,
        setName,
        city,
        setCity,
        setData,
        url,
    } = props;

    const addUsers = async () => {
        if (name.length === 0 || city.length === 0) {
            alert('Please fill in the empty field!');
            return;
        }
        try {
            setStatusProgress(true);
            const postResponse = await axios.post(url, {
                name: name,
                avatar: faker.image.avatar(),
                city: city,
            });
            setData(postResponse.data);
            setStatusProgress(false);
            setName('');
            setCity('');
            nameTextInputRef.current.focus();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Name:</Text>
                <TextInput
                    ref={nameTextInputRef}
                    autoFocus
                    style={styles.input}
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>City:</Text>
                <TextInput
                    style={styles.input}
                    value={city}
                    onChangeText={(text) => setCity(text)}
                />
            </View>
            <View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        addUsers();
                    }}
                >
                    {statusProgress ?
                        <ActivityIndicator size={'large'} color={'white'} />
                        :
                        <Text
                            style={styles.buttonText}
                        >
                            Add
                        </Text>
                    }

                </TouchableOpacity>
            </View>
        </View>
    );
}