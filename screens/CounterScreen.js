import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function CounterScreen({ navigation }) {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <Text>Counter Screen</Text>
      <StatusBar style="auto" />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
        />
        <Text>{counter}</Text>
        <Button
        title="+"
        onPress={() => setCounter(counter+1)}
        />
        <Button
        title="-"
        onPress={() => setCounter(counter-1)}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4e4e4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
