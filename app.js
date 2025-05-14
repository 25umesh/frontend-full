import React, { useState } from "react";
import CodeEditor from "./components/editor";
import DebugButton from "./components/search";
import Debugger from "./components/debugger";

function App() {
  const [code, setCode] = useState("");
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Fix Forge Editor</h1>

      {/* Toggle Signup/Login */}
      <div className="mb-4">
        <button
          onClick={() => setIsSignup(false)}
          className={`mr-2 px-4 py-2 ${!isSignup ? "bg-blue-500 text-white" : "bg-gray-300"} rounded`}
        >
          Login
        </button>
        <button
          onClick={() => setIsSignup(true)}
          className={`px-4 py-2 ${isSignup ? "bg-blue-500 text-white" : "bg-gray-300"} rounded`}
        >
          Signup
        </button>
      </div>

      <CodeEditor onCodeChange={setCode} />
      <DebugButton code={code} />
      <Debugger />
    </div>
  );
}

export default App;
