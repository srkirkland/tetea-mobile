import React from "react";
import { FlatList } from "react-native";

import config from "../navigation/forms/FormFour";
import Subject from '../views/Subject';

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