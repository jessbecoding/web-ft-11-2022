import { Route, Routes } from "react-router-dom";
import "./App.css";
import Account from "./components/Account/Account";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Homepage from "./components/Homepage/Homepage";
import PokemonHomepage from "./components/PokemonHomepage/PokemonHomepage";
import PokemonInfo from "./components/PokemonInfo/PokemonInfo";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import Navbar from "./components/Navbar/Navbar";
import AccountSettings from "./components/Account/AccountSettings";
import AccountUser from "./components/Account/AccountUser";
import { useState } from "react";
import pokemon from "./components/pokemonData";

function App() {
  const [user, setUser] = useState("Jess");
  const [pokemonData, setPokemon] = useState(pokemon);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/homepage" element={<Homepage user={user} />} />
        <Route path="/account">
          <Route index element={<Account user={user} />} />
          <Route path="settings" element={<AccountSettings user={user} />} />
          <Route path=":id" element={<AccountUser user={user} />} />
        </Route>
        <Route
          path="/pokemonhomepage"
          element={<PokemonHomepage pokemon={pokemonData} />}
        />
        <Route path="/pokemoninfo" element={<PokemonInfo />} />
        <Route path="/pokemoncard" element={<PokemonCard />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
