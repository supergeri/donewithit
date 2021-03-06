import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

import ListItem from '../components/ListItem'
import Screen from '../components/Screen'
import ListItemSeperator from '../components/ListItemSeperator'
import ListItemDeleteAction from '../components/ListItemDeleteAction'

const initialMessages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/mosh.jpg'),
  },
]

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages)

  const handleDelete = (message) => {
    console.log('here')
    setMessages(messages.filter((m) => m.id != messages.id))
    console.log(messages)
  }

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={initialMessages}
        keyExtractor={(initialMessages) => initialMessages.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('Message selected', item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({})

export default MessagesScreen
