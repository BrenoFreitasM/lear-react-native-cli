import { ScrollView, Text } from "react-native";

export default function App() {
  return (
    <ScrollView >
      <Text
        style={{ marginTop: 300, fontSize: 32 }}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium voluptates aperiam architecto, porro ea dolore saepe et. Provident molestias fugit obcaecati soluta non, at laborum magnam tempora doloribus, velit dolorum!
      </Text>

      <ScrollView horizontal>
      <Text
        style={{ fontSize: 32 }}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium voluptates aperiam architecto, porro ea dolore saepe et. Provident molestias fugit obcaecati soluta non, at laborum magnam tempora doloribus, velit dolorum!
      </Text>
    </ScrollView>
    </ScrollView>
  )
}