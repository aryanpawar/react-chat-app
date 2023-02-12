import { useNavigate } from "react-router-dom";

export default function Login({ username, setUsername }) {

  const navigate = useNavigate()

  function submitHandler(e) {
    e.preventDefault();
    navigate('chat-window')
  }

  const changeHandler = (e) => {
    setUsername(e.target.value);
  } 
  
  return (
    <div className="container-fluid w-25 login-form my-4 rounded">
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="inputUsername" className="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="inputUsername"
            value={username}
            onChange={changeHandler}
            placeholder="Enter username"
            autoComplete="off"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary my-2">
          Login
        </button>
      </form>
    </div>
  );
}