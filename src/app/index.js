import { View, Text, Button, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'
import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useAuthStore } from '../stores/useAuthStore'
import { ActivityIndicator } from 'react-native'

export default function Initializer() {

    const router = useRouter()
    const { login } = useAuthStore()

    useEffect(() => {
        const checkLogin = async () => {
            const userLoggedString = await AsyncStorage.getItem('userLogged')
            const userLogged = userLoggedString ? JSON.parse(userLoggedString) : null

            if(userLogged?.token){
                login(userLogged)
                router.replace('/home')
            } else {
                router.replace('/login')
            }
        }

        setTiemout(checkLogin(), 2000) // Simula uma tela de carregamento por 2 segundos
    }, [])

    return (
        <View style={styles.container}>
            <Text>Meu Site</Text>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})