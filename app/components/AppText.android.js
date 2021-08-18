import React from 'react'
import { Text, StyleSheet } from 'react-native'

function AppText({ children }) {
  return <Text styles={styles.Text}>{children}</Text>
}

const styles = StyleSheet.create({
  text: {
    color: 'tomato',
    fontSize: 40,
    fontFamily: 'Roboto',
  },
})

export default AppText
