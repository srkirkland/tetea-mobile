import React from "react";

import analytics from "../util/analytics";
import formData from "../navigation/forms/FormFourData.json";
import SubjectList from "../views/SubjectList";

export default function FormFourScreen(props) {
  const subjects = formData;

  const navigateToSubject = item => {
    analytics.track(analytics.events.SUBJECT_VIEWED, {
      form: item.form,
      name: item.name
    });
    props.navigation.navigate("subjectDetail", item);
  };

  return <SubjectList subjects={subjects} onPress={navigateToSubject} />;
}

FormFourScreen.navigationOptions = {
  title: "Form Four"
};
