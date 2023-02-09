import { useState } from "react";
import "./App.css";
import SignUp from "./components/SignUp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="grid h-screen place-items-center my-5">
      <SignUp />
    </div>
  );
}

export default App;
