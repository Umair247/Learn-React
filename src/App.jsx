import React from 'react'
import MyButton from './components/MyButton';
// import Profile from './components/Profile';
import './App.css';
import Admin from './components/Admin';
import LoginForm from './components/LoginForm';


export default function App() {

  let content;
  let isLoggedIn = false
  if (isLoggedIn) {
    content = <Admin />;
  } else {
    content = <LoginForm />;
  }

  return (
    <>
      <div>
        {content}
      </div>
    </>
  );
}