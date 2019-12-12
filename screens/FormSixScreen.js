import React from "react";

import analytics from "../util/analytics";
import formData from "../navigation/forms/FormSixData.json";
import SubjectList from "../views/SubjectList";

export default function FormSixScreen(props) {
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

FormSixScreen.navigationOptions = {
  title: "Form Six"
};
