import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/search" element={<Counter />} />
          <Route path="/favoritePets" element={<Movies />} />
          <Route path="/favoriteShelters" element={<AboutMovie />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
