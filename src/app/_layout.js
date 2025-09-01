import { Tabs } from "expo-router"
import { Foundation } from "@expo/vector-icons"
import AntDesign from '@expo/vector-icons/AntDesign';


export default function RootLayout() {
    return(
        <Tabs screenOptions={{
            tabBarStyle: { 
                backgroundColor: '#000', 
                borderTopWidth: 0, 
            },
            tabBarActiveTintColor: '#e50914',
            tabBarInactiveTintColor: '#fff',
        }}>
            <Tabs.Screen 
                name="index" 
                options={{ 
                    title: 'MovieFy',
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({color}) => <Foundation name="home" size={24} color={color}/>
                }}
            />
            <Tabs.Screen 
                name="about" 
                options={{ 
                    title: 'Sobre',
                    tabBarShowLabel: false,
                    tabBarIcon: ({color}) => <AntDesign name="user" size={24} color={color} />
                }}
        

            />
            <Tabs.Screen 
                name="contact" 
                options={{ 
                    title: 'Contato',
                    tabBarShowLabel: false,
                    tabBarIcon: ({color}) => <AntDesign name="contacts" size={24} color={color} />
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Perfil',
                    tabBarShowLabel: false,
                    tabBarIcon: ({color}) => <AntDesign name="profile" size={24} color={color} />
                }}
            />
        </Tabs>
    )
}