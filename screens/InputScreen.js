import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput  } from 'react-native';

export default function InputScreen({ navigation }) {

  const [inputName, setInputname] = useState('')
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Input your name"
        onChangeText={newValue => setInputname(newValue)}
        value={inputName}
      />
      <Text>{inputName}</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
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
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
