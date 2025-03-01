import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import styles  from './styles'
import StyledButton from '../Button';

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

        <View style={styles.buttonContainer}>
          <StyledButton
            type="primary" 
            content={"Custom Order"}
            onPress={() => {
              console.warn("Custom order was pressed")
            }}
            />

          <StyledButton
            type="Secondary" 
            content={"Existing Inventory"}
            onPress={() => {
              console.warn("Existing Inventory was pressed")
            }}
            />  
        </View>

    </View>
  );
};

export default CarItem  