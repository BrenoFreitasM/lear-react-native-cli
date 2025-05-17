import { ScrollView, Text } from "react-native";

export default function App() {
  return (
    <ScrollView
      alwaysBounceVertical={false}
      persistentScrollbar // * Android only
      indicatorStyle="default" // * IOS only
      showsVerticalScrollIndicator={false}
    >
      <ScrollView
        horizontal
        alwaysBounceHorizontal={false}
        persistentScrollbar // * Android only
        indicatorStyle="default" // * IOS only 
        showsHorizontalScrollIndicator={false}
      >
        <Text
          style={{ fontSize: 32, width: 1000 }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium voluptates aperiam architecto, porro ea dolore saepe et. Provident molestias !
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium voluptates aperiam architecto, porro ea dolore saepe et. Provident molestias !
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium voluptates aperiam architecto, porro ea dolore saepe et. Provident molestias !
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium voluptates aperiam architecto, porro ea dolore saepe et. Provident molestias !
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium voluptates aperiam architecto, porro ea dolore saepe et. Provident molestias !
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium voluptates aperiam architecto, porro ea dolore saepe et. Provident molestias !
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium voluptates aperiam architecto, porro ea dolore saepe et. Provident molestias !
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium voluptates aperiam architecto, porro ea dolore saepe et. Provident molestias !
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium voluptates aperiam architecto, porro ea dolore saepe et. Provident molestias !
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium voluptates aperiam architecto, porro ea dolore saepe et. Provident molestias !
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium voluptates aperiam architecto, porro ea dolore saepe et. Provident molestias !
        </Text>
      </ScrollView>
    </ScrollView>
  )
}