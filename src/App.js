import React from 'react';
import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Login from './components/Login';
import { Route,Routes } from 'react-router-dom';
import ChatWindow from './components/ChatWindow';
import Register from './components/Register';

export const UserContext = React.createContext()

function App() {

  const [username, setUsername] = useState("")

  return (
    <div className="App">
      <NavBar />
      <UserContext.Provider value={username}>
        <Routes>
          <Route
            path="/"
            element={<Login username={username} setUsername={setUsername} />}
          />
          <Route
            path="register"
            element={<Register username={username} setUsername={setUsername} />}
          />
          <Route path="chat-window" element={<ChatWindow />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
