import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'



export default function HomeScreen({ navigation }) {


    const [data, setData] = useState([])

    const fetchData = async () => {
        console.log("hello")
        const res = await axios.get("https://hidden-inlet-96106.herokuapp.com/products")
        const data = await res.data
        setData(data)
        console.log(res.data)


    }
    useEffect(() => {
        fetchData()
    }, [])
    console.log(data, "data")
    const renderItem = ({ item }) => (
        <TouchableOpacity key={item.id} style={styles.textContainer} onPress={() => navigation.navigate('Details', item)}>
            <View style={styles.contet}>
                <View style={styles.contetnwidth}>
                    <Image source={{ uri: item.img }} style={styles.image} />
                </View>

                <View style={styles.contetnwidth}>
                    <Text style={styles.text} >{item.productName}</Text>
                    <Text style={styles.text} >{item.price} tk</Text>

                </View>


            </View>

        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}

                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.title}
            />

        </View>
    )
}
var width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",

    },
    text: {
        fontSize: 20,
        color: "green",
        // marginTop: 20,
    },
    image: {
        width: width * .2,
        height: width * .2,
        borderRadius: width * .5,
        borderWidth: 3,
        borderColor: "blue"
    },
    contetnwidth: {
        // width: width * .5
        marginHorizontal: 10,
        padding: 10
    },
    contet: {
        flexDirection: "row",
        width: width * .8,
        justifyContent: "space-between",
        alignItems: "center",


    }
    ,
    textContainer: {

        borderRadius: 20,
        backgroundColor: "white",
        marginVertical: 20,
        justifyContent: "center",
        alignItems: "center",
        // flexWrap: 'wrap',
        width: width * .9
    }
})

