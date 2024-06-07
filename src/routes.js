import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {Home} from "./pages/home"
import {Passwords} from "./pages/passwords"
import {WelcomeScreen} from "./pages/WelcomeScreen"

import {Ionicons} from "@expo/vector-icons"

const Tab = createBottomTabNavigator();

export function Routes({ isAuthenticated, setIsAuthenticated }){
    if (isAuthenticated) {
        return(
            <Tab.Navigator initialRouteName="Página Inicial">
                <Tab.Screen
                    name="Página Inicial"
                    component={Home}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({focused, size,color}) => {
                            if(focused) {
                                return <Ionicons size={size} color={color} name="home"/>
                            }

                            return <Ionicons size={size} color={color} name="home-outline"/>

                        }
                    }}
                />

                <Tab.Screen
                    name="Senhas "
                    component={Passwords}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({focused, size,color}) => {
                            if(focused) {
                                return <Ionicons size={size} color={color} name="lock-closed"/>
                            }

                            return <Ionicons size={size} color={color} name="lock-closed-outline"/>

                        }
                    }}
                />
            </Tab.Navigator>
        )
    } else {
        return <WelcomeScreen setIsAuthenticated={setIsAuthenticated} />
    }
}