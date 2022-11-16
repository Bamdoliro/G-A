import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import EmailAuthScreen from "../screens/EmailAuthScreen";


export default function AuthNavigation({Stack, setLoginToken}) {

    return (
        <Stack.Navigator
            initialRouteName="AuthNavigation"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="LoginScreen">
                {props => <LoginScreen {...props} setLogin={setLoginToken}/>}
            </Stack.Screen>
            <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
            <Stack.Screen name="EmailAuthScreen" component={EmailAuthScreen}/>
        </Stack.Navigator>
    )
};

