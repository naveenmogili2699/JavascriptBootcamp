import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(0);
  const colorsArray = ["blue", "red", "green", "yellow"];
  const onClick = (item) => {
    if (item === "+") {
      if (count < 10) {
        setCount(count + 1);
      }
    } else {
      if (count > 0) {
        setCount(count - 1);
      }
    }
  };
  const onColorChange = () => {
    if (colorsArray.length - 1 === color) {
      setColor(0);
    } else {
      setColor(color + 1);
    }
  };
  return (
    <View style={[styles.app, { backgroundColor: colorsArray[color] }]}>
      <Text style={{ color: "white", fontSize: 30 }}>{count}</Text>
      <TouchableOpacity
        onPress={() => onClick("+")}
        style={{
          height: 50,
          width: 50,
          backgroundColor: "red",

          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Add</Text>
      </TouchableOpacity>
      <View style={{ marginTop: 10 }} />
      <TouchableOpacity
        onPress={() => onClick("-")}
        style={{
          height: 50,
          width: 50,
          backgroundColor: "red",

          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Less</Text>
      </TouchableOpacity>
      <View style={{ marginTop: 10 }} />
      <TouchableOpacity
        onPress={() => onColorChange()}
        style={{
          height: 50,
          width: 50,
          backgroundColor: "red",

          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Color Change</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
