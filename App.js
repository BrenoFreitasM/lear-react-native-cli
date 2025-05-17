import { Text, View } from "react-native";

export default function App() {
  return (
    <View>
      <Text
        style={{ marginTop: 300, fontSize: 32 }}
        selectable
        selectionColor="#f00"
      >
        {'Oi JsStack!'.slice(0,4)}...
      </Text>
    </View>
  )
}