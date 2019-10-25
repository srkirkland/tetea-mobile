import React from "react";

import { ListItem } from "react-native-elements";

export default function Year(props) {
  return (
    <ListItem
      title={props.year}
      subtitle={props.name}
      onPress={props.onPress}
      rightIcon={{ name: "picture-as-pdf" }}
      bottomDivider
      chevron
    />
  );
}
