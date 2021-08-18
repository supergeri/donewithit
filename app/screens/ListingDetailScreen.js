import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import AppText from '../components/AppText/AppText'
import colors from '../config/colors'
import ListItem from '../components/ListItem'

function ListingDetailScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/jacket.jpg')} />
      <View style={styles.detailsContainer}>
        <AppText styles={styles.title}>Red jacket for sale</AppText>
        <AppText styles={styles.price}>$100</AppText>
        <View styles={styles.userContainer}>
          <ListItem
            image={require('../assets/mosh.jpg')}
            title="Mosh Hamedani"
            subTitle="5 listings"
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  userContainer: {
    marginVertical: 40,
  },
})

export default ListingDetailScreen
