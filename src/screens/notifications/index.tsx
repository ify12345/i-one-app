import { Text, View } from 'react-native'
import React from 'react'
import SafeAreaScreen from '@/src/components/SafeAreaScreen'

import TopBar from '@/src/components/TopBar'
import styles from './styles'

export default function Notifications(){
  return (
    <SafeAreaScreen style={styles.screen}>
        <TopBar/>
        <View style={styles.container}>
            <Text>No notifications at this moment</Text>
        </View>
    </SafeAreaScreen>
  )
}



