import React from "react";

import analytics from '../util/analytics';
import config from "../navigation/forms/FormFour";
import SubjectList from "../views/SubjectList";

export default function FormFourScreen(props) {
  const { subjects } = config;

  const navigateToSubject = item => {
    analytics.track(analytics.events.SUBJECT_VIEWED, { form: 4, name: item.name });
    props.navigation.navigate("subjectDetail", item);
  };

  return <SubjectList subjects={subjects} onPress={navigateToSubject} />;
}

FormFourScreen.navigationOptions = {
  title: "Form Four"
};
