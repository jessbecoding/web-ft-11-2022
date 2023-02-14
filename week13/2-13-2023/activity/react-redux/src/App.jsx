import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutMovie from "./components/AboutMovie";
import Counter from "./components/Counter";
import HomePage from "./components/HomePage";
import Movies from "./components/Movies";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/aboutmovie" element={<AboutMovie />} />
    </Routes>
  );
}

export default App;
