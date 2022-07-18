import { View, Text, StyleSheet, Image, Dimensions, TextInput } from 'react-native'
import React from 'react'



const width = Dimensions.get('window').width
export default function WhatsonMind() {

    return (
        <View style={styles.container}>
            <View style={{ width: width * .1 }}>
                <Image source={{ uri: "https://scontent.fcgp7-1.fna.fbcdn.net/v/t1.6435-9/134474054_562081701414705_6742237731154046691_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHLrbu7QAYfjQA1TLIeQ6kQR51LdAPtO5BHnUt0A-07kMxGsO370vZyt6Ssh9lg90bbK4Oho9X4xGldy7mo_TMB&_nc_ohc=Mt_tPgKh1tMAX9H3n_f&_nc_ht=scontent.fcgp7-1.fna&oh=00_AT98XeIN8lmpmIV4RqzfX0OtfyDTQlqviAmw3sP45oPmLg&oe=62FA687E" }} style={styles.logo} />
            </View>
            <View style={{ width: width * .7, marginHorizontal: 20 }}>
                <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Whats on your mind?"
                    autoCapitalize="none"
                    placeholderTextColor="black"
                    onChangeText={(e) => console.log(e)} />


            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row", alignItems: "center",
        marginHorizontal: 10,
        marginVertical: 10

    }
    ,
    logo: {
        height: 50, width: 50, borderRadius: 100
    },
    input: {
        borderWidth: 1,
        borderColor: "gray",
        backgroundColor: "white",
        height: 40,
        borderRadius: 20,
        padding: 10,

    }

})