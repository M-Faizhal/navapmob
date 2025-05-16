import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Detail = ({navigation}) => {
    return (
        <View>
            <Text>Detail</Text>
            <TouchableOpacity onPress={() => {navigation.goBack()}}>
                <Text>Kembali ke Home</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Detail;