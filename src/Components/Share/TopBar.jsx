import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../../../assets/style/Styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';


export default function TopBar({ navigation }) {
  return (
    <View style={styles.topBarContainer}>
      {/* header image  */}
      <View>
        <Image style={styles.logo} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREoW4yDx4gnD6oIBVEK230BqF7Oig0yR6XDw&usqp=CAU" }} />

      </View>
      {/* right side  */}
      <View style={{ flexDirection: "row", justifyContent: 'space-evenly', alignItems: "center" }}>
        <View style={{ marginRight: 40 }}>
          <Icon name='search' size={25} />
        </View>
        <TouchableOpacity style={{ marginRight: 10 }} onPress={() => navigation.navigate('Chat')}  >

          <Icon2 name='facebook-messenger' size={25} />


        </TouchableOpacity>

      </View>


    </View>
  )
}