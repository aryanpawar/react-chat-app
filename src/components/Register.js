import { useState } from "react";
import { useNavigate } from "react-router-dom";

async function registerUser(username, password) {
  const response = await fetch("http://localhost:5050/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  const data = await response.json();
  localStorage.setItem("token", data.token);

}

export default function Register({ username, setUsername }) {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    registerUser(username, password);
    navigate("/");
  }

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="container-fluid w-25 login-form my-4 rounded">
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="inputUsername" className="username">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="inputUsername"
            value={username}
            onChange={usernameChangeHandler}
            placeholder="Enter username"
            autoComplete="off"
            required
          />
          <label htmlFor="inputPassword" className="password">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            value={password}
            onChange={passwordChangeHandler}
            placeholder="Enter password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary my-2">
          Register
        </button>
      </form>

      <button
        onClick={() => {
          navigate("/");
        }}
        className="btn btn-light mb-2"
      >
        Login
      </button>
    </div>
  );
}
