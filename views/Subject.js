import React from "react";
import { ListItem } from "react-native-elements";

// show clickable subjects
export default function Subject(props) {
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
