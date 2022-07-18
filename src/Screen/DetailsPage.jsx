import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'

export default function DetailsPage({ route, navigation }) {

    const { productName, img, price } = route.params;
    console.log(img)

    return (
        <View style={style.container}>

            <Text style={{ marginVertical: 10, fontSize: 20, width: width * .5 }}>{productName}</Text>
            <Image source={{ uri: img }} style={style.img} />

        </View>
    )
}

