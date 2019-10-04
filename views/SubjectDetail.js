import React from "react";

import { Text } from "react-native";

export default function SubjectDetail(props) {
  const subject = props.navigation.state.params;

  console.log("subject detail", props);
  return <Text>{subject.name}</Text>;
}

SubjectDetail.navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.name,
    };
  };
