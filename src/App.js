import { BrowserRouter, Route, Routes } from "react-router-dom";
import ZoomCard from "./components/zoom/ZoomCard";
import StreamingView from "./components/StreamingView/StreamingView";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StreamingView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
