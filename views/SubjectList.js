import React from "react";
import { FlatList } from "react-native";

import Subject from "../views/Subject";

export default function SubjectList(props) {
  return (
    <FlatList
      data={props.subjects}
      renderItem={({ item }) => (
        <Subject {...item} onPress={_ => props.onPress(item)} />
      )}
      keyExtractor={item => item.id}
    />
  );
}
