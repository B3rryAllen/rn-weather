/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {JSX} from 'react';
import WeatherScreen from '@br/weather/core/WeatherScreen/WeatherScreen.tsx';
import SettingsScreen from '@br/weather/core/SettingsScreen/SettingsScreen.tsx';
import {NavigationContainer} from '@react-navigation/native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


const Tab = createBottomTabNavigator();

export const App = (): JSX.Element => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName = '';

                        if (route.name === 'Weather') {
                            iconName = focused ? 'thought-bubble' : 'thought-bubble-outline';
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'cog' : 'cog-outline';
                        }

                        return <Icon name={iconName} size={size} color={color} />;
                    },
                })}>
                <Tab.Screen name='Weather' component={WeatherScreen} />
                <Tab.Screen name='Settings' component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;
