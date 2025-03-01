import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import styles  from './styles'

const CarItem = ({car}) => {
  const { image, title, subtitle } = car;
  return (
     <View style={styles.carContainer}>
        <ImageBackground
            style={styles.image}
            source={image}/>

        <View style={styles.titles}>

            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    </View>
  );
};

export default CarItem