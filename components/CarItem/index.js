import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import styles from './styles'
import Button from '../styledButtons'

const index = () => {
    return (
      <View style={styles.carContainer}>
        <ImageBackground
          source={require("../../assets/images/ModelX.jpeg")}
          style={styles.image}
        />

        <View style={styles.heading}>
          <Text style={styles.mainHeading}>Tesla X</Text>
          <Text style={styles.subHeading}>Starting at $69,420</Text>
        </View>

        <Button buttonType={"primary"} content={"Custom Order"} />

        <Button buttonType={"secondary"} content={"Existing Inventory"} />
      </View>
    );
}

export default index

