import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

//  This My First Index Function
export default function Index() {
  const [Value, setValue] = useState("");

  const handleClear = () => {
    setValue("");
  };
  const handleResult = () => {
    const result = eval(Value.replace("÷", "/").replace("×", "*"));
    setValue(result.toString());
  };

  const handlePress = (Value: string) => {
    setValue((prev) => prev + Value);
  };

  const Buttons = [
    "C",
    "%",
    "÷",
    "=",
    "7",
    "8",
    "9",
    "×",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    "00",
    "000",
    ".",
  ];
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
        {/* Display */}
        <View style={styles.display}>
          <Text style={styles.displayText}>{Value || "0"}</Text>
        </View>

        {/* Buttons */}
        <View style={styles.buttons}>
          {Buttons.map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.button,
                item === "=" && styles.equalButton,
                ["+", "-", "×", "÷", "%"].includes(item) &&
                  styles.operatorButton,
              ]}
              onPress={() => {
                if (item === "C") {
                  handleClear();
                } else if (item === "=") {
                  handleResult();
                } else {
                  handlePress(item);
                }
              }}
            >
              <Text style={styles.buttonText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    </>
  );
}
//  This is  All Of the  Css Of My Application

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0F0F",
    justifyContent: "flex-end",
  },
  display: {
    padding: 20,
    alignItems: "flex-end",
  },
  displayText: {
    color: "#FFFFFF",
    fontSize: 48,
  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingBottom: 20,
  },
  button: {
    width: "25%",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 22,
  },
  operatorButton: {
    backgroundColor: "#1F2933",
    borderWidth: 1,
  },
  equalButton: {
    backgroundColor: "#b45715",
  },
});
