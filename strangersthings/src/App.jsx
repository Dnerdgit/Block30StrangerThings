import { useState } from "react";
import "./App.css";
import PostView from "./components/PostView";

function App() {
  const [token, setToken] = useState("here");

  return (
    <>
      <Posts token={token} />
      <PostView />
    </>
  );
}

export default App;
