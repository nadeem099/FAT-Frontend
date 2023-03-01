import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Classroom, VideoLectures, Course } from "pages";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="classroom" element={<Classroom />}>
          <Route index element={<VideoLectures />} />
          <Route path="chat" element={<>chat</>} />
        </Route>
        <Route
          path=":username/courses/:coursename/learn/:content-type/:content-num"
          element={<Course />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
