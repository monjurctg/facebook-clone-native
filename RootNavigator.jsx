import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import Chat from "./src/Screen/Chat";


import DetailsPage from "./src/Screen/DetailsPage";
import FbHome from "./src/Screen/FbHome";
import HomeScreen from "./src/Screen/HomeScreen";

const Stack = createNativeStackNavigator();


export default function RootNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name='Home' component={FbHome} />
                <Stack.Screen name='Chat' component={Chat} />
                {/* <Stack.Screen name='Details' component={DetailsPage} /> */}
            </Stack.Navigator>
            <StatusBar
                animated={true}
                backgroundColor='#61dafb'
            // barStyle={statusBarStyle}
            // showHideTransition={statusBarTransition}
            // hidden={hidden}
            />
        </NavigationContainer>
    )
}