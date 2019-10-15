import React from "react";

import config from "../navigation/forms/FormFour";
import SubjectList from "../views/SubjectList";

export default function FormFourScreen(props) {
  const { subjects } = config;

  const navigateToSubject = item => {
    props.navigation.navigate("subjectDetail", item);
  };

  return <SubjectList subjects={subjects} onPress={navigateToSubject} />;
}

FormFourScreen.navigationOptions = {
  title: "Form Four"
};
