import { Route, Routes } from "react-router-dom";
import "./App.css";
import Account from "./components/Account/Account";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import AccountSettings from "./components/Account/AccountSettings";
import AccountUser from "./components/Account/AccountUser";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("Joe");
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/homepage" element={<Homepage user={user} />} />
        <Route path="/account">
          <Route index element={<Account />} />
          <Route path="settings" element={<AccountSettings />} />
          <Route path=":id" element={<AccountUser />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
