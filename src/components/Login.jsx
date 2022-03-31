import React, {useState} from "react";

function Login() {
  const [input, setInput] = useState("")
  
  return (
    <div className="sub-page">
      <h1>Login</h1>
      <form>
        <input type="text" value={input} placeholder="Create a Username" />
        <button>Submit!</button>
      </form>
    </div>
  );
}

export default Login;
