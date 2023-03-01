import React from "react";
import { CourseLayout } from "layouts";

function Course() {
  return (
    <CourseLayout>
      videoBody
      AppMain
      {/* <VideoWrapper></VideoWrapper>
      <AppMain></AppMain> // get a status update from SideBar */}
    </CourseLayout>
  );
}

export default Course;
