import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../../../assets/style/Styles'

export default function CommonCard({ children }) {
    return (
        <View style={styles.card}>
            {children}
        </View>
    )
}