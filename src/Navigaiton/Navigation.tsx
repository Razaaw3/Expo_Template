import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import Login from "@/Screens/Login/Index";
import SignUp from "@/Screens/SignUp/Index";

//types 
import { AuthStackType,Routes } from './Routes';

//constants
const Stack = createNativeStackNavigator<Routes>();
const AuthStack = createNativeStackNavigator <AuthStackType>();


//functions
const AppNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Auth' component={AuthStackComponent} />
    </Stack.Navigator>
)
export default AppNavigator;


//Auth Stack
const AuthStackComponent = () => {
    return (
        <AuthStack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name='Login' component={Login} />
            <AuthStack.Screen name='SignUp' component={SignUp} />
        </AuthStack.Navigator>
    )
}


