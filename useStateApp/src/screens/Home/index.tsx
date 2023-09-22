import { useState } from 'react';
import { View, Text, TextInput, Touchable, TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles';

export default function Home(){

    //useState
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    function handleUserAdd(){
        console.log(
            "Nome completo: " + name + "\nE-mail: " + email
        )

        Alert.alert(
            "Nome completo: " + name + "\nE-mail: " + email 
        )
    }
    
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Preencha os Dados</Text>

            <TextInput
                style={styles.input}
                placeholder="Nome Completo"

                value={name}
                onChangeText={setName}
            />

            <TextInput
                style={styles.input}
                placeholder="E-mail"

                value={email}
                onChangeText={setEmail}
            />

            <TouchableOpacity style={styles.btn} onPress={handleUserAdd}>
                <Text style={styles.btnTxt}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}