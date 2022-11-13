import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import React from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {

  // eslint-disable-next-line no-unused-vars
  const [mode, setMode] = useState('light') // check dark mode is enabled or not
  const [alert, setAlert] = useState(null); // to set alert message


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'blue';
      showAlert("dark", "success");
      document.title = "Text Utils > DARK Mode"

      // setInterval(() => {
      //   document.title = 'Text Utils is so AMAZING !!!'
      // }, 2000);

      // setInterval(() =>{
      //   document.title = 'Current Downloads : 500M'
      // }, 2200);

    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light", "success")
      document.title = "Text Utils > LIGHT Mode"

    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      alertType: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  return (
    <>
      {/* <Router> */}
        <Navbar mode={mode} toggleMode={toggleMode} title="TextUtils" homeText="Home" /*</>aboutText="About TextUtils"*/ searchText="Search"></Navbar>
        <Alert alert={alert}></Alert>
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path ="/about_textUtils" element = {<About title = 'About Us'></About>}></Route> */}
            {/* <Route exact path ="/" element = {<TextForm mode={mode} heading="Enter The Text To Analyze Below" showAlert={showAlert}></TextForm>}></Route> */}
          {/* </Routes> */}
          <TextForm mode={mode} heading="Enter The Text To Analyze Below" showAlert={showAlert}></TextForm>
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
