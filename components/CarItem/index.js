import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import styles from './styles'
import Button from '../styledButtons'

const CarItem = (props) => {
    console.log("Car List Item is ", props.car)
    const { name, tagline, taglineCTA, image } = props.car
    return (
      <View style={styles.carContainer}>
        <ImageBackground source={image} style={styles.image} />

        <View style={styles.heading}>
          <Text style={styles.mainHeading}>{name}</Text>
          <Text style={styles.subHeading1}>{tagline}</Text>{" "}
          <Text style={styles.subHeading2}>{taglineCTA}</Text>
        </View>

        <View style={styles.buttons}>
          <Button buttonType={"primary"} content={"Custom Order"} />
          <Button buttonType={"secondary"} content={"Existing Inventory"} />
        </View>
      </View>
    );
}

export default CarItem;

