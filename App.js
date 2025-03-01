import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CarItem from './components/CarItem';

export default function App() {
  const car = {
    image: require('./assets/images/ModelX.jpeg'),
    title: "Model X",
    subtitle: 'Starting at $69,420'
  }
  return (
    <View style={styles.container}>
      <CarItem  car={car} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
