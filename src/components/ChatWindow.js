import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import { useContext, useEffect, useState } from "react";
import ChatBox from "./ChatBox";

export default function ChatWindow() {
  const navigate = useNavigate();
  const username = useContext(UserContext);

  const [users, setUsers] = useState([]);
  const [chattingWith, setChattingWith] = useState("")

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .catch((error) => {
        console.log(error)
      });
  }, [])
  
  const handleClick = (e) => {
    setChattingWith(e.target.id);
  }

  return username === "" ? (
    <>
      <h1>Please Go To Homepage and Login</h1>
      <button className="btn btn-warning" onClick={() => navigate("/")}>
        Go To Homepage
      </button>
    </>
  ) : (
    <>
      <h4 className="my-3">Current user: {username}</h4>
      <div className="container w-75">
        <div className="row">
          <div className="col-3 friends-list-column card">
            <ul className="friends-list">
              {users.length === 0 ? (
                <h2>Friends Not Found</h2>
              ) : (
                users.map((user) => {
                  return (
                    <>
                      <li
                        onClick={handleClick}
                        key={user.id}
                        id={user.name}
                        className="friend-name"
                      >
                        {user.name}
                      </li>
                      <hr></hr>
                    </>
                  );
                })
              )}
            </ul>
          </div>
          <div className="col-7 chat-view card">
            <ChatBox user={chattingWith} />
          </div>
        </div>
      </div>
      <button className="btn btn-warning" onClick={() => navigate("/")}>
        Go To Homepage
      </button>
    </>
  );
}
