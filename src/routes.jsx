import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Classroom, VideoLectures } from "pages";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="classroom" element={<Classroom />}>
          <Route index element={<VideoLectures />} />
          <Route path="chat" element={<>chat</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
