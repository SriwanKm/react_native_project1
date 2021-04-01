import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView, Button, TextInput, FlatList} from 'react-native';

export default function App() {

    const [name, setName] = useState('Pop')
    const [person, setPerson] = useState({name: 'Sam', age: 40})
    const OnPressHandle = () => {
        setName('Kookai')
        setPerson({name: 'Kapoo', age: 10})
    }
    const [member, setMember] = useState([
        {name: 'Kook', id: 1},
        {name: 'Sam', id: 2},
        {name: 'Nok', id: 3},
        {name: 'Cha', id: 4},
        {name: 'Tay', id: 5},
    ])
    return (
        <View>
            <Text style={styles.header}>React Native Demo</Text>
            <View style={styles.container}>
                <Text>My name is {name}</Text>
                <Text>Other names are {person.name} and age {person.age} years old</Text>
                <View style={styles.button}>
                    <Button
                        title={'Update'}
                        onPress={OnPressHandle}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text>Enter name</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder={'e.g. Marry'}
                        onChangeText={(e) => setPerson({...person, name: e})}
                    />
                    <Text>Enter age</Text>
                    <TextInput
                        keyboardType='numeric'
                        style={styles.inputText}
                        placeholder={'e.g. 29'}
                        onChangeText={(e) => setPerson({...person, age: e})}
                    />
                </View>
                <FlatList
                    numColumns={2}
                    keyExtractor={(item) => item.id}
                    data={member}
                    renderItem={({item}) => (
                        <Text style={styles.scrollContainer}>{item.name}</Text>
                    )}
                />

                {/*<ScrollView>*/}
                {/*    {member.map(el =>*/}
                {/*        <View key={el.key}>*/}
                {/*            <Text style={styles.scrollContainer}>{el.name}</Text>*/}
                {/*        </View>*/}
                {/*    )}*/}
                {/*</ScrollView>*/}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    header: {
        textAlign: 'center',
        width: '100%',
        backgroundColor: 'pink',
        padding: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    content: {
        textAlign: 'center',
        width: '100%',
        backgroundColor: 'salmon',
        padding: 20,
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'salmon',
        padding: 20,
    },

    button: {
        margin: 50,
        width: 150,
        textAlign: 'center',
    },
    inputText: {
        backgroundColor: 'grey',
        paddingHorizontal: 15,
        borderRadius: 50,
        height: 30,
        margin: 5,
        width: 200,
        color: 'white',
        placeholderTextColor: 'pink',
    },
    scrollContainer: {
        backgroundColor: 'purple',
        padding: 10,
        margin: 20,
        color: 'white',
        width: 200,
        height: 50,
        textAlign: 'center',
    }

});
