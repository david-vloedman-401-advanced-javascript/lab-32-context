import React from "react";
import ToDo from "./components/todo/todo.js";
import SettingsContext  from './components/settings';
import AuthContext from './components/auth/context';
import Auth from './components/auth/auth';
import Login from './components/auth/login'


export default function App() {
  return (
    <>
      <SettingsContext>
        <Login />
        
          <ToDo />
        
      </SettingsContext>
    </>
  );
}
