import { Text, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function Index() {
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.Hedaer}>
        <Text style={{ color: "white" }}>Calcultor Application</Text>
        <View>
          <Text style={{ color: "white" }}>1</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  Hedaer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
  },
});
