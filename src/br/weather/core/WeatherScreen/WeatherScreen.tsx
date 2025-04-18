import {Text} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {JSX} from "react";

function WeatherScreen(): JSX.Element {
    return (
        <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text accessibilityRole="summary">Weather Forecast!</Text>
        </SafeAreaView>
    );
};

export default WeatherScreen;
