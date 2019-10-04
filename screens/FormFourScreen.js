import React from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";

import config from "../navigation/forms/FormFour";

// show clickable subjects
function Subject(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text>{props.name}</Text>
    </TouchableOpacity>
  );
}

export default function FormFourScreen(props) {
  const { subjects } = config;

  const navigateToSubject = item => {
    props.navigation.navigate("subjectDetail", item);
  };

  return (
    <FlatList
      data={subjects}
      renderItem={({ item }) => (
        <Subject {...item} onPress={_ => navigateToSubject(item)} />
      )}
      keyExtractor={item => item.id}
    />
  );
}

FormFourScreen.navigationOptions = {
  title: "Form Four"
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 15,
//     backgroundColor: "#fff"
//   }
// });
