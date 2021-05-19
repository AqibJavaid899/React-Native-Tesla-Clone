import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import styles from './styles'

const index = ({ buttonType, content }) => {

    const buttonColor = buttonType === 'primary' ? '#171A2BCC': '#FFFFffA6'
    const textColor = buttonType === 'primary' ? 'white' : 'black'

    return (
      <View style={styles.container}>
        <Pressable
          style={[styles.button, {backgroundColor: buttonColor}]}
          onPress={() => console.warn("Button 1 is pressed!!")}
        >
          <Text style={[styles.content, {color: textColor}]}>{content}</Text>
        </Pressable>

      </View>
    );
}

export default index


