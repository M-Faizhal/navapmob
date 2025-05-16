import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

const SplashScreen = ({ navigation }) => {
    const [animating, setAnimating] = useState(true);
    useEffect ( () => {
        setTimeout(() => {
            setAnimating(false);
            navigation.replace('Home');
        }, 2000);
    }, []);

    return (
        <View>
            <Text>Ini SplashScreen</Text>
        </View>
    )
}

export default SplashScreen;