import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SearchReasult from "./components/SearchReasult";
import { AppContext } from "./utils/ContextApi";

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/:query/:startIndex" element={<SearchReasult />} />
        </Routes>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
