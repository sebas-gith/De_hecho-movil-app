import React from "react"
import { Text, View, StyleSheet, Image, Alert, TouchableOpacity } from 'react-native'
import image from './assets/De_hecho.jpeg'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>De hecho</Text>
      <Image
        source={image}
        style={styles.image}
      />
      <TouchableOpacity
       onPress={() => Alert.alert('DE HECHO')}
       style={styles.button}
      >
        <Text style={styles.buttonText}>Presioname</Text>
      </TouchableOpacity>
    </View >
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "dodgerblue" },
  title: { fontSize: 50, color: "#fff", marginBottom: 50 },
  image: { width: 400, height: 400 },
  button: { backgroundColor: "tomato", padding: 10, marginTop: 10 },
  buttonText: {color: "#fff", fontWeight: 700}
})
export default App;