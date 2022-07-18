import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../../../assets/style/Styles'
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialIcons';

import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../../redux/actions/HomeAction';


export default function AppBar() {

    const dispatch = useDispatch()
    const setActive = (name) => {
        dispatch(setActiveTab(name))

    }
    const { activeTabNow } = useSelector((state) => state.homeValue);
    // console.log(activeTabNow)

    return (
        <View style={styles.appBarContainer}>

            <TouchableOpacity style={{ borderBottomColor: activeTabNow == "home" ? "#1B74E4" : "black", borderBottomWidth: activeTabNow == "home" ? 2 : 0 }} onPress={() => setActive("home")} >
                <Icon name='home' size={30} color={activeTabNow == "home" ? "#1B74E4" : "black"} />
            </TouchableOpacity>

            <TouchableOpacity style={{ borderBottomColor: activeTabNow == "play" ? "#1B74E4" : "black", borderBottomWidth: activeTabNow == "play" ? 2 : 0 }} onPress={() => setActive("play")} >
                <Icon name='playcircleo' size={30} color={activeTabNow == "play" ? "#1B74E4" : "black"} />
            </TouchableOpacity>
            <TouchableOpacity style={{ borderBottomColor: activeTabNow == "mPlace" ? "#1B74E4" : "black", borderBottomWidth: activeTabNow == "mPlace" ? 2 : 0 }} onPress={() => setActive("mPlace")} >
                <Icon name='home' size={30} color={activeTabNow == "mPlace" ? "#1B74E4" : "black"} />
            </TouchableOpacity>
            <View>
                <Icon2 name='groups' size={30} />
            </View>
            <View>
                <Icon name='bells' size={30} />
            </View>

        </View>
    )
}
