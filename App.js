import { Text, View } from "react-native";

export default function App() {
  return (
    <View style={{ width: 200}}>
      <Text
        style={{ marginTop: 300, fontSize: 32, width: 100 }}
        selectable
        selectionColor="#f00"
        numberOfLines={1}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing .
      </Text>
    </View>
  )
}