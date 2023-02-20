import { Route, Routes } from "react-router-dom";
import "../src/style/App.css";
import Homepage from "./components/Homepage";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import FavPets from "./components/FavPets";
import FavShelters from "./components/FavShelters";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/about/:pet/:petId" element={<About />} />
          <Route path="/favoritePets" element={<FavPets />} />
          <Route path="/favoriteShelters" element={<FavShelters />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
