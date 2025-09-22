import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
import { useGlobalSearchParams, useRouter } from 'expo-router'
import { useState } from 'react'

export default function EditUser() {

    //TODO: implementar a edição de usuário

    const router = useRouter()
    const { id, name: eName, email: eEmail, avatar: eAvatar } = useGlobalSearchParams()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [avatar, setAvatar] = useState("")

    const handleEdit = async () => {

        const profile = {
            name,
            email,
            pass,
            avatar
        }

        const response = await fetch(`http://localhost:3000/profile/${id}`, {
            method: "PuT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(profile),
        })

        if(response.ok){
            console.log("Perfil editado com sucesso")
            router.navigate('/contact')
            //atuaLizar a lista de usuários na store
            const updatedUsers = users.map(user => {
                if(user.id === id){
                    return {id, ...profile }
                }
                return user
            })
            setUsers(updatedUsers)
            router.push('/contact')
        } else {
            console.log("Erro ao cadastrar")
        }
    }

    return (
        <View style={styles.container}>

        <Text style={styles.title}>Cadastre-se</Text>

        <View style={{ width: '80%' }}>
            <Text style={styles.label}>Nome:</Text>
            <TextInput 
                style={styles.input}
                value={name}
                onChangeText={setName}
            />
            <Text style={styles.label}>Email:</Text>
            <TextInput 
                style={styles.input}
                value={email}
                onChangeText={setEmail}
            />
            <Text style={styles.label}>Senha:</Text>
            <TextInput 
                style={styles.input}
                value={pass}
                onChangeText={setPass}
            />
            <Text style={styles.label}>Avatar:</Text>
            <TextInput 
                style={styles.input}
                value={avatar}
                onChangeText={setAvatar}
            />
        </View>
            <View style={{ marginTop: 20 }}>
                <Button 
                    title='Cadastrar'
                    onPress={handleEdit}
                />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20
    },
    label:{
        marginTop: 10
    },
    input: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        backgroundColor: '#fff',
    }
})