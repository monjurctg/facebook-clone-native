import { View, Text, ScrollView } from 'react-native'
import React from 'react'

import TopBar from '../Components/Share/TopBar'
import AppBar from '../Components/Share/AppBar'
import { styles } from '../../assets/style/Styles'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import HomeIndex from '../Components/Home/HomeIndex'
import { useEffect } from 'react'
import WatchIndex from '../Components/watch/WatchIndex'
import MarketPlace from '../Components/MarketPlace/MarketPlace'


export default function FbHome({ navigation }) {
    const { activeTabNow } = useSelector((state) => state.homeValue);
    console.log(activeTabNow)
    const [activeComponets, setActiveComponets] = useState(<HomeIndex />)
    useEffect(() => {
        if (activeTabNow === "home") setActiveComponets(<HomeIndex />)
        else if (activeTabNow === "play") setActiveComponets(<WatchIndex />)
        else if (activeTabNow === "mPlace") setActiveComponets(<MarketPlace />)



    }, [activeTabNow])
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: "white" }}>
                {
                    activeTabNow == "home" && <TopBar navigation={navigation} />
                }

                <AppBar />
            </View>

            <ScrollView >
                {activeComponets}
            </ScrollView>

        </View>
    )
}