import React from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";

import config from "../navigation/forms/FormFour";

// show clickable subjects
function Subject(props) {
  return (
    <ListItem
      title={props.name}
      badge={{
        value: props.docs.length
      }}
      onPress={props.onPress}
      bottomDivider
      chevron
    />
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