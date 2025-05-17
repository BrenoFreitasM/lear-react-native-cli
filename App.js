import { Text, View } from "react-native";

export default function App() {
  return (
    <View >
      <Text
        style={{ marginTop: 300, fontSize: 32 }}
        selectable
        selectionColor="#f00"
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium voluptates aperiam architecto, porro ea dolore saepe et. Provident molestias fugit obcaecati soluta non, at laborum magnam tempora doloribus, velit dolorum!
      </Text>
    </View>
  )
}