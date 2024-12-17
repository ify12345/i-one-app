import { Text, View } from 'react-native'
import React from 'react'
import SafeAreaScreen from '@/src/components/SafeAreaScreen'
import { Searchbar } from 'react-native-paper'
import TopBar from '@/src/components/TopBar'
import styles from './styles'

export default function Search(){
  return (
    <SafeAreaScreen style={styles.screen}>
        <TopBar/>
        <Searchbar style={styles.search} placeholder='Search'/>
    </SafeAreaScreen>
  )
}



