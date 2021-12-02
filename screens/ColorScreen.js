import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

export default function ColorScreen({ navigation }) {

  const [colors, setColors] = useState ([]);
  return (
    <View>
      <Text>Color Screen</Text>
      <StatusBar style="auto" />
      <Button style={styles.container}
        title="Add a color"
        onPress={() => {setColors([...colors, randomRgb()])}}
        />
        <FlatList
          keyExtractor={item => item}
          data={colors}
          renderItem={({item}) => {
            return <View style={{width: 50, height: 50, backgroundColor: item}} />
          }}          
        />
    </View>
  );
}

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4e4e4',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
