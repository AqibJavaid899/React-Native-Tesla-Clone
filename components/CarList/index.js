import React from 'react'
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import cars from './cars'
import CarItem from '../CarItem'
import styles from '../CarItem/styles'

const CarList = () => {
    return (
        <View style={styles.container}>
           <FlatList 
                data={cars}
                renderItem={({ item }) => 
                    <CarItem car={item} />
                }
                snapToAlignment={'start'}
                decelerationRat={'fast'}
                snapToInterval={Dimensions.get('window').height}
           />
        </View>
    )
}

export default CarList;


