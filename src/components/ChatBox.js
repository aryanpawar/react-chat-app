import { useState } from "react";

export default function ChatBox({ user }) {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const changeHandler = (e) => {
    setMessage(e.target.value);
  };

  const clickHandler = (e) => {
    e.preventDefault();
    setMessages([...messages, message]);
    setMessage("");
  };

  return (
    user==="" ? <h3>Click on User's name to start chatting</h3> :
    <div>
      <h4>Chatting With : {user}</h4>
      <div className="container message-content">
        {messages.map((message) => {
          return <span className="message">{message}</span>;
        })}
      </div>

      <div className="container send-message-ui">
        <input
          type="text"
          value={message}
          onChange={changeHandler}
          className="form-control input-message"
          placeholder="Enter Message"
        />
        <button
          onClick={clickHandler}
          className="btn btn-success message-send-button"
        >
          Send
        </button>
      </div>
    </div>
  );
}
